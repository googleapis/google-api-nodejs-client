// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import generatorUtils from './generator_utils';
import * as async from 'async';
import * as swig from 'swig';
import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import * as url from 'url';
import * as util from 'util';
import { js_beautify } from 'js-beautify';
import * as DefaultTransporter from 'google-auth-library/lib/transporters';
import * as minimist from 'minimist';

const handleError = generatorUtils.handleError;
const argv = minimist(process.argv.slice(2));
const args = argv._;

const DISCOVERY_URL = argv['discovery-url'] ? argv['discovery-url'] : (
  args.length ? args[0] : 'https://www.googleapis.com/discovery/v1/apis/'
);
const FRAGMENT_URL = 'https://storage.googleapis.com/apisnippets-staging/public/';

const API_TEMPLATE = './templates/api-endpoint.ts';
const BEAUTIFY_OPTIONS = {
  'indent_size': 2,
  'indent_char': ' ',
  'eol': '\n',
  'indent_level': 0,
  'indent_with_tabs': false,
  'preserve_newlines': true,
  'max_preserve_newlines': 2,
  'jslint_happy': false,
  'space_after_anon_function': true,
  'brace_style': 'collapse',
  'keep_array_indentation': false,
  'keep_function_indentation': true,
  'space_before_conditional': true,
  'break_chained_methods': false,
  'eval_code': false,
  'unescape_strings': false,
  'wrap_line_length': 0,
  'wrap_attributes': 'auto',
  'wrap_attributes_indent_size': 4,
  'end_with_newline': true
};
const RESERVED_PARAMS = ['resource', 'media', 'auth'];
const templateContents = fs.readFileSync(API_TEMPLATE, { encoding: 'utf8' });

export default class Generator {

  private _transporter = new DefaultTransporter();
  private _requestQueue;

  /**
   * A multi-line string is turned into one line.
   *
   * @private
   * @param  {string} str String to process
   * @return {string}     Single line string processed
   */
  private oneLine (str: string) {
    return str.replace(/\n/g, ' ');
  }

  /**
   * Clean a string of comment tags.
   *
   * @private
   * @param  {string} str String to process
   * @return {string}     Single line string processed
   */
  private cleanComments (str: string) {
    // Convert /* into /x and */ into x/
    return str.replace(/\*\//g, 'x/').replace(/\/\*/g, '/x');
  }

  /**
   * Returns the list of names of APIS
   *
   * @private
   * @param  {object} items Object of api endpoints
   * @return {array}        Array of api names
   */
  private getAPIs (items) {
    const apis = [];
    for (const i in items) {
      apis.push(items[i].name);
    }
    return apis;
  }

  private getPathParams (params) {
    const pathParams = [];
    if (typeof params !== 'object') {
      params = {};
    }
    Object.keys(params).forEach(function (key) {
      if (params[key].location === 'path') {
        pathParams.push(key);
      }
    });
    return pathParams;
  }

  private getSafeParamName (param) {
    if (RESERVED_PARAMS.indexOf(param) !== -1) {
      return param + '_';
    }
    return param;
  }

  private _options: any;

  private _state = {};

  /**
   * Generator for generating API endpoints
   *
   * @private
   * @param {object} options Options for generation
   * @this {Generator}
   */
  constructor (options) {
    this._options = options || {};
    
    /**
     * This API can generate thousands of concurrent HTTP requests.  
     * If left to happen while generating all APIs, things get very unstable.  
     * This makes sure we only ever have 10 concurrent network requests, and 
     * adds retry logic. 
     */
    this._requestQueue = async.queue((opts, callback) => {
      async.retry(3, () => {
        return this._transporter.request(opts, callback);
      });
    }, 10);

    swig.setFilter('buildurl', generatorUtils.buildurl);
    swig.setFilter('getAPIs', this.getAPIs);
    swig.setFilter('oneLine', this.oneLine);
    swig.setFilter('cleanComments', this.cleanComments);
    swig.setFilter('getPathParams', this.getPathParams);
    swig.setFilter('getSafeParamName', this.getSafeParamName);
    swig.setFilter('cleanPaths', (str) => {
      return str.replace(/\/\*\//gi, '/x/').replace(/\/\*`/gi, '/x');
    });
    swig.setDefaults({ loader: swig.loaders.fs(path.join(__dirname, '..', 'templates')) });
  }

  /**
   * Add a requests to the rate limited queue. 
   * @param opts Options to pass to the default transporter
   * @param callback 
   */
  private makeRequest (opts, callback) {
    this._requestQueue.push(opts, callback);
  } 

  /**
   * Log output of generator
   * Works just like console.log
   */
  private log (...args) {
    if (this._options && this._options.debug) {
      console.log.apply(this, arguments);
    }
  };

  /**
   * Write to the state log, which is used for debugging.  
   * @param id DiscoveryRestUrl of the endpoint to log
   * @param message 
   */
  private logResult (id, message) {
    if (!this._state[id]) {
      this._state[id] = [];
    }
    this._state[id].push(message);
  }

  /**
   * Generate all APIs and write to files.
   *
   * @param {function} callback Callback when all APIs have been generated
   * @throws {Error} If there is an error generating any of the APIs
   */
  public generateAllAPIs (callback: Function) {
    const headers = this._options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
    this.makeRequest({
      uri: DISCOVERY_URL,
      headers: headers
    }, (err, resp) => {
      if (err) {
        return handleError(err, callback);
      }
      const apis = resp.items;

      const queue = async.queue((api: any, next) => {
        this.log('Generating API for %s...', api.id);
        this.logResult(api.discoveryRestUrl, 'Attempting first generateAPI call...');
        async.retry(3, this.generateAPI.bind(this, api.discoveryRestUrl), (err, results) => {
          if (err) {
            this.logResult(api.discoveryRestUrl, `GenerateAPI call failed with error: ${err}, moving on.`);
            console.error(`Failed to generate API: ${api.id}`);
            console.log(api.id + "\n-----------\n" + (util as any).inspect(this._state[api.discoveryRestUrl], { maxArrayLength: null }) + '\n');
          } else {
            this.logResult(api.discoveryRestUrl, `GenerateAPI call success!`);
          }
          this._state[api.discoveryRestUrl].done = true;
          next(err, results);
        });
      }, 3);

      apis.forEach((api) => {
        queue.push(api);
      });

      queue.drain = (err:Error) => {
        console.log((util as any).inspect(this._state, { maxArrayLength: null }));
        if (callback) callback(err);
      };
    });
  };

  /**
   * Given a discovery doc, parse it and recursively iterate over the various embedded links.
   * @param api 
   * @param schema 
   * @param path 
   * @param tasks 
   */
  private getFragmentsForSchema (apiDiscoveryUrl, schema, path, tasks) {
    if (schema.methods) {
      for (const methodName in schema.methods) {
        const methodSchema = schema.methods[methodName];
        methodSchema.sampleUrl = path + '.' + methodName + '.frag.json';
        tasks.push((cb) => {
          this.logResult(apiDiscoveryUrl, `Making fragment request...`);
          this.logResult(apiDiscoveryUrl, methodSchema.sampleUrl);
          this.makeRequest({
            uri: methodSchema.sampleUrl
          }, (err, response) => {
            if (err) {
              this.logResult(apiDiscoveryUrl, `Fragment request err: ${err}`);
              return cb(err);
            }
            this.logResult(apiDiscoveryUrl, `Fragment request complete.`);
            if (response && response.codeFragment && response.codeFragment['Node.js']) {
              let fragment = response.codeFragment['Node.js'].fragment;
              fragment = fragment.replace(/\/\*/gi, '/<');
              fragment = fragment.replace(/\*\//gi, '>/');
              fragment = fragment.replace(/`\*/gi, '`<');
              fragment = fragment.replace(/\*`/gi, '>`');
              const lines = fragment.split('\n');
              lines.forEach((_line, i) => {
                lines[i] = '*' + (_line ? ' ' + lines[i] : '');
              });
              fragment = lines.join('\n');
              methodSchema.fragment = fragment;
            }
            cb();
          });
        });
      }
    }
    if (schema.resources) {
      for (const resourceName in schema.resources) {
        this.getFragmentsForSchema(
          apiDiscoveryUrl,
          schema.resources[resourceName],
          path + '.' + resourceName,
          tasks
        );
      }
    }
  }

  /**
   * Generate API file given discovery URL
   * @param  {String} apiDiscoveryUri URL or filename of discovery doc for API
   * @param {function} callback Callback when successful write of API
   * @throws {Error} If there is an error generating the API.
   */
  public generateAPI (apiDiscoveryUrl, callback: Function) {
    let _generate = (err: Error, resp) => {
      this.logResult(apiDiscoveryUrl, `Discovery doc request complete.`);
      if (err) {
        handleError(err, callback);
        return;
      }
      const tasks = [];
      this.getFragmentsForSchema(
        apiDiscoveryUrl,
        resp,
        FRAGMENT_URL + resp.name + '/' + resp.version + '/0/' + resp.name,
        tasks
      );

      // e.g. apis/drive/v2.js
      const exportFilename = path.join(__dirname, '../apis', resp.name, resp.version + '.ts');
      let contents;
      this.logResult(apiDiscoveryUrl, `Generating templates...`);
      async.waterfall([
        (cb) => {
          this.logResult(apiDiscoveryUrl, `Step 1...`);
          async.parallel(tasks, cb);
        },
        (results, cb) => {
          this.logResult(apiDiscoveryUrl, `Step 2...`);
          const result = swig.render(templateContents, { locals: resp });
          contents = js_beautify(result, BEAUTIFY_OPTIONS);
          mkdirp(path.dirname(exportFilename), cb);
        },
        (dir, cb) => {
          this.logResult(apiDiscoveryUrl, `Step 3...`);
          fs.writeFile(exportFilename, contents, { encoding: 'utf8' }, cb);
        }
      ], (err) => {
        if (err) {
          handleError(err, callback);
          return;
        }
        this.logResult(apiDiscoveryUrl, `Template generation complete.`);
        callback(null, exportFilename);
      });
    }

    const parts = url.parse(apiDiscoveryUrl);
    if (apiDiscoveryUrl && !parts.protocol) {
      this.log('Reading from file ' + apiDiscoveryUrl);
      try {
        return _generate(null, JSON.parse(fs.readFileSync(apiDiscoveryUrl, {
          encoding: 'utf-8'
        })));
      } catch (err) {
        return handleError(err, callback);
      }
    } else {
      this.logResult(apiDiscoveryUrl, `Starting discovery doc request...`);
      this.logResult(apiDiscoveryUrl, apiDiscoveryUrl);
      this.makeRequest({
        uri: apiDiscoveryUrl
      }, _generate);
    }
  };
}

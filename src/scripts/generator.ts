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

import * as async from 'async';
import * as fs from 'fs';
import {DefaultTransporter} from 'google-auth-library/lib/transporters';
import * as minimist from 'minimist';
import * as mkdirp from 'mkdirp';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import * as url from 'url';
import * as util from 'util';
import {buildurl, handleError} from './generator_utils';

const argv = minimist(process.argv.slice(2));
const cliArgs = argv._;

const DISCOVERY_URL = argv['discovery-url'] ?
    argv['discovery-url'] :
    (cliArgs.length ? cliArgs[0] :
                      'https://www.googleapis.com/discovery/v1/apis/');
const FRAGMENT_URL =
    'https://storage.googleapis.com/apisnippets-staging/public/';

const srcPath = path.join(__dirname, '../../../src');
const TEMPLATES_DIR = path.join(srcPath, 'templates');
const API_TEMPLATE = path.join(TEMPLATES_DIR, 'api-endpoint.njk');
const INDEX_TEMPLATE = path.join(TEMPLATES_DIR, 'index.njk');
const RESERVED_PARAMS = ['resource', 'media', 'auth'];

export interface GeneratorOptions {
  debug?: boolean;
  includePrivate?: boolean;
}

interface Api {
  discoveryRestUrl?: string;
  id?: string;
}

export class Generator {
  private transporter = new DefaultTransporter();
  private requestQueue;
  private env: nunjucks.Environment;

  /**
   * A multi-line string is turned into one line.
   *
   * @private
   * @param  {string} str String to process
   * @return {string}     Single line string processed
   */
  private oneLine(str?: string) {
    return str ? str.replace(/\n/g, ' ') : '';
  }

  /**
   * Clean a string of comment tags.
   *
   * @private
   * @param  {string} str String to process
   * @return {string}     Single line string processed
   */
  private cleanComments(str?: string) {
    // Convert /* into /x and */ into x/
    return str ? str.replace(/\*\//g, 'x/').replace(/\/\*/g, '/x') : '';
  }

  private getPathParams(params) {
    const pathParams = [];
    if (typeof params !== 'object') {
      params = {};
    }
    Object.keys(params).forEach(key => {
      if (params[key].location === 'path') {
        pathParams.push(key);
      }
    });
    return pathParams;
  }

  private getSafeParamName(param) {
    if (RESERVED_PARAMS.indexOf(param) !== -1) {
      return param + '_';
    }
    return param;
  }

  private options: GeneratorOptions;

  private state = {};

  /**
   * Generator for generating API endpoints
   *
   * @private
   * @param {object} options Options for generation
   * @this {Generator}
   */
  constructor(options: GeneratorOptions = {}) {
    this.options = options;

    /**
     * This API can generate thousands of concurrent HTTP requests.
     * If left to happen while generating all APIs, things get very unstable.
     * This makes sure we only ever have 10 concurrent network requests, and
     * adds retry logic.
     */
    this.requestQueue = async.queue((opts, callback) => {
      async.retry(3, () => {
        return this.transporter.request(opts, callback);
      });
    }, 10);

    this.env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(TEMPLATES_DIR), {trimBlocks: true});
    this.env.addFilter('buildurl', buildurl);
    this.env.addFilter('oneLine', this.oneLine);
    this.env.addFilter('cleanComments', this.cleanComments);
    this.env.addFilter('getPathParams', this.getPathParams);
    this.env.addFilter('getSafeParamName', this.getSafeParamName);
    this.env.addFilter('cleanPaths', (str) => {
      return str ? str.replace(/\/\*\//gi, '/x/').replace(/\/\*`/gi, '/x') : '';
    });
  }

  /**
   * Add a requests to the rate limited queue.
   * @param opts Options to pass to the default transporter
   * @param callback
   */
  private makeRequest(opts, callback) {
    this.requestQueue.push(opts, callback);
  }

  /**
   * Log output of generator
   * Works just like console.log
   */
  private log(...args) {
    if (this.options && this.options.debug) {
      console.log.apply(this, arguments);
    }
  }

  /**
   * Write to the state log, which is used for debugging.
   * @param id DiscoveryRestUrl of the endpoint to log
   * @param message
   */
  private logResult(id, message) {
    if (!this.state[id]) {
      this.state[id] = [];
    }
    this.state[id].push(message);
  }

  /**
   * Generate all APIs and write to files.
   *
   * @param {function} callback Callback when all APIs have been generated
   * @throws {Error} If there is an error generating any of the APIs
   */
  generateAllAPIs(callback: Function) {
    const headers = this.options.includePrivate ? {} : {'X-User-Ip': '0.0.0.0'};
    this.makeRequest({uri: DISCOVERY_URL, headers}, (err, resp) => {
      if (err) {
        return handleError(err, callback);
      }
      const apis: Api[] = resp.items;

      const queue = async.queue((api: Api, next) => {
        this.log('Generating API for %s...', api.id);
        this.logResult(
            api.discoveryRestUrl, 'Attempting first generateAPI call...');
        async.retry(
            3, this.generateAPI.bind(this, api.discoveryRestUrl),
            (e, results) => {
              if (e) {
                this.logResult(
                    api.discoveryRestUrl,
                    `GenerateAPI call failed with error: ${e}, moving on.`);
                console.error(`Failed to generate API: ${api.id}`);
                console.log(
                    api.id + '\n-----------\n' +
                    util.inspect(
                        this.state[api.discoveryRestUrl],
                        {maxArrayLength: null}) +
                    '\n');
              } else {
                this.logResult(
                    api.discoveryRestUrl, `GenerateAPI call success!`);
              }
              this.state[api.discoveryRestUrl].done = true;
              next(e, results);
            });
      }, 3);


      apis.forEach((api) => {
        queue.push(api);
      });

      queue.drain = (drainError: Error) => {
        console.log(util.inspect(this.state, {maxArrayLength: null}));
        if (drainError && callback) {
          callback(drainError);
          return;
        }
        this.generateIndex(callback);
      };
    });
  }

  generateIndex(callback: Function) {
    const apis = {};
    const apisPath = path.join(srcPath, 'apis');
    const indexPath = path.join(apisPath, 'index.ts');

    // Dynamically discover available APIs
    fs.readdirSync(apisPath).forEach(file => {
      const filePath = path.join(apisPath, file);
      if (!fs.statSync(filePath).isDirectory()) {
        return;
      }
      apis[file] = {};
      fs.readdirSync(path.join(apisPath, file)).forEach(version => {
        const parts = path.parse(version);
        if (!version.endsWith('.d.ts') && parts.ext === '.ts') {
          apis[file][version] = parts.name;
        }
      });
    });
    const result = this.env.render('index.njk', {apis});
    fs.writeFile(indexPath, result, {encoding: 'utf8'}, err => {
      if (callback) callback(err);
    });
  }

  /**
   * Given a discovery doc, parse it and recursively iterate over the various
   * embedded links.
   * @param api
   * @param schema
   * @param apiPath
   * @param tasks
   */
  private getFragmentsForSchema(apiDiscoveryUrl, schema, apiPath, tasks) {
    if (schema.methods) {
      for (const methodName in schema.methods) {
        if (schema.methods.hasOwnProperty(methodName)) {
          const methodSchema = schema.methods[methodName];
          methodSchema.sampleUrl = apiPath + '.' + methodName + '.frag.json';
          tasks.push((cb) => {
            this.logResult(apiDiscoveryUrl, `Making fragment request...`);
            this.logResult(apiDiscoveryUrl, methodSchema.sampleUrl);
            this.makeRequest({uri: methodSchema.sampleUrl}, (err, response) => {
              if (err) {
                this.logResult(apiDiscoveryUrl, `Fragment request err: ${err}`);
                if (!err.message ||
                    err.message.indexOf('AccessDenied') === -1) {
                  return cb(err);
                } else {
                  this.logResult(apiDiscoveryUrl, 'Ignoring error.');
                }
              }
              this.logResult(apiDiscoveryUrl, `Fragment request complete.`);
              if (response && response.codeFragment &&
                  response.codeFragment['Node.js']) {
                let fragment = response.codeFragment['Node.js'].fragment;
                fragment = fragment.replace(/\/\*/gi, '/<');
                fragment = fragment.replace(/\*\//gi, '>/');
                fragment = fragment.replace(/`\*/gi, '`<');
                fragment = fragment.replace(/\*`/gi, '>`');
                const lines = fragment.split('\n');
                lines.forEach((line, i) => {
                  lines[i] = '*' + (line ? ' ' + lines[i] : '');
                });
                fragment = lines.join('\n');
                methodSchema.fragment = fragment;
              }
              cb();
            });
          });
        }
      }
    }
    if (schema.resources) {
      for (const resourceName in schema.resources) {
        if (schema.resources.hasOwnProperty(resourceName)) {
          this.getFragmentsForSchema(
              apiDiscoveryUrl, schema.resources[resourceName],
              apiPath + '.' + resourceName, tasks);
        }
      }
    }
  }

  /**
   * Generate API file given discovery URL
   * @param  {String} apiDiscoveryUri URL or filename of discovery doc for API
   * @param {function} callback Callback when successful write of API
   * @throws {Error} If there is an error generating the API.
   */
  generateAPI(apiDiscoveryUrl, callback: Function) {
    const generate = (err: Error, resp) => {
      this.logResult(apiDiscoveryUrl, `Discovery doc request complete.`);
      if (err) {
        handleError(err, callback);
        return;
      }
      const tasks = [];
      this.getFragmentsForSchema(
          apiDiscoveryUrl, resp,
          FRAGMENT_URL + resp.name + '/' + resp.version + '/0/' + resp.name,
          tasks);

      // e.g. apis/drive/v2.js
      const exportFilename =
          path.join(srcPath, 'apis', resp.name, resp.version + '.ts');
      let contents;
      this.logResult(apiDiscoveryUrl, `Generating templates...`);
      async.waterfall(
          [
            (cb) => {
              this.logResult(apiDiscoveryUrl, `Step 1...`);
              async.parallel(tasks, cb);
            },
            (results, cb) => {
              this.logResult(apiDiscoveryUrl, `Step 2...`);
              contents = this.env.render(API_TEMPLATE, {api: resp});
              mkdirp(path.dirname(exportFilename), cb);
            },
            (dir, cb) => {
              this.logResult(apiDiscoveryUrl, `Step 3...`);
              fs.writeFile(exportFilename, contents, {encoding: 'utf8'}, cb);
            }
          ],
          (e) => {
            if (e) {
              handleError(e, callback);
              return;
            }
            this.logResult(apiDiscoveryUrl, `Template generation complete.`);
            callback(null, exportFilename);
          });
    };

    const parts = url.parse(apiDiscoveryUrl);
    if (apiDiscoveryUrl && !parts.protocol) {
      this.log('Reading from file ' + apiDiscoveryUrl);
      try {
        return generate(
            null,
            JSON.parse(fs.readFileSync(apiDiscoveryUrl, {encoding: 'utf-8'})));
      } catch (err) {
        return handleError(err, callback);
      }
    } else {
      this.logResult(apiDiscoveryUrl, `Starting discovery doc request...`);
      this.logResult(apiDiscoveryUrl, apiDiscoveryUrl);
      this.makeRequest({uri: apiDiscoveryUrl}, generate);
    }
  }
}

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

import {AxiosRequestConfig} from 'axios';
import * as fs from 'fs';
import {DefaultTransporter} from 'google-auth-library';
import * as minimist from 'minimist';
import * as mkdirp from 'mkdirp';
import * as nunjucks from 'nunjucks';
import * as Q from 'p-queue';
import * as path from 'path';
import * as pify from 'pify';
import * as url from 'url';
import * as util from 'util';
import {buildurl, handleError} from './generator_utils';

const argv = minimist(process.argv.slice(2));
const cliArgs = argv._;
const fsp = pify(fs);

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

interface ApiResponse {
  items: Api[];
}

interface FragmentResponse {
  // tslint:disable-next-line no-any
  codeFragment: any;
}

interface Schema {
  name: string;
  version: string;
}

export class Generator {
  private transporter = new DefaultTransporter();
  private requestQueue = new Q({concurrency: 50});
  private env: nunjucks.Environment;

  /**
   * A multi-line string is turned into one line.
   * @param str String to process
   * @return Single line string processed
   */
  private oneLine(str?: string) {
    return str ? str.replace(/\n/g, ' ') : '';
  }

  /**
   * Clean a string of comment tags.
   * @param str String to process
   * @return Single line string processed
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
   * @param options Options for generation
   */
  constructor(options: GeneratorOptions = {}) {
    this.options = options;
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
   */
  private request<T>(opts: AxiosRequestConfig) {
    return this.requestQueue.add(() => {
      return this.transporter.request<T>(opts);
    });
  }

  /**
   * Log output of generator. Works just like console.log.
   */
  private log(...args: string[]) {
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
   */
  async generateAllAPIs() {
    const headers = this.options.includePrivate ? {} : {'X-User-Ip': '0.0.0.0'};
    const res = await this.request<ApiResponse>({url: DISCOVERY_URL, headers});
    const apis = res.data.items;
    const queue = new Q({concurrency: 10});
    console.log(`Generating ${apis.length} APIs...`);
    queue.addAll(apis.map(api => {
      return async () => {
        this.log('Generating API for %s...', api.id);
        this.logResult(
            api.discoveryRestUrl, 'Attempting first generateAPI call...');
        try {
          const results = await this.generateAPI(api.discoveryRestUrl);
          this.logResult(api.discoveryRestUrl, `GenerateAPI call success!`);
        } catch (e) {
          this.logResult(
              api.discoveryRestUrl,
              `GenerateAPI call failed with error: ${e}, moving on.`);
          console.error(`Failed to generate API: ${api.id}`);
          console.log(
              api.id + '\n-----------\n' +
              util.inspect(
                  this.state[api.discoveryRestUrl], {maxArrayLength: null}) +
              '\n');
        }
        this.state[api.discoveryRestUrl].done = true;
      };
    }));
    try {
      await queue.onIdle();
      await this.generateIndex();
    } catch (e) {
      console.log(util.inspect(this.state, {maxArrayLength: null}));
    }
  }

  async generateIndex() {
    const apis = {};
    const apisPath = path.join(srcPath, 'apis');
    const indexPath = path.join(apisPath, 'index.ts');

    // Dynamically discover available APIs
    const files: string[] = await fsp.readdir(apisPath);
    files.forEach(async file => {
      const filePath = path.join(apisPath, file);
      if (!(await fsp.stat(filePath)).isDirectory()) {
        return;
      }
      apis[file] = {};
      const files: string[] = await fsp.readdir(path.join(apisPath, file));
      files.forEach(version => {
        const parts = path.parse(version);
        if (!version.endsWith('.d.ts') && parts.ext === '.ts') {
          apis[file][version] = parts.name;
        }
      });
    });
    const result = this.env.render('index.njk', {apis});
    await fsp.writeFile(indexPath, result, {encoding: 'utf8'});
  }

  /**
   * Given a discovery doc, parse it and recursively iterate over the various
   * embedded links.
   */
  private getFragmentsForSchema(
      apiDiscoveryUrl, schema, apiPath, tasks: Array<(() => Promise<void>)>) {
    if (schema.methods) {
      for (const methodName in schema.methods) {
        if (schema.methods.hasOwnProperty(methodName)) {
          const methodSchema = schema.methods[methodName];
          methodSchema.sampleUrl = apiPath + '.' + methodName + '.frag.json';
          tasks.push(async () => {
            this.logResult(apiDiscoveryUrl, `Making fragment request...`);
            this.logResult(apiDiscoveryUrl, methodSchema.sampleUrl);
            try {
              const res = await this.request<FragmentResponse>(
                  {url: methodSchema.sampleUrl});
              this.logResult(apiDiscoveryUrl, `Fragment request complete.`);
              if (res.data && res.data.codeFragment &&
                  res.data.codeFragment['Node.js']) {
                let fragment: string =
                    res.data.codeFragment['Node.js'].fragment;
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
            } catch (err) {
              this.logResult(apiDiscoveryUrl, `Fragment request err: ${err}`);
              if (!err.message || err.message.indexOf('AccessDenied') === -1) {
                throw err;
              }
              this.logResult(apiDiscoveryUrl, 'Ignoring error.');
            }
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
   * @param apiDiscoveryUri URL or filename of discovery doc for API
   */
  async generateAPI(apiDiscoveryUrl) {
    const parts = url.parse(apiDiscoveryUrl);
    if (apiDiscoveryUrl && !parts.protocol) {
      this.log('Reading from file ' + apiDiscoveryUrl);
      const file: string =
          await fsp.readFile(apiDiscoveryUrl, {encoding: 'utf-8'});
      await this.generate(apiDiscoveryUrl, JSON.parse(file));
    } else {
      this.logResult(apiDiscoveryUrl, `Starting discovery doc request...`);
      this.logResult(apiDiscoveryUrl, apiDiscoveryUrl);
      const res = await this.request<Schema>({url: apiDiscoveryUrl});
      await this.generate(apiDiscoveryUrl, res.data);
    }
  }

  private async generate(apiDiscoveryUrl: string, schema: Schema) {
    this.logResult(apiDiscoveryUrl, `Discovery doc request complete.`);
    const tasks = new Array<() => Promise<void>>();
    this.getFragmentsForSchema(
        apiDiscoveryUrl, schema,
        FRAGMENT_URL + schema.name + '/' + schema.version + '/0/' + schema.name,
        tasks);

    // e.g. apis/drive/v2.js
    const exportFilename =
        path.join(srcPath, 'apis', schema.name, schema.version + '.ts');
    this.logResult(apiDiscoveryUrl, `Generating templates...`);
    this.logResult(apiDiscoveryUrl, `Step 1...`);
    await Promise.all(tasks.map(t => t()));
    this.logResult(apiDiscoveryUrl, `Step 2...`);
    const contents = this.env.render(API_TEMPLATE, {api: schema});
    await pify(mkdirp)(path.dirname(exportFilename));
    this.logResult(apiDiscoveryUrl, `Step 3...`);
    await fsp.writeFile(exportFilename, contents, {encoding: 'utf8'});
    this.logResult(apiDiscoveryUrl, `Template generation complete.`);
    return exportFilename;
  }
}

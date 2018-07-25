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

import * as fs from 'fs';
import {DefaultTransporter} from 'google-auth-library';
import * as pify from 'pify';
import * as url from 'url';
import * as util from 'util';
import {GlobalOptions, ServiceOptions} from './api';
import {createAPIRequest} from './apirequest';
import {Endpoint} from './endpoint';
import {Schema, Schemas} from './schema';

export type EndpointCreator = (options: GlobalOptions, google: {}) => Endpoint;

const fsp = pify(fs);

export interface DiscoveryOptions {
  includePrivate?: boolean;
  debug?: boolean;
}

export class Discovery {
  private transporter = new DefaultTransporter();
  private options: DiscoveryOptions;

  /**
   * Discovery for discovering API endpoints
   *
   * @param options Options for discovery
   */
  constructor(options: DiscoveryOptions) {
    this.options = options || {};
  }

  /**
   * Generate and Endpoint from an endpoint schema object.
   *
   * @param schema The schema from which to generate the Endpoint.
   * @return A function that creates an endpoint.
   */
  private makeEndpoint(schema: Schema) {
    return (options: {}) => {
      const ep = new Endpoint(options);
      ep.applySchema(ep, schema, schema, ep);
      return ep;
    };
  }

  /**
   * Log output of generator. Works just like console.log
   */
  private log(...args: string[]) {
    if (this.options && this.options.debug) {
      console.log.apply(this, arguments);
    }
  }

  /**
   * Generate all APIs and return as in-memory object.
   * @param discoveryUrl
   */
  async discoverAllAPIs(discoveryUrl: string): Promise<{}> {
    const headers = this.options.includePrivate ? {} : {'X-User-Ip': '0.0.0.0'};
    const res =
        await this.transporter.request<Schemas>({url: discoveryUrl, headers});
    const items = res.data.items;
    const apis = await Promise.all(items.map(async api => {
      const endpointCreator = await this.discoverAPI(api.discoveryRestUrl);
      return {api, endpointCreator};
    }));

    const versionIndex:
        {[index: string]: {[index: string]: EndpointCreator}} = {};
    // tslint:disable-next-line no-any
    const apisIndex: {[index: string]: any} = {};
    for (const set of apis) {
      if (!apisIndex[set.api.name]) {
        versionIndex[set.api.name] = {};
        apisIndex[set.api.name] = (options: ServiceOptions|string) => {
          const type = typeof options;
          let version: string;
          if (type === 'string') {
            version = options as string;
            options = {};
          } else if (type === 'object') {
            version = (options as ServiceOptions).version!;
            delete (options as ServiceOptions).version;
          } else {
            throw new Error('Argument error: Accepts only string or object');
          }
          try {
            const endpointCreator = versionIndex[set.api.name][version];
            const ep =
                // tslint:disable-next-line: no-any
                set.endpointCreator(options as GlobalOptions, this as any);
            return Object.freeze(ep);  // create new & freeze
          } catch (e) {
            throw new Error(util.format(
                'Unable to load endpoint %s("%s"): %s', set.api.name, version,
                e.message));
          }
        };
      }
      versionIndex[set.api.name][set.api.version] = set.endpointCreator;
    }
    return apisIndex;
  }

  /**
   * Generate API file given discovery URL
   *
   * @param apiDiscoveryUrl URL or filename of discovery doc for API
   * @returns A promise that resolves with a function that creates the endpoint
   */
  async discoverAPI(apiDiscoveryUrl: string|
                    {url: string}): Promise<EndpointCreator> {
    if (typeof apiDiscoveryUrl === 'string') {
      const parts = url.parse(apiDiscoveryUrl);
      if (apiDiscoveryUrl && !parts.protocol) {
        this.log('Reading from file ' + apiDiscoveryUrl);
        const file = await fsp.readFile(apiDiscoveryUrl, {encoding: 'utf8'});
        return this.makeEndpoint(JSON.parse(file));
      } else {
        this.log('Requesting ' + apiDiscoveryUrl);
        const res =
            await this.transporter.request<Schema>({url: apiDiscoveryUrl});
        return this.makeEndpoint(res.data);
      }
    } else {
      const options = apiDiscoveryUrl;
      this.log('Requesting ' + options.url);
      const url = options.url;
      delete options.url;
      const parameters = {
        options: {url, method: 'GET'},
        requiredParams: [],
        pathParams: [],
        params: options,
        context: {google: {_options: {}}, _options: {}}
      };
      const pcr = pify(createAPIRequest);
      const res = await pcr(parameters);
      return this.makeEndpoint(res.data);
    }
  }
}

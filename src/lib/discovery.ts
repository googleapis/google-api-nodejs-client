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

import {APIRequestMethodParams, createAPIRequest} from './apirequest';
import {Endpoint} from './endpoint';

const fsp = pify(fs);

export type EndpointCreator = (options: {}) => Endpoint;

interface DiscoverAPIsResponse {
  items: API[];
}

export interface API {
  discoveryRestUrl: string;
  api: EndpointCreator;
  name: string;
  version: string;
}

export interface DiscoveryOptions {
  includePrivate?: boolean;
  debug?: boolean;
}

export interface APIRequest {
  auth: {};
  basePath: string;
  baseUrl: string;
  batchPath: string;
  description: string;
  discoveryVersion: string;
  documentationLink: string;
  etag: string;
  icons: {};
  id: string;
  kind: string;
  name: string;
  ownerDomain: string;
  ownerName: string;
  parameters: {};
  protocol: string;
  resources: {};
  revision: string;
  rootUrl: string;
  schemas: {};
  servicePath: string;
  title: string;
  version: string;
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
  private makeEndpoint(schema: APIRequest): EndpointCreator {
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
  async discoverAllAPIs(discoveryUrl: string) {
    const headers = this.options.includePrivate ? {} : {'X-User-Ip': '0.0.0.0'};
    const res = await this.transporter.request<DiscoverAPIsResponse>(
        {url: discoveryUrl, headers});
    const items = res.data.items;
    const apis = await Promise.all(items.map(async api => {
      const newApi = await this.discoverAPI(api.discoveryRestUrl);
      api.api = newApi;
      return api;
    }));

    const versionIndex = {};
    const apisIndex = {};
    for (const api of apis) {
      if (!apisIndex[api.name]) {
        versionIndex[api.name] = {};
        apisIndex[api.name] = (options) => {
          const type = typeof options;
          let version: string;
          if (type === 'string') {
            version = options;
            options = {};
          } else if (type === 'object') {
            version = options.version;
            delete options.version;
          } else {
            throw new Error('Argument error: Accepts only string or object');
          }
          try {
            const endpointCreator: EndpointCreator =
                versionIndex[api.name][version];
            const ep = endpointCreator(options);
            ep.google = this;          // for drive.google.transporter
            return Object.freeze(ep);  // create new & freeze
          } catch (e) {
            throw new Error(util.format(
                'Unable to load endpoint %s("%s"): %s', api.name, version,
                e.message));
          }
        };
      }
      versionIndex[api.name][api.version] = api.api;
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
                    APIRequestMethodParams): Promise<EndpointCreator> {
    if (typeof apiDiscoveryUrl === 'string') {
      const parts = url.parse(apiDiscoveryUrl);
      if (apiDiscoveryUrl && !parts.protocol) {
        this.log('Reading from file ' + apiDiscoveryUrl);
        const file = await fsp.readFile(apiDiscoveryUrl, {encoding: 'utf8'});
        return this.makeEndpoint(JSON.parse(file));
      } else {
        this.log('Requesting ' + apiDiscoveryUrl);
        const res =
            await this.transporter.request<APIRequest>({url: apiDiscoveryUrl});
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

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
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import * as fs from 'fs';
import {DefaultTransporter} from 'google-auth-library';
import {Schema} from 'inspector';
import * as url from 'url';
import * as util from 'util';

import {buildurl, handleError} from '../scripts/generator_utils';

import {APIRequestMethodParams, APIRequestParams, createAPIRequest} from './apirequest';
import {Endpoint} from './endpoint';

export type EndpointCreator = (options: {}) => Endpoint;

interface DiscoverAPIsResponse {
  items: API[];
}

export interface API {
  discoveryRestUrl: string;
  api: EndpointCreator;
}

interface DiscoveryOptions {
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
   * @param {object} options Options for discovery
   */
  constructor(options) {
    this.options = options || {};
  }

  /**
   * Generate and Endpoint from an endpoint schema object.
   *
   * @param schema The schema from which to generate the Endpoint.
   * @return A function that creates an endpoint.
   */
  private makeEndpoint(schema: APIRequest): EndpointCreator {
    // // Creating an object, so Pascal case is appropriate.
    // const that = this;
    // // tslint:disable-next-line
    // const Endpoint = function(options) {
    //   const self = this;
    //   self._options = options || {};
    //   that.applySchema(self, schema.data, schema.data, self);
    // };
    // return Endpoint;
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
   * @param callback Callback when all APIs have been generated
   */
  discoverAllAPIs(
      discoveryUrl: string, callback: (err: Error|null, api?: {}) => void) {
    const headers = this.options.includePrivate ? {} : {'X-User-Ip': '0.0.0.0'};
    this.transporter.request<DiscoverAPIsResponse>({url: discoveryUrl, headers})
        .then(res => {
          const items = res.data.items;
          async.parallel(
              items.map(api => {
                return (cb: (err: Error|null, api?: API) => void) => {
                  this.discoverAPI(api.discoveryRestUrl, (e, newApi) => {
                    if (e) {
                      return cb(e);
                    }
                    api.api = newApi;
                    cb(null, api);
                  });
                };
              }),
              (e: Error|null, apis) => {
                if (e) {
                  return callback(e);
                }

                const versionIndex = {};
                const apisIndex = {};

                apis.forEach(api => {
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
                        throw new Error(
                            'Argument error: Accepts only string or object');
                      }
                      try {
                        const endpointCreator: EndpointCreator =
                            versionIndex[api.name][version];
                        const ep = endpointCreator(options);
                        ep.google = this;  // for drive.google.transporter
                        return Object.freeze(ep);  // create new & freeze
                      } catch (e) {
                        throw new Error(util.format(
                            'Unable to load endpoint %s("%s"): %s', api.name,
                            version, e.message));
                      }
                    };
                  }
                  versionIndex[api.name][api.version] = api.api;
                });

                return callback(null, apisIndex);
              });
        })
        .catch(e => {
          return handleError(e, callback);
        });
  }

  /**
   * Generate API file given discovery URL
   *
   * @param apiDiscoveryUrl URL or filename of discovery doc for API
   * @param callback Callback when successful write of API
   */
  async discoverAPI(
      apiDiscoveryUrl: string|APIRequestMethodParams,
      callback: (err: Error|null, endpointCreator: EndpointCreator) => void) {
    const _generate = (err: Error|null, res?: APIRequest) => {
      if (err) {
        return handleError(err, callback);
      }
      return callback(null, this.makeEndpoint(res!));
    };

    if (typeof apiDiscoveryUrl === 'string') {
      const parts = url.parse(apiDiscoveryUrl);

      if (apiDiscoveryUrl && !parts.protocol) {
        this.log('Reading from file ' + apiDiscoveryUrl);
        try {
          return fs.readFile(
              apiDiscoveryUrl, {encoding: 'utf8'}, (err, file) => {
                _generate(err, JSON.parse(file));
              });
        } catch (err) {
          return handleError(err, callback);
        }
      } else {
        this.log('Requesting ' + apiDiscoveryUrl);
        this.transporter.request<APIRequest>(
            {url: apiDiscoveryUrl}, (err, res) => {
              if (err || (res && !res.data)) {
                return _generate(err);
              }
              return _generate(err, res!.data);
            });
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
      createAPIRequest<APIRequest>(parameters, (err, res) => {
        if (err) {
          return _generate(err);
        } else {
          if (res) {
            return _generate(null, res.data);
          }
        }
      });
    }
  }
}

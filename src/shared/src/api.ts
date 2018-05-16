// Copyright 2018, Google, LLC.
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

import {AxiosAdapter, AxiosProxyConfig, AxiosRequestConfig, AxiosResponse, AxiosTransformer, CancelToken} from 'axios';
import {OAuth2Client} from 'google-auth-library';
import {Endpoint} from './endpoint';

// tslint:disable-next-line no-any
export interface APIRequestParams<T = any> {
  options: AxiosRequestConfig;
  params: T;
  requiredParams: string[];
  pathParams: string[];
  context: APIRequestContext;
  mediaUrl?: string|null;
}

export interface GoogleConfigurable {
  _options: GlobalOptions;
}

export interface APIRequestContext {
  google?: GoogleConfigurable;
  _options: GlobalOptions;
}

/**
 * This interface is a mix of the AxiosRequestConfig options
 * and our `auth: OAuth2Client|string` options.  We need to redefine
 * the interface here because the `auth` property already exists
 * on AxiosRequestConfig, and uses an entirely different type.
 */
export interface GlobalOptions {
  url?: string;
  method?: string;
  baseURL?: string;
  transformRequest?: AxiosTransformer|AxiosTransformer[];
  transformResponse?: AxiosTransformer|AxiosTransformer[];
  // tslint:disable-next-line no-any
  headers?: any;
  // tslint:disable-next-line no-any
  params?: any;
  // tslint:disable-next-line no-any
  paramsSerializer?: (params: any) => string;
  // tslint:disable-next-line no-any
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: OAuth2Client|string;
  responseType?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  // tslint:disable-next-line no-any
  onUploadProgress?: (progressEvent: any) => void;
  // tslint:disable-next-line no-any
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  // tslint:disable-next-line no-any
  httpAgent?: any;
  // tslint:disable-next-line no-any
  httpsAgent?: any;
  proxy?: AxiosProxyConfig|false;
  cancelToken?: CancelToken;
}

export interface MethodOptions extends AxiosRequestConfig {
  rootUrl?: string;
}
export interface ServiceOptions extends GlobalOptions {
  version?: string;
}

export type BodyResponseCallback<T> =
    (err: Error|null, res?: AxiosResponse<T>|null) => void;

// tslint:disable-next-line: no-any
export type APIEndpoint = Readonly<Endpoint&any>;

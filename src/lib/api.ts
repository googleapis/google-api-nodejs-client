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

import {AxiosRequestConfig} from 'axios';
import {OAuth2Client} from 'google-auth-library/build/src/auth/oauth2client';
import {OutgoingHttpHeaders} from 'http';
import * as stream from 'stream';

import {Endpoint} from './endpoint';
import {SchemaParameters} from './schema';

export interface APIRequestParams {
  options: AxiosRequestConfig;
  params: APIRequestMethodParams;
  requiredParams: string[];
  pathParams: string[];
  context: APIRequestContext;
  mediaUrl?: string|null;
}

export interface APIRequestContext {
  google: {_options: APIRequestContextOptions;};
  _options: APIRequestContextOptions;
}

export interface APIRequestContextOptions {
  params?: SchemaParameters;
  auth?: OAuth2Client|string|null;
}

export interface APIRequestMethodParams {
  // tslint:disable-next-line: no-any
  [index: string]: any;
  url?: string;
  media?: {body?: string|stream.Readable; mimeType?: string;};
  resource?: {mimeType?: string;};
  key?: string;
  uploadType?: string;
  auth?: OAuth2Client|string|null;
  headers?: OutgoingHttpHeaders;
}

// tslint:disable-next-line: no-any
export type APIEndpoint = Readonly<Endpoint&any>;

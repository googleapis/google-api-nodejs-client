// Copyright 2020 Google LLC
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

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {apikeys_v2} from './v2';

export const VERSIONS = {
  v2: apikeys_v2.Apikeys,
};

export function apikeys(version: 'v2'): apikeys_v2.Apikeys;
export function apikeys(options: apikeys_v2.Options): apikeys_v2.Apikeys;
export function apikeys<T = apikeys_v2.Apikeys>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | apikeys_v2.Options
) {
  return getAPI<T>('apikeys', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {apikeys_v2};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

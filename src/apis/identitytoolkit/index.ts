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
import {identitytoolkit_v2} from './v2';
import {identitytoolkit_v3} from './v3';

export const VERSIONS = {
  v2: identitytoolkit_v2.Identitytoolkit,
  v3: identitytoolkit_v3.Identitytoolkit,
};

export function identitytoolkit(
  version: 'v2'
): identitytoolkit_v2.Identitytoolkit;
export function identitytoolkit(
  options: identitytoolkit_v2.Options
): identitytoolkit_v2.Identitytoolkit;
export function identitytoolkit(
  version: 'v3'
): identitytoolkit_v3.Identitytoolkit;
export function identitytoolkit(
  options: identitytoolkit_v3.Options
): identitytoolkit_v3.Identitytoolkit;
export function identitytoolkit<
  T = identitytoolkit_v2.Identitytoolkit | identitytoolkit_v3.Identitytoolkit,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | identitytoolkit_v2.Options
    | 'v3'
    | identitytoolkit_v3.Options
) {
  return getAPI<T>('identitytoolkit', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {identitytoolkit_v2};
export {identitytoolkit_v3};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

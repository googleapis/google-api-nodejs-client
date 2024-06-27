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
import {meet_v2} from './v2';

export const VERSIONS = {
  v2: meet_v2.Meet,
};

export function meet(version: 'v2'): meet_v2.Meet;
export function meet(options: meet_v2.Options): meet_v2.Meet;
export function meet<T = meet_v2.Meet>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | meet_v2.Options
) {
  return getAPI<T>('meet', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {meet_v2};
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

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
import {orgpolicy_v2} from './v2';

export const VERSIONS = {
  v2: orgpolicy_v2.Orgpolicy,
};

export function orgpolicy(version: 'v2'): orgpolicy_v2.Orgpolicy;
export function orgpolicy(
  options: orgpolicy_v2.Options
): orgpolicy_v2.Orgpolicy;
export function orgpolicy<T = orgpolicy_v2.Orgpolicy>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | orgpolicy_v2.Options
) {
  return getAPI<T>('orgpolicy', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {orgpolicy_v2};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

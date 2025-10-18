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
import {bigquerydatapolicy_v1} from './v1';
import {bigquerydatapolicy_v2} from './v2';

export const VERSIONS = {
  v1: bigquerydatapolicy_v1.Bigquerydatapolicy,
  v2: bigquerydatapolicy_v2.Bigquerydatapolicy,
};

export function bigquerydatapolicy(
  version: 'v1'
): bigquerydatapolicy_v1.Bigquerydatapolicy;
export function bigquerydatapolicy(
  options: bigquerydatapolicy_v1.Options
): bigquerydatapolicy_v1.Bigquerydatapolicy;
export function bigquerydatapolicy(
  version: 'v2'
): bigquerydatapolicy_v2.Bigquerydatapolicy;
export function bigquerydatapolicy(
  options: bigquerydatapolicy_v2.Options
): bigquerydatapolicy_v2.Bigquerydatapolicy;
export function bigquerydatapolicy<
  T =
    | bigquerydatapolicy_v1.Bigquerydatapolicy
    | bigquerydatapolicy_v2.Bigquerydatapolicy,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | bigquerydatapolicy_v1.Options
    | 'v2'
    | bigquerydatapolicy_v2.Options
) {
  return getAPI<T>('bigquerydatapolicy', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {bigquerydatapolicy_v1};
export {bigquerydatapolicy_v2};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

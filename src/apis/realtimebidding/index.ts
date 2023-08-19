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
import {realtimebidding_v1} from './v1';
import {realtimebidding_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: realtimebidding_v1.Realtimebidding,
  v1alpha: realtimebidding_v1alpha.Realtimebidding,
};

export function realtimebidding(
  version: 'v1'
): realtimebidding_v1.Realtimebidding;
export function realtimebidding(
  options: realtimebidding_v1.Options
): realtimebidding_v1.Realtimebidding;
export function realtimebidding(
  version: 'v1alpha'
): realtimebidding_v1alpha.Realtimebidding;
export function realtimebidding(
  options: realtimebidding_v1alpha.Options
): realtimebidding_v1alpha.Realtimebidding;
export function realtimebidding<
  T =
    | realtimebidding_v1.Realtimebidding
    | realtimebidding_v1alpha.Realtimebidding,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | realtimebidding_v1.Options
    | 'v1alpha'
    | realtimebidding_v1alpha.Options
) {
  return getAPI<T>('realtimebidding', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {realtimebidding_v1};
export {realtimebidding_v1alpha};
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

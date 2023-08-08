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
import {firebaseappcheck_v1} from './v1';
import {firebaseappcheck_v1beta} from './v1beta';

export const VERSIONS = {
  v1: firebaseappcheck_v1.Firebaseappcheck,
  v1beta: firebaseappcheck_v1beta.Firebaseappcheck,
};

export function firebaseappcheck(
  version: 'v1'
): firebaseappcheck_v1.Firebaseappcheck;
export function firebaseappcheck(
  options: firebaseappcheck_v1.Options
): firebaseappcheck_v1.Firebaseappcheck;
export function firebaseappcheck(
  version: 'v1beta'
): firebaseappcheck_v1beta.Firebaseappcheck;
export function firebaseappcheck(
  options: firebaseappcheck_v1beta.Options
): firebaseappcheck_v1beta.Firebaseappcheck;
export function firebaseappcheck<
  T =
    | firebaseappcheck_v1.Firebaseappcheck
    | firebaseappcheck_v1beta.Firebaseappcheck,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | firebaseappcheck_v1.Options
    | 'v1beta'
    | firebaseappcheck_v1beta.Options
) {
  return getAPI<T>('firebaseappcheck', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {firebaseappcheck_v1};
export {firebaseappcheck_v1beta};
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

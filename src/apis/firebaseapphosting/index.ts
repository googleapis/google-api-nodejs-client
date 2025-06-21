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
import {firebaseapphosting_v1} from './v1';
import {firebaseapphosting_v1beta} from './v1beta';

export const VERSIONS = {
  v1: firebaseapphosting_v1.Firebaseapphosting,
  v1beta: firebaseapphosting_v1beta.Firebaseapphosting,
};

export function firebaseapphosting(
  version: 'v1'
): firebaseapphosting_v1.Firebaseapphosting;
export function firebaseapphosting(
  options: firebaseapphosting_v1.Options
): firebaseapphosting_v1.Firebaseapphosting;
export function firebaseapphosting(
  version: 'v1beta'
): firebaseapphosting_v1beta.Firebaseapphosting;
export function firebaseapphosting(
  options: firebaseapphosting_v1beta.Options
): firebaseapphosting_v1beta.Firebaseapphosting;
export function firebaseapphosting<
  T =
    | firebaseapphosting_v1.Firebaseapphosting
    | firebaseapphosting_v1beta.Firebaseapphosting,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | firebaseapphosting_v1.Options
    | 'v1beta'
    | firebaseapphosting_v1beta.Options
) {
  return getAPI<T>('firebaseapphosting', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {firebaseapphosting_v1};
export {firebaseapphosting_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

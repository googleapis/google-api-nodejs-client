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
import {firebaseml_v1} from './v1';
import {firebaseml_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1: firebaseml_v1.Firebaseml,
  v1beta2: firebaseml_v1beta2.Firebaseml,
};

export function firebaseml(version: 'v1'): firebaseml_v1.Firebaseml;
export function firebaseml(
  options: firebaseml_v1.Options
): firebaseml_v1.Firebaseml;
export function firebaseml(version: 'v1beta2'): firebaseml_v1beta2.Firebaseml;
export function firebaseml(
  options: firebaseml_v1beta2.Options
): firebaseml_v1beta2.Firebaseml;
export function firebaseml<
  T = firebaseml_v1.Firebaseml | firebaseml_v1beta2.Firebaseml,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | firebaseml_v1.Options
    | 'v1beta2'
    | firebaseml_v1beta2.Options
) {
  return getAPI<T>('firebaseml', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {firebaseml_v1};
export {firebaseml_v1beta2};
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

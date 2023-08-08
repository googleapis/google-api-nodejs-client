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
import {firestore_v1} from './v1';
import {firestore_v1beta1} from './v1beta1';
import {firestore_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1: firestore_v1.Firestore,
  v1beta1: firestore_v1beta1.Firestore,
  v1beta2: firestore_v1beta2.Firestore,
};

export function firestore(version: 'v1'): firestore_v1.Firestore;
export function firestore(
  options: firestore_v1.Options
): firestore_v1.Firestore;
export function firestore(version: 'v1beta1'): firestore_v1beta1.Firestore;
export function firestore(
  options: firestore_v1beta1.Options
): firestore_v1beta1.Firestore;
export function firestore(version: 'v1beta2'): firestore_v1beta2.Firestore;
export function firestore(
  options: firestore_v1beta2.Options
): firestore_v1beta2.Firestore;
export function firestore<
  T =
    | firestore_v1.Firestore
    | firestore_v1beta1.Firestore
    | firestore_v1beta2.Firestore,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | firestore_v1.Options
    | 'v1beta1'
    | firestore_v1beta1.Options
    | 'v1beta2'
    | firestore_v1beta2.Options
) {
  return getAPI<T>('firestore', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {firestore_v1};
export {firestore_v1beta1};
export {firestore_v1beta2};
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

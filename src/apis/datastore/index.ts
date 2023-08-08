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
import {datastore_v1} from './v1';
import {datastore_v1beta1} from './v1beta1';
import {datastore_v1beta3} from './v1beta3';

export const VERSIONS = {
  v1: datastore_v1.Datastore,
  v1beta1: datastore_v1beta1.Datastore,
  v1beta3: datastore_v1beta3.Datastore,
};

export function datastore(version: 'v1'): datastore_v1.Datastore;
export function datastore(
  options: datastore_v1.Options
): datastore_v1.Datastore;
export function datastore(version: 'v1beta1'): datastore_v1beta1.Datastore;
export function datastore(
  options: datastore_v1beta1.Options
): datastore_v1beta1.Datastore;
export function datastore(version: 'v1beta3'): datastore_v1beta3.Datastore;
export function datastore(
  options: datastore_v1beta3.Options
): datastore_v1beta3.Datastore;
export function datastore<
  T =
    | datastore_v1.Datastore
    | datastore_v1beta1.Datastore
    | datastore_v1beta3.Datastore,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | datastore_v1.Options
    | 'v1beta1'
    | datastore_v1beta1.Options
    | 'v1beta3'
    | datastore_v1beta3.Options
) {
  return getAPI<T>('datastore', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {datastore_v1};
export {datastore_v1beta1};
export {datastore_v1beta3};
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

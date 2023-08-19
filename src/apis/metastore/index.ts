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
import {metastore_v1} from './v1';
import {metastore_v1alpha} from './v1alpha';
import {metastore_v1beta} from './v1beta';

export const VERSIONS = {
  v1: metastore_v1.Metastore,
  v1alpha: metastore_v1alpha.Metastore,
  v1beta: metastore_v1beta.Metastore,
};

export function metastore(version: 'v1'): metastore_v1.Metastore;
export function metastore(
  options: metastore_v1.Options
): metastore_v1.Metastore;
export function metastore(version: 'v1alpha'): metastore_v1alpha.Metastore;
export function metastore(
  options: metastore_v1alpha.Options
): metastore_v1alpha.Metastore;
export function metastore(version: 'v1beta'): metastore_v1beta.Metastore;
export function metastore(
  options: metastore_v1beta.Options
): metastore_v1beta.Metastore;
export function metastore<
  T =
    | metastore_v1.Metastore
    | metastore_v1alpha.Metastore
    | metastore_v1beta.Metastore,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | metastore_v1.Options
    | 'v1alpha'
    | metastore_v1alpha.Options
    | 'v1beta'
    | metastore_v1beta.Options
) {
  return getAPI<T>('metastore', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {metastore_v1};
export {metastore_v1alpha};
export {metastore_v1beta};
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

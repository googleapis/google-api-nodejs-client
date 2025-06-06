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
import {alloydb_v1} from './v1';
import {alloydb_v1alpha} from './v1alpha';
import {alloydb_v1beta} from './v1beta';

export const VERSIONS = {
  v1: alloydb_v1.Alloydb,
  v1alpha: alloydb_v1alpha.Alloydb,
  v1beta: alloydb_v1beta.Alloydb,
};

export function alloydb(version: 'v1'): alloydb_v1.Alloydb;
export function alloydb(options: alloydb_v1.Options): alloydb_v1.Alloydb;
export function alloydb(version: 'v1alpha'): alloydb_v1alpha.Alloydb;
export function alloydb(
  options: alloydb_v1alpha.Options
): alloydb_v1alpha.Alloydb;
export function alloydb(version: 'v1beta'): alloydb_v1beta.Alloydb;
export function alloydb(
  options: alloydb_v1beta.Options
): alloydb_v1beta.Alloydb;
export function alloydb<
  T = alloydb_v1.Alloydb | alloydb_v1alpha.Alloydb | alloydb_v1beta.Alloydb,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | alloydb_v1.Options
    | 'v1alpha'
    | alloydb_v1alpha.Options
    | 'v1beta'
    | alloydb_v1beta.Options
) {
  return getAPI<T>('alloydb', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {alloydb_v1};
export {alloydb_v1alpha};
export {alloydb_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

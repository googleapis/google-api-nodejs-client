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
import {bigtableadmin_v1} from './v1';
import {bigtableadmin_v2} from './v2';

export const VERSIONS = {
  v1: bigtableadmin_v1.Bigtableadmin,
  v2: bigtableadmin_v2.Bigtableadmin,
};

export function bigtableadmin(version: 'v1'): bigtableadmin_v1.Bigtableadmin;
export function bigtableadmin(
  options: bigtableadmin_v1.Options
): bigtableadmin_v1.Bigtableadmin;
export function bigtableadmin(version: 'v2'): bigtableadmin_v2.Bigtableadmin;
export function bigtableadmin(
  options: bigtableadmin_v2.Options
): bigtableadmin_v2.Bigtableadmin;
export function bigtableadmin<
  T = bigtableadmin_v1.Bigtableadmin | bigtableadmin_v2.Bigtableadmin,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | bigtableadmin_v1.Options
    | 'v2'
    | bigtableadmin_v2.Options
) {
  return getAPI<T>('bigtableadmin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {bigtableadmin_v1};
export {bigtableadmin_v2};
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

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
import {sqladmin_v1} from './v1';
import {sqladmin_v1beta4} from './v1beta4';

export const VERSIONS = {
  v1: sqladmin_v1.Sqladmin,
  v1beta4: sqladmin_v1beta4.Sqladmin,
};

export function sqladmin(version: 'v1'): sqladmin_v1.Sqladmin;
export function sqladmin(options: sqladmin_v1.Options): sqladmin_v1.Sqladmin;
export function sqladmin(version: 'v1beta4'): sqladmin_v1beta4.Sqladmin;
export function sqladmin(
  options: sqladmin_v1beta4.Options
): sqladmin_v1beta4.Sqladmin;
export function sqladmin<T = sqladmin_v1.Sqladmin | sqladmin_v1beta4.Sqladmin>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | sqladmin_v1.Options
    | 'v1beta4'
    | sqladmin_v1beta4.Options
) {
  return getAPI<T>('sqladmin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {sqladmin_v1};
export {sqladmin_v1beta4};
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

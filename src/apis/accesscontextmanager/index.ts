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
import {accesscontextmanager_v1} from './v1';
import {accesscontextmanager_v1beta} from './v1beta';

export const VERSIONS = {
  v1: accesscontextmanager_v1.Accesscontextmanager,
  v1beta: accesscontextmanager_v1beta.Accesscontextmanager,
};

export function accesscontextmanager(
  version: 'v1'
): accesscontextmanager_v1.Accesscontextmanager;
export function accesscontextmanager(
  options: accesscontextmanager_v1.Options
): accesscontextmanager_v1.Accesscontextmanager;
export function accesscontextmanager(
  version: 'v1beta'
): accesscontextmanager_v1beta.Accesscontextmanager;
export function accesscontextmanager(
  options: accesscontextmanager_v1beta.Options
): accesscontextmanager_v1beta.Accesscontextmanager;
export function accesscontextmanager<
  T =
    | accesscontextmanager_v1.Accesscontextmanager
    | accesscontextmanager_v1beta.Accesscontextmanager,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | accesscontextmanager_v1.Options
    | 'v1beta'
    | accesscontextmanager_v1beta.Options
) {
  return getAPI<T>('accesscontextmanager', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {accesscontextmanager_v1};
export {accesscontextmanager_v1beta};
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

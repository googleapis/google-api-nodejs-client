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
import {doubleclickbidmanager_v1_1} from './v1.1';
import {doubleclickbidmanager_v1} from './v1';
import {doubleclickbidmanager_v2} from './v2';

export const VERSIONS = {
  'v1.1': doubleclickbidmanager_v1_1.Doubleclickbidmanager,
  v1: doubleclickbidmanager_v1.Doubleclickbidmanager,
  v2: doubleclickbidmanager_v2.Doubleclickbidmanager,
};

export function doubleclickbidmanager(
  version: 'v1.1'
): doubleclickbidmanager_v1_1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  options: doubleclickbidmanager_v1_1.Options
): doubleclickbidmanager_v1_1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  version: 'v1'
): doubleclickbidmanager_v1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  options: doubleclickbidmanager_v1.Options
): doubleclickbidmanager_v1.Doubleclickbidmanager;
export function doubleclickbidmanager(
  version: 'v2'
): doubleclickbidmanager_v2.Doubleclickbidmanager;
export function doubleclickbidmanager(
  options: doubleclickbidmanager_v2.Options
): doubleclickbidmanager_v2.Doubleclickbidmanager;
export function doubleclickbidmanager<
  T =
    | doubleclickbidmanager_v1_1.Doubleclickbidmanager
    | doubleclickbidmanager_v1.Doubleclickbidmanager
    | doubleclickbidmanager_v2.Doubleclickbidmanager,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1.1'
    | doubleclickbidmanager_v1_1.Options
    | 'v1'
    | doubleclickbidmanager_v1.Options
    | 'v2'
    | doubleclickbidmanager_v2.Options
) {
  return getAPI<T>('doubleclickbidmanager', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {doubleclickbidmanager_v1_1};
export {doubleclickbidmanager_v1};
export {doubleclickbidmanager_v2};
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

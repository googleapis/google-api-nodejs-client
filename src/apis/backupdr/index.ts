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
import {backupdr_v1} from './v1';

export const VERSIONS = {
  v1: backupdr_v1.Backupdr,
};

export function backupdr(version: 'v1'): backupdr_v1.Backupdr;
export function backupdr(options: backupdr_v1.Options): backupdr_v1.Backupdr;
export function backupdr<T = backupdr_v1.Backupdr>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | backupdr_v1.Options
) {
  return getAPI<T>('backupdr', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {backupdr_v1};
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

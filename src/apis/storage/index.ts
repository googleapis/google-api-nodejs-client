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
import {storage_v1} from './v1';
import {storage_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1: storage_v1.Storage,
  v1beta2: storage_v1beta2.Storage,
};

export function storage(version: 'v1'): storage_v1.Storage;
export function storage(options: storage_v1.Options): storage_v1.Storage;
export function storage(version: 'v1beta2'): storage_v1beta2.Storage;
export function storage(
  options: storage_v1beta2.Options
): storage_v1beta2.Storage;
export function storage<T = storage_v1.Storage | storage_v1beta2.Storage>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | storage_v1.Options
    | 'v1beta2'
    | storage_v1beta2.Options
) {
  return getAPI<T>('storage', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {storage_v1};
export {storage_v1beta2};
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

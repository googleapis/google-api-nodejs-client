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
import {drive_v2} from './v2';
import {drive_v3} from './v3';

export const VERSIONS = {
  v2: drive_v2.Drive,
  v3: drive_v3.Drive,
};

export function drive(version: 'v2'): drive_v2.Drive;
export function drive(options: drive_v2.Options): drive_v2.Drive;
export function drive(version: 'v3'): drive_v3.Drive;
export function drive(options: drive_v3.Options): drive_v3.Drive;
export function drive<T = drive_v2.Drive | drive_v3.Drive>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | drive_v2.Options | 'v3' | drive_v3.Options
) {
  return getAPI<T>('drive', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {drive_v2};
export {drive_v3};
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

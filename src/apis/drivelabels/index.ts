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
import {drivelabels_v2} from './v2';
import {drivelabels_v2beta} from './v2beta';

export const VERSIONS = {
  v2: drivelabels_v2.Drivelabels,
  v2beta: drivelabels_v2beta.Drivelabels,
};

export function drivelabels(version: 'v2'): drivelabels_v2.Drivelabels;
export function drivelabels(
  options: drivelabels_v2.Options
): drivelabels_v2.Drivelabels;
export function drivelabels(version: 'v2beta'): drivelabels_v2beta.Drivelabels;
export function drivelabels(
  options: drivelabels_v2beta.Options
): drivelabels_v2beta.Drivelabels;
export function drivelabels<
  T = drivelabels_v2.Drivelabels | drivelabels_v2beta.Drivelabels,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | drivelabels_v2.Options
    | 'v2beta'
    | drivelabels_v2beta.Options
) {
  return getAPI<T>('drivelabels', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {drivelabels_v2};
export {drivelabels_v2beta};
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

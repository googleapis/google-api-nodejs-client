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
import {cloudbilling_v1} from './v1';
import {cloudbilling_v1beta} from './v1beta';

export const VERSIONS = {
  v1: cloudbilling_v1.Cloudbilling,
  v1beta: cloudbilling_v1beta.Cloudbilling,
};

export function cloudbilling(version: 'v1'): cloudbilling_v1.Cloudbilling;
export function cloudbilling(
  options: cloudbilling_v1.Options
): cloudbilling_v1.Cloudbilling;
export function cloudbilling(
  version: 'v1beta'
): cloudbilling_v1beta.Cloudbilling;
export function cloudbilling(
  options: cloudbilling_v1beta.Options
): cloudbilling_v1beta.Cloudbilling;
export function cloudbilling<
  T = cloudbilling_v1.Cloudbilling | cloudbilling_v1beta.Cloudbilling
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudbilling_v1.Options
    | 'v1beta'
    | cloudbilling_v1beta.Options
) {
  return getAPI<T>('cloudbilling', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudbilling_v1};
export {cloudbilling_v1beta};
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

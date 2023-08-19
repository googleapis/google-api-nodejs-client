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
import {websecurityscanner_v1} from './v1';
import {websecurityscanner_v1alpha} from './v1alpha';
import {websecurityscanner_v1beta} from './v1beta';

export const VERSIONS = {
  v1: websecurityscanner_v1.Websecurityscanner,
  v1alpha: websecurityscanner_v1alpha.Websecurityscanner,
  v1beta: websecurityscanner_v1beta.Websecurityscanner,
};

export function websecurityscanner(
  version: 'v1'
): websecurityscanner_v1.Websecurityscanner;
export function websecurityscanner(
  options: websecurityscanner_v1.Options
): websecurityscanner_v1.Websecurityscanner;
export function websecurityscanner(
  version: 'v1alpha'
): websecurityscanner_v1alpha.Websecurityscanner;
export function websecurityscanner(
  options: websecurityscanner_v1alpha.Options
): websecurityscanner_v1alpha.Websecurityscanner;
export function websecurityscanner(
  version: 'v1beta'
): websecurityscanner_v1beta.Websecurityscanner;
export function websecurityscanner(
  options: websecurityscanner_v1beta.Options
): websecurityscanner_v1beta.Websecurityscanner;
export function websecurityscanner<
  T =
    | websecurityscanner_v1.Websecurityscanner
    | websecurityscanner_v1alpha.Websecurityscanner
    | websecurityscanner_v1beta.Websecurityscanner,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | websecurityscanner_v1.Options
    | 'v1alpha'
    | websecurityscanner_v1alpha.Options
    | 'v1beta'
    | websecurityscanner_v1beta.Options
) {
  return getAPI<T>('websecurityscanner', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {websecurityscanner_v1};
export {websecurityscanner_v1alpha};
export {websecurityscanner_v1beta};
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

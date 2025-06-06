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
import {dataportability_v1} from './v1';
import {dataportability_v1beta} from './v1beta';

export const VERSIONS = {
  v1: dataportability_v1.Dataportability,
  v1beta: dataportability_v1beta.Dataportability,
};

export function dataportability(
  version: 'v1'
): dataportability_v1.Dataportability;
export function dataportability(
  options: dataportability_v1.Options
): dataportability_v1.Dataportability;
export function dataportability(
  version: 'v1beta'
): dataportability_v1beta.Dataportability;
export function dataportability(
  options: dataportability_v1beta.Options
): dataportability_v1beta.Dataportability;
export function dataportability<
  T =
    | dataportability_v1.Dataportability
    | dataportability_v1beta.Dataportability,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | dataportability_v1.Options
    | 'v1beta'
    | dataportability_v1beta.Options
) {
  return getAPI<T>('dataportability', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {dataportability_v1};
export {dataportability_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

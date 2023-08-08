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
import {binaryauthorization_v1} from './v1';
import {binaryauthorization_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: binaryauthorization_v1.Binaryauthorization,
  v1beta1: binaryauthorization_v1beta1.Binaryauthorization,
};

export function binaryauthorization(
  version: 'v1'
): binaryauthorization_v1.Binaryauthorization;
export function binaryauthorization(
  options: binaryauthorization_v1.Options
): binaryauthorization_v1.Binaryauthorization;
export function binaryauthorization(
  version: 'v1beta1'
): binaryauthorization_v1beta1.Binaryauthorization;
export function binaryauthorization(
  options: binaryauthorization_v1beta1.Options
): binaryauthorization_v1beta1.Binaryauthorization;
export function binaryauthorization<
  T =
    | binaryauthorization_v1.Binaryauthorization
    | binaryauthorization_v1beta1.Binaryauthorization,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | binaryauthorization_v1.Options
    | 'v1beta1'
    | binaryauthorization_v1beta1.Options
) {
  return getAPI<T>('binaryauthorization', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {binaryauthorization_v1};
export {binaryauthorization_v1beta1};
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

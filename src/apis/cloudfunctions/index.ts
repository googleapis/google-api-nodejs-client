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
import {cloudfunctions_v1} from './v1';
import {cloudfunctions_v1beta2} from './v1beta2';
import {cloudfunctions_v2} from './v2';
import {cloudfunctions_v2alpha} from './v2alpha';
import {cloudfunctions_v2beta} from './v2beta';

export const VERSIONS = {
  v1: cloudfunctions_v1.Cloudfunctions,
  v1beta2: cloudfunctions_v1beta2.Cloudfunctions,
  v2: cloudfunctions_v2.Cloudfunctions,
  v2alpha: cloudfunctions_v2alpha.Cloudfunctions,
  v2beta: cloudfunctions_v2beta.Cloudfunctions,
};

export function cloudfunctions(version: 'v1'): cloudfunctions_v1.Cloudfunctions;
export function cloudfunctions(
  options: cloudfunctions_v1.Options
): cloudfunctions_v1.Cloudfunctions;
export function cloudfunctions(
  version: 'v1beta2'
): cloudfunctions_v1beta2.Cloudfunctions;
export function cloudfunctions(
  options: cloudfunctions_v1beta2.Options
): cloudfunctions_v1beta2.Cloudfunctions;
export function cloudfunctions(version: 'v2'): cloudfunctions_v2.Cloudfunctions;
export function cloudfunctions(
  options: cloudfunctions_v2.Options
): cloudfunctions_v2.Cloudfunctions;
export function cloudfunctions(
  version: 'v2alpha'
): cloudfunctions_v2alpha.Cloudfunctions;
export function cloudfunctions(
  options: cloudfunctions_v2alpha.Options
): cloudfunctions_v2alpha.Cloudfunctions;
export function cloudfunctions(
  version: 'v2beta'
): cloudfunctions_v2beta.Cloudfunctions;
export function cloudfunctions(
  options: cloudfunctions_v2beta.Options
): cloudfunctions_v2beta.Cloudfunctions;
export function cloudfunctions<
  T =
    | cloudfunctions_v1.Cloudfunctions
    | cloudfunctions_v1beta2.Cloudfunctions
    | cloudfunctions_v2.Cloudfunctions
    | cloudfunctions_v2alpha.Cloudfunctions
    | cloudfunctions_v2beta.Cloudfunctions,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudfunctions_v1.Options
    | 'v1beta2'
    | cloudfunctions_v1beta2.Options
    | 'v2'
    | cloudfunctions_v2.Options
    | 'v2alpha'
    | cloudfunctions_v2alpha.Options
    | 'v2beta'
    | cloudfunctions_v2beta.Options
) {
  return getAPI<T>('cloudfunctions', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudfunctions_v1};
export {cloudfunctions_v1beta2};
export {cloudfunctions_v2};
export {cloudfunctions_v2alpha};
export {cloudfunctions_v2beta};
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

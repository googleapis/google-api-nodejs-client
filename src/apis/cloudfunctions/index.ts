// Copyright 2019 Google LLC
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

export const VERSIONS = {
  v1: cloudfunctions_v1.Cloudfunctions,
  v1beta2: cloudfunctions_v1beta2.Cloudfunctions,
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
export function cloudfunctions<
  T = cloudfunctions_v1.Cloudfunctions | cloudfunctions_v1beta2.Cloudfunctions
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudfunctions_v1.Options
    | 'v1beta2'
    | cloudfunctions_v1beta2.Options
) {
  return getAPI<T>('cloudfunctions', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

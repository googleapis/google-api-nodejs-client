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
import {healthcare_v1} from './v1';
import {healthcare_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: healthcare_v1.Healthcare,
  v1beta1: healthcare_v1beta1.Healthcare,
};

export function healthcare(version: 'v1'): healthcare_v1.Healthcare;
export function healthcare(
  options: healthcare_v1.Options
): healthcare_v1.Healthcare;
export function healthcare(version: 'v1beta1'): healthcare_v1beta1.Healthcare;
export function healthcare(
  options: healthcare_v1beta1.Options
): healthcare_v1beta1.Healthcare;
export function healthcare<
  T = healthcare_v1.Healthcare | healthcare_v1beta1.Healthcare,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | healthcare_v1.Options
    | 'v1beta1'
    | healthcare_v1beta1.Options
) {
  return getAPI<T>('healthcare', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {healthcare_v1};
export {healthcare_v1beta1};
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

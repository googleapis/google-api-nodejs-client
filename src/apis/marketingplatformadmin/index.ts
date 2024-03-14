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
import {marketingplatformadmin_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1alpha: marketingplatformadmin_v1alpha.Marketingplatformadmin,
};

export function marketingplatformadmin(
  version: 'v1alpha'
): marketingplatformadmin_v1alpha.Marketingplatformadmin;
export function marketingplatformadmin(
  options: marketingplatformadmin_v1alpha.Options
): marketingplatformadmin_v1alpha.Marketingplatformadmin;
export function marketingplatformadmin<
  T = marketingplatformadmin_v1alpha.Marketingplatformadmin,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1alpha' | marketingplatformadmin_v1alpha.Options
) {
  return getAPI<T>('marketingplatformadmin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {marketingplatformadmin_v1alpha};
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

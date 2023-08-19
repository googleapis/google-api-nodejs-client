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
import {analyticsadmin_v1alpha} from './v1alpha';
import {analyticsadmin_v1beta} from './v1beta';

export const VERSIONS = {
  v1alpha: analyticsadmin_v1alpha.Analyticsadmin,
  v1beta: analyticsadmin_v1beta.Analyticsadmin,
};

export function analyticsadmin(
  version: 'v1alpha'
): analyticsadmin_v1alpha.Analyticsadmin;
export function analyticsadmin(
  options: analyticsadmin_v1alpha.Options
): analyticsadmin_v1alpha.Analyticsadmin;
export function analyticsadmin(
  version: 'v1beta'
): analyticsadmin_v1beta.Analyticsadmin;
export function analyticsadmin(
  options: analyticsadmin_v1beta.Options
): analyticsadmin_v1beta.Analyticsadmin;
export function analyticsadmin<
  T =
    | analyticsadmin_v1alpha.Analyticsadmin
    | analyticsadmin_v1beta.Analyticsadmin,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1alpha'
    | analyticsadmin_v1alpha.Options
    | 'v1beta'
    | analyticsadmin_v1beta.Options
) {
  return getAPI<T>('analyticsadmin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {analyticsadmin_v1alpha};
export {analyticsadmin_v1beta};
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

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
import {analyticsdata_v1alpha} from './v1alpha';
import {analyticsdata_v1beta} from './v1beta';

export const VERSIONS = {
  v1alpha: analyticsdata_v1alpha.Analyticsdata,
  v1beta: analyticsdata_v1beta.Analyticsdata,
};

export function analyticsdata(
  version: 'v1alpha'
): analyticsdata_v1alpha.Analyticsdata;
export function analyticsdata(
  options: analyticsdata_v1alpha.Options
): analyticsdata_v1alpha.Analyticsdata;
export function analyticsdata(
  version: 'v1beta'
): analyticsdata_v1beta.Analyticsdata;
export function analyticsdata(
  options: analyticsdata_v1beta.Options
): analyticsdata_v1beta.Analyticsdata;
export function analyticsdata<
  T = analyticsdata_v1alpha.Analyticsdata | analyticsdata_v1beta.Analyticsdata,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1alpha'
    | analyticsdata_v1alpha.Options
    | 'v1beta'
    | analyticsdata_v1beta.Options
) {
  return getAPI<T>('analyticsdata', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {analyticsdata_v1alpha};
export {analyticsdata_v1beta};
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

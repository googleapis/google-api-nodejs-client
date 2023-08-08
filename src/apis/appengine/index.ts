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
import {appengine_v1} from './v1';
import {appengine_v1alpha} from './v1alpha';
import {appengine_v1beta} from './v1beta';

export const VERSIONS = {
  v1: appengine_v1.Appengine,
  v1alpha: appengine_v1alpha.Appengine,
  v1beta: appengine_v1beta.Appengine,
};

export function appengine(version: 'v1'): appengine_v1.Appengine;
export function appengine(
  options: appengine_v1.Options
): appengine_v1.Appengine;
export function appengine(version: 'v1alpha'): appengine_v1alpha.Appengine;
export function appengine(
  options: appengine_v1alpha.Options
): appengine_v1alpha.Appengine;
export function appengine(version: 'v1beta'): appengine_v1beta.Appengine;
export function appengine(
  options: appengine_v1beta.Options
): appengine_v1beta.Appengine;
export function appengine<
  T =
    | appengine_v1.Appengine
    | appengine_v1alpha.Appengine
    | appengine_v1beta.Appengine,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | appengine_v1.Options
    | 'v1alpha'
    | appengine_v1alpha.Options
    | 'v1beta'
    | appengine_v1beta.Options
) {
  return getAPI<T>('appengine', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {appengine_v1};
export {appengine_v1alpha};
export {appengine_v1beta};
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

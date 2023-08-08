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
import {genomics_v1} from './v1';
import {genomics_v1alpha2} from './v1alpha2';
import {genomics_v2alpha1} from './v2alpha1';

export const VERSIONS = {
  v1: genomics_v1.Genomics,
  v1alpha2: genomics_v1alpha2.Genomics,
  v2alpha1: genomics_v2alpha1.Genomics,
};

export function genomics(version: 'v1'): genomics_v1.Genomics;
export function genomics(options: genomics_v1.Options): genomics_v1.Genomics;
export function genomics(version: 'v1alpha2'): genomics_v1alpha2.Genomics;
export function genomics(
  options: genomics_v1alpha2.Options
): genomics_v1alpha2.Genomics;
export function genomics(version: 'v2alpha1'): genomics_v2alpha1.Genomics;
export function genomics(
  options: genomics_v2alpha1.Options
): genomics_v2alpha1.Genomics;
export function genomics<
  T =
    | genomics_v1.Genomics
    | genomics_v1alpha2.Genomics
    | genomics_v2alpha1.Genomics,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | genomics_v1.Options
    | 'v1alpha2'
    | genomics_v1alpha2.Options
    | 'v2alpha1'
    | genomics_v2alpha1.Options
) {
  return getAPI<T>('genomics', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {genomics_v1};
export {genomics_v1alpha2};
export {genomics_v2alpha1};
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

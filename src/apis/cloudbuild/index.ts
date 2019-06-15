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
import {cloudbuild_v1} from './v1';
import {cloudbuild_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  v1: cloudbuild_v1.Cloudbuild,
  v1alpha1: cloudbuild_v1alpha1.Cloudbuild,
};

export function cloudbuild(version: 'v1'): cloudbuild_v1.Cloudbuild;
export function cloudbuild(
  options: cloudbuild_v1.Options
): cloudbuild_v1.Cloudbuild;
export function cloudbuild(version: 'v1alpha1'): cloudbuild_v1alpha1.Cloudbuild;
export function cloudbuild(
  options: cloudbuild_v1alpha1.Options
): cloudbuild_v1alpha1.Cloudbuild;
export function cloudbuild<
  T = cloudbuild_v1.Cloudbuild | cloudbuild_v1alpha1.Cloudbuild
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudbuild_v1.Options
    | 'v1alpha1'
    | cloudbuild_v1alpha1.Options
) {
  return getAPI<T>('cloudbuild', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

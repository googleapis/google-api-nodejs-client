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
import {artifactregistry_v1} from './v1';
import {artifactregistry_v1beta1} from './v1beta1';
import {artifactregistry_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1: artifactregistry_v1.Artifactregistry,
  v1beta1: artifactregistry_v1beta1.Artifactregistry,
  v1beta2: artifactregistry_v1beta2.Artifactregistry,
};

export function artifactregistry(
  version: 'v1'
): artifactregistry_v1.Artifactregistry;
export function artifactregistry(
  options: artifactregistry_v1.Options
): artifactregistry_v1.Artifactregistry;
export function artifactregistry(
  version: 'v1beta1'
): artifactregistry_v1beta1.Artifactregistry;
export function artifactregistry(
  options: artifactregistry_v1beta1.Options
): artifactregistry_v1beta1.Artifactregistry;
export function artifactregistry(
  version: 'v1beta2'
): artifactregistry_v1beta2.Artifactregistry;
export function artifactregistry(
  options: artifactregistry_v1beta2.Options
): artifactregistry_v1beta2.Artifactregistry;
export function artifactregistry<
  T =
    | artifactregistry_v1.Artifactregistry
    | artifactregistry_v1beta1.Artifactregistry
    | artifactregistry_v1beta2.Artifactregistry,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | artifactregistry_v1.Options
    | 'v1beta1'
    | artifactregistry_v1beta1.Options
    | 'v1beta2'
    | artifactregistry_v1beta2.Options
) {
  return getAPI<T>('artifactregistry', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {artifactregistry_v1};
export {artifactregistry_v1beta1};
export {artifactregistry_v1beta2};
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

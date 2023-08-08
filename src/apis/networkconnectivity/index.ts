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
import {networkconnectivity_v1} from './v1';
import {networkconnectivity_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  v1: networkconnectivity_v1.Networkconnectivity,
  v1alpha1: networkconnectivity_v1alpha1.Networkconnectivity,
};

export function networkconnectivity(
  version: 'v1'
): networkconnectivity_v1.Networkconnectivity;
export function networkconnectivity(
  options: networkconnectivity_v1.Options
): networkconnectivity_v1.Networkconnectivity;
export function networkconnectivity(
  version: 'v1alpha1'
): networkconnectivity_v1alpha1.Networkconnectivity;
export function networkconnectivity(
  options: networkconnectivity_v1alpha1.Options
): networkconnectivity_v1alpha1.Networkconnectivity;
export function networkconnectivity<
  T =
    | networkconnectivity_v1.Networkconnectivity
    | networkconnectivity_v1alpha1.Networkconnectivity,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | networkconnectivity_v1.Options
    | 'v1alpha1'
    | networkconnectivity_v1alpha1.Options
) {
  return getAPI<T>('networkconnectivity', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {networkconnectivity_v1};
export {networkconnectivity_v1alpha1};
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

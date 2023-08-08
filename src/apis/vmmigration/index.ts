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
import {vmmigration_v1} from './v1';
import {vmmigration_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  v1: vmmigration_v1.Vmmigration,
  v1alpha1: vmmigration_v1alpha1.Vmmigration,
};

export function vmmigration(version: 'v1'): vmmigration_v1.Vmmigration;
export function vmmigration(
  options: vmmigration_v1.Options
): vmmigration_v1.Vmmigration;
export function vmmigration(
  version: 'v1alpha1'
): vmmigration_v1alpha1.Vmmigration;
export function vmmigration(
  options: vmmigration_v1alpha1.Options
): vmmigration_v1alpha1.Vmmigration;
export function vmmigration<
  T = vmmigration_v1.Vmmigration | vmmigration_v1alpha1.Vmmigration,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | vmmigration_v1.Options
    | 'v1alpha1'
    | vmmigration_v1alpha1.Options
) {
  return getAPI<T>('vmmigration', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {vmmigration_v1};
export {vmmigration_v1alpha1};
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

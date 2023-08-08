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
import {managedidentities_v1} from './v1';
import {managedidentities_v1alpha1} from './v1alpha1';
import {managedidentities_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: managedidentities_v1.Managedidentities,
  v1alpha1: managedidentities_v1alpha1.Managedidentities,
  v1beta1: managedidentities_v1beta1.Managedidentities,
};

export function managedidentities(
  version: 'v1'
): managedidentities_v1.Managedidentities;
export function managedidentities(
  options: managedidentities_v1.Options
): managedidentities_v1.Managedidentities;
export function managedidentities(
  version: 'v1alpha1'
): managedidentities_v1alpha1.Managedidentities;
export function managedidentities(
  options: managedidentities_v1alpha1.Options
): managedidentities_v1alpha1.Managedidentities;
export function managedidentities(
  version: 'v1beta1'
): managedidentities_v1beta1.Managedidentities;
export function managedidentities(
  options: managedidentities_v1beta1.Options
): managedidentities_v1beta1.Managedidentities;
export function managedidentities<
  T =
    | managedidentities_v1.Managedidentities
    | managedidentities_v1alpha1.Managedidentities
    | managedidentities_v1beta1.Managedidentities,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | managedidentities_v1.Options
    | 'v1alpha1'
    | managedidentities_v1alpha1.Options
    | 'v1beta1'
    | managedidentities_v1beta1.Options
) {
  return getAPI<T>('managedidentities', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {managedidentities_v1};
export {managedidentities_v1alpha1};
export {managedidentities_v1beta1};
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

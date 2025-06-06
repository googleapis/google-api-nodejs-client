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
import {firebaseappdistribution_v1} from './v1';
import {firebaseappdistribution_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: firebaseappdistribution_v1.Firebaseappdistribution,
  v1alpha: firebaseappdistribution_v1alpha.Firebaseappdistribution,
};

export function firebaseappdistribution(
  version: 'v1'
): firebaseappdistribution_v1.Firebaseappdistribution;
export function firebaseappdistribution(
  options: firebaseappdistribution_v1.Options
): firebaseappdistribution_v1.Firebaseappdistribution;
export function firebaseappdistribution(
  version: 'v1alpha'
): firebaseappdistribution_v1alpha.Firebaseappdistribution;
export function firebaseappdistribution(
  options: firebaseappdistribution_v1alpha.Options
): firebaseappdistribution_v1alpha.Firebaseappdistribution;
export function firebaseappdistribution<
  T =
    | firebaseappdistribution_v1.Firebaseappdistribution
    | firebaseappdistribution_v1alpha.Firebaseappdistribution,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | firebaseappdistribution_v1.Options
    | 'v1alpha'
    | firebaseappdistribution_v1alpha.Options
) {
  return getAPI<T>('firebaseappdistribution', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {firebaseappdistribution_v1};
export {firebaseappdistribution_v1alpha};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

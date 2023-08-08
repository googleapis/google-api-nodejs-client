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
import {bigqueryreservation_v1} from './v1';
import {bigqueryreservation_v1alpha2} from './v1alpha2';
import {bigqueryreservation_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: bigqueryreservation_v1.Bigqueryreservation,
  v1alpha2: bigqueryreservation_v1alpha2.Bigqueryreservation,
  v1beta1: bigqueryreservation_v1beta1.Bigqueryreservation,
};

export function bigqueryreservation(
  version: 'v1'
): bigqueryreservation_v1.Bigqueryreservation;
export function bigqueryreservation(
  options: bigqueryreservation_v1.Options
): bigqueryreservation_v1.Bigqueryreservation;
export function bigqueryreservation(
  version: 'v1alpha2'
): bigqueryreservation_v1alpha2.Bigqueryreservation;
export function bigqueryreservation(
  options: bigqueryreservation_v1alpha2.Options
): bigqueryreservation_v1alpha2.Bigqueryreservation;
export function bigqueryreservation(
  version: 'v1beta1'
): bigqueryreservation_v1beta1.Bigqueryreservation;
export function bigqueryreservation(
  options: bigqueryreservation_v1beta1.Options
): bigqueryreservation_v1beta1.Bigqueryreservation;
export function bigqueryreservation<
  T =
    | bigqueryreservation_v1.Bigqueryreservation
    | bigqueryreservation_v1alpha2.Bigqueryreservation
    | bigqueryreservation_v1beta1.Bigqueryreservation,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | bigqueryreservation_v1.Options
    | 'v1alpha2'
    | bigqueryreservation_v1alpha2.Options
    | 'v1beta1'
    | bigqueryreservation_v1beta1.Options
) {
  return getAPI<T>('bigqueryreservation', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {bigqueryreservation_v1};
export {bigqueryreservation_v1alpha2};
export {bigqueryreservation_v1beta1};
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

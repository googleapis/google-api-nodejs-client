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
import {servicebroker_v1} from './v1';
import {servicebroker_v1alpha1} from './v1alpha1';
import {servicebroker_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: servicebroker_v1.Servicebroker,
  v1alpha1: servicebroker_v1alpha1.Servicebroker,
  v1beta1: servicebroker_v1beta1.Servicebroker,
};

export function servicebroker(version: 'v1'): servicebroker_v1.Servicebroker;
export function servicebroker(
  options: servicebroker_v1.Options
): servicebroker_v1.Servicebroker;
export function servicebroker(
  version: 'v1alpha1'
): servicebroker_v1alpha1.Servicebroker;
export function servicebroker(
  options: servicebroker_v1alpha1.Options
): servicebroker_v1alpha1.Servicebroker;
export function servicebroker(
  version: 'v1beta1'
): servicebroker_v1beta1.Servicebroker;
export function servicebroker(
  options: servicebroker_v1beta1.Options
): servicebroker_v1beta1.Servicebroker;
export function servicebroker<
  T =
    | servicebroker_v1.Servicebroker
    | servicebroker_v1alpha1.Servicebroker
    | servicebroker_v1beta1.Servicebroker
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | servicebroker_v1.Options
    | 'v1alpha1'
    | servicebroker_v1alpha1.Options
    | 'v1beta1'
    | servicebroker_v1beta1.Options
) {
  return getAPI<T>('servicebroker', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

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
import {baremetalsolution_v1} from './v1';
import {baremetalsolution_v1alpha1} from './v1alpha1';
import {baremetalsolution_v2} from './v2';

export const VERSIONS = {
  v1: baremetalsolution_v1.Baremetalsolution,
  v1alpha1: baremetalsolution_v1alpha1.Baremetalsolution,
  v2: baremetalsolution_v2.Baremetalsolution,
};

export function baremetalsolution(
  version: 'v1'
): baremetalsolution_v1.Baremetalsolution;
export function baremetalsolution(
  options: baremetalsolution_v1.Options
): baremetalsolution_v1.Baremetalsolution;
export function baremetalsolution(
  version: 'v1alpha1'
): baremetalsolution_v1alpha1.Baremetalsolution;
export function baremetalsolution(
  options: baremetalsolution_v1alpha1.Options
): baremetalsolution_v1alpha1.Baremetalsolution;
export function baremetalsolution(
  version: 'v2'
): baremetalsolution_v2.Baremetalsolution;
export function baremetalsolution(
  options: baremetalsolution_v2.Options
): baremetalsolution_v2.Baremetalsolution;
export function baremetalsolution<
  T =
    | baremetalsolution_v1.Baremetalsolution
    | baremetalsolution_v1alpha1.Baremetalsolution
    | baremetalsolution_v2.Baremetalsolution,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | baremetalsolution_v1.Options
    | 'v1alpha1'
    | baremetalsolution_v1alpha1.Options
    | 'v2'
    | baremetalsolution_v2.Options
) {
  return getAPI<T>('baremetalsolution', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {baremetalsolution_v1};
export {baremetalsolution_v1alpha1};
export {baremetalsolution_v2};
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

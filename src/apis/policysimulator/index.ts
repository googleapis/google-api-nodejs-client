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
import {policysimulator_v1} from './v1';
import {policysimulator_v1alpha} from './v1alpha';
import {policysimulator_v1beta} from './v1beta';
import {policysimulator_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: policysimulator_v1.Policysimulator,
  v1alpha: policysimulator_v1alpha.Policysimulator,
  v1beta: policysimulator_v1beta.Policysimulator,
  v1beta1: policysimulator_v1beta1.Policysimulator,
};

export function policysimulator(
  version: 'v1'
): policysimulator_v1.Policysimulator;
export function policysimulator(
  options: policysimulator_v1.Options
): policysimulator_v1.Policysimulator;
export function policysimulator(
  version: 'v1alpha'
): policysimulator_v1alpha.Policysimulator;
export function policysimulator(
  options: policysimulator_v1alpha.Options
): policysimulator_v1alpha.Policysimulator;
export function policysimulator(
  version: 'v1beta'
): policysimulator_v1beta.Policysimulator;
export function policysimulator(
  options: policysimulator_v1beta.Options
): policysimulator_v1beta.Policysimulator;
export function policysimulator(
  version: 'v1beta1'
): policysimulator_v1beta1.Policysimulator;
export function policysimulator(
  options: policysimulator_v1beta1.Options
): policysimulator_v1beta1.Policysimulator;
export function policysimulator<
  T =
    | policysimulator_v1.Policysimulator
    | policysimulator_v1alpha.Policysimulator
    | policysimulator_v1beta.Policysimulator
    | policysimulator_v1beta1.Policysimulator
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | policysimulator_v1.Options
    | 'v1alpha'
    | policysimulator_v1alpha.Options
    | 'v1beta'
    | policysimulator_v1beta.Options
    | 'v1beta1'
    | policysimulator_v1beta1.Options
) {
  return getAPI<T>('policysimulator', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {policysimulator_v1};
export {policysimulator_v1alpha};
export {policysimulator_v1beta};
export {policysimulator_v1beta1};
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

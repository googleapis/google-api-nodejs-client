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
import {tpu_v1} from './v1';
import {tpu_v1alpha1} from './v1alpha1';
import {tpu_v2} from './v2';
import {tpu_v2alpha1} from './v2alpha1';

export const VERSIONS = {
  v1: tpu_v1.Tpu,
  v1alpha1: tpu_v1alpha1.Tpu,
  v2: tpu_v2.Tpu,
  v2alpha1: tpu_v2alpha1.Tpu,
};

export function tpu(version: 'v1'): tpu_v1.Tpu;
export function tpu(options: tpu_v1.Options): tpu_v1.Tpu;
export function tpu(version: 'v1alpha1'): tpu_v1alpha1.Tpu;
export function tpu(options: tpu_v1alpha1.Options): tpu_v1alpha1.Tpu;
export function tpu(version: 'v2'): tpu_v2.Tpu;
export function tpu(options: tpu_v2.Options): tpu_v2.Tpu;
export function tpu(version: 'v2alpha1'): tpu_v2alpha1.Tpu;
export function tpu(options: tpu_v2alpha1.Options): tpu_v2alpha1.Tpu;
export function tpu<
  T = tpu_v1.Tpu | tpu_v1alpha1.Tpu | tpu_v2.Tpu | tpu_v2alpha1.Tpu,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | tpu_v1.Options
    | 'v1alpha1'
    | tpu_v1alpha1.Options
    | 'v2'
    | tpu_v2.Options
    | 'v2alpha1'
    | tpu_v2alpha1.Options
) {
  return getAPI<T>('tpu', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {tpu_v1};
export {tpu_v1alpha1};
export {tpu_v2};
export {tpu_v2alpha1};
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

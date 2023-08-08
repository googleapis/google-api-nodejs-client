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
import {compute_alpha} from './alpha';
import {compute_beta} from './beta';
import {compute_v1} from './v1';

export const VERSIONS = {
  alpha: compute_alpha.Compute,
  beta: compute_beta.Compute,
  v1: compute_v1.Compute,
};

export function compute(version: 'alpha'): compute_alpha.Compute;
export function compute(options: compute_alpha.Options): compute_alpha.Compute;
export function compute(version: 'beta'): compute_beta.Compute;
export function compute(options: compute_beta.Options): compute_beta.Compute;
export function compute(version: 'v1'): compute_v1.Compute;
export function compute(options: compute_v1.Options): compute_v1.Compute;
export function compute<
  T = compute_alpha.Compute | compute_beta.Compute | compute_v1.Compute,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'alpha'
    | compute_alpha.Options
    | 'beta'
    | compute_beta.Options
    | 'v1'
    | compute_v1.Options
) {
  return getAPI<T>('compute', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {compute_alpha};
export {compute_beta};
export {compute_v1};
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

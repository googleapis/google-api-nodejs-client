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
import {retail_v2} from './v2';
import {retail_v2alpha} from './v2alpha';
import {retail_v2beta} from './v2beta';

export const VERSIONS = {
  v2: retail_v2.Retail,
  v2alpha: retail_v2alpha.Retail,
  v2beta: retail_v2beta.Retail,
};

export function retail(version: 'v2'): retail_v2.Retail;
export function retail(options: retail_v2.Options): retail_v2.Retail;
export function retail(version: 'v2alpha'): retail_v2alpha.Retail;
export function retail(options: retail_v2alpha.Options): retail_v2alpha.Retail;
export function retail(version: 'v2beta'): retail_v2beta.Retail;
export function retail(options: retail_v2beta.Options): retail_v2beta.Retail;
export function retail<
  T = retail_v2.Retail | retail_v2alpha.Retail | retail_v2beta.Retail,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | retail_v2.Options
    | 'v2alpha'
    | retail_v2alpha.Options
    | 'v2beta'
    | retail_v2beta.Options
) {
  return getAPI<T>('retail', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {retail_v2};
export {retail_v2alpha};
export {retail_v2beta};
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

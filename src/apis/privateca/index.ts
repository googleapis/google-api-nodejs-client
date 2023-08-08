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
import {privateca_v1} from './v1';
import {privateca_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: privateca_v1.Privateca,
  v1beta1: privateca_v1beta1.Privateca,
};

export function privateca(version: 'v1'): privateca_v1.Privateca;
export function privateca(
  options: privateca_v1.Options
): privateca_v1.Privateca;
export function privateca(version: 'v1beta1'): privateca_v1beta1.Privateca;
export function privateca(
  options: privateca_v1beta1.Options
): privateca_v1beta1.Privateca;
export function privateca<
  T = privateca_v1.Privateca | privateca_v1beta1.Privateca,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | privateca_v1.Options
    | 'v1beta1'
    | privateca_v1beta1.Options
) {
  return getAPI<T>('privateca', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {privateca_v1};
export {privateca_v1beta1};
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

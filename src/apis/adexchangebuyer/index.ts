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
import {adexchangebuyer_v1_2} from './v1.2';
import {adexchangebuyer_v1_3} from './v1.3';
import {adexchangebuyer_v1_4} from './v1.4';

export const VERSIONS = {
  'v1.2': adexchangebuyer_v1_2.Adexchangebuyer,
  'v1.3': adexchangebuyer_v1_3.Adexchangebuyer,
  'v1.4': adexchangebuyer_v1_4.Adexchangebuyer,
};

export function adexchangebuyer(
  version: 'v1.2'
): adexchangebuyer_v1_2.Adexchangebuyer;
export function adexchangebuyer(
  options: adexchangebuyer_v1_2.Options
): adexchangebuyer_v1_2.Adexchangebuyer;
export function adexchangebuyer(
  version: 'v1.3'
): adexchangebuyer_v1_3.Adexchangebuyer;
export function adexchangebuyer(
  options: adexchangebuyer_v1_3.Options
): adexchangebuyer_v1_3.Adexchangebuyer;
export function adexchangebuyer(
  version: 'v1.4'
): adexchangebuyer_v1_4.Adexchangebuyer;
export function adexchangebuyer(
  options: adexchangebuyer_v1_4.Options
): adexchangebuyer_v1_4.Adexchangebuyer;
export function adexchangebuyer<
  T =
    | adexchangebuyer_v1_2.Adexchangebuyer
    | adexchangebuyer_v1_3.Adexchangebuyer
    | adexchangebuyer_v1_4.Adexchangebuyer,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1.2'
    | adexchangebuyer_v1_2.Options
    | 'v1.3'
    | adexchangebuyer_v1_3.Options
    | 'v1.4'
    | adexchangebuyer_v1_4.Options
) {
  return getAPI<T>('adexchangebuyer', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {adexchangebuyer_v1_2};
export {adexchangebuyer_v1_3};
export {adexchangebuyer_v1_4};
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

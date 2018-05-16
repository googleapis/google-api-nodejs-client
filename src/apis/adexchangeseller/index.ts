// Copyright 2018, Google, LLC.
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

import {getAPI, GoogleConfigurable} from '../../shared/src';

import {adexchangeseller_v1} from './v1';
import {adexchangeseller_v1_1} from './v1.1';
import {adexchangeseller_v2_0} from './v2.0';

export const VERSIONS = {
  'v1.1': adexchangeseller_v1_1.Adexchangeseller,
  'v1': adexchangeseller_v1.Adexchangeseller,
  'v2.0': adexchangeseller_v2_0.Adexchangeseller,
};

export function adexchangeseller(version: 'v1_1'):
    adexchangeseller_v1_1.Adexchangeseller;
export function adexchangeseller(options: adexchangeseller_v1_1.Options):
    adexchangeseller_v1_1.Adexchangeseller;
export function adexchangeseller(version: 'v1'):
    adexchangeseller_v1.Adexchangeseller;
export function adexchangeseller(options: adexchangeseller_v1.Options):
    adexchangeseller_v1.Adexchangeseller;
export function adexchangeseller(version: 'v2_0'):
    adexchangeseller_v2_0.Adexchangeseller;
export function adexchangeseller(options: adexchangeseller_v2_0.Options):
    adexchangeseller_v2_0.Adexchangeseller;
export function adexchangeseller<
    T = adexchangeseller_v1_1.Adexchangeseller |
        adexchangeseller_v1.Adexchangeseller |
        adexchangeseller_v2_0.Adexchangeseller>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1_1'|
    adexchangeseller_v1_1.Options|'v1'|
    adexchangeseller_v1.Options|'v2_0'|adexchangeseller_v2_0.Options) {
  return getAPI<T>('adexchangeseller', versionOrOptions, VERSIONS, this);
}

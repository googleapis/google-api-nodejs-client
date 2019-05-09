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
import {adexchangebuyer2_v2beta1} from './v2beta1';

export const VERSIONS = {
  v2beta1: adexchangebuyer2_v2beta1.Adexchangebuyer2,
};

export function adexchangebuyer2(
  version: 'v2beta1'
): adexchangebuyer2_v2beta1.Adexchangebuyer2;
export function adexchangebuyer2(
  options: adexchangebuyer2_v2beta1.Options
): adexchangebuyer2_v2beta1.Adexchangebuyer2;
export function adexchangebuyer2<T = adexchangebuyer2_v2beta1.Adexchangebuyer2>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2beta1' | adexchangebuyer2_v2beta1.Options
) {
  return getAPI<T>('adexchangebuyer2', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

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
import {adsense_v1_4} from './v1.4';
import {adsense_v2} from './v2';

export const VERSIONS = {
  'v1.4': adsense_v1_4.Adsense,
  v2: adsense_v2.Adsense,
};

export function adsense(version: 'v1.4'): adsense_v1_4.Adsense;
export function adsense(options: adsense_v1_4.Options): adsense_v1_4.Adsense;
export function adsense(version: 'v2'): adsense_v2.Adsense;
export function adsense(options: adsense_v2.Options): adsense_v2.Adsense;
export function adsense<T = adsense_v1_4.Adsense | adsense_v2.Adsense>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1.4' | adsense_v1_4.Options | 'v2' | adsense_v2.Options
) {
  return getAPI<T>('adsense', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {adsense_v1_4};
export {adsense_v2};
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

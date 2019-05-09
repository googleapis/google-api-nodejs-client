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
import {iap_v1} from './v1';
import {iap_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: iap_v1.Iap,
  v1beta1: iap_v1beta1.Iap,
};

export function iap(version: 'v1'): iap_v1.Iap;
export function iap(options: iap_v1.Options): iap_v1.Iap;
export function iap(version: 'v1beta1'): iap_v1beta1.Iap;
export function iap(options: iap_v1beta1.Options): iap_v1beta1.Iap;
export function iap<T = iap_v1.Iap | iap_v1beta1.Iap>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | iap_v1.Options | 'v1beta1' | iap_v1beta1.Options
) {
  return getAPI<T>('iap', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

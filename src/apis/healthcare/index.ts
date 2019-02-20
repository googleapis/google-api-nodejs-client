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
import {healthcare_v1alpha} from './v1alpha';
import {healthcare_v1alpha2} from './v1alpha2';

export const VERSIONS = {
  'v1alpha': healthcare_v1alpha.Healthcare,
  'v1alpha2': healthcare_v1alpha2.Healthcare,
};

export function healthcare(version: 'v1alpha'): healthcare_v1alpha.Healthcare;
export function healthcare(options: healthcare_v1alpha.Options):
    healthcare_v1alpha.Healthcare;
export function healthcare(version: 'v1alpha2'): healthcare_v1alpha2.Healthcare;
export function healthcare(options: healthcare_v1alpha2.Options):
    healthcare_v1alpha2.Healthcare;
export function
healthcare<T = healthcare_v1alpha.Healthcare | healthcare_v1alpha2.Healthcare>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1alpha'|
    healthcare_v1alpha.Options|'v1alpha2'|healthcare_v1alpha2.Options) {
  return getAPI<T>('healthcare', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

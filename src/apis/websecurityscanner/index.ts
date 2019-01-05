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

import {getAPI, GoogleConfigurable} from 'googleapis-common';
import {websecurityscanner_v1alpha} from './v1alpha';

export const VERSIONS = {
  'v1alpha': websecurityscanner_v1alpha.Websecurityscanner,
};

export function websecurityscanner(version: 'v1alpha'):
    websecurityscanner_v1alpha.Websecurityscanner;
export function websecurityscanner(options: websecurityscanner_v1alpha.Options):
    websecurityscanner_v1alpha.Websecurityscanner;
export function
websecurityscanner<T = websecurityscanner_v1alpha.Websecurityscanner>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1alpha'|websecurityscanner_v1alpha.Options) {
  return getAPI<T>('websecurityscanner', versionOrOptions, VERSIONS, this);
}

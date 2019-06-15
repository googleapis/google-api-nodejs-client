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
import {adsensehost_v4_1} from './v4.1';

export const VERSIONS = {
  'v4.1': adsensehost_v4_1.Adsensehost,
};

export function adsensehost(version: 'v4.1'): adsensehost_v4_1.Adsensehost;
export function adsensehost(
  options: adsensehost_v4_1.Options
): adsensehost_v4_1.Adsensehost;
export function adsensehost<T = adsensehost_v4_1.Adsensehost>(
  this: GoogleConfigurable,
  versionOrOptions: 'v4.1' | adsensehost_v4_1.Options
) {
  return getAPI<T>('adsensehost', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

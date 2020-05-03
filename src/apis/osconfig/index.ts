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
import {osconfig_v1} from './v1';
import {osconfig_v1beta} from './v1beta';

export const VERSIONS = {
  v1: osconfig_v1.Osconfig,
  v1beta: osconfig_v1beta.Osconfig,
};

export function osconfig(version: 'v1'): osconfig_v1.Osconfig;
export function osconfig(options: osconfig_v1.Options): osconfig_v1.Osconfig;
export function osconfig(version: 'v1beta'): osconfig_v1beta.Osconfig;
export function osconfig(
  options: osconfig_v1beta.Options
): osconfig_v1beta.Osconfig;
export function osconfig<T = osconfig_v1.Osconfig | osconfig_v1beta.Osconfig>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | osconfig_v1.Options
    | 'v1beta'
    | osconfig_v1beta.Options
) {
  return getAPI<T>('osconfig', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

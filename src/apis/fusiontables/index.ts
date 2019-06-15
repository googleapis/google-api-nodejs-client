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
import {fusiontables_v1} from './v1';
import {fusiontables_v2} from './v2';

export const VERSIONS = {
  v1: fusiontables_v1.Fusiontables,
  v2: fusiontables_v2.Fusiontables,
};

export function fusiontables(version: 'v1'): fusiontables_v1.Fusiontables;
export function fusiontables(
  options: fusiontables_v1.Options
): fusiontables_v1.Fusiontables;
export function fusiontables(version: 'v2'): fusiontables_v2.Fusiontables;
export function fusiontables(
  options: fusiontables_v2.Options
): fusiontables_v2.Fusiontables;
export function fusiontables<
  T = fusiontables_v1.Fusiontables | fusiontables_v2.Fusiontables
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | fusiontables_v1.Options
    | 'v2'
    | fusiontables_v2.Options
) {
  return getAPI<T>('fusiontables', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

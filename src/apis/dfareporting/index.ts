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
import {dfareporting_v3_0} from './v3.0';
import {dfareporting_v3_1} from './v3.1';
import {dfareporting_v3_2} from './v3.2';

export const VERSIONS = {
  'v3.0': dfareporting_v3_0.Dfareporting,
  'v3.1': dfareporting_v3_1.Dfareporting,
  'v3.2': dfareporting_v3_2.Dfareporting,
};

export function dfareporting(version: 'v3_0'): dfareporting_v3_0.Dfareporting;
export function dfareporting(options: dfareporting_v3_0.Options):
    dfareporting_v3_0.Dfareporting;
export function dfareporting(version: 'v3_1'): dfareporting_v3_1.Dfareporting;
export function dfareporting(options: dfareporting_v3_1.Options):
    dfareporting_v3_1.Dfareporting;
export function dfareporting(version: 'v3_2'): dfareporting_v3_2.Dfareporting;
export function dfareporting(options: dfareporting_v3_2.Options):
    dfareporting_v3_2.Dfareporting;
export function dfareporting<
    T = dfareporting_v3_0.Dfareporting | dfareporting_v3_1.Dfareporting |
        dfareporting_v3_2.Dfareporting>(
    this: GoogleConfigurable,
    versionOrOptions: 'v3_0'|dfareporting_v3_0.Options|'v3_1'|
    dfareporting_v3_1.Options|'v3_2'|dfareporting_v3_2.Options) {
  return getAPI<T>('dfareporting', versionOrOptions, VERSIONS, this);
}

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
import {dfareporting_v2_8} from './v2.8';
import {dfareporting_v3_0} from './v3.0';
import {dfareporting_v3_1} from './v3.1';

export const VERSIONS = {
  'v2.8': dfareporting_v2_8.Dfareporting,
  'v3.0': dfareporting_v3_0.Dfareporting,
  'v3.1': dfareporting_v3_1.Dfareporting,
};

export function dfareporting(version: 'v2_8'): dfareporting_v2_8.Dfareporting;
export function dfareporting(options: dfareporting_v2_8.Options):
    dfareporting_v2_8.Dfareporting;
export function dfareporting(version: 'v3_0'): dfareporting_v3_0.Dfareporting;
export function dfareporting(options: dfareporting_v3_0.Options):
    dfareporting_v3_0.Dfareporting;
export function dfareporting(version: 'v3_1'): dfareporting_v3_1.Dfareporting;
export function dfareporting(options: dfareporting_v3_1.Options):
    dfareporting_v3_1.Dfareporting;
export function dfareporting<
    T = dfareporting_v2_8.Dfareporting | dfareporting_v3_0.Dfareporting |
        dfareporting_v3_1.Dfareporting>(
    this: GoogleConfigurable,
    versionOrOptions: 'v2_8'|dfareporting_v2_8.Options|'v3_0'|
    dfareporting_v3_0.Options|'v3_1'|dfareporting_v3_1.Options) {
  return getAPI<T>('dfareporting', versionOrOptions, VERSIONS, this);
}

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
import {dfareporting_v3_3} from './v3.3';
import {dfareporting_v3_4} from './v3.4';
import {dfareporting_v3_5} from './v3.5';
import {dfareporting_v4} from './v4';

export const VERSIONS = {
  'v3.3': dfareporting_v3_3.Dfareporting,
  'v3.4': dfareporting_v3_4.Dfareporting,
  'v3.5': dfareporting_v3_5.Dfareporting,
  v4: dfareporting_v4.Dfareporting,
};

export function dfareporting(version: 'v3.3'): dfareporting_v3_3.Dfareporting;
export function dfareporting(
  options: dfareporting_v3_3.Options
): dfareporting_v3_3.Dfareporting;
export function dfareporting(version: 'v3.4'): dfareporting_v3_4.Dfareporting;
export function dfareporting(
  options: dfareporting_v3_4.Options
): dfareporting_v3_4.Dfareporting;
export function dfareporting(version: 'v3.5'): dfareporting_v3_5.Dfareporting;
export function dfareporting(
  options: dfareporting_v3_5.Options
): dfareporting_v3_5.Dfareporting;
export function dfareporting(version: 'v4'): dfareporting_v4.Dfareporting;
export function dfareporting(
  options: dfareporting_v4.Options
): dfareporting_v4.Dfareporting;
export function dfareporting<
  T =
    | dfareporting_v3_3.Dfareporting
    | dfareporting_v3_4.Dfareporting
    | dfareporting_v3_5.Dfareporting
    | dfareporting_v4.Dfareporting,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v3.3'
    | dfareporting_v3_3.Options
    | 'v3.4'
    | dfareporting_v3_4.Options
    | 'v3.5'
    | dfareporting_v3_5.Options
    | 'v4'
    | dfareporting_v4.Options
) {
  return getAPI<T>('dfareporting', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {dfareporting_v3_3};
export {dfareporting_v3_4};
export {dfareporting_v3_5};
export {dfareporting_v4};
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

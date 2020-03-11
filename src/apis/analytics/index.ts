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
import {analytics_v2_4preprod} from './v2.4preprod';
import {analytics_v3} from './v3';
import {analytics_v3alphapreprod} from './v3alphapreprod';
import {analytics_v3preprod} from './v3preprod';

export const VERSIONS = {
  'v2.4preprod': analytics_v2_4preprod.Analytics,
  v3: analytics_v3.Analytics,
  v3alphapreprod: analytics_v3alphapreprod.Analytics,
  v3preprod: analytics_v3preprod.Analytics,
};

export function analytics(
  version: 'v2.4preprod'
): analytics_v2_4preprod.Analytics;
export function analytics(
  options: analytics_v2_4preprod.Options
): analytics_v2_4preprod.Analytics;
export function analytics(version: 'v3'): analytics_v3.Analytics;
export function analytics(
  options: analytics_v3.Options
): analytics_v3.Analytics;
export function analytics(
  version: 'v3alphapreprod'
): analytics_v3alphapreprod.Analytics;
export function analytics(
  options: analytics_v3alphapreprod.Options
): analytics_v3alphapreprod.Analytics;
export function analytics(version: 'v3preprod'): analytics_v3preprod.Analytics;
export function analytics(
  options: analytics_v3preprod.Options
): analytics_v3preprod.Analytics;
export function analytics<
  T =
    | analytics_v2_4preprod.Analytics
    | analytics_v3.Analytics
    | analytics_v3alphapreprod.Analytics
    | analytics_v3preprod.Analytics
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2.4preprod'
    | analytics_v2_4preprod.Options
    | 'v3'
    | analytics_v3.Options
    | 'v3alphapreprod'
    | analytics_v3alphapreprod.Options
    | 'v3preprod'
    | analytics_v3preprod.Options
) {
  return getAPI<T>('analytics', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

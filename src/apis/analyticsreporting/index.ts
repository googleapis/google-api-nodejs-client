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
import {analyticsreporting_v4} from './v4';

export const VERSIONS = {
  v4: analyticsreporting_v4.Analyticsreporting,
};

export function analyticsreporting(
  version: 'v4'
): analyticsreporting_v4.Analyticsreporting;
export function analyticsreporting(
  options: analyticsreporting_v4.Options
): analyticsreporting_v4.Analyticsreporting;
export function analyticsreporting<
  T = analyticsreporting_v4.Analyticsreporting,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v4' | analyticsreporting_v4.Options
) {
  return getAPI<T>('analyticsreporting', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {analyticsreporting_v4};
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

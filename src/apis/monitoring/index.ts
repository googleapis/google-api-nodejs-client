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
import {monitoring_v1} from './v1';
import {monitoring_v3} from './v3';

export const VERSIONS = {
  v1: monitoring_v1.Monitoring,
  v3: monitoring_v3.Monitoring,
};

export function monitoring(version: 'v1'): monitoring_v1.Monitoring;
export function monitoring(
  options: monitoring_v1.Options
): monitoring_v1.Monitoring;
export function monitoring(version: 'v3'): monitoring_v3.Monitoring;
export function monitoring(
  options: monitoring_v3.Options
): monitoring_v3.Monitoring;
export function monitoring<
  T = monitoring_v1.Monitoring | monitoring_v3.Monitoring,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | monitoring_v1.Options | 'v3' | monitoring_v3.Options
) {
  return getAPI<T>('monitoring', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {monitoring_v1};
export {monitoring_v3};
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

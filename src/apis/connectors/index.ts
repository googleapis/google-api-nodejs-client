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
import {connectors_v1} from './v1';
import {connectors_v2} from './v2';

export const VERSIONS = {
  v1: connectors_v1.Connectors,
  v2: connectors_v2.Connectors,
};

export function connectors(version: 'v1'): connectors_v1.Connectors;
export function connectors(
  options: connectors_v1.Options
): connectors_v1.Connectors;
export function connectors(version: 'v2'): connectors_v2.Connectors;
export function connectors(
  options: connectors_v2.Options
): connectors_v2.Connectors;
export function connectors<
  T = connectors_v1.Connectors | connectors_v2.Connectors,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | connectors_v1.Options | 'v2' | connectors_v2.Options
) {
  return getAPI<T>('connectors', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {connectors_v1};
export {connectors_v2};
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

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
import {agentidentitycredentials_v1} from './v1';
import {agentidentitycredentials_v1alpha} from './v1alpha';
import {agentidentitycredentials_v1beta} from './v1beta';

export const VERSIONS = {
  v1: agentidentitycredentials_v1.Agentidentitycredentials,
  v1alpha: agentidentitycredentials_v1alpha.Agentidentitycredentials,
  v1beta: agentidentitycredentials_v1beta.Agentidentitycredentials,
};

export function agentidentitycredentials(
  version: 'v1'
): agentidentitycredentials_v1.Agentidentitycredentials;
export function agentidentitycredentials(
  options: agentidentitycredentials_v1.Options
): agentidentitycredentials_v1.Agentidentitycredentials;
export function agentidentitycredentials(
  version: 'v1alpha'
): agentidentitycredentials_v1alpha.Agentidentitycredentials;
export function agentidentitycredentials(
  options: agentidentitycredentials_v1alpha.Options
): agentidentitycredentials_v1alpha.Agentidentitycredentials;
export function agentidentitycredentials(
  version: 'v1beta'
): agentidentitycredentials_v1beta.Agentidentitycredentials;
export function agentidentitycredentials(
  options: agentidentitycredentials_v1beta.Options
): agentidentitycredentials_v1beta.Agentidentitycredentials;
export function agentidentitycredentials<
  T =
    | agentidentitycredentials_v1.Agentidentitycredentials
    | agentidentitycredentials_v1alpha.Agentidentitycredentials
    | agentidentitycredentials_v1beta.Agentidentitycredentials,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | agentidentitycredentials_v1.Options
    | 'v1alpha'
    | agentidentitycredentials_v1alpha.Options
    | 'v1beta'
    | agentidentitycredentials_v1beta.Options
) {
  return getAPI<T>(
    'agentidentitycredentials',
    versionOrOptions,
    VERSIONS,
    this
  );
}

const auth = new AuthPlus();
export {auth};
export {agentidentitycredentials_v1};
export {agentidentitycredentials_v1alpha};
export {agentidentitycredentials_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

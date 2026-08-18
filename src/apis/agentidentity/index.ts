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
import {agentidentity_v1} from './v1';
import {agentidentity_v1alpha} from './v1alpha';
import {agentidentity_v1beta} from './v1beta';

export const VERSIONS = {
  v1: agentidentity_v1.Agentidentity,
  v1alpha: agentidentity_v1alpha.Agentidentity,
  v1beta: agentidentity_v1beta.Agentidentity,
};

export function agentidentity(version: 'v1'): agentidentity_v1.Agentidentity;
export function agentidentity(
  options: agentidentity_v1.Options
): agentidentity_v1.Agentidentity;
export function agentidentity(
  version: 'v1alpha'
): agentidentity_v1alpha.Agentidentity;
export function agentidentity(
  options: agentidentity_v1alpha.Options
): agentidentity_v1alpha.Agentidentity;
export function agentidentity(
  version: 'v1beta'
): agentidentity_v1beta.Agentidentity;
export function agentidentity(
  options: agentidentity_v1beta.Options
): agentidentity_v1beta.Agentidentity;
export function agentidentity<
  T =
    | agentidentity_v1.Agentidentity
    | agentidentity_v1alpha.Agentidentity
    | agentidentity_v1beta.Agentidentity,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | agentidentity_v1.Options
    | 'v1alpha'
    | agentidentity_v1alpha.Options
    | 'v1beta'
    | agentidentity_v1beta.Options
) {
  return getAPI<T>('agentidentity', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {agentidentity_v1};
export {agentidentity_v1alpha};
export {agentidentity_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

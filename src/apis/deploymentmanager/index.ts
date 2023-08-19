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
import {deploymentmanager_alpha} from './alpha';
import {deploymentmanager_v2} from './v2';
import {deploymentmanager_v2beta} from './v2beta';

export const VERSIONS = {
  alpha: deploymentmanager_alpha.Deploymentmanager,
  v2: deploymentmanager_v2.Deploymentmanager,
  v2beta: deploymentmanager_v2beta.Deploymentmanager,
};

export function deploymentmanager(
  version: 'alpha'
): deploymentmanager_alpha.Deploymentmanager;
export function deploymentmanager(
  options: deploymentmanager_alpha.Options
): deploymentmanager_alpha.Deploymentmanager;
export function deploymentmanager(
  version: 'v2'
): deploymentmanager_v2.Deploymentmanager;
export function deploymentmanager(
  options: deploymentmanager_v2.Options
): deploymentmanager_v2.Deploymentmanager;
export function deploymentmanager(
  version: 'v2beta'
): deploymentmanager_v2beta.Deploymentmanager;
export function deploymentmanager(
  options: deploymentmanager_v2beta.Options
): deploymentmanager_v2beta.Deploymentmanager;
export function deploymentmanager<
  T =
    | deploymentmanager_alpha.Deploymentmanager
    | deploymentmanager_v2.Deploymentmanager
    | deploymentmanager_v2beta.Deploymentmanager,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'alpha'
    | deploymentmanager_alpha.Options
    | 'v2'
    | deploymentmanager_v2.Options
    | 'v2beta'
    | deploymentmanager_v2beta.Options
) {
  return getAPI<T>('deploymentmanager', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {deploymentmanager_alpha};
export {deploymentmanager_v2};
export {deploymentmanager_v2beta};
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

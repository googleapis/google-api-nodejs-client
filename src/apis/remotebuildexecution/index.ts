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
import {remotebuildexecution_v1} from './v1';
import {remotebuildexecution_v1alpha} from './v1alpha';
import {remotebuildexecution_v2} from './v2';

export const VERSIONS = {
  v1: remotebuildexecution_v1.Remotebuildexecution,
  v1alpha: remotebuildexecution_v1alpha.Remotebuildexecution,
  v2: remotebuildexecution_v2.Remotebuildexecution,
};

export function remotebuildexecution(
  version: 'v1'
): remotebuildexecution_v1.Remotebuildexecution;
export function remotebuildexecution(
  options: remotebuildexecution_v1.Options
): remotebuildexecution_v1.Remotebuildexecution;
export function remotebuildexecution(
  version: 'v1alpha'
): remotebuildexecution_v1alpha.Remotebuildexecution;
export function remotebuildexecution(
  options: remotebuildexecution_v1alpha.Options
): remotebuildexecution_v1alpha.Remotebuildexecution;
export function remotebuildexecution(
  version: 'v2'
): remotebuildexecution_v2.Remotebuildexecution;
export function remotebuildexecution(
  options: remotebuildexecution_v2.Options
): remotebuildexecution_v2.Remotebuildexecution;
export function remotebuildexecution<
  T =
    | remotebuildexecution_v1.Remotebuildexecution
    | remotebuildexecution_v1alpha.Remotebuildexecution
    | remotebuildexecution_v2.Remotebuildexecution,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | remotebuildexecution_v1.Options
    | 'v1alpha'
    | remotebuildexecution_v1alpha.Options
    | 'v2'
    | remotebuildexecution_v2.Options
) {
  return getAPI<T>('remotebuildexecution', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {remotebuildexecution_v1};
export {remotebuildexecution_v1alpha};
export {remotebuildexecution_v2};
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

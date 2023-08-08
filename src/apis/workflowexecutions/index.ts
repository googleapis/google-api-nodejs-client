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
import {workflowexecutions_v1} from './v1';
import {workflowexecutions_v1beta} from './v1beta';

export const VERSIONS = {
  v1: workflowexecutions_v1.Workflowexecutions,
  v1beta: workflowexecutions_v1beta.Workflowexecutions,
};

export function workflowexecutions(
  version: 'v1'
): workflowexecutions_v1.Workflowexecutions;
export function workflowexecutions(
  options: workflowexecutions_v1.Options
): workflowexecutions_v1.Workflowexecutions;
export function workflowexecutions(
  version: 'v1beta'
): workflowexecutions_v1beta.Workflowexecutions;
export function workflowexecutions(
  options: workflowexecutions_v1beta.Options
): workflowexecutions_v1beta.Workflowexecutions;
export function workflowexecutions<
  T =
    | workflowexecutions_v1.Workflowexecutions
    | workflowexecutions_v1beta.Workflowexecutions,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | workflowexecutions_v1.Options
    | 'v1beta'
    | workflowexecutions_v1beta.Options
) {
  return getAPI<T>('workflowexecutions', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {workflowexecutions_v1};
export {workflowexecutions_v1beta};
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

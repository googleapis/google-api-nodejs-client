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
import {dialogflow_v2} from './v2';
import {dialogflow_v2beta1} from './v2beta1';
import {dialogflow_v3} from './v3';
import {dialogflow_v3beta1} from './v3beta1';

export const VERSIONS = {
  v2: dialogflow_v2.Dialogflow,
  v2beta1: dialogflow_v2beta1.Dialogflow,
  v3: dialogflow_v3.Dialogflow,
  v3beta1: dialogflow_v3beta1.Dialogflow,
};

export function dialogflow(version: 'v2'): dialogflow_v2.Dialogflow;
export function dialogflow(
  options: dialogflow_v2.Options
): dialogflow_v2.Dialogflow;
export function dialogflow(version: 'v2beta1'): dialogflow_v2beta1.Dialogflow;
export function dialogflow(
  options: dialogflow_v2beta1.Options
): dialogflow_v2beta1.Dialogflow;
export function dialogflow(version: 'v3'): dialogflow_v3.Dialogflow;
export function dialogflow(
  options: dialogflow_v3.Options
): dialogflow_v3.Dialogflow;
export function dialogflow(version: 'v3beta1'): dialogflow_v3beta1.Dialogflow;
export function dialogflow(
  options: dialogflow_v3beta1.Options
): dialogflow_v3beta1.Dialogflow;
export function dialogflow<
  T =
    | dialogflow_v2.Dialogflow
    | dialogflow_v2beta1.Dialogflow
    | dialogflow_v3.Dialogflow
    | dialogflow_v3beta1.Dialogflow,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | dialogflow_v2.Options
    | 'v2beta1'
    | dialogflow_v2beta1.Options
    | 'v3'
    | dialogflow_v3.Options
    | 'v3beta1'
    | dialogflow_v3beta1.Options
) {
  return getAPI<T>('dialogflow', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {dialogflow_v2};
export {dialogflow_v2beta1};
export {dialogflow_v3};
export {dialogflow_v3beta1};
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

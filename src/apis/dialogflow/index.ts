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
import {dialogflow_v2} from './v2';
import {dialogflow_v2beta1} from './v2beta1';

export const VERSIONS = {
  v2: dialogflow_v2.Dialogflow,
  v2beta1: dialogflow_v2beta1.Dialogflow,
};

export function dialogflow(version: 'v2'): dialogflow_v2.Dialogflow;
export function dialogflow(
  options: dialogflow_v2.Options
): dialogflow_v2.Dialogflow;
export function dialogflow(version: 'v2beta1'): dialogflow_v2beta1.Dialogflow;
export function dialogflow(
  options: dialogflow_v2beta1.Options
): dialogflow_v2beta1.Dialogflow;
export function dialogflow<
  T = dialogflow_v2.Dialogflow | dialogflow_v2beta1.Dialogflow
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | dialogflow_v2.Options
    | 'v2beta1'
    | dialogflow_v2beta1.Options
) {
  return getAPI<T>('dialogflow', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

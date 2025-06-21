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
import {dataflow_v1b3} from './v1b3';

export const VERSIONS = {
  v1b3: dataflow_v1b3.Dataflow,
};

export function dataflow(version: 'v1b3'): dataflow_v1b3.Dataflow;
export function dataflow(
  options: dataflow_v1b3.Options
): dataflow_v1b3.Dataflow;
export function dataflow<T = dataflow_v1b3.Dataflow>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1b3' | dataflow_v1b3.Options
) {
  return getAPI<T>('dataflow', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {dataflow_v1b3};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

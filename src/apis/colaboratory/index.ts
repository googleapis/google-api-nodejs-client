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
import {colaboratory_v1} from './v1';
import {colaboratory_v1beta} from './v1beta';

export const VERSIONS = {
  v1: colaboratory_v1.Colaboratory,
  v1beta: colaboratory_v1beta.Colaboratory,
};

export function colaboratory(version: 'v1'): colaboratory_v1.Colaboratory;
export function colaboratory(
  options: colaboratory_v1.Options
): colaboratory_v1.Colaboratory;
export function colaboratory(
  version: 'v1beta'
): colaboratory_v1beta.Colaboratory;
export function colaboratory(
  options: colaboratory_v1beta.Options
): colaboratory_v1beta.Colaboratory;
export function colaboratory<
  T = colaboratory_v1.Colaboratory | colaboratory_v1beta.Colaboratory,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    'v1' | colaboratory_v1.Options | 'v1beta' | colaboratory_v1beta.Options
) {
  return getAPI<T>('colaboratory', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {colaboratory_v1};
export {colaboratory_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

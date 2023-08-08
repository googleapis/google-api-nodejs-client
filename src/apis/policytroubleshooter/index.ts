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
import {policytroubleshooter_v1} from './v1';
import {policytroubleshooter_v1beta} from './v1beta';

export const VERSIONS = {
  v1: policytroubleshooter_v1.Policytroubleshooter,
  v1beta: policytroubleshooter_v1beta.Policytroubleshooter,
};

export function policytroubleshooter(
  version: 'v1'
): policytroubleshooter_v1.Policytroubleshooter;
export function policytroubleshooter(
  options: policytroubleshooter_v1.Options
): policytroubleshooter_v1.Policytroubleshooter;
export function policytroubleshooter(
  version: 'v1beta'
): policytroubleshooter_v1beta.Policytroubleshooter;
export function policytroubleshooter(
  options: policytroubleshooter_v1beta.Options
): policytroubleshooter_v1beta.Policytroubleshooter;
export function policytroubleshooter<
  T =
    | policytroubleshooter_v1.Policytroubleshooter
    | policytroubleshooter_v1beta.Policytroubleshooter,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | policytroubleshooter_v1.Options
    | 'v1beta'
    | policytroubleshooter_v1beta.Options
) {
  return getAPI<T>('policytroubleshooter', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {policytroubleshooter_v1};
export {policytroubleshooter_v1beta};
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

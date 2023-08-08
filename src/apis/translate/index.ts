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
import {translate_v2} from './v2';
import {translate_v3} from './v3';
import {translate_v3beta1} from './v3beta1';

export const VERSIONS = {
  v2: translate_v2.Translate,
  v3: translate_v3.Translate,
  v3beta1: translate_v3beta1.Translate,
};

export function translate(version: 'v2'): translate_v2.Translate;
export function translate(
  options: translate_v2.Options
): translate_v2.Translate;
export function translate(version: 'v3'): translate_v3.Translate;
export function translate(
  options: translate_v3.Options
): translate_v3.Translate;
export function translate(version: 'v3beta1'): translate_v3beta1.Translate;
export function translate(
  options: translate_v3beta1.Options
): translate_v3beta1.Translate;
export function translate<
  T =
    | translate_v2.Translate
    | translate_v3.Translate
    | translate_v3beta1.Translate,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | translate_v2.Options
    | 'v3'
    | translate_v3.Options
    | 'v3beta1'
    | translate_v3beta1.Options
) {
  return getAPI<T>('translate', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {translate_v2};
export {translate_v3};
export {translate_v3beta1};
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

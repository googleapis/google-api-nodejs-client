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
import {androidpublisher_v1_1} from './v1.1';
import {androidpublisher_v1} from './v1';
import {androidpublisher_v2} from './v2';
import {androidpublisher_v3} from './v3';

export const VERSIONS = {
  'v1.1': androidpublisher_v1_1.Androidpublisher,
  v1: androidpublisher_v1.Androidpublisher,
  v2: androidpublisher_v2.Androidpublisher,
  v3: androidpublisher_v3.Androidpublisher,
};

export function androidpublisher(
  version: 'v1.1'
): androidpublisher_v1_1.Androidpublisher;
export function androidpublisher(
  options: androidpublisher_v1_1.Options
): androidpublisher_v1_1.Androidpublisher;
export function androidpublisher(
  version: 'v1'
): androidpublisher_v1.Androidpublisher;
export function androidpublisher(
  options: androidpublisher_v1.Options
): androidpublisher_v1.Androidpublisher;
export function androidpublisher(
  version: 'v2'
): androidpublisher_v2.Androidpublisher;
export function androidpublisher(
  options: androidpublisher_v2.Options
): androidpublisher_v2.Androidpublisher;
export function androidpublisher(
  version: 'v3'
): androidpublisher_v3.Androidpublisher;
export function androidpublisher(
  options: androidpublisher_v3.Options
): androidpublisher_v3.Androidpublisher;
export function androidpublisher<
  T =
    | androidpublisher_v1_1.Androidpublisher
    | androidpublisher_v1.Androidpublisher
    | androidpublisher_v2.Androidpublisher
    | androidpublisher_v3.Androidpublisher,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1.1'
    | androidpublisher_v1_1.Options
    | 'v1'
    | androidpublisher_v1.Options
    | 'v2'
    | androidpublisher_v2.Options
    | 'v3'
    | androidpublisher_v3.Options
) {
  return getAPI<T>('androidpublisher', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {androidpublisher_v1_1};
export {androidpublisher_v1};
export {androidpublisher_v2};
export {androidpublisher_v3};
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

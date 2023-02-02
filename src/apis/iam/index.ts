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
import {iam_v1} from './v1';
import {iam_v2} from './v2';
import {iam_v2beta} from './v2beta';

export const VERSIONS = {
  v1: iam_v1.Iam,
  v2: iam_v2.Iam,
  v2beta: iam_v2beta.Iam,
};

export function iam(version: 'v1'): iam_v1.Iam;
export function iam(options: iam_v1.Options): iam_v1.Iam;
export function iam(version: 'v2'): iam_v2.Iam;
export function iam(options: iam_v2.Options): iam_v2.Iam;
export function iam(version: 'v2beta'): iam_v2beta.Iam;
export function iam(options: iam_v2beta.Options): iam_v2beta.Iam;
export function iam<T = iam_v1.Iam | iam_v2.Iam | iam_v2beta.Iam>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | iam_v1.Options
    | 'v2'
    | iam_v2.Options
    | 'v2beta'
    | iam_v2beta.Options
) {
  return getAPI<T>('iam', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {iam_v1};
export {iam_v2};
export {iam_v2beta};
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

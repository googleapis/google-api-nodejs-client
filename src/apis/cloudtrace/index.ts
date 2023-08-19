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
import {cloudtrace_v1} from './v1';
import {cloudtrace_v2} from './v2';
import {cloudtrace_v2beta1} from './v2beta1';

export const VERSIONS = {
  v1: cloudtrace_v1.Cloudtrace,
  v2: cloudtrace_v2.Cloudtrace,
  v2beta1: cloudtrace_v2beta1.Cloudtrace,
};

export function cloudtrace(version: 'v1'): cloudtrace_v1.Cloudtrace;
export function cloudtrace(
  options: cloudtrace_v1.Options
): cloudtrace_v1.Cloudtrace;
export function cloudtrace(version: 'v2'): cloudtrace_v2.Cloudtrace;
export function cloudtrace(
  options: cloudtrace_v2.Options
): cloudtrace_v2.Cloudtrace;
export function cloudtrace(version: 'v2beta1'): cloudtrace_v2beta1.Cloudtrace;
export function cloudtrace(
  options: cloudtrace_v2beta1.Options
): cloudtrace_v2beta1.Cloudtrace;
export function cloudtrace<
  T =
    | cloudtrace_v1.Cloudtrace
    | cloudtrace_v2.Cloudtrace
    | cloudtrace_v2beta1.Cloudtrace,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudtrace_v1.Options
    | 'v2'
    | cloudtrace_v2.Options
    | 'v2beta1'
    | cloudtrace_v2beta1.Options
) {
  return getAPI<T>('cloudtrace', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudtrace_v1};
export {cloudtrace_v2};
export {cloudtrace_v2beta1};
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

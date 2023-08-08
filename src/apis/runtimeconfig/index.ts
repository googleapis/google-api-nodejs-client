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
import {runtimeconfig_v1} from './v1';
import {runtimeconfig_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: runtimeconfig_v1.Runtimeconfig,
  v1beta1: runtimeconfig_v1beta1.Runtimeconfig,
};

export function runtimeconfig(version: 'v1'): runtimeconfig_v1.Runtimeconfig;
export function runtimeconfig(
  options: runtimeconfig_v1.Options
): runtimeconfig_v1.Runtimeconfig;
export function runtimeconfig(
  version: 'v1beta1'
): runtimeconfig_v1beta1.Runtimeconfig;
export function runtimeconfig(
  options: runtimeconfig_v1beta1.Options
): runtimeconfig_v1beta1.Runtimeconfig;
export function runtimeconfig<
  T = runtimeconfig_v1.Runtimeconfig | runtimeconfig_v1beta1.Runtimeconfig,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | runtimeconfig_v1.Options
    | 'v1beta1'
    | runtimeconfig_v1beta1.Options
) {
  return getAPI<T>('runtimeconfig', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {runtimeconfig_v1};
export {runtimeconfig_v1beta1};
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

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
import {cloudidentity_v1} from './v1';
import {cloudidentity_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: cloudidentity_v1.Cloudidentity,
  v1beta1: cloudidentity_v1beta1.Cloudidentity,
};

export function cloudidentity(version: 'v1'): cloudidentity_v1.Cloudidentity;
export function cloudidentity(
  options: cloudidentity_v1.Options
): cloudidentity_v1.Cloudidentity;
export function cloudidentity(
  version: 'v1beta1'
): cloudidentity_v1beta1.Cloudidentity;
export function cloudidentity(
  options: cloudidentity_v1beta1.Options
): cloudidentity_v1beta1.Cloudidentity;
export function cloudidentity<
  T = cloudidentity_v1.Cloudidentity | cloudidentity_v1beta1.Cloudidentity,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudidentity_v1.Options
    | 'v1beta1'
    | cloudidentity_v1beta1.Options
) {
  return getAPI<T>('cloudidentity', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudidentity_v1};
export {cloudidentity_v1beta1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

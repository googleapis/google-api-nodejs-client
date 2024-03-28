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
import {cloudcontrolspartner_v1} from './v1';
import {cloudcontrolspartner_v1beta} from './v1beta';

export const VERSIONS = {
  v1: cloudcontrolspartner_v1.Cloudcontrolspartner,
  v1beta: cloudcontrolspartner_v1beta.Cloudcontrolspartner,
};

export function cloudcontrolspartner(
  version: 'v1'
): cloudcontrolspartner_v1.Cloudcontrolspartner;
export function cloudcontrolspartner(
  options: cloudcontrolspartner_v1.Options
): cloudcontrolspartner_v1.Cloudcontrolspartner;
export function cloudcontrolspartner(
  version: 'v1beta'
): cloudcontrolspartner_v1beta.Cloudcontrolspartner;
export function cloudcontrolspartner(
  options: cloudcontrolspartner_v1beta.Options
): cloudcontrolspartner_v1beta.Cloudcontrolspartner;
export function cloudcontrolspartner<
  T =
    | cloudcontrolspartner_v1.Cloudcontrolspartner
    | cloudcontrolspartner_v1beta.Cloudcontrolspartner,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | cloudcontrolspartner_v1.Options
    | 'v1beta'
    | cloudcontrolspartner_v1beta.Options
) {
  return getAPI<T>('cloudcontrolspartner', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {cloudcontrolspartner_v1};
export {cloudcontrolspartner_v1beta};
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

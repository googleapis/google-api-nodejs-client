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
import {servicecontrol_v1} from './v1';
import {servicecontrol_v2} from './v2';

export const VERSIONS = {
  v1: servicecontrol_v1.Servicecontrol,
  v2: servicecontrol_v2.Servicecontrol,
};

export function servicecontrol(version: 'v1'): servicecontrol_v1.Servicecontrol;
export function servicecontrol(
  options: servicecontrol_v1.Options
): servicecontrol_v1.Servicecontrol;
export function servicecontrol(version: 'v2'): servicecontrol_v2.Servicecontrol;
export function servicecontrol(
  options: servicecontrol_v2.Options
): servicecontrol_v2.Servicecontrol;
export function servicecontrol<
  T = servicecontrol_v1.Servicecontrol | servicecontrol_v2.Servicecontrol,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | servicecontrol_v1.Options
    | 'v2'
    | servicecontrol_v2.Options
) {
  return getAPI<T>('servicecontrol', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {servicecontrol_v1};
export {servicecontrol_v2};
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

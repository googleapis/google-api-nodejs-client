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
import {netapp_v1} from './v1';
import {netapp_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: netapp_v1.Netapp,
  v1beta1: netapp_v1beta1.Netapp,
};

export function netapp(version: 'v1'): netapp_v1.Netapp;
export function netapp(options: netapp_v1.Options): netapp_v1.Netapp;
export function netapp(version: 'v1beta1'): netapp_v1beta1.Netapp;
export function netapp(options: netapp_v1beta1.Options): netapp_v1beta1.Netapp;
export function netapp<T = netapp_v1.Netapp | netapp_v1beta1.Netapp>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | netapp_v1.Options
    | 'v1beta1'
    | netapp_v1beta1.Options
) {
  return getAPI<T>('netapp', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {netapp_v1};
export {netapp_v1beta1};
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

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
import {apphub_v1} from './v1';
import {apphub_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: apphub_v1.Apphub,
  v1alpha: apphub_v1alpha.Apphub,
};

export function apphub(version: 'v1'): apphub_v1.Apphub;
export function apphub(options: apphub_v1.Options): apphub_v1.Apphub;
export function apphub(version: 'v1alpha'): apphub_v1alpha.Apphub;
export function apphub(options: apphub_v1alpha.Options): apphub_v1alpha.Apphub;
export function apphub<T = apphub_v1.Apphub | apphub_v1alpha.Apphub>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | apphub_v1.Options
    | 'v1alpha'
    | apphub_v1alpha.Options
) {
  return getAPI<T>('apphub', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {apphub_v1};
export {apphub_v1alpha};
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

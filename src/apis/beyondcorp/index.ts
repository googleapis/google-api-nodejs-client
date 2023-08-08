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
import {beyondcorp_v1} from './v1';
import {beyondcorp_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: beyondcorp_v1.Beyondcorp,
  v1alpha: beyondcorp_v1alpha.Beyondcorp,
};

export function beyondcorp(version: 'v1'): beyondcorp_v1.Beyondcorp;
export function beyondcorp(
  options: beyondcorp_v1.Options
): beyondcorp_v1.Beyondcorp;
export function beyondcorp(version: 'v1alpha'): beyondcorp_v1alpha.Beyondcorp;
export function beyondcorp(
  options: beyondcorp_v1alpha.Options
): beyondcorp_v1alpha.Beyondcorp;
export function beyondcorp<
  T = beyondcorp_v1.Beyondcorp | beyondcorp_v1alpha.Beyondcorp,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | beyondcorp_v1.Options
    | 'v1alpha'
    | beyondcorp_v1alpha.Options
) {
  return getAPI<T>('beyondcorp', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {beyondcorp_v1};
export {beyondcorp_v1alpha};
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

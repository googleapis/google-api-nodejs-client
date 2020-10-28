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
import {playablelocations_v3} from './v3';

export const VERSIONS = {
  v3: playablelocations_v3.Playablelocations,
};

export function playablelocations(
  version: 'v3'
): playablelocations_v3.Playablelocations;
export function playablelocations(
  options: playablelocations_v3.Options
): playablelocations_v3.Playablelocations;
export function playablelocations<T = playablelocations_v3.Playablelocations>(
  this: GoogleConfigurable,
  versionOrOptions: 'v3' | playablelocations_v3.Options
) {
  return getAPI<T>('playablelocations', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {playablelocations_v3};
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

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
import {gamesManagement_v1management} from './v1management';

export const VERSIONS = {
  v1management: gamesManagement_v1management.Gamesmanagement,
};

export function gamesManagement(
  version: 'v1management'
): gamesManagement_v1management.Gamesmanagement;
export function gamesManagement(
  options: gamesManagement_v1management.Options
): gamesManagement_v1management.Gamesmanagement;
export function gamesManagement<
  T = gamesManagement_v1management.Gamesmanagement,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1management' | gamesManagement_v1management.Options
) {
  return getAPI<T>('gamesManagement', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {gamesManagement_v1management};
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

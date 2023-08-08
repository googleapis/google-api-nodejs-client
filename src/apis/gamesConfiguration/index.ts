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
import {gamesConfiguration_v1configuration} from './v1configuration';

export const VERSIONS = {
  v1configuration: gamesConfiguration_v1configuration.Gamesconfiguration,
};

export function gamesConfiguration(
  version: 'v1configuration'
): gamesConfiguration_v1configuration.Gamesconfiguration;
export function gamesConfiguration(
  options: gamesConfiguration_v1configuration.Options
): gamesConfiguration_v1configuration.Gamesconfiguration;
export function gamesConfiguration<
  T = gamesConfiguration_v1configuration.Gamesconfiguration,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1configuration'
    | gamesConfiguration_v1configuration.Options
) {
  return getAPI<T>('gamesConfiguration', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {gamesConfiguration_v1configuration};
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

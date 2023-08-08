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
import {gameservices_v1} from './v1';
import {gameservices_v1beta} from './v1beta';

export const VERSIONS = {
  v1: gameservices_v1.Gameservices,
  v1beta: gameservices_v1beta.Gameservices,
};

export function gameservices(version: 'v1'): gameservices_v1.Gameservices;
export function gameservices(
  options: gameservices_v1.Options
): gameservices_v1.Gameservices;
export function gameservices(
  version: 'v1beta'
): gameservices_v1beta.Gameservices;
export function gameservices(
  options: gameservices_v1beta.Options
): gameservices_v1beta.Gameservices;
export function gameservices<
  T = gameservices_v1.Gameservices | gameservices_v1beta.Gameservices,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | gameservices_v1.Options
    | 'v1beta'
    | gameservices_v1beta.Options
) {
  return getAPI<T>('gameservices', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {gameservices_v1};
export {gameservices_v1beta};
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

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
import {displayvideo_v1} from './v1';
import {displayvideo_v1beta} from './v1beta';
import {displayvideo_v1beta2} from './v1beta2';
import {displayvideo_v1dev} from './v1dev';
import {displayvideo_v2} from './v2';
import {displayvideo_v3} from './v3';
import {displayvideo_v4} from './v4';

export const VERSIONS = {
  v1: displayvideo_v1.Displayvideo,
  v1beta: displayvideo_v1beta.Displayvideo,
  v1beta2: displayvideo_v1beta2.Displayvideo,
  v1dev: displayvideo_v1dev.Displayvideo,
  v2: displayvideo_v2.Displayvideo,
  v3: displayvideo_v3.Displayvideo,
  v4: displayvideo_v4.Displayvideo,
};

export function displayvideo(version: 'v1'): displayvideo_v1.Displayvideo;
export function displayvideo(
  options: displayvideo_v1.Options
): displayvideo_v1.Displayvideo;
export function displayvideo(
  version: 'v1beta'
): displayvideo_v1beta.Displayvideo;
export function displayvideo(
  options: displayvideo_v1beta.Options
): displayvideo_v1beta.Displayvideo;
export function displayvideo(
  version: 'v1beta2'
): displayvideo_v1beta2.Displayvideo;
export function displayvideo(
  options: displayvideo_v1beta2.Options
): displayvideo_v1beta2.Displayvideo;
export function displayvideo(version: 'v1dev'): displayvideo_v1dev.Displayvideo;
export function displayvideo(
  options: displayvideo_v1dev.Options
): displayvideo_v1dev.Displayvideo;
export function displayvideo(version: 'v2'): displayvideo_v2.Displayvideo;
export function displayvideo(
  options: displayvideo_v2.Options
): displayvideo_v2.Displayvideo;
export function displayvideo(version: 'v3'): displayvideo_v3.Displayvideo;
export function displayvideo(
  options: displayvideo_v3.Options
): displayvideo_v3.Displayvideo;
export function displayvideo(version: 'v4'): displayvideo_v4.Displayvideo;
export function displayvideo(
  options: displayvideo_v4.Options
): displayvideo_v4.Displayvideo;
export function displayvideo<
  T =
    | displayvideo_v1.Displayvideo
    | displayvideo_v1beta.Displayvideo
    | displayvideo_v1beta2.Displayvideo
    | displayvideo_v1dev.Displayvideo
    | displayvideo_v2.Displayvideo
    | displayvideo_v3.Displayvideo
    | displayvideo_v4.Displayvideo,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | displayvideo_v1.Options
    | 'v1beta'
    | displayvideo_v1beta.Options
    | 'v1beta2'
    | displayvideo_v1beta2.Options
    | 'v1dev'
    | displayvideo_v1dev.Options
    | 'v2'
    | displayvideo_v2.Options
    | 'v3'
    | displayvideo_v3.Options
    | 'v4'
    | displayvideo_v4.Options
) {
  return getAPI<T>('displayvideo', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {displayvideo_v1};
export {displayvideo_v1beta};
export {displayvideo_v1beta2};
export {displayvideo_v1dev};
export {displayvideo_v2};
export {displayvideo_v3};
export {displayvideo_v4};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

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
import {tagmanager_v1} from './v1';
import {tagmanager_v2} from './v2';

export const VERSIONS = {
  v1: tagmanager_v1.Tagmanager,
  v2: tagmanager_v2.Tagmanager,
};

export function tagmanager(version: 'v1'): tagmanager_v1.Tagmanager;
export function tagmanager(
  options: tagmanager_v1.Options
): tagmanager_v1.Tagmanager;
export function tagmanager(version: 'v2'): tagmanager_v2.Tagmanager;
export function tagmanager(
  options: tagmanager_v2.Options
): tagmanager_v2.Tagmanager;
export function tagmanager<
  T = tagmanager_v1.Tagmanager | tagmanager_v2.Tagmanager,
>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | tagmanager_v1.Options | 'v2' | tagmanager_v2.Options
) {
  return getAPI<T>('tagmanager', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {tagmanager_v1};
export {tagmanager_v2};
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

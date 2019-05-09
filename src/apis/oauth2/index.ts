// Copyright 2019 Google LLC
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
import {oauth2_v1} from './v1';
import {oauth2_v2} from './v2';

export const VERSIONS = {
  v1: oauth2_v1.Oauth2,
  v2: oauth2_v2.Oauth2,
};

export function oauth2(version: 'v1'): oauth2_v1.Oauth2;
export function oauth2(options: oauth2_v1.Options): oauth2_v1.Oauth2;
export function oauth2(version: 'v2'): oauth2_v2.Oauth2;
export function oauth2(options: oauth2_v2.Options): oauth2_v2.Oauth2;
export function oauth2<T = oauth2_v1.Oauth2 | oauth2_v2.Oauth2>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | oauth2_v1.Options | 'v2' | oauth2_v2.Options
) {
  return getAPI<T>('oauth2', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

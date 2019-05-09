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
import {blogger_v2} from './v2';
import {blogger_v3} from './v3';

export const VERSIONS = {
  v2: blogger_v2.Blogger,
  v3: blogger_v3.Blogger,
};

export function blogger(version: 'v2'): blogger_v2.Blogger;
export function blogger(options: blogger_v2.Options): blogger_v2.Blogger;
export function blogger(version: 'v3'): blogger_v3.Blogger;
export function blogger(options: blogger_v3.Options): blogger_v3.Blogger;
export function blogger<T = blogger_v2.Blogger | blogger_v3.Blogger>(
  this: GoogleConfigurable,
  versionOrOptions: 'v2' | blogger_v2.Options | 'v3' | blogger_v3.Options
) {
  return getAPI<T>('blogger', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

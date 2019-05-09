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
import {webmasters_v3} from './v3';

export const VERSIONS = {
  v3: webmasters_v3.Webmasters,
};

export function webmasters(version: 'v3'): webmasters_v3.Webmasters;
export function webmasters(
  options: webmasters_v3.Options
): webmasters_v3.Webmasters;
export function webmasters<T = webmasters_v3.Webmasters>(
  this: GoogleConfigurable,
  versionOrOptions: 'v3' | webmasters_v3.Options
) {
  return getAPI<T>('webmasters', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

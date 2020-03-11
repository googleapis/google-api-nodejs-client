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
import {displayvideo_v1} from './v1';

export const VERSIONS = {
  v1: displayvideo_v1.Displayvideo,
};

export function displayvideo(version: 'v1'): displayvideo_v1.Displayvideo;
export function displayvideo(
  options: displayvideo_v1.Options
): displayvideo_v1.Displayvideo;
export function displayvideo<T = displayvideo_v1.Displayvideo>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | displayvideo_v1.Options
) {
  return getAPI<T>('displayvideo', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

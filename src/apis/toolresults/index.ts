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
import {toolresults_v1beta3} from './v1beta3';

export const VERSIONS = {
  v1beta3: toolresults_v1beta3.Toolresults,
};

export function toolresults(
  version: 'v1beta3'
): toolresults_v1beta3.Toolresults;
export function toolresults(
  options: toolresults_v1beta3.Options
): toolresults_v1beta3.Toolresults;
export function toolresults<T = toolresults_v1beta3.Toolresults>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1beta3' | toolresults_v1beta3.Options
) {
  return getAPI<T>('toolresults', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

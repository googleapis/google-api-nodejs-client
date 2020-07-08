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
import {documentai_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1beta2: documentai_v1beta2.Documentai,
};

export function documentai(version: 'v1beta2'): documentai_v1beta2.Documentai;
export function documentai(
  options: documentai_v1beta2.Options
): documentai_v1beta2.Documentai;
export function documentai<T = documentai_v1beta2.Documentai>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1beta2' | documentai_v1beta2.Options
) {
  return getAPI<T>('documentai', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

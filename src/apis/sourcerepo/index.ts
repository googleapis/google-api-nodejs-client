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
import {sourcerepo_v1} from './v1';

export const VERSIONS = {
  v1: sourcerepo_v1.Sourcerepo,
};

export function sourcerepo(version: 'v1'): sourcerepo_v1.Sourcerepo;
export function sourcerepo(
  options: sourcerepo_v1.Options
): sourcerepo_v1.Sourcerepo;
export function sourcerepo<T = sourcerepo_v1.Sourcerepo>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | sourcerepo_v1.Options
) {
  return getAPI<T>('sourcerepo', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

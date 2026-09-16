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
import {developerknowledge_v1} from './v1';
import {developerknowledge_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: developerknowledge_v1.Developerknowledge,
  v1alpha: developerknowledge_v1alpha.Developerknowledge,
};

export function developerknowledge(
  version: 'v1'
): developerknowledge_v1.Developerknowledge;
export function developerknowledge(
  options: developerknowledge_v1.Options
): developerknowledge_v1.Developerknowledge;
export function developerknowledge(
  version: 'v1alpha'
): developerknowledge_v1alpha.Developerknowledge;
export function developerknowledge(
  options: developerknowledge_v1alpha.Options
): developerknowledge_v1alpha.Developerknowledge;
export function developerknowledge<
  T =
    | developerknowledge_v1.Developerknowledge
    | developerknowledge_v1alpha.Developerknowledge,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | developerknowledge_v1.Options
    | 'v1alpha'
    | developerknowledge_v1alpha.Options
) {
  return getAPI<T>('developerknowledge', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {developerknowledge_v1};
export {developerknowledge_v1alpha};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

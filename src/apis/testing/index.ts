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
import {testing_v1} from './v1';

export const VERSIONS = {
  v1: testing_v1.Testing,
};

export function testing(version: 'v1'): testing_v1.Testing;
export function testing(options: testing_v1.Options): testing_v1.Testing;
export function testing<T = testing_v1.Testing>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | testing_v1.Options
) {
  return getAPI<T>('testing', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

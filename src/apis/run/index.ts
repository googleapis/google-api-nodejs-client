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
import {run_v1} from './v1';
import {run_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  v1: run_v1.Run,
  v1alpha1: run_v1alpha1.Run,
};

export function run(version: 'v1'): run_v1.Run;
export function run(options: run_v1.Options): run_v1.Run;
export function run(version: 'v1alpha1'): run_v1alpha1.Run;
export function run(options: run_v1alpha1.Options): run_v1alpha1.Run;
export function run<T = run_v1.Run | run_v1alpha1.Run>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | run_v1.Options | 'v1alpha1' | run_v1alpha1.Options
) {
  return getAPI<T>('run', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

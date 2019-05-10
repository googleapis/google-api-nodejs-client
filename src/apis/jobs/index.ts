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
import {jobs_v2} from './v2';
import {jobs_v3} from './v3';
import {jobs_v3p1beta1} from './v3p1beta1';

export const VERSIONS = {
  v2: jobs_v2.Jobs,
  v3: jobs_v3.Jobs,
  v3p1beta1: jobs_v3p1beta1.Jobs,
};

export function jobs(version: 'v2'): jobs_v2.Jobs;
export function jobs(options: jobs_v2.Options): jobs_v2.Jobs;
export function jobs(version: 'v3'): jobs_v3.Jobs;
export function jobs(options: jobs_v3.Options): jobs_v3.Jobs;
export function jobs(version: 'v3p1beta1'): jobs_v3p1beta1.Jobs;
export function jobs(options: jobs_v3p1beta1.Options): jobs_v3p1beta1.Jobs;
export function jobs<T = jobs_v2.Jobs | jobs_v3.Jobs | jobs_v3p1beta1.Jobs>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v2'
    | jobs_v2.Options
    | 'v3'
    | jobs_v3.Options
    | 'v3p1beta1'
    | jobs_v3p1beta1.Options
) {
  return getAPI<T>('jobs', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

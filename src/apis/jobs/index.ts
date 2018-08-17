// Copyright 2018, Google, LLC.
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

import {getAPI, GoogleConfigurable} from 'googleapis-common';
import {jobs_v2} from './v2';

export const VERSIONS = {
  'v2': jobs_v2.Jobs,
};

export function jobs(version: 'v2'): jobs_v2.Jobs;
export function jobs(options: jobs_v2.Options): jobs_v2.Jobs;
export function jobs<T = jobs_v2.Jobs>(
    this: GoogleConfigurable, versionOrOptions: 'v2'|jobs_v2.Options) {
  return getAPI<T>('jobs', versionOrOptions, VERSIONS, this);
}

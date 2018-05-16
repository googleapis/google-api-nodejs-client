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

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {cloudtasks_v2beta2} from './v2beta2';

export const VERSIONS = {
  'v2beta2': cloudtasks_v2beta2.Cloudtasks,
};

export function cloudtasks(version: 'v2beta2'): cloudtasks_v2beta2.Cloudtasks;
export function cloudtasks(options: cloudtasks_v2beta2.Options):
    cloudtasks_v2beta2.Cloudtasks;
export function cloudtasks<T = cloudtasks_v2beta2.Cloudtasks>(
    this: GoogleConfigurable,
    versionOrOptions: 'v2beta2'|cloudtasks_v2beta2.Options) {
  return getAPI<T>('cloudtasks', versionOrOptions, VERSIONS, this);
}

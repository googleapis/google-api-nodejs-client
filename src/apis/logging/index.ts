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
import {logging_v2} from './v2';
import {logging_v2beta1} from './v2beta1';

export const VERSIONS = {
  'v2': logging_v2.Logging,
  'v2beta1': logging_v2beta1.Logging,
};

export function logging(version: 'v2'): logging_v2.Logging;
export function logging(options: logging_v2.Options): logging_v2.Logging;
export function logging(version: 'v2beta1'): logging_v2beta1.Logging;
export function logging(options: logging_v2beta1.Options):
    logging_v2beta1.Logging;
export function logging<T = logging_v2.Logging | logging_v2beta1.Logging>(
    this: GoogleConfigurable,
    versionOrOptions: 'v2'|logging_v2.Options|'v2beta1'|
    logging_v2beta1.Options) {
  return getAPI<T>('logging', versionOrOptions, VERSIONS, this);
}

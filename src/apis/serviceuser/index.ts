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
import {serviceuser_v1} from './v1';

export const VERSIONS = {
  'v1': serviceuser_v1.Serviceuser,
};

export function serviceuser(version: 'v1'): serviceuser_v1.Serviceuser;
export function serviceuser(options: serviceuser_v1.Options):
    serviceuser_v1.Serviceuser;
export function serviceuser<T = serviceuser_v1.Serviceuser>(
    this: GoogleConfigurable, versionOrOptions: 'v1'|serviceuser_v1.Options) {
  return getAPI<T>('serviceuser', versionOrOptions, VERSIONS, this);
}

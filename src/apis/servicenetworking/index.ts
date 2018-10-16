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
import {servicenetworking_v1beta} from './v1beta';

export const VERSIONS = {
  'v1beta': servicenetworking_v1beta.Servicenetworking,
};

export function servicenetworking(version: 'v1beta'):
    servicenetworking_v1beta.Servicenetworking;
export function servicenetworking(options: servicenetworking_v1beta.Options):
    servicenetworking_v1beta.Servicenetworking;
export function
servicenetworking<T = servicenetworking_v1beta.Servicenetworking>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1beta'|servicenetworking_v1beta.Options) {
  return getAPI<T>('servicenetworking', versionOrOptions, VERSIONS, this);
}

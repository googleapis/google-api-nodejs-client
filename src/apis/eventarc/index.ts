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
import {eventarc_v1} from './v1';
import {eventarc_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: eventarc_v1.Eventarc,
  v1beta1: eventarc_v1beta1.Eventarc,
};

export function eventarc(version: 'v1'): eventarc_v1.Eventarc;
export function eventarc(options: eventarc_v1.Options): eventarc_v1.Eventarc;
export function eventarc(version: 'v1beta1'): eventarc_v1beta1.Eventarc;
export function eventarc(
  options: eventarc_v1beta1.Options
): eventarc_v1beta1.Eventarc;
export function eventarc<T = eventarc_v1.Eventarc | eventarc_v1beta1.Eventarc>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | eventarc_v1.Options
    | 'v1beta1'
    | eventarc_v1beta1.Options
) {
  return getAPI<T>('eventarc', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {eventarc_v1};
export {eventarc_v1beta1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  GaxiosPromise,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

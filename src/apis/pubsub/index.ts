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
import {pubsub_v1} from './v1';
import {pubsub_v1beta1a} from './v1beta1a';
import {pubsub_v1beta2} from './v1beta2';

export const VERSIONS = {
  v1: pubsub_v1.Pubsub,
  v1beta1a: pubsub_v1beta1a.Pubsub,
  v1beta2: pubsub_v1beta2.Pubsub,
};

export function pubsub(version: 'v1'): pubsub_v1.Pubsub;
export function pubsub(options: pubsub_v1.Options): pubsub_v1.Pubsub;
export function pubsub(version: 'v1beta1a'): pubsub_v1beta1a.Pubsub;
export function pubsub(
  options: pubsub_v1beta1a.Options
): pubsub_v1beta1a.Pubsub;
export function pubsub(version: 'v1beta2'): pubsub_v1beta2.Pubsub;
export function pubsub(options: pubsub_v1beta2.Options): pubsub_v1beta2.Pubsub;
export function pubsub<
  T = pubsub_v1.Pubsub | pubsub_v1beta1a.Pubsub | pubsub_v1beta2.Pubsub,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | pubsub_v1.Options
    | 'v1beta1a'
    | pubsub_v1beta1a.Options
    | 'v1beta2'
    | pubsub_v1beta2.Options
) {
  return getAPI<T>('pubsub', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {pubsub_v1};
export {pubsub_v1beta1a};
export {pubsub_v1beta2};
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

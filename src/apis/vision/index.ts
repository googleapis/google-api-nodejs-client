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
import {vision_v1} from './v1';
import {vision_v1p1beta1} from './v1p1beta1';
import {vision_v1p2beta1} from './v1p2beta1';

export const VERSIONS = {
  v1: vision_v1.Vision,
  v1p1beta1: vision_v1p1beta1.Vision,
  v1p2beta1: vision_v1p2beta1.Vision,
};

export function vision(version: 'v1'): vision_v1.Vision;
export function vision(options: vision_v1.Options): vision_v1.Vision;
export function vision(version: 'v1p1beta1'): vision_v1p1beta1.Vision;
export function vision(
  options: vision_v1p1beta1.Options
): vision_v1p1beta1.Vision;
export function vision(version: 'v1p2beta1'): vision_v1p2beta1.Vision;
export function vision(
  options: vision_v1p2beta1.Options
): vision_v1p2beta1.Vision;
export function vision<
  T = vision_v1.Vision | vision_v1p1beta1.Vision | vision_v1p2beta1.Vision,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | vision_v1.Options
    | 'v1p1beta1'
    | vision_v1p1beta1.Options
    | 'v1p2beta1'
    | vision_v1p2beta1.Options
) {
  return getAPI<T>('vision', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {vision_v1};
export {vision_v1p1beta1};
export {vision_v1p2beta1};
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

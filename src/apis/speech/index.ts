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
import {speech_v1} from './v1';
import {speech_v1p1beta1} from './v1p1beta1';
import {speech_v2beta1} from './v2beta1';

export const VERSIONS = {
  v1: speech_v1.Speech,
  v1p1beta1: speech_v1p1beta1.Speech,
  v2beta1: speech_v2beta1.Speech,
};

export function speech(version: 'v1'): speech_v1.Speech;
export function speech(options: speech_v1.Options): speech_v1.Speech;
export function speech(version: 'v1p1beta1'): speech_v1p1beta1.Speech;
export function speech(
  options: speech_v1p1beta1.Options
): speech_v1p1beta1.Speech;
export function speech(version: 'v2beta1'): speech_v2beta1.Speech;
export function speech(options: speech_v2beta1.Options): speech_v2beta1.Speech;
export function speech<
  T = speech_v1.Speech | speech_v1p1beta1.Speech | speech_v2beta1.Speech,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | speech_v1.Options
    | 'v1p1beta1'
    | speech_v1p1beta1.Options
    | 'v2beta1'
    | speech_v2beta1.Options
) {
  return getAPI<T>('speech', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {speech_v1};
export {speech_v1p1beta1};
export {speech_v2beta1};
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

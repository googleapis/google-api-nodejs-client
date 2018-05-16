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
import {speech_v1} from './v1';
import {speech_v1beta1} from './v1beta1';

export const VERSIONS = {
  'v1': speech_v1.Speech,
  'v1beta1': speech_v1beta1.Speech,
};

export function speech(version: 'v1'): speech_v1.Speech;
export function speech(options: speech_v1.Options): speech_v1.Speech;
export function speech(version: 'v1beta1'): speech_v1beta1.Speech;
export function speech(options: speech_v1beta1.Options): speech_v1beta1.Speech;
export function speech<T = speech_v1.Speech | speech_v1beta1.Speech>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|speech_v1.Options|'v1beta1'|speech_v1beta1.Options) {
  return getAPI<T>('speech', versionOrOptions, VERSIONS, this);
}

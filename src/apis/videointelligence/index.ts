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
import {videointelligence_v1} from './v1';
import {videointelligence_v1beta2} from './v1beta2';
import {videointelligence_v1p1beta1} from './v1p1beta1';
import {videointelligence_v1p2beta1} from './v1p2beta1';
import {videointelligence_v1p3beta1} from './v1p3beta1';

export const VERSIONS = {
  v1: videointelligence_v1.Videointelligence,
  v1beta2: videointelligence_v1beta2.Videointelligence,
  v1p1beta1: videointelligence_v1p1beta1.Videointelligence,
  v1p2beta1: videointelligence_v1p2beta1.Videointelligence,
  v1p3beta1: videointelligence_v1p3beta1.Videointelligence,
};

export function videointelligence(
  version: 'v1'
): videointelligence_v1.Videointelligence;
export function videointelligence(
  options: videointelligence_v1.Options
): videointelligence_v1.Videointelligence;
export function videointelligence(
  version: 'v1beta2'
): videointelligence_v1beta2.Videointelligence;
export function videointelligence(
  options: videointelligence_v1beta2.Options
): videointelligence_v1beta2.Videointelligence;
export function videointelligence(
  version: 'v1p1beta1'
): videointelligence_v1p1beta1.Videointelligence;
export function videointelligence(
  options: videointelligence_v1p1beta1.Options
): videointelligence_v1p1beta1.Videointelligence;
export function videointelligence(
  version: 'v1p2beta1'
): videointelligence_v1p2beta1.Videointelligence;
export function videointelligence(
  options: videointelligence_v1p2beta1.Options
): videointelligence_v1p2beta1.Videointelligence;
export function videointelligence(
  version: 'v1p3beta1'
): videointelligence_v1p3beta1.Videointelligence;
export function videointelligence(
  options: videointelligence_v1p3beta1.Options
): videointelligence_v1p3beta1.Videointelligence;
export function videointelligence<
  T =
    | videointelligence_v1.Videointelligence
    | videointelligence_v1beta2.Videointelligence
    | videointelligence_v1p1beta1.Videointelligence
    | videointelligence_v1p2beta1.Videointelligence
    | videointelligence_v1p3beta1.Videointelligence,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | videointelligence_v1.Options
    | 'v1beta2'
    | videointelligence_v1beta2.Options
    | 'v1p1beta1'
    | videointelligence_v1p1beta1.Options
    | 'v1p2beta1'
    | videointelligence_v1p2beta1.Options
    | 'v1p3beta1'
    | videointelligence_v1p3beta1.Options
) {
  return getAPI<T>('videointelligence', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {videointelligence_v1};
export {videointelligence_v1beta2};
export {videointelligence_v1p1beta1};
export {videointelligence_v1p2beta1};
export {videointelligence_v1p3beta1};
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

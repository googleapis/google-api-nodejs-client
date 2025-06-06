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
import {gkehub_v1} from './v1';
import {gkehub_v1alpha} from './v1alpha';
import {gkehub_v1alpha2} from './v1alpha2';
import {gkehub_v1beta} from './v1beta';
import {gkehub_v1beta1} from './v1beta1';
import {gkehub_v2} from './v2';
import {gkehub_v2alpha} from './v2alpha';
import {gkehub_v2beta} from './v2beta';

export const VERSIONS = {
  v1: gkehub_v1.Gkehub,
  v1alpha: gkehub_v1alpha.Gkehub,
  v1alpha2: gkehub_v1alpha2.Gkehub,
  v1beta: gkehub_v1beta.Gkehub,
  v1beta1: gkehub_v1beta1.Gkehub,
  v2: gkehub_v2.Gkehub,
  v2alpha: gkehub_v2alpha.Gkehub,
  v2beta: gkehub_v2beta.Gkehub,
};

export function gkehub(version: 'v1'): gkehub_v1.Gkehub;
export function gkehub(options: gkehub_v1.Options): gkehub_v1.Gkehub;
export function gkehub(version: 'v1alpha'): gkehub_v1alpha.Gkehub;
export function gkehub(options: gkehub_v1alpha.Options): gkehub_v1alpha.Gkehub;
export function gkehub(version: 'v1alpha2'): gkehub_v1alpha2.Gkehub;
export function gkehub(
  options: gkehub_v1alpha2.Options
): gkehub_v1alpha2.Gkehub;
export function gkehub(version: 'v1beta'): gkehub_v1beta.Gkehub;
export function gkehub(options: gkehub_v1beta.Options): gkehub_v1beta.Gkehub;
export function gkehub(version: 'v1beta1'): gkehub_v1beta1.Gkehub;
export function gkehub(options: gkehub_v1beta1.Options): gkehub_v1beta1.Gkehub;
export function gkehub(version: 'v2'): gkehub_v2.Gkehub;
export function gkehub(options: gkehub_v2.Options): gkehub_v2.Gkehub;
export function gkehub(version: 'v2alpha'): gkehub_v2alpha.Gkehub;
export function gkehub(options: gkehub_v2alpha.Options): gkehub_v2alpha.Gkehub;
export function gkehub(version: 'v2beta'): gkehub_v2beta.Gkehub;
export function gkehub(options: gkehub_v2beta.Options): gkehub_v2beta.Gkehub;
export function gkehub<
  T =
    | gkehub_v1.Gkehub
    | gkehub_v1alpha.Gkehub
    | gkehub_v1alpha2.Gkehub
    | gkehub_v1beta.Gkehub
    | gkehub_v1beta1.Gkehub
    | gkehub_v2.Gkehub
    | gkehub_v2alpha.Gkehub
    | gkehub_v2beta.Gkehub,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | gkehub_v1.Options
    | 'v1alpha'
    | gkehub_v1alpha.Options
    | 'v1alpha2'
    | gkehub_v1alpha2.Options
    | 'v1beta'
    | gkehub_v1beta.Options
    | 'v1beta1'
    | gkehub_v1beta1.Options
    | 'v2'
    | gkehub_v2.Options
    | 'v2alpha'
    | gkehub_v2alpha.Options
    | 'v2beta'
    | gkehub_v2beta.Options
) {
  return getAPI<T>('gkehub', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {gkehub_v1};
export {gkehub_v1alpha};
export {gkehub_v1alpha2};
export {gkehub_v1beta};
export {gkehub_v1beta1};
export {gkehub_v2};
export {gkehub_v2alpha};
export {gkehub_v2beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

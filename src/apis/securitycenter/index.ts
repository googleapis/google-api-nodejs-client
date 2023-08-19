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
import {securitycenter_v1} from './v1';
import {securitycenter_v1beta1} from './v1beta1';
import {securitycenter_v1beta2} from './v1beta2';
import {securitycenter_v1p1alpha1} from './v1p1alpha1';
import {securitycenter_v1p1beta1} from './v1p1beta1';

export const VERSIONS = {
  v1: securitycenter_v1.Securitycenter,
  v1beta1: securitycenter_v1beta1.Securitycenter,
  v1beta2: securitycenter_v1beta2.Securitycenter,
  v1p1alpha1: securitycenter_v1p1alpha1.Securitycenter,
  v1p1beta1: securitycenter_v1p1beta1.Securitycenter,
};

export function securitycenter(version: 'v1'): securitycenter_v1.Securitycenter;
export function securitycenter(
  options: securitycenter_v1.Options
): securitycenter_v1.Securitycenter;
export function securitycenter(
  version: 'v1beta1'
): securitycenter_v1beta1.Securitycenter;
export function securitycenter(
  options: securitycenter_v1beta1.Options
): securitycenter_v1beta1.Securitycenter;
export function securitycenter(
  version: 'v1beta2'
): securitycenter_v1beta2.Securitycenter;
export function securitycenter(
  options: securitycenter_v1beta2.Options
): securitycenter_v1beta2.Securitycenter;
export function securitycenter(
  version: 'v1p1alpha1'
): securitycenter_v1p1alpha1.Securitycenter;
export function securitycenter(
  options: securitycenter_v1p1alpha1.Options
): securitycenter_v1p1alpha1.Securitycenter;
export function securitycenter(
  version: 'v1p1beta1'
): securitycenter_v1p1beta1.Securitycenter;
export function securitycenter(
  options: securitycenter_v1p1beta1.Options
): securitycenter_v1p1beta1.Securitycenter;
export function securitycenter<
  T =
    | securitycenter_v1.Securitycenter
    | securitycenter_v1beta1.Securitycenter
    | securitycenter_v1beta2.Securitycenter
    | securitycenter_v1p1alpha1.Securitycenter
    | securitycenter_v1p1beta1.Securitycenter,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | securitycenter_v1.Options
    | 'v1beta1'
    | securitycenter_v1beta1.Options
    | 'v1beta2'
    | securitycenter_v1beta2.Options
    | 'v1p1alpha1'
    | securitycenter_v1p1alpha1.Options
    | 'v1p1beta1'
    | securitycenter_v1p1beta1.Options
) {
  return getAPI<T>('securitycenter', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {securitycenter_v1};
export {securitycenter_v1beta1};
export {securitycenter_v1beta2};
export {securitycenter_v1p1alpha1};
export {securitycenter_v1p1beta1};
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

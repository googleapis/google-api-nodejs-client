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
import {playdeveloperreporting_v1alpha1} from './v1alpha1';
import {playdeveloperreporting_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1alpha1: playdeveloperreporting_v1alpha1.Playdeveloperreporting,
  v1beta1: playdeveloperreporting_v1beta1.Playdeveloperreporting,
};

export function playdeveloperreporting(
  version: 'v1alpha1'
): playdeveloperreporting_v1alpha1.Playdeveloperreporting;
export function playdeveloperreporting(
  options: playdeveloperreporting_v1alpha1.Options
): playdeveloperreporting_v1alpha1.Playdeveloperreporting;
export function playdeveloperreporting(
  version: 'v1beta1'
): playdeveloperreporting_v1beta1.Playdeveloperreporting;
export function playdeveloperreporting(
  options: playdeveloperreporting_v1beta1.Options
): playdeveloperreporting_v1beta1.Playdeveloperreporting;
export function playdeveloperreporting<
  T =
    | playdeveloperreporting_v1alpha1.Playdeveloperreporting
    | playdeveloperreporting_v1beta1.Playdeveloperreporting,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1alpha1'
    | playdeveloperreporting_v1alpha1.Options
    | 'v1beta1'
    | playdeveloperreporting_v1beta1.Options
) {
  return getAPI<T>('playdeveloperreporting', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {playdeveloperreporting_v1alpha1};
export {playdeveloperreporting_v1beta1};
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

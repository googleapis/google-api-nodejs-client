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
import {domains_v1} from './v1';
import {domains_v1alpha2} from './v1alpha2';
import {domains_v1beta1} from './v1beta1';

export const VERSIONS = {
  v1: domains_v1.Domains,
  v1alpha2: domains_v1alpha2.Domains,
  v1beta1: domains_v1beta1.Domains,
};

export function domains(version: 'v1'): domains_v1.Domains;
export function domains(options: domains_v1.Options): domains_v1.Domains;
export function domains(version: 'v1alpha2'): domains_v1alpha2.Domains;
export function domains(
  options: domains_v1alpha2.Options
): domains_v1alpha2.Domains;
export function domains(version: 'v1beta1'): domains_v1beta1.Domains;
export function domains(
  options: domains_v1beta1.Options
): domains_v1beta1.Domains;
export function domains<
  T = domains_v1.Domains | domains_v1alpha2.Domains | domains_v1beta1.Domains,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | domains_v1.Options
    | 'v1alpha2'
    | domains_v1alpha2.Options
    | 'v1beta1'
    | domains_v1beta1.Options
) {
  return getAPI<T>('domains', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {domains_v1};
export {domains_v1alpha2};
export {domains_v1beta1};
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

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
import {dns_v1} from './v1';
import {dns_v1beta2} from './v1beta2';
import {dns_v2} from './v2';
import {dns_v2beta1} from './v2beta1';

export const VERSIONS = {
  v1: dns_v1.Dns,
  v1beta2: dns_v1beta2.Dns,
  v2: dns_v2.Dns,
  v2beta1: dns_v2beta1.Dns,
};

export function dns(version: 'v1'): dns_v1.Dns;
export function dns(options: dns_v1.Options): dns_v1.Dns;
export function dns(version: 'v1beta2'): dns_v1beta2.Dns;
export function dns(options: dns_v1beta2.Options): dns_v1beta2.Dns;
export function dns(version: 'v2'): dns_v2.Dns;
export function dns(options: dns_v2.Options): dns_v2.Dns;
export function dns(version: 'v2beta1'): dns_v2beta1.Dns;
export function dns(options: dns_v2beta1.Options): dns_v2beta1.Dns;
export function dns<
  T = dns_v1.Dns | dns_v1beta2.Dns | dns_v2.Dns | dns_v2beta1.Dns,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | dns_v1.Options
    | 'v1beta2'
    | dns_v1beta2.Options
    | 'v2'
    | dns_v2.Options
    | 'v2beta1'
    | dns_v2beta1.Options
) {
  return getAPI<T>('dns', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {dns_v1};
export {dns_v1beta2};
export {dns_v2};
export {dns_v2beta1};
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

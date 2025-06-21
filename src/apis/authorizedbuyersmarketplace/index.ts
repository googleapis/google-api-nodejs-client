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
import {authorizedbuyersmarketplace_v1} from './v1';
import {authorizedbuyersmarketplace_v1alpha} from './v1alpha';
import {authorizedbuyersmarketplace_v1beta} from './v1beta';

export const VERSIONS = {
  v1: authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace,
  v1alpha: authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace,
  v1beta: authorizedbuyersmarketplace_v1beta.Authorizedbuyersmarketplace,
};

export function authorizedbuyersmarketplace(
  version: 'v1'
): authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace(
  options: authorizedbuyersmarketplace_v1.Options
): authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace(
  version: 'v1alpha'
): authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace(
  options: authorizedbuyersmarketplace_v1alpha.Options
): authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace(
  version: 'v1beta'
): authorizedbuyersmarketplace_v1beta.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace(
  options: authorizedbuyersmarketplace_v1beta.Options
): authorizedbuyersmarketplace_v1beta.Authorizedbuyersmarketplace;
export function authorizedbuyersmarketplace<
  T =
    | authorizedbuyersmarketplace_v1.Authorizedbuyersmarketplace
    | authorizedbuyersmarketplace_v1alpha.Authorizedbuyersmarketplace
    | authorizedbuyersmarketplace_v1beta.Authorizedbuyersmarketplace,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | authorizedbuyersmarketplace_v1.Options
    | 'v1alpha'
    | authorizedbuyersmarketplace_v1alpha.Options
    | 'v1beta'
    | authorizedbuyersmarketplace_v1beta.Options
) {
  return getAPI<T>(
    'authorizedbuyersmarketplace',
    versionOrOptions,
    VERSIONS,
    this
  );
}

const auth = new AuthPlus();
export {auth};
export {authorizedbuyersmarketplace_v1};
export {authorizedbuyersmarketplace_v1alpha};
export {authorizedbuyersmarketplace_v1beta};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

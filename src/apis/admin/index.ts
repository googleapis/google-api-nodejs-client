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
import {admin_datatransfer_v1} from './datatransfer_v1';
import {admin_directory_v1} from './directory_v1';
import {admin_reports_v1} from './reports_v1';

export const VERSIONS = {
  datatransfer_v1: admin_datatransfer_v1.Admin,
  directory_v1: admin_directory_v1.Admin,
  reports_v1: admin_reports_v1.Admin,
};

export function admin(version: 'datatransfer_v1'): admin_datatransfer_v1.Admin;
export function admin(
  options: admin_datatransfer_v1.Options
): admin_datatransfer_v1.Admin;
export function admin(version: 'directory_v1'): admin_directory_v1.Admin;
export function admin(
  options: admin_directory_v1.Options
): admin_directory_v1.Admin;
export function admin(version: 'reports_v1'): admin_reports_v1.Admin;
export function admin(
  options: admin_reports_v1.Options
): admin_reports_v1.Admin;
export function admin<
  T =
    | admin_datatransfer_v1.Admin
    | admin_directory_v1.Admin
    | admin_reports_v1.Admin,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'datatransfer_v1'
    | admin_datatransfer_v1.Options
    | 'directory_v1'
    | admin_directory_v1.Options
    | 'reports_v1'
    | admin_reports_v1.Options
) {
  return getAPI<T>('admin', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {admin_datatransfer_v1};
export {admin_directory_v1};
export {admin_reports_v1};
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

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
import {ftp_v1} from './v1';
import {ftp_v1alpha} from './v1alpha';

export const VERSIONS = {
  v1: ftp_v1.Ftp,
  v1alpha: ftp_v1alpha.Ftp,
};

export function ftp(version: 'v1'): ftp_v1.Ftp;
export function ftp(options: ftp_v1.Options): ftp_v1.Ftp;
export function ftp(version: 'v1alpha'): ftp_v1alpha.Ftp;
export function ftp(options: ftp_v1alpha.Options): ftp_v1alpha.Ftp;
export function ftp<T = ftp_v1.Ftp | ftp_v1alpha.Ftp>(
  this: GoogleConfigurable,
  versionOrOptions: 'v1' | ftp_v1.Options | 'v1alpha' | ftp_v1alpha.Options
) {
  return getAPI<T>('ftp', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {ftp_v1};
export {ftp_v1alpha};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

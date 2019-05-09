// Copyright 2019 Google LLC
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
import {pagespeedonline_v1} from './v1';
import {pagespeedonline_v2} from './v2';
import {pagespeedonline_v4} from './v4';
import {pagespeedonline_v5} from './v5';

export const VERSIONS = {
  v1: pagespeedonline_v1.Pagespeedonline,
  v2: pagespeedonline_v2.Pagespeedonline,
  v4: pagespeedonline_v4.Pagespeedonline,
  v5: pagespeedonline_v5.Pagespeedonline,
};

export function pagespeedonline(
  version: 'v1'
): pagespeedonline_v1.Pagespeedonline;
export function pagespeedonline(
  options: pagespeedonline_v1.Options
): pagespeedonline_v1.Pagespeedonline;
export function pagespeedonline(
  version: 'v2'
): pagespeedonline_v2.Pagespeedonline;
export function pagespeedonline(
  options: pagespeedonline_v2.Options
): pagespeedonline_v2.Pagespeedonline;
export function pagespeedonline(
  version: 'v4'
): pagespeedonline_v4.Pagespeedonline;
export function pagespeedonline(
  options: pagespeedonline_v4.Options
): pagespeedonline_v4.Pagespeedonline;
export function pagespeedonline(
  version: 'v5'
): pagespeedonline_v5.Pagespeedonline;
export function pagespeedonline(
  options: pagespeedonline_v5.Options
): pagespeedonline_v5.Pagespeedonline;
export function pagespeedonline<
  T =
    | pagespeedonline_v1.Pagespeedonline
    | pagespeedonline_v2.Pagespeedonline
    | pagespeedonline_v4.Pagespeedonline
    | pagespeedonline_v5.Pagespeedonline
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'v1'
    | pagespeedonline_v1.Options
    | 'v2'
    | pagespeedonline_v2.Options
    | 'v4'
    | pagespeedonline_v4.Options
    | 'v5'
    | pagespeedonline_v5.Options
) {
  return getAPI<T>('pagespeedonline', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

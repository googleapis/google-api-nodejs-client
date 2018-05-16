// Copyright 2018, Google, LLC.
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

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {youtubeAnalytics_v1} from './v1';
import {youtubeAnalytics_v1beta1} from './v1beta1';
import {youtubeAnalytics_v2} from './v2';

export const VERSIONS = {
  'v1': youtubeAnalytics_v1.Youtubeanalytics,
  'v1beta1': youtubeAnalytics_v1beta1.Youtubeanalytics,
  'v2': youtubeAnalytics_v2.Youtubeanalytics,
};

export function youtubeAnalytics(version: 'v1'):
    youtubeAnalytics_v1.Youtubeanalytics;
export function youtubeAnalytics(options: youtubeAnalytics_v1.Options):
    youtubeAnalytics_v1.Youtubeanalytics;
export function youtubeAnalytics(version: 'v1beta1'):
    youtubeAnalytics_v1beta1.Youtubeanalytics;
export function youtubeAnalytics(options: youtubeAnalytics_v1beta1.Options):
    youtubeAnalytics_v1beta1.Youtubeanalytics;
export function youtubeAnalytics(version: 'v2'):
    youtubeAnalytics_v2.Youtubeanalytics;
export function youtubeAnalytics(options: youtubeAnalytics_v2.Options):
    youtubeAnalytics_v2.Youtubeanalytics;
export function youtubeAnalytics<
    T = youtubeAnalytics_v1.Youtubeanalytics |
        youtubeAnalytics_v1beta1.Youtubeanalytics |
        youtubeAnalytics_v2.Youtubeanalytics>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|
    youtubeAnalytics_v1.Options|'v1beta1'|
    youtubeAnalytics_v1beta1.Options|'v2'|youtubeAnalytics_v2.Options) {
  return getAPI<T>('youtubeAnalytics', versionOrOptions, VERSIONS, this);
}

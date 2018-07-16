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
import {appengine_v1} from './v1';
import {appengine_v1alpha} from './v1alpha';
import {appengine_v1beta} from './v1beta';
import {appengine_v1beta4} from './v1beta4';
import {appengine_v1beta5} from './v1beta5';

export const VERSIONS = {
  'v1': appengine_v1.Appengine,
  'v1alpha': appengine_v1alpha.Appengine,
  'v1beta': appengine_v1beta.Appengine,
  'v1beta4': appengine_v1beta4.Appengine,
  'v1beta5': appengine_v1beta5.Appengine,
};

export function appengine(version: 'v1'): appengine_v1.Appengine;
export function appengine(options: appengine_v1.Options):
    appengine_v1.Appengine;
export function appengine(version: 'v1alpha'): appengine_v1alpha.Appengine;
export function appengine(options: appengine_v1alpha.Options):
    appengine_v1alpha.Appengine;
export function appengine(version: 'v1beta'): appengine_v1beta.Appengine;
export function appengine(options: appengine_v1beta.Options):
    appengine_v1beta.Appengine;
export function appengine(version: 'v1beta4'): appengine_v1beta4.Appengine;
export function appengine(options: appengine_v1beta4.Options):
    appengine_v1beta4.Appengine;
export function appengine(version: 'v1beta5'): appengine_v1beta5.Appengine;
export function appengine(options: appengine_v1beta5.Options):
    appengine_v1beta5.Appengine;
export function appengine<
    T = appengine_v1.Appengine | appengine_v1alpha.Appengine |
        appengine_v1beta.Appengine | appengine_v1beta4.Appengine |
        appengine_v1beta5.Appengine>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|appengine_v1.Options|'v1alpha'|
    appengine_v1alpha.Options|'v1beta'|
    appengine_v1beta.Options|'v1beta4'|
    appengine_v1beta4.Options|'v1beta5'|appengine_v1beta5.Options) {
  return getAPI<T>('appengine', versionOrOptions, VERSIONS, this);
}

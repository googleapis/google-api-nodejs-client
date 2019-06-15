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
import {calendar_v3} from './v3';

export const VERSIONS = {
  v3: calendar_v3.Calendar,
};

export function calendar(version: 'v3'): calendar_v3.Calendar;
export function calendar(options: calendar_v3.Options): calendar_v3.Calendar;
export function calendar<T = calendar_v3.Calendar>(
  this: GoogleConfigurable,
  versionOrOptions: 'v3' | calendar_v3.Options
) {
  return getAPI<T>('calendar', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};

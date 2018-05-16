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
import {tpu_v1alpha1} from './v1alpha1';

export const VERSIONS = {
  'v1alpha1': tpu_v1alpha1.Tpu,
};

export function tpu(version: 'v1alpha1'): tpu_v1alpha1.Tpu;
export function tpu(options: tpu_v1alpha1.Options): tpu_v1alpha1.Tpu;
export function tpu<T = tpu_v1alpha1.Tpu>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1alpha1'|tpu_v1alpha1.Options) {
  return getAPI<T>('tpu', versionOrOptions, VERSIONS, this);
}

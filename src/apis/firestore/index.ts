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

import {getAPI} from '../../shared/src';
import {firestore_v1beta1} from './v1beta1';

export const VERSIONS = {
  'v1beta1': firestore_v1beta1.Firestore,
};

export function firestore(version: 'v1beta1'): firestore_v1beta1.Firestore;
export function firestore(options: firestore_v1beta1.Options):
    firestore_v1beta1.Firestore;
export function firestore<T = firestore_v1beta1.Firestore>(
    versionOrOptions: 'v1beta1'|firestore_v1beta1.Options) {
  return getAPI<T>('firestore', versionOrOptions, VERSIONS);
}

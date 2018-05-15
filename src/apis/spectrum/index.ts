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
import {spectrum_v1explorer} from './v1explorer';

export const VERSIONS = {
  'v1explorer': spectrum_v1explorer.Spectrum,
};

export function spectrum(version: 'v1explorer'): spectrum_v1explorer.Spectrum;
export function spectrum(options: spectrum_v1explorer.Options):
    spectrum_v1explorer.Spectrum;
export function spectrum<T = spectrum_v1explorer.Spectrum>(
    versionOrOptions: 'v1explorer'|spectrum_v1explorer.Options) {
  return getAPI<T>('spectrum', versionOrOptions, VERSIONS);
}

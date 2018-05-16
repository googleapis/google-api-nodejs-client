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

import {GlobalOptions, GoogleConfigurable, ServiceOptions} from '.';

export function getAPI<T>(
    api: string, options: ServiceOptions|string,
    // tslint:disable-next-line no-any
    versions: {[index: string]: any}) {
  let version: string;
  if (typeof options === 'string') {
    version = options;
    options = {};
  } else if (typeof options === 'object') {
    version = options.version!;
    delete options.version;
  } else {
    throw new Error('Argument error: Accepts only string or object');
  }
  try {
    const ctr = versions[version];
    const ep = new ctr(options);
    return Object.freeze(ep) as T;
  } catch (e) {
    throw new Error(
        `Unable to load endpoint ${api}("${version}"): ${e.message}`);
  }
}

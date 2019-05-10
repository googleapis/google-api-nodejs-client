// Copyright 2016, Google, Inc.
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

import {GaxiosResponse} from 'gaxios';
import * as url from 'url';
import {GoogleApis} from '../src';

export abstract class Utils {
  static getQs(res: GaxiosResponse) {
    const query = url.parse(res.config.url!).query;
    return query ? query.toString() : null;
  }

  static getPath(res: GaxiosResponse) {
    return url.parse(res.config.url!).path!;
  }

  static getDiscoveryUrl(name: string, version: string) {
    return (
      'https://www.googleapis.com/discovery/v1/apis/' +
      name +
      '/' +
      version +
      '/rest'
    );
  }

  // tslint:disable-next-line no-any
  static loadApi<T = any>(
    google: GoogleApis,
    name: string,
    version: string,
    options = {}
  ) {
    return (google.discoverAPI(
      Utils.getDiscoveryUrl(name, version),
      options
      // tslint:disable-next-line no-any
    ) as any) as T;
  }

  static readonly noop = () => undefined;
  static readonly baseUrl = 'https://www.googleapis.com';
}

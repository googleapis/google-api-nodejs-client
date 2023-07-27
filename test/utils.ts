// Copyright 2016 Google LLC
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
import {URL} from 'url';
import {GoogleApis} from '../src';
import {readFileSync} from 'fs';
import * as path from 'path';
import * as nock from 'nock';

export const rootHost = 'https://www.googleapis.com';
export const rootPrefix = '/discovery/v1/apis';

export abstract class Utils {
  static getQs(res: GaxiosResponse) {
    let query = new URL(res.config.url!).search;
    if (query.startsWith('?')) {
      query = query.slice(1);
    }
    return query || null;
  }

  static getPath(res: GaxiosResponse) {
    return new URL(res.config.url!).pathname!;
  }

  static getDiscoveryUrl(name: string, version: string) {
    return `${rootHost}${rootPrefix}/${name}/${version}/rest`;
  }

  static getDiscoveryFixture(name: string): string {
    return JSON.parse(
      readFileSync(
        path.resolve(process.cwd(), `./test/fixtures/discovery/${name}.json`),
        'utf8'
      )
    );
  }

  static loadApi<T>(
    google: GoogleApis,
    name: string,
    version: string,
    options = {}
  ) {
    const url = Utils.getDiscoveryUrl(name, version);
    const filePath = `./discovery/${name}-${version}.json`;
    nock('https://www.googleapis.com')
      .get(`${rootPrefix}/${name}/${version}/rest`)
      .replyWithFile(200, filePath, {
        'Content-Type': 'application/json',
      });
    return google.discoverAPI<T>(url, options);
  }

  static readonly noop = () => undefined;
  static readonly baseUrl = 'https://www.googleapis.com';
  static readonly gmailUrl = 'https://gmail.googleapis.com';
}

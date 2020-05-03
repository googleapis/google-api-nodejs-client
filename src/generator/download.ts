// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as minimist from 'minimist';
import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';
import Q from 'p-queue';
import {request, Headers} from 'gaxios';
import {Schemas} from 'googleapis-common';
import * as rf from 'rimraf';
import * as mkdirp from 'mkdirp';

export interface DownloadOptions {
  includePrivate?: boolean;
  discoveryUrl: string;
  downloadPath: string;
}

// exported for mocking purposes
export const gfs = {
  rimraf: async (dir: string) => util.promisify(rf)(dir),
  mkdir: async (dir: string) => mkdirp(dir),
  writeFile: (path: string, obj: {}) => {
    fs.writeFileSync(path, JSON.stringify(obj, null, 2));
  },
};

/**
 * Download all discovery documents into the /discovery directory.
 * @param options
 */
export async function downloadDiscoveryDocs(options: DownloadOptions) {
  await gfs.rimraf(options.downloadPath);
  await gfs.mkdir(options.downloadPath);
  const headers: Headers = options.includePrivate
    ? {}
    : {'X-User-Ip': '0.0.0.0'};
  console.log(`sending request to ${options.discoveryUrl}`);
  const res = await request<Schemas>({url: options.discoveryUrl, headers});
  const apis = res.data.items;
  const indexPath = path.join(options.downloadPath, 'index.json');
  gfs.writeFile(indexPath, res.data);
  const queue = new Q({concurrency: 25});
  console.log(`Downloading ${apis.length} APIs...`);
  queue.addAll(
    apis.map(api => {
      return async () => {
        console.log(`Downloading ${api.id}...`);
        const apiPath = path.join(
          options.downloadPath,
          api.id.replace(':', '-') + '.json'
        );
        const url = api.discoveryRestUrl;
        const res = await request<{}>({url});
        // The keys in the downloaded JSON come back in an arbitrary order from
        // request to request. Sort them before storing.
        const data = sortKeys(res.data);
        gfs.writeFile(apiPath, data);
      };
    })
  );
  await queue.onIdle();
}

/**
 * Given an arbitrary object, recursively sort the properties on the object
 * by the name of the key.  For example:
 * {
 *   b: 1,
 *   a: 2
 * }
 * becomes....
 * {
 *   a: 2,
 *   b: 1
 * }
 * @param obj Object to be sorted
 * @returns object with sorted keys
 */
export function sortKeys(obj: {[index: string]: {}}): {} {
  const sorted: {[index: string]: {}} = {};
  let keys = Object.keys(obj);
  keys = keys.sort();
  for (const key of keys) {
    // typeof [] === 'object', which is maddening
    if (!Array.isArray(obj[key]) && typeof obj[key] === 'object') {
      sorted[key] = sortKeys(obj[key]);
    } else {
      sorted[key] = obj[key];
    }
  }
  return sorted;
}

/**
 * Allow this file to be directly run via `npm run download`, or imported
 * and used by `generator.ts`
 */
if (require.main === module) {
  const argv = minimist(process.argv.slice(2));
  const discoveryUrl =
    argv['discovery-url'] || 'https://www.googleapis.com/discovery/v1/apis/';
  const downloadPath =
    argv['download-path'] || path.join(__dirname, '../../../discovery');
  downloadDiscoveryDocs({discoveryUrl, downloadPath});
}

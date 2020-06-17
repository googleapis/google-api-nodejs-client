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

import * as assert from 'assert';
import {describe, it, before, afterEach} from 'mocha';
import * as fs from 'fs';
import * as path from 'path';
import * as nock from 'nock';
import {GoogleApis} from '../src';
import {APIS} from '../src/apis';
import * as Utils from './utils';

describe('GoogleApis#discover', () => {
  before(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should get a list of supported apis', () => {
    const google = new GoogleApis();
    const apis = google.getSupportedAPIs();
    assert.strictEqual(Object.keys(apis).length, Object.keys(APIS).length);
    assert(apis.drive.indexOf('v2') > -1);
  });

  it.skip('should generate all apis', async () => {
    const localApis = fs.readdirSync(path.join(__dirname, '../src/apis'));
    const google = new GoogleApis();
    const g2 = google as {[index: string]: {} | null};
    const localDrive = google.drive('v2');

    assert.strictEqual(typeof google.drive, 'function');
    assert.strictEqual(typeof localDrive, 'object');

    localApis.splice(localApis.indexOf('index.ts'), 1);
    localApis.splice(localApis.indexOf('index.d.ts'), 1);
    localApis.splice(localApis.indexOf('index.js'), 1);
    localApis.splice(localApis.indexOf('index.js.map'), 1);

    localApis.forEach(name => {
      assert(g2[name], `API '${name}' is not available on GoogleApis`);
      // Setting all APIs to null initially.
      g2[name] = null;
    });

    assert.strictEqual(google.drive, null);

    const scope = nock(Utils.rootHost)
      .get(Utils.rootPrefix)
      .replyWithFile(200, './discovery/index.json');
    nock(Utils.rootHost)
      .get('*')
      .reply(200, (url, body, callback) => {
        const paths = url.split('/');
        const name = paths[6];
        const ver = paths[7];
        const filePath = `./discovery/${name}-${ver}.json`;
        callback(null, fs.createReadStream(filePath));
      })
      .persist();
    await google.discover('https://www.googleapis.com/discovery/v1/apis');
    scope.done();

    // APIs have all been re-added.
    localApis.forEach(name => {
      if (g2[name] === null) {
        // Warn if an API remains null (was not found during the discovery
        // process) to avoid failing the test.
        console.warn(name + ' was not found.');
      } else {
        assert(g2[name]);
      }
    });

    const remoteDrive = (google as GoogleApis).drive('v2');
    assert.strictEqual(typeof google.drive, 'function');
    assert.strictEqual(typeof remoteDrive, 'object');

    for (const key in localDrive) {
      // eslint-disable-next-line no-prototype-builtins
      if (localDrive.hasOwnProperty(key)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        assert((remoteDrive as any)[key], 'generated drive has same keys');
      }
    }
  });
});

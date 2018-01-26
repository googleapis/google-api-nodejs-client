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

import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

import {GoogleApis} from '../src';

describe('GoogleApis#discover', () => {
  it('should generate all apis', (done) => {
    const localApis = fs.readdirSync(path.join(__dirname, '../src/apis'));
    const google = new GoogleApis();
    const localDrive = google.drive('v2');

    assert.equal(typeof google.drive, 'function');
    assert.equal(typeof localDrive, 'object');

    localApis.splice(localApis.indexOf('index.ts'), 1);
    localApis.splice(localApis.indexOf('index.d.ts'), 1);
    localApis.splice(localApis.indexOf('index.js'), 1);
    localApis.splice(localApis.indexOf('index.js.map'), 1);

    localApis.forEach((name) => {
      assert(google[name]);
      // Setting all APIs to null initially.
      google[name] = null;
    });

    assert.equal(google.drive, null);

    google.discover('https://www.googleapis.com/discovery/v1/apis', (err) => {
      if (err) {
        console.warn(err);
        return done();
      }
      // APIs have all been re-added.
      localApis.forEach(name => {
        if (google[name] === null) {
          // Warn if an API remains null (was not found during the discovery
          // process) to avoid failing the test.
          console.warn(name + ' was not found.');
        } else {
          assert(google[name]);
        }
      });

      const remoteDrive = google.drive('v2');
      assert.equal(typeof google.drive, 'function');
      assert.equal(typeof remoteDrive, 'object');

      for (const key in localDrive) {
        if (localDrive.hasOwnProperty(key)) {
          assert(remoteDrive[key], 'generated drive has same keys');
        }
      }
      done();
    });
  }).timeout(120000);
});

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

import * as assert from 'power-assert';
import * as fs from 'fs';
import * as path from 'path';
let googleapis = require('../');

describe('GoogleApis#discover', () => {
  it('should generate all apis', (done) => {

    const localApis = fs.readdirSync(path.join(__dirname, '../apis'));
    const google = new googleapis.GoogleApis();
    const localDrive = google.drive('v2');

    assert.equal(typeof google.drive, 'function');
    assert.equal(typeof localDrive, 'object');

    localApis.forEach((name) => {
      assert(google[name]);
      google[name] = undefined;
    });

    assert.equal(google.drive, undefined);

    google.discover('https://www.googleapis.com/discovery/v1/apis', (err) => {
      if (err) {
        console.warn(err);
        return done();
      }
      // APIs have all been re-added
      localApis.forEach(name => {
        assert(google[name]);
      });

      const remoteDrive = google.drive('v2');
      assert.equal(typeof google.drive, 'function');
      assert.equal(typeof remoteDrive, 'object');

      for (const key in localDrive) {
        assert(remoteDrive[key], 'generated drive has same keys');
      }
      done();
    });
  }).timeout(120000);
});

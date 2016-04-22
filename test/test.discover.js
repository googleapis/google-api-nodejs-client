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

'use strict';

var assert = require('assert');
var fs = require('fs');
var googleapis = require('../');
var path = require('path');

describe('GoogleApis#discover', function () {
  it('should generate all apis', function (done) {
    this.timeout(120000);

    var localApis = fs.readdirSync(path.join(__dirname, '../apis'));
    var google = new googleapis.GoogleApis();
    var localDrive = google.drive('v2');

    assert.equal(typeof google.drive, 'function');
    assert.equal(typeof localDrive, 'object');

    localApis.forEach(function (name) {
      assert(google[name]);
      google[name] = undefined;
    });

    assert.equal(google.drive, undefined);

    google.discover('https://www.googleapis.com/discovery/v1/apis', function (err) {
      if (err) {
        return done(err);
      }
      // APIs have all been re-added
      localApis.forEach(function (name) {
        assert(google[name]);
      });

      var remoteDrive = google.drive('v2');
      assert.equal(typeof google.drive, 'function');
      assert.equal(typeof remoteDrive, 'object');

      for (var key in localDrive) {
        assert(remoteDrive[key], 'generated drive has same keys');
      }
      done();
    });
  });
});

/**
 * Copyright 2013 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var googleapis = require('../lib/googleapis.js');

describe('Discovery', function() {

  it('should be able to load multiple APIs', function(done) {
    new googleapis.GoogleApis()
      .discover('plus', 'v1')
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {
        assert.equal(typeof client.plus, 'object');
        assert.equal(typeof client.urlshortener, 'object');
        done();
      });
  });

  it('should cache discovery metadata', function(done) {
    new googleapis.GoogleApis()
      .discover('drive', 'v2')
      .execute(function(err, client) {
        var exists = fs.existsSync(process.cwd() + '/.cache/drivev2');
        assert.equal(exists, true);
        // clean up
        fs.unlink(process.cwd() + '/.cache/drivev2', done);
      });
  });

});

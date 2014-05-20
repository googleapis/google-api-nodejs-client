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

var googleapis = require('../lib/googleapis.js'),
    modulePath = __dirname + '/..';

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

  it('should not discover the same API more than once', function(done) {
    var apis = new googleapis.GoogleApis()
      .discover('plus', 'v1')
      .discover('plus', 'v1');
    assert.equal(1, apis.toBeDiscovered.length);
    done();
  });

  it('should be able to load API from file', function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis.cache = {
      load: function() {
        assert.fail(null, null, 'cache.load should not be called');
      },
      write: function() {
        assert.fail(null, null, 'cache.write should not be called');
      }
    };
    gapis.transporter = {
      request: function() {
        assert.fail(null, null, 'transporter.request should not be called');
      }
    };
    gapis.discover('plus', 'v1', {
      localDiscoveryFilePath: __dirname + '/data/discovery_plus.json'
    }).execute(function(err, client) {
      assert.equal(err, null);
      assert.equal(client.plus.getName(), 'plus');
      done();
    });
  });

  it('should cache discovery metadata', function(done) {
    new googleapis.GoogleApis()
      .discover('mirror', 'v1')
      .execute(function(err, client) {
        var exists = fs.existsSync(modulePath + '/.cache/mirrorv1-rest');
        assert.equal(exists, true);
        // clean up
        fs.unlink(modulePath + '/.cache/mirrorv1-rest', done);
      });
  });

  it('should cache discovery metadata should be stored in the configurable ' +
        'cache directory', function(done) {
    var customPath = './b041042364d89046c003ca151a6254ef';
    new googleapis.GoogleApis()
      .discover('orkut', 'v2')
      .withOpts({ cache: { path: customPath } })
      .execute(function(err, client) {
        assert.equal(fs.existsSync(customPath), true);
        fs.unlink(customPath + '/orkutv2-rest', done);
      });
  });

  it('should add AuthClient to underlying API clients', function(done) {
    new googleapis.GoogleApis()
      .discover('plus', 'v1')
      .discover('drive', 'v2')
      .withAuthClient({credentials: 'foo'})
      .execute(function(err, client) {
        var req = client.newBatchRequest();
        assert.equal('foo', req.authClient.credentials);
        req = client.drive.files.insert();
        assert.equal('foo', req.authClient.credentials);
        req = client.plus.newRequest();
        assert.equal('foo', req.authClient.credentials);
        done();
      });
  });

});

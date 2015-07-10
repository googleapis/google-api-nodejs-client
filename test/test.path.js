/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

'use strict';

var assert = require('assert');
var googleapis = require('../lib/googleapis.js');
var google, drive;

describe('Path params', function() {

  function noop() {}

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    drive = google.drive('v2');
  });

  it('should not throw error if not included and required', function(done) {
    assert.doesNotThrow(function() {
      drive.files.get({}, noop);
      done();
    });
  });

  it('should return an err object if not included and required', function(done) {
    drive.files.get({}, function(err) {
      assert.notEqual(err, null);
      done();
    });
  });

  it('should be mentioned in err.message when missing', function (done) {
    drive.files.get({}, function(err) {
      assert.notEqual(err.message.indexOf('fileId'), -1, 'Missing param not mentioned in error');
      done();
    });
  });

  it('should return null response object if not included and required', function(done) {
    drive.files.get({}, function(err, resp) {
      assert.equal(resp, null);
      done();
    });
  });

  it('should return null request object if not included and required', function() {
    var req = drive.files.get({}, noop);
    assert.equal(req, null);
  });

  it('should return null request object if not included and required and no callback', function() {
    var req = drive.files.get({}, noop);
    assert.equal(req, null);
  });

  it('should not be modifiable directly', function() {
    var drive = google.drive('v2');
    var options = { fileId: '123' };
    assert.doesNotThrow(
      function() {
        // should not modify options object
        drive.files.get(options, noop);
        drive.files.get(options, noop);
      });
  });

  it('should be put in URL of path', function() {
    var req = drive.files.get({ fileId: 'abc123' }, noop);
    assert.equal(req.uri.path, '/drive/v2/files/abc123');
  });

  it('should be put in URL of pathname', function() {
    var req = drive.files.get({ fileId: '123abc' }, noop);
    assert.equal(req.uri.pathname, '/drive/v2/files/123abc');
  });

  it('should not be urlencoded', function () {
    var req = drive.files.get({ fileId: 'p@ram' }, noop);
    assert.equal(req.uri.path.split('/').pop(), 'p@ram');
  });

  it('should keep query params null if only path params', function() {
    var req = drive.files.get({ fileId: '123abc' }, noop);
    assert.equal(req.uri.query, null);
  });

  it('should keep query params as is', function() {
    var req = drive.files.get({ fileId: '123abc', hello: 'world' }, noop);
    assert.equal(req.uri.query, 'hello=world');
  });
});

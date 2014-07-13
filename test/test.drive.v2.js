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

var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var google = require('../lib/googleapis.js'),
    modulePath = __dirname + '/..';

describe('drive:v2', function() {

  it('should exist', function(done) {
    assert.notEqual(typeof google.drive, null);
    done();
  });

  it('should be a function', function(done) {
    assert.equal(typeof google.drive, 'function');
    done();
  });

  it('should create a drive object', function(done) {
    var drive = google.drive('v2');
    assert.notEqual(typeof drive, 'undefined');
    done();
  });

  it('should be frozen (immutable)', function(done) {
    var drive = google.drive('v2');
    assert.equal(Object.isFrozen(drive), true);
    done();
  });

  describe('.files', function() {
    it('should exist', function(done) {
      var drive = google.drive('v2');
      assert.notEqual(typeof drive.files, 'undefined');
      done();
    });

    it('should be an object', function(done) {
      var drive = google.drive('v2');
      assert.equal(typeof drive.files, 'object');
      done();
    });

    describe('.insert', function() {
      it('should exist', function(done) {
        var drive = google.drive('v2');
        assert.notEqual(typeof drive.files.insert, 'undefined');
        done();
      });

      it('should be a function', function(done) {
        var drive = google.drive('v2');
        assert.equal(typeof drive.files.insert, 'function');
        done();
      });

      it('should return a Request object', function(done) {
        var drive = google.drive('v2');
        var req = drive.files.insert({});
        assert.equal(req.constructor.name, 'Request');
        done();
      });
    });

    describe('.get', function() {
      it('should exist', function() {
        var drive = google.drive('v2');
        assert.notEqual(typeof drive.files.get, 'undefined');
      });
      it('should be a function', function() {
        var drive = google.drive('v2');
        assert.equal(typeof drive.files.get, 'function');
      });

      it('should return a Request object', function() {
        var drive = google.drive('v2');
        var req = drive.files.get({});
        assert.equal(req.constructor.name, 'Request');
      });
    });
  });

  describe('.options', function() {
    it('should exist', function() {
      var drive = google.drive('v2');
      assert.notEqual(typeof drive.options, 'undefined');
    });

    it('should be an object', function() {
      var drive = google.drive('v2');
      assert.equal(typeof drive.options, 'object');
    });

    it('should have correct version value', function() {
      var drive = google.drive('v2');
      assert.equal(drive.options.version, 'v2');
    });
  });
});

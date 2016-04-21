// Copyright 2014-2016, Google, Inc.
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
var googleapis = require('../');
var nock = require('nock');
var utils = require('./utils');

describe('drive:v2', function () {
  var localDrive, remoteDrive;

  before(function (done) {
    nock.cleanAll();
    var google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    utils.loadApi(google, 'drive', 'v2', function (err, drive) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      remoteDrive = drive;
      done();
    });
  });

  beforeEach(function () {
    nock.cleanAll();
    nock.disableNetConnect();
    var google = new googleapis.GoogleApis();
    localDrive = google.drive('v2');
  });

  it('should exist', function (done) {
    assert.notEqual(typeof googleapis.drive, null);
    done();
  });

  it('should be a function', function (done) {
    assert.equal(typeof googleapis.drive, 'function');
    done();
  });

  it('should create a drive object', function (done) {
    assert.notEqual(typeof localDrive, 'undefined');
    assert.notEqual(typeof remoteDrive, 'undefined');
    done();
  });

  it('should be frozen (immutable)', function (done) {
    assert.equal(Object.isFrozen(localDrive), true);
    assert.equal(Object.isFrozen(remoteDrive), true);
    done();
  });

  describe('.files', function () {
    it('should exist', function (done) {
      assert.notEqual(typeof localDrive.files, 'undefined');
      assert.notEqual(typeof remoteDrive.files, 'undefined');
      done();
    });

    it('should be an object', function (done) {
      assert.equal(typeof localDrive.files, 'object');
      assert.equal(typeof remoteDrive.files, 'object');
      done();
    });

    describe('.insert', function () {
      it('should exist', function (done) {
        assert.notEqual(typeof localDrive.files.insert, 'undefined');
        assert.notEqual(typeof remoteDrive.files.insert, 'undefined');
        done();
      });

      it('should be a function', function (done) {
        assert.equal(typeof localDrive.files.insert, 'function');
        assert.equal(typeof remoteDrive.files.insert, 'function');
        done();
      });

      it('should return a Request object', function (done) {
        var req = localDrive.files.insert({}, utils.noop);
        assert.equal(req.constructor.name, 'Request');
        req = remoteDrive.files.insert({}, utils.noop);
        assert.equal(req.constructor.name, 'Request');
        done();
      });
    });

    describe('.get', function () {
      it('should exist', function () {
        assert.notEqual(typeof localDrive.files.get, 'undefined');
        assert.notEqual(typeof remoteDrive.files.get, 'undefined');
      });

      it('should be a function', function () {
        assert.equal(typeof localDrive.files.get, 'function');
        assert.equal(typeof remoteDrive.files.get, 'function');
      });

      it('should return a Request object', function () {
        var req = localDrive.files.get({ fileId: '123' }, utils.noop);
        assert.equal(req.constructor.name, 'Request');
        req = remoteDrive.files.get({ fileId: '123' }, utils.noop);
        assert.equal(req.constructor.name, 'Request');
      });

      it('should use logError callback if no callback specified', function (done) {
        var scope = nock('https://www.googleapis.com')
          .get('/drive/v2/files?q=hello')
          .times(2)
          .reply(501, { error: 'not a real error' });

        // logError internally uses console.error - let's monkey-patch the
        // function to intercept calls to it, then restore the original function
        // once we are done testing
        var origFn = console.error;
        var count = 0;
        console.error = function (err) {
          count++;
          assert.equal(err.code, 501);
          if (count === 2) {
            console.error = origFn;
            scope.done();
            done();
          }
        };

        assert.doesNotThrow(function () {
          localDrive.files.list({ q: 'hello' });
          remoteDrive.files.list({ q: 'hello' });
        });
      });
    });
  });

  describe('._options', function () {
    it('should exist', function () {
      assert.notEqual(typeof localDrive._options, 'undefined');
      assert.notEqual(typeof remoteDrive._options, 'undefined');
    });

    it('should be an object', function () {
      assert.equal(typeof localDrive._options, 'object');
      assert.equal(typeof remoteDrive._options, 'object');
    });
  });

  describe('.files.list()', function () {
    it('should not return missing param error', function (done) {
      var scope = nock('https://www.googleapis.com')
        .get('/drive/v2/files?q=hello')
        .times(2)
        .reply(200);
      localDrive.files.list({ q: 'hello' }, function (err) {
        assert.equal(err, null);
        remoteDrive.files.list({ q: 'hello' }, function (err) {
          assert.equal(err, null);
          scope.done();
          done();
        });
      });
    });
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

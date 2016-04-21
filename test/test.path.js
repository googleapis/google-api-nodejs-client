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

describe('Path params', function () {
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

  it('should not throw error if not included and required', function (done) {
    assert.doesNotThrow(function () {
      localDrive.files.get({}, utils.noop);
      remoteDrive.files.get({}, utils.noop);
      done();
    });
  });

  it('should return an err object if not included and required', function (done) {
    localDrive.files.get({}, function (err) {
      assert.notEqual(err, null);
      remoteDrive.files.get({}, function (err) {
        assert.notEqual(err, null);
        done();
      });
    });
  });

  it('should be mentioned in err.message when missing', function (done) {
    localDrive.files.get({}, function (err) {
      assert.notEqual(err.message.indexOf('fileId'), -1, 'Missing param not mentioned in error');
      remoteDrive.files.get({}, function (err) {
        assert.notEqual(err.message.indexOf('fileId'), -1, 'Missing param not mentioned in error');
        done();
      });
    });
  });

  it('should return null response object if not included and required', function (done) {
    localDrive.files.get({}, function (err, resp) {
      assert(err);
      assert.equal(resp, null);
      remoteDrive.files.get({}, function (err, resp) {
        assert(err);
        assert.equal(resp, null);
        done();
      });
    });
  });

  it('should return null request object if not included and required', function () {
    var req = localDrive.files.get({}, utils.noop);
    assert.equal(req, null);
    req = remoteDrive.files.get({}, utils.noop);
    assert.equal(req, null);
  });

  it('should return null request object if not included and required and no callback', function () {
    var req = localDrive.files.get({}, utils.noop);
    assert.equal(req, null);
    req = remoteDrive.files.get({}, utils.noop);
    assert.equal(req, null);
  });

  it('should not be modifiable directly', function () {
    var options = { fileId: '123' };
    assert.doesNotThrow(function () {
      // should not modify options object
      localDrive.files.get(options, utils.noop);
      localDrive.files.get(options, utils.noop);
      remoteDrive.files.get(options, utils.noop);
      remoteDrive.files.get(options, utils.noop);
    });
  });

  it('should be put in URL of path', function () {
    var req = localDrive.files.get({ fileId: 'abc123' }, utils.noop);
    assert.equal(req.uri.path, '/drive/v2/files/abc123');
    req = remoteDrive.files.get({ fileId: 'abc123' }, utils.noop);
    assert.equal(req.uri.path, '/drive/v2/files/abc123');
  });

  it('should be put in URL of pathname', function () {
    var req = localDrive.files.get({ fileId: '123abc' }, utils.noop);
    assert.equal(req.uri.pathname, '/drive/v2/files/123abc');
    req = remoteDrive.files.get({ fileId: '123abc' }, utils.noop);
    assert.equal(req.uri.pathname, '/drive/v2/files/123abc');
  });

  it('should not be urlencoded', function () {
    var req = localDrive.files.get({ fileId: 'p@ram' }, utils.noop);
    assert.equal(req.uri.path.split('/').pop(), 'p@ram');
    req = remoteDrive.files.get({ fileId: 'p@ram' }, utils.noop);
    assert.equal(req.uri.path.split('/').pop(), 'p@ram');
  });

  it('should keep query params null if only path params', function () {
    var req = localDrive.files.get({ fileId: '123abc' }, utils.noop);
    assert.equal(req.uri.query, null);
    req = remoteDrive.files.get({ fileId: '123abc' }, utils.noop);
    assert.equal(req.uri.query, null);
  });

  it('should keep query params as is', function () {
    var req = localDrive.files.get({ fileId: '123abc', hello: 'world' }, utils.noop);
    assert.equal(req.uri.query, 'hello=world');
    req = remoteDrive.files.get({ fileId: '123abc', hello: 'world' }, utils.noop);
    assert.equal(req.uri.query, 'hello=world');
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

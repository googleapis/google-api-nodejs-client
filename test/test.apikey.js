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
var async = require('async');
var googleapis = require('../');
var nock = require('nock');
var utils = require('./utils');

function testGet (drive) {
  var req = drive.files.get({
    fileId: '123',
    auth: 'APIKEY'
  }, utils.noop);
  assert.equal(req.uri.query, 'key=APIKEY');
}

function testParams (drive) {
  var req = drive.files.get({
    fileId: '123',
    auth: 'API KEY'
  }, utils.noop);
  assert.equal(req.uri.query, 'key=API%20KEY');
}

function testKeyParam (drive) {
  var req = drive.files.get({
    fileId: '123',
    auth: 'API KEY',
    key: 'abc123'
  }, utils.noop);
  assert.equal(req.uri.query, 'key=abc123');
}

function testAuthKey (urlshortener) {
  var req = urlshortener.url.list({
    auth: 'YOUR API KEY'
  }, utils.noop);
  assert.equal(req.uri.href.indexOf('key=YOUR%20API%20KEY') > 0, true);
}

describe('API key', function () {
  var localDrive, remoteDrive;
  var localUrlshortener, remoteUrlshortener;
  var authClient;

  before(function (done) {
    nock.cleanAll();
    var google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      function (cb) {
        utils.loadApi(google, 'drive', 'v2', cb);
      },
      function (cb) {
        utils.loadApi(google, 'urlshortener', 'v1', cb);
      }
    ], function (err, apis) {
      if (err) {
        return done(err);
      }
      remoteDrive = apis[0];
      remoteUrlshortener = apis[1];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(function () {
    nock.cleanAll();
    nock.disableNetConnect();
    var google = new googleapis.GoogleApis();
    var OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URL');
    authClient.setCredentials({ access_token: 'abc123' });
    localDrive = google.drive('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  it('should include auth APIKEY as key=<APIKEY>', function () {
    testGet(localDrive);
    testGet(remoteDrive);
  });

  it('should properly escape params E.g. API KEY to API%20KEY', function () {
    testParams(localDrive);
    testParams(remoteDrive);
  });

  it('should use key param over auth apikey param if both provided', function () {
    testKeyParam(localDrive);
    testKeyParam(remoteDrive);
  });

  it('should set API key parameter if it is present', function () {
    testAuthKey(localUrlshortener);
    testAuthKey(remoteUrlshortener);
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

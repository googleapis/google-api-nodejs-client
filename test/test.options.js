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

describe('Options', function () {
  var authClient;

  beforeEach(function () {
    nock.cleanAll();
    nock.disableNetConnect();
  });

  it('should be a function', function () {
    var google = new googleapis.GoogleApis();
    assert.equal(typeof google.options, 'function');
  });

  it('should expose _options', function () {
    var google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    assert.equal(JSON.stringify(google._options), JSON.stringify({ hello: 'world' }));
  });

  it('should expose _options values', function () {
    var google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    assert.equal(google._options.hello, 'world');
  });

  it('should promote endpoint options over global options', function () {
    var google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    var drive = google.drive({ version: 'v2', hello: 'changed' });
    var req = drive.files.get({ fileId: '123' }, utils.noop);
    assert.equal(req.hello, 'changed');
  });

  it('should support global request params', function (done) {
    var google = new googleapis.GoogleApis();
    google.options({ params: { myParam: '123' } });
    var drive = google.drive('v2');
    var req = drive.files.get({ fileId: '123' }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    var query = req.uri.query || '';
    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
    nock.enableNetConnect();
    utils.loadApi(google, 'drive', 'v2', function (err, drive) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      req = drive.files.get({ fileId: '123' }, utils.noop);
      // If the default param handling is broken, query might be undefined, thus concealing the
      // assertion message with some generic "cannot call .indexOf of undefined"
      query = req.uri.query || '';
      assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
      done();
    });
  });

  it('should promote auth apikey options on request basis', function () {
    var google = new googleapis.GoogleApis();
    google.options({ auth: 'apikey1' });
    var drive = google.drive({ version: 'v2', auth: 'apikey2' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.uri.query, 'key=apikey3');
  });

  it('should apply google options to request object like proxy', function () {
    var google = new googleapis.GoogleApis();
    google.options({ proxy: 'http://proxy.example.com' });
    var drive = google.drive({ version: 'v2', auth: 'apikey2' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
  });

  it('should apply endpoint options to request object like proxy', function () {
    var google = new googleapis.GoogleApis();
    var drive = google.drive({ version: 'v2', auth: 'apikey2', proxy: 'http://proxy.example.com' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
    assert.equal(req.uri.query, 'key=apikey3');
  });

  it('should apply endpoint options like proxy to oauth transporter', function () {
    var google = new googleapis.GoogleApis();
    var OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENTID', 'CLIENTSECRET', 'REDIRECTURI');
    authClient.setCredentials({ access_token: 'abc' });
    var drive = google.drive({ version: 'v2', auth: 'apikey2', proxy: 'http://proxy.example.com' });
    var req = drive.files.get({ auth: authClient, fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
    assert.equal(req.headers.Authorization, 'Bearer abc');
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

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

'use strict';

var assert = require('assert');
var googleapis = require('../lib/googleapis.js');
var nock = require('nock');
var JWT = require('../lib/auth/jwtclient.js');
var Compute = require('../lib/auth/computeclient.js');

nock.disableNetConnect();

describe('JWT client', function() {

  it('should expose the default auth module', function () {
    var defaultAuthExists = false;
    if (googleapis.auth.getApplicationDefault) {
      defaultAuthExists = true;
    }

    assert.equal(true, defaultAuthExists);
  });

  it('should create a jwt', function () {
    var jwt = new JWT('someone@somewhere.com', 'file1', 'key1', 'scope1', 'subject1');
    assert.equal(jwt.email, 'someone@somewhere.com');
    assert.equal(jwt.keyFile, 'file1');
    assert.equal(jwt.key, 'key1');
    assert.equal(jwt.scopes, 'scope1');
    assert.equal(jwt.subject, 'subject1');
  });

  it('should create a jwt through googleapis', function () {
    var jwt = new googleapis.auth.JWT(
      'someone@somewhere.com', 'file1', 'key1', 'scope1', 'subject1');
    assert.equal(jwt.email, 'someone@somewhere.com');
    assert.equal(jwt.keyFile, 'file1');
    assert.equal(jwt.key, 'key1');
    assert.equal(jwt.scopes, 'scope1');
    assert.equal(jwt.subject, 'subject1');
  });

  it('should create scoped JWT', function () {
    var jwt = new googleapis.auth.JWT('someone@somewhere.com', 'file1', 'key1', null, 'subject1');
    assert.equal(jwt.scopes, null);
    assert.equal(jwt.createScopedRequired(), true);

    // Create a scoped version of the token now.
    var jwt2 = jwt.createScoped('scope1');

    // The original token should be unchanged.
    assert.equal(jwt.scopes, null);
    assert.equal(jwt.createScopedRequired(), true);

    // The new token should have scopes.
    assert.equal(jwt2.scopes, 'scope1');
    assert.equal(jwt2.createScopedRequired(), false);
  });
});

describe('Compute client', function() {

  it('should create a computeclient', function () {
    var compute = new Compute();
    assert.equal(compute.createScopedRequired(), false);
  });

  it('should create a computeclient', function () {
    var compute = new googleapis.auth.Compute();
    assert.equal(compute.createScopedRequired(), false);
  });
});

describe('OAuth2 client', function() {

  function noop() {}

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT';

  it('should return err no access or refresh token is set before making a request', function(done) {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    new googleapis.GoogleApis()
      .urlshortener('v1').url.get({ shortUrl: '123', auth: oauth2client }, function(err, result) {
        assert.equal(err.message, 'No access or refresh token is set.');
        assert.equal(result, null);
        done();
      });
  });

  it('should not throw any exceptions if only refresh token is set', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { refresh_token: 'refresh_token' };
    assert.doesNotThrow(function() {
      var google = new googleapis.GoogleApis();
      var options = { auth: oauth2client, shortUrl: '...' };
      google.urlshortener('v1').url.get(options, noop);
    });
  });

  it('should set access token type to Bearer if none is set', function(done) {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { access_token: 'foo', refresh_token: '' };

    var scope = nock('https://www.googleapis.com').get('/urlshortener/v1/url/history').reply(200);

    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    urlshortener.url.list({ auth: oauth2client }, function(err) {
      assert.equal(oauth2client.credentials.token_type, 'Bearer');
      scope.done();
      done(err);
    });
  });

  it('should refresh if access token is expired', function(done) {
    var scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .reply(200, { access_token: 'abc123', expires_in: 1 });
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var google = new googleapis.GoogleApis();
    var drive = google.drive({ version: 'v2', auth: oauth2client });
    var now = (new Date()).getTime();
    var twoSecondsAgo = now - 2000;
    oauth2client.credentials = { refresh_token: 'abc', expiry_date: twoSecondsAgo };
    drive.files.get({ fileId: 'wat' }, function() {
      var expiry_date = oauth2client.credentials.expiry_date;
      assert.notEqual(expiry_date, undefined);
      assert(expiry_date > now);
      assert(expiry_date < now + 5000);
      assert.equal(oauth2client.credentials.refresh_token, 'abc');
      assert.equal(oauth2client.credentials.access_token, 'abc123');
      scope.done();
      done();
    });
  });

  it('should make request if access token not expired', function(done) {
    var scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var google = new googleapis.GoogleApis();
    var drive = google.drive({ version: 'v2', auth: oauth2client });
    var now = (new Date()).getTime();
    var tenSecondsFromNow = now + 10000;
    oauth2client.credentials = {
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenSecondsFromNow
    };
    drive.files.get({ fileId: 'wat' }, function() {
      assert.equal(JSON.stringify(oauth2client.credentials), JSON.stringify({
        access_token: 'abc123',
        refresh_token: 'abc',
        expiry_date: tenSecondsFromNow,
        token_type: 'Bearer'
      }));

      assert.throws(function() {
        scope.done();
      }, 'AssertionError');
      nock.cleanAll();
      done();
    });
  });

  it('should refresh if have refresh token but no access token', function(done) {
    var scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .reply(200, { access_token: 'abc123', expires_in: 1 });
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var google = new googleapis.GoogleApis();
    var drive = google.drive({ version: 'v2', auth: oauth2client });
    var now = (new Date()).getTime();
    oauth2client.credentials = { refresh_token: 'abc' };
    drive.files.get({ fileId: 'wat' }, function() {
      var expiry_date = oauth2client.credentials.expiry_date;
      assert.notEqual(expiry_date, undefined);
      assert(expiry_date > now);
      assert(expiry_date < now + 4000);
      assert.equal(oauth2client.credentials.refresh_token, 'abc');
      assert.equal(oauth2client.credentials.access_token, 'abc123');
      scope.done();
      done();
    });
  });

  describe('revokeCredentials()', function() {
    it('should revoke credentials if access token present', function(done) {
      var scope = nock('https://accounts.google.com')
          .get('/o/oauth2/revoke?token=abc')
          .reply(200, { success: true });
      var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.credentials = { access_token: 'abc', refresh_token: 'abc' };
      oauth2client.revokeCredentials(function(err, result) {
        assert.equal(err, null);
        assert.equal(result.success, true);
        assert.equal(JSON.stringify(oauth2client.credentials), '{}');
        scope.done();
        done();
      });
    });

    it('should clear credentials and return error if no access token to revoke', function(done) {
      var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.credentials = { refresh_token: 'abc' };
      oauth2client.revokeCredentials(function(err, result) {
        assert.equal(err.message, 'No access token to revoke.');
        assert.equal(result, null);
        assert.equal(JSON.stringify(oauth2client.credentials), '{}');
        done();
      });
    });
  });

  describe('getToken()', function() {
    it('should return expiry_date', function(done) {
      var now = (new Date()).getTime();
      var scope = nock('https://accounts.google.com')
          .post('/o/oauth2/token')
          .reply(200, { access_token: 'abc', refresh_token: '123', expires_in: 10 });
      var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.getToken('code here', function(err, tokens) {
        assert(tokens.expiry_date >= now + (10 * 1000));
        assert(tokens.expiry_date <= now + (15 * 1000));
        scope.done();
        done();
      });
    });
  });
});

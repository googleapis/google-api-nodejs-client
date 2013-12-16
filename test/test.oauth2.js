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
    MockTransporter = require('./mocks/transporters.js');

describe('OAuth2 client', function() {

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT';
  var ACCESS_TYPE = 'offline';
  var SCOPE = 'scopex';

  var urlshortenerDiscoveryTransporter =
      new MockTransporter(__dirname + '/data/discovery_urlshortener.json');

  it('should generate a valid consent page url', function(done) {
    var opts = {
      access_type: ACCESS_TYPE,
      scope: SCOPE,
      response_type: 'code token'
    };

    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl(opts);
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.response_type, 'code token');
    assert.equal(query.access_type, ACCESS_TYPE);
    assert.equal(query.scope, SCOPE);
    assert.equal(query.client_id, CLIENT_ID);
    assert.equal(query.redirect_uri, REDIRECT_URI);
    done();
  });

  it('should set resonse_type param to code if none is given while' +
      'generating the consent page url', function(done) {
    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl();
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.response_type, 'code');
    done();
  });

  it('should throw exception no access or refresh token is set before making ' +
      'a request', function() {
    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    new googleapis.GoogleApis(urlshortenerDiscoveryTransporter)
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      assert.throws(function() {
        client
          .newRequest('dummy', {})
          .withAuthClient(oauth2client)
          .execute();
      }, Error, 'No access or refresh token is set.');
    });
  });

  it('should not throw any exceptions if only refresh token is set',
      function() {
    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { refresh_token: 'refresh_token' };
    new googleapis.GoogleApis(urlshortenerDiscoveryTransporter)
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      assert.doesNotThrow(function() {
        client
          .urlshortener.url.list()
          .withAuthClient(oauth2client)
          .execute();
      });
    });
  });

  it('should set access token type to Bearer if none is set', function(done) {
    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { access_token: 'foo', refresh_token: '' };
    new googleapis.GoogleApis(urlshortenerDiscoveryTransporter)
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var req = client.urlshortener.url.list().withAuthClient(oauth2client);
      req.execute(function(err, result) {
        assert.equal(oauth2client.credentials.token_type, 'Bearer');
         done();
      });
    });
  });

  it('should replay the request with a refreshed token if auth failed',
      function(done) {
    var i = 0;
    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { access_token: 'foo', refresh_token: 'bar' };
    new googleapis.GoogleApis(urlshortenerDiscoveryTransporter)
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var req = client.urlshortener.url.list().withAuthClient(oauth2client);
      oauth2client.transporter = {
        request: function(opts, callback) {
          if (i == 1) {
            assert.equal(opts.uri, 'https://accounts.google.com/o/oauth2/token');
            return done();
          }
          i++;
          callback(null, null, { statusCode: 401 });
        }
      };
      req.execute();
    });
  });

});

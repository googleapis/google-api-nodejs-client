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

nock.disableNetConnect();

describe('JWT auth client', function() {

  it('should get an initial access token', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        null,
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');
    jwt.GAPI = function(opts, callback) {
      assert.equal('foo@serviceaccount.com', opts.iss);
      assert.equal('/path/to/key.pem', opts.keyFile);
      assert.equal('http://bar http://foo', opts.scope);
      assert.equal('bar@subjectaccount.com', opts.sub);
      setTimeout(function() {
        callback(null);
      }, 0);
      return {
        getToken: function(opt_callback) {
          opt_callback(null, 'initial-access-token');
        }
      };
    };
    jwt.authorize(function() {
      assert.equal('initial-access-token', jwt.credentials.access_token);
      assert.equal('jwt-placeholder', jwt.credentials.refresh_token);
      done();
    });
  });

  it('should accept scope as string', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        null,
        'http://foo',
        'bar@subjectaccount.com');

    jwt.GAPI = function(opts) {
      assert.equal('http://foo', opts.scope);
      done();
    };

    jwt.authorize();
  });

  it('should refresh token if missing access token', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

    jwt.credentials = {
      refresh_token: 'jwt-placeholder'
    };

    jwt.gapi = {
      getToken: function(callback) {
        callback(null, 'abc123');
      }
    };

    jwt.request({}, function() {
      assert.equal('abc123', jwt.credentials.access_token);
      done();
    });
  });

  it('should refresh token if expired', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

    jwt.credentials = {
      access_token: 'woot',
      refresh_token: 'jwt-placeholder',
      expiry_date: (new Date()).getTime() - 1000
    };

    jwt.gapi = {
      getToken: function(callback) {
        callback(null, 'abc123');
      }
    };

    jwt.request({}, function() {
      assert.equal('abc123', jwt.credentials.access_token);
      done();
    });
  });

  it('should not refresh if not expired', function(done) {
    var scope = nock('https://accounts.google.com')
        .log(console.log)
        .post('/o/oauth2/token', '*')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });

    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

    jwt.credentials = {
      access_token: 'initial-access-token',
      refresh_token: 'jwt-placeholder',
      expiry_date: (new Date()).getTime() + 5000
    };

    jwt.request({}, function() {
      assert.equal('initial-access-token', jwt.credentials.access_token);
      assert.equal(false, scope.isDone());
      nock.cleanAll();
      done();
    });
  });

  it('should assume access token is not expired', function(done) {
    var scope = nock('https://accounts.google.com')
        .log(console.log)
        .post('/o/oauth2/token', '*')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });

    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

    jwt.credentials = {
      access_token: 'initial-access-token',
      refresh_token: 'jwt-placeholder'
    };

    jwt.request({}, function() {
      assert.equal('initial-access-token', jwt.credentials.access_token);
      assert.equal(false, scope.isDone());
      nock.cleanAll();
      done();
    });
  });

  it('should return expiry_date in milliseconds', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

    jwt.credentials = {
      refresh_token: 'jwt-placeholder'
    };

    var dateInSeconds = (new Date()).getTime() / 1000;

    jwt.gapi = {
      getToken: function(callback) {
        callback(null, 'token');
      },
      token_expires: dateInSeconds
    };

    jwt.refreshToken_({}, function(err, creds) {
      assert.notEqual(dateInSeconds, creds.expiry_date);
      assert.equal(dateInSeconds * 1000, creds.expiry_date);
      done();
    });
  });

  describe('.createScoped', function() {
    it('should clone stuff', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

      var clone = jwt.createScoped('x');

      assert.equal(jwt.email, clone.email);
      assert.equal(jwt.keyFile, clone.keyFile);
      assert.equal(jwt.key, clone.key);
      assert.equal(jwt.subject, clone.subject);
    });

    it('should handle string scope', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

      var clone = jwt.createScoped('newscope');
      assert.equal('newscope', clone.scopes);
    });

    it('should handle array scope', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

      var clone = jwt.createScoped(['gorilla', 'chimpanzee', 'orangutan']);
      assert.equal(3, clone.scopes.length);
      assert.equal('gorilla', clone.scopes[0]);
      assert.equal('chimpanzee', clone.scopes[1]);
      assert.equal('orangutan', clone.scopes[2]);
    });

    it('should handle null scope', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

      var clone = jwt.createScoped();
      assert.equal(null, clone.scopes);
    });

    it('should set scope when scope was null', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        null,
        'bar@subjectaccount.com');

      var clone = jwt.createScoped('hi');
      assert.equal('hi', clone.scopes);
    });

    it('should handle nulls', function() {
      var jwt = new googleapis.auth.JWT();

      var clone = jwt.createScoped('hi');
      assert.equal(jwt.email, null);
      assert.equal(jwt.keyFile, null);
      assert.equal(jwt.key, null);
      assert.equal(jwt.subject, null);
      assert.equal('hi', clone.scopes);
    });

    it('should not return the original instance', function() {
      var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo'],
        'bar@subjectaccount.com');

      var clone = jwt.createScoped('hi');
      assert.notEqual(jwt, clone);
    });
  });
});

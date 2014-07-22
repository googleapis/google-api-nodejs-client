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

var url = require('url');
var assert = require('assert');
var qs = require('querystring');
var fs = require('fs');
var googleapis = require('../lib/googleapis.js');
var crypto = require('crypto');
var nock = require('nock');

nock.disableNetConnect();

describe('OAuth2 client', function() {

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT';
  var ACCESS_TYPE = 'offline';
  var SCOPE = 'scopex';
  var SCOPE_ARRAY = ['scopex', 'scopey'];

  var PUBLIC_KEY = '';
  var PRIVATE_KEY = '';

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

  it('should allow scopes to be specified as array', function(done) {
    var opts = {
      access_type: ACCESS_TYPE,
      scope: SCOPE_ARRAY,
      response_type: 'code token'
    };

    var oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl(opts);
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.scope, SCOPE_ARRAY.join(' '));
    done();
  });

  it('should set response_type param to code if none is given while' +
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
    assert.throws(function() {
      new googleapis.GoogleApis()
        .urlshortener('v1').url.get({ auth: oauth2client });
    }, Error, 'No access or refresh token is set.');
  });

  it('should not throw any exceptions if only refresh token is set', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { refresh_token: 'refresh_token' };
    assert.doesNotThrow(function() {
      var google = new googleapis.GoogleApis();
      var options = { auth: oauth2client, shortUrl: '...' };
      google.urlshortener('v1').url.get(options);
    });
  });

  it('should set access token type to Bearer if none is set', function(done) {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { access_token: 'foo', refresh_token: '' };

    var scope = nock('https://www.googleapis.com').get('/urlshortener/v1/url/history').reply(200);

    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    urlshortener.url.list({ auth: oauth2client }, function(err, result) {
      assert.equal(oauth2client.credentials.token_type, 'Bearer');
      scope.done();
      done(err);
    });
  });

  it('should replay the request with a refreshed token if auth failed', function(done) {
    var i = 0;
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = { access_token: 'foo', refresh_token: 'bar' };
    var google = new googleapis.GoogleApis();
    oauth2client.transporter = {
      request: function(opts, callback) {
        if (i === 1) {
          assert.equal(opts.uri, 'https://accounts.google.com/o/oauth2/token');
          return done();
        }
        i++;
        callback(null, null, { statusCode: 401 });
      }
    };
    google.urlshortener('v1').url.list({ auth: oauth2client });
  });

  it('should verify a valid certificate against a jwt', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem', 'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem', 'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var login = oauth2client.verifySignedJwtWithCerts(data,
        {keyid: publicKey}, 'testaudience');

    assert.equal(login.getUserId(), '123456789');
    done();
  });

  it('should fail due to invalid audience', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"wrongaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /Wrong recipient/
    );

    done();
  });

  it('should fail due to invalid signature', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":1393241597,' +
        '"exp":1393245497' +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    //Originally: data += '.'+signature;
    data += signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /Wrong number of segments/
    );

    done();
  });

  it('should fail due to invalid envelope', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid"' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
          {keyid: publicKey}, 'testaudience');
      },
      /Can\'t parse token envelope/
    );

    done();
  });

  it('should fail due to invalid payload', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer"' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
          {keyid: publicKey}, 'testaudience');
      },
      /Can\'t parse token payload/
    );

    done();
  });

  it('should fail due to invalid signature', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64') +
      '.' + 'broken-signature';

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /Invalid token signature/
    );

    done();
  });

  it('should fail due to no expiration date', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /No expiration time/
    );

    done();
  });

  it('should fail due to no issue time', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (maxLifetimeSecs / 2);

    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /No issue time/
    );

    done();
  });

  it('should fail due to certificate with expiration date in future', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (2 * maxLifetimeSecs);
    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /Expiration time too far in future/
    );

    done();
  });

  it('should pass due to expiration date in future with adjusted max expiry', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var now = new Date().getTime() / 1000;
    var expiry = now + (2 * maxLifetimeSecs);
    var maxExpiry = (3 * maxLifetimeSecs);
    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var login = oauth2client.verifySignedJwtWithCerts(data,
        {keyid: publicKey}, 'testaudience', 'testissuer', maxExpiry);

    done();
  });

  it('should fail due to token being used to early', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var clockSkews = 300;
    var now = (new Date().getTime() / 1000);
    var expiry = now + (maxLifetimeSecs / 2);
    var issueTime = now + (clockSkews * 2);
    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + issueTime + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience');
      },
      /Token used too early/
    );

    done();
  });

  it('should fail due to invalid issuer', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var clockSkews = 300;
    var now = (new Date().getTime() / 1000);
    var expiry = now + (maxLifetimeSecs / 2);
    var idToken = '{' +
        '"iss":"invalidissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    assert.throws(
      function() {
        var login = oauth2client.verifySignedJwtWithCerts(data,
            {keyid: publicKey}, 'testaudience', 'testissuer');
      },
      /Invalid issuer/
    );

    done();
  });

  it('should pass due to valid issuer', function(done) {
    var publicKey = fs.readFileSync('./test/fixtures/public.pem',
        'utf-8');
    var privateKey = fs.readFileSync('./test/fixtures/private.pem',
        'utf-8');

    var maxLifetimeSecs = 86400;
    var clockSkews = 300;
    var now = (new Date().getTime() / 1000);
    var expiry = now + (maxLifetimeSecs / 2);
    var idToken = '{' +
        '"iss":"testissuer",' +
        '"aud":"testaudience",' +
        '"azp":"testauthorisedparty",' +
        '"email_verified":"true",' +
        '"id":"123456789",' +
        '"sub":"123456789",' +
        '"email":"test@test.com",' +
        '"iat":' + now + ',' +
        '"exp":' + expiry +
      '}';
    var envelope = '{' +
        '"kid":"keyid",' +
        '"alg":"RS256"' +
      '}';

    var data = new Buffer(envelope).toString('base64') +
      '.' + new Buffer(idToken).toString('base64');

    var signer = crypto.createSign('sha256');
    signer.update(data);
    var signature = signer.sign(privateKey, 'base64');

    data += '.' + signature;

    var oauth2client =
      new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var login = oauth2client.verifySignedJwtWithCerts(data,
        {keyid: publicKey}, 'testaudience', 'testissuer');

    done();
  });

  it('should be able to retrieve a list of Google certificates', function(done) {
    var scope = nock('https://www.googleapis.com').get('/oauth2/v1/certs').replyWithFile(200, __dirname + '/fixtures/oauthcerts.json');
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.getFederatedSignonCerts(function(err, certs) {
      assert.equal(err, null);
      assert.equal(Object.keys(certs).length, 2);
      assert.notEqual(certs['a15eea964ab9cce480e5ef4f47cb17b9fa7d0b21'], null);
      assert.notEqual(certs['39596dc3a3f12aa74b481579e4ec944f86d24b95'], null);
      scope.done();
      done();
    });
  });

  it('should be able to retrieve a list of Google certificates from cache the second time', function(done) {
    var scope = nock('https://www.googleapis.com')
        .defaultReplyHeaders({
          'Cache-Control': 'public, max-age=23641, must-revalidate, no-transform',
          'Content-Type': 'application/json'
        })
        .get('/oauth2/v1/certs')
        .once()
        .replyWithFile(200, __dirname + '/fixtures/oauthcerts.json');
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.getFederatedSignonCerts(function(err, certs) {
      assert.equal(err, null);
      assert.equal(Object.keys(certs).length, 2);
      scope.done(); // has retrieved from nock... nock no longer will reply
      oauth2client.getFederatedSignonCerts(function(err, certs) {
        assert.equal(err, null);
        assert.equal(Object.keys(certs).length, 2);
        scope.done();
        done();
      });
    });
  });

  it('should set redirect_uri if not provided in options', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl({});
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);
    assert.equal(query.redirect_uri, REDIRECT_URI);
  });

  it('should set client_id if not provided in options', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl({});
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);
    assert.equal(query.client_id, CLIENT_ID);
  });

  it('should override redirect_uri if provided in options', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl({ redirect_uri: 'overridden' });
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);
    assert.equal(query.redirect_uri, 'overridden');
  });

  it('should override client_id if provided in options', function() {
    var oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl({ client_id: 'client_override' });
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);
    assert.equal(query.client_id, 'client_override');
  });
});

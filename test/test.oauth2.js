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
    MockTransporter = require('./mocks/transporters.js'),
    crypto = require('crypto');

describe('OAuth2 client', function() {

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT';
  var ACCESS_TYPE = 'offline';
  var SCOPE = 'scopex';

  var PUBLIC_KEY = '';
  var PRIVATE_KEY = '';

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
            assert.equal(opts.uri,
                'https://accounts.google.com/o/oauth2/token');
            return done();
          }
          i++;
          callback(null, null, { statusCode: 401 });
        }
      };
      req.execute();
    });
  });

  it('should verify a valid certificate against a jwt',
      function(done) {

        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to invalid audience',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to invalid signature',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to invalid envelope',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

  it('should fail due to invalid payload',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to invalid signature',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
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

  it('should fail due to no expiration date',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to no issue time',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should fail due to certificate with expiration date in future',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should pass due to expiration date in future with adjusted max expiry',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

  it('should fail due to token being used to early',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

  it('should fail due to invalid issuer',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

  it('should pass due to valid issuer',
      function(done) {
        var publicKey = fs.readFileSync('./test/data/public.pem',
            'utf-8');
        var privateKey = fs.readFileSync('./test/data/private.pem',
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

    it('should be able to retrieve a list of Google certificates',
      function(done) {

        var oauth2client =
          new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
        oauth2client.getFederatedSignonCerts(function(err, certs) {
          assert(Object.keys(certs).length > 0);
          done();
        });

    });
});

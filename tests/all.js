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

var MockTransporter = require('./mocks/transporters.js');
var googleapis = require('../lib/googleapis.js');
var url = require('url');
var assert = require('assert');
var qs = require('querystring');

describe('Clients', function() {

  var mockTransporter =
        new MockTransporter(__dirname + '/data/discovery_plus.json');

  it('should create request helpers according ' +
        'to the resource on discovery API response', function() {
    googleapis.Transporter = mockTransporter;
    googleapis.load('plus', 'v3', function(err, client) {
      assert.equal(typeof client.plus.people.get, 'function');
      assert.equal(typeof client.plus.activities.search, 'function');
      assert.equal(typeof client.plus.comments.list, 'function');
    });
  });

  it('should be able to generate default discovery url', function() {
    var discoveryUrl =
        new googleapis.GoogleApis('plus', 'v3').generateDiscoveryUrl();
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'https:');
    assert.equal(parsed.host, 'www.googleapis.com');
    assert.equal(parsed.path, '/discovery/v1/apis/plus/v3/rpc');
    assert.equal(parsed.query, null);
  });

  it('should be able to generate default discovery url with custom ' +
      'base url and parameters configuration', function() {
    var discoveryUrl = new googleapis.GoogleApis('plus', 'v3', {
      baseDiscoveryUrl: 'http://mydeployment/discovery/',
      discoveryParams: { a: 'hello', b: 'hi' }
    }).generateDiscoveryUrl();
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'http:');
    assert.equal(parsed.host, 'mydeployment');
    assert.equal(parsed.pathname, '/discovery/plus/v3/rpc');
    assert.equal(parsed.query, 'a=hello&b=hi');
  });

});

describe('Transporters', function() {

  var urlshortenerDiscoveryTransporter =
    new MockTransporter(__dirname + '/data/discovery_urlshortener.json');
  var defaultUserAgent = 'google-api-nodejs-client/0.2.3-alpha';

  it('should set default client user agent if none is set', function() {
    var opts = urlshortenerDiscoveryTransporter.configure({});
    assert.equal(
        opts.headers['User-Agent'], defaultUserAgent);
  });

  it('should append default client user agent to the existing user agent',
    function() {
    var applicationName = 'MyTestApplication-1.0';
    var opts = urlshortenerDiscoveryTransporter.configure({
      headers: { 'User-Agent': applicationName }
    });
    assert.equal(
        opts.headers['User-Agent'], applicationName + ' ' + defaultUserAgent);
  });

});

describe('Requests', function() {

  var urlshortenerDiscoveryTransporter =
    new MockTransporter(__dirname + '/data/discovery_urlshortener.json');

  it('should set API key parameter if it is presented', function() {
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var url = client
        .withApiKey('YOUR API KEY HERE')
        .urlshortener.url.list().generateUri();
      assert.equal(url.indexOf('key=YOUR%20API%20KEY%20HERE') > 0, true);
    });
  });

  it('should generate a valid JSON-RPC payload for single' +
      'requests', function() {
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var obj = { longUrl: 'http://someurl...' };
      var request = client.urlshortener.url.insert(null, obj);
      var payload = request.generatePayload();
      var first = payload[0];

      assert.equal(payload.length, 1);
      assert.equal(first.method, 'urlshortener.url.insert');
      assert.equal(first.params.resource, obj);
      assert.equal(first.jsonrpc, '2.0');
      assert.equal(first.apiVersion, client.apiMeta.version);
    });
  });

  it('should generate a valid JSON-RPC payload if any params are given',
      function() {
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var params = { test: 'a' };
      var request = client.urlshortener.url.list(params);
      var payload = request.generatePayload();
      var first = payload[0];
      assert.equal(first.params, params);
    });
  });

  it('should return a single error for single requests', function() {
    var singleErrResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single_err.json');
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var obj = { longUrl: 'http://someurl...' };

      var request = client.urlshortener.url.insert(null, obj);
      request.transporter = singleErrResponseMockTransporter;
      request.execute(function(err, result) {
        assert.notEqual(err, null);
        assert.equal(result, null);
        assert.equal(err.code, 400);
        assert.equal(err.message, 'Required');
        assert.notEqual(err.data, null);
      });
    });
  });

  it('should return a single response object for single requests', function() {
    var singleResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single.json');
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var obj = { longUrl: 'http://google.com/' };

      var request = client.urlshortener.url.insert(null, obj);
      request.transporter = singleResponseMockTransporter;
      request.execute(function(err, result) {
        assert.equal(err, null);
        assert.notEqual(result, null);
        assert.notEqual(result.kind, null);
        assert.notEqual(result.id, null);
        assert.equal(result.longUrl, 'http://google.com/');
      });
    });
  });

  it('should return responses in the request order', function() {
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var requests = client.newBatchRequest();
      requests.add(client.urlshortener.url.list());
      requests.add(client.urlshortener.url.get());
      requests.add(client.urlshortener.url.get({ id: 'http://goo.gl/mR2d' }));

      // should construct the payload in the given order.
      var payload = requests.generatePayload();
      assert.equal(payload[0].method, 'urlshortener.url.list');
      assert.equal(payload[1].method, 'urlshortener.url.get');
      assert.equal(payload[2].params.id, 'http://goo.gl/mR2d');
    });
  });

  it('should return errors on the first argument, not on the body',
      function() {
    var batchResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_batch.json');
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      var requests = client.newBatchRequest();
      requests.transporter = batchResponseMockTransporter;
      requests.execute(function(errs, results) {
        assert.equal(!!errs, true);
        assert.equal(!!errs[0], true);
        assert.equal(results[0].error, null);
        assert.equal(errs[1], null);
        assert.notEqual(results[1].result, null);
      });
    });
  });

});

describe('OAuth2 client', function() {

  var CLIENT_ID = 'CLIENT_ID';
  var CLIENT_SECRET = 'CLIENT_SECRET';
  var REDIRECT_URI = 'REDIRECT';
  var ACCESS_TYPE = 'offline';
  var SCOPE = 'scopex';

  var urlshortenerDiscoveryTransporter =
      new MockTransporter(__dirname + '/data/discovery_urlshortener.json');

  it('should generate a valid consent page url', function() {
    var opts = {
      access_type: ACCESS_TYPE,
      scope: SCOPE,
      response_type: 'code token'
    };

    var oauth2client =
        new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl(opts);
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.response_type, 'code token');
    assert.equal(query.access_type, ACCESS_TYPE);
    assert.equal(query.scope, SCOPE);
    assert.equal(query.client_id, CLIENT_ID);
    assert.equal(query.redirect_uri, REDIRECT_URI);
  });

  it('should set resonse_type param to code if none is given while' +
      'generating the consent page url', function() {
    var oauth2client =
        new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    var generated = oauth2client.generateAuthUrl();
    var parsed = url.parse(generated);
    var query = qs.parse(parsed.query);

    assert.equal(query.response_type, 'code');
  });

  it('should throw exception no access token is set before making ' +
      'a request', function() {
    var oauth2client =
      new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    googleapis.Transporter = urlshortenerDiscoveryTransporter;
    googleapis.load('urlshortener', 'v1', function(err, client) {
      assert.throws(function() {
        client
          .newRequest('dummy', {})
          .withAuthClient(oauth2client)
          .execute();
      }, Error, 'No access token is set.');
    });
  });

  it('should replay the request with a refreshed token if auth failed',
    function() {
    // TODO(burcud): Implement this unit test.
  });

});

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
    requests = require('../lib/requests.js');

describe('Requests', function() {

  var urlshortenerDiscoveryTransporter =
    new MockTransporter(__dirname + '/data/discovery_urlshortener.json');

  it('should set API key parameter if it is presented', function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var url = client.urlshortener.url.list()
          .withApiKey('YOUR API KEY HERE').generateUri();
      assert.equal(url.indexOf('key=YOUR%20API%20KEY%20HERE') > 0, true);
      done();
    });
  });

  it('should not append ? with no parameters', function() {
    var req = new requests.Request();
    var generatedUrl = req.generateUri();
    assert.equal(-1, generatedUrl.indexOf('?'));
  });

  it('should generate a valid JSON-RPC payload for single' +
      'requests', function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var obj = { longUrl: 'http://someurl...' };
      var request = client.urlshortener.url.insert(null, obj);
      var payload = request.generatePayload();
      var first = payload[0];

      assert.equal(payload.length, 1);
      assert.equal(first.method, 'urlshortener.url.insert');
      assert.equal(first.params.resource, obj);
      assert.equal(first.jsonrpc, '2.0');
      done();
    });
  });

  it('should handle non-RPC errors for single requests without ' +
      'assuming the errors should be an array', function(done) {
    var invalidGrantMockTransporter =
        new MockTransporter(__dirname + '/data/res_invalidgrant.json');
    var gapis = new googleapis.GoogleApis();
    var callback = function(err, client) {
      var req = client.urlshortener.url.list();
      req.transporter = invalidGrantMockTransporter;
      req.execute(function (err, res) {
        assert.equal(err, 'invalid_grant');
        done();
      });
    };
    gapis.discover('urlshortener', 'v1').execute(callback);
  });

  it('should generate a valid JSON-RPC payload if any params are given',
      function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var params = { test: 'a' };
      var request = client.urlshortener.url.list(params);
      var payload = request.generatePayload();
      var first = payload[0];
      assert.equal(first.params, params);
      done();
    });
  });

  it('should return a single error for single requests', function(done) {
    var singleErrResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single_err.json');
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {
      var obj = { longUrl: 'http://someurl...' };

      var request = client.urlshortener.url.insert(null, obj);
      request.transporter = singleErrResponseMockTransporter;
      request.execute(function(err, result) {
        assert.notEqual(err, null);
        assert.equal(result, null);
        assert.equal(err.code, 400);
        assert.equal(err.message, 'Required');
        assert.notEqual(err.data, null);
        done();
      });
    });
  });

  it('should return a single response object for single requests',
      function(done) {
    var singleResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single.json');
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var obj = { longUrl: 'http://google.com/' };

      var request = client.urlshortener.url.insert(null, obj);
      request.transporter = singleResponseMockTransporter;
      request.execute(function(err, result) {
        assert.equal(err, null);
        assert.notEqual(result, null);
        assert.notEqual(result.kind, null);
        assert.notEqual(result.id, null);
        assert.equal(result.longUrl, 'http://google.com/');
        done();
      });
    });
  });

  it('should return responses in the request order', function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var requests = client.newBatchRequest();
      requests.add(client.urlshortener.url.list());
      requests.add(client.urlshortener.url.get());
      requests.add(client.urlshortener.url.get({ id: 'http://goo.gl/mR2d' }));

      // should construct the payload in the given order.
      var payload = requests.generatePayload();
      assert.equal(payload[0].method, 'urlshortener.url.list');
      assert.equal(payload[1].method, 'urlshortener.url.get');
      assert.equal(payload[2].params.id, 'http://goo.gl/mR2d');
      done();
    });
  });

  it('should return errors on the first argument, not on the body',
      function(done) {
    var batchResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_batch.json');
    var gapis = new googleapis.GoogleApis();
    gapis.Transporter = urlshortenerDiscoveryTransporter;
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var requests = client.newBatchRequest();
      requests.transporter = batchResponseMockTransporter;
      requests.execute(function(errs, results) {
        assert.equal(!!errs, true);
        assert.equal(!!errs[0], true);
        assert.equal(results[0], null);
        assert.equal(errs[1], null);
        assert.notEqual(results[1], null);
        done();
      });
    });
  });

});

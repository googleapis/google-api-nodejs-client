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
    var gapis = new googleapis.GoogleApis(urlshortenerDiscoveryTransporter);
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var url = client.urlshortener.url.list()
          .withApiKey('YOUR API KEY HERE').generatePayload().uri;
      assert.equal(url.indexOf('key=YOUR%20API%20KEY%20HERE') > 0, true);
      done();
    });
  });

  it('should not append ? with no query parameters', function(done) {
    new googleapis.GoogleApis()
        .discover('drive', 'v2')
        .execute(function(err, client) {
      var req = client.drive.files.get({ fileId: 'ID' }),
          generatedUrl = req.generatePayload().uri;
      assert.equal(-1, generatedUrl.indexOf('?'));
      done();
    });
  });

  it('should generate a valid payload for single ' +
      'requests', function(done) {
    var gapis = new googleapis.GoogleApis(urlshortenerDiscoveryTransporter);
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var obj = { longUrl: 'http://someurl...' };
      var request = client.urlshortener.url.insert(obj);
      var payload = request.generatePayload();

      assert.equal(payload.uri,
          'https://www.googleapis.com/urlshortener/v1/url');
      assert.equal(payload.method, 'POST');
      assert.equal(payload.json.longUrl, 'http://someurl...');
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
      req.execute(function(err, res) {
        assert.equal(err, 'invalid_grant');
        done();
      });
    };
    gapis.discover('urlshortener', 'v1').execute(callback);
  });

  it('should generate a valid payload if any params are given',
      function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var params = { shortUrl: 'a' };
      var request = client.urlshortener.url.get(params);
      var payload = request.generatePayload();
      assert.equal(payload.uri,
          'https://www.googleapis.com/urlshortener/v1/url?shortUrl=a');
      assert.equal(payload.method, 'GET');
      done();
    });
  });

  it('should not require parameters for insertion requests', function(done) {
    var gapis = new googleapis.GoogleApis();
    gapis
        .discover('drive', 'v2')
        .execute(function(err, client) {
      var req = client.drive.files.insert({ someAttr: 'someValue' }),
          payload = req.generatePayload();
      assert.equal(payload.json.someAttr, 'someValue');
      done();
    });
  });

  it('should return a single error for single requests', function(done) {
    var singleErrResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single_err.json');
    var gapis = new googleapis.GoogleApis(urlshortenerDiscoveryTransporter);
    gapis
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {
      var obj = { longUrl: 'http://someurl...' };

      var request = client.urlshortener.url.insert(null, obj);
      request.transporter = singleErrResponseMockTransporter;
      request.execute(function(err, result) {
        assert.notEqual(err, null);
        assert.equal(err.code, 400);
        assert.equal(err.message, 'Required');
        done();
      });
    });
  });

  it('should return a single response object for single requests',
      function(done) {
    var singleResponseMockTransporter =
        new MockTransporter(__dirname + '/data/res_single.json');
    var gapis = new googleapis.GoogleApis(urlshortenerDiscoveryTransporter);
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
    var gapis = new googleapis.GoogleApis(urlshortenerDiscoveryTransporter);
    gapis
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var requests = client.newBatchRequest();
      requests.add(client.urlshortener.url.list());
      requests.add(client.urlshortener.url.get());
      requests.add(client.urlshortener.url.get({
          shortUrl: 'http://goo.gl/mR2d' }));

      // should construct the payload in the given order.
      var payload = requests.generatePayload();
      assert.equal(payload.multipart[0].body,
          'GET /urlshortener/v1/url/history\r\n');
      assert.equal(payload.multipart[1].body, 'GET /urlshortener/v1/url\r\n');
      assert.equal(payload.multipart[2].body,
          'GET /urlshortener/v1/url?shortUrl=http%3A%2F%2Fgoo.gl%2FmR2d\r\n');
      done();
    });
  });

  it('should be able to execute batch requests', function(done) {
    new googleapis.GoogleApis()
        .discover('urlshortener', 'v1')
        .execute(function(err, client) {
      var requests = client.newBatchRequest();
      requests.add(client.urlshortener.url.get({
          shortUrl: 'http://goo.gl/mR2d' }));
      requests.add(client.urlshortener.url.get({
          shortUrl: 'http://goo.gl/mR2d' }));
      requests.execute(function(err, results) {
        assert.ifError(err);
        done();
      });
    });
  });

  it('should generate a valid basic upload payload if media is set, ' +
        'metadata is not set', function(done) {
    googleapis.discover('drive', 'v2').execute(function(err, client) {
      var req = client.drive.files.insert().withMedia('text/plain', 'hey');

      var payload = req.generatePayload();
      assert.equal(payload.method, 'POST');
      assert.equal(payload.uri,
          'https://www.googleapis.com/upload/drive/v2/files?uploadType=media');
      assert.equal(payload.headers['Content-Type'], 'text/plain');
      assert.equal(payload.body, 'hey');
      done();
    });
  });

  it('should generate valid multipart upload payload if media and metadata ' +
        'are both set', function(done) {
    googleapis.discover('drive', 'v2').execute(function(err, client) {
      var req = client.drive.files
          .insert({ title: 'title' })
          .withMedia('text/plain', 'hey');

      var payload = req.generatePayload();
      assert.equal(payload.method, 'POST');
      assert.equal(payload.uri, 'https://www.googleapis.com/upload/drive/' +
          'v2/files?uploadType=multipart');
      assert.equal(payload.multipart[0]['Content-Type'], 'application/json');
      assert.equal(payload.multipart[0].body, '{"title":"title"}');
      assert.equal(payload.multipart[1]['Content-Type'], 'text/plain');
      assert.equal(payload.multipart[1].body, 'hey');
      assert.equal(payload.body, null);
      done();
    });
  });

  it('should differentiate query params and body object', function(done) {
    googleapis.discover('drive', 'v2').execute(function(err, client) {
      var req1 = client.drive.files.insert({ title: 'Hello' });
      var req2 = client.drive.files.list({ q: 'title contains "H"' });
      var req3 = client.drive.files.get({ fileId: 'root' });

      assert.equal(req1.params.title, null);
      assert.equal(req1.body.title, 'Hello');
      assert.equal(req2.params.q, 'title contains "H"');
      assert.equal(req3.generatePath(req3.params), '/drive/v2/files/root');
      done();
    });
  });

  describe('buildUri', function() {
    it('should concat path without double or trailing slashes', function() {
      var uri = requests.buildUri('', ['a', '//b/6/n/', 'c', 'd/']);
      assert.equal(uri, '/a/b/6/n/c/d');
    });

    it('should avoid null or undefined paths', function() {
      var uri = requests.buildUri('', ['a', null, undefined, 'd']);
      assert.equal(uri, '/a/d');
    });

    it('should remove double slashes from root', function() {
      var uri = requests.buildUri('http://root///', ['a']);
      assert.equal(uri, 'http://root/a');
    });

    it('should append query params', function() {
      var uri = requests.buildUri('', ['a'], { q: 'keyword', p: 1 });
      assert.equal(uri, '/a?q=keyword&p=1');
    });
  });
});

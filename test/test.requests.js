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
var fs = require('fs');
var googleapis = require('../lib/googleapis.js');
var nock = require('nock');

nock.disableNetConnect();

describe('Requests', function() {

  it('should set API key parameter if it is presented', function() {
    var google = new googleapis.GoogleApis();
    var req = google.urlshortener('v1').url.list({ auth: 'YOUR API KEY' });
    assert.equal(req.uri.href.indexOf('key=YOUR%20API%20KEY') > 0, true);
  });

  it('should not append ? with no query parameters', function() {
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var uri = drive.files.get({ fileId: 'ID' }).uri;
    assert.equal(-1, uri.href.indexOf('?'));
  });

  it('should generate a valid payload for single requests', function() {
    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://someurl...' };

    var req = urlshortener.url.insert(obj);
    assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?longUrl=http%3A%2F%2Fsomeurl...');
    assert.equal(req.method, 'POST');
  });

  it('should generate valid payload if any params are given', function() {
    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    var params = { shortUrl: 'a' };
    var req = urlshortener.url.get(params);
    assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=a');
    assert.equal(req.method, 'GET');
  });

  it('should not require parameters for insertion requests', function() {
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var req = drive.files.insert({ someAttr: 'someValue' });
    assert.equal(req.uri.query, 'someAttr=someValue&uploadType=multipart');
  });

  it('should return a single response object for single requests', function(done) {
    var google = new googleapis.GoogleApis();
    var scope = nock('https://www.googleapis.com')
        .post('/urlshortener/v1/url')
        .replyWithFile(200, __dirname + '/fixtures/urlshort-insert-res.json');
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert.equal(err, null);
      assert.notEqual(result, null);
      assert.notEqual(result.kind, null);
      assert.notEqual(result.id, null);
      assert.equal(result.longUrl, 'http://google.com/');
      scope.done();
      done(err);
    });
  });

  it('should generate a valid upload if media is set, metadata is not set', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var resource = { mimeType: 'text/plain' };
    var media = 'hey';
    var expectedResp = fs.readFileSync(__dirname + '/fixtures/media-response.txt', { encoding: 'utf8' });
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
      assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
      var boundary = req.src.boundary;
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media)
          .replace('$resource', JSON.stringify(resource))
          .trim();
      assert.strictEqual(expectedResp, body);
      scope.done();
      done();
    });
  });

  it('should generate valid multipart upload payload if media and metadata are both set', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var resource = { title: 'title', mimeType: 'text/plain' };
    var media = 'hey';
    var expectedResp = fs.readFileSync(__dirname + '/fixtures/media-response.txt', { encoding: 'utf8' });
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
      assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
      var boundary = req.src.boundary;
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media)
          .replace('$resource', JSON.stringify(resource))
          .trim();
      assert.strictEqual(expectedResp, body);
      scope.done();
      done();
    });
  });
});

/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
var google, drive, authClient, OAuth2;

nock.disableNetConnect();

describe('Media', function() {

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    drive = google.drive('v2');
  });

  it('should post with uploadType=multipart', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(200, { fileId: 'abc123' });
    var req = drive.files.insert({}, function(err, body) {
      assert.equal(JSON.stringify(body), JSON.stringify({ fileId: 'abc123' }));
      scope.done();
      done();
    });
  });

  it('should generate a valid upload if media is set, metadata is not set', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
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

  it('should not require parameters for insertion requests', function() {
    var req = drive.files.insert({ someAttr: 'someValue' });
    assert.equal(req.uri.query, 'someAttr=someValue&uploadType=multipart');
  });
});

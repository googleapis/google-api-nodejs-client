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

  function noop() {}

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    drive = google.drive('v2');
  });

  it('should post with uploadType=multipart', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(200, { fileId: 'abc123' });
    var req = drive.files.insert({ media: { body: 'hello' }}, function(err, body) {
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
    var media = { body: 'hey' };
    var expectedResp = fs.readFileSync(__dirname + '/fixtures/media-response.txt', { encoding: 'utf8' });
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
      assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
      var boundary = req.src.boundary;
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media.body)
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
    var media = { body: 'hey' };
    var expectedResp = fs.readFileSync(__dirname + '/fixtures/media-response.txt', { encoding: 'utf8' });
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
      assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
      var boundary = req.src.boundary;
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media.body)
          .replace('$resource', JSON.stringify(resource))
          .trim();
      assert.strictEqual(expectedResp, body);
      scope.done();
      done();
    });
  });

  it('should not require parameters for insertion requests', function() {
    var req = drive.files.insert({ someAttr: 'someValue', media: { body: 'wat' } }, noop);
    assert.equal(req.uri.query, 'someAttr=someValue&uploadType=multipart');
  });

  it('should not multipart upload if no media body given', function() {
    var req = drive.files.insert({ someAttr: 'someValue' }, noop);
    assert.equal(req.uri.query, 'someAttr=someValue');
  });

  it('should set text/plain when passed a string as media body', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var resource = { title: 'title' };
    var media = { body: 'hey' };
    var expectedResp = fs.readFileSync(__dirname + '/fixtures/media-response.txt', { encoding: 'utf8' });
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
      assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
      var boundary = req.src.boundary;
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media.body)
          .replace('$resource', JSON.stringify(resource))
          .trim();
      assert.strictEqual(expectedResp, body);
      scope.done();
      done();
    });
  });

  it('should handle metadata-only media requests properly', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/gmail/v1/users/me/drafts')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var gmail = google.gmail('v1');
    var resource = { message: { raw: (new Buffer('hello', 'binary')).toString('base64') } };
    var req = gmail.users.drafts.create({ userId: 'me', resource: resource, media: { mimeType: 'message/rfc822' } }, function(err, resp) {
      assert.equal(req.headers['content-type'], 'application/json');
      assert.equal(JSON.stringify(resp), JSON.stringify(resource));
      done();
    });
  });
});

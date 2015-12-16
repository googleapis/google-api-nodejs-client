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
var google, drive;

nock.disableNetConnect();

var boundaryPrefix = 'multipart/related; boundary=';

describe('Media', function() {

  function noop() {}

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    drive = google.drive('v2');
  });

  it('should post with uploadType=multipart if resource and media set', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=multipart')
        .reply(200, { fileId: 'abc123' });
    drive.files.insert({ resource: {}, media: { body: 'hello' }}, function(err, body) {
      assert.equal(JSON.stringify(body), JSON.stringify({ fileId: 'abc123' }));
      scope.done();
      done();
    });
  });

  it('should post with uploadType=media media set but not resource', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=media')
        .reply(200, { fileId: 'abc123' });
    drive.files.insert({ media: { body: 'hello' }}, function(err, body) {
      assert.equal(JSON.stringify(body), JSON.stringify({ fileId: 'abc123' }));
      scope.done();
      done();
    });
  });

  it('should generate a valid media upload if media is set, metadata is not set', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/drive/v2/files?uploadType=media')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var media = { body: 'hey' };
    var req = drive.files.insert({ media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(
        req.uri.href,
        'https://www.googleapis.com/upload/drive/v2/files?uploadType=media'
      );
      assert.strictEqual(media.body, body);
      scope.done();
      done();
    });
  });

  it('should generate valid multipart upload if media and metadata are both set', function(done) {
      var scope = nock('https://www.googleapis.com')
          .post('/upload/drive/v2/files?uploadType=multipart')
          .reply(201, function(uri, reqBody) {
        return reqBody; // return request body as response for testing purposes
      });
      var resource = { title: 'title', mimeType: 'text/plain' };
      var media = { body: 'hey' };
      var expectedResp = fs.readFileSync(
        __dirname + '/fixtures/media-response.txt',
        { encoding: 'utf8' }
      );
      var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
        assert.equal(req.method, 'POST');
        assert.equal(
          req.uri.href,
          'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart'
        );
        assert.equal(req.headers['content-type'].indexOf('multipart/related;'), 0);
        var boundary = req.headers['content-type'].replace(boundaryPrefix, '');
        expectedResp = expectedResp
            .replace(/\n/g, '\r\n')
            .replace(/\$boundary/g, boundary)
            .replace('$media', media.body)
            .replace('$resource', JSON.stringify(resource))
            .replace('$mimeType', 'text/plain')
            .trim();
        assert.strictEqual(expectedResp, body);
        scope.done();
        done();
      }
    );
  });

  it('should not require parameters for insertion requests', function() {
    var req = drive.files.insert({ someAttr: 'someValue', media: { body: 'wat' } }, noop);
    assert.equal(req.uri.query, 'someAttr=someValue&uploadType=media');
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
    var expectedResp = fs.readFileSync(
      __dirname + '/fixtures/media-response.txt',
      { encoding: 'utf8' }
    );
    var req = drive.files.insert({ resource: resource, media: media }, function(err, body) {
      assert.equal(req.method, 'POST');
      assert.equal(
        req.uri.href,
        'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart'
      );
      assert.equal(req.headers['content-type'].indexOf('multipart/related;'), 0);
      var boundary = req.headers['content-type'].replace(boundaryPrefix, '');
      expectedResp = expectedResp
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', media.body)
          .replace('$resource', JSON.stringify(resource))
          .replace('$mimeType', 'text/plain')
          .trim();
      assert.strictEqual(expectedResp, body);
      scope.done();
      done();
    });
  });

  it('should handle metadata-only media requests properly', function(done) {
    nock('https://www.googleapis.com')
        .post('/gmail/v1/users/me/drafts')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });
    var gmail = google.gmail('v1');
    var resource = { message: { raw: (new Buffer('hello', 'binary')).toString('base64') } };
    var req = gmail.users.drafts.create(
      { userId: 'me', resource: resource, media: { mimeType: 'message/rfc822' } },
      function(err, resp) {
        assert.equal(req.headers['content-type'], 'application/json');
        assert.equal(JSON.stringify(resp), JSON.stringify(resource));
        done();
      }
    );
  });

  it('should accept readable stream as media body without metadata', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/gmail/v1/users/me/drafts?uploadType=media')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });

    var gmail = google.gmail('v1');
    var body = fs.createReadStream(__dirname + '/fixtures/mediabody.txt');
    var expectedBody = fs.readFileSync(__dirname + '/fixtures/mediabody.txt');
    gmail.users.drafts.create({
      userId: 'me',
      media: {
        mimeType: 'message/rfc822',
        body: body
      }
    }, function(err, resp) {
      assert.equal(resp, expectedBody);
      scope.done();
      done();
    });
  });

  it('should accept readable stream as media body with metadata', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/gmail/v1/users/me/drafts?uploadType=multipart')
        .reply(201, function(uri, reqBody) {
      return reqBody; // return request body as response for testing purposes
    });

    var gmail = google.gmail('v1');
    var resource = { message: { raw: (new Buffer('hello', 'binary')).toString('base64') } };
    var body = fs.createReadStream(__dirname + '/fixtures/mediabody.txt');
    var bodyString = fs.readFileSync(__dirname + '/fixtures/mediabody.txt', { encoding: 'utf8' });
    var media = { mimeType: 'message/rfc822', body: body };
    var expectedBody = fs.readFileSync(
      __dirname + '/fixtures/media-response.txt',
      { encoding: 'utf8' }
    );
    var req = gmail.users.drafts.create({
      userId: 'me',
      resource: resource,
      media: media
    }, function(err, resp) {
      var boundary = req.headers['content-type'].replace(boundaryPrefix, '');
      expectedBody = expectedBody
          .replace(/\n/g, '\r\n')
          .replace(/\$boundary/g, boundary)
          .replace('$media', bodyString)
          .replace('$resource', JSON.stringify(resource))
          .replace('$mimeType', 'message/rfc822')
          .trim();
      assert.strictEqual(expectedBody, resp);
      scope.done();
      done();
    });
  });

  it('should return err, {object}body, resp for streaming media requests', function(done) {
    var scope = nock('https://www.googleapis.com')
        .post('/upload/gmail/v1/users/me/drafts?uploadType=multipart')
        .reply(201, function() {
      return JSON.stringify({ hello: 'world' });
    });

    var gmail = google.gmail('v1');
    var resource = { message: { raw: (new Buffer('hello', 'binary')).toString('base64') } };
    var body = fs.createReadStream(__dirname + '/fixtures/mediabody.txt');
    var media = { mimeType: 'message/rfc822', body: body };
    gmail.users.drafts.create({
      userId: 'me',
      resource: resource,
      media: media
    }, function(err, body, resp) {
      assert.equal(typeof body, 'object');
      assert.equal(body.hello, 'world');
      assert.equal(typeof resp, 'object');
      assert.equal(resp.body, JSON.stringify(body));
      scope.done();
      done();
    });
  });
});

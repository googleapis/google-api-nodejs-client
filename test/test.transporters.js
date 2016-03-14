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
var nock = require('nock');

nock.disableNetConnect();

describe('Transporters', function() {

  function noop() {}

  it('should add headers to the request from params', function() {
    var google = require('../lib/googleapis');
    var drive = google.drive('v2');
    var req = drive.comments.insert({
        fileId: 'a',
        headers: {
          'If-None-Match': '12345'
        }
    }, noop);
    assert.equal(req.headers['If-None-Match'], '12345');
  });

  it('should automatically add content-type for POST requests', function() {
    var google = require('../lib/googleapis');
    var drive = google.drive('v2');
    var req = drive.comments.insert({
        fileId: 'a'
    }, noop);
    assert.equal(req.headers['content-type'], 'application/json');
  });

  it('should not add body for GET requests', function() {
    var google = require('../lib/googleapis');
    var drive = google.drive('v2');
    var req = drive.files.list(noop);
    assert.equal(req.headers['content-type'], null);
    assert.equal(req.body, null);
  });

  it('should not add body for DELETE requests', function() {
    var google = require('../lib/googleapis');
    var drive = google.drive('v2');
    var req = drive.files.delete({
        fileId: 'test'
    }, noop);
    assert.equal(req.headers['content-type'], null);
    assert.equal(req.body, null);
  });

  it('should return errors within response body as instances of Error', function(done) {
    var google = require('../lib/googleapis');
    var drive = google.drive('v2');

    var scope = nock('https://www.googleapis.com')
      .get('/drive/v2/files?q=hello')
      // Simulate an error returned via response body from Google's API endpoint
      .reply(400, { error: { code: 400, message: 'Error!'} });

    drive.files.list({ q: 'hello' }, function(err) {
      assert(err instanceof Error);
      assert.equal(err.message, 'Error!');
      assert.equal(err.code, 400);
      scope.done();
      done();
    });
  });

  it('should return error message correctly when error is not an object', function(done) {
    var google = require('../lib/googleapis');
    var oauth2 = google.oauth2('v2');

    var scope = nock('https://www.googleapis.com')
      .post('/oauth2/v2/tokeninfo?access_token=hello')
      // Simulate an error returned via response body from Google's tokeninfo endpoint
      .reply(400, { error: 'invalid_grant', error_description: 'Code was already redeemed.' });

    oauth2.tokeninfo({ access_token: 'hello' }, function(err) {
      assert(err instanceof Error);
      assert.equal(err.message, 'invalid_grant');
      assert.equal(err.code, 400);
      scope.done();
      done();
    });
  });

  it('should return 5xx responses as errors', function(done) {
    var google = require('../lib/googleapis');
    var scope = nock('https://www.googleapis.com')
      .post('/urlshortener/v1/url')
      .reply(500, 'There was an error!');
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert(err instanceof Error);
      assert.equal(err.code, 500);
      assert.equal(err.message, 'There was an error!');
      assert.equal(result, null);
      scope.done();
      done();
    });
  });

  it('should handle 5xx responses that include errors', function(done) {
    var google = require('../lib/googleapis');
    var scope = nock('https://www.googleapis.com')
      .post('/urlshortener/v1/url')
      .reply(500, { error: {message: 'There was an error!'}});
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert(err instanceof Error);
      assert.equal(err.code, 500);
      assert.equal(err.message, 'There was an error!');
      assert.equal(result, null);
      scope.done();
      done();
    });
  });

  it('should handle a Backend Error', function(done) {
    var google = require('../lib/googleapis');
    var scope = nock('https://www.googleapis.com')
      .post('/urlshortener/v1/url')
      .reply(500, {
        error: {
         errors: [
           {
             domain: 'global',
             reason: 'backendError',
             message: 'Backend Error'
           }
         ],
         code: 500,
         message: 'Backend Error'
       }
      });
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert(err instanceof Error);
      assert.equal(err.code, 500);
      assert.equal(err.message, 'Backend Error');
      assert.equal(result, null);
      scope.done();
      done();
    });
  });
});

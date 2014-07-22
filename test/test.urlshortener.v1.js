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
var googleapis = require('../lib/googleapis.js');
var nock = require('nock');

nock.disableNetConnect();

describe('Urlshortener', function() {

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
});

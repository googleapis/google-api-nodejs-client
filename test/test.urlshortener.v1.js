// Copyright 2013-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var assert = require('assert');
var googleapis = require('../');
var nock = require('nock');
var path = require('path');
var utils = require('./utils');

function testSingleRequest (urlshortener) {
  var obj = { longUrl: 'http://someurl...' };
  var req = urlshortener.url.insert(obj, utils.noop);
  assert.equal(
    req.uri.href,
    'https://www.googleapis.com/urlshortener/v1/url?longUrl=http%3A%2F%2Fsomeurl...'
  );
  assert.equal(req.method, 'POST');
}

function testParams (urlshortener) {
  var params = { shortUrl: 'a' };
  var req = urlshortener.url.get(params, utils.noop);
  assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=a');
  assert.equal(req.method, 'GET');
}

function testInsert (urlshortener, cb) {
  var obj = { longUrl: 'http://google.com/' };
  urlshortener.url.insert({ resource: obj }, function (err, result) {
    assert.equal(err, null);
    assert.notEqual(result, null);
    assert.notEqual(result.kind, null);
    assert.notEqual(result.id, null);
    assert.equal(result.longUrl, 'http://google.com/');
    cb(err);
  });
}

describe('Urlshortener', function () {
  var localUrlshortener, remoteUrlshortener;

  before(function (done) {
    nock.cleanAll();
    var google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    utils.loadApi(google, 'urlshortener', 'v1', function (err, urlshortener) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      remoteUrlshortener = urlshortener;
      done();
    });
  });

  beforeEach(function () {
    nock.cleanAll();
    nock.disableNetConnect();
    var google = new googleapis.GoogleApis();
    localUrlshortener = google.urlshortener('v1');
  });

  it('should generate a valid payload for single requests', function () {
    testSingleRequest(localUrlshortener);
    testSingleRequest(remoteUrlshortener);
  });

  it('should generate valid payload if any params are given', function () {
    testParams(localUrlshortener);
    testParams(remoteUrlshortener);
  });

  it('should return a single response object for single requests', function (done) {
    var scope = nock('https://www.googleapis.com', {
      allowUnmocked: true
    })
      .post('/urlshortener/v1/url')
      .times(2)
      .replyWithFile(200, path.join(__dirname, '/fixtures/urlshort-insert-res.json'));

    testInsert(localUrlshortener, function (err) {
      if (err) {
        return done(err);
      }
      testInsert(remoteUrlshortener, function (err) {
        if (err) {
          return done(err);
        }
        scope.done();
        done();
      });
    });
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

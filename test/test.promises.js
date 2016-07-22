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
var utils = require('./utils');

function testInsert (urlshortener) {
  var obj = { longUrl: 'http://google.com/' };
  return urlshortener
    .url
    .insert({ resource: obj })
    .promise
    .spread(function (result) {
      assert.notEqual(result, null);
      assert.notEqual(result.kind, null);
      assert.notEqual(result.id, null);
      assert.equal(result.longUrl, 'http://google.com/');
    });
}

function testBackendError (urlshortener) {
  var obj = { longUrl: 'http://google.com/' };
  return urlshortener
    .url
    .insert({ resource: obj })
    .promise
    .then(function () {
      throw new Error('should have failed!');
    }, function (err) {
      assert(err instanceof Error);
      assert.equal(err.code, 500);
      assert.equal(err.message, 'There was an error!');
    });
}

describe('Request#toPromise', function () {
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

  it('should return a single response object for single requests (promises)', function () {
    var scope = nock('https://www.googleapis.com', {
      allowUnmocked: true
    })
      .post('/urlshortener/v1/url')
      .times(2)
      .replyWithFile(200, __dirname + '/fixtures/urlshort-insert-res.json');

    return testInsert(localUrlshortener).then(function () {
      return testInsert(remoteUrlshortener);
    }).then(function () {
      scope.done();
    });
  });

  it('should return 5xx responses as errors', function () {
    var scope = nock('https://www.googleapis.com', { allowUnmocked: true })
      .post('/urlshortener/v1/url')
      .times(2)
      .reply(500, 'There was an error!');

    return testBackendError(localUrlshortener).then(function () {
      return testBackendError(remoteUrlshortener);
    }).then(function () {
      scope.done();
    });
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

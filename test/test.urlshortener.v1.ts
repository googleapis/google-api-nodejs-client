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

import * as assert from 'power-assert';
import * as nock from 'nock';
import * as path from 'path';
import {Utils} from './utils';
const googleapis = require('../');

function testSingleRequest (urlshortener) {
  const obj = { longUrl: 'http://someurl...' };
  const req = urlshortener.url.insert(obj, Utils.noop);
  assert.equal(
    req.uri.href,
    'https://www.googleapis.com/urlshortener/v1/url?longUrl=http%3A%2F%2Fsomeurl...'
  );
  assert.equal(req.method, 'POST');
}

function testParams (urlshortener) {
  const params = { shortUrl: 'a' };
  const req = urlshortener.url.get(params, Utils.noop);
  assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=a');
  assert.equal(req.method, 'GET');
}

function testInsert (urlshortener, cb) {
  const obj = { longUrl: 'http://google.com/' };
  urlshortener.url.insert({ resource: obj }, (err, result) => {
    assert.equal(err, null);
    assert.notEqual(result, null);
    assert.notEqual(result.kind, null);
    assert.notEqual(result.id, null);
    assert.equal(result.longUrl, 'http://google.com/');
    cb(err);
  });
}

describe('Urlshortener', () => {
  let localUrlshortener, remoteUrlshortener;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    Utils.loadApi(google, 'urlshortener', 'v1', {}, (err, urlshortener) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      remoteUrlshortener = urlshortener;
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    localUrlshortener = google.urlshortener('v1');
  });

  it('should generate a valid payload for single requests', () => {
    testSingleRequest(localUrlshortener);
    testSingleRequest(remoteUrlshortener);
  });

  it('should generate valid payload if any params are given', () => {
    testParams(localUrlshortener);
    testParams(remoteUrlshortener);
  });

  it('should return a single response object for single requests', (done) => {
    const scope = nock('https://www.googleapis.com', {
      allowUnmocked: true
    })
      .post('/urlshortener/v1/url')
      .times(2)
      .replyWithFile(200, path.join(__dirname, '/fixtures/urlshort-insert-res.json'));

    testInsert(localUrlshortener, (err) => {
      if (err) {
        return done(err);
      }
      testInsert(remoteUrlshortener, e => {
        if (e) {
          return done(e);
        }
        scope.done();
        done();
      });
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

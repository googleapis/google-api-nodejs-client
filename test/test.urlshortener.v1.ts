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

import * as assert from 'assert';
import * as nock from 'nock';
import * as path from 'path';
import * as pify from 'pify';
import * as url from 'url';

import {GoogleApis} from '../src';
import {APIEndpoint} from '../src/lib/api';

import {Utils} from './utils';

async function testSingleRequest(urlshortener: APIEndpoint) {
  const obj = {longUrl: 'http://someurl...'};
  const reqPath = '/urlshortener/v1/url?longUrl=http%3A%2F%2Fsomeurl...';
  nock(Utils.baseUrl).post(reqPath).reply(200);
  const res = await pify(urlshortener.url.insert)(obj);
  assert.equal(Utils.getQs(res), 'longUrl=http%3A%2F%2Fsomeurl...');
  assert.equal(res.config.method.toLowerCase(), 'post');
}

async function testParams(urlshortener: APIEndpoint) {
  const params = {shortUrl: 'a'};
  nock(Utils.baseUrl).get('/urlshortener/v1/url?shortUrl=a').reply(200);
  const res = await pify(urlshortener.url.get)(params);
  assert.equal(Utils.getQs(res), 'shortUrl=a');
  assert.equal(res.config.method.toLowerCase(), 'get');
}

async function testInsert(urlshortener: APIEndpoint) {
  const obj = {longUrl: 'http://google.com/'};
  nock(Utils.baseUrl).post('/resource').reply(200);
  const res = await pify(urlshortener.url.insert)({resource: obj});
  assert.notEqual(res.data, null);
  assert.notEqual(res.data.kind, null);
  assert.notEqual(res.data.id, null);
  assert.equal(res.data.longUrl, 'http://google.com/');
  return res;
}

describe('Urlshortener', () => {
  let localUrlshortener: APIEndpoint;
  let remoteUrlshortener: APIEndpoint;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    remoteUrlshortener = await Utils.loadApi(google, 'urlshortener', 'v1');
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localUrlshortener = google.urlshortener('v1');
  });

  it('should generate a valid payload for single requests', async () => {
    await testSingleRequest(localUrlshortener);
    await testSingleRequest(remoteUrlshortener);
  });

  it('should generate valid payload if any params are given', async () => {
    await testParams(localUrlshortener);
    await testParams(remoteUrlshortener);
  });

  it('should return a single response object for single requests', async () => {
    nock(Utils.baseUrl, {allowUnmocked: true})
        .post('/urlshortener/v1/url')
        .times(2)
        .replyWithFile(
            200,
            path.join(
                __dirname, '../../test/fixtures/urlshort-insert-res.json'));
    await testInsert(localUrlshortener);
    await testInsert(remoteUrlshortener);
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

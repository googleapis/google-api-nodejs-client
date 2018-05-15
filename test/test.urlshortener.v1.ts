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

import assert from 'assert';
import nock from 'nock';
import * as path from 'path';
import * as url from 'url';

import {GoogleApis, urlshortener_v1} from '../src';

import {Utils} from './utils';

async function testSingleRequest(urlshortener: urlshortener_v1.Urlshortener) {
  const requestBody = {longUrl: 'http://someurl...'};
  const reqPath = '/urlshortener/v1/url';
  nock(Utils.baseUrl).post(reqPath, requestBody).reply(200);
  const res = await urlshortener.url.insert({requestBody});
  assert.equal(res.config.method!.toLowerCase(), 'post');
}

async function testParams(urlshortener: urlshortener_v1.Urlshortener) {
  const params = {shortUrl: 'a'};
  nock(Utils.baseUrl).get('/urlshortener/v1/url?shortUrl=a').reply(200);
  const res = await urlshortener.url.get(params);
  assert.equal(Utils.getQs(res), 'shortUrl=a');
  assert.equal(res.config.method!.toLowerCase(), 'get');
}

async function testInsert(urlshortener: urlshortener_v1.Urlshortener) {
  const requestBody = {longUrl: 'http://google.com/'};
  nock(Utils.baseUrl).post('/resource').reply(200);
  const res = await urlshortener.url.insert({requestBody});
  assert.notEqual(res.data, null);
  assert.notEqual(res.data.kind, null);
  assert.notEqual(res.data.id, null);
  assert.equal(res.data.longUrl, 'http://google.com/');
  return res;
}

describe('Urlshortener', () => {
  let localUrlshortener: urlshortener_v1.Urlshortener;
  let remoteUrlshortener: urlshortener_v1.Urlshortener;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    remoteUrlshortener = await Utils.loadApi<urlshortener_v1.Urlshortener>(
        google, 'urlshortener', 'v1');
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

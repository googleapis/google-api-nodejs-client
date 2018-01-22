// Copyright 2014-2016, Google, Inc.
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

import * as async from 'async';
import * as nock from 'nock';
import * as pify from 'pify';
import * as assert from 'power-assert';
import {Utils} from './utils';

const googleapis = require('../src/lib/googleapis');

async function testGet(drive) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=APIKEY').reply(200);
  const res = await pify(drive.files.get)({fileId: '123', auth: 'APIKEY'});
  assert.equal(Utils.getQs(res), 'key=APIKEY');
}

async function testParams2(drive) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=API%20KEY').reply(200);
  const res = await pify(drive.files.get)({fileId: '123', auth: 'API KEY'});
  assert.equal(Utils.getQs(res), 'key=API%20KEY');
}

async function testKeyParam(drive) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=abc123').reply(200);
  const res = await pify(drive.files.get)(
      {fileId: '123', auth: 'API KEY', key: 'abc123'});
  assert.equal(Utils.getQs(res), 'key=abc123');
}

async function testAuthKey(urlshortener) {
  nock(Utils.baseUrl)
      .get('/urlshortener/v1/url/history?key=YOUR%20API%20KEY')
      .reply(200);
  const res = await pify(urlshortener.url.list)({auth: 'YOUR API KEY'});
  assert.equal(Utils.getQs(res).indexOf('key=YOUR%20API%20KEY') > -1, true);
}

describe('API key', () => {
  let localDrive, remoteDrive;
  let localUrlshortener, remoteUrlshortener;
  let authClient;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel(
        [
          (cb) => {
            Utils.loadApi(google, 'drive', 'v2', {}, cb);
          },
          (cb) => {
            Utils.loadApi(google, 'urlshortener', 'v1', {}, cb);
          }
        ],
        (err, apis) => {
          if (err) {
            return done(err);
          }
          remoteDrive = apis[0];
          remoteUrlshortener = apis[1];
          nock.disableNetConnect();
          done();
        });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    const OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URL');
    authClient.credentials = {access_token: 'abc123'};
    localDrive = google.drive('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  it('should include auth APIKEY as key=<APIKEY>', async () => {
    await testGet(localDrive);
    await testGet(remoteDrive);
  });

  it('should properly escape params E.g. API KEY to API%20KEY', async () => {
    await testParams2(localDrive);
    await testParams2(remoteDrive);
  });

  it('should use key param over auth apikey param if both provided',
     async () => {
       await testKeyParam(localDrive);
       await testKeyParam(remoteDrive);
     });

  it('should set API key parameter if it is present', async () => {
    await testAuthKey(localUrlshortener);
    await testAuthKey(remoteUrlshortener);
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

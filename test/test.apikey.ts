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

import * as assert from 'assert';
import {OAuth2Client} from 'google-auth-library';
import * as nock from 'nock';

import {drive_v2, GoogleApis, urlshortener_v1} from '../src';
import {APIEndpoint} from '../src/shared/src/api';

import {Utils} from './utils';

async function testGet(drive: APIEndpoint) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=APIKEY').reply(200);
  const res = await drive.files.get({fileId: '123', auth: 'APIKEY'});
  assert.strictEqual(Utils.getQs(res), 'key=APIKEY');
}

async function testParams2(drive: APIEndpoint) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=API%20KEY').reply(200);
  const res = await drive.files.get({fileId: '123', auth: 'API KEY'});
  assert.strictEqual(Utils.getQs(res), 'key=API%20KEY');
}

async function testKeyParam(drive: APIEndpoint) {
  nock(Utils.baseUrl).get('/drive/v2/files/123?key=abc123').reply(200);
  const res =
      await drive.files.get({fileId: '123', auth: 'API KEY', key: 'abc123'});
  assert.strictEqual(Utils.getQs(res), 'key=abc123');
}

async function testAuthKey(urlshortener: APIEndpoint) {
  nock(Utils.baseUrl)
      .get('/urlshortener/v1/url/history?key=YOUR%20API%20KEY')
      .reply(200);
  const res = await urlshortener.url.list({auth: 'YOUR API KEY'});
  assert.strictEqual(
      Utils.getQs(res)!.indexOf('key=YOUR%20API%20KEY') > -1, true);
}

describe('API key', () => {
  let localDrive: drive_v2.Drive;
  let remoteDrive: APIEndpoint;
  let localUrlshortener: urlshortener_v1.Urlshortener;
  let remoteUrlshortener: APIEndpoint;
  let authClient: OAuth2Client;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    [remoteDrive, remoteUrlshortener] = await Promise.all([
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'urlshortener', 'v1')
    ]);
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
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

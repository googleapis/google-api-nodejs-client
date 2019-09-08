// Copyright 2016 Google LLC
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
import {APIEndpoint} from 'googleapis-common';
import * as nock from 'nock';
import {google, GoogleApis} from '../src';
import {Utils} from './utils';

describe('Query params', () => {
  let localCompute: APIEndpoint;
  let remoteCompute: APIEndpoint;
  let localDrive: APIEndpoint;
  let remoteDrive: APIEndpoint;
  let localGmail: APIEndpoint;
  let remoteGmail: APIEndpoint;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    [remoteCompute, remoteDrive, remoteGmail] = await Promise.all([
      Utils.loadApi(google, 'compute', 'v1'),
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'gmail', 'v1'),
    ]);
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localCompute = google.compute('v1');
    localDrive = google.drive('v2');
    localGmail = google.gmail('v1');
  });

  it('should not append ? with no query parameters', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/ID')
      .reply(200);
    const res = await localDrive.files.get({fileId: 'ID'});
    assert.strictEqual(-1, res.config.url.indexOf('?'));
    nock(Utils.baseUrl)
      .get('/drive/v2/files/ID')
      .reply(200);
    const res2 = await remoteDrive.files.get({fileId: 'ID'});
    assert.strictEqual(-1, res2.config.url.indexOf('?'));
  });

  it('should be null if no object passed', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files')
      .reply(200);
    const res = await localDrive.files.list();
    assert.strictEqual(Utils.getQs(res), null);
    nock(Utils.baseUrl)
      .get('/drive/v2/files')
      .reply(200);
    const res2 = await remoteDrive.files.list();
    assert.strictEqual(Utils.getQs(res2), null);
  });

  it('should be null if params passed are in path', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123')
      .reply(200);
    const res = await localDrive.files.get({fileId: '123'});
    assert.strictEqual(Utils.getQs(res), null);
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123')
      .reply(200);
    const res2 = await remoteDrive.files.get({fileId: '123'});
    assert.strictEqual(Utils.getQs(res), null);
  });

  it('should be set if params passed are optional query params', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?updateViewedDate=true')
      .reply(200);
    const res = await localDrive.files.get({
      fileId: '123',
      updateViewedDate: true,
    });
    assert.strictEqual(Utils.getQs(res), 'updateViewedDate=true');
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?updateViewedDate=true')
      .reply(200);
    const res2 = await remoteDrive.files.get({
      fileId: '123',
      updateViewedDate: true,
    });
    assert.strictEqual(Utils.getQs(res2), 'updateViewedDate=true');
  });

  it('should be set if params passed are unknown params', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?madeThisUp=hello')
      .reply(200);
    const res = await localDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
    });
    assert.strictEqual(Utils.getQs(res), 'madeThisUp=hello');
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?madeThisUp=hello')
      .reply(200);
    const res2 = await remoteDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
    });
    assert.strictEqual(Utils.getQs(res2), 'madeThisUp=hello');
  });

  it('should be set if params passed are aliased names', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?resource=hello')
      .reply(200);
    const res = await localDrive.files.get({fileId: '123', resource_: 'hello'});
    assert.strictEqual(Utils.getQs(res), 'resource=hello');
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?resource=hello')
      .reply(200);
    const res2 = await remoteDrive.files.get({
      fileId: '123',
      resource_: 'hello',
    });
    assert.strictEqual(Utils.getQs(res2), 'resource=hello');
  });

  it('should be set if params passed are falsy', async () => {
    const computeRemoteUrl = 'https://compute.googleapis.com';
    const r1 = nock(computeRemoteUrl)
      .post(
        '/compute/v1/projects//zones//instances//setDiskAutoDelete?autoDelete=false&deviceName='
      )
      .reply(200);
    const res = await localCompute.instances.setDiskAutoDelete({
      project: '',
      zone: '',
      instance: '',
      autoDelete: false,
      deviceName: '',
    });
    assert.strictEqual(Utils.getQs(res), 'autoDelete=false&deviceName=');
    const r2 = nock(computeRemoteUrl)
      .post(
        '/compute/v1/projects//zones//instances//setDiskAutoDelete?autoDelete=false&deviceName='
      )
      .reply(200);
    const res2 = await remoteCompute.instances.setDiskAutoDelete({
      project: '',
      zone: '',
      instance: '',
      autoDelete: false,
      deviceName: '',
    });
    assert.strictEqual(Utils.getQs(res2), 'autoDelete=false&deviceName=');

    const r3 = nock(computeRemoteUrl)
      .post('/compute/v1/projects//zones//instanceGroupManagers//resize?size=0')
      .reply(200);
    const res3 = await localCompute.instanceGroupManagers.resize({
      project: '',
      zone: '',
      instanceGroupManager: '',
      size: 0,
    });
    assert.strictEqual(Utils.getQs(res3), 'size=0');

    const r4 = nock(computeRemoteUrl)
      .post('/compute/v1/projects//zones//instanceGroupManagers//resize?size=0')
      .reply(200);
    const res4 = await remoteCompute.instanceGroupManagers.resize({
      project: '',
      zone: '',
      instanceGroupManager: '',
      size: 0,
    });
    r1.done();
    r2.done();
    r3.done();
    r4.done();
    assert.strictEqual(Utils.getQs(res4), 'size=0');
  });

  it('should chain together with & in order', async () => {
    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?madeThisUp=hello&thisToo=world')
      .reply(200);
    const res = await localDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
      thisToo: 'world',
    });
    assert.strictEqual(Utils.getQs(res), 'madeThisUp=hello&thisToo=world');

    nock(Utils.baseUrl)
      .get('/drive/v2/files/123?madeThisUp=hello&thisToo=world')
      .reply(200);
    const res2 = await remoteDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
      thisToo: 'world',
    });
    assert.strictEqual(Utils.getQs(res2), 'madeThisUp=hello&thisToo=world');
  });

  it('should not include auth if auth is an OAuth2Client object', async () => {
    const oauth2client = new google.auth.OAuth2(
      'CLIENT_ID',
      'CLIENT_SECRET',
      'REDIRECT_URI'
    );
    oauth2client.credentials = {access_token: 'abc123'};

    nock(Utils.baseUrl)
      .get('/drive/v2/files/123')
      .reply(200);
    const res = await localDrive.files.get({fileId: '123', auth: oauth2client});
    assert.strictEqual(Utils.getQs(res), null);

    nock(Utils.baseUrl)
      .get('/drive/v2/files/123')
      .reply(200);
    const res2 = await remoteDrive.files.get({
      fileId: '123',
      auth: oauth2client,
    });
    assert.strictEqual(Utils.getQs(res2), null);
  });

  it('should handle multi-value query params properly', async () => {
    nock(Utils.baseUrl)
      .get(
        '/gmail/v1/users/me/messages/abc123?metadataHeaders=To&metadataHeaders=Date'
      )
      .reply(200);
    const res = await localGmail.users.messages.get({
      userId: 'me',
      id: 'abc123',
      metadataHeaders: ['To', 'Date'],
    });
    assert.strictEqual(
      Utils.getQs(res),
      'metadataHeaders=To&metadataHeaders=Date'
    );

    nock(Utils.baseUrl)
      .get(
        '/gmail/v1/users/me/messages/abc123?metadataHeaders=To&metadataHeaders=Date'
      )
      .reply(200);
    const res2 = await remoteGmail.users.messages.get({
      userId: 'me',
      id: 'abc123',
      metadataHeaders: ['To', 'Date'],
    });
    assert.strictEqual(
      Utils.getQs(res2),
      'metadataHeaders=To&metadataHeaders=Date'
    );
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});

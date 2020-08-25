// Copyright 2018 Google LLC
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

const assert = require('assert');
const nock = require('nock');
const {describe, it, afterEach} = require('mocha');
const proxyquire = require('proxyquire');
const {google} = require('googleapis');

nock.disableNetConnect();

const samples = {
  list: {path: '../gmail/list'},
  labels: {path: '../gmail/labels'},
  watch: {path: '../gmail/watch'},
  send: {path: '../gmail/send'},
};

for (const sample of Object.values(samples)) {
  sample.runSample = proxyquire(sample.path, {
    '@google-cloud/local-auth': {
      authenticate: async () => {
        const client = new google.auth.OAuth2();
        client.credentials = {access_token: 'not-a-token'};
      },
    },
  });
}

const gmailUrl = 'https://gmail.googleapis.com';

describe('gmail samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should list emails', async () => {
    const scope = nock(gmailUrl)
      .get('/gmail/v1/users/me/messages')
      .reply(200, {});
    const data = await samples.list.runSample();
    assert(data);
    scope.done();
  });

  it('should add a label', async () => {
    const messageId = '12345';
    const labelId = 'abcde';
    const scope = nock(gmailUrl)
      .post(`/gmail/v1/users/me/messages/${messageId}/modify`)
      .reply(200, {});
    const data = await samples.labels.runSample('add', messageId, labelId);
    assert(data);
    scope.done();
  });

  it('should add a user watch', async () => {
    const scope = nock(gmailUrl).post('/gmail/v1/users/me/watch').reply(200, {
      data: true,
    });
    const data = await samples.watch.runSample();
    assert(data);
    scope.done();
  });

  it('should send an email', async () => {
    const scope = nock(gmailUrl)
      .post('/gmail/v1/users/me/messages/send')
      .reply(200, {});
    const data = await samples.send.runSample();
    assert(data);
    scope.done();
  });
});

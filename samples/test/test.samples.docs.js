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
const {google} = require('googleapis');
const proxyquire = require('proxyquire');

nock.disableNetConnect();

const samples = {
  create: {path: '../docs/create'},
  get: {path: '../docs/get'},
};

const baseUrl = 'https://docs.googleapis.com';

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

describe('docs samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create a doc', async () => {
    const scope = nock(baseUrl)
      .post('/v1/documents')
      .reply(200, {
        documentId: 'toast',
      })
      .post('/v1/documents/toast:batchUpdate')
      .reply(200, {});
    const data = await samples.create.runSample();
    assert(data);
    scope.done();
  });

  it('should get a doc', async () => {
    const documentId = '1XPbMENiP5bWP_cbqc0bEWbq78vmUf-rWQ6aB6FVZJyc';
    const scope = nock(baseUrl)
      .get(`/v1/documents/${documentId}`)
      .reply(200, {});
    const data = await samples.get.runSample();
    assert(data);
    scope.done();
  });
});

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

const baseUrl = 'https://sheets.googleapis.com';

nock.disableNetConnect();

const samples = {
  append: {path: '../sheets/append'},
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

describe('sheets samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should append values', async () => {
    const range = 'A1:A10';
    const scope = nock(baseUrl)
      .post(
        `/v4/spreadsheets/aSheetId/values/${encodeURIComponent(
          range,
        )}:append?valueInputOption=USER_ENTERED`,
      )
      .reply(200, {});
    const data = await samples.append.runSample('aSheetId', 'A1:A10');
    assert(data);
    scope.done();
  });
});

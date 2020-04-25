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
const {describe, it, afterEach} = require('mocha');
const nock = require('nock');
const proxyquire = require('proxyquire');
const {google} = require('googleapis');

nock.disableNetConnect();

const baseUrl = 'https://analyticsreporting.googleapis.com';

describe('analyticsReporting samples', () => {
  const batchGet = proxyquire('../analyticsReporting/batchGet', {
    '@google-cloud/local-auth': {
      authenticate: async () => {
        const client = new google.auth.OAuth2();
        client.credentials = {access_token: 'not-a-token'};
      },
    },
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should batchGet', async () => {
    const scope = nock(baseUrl).post('/v4/reports:batchGet').reply(200, {});
    const data = await batchGet();
    assert(data);
    scope.done();
  });
});

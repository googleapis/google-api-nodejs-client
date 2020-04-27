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

const baseUrl = 'https://blogger.googleapis.com';

describe('blogger samples', () => {
  const insert = proxyquire('../blogger/insert', {
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

  it('should insert a blog post', async () => {
    const scope = nock(baseUrl)
      .post('/v3/blogs/4340475495955554224/posts')
      .reply(200, {});
    const data = await insert();
    assert(data);
    scope.done();
  });
});

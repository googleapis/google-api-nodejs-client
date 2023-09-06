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
const fs = require('fs');
const nock = require('nock');
const os = require('os');
const path = require('path');
const {describe, it, afterEach} = require('mocha');
const proxyquire = require('proxyquire');
const {google} = require('googleapis');

nock.disableNetConnect();

const samples = {
  download: {path: '../drive/download'},
  export: {path: '../drive/export'},
  list: {path: '../drive/list'},
  upload: {path: '../drive/upload'},
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

const someFile = path.join(__dirname, '../../../test/fixtures/public.pem');
const baseUrl = 'https://www.googleapis.com';

describe('Drive samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should download the file', async () => {
    const fileId = '0B7l5uajXUzaFa0x6cjJfZEkzZVE';
    const scope = nock(baseUrl)
      .get(`/drive/v3/files/${fileId}?alt=media`)
      .replyWithFile(200, someFile);
    const filePath = await samples.download.runSample(fileId);
    assert(fs.existsSync(filePath));
    scope.done();
  });

  it('should download the doc', async () => {
    const fileId = '1EkgdLY3T-_9hWml0VssdDWQZLEc8qqpMB77Nvsx6khA';
    const scope = nock(baseUrl)
      .get(`/drive/v3/files/${fileId}/export?mimeType=application%2Fpdf`)
      .replyWithFile(200, someFile);
    await samples.export.runSample();
    assert(fs.existsSync(`${os.tmpdir()}/important.pdf`));
    scope.done();
  });

  it('should list all the docs', async () => {
    const scope = nock(baseUrl)
      .get('/drive/v3/files?pageSize=3')
      .reply(200, {});
    const data = await samples.list.runSample();
    assert(data);
    scope.done();
  });

  it('should upload a file', async () => {
    const scope = nock(baseUrl)
      .post('/upload/drive/v3/files?uploadType=multipart')
      .reply(200, {});
    const data = await samples.upload.runSample(someFile);
    assert(data);
    scope.done();
  });
});

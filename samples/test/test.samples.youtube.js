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
const path = require('path');
const proxyquire = require('proxyquire');
const {google} = require('googleapis');
const {getStubs} = require('./common.js');

nock.disableNetConnect();

const samples = {
  upload: {path: '../youtube/upload'},
  playlist: {path: '../youtube/playlist'},
  search: {path: '../youtube/search'},
};

const stubs = getStubs();

for (const sample of Object.values(samples)) {
  sample.runSample = proxyquire(sample.path, stubs);
}

const someFile = path.join(__dirname, '../../test/fixtures/public.pem');

describe('YouTube samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should get playlist data', async () => {
    const scope = nock('https://youtube.googleapis.com')
      .get(
        '/youtube/v3/playlists?part=id%2Csnippet&id=PLIivdWyY5sqIij_cgINUHZDMnGjVx3rxi'
      )
      .reply(200, {
        kind: 'youtube#playlistListResponse',
        etag: 'a-real-etag',
      })
      .get(
        '/youtube/v3/playlists?part=id%2Csnippet&id=PLIivdWyY5sqIij_cgINUHZDMnGjVx3rxi'
      )
      .matchHeader('If-None-Match', 'a-real-etag')
      .reply(304);
    const res = await samples.playlist.runSample();
    assert(res.data);
    assert.strictEqual(res.data.kind, 'youtube#playlistListResponse');
    scope.done();
  });

  it('should search for videos', async () => {
    const scope = nock('https://youtube.googleapis.com')
      .get(
        '/youtube/v3/search?part=id%2Csnippet&q=Node.js%20on%20Google%20Cloud'
      )
      .reply(200, {kind: 'youtube#searchListResponse'});
    const data = await samples.search.runSample();
    assert(data);
    assert.strictEqual(data.kind, 'youtube#searchListResponse');
    scope.done();
  });

  it('should upload a video', async () => {
    const scope = nock('https://youtube.googleapis.com')
      .post(
        '/upload/youtube/v3/videos?part=id%2Csnippet%2Cstatus&notifySubscribers=false&uploadType=multipart',
      )
      .reply(200, {kind: 'youtube#video'});
    const data = await samples.upload.runSample(someFile);
    assert(data);
    assert.strictEqual(data.kind, 'youtube#video');
    scope.done();
  });
});

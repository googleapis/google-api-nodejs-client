// Copyright 2018, Google, LLC.
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
import * as nock from 'nock';
import * as path from 'path';

import {Utils} from './../utils';

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  upload: require('../../../samples/youtube/upload'),
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

const someFile = path.join(__dirname, '../../../test/fixtures/public.pem');

describe('YouTube samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should upload a video', async () => {
    const scope = nock(Utils.baseUrl)
      .post(
        `/upload/youtube/v3/videos?part=id%2Csnippet%2Cstatus&notifySubscribers=false&uploadType=multipart`
      )
      .reply(200, {kind: 'youtube#video'});
    const data = await samples.upload.runSample(someFile);
    assert(data);
    assert.strictEqual(data.kind, 'youtube#video');
    scope.done();
  });
});

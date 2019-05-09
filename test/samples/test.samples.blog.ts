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
import {Utils} from '../utils';

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  post: require('../../../samples/blogger/insert'),
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

describe('blogger samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should insert a blog post', async () => {
    const scope = nock(Utils.baseUrl)
      .post(`/blogger/v3/blogs/4340475495955554224/posts`)
      .reply(200, {});
    const data = await samples.post.runSample();
    assert(data);
    scope.done();
  });
});

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

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  batchGet: require('../../../samples/analyticsReporting/batchGet'),
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

const baseUrl = 'https://analyticsreporting.googleapis.com';

describe('analyticsReporting samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should batchGet', async () => {
    const scope = nock(baseUrl)
      .post(`/v4/reports:batchGet`)
      .reply(200, {});
    const data = await samples.batchGet.runSample();
    assert(data);
    scope.done();
  });
});

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
  jobs: require('../../../samples/jobs/jobs.js'),
};

for (const p in samples) {
  if (samples[p]) {
    samples.jobs.client.credentials = {access_token: 'not-a-token'};
  }
}

describe.skip('Talent API Samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create a company', async () => {
    const scope =
        nock(Utils.baseUrl)
            .post(`/v3/jobs/project/${process.env.GCLOUD_PROJECT}/companies`)
            .reply(200, {});
    const data = await samples.jobs.runSample();
    assert(data);
    scope.done();
  });
});

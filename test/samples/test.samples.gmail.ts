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
import {Utils} from './../utils';

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  list: require('../../../samples/gmail/list'),
  labels: require('../../../samples/gmail/labels'),
  watch: require('../../../samples/gmail/watch'),
  send: require('../../../samples/gmail/send'),
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

describe('gmail samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should list emails', async () => {
    const scope = nock(Utils.baseUrl)
      .get(`/gmail/v1/users/me/messages`)
      .reply(200, {});
    const data = await samples.list.runSample();
    assert(data);
    scope.done();
  });

  it('should add a label', async () => {
    const messageId = '12345';
    const labelId = 'abcde';
    const scope = nock(Utils.baseUrl)
      .post(`/gmail/v1/users/me/messages/${messageId}/modify`)
      .reply(200, {});
    const data = await samples.labels.runSample('add', messageId, labelId);
    assert(data);
    scope.done();
  });

  it('should add a user watch', async () => {
    const scope = nock(Utils.baseUrl)
      .post(`/gmail/v1/users/me/watch`)
      .reply(200, {
        data: true,
      });
    const data = await samples.watch.runSample();
    assert(data);
    scope.done();
  });

  it('should send an email', async () => {
    const scope = nock(Utils.baseUrl)
      .post('/gmail/v1/users/me/messages/send')
      .reply(200, {});
    const data = await samples.send.runSample();
    assert(data);
    scope.done();
  });
});

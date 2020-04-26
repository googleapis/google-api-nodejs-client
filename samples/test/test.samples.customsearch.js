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

nock.disableNetConnect();

const samples = {
  list: require('../customsearch/customsearch'),
};

const baseUrl = 'https://customsearch.googleapis.com';

describe('customsearch samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should search', async () => {
    const scope = nock(baseUrl)
      .get('/customsearch/v1?cx=cx&q=q')
      .reply(200, {});
    const options = {cx: 'cx', q: 'q', auth: 'key'};
    const data = await samples.list.runSample(options);
    assert(data);
    scope.done();
  });
});

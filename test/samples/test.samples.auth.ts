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
import * as fs from 'fs';
import * as nock from 'nock';
import * as path from 'path';

import {Utils} from './../utils';

nock.disableNetConnect();

const samples = {
  jwt: require('../../../samples/jwt'),
};

describe('Auth samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should support JWT', async () => {
    const scope = nock(Utils.baseUrl)
      .get('/drive/v2/files')
      .reply(200, {})
      .post('/oauth2/v4/token')
      .reply(200, {access_token: 'not-a-token'});
    const fakePath = path.join(
      __dirname,
      '../../../test/fixtures/service.json'
    );
    const realPath = path.join(__dirname, '../../../samples/jwt.keys.json');
    const exists = fs.existsSync(realPath);
    if (!exists) {
      fs.symlinkSync(fakePath, realPath);
    }
    const data = await samples.jwt.runSample();
    assert(data);
    scope.done();
  });
});

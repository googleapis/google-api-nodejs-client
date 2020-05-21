// Copyright 2020 Google LLC
//
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
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import * as proxyquire from 'proxyquire';
import * as synth from '../src/generator/synth';
import {ChangeSet} from '../src/generator/download';

describe(__filename, () => {
  nock.disableNetConnect();

  afterEach(() => nock.cleanAll());

  it('should run synth', async () => {
    const {synth} = proxyquire('../src/generator/synth', {
      './generator': {
        Generator: class {
          async generateAllAPIs() {}
        },
      },
      execa: async (...params: {}[]) => {
        console.log(...params);
        return {stdout: ''};
      },
    });
    nock('https://api.github.com')
      .post('/repos/googleapis/google-api-nodejs-client/pulls')
      .reply(200);
    await synth();
  });

  it('should create a changelog', () => {
    const changeSets: ChangeSet[] = [
      {
        apiId: 'fake',
        changes: [
          {
            action: 'ADDED',
            keyName: 'key1',
          },
        ],
      },
    ];
    const {changelog} = synth.createChangelog(changeSets);
    assert.ok(changelog.length > 0);
  });

  describe('semverity', () => {
    it('should get semverity for an add', async () => {
      const changeSets: ChangeSet[] = [
        {
          apiId: 'fake',
          changes: [
            {
              action: 'ADDED',
              keyName: 'key1',
            },
          ],
        },
      ];
      const semverity = synth.getSemverity(changeSets);
      assert.strictEqual(semverity, synth.Semverity.MINOR);
    });

    it('should get semverity for a delete', async () => {
      const changeSets: ChangeSet[] = [
        {
          apiId: 'fake',
          changes: [
            {
              action: 'DELETED',
              keyName: 'key1',
            },
          ],
        },
      ];
      const semverity = synth.getSemverity(changeSets);
      assert.strictEqual(semverity, synth.Semverity.MAJOR);
    });

    it('should get semverity for an update', async () => {
      const changeSets: ChangeSet[] = [
        {
          apiId: 'fake',
          changes: [
            {
              action: 'CHANGED',
              keyName: 'key1',
            },
          ],
        },
      ];
      const semverity = synth.getSemverity(changeSets);
      assert.strictEqual(semverity, synth.Semverity.PATCH);
    });

    it('should choose the most impactful change', async () => {
      const changeSets: ChangeSet[] = [
        {
          apiId: 'fake',
          changes: [
            {
              action: 'ADDED',
              keyName: 'key1',
            },
            {
              action: 'DELETED',
              keyName: 'key2',
            },
          ],
        },
      ];
      const semverity = synth.getSemverity(changeSets);
      assert.strictEqual(semverity, synth.Semverity.MAJOR);
    });
  });
});

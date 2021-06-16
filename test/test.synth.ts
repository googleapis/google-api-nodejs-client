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
import {describe, it, afterEach, before} from 'mocha';
import * as nock from 'nock';
import * as proxyquire from 'proxyquire';
import * as sinon from 'sinon';
import * as Synth from '../src/generator/synth';
import {ChangeSet} from '../src/generator/download';
import {Schema} from 'googleapis-common';

describe(__filename, () => {
  const sandbox = sinon.createSandbox();
  before(() => {
    nock.disableNetConnect();
  });
  const cacheGitHubToken = process.env.GITHUB_TOKEN;
  const cacheCodeBotToken = process.env.CODE_BOT_TOKEN;
  let changeSets: ChangeSet[] = [];
  let stdout = '';

  const synth: typeof Synth = proxyquire('../src/generator/synth', {
    './generator': {
      Generator: class {
        async generateAllAPIs() {
          return changeSets;
        }
      },
    },
    execa: async (...params: {}[]) => {
      console.log(...params);
      return {stdout};
    },
  });

  afterEach(() => {
    changeSets = [];
    nock.cleanAll();
    sandbox.restore();
    process.env.GITHUB_TOKEN = cacheGitHubToken;
    process.env.CODE_BOT_TOKEN = cacheCodeBotToken;
  });

  it('should run synth', async () => {
    changeSets = [
      {
        api: {
          id: 'blogger:v1',
          name: 'blogger',
        } as {} as Schema,
        changes: [
          {
            action: 'ADDED',
            keyName: 'key1',
          },
        ],
      },
    ];
    stdout = `
      On branch sub1
      Changes not staged for commit:
        (use "git add <file>..." to update what will be committed)
        (use "git restore <file>..." to discard changes in working directory)
        modified:   src/apis/blogger/v1.ts
    `;
    process.env.GITHUB_TOKEN = '12345';
    process.env.CODE_BOT_TOKEN = '12345';
    const scope = nock('https://api.github.com')
      .post('/repos/googleapis/google-api-nodejs-client/pulls')
      .reply(200);
    await synth.synth();
    scope.done();
  });

  it('should throw if no github token is provided', async () => {
    process.env.GITHUB_TOKEN = '';
    await assert.rejects(synth.synth, /please include a GITHUB_TOKEN/);
  });

  it('should throw if no code bot token is provided', async () => {
    process.env.CODE_BOT_TOKEN = '';
    await assert.rejects(synth.synth, /please include a CODE_BOT_TOKEN/);
  });

  it('should create a changelog', () => {
    const changeSets: ChangeSet[] = [
      {
        api: {
          id: 'fake',
          name: 'fake',
        } as {} as Schema,
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
          api: {
            id: 'fake',
            name: 'fake',
          } as {} as Schema,
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
          api: {
            id: 'fake',
            name: 'fake',
          } as {} as Schema,
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
          api: {
            id: 'fake',
            name: 'fake',
          } as {} as Schema,
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
          api: {
            id: 'fake',
            name: 'fake',
          } as {} as Schema,
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

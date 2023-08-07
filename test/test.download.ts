// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as dn from '../src/generator/download';
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as path from 'path';
import execa = require('execa');
import * as fs from 'fs';
import * as http from 'http';

describe(__filename, () => {
  nock.disableNetConnect();
  const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/';
  const fakeIndexPath = 'test/fixtures/index.json';
  const sandbox = sinon.createSandbox();

  afterEach(() => sandbox.restore());

  it('should sort an object by key order', () => {
    const unsorted = {
      b: 2,
      a: {
        d: 1,
        c: 2,
        e: ['b', 'a'],
      },
    };
    const sorted = {
      a: {
        c: 2,
        d: 1,
        e: ['b', 'a'],
      },
      b: 2,
    };
    const result = dn.sortKeys(unsorted);
    assert.strictEqual(JSON.stringify(sorted), JSON.stringify(result));
  });

  it('should not ignore real schema changes', () => {
    const newDoc = {
      revision: '1234',
      api: 'ch-ch-changes',
    };
    const oldDoc = {
      revision: '1234',
      api: 'steady',
    };
    const shouldUpdate = dn.shouldUpdate(newDoc, oldDoc);
    assert.strictEqual(shouldUpdate, true);
  });

  it('should ignore schema changes that only touch revision', () => {
    const newDoc = {
      revision: '1234',
      api: 'steady',
    };
    const oldDoc = {
      revision: 'abcd',
      api: 'steady',
    };
    const shouldUpdate = dn.shouldUpdate(newDoc, oldDoc);
    assert.strictEqual(shouldUpdate, false);
  });

  it('should download the discovery docs', async () => {
    const scopes = [
      nock('https://www.googleapis.com')
        .get('/discovery/v1/apis/')
        .replyWithFile(200, fakeIndexPath, {
          'Content-Type': 'application/json',
        }),
      nock('http://localhost:3030').get('/path').reply(200),
    ];
    const mkdirpStub = sandbox.stub(dn.gfs, 'mkdir').resolves();
    const writeFileStub = sandbox.stub(dn.gfs, 'writeFile');
    const readFileStub = sandbox.stub(dn.gfs, 'readFile');
    const downloadPath = path.join(__dirname, '../../discovery');
    await dn.downloadDiscoveryDocs({discoveryUrl, downloadPath});
    assert(mkdirpStub.calledOnce);
    assert(writeFileStub.calledTwice);
    assert(readFileStub.calledOnce);
    scopes.forEach(s => s.done());
  });

  it('should ignore changes to schemas that only have revision changes', async () => {
    const scopes = [
      nock('https://www.googleapis.com')
        .get('/discovery/v1/apis/')
        .replyWithFile(200, fakeIndexPath, {
          'Content-Type': 'application/json',
        }),
      nock('http://localhost:3030').get('/path').reply(200, {
        revision: '1234',
      }),
    ];
    const writeFileStub = sandbox.stub(dn.gfs, 'writeFile');
    const readFileStub = sandbox.stub(dn.gfs, 'readFile').callsFake(() => {
      return JSON.stringify(
        {
          revision: 'abcd',
        },
        null,
        2
      );
    });
    const downloadPath = path.join(__dirname, '../../discovery');
    await dn.downloadDiscoveryDocs({discoveryUrl, downloadPath});
    assert(writeFileStub.calledOnce);
    assert(readFileStub.calledOnce);
    scopes.forEach(s => s.done());
  });

  it('should be invokable from the CLI', async () => {
    const port = 3030;
    const server = http
      .createServer((req, res) => {
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        const indexPath = path.join(
          __dirname,
          '../../test/fixtures/index.json'
        );
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(404, {
              'Content-Type': 'application/json',
            });
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200, {
            'Content-Type': 'application/json',
          });
          res.end(data);
        });
      })
      .listen(port);
    const downloadPath = 'build/test/temp';
    await execa('node', [
      './build/src/generator/download',
      '--download-path',
      downloadPath,
      '--discovery-url',
      `http://localhost:${port}/`,
    ]);
    assert.ok(fs.existsSync('build/test/temp'));
    server.close();
  });

  it('should flatten an object schema', () => {
    const input = {
      a: {
        b: {
          c: [1, 2, 3],
        },
        d: 'test',
      },
      e: 5,
    };
    const expected = {
      'a.b.c': [1, 2, 3],
      'a.d': 'test',
      e: 5,
    };
    const result = dn.flattenObject(input);
    assert.deepStrictEqual(result, expected);
  });

  it('should get the diff between two flattened lists', () => {
    const oldDoc = {
      a: 1,
      b: 2,
      c: [1, 2, 3],
    };
    const newDoc = {
      a: 1,
      c: [1, 2, 4],
      d: 5,
    };
    const expected = [
      {
        action: 'DELETED',
        keyName: 'b',
      },
      {
        action: 'ADDED',
        keyName: 'd',
      },
      {
        action: 'CHANGED',
        keyName: 'c',
      },
    ];
    const result = dn.getDiffs(oldDoc, newDoc);
    assert.deepStrictEqual(result, expected);
  });
});

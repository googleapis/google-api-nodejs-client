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

  it('should download the discovery docs', async () => {
    const scopes = [
      nock('https://www.googleapis.com')
        .get('/discovery/v1/apis/')
        .reply(200, {
          items: [
            {
              id: 'fake:v1',
              discoveryRestUrl: 'https://fake/path',
            },
          ],
        }),
      nock('https://fake').get('/path').reply(200, {}),
    ];
    const rimrafStub = sandbox.stub(dn.gfs, 'rimraf').resolves();
    const mkdirpStub = sandbox.stub(dn.gfs, 'mkdir').resolves();
    const writeFileStub = sandbox.stub(dn.gfs, 'writeFile');
    const downloadPath = path.join(__dirname, '../../discovery');
    await dn.downloadDiscoveryDocs({discoveryUrl, downloadPath});
    assert(rimrafStub.calledOnce);
    assert(mkdirpStub.calledOnce);
    assert(writeFileStub.calledTwice);
    scopes.forEach(s => s.done());
  });

  it('should be invokable from the CLI', async () => {
    const port = 3030;
    const server = http
      .createServer((req, res) => {
        res.writeHead(200);
        const indexPath = path.join(
          __dirname,
          '../../test/fixtures/index.json'
        );
        fs.readFile(indexPath, (err, data) => {
          if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
          }
          res.writeHead(200);
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
});

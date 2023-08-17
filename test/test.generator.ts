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
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import * as gen from '../src/generator/generator';

describe(__filename, () => {
  nock.disableNetConnect();
  const sandbox = sinon.createSandbox();

  afterEach(() => sandbox.restore());

  it('should read from cache if flag is passed', async () => {
    // This test relies on the disabled network being enabled
    const generator = new gen.Generator();
    const genStub = sandbox.stub(generator, 'generateAPI').resolves();
    const idxStub = sandbox.stub(generator, 'generateIndex').resolves();
    await generator.generateAllAPIs('', true);
    assert.ok(genStub.called);
    assert.ok(idxStub.calledOnce);
  });

  it('should read from disco if flag is passed', async () => {
    let downloadCalled = false;
    const {Generator} = proxyquire('../src/generator/generator', {
      './download': {
        downloadDiscoveryDocs: async () => {
          downloadCalled = true;
        },
      },
    });
    const generator = new Generator();
    const genStub = sandbox.stub(generator, 'generateAPI').resolves();
    const idxStub = sandbox.stub(generator, 'generateIndex').resolves();
    const discoUrl = 'https://www.googleapis.com/discovery/v1/apis/';
    await generator.generateAllAPIs(discoUrl, false);
    assert.ok(genStub.called);
    assert.ok(idxStub.calledOnce);
    assert.ok(downloadCalled);
  });

  it('loads existing version from package.json', async () => {
    const generator = new gen.Generator();
    const [pkgPath, pkgData] = await generator.getPkgPathAndData(
      'src/apis/',
      'bigquery',
      'look I am bigquery',
      '1.2.3'
    );
    assert.ok(pkgPath.endsWith('package.json'));
    assert.strictEqual(pkgData.name, 'bigquery');
    assert.strictEqual(pkgData.desc, 'look I am bigquery');
  });

  it('uses default version if no package.json found', async () => {
    const generator = new gen.Generator();
    const [pkgPath, pkgData] = await generator.getPkgPathAndData(
      'src/apis/',
      'fake-api',
      'look I am fake'
    );
    assert.ok(pkgPath.endsWith('package.json'));
    assert.strictEqual(pkgData.version, '0.1.0');
    assert.strictEqual(pkgData.name, 'fake-api');
    assert.strictEqual(pkgData.desc, 'look I am fake');
  });
});

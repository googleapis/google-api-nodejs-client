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
import {describe, it, afterEach} from 'mocha';
import * as docs from '../src/generator/docs';

describe(__filename, () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => sandbox.restore());

  it('should generate docs', async () => {
    sandbox.stub(docs.gfs, 'exists').returns(true);
    const writeStub = sandbox.stub(docs.gfs, 'writeFile').resolves();
    const execStub = sandbox.stub(docs.gfs, 'execa').resolves();
    await docs.main();
    assert.ok(writeStub.called);
    assert.strictEqual(execStub.callCount, 1);
    assert.deepStrictEqual(execStub.firstCall.args, [
      process.execPath,
      [
        '--max-old-space-size=4096',
        './node_modules/.bin/jsdoc',
        '-c',
        '.jsdoc.js',
      ],
    ]);
  });
});

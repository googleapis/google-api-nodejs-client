// Copyright 2017 Google LLC
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

import * as cp from 'child_process';
import * as path from 'path';
import * as mv from 'mv';
import {ncp} from 'ncp';
import {promisify} from 'util';
import * as tmp from 'tmp';
import {describe, it, afterEach} from 'mocha';

const delay = async (
  test: Mocha.Runnable | undefined,
  addMs: number,
  currentRetry: number
) => {
  if (!test) {
    return;
  }
  await new Promise(r => setTimeout(r, addMs));
  // No retry on the first failure.
  if (currentRetry === 0) return;
  // See: https://cloud.google.com/storage/docs/exponential-backoff
  const ms = Math.pow(2, currentRetry) + Math.random() * 1000;
  return new Promise(done => {
    console.info(`retrying "${test.title}" in ${ms}ms`);
    setTimeout(done, ms);
  });
};

const mvp = promisify(mv);
const ncpp = promisify(ncp);
const keep = !!process.env.GANC_KEEP_TEMPDIRS;
const stagingDir = tmp.dirSync({keep, unsafeCleanup: true});
const stagingPath = stagingDir.name;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../../package.json');
const spawnOpts: cp.SpawnSyncOptions = {
  stdio: 'inherit',
  // Use the shell to find the npm binary in the PATH.
  shell: true,
};

/**
 * Create a staging directory with temp fixtures used to test on a fresh application.
 */
describe('kitchen sink', async () => {
  it('should be able to use the d.ts', async function () {
    this.timeout(320000);
    console.log(`${__filename} staging area: ${stagingPath}`);
    cp.spawnSync('npm', ['pack'], spawnOpts);
    // Sleeping here should absolutely not be necessary, but prevents a
    // "file not found" error in the mv statement below.
    await new Promise(resolve => setTimeout(resolve, 100));
    const tarball = path.join(
      __dirname,
      `../../${pkg.name}-${pkg.version}.tgz`
    );
    console.log(`mv ${tarball} ${stagingPath}/googleapis.tgz`);
    await mvp(tarball, `${stagingPath}/googleapis.tgz`);
    await ncpp('test/fixtures/kitchen', `${stagingPath}/`);
    cp.spawnSync(
      'npm',
      ['install'],
      Object.assign({cwd: `${stagingPath}/`}, spawnOpts)
    );
  });

  /**
   * CLEAN UP - remove the staging directory when done.
   */
  afterEach('cleanup staging', async () => {
    if (!keep) {
      stagingDir.removeCallback();
    }
  });
});

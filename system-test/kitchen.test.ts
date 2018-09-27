/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as cp from 'child_process';
import * as mv from 'mv';
import {ncp} from 'ncp';
import * as pify from 'pify';
import * as tmp from 'tmp';

const mvp = pify(mv);
const ncpp = pify(ncp);
const keep = !!process.env.GANC_KEEP_TEMPDIRS;
const stagingDir = tmp.dirSync({keep, unsafeCleanup: true});
const stagingPath = stagingDir.name;
const pkg = require('../../package.json');

const spawnp = (command: string, args: string[], options: cp.SpawnOptions = {}):
    Promise<void> => {
      return new Promise((resolve, reject) => {
        cp.spawn(
              command, args,
              Object.assign(options, {stdio: 'inherit', shell: true}))
            .on('close',
                (code, signal) => {
                  if (code === 0) {
                    resolve();
                  } else {
                    reject(
                        new Error(`Spawn failed with an exit code of ${code}`));
                  }
                })
            .on('error', err => {
              reject(err);
            });
      });
    };

/**
 * Create a staging directory with temp fixtures used
 * to test on a fresh application.
 */

describe('kitchen sink', async () => {
  it('should be able to use the d.ts', async () => {
    console.log(`${__filename} staging area: ${stagingPath}`);
    await spawnp('npm', ['pack']);
    const tarball = `${pkg.name}-${pkg.version}.tgz`;
    await mvp(tarball, `${stagingPath}/googleapis.tgz`);
    await ncpp('test/fixtures/kitchen', `${stagingPath}/`);
    await spawnp('npm', ['install'], {cwd: `${stagingPath}/`});
  }).timeout(80000);
});

/**
 * CLEAN UP - remove the staging directory when done.
 */
after('cleanup staging', async () => {
  if (!keep) {
    stagingDir.removeCallback();
  }
});

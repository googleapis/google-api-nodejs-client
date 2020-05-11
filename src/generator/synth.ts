// Copyright 2019 Google LLC
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

import * as execa from 'execa';
import * as path from 'path';
import * as fs from 'fs';
import * as gaxios from 'gaxios';

async function main() {
  await execa('git', [
    'config',
    '--global',
    'user.email',
    '"yoshi-automation@google.com"',
  ]);
  await execa('git', ['config', '--global', 'user.name', '"Yoshi Automation"']);
  const statusResult = await execa('git', ['status']);
  const status = statusResult.stdout;
  const apiDir = path.resolve('./src/apis');
  const files = fs.readdirSync(apiDir);
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error('please include a GITHUB_TOKEN');
  }
  const dirs = files.filter(f => {
    return (
      fs.statSync(path.join(apiDir, f)).isDirectory() &&
      status.includes(`src/apis/${f}`)
    );
  });
  console.log(`Changes found in ${dirs.length} APIs`);
  for (const dir of dirs) {
    try {
      console.log(`Submitting change for ${dir}...`);
      const branch = `api-${dir}`;
      const title = `feat(${dir}): update the API`;
      await execa('git', ['checkout', '-B', branch]);
      await execa('git', ['add', path.join('src/apis', dir)]);
      await execa('git', ['add', `discovery/${dir}-*`]);
      await execa('git', ['commit', '-m', title]);
      await execa('git', ['push', 'origin', branch, '--force']);
      await gaxios.request({
        method: 'POST',
        headers: {
          Authorization: `token ${token}`,
        },
        url:
          'https://api.github.com/repos/googleapis/google-api-nodejs-client/pulls',
        data: {
          title,
          head: branch,
          base: 'master',
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      await execa('git', ['checkout', 'master']);
    }
  }
}

main().catch(err => {
  console.error(err);
  throw err;
});

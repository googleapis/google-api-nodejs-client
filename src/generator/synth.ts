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
import {Generator} from './generator';
import {DISCOVERY_URL, ChangeSet} from './download';

export enum Semverity {
  PATCH = 1,
  MINOR = 2,
  MAJOR = 3,
}

export interface Changelog {
  title: string;
  description: string;
  semverity: Semverity;
}

export async function synth() {
  const gen = new Generator();
  const changeSets = await gen.generateAllAPIs(DISCOVERY_URL, false);
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
      const apiChangeSets = changeSets.filter(x => x.apiId.startsWith(dir));
      const {semverity, changelog} = createChangelog(apiChangeSets);
      let prefix: string;
      switch (semverity) {
        case Semverity.PATCH:
          prefix = 'fix';
          break;
        case Semverity.MINOR:
          prefix = 'feat';
          break;
        case Semverity.MAJOR:
          prefix = 'feat!';
          break;
      }
      console.log(`Submitting change for ${dir}...`);
      const branch = `api-${dir}`;
      const title = `${prefix}(${dir}): update the API`;
      await execa('git', ['checkout', '-B', branch]);
      await execa('git', ['add', path.join('src/apis', dir)]);
      await execa('git', ['add', `discovery/${dir}-*`]);
      await execa('git', [
        'commit',
        '-m',
        title,
        '-m',
        changelog,
        '--author',
        '"Yoshi Automation <yoshi-automation@google.com>"',
      ]);
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

/**
 * Given a set of changes, generate a changelog.
 */
export function createChangelog(changeSets: ChangeSet[]) {
  const changelog: string[] = [];
  const semverity = getSemverity(changeSets);
  if (semverity === Semverity.MAJOR) {
    changelog.push('BREAKING CHANGE: This release has breaking changes.');
  }
  for (const changeSet of changeSets) {
    if (changeSet.changes.length > 0) {
      changelog.push(`#### ${changeSet.apiId}`);
      for (const action of ['DELETED', 'ADDED', 'CHANGED']) {
        const inScope = changeSet.changes.filter(x => x.action === action);
        if (inScope.length > 0) {
          changelog.push(`The following keys were ${action.toLowerCase()}:`);
          for (const r of inScope) {
            changelog.push(`- ${r.keyName}`);
          }
          changelog.push('');
        }
      }
    }
    changelog.push('');
  }
  return {
    semverity,
    changelog: changelog.join('\n'),
  };
}

/**
 * Given a set of changes, figure out if the total
 * changeset is semver patch, minor, or major.
 */
export function getSemverity(changeSets: ChangeSet[]) {
  let semverity = Semverity.PATCH;
  for (const changeSet of changeSets) {
    for (const change of changeSet.changes) {
      let changeSemverity: Semverity;
      switch (change.action) {
        case 'ADDED':
          changeSemverity = Semverity.MINOR;
          break;
        case 'CHANGED':
          changeSemverity = Semverity.PATCH;
          break;
        case 'DELETED':
          changeSemverity = Semverity.MAJOR;
          break;
      }
      if (changeSemverity > semverity) {
        semverity = changeSemverity;
      }
    }
  }
  return semverity;
}

if (require.main === module) {
  synth().catch(err => {
    console.error(err);
    throw err;
  });
}

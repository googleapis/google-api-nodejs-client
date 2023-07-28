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
import * as minimist from 'yargs-parser';
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

export interface SynthOptions {
  useCache?: boolean;
}

export async function synth(options: SynthOptions = {}) {
  const gen = new Generator();
  let changeSets: ChangeSet[] = [];
  if (!options.useCache) {
    console.log('Removing old APIs...');
    changeSets = await gen.generateAllAPIs(DISCOVERY_URL, false);
  }
  const statusResult = await execa('git', ['status', '--porcelain']);
  const status = statusResult.stdout;
  const statusFiles = status.split('\n').map(x => x.slice(3));
  const apiDir = path.resolve('./src/apis');
  const files = fs.readdirSync(apiDir);
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    throw new Error('please include a GITHUB_TOKEN');
  }
  const codeBotToken = process.env.CODE_BOT_TOKEN;
  if (!codeBotToken) {
    throw new Error('please include a CODE_BOT_TOKEN');
  }
  // only set these while running in the GitHub Actions environment
  if (process.env.GITHUB_ACTIONS) {
    await execa('git', ['config', 'user.email', 'yoshi-automation@google.com']);
    await execa('git', ['config', 'user.name', 'Yoshi Automation']);
  }
  const dirs = files.filter(f => {
    return (
      fs.statSync(path.join(apiDir, f)).isDirectory() &&
      statusFiles.filter(x => x.startsWith(`src/apis/${f}/`)).length > 0
    );
  });
  console.log(`Changes found in ${dirs.length} APIs`);
  const branch = 'autodisco';
  const changelogs = new Array<string>();
  let totalSemverity = 0;
  await execa('git', ['checkout', '-B', branch]);
  for (const dir of dirs) {
    const apiChangeSets = changeSets.filter(x => x.api.name === dir);
    const {semverity, changelog} = createChangelog(apiChangeSets);
    changelogs.push(changelog);
    if (semverity > totalSemverity) {
      totalSemverity = semverity;
    }
    const prefix = getPrefix(semverity);
    const postfix = semverity === Semverity.MAJOR ? '!' : '';
    console.log(`Submitting change for ${dir}...`);
    const title = `${prefix}(${dir})${postfix}: update the API`;
    await execa('git', ['add', path.join('src/apis', dir)]);
    if (statusFiles.filter(x => x.startsWith(`discovery/${dir}-`)).length > 0) {
      await execa('git', ['add', `discovery/${dir}-*`]);
    }
    // Write commit message to file, since it might be large enough to
    // cause spawn E2BIG in CI/CD:
    const message = changelog ? `${title}\n\n${changelog}` : title;
    fs.writeFileSync('message.txt', message, 'utf8');
    const commitParams = ['commit', '-F', 'message.txt'];
    await execa('git', commitParams);
    fs.unlinkSync('message.txt');
  }
  await execa('git', ['add', '-A']);
  await execa('git', ['commit', '-m', 'feat: regenerate index files']);
  const prefix = getPrefix(totalSemverity);
  await execa('git', ['push', 'origin', branch, '--force']);
  try {
    // Open the pull request with the YOSHI_CODE_BOT_TOKEN
    await gaxios.request({
      method: 'POST',
      headers: {
        Authorization: `token ${codeBotToken}`,
      },
      url: 'https://api.github.com/repos/googleapis/google-api-nodejs-client/pulls',
      data: {
        title: `${prefix}: run the generator`,
        head: branch,
        base: 'main',
        body: changelogs.join('\n\n').slice(0, 65000),
      },
    });
  } catch (e) {
    if ((e as gaxios.GaxiosError).response?.data) {
      console.error((e as gaxios.GaxiosError).response?.data);
      if (
        (e as gaxios.GaxiosError).response?.data &&
        (e as gaxios.GaxiosError).response?.data?.errors
      ) {
        /* eslint-disable-next-line no-unsafe-optional-chaining */
        for (const err of (e as gaxios.GaxiosError).response?.data.errors) {
          console.error(err);
        }
      }
    }
    throw e;
  }
  await execa('git', ['checkout', 'main']);
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
      changelog.push(`\n#### ${changeSet.api.id}\n`);
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

export function getPrefix(semverity: Semverity) {
  switch (semverity) {
    case Semverity.PATCH:
      return 'fix';
    case Semverity.MINOR:
    case Semverity.MAJOR:
      return 'feat';
  }
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
  const argv = minimist(process.argv.slice(2));
  const useCache = !!argv['use-cache'];
  synth({useCache}).catch(err => {
    console.error(err);
    throw err;
  });
}

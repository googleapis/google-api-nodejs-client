// Copyright 2018 Google LLC
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

import * as execa from 'execa';
import * as fs from 'fs';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import {promisify} from 'util';
import Q from 'p-queue';

const rootPath = path.join(__dirname, '../../..');
const srcPath = path.join(rootPath, 'src');
const apiPath = path.join(srcPath, 'apis');
const templatePath = path.join(srcPath, 'generator/templates/index.html.njk');
const docsPath = path.join(rootPath, 'docs');
const indexPath = path.join(docsPath, 'index.html');

export const gfs = {
  mkdir: fs.mkdirSync,
  exists: fs.existsSync,
  writeFile: promisify(fs.writeFile),
  readdir: promisify(fs.readdir),
  execa,
};

/**
 * Iterate over each API directory, and use the `compodoc` tool to generate
 * reference API documentation in the `docs` folder. This folder is ignored
 * in git, so a publish must be done with `npm run publish-docs`.
 *
 * To use this, run `npm run generate-docs`.
 */
export async function main() {
  if (!gfs.exists(docsPath)) {
    gfs.mkdir(docsPath);
  }
  const children = await gfs.readdir(apiPath);
  const dirs = children.filter(x => {
    return !x.endsWith('.ts');
  });
  const contents = nunjucks.render(templatePath, {apis: dirs});
  await gfs.writeFile(indexPath, contents);
  const q = new Q({concurrency: 50});
  console.log(`Generating docs for ${dirs.length} APIs...`);
  console.log('execpath:', process.execPath);
  let i = 0;
  const promises = dirs.map(dir => {
    return q
      .add(() =>
        gfs.execa(
          process.execPath,
          [
            '--max-old-space-size=8192',
            path.join(rootPath, 'node_modules/.bin/compodoc'),
            // Runs within declared cwd
            '.',
            '-d',
            path.join(docsPath, dir),
          ],
          {
            // Compodoc expects to be run in same dir as package.json
            cwd: path.join(srcPath, `apis/${dir}`),
          }
        )
      )
      .then(() => {
        i++;
        console.log(`[${i}/${dirs.length}] ${dir}`);
      });
  });
  await Promise.all(promises);
}

if (require.main === module) {
  main();
}

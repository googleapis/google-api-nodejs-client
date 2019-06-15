/**
 * Copyright 2018 Google LLC. All Rights Reserved.
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

import * as execa from 'execa';
import * as fs from 'fs';
import * as nunjucks from 'nunjucks';
import Q from 'p-queue';
import * as path from 'path';
import {promisify} from 'util';

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const srcPath = path.join(__dirname, '../../../src');
const apiPath = path.join(srcPath, 'apis');
const templatePath = path.join(srcPath, 'generator/templates/index.html.njk');
const docsPath = path.join(__dirname, '../../../docs');
const indexPath = path.join(docsPath, 'index.html');

if (!fs.existsSync(docsPath)) {
  fs.mkdirSync(docsPath);
}

/**
 * Iterate over each API directory, and use the `compodoc` tool to generate
 * reference API documentation in the `docs` folder.  This folder is ignored
 * in git, so a publish must be done with `npm run publish-docs`.
 *
 * To use this, run `npm run generate-docs`.
 */
async function main() {
  const children = await readdir(apiPath);
  const dirs = children.filter(x => {
    return !x.endsWith('.ts') && !x.includes('compute');
  });
  const contents = nunjucks.render(templatePath, {apis: dirs});
  await writeFile(indexPath, contents);
  const q = new Q({concurrency: 50});
  console.log(`Generating docs for ${dirs.length} APIs...`);
  let i = 0;
  const promises = dirs.map(dir => {
    return q
      .add(() =>
        execa(process.execPath, [
          '--max-old-space-size=8192',
          './node_modules/.bin/compodoc',
          `src/apis/${dir}`,
          '-d',
          `./docs/${dir}`,
        ])
      )
      .then(() => {
        i++;
        console.log(`[${i}/${dirs.length}] ${dir}`);
      });
  });
  await Promise.all(promises);
}
main().catch(console.error);

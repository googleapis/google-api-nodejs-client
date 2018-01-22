/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

import * as minimist from 'minimist';
import * as path from 'path';
import * as pify from 'pify';
import * as rimraf from 'rimraf';
import {install} from 'source-map-support';

import {Generator} from './generator';

// enable source map support
install();

const debug = true;
const argv = minimist(process.argv.slice(2));
const args = argv._;
const gen = new Generator({debug, includePrivate: false});

async function main() {
  if (args.length) {
    args.forEach(async url => {
      await gen.generateAPI(url);
      console.log('Generated API for ' + url);
    });
  } else {
    console.log('Removing old APIs...');
    await pify(rimraf)(path.join(__dirname, '../../../src/apis'));
    console.log('Generating APIs...');
    await gen.generateAllAPIs();
    console.log('Finished generating APIs!');
  }
}
main().catch(console.error);

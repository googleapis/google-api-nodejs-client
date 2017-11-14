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

import {Generator} from './generator';
import * as rimraf from 'rimraf';
import * as path from 'path';
import * as minimist from 'minimist';
import { install } from 'source-map-support';

// enable source map support
install();

const debug = true;

const argv = minimist(process.argv.slice(2));

// constructors
const gen = new Generator({ debug, includePrivate: false });

const args = argv._;

if (args.length) {
  args.forEach((url) => {
    gen.generateAPI(url, (err) => {
      if (err) {
        throw err;
      }
      console.log('Generated API for ' + url);
    });
  });
} else {
  console.log('Removing old APIs...');
  rimraf(path.join(__dirname, '..', 'apis'), (err) => {
    if (err) {
      throw err;
    }
    console.log('Generating APIs...');
    gen.generateAllAPIs(e => {
      if (e) {
        throw e;
      }
      console.log('Finished generating APIs!');
    });
  });
}

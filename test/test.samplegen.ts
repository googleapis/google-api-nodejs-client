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
import {describe, it} from 'mocha';
import {addFragments, getAllMethods} from '../src/generator/samplegen';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const schema = require('../../../test/fixtures/discovery/webfonts-v1.json');

describe(__filename, () => {
  it('should add fragments', async () => {
    await addFragments(schema);
    const methods = getAllMethods(schema);
    assert.strictEqual(methods.length, 1);
    assert.ok(methods[0].fragment);
  });
});

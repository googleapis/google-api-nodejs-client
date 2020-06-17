// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {describe, it, afterEach} from 'mocha';
import * as assert from 'assert';
import * as sinon from 'sinon';
import * as nock from 'nock';
import {URL} from 'url';
import * as disclaimer from '../src/generator/disclaimer';

const mockResponse = [
  {
    name: 'asset',
    name_pretty: 'Asset Inventory',
    product_documentation:
      'https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview',
    client_documentation: 'https://googleapis.dev/nodejs/asset/latest',
    issue_tracker: 'https://issuetracker.google.com/savedsearches/559757',
    release_level: 'ga',
    language: 'nodejs',
    repo: 'googleapis/nodejs-asset',
    distribution_name: '@google-cloud/asset',
    api_id: 'cloudasset.googleapis.com',
    requires_billing: true,
    support_documentation:
      'https://cloud.google.com/resource-manager/docs/getting-support',
  },
];

nock.disableNetConnect();

describe(__filename, () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    nock.cleanAll();
    sandbox.restore();
  });
  it('should update disclaimers', async () => {
    const url = new URL(disclaimer.libraryListUrl);
    const scope = nock(url.origin).get(url.pathname).reply(200, mockResponse);
    const expected = [
      {
        api: 'cloudasset',
        package: '@google-cloud/asset',
      },
    ];
    const stub = sandbox
      .stub(disclaimer.gfs, 'writeFileSync')
      .callsFake((path, content) => {
        assert.ok(path);
        assert.strictEqual(
          JSON.stringify(JSON.parse(content)),
          JSON.stringify(expected)
        );
      });
    await disclaimer.main();
    assert.ok(stub.calledOnce);
    scope.done();
  });
});

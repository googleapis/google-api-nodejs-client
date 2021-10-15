// Copyright 2020 Google LLC
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

import * as assert from 'assert';
import {describe, it} from 'mocha';
import {google} from '../src';

describe('http2', () => {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  google.options({
    auth,
    http2: true,
  });

  it('should create a valid HTTP/2 API request', async () => {
    const projectId = await auth.getProjectId();
    const storage = google.storage('v1');
    const res = await storage.buckets.list({
      project: projectId,
    });
    assert.ok(res.data);
  }).timeout('30s');
});

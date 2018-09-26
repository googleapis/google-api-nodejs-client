// Copyright 2014-2016, Google, Inc.
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

'use strict';

const {google} = require('googleapis');
const path = require('path');

async function runSample() {
  // acquire an authentication client using a service account
  const auth = await google.auth.getClient({
    keyFile: path.join(__dirname, '../jwt.keys.json'),
    scopes: [
      'https://www.googleapis.com/auth/admin.directory.group',
      'https://www.googleapis.com/auth/admin.directory.group.member',
    ],
  });

  // obtain the admin client
  const admin = google.admin({
    version: 'directory_v1',
    auth,
  });

  // Insert member in Google group
  const res = await admin.members.insert({
    groupKey: 'my_group@example.com',
    requestBody: {
      email: 'me@example.com',
    },
  });

  console.log(res.data);
}

runSample().catch(console.error);

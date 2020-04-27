// Copyright 2016 Google LLC
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

const path = require('path');
const {google} = require('googleapis');
const {authenticate} = require('@google-cloud/local-auth');

const people = google.people('v1');

async function runSample() {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  });
  google.options({auth});

  // See documentation of personFields at
  // https://developers.google.com/people/api/rest/v1/people/get
  const res = await people.people.get({
    resourceName: 'people/me',
    personFields: 'emailAddresses,names,photos',
  });
  console.log(res.data);
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;

// Copyright 2018, Google, LLC.
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
const util = require('util');
const sampleClient = require('../sampleclient');

const docs = google.docs({
  version: 'v1',
  auth: sampleClient.oAuth2Client,
});

async function runSample() {
  const res = await docs.documents.get({
    documentId: '1XPbMENiP5bWP_cbqc0bEWbq78vmUf-rWQ6aB6FVZJyc'
  });
  console.log(util.inspect(res.data, false, 17));
  return res.data;
}

const scopes = [
  'https://www.googleapis.com/auth/documents',
];

if (module === require.main) {
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

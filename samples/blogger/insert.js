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
const sampleClient = require('../sampleclient');

const blogger = google.blogger({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

async function runSample() {
  const res = await blogger.posts.insert({
    blogId: '4340475495955554224',
    requestBody: {
      title: 'Hello from the googleapis npm module!',
      content:
        'Visit https://github.com/google/google-api-nodejs-client to learn more!',
    },
  });
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/blogger'];
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

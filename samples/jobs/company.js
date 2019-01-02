// Copyright 2016, Google, Inc.
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
const API_KEY = '841a6581e6dc9f7e0daabcce7211073498a8f16d	';

const talent = google.jobs({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

/**
 *  Create a company.
 */

// const create = talent.projects.companies.create(request, (error, result) => {
//   if (error) console.error(error);
//   else console.log('company created', result);
// });

async function runSample() {
  const res = await talent.projects.companies.create({
    parent: `projects/${PROJECT_ID}`,
    requestBody: {
      displayName: 'ABC co.',
      externalId: '12345',
    },
  });
  console.log(res.data);
  return res.data;
}

const scopes = ['https://www.googleapis.com/auth/jobs'];
sampleClient
  .authenticate(scopes)
  .then(runSample)
  .catch(console.error);

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

/**
 * Current Resources:
 * 1. https://github.com/googleapis/google-api-nodejs-client/issues/1305
 * 2. https://github.com/googleapis/google-api-nodejs-client/issues/1296
 * 3. https://github.com/googleapis/google-api-nodejs-client#specifying-request-body
 * 4. https://console.cloud.google.com/talent-solution/connect-service-accounts?project=eloquent-ratio-225420
 * 5. https://cloud.google.com/talent-solution/job-search/docs/reference/rest/v3/projects.companies/create
 */

// Copyright 2018 Google LLC
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
const {authenticate} = require('@google-cloud/local-auth');

const analyticsreporting = google.analyticsreporting('v4');

async function runSample() {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: 'https://www.googleapis.com/auth/analytics',
  });
  google.options({auth});

  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: '65704806',
          dateRanges: [
            {
              startDate: '2018-03-17',
              endDate: '2018-03-24',
            },
            {
              startDate: '14daysAgo',
              endDate: '7daysAgo',
            },
          ],
          metrics: [
            {
              expression: 'ga:users',
            },
          ],
        },
      ],
    },
  });
  console.log(res.data);
  return res.data;
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  runSample.catch(console.error);
}
// export functions for testing purposes
module.exports = runSample;

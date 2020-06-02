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

'use strict';

const {google} = require('googleapis');

/**
 * This example demonstrates authenticating to the Google APIs backend using
 * an access token only. Generally access tokens are obtained using the standard JWT
 * and 3-legged-OAuth methods, but from time to time only the access token
 * is available.
 */
async function runSample(accessToken) {
  const drive = google.drive({
    version: 'v2',
    // this header will be present for every request
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Make an authorized request to list Drive files.
  const res = await drive.files.list();
  console.log(res.data);

  return res;
}

if (module === require.main) {
  runSample().catch(console.error);
}

// Exports for unit testing purposes
module.exports = {runSample};

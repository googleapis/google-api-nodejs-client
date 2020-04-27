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

const path = require('path');
const {google} = require('googleapis');
const {authenticate} = require('@google-cloud/local-auth');

const sheets = google.sheets('v4');

async function runSample(spreadsheetId, range) {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });
  google.options({auth});

  const res = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        ['Justin', '1/1/2001', 'Website'],
        ['Node.js', '2018-03-14', 'Fun'],
      ],
    },
  });
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  const [spreadsheetId, range] = process.argv.slice(2);
  runSample(spreadsheetId, range).catch(console.error);
}

module.exports = runSample;

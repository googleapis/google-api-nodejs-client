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

const sheets = google.sheets({
  version: 'v4',
  auth: sampleClient.oAuth2Client
});

function runSample (spreadsheetId, range, callback) {
  sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        ['Justin', '1/1/2001', 'Website'],
        ['Node.js', '2018-03-14', 'Fun']
      ]
    }
  }, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res.data);
    callback(res.data);
  });
}

if (module === require.main) {
  const scopes = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets'
  ];
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    const [spreadsheetId, range] = process.argv.slice(2);
    runSample(spreadsheetId, range, () => { /* complete */ });
  });
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};

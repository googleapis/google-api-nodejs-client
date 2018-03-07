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

const { google } = require('googleapis');
const sampleClient = require('../sampleclient');

const gmail = google.gmail({
  version: 'v1',
  auth: sampleClient.oAuth2Client
});

function runSample (action, messageId, labelId, callback) {
  if (action === 'add') {
    gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      resource: {
        'addLabelIds': [labelId]
      }
    }, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.data);
      callback(res.data);
    });
  } else if (action === 'remove') {
    gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      resource: {
        'removeLabelIds': [labelId]
      }
    }, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.data);
      callback(res.data);
    });
  }
}

const scopes = ['https://www.googleapis.com/auth/gmail.modify'];

if (module === require.main) {
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    if (process.argv.length !== 5) {
      showUsage();
    }
    const [action, messageId, labelId] = process.argv.slice(2);
    console.log(`action: ${action}`);
    console.log(`messageId: ${messageId}`);
    console.log(`labelId: ${labelId}`);
    runSample(action, messageId, labelId, () => { /* add complete */ });
  });
}

function showUsage () {
  console.info('USAGE: node labels.js <add|remove> <messageId> <labelId>');
  process.exit();
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};

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

const gmail = google.gmail({
  version: 'v1',
  auth: sampleClient.oAuth2Client,
});

async function runSample(action, messageId, labelId) {
  if (action === 'add') {
    const res = await gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      requestBody: {
        addLabelIds: [labelId],
      },
    });
    console.log(res.data);
    return res.data;
  } else if (action === 'remove') {
    const res = await gmail.users.messages.modify({
      userId: 'me',
      id: messageId,
      requestBody: {
        removeLabelIds: [labelId],
      },
    });
    console.log(res.data);
    return res.data;
  }
}

if (module === require.main) {
  if (process.argv.length !== 5) {
    showUsage();
  }
  const [action, messageId, labelId] = process.argv.slice(2);
  console.log(`action: ${action}`);
  console.log(`messageId: ${messageId}`);
  console.log(`labelId: ${labelId}`);

  const scopes = ['https://www.googleapis.com/auth/gmail.modify'];
  sampleClient
    .authenticate(scopes)
    .then(() => runSample(action, messageId, labelId))
    .catch(console.error);
}

function showUsage() {
  throw new Error('USAGE: node labels.js <add|remove> <messageId> <labelId>');
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

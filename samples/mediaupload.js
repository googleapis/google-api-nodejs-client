// Copyright 2013 Google LLC
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

const drive = google.drive('v3');

async function runSamples() {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: [
      'https://www.googleapis.com/auth/drive.metadata',
      'https://www.googleapis.com/auth/drive.photos',
      'https://www.googleapis.com/auth/drive',
    ],
  });
  google.options({auth});

  // insertion example
  let res = await drive.files.insert({
    requestBody: {
      title: 'Test',
      mimeType: 'text/plain',
    },
    media: {
      mimeType: 'text/plain',
      body: 'Hello World updated with metadata',
    },
  });
  console.log(res.data);

  // update with no metadata
  res = await drive.files.update({
    fileId: '0B-skmV2m1Arna1lZSGFHNWx6YXc',
    media: {
      mimeType: 'text/plain',
      body: 'Hello World updated with metadata',
    },
  });
  console.log(res.data);

  // update example with metadata update
  res = await drive.files.update({
    fileId: '0B-skmV2...',
    requestBody: {
      title: 'Updated title',
    },
    media: {
      mimeType: 'text/plain',
      body: 'Hello World updated with metadata',
    },
  });
  console.log(res.data);
}

runSamples().catch(console.error);

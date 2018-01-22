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

const google = require('googleapis');
const sampleClient = require('../sampleclient');
const fs = require('fs');

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

function download (fileId) {
  drive.files.get({
    fileId: fileId
  }, (err, metadata) => {
    if (err) {
      throw err;
    }
    console.log('Downloading %s...', metadata.name);
    const dest = fs.createWriteStream(metadata.name + '.pdf');

    drive.files.export({
      fileId: fileId,
      mimeType: 'application/pdf'
    })
      .on('error', err => {
        console.error('Error downloading file!');
        throw err;
      })
      .pipe(dest);

    dest
      .on('finish', () => {
        console.log('Downloaded %s!', metadata.name);
        process.exit();
      })
      .on('error', err => {
        console.error('Error writing file!');
        throw err;
      });
  });
}

const scopes = [
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/drive.photos.readonly',
  'https://www.googleapis.com/auth/drive.readonly'
];

if (module === require.main) {
  const args = process.argv.slice(2);
  if (!args[0]) {
    throw new Error('fileId required!');
  } else {
    sampleClient.authenticate(scopes, (err, authClient) => {
      if (err) {
        throw err;
      }
      download(args[0]);
    });
  }
}

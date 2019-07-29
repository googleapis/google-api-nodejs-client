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
const fs = require('fs');
const os = require('os');
const uuid = require('uuid');
const path = require('path');

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

async function runSample(fileId) {
  // For converting document formats, and for downloading template
  // documents, see the method drive.files.export():
  // https://developers.google.com/drive/api/v3/manage-downloads
  return drive.files
    .get({fileId, alt: 'media'}, {responseType: 'stream'})
    .then(res => {
      return new Promise((resolve, reject) => {
        const filePath = path.join(os.tmpdir(), uuid.v4());
        console.log(`writing to ${filePath}`);
        const dest = fs.createWriteStream(filePath);
        let progress = 0;

        res.data
          .on('end', () => {
            console.log('Done downloading file.');
            resolve(filePath);
          })
          .on('error', err => {
            console.error('Error downloading file.');
            reject(err);
          })
          .on('data', d => {
            progress += d.length;
            if (process.stdout.isTTY) {
              process.stdout.clearLine();
              process.stdout.cursorTo(0);
              process.stdout.write(`Downloaded ${progress} bytes`);
            }
          })
          .pipe(dest);
      });
    });
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  if (process.argv.length !== 3) {
    throw new Error('Usage: node samples/drive/download.js $FILE_ID');
  }
  const fileId = process.argv[2];
  const scopes = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
  ];
  sampleClient
    .authenticate(scopes)
    .then(() => runSample(fileId))
    .catch(console.error);
}

// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

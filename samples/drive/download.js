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
  auth: sampleClient.oAuth2Client
});

function runSample (fileId, callback) {
  const filePath = path.join(os.tmpdir(), uuid.v4());
  console.log(`writing to ${filePath}`);
  const dest = fs.createWriteStream(filePath);
  let progress = 0;
  drive.files.get(
    {fileId, alt: 'media'},
    {responseType: 'stream'},
    (err, res) => {
      if (err) {
        console.error(err);
        throw err;
      }
      res.data
        .on('end', () => {
          console.log('Done downloading file.');
          callback(filePath);
        })
        .on('error', err => {
          console.error('Error downloading file.');
          throw err;
        })
        .on('data', d => {
          progress += d.length;
          process.stdout.clearLine();
          process.stdout.cursorTo(0);
          process.stdout.write(`Downloaded ${progress} bytes`);
        })
        .pipe(dest);
    });
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  const scopes = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly'
  ];
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    if (process.argv.length !== 3) {
      console.error('Usage: node samples/drive/download.js $FILE_ID');
      process.exit();
    }
    runSample(process.argv[2], () => { /* download complete */ });
  });
}

// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};

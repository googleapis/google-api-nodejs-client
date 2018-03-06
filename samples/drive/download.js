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

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});
const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

function downloadDoc (callback) {
  // [START main_body]
  const fileId = '0B7l5uajXUzaFa0x6cjJfZEkzZVE';
  const dest = fs.createWriteStream(`${os.tmpdir()}/photo.jpg`);

  drive.files.get(
    {fileId, alt: 'media'},
    {responseType: 'stream'},
    (err, res) => {
      if (err) {
        console.error(err);
        throw err;
      }
      res.data.on('end', () => {
        console.log('Done downloading file.');
        callback();
      })
        .on('error', err => {
          console.error('Error downloading file.');
          throw err;
        })
        .pipe(dest);
    });
  // [END main_body]
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    downloadDoc(() => { /* download complete */ });
  });
}

// export functions for testing purposes
module.exports = {
  downloadDoc,
  client: sampleClient.oAuth2Client
};

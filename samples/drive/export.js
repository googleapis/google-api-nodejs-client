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
const path = require('path');

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client,
});

async function runSample() {
  // [START main_body]
  const fileId = '1EkgdLY3T-_9hWml0VssdDWQZLEc8qqpMB77Nvsx6khA';
  const destPath = path.join(os.tmpdir(), 'important.pdf');
  const dest = fs.createWriteStream(destPath);
  const res = await drive.files.export(
    {fileId, mimeType: 'application/pdf'},
    {responseType: 'stream'}
  );
  await new Promise((resolve, reject) => {
    res.data
      .on('error', reject)
      .pipe(dest)
      .on('error', reject)
      .on('finish', resolve);
  });
  // [END main_body]
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/drive.readonly'];
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};

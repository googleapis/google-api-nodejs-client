// Copyright 2016 Google LLC
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
const fs = require('fs');
const os = require('os');
const path = require('path');
const {authenticate} = require('@google-cloud/local-auth');

const drive = google.drive('v3');

async function runSample() {
  // [START main_body]
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: 'https://www.googleapis.com/auth/drive.readonly',
  });
  google.options({auth});

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

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;

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

const drive = google.drive({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

function listDocs (query, callback) {
  // [START main_body]
  const params = { pageSize: 3 };
  params.q = query;
  drive.files.list(params, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(res.data);
    callback(res.data);
  });
  // [END main_body]
}

const scopes = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

if (module === require.main) {
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    listDocs(undefined, () => { /* list complete */ });
  });
}

module.exports = {
  listDocs,
  client: sampleClient.oAuth2Client
};

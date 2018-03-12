// Copyright 2014-2016, Google, Inc.
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

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 *
 * See the defaultauth.js sample for an alternate way of fetching compute credentials.
 */

const keys = require('./jwt.keys.json');

// Create a new JWT client using the key file downloaded from the Google Developer Console
const jwtClient = new google.auth.JWT({
  email: keys.client_email,
  key: keys.private_key,
  scopes: 'https://www.googleapis.com/auth/drive.readonly'
});

// Obtain a new drive client, making sure you pass along the auth client
const drive = google.drive({
  version: 'v2',
  auth: jwtClient
});

// Make an authorized request to list Drive files.
function runSample (callback) {
  drive.files.list((err, res) => {
    if (err) {
      throw err;
    }
    console.log(res.data);
    callback(res.data);
  });
}

if (module === require.main) {
  // Run `authorize` to obtain the right tokens for auth
  jwtClient.authorize(err => {
    if (err) {
      throw err;
    }
    // Now that we have credentials, run the sample
    runSample(() => { /* complete */ });
  });
}

// Exports for unit testing purposes
module.exports = {
  runSample,
  client: jwtClient
};

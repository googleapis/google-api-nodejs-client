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

const google = require('googleapis');
const drive = google.drive('v2');
const nconf = require('nconf');
const path = require('path');

nconf.argv().env().file(path.join(__dirname, 'jwt.keys.json'));

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 *
 * Note on the private_key.pem:
 * Node.js currently does not support direct access to the keys stored within
 * PKCS12 file (see issue comment
 * https://github.com/joyent/node/issues/4050#issuecomment-8816304)
 * so the private key must be extracted and converted to a passphrase-less
 * RSA key: openssl pkcs12 -in key.p12 -nodes -nocerts > key.pem
 *
 * See the defaultauth.js sample for an alternate way of fetching compute credentials.
 */

const authClient = new google.auth.JWT(
  nconf.get('client_email'),
  null,
  nconf.get('private_key'),
  // Scopes can be specified either as an array or as a single, space-delimited string
  ['https://www.googleapis.com/auth/drive.readonly'],
  // User to impersonate (leave empty if no impersonation needed)
  'subject-account-email@example.com');

authClient.authorize(err => {
  if (err) {
    throw err;
  }

  // Make an authorized request to list Drive files.
  drive.files.list({ auth: authClient }, (err, res) => {
    // handle err and response
    if (err) {
      throw err;
    }
    console.log(res);
  });
});

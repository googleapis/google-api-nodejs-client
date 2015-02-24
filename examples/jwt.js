/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var google = require('../lib/googleapis.js');
var drive = google.drive('v2');

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
var authClient = new google.auth.JWT(
    'service-account-email@developer.gserviceaccount.com',
    'path/to/key.pem',
    // Contents of private_key.pem if you want to load the pem file yourself
    // (do not use the path parameter above if using this param)
    'key',
    // Scopes can be specified either as an array or as a single, space-delimited string
    ['https://www.googleapis.com/auth/drive.readonly'],
    // User to impersonate (leave empty if no impersonation needed)
    'subject-account-email@example.com');

authClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }

  // Make an authorized request to list Drive files.
  drive.files.list({ auth: authClient }, function(err, resp) {
    // handle err and response
  });
});

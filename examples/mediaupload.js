/**
 * Copyright 2013 Google Inc. All Rights Reserved.
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

var auth = new google.auth.OAuth2();

auth.setCredentials({
  access_token: 'ACCESS TOKEN HERE'
});

// insertion example
drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: 'Hello World',
  auth: authClient
}, function(err, response) {
  console.log('error:', err, 'inserted:', response.id);
});

// update with no metadata
drive.files.update({
  fileId: '0B-skmV2m1Arna1lZSGFHNWx6YXc',
  media: 'Hello World updated with no metadata',
  auth: auth
}, function(err, response) {
  console.log('error:', err, 'updated:', response.id);
});

// update example with metadata update
drive.files.update({
  fileId: '0B-skmV2...',
  resource: {
    title: 'Updated title'
  },
  media: 'Hello World updated with metadata',
  auth: auth
}, function(err, response) {
  console.log('error:', err, 'updated:', response.id);
});

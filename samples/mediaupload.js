// Copyright 2013-2016, Google, Inc.
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

var google = require('../lib/googleapis.js');
var drive = google.drive('v2');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'YOUR CLIENT ID HERE';
var CLIENT_SECRET = 'YOUR CLIENT SECRET HERE';
var REDIRECT_URL = 'YOUR REDIRECT URL HERE';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE'
});

// insertion example
drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World updated with metadata'
  },
  auth: oauth2Client
}, function (err, response) {
  console.log('error:', err, 'inserted:', response.id);
});

// update with no metadata
drive.files.update({
  fileId: '0B-skmV2m1Arna1lZSGFHNWx6YXc',
  media: {
    mimeType: 'text/plain',
    body: 'Hello World updated with metadata'
  },
  auth: oauth2Client
}, function (err, response) {
  console.log('error:', err, 'updated:', response.id);
});

// update example with metadata update
drive.files.update({
  fileId: '0B-skmV2...',
  resource: {
    title: 'Updated title'
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World updated with metadata'
  },
  auth: oauth2Client
}, function (err, response) {
  console.log('error:', err, 'updated:', response.id);
});

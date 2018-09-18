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
const path = require('path');
const nconf = require('nconf');

nconf
  .argv()
  .env()
  .file(path.join(__dirname, '../jwt.keys.json'));

// Create JWT auth object
const jwt = new google.auth.JWT(
  nconf.get('client_email'),
  null,
  nconf.get('private_key'),
  [
    'https://www.googleapis.com/auth/admin.directory.group',
    'https://www.googleapis.com/auth/admin.directory.group.member',
  ]
);

// Authorize
jwt.authorize((err, data) => {
  if (err) {
    throw err;
  }
  console.log('You have been successfully authenticated: ', data);

  // Get Google Admin API
  const admin = google.admin('directory_v1');

  // Insert group
  admin.groups.insert(
    {
      requestBody: {email: 'some_group@example.com'},
      auth: jwt,
    },
    (err, data) => {
      console.log(err || data);
    }
  );
});

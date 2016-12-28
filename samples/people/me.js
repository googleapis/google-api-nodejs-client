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

var google = require('../../');
var sampleClient = require('../sampleclient');

var auth = sampleClient.oAuth2Client;

var plus = google.plus({
  version: 'v1',
  auth: auth
});

function me (tokens) {
  plus.people.get({
    userId: 'me'
  }, function (err, me) {
    if (err) {
      console.error(err);
      process.exit();
      return;
    }

    console.log(me);
    process.exit();
  });
}

var scopes = [
  'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

if (module === require.main) {
  sampleClient.execute(scopes, function (tokens) {
    me(tokens);
  });
}

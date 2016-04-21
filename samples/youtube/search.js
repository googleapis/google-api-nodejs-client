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

var google = require('../../lib/googleapis');
var sampleClient = require('../sampleclient');
var util = require('util');

// initialize the Youtube API library
var youtube = google.youtube({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

// a very simple example of searching for youtube videos
function runSamples () {
  youtube.search.list({
    part: 'id,snippet',
    q: 'Node.js on Google Cloud'
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log(util.inspect(data, false, null));
    }
    process.exit();
  });
}

var scopes = [
  'https://www.googleapis.com/auth/youtube'
];

sampleClient.execute(scopes, runSamples);

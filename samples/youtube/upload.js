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
var fs = require('fs');

var FILENAME = 'YOUR VIDEO FILENAME HERE';

// initialize the Youtube API library
var youtube = google.youtube({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

// very basic example of uploading a video to youtube
function uploadVideo () {
  var req = youtube.videos.insert({
    part: 'id,snippet,status',
    notifySubscribers: false,
    resource: {
      snippet: {
        title: 'Node.js YouTube Upload Test',
        description: 'Testing YouTube upload via Google APIs Node.js Client'
      },
      status: {
        privacyStatus: 'private'
      }
    },
    media: {
      body: fs.createReadStream(FILENAME)
    }
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log(util.inspect(data, false, null));
    }
    process.exit();
  });

  var fileSize = fs.statSync(FILENAME).size;

  // show some progress
  var id = setInterval(function () {
    var uploadedBytes = req.req.connection._bytesDispatched;
    var uploadedMBytes = uploadedBytes / 1000000;
    var progress = uploadedBytes > fileSize
      ? 100 : (uploadedBytes / fileSize) * 100;
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(uploadedMBytes.toFixed(2) + ' MBs uploaded. ' +
     progress.toFixed(2) + '% completed.');
    if (progress === 100) {
      process.stdout.write('\nDone uploading, waiting for response...\n');
      clearInterval(id);
    }
  }, 250);
}

var scopes = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube'
];

sampleClient.execute(scopes, uploadVideo);

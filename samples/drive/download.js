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
var fs = require('fs');

var auth = sampleClient.oAuth2Client;

var drive = google.drive({
  version: 'v3',
  auth: auth
});

function download (fileId, tokens) {
  drive.files.get({
    fileId: fileId
  }, function (err, metadata) {
    if (err) {
      console.error(err);
      return process.exit();
    }

    console.log('Downloading %s...', metadata.name);

    auth.setCredentials(tokens);

    var dest = fs.createWriteStream(metadata.name);

    drive.files.get({
      fileId: fileId,
      alt: 'media'
    })
    .on('error', function (err) {
      console.log('Error downloading file', err);
      process.exit();
    })
    .pipe(dest);

    dest
      .on('finish', function () {
        console.log('Downloaded %s!', metadata.name);
        process.exit();
      })
      .on('error', function (err) {
        console.log('Error writing file', err);
        process.exit();
      });
  });
}

var scopes = [
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/drive.photos.readonly',
  'https://www.googleapis.com/auth/drive.readonly'
];

if (module === require.main) {
  var args = process.argv.slice(2);
  if (!args[0]) {
    throw new Error('fileId required!');
  } else {
    sampleClient.execute(scopes, function (tokens) {
      download(args[0], tokens);
    });
  }
}

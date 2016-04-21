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

// a very simple example of getting data from a playlist
function runSamples () {
  // the first query will return data with an etag
  getPlaylistData(null, function (err, data, response) {
    if (err) {
      return console.log(err);
    }
    var etag = data.etag;

    // the second query will (likely) return no data, and an HTTP 304
    // since the If-None-Match header was set with a matching eTag
    getPlaylistData(etag, function (err, data, response) {
      if (err) {
        return console.log(err);
      }
      console.log(response.status);
    });
  });
}

function getPlaylistData (etag, callback) {
  // Create custom HTTP headers for the request to enable
  // use of eTags
  var headers = {};
  if (etag) {
    headers['If-None-Match'] = etag;
  }
  youtube.playlists.list({
    part: 'id,snippet',
    id: 'PLIivdWyY5sqIij_cgINUHZDMnGjVx3rxi',
    headers: headers
  }, function (err, data, response) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log(util.inspect(data, false, null));
    }
    if (response) {
      console.log('Status code: ' + response.statusCode);
    }
    callback(err, data, response);
  });
}

var scopes = [
  'https://www.googleapis.com/auth/youtube'
];

sampleClient.execute(scopes, runSamples);

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

const {google} = require('googleapis');
const sampleClient = require('../sampleclient');

const webmasters = google.webmasters({
  version: 'v3',
  auth: sampleClient.oAuth2Client
});

function runSample (callback) {
  webmasters.searchanalytics.query({
    siteUrl: 'http://jbeckwith.com',
    resource: {
      startDate: '2018-01-01',
      endDate: '2018-04-01'
    }
  }, (err, res) => {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log(res.data);
    callback(res.data);
  });
}

if (module === require.main) {
  const scopes = [
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/webmasters.readonly'
  ];
  sampleClient.authenticate(scopes, err => {
    if (err) {
      throw err;
    }
    runSample(() => { /* complete */ });
  });
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};

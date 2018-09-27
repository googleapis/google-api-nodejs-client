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

// initialize the Google Mirror API library
const mirror = google.mirror({
  version: 'v1',
  auth: sampleClient.oAuth2Client,
});

// a very simple example of listing locations from the mirror API
async function runSample() {
  const res = await mirror.locations.list({});
  console.log(res.data);
}

const scopes = [
  'https://www.googleapis.com/auth/glass.timeline',
  'https://www.googleapis.com/auth/glass.location',
];

sampleClient
  .authenticate(scopes)
  .then(runSample)
  .catch(console.error);

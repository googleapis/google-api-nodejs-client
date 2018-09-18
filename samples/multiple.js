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

const {google} = require('googleapis');
const urlshortener = google.urlshortener('v1');
const plus = google.plus('v1');
const nconf = require('nconf');
const path = require('path');

nconf
  .argv()
  .env()
  .file(path.join(__dirname, 'config.json'));

// PUT your API key here or this example will return errors
// To learn more about API keys, please see:
// https://github.com/google/google-api-nodejs-client#using-api-keys

urlshortener.url.get({
  shortUrl: 'http://goo.gl/xKbRu3',
  auth: nconf.get('api_key'),
});
plus.people.get({userId: '+google', auth: nconf.get('api_key')});

/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fs = require('fs');
var nock = require('nock');
nock.disableNetConnect();
var GOOGLEAPIS = 'https://www.googleapis.com';

// Handle OAuth certificate request
var oauthcerts = fs.readFileSync(__dirname + '/data/oauthcerts.json');
nock(GOOGLEAPIS).get('/oauth2/v1/certs').reply(200, oauthcerts);

nock(GOOGLEAPIS).get('/urlshortener/v1/url/history').reply(200, 'Hello from Google!');
nock(GOOGLEAPIS).post('/urlshortener/v1/url').reply(200, {
  kind: 'urlshortener#url',
  id: 'http://goo.gl/mR2d',
  longUrl: 'http://google.com/'
});

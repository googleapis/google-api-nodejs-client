/**
 * Copyright 2013 Google Inc. All Rights Reserved.
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

var readline = require('readline'),
    googleapis = require('../lib/googleapis.js'),
    OAuth2Client = googleapis.OAuth2Client;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'YOUR CLIENT ID HERE',
    CLIENT_SECRET = 'YOUR CLIENT SECRET HERE',
    REDIRECT_URL = 'YOUR REDIRECT URL HERE',
    SCOPES = [
      'https://www.googleapis.com/auth/drive.readonly'
    ];

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAccessToken(oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES.join(' ')
  });

  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', function(code) {

    // request access token
    oauth2Client.getToken(code, function(err, tokens) {
      // set tokens to the client
      oauth2Client.credentials = tokens;
      callback && callback(oauth2Client);
    });
  });
}

// Lists file titles.
function listFiles(err, result) {
  result.items.forEach(function(file) {
    console.log(file.title);
  });
}

// Load Google Drive v2 API resources and methods
googleapis.load('drive', 'v2', function(err, client) {

  var oauth2Client =
    new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  // retrieve an access token
  getAccessToken(oauth2Client, function(authClient) {
    // retrieve user profile
    client.drive.files.list()
      .withAuthClient(authClient)
      .execute(listFiles);
  });

});

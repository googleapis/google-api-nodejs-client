/**
 * Copyright 2012 Google Inc. All Rights Reserved.
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
var googleapis = require('../lib/googleapis.js');

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
var CX = 'INSERT YOUR CUSTOM SEARCH ENGINE ID here';
var API_KEY = 'INSERT YOUR API KEY HERE';
var SEARCH = 'INSERT A GOOGLE REQUEST HERE';

// Sends the query to the API
function launchSearch(client, query, callback) {
  var req = client.customsearch.cse.list({cx: CX, q: query})
    .withApiKey(API_KEY);
  req.execute(function(err, response) {
    callback(err, response);
  });
}

// Initializes API
googleapis
    .discover('customsearch', 'v1')
    .execute(function(err, client) {
  if (err) {
    console.log('An error occured', err);
    return;
  }
  // Sends request
  launchSearch(client, SEARCH, function(err, response) {
    if (err) {
      console.log('An error occured', err);
      return;
    }
    // Got the response from custom search
    console.log('Result: ' + response.searchInformation.formattedTotalResults);
    if (response.items.length > 0) {
      console.log('First result name is ' + response.items[0].title);
    }
  });
});

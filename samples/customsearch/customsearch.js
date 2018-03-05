// Copyright 2012-2016, Google, Inc.
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

// Example:  node customsearch.js example_term

const {google} = require('googleapis');
const customsearch = google.customsearch('v1');
const nconf = require('nconf');
const path = require('path');

// Ex: node customsearch.js
//      "Google Node.js"
//      --api_key "YOUR KEY"
//      --customsearch_engine_id="YOUR ID"
nconf.argv().env().file(path.join(__dirname, 'config.json'));

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
const CX = nconf.get('customsearch_engine_id');
const API_KEY = nconf.get('api_key');
const SEARCH = process.argv[2];

customsearch.cse.list({
  cx: CX,
  q: SEARCH,
  auth: API_KEY
}, (err, res) => {
  if (err) {
    throw err;
  }
  // Got the response from custom search
  console.log('Result: ' + res.searchInformation.formattedTotalResults);
  if (res.items && res.items.length > 0) {
    console.log('First result name is ' + res.items[0].title);
  }
});

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

googleapis.load('urlshortener', 'v1', function(err, client) {

  var printResults = function(err, results) {
    if (err) {
      console.log('Error occurred: ', err);
    } else {
      console.log('Results: ', results);
    }
  };

  // a single request
  client
    .newRequest('urlshortener.url.get', { shortUrl: 'http://goo.gl/DdUKX' })
    .execute(printResults);

  // request builders
  client.urlshortener.url.get({ shortUrl: 'http://goo.gl/DdUKX' })
    .execute(printResults);
});

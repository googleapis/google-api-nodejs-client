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

var googleapis = require('../lib/googleapis.js');

// PUT your API key here or this example will return errors
// To learn more about API keys, please see:
// https://developers.google.com/console/help/#UsingKeys
var API_KEY = 'YOUR API KEY HERE';

googleapis
  .discover('urlshortener', 'v1')
  .discover('plus', 'v1')
  .execute(function(err, client) {

    var req1 = client.urlshortener.url.get({ shortUrl: 'http://goo.gl/DdUKX' });
    var req2 = client.plus.people.get({ userId: '+BurcuDogan' });

    client
      .newBatchRequest()
      .add(req1)
      .add(req2)
      .withApiKey(API_KEY)
      .execute(function(err, results)  {
        console.log(err, results);
    });
});

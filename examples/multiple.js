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
      .withApiKey('YOUR API KEY HERE')
      .execute(function(err, results)  {

      // Batched requests always return a results array, but
      // not necessarily always an err array
      for (var i in results) {
        if (err && err[i]) {
          console.log('Error response   #', i, ':', err[i].code,
                        err[i].message);
        } else if (results[i]) {
          console.log('Response #', i, ':', results[i].longUrl ?
                        results[i].longUrl : results[i].displayName);
        }
      }
    });
  });

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

var auth = new googleapis.OAuth2Client();
auth.setCredentials({
  access_token: 'ACCESS TOKEN HERE'
});

googleapis.discover('drive', 'v2').execute(function(err, client) {

  // insertion example
  client
      .drive.files.insert({ title: 'Test', mimeType: 'text/plain' })
      .withMedia('text/plain', 'Hello World')
      .withAuthClient(auth)
      .execute(function(err, result) {
    console.log('error:', err, 'inserted:', result.id);
  });

  // update with no metadata
  client
      .drive.files.update({ fileId: '0B-skmV2m1Arna1lZSGFHNWx6YXc'})
      .withMedia('text/plain', 'Hello World updated with no metadata')
      .withAuthClient(auth)
      .execute(function(err, result) {
    console.log('error:', err, 'updated:', result.id);
  });

  // // update example with metadata update
  client
      .drive.files.update({ fileId: '0B-skmV2...'}, { title: 'Updated Test' })
      .withMedia('text/plain', 'Hello World updated with metadata')
      .withAuthClient(auth)
      .execute(function(err, result) {
    console.log('error:', err, 'updated:', result.id);
  });
});

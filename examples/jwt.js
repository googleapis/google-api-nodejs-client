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

var googleapis = require('../lib/googleapis.js');

var authClient = googleapis.auth.JWT(
    'service-account-email@developer.gserviceaccount.com',
    'path to private_key.pem',
    'keyphrase',
    ['https://www.googleapis.com/auth/drive.readonly']);

authClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  }
  // Make an authorized request to list Drive files.
  // googleapis.drive.files.list().withAuthClient(authClient).execute()...
});

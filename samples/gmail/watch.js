// Copyright 2018 Google LLC
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

const path = require('path');
const {google} = require('googleapis');
const {authenticate} = require('@google-cloud/local-auth');

const gmail = google.gmail('v1');

/**
 * NOTE: Before using this API, you need to do a few things.
 * 1. Create a new Pub/Sub topic. You can use the command:
 *    ```sh
 *    $ gcloud pubsub topics create gmail
 *    ```
 * 2. Go to the Cloud Developer Console, and give the gmail
 *    service account `gmail-api-push@system.gserviceaccount.com`
 *    Pub/Sub Publisher rights to your newly created topic.
 *    https://console.cloud.google.com/cloudpubsub/topicList?project=${PROJECT_NAME}
 */
async function runSample() {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    scopes: [
      'https://mail.google.com/',
      'https://www.googleapis.com/auth/gmail.metadata',
      'https://www.googleapis.com/auth/gmail.modify',
      'https://www.googleapis.com/auth/gmail.readonly',
    ],
  });
  google.options({auth});

  const res = await gmail.users.watch({
    userId: 'me',
    requestBody: {
      // Replace with `projects/${PROJECT_ID}/topics/${TOPIC_NAME}`
      topicName: 'projects/el-gato/topics/gmail',
    },
  });
  console.log(res.data);
  return res.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;

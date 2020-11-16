// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
import * as v1 from '../src/apis/docs/v1';

import {google} from {'googleapis'}
const DocsClient = v1.docs_v1.Docs
import {UserRefreshClientOptions} from 'google-auth-library';

async function main(parent = 'projects/my-project', secretId = 'my-secret') {
  // [START secretmanager_create_secret]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const parent = 'projects/my-project';
  // const secretId = 'my-secret';

  // Imports the Secret Manager library

  // Instantiates a client
  const client = new DocsClient ({
    projectId: 'coleleah-sofialeon',
    keyFilename:
    '/Users/sofialeon/Downloads/coleleah-sofialeon-b56ce5ae0aee.json',
    clientOptions: {
      client_id:
        '764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com',
      client_secret: 'd-FL95Q19q7MQmFpd7hHD0Ty',
      quota_project_id: 'coleleah-sofialeon',
      refresh_token:
        '1//0fUuYZwm4FyAYCgYIARAAGA8SNwF-L9IrzYkoRkKxF3pMolwu6K9JiuXs9uerymYTWgJueYfAsWjcAZ4q-PcgDa4-OeFfyyFdOJI',
      type: 'authorized_user',
    } as UserRefreshClientOptions,
  });

  async function createSecret() {
    const [secret] = await client.createSecret({
      parent: parent,
      secretId: secretId,
      secret: {
        replication: {
          automatic: {},
        },
      },
    });

    console.log(`Created secret ${secret.name}`);
  }

  createSecret();
  // [END secretmanager_create_secret]
}

const args = process.argv.slice(2);
main(...args).catch(console.error);

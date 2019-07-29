// Copyright 2014-2016, Google, Inc.
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

const {google} = require('googleapis');
const compute = google.compute('v1');

/**
 * The google.auth.getClient method creates the appropriate type of credential client for you,
 * depending upon whether the client is running in Google App Engine, Google Compute Engine, a
 * Managed VM, or on a local developer machine. This allows you to write one set of auth code that
 * will work in all cases. It most situations, it is advisable to use the getClient method rather
 * than creating your own JWT or Compute client directly.
 *
 * Note: In order to run on a local developer machine, it is necessary to download a private key
 * file to your machine, and to set a local environment variable pointing to the location of the
 * file. Create a service account using the Google Developers Console using the section APIs & Auth.
 * Select "Generate new JSON key" and download the resulting file. Once this is done, set the
 * GOOGLE_APPLICATION_CREDENTIALS environment variable to point to the location of the .json file.
 *
 * See also:
 * https://developers.google.com/accounts/docs/application-default-credentials
 */

// Get the appropriate type of credential client, depending upon the runtime environment.
async function main() {
  // The `getClient` method will choose a service based authentication model
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/compute'],
  });

  // Obtain the current project Id
  const project = await auth.getProjectId();

  // Get the list of available compute zones for your project
  const res = await compute.zones.list({project, auth});
  console.log(res.data);
}

main().catch(console.error);

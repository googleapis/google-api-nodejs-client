// Copyright 2021 Google LLC
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

import {
  google, // The top level object used to access services
  drive_v3, // For every service client, there is an exported namespace
  Auth, // Namespace for auth related types
  Common, // General types used throughout the library
} from 'googleapis';
import {GaxiosError} from 'googleapis-common';

async function main() {
  // Note: using explicit types like `Auth.GoogleAuth` is only here for
  // demonstration purposes.  Generally with TypeScript, these types would
  // be inferred.
  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth();
  const drive: drive_v3.Drive = google.drive({
    version: 'v3',
    auth,
  });

  try {
    // There are generated types for every set of request parameters
    const listParams: drive_v3.Params$Resource$Files$List = {};
    const res = await drive.files.list(listParams);

    // There are generated types for the response fields as well
    const listResults: drive_v3.Schema$FileList = res.data;
    console.log(listResults);
  } catch (e) {
    // In many cases, errors from the API will come back as `GaxiosError`.
    // These will include the full HTTP Response (you should check for it first)
    if ((e as GaxiosError).response) {
      const err = e as Common.GaxiosError;
      console.error(err.response);
      throw err;
    }
  }
}
main();

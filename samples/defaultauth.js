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

var google = require('../lib/googleapis.js');
var compute = google.compute('v1');

/**
 * The getApplicationDefault method creates the appropriate type of credential client for you,
 * depending upon whether the client is running in Google App Engine, Google Compute Engine, a
 * Managed VM, or on a local developer machine. This allows you to write one set of auth code that
 * will work in all cases. It most situations, it is advisable to use the getApplicationDefault
 * method rather than creating your own JWT or Compute client directly.
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
google.auth.getApplicationDefault(function (err, authClient) {
  if (err) {
    return console.log('Failed to get the default credentials: ' + String(err));
  }
  // The createScopedRequired method returns true when running on GAE or a local developer
  // machine. In that case, the desired scopes must be passed in manually. When the code is
  // running in GCE or a Managed VM, the scopes are pulled from the GCE metadata server.
  // See https://cloud.google.com/compute/docs/authentication for more information.
  if (authClient.createScopedRequired && authClient.createScopedRequired()) {
    // Scopes can be specified either as an array or as a single, space-delimited string.
    authClient = authClient.createScoped(['https://www.googleapis.com/auth/compute']);
  }
  // Fetch the list of GCE zones within a project.
  // NOTE: You must fill in your valid project ID before running this sample!
  var projectId = 'fill in your project id here!';
  compute.zones.list({ project: projectId, auth: authClient }, function (err, result) {
    console.log(err, result);
  });
});

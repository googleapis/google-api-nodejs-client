// Copyright 2023 Google LLC
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

// a very simple example of listing locations from the Homegraph API
async function runSample() {
  // Obtain user credentials to use for the request
  // Configure the Google Home Graph client
  const homegraphClient = google.homegraph({
    version: 'v1',
    auth: new google.auth.GoogleAuth({
      // Path to the authentication credentials JSON file
      keyFile: path.join(__dirname, 'jwt.keys.json'),
      // Required Google scopes for accessing Home Graph
      scopes: 'https://www.googleapis.com/auth/homegraph',
    }),
  });

  // Replace 'YOUR_USERID' with the ID of the user you want to request the sync for
  const userId = 'YOUR_USERID';

  /* RequestSync
   *This is a very simple example of requesting a sync for a user's devices using the Google Home Graph API.
   *
   *For more information on how to implement this correctly in production, please refer to the official documentation:
   *https://developers.google.com/assistant/smarthome/develop/report-state#request_sync
   */
  try {
    // Make a request to Home Graph to sync the user's devices
    const res = await homegraphClient.devices.requestSync({
      requestBody: {
        agentUserId: userId, // Use the user ID obtained earlier
        async: false,
      },
    });

    // Send the Home Graph response to the client that made the request
    console.log(res.data);
    // NOTE: Uncomment the following line in production to send the Home Graph response to the client making the request
    //response.json(res.data);
  } catch (err) {
    // If there is an error, log it and send an error response to the client
    console.log(`Error requesting sync: ${err}`);
  }

  /*
   * Use the reportState() function instead of this one to report device states.
   * This function is intended to report device notifications only.
   *
   * See the official documentation for more information:
   * https://developers.google.com/assistant/smarthome/develop/report-state
   */
  try {
    const res = await homegraphClient.devices.reportStateAndNotification({
      // NOTE: Uncomment the following line in production to send the Home Graph response to the client making the request
      //requestBody: request.body
      requestBody: {
        requestId: '123ABC',
        agentUserId: userId,
        payload: {
          devices: {
            states: {
              'light-123': {
                on: true,
              },
            },
          },
        },
      },
    });
    // Send the Home Graph response to the client that made the request
    console.log('Report state completed');
    console.log(res.data);
    // NOTE: Uncomment the following line in production to send the Home Graph response to the client making the request
    //response.json(res.data);
  } catch (err) {
    // If there is an error, log it and send an error response to the client
    console.log(`Error reporting state: ${err}`);
  }
}

if (module === require.main) {
  runSample().catch(console.error);
}

module.exports = runSample;

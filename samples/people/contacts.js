// Copyright 2016, Google, Inc.
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
const sampleClient = require('../sampleclient');

const people = google.people({
  version: 'v1',
  auth: sampleClient.oAuth2Client,
});

async function runSample() {
  // List all user's contact groups
  // https://developers.google.com/people/api/rest/v1/contactGroups
  const {data: groups} = await people.people.get({
    resourceName: 'contactGroups',
  });
  console.log('Contact Groups:\n', groups);

  // List all user connections / contacts
  // https://developers.google.com/people/api/rest/v1/people.connections
  const {
    data: {connections},
  } = await people.people.connections.list({
    personFields: ['names', 'emailAddresses'],
    resourceName: 'people/me',
    pageSize: 10,
  });
  console.log("\n\nUser's Connections:\n");
  connections.forEach(c => console.log(c));

  // Create a new contact
  // https://developers.google.com/people/api/rest/v1/people/createContact
  const {data: newContact} = await people.people.createContact({
    requestBody: {
      emailAddresses: [{value: 'john@doe.com'}],
      names: [
        {
          displayName: 'John Doe',
          familyName: 'Doe',
          givenName: 'John',
        },
      ],
    },
  });
  console.log('\n\nCreated Contact:', newContact);
}

const scopes = ['https://www.googleapis.com/auth/contacts'];

if (module === require.main) {
  sampleClient
    .authenticate(scopes)
    .then(runSample)
    .catch(console.error);
}

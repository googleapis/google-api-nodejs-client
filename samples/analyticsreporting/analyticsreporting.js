// Copyright 2013-2016, Google, Inc.
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

var google = require('../../lib/googleapis.js');
var analyticsReporting = google.analyticsreporting('v4');
var OAuth2Client = google.auth.OAuth2;

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'YOUR CLIENT ID HERE';
var CLIENT_SECRET = 'YOUR CLIENT SECRET HERE';
var REDIRECT_URL = 'YOUR REDIRECT URL HERE';

var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE'
});

//sample array of ReportRequests objects
var reportRequests = [
  {
    viewId: 'YOUR VIEW ID HERE',
    metrics: [
      {
        expression: 'ga:users'
      }
    ],
    dateRanges:[
      {
        startDate:"2016-11-01",
        endDate:"2016-11-30"
      }
    ]
  }
];

analyticsReporting.reports.batchGet({
  auth: oauth2Client,
  resource: {reportRequests: reportRequests}
},
   function (err, body) {
    if (err) {
      return console.log('An error occured', err);
    }

    console.log(body);
  });

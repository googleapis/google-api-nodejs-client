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

var google = require('../../lib/googleapis.js');
var analytics = google.analytics('v3');
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

// Custom Goals must be exist prior to used as an objectiveMetric
var objectiveMetric = 'ga:goal1Completions';

// Serving frameworks listed below:
// https://developers.google.com/analytics/devguides/platform/experiments#serving-framework
var servingFramework = 'API';

// Invalid URLs are used when user is not redirected when showing an experiment
// Read more: http://goo.gl/oVwKH1
var variations = [
  {'name': 'Default', 'url': 'http://www.example.com', 'status': 'ACTIVE'},
  {'name': 'Variation 1', 'url': 'http://www.1.com', 'status': 'ACTIVE'},
  {'name': 'Variation 2', 'url': 'http://www.2.com', 'status': 'ACTIVE'}
];

// Specify Experiment configuration
var resourceBody = {
  'name': 'Example Experiment',
  'status': 'READY_TO_RUN',
  'objectiveMetric': objectiveMetric,
  'servingFramework': servingFramework,
  'variations': variations
};


analytics.management.experiments.insert({
  auth: oauth2Client,
  accountId: accountId,
  webPropertyId: webPropertyId,
  profileId: profileId,
  resource: resourceBody
}, function(err, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(body);
  }
});

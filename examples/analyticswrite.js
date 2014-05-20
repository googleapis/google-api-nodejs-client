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

var googleapis = require('../lib/googleapis.js');

// Client ID and client secret are available at
// https://code.google.com/apis/console
var CLIENT_ID = 'YOUR CLIENT ID HERE';
var CLIENT_SECRET = 'YOUR CLIENT SECRET HERE';
var REDIRECT_URL = 'YOUR REDIRECT URL HERE';

var auth = new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
auth.setCredentials({
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

// Load Google Analytics v3 API resources and methods
googleapis
    .discover('analytics', 'v3')
    .execute(function(err, client) {

    // Insertion example
    client
        .analytics.management.experiments.insert({
          accountId: accountId,
          webPropertyId: webPropertyId,
          profileId: profileId
        }, resourceBody)
        .withAuthClient(auth)
        .execute(function(err, result) {
          if (err) {
            console.log('Error', err);
            return;
          }
        });
});

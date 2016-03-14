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

var google = require('../lib/googleapis.js');
var urlshortener = google.urlshortener('v1');
var plus = google.plus('v1');

// PUT your API key here or this example will return errors
// To learn more about API keys, please see:
// https://github.com/google/google-api-nodejs-client#using-api-keys
var API_KEY = 'AIzaSyBzQOyq8uKZKMTRfEPP-Qbrmy98CopcZRY';

urlshortener.url.get({ shortUrl: 'http://goo.gl/xKbRu3', auth: API_KEY });
plus.people.get({ userId: '+google', auth: API_KEY });

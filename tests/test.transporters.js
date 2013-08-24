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

var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var googleapis = require('../lib/googleapis.js'),
    MockTransporter = require('./mocks/transporters.js');

describe('Transporters', function() {

  var urlshortenerDiscoveryTransporter =
    new MockTransporter(__dirname + '/data/discovery_urlshortener.json');
  var defaultUserAgentRE = 'google-api-nodejs-client/\\d+\.\\d+\.\\d+';

  it('should set default client user agent if none is set', function(done) {
    var opts = urlshortenerDiscoveryTransporter.configure({});
    var re = new RegExp(defaultUserAgentRE);
    assert(re.test(opts.headers['User-Agent']));
    done();
  });

  it('should append default client user agent to the existing user agent',
    function(done) {
    var applicationName = 'MyTestApplication-1.0';
    var opts = urlshortenerDiscoveryTransporter.configure({
      headers: { 'User-Agent': applicationName }
    });
    var re = new RegExp(applicationName + ' ' + defaultUserAgentRE);
    assert(re.test(opts.headers['User-Agent']));
    done();
  });

});

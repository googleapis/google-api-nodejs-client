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

describe('Clients', function() {

  var mockTransporter =
        new MockTransporter(__dirname + '/data/discovery_plus.json');

  it('should create request helpers according ' +
        'to the resource on discovery API response', function(done) {
    new googleapis.GoogleApis()
        .discover('plus', 'v1')
        .execute(function(err, client) {
      assert.equal(typeof client.plus.people.get, 'function');
      assert.equal(typeof client.plus.activities.search, 'function');
      assert.equal(typeof client.plus.comments.list, 'function');
      done();
    });
  });

  it('should be able to generate default discovery url', function(done) {
    var api = { name: 'plus', version: 'v3', opts: {} };
    var discoveryUrl =
        new googleapis.GoogleApis().generateDiscoveryUrl(api);
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'https:');
    assert.equal(parsed.host, 'www.googleapis.com');
    assert.equal(parsed.path, '/discovery/v1/apis/plus/v3/rest');
    assert.equal(parsed.query, null);
    done();
  });

  it('should be able to generate default discovery url with custom ' +
      'base url and parameters configuration', function(done) {
    var api = { name: 'plus', version: 'v3', opts: {
      baseDiscoveryUrl: 'http://mydeployment/discovery/',
      discoveryParams: { a: 'hello', b: 'hi' }
    }};
    var discoveryUrl = new googleapis.GoogleApis().generateDiscoveryUrl(api);
    var parsed = url.parse(discoveryUrl);
    assert.equal(parsed.protocol, 'http:');
    assert.equal(parsed.host, 'mydeployment');
    assert.equal(parsed.pathname, '/discovery/plus/v3/rest');
    assert.equal(parsed.query, 'a=hello&b=hi');
    done();
  });

  it('should be able to generate methods for top-level methods',
      function(done) {
    new googleapis.GoogleApis()
      .discover('oauth2', 'v2')
      .execute(function(err, client) {
        assert.ok(!!client.oauth2.tokeninfo);
        done();
      });
  });

  it('should be able to add defaultParams on new requests', function(done) {
    new googleapis.GoogleApis()
      .discover('plus', 'v1')
      .execute(function(err, client) {
        var req =
            client.plus.withDefaultParams({a: 1, b: 'foo'})
                .newRequest('doIt', {a: 2}, {});
        assert.equal(2, req.params.a);
        assert.equal('foo', req.params.b);
        done();
      });
  });

  it('should be able to add defaultParams on new' +
        'requests with no params and a body', function(done) {
    new googleapis.GoogleApis()
      .discover('plus', 'v1')
      .execute(function(err, client) {
        var req =
            client.plus.withDefaultParams({a: 1, b: 'foo'})
                .newRequest('doIt', {has_body: true});
        assert.equal(1, req.params.a);
        assert.equal('foo', req.params.b);
        assert.equal(undefined, req.params.body);
        assert.equal(true, req.body.has_body);
        done();
      });
  });
});

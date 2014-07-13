/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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
    MockTransporter = require('./mocks/transporters.js'),
    requests = require('../lib/requests.js');

describe('Requests', function() {

  it('should set API key parameter if it is presented', function() {
    var google = new googleapis.GoogleApis();
    var req = google.urlshortener('v1').url.list({ auth: 'YOUR API KEY' });
    assert.equal(req.uri.href.indexOf('key=YOUR%20API%20KEY') > 0, true);
  });

  it('should not append ? with no query parameters', function() {
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var uri = drive.files.get({ fileId: 'ID' }).uri;
    assert.equal(-1, uri.href.indexOf('?'));
  });

  it('should generate a valid payload for single requests', function() {
    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://someurl...' };

    var req = urlshortener.url.insert(obj);
    assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?longUrl=http%3A%2F%2Fsomeurl...');
    assert.equal(req.method, 'POST');
  });

  it('should handle non-RPC errors for single requests without assuming the errors should be an array', function(done) {
    // TODO: Fix this test?
    // var invalidGrantMockTransporter = new MockTransporter(__dirname + '/data/res_invalidgrant.json');
    // var gapis = new googleapis.GoogleApis();
    // var callback = function(err, client) {
    //   var req = client.urlshortener.url.list();
    //   req.transporter = invalidGrantMockTransporter;
    //   req.execute(function(err, res) {
    //     assert.equal(err, 'invalid_grant');
    //     done();
    //   });
    // };
    // gapis.urlshortener('v1').execute(callback);
    done();
  });

  it('should generate valid payload if any params are given', function() {
    var google = new googleapis.GoogleApis();
    var urlshortener = google.urlshortener('v1');
    var params = { shortUrl: 'a' };
    var req = urlshortener.url.get(params);
    assert.equal(req.uri.href, 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=a');
    assert.equal(req.method, 'GET');
  });

  it('should not require parameters for insertion requests', function() {
    // TODO: Better way to test this?
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var req = drive.files.insert({ someAttr: 'someValue' });
    assert.equal(req.uri.query, 'someAttr=someValue&uploadType=multipart');
  });

  it('should return a single error for single requests', function(done) {
    // TODO: This makes a real network call. Fix this.
    var singleResponseMockTransporter = new MockTransporter(__dirname + '/data/res_single_err.json');
    var google = new googleapis.GoogleApis(singleResponseMockTransporter);
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert.equal(err, null);
      assert.notEqual(result, null);
      assert.notEqual(result.kind, null);
      assert.notEqual(result.id, null);
      assert.equal(result.longUrl, 'http://google.com/');
      done();
    });
  });

  it('should return a single response object for single requests', function(done) {
    // TODO: This makes real network calls... fix this.
    var singleResponseMockTransporter = new MockTransporter(__dirname + '/data/res_single.json');
    var google = new googleapis.GoogleApis(singleResponseMockTransporter);
    var urlshortener = google.urlshortener('v1');
    var obj = { longUrl: 'http://google.com/' };
    urlshortener.url.insert({ resource: obj }, function(err, result) {
      assert.equal(err, null);
      assert.notEqual(result, null);
      assert.notEqual(result.kind, null);
      assert.notEqual(result.id, null);
      assert.equal(result.longUrl, 'http://google.com/');
      done();
    });
  });

  it('should generate a valid upload if media is set, metadata is not set', function() {
    var google = new googleapis.GoogleApis();
    var drive = google.drive('v2');
    var req = drive.files.insert({ resource: { mimeType: 'text/plain' }, media: 'hey' });
    assert.equal(req.method, 'POST');
    assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
    assert.equal(req.headers['Content-Type'].indexOf('multipart/related;'), 0);
    // assert.equal(req.body, 'hey');
  });

  it('should generate valid multipart upload payload if media and metadata are both set', function(done) {
    // TOOD: Fix this test.
    // var google = new googleapis.GoogleApis();
    // var drive = google.drive('v2');
    // var req = drive.files.insert({ resource: { title: 'title', mimeType: 'text/plain' }, media: 'hey' });
    // assert.equal(req.method, 'POST');
    // assert.equal(req.uri.href, 'https://www.googleapis.com/upload/drive/v2/files?uploadType=multipart');
    // assert.equal(payload.multipart[0]['Content-Type'], 'application/json');
    // assert.equal(payload.multipart[0].body, '{"title":"title"}');
    // assert.equal(req.headers['Content-Type'], 'multipart/related;');
    // assert.equal(payload.multipart[1].body, 'hey');
    // assert.equal(payload.body, null);
    // done();
  });

  it('should differentiate query params and body object', function(done) {
    // TODO: Fix this test.
    // googleapis.discover('drive', 'v2').execute(function(err, client) {
    //   var req1 = client.drive.files.insert({ title: 'Hello' });
    //   var req2 = client.drive.files.list({ q: 'title contains "H"' });
    //   var req3 = client.drive.files.get({ fileId: 'root' });

    //   assert.equal(req1.params.title, null);
    //   assert.equal(req1.body.title, 'Hello');
    //   assert.equal(req2.params.q, 'title contains "H"');
    //   assert.equal(req3.generatePath(req3.params), '/drive/v2/files/root');
    //   done();
    // });
  });

  // describe('buildUri', function() {
  //   it('should concat path without double or trailing slashes', function() {
  //     var uri = requests.buildUri('', ['a', '//b/6/n/', 'c', 'd/']);
  //     assert.equal(uri, '/a/b/6/n/c/d');
  //   });

  //   it('should avoid null or undefined paths', function() {
  //     var uri = requests.buildUri('', ['a', null, undefined, 'd']);
  //     assert.equal(uri, '/a/d');
  //   });

  //   it('should remove double slashes from root', function() {
  //     var uri = requests.buildUri('http://root///', ['a']);
  //     assert.equal(uri, 'http://root/a');
  //   });

  //   it('should append query params', function() {
  //     var uri = requests.buildUri('', ['a'], { q: 'keyword', p: 1 });
  //     assert.equal(uri, '/a?q=keyword&p=1');
  //   });
  // });
});

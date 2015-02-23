'use strict';

var assert = require('assert');
var googleapis = require('../lib/googleapis.js');
var nock = require('nock');

nock.disableNetConnect();

describe('Batch Requests', function() {

  it('should give an error when reqs is not an array', function(done) {
    var drive = googleapis.drive('v2');
    var request = drive.files.list();
    googleapis.batch(request, function(err, results) {
      assert.equal(results, null);
      assert(err);
      assert.equal(err.message, 'reqs should be an array of requests.');
      assert(!results);
      done();
    });
  });

  it('should give an error if the api returns an error', function(done) {
    var scope = nock('https://www.googleapis.com')
        .filteringRequestBody(function() {
      return '*';
        })
        .post('/batch', '*')
        .reply(503, 'Forbidden');
    var drive = googleapis.drive('v2');
    var reqs = [];
    reqs.push(drive.files.list({q: 'hello'}));
    reqs.push(drive.files.get({fileId: '123abc'}));
    googleapis.batch({reqs: reqs}, function(err, result) {
      assert(err);
      assert.equal(err.message, 'Forbidden');
      assert(!result);
      scope.done();
      done();
    });
  });
});

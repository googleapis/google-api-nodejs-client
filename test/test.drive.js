var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var googleapis = require('../lib/googleapis.js'),
    modulePath = __dirname + '/..';

describe('drive', function() {

  it('should only have specific methods per version', function() {
    var drive = googleapis.drive('v2');

    assert.equal(JSON.stringify(drive.files), '{}');

    drive.files = 'wat';

    assert.equal(JSON.stringify(drive.files), '{}');
  });
});

var url = require('url'),
    assert = require('assert'),
    qs = require('querystring'),
    fs = require('fs');

var google = require('../lib/googleapis.js'),
    modulePath = __dirname + '/..';

describe('drive', function() {

  it('should exist', function(done) {
    assert.notEqual(typeof(google.drive), null);
    done();
  });

  it('should be a function', function(done) {
    assert.equal(typeof(google.drive), 'function');
    done();
  });

  it('should create a drive object', function(done) {
    var drive = google.drive('v2');
    assert.notEqual(typeof drive, 'undefined');
    done();
  });

  it('should be frozen (immutable)', function(done) {
    var drive = google.drive('v2');
    assert.equal(Object.isFrozen(drive), true);
    done();
  });

  describe('.auth', function() {
    it('should exist', function(done) {
      var drive = google.drive('v2');
      assert.notEqual(typeof drive.auth, 'undefined');
      done();
    });

    it('should be a function', function(done) {
      var drive = google.drive('v2');
      assert.equal(typeof drive.auth, 'function');
      done();
    });
  });

  describe('.files', function() {
    it('should exist', function(done) {
      var drive = google.drive('v2');
      assert.notEqual(typeof drive.files, 'undefined');
      done();
    });

    it('should be an object', function(done) {
      var drive = google.drive('v2');
      assert.equal(typeof drive.files, 'object');
      done();
    });

    describe('.insert', function() {
      it('should exist', function(done) {
        var drive = google.drive('v2');
        assert.notEqual(typeof drive.files.insert, 'undefined');
        done();
      });

      it('should be a function', function(done) {
        var drive = google.drive('v2');
        assert.equal(typeof drive.files.insert, 'function');
        done();
      });
    });

    describe('.get', function() {
      it('should exist', function(done) {
        var drive = google.drive('v2');
        assert.notEqual(typeof drive.files.get, 'undefined');
        done();
      });

      it('should be a function', function(done) {
        var drive = google.drive('v2');
        assert.equal(typeof drive.files.get, 'function');
        done();
      });
    });
  });
});

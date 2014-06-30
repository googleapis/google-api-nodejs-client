/**
 * @constructor
 * OData batch request parser.
 * TODO: ridiculously experimental, dont use on prod.
 *
 * @param {String} boundary Multipart boundary.
 * @param {Stream} buffer   Readable input stream
 */
function BatchParser(boundary, buffer) {
  this.boundary = boundary;
  this.buffer = buffer;
  this.results = [];
}

/**
 * Parses the batch body.
 * @param  {Function} opt_callback Optional callback.
 */
BatchParser.prototype.parse = function(opt_callback) {
  var lines = this.buffer.split('\r\n'),
      currentIndex = -1;

  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case '--' + this.boundary:
        // started
        break;
      case '--' + this.boundary + '--':
        opt_callback && opt_callback(null, this.results);
        break;
      default:
        if (/^Content\-ID: response\-/.test(lines[i])) {
          currentIndex = lines[i].replace('Content-ID: response-', '');
        }
        if (lines[i][0] == '{') {
          this.results[currentIndex] = JSON.parse(lines[i]);
        }
        break;
    }
  }
};

/**
 * Export BatchParser
 */
module.exports = BatchParser;

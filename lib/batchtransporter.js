'use strict';

var http_parser = require('http-string-parser');

/**
 * BatchParser constructor.
 * @constructor
 * @param {object} transporter Transporter to use to send request
 */
function BatchTransporter(transporter) {
  this.transporter = transporter;
}

/**
 * Makes a request with given options and invokes callback.
 * @param {object} opts Options.
 * @param {Function=} opt_callback Optional callback.
 * @return {Request} Request object
 */
BatchTransporter.prototype.request = function(opts, opt_callback) {
  return this.transporter.request(opts, this.wrapCallback_(opt_callback));
};

/**
 * Wraps the response callback.
 * @param {Function=} opt_callback Optional callback.
 * @return {Function} Wrapped callback function.
 * @private
 */
BatchTransporter.prototype.wrapCallback_ = function(opt_callback) {
  return function(err, body, res) {

    //Call callback with error if response has an error
    if (err || !body) {
      return opt_callback && opt_callback(err, body, res);
    }

    var content_type = res.headers['content-type'];

    //Make sure response is of type multipart/mixed
    if (!content_type || content_type.indexOf('multipart/mixed') < 0) {
      return opt_callback && opt_callback(new Error('Unexpected response type.'));
    }

    //Content type header contains boundary name so extract
    var boundary_regex = new RegExp('boundary=(.*)$', 'm');
    var boundary = boundary_regex.exec(content_type)[1];
    //Get all responses that have been returned, seperated by the boundary name
    var responses = body.split('--' + boundary);

    //ignore first and last element since it contains only garbage data
    responses = responses.slice(1, responses.length - 1);
    var batch_response = [];
    responses.forEach(function(response) {
      //Parse HTTP response data into a proper JSON object
      var reduced_string = response.substr(response.indexOf('HTTP'));
      var resp_obj = http_parser.parseResponse(reduced_string);

      try {
        var body = JSON.parse(resp_obj.body);
        batch_response.push(body);
      }
      catch (err) {
        return opt_callback && opt_callback(new Error(err));
      }
    });
    
    return opt_callback && opt_callback(null, batch_response);
  };
};

module.exports = BatchTransporter;
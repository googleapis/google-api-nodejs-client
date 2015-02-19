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

    if (err || !body) {
      return opt_callback && opt_callback(err, body, res);
    }

    if (res.headers['content-type'].indexOf('multipart/mixed') < 0) {
      return opt_callback && opt_callback(new Error('Unexpected response type.'));
    }

    var boundary_regex = new RegExp('boundary=(.*)$', 'm');
    var boundary = boundary_regex.exec(res.headers['content-type'])[1];
    var responses = body.split('--' + boundary);

    //ignore first and last element since it should contain only garbage data
    responses = responses.slice(1, responses.length - 1);
    var batch_response = [];
    responses.forEach(function(response) {
      var reduced_string = response.substr(response.indexOf('HTTP'));
      var resp_obj = http_parser.parseResponse(reduced_string);

      try {
        var body = JSON.parse(resp_obj.body);
        batch_response.push(body);
      }
      catch (err) {
        //do nothing..?
      }
    });
    
    return opt_callback && opt_callback(null, batch_response);
  };
};

module.exports = BatchTransporter;
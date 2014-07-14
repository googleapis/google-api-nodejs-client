var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;

/**
 * Google OAuth2 API
 *
 * Lets you access OAuth2 protocol related APIs.
 *
 * @author Google
 * @this Oauth2
 * @param {object=} options Options for Oauth2
 */
function Oauth2(options) {

  var self = this;
  this._options = options || {};

  this.userinfo = {

    /**
     * oauth2.userinfo.get
     *
     * Get user info
     *
     * @param {object} params.resource Body of request
     * @return {object} Request object
     */
    get: function(params, callback) {
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/oauth2/v1/userinfo',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Export Oauth2 object
 * @type Oauth2
 */
module.exports = Oauth2;
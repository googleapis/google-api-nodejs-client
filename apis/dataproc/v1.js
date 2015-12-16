/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Dataproc API
 *
 * @classdesc An API for managing Hadoop-based clusters and jobs on Google Cloud Platform.
 * @namespace dataproc
 * @version  v1
 * @variation v1
 * @this Dataproc
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) {

  var self = this;
  this._options = options || {};

  this.media = {

    /**
     * dataproc.media.upload
     *
     * @desc Method for media upload. Upload is supported on the URI `/upload/v1/media/{+name}`.
     *
     * @alias dataproc.media.upload
     * @memberOf! dataproc(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceName - Name of the media that is being downloaded. See [][ByteStream.ReadRequest.resource_name].
     * @param  {object} params.resource - Media resource metadata
     * @param  {object} params.media - Media object
     * @param  {string} params.media.mimeType - Media mime-type
     * @param  {string|object} params.media.body - Media body contents
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    upload: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1/media/{resourceName}',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://dataproc.googleapis.com/upload/v1/media/{resourceName}',
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dataproc.media.download
     *
     * @desc Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
     *
     * @alias dataproc.media.download
     * @memberOf! dataproc(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resourceName - Name of the media that is being downloaded. See [][ByteStream.ReadRequest.resource_name].
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    download: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://dataproc.googleapis.com/v1/media/{resourceName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['resourceName'],
        pathParams: ['resourceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Dataproc object
 * @type Dataproc
 */
module.exports = Dataproc;
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
 * Google Classroom API
 *
 * @classdesc Google Classroom API
 * @namespace classroom
 * @version  v1
 * @variation v1
 * @this Classroom
 * @param {object=} options Options for Classroom
 */
function Classroom(options) {

  var self = this;
  this._options = options || {};

  this.courses = {

    /**
     * classroom.courses.create
     *
     * @desc Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
     *
     * @alias classroom.courses.create
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.courses.get
     *
     * @desc Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     *
     * @alias classroom.courses.get
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.courses.update
     *
     * @desc Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
     *
     * @alias classroom.courses.update
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses/{id}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.courses.patch
     *
     * @desc Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
     *
     * @alias classroom.courses.patch
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param  {string=} params.updateMask - Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` When set in a query parameter, this field should be specified as `updateMask=,,...`
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    patch: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses/{id}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.courses.delete
     *
     * @desc Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     *
     * @alias classroom.courses.delete
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.courses.list
     *
     * @desc Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
     *
     * @alias classroom.courses.list
     * @memberOf! classroom(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.studentId - Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @param  {string=} params.teacherId - Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @param  {integer=} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param  {string=} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/courses',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    aliases: {

      /**
       * classroom.courses.aliases.create
       *
       * @desc Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists.
       *
       * @alias classroom.courses.aliases.create
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/aliases',
            method: 'POST'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.aliases.delete
       *
       * @desc Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist.
       *
       * @alias classroom.courses.aliases.delete
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string} params.alias - Alias to delete. This may not be the Classroom-assigned identifier.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/aliases/{alias}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['courseId', 'alias'],
          pathParams: ['courseId', 'alias'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.aliases.list
       *
       * @desc Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
       *
       * @alias classroom.courses.aliases.list
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {integer=} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
       * @param  {string=} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/aliases',
            method: 'GET'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    teachers: {

      /**
       * classroom.courses.teachers.create
       *
       * @desc Creates a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
       *
       * @alias classroom.courses.teachers.create
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/teachers',
            method: 'POST'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.teachers.get
       *
       * @desc Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
       *
       * @alias classroom.courses.teachers.get
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string} params.userId - Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/teachers/{userId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['courseId', 'userId'],
          pathParams: ['courseId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.teachers.delete
       *
       * @desc Deletes a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course.
       *
       * @alias classroom.courses.teachers.delete
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string} params.userId - Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/teachers/{userId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['courseId', 'userId'],
          pathParams: ['courseId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.teachers.list
       *
       * @desc Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
       *
       * @alias classroom.courses.teachers.list
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {integer=} params.pageSize - Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
       * @param  {string=} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/teachers',
            method: 'GET'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    students: {

      /**
       * classroom.courses.students.create
       *
       * @desc Adds a user as a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
       *
       * @alias classroom.courses.students.create
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string=} params.enrollmentCode - Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/students',
            method: 'POST'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.students.get
       *
       * @desc Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
       *
       * @alias classroom.courses.students.get
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string} params.userId - Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/students/{userId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['courseId', 'userId'],
          pathParams: ['courseId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.students.delete
       *
       * @desc Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
       *
       * @alias classroom.courses.students.delete
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {string} params.userId - Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/students/{userId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['courseId', 'userId'],
          pathParams: ['courseId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * classroom.courses.students.list
       *
       * @desc Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
       *
       * @alias classroom.courses.students.list
       * @memberOf! classroom(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.courseId - Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
       * @param  {integer=} params.pageSize - Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
       * @param  {string=} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://classroom.googleapis.com/v1/courses/{courseId}/students',
            method: 'GET'
          },
          params: params,
          requiredParams: ['courseId'],
          pathParams: ['courseId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  this.invitations = {

    /**
     * classroom.invitations.create
     *
     * @desc Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled or if the user already has this role or a role with greater permissions. * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
     *
     * @alias classroom.invitations.create
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/invitations',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.invitations.get
     *
     * @desc Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     *
     * @alias classroom.invitations.get
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the invitation to return.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/invitations/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.invitations.delete
     *
     * @desc Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     *
     * @alias classroom.invitations.delete
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the invitation to delete.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/invitations/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.invitations.list
     *
     * @desc Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
     *
     * @alias classroom.invitations.list
     * @memberOf! classroom(v1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.userId - Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @param  {string=} params.courseId - Restricts returned invitations to those for a course with the specified identifier.
     * @param  {integer=} params.pageSize - Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
     * @param  {string=} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/invitations',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * classroom.invitations.accept
     *
     * @desc Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
     *
     * @alias classroom.invitations.accept
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.id - Identifier of the invitation to accept.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    accept: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/invitations/{id}:accept',
          method: 'POST'
        },
        params: params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.userProfiles = {

    /**
     * classroom.userProfiles.get
     *
     * @desc Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile or if no profile exists with the requested ID or for access errors.
     *
     * @alias classroom.userProfiles.get
     * @memberOf! classroom(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.userId - Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://classroom.googleapis.com/v1/userProfiles/{userId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Classroom object
 * @type Classroom
 */
module.exports = Classroom;
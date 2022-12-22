// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace classroom_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Google Classroom API
   *
   * Manages classes, rosters, and invitations in Google Classroom.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const classroom = google.classroom('v1');
   * ```
   */
  export class Classroom {
    context: APIRequestContext;
    courses: Resource$Courses;
    invitations: Resource$Invitations;
    registrations: Resource$Registrations;
    userProfiles: Resource$Userprofiles;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.courses = new Resource$Courses(this.context);
      this.invitations = new Resource$Invitations(this.context);
      this.registrations = new Resource$Registrations(this.context);
      this.userProfiles = new Resource$Userprofiles(this.context);
    }
  }

  /**
   * Announcement created by a teacher for students of the course
   */
  export interface Schema$Announcement {
    /**
     * Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: string | null;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Timestamp when this announcement was created. Read-only.
     */
    creationTime?: string | null;
    /**
     * Identifier for the user that created the announcement. Read-only.
     */
    creatorUserId?: string | null;
    /**
     * Classroom-assigned identifier of this announcement, unique per course. Read-only.
     */
    id?: string | null;
    /**
     * Identifiers of students with access to the announcement. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the announcement.
     */
    individualStudentsOptions?: Schema$IndividualStudentsOptions;
    /**
     * Additional materials. Announcements must have no more than 20 material items.
     */
    materials?: Schema$Material[];
    /**
     * Optional timestamp when this announcement is scheduled to be published.
     */
    scheduledTime?: string | null;
    /**
     * Status of this announcement. If unspecified, the default state is `DRAFT`.
     */
    state?: string | null;
    /**
     * Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    text?: string | null;
    /**
     * Timestamp of the most recent change to this announcement. Read-only.
     */
    updateTime?: string | null;
  }
  /**
   * Additional details for assignments.
   */
  export interface Schema$Assignment {
    /**
     * Drive folder where attachments from student submissions are placed. This is only populated for course teachers and administrators.
     */
    studentWorkFolder?: Schema$DriveFolder;
  }
  /**
   * Student work for an assignment.
   */
  export interface Schema$AssignmentSubmission {
    /**
     * Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be.
     */
    attachments?: Schema$Attachment[];
  }
  /**
   * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
   */
  export interface Schema$Attachment {
    /**
     * Google Drive file attachment.
     */
    driveFile?: Schema$DriveFile;
    /**
     * Google Forms attachment.
     */
    form?: Schema$Form;
    /**
     * Link attachment.
     */
    link?: Schema$Link;
    /**
     * Youtube video attachment.
     */
    youTubeVideo?: Schema$YouTubeVideo;
  }
  /**
   * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
   */
  export interface Schema$CloudPubsubTopic {
    /**
     * The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
     */
    topicName?: string | null;
  }
  /**
   * A Course in Classroom.
   */
  export interface Schema$Course {
    /**
     * Absolute link to this course in the Classroom web UI. Read-only.
     */
    alternateLink?: string | null;
    /**
     * The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. Read-only.
     */
    calendarId?: string | null;
    /**
     * The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.
     */
    courseGroupEmail?: string | null;
    /**
     * Sets of materials that appear on the "about" page of this course. Read-only.
     */
    courseMaterialSets?: Schema$CourseMaterialSet[];
    /**
     * State of the course. If unspecified, the default state is `PROVISIONED`.
     */
    courseState?: string | null;
    /**
     * Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.
     */
    creationTime?: string | null;
    /**
     * Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.
     */
    description?: string | null;
    /**
     * Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.
     */
    descriptionHeading?: string | null;
    /**
     * Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.
     */
    enrollmentCode?: string | null;
    /**
     * The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to. Read-only
     */
    gradebookSettings?: Schema$GradebookSettings;
    /**
     * Whether or not guardian notifications are enabled for this course. Read-only.
     */
    guardiansEnabled?: boolean | null;
    /**
     * Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.
     */
    id?: string | null;
    /**
     * Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.
     */
    name?: string | null;
    /**
     * The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.
     */
    ownerId?: string | null;
    /**
     * Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.
     */
    room?: string | null;
    /**
     * Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.
     */
    section?: string | null;
    /**
     * Information about a Drive Folder that is shared with all teachers of the course. This field will only be set for teachers of the course and domain administrators. Read-only.
     */
    teacherFolder?: Schema$DriveFolder;
    /**
     * The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.
     */
    teacherGroupEmail?: string | null;
    /**
     * Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.
     */
    updateTime?: string | null;
  }
  /**
   * Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.
   */
  export interface Schema$CourseAlias {
    /**
     * Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.
     */
    alias?: string | null;
  }
  /**
   * A material attached to a course as part of a material set.
   */
  export interface Schema$CourseMaterial {
    /**
     * Google Drive file attachment.
     */
    driveFile?: Schema$DriveFile;
    /**
     * Google Forms attachment.
     */
    form?: Schema$Form;
    /**
     * Link atatchment.
     */
    link?: Schema$Link;
    /**
     * Youtube video attachment.
     */
    youTubeVideo?: Schema$YouTubeVideo;
  }
  /**
   * A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
   */
  export interface Schema$CourseMaterialSet {
    /**
     * Materials attached to this set.
     */
    materials?: Schema$CourseMaterial[];
    /**
     * Title for this set.
     */
    title?: string | null;
  }
  /**
   * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
   */
  export interface Schema$CourseRosterChangesInfo {
    /**
     * The `course_id` of the course to subscribe to roster changes for.
     */
    courseId?: string | null;
  }
  /**
   * Course work created by a teacher for students of the course.
   */
  export interface Schema$CourseWork {
    /**
     * Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: string | null;
    /**
     * Assignment details. This is populated only when `work_type` is `ASSIGNMENT`. Read-only.
     */
    assignment?: Schema$Assignment;
    /**
     * Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
     */
    associatedWithDeveloper?: boolean | null;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Timestamp when this course work was created. Read-only.
     */
    creationTime?: string | null;
    /**
     * Identifier for the user that created the coursework. Read-only.
     */
    creatorUserId?: string | null;
    /**
     * Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    description?: string | null;
    /**
     * Optional date, in UTC, that submissions for this course work are due. This must be specified if `due_time` is specified.
     */
    dueDate?: Schema$Date;
    /**
     * Optional time of day, in UTC, that submissions for this course work are due. This must be specified if `due_date` is specified.
     */
    dueTime?: Schema$TimeOfDay;
    /**
     * The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade. Read-only.
     */
    gradeCategory?: Schema$GradeCategory;
    /**
     * Classroom-assigned identifier of this course work, unique per course. Read-only.
     */
    id?: string | null;
    /**
     * Identifiers of students with access to the coursework. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field are assigned the coursework.
     */
    individualStudentsOptions?: Schema$IndividualStudentsOptions;
    /**
     * Additional materials. CourseWork must have no more than 20 material items.
     */
    materials?: Schema$Material[];
    /**
     * Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.
     */
    maxPoints?: number | null;
    /**
     * Multiple choice question details. For read operations, this field is populated only when `work_type` is `MULTIPLE_CHOICE_QUESTION`. For write operations, this field must be specified when creating course work with a `work_type` of `MULTIPLE_CHOICE_QUESTION`, and it must not be set otherwise.
     */
    multipleChoiceQuestion?: Schema$MultipleChoiceQuestion;
    /**
     * Optional timestamp when this course work is scheduled to be published.
     */
    scheduledTime?: string | null;
    /**
     * Status of this course work. If unspecified, the default state is `DRAFT`.
     */
    state?: string | null;
    /**
     * Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
     */
    submissionModificationMode?: string | null;
    /**
     * Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
     */
    title?: string | null;
    /**
     * Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.
     */
    topicId?: string | null;
    /**
     * Timestamp of the most recent change to this course work. Read-only.
     */
    updateTime?: string | null;
    /**
     * Type of this course work. The type is set when the course work is created and cannot be changed.
     */
    workType?: string | null;
  }
  /**
   * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
   */
  export interface Schema$CourseWorkChangesInfo {
    /**
     * The `course_id` of the course to subscribe to work changes for.
     */
    courseId?: string | null;
  }
  /**
   * Course work material created by a teacher for students of the course
   */
  export interface Schema$CourseWorkMaterial {
    /**
     * Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: string | null;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Timestamp when this course work material was created. Read-only.
     */
    creationTime?: string | null;
    /**
     * Identifier for the user that created the course work material. Read-only.
     */
    creatorUserId?: string | null;
    /**
     * Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    description?: string | null;
    /**
     * Classroom-assigned identifier of this course work material, unique per course. Read-only.
     */
    id?: string | null;
    /**
     * Identifiers of students with access to the course work material. This field is set only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. If the `assigneeMode` is `INDIVIDUAL_STUDENTS`, then only students specified in this field can see the course work material.
     */
    individualStudentsOptions?: Schema$IndividualStudentsOptions;
    /**
     * Additional materials. A course work material must have no more than 20 material items.
     */
    materials?: Schema$Material[];
    /**
     * Optional timestamp when this course work material is scheduled to be published.
     */
    scheduledTime?: string | null;
    /**
     * Status of this course work material. If unspecified, the default state is `DRAFT`.
     */
    state?: string | null;
    /**
     * Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
     */
    title?: string | null;
    /**
     * Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.
     */
    topicId?: string | null;
    /**
     * Timestamp of the most recent change to this course work material. Read-only.
     */
    updateTime?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Representation of a Google Drive file.
   */
  export interface Schema$DriveFile {
    /**
     * URL that can be used to access the Drive item. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Drive API resource ID.
     */
    id?: string | null;
    /**
     * URL of a thumbnail image of the Drive item. Read-only.
     */
    thumbnailUrl?: string | null;
    /**
     * Title of the Drive item. Read-only.
     */
    title?: string | null;
  }
  /**
   * Representation of a Google Drive folder.
   */
  export interface Schema$DriveFolder {
    /**
     * URL that can be used to access the Drive folder. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Drive API resource ID.
     */
    id?: string | null;
    /**
     * Title of the Drive folder. Read-only.
     */
    title?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
   */
  export interface Schema$Feed {
    /**
     * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. This field must be specified if `feed_type` is `COURSE_ROSTER_CHANGES`.
     */
    courseRosterChangesInfo?: Schema$CourseRosterChangesInfo;
    /**
     * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. This field must be specified if `feed_type` is `COURSE_WORK_CHANGES`.
     */
    courseWorkChangesInfo?: Schema$CourseWorkChangesInfo;
    /**
     * The type of feed.
     */
    feedType?: string | null;
  }
  /**
   * Google Forms item.
   */
  export interface Schema$Form {
    /**
     * URL of the form.
     */
    formUrl?: string | null;
    /**
     * URL of the form responses document. Only set if respsonses have been recorded and only when the requesting user is an editor of the form. Read-only.
     */
    responseUrl?: string | null;
    /**
     * URL of a thumbnail image of the Form. Read-only.
     */
    thumbnailUrl?: string | null;
    /**
     * Title of the Form. Read-only.
     */
    title?: string | null;
  }
  /**
   * Global user permission description.
   */
  export interface Schema$GlobalPermission {
    /**
     * Permission value.
     */
    permission?: string | null;
  }
  /**
   * The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
   */
  export interface Schema$GradebookSettings {
    /**
     * Indicates how the overall grade is calculated.
     */
    calculationType?: string | null;
    /**
     * Indicates who can see the overall grade..
     */
    displaySetting?: string | null;
    /**
     * Grade categories that are available for coursework in the course.
     */
    gradeCategories?: Schema$GradeCategory[];
  }
  /**
   * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
   */
  export interface Schema$GradeCategory {
    /**
     * Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS.
     */
    defaultGradeDenominator?: number | null;
    /**
     * ID of the grade category.
     */
    id?: string | null;
    /**
     * Name of the grade category.
     */
    name?: string | null;
    /**
     * The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES.
     */
    weight?: number | null;
  }
  /**
   * The history of each grade on this submission.
   */
  export interface Schema$GradeHistory {
    /**
     * The teacher who made the grade change.
     */
    actorUserId?: string | null;
    /**
     * The type of grade change at this time in the submission grade history.
     */
    gradeChangeType?: string | null;
    /**
     * When the grade of the submission was changed.
     */
    gradeTimestamp?: string | null;
    /**
     * The denominator of the grade at this time in the submission grade history.
     */
    maxPoints?: number | null;
    /**
     * The numerator of the grade at this time in the submission grade history.
     */
    pointsEarned?: number | null;
  }
  /**
   * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
   */
  export interface Schema$Guardian {
    /**
     * Identifier for the guardian.
     */
    guardianId?: string | null;
    /**
     * User profile for the guardian.
     */
    guardianProfile?: Schema$UserProfile;
    /**
     * The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string | null;
    /**
     * Identifier for the student to whom the guardian relationship applies.
     */
    studentId?: string | null;
  }
  /**
   * An invitation to become the guardian of a specified user, sent to a specified email address.
   */
  export interface Schema$GuardianInvitation {
    /**
     * The time that this invitation was created. Read-only.
     */
    creationTime?: string | null;
    /**
     * Unique identifier for this invitation. Read-only.
     */
    invitationId?: string | null;
    /**
     * Email address that the invitation was sent to. This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string | null;
    /**
     * The state that this invitation is in.
     */
    state?: string | null;
    /**
     * ID of the student (in standard format)
     */
    studentId?: string | null;
  }
  /**
   * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
   */
  export interface Schema$IndividualStudentsOptions {
    /**
     * Identifiers for the students that have access to the coursework/announcement.
     */
    studentIds?: string[] | null;
  }
  /**
   * An invitation to join a course.
   */
  export interface Schema$Invitation {
    /**
     * Identifier of the course to invite the user to.
     */
    courseId?: string | null;
    /**
     * Identifier assigned by Classroom. Read-only.
     */
    id?: string | null;
    /**
     * Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
     */
    role?: string | null;
    /**
     * Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string | null;
  }
  /**
   * URL item.
   */
  export interface Schema$Link {
    /**
     * URL of a thumbnail image of the target URL. Read-only.
     */
    thumbnailUrl?: string | null;
    /**
     * Title of the target of the URL. Read-only.
     */
    title?: string | null;
    /**
     * URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.
     */
    url?: string | null;
  }
  /**
   * Response when listing course work.
   */
  export interface Schema$ListAnnouncementsResponse {
    /**
     * Announcement items that match the request.
     */
    announcements?: Schema$Announcement[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing course aliases.
   */
  export interface Schema$ListCourseAliasesResponse {
    /**
     * The course aliases.
     */
    aliases?: Schema$CourseAlias[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing courses.
   */
  export interface Schema$ListCoursesResponse {
    /**
     * Courses that match the list request.
     */
    courses?: Schema$Course[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing course work material.
   */
  export interface Schema$ListCourseWorkMaterialResponse {
    /**
     * Course work material items that match the request.
     */
    courseWorkMaterial?: Schema$CourseWorkMaterial[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing course work.
   */
  export interface Schema$ListCourseWorkResponse {
    /**
     * Course work items that match the request.
     */
    courseWork?: Schema$CourseWork[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing guardian invitations.
   */
  export interface Schema$ListGuardianInvitationsResponse {
    /**
     * Guardian invitations that matched the list request.
     */
    guardianInvitations?: Schema$GuardianInvitation[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing guardians.
   */
  export interface Schema$ListGuardiansResponse {
    /**
     * Guardians on this page of results that met the criteria specified in the request.
     */
    guardians?: Schema$Guardian[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing invitations.
   */
  export interface Schema$ListInvitationsResponse {
    /**
     * Invitations that match the list request.
     */
    invitations?: Schema$Invitation[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response when listing students.
   */
  export interface Schema$ListStudentsResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * Students who match the list request.
     */
    students?: Schema$Student[];
  }
  /**
   * Response when listing student submissions.
   */
  export interface Schema$ListStudentSubmissionsResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * Student work that matches the request.
     */
    studentSubmissions?: Schema$StudentSubmission[];
  }
  /**
   * Response when listing teachers.
   */
  export interface Schema$ListTeachersResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * Teachers who match the list request.
     */
    teachers?: Schema$Teacher[];
  }
  /**
   * Response when listing topics.
   */
  export interface Schema$ListTopicResponse {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string | null;
    /**
     * Topic items that match the request.
     */
    topic?: Schema$Topic[];
  }
  /**
   * Material attached to course work. When creating attachments, setting the `form` field is not supported.
   */
  export interface Schema$Material {
    /**
     * Google Drive file material.
     */
    driveFile?: Schema$SharedDriveFile;
    /**
     * Google Forms material.
     */
    form?: Schema$Form;
    /**
     * Link material. On creation, this is upgraded to a more appropriate type if possible, and this is reflected in the response.
     */
    link?: Schema$Link;
    /**
     * YouTube video material.
     */
    youtubeVideo?: Schema$YouTubeVideo;
  }
  /**
   * Request to modify assignee mode and options of an announcement.
   */
  export interface Schema$ModifyAnnouncementAssigneesRequest {
    /**
     * Mode of the announcement describing whether it is accessible by all students or specified individual students.
     */
    assigneeMode?: string | null;
    /**
     * Set which students can view or cannot view the announcement. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: Schema$ModifyIndividualStudentsOptions;
  }
  /**
   * Request to modify the attachments of a student submission.
   */
  export interface Schema$ModifyAttachmentsRequest {
    /**
     * Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.
     */
    addAttachments?: Schema$Attachment[];
  }
  /**
   * Request to modify assignee mode and options of a coursework.
   */
  export interface Schema$ModifyCourseWorkAssigneesRequest {
    /**
     * Mode of the coursework describing whether it will be assigned to all students or specified individual students.
     */
    assigneeMode?: string | null;
    /**
     * Set which students are assigned or not assigned to the coursework. Must be specified only when `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: Schema$ModifyIndividualStudentsOptions;
  }
  /**
   * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
   */
  export interface Schema$ModifyIndividualStudentsOptions {
    /**
     * IDs of students to be added as having access to this coursework/announcement.
     */
    addStudentIds?: string[] | null;
    /**
     * IDs of students to be removed from having access to this coursework/announcement.
     */
    removeStudentIds?: string[] | null;
  }
  /**
   * Additional details for multiple-choice questions.
   */
  export interface Schema$MultipleChoiceQuestion {
    /**
     * Possible choices.
     */
    choices?: string[] | null;
  }
  /**
   * Student work for a multiple-choice question.
   */
  export interface Schema$MultipleChoiceSubmission {
    /**
     * Student's select choice.
     */
    answer?: string | null;
  }
  /**
   * Details of the user's name.
   */
  export interface Schema$Name {
    /**
     * The user's last name. Read-only.
     */
    familyName?: string | null;
    /**
     * The user's full name formed by concatenating the first and last name values. Read-only.
     */
    fullName?: string | null;
    /**
     * The user's first name. Read-only.
     */
    givenName?: string | null;
  }
  /**
   * Request to reclaim a student submission.
   */
  export interface Schema$ReclaimStudentSubmissionRequest {}
  /**
   * An instruction to Classroom to send notifications from the `feed` to the provided destination.
   */
  export interface Schema$Registration {
    /**
     * The Cloud Pub/Sub topic that notifications are to be sent to.
     */
    cloudPubsubTopic?: Schema$CloudPubsubTopic;
    /**
     * The time until which the `Registration` is effective. This is a read-only field assigned by the server.
     */
    expiryTime?: string | null;
    /**
     * Specification for the class of notifications that Classroom should deliver to the destination.
     */
    feed?: Schema$Feed;
    /**
     * A server-generated unique identifier for this `Registration`. Read-only.
     */
    registrationId?: string | null;
  }
  /**
   * Request to return a student submission.
   */
  export interface Schema$ReturnStudentSubmissionRequest {}
  /**
   * Drive file that is used as material for course work.
   */
  export interface Schema$SharedDriveFile {
    /**
     * Drive file details.
     */
    driveFile?: Schema$DriveFile;
    /**
     * Mechanism by which students access the Drive item.
     */
    shareMode?: string | null;
  }
  /**
   * Student work for a short answer question.
   */
  export interface Schema$ShortAnswerSubmission {
    /**
     * Student response to a short-answer question.
     */
    answer?: string | null;
  }
  /**
   * The history of each state this submission has been in.
   */
  export interface Schema$StateHistory {
    /**
     * The teacher or student who made the change.
     */
    actorUserId?: string | null;
    /**
     * The workflow pipeline stage.
     */
    state?: string | null;
    /**
     * When the submission entered this state.
     */
    stateTimestamp?: string | null;
  }
  /**
   * Student in a course.
   */
  export interface Schema$Student {
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Global user information for the student. Read-only.
     */
    profile?: Schema$UserProfile;
    /**
     * Information about a Drive Folder for this student's work in this course. Only visible to the student and domain administrators. Read-only.
     */
    studentWorkFolder?: Schema$DriveFolder;
    /**
     * Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string | null;
  }
  /**
   * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
   */
  export interface Schema$StudentSubmission {
    /**
     * Absolute link to the submission in the Classroom web UI. Read-only.
     */
    alternateLink?: string | null;
    /**
     * Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.
     */
    assignedGrade?: number | null;
    /**
     * Submission content when course_work_type is ASSIGNMENT. Students can modify this content using ModifyAttachments.
     */
    assignmentSubmission?: Schema$AssignmentSubmission;
    /**
     * Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
     */
    associatedWithDeveloper?: boolean | null;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Identifier for the course work this corresponds to. Read-only.
     */
    courseWorkId?: string | null;
    /**
     * Type of course work this submission is for. Read-only.
     */
    courseWorkType?: string | null;
    /**
     * Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.
     */
    creationTime?: string | null;
    /**
     * Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.
     */
    draftGrade?: number | null;
    /**
     * Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.
     */
    id?: string | null;
    /**
     * Whether this submission is late. Read-only.
     */
    late?: boolean | null;
    /**
     * Submission content when course_work_type is MULTIPLE_CHOICE_QUESTION.
     */
    multipleChoiceSubmission?: Schema$MultipleChoiceSubmission;
    /**
     * Submission content when course_work_type is SHORT_ANSWER_QUESTION.
     */
    shortAnswerSubmission?: Schema$ShortAnswerSubmission;
    /**
     * State of this submission. Read-only.
     */
    state?: string | null;
    /**
     * The history of the submission (includes state and grade histories). Read-only.
     */
    submissionHistory?: Schema$SubmissionHistory[];
    /**
     * Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.
     */
    updateTime?: string | null;
    /**
     * Identifier for the student that owns this submission. Read-only.
     */
    userId?: string | null;
  }
  /**
   * The history of the submission. This currently includes state and grade histories.
   */
  export interface Schema$SubmissionHistory {
    /**
     * The grade history information of the submission, if present.
     */
    gradeHistory?: Schema$GradeHistory;
    /**
     * The state history information of the submission, if present.
     */
    stateHistory?: Schema$StateHistory;
  }
  /**
   * Teacher of a course.
   */
  export interface Schema$Teacher {
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * Global user information for the teacher. Read-only.
     */
    profile?: Schema$UserProfile;
    /**
     * Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * Topic created by a teacher for the course
   */
  export interface Schema$Topic {
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string | null;
    /**
     * The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.
     */
    name?: string | null;
    /**
     * Unique identifier for the topic. Read-only.
     */
    topicId?: string | null;
    /**
     * The time the topic was last updated by the system. Read-only.
     */
    updateTime?: string | null;
  }
  /**
   * Request to turn in a student submission.
   */
  export interface Schema$TurnInStudentSubmissionRequest {}
  /**
   * Global information for a user.
   */
  export interface Schema$UserProfile {
    /**
     * Email address of the user. Read-only.
     */
    emailAddress?: string | null;
    /**
     * Identifier of the user. Read-only.
     */
    id?: string | null;
    /**
     * Name of the user. Read-only.
     */
    name?: Schema$Name;
    /**
     * Global permissions of the user. Read-only.
     */
    permissions?: Schema$GlobalPermission[];
    /**
     * URL of user's profile photo. Read-only.
     */
    photoUrl?: string | null;
    /**
     * Represents whether a G Suite for Education user's domain administrator has explicitly verified them as being a teacher. If the user is not a member of a G Suite for Education domain, than this field is always false. Read-only
     */
    verifiedTeacher?: boolean | null;
  }
  /**
   * YouTube video item.
   */
  export interface Schema$YouTubeVideo {
    /**
     * URL that can be used to view the YouTube video. Read-only.
     */
    alternateLink?: string | null;
    /**
     * YouTube API resource ID.
     */
    id?: string | null;
    /**
     * URL of a thumbnail image of the YouTube video. Read-only.
     */
    thumbnailUrl?: string | null;
    /**
     * Title of the YouTube video. Read-only.
     */
    title?: string | null;
  }

  export class Resource$Courses {
    context: APIRequestContext;
    aliases: Resource$Courses$Aliases;
    announcements: Resource$Courses$Announcements;
    courseWork: Resource$Courses$Coursework;
    courseWorkMaterials: Resource$Courses$Courseworkmaterials;
    students: Resource$Courses$Students;
    teachers: Resource$Courses$Teachers;
    topics: Resource$Courses$Topics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.aliases = new Resource$Courses$Aliases(this.context);
      this.announcements = new Resource$Courses$Announcements(this.context);
      this.courseWork = new Resource$Courses$Coursework(this.context);
      this.courseWorkMaterials = new Resource$Courses$Courseworkmaterials(
        this.context
      );
      this.students = new Resource$Courses$Students(this.context);
      this.teachers = new Resource$Courses$Teachers(this.context);
      this.topics = new Resource$Courses$Topics(this.context);
    }

    /**
     * Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "calendarId": "my_calendarId",
     *       //   "courseGroupEmail": "my_courseGroupEmail",
     *       //   "courseMaterialSets": [],
     *       //   "courseState": "my_courseState",
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "descriptionHeading": "my_descriptionHeading",
     *       //   "enrollmentCode": "my_enrollmentCode",
     *       //   "gradebookSettings": {},
     *       //   "guardiansEnabled": false,
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "ownerId": "my_ownerId",
     *       //   "room": "my_room",
     *       //   "section": "my_section",
     *       //   "teacherFolder": {},
     *       //   "teacherGroupEmail": "my_teacherGroupEmail",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "calendarId": "my_calendarId",
     *   //   "courseGroupEmail": "my_courseGroupEmail",
     *   //   "courseMaterialSets": [],
     *   //   "courseState": "my_courseState",
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "descriptionHeading": "my_descriptionHeading",
     *   //   "enrollmentCode": "my_enrollmentCode",
     *   //   "gradebookSettings": {},
     *   //   "guardiansEnabled": false,
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "ownerId": "my_ownerId",
     *   //   "room": "my_room",
     *   //   "section": "my_section",
     *   //   "teacherFolder": {},
     *   //   "teacherGroupEmail": "my_teacherGroupEmail",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Course>;
    create(
      params: Params$Resource$Courses$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Course>,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    create(
      params: Params$Resource$Courses$Create,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    create(callback: BodyResponseCallback<Schema$Course>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Create
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Course> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Course>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Course>(parameters);
      }
    }

    /**
     * Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.delete({
     *     // Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.courses',
     *       'https://www.googleapis.com/auth/classroom.courses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.get({
     *     // Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "calendarId": "my_calendarId",
     *   //   "courseGroupEmail": "my_courseGroupEmail",
     *   //   "courseMaterialSets": [],
     *   //   "courseState": "my_courseState",
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "descriptionHeading": "my_descriptionHeading",
     *   //   "enrollmentCode": "my_enrollmentCode",
     *   //   "gradebookSettings": {},
     *   //   "guardiansEnabled": false,
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "ownerId": "my_ownerId",
     *   //   "room": "my_room",
     *   //   "section": "my_section",
     *   //   "teacherFolder": {},
     *   //   "teacherGroupEmail": "my_teacherGroupEmail",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Course>;
    get(
      params: Params$Resource$Courses$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Course>,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    get(
      params: Params$Resource$Courses$Get,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    get(callback: BodyResponseCallback<Schema$Course>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Get
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Course> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Course>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Course>(parameters);
      }
    }

    /**
     * Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.courses',
     *       'https://www.googleapis.com/auth/classroom.courses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.list({
     *     // Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
     *     courseStates: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *     // Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     studentId: 'placeholder-value',
     *     // Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     teacherId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courses": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCoursesResponse>;
    list(
      params: Params$Resource$Courses$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListCoursesResponse>,
      callback: BodyResponseCallback<Schema$ListCoursesResponse>
    ): void;
    list(
      params: Params$Resource$Courses$List,
      callback: BodyResponseCallback<Schema$ListCoursesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCoursesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$List
        | BodyResponseCallback<Schema$ListCoursesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCoursesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCoursesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCoursesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCoursesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCoursesResponse>(parameters);
      }
    }

    /**
     * Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.patch({
     *     // Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "calendarId": "my_calendarId",
     *       //   "courseGroupEmail": "my_courseGroupEmail",
     *       //   "courseMaterialSets": [],
     *       //   "courseState": "my_courseState",
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "descriptionHeading": "my_descriptionHeading",
     *       //   "enrollmentCode": "my_enrollmentCode",
     *       //   "gradebookSettings": {},
     *       //   "guardiansEnabled": false,
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "ownerId": "my_ownerId",
     *       //   "room": "my_room",
     *       //   "section": "my_section",
     *       //   "teacherFolder": {},
     *       //   "teacherGroupEmail": "my_teacherGroupEmail",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "calendarId": "my_calendarId",
     *   //   "courseGroupEmail": "my_courseGroupEmail",
     *   //   "courseMaterialSets": [],
     *   //   "courseState": "my_courseState",
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "descriptionHeading": "my_descriptionHeading",
     *   //   "enrollmentCode": "my_enrollmentCode",
     *   //   "gradebookSettings": {},
     *   //   "guardiansEnabled": false,
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "ownerId": "my_ownerId",
     *   //   "room": "my_room",
     *   //   "section": "my_section",
     *   //   "teacherFolder": {},
     *   //   "teacherGroupEmail": "my_teacherGroupEmail",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Course>;
    patch(
      params: Params$Resource$Courses$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Course>,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    patch(
      params: Params$Resource$Courses$Patch,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Course>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Patch
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Course> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Course>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Course>(parameters);
      }
    }

    /**
     * Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.update({
     *     // Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "calendarId": "my_calendarId",
     *       //   "courseGroupEmail": "my_courseGroupEmail",
     *       //   "courseMaterialSets": [],
     *       //   "courseState": "my_courseState",
     *       //   "creationTime": "my_creationTime",
     *       //   "description": "my_description",
     *       //   "descriptionHeading": "my_descriptionHeading",
     *       //   "enrollmentCode": "my_enrollmentCode",
     *       //   "gradebookSettings": {},
     *       //   "guardiansEnabled": false,
     *       //   "id": "my_id",
     *       //   "name": "my_name",
     *       //   "ownerId": "my_ownerId",
     *       //   "room": "my_room",
     *       //   "section": "my_section",
     *       //   "teacherFolder": {},
     *       //   "teacherGroupEmail": "my_teacherGroupEmail",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "calendarId": "my_calendarId",
     *   //   "courseGroupEmail": "my_courseGroupEmail",
     *   //   "courseMaterialSets": [],
     *   //   "courseState": "my_courseState",
     *   //   "creationTime": "my_creationTime",
     *   //   "description": "my_description",
     *   //   "descriptionHeading": "my_descriptionHeading",
     *   //   "enrollmentCode": "my_enrollmentCode",
     *   //   "gradebookSettings": {},
     *   //   "guardiansEnabled": false,
     *   //   "id": "my_id",
     *   //   "name": "my_name",
     *   //   "ownerId": "my_ownerId",
     *   //   "room": "my_room",
     *   //   "section": "my_section",
     *   //   "teacherFolder": {},
     *   //   "teacherGroupEmail": "my_teacherGroupEmail",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Courses$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Courses$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Course>;
    update(
      params: Params$Resource$Courses$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Courses$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Course>,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    update(
      params: Params$Resource$Courses$Update,
      callback: BodyResponseCallback<Schema$Course>
    ): void;
    update(callback: BodyResponseCallback<Schema$Course>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Courses$Update
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Course>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Course> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Courses$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{id}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Course>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Course>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Create extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Course;
  }
  export interface Params$Resource$Courses$Delete extends StandardParameters {
    /**
     * Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Get extends StandardParameters {
    /**
     * Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$List extends StandardParameters {
    /**
     * Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
     */
    courseStates?: string[];
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    studentId?: string;
    /**
     * Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    teacherId?: string;
  }
  export interface Params$Resource$Courses$Patch extends StandardParameters {
    /**
     * Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Course;
  }
  export interface Params$Resource$Courses$Update extends StandardParameters {
    /**
     * Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Course;
  }

  export class Resource$Courses$Aliases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.aliases.create({
     *     // Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alias": "my_alias"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Aliases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Aliases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseAlias>;
    create(
      params: Params$Resource$Courses$Aliases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Aliases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CourseAlias>,
      callback: BodyResponseCallback<Schema$CourseAlias>
    ): void;
    create(
      params: Params$Resource$Courses$Aliases$Create,
      callback: BodyResponseCallback<Schema$CourseAlias>
    ): void;
    create(callback: BodyResponseCallback<Schema$CourseAlias>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Aliases$Create
        | BodyResponseCallback<Schema$CourseAlias>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseAlias>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseAlias>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CourseAlias> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Aliases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Aliases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/aliases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseAlias>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseAlias>(parameters);
      }
    }

    /**
     * Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courses'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.aliases.delete({
     *     // Alias to delete. This may not be the Classroom-assigned identifier.
     *     alias: 'placeholder-value',
     *     // Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Aliases$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Aliases$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Aliases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Aliases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Aliases$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Aliases$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Aliases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Aliases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/aliases/{alias}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'alias'],
        pathParams: ['alias', 'courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.courses',
     *       'https://www.googleapis.com/auth/classroom.courses.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.aliases.list({
     *     // The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aliases": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Aliases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Aliases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCourseAliasesResponse>;
    list(
      params: Params$Resource$Courses$Aliases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Aliases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCourseAliasesResponse>,
      callback: BodyResponseCallback<Schema$ListCourseAliasesResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Aliases$List,
      callback: BodyResponseCallback<Schema$ListCourseAliasesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCourseAliasesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Aliases$List
        | BodyResponseCallback<Schema$ListCourseAliasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCourseAliasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCourseAliasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCourseAliasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Aliases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Aliases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/aliases').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCourseAliasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCourseAliasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Aliases$Create
    extends StandardParameters {
    /**
     * Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CourseAlias;
  }
  export interface Params$Resource$Courses$Aliases$Delete
    extends StandardParameters {
    /**
     * Alias to delete. This may not be the Classroom-assigned identifier.
     */
    alias?: string;
    /**
     * Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
  }
  export interface Params$Resource$Courses$Aliases$List
    extends StandardParameters {
    /**
     * The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }

  export class Resource$Courses$Announcements {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.announcements'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.create({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "text": "my_text",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "text": "my_text",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Announcements$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Announcements$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Announcement>;
    create(
      params: Params$Resource$Courses$Announcements$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Announcements$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Announcement>,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    create(
      params: Params$Resource$Courses$Announcements$Create,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    create(callback: BodyResponseCallback<Schema$Announcement>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$Create
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Announcement> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/announcements').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Announcement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Announcement>(parameters);
      }
    }

    /**
     * Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.announcements'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Announcements$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Announcements$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Announcements$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Announcements$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Announcements$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/announcements/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.announcements',
     *       'https://www.googleapis.com/auth/classroom.announcements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the announcement.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "text": "my_text",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Announcements$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Announcements$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Announcement>;
    get(
      params: Params$Resource$Courses$Announcements$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Announcements$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Announcement>,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    get(
      params: Params$Resource$Courses$Announcements$Get,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    get(callback: BodyResponseCallback<Schema$Announcement>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$Get
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Announcement> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/announcements/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Announcement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Announcement>(parameters);
      }
    }

    /**
     * Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.announcements',
     *       'https://www.googleapis.com/auth/classroom.announcements.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.list({
     *     // Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.
     *     announcementStates: 'placeholder-value',
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     *     orderBy: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "announcements": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Announcements$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Announcements$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAnnouncementsResponse>;
    list(
      params: Params$Resource$Courses$Announcements$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Announcements$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAnnouncementsResponse>,
      callback: BodyResponseCallback<Schema$ListAnnouncementsResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Announcements$List,
      callback: BodyResponseCallback<Schema$ListAnnouncementsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAnnouncementsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$List
        | BodyResponseCallback<Schema$ListAnnouncementsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAnnouncementsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAnnouncementsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAnnouncementsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/announcements').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAnnouncementsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAnnouncementsResponse>(parameters);
      }
    }

    /**
     * Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.announcements'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.modifyAssignees({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the announcement.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "modifyIndividualStudentsOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "text": "my_text",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    modifyAssignees(
      params: Params$Resource$Courses$Announcements$Modifyassignees,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifyAssignees(
      params?: Params$Resource$Courses$Announcements$Modifyassignees,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Announcement>;
    modifyAssignees(
      params: Params$Resource$Courses$Announcements$Modifyassignees,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyAssignees(
      params: Params$Resource$Courses$Announcements$Modifyassignees,
      options: MethodOptions | BodyResponseCallback<Schema$Announcement>,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    modifyAssignees(
      params: Params$Resource$Courses$Announcements$Modifyassignees,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    modifyAssignees(callback: BodyResponseCallback<Schema$Announcement>): void;
    modifyAssignees(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$Modifyassignees
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Announcement> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$Modifyassignees;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$Modifyassignees;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/announcements/{id}:modifyAssignees'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Announcement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Announcement>(parameters);
      }
    }

    /**
     * Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.announcements'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.announcements.patch({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the announcement.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "text": "my_text",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "text": "my_text",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Announcements$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Announcements$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Announcement>;
    patch(
      params: Params$Resource$Courses$Announcements$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Announcements$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Announcement>,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    patch(
      params: Params$Resource$Courses$Announcements$Patch,
      callback: BodyResponseCallback<Schema$Announcement>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Announcement>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Announcements$Patch
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Announcement>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Announcement> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Announcements$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Announcements$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/announcements/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Announcement>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Announcement>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Announcements$Create
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Announcement;
  }
  export interface Params$Resource$Courses$Announcements$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Announcements$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the announcement.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Announcements$List
    extends StandardParameters {
    /**
     * Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.
     */
    announcementStates?: string[];
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     */
    orderBy?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Courses$Announcements$Modifyassignees
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the announcement.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyAnnouncementAssigneesRequest;
  }
  export interface Params$Resource$Courses$Announcements$Patch
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the announcement.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Announcement;
  }

  export class Resource$Courses$Coursework {
    context: APIRequestContext;
    studentSubmissions: Resource$Courses$Coursework$Studentsubmissions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.studentSubmissions =
        new Resource$Courses$Coursework$Studentsubmissions(this.context);
    }

    /**
     * Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.students'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.create({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "assignment": {},
     *       //   "associatedWithDeveloper": false,
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "description": "my_description",
     *       //   "dueDate": {},
     *       //   "dueTime": {},
     *       //   "gradeCategory": {},
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "maxPoints": {},
     *       //   "multipleChoiceQuestion": {},
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "submissionModificationMode": "my_submissionModificationMode",
     *       //   "title": "my_title",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime",
     *       //   "workType": "my_workType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "assignment": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "dueDate": {},
     *   //   "dueTime": {},
     *   //   "gradeCategory": {},
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "maxPoints": {},
     *   //   "multipleChoiceQuestion": {},
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "submissionModificationMode": "my_submissionModificationMode",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime",
     *   //   "workType": "my_workType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Coursework$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Coursework$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWork>;
    create(
      params: Params$Resource$Courses$Coursework$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Coursework$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWork>,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    create(
      params: Params$Resource$Courses$Coursework$Create,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    create(callback: BodyResponseCallback<Schema$CourseWork>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Create
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CourseWork> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/courseWork').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWork>(parameters);
      }
    }

    /**
     * Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.students'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Coursework$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Coursework$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Coursework$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Coursework$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Coursework$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *       'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "assignment": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "dueDate": {},
     *   //   "dueTime": {},
     *   //   "gradeCategory": {},
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "maxPoints": {},
     *   //   "multipleChoiceQuestion": {},
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "submissionModificationMode": "my_submissionModificationMode",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime",
     *   //   "workType": "my_workType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Coursework$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Coursework$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWork>;
    get(
      params: Params$Resource$Courses$Coursework$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Coursework$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWork>,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    get(
      params: Params$Resource$Courses$Coursework$Get,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    get(callback: BodyResponseCallback<Schema$CourseWork>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Get
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CourseWork> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWork>(parameters);
      }
    }

    /**
     * Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *       'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     *     courseWorkStates: 'placeholder-value',
     *     // Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
     *     orderBy: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseWork": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Coursework$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Coursework$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCourseWorkResponse>;
    list(
      params: Params$Resource$Courses$Coursework$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Coursework$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCourseWorkResponse>,
      callback: BodyResponseCallback<Schema$ListCourseWorkResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Coursework$List,
      callback: BodyResponseCallback<Schema$ListCourseWorkResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCourseWorkResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$List
        | BodyResponseCallback<Schema$ListCourseWorkResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCourseWorkResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCourseWorkResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCourseWorkResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/courseWork').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCourseWorkResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCourseWorkResponse>(parameters);
      }
    }

    /**
     * Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.students'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.modifyAssignees({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the coursework.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "modifyIndividualStudentsOptions": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "assignment": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "dueDate": {},
     *   //   "dueTime": {},
     *   //   "gradeCategory": {},
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "maxPoints": {},
     *   //   "multipleChoiceQuestion": {},
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "submissionModificationMode": "my_submissionModificationMode",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime",
     *   //   "workType": "my_workType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    modifyAssignees(
      params: Params$Resource$Courses$Coursework$Modifyassignees,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifyAssignees(
      params?: Params$Resource$Courses$Coursework$Modifyassignees,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWork>;
    modifyAssignees(
      params: Params$Resource$Courses$Coursework$Modifyassignees,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyAssignees(
      params: Params$Resource$Courses$Coursework$Modifyassignees,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWork>,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    modifyAssignees(
      params: Params$Resource$Courses$Coursework$Modifyassignees,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    modifyAssignees(callback: BodyResponseCallback<Schema$CourseWork>): void;
    modifyAssignees(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Modifyassignees
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CourseWork> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Modifyassignees;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$Modifyassignees;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWork/{id}:modifyAssignees'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWork>(parameters);
      }
    }

    /**
     * Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.students'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.patch({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the CourseWork object. If a field that does not support empty values is included in the update mask and not set in the CourseWork object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "assignment": {},
     *       //   "associatedWithDeveloper": false,
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "description": "my_description",
     *       //   "dueDate": {},
     *       //   "dueTime": {},
     *       //   "gradeCategory": {},
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "maxPoints": {},
     *       //   "multipleChoiceQuestion": {},
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "submissionModificationMode": "my_submissionModificationMode",
     *       //   "title": "my_title",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime",
     *       //   "workType": "my_workType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "assignment": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "dueDate": {},
     *   //   "dueTime": {},
     *   //   "gradeCategory": {},
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "maxPoints": {},
     *   //   "multipleChoiceQuestion": {},
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "submissionModificationMode": "my_submissionModificationMode",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime",
     *   //   "workType": "my_workType"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Coursework$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Coursework$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWork>;
    patch(
      params: Params$Resource$Courses$Coursework$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Coursework$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWork>,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    patch(
      params: Params$Resource$Courses$Coursework$Patch,
      callback: BodyResponseCallback<Schema$CourseWork>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CourseWork>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Patch
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWork>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CourseWork> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Coursework$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/courseWork/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWork>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWork>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Coursework$Create
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CourseWork;
  }
  export interface Params$Resource$Courses$Coursework$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Coursework$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Coursework$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     */
    courseWorkStates?: string[];
    /**
     * Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
     */
    orderBy?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Courses$Coursework$Modifyassignees
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the coursework.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyCourseWorkAssigneesRequest;
  }
  export interface Params$Resource$Courses$Coursework$Patch
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the CourseWork object. If a field that does not support empty values is included in the update mask and not set in the CourseWork object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CourseWork;
  }

  export class Resource$Courses$Coursework$Studentsubmissions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *       'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
     *       'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     courseWorkId: 'placeholder-value',
     *     // Identifier of the student submission.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assignedGrade": {},
     *   //   "assignmentSubmission": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "courseWorkId": "my_courseWorkId",
     *   //   "courseWorkType": "my_courseWorkType",
     *   //   "creationTime": "my_creationTime",
     *   //   "draftGrade": {},
     *   //   "id": "my_id",
     *   //   "late": false,
     *   //   "multipleChoiceSubmission": {},
     *   //   "shortAnswerSubmission": {},
     *   //   "state": "my_state",
     *   //   "submissionHistory": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StudentSubmission>;
    get(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$StudentSubmission>,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    get(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Get,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    get(callback: BodyResponseCallback<Schema$StudentSubmission>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Get
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StudentSubmission>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StudentSubmission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StudentSubmission>(parameters);
      }
    }

    /**
     * Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *       'https://www.googleapis.com/auth/classroom.coursework.students.readonly',
     *       'https://www.googleapis.com/auth/classroom.student-submissions.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
     *     courseWorkId: 'placeholder-value',
     *     // Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
     *     late: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *     // Requested submission states. If specified, returned student submissions match one of the specified submission states.
     *     states: 'placeholder-value',
     *     // Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "studentSubmissions": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListStudentSubmissionsResponse>;
    list(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStudentSubmissionsResponse>,
      callback: BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$List,
      callback: BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$List
        | BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStudentSubmissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListStudentSubmissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId'],
        pathParams: ['courseId', 'courseWorkId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListStudentSubmissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStudentSubmissionsResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await classroom.courses.courseWork.studentSubmissions.modifyAttachments({
     *       // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *       courseId: 'placeholder-value',
     *       // Identifier of the course work.
     *       courseWorkId: 'placeholder-value',
     *       // Identifier of the student submission.
     *       id: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "addAttachments": []
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assignedGrade": {},
     *   //   "assignmentSubmission": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "courseWorkId": "my_courseWorkId",
     *   //   "courseWorkType": "my_courseWorkType",
     *   //   "creationTime": "my_creationTime",
     *   //   "draftGrade": {},
     *   //   "id": "my_id",
     *   //   "late": false,
     *   //   "multipleChoiceSubmission": {},
     *   //   "shortAnswerSubmission": {},
     *   //   "state": "my_state",
     *   //   "submissionHistory": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    modifyAttachments(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    modifyAttachments(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StudentSubmission>;
    modifyAttachments(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    modifyAttachments(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments,
      options: MethodOptions | BodyResponseCallback<Schema$StudentSubmission>,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    modifyAttachments(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    modifyAttachments(
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    modifyAttachments(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StudentSubmission>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StudentSubmission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StudentSubmission>(parameters);
      }
    }

    /**
     * Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.coursework.me',
     *       'https://www.googleapis.com/auth/classroom.coursework.students',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.patch({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     courseWorkId: 'placeholder-value',
     *     // Identifier of the student submission.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assignedGrade": {},
     *       //   "assignmentSubmission": {},
     *       //   "associatedWithDeveloper": false,
     *       //   "courseId": "my_courseId",
     *       //   "courseWorkId": "my_courseWorkId",
     *       //   "courseWorkType": "my_courseWorkType",
     *       //   "creationTime": "my_creationTime",
     *       //   "draftGrade": {},
     *       //   "id": "my_id",
     *       //   "late": false,
     *       //   "multipleChoiceSubmission": {},
     *       //   "shortAnswerSubmission": {},
     *       //   "state": "my_state",
     *       //   "submissionHistory": [],
     *       //   "updateTime": "my_updateTime",
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assignedGrade": {},
     *   //   "assignmentSubmission": {},
     *   //   "associatedWithDeveloper": false,
     *   //   "courseId": "my_courseId",
     *   //   "courseWorkId": "my_courseWorkId",
     *   //   "courseWorkType": "my_courseWorkType",
     *   //   "creationTime": "my_creationTime",
     *   //   "draftGrade": {},
     *   //   "id": "my_id",
     *   //   "late": false,
     *   //   "multipleChoiceSubmission": {},
     *   //   "shortAnswerSubmission": {},
     *   //   "state": "my_state",
     *   //   "submissionHistory": [],
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StudentSubmission>;
    patch(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$StudentSubmission>,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    patch(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Patch,
      callback: BodyResponseCallback<Schema$StudentSubmission>
    ): void;
    patch(callback: BodyResponseCallback<Schema$StudentSubmission>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Patch
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StudentSubmission>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StudentSubmission>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$StudentSubmission>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StudentSubmission>(parameters);
      }
    }

    /**
     * Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.me'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.reclaim({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     courseWorkId: 'placeholder-value',
     *     // Identifier of the student submission.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reclaim(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reclaim(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    reclaim(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reclaim(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reclaim(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    reclaim(callback: BodyResponseCallback<Schema$Empty>): void;
    reclaim(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.students'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.return({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     courseWorkId: 'placeholder-value',
     *     // Identifier of the student submission.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    return(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Return,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    return(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Return,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    return(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Return,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    return(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Return,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    return(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Return,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    return(callback: BodyResponseCallback<Schema$Empty>): void;
    return(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Return
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Return;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Return;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.coursework.me'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWork.studentSubmissions.turnIn({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work.
     *     courseWorkId: 'placeholder-value',
     *     // Identifier of the student submission.
     *     id: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    turnIn(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Turnin,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    turnIn(
      params?: Params$Resource$Courses$Coursework$Studentsubmissions$Turnin,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    turnIn(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Turnin,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    turnIn(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Turnin,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    turnIn(
      params: Params$Resource$Courses$Coursework$Studentsubmissions$Turnin,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    turnIn(callback: BodyResponseCallback<Schema$Empty>): void;
    turnIn(
      paramsOrCallback?:
        | Params$Resource$Courses$Coursework$Studentsubmissions$Turnin
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Coursework$Studentsubmissions$Turnin;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Courses$Coursework$Studentsubmissions$Turnin;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'courseWorkId', 'id'],
        pathParams: ['courseId', 'courseWorkId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
     */
    courseWorkId?: string;
    /**
     * Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
     */
    late?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * Requested submission states. If specified, returned student submissions match one of the specified submission states.
     */
    states?: string[];
    /**
     * Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Modifyattachments
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ModifyAttachmentsRequest;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Patch
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StudentSubmission;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Reclaim
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReclaimStudentSubmissionRequest;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Return
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReturnStudentSubmissionRequest;
  }
  export interface Params$Resource$Courses$Coursework$Studentsubmissions$Turnin
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work.
     */
    courseWorkId?: string;
    /**
     * Identifier of the student submission.
     */
    id?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TurnInStudentSubmissionRequest;
  }

  export class Resource$Courses$Courseworkmaterials {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWorkMaterials.create({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "title": "my_title",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Courseworkmaterials$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Courseworkmaterials$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWorkMaterial>;
    create(
      params: Params$Resource$Courses$Courseworkmaterials$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Courseworkmaterials$Create,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWorkMaterial>,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    create(
      params: Params$Resource$Courses$Courseworkmaterials$Create,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    create(callback: BodyResponseCallback<Schema$CourseWorkMaterial>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Courseworkmaterials$Create
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CourseWorkMaterial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Courseworkmaterials$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Courseworkmaterials$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWorkMaterials'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWorkMaterial>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWorkMaterial>(parameters);
      }
    }

    /**
     * Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWorkMaterials.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Courseworkmaterials$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Courseworkmaterials$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Courseworkmaterials$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Courseworkmaterials$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Courseworkmaterials$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Courseworkmaterials$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Courseworkmaterials$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Courseworkmaterials$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWorkMaterials/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.courseworkmaterials',
     *       'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWorkMaterials.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work material.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Courseworkmaterials$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Courseworkmaterials$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWorkMaterial>;
    get(
      params: Params$Resource$Courses$Courseworkmaterials$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Courseworkmaterials$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWorkMaterial>,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    get(
      params: Params$Resource$Courses$Courseworkmaterials$Get,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    get(callback: BodyResponseCallback<Schema$CourseWorkMaterial>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Courseworkmaterials$Get
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CourseWorkMaterial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Courseworkmaterials$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Courseworkmaterials$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWorkMaterials/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWorkMaterial>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWorkMaterial>(parameters);
      }
    }

    /**
     * Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.courseworkmaterials',
     *       'https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWorkMaterials.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     *     courseWorkMaterialStates: 'placeholder-value',
     *     // Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
     *     materialDriveId: 'placeholder-value',
     *     // Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
     *     materialLink: 'placeholder-value',
     *     // Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     *     orderBy: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseWorkMaterial": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Courseworkmaterials$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Courseworkmaterials$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCourseWorkMaterialResponse>;
    list(
      params: Params$Resource$Courses$Courseworkmaterials$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Courseworkmaterials$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>,
      callback: BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Courseworkmaterials$List,
      callback: BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Courseworkmaterials$List
        | BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCourseWorkMaterialResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCourseWorkMaterialResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Courseworkmaterials$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Courseworkmaterials$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWorkMaterials'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListCourseWorkMaterialResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCourseWorkMaterialResponse>(
          parameters
        );
      }
    }

    /**
     * Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.courseworkmaterials'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.courseWorkMaterials.patch({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the course work material.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "alternateLink": "my_alternateLink",
     *       //   "assigneeMode": "my_assigneeMode",
     *       //   "courseId": "my_courseId",
     *       //   "creationTime": "my_creationTime",
     *       //   "creatorUserId": "my_creatorUserId",
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "individualStudentsOptions": {},
     *       //   "materials": [],
     *       //   "scheduledTime": "my_scheduledTime",
     *       //   "state": "my_state",
     *       //   "title": "my_title",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alternateLink": "my_alternateLink",
     *   //   "assigneeMode": "my_assigneeMode",
     *   //   "courseId": "my_courseId",
     *   //   "creationTime": "my_creationTime",
     *   //   "creatorUserId": "my_creatorUserId",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "individualStudentsOptions": {},
     *   //   "materials": [],
     *   //   "scheduledTime": "my_scheduledTime",
     *   //   "state": "my_state",
     *   //   "title": "my_title",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Courseworkmaterials$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Courseworkmaterials$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CourseWorkMaterial>;
    patch(
      params: Params$Resource$Courses$Courseworkmaterials$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Courseworkmaterials$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CourseWorkMaterial>,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    patch(
      params: Params$Resource$Courses$Courseworkmaterials$Patch,
      callback: BodyResponseCallback<Schema$CourseWorkMaterial>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CourseWorkMaterial>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Courseworkmaterials$Patch
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CourseWorkMaterial>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CourseWorkMaterial>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Courseworkmaterials$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Courseworkmaterials$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/courses/{courseId}/courseWorkMaterials/{id}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CourseWorkMaterial>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CourseWorkMaterial>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Courseworkmaterials$Create
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CourseWorkMaterial;
  }
  export interface Params$Resource$Courses$Courseworkmaterials$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Courseworkmaterials$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work material.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Courseworkmaterials$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     */
    courseWorkMaterialStates?: string[];
    /**
     * Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
     */
    materialDriveId?: string;
    /**
     * Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
     */
    materialLink?: string;
    /**
     * Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     */
    orderBy?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Courses$Courseworkmaterials$Patch
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the course work material.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CourseWorkMaterial;
  }

  export class Resource$Courses$Students {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.students.create({
     *     // Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
     *     enrollmentCode: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "courseId": "my_courseId",
     *       //   "profile": {},
     *       //   "studentWorkFolder": {},
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "profile": {},
     *   //   "studentWorkFolder": {},
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Students$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Students$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Student>;
    create(
      params: Params$Resource$Courses$Students$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Students$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Student>,
      callback: BodyResponseCallback<Schema$Student>
    ): void;
    create(
      params: Params$Resource$Courses$Students$Create,
      callback: BodyResponseCallback<Schema$Student>
    ): void;
    create(callback: BodyResponseCallback<Schema$Student>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Students$Create
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Student> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Students$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Students$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/students').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Student>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Student>(parameters);
      }
    }

    /**
     * Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.rosters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.students.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Students$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Students$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Students$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Students$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Students$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Students$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Students$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Students$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/students/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'userId'],
        pathParams: ['courseId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.students.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "profile": {},
     *   //   "studentWorkFolder": {},
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Students$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Students$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Student>;
    get(
      params: Params$Resource$Courses$Students$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Students$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Student>,
      callback: BodyResponseCallback<Schema$Student>
    ): void;
    get(
      params: Params$Resource$Courses$Students$Get,
      callback: BodyResponseCallback<Schema$Student>
    ): void;
    get(callback: BodyResponseCallback<Schema$Student>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Students$Get
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Student>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Student> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Students$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Students$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/students/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'userId'],
        pathParams: ['courseId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Student>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Student>(parameters);
      }
    }

    /**
     * Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.students.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "students": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Students$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Students$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListStudentsResponse>;
    list(
      params: Params$Resource$Courses$Students$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Students$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListStudentsResponse>,
      callback: BodyResponseCallback<Schema$ListStudentsResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Students$List,
      callback: BodyResponseCallback<Schema$ListStudentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListStudentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Students$List
        | BodyResponseCallback<Schema$ListStudentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListStudentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListStudentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListStudentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Students$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Students$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/students').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListStudentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListStudentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Students$Create
    extends StandardParameters {
    /**
     * Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
     */
    enrollmentCode?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Student;
  }
  export interface Params$Resource$Courses$Students$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }
  export interface Params$Resource$Courses$Students$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }
  export interface Params$Resource$Courses$Students$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }

  export class Resource$Courses$Teachers {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.teachers.create({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "courseId": "my_courseId",
     *       //   "profile": {},
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "profile": {},
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Teachers$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Teachers$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Teacher>;
    create(
      params: Params$Resource$Courses$Teachers$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Teachers$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Teacher>,
      callback: BodyResponseCallback<Schema$Teacher>
    ): void;
    create(
      params: Params$Resource$Courses$Teachers$Create,
      callback: BodyResponseCallback<Schema$Teacher>
    ): void;
    create(callback: BodyResponseCallback<Schema$Teacher>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Teachers$Create
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Teacher> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Teachers$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Teachers$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/teachers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Teacher>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Teacher>(parameters);
      }
    }

    /**
     * Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.rosters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.teachers.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Teachers$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Teachers$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Teachers$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Teachers$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Teachers$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Teachers$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Teachers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Teachers$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'userId'],
        pathParams: ['courseId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.teachers.get({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "profile": {},
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Teachers$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Teachers$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Teacher>;
    get(
      params: Params$Resource$Courses$Teachers$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Teachers$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Teacher>,
      callback: BodyResponseCallback<Schema$Teacher>
    ): void;
    get(
      params: Params$Resource$Courses$Teachers$Get,
      callback: BodyResponseCallback<Schema$Teacher>
    ): void;
    get(callback: BodyResponseCallback<Schema$Teacher>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Teachers$Get
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Teacher>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Teacher> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Teachers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Teachers$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/teachers/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'userId'],
        pathParams: ['courseId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Teacher>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Teacher>(parameters);
      }
    }

    /**
     * Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.teachers.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "teachers": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Teachers$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Teachers$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTeachersResponse>;
    list(
      params: Params$Resource$Courses$Teachers$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Teachers$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTeachersResponse>,
      callback: BodyResponseCallback<Schema$ListTeachersResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Teachers$List,
      callback: BodyResponseCallback<Schema$ListTeachersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTeachersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Teachers$List
        | BodyResponseCallback<Schema$ListTeachersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTeachersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTeachersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTeachersResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Teachers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Teachers$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/teachers').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTeachersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTeachersResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Teachers$Create
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Teacher;
  }
  export interface Params$Resource$Courses$Teachers$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }
  export interface Params$Resource$Courses$Teachers$Get
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }
  export interface Params$Resource$Courses$Teachers$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }

  export class Resource$Courses$Topics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.topics'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.topics.create({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "courseId": "my_courseId",
     *       //   "name": "my_name",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "name": "my_name",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Courses$Topics$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Courses$Topics$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    create(
      params: Params$Resource$Courses$Topics$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Courses$Topics$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(
      params: Params$Resource$Courses$Topics$Create,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(callback: BodyResponseCallback<Schema$Topic>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Courses$Topics$Create
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Topics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Topics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/topics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.topics'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.topics.delete({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the topic to delete.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Courses$Topics$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Courses$Topics$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Courses$Topics$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Courses$Topics$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Courses$Topics$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Courses$Topics$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Topics$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Topics$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.topics',
     *       'https://www.googleapis.com/auth/classroom.topics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.topics.get({
     *     // Identifier of the course.
     *     courseId: 'placeholder-value',
     *     // Identifier of the topic.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "name": "my_name",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Courses$Topics$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Courses$Topics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    get(
      params: Params$Resource$Courses$Topics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Courses$Topics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(
      params: Params$Resource$Courses$Topics$Get,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(callback: BodyResponseCallback<Schema$Topic>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Courses$Topics$Get
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Topics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Topics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.topics',
     *       'https://www.googleapis.com/auth/classroom.topics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.topics.list({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "topic": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Courses$Topics$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Courses$Topics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTopicResponse>;
    list(
      params: Params$Resource$Courses$Topics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Courses$Topics$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTopicResponse>,
      callback: BodyResponseCallback<Schema$ListTopicResponse>
    ): void;
    list(
      params: Params$Resource$Courses$Topics$List,
      callback: BodyResponseCallback<Schema$ListTopicResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTopicResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Courses$Topics$List
        | BodyResponseCallback<Schema$ListTopicResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTopicResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTopicResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTopicResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Topics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Topics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/topics').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['courseId'],
        pathParams: ['courseId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListTopicResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTopicResponse>(parameters);
      }
    }

    /**
     * Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.topics'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.courses.topics.patch({
     *     // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     *     courseId: 'placeholder-value',
     *     // Identifier of the topic.
     *     id: 'placeholder-value',
     *     // Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "courseId": "my_courseId",
     *       //   "name": "my_name",
     *       //   "topicId": "my_topicId",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "name": "my_name",
     *   //   "topicId": "my_topicId",
     *   //   "updateTime": "my_updateTime"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Courses$Topics$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Courses$Topics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Topic>;
    patch(
      params: Params$Resource$Courses$Topics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Courses$Topics$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(
      params: Params$Resource$Courses$Topics$Patch,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Topic>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Courses$Topics$Patch
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Topic> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Courses$Topics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Courses$Topics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/courses/{courseId}/topics/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['courseId', 'id'],
        pathParams: ['courseId', 'id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }
  }

  export interface Params$Resource$Courses$Topics$Create
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }
  export interface Params$Resource$Courses$Topics$Delete
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the topic to delete.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Topics$Get
    extends StandardParameters {
    /**
     * Identifier of the course.
     */
    courseId?: string;
    /**
     * Identifier of the topic.
     */
    id?: string;
  }
  export interface Params$Resource$Courses$Topics$List
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Courses$Topics$Patch
    extends StandardParameters {
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId?: string;
    /**
     * Identifier of the topic.
     */
    id?: string;
    /**
     * Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }

  export class Resource$Invitations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.rosters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.invitations.accept({
     *     // Identifier of the invitation to accept.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    accept(
      params: Params$Resource$Invitations$Accept,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    accept(
      params?: Params$Resource$Invitations$Accept,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    accept(
      params: Params$Resource$Invitations$Accept,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    accept(
      params: Params$Resource$Invitations$Accept,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(
      params: Params$Resource$Invitations$Accept,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    accept(callback: BodyResponseCallback<Schema$Empty>): void;
    accept(
      paramsOrCallback?:
        | Params$Resource$Invitations$Accept
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Invitations$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Invitations$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/invitations/{id}:accept').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.rosters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.invitations.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "courseId": "my_courseId",
     *       //   "id": "my_id",
     *       //   "role": "my_role",
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "id": "my_id",
     *   //   "role": "my_role",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Invitations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Invitations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Invitation>;
    create(
      params: Params$Resource$Invitations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Invitations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Invitation>,
      callback: BodyResponseCallback<Schema$Invitation>
    ): void;
    create(
      params: Params$Resource$Invitations$Create,
      callback: BodyResponseCallback<Schema$Invitation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Invitation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Invitations$Create
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Invitation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Invitations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Invitations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Invitation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Invitation>(parameters);
      }
    }

    /**
     * Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.rosters'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.invitations.delete({
     *     // Identifier of the invitation to delete.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Invitations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Invitations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Invitations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Invitations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Invitations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Invitations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Invitations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Invitations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/invitations/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.invitations.get({
     *     // Identifier of the invitation to return.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "courseId": "my_courseId",
     *   //   "id": "my_id",
     *   //   "role": "my_role",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Invitations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Invitations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Invitation>;
    get(
      params: Params$Resource$Invitations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Invitations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Invitation>,
      callback: BodyResponseCallback<Schema$Invitation>
    ): void;
    get(
      params: Params$Resource$Invitations$Get,
      callback: BodyResponseCallback<Schema$Invitation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Invitation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Invitations$Get
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Invitation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Invitation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Invitations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Invitations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/invitations/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Invitation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Invitation>(parameters);
      }
    }

    /**
     * Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.invitations.list({
     *     // Restricts returned invitations to those for a course with the specified identifier.
     *     courseId: 'placeholder-value',
     *     // Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *     // Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "invitations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Invitations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Invitations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInvitationsResponse>;
    list(
      params: Params$Resource$Invitations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Invitations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInvitationsResponse>,
      callback: BodyResponseCallback<Schema$ListInvitationsResponse>
    ): void;
    list(
      params: Params$Resource$Invitations$List,
      callback: BodyResponseCallback<Schema$ListInvitationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInvitationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Invitations$List
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListInvitationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListInvitationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Invitations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Invitations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/invitations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListInvitationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListInvitationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Invitations$Accept
    extends StandardParameters {
    /**
     * Identifier of the invitation to accept.
     */
    id?: string;
  }
  export interface Params$Resource$Invitations$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Invitation;
  }
  export interface Params$Resource$Invitations$Delete
    extends StandardParameters {
    /**
     * Identifier of the invitation to delete.
     */
    id?: string;
  }
  export interface Params$Resource$Invitations$Get extends StandardParameters {
    /**
     * Identifier of the invitation to return.
     */
    id?: string;
  }
  export interface Params$Resource$Invitations$List extends StandardParameters {
    /**
     * Restricts returned invitations to those for a course with the specified identifier.
     */
    courseId?: string;
    /**
     * Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }

  export class Resource$Registrations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.push-notifications'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.registrations.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cloudPubsubTopic": {},
     *       //   "expiryTime": "my_expiryTime",
     *       //   "feed": {},
     *       //   "registrationId": "my_registrationId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cloudPubsubTopic": {},
     *   //   "expiryTime": "my_expiryTime",
     *   //   "feed": {},
     *   //   "registrationId": "my_registrationId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Registrations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Registrations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Registration>;
    create(
      params: Params$Resource$Registrations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Registrations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Registration>,
      callback: BodyResponseCallback<Schema$Registration>
    ): void;
    create(
      params: Params$Resource$Registrations$Create,
      callback: BodyResponseCallback<Schema$Registration>
    ): void;
    create(callback: BodyResponseCallback<Schema$Registration>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Registrations$Create
        | BodyResponseCallback<Schema$Registration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Registration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Registration>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Registration> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Registrations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Registrations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/registrations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Registration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Registration>(parameters);
      }
    }

    /**
     * Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/classroom.push-notifications'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.registrations.delete({
     *     // The `registration_id` of the `Registration` to be deleted.
     *     registrationId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Registrations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Registrations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Registrations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Registrations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Registrations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Registrations$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Registrations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Registrations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/registrations/{registrationId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['registrationId'],
        pathParams: ['registrationId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Registrations$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Registration;
  }
  export interface Params$Resource$Registrations$Delete
    extends StandardParameters {
    /**
     * The `registration_id` of the `Registration` to be deleted.
     */
    registrationId?: string;
  }

  export class Resource$Userprofiles {
    context: APIRequestContext;
    guardianInvitations: Resource$Userprofiles$Guardianinvitations;
    guardians: Resource$Userprofiles$Guardians;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.guardianInvitations = new Resource$Userprofiles$Guardianinvitations(
        this.context
      );
      this.guardians = new Resource$Userprofiles$Guardians(this.context);
    }

    /**
     * Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.profile.emails',
     *       'https://www.googleapis.com/auth/classroom.profile.photos',
     *       'https://www.googleapis.com/auth/classroom.rosters',
     *       'https://www.googleapis.com/auth/classroom.rosters.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.get({
     *     // Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     userId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "emailAddress": "my_emailAddress",
     *   //   "id": "my_id",
     *   //   "name": {},
     *   //   "permissions": [],
     *   //   "photoUrl": "my_photoUrl",
     *   //   "verifiedTeacher": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Userprofiles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userprofiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserProfile>;
    get(
      params: Params$Resource$Userprofiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UserProfile>,
      callback: BodyResponseCallback<Schema$UserProfile>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Get,
      callback: BodyResponseCallback<Schema$UserProfile>
    ): void;
    get(callback: BodyResponseCallback<Schema$UserProfile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Get
        | BodyResponseCallback<Schema$UserProfile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserProfile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserProfile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UserProfile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/userProfiles/{userId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UserProfile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserProfile>(parameters);
      }
    }
  }

  export interface Params$Resource$Userprofiles$Get extends StandardParameters {
    /**
     * Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
  }

  export class Resource$Userprofiles$Guardianinvitations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardianInvitations.create({
     *     // ID of the student (in standard format)
     *     studentId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "invitationId": "my_invitationId",
     *       //   "invitedEmailAddress": "my_invitedEmailAddress",
     *       //   "state": "my_state",
     *       //   "studentId": "my_studentId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "invitationId": "my_invitationId",
     *   //   "invitedEmailAddress": "my_invitedEmailAddress",
     *   //   "state": "my_state",
     *   //   "studentId": "my_studentId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Userprofiles$Guardianinvitations$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Userprofiles$Guardianinvitations$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GuardianInvitation>;
    create(
      params: Params$Resource$Userprofiles$Guardianinvitations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Userprofiles$Guardianinvitations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$GuardianInvitation>,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    create(
      params: Params$Resource$Userprofiles$Guardianinvitations$Create,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    create(callback: BodyResponseCallback<Schema$GuardianInvitation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardianinvitations$Create
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GuardianInvitation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardianinvitations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardianinvitations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/userProfiles/{studentId}/guardianInvitations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['studentId'],
        pathParams: ['studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GuardianInvitation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuardianInvitation>(parameters);
      }
    }

    /**
     * Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardianInvitations.get({
     *     // The `id` field of the `GuardianInvitation` being requested.
     *     invitationId: 'placeholder-value',
     *     // The ID of the student whose guardian invitation is being requested.
     *     studentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "invitationId": "my_invitationId",
     *   //   "invitedEmailAddress": "my_invitedEmailAddress",
     *   //   "state": "my_state",
     *   //   "studentId": "my_studentId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Userprofiles$Guardianinvitations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userprofiles$Guardianinvitations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GuardianInvitation>;
    get(
      params: Params$Resource$Userprofiles$Guardianinvitations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Guardianinvitations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GuardianInvitation>,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Guardianinvitations$Get,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    get(callback: BodyResponseCallback<Schema$GuardianInvitation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardianinvitations$Get
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GuardianInvitation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardianinvitations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardianinvitations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['studentId', 'invitationId'],
        pathParams: ['invitationId', 'studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GuardianInvitation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuardianInvitation>(parameters);
      }
    }

    /**
     * Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardianInvitations.list({
     *     // If specified, only results with the specified `invited_email_address` are returned.
     *     invitedEmailAddress: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *     // If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
     *     states: 'placeholder-value',
     *     // The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
     *     studentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "guardianInvitations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Userprofiles$Guardianinvitations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Userprofiles$Guardianinvitations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGuardianInvitationsResponse>;
    list(
      params: Params$Resource$Userprofiles$Guardianinvitations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Userprofiles$Guardianinvitations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGuardianInvitationsResponse>,
      callback: BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
    ): void;
    list(
      params: Params$Resource$Userprofiles$Guardianinvitations$List,
      callback: BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardianinvitations$List
        | BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGuardianInvitationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGuardianInvitationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardianinvitations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardianinvitations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/userProfiles/{studentId}/guardianInvitations'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['studentId'],
        pathParams: ['studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGuardianInvitationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGuardianInvitationsResponse>(
          parameters
        );
      }
    }

    /**
     * Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardianInvitations.patch({
     *     // The `id` field of the `GuardianInvitation` to be modified.
     *     invitationId: 'placeholder-value',
     *     // The ID of the student whose guardian invitation is to be modified.
     *     studentId: 'placeholder-value',
     *     // Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "creationTime": "my_creationTime",
     *       //   "invitationId": "my_invitationId",
     *       //   "invitedEmailAddress": "my_invitedEmailAddress",
     *       //   "state": "my_state",
     *       //   "studentId": "my_studentId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "creationTime": "my_creationTime",
     *   //   "invitationId": "my_invitationId",
     *   //   "invitedEmailAddress": "my_invitedEmailAddress",
     *   //   "state": "my_state",
     *   //   "studentId": "my_studentId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Userprofiles$Guardianinvitations$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Userprofiles$Guardianinvitations$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GuardianInvitation>;
    patch(
      params: Params$Resource$Userprofiles$Guardianinvitations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Userprofiles$Guardianinvitations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$GuardianInvitation>,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    patch(
      params: Params$Resource$Userprofiles$Guardianinvitations$Patch,
      callback: BodyResponseCallback<Schema$GuardianInvitation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$GuardianInvitation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardianinvitations$Patch
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuardianInvitation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GuardianInvitation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardianinvitations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardianinvitations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1/userProfiles/{studentId}/guardianInvitations/{invitationId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['studentId', 'invitationId'],
        pathParams: ['invitationId', 'studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GuardianInvitation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GuardianInvitation>(parameters);
      }
    }
  }

  export interface Params$Resource$Userprofiles$Guardianinvitations$Create
    extends StandardParameters {
    /**
     * ID of the student (in standard format)
     */
    studentId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GuardianInvitation;
  }
  export interface Params$Resource$Userprofiles$Guardianinvitations$Get
    extends StandardParameters {
    /**
     * The `id` field of the `GuardianInvitation` being requested.
     */
    invitationId?: string;
    /**
     * The ID of the student whose guardian invitation is being requested.
     */
    studentId?: string;
  }
  export interface Params$Resource$Userprofiles$Guardianinvitations$List
    extends StandardParameters {
    /**
     * If specified, only results with the specified `invited_email_address` are returned.
     */
    invitedEmailAddress?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
     */
    states?: string[];
    /**
     * The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
     */
    studentId?: string;
  }
  export interface Params$Resource$Userprofiles$Guardianinvitations$Patch
    extends StandardParameters {
    /**
     * The `id` field of the `GuardianInvitation` to be modified.
     */
    invitationId?: string;
    /**
     * The ID of the student whose guardian invitation is to be modified.
     */
    studentId?: string;
    /**
     * Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GuardianInvitation;
  }

  export class Resource$Userprofiles$Guardians {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardians.delete({
     *     // The `id` field from a `Guardian`.
     *     guardianId: 'placeholder-value',
     *     // The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     studentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Userprofiles$Guardians$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Userprofiles$Guardians$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Userprofiles$Guardians$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Userprofiles$Guardians$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Userprofiles$Guardians$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardians$Delete
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardians$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardians$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/userProfiles/{studentId}/guardians/{guardianId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['studentId', 'guardianId'],
        pathParams: ['guardianId', 'studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardians.get({
     *     // The `id` field from a `Guardian`.
     *     guardianId: 'placeholder-value',
     *     // The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     *     studentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "guardianId": "my_guardianId",
     *   //   "guardianProfile": {},
     *   //   "invitedEmailAddress": "my_invitedEmailAddress",
     *   //   "studentId": "my_studentId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Userprofiles$Guardians$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Userprofiles$Guardians$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Guardian>;
    get(
      params: Params$Resource$Userprofiles$Guardians$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Guardians$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Guardian>,
      callback: BodyResponseCallback<Schema$Guardian>
    ): void;
    get(
      params: Params$Resource$Userprofiles$Guardians$Get,
      callback: BodyResponseCallback<Schema$Guardian>
    ): void;
    get(callback: BodyResponseCallback<Schema$Guardian>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardians$Get
        | BodyResponseCallback<Schema$Guardian>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Guardian>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Guardian>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Guardian> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardians$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardians$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/userProfiles/{studentId}/guardians/{guardianId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['studentId', 'guardianId'],
        pathParams: ['guardianId', 'studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Guardian>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Guardian>(parameters);
      }
    }

    /**
     * Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/classroom.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const classroom = google.classroom('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students',
     *       'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await classroom.userProfiles.guardians.list({
     *     // Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.
     *     invitedEmailAddress: 'placeholder-value',
     *     // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     *     pageSize: 'placeholder-value',
     *     // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     *     pageToken: 'placeholder-value',
     *     // Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.
     *     studentId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "guardians": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Userprofiles$Guardians$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Userprofiles$Guardians$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListGuardiansResponse>;
    list(
      params: Params$Resource$Userprofiles$Guardians$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Userprofiles$Guardians$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListGuardiansResponse>,
      callback: BodyResponseCallback<Schema$ListGuardiansResponse>
    ): void;
    list(
      params: Params$Resource$Userprofiles$Guardians$List,
      callback: BodyResponseCallback<Schema$ListGuardiansResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListGuardiansResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Userprofiles$Guardians$List
        | BodyResponseCallback<Schema$ListGuardiansResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListGuardiansResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListGuardiansResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListGuardiansResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userprofiles$Guardians$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userprofiles$Guardians$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://classroom.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/userProfiles/{studentId}/guardians').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['studentId'],
        pathParams: ['studentId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListGuardiansResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListGuardiansResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Userprofiles$Guardians$Delete
    extends StandardParameters {
    /**
     * The `id` field from a `Guardian`.
     */
    guardianId?: string;
    /**
     * The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    studentId?: string;
  }
  export interface Params$Resource$Userprofiles$Guardians$Get
    extends StandardParameters {
    /**
     * The `id` field from a `Guardian`.
     */
    guardianId?: string;
    /**
     * The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    studentId?: string;
  }
  export interface Params$Resource$Userprofiles$Guardians$List
    extends StandardParameters {
    /**
     * Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.
     */
    invitedEmailAddress?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.
     */
    studentId?: string;
  }
}

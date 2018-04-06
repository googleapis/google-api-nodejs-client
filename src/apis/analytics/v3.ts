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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google Analytics API
 *
 * Views and manages your Google Analytics data.
 *
 * @example
 * const google = require('googleapis');
 * const analytics = google.analytics('v3');
 *
 * @namespace analytics
 * @type {Function}
 * @version v3
 * @variation v3
 * @param {object=} options Options for Analytics
 */
export class Analytics {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  data: Resource$Data;
  management: Resource$Management;
  metadata: Resource$Metadata;
  provisioning: Resource$Provisioning;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.data = new Resource$Data(this);
    this.management = new Resource$Management(this);
    this.metadata = new Resource$Metadata(this);
    this.provisioning = new Resource$Provisioning(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * JSON template for Analytics account entry.
 */
export interface Schema$Account {
  /**
   * Child link for an account entry. Points to the list of web properties for
   * this account.
   */
  childLink: any;
  /**
   * Time the account was created.
   */
  created: string;
  /**
   * Account ID.
   */
  id: string;
  /**
   * Resource type for Analytics account.
   */
  kind: string;
  /**
   * Account name.
   */
  name: string;
  /**
   * Permissions the user has for this account.
   */
  permissions: any;
  /**
   * Link for this account.
   */
  selfLink: string;
  /**
   * Indicates whether this account is starred or not.
   */
  starred: boolean;
  /**
   * Time the account was last modified.
   */
  updated: string;
}
/**
 * JSON template for a linked account.
 */
export interface Schema$AccountRef {
  /**
   * Link for this account.
   */
  href: string;
  /**
   * Account ID.
   */
  id: string;
  /**
   * Analytics account reference.
   */
  kind: string;
  /**
   * Account name.
   */
  name: string;
}
/**
 * An account collection provides a list of Analytics accounts to which a user
 * has access. The account collection is the entry point to all management
 * information. Each resource in the collection corresponds to a single
 * Analytics account.
 */
export interface Schema$Accounts {
  /**
   * A list of accounts.
   */
  items: Schema$Account[];
  /**
   * The maximum number of entries the response can contain, regardless of the
   * actual number of entries returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Next link for this account collection.
   */
  nextLink: string;
  /**
   * Previous link for this account collection.
   */
  previousLink: string;
  /**
   * The starting index of the entries, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * An AccountSummary collection lists a summary of accounts, properties and
 * views (profiles) to which the user has access. Each resource in the
 * collection corresponds to a single AccountSummary.
 */
export interface Schema$AccountSummaries {
  /**
   * A list of AccountSummaries.
   */
  items: Schema$AccountSummary[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this AccountSummary collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this AccountSummary collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics AccountSummary. An AccountSummary is a
 * lightweight tree comprised of properties/profiles.
 */
export interface Schema$AccountSummary {
  /**
   * Account ID.
   */
  id: string;
  /**
   * Resource type for Analytics AccountSummary.
   */
  kind: string;
  /**
   * Account name.
   */
  name: string;
  /**
   * Indicates whether this account is starred or not.
   */
  starred: boolean;
  /**
   * List of web properties under this account.
   */
  webProperties: Schema$WebPropertySummary[];
}
/**
 * JSON template for an Analytics account ticket. The account ticket consists of
 * the ticket ID and the basic information for the account, property and
 * profile.
 */
export interface Schema$AccountTicket {
  /**
   * Account for this ticket.
   */
  account: Schema$Account;
  /**
   * Account ticket ID used to access the account ticket.
   */
  id: string;
  /**
   * Resource type for account ticket.
   */
  kind: string;
  /**
   * View (Profile) for the account.
   */
  profile: Schema$Profile;
  /**
   * Redirect URI where the user will be sent after accepting Terms of Service.
   * Must be configured in APIs console as a callback URL.
   */
  redirectUri: string;
  /**
   * Web property for the account.
   */
  webproperty: Schema$Webproperty;
}
/**
 * JSON template for an Analytics account tree requests. The account tree
 * request is used in the provisioning api to create an account, property, and
 * view (profile). It contains the basic information required to make these
 * fields.
 */
export interface Schema$AccountTreeRequest {
  accountName: string;
  accountSettings: any;
  /**
   * Resource type for account ticket.
   */
  kind: string;
  profileName: string;
  timezone: string;
  webpropertyName: string;
  websiteUrl: string;
}
/**
 * JSON template for an Analytics account tree response. The account tree
 * response is used in the provisioning api to return the result of creating an
 * account, property, and view (profile).
 */
export interface Schema$AccountTreeResponse {
  /**
   * The account created.
   */
  account: Schema$Account;
  accountSettings: any;
  /**
   * Resource type for account ticket.
   */
  kind: string;
  /**
   * View (Profile) for the account.
   */
  profile: Schema$Profile;
  /**
   * Web property for the account.
   */
  webproperty: Schema$Webproperty;
}
/**
 * JSON template for an AdWords account.
 */
export interface Schema$AdWordsAccount {
  /**
   * True if auto-tagging is enabled on the AdWords account. Read-only after the
   * insert operation.
   */
  autoTaggingEnabled: boolean;
  /**
   * Customer ID. This field is required when creating an AdWords link.
   */
  customerId: string;
  /**
   * Resource type for AdWords account.
   */
  kind: string;
}
/**
 * Request template for the delete upload data request.
 */
export interface Schema$AnalyticsDataimportDeleteUploadDataRequest {
  /**
   * A list of upload UIDs.
   */
  customDataImportUids: string[];
}
/**
 * JSON template for a metadata column.
 */
export interface Schema$Column {
  /**
   * Map of attribute name and value for this column.
   */
  attributes: any;
  /**
   * Column id.
   */
  id: string;
  /**
   * Resource type for Analytics column.
   */
  kind: string;
}
/**
 * Lists columns (dimensions and metrics) for a particular report type.
 */
export interface Schema$Columns {
  /**
   * List of attributes names returned by columns.
   */
  attributeNames: string[];
  /**
   * Etag of collection. This etag can be compared with the last response etag
   * to check if response has changed.
   */
  etag: string;
  /**
   * List of columns for a report type.
   */
  items: Schema$Column[];
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Total number of columns returned in the response.
   */
  totalResults: number;
}
/**
 * JSON template for an Analytics custom data source.
 */
export interface Schema$CustomDataSource {
  /**
   * Account ID to which this custom data source belongs.
   */
  accountId: string;
  childLink: any;
  /**
   * Time this custom data source was created.
   */
  created: string;
  /**
   * Description of custom data source.
   */
  description: string;
  /**
   * Custom data source ID.
   */
  id: string;
  importBehavior: string;
  /**
   * Resource type for Analytics custom data source.
   */
  kind: string;
  /**
   * Name of this custom data source.
   */
  name: string;
  /**
   * Parent link for this custom data source. Points to the web property to
   * which this custom data source belongs.
   */
  parentLink: any;
  /**
   * IDs of views (profiles) linked to the custom data source.
   */
  profilesLinked: string[];
  /**
   * Collection of schema headers of the custom data source.
   */
  schema: string[];
  /**
   * Link for this Analytics custom data source.
   */
  selfLink: string;
  /**
   * Type of the custom data source.
   */
  type: string;
  /**
   * Time this custom data source was last modified.
   */
  updated: string;
  /**
   * Upload type of the custom data source.
   */
  uploadType: string;
  /**
   * Web property ID of the form UA-XXXXX-YY to which this custom data source
   * belongs.
   */
  webPropertyId: string;
}
/**
 * Lists Analytics custom data sources to which the user has access. Each
 * resource in the collection corresponds to a single Analytics custom data
 * source.
 */
export interface Schema$CustomDataSources {
  /**
   * Collection of custom data sources.
   */
  items: Schema$CustomDataSource[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this custom data source collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this custom data source collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for Analytics Custom Dimension.
 */
export interface Schema$CustomDimension {
  /**
   * Account ID.
   */
  accountId: string;
  /**
   * Boolean indicating whether the custom dimension is active.
   */
  active: boolean;
  /**
   * Time the custom dimension was created.
   */
  created: string;
  /**
   * Custom dimension ID.
   */
  id: string;
  /**
   * Index of the custom dimension.
   */
  index: number;
  /**
   * Kind value for a custom dimension. Set to
   * &quot;analytics#customDimension&quot;. It is a read-only field.
   */
  kind: string;
  /**
   * Name of the custom dimension.
   */
  name: string;
  /**
   * Parent link for the custom dimension. Points to the property to which the
   * custom dimension belongs.
   */
  parentLink: any;
  /**
   * Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
   */
  scope: string;
  /**
   * Link for the custom dimension
   */
  selfLink: string;
  /**
   * Time the custom dimension was last modified.
   */
  updated: string;
  /**
   * Property ID.
   */
  webPropertyId: string;
}
/**
 * A custom dimension collection lists Analytics custom dimensions to which the
 * user has access. Each resource in the collection corresponds to a single
 * Analytics custom dimension.
 */
export interface Schema$CustomDimensions {
  /**
   * Collection of custom dimensions.
   */
  items: Schema$CustomDimension[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this custom dimension collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this custom dimension collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for Analytics Custom Metric.
 */
export interface Schema$CustomMetric {
  /**
   * Account ID.
   */
  accountId: string;
  /**
   * Boolean indicating whether the custom metric is active.
   */
  active: boolean;
  /**
   * Time the custom metric was created.
   */
  created: string;
  /**
   * Custom metric ID.
   */
  id: string;
  /**
   * Index of the custom metric.
   */
  index: number;
  /**
   * Kind value for a custom metric. Set to &quot;analytics#customMetric&quot;.
   * It is a read-only field.
   */
  kind: string;
  /**
   * Max value of custom metric.
   */
  max_value: string;
  /**
   * Min value of custom metric.
   */
  min_value: string;
  /**
   * Name of the custom metric.
   */
  name: string;
  /**
   * Parent link for the custom metric. Points to the property to which the
   * custom metric belongs.
   */
  parentLink: any;
  /**
   * Scope of the custom metric: HIT or PRODUCT.
   */
  scope: string;
  /**
   * Link for the custom metric
   */
  selfLink: string;
  /**
   * Data type of custom metric.
   */
  type: string;
  /**
   * Time the custom metric was last modified.
   */
  updated: string;
  /**
   * Property ID.
   */
  webPropertyId: string;
}
/**
 * A custom metric collection lists Analytics custom metrics to which the user
 * has access. Each resource in the collection corresponds to a single Analytics
 * custom metric.
 */
export interface Schema$CustomMetrics {
  /**
   * Collection of custom metrics.
   */
  items: Schema$CustomMetric[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this custom metric collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this custom metric collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for Analytics Entity AdWords Link.
 */
export interface Schema$EntityAdWordsLink {
  /**
   * A list of AdWords client accounts. These cannot be MCC accounts. This field
   * is required when creating an AdWords link. It cannot be empty.
   */
  adWordsAccounts: Schema$AdWordsAccount[];
  /**
   * Web property being linked.
   */
  entity: any;
  /**
   * Entity AdWords link ID
   */
  id: string;
  /**
   * Resource type for entity AdWords link.
   */
  kind: string;
  /**
   * Name of the link. This field is required when creating an AdWords link.
   */
  name: string;
  /**
   * IDs of linked Views (Profiles) represented as strings.
   */
  profileIds: string[];
  /**
   * URL link for this Google Analytics - Google AdWords link.
   */
  selfLink: string;
}
/**
 * An entity AdWords link collection provides a list of GA-AdWords links Each
 * resource in this collection corresponds to a single link.
 */
export interface Schema$EntityAdWordsLinks {
  /**
   * A list of entity AdWords links.
   */
  items: Schema$EntityAdWordsLink[];
  /**
   * The maximum number of entries the response can contain, regardless of the
   * actual number of entries returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Next link for this AdWords link collection.
   */
  nextLink: string;
  /**
   * Previous link for this AdWords link collection.
   */
  previousLink: string;
  /**
   * The starting index of the entries, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
}
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a
 * user has for an entity.
 */
export interface Schema$EntityUserLink {
  /**
   * Entity for this link. It can be an account, a web property, or a view
   * (profile).
   */
  entity: any;
  /**
   * Entity user link ID
   */
  id: string;
  /**
   * Resource type for entity user link.
   */
  kind: string;
  /**
   * Permissions the user has for this entity.
   */
  permissions: any;
  /**
   * Self link for this resource.
   */
  selfLink: string;
  /**
   * User reference.
   */
  userRef: Schema$UserRef;
}
/**
 * An entity user link collection provides a list of Analytics ACL links Each
 * resource in this collection corresponds to a single link.
 */
export interface Schema$EntityUserLinks {
  /**
   * A list of entity user links.
   */
  items: Schema$EntityUserLink[];
  /**
   * The maximum number of entries the response can contain, regardless of the
   * actual number of entries returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Next link for this account collection.
   */
  nextLink: string;
  /**
   * Previous link for this account collection.
   */
  previousLink: string;
  /**
   * The starting index of the entries, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
}
/**
 * JSON template for Analytics experiment resource.
 */
export interface Schema$Experiment {
  /**
   * Account ID to which this experiment belongs. This field is read-only.
   */
  accountId: string;
  /**
   * Time the experiment was created. This field is read-only.
   */
  created: string;
  /**
   * Notes about this experiment.
   */
  description: string;
  /**
   * If true, the end user will be able to edit the experiment via the Google
   * Analytics user interface.
   */
  editableInGaUi: boolean;
  /**
   * The ending time of the experiment (the time the status changed from RUNNING
   * to ENDED). This field is present only if the experiment has ended. This
   * field is read-only.
   */
  endTime: string;
  /**
   * Boolean specifying whether to distribute traffic evenly across all
   * variations. If the value is False, content experiments follows the default
   * behavior of adjusting traffic dynamically based on variation performance.
   * Optional -- defaults to False. This field may not be changed for an
   * experiment whose status is ENDED.
   */
  equalWeighting: boolean;
  /**
   * Experiment ID. Required for patch and update. Disallowed for create.
   */
  id: string;
  /**
   * Internal ID for the web property to which this experiment belongs. This
   * field is read-only.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for an Analytics experiment. This field is read-only.
   */
  kind: string;
  /**
   * An integer number in [3, 90]. Specifies the minimum length of the
   * experiment. Can be changed for a running experiment. This field may not be
   * changed for an experiments whose status is ENDED.
   */
  minimumExperimentLengthInDays: number;
  /**
   * Experiment name. This field may not be changed for an experiment whose
   * status is ENDED. This field is required when creating an experiment.
   */
  name: string;
  /**
   * The metric that the experiment is optimizing. Valid values:
   * &quot;ga:goal(n)Completions&quot;, &quot;ga:adsenseAdsClicks&quot;,
   * &quot;ga:adsenseAdsViewed&quot;, &quot;ga:adsenseRevenue&quot;,
   * &quot;ga:bounces&quot;, &quot;ga:pageviews&quot;,
   * &quot;ga:sessionDuration&quot;, &quot;ga:transactions&quot;,
   * &quot;ga:transactionRevenue&quot;. This field is required if status is
   * &quot;RUNNING&quot; and servingFramework is one of &quot;REDIRECT&quot; or
   * &quot;API&quot;.
   */
  objectiveMetric: string;
  /**
   * Whether the objectiveMetric should be minimized or maximized. Possible
   * values: &quot;MAXIMUM&quot;, &quot;MINIMUM&quot;. Optional--defaults to
   * &quot;MAXIMUM&quot;. Cannot be specified without objectiveMetric. Cannot be
   * modified when status is &quot;RUNNING&quot; or &quot;ENDED&quot;.
   */
  optimizationType: string;
  /**
   * Parent link for an experiment. Points to the view (profile) to which this
   * experiment belongs.
   */
  parentLink: any;
  /**
   * View (Profile) ID to which this experiment belongs. This field is
   * read-only.
   */
  profileId: string;
  /**
   * Why the experiment ended. Possible values: &quot;STOPPED_BY_USER&quot;,
   * &quot;WINNER_FOUND&quot;, &quot;EXPERIMENT_EXPIRED&quot;,
   * &quot;ENDED_WITH_NO_WINNER&quot;, &quot;GOAL_OBJECTIVE_CHANGED&quot;.
   * &quot;ENDED_WITH_NO_WINNER&quot; means that the experiment didn&#39;t
   * expire but no winner was projected to be found. If the experiment status is
   * changed via the API to ENDED this field is set to STOPPED_BY_USER. This
   * field is read-only.
   */
  reasonExperimentEnded: string;
  /**
   * Boolean specifying whether variations URLS are rewritten to match those of
   * the original. This field may not be changed for an experiments whose status
   * is ENDED.
   */
  rewriteVariationUrlsAsOriginal: boolean;
  /**
   * Link for this experiment. This field is read-only.
   */
  selfLink: string;
  /**
   * The framework used to serve the experiment variations and evaluate the
   * results. One of:   - REDIRECT: Google Analytics redirects traffic to
   * different variation pages, reports the chosen variation and evaluates the
   * results. - API: Google Analytics chooses and reports the variation to serve
   * and evaluates the results; the caller is responsible for serving the
   * selected variation. - EXTERNAL: The variations will be served externally
   * and the chosen variation reported to Google Analytics. The caller is
   * responsible for serving the selected variation and evaluating the results.
   */
  servingFramework: string;
  /**
   * The snippet of code to include on the control page(s). This field is
   * read-only.
   */
  snippet: string;
  /**
   * The starting time of the experiment (the time the status changed from
   * READY_TO_RUN to RUNNING). This field is present only if the experiment has
   * started. This field is read-only.
   */
  startTime: string;
  /**
   * Experiment status. Possible values: &quot;DRAFT&quot;,
   * &quot;READY_TO_RUN&quot;, &quot;RUNNING&quot;, &quot;ENDED&quot;.
   * Experiments can be created in the &quot;DRAFT&quot;,
   * &quot;READY_TO_RUN&quot; or &quot;RUNNING&quot; state. This field is
   * required when creating an experiment.
   */
  status: string;
  /**
   * A floating-point number in (0, 1]. Specifies the fraction of the traffic
   * that participates in the experiment. Can be changed for a running
   * experiment. This field may not be changed for an experiments whose status
   * is ENDED.
   */
  trafficCoverage: number;
  /**
   * Time the experiment was last modified. This field is read-only.
   */
  updated: string;
  /**
   * Array of variations. The first variation in the array is the original. The
   * number of variations may not change once an experiment is in the RUNNING
   * state. At least two variations are required before status can be set to
   * RUNNING.
   */
  variations: any[];
  /**
   * Web property ID to which this experiment belongs. The web property ID is of
   * the form UA-XXXXX-YY. This field is read-only.
   */
  webPropertyId: string;
  /**
   * A floating-point number in (0, 1). Specifies the necessary confidence level
   * to choose a winner. This field may not be changed for an experiments whose
   * status is ENDED.
   */
  winnerConfidenceLevel: number;
  /**
   * Boolean specifying whether a winner has been found for this experiment.
   * This field is read-only.
   */
  winnerFound: boolean;
}
/**
 * An experiment collection lists Analytics experiments to which the user has
 * access. Each view (profile) can have a set of experiments. Each resource in
 * the Experiment collection corresponds to a single Analytics experiment.
 */
export interface Schema$Experiments {
  /**
   * A list of experiments.
   */
  items: Schema$Experiment[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this experiment collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this experiment collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * resources in the result.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics account filter.
 */
export interface Schema$Filter {
  /**
   * Account ID to which this filter belongs.
   */
  accountId: string;
  /**
   * Details for the filter of the type ADVANCED.
   */
  advancedDetails: any;
  /**
   * Time this filter was created.
   */
  created: string;
  /**
   * Details for the filter of the type EXCLUDE.
   */
  excludeDetails: Schema$FilterExpression;
  /**
   * Filter ID.
   */
  id: string;
  /**
   * Details for the filter of the type INCLUDE.
   */
  includeDetails: Schema$FilterExpression;
  /**
   * Resource type for Analytics filter.
   */
  kind: string;
  /**
   * Details for the filter of the type LOWER.
   */
  lowercaseDetails: any;
  /**
   * Name of this filter.
   */
  name: string;
  /**
   * Parent link for this filter. Points to the account to which this filter
   * belongs.
   */
  parentLink: any;
  /**
   * Details for the filter of the type SEARCH_AND_REPLACE.
   */
  searchAndReplaceDetails: any;
  /**
   * Link for this filter.
   */
  selfLink: string;
  /**
   * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE,
   * UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
   */
  type: string;
  /**
   * Time this filter was last modified.
   */
  updated: string;
  /**
   * Details for the filter of the type UPPER.
   */
  uppercaseDetails: any;
}
/**
 * JSON template for an Analytics filter expression.
 */
export interface Schema$FilterExpression {
  /**
   * Determines if the filter is case sensitive.
   */
  caseSensitive: boolean;
  /**
   * Filter expression value
   */
  expressionValue: string;
  /**
   * Field to filter. Possible values:   - Content and Traffic   -
   * PAGE_REQUEST_URI,  - PAGE_HOSTNAME,  - PAGE_TITLE,  - REFERRAL,  -
   * COST_DATA_URI (Campaign target URL),  - HIT_TYPE,  - INTERNAL_SEARCH_TERM,
   * - INTERNAL_SEARCH_TYPE,  - SOURCE_PROPERTY_TRACKING_ID,    - Campaign or
   * AdGroup   - CAMPAIGN_SOURCE,  - CAMPAIGN_MEDIUM,  - CAMPAIGN_NAME,  -
   * CAMPAIGN_AD_GROUP,  - CAMPAIGN_TERM,  - CAMPAIGN_CONTENT,  - CAMPAIGN_CODE,
   * - CAMPAIGN_REFERRAL_PATH,    - E-Commerce   - TRANSACTION_COUNTRY,  -
   * TRANSACTION_REGION,  - TRANSACTION_CITY,  - TRANSACTION_AFFILIATION (Store
   * or order location),  - ITEM_NAME,  - ITEM_CODE,  - ITEM_VARIATION,  -
   * TRANSACTION_ID,  - TRANSACTION_CURRENCY_CODE,  - PRODUCT_ACTION_TYPE,    -
   * Audience/Users   - BROWSER,  - BROWSER_VERSION,  - BROWSER_SIZE,  -
   * PLATFORM,  - PLATFORM_VERSION,  - LANGUAGE,  - SCREEN_RESOLUTION,  -
   * SCREEN_COLORS,  - JAVA_ENABLED (Boolean Field),  - FLASH_VERSION,  -
   * GEO_SPEED (Connection speed),  - VISITOR_TYPE,  - GEO_ORGANIZATION (ISP
   * organization),  - GEO_DOMAIN,  - GEO_IP_ADDRESS,  - GEO_IP_VERSION,    -
   * Location   - GEO_COUNTRY,  - GEO_REGION,  - GEO_CITY,    - Event   -
   * EVENT_CATEGORY,  - EVENT_ACTION,  - EVENT_LABEL,    - Other   -
   * CUSTOM_FIELD_1,  - CUSTOM_FIELD_2,  - USER_DEFINED_VALUE,    - Application
   * - APP_ID,  - APP_INSTALLER_ID,  - APP_NAME,  - APP_VERSION,  - SCREEN,  -
   * IS_APP (Boolean Field),  - IS_FATAL_EXCEPTION (Boolean Field),  -
   * EXCEPTION_DESCRIPTION,    - Mobile device   - IS_MOBILE (Boolean Field,
   * Deprecated. Use DEVICE_CATEGORY=mobile),  - IS_TABLET (Boolean Field,
   * Deprecated. Use DEVICE_CATEGORY=tablet),  - DEVICE_CATEGORY,  -
   * MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),  - MOBILE_HAS_NFC_SUPPORT
   * (Boolean Field),  - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),  -
   * MOBILE_HAS_WIFI_SUPPORT (Boolean Field),  - MOBILE_BRAND_NAME,  -
   * MOBILE_MODEL_NAME,  - MOBILE_MARKETING_NAME,  - MOBILE_POINTING_METHOD, -
   * Social   - SOCIAL_NETWORK,  - SOCIAL_ACTION,  - SOCIAL_ACTION_TARGET,    -
   * Custom dimension   - CUSTOM_DIMENSION (See accompanying field index),
   */
  field: string;
  /**
   * The Index of the custom dimension. Set only if the field is a is
   * CUSTOM_DIMENSION.
   */
  fieldIndex: number;
  /**
   * Kind value for filter expression
   */
  kind: string;
  /**
   * Match type for this filter. Possible values are BEGINS_WITH, EQUAL,
   * ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS,
   * PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all
   * other filters must use MATCHES.
   */
  matchType: string;
}
/**
 * JSON template for a profile filter link.
 */
export interface Schema$FilterRef {
  /**
   * Account ID to which this filter belongs.
   */
  accountId: string;
  /**
   * Link for this filter.
   */
  href: string;
  /**
   * Filter ID.
   */
  id: string;
  /**
   * Kind value for filter reference.
   */
  kind: string;
  /**
   * Name of this filter.
   */
  name: string;
}
/**
 * A filter collection lists filters created by users in an Analytics account.
 * Each resource in the collection corresponds to a filter.
 */
export interface Schema$Filters {
  /**
   * A list of filters.
   */
  items: Schema$Filter[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1,000 with
   * a value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this filter collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this filter collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * Analytics data for a given view (profile).
 */
export interface Schema$GaData {
  /**
   * Column headers that list dimension names followed by the metric names. The
   * order of dimensions and metrics is same as specified in the request.
   */
  columnHeaders: any[];
  /**
   * Determines if Analytics data contains samples.
   */
  containsSampledData: boolean;
  /**
   * The last refreshed time in seconds for Analytics data.
   */
  dataLastRefreshed: string;
  dataTable: any;
  /**
   * Unique ID for this data response.
   */
  id: string;
  /**
   * The maximum number of rows the response can contain, regardless of the
   * actual number of rows returned. Its value ranges from 1 to 10,000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Link to next page for this Analytics data query.
   */
  nextLink: string;
  /**
   * Link to previous page for this Analytics data query.
   */
  previousLink: string;
  /**
   * Information for the view (profile), for which the Analytics data was
   * requested.
   */
  profileInfo: any;
  /**
   * Analytics data request query parameters.
   */
  query: any;
  /**
   * Analytics data rows, where each row contains a list of dimension values
   * followed by the metric values. The order of dimensions and metrics is same
   * as specified in the request.
   */
  rows: string[][];
  /**
   * The number of samples used to calculate the result.
   */
  sampleSize: string;
  /**
   * Total size of the sample space from which the samples were selected.
   */
  sampleSpace: string;
  /**
   * Link to this page.
   */
  selfLink: string;
  /**
   * The total number of rows for the query, regardless of the number of rows in
   * the response.
   */
  totalResults: number;
  /**
   * Total values for the requested metrics over all the results, not just the
   * results returned in this response. The order of the metric totals is same
   * as the metric order specified in the request.
   */
  totalsForAllResults: any;
}
/**
 * JSON template for Analytics goal resource.
 */
export interface Schema$Goal {
  /**
   * Account ID to which this goal belongs.
   */
  accountId: string;
  /**
   * Determines whether this goal is active.
   */
  active: boolean;
  /**
   * Time this goal was created.
   */
  created: string;
  /**
   * Details for the goal of the type EVENT.
   */
  eventDetails: any;
  /**
   * Goal ID.
   */
  id: string;
  /**
   * Internal ID for the web property to which this goal belongs.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for an Analytics goal.
   */
  kind: string;
  /**
   * Goal name.
   */
  name: string;
  /**
   * Parent link for a goal. Points to the view (profile) to which this goal
   * belongs.
   */
  parentLink: any;
  /**
   * View (Profile) ID to which this goal belongs.
   */
  profileId: string;
  /**
   * Link for this goal.
   */
  selfLink: string;
  /**
   * Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE,
   * VISIT_NUM_PAGES, AND EVENT.
   */
  type: string;
  /**
   * Time this goal was last modified.
   */
  updated: string;
  /**
   * Details for the goal of the type URL_DESTINATION.
   */
  urlDestinationDetails: any;
  /**
   * Goal value.
   */
  value: number;
  /**
   * Details for the goal of the type VISIT_NUM_PAGES.
   */
  visitNumPagesDetails: any;
  /**
   * Details for the goal of the type VISIT_TIME_ON_SITE.
   */
  visitTimeOnSiteDetails: any;
  /**
   * Web property ID to which this goal belongs. The web property ID is of the
   * form UA-XXXXX-YY.
   */
  webPropertyId: string;
}
/**
 * A goal collection lists Analytics goals to which the user has access. Each
 * view (profile) can have a set of goals. Each resource in the Goal collection
 * corresponds to a single Analytics goal.
 */
export interface Schema$Goals {
  /**
   * A list of goals.
   */
  items: Schema$Goal[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this goal collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this goal collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * resources in the result.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics Remarketing Include Conditions.
 */
export interface Schema$IncludeConditions {
  /**
   * The look-back window lets you specify a time frame for evaluating the
   * behavior that qualifies users for your audience. For example, if your
   * filters include users from Central Asia, and Transactions Greater than 2,
   * and you set the look-back window to 14 days, then any user from Central
   * Asia whose cumulative transactions exceed 2 during the last 14 days is
   * added to the audience.
   */
  daysToLookBack: number;
  /**
   * Boolean indicating whether this segment is a smart list.
   * https://support.google.com/analytics/answer/4628577
   */
  isSmartList: boolean;
  /**
   * Resource type for include conditions.
   */
  kind: string;
  /**
   * Number of days (in the range 1 to 540) a user remains in the audience.
   */
  membershipDurationDays: number;
  /**
   * The segment condition that will cause a user to be added to an audience.
   */
  segment: string;
}
/**
 * JSON template for an Analytics Remarketing Audience Foreign Link.
 */
export interface Schema$LinkedForeignAccount {
  /**
   * Account ID to which this linked foreign account belongs.
   */
  accountId: string;
  /**
   * Boolean indicating whether this is eligible for search.
   */
  eligibleForSearch: boolean;
  /**
   * Entity ad account link ID.
   */
  id: string;
  /**
   * Internal ID for the web property to which this linked foreign account
   * belongs.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for linked foreign account.
   */
  kind: string;
  /**
   * The foreign account ID. For example the an AdWords `linkedAccountId` has
   * the following format XXX-XXX-XXXX.
   */
  linkedAccountId: string;
  /**
   * Remarketing audience ID to which this linked foreign account belongs.
   */
  remarketingAudienceId: string;
  /**
   * The status of this foreign account link.
   */
  status: string;
  /**
   * The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`,
   * `MCC_LINKS` or `OPTIMIZE`.
   */
  type: string;
  /**
   * Web property ID of the form UA-XXXXX-YY to which this linked foreign
   * account belongs.
   */
  webPropertyId: string;
}
/**
 * Multi-Channel Funnels data for a given view (profile).
 */
export interface Schema$McfData {
  /**
   * Column headers that list dimension names followed by the metric names. The
   * order of dimensions and metrics is same as specified in the request.
   */
  columnHeaders: any[];
  /**
   * Determines if the Analytics data contains sampled data.
   */
  containsSampledData: boolean;
  /**
   * Unique ID for this data response.
   */
  id: string;
  /**
   * The maximum number of rows the response can contain, regardless of the
   * actual number of rows returned. Its value ranges from 1 to 10,000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Link to next page for this Analytics data query.
   */
  nextLink: string;
  /**
   * Link to previous page for this Analytics data query.
   */
  previousLink: string;
  /**
   * Information for the view (profile), for which the Analytics data was
   * requested.
   */
  profileInfo: any;
  /**
   * Analytics data request query parameters.
   */
  query: any;
  /**
   * Analytics data rows, where each row contains a list of dimension values
   * followed by the metric values. The order of dimensions and metrics is same
   * as specified in the request.
   */
  rows: any[][];
  /**
   * The number of samples used to calculate the result.
   */
  sampleSize: string;
  /**
   * Total size of the sample space from which the samples were selected.
   */
  sampleSpace: string;
  /**
   * Link to this page.
   */
  selfLink: string;
  /**
   * The total number of rows for the query, regardless of the number of rows in
   * the response.
   */
  totalResults: number;
  /**
   * Total values for the requested metrics over all the results, not just the
   * results returned in this response. The order of the metric totals is same
   * as the metric order specified in the request.
   */
  totalsForAllResults: any;
}
/**
 * JSON template for an Analytics view (profile).
 */
export interface Schema$Profile {
  /**
   * Account ID to which this view (profile) belongs.
   */
  accountId: string;
  /**
   * Indicates whether bot filtering is enabled for this view (profile).
   */
  botFilteringEnabled: boolean;
  /**
   * Child link for this view (profile). Points to the list of goals for this
   * view (profile).
   */
  childLink: any;
  /**
   * Time this view (profile) was created.
   */
  created: string;
  /**
   * The currency type associated with this view (profile), defaults to USD. The
   * supported values are: USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB,
   * SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD,
   * CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD,
   * MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
   */
  currency: string;
  /**
   * Default page for this view (profile).
   */
  defaultPage: string;
  /**
   * Indicates whether ecommerce tracking is enabled for this view (profile).
   */
  eCommerceTracking: boolean;
  /**
   * Indicates whether enhanced ecommerce tracking is enabled for this view
   * (profile). This property can only be enabled if ecommerce tracking is
   * enabled.
   */
  enhancedECommerceTracking: boolean;
  /**
   * The query parameters that are excluded from this view (profile).
   */
  excludeQueryParameters: string;
  /**
   * View (Profile) ID.
   */
  id: string;
  /**
   * Internal ID for the web property to which this view (profile) belongs.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for Analytics view (profile).
   */
  kind: string;
  /**
   * Name of this view (profile).
   */
  name: string;
  /**
   * Parent link for this view (profile). Points to the web property to which
   * this view (profile) belongs.
   */
  parentLink: any;
  /**
   * Permissions the user has for this view (profile).
   */
  permissions: any;
  /**
   * Link for this view (profile).
   */
  selfLink: string;
  /**
   * Site search category parameters for this view (profile).
   */
  siteSearchCategoryParameters: string;
  /**
   * The site search query parameters for this view (profile).
   */
  siteSearchQueryParameters: string;
  /**
   * Indicates whether this view (profile) is starred or not.
   */
  starred: boolean;
  /**
   * Whether or not Analytics will strip search category parameters from the
   * URLs in your reports.
   */
  stripSiteSearchCategoryParameters: boolean;
  /**
   * Whether or not Analytics will strip search query parameters from the URLs
   * in your reports.
   */
  stripSiteSearchQueryParameters: boolean;
  /**
   * Time zone for which this view (profile) has been configured. Time zones are
   * identified by strings from the TZ database.
   */
  timezone: string;
  /**
   * View (Profile) type. Supported types: WEB or APP.
   */
  type: string;
  /**
   * Time this view (profile) was last modified.
   */
  updated: string;
  /**
   * Web property ID of the form UA-XXXXX-YY to which this view (profile)
   * belongs.
   */
  webPropertyId: string;
  /**
   * Website URL for this view (profile).
   */
  websiteUrl: string;
}
/**
 * JSON template for an Analytics profile filter link.
 */
export interface Schema$ProfileFilterLink {
  /**
   * Filter for this link.
   */
  filterRef: Schema$FilterRef;
  /**
   * Profile filter link ID.
   */
  id: string;
  /**
   * Resource type for Analytics filter.
   */
  kind: string;
  /**
   * View (Profile) for this link.
   */
  profileRef: Schema$ProfileRef;
  /**
   * The rank of this profile filter link relative to the other filters linked
   * to the same profile. For readonly (i.e., list and get) operations, the rank
   * always starts at 1. For write (i.e., create, update, or delete) operations,
   * you may specify a value between 0 and 255 inclusively, [0, 255]. In order
   * to insert a link at the end of the list, either don&#39;t specify a rank or
   * set a rank to a number greater than the largest rank in the list. In order
   * to insert a link to the beginning of the list specify a rank that is less
   * than or equal to 1. The new link will move all existing filters with the
   * same or lower rank down the list. After the link is
   * inserted/updated/deleted all profile filter links will be renumbered
   * starting at 1.
   */
  rank: number;
  /**
   * Link for this profile filter link.
   */
  selfLink: string;
}
/**
 * A profile filter link collection lists profile filter links between profiles
 * and filters. Each resource in the collection corresponds to a profile filter
 * link.
 */
export interface Schema$ProfileFilterLinks {
  /**
   * A list of profile filter links.
   */
  items: Schema$ProfileFilterLink[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1,000 with
   * a value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this profile filter link collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this profile filter link collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for a linked view (profile).
 */
export interface Schema$ProfileRef {
  /**
   * Account ID to which this view (profile) belongs.
   */
  accountId: string;
  /**
   * Link for this view (profile).
   */
  href: string;
  /**
   * View (Profile) ID.
   */
  id: string;
  /**
   * Internal ID for the web property to which this view (profile) belongs.
   */
  internalWebPropertyId: string;
  /**
   * Analytics view (profile) reference.
   */
  kind: string;
  /**
   * Name of this view (profile).
   */
  name: string;
  /**
   * Web property ID of the form UA-XXXXX-YY to which this view (profile)
   * belongs.
   */
  webPropertyId: string;
}
/**
 * A view (profile) collection lists Analytics views (profiles) to which the
 * user has access. Each resource in the collection corresponds to a single
 * Analytics view (profile).
 */
export interface Schema$Profiles {
  /**
   * A list of views (profiles).
   */
  items: Schema$Profile[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this view (profile) collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this view (profile) collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic
 * information (i.e., summary) for a profile.
 */
export interface Schema$ProfileSummary {
  /**
   * View (profile) ID.
   */
  id: string;
  /**
   * Resource type for Analytics ProfileSummary.
   */
  kind: string;
  /**
   * View (profile) name.
   */
  name: string;
  /**
   * Indicates whether this view (profile) is starred or not.
   */
  starred: boolean;
  /**
   * View (Profile) type. Supported types: WEB or APP.
   */
  type: string;
}
/**
 * Real time data for a given view (profile).
 */
export interface Schema$RealtimeData {
  /**
   * Column headers that list dimension names followed by the metric names. The
   * order of dimensions and metrics is same as specified in the request.
   */
  columnHeaders: any[];
  /**
   * Unique ID for this data response.
   */
  id: string;
  /**
   * Resource type.
   */
  kind: string;
  /**
   * Information for the view (profile), for which the real time data was
   * requested.
   */
  profileInfo: any;
  /**
   * Real time data request query parameters.
   */
  query: any;
  /**
   * Real time data rows, where each row contains a list of dimension values
   * followed by the metric values. The order of dimensions and metrics is same
   * as specified in the request.
   */
  rows: string[][];
  /**
   * Link to this page.
   */
  selfLink: string;
  /**
   * The total number of rows for the query, regardless of the number of rows in
   * the response.
   */
  totalResults: number;
  /**
   * Total values for the requested metrics over all the results, not just the
   * results returned in this response. The order of the metric totals is same
   * as the metric order specified in the request.
   */
  totalsForAllResults: any;
}
/**
 * JSON template for an Analytics remarketing audience.
 */
export interface Schema$RemarketingAudience {
  /**
   * Account ID to which this remarketing audience belongs.
   */
  accountId: string;
  /**
   * The simple audience definition that will cause a user to be added to an
   * audience.
   */
  audienceDefinition: any;
  /**
   * The type of audience, either SIMPLE or STATE_BASED.
   */
  audienceType: string;
  /**
   * Time this remarketing audience was created.
   */
  created: string;
  /**
   * The description of this remarketing audience.
   */
  description: string;
  /**
   * Remarketing Audience ID.
   */
  id: string;
  /**
   * Internal ID for the web property to which this remarketing audience
   * belongs.
   */
  internalWebPropertyId: string;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * The linked ad accounts associated with this remarketing audience. A
   * remarketing audience can have only one linkedAdAccount currently.
   */
  linkedAdAccounts: Schema$LinkedForeignAccount[];
  /**
   * The views (profiles) that this remarketing audience is linked to.
   */
  linkedViews: string[];
  /**
   * The name of this remarketing audience.
   */
  name: string;
  /**
   * A state based audience definition that will cause a user to be added or
   * removed from an audience.
   */
  stateBasedAudienceDefinition: any;
  /**
   * Time this remarketing audience was last modified.
   */
  updated: string;
  /**
   * Web property ID of the form UA-XXXXX-YY to which this remarketing audience
   * belongs.
   */
  webPropertyId: string;
}
/**
 * A remarketing audience collection lists Analytics remarketing audiences to
 * which the user has access. Each resource in the collection corresponds to a
 * single Analytics remarketing audience.
 */
export interface Schema$RemarketingAudiences {
  /**
   * A list of remarketing audiences.
   */
  items: Schema$RemarketingAudience[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this remarketing audience collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this view (profile) collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics segment.
 */
export interface Schema$Segment {
  /**
   * Time the segment was created.
   */
  created: string;
  /**
   * Segment definition.
   */
  definition: string;
  /**
   * Segment ID.
   */
  id: string;
  /**
   * Resource type for Analytics segment.
   */
  kind: string;
  /**
   * Segment name.
   */
  name: string;
  /**
   * Segment ID. Can be used with the &#39;segment&#39; parameter in Core
   * Reporting API.
   */
  segmentId: string;
  /**
   * Link for this segment.
   */
  selfLink: string;
  /**
   * Type for a segment. Possible values are &quot;BUILT_IN&quot; or
   * &quot;CUSTOM&quot;.
   */
  type: string;
  /**
   * Time the segment was last modified.
   */
  updated: string;
}
/**
 * An segment collection lists Analytics segments that the user has access to.
 * Each resource in the collection corresponds to a single Analytics segment.
 */
export interface Schema$Segments {
  /**
   * A list of segments.
   */
  items: Schema$Segment[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type for segments.
   */
  kind: string;
  /**
   * Link to next page for this segment collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this segment collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for Analytics unsampled report resource.
 */
export interface Schema$UnsampledReport {
  /**
   * Account ID to which this unsampled report belongs.
   */
  accountId: string;
  /**
   * Download details for a file stored in Google Cloud Storage.
   */
  cloudStorageDownloadDetails: any;
  /**
   * Time this unsampled report was created.
   */
  created: string;
  /**
   * The dimensions for the unsampled report.
   */
  dimensions: string;
  /**
   * The type of download you need to use for the report data file. Possible
   * values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is
   * `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is
   * `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
   */
  downloadType: string;
  /**
   * Download details for a file stored in Google Drive.
   */
  driveDownloadDetails: any;
  /**
   * The end date for the unsampled report.
   */
  enddate: string;
  /**
   * The filters for the unsampled report.
   */
  filters: string;
  /**
   * Unsampled report ID.
   */
  id: string;
  /**
   * Resource type for an Analytics unsampled report.
   */
  kind: string;
  /**
   * The metrics for the unsampled report.
   */
  metrics: string;
  /**
   * View (Profile) ID to which this unsampled report belongs.
   */
  profileId: string;
  /**
   * The segment for the unsampled report.
   */
  segment: string;
  /**
   * Link for this unsampled report.
   */
  selfLink: string;
  /**
   * The start date for the unsampled report.
   */
  startdate: string;
  /**
   * Status of this unsampled report. Possible values are PENDING, COMPLETED, or
   * FAILED.
   */
  status: string;
  /**
   * Title of the unsampled report.
   */
  title: string;
  /**
   * Time this unsampled report was last modified.
   */
  updated: string;
  /**
   * Web property ID to which this unsampled report belongs. The web property ID
   * is of the form UA-XXXXX-YY.
   */
  webPropertyId: string;
}
/**
 * An unsampled report collection lists Analytics unsampled reports to which the
 * user has access. Each view (profile) can have a set of unsampled reports.
 * Each resource in the unsampled report collection corresponds to a single
 * Analytics unsampled report.
 */
export interface Schema$UnsampledReports {
  /**
   * A list of unsampled reports.
   */
  items: Schema$UnsampledReport[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this unsampled report collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this unsampled report collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * resources in the result.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * Metadata returned for an upload operation.
 */
export interface Schema$Upload {
  /**
   * Account Id to which this upload belongs.
   */
  accountId: string;
  /**
   * Custom data source Id to which this data import belongs.
   */
  customDataSourceId: string;
  /**
   * Data import errors collection.
   */
  errors: string[];
  /**
   * A unique ID for this upload.
   */
  id: string;
  /**
   * Resource type for Analytics upload.
   */
  kind: string;
  /**
   * Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING,
   * DELETED.
   */
  status: string;
  /**
   * Time this file is uploaded.
   */
  uploadTime: string;
}
/**
 * Upload collection lists Analytics uploads to which the user has access. Each
 * custom data source can have a set of uploads. Each resource in the upload
 * collection corresponds to a single Analytics data upload.
 */
export interface Schema$Uploads {
  /**
   * A list of uploads.
   */
  items: Schema$Upload[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this upload collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this upload collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * resources in the result.
   */
  totalResults: number;
}
/**
 * JSON template for a user reference.
 */
export interface Schema$UserRef {
  /**
   * Email ID of this user.
   */
  email: string;
  /**
   * User ID.
   */
  id: string;
  kind: string;
}
/**
 * A web property collection lists Analytics web properties to which the user
 * has access. Each resource in the collection corresponds to a single Analytics
 * web property.
 */
export interface Schema$Webproperties {
  /**
   * A list of web properties.
   */
  items: Schema$Webproperty[];
  /**
   * The maximum number of resources the response can contain, regardless of the
   * actual number of resources returned. Its value ranges from 1 to 1000 with a
   * value of 1000 by default, or otherwise specified by the max-results query
   * parameter.
   */
  itemsPerPage: number;
  /**
   * Collection type.
   */
  kind: string;
  /**
   * Link to next page for this web property collection.
   */
  nextLink: string;
  /**
   * Link to previous page for this web property collection.
   */
  previousLink: string;
  /**
   * The starting index of the resources, which is 1 by default or otherwise
   * specified by the start-index query parameter.
   */
  startIndex: number;
  /**
   * The total number of results for the query, regardless of the number of
   * results in the response.
   */
  totalResults: number;
  /**
   * Email ID of the authenticated user
   */
  username: string;
}
/**
 * JSON template for an Analytics web property.
 */
export interface Schema$Webproperty {
  /**
   * Account ID to which this web property belongs.
   */
  accountId: string;
  /**
   * Child link for this web property. Points to the list of views (profiles)
   * for this web property.
   */
  childLink: any;
  /**
   * Time this web property was created.
   */
  created: string;
  /**
   * Default view (profile) ID.
   */
  defaultProfileId: string;
  /**
   * Web property ID of the form UA-XXXXX-YY.
   */
  id: string;
  /**
   * The industry vertical/category selected for this web property.
   */
  industryVertical: string;
  /**
   * Internal ID for this web property.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for Analytics WebProperty.
   */
  kind: string;
  /**
   * Level for this web property. Possible values are STANDARD or PREMIUM.
   */
  level: string;
  /**
   * Name of this web property.
   */
  name: string;
  /**
   * Parent link for this web property. Points to the account to which this web
   * property belongs.
   */
  parentLink: any;
  /**
   * Permissions the user has for this web property.
   */
  permissions: any;
  /**
   * View (Profile) count for this web property.
   */
  profileCount: number;
  /**
   * Link for this web property.
   */
  selfLink: string;
  /**
   * Indicates whether this web property is starred or not.
   */
  starred: boolean;
  /**
   * Time this web property was last modified.
   */
  updated: string;
  /**
   * Website url for this web property.
   */
  websiteUrl: string;
}
/**
 * JSON template for a web property reference.
 */
export interface Schema$WebPropertyRef {
  /**
   * Account ID to which this web property belongs.
   */
  accountId: string;
  /**
   * Link for this web property.
   */
  href: string;
  /**
   * Web property ID of the form UA-XXXXX-YY.
   */
  id: string;
  /**
   * Internal ID for this web property.
   */
  internalWebPropertyId: string;
  /**
   * Analytics web property reference.
   */
  kind: string;
  /**
   * Name of this web property.
   */
  name: string;
}
/**
 * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns
 * basic information (i.e., summary) for a web property.
 */
export interface Schema$WebPropertySummary {
  /**
   * Web property ID of the form UA-XXXXX-YY.
   */
  id: string;
  /**
   * Internal ID for this web property.
   */
  internalWebPropertyId: string;
  /**
   * Resource type for Analytics WebPropertySummary.
   */
  kind: string;
  /**
   * Level for this web property. Possible values are STANDARD or PREMIUM.
   */
  level: string;
  /**
   * Web property name.
   */
  name: string;
  /**
   * List of profiles under this web property.
   */
  profiles: Schema$ProfileSummary[];
  /**
   * Indicates whether this web property is starred or not.
   */
  starred: boolean;
  /**
   * Website url for this web property.
   */
  websiteUrl: string;
}

export class Resource$Data {
  root: Analytics;
  ga: Resource$Data$Ga;
  mcf: Resource$Data$Mcf;
  realtime: Resource$Data$Realtime;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
    this.ga = new Resource$Data$Ga(root);
    this.mcf = new Resource$Data$Mcf(root);
    this.realtime = new Resource$Data$Realtime(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Data$Ga {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.data.ga.get
   * @desc Returns Analytics data for a view (profile).
   * @alias analytics.data.ga.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
   * @param {string} params.end-date End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
   * @param {string=} params.filters A comma-separated list of dimension or metric filters to be applied to Analytics data.
   * @param {string} params.ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
   * @param {boolean=} params.include-empty-rows The response will include empty rows if this parameter is set to true, the default is true
   * @param {integer=} params.max-results The maximum number of entries to include in this feed.
   * @param {string} params.metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
   * @param {string=} params.output The selected format for the response. Default format is JSON.
   * @param {string=} params.samplingLevel The desired sampling level.
   * @param {string=} params.segment An Analytics segment to be applied to data.
   * @param {string=} params.sort A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
   * @param {string} params.start-date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$GaData>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$GaData>,
      callback?: BodyResponseCallback<Schema$GaData>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$GaData>,
      callback?: BodyResponseCallback<Schema$GaData>):
      void|AxiosPromise<Schema$GaData> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/ga')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$GaData>(parameters, callback);
    } else {
      return createAPIRequest<Schema$GaData>(parameters);
    }
  }
}

export class Resource$Data$Mcf {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.data.mcf.get
   * @desc Returns Analytics Multi-Channel Funnels data for a view (profile).
   * @alias analytics.data.mcf.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dimensions A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
   * @param {string} params.end-date End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
   * @param {string=} params.filters A comma-separated list of dimension or metric filters to be applied to the Analytics data.
   * @param {string} params.ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
   * @param {integer=} params.max-results The maximum number of entries to include in this feed.
   * @param {string} params.metrics A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
   * @param {string=} params.samplingLevel The desired sampling level.
   * @param {string=} params.sort A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
   * @param {string} params.start-date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$McfData>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$McfData>,
      callback?: BodyResponseCallback<Schema$McfData>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$McfData>,
      callback?: BodyResponseCallback<Schema$McfData>):
      void|AxiosPromise<Schema$McfData> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/mcf')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$McfData>(parameters, callback);
    } else {
      return createAPIRequest<Schema$McfData>(parameters);
    }
  }
}

export class Resource$Data$Realtime {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.data.realtime.get
   * @desc Returns real time data for a view (profile).
   * @alias analytics.data.realtime.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dimensions A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
   * @param {string=} params.filters A comma-separated list of dimension or metric filters to be applied to real time data.
   * @param {string} params.ids Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
   * @param {integer=} params.max-results The maximum number of entries to include in this feed.
   * @param {string} params.metrics A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
   * @param {string=} params.sort A comma-separated list of dimensions or metrics that determine the sort order for real time data.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$RealtimeData>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RealtimeData>,
      callback?: BodyResponseCallback<Schema$RealtimeData>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RealtimeData>,
      callback?: BodyResponseCallback<Schema$RealtimeData>):
      void|AxiosPromise<Schema$RealtimeData> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/realtime')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['ids', 'metrics'],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RealtimeData>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RealtimeData>(parameters);
    }
  }
}


export class Resource$Management {
  root: Analytics;
  accounts: Resource$Management$Accounts;
  accountSummaries: Resource$Management$Accountsummaries;
  accountUserLinks: Resource$Management$Accountuserlinks;
  customDataSources: Resource$Management$Customdatasources;
  customDimensions: Resource$Management$Customdimensions;
  customMetrics: Resource$Management$Custommetrics;
  experiments: Resource$Management$Experiments;
  filters: Resource$Management$Filters;
  goals: Resource$Management$Goals;
  profileFilterLinks: Resource$Management$Profilefilterlinks;
  profiles: Resource$Management$Profiles;
  profileUserLinks: Resource$Management$Profileuserlinks;
  remarketingAudience: Resource$Management$Remarketingaudience;
  segments: Resource$Management$Segments;
  unsampledReports: Resource$Management$Unsampledreports;
  uploads: Resource$Management$Uploads;
  webproperties: Resource$Management$Webproperties;
  webPropertyAdWordsLinks: Resource$Management$Webpropertyadwordslinks;
  webpropertyUserLinks: Resource$Management$Webpropertyuserlinks;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
    this.accounts = new Resource$Management$Accounts(root);
    this.accountSummaries = new Resource$Management$Accountsummaries(root);
    this.accountUserLinks = new Resource$Management$Accountuserlinks(root);
    this.customDataSources = new Resource$Management$Customdatasources(root);
    this.customDimensions = new Resource$Management$Customdimensions(root);
    this.customMetrics = new Resource$Management$Custommetrics(root);
    this.experiments = new Resource$Management$Experiments(root);
    this.filters = new Resource$Management$Filters(root);
    this.goals = new Resource$Management$Goals(root);
    this.profileFilterLinks = new Resource$Management$Profilefilterlinks(root);
    this.profiles = new Resource$Management$Profiles(root);
    this.profileUserLinks = new Resource$Management$Profileuserlinks(root);
    this.remarketingAudience =
        new Resource$Management$Remarketingaudience(root);
    this.segments = new Resource$Management$Segments(root);
    this.unsampledReports = new Resource$Management$Unsampledreports(root);
    this.uploads = new Resource$Management$Uploads(root);
    this.webproperties = new Resource$Management$Webproperties(root);
    this.webPropertyAdWordsLinks =
        new Resource$Management$Webpropertyadwordslinks(root);
    this.webpropertyUserLinks =
        new Resource$Management$Webpropertyuserlinks(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Management$Accounts {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.accounts.list
   * @desc Lists all accounts to which the user has access.
   * @alias analytics.management.accounts.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.max-results The maximum number of accounts to include in this response.
   * @param {integer=} params.start-index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Accounts>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Accounts>,
      callback?: BodyResponseCallback<Schema$Accounts>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Accounts>,
      callback?: BodyResponseCallback<Schema$Accounts>):
      void|AxiosPromise<Schema$Accounts> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/management/accounts')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Accounts>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Accounts>(parameters);
    }
  }
}

export class Resource$Management$Accountsummaries {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.accountSummaries.list
   * @desc Lists account summaries (lightweight tree comprised of
   * accounts/properties/profiles) to which the user has access.
   * @alias analytics.management.accountSummaries.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.max-results The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountSummaries>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountSummaries>,
      callback?: BodyResponseCallback<Schema$AccountSummaries>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountSummaries>,
      callback?: BodyResponseCallback<Schema$AccountSummaries>):
      void|AxiosPromise<Schema$AccountSummaries> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/management/accountSummaries')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountSummaries>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountSummaries>(parameters);
    }
  }
}

export class Resource$Management$Accountuserlinks {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.accountUserLinks.delete
   * @desc Removes a user from the given account.
   * @alias analytics.management.accountUserLinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the user link for.
   * @param {string} params.linkId Link ID to delete the user link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'linkId'],
      pathParams: ['accountId', 'linkId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.accountUserLinks.insert
   * @desc Adds a new user to the given account.
   * @alias analytics.management.accountUserLinks.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }


  /**
   * analytics.management.accountUserLinks.list
   * @desc Lists account-user links for a given account.
   * @alias analytics.management.accountUserLinks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve the user links for.
   * @param {integer=} params.max-results The maximum number of account-user links to include in this response.
   * @param {integer=} params.start-index An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLinks>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>):
      void|AxiosPromise<Schema$EntityUserLinks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLinks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLinks>(parameters);
    }
  }


  /**
   * analytics.management.accountUserLinks.update
   * @desc Updates permissions for an existing user on the given account.
   * @alias analytics.management.accountUserLinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to update the account-user link for.
   * @param {string} params.linkId Link ID to update the account-user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'linkId'],
      pathParams: ['accountId', 'linkId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }
}

export class Resource$Management$Customdatasources {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.customDataSources.list
   * @desc List custom data sources to which the user has access.
   * @alias analytics.management.customDataSources.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account Id for the custom data sources to retrieve.
   * @param {integer=} params.max-results The maximum number of custom data sources to include in this response.
   * @param {integer=} params.start-index A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property Id for the custom data sources to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomDataSources>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDataSources>,
      callback?: BodyResponseCallback<Schema$CustomDataSources>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDataSources>,
      callback?: BodyResponseCallback<Schema$CustomDataSources>):
      void|AxiosPromise<Schema$CustomDataSources> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDataSources>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDataSources>(parameters);
    }
  }
}

export class Resource$Management$Customdimensions {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.customDimensions.get
   * @desc Get a custom dimension to which the user has access.
   * @alias analytics.management.customDimensions.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom dimension to retrieve.
   * @param {string} params.customDimensionId The ID of the custom dimension to retrieve.
   * @param {string} params.webPropertyId Web property ID for the custom dimension to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$CustomDimension>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>):
      void|AxiosPromise<Schema$CustomDimension> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
      pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDimension>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDimension>(parameters);
    }
  }


  /**
   * analytics.management.customDimensions.insert
   * @desc Create a new custom dimension.
   * @alias analytics.management.customDimensions.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom dimension to create.
   * @param {string} params.webPropertyId Web property ID for the custom dimension to create.
   * @param {().CustomDimension} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomDimension>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>):
      void|AxiosPromise<Schema$CustomDimension> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDimension>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDimension>(parameters);
    }
  }


  /**
   * analytics.management.customDimensions.list
   * @desc Lists custom dimensions to which the user has access.
   * @alias analytics.management.customDimensions.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom dimensions to retrieve.
   * @param {integer=} params.max-results The maximum number of custom dimensions to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID for the custom dimensions to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomDimensions>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimensions>,
      callback?: BodyResponseCallback<Schema$CustomDimensions>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimensions>,
      callback?: BodyResponseCallback<Schema$CustomDimensions>):
      void|AxiosPromise<Schema$CustomDimensions> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDimensions>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDimensions>(parameters);
    }
  }


  /**
   * analytics.management.customDimensions.patch
   * @desc Updates an existing custom dimension. This method supports patch
   * semantics.
   * @alias analytics.management.customDimensions.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom dimension to update.
   * @param {string} params.customDimensionId Custom dimension ID for the custom dimension to update.
   * @param {boolean=} params.ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
   * @param {string} params.webPropertyId Web property ID for the custom dimension to update.
   * @param {().CustomDimension} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomDimension>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>):
      void|AxiosPromise<Schema$CustomDimension> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
      pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDimension>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDimension>(parameters);
    }
  }


  /**
   * analytics.management.customDimensions.update
   * @desc Updates an existing custom dimension.
   * @alias analytics.management.customDimensions.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom dimension to update.
   * @param {string} params.customDimensionId Custom dimension ID for the custom dimension to update.
   * @param {boolean=} params.ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
   * @param {string} params.webPropertyId Web property ID for the custom dimension to update.
   * @param {().CustomDimension} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomDimension>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomDimension>,
      callback?: BodyResponseCallback<Schema$CustomDimension>):
      void|AxiosPromise<Schema$CustomDimension> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
      pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomDimension>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomDimension>(parameters);
    }
  }
}

export class Resource$Management$Custommetrics {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.customMetrics.get
   * @desc Get a custom metric to which the user has access.
   * @alias analytics.management.customMetrics.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom metric to retrieve.
   * @param {string} params.customMetricId The ID of the custom metric to retrieve.
   * @param {string} params.webPropertyId Web property ID for the custom metric to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$CustomMetric>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>):
      void|AxiosPromise<Schema$CustomMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
      pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomMetric>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomMetric>(parameters);
    }
  }


  /**
   * analytics.management.customMetrics.insert
   * @desc Create a new custom metric.
   * @alias analytics.management.customMetrics.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom metric to create.
   * @param {string} params.webPropertyId Web property ID for the custom dimension to create.
   * @param {().CustomMetric} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomMetric>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>):
      void|AxiosPromise<Schema$CustomMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomMetric>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomMetric>(parameters);
    }
  }


  /**
   * analytics.management.customMetrics.list
   * @desc Lists custom metrics to which the user has access.
   * @alias analytics.management.customMetrics.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom metrics to retrieve.
   * @param {integer=} params.max-results The maximum number of custom metrics to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID for the custom metrics to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomMetrics>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetrics>,
      callback?: BodyResponseCallback<Schema$CustomMetrics>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetrics>,
      callback?: BodyResponseCallback<Schema$CustomMetrics>):
      void|AxiosPromise<Schema$CustomMetrics> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomMetrics>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomMetrics>(parameters);
    }
  }


  /**
   * analytics.management.customMetrics.patch
   * @desc Updates an existing custom metric. This method supports patch
   * semantics.
   * @alias analytics.management.customMetrics.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom metric to update.
   * @param {string} params.customMetricId Custom metric ID for the custom metric to update.
   * @param {boolean=} params.ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
   * @param {string} params.webPropertyId Web property ID for the custom metric to update.
   * @param {().CustomMetric} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomMetric>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>):
      void|AxiosPromise<Schema$CustomMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
      pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomMetric>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomMetric>(parameters);
    }
  }


  /**
   * analytics.management.customMetrics.update
   * @desc Updates an existing custom metric.
   * @alias analytics.management.customMetrics.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the custom metric to update.
   * @param {string} params.customMetricId Custom metric ID for the custom metric to update.
   * @param {boolean=} params.ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
   * @param {string} params.webPropertyId Web property ID for the custom metric to update.
   * @param {().CustomMetric} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CustomMetric>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$CustomMetric>,
      callback?: BodyResponseCallback<Schema$CustomMetric>):
      void|AxiosPromise<Schema$CustomMetric> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
      pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CustomMetric>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CustomMetric>(parameters);
    }
  }
}

export class Resource$Management$Experiments {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.experiments.delete
   * @desc Delete an experiment.
   * @alias analytics.management.experiments.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the experiment belongs
   * @param {string} params.experimentId ID of the experiment to delete
   * @param {string} params.profileId View (Profile) ID to which the experiment belongs
   * @param {string} params.webPropertyId Web property ID to which the experiment belongs
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
      pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.experiments.get
   * @desc Returns an experiment to which the user has access.
   * @alias analytics.management.experiments.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve the experiment for.
   * @param {string} params.experimentId Experiment ID to retrieve the experiment for.
   * @param {string} params.profileId View (Profile) ID to retrieve the experiment for.
   * @param {string} params.webPropertyId Web property ID to retrieve the experiment for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Experiment>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>):
      void|AxiosPromise<Schema$Experiment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
      pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Experiment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Experiment>(parameters);
    }
  }


  /**
   * analytics.management.experiments.insert
   * @desc Create a new experiment.
   * @alias analytics.management.experiments.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the experiment for.
   * @param {string} params.profileId View (Profile) ID to create the experiment for.
   * @param {string} params.webPropertyId Web property ID to create the experiment for.
   * @param {().Experiment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Experiment>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>):
      void|AxiosPromise<Schema$Experiment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Experiment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Experiment>(parameters);
    }
  }


  /**
   * analytics.management.experiments.list
   * @desc Lists experiments to which the user has access.
   * @alias analytics.management.experiments.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve experiments for.
   * @param {integer=} params.max-results The maximum number of experiments to include in this response.
   * @param {string} params.profileId View (Profile) ID to retrieve experiments for.
   * @param {integer=} params.start-index An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID to retrieve experiments for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Experiments>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiments>,
      callback?: BodyResponseCallback<Schema$Experiments>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiments>,
      callback?: BodyResponseCallback<Schema$Experiments>):
      void|AxiosPromise<Schema$Experiments> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Experiments>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Experiments>(parameters);
    }
  }


  /**
   * analytics.management.experiments.patch
   * @desc Update an existing experiment. This method supports patch semantics.
   * @alias analytics.management.experiments.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID of the experiment to update.
   * @param {string} params.experimentId Experiment ID of the experiment to update.
   * @param {string} params.profileId View (Profile) ID of the experiment to update.
   * @param {string} params.webPropertyId Web property ID of the experiment to update.
   * @param {().Experiment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Experiment>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>):
      void|AxiosPromise<Schema$Experiment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
      pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Experiment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Experiment>(parameters);
    }
  }


  /**
   * analytics.management.experiments.update
   * @desc Update an existing experiment.
   * @alias analytics.management.experiments.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID of the experiment to update.
   * @param {string} params.experimentId Experiment ID of the experiment to update.
   * @param {string} params.profileId View (Profile) ID of the experiment to update.
   * @param {string} params.webPropertyId Web property ID of the experiment to update.
   * @param {().Experiment} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Experiment>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Experiment>,
      callback?: BodyResponseCallback<Schema$Experiment>):
      void|AxiosPromise<Schema$Experiment> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'experimentId'],
      pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Experiment>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Experiment>(parameters);
    }
  }
}

export class Resource$Management$Filters {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.filters.delete
   * @desc Delete a filter.
   * @alias analytics.management.filters.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the filter for.
   * @param {string} params.filterId ID of the filter to be deleted.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/filters/{filterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'filterId'],
      pathParams: ['accountId', 'filterId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filter>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filter>(parameters);
    }
  }


  /**
   * analytics.management.filters.get
   * @desc Returns a filters to which the user has access.
   * @alias analytics.management.filters.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve filters for.
   * @param {string} params.filterId Filter ID to retrieve filters for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/filters/{filterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'filterId'],
      pathParams: ['accountId', 'filterId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filter>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filter>(parameters);
    }
  }


  /**
   * analytics.management.filters.insert
   * @desc Create a new filter.
   * @alias analytics.management.filters.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create filter for.
   * @param {().Filter} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/analytics/v3/management/accounts/{accountId}/filters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filter>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filter>(parameters);
    }
  }


  /**
   * analytics.management.filters.list
   * @desc Lists all filters for an account
   * @alias analytics.management.filters.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve filters for.
   * @param {integer=} params.max-results The maximum number of filters to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filters>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Filters>,
      callback?: BodyResponseCallback<Schema$Filters>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Filters>,
      callback?: BodyResponseCallback<Schema$Filters>):
      void|AxiosPromise<Schema$Filters> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/analytics/v3/management/accounts/{accountId}/filters')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filters>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filters>(parameters);
    }
  }


  /**
   * analytics.management.filters.patch
   * @desc Updates an existing filter. This method supports patch semantics.
   * @alias analytics.management.filters.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the filter belongs.
   * @param {string} params.filterId ID of the filter to be updated.
   * @param {().Filter} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/filters/{filterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'filterId'],
      pathParams: ['accountId', 'filterId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filter>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filter>(parameters);
    }
  }


  /**
   * analytics.management.filters.update
   * @desc Updates an existing filter.
   * @alias analytics.management.filters.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the filter belongs.
   * @param {string} params.filterId ID of the filter to be updated.
   * @param {().Filter} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Filter>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Filter>,
      callback?: BodyResponseCallback<Schema$Filter>):
      void|AxiosPromise<Schema$Filter> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/filters/{filterId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'filterId'],
      pathParams: ['accountId', 'filterId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Filter>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Filter>(parameters);
    }
  }
}

export class Resource$Management$Goals {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.goals.get
   * @desc Gets a goal to which the user has access.
   * @alias analytics.management.goals.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve the goal for.
   * @param {string} params.goalId Goal ID to retrieve the goal for.
   * @param {string} params.profileId View (Profile) ID to retrieve the goal for.
   * @param {string} params.webPropertyId Web property ID to retrieve the goal for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Goal>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>):
      void|AxiosPromise<Schema$Goal> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
      pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Goal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Goal>(parameters);
    }
  }


  /**
   * analytics.management.goals.insert
   * @desc Create a new goal.
   * @alias analytics.management.goals.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the goal for.
   * @param {string} params.profileId View (Profile) ID to create the goal for.
   * @param {string} params.webPropertyId Web property ID to create the goal for.
   * @param {().Goal} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Goal>;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>): void;
  insert(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>):
      void|AxiosPromise<Schema$Goal> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Goal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Goal>(parameters);
    }
  }


  /**
   * analytics.management.goals.list
   * @desc Lists goals to which the user has access.
   * @alias analytics.management.goals.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
   * @param {integer=} params.max-results The maximum number of goals to include in this response.
   * @param {string} params.profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
   * @param {integer=} params.start-index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Goals>;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goals>,
      callback?: BodyResponseCallback<Schema$Goals>): void;
  list(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goals>,
      callback?: BodyResponseCallback<Schema$Goals>):
      void|AxiosPromise<Schema$Goals> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Goals>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Goals>(parameters);
    }
  }


  /**
   * analytics.management.goals.patch
   * @desc Updates an existing goal. This method supports patch semantics.
   * @alias analytics.management.goals.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to update the goal.
   * @param {string} params.goalId Index of the goal to be updated.
   * @param {string} params.profileId View (Profile) ID to update the goal.
   * @param {string} params.webPropertyId Web property ID to update the goal.
   * @param {().Goal} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Goal>;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>): void;
  patch(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>):
      void|AxiosPromise<Schema$Goal> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
      pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Goal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Goal>(parameters);
    }
  }


  /**
   * analytics.management.goals.update
   * @desc Updates an existing goal.
   * @alias analytics.management.goals.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to update the goal.
   * @param {string} params.goalId Index of the goal to be updated.
   * @param {string} params.profileId View (Profile) ID to update the goal.
   * @param {string} params.webPropertyId Web property ID to update the goal.
   * @param {().Goal} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Goal>;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>): void;
  update(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Goal>,
      callback?: BodyResponseCallback<Schema$Goal>):
      void|AxiosPromise<Schema$Goal> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
      pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Goal>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Goal>(parameters);
    }
  }
}

export class Resource$Management$Profilefilterlinks {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.profileFilterLinks.delete
   * @desc Delete a profile filter link.
   * @alias analytics.management.profileFilterLinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the profile filter link belongs.
   * @param {string} params.linkId ID of the profile filter link to delete.
   * @param {string} params.profileId Profile ID to which the filter link belongs.
   * @param {string} params.webPropertyId Web property Id to which the profile filter link belongs.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.profileFilterLinks.get
   * @desc Returns a single profile filter link.
   * @alias analytics.management.profileFilterLinks.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve profile filter link for.
   * @param {string} params.linkId ID of the profile filter link.
   * @param {string} params.profileId Profile ID to retrieve filter link for.
   * @param {string} params.webPropertyId Web property Id to retrieve profile filter link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$ProfileFilterLink>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>):
      void|AxiosPromise<Schema$ProfileFilterLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProfileFilterLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProfileFilterLink>(parameters);
    }
  }


  /**
   * analytics.management.profileFilterLinks.insert
   * @desc Create a new profile filter link.
   * @alias analytics.management.profileFilterLinks.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create profile filter link for.
   * @param {string} params.profileId Profile ID to create filter link for.
   * @param {string} params.webPropertyId Web property Id to create profile filter link for.
   * @param {().ProfileFilterLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProfileFilterLink>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>):
      void|AxiosPromise<Schema$ProfileFilterLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProfileFilterLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProfileFilterLink>(parameters);
    }
  }


  /**
   * analytics.management.profileFilterLinks.list
   * @desc Lists all profile filter links for a profile.
   * @alias analytics.management.profileFilterLinks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve profile filter links for.
   * @param {integer=} params.max-results The maximum number of profile filter links to include in this response.
   * @param {string} params.profileId Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProfileFilterLinks>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLinks>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLinks>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLinks>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLinks>):
      void|AxiosPromise<Schema$ProfileFilterLinks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProfileFilterLinks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProfileFilterLinks>(parameters);
    }
  }


  /**
   * analytics.management.profileFilterLinks.patch
   * @desc Update an existing profile filter link. This method supports patch
   * semantics.
   * @alias analytics.management.profileFilterLinks.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which profile filter link belongs.
   * @param {string} params.linkId ID of the profile filter link to be updated.
   * @param {string} params.profileId Profile ID to which filter link belongs
   * @param {string} params.webPropertyId Web property Id to which profile filter link belongs
   * @param {().ProfileFilterLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProfileFilterLink>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>):
      void|AxiosPromise<Schema$ProfileFilterLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProfileFilterLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProfileFilterLink>(parameters);
    }
  }


  /**
   * analytics.management.profileFilterLinks.update
   * @desc Update an existing profile filter link.
   * @alias analytics.management.profileFilterLinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which profile filter link belongs.
   * @param {string} params.linkId ID of the profile filter link to be updated.
   * @param {string} params.profileId Profile ID to which filter link belongs
   * @param {string} params.webPropertyId Web property Id to which profile filter link belongs
   * @param {().ProfileFilterLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ProfileFilterLink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ProfileFilterLink>,
      callback?: BodyResponseCallback<Schema$ProfileFilterLink>):
      void|AxiosPromise<Schema$ProfileFilterLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ProfileFilterLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ProfileFilterLink>(parameters);
    }
  }
}

export class Resource$Management$Profiles {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.profiles.delete
   * @desc Deletes a view (profile).
   * @alias analytics.management.profiles.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the view (profile) for.
   * @param {string} params.profileId ID of the view (profile) to be deleted.
   * @param {string} params.webPropertyId Web property ID to delete the view (profile) for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.profiles.get
   * @desc Gets a view (profile) to which the user has access.
   * @alias analytics.management.profiles.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve the view (profile) for.
   * @param {string} params.profileId View (Profile) ID to retrieve the view (profile) for.
   * @param {string} params.webPropertyId Web property ID to retrieve the view (profile) for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Profile>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>):
      void|AxiosPromise<Schema$Profile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Profile>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Profile>(parameters);
    }
  }


  /**
   * analytics.management.profiles.insert
   * @desc Create a new view (profile).
   * @alias analytics.management.profiles.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the view (profile) for.
   * @param {string} params.webPropertyId Web property ID to create the view (profile) for.
   * @param {().Profile} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Profile>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>):
      void|AxiosPromise<Schema$Profile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Profile>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Profile>(parameters);
    }
  }


  /**
   * analytics.management.profiles.list
   * @desc Lists views (profiles) to which the user has access.
   * @alias analytics.management.profiles.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
   * @param {integer=} params.max-results The maximum number of views (profiles) to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Profiles>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profiles>,
      callback?: BodyResponseCallback<Schema$Profiles>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profiles>,
      callback?: BodyResponseCallback<Schema$Profiles>):
      void|AxiosPromise<Schema$Profiles> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Profiles>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Profiles>(parameters);
    }
  }


  /**
   * analytics.management.profiles.patch
   * @desc Updates an existing view (profile). This method supports patch
   * semantics.
   * @alias analytics.management.profiles.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the view (profile) belongs
   * @param {string} params.profileId ID of the view (profile) to be updated.
   * @param {string} params.webPropertyId Web property ID to which the view (profile) belongs
   * @param {().Profile} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Profile>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>):
      void|AxiosPromise<Schema$Profile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Profile>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Profile>(parameters);
    }
  }


  /**
   * analytics.management.profiles.update
   * @desc Updates an existing view (profile).
   * @alias analytics.management.profiles.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the view (profile) belongs
   * @param {string} params.profileId ID of the view (profile) to be updated.
   * @param {string} params.webPropertyId Web property ID to which the view (profile) belongs
   * @param {().Profile} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Profile>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Profile>,
      callback?: BodyResponseCallback<Schema$Profile>):
      void|AxiosPromise<Schema$Profile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Profile>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Profile>(parameters);
    }
  }
}

export class Resource$Management$Profileuserlinks {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.profileUserLinks.delete
   * @desc Removes a user from the given view (profile).
   * @alias analytics.management.profileUserLinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the user link for.
   * @param {string} params.linkId Link ID to delete the user link for.
   * @param {string} params.profileId View (Profile) ID to delete the user link for.
   * @param {string} params.webPropertyId Web Property ID to delete the user link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.profileUserLinks.insert
   * @desc Adds a new user to the given view (profile).
   * @alias analytics.management.profileUserLinks.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the user link for.
   * @param {string} params.profileId View (Profile) ID to create the user link for.
   * @param {string} params.webPropertyId Web Property ID to create the user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }


  /**
   * analytics.management.profileUserLinks.list
   * @desc Lists profile-user links for a given view (profile).
   * @alias analytics.management.profileUserLinks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID which the given view (profile) belongs to.
   * @param {integer=} params.max-results The maximum number of profile-user links to include in this response.
   * @param {string} params.profileId View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
   * @param {integer=} params.start-index An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLinks>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>):
      void|AxiosPromise<Schema$EntityUserLinks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLinks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLinks>(parameters);
    }
  }


  /**
   * analytics.management.profileUserLinks.update
   * @desc Updates permissions for an existing user on the given view (profile).
   * @alias analytics.management.profileUserLinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to update the user link for.
   * @param {string} params.linkId Link ID to update the user link for.
   * @param {string} params.profileId View (Profile ID) to update the user link for.
   * @param {string} params.webPropertyId Web Property ID to update the user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }
}

export class Resource$Management$Remarketingaudience {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.remarketingAudience.delete
   * @desc Delete a remarketing audience.
   * @alias analytics.management.remarketingAudience.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the remarketing audience belongs.
   * @param {string} params.remarketingAudienceId The ID of the remarketing audience to delete.
   * @param {string} params.webPropertyId Web property ID to which the remarketing audience belongs.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
      pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.remarketingAudience.get
   * @desc Gets a remarketing audience to which the user has access.
   * @alias analytics.management.remarketingAudience.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account ID of the remarketing audience to retrieve.
   * @param {string} params.remarketingAudienceId The ID of the remarketing audience to retrieve.
   * @param {string} params.webPropertyId The web property ID of the remarketing audience to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$RemarketingAudience>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>):
      void|AxiosPromise<Schema$RemarketingAudience> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
      pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RemarketingAudience>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RemarketingAudience>(parameters);
    }
  }


  /**
   * analytics.management.remarketingAudience.insert
   * @desc Creates a new remarketing audience.
   * @alias analytics.management.remarketingAudience.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account ID for which to create the remarketing audience.
   * @param {string} params.webPropertyId Web property ID for which to create the remarketing audience.
   * @param {().RemarketingAudience} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RemarketingAudience>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>):
      void|AxiosPromise<Schema$RemarketingAudience> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RemarketingAudience>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RemarketingAudience>(parameters);
    }
  }


  /**
   * analytics.management.remarketingAudience.list
   * @desc Lists remarketing audiences to which the user has access.
   * @alias analytics.management.remarketingAudience.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account ID of the remarketing audiences to retrieve.
   * @param {integer=} params.max-results The maximum number of remarketing audiences to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string=} params.type
   * @param {string} params.webPropertyId The web property ID of the remarketing audiences to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RemarketingAudiences>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudiences>,
      callback?: BodyResponseCallback<Schema$RemarketingAudiences>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudiences>,
      callback?: BodyResponseCallback<Schema$RemarketingAudiences>):
      void|AxiosPromise<Schema$RemarketingAudiences> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RemarketingAudiences>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RemarketingAudiences>(parameters);
    }
  }


  /**
   * analytics.management.remarketingAudience.patch
   * @desc Updates an existing remarketing audience. This method supports patch
   * semantics.
   * @alias analytics.management.remarketingAudience.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account ID of the remarketing audience to update.
   * @param {string} params.remarketingAudienceId The ID of the remarketing audience to update.
   * @param {string} params.webPropertyId The web property ID of the remarketing audience to update.
   * @param {().RemarketingAudience} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RemarketingAudience>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>):
      void|AxiosPromise<Schema$RemarketingAudience> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
      pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RemarketingAudience>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RemarketingAudience>(parameters);
    }
  }


  /**
   * analytics.management.remarketingAudience.update
   * @desc Updates an existing remarketing audience.
   * @alias analytics.management.remarketingAudience.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId The account ID of the remarketing audience to update.
   * @param {string} params.remarketingAudienceId The ID of the remarketing audience to update.
   * @param {string} params.webPropertyId The web property ID of the remarketing audience to update.
   * @param {().RemarketingAudience} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$RemarketingAudience>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$RemarketingAudience>,
      callback?: BodyResponseCallback<Schema$RemarketingAudience>):
      void|AxiosPromise<Schema$RemarketingAudience> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
      pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$RemarketingAudience>(parameters, callback);
    } else {
      return createAPIRequest<Schema$RemarketingAudience>(parameters);
    }
  }
}

export class Resource$Management$Segments {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.segments.list
   * @desc Lists segments to which the user has access.
   * @alias analytics.management.segments.list
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {integer=} params.max-results The maximum number of segments to include in this response.
   * @param {integer=} params.start-index An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Segments>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Segments>,
      callback?: BodyResponseCallback<Schema$Segments>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Segments>,
      callback?: BodyResponseCallback<Schema$Segments>):
      void|AxiosPromise<Schema$Segments> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/management/segments')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Segments>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Segments>(parameters);
    }
  }
}

export class Resource$Management$Unsampledreports {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.unsampledReports.delete
   * @desc Deletes an unsampled report.
   * @alias analytics.management.unsampledReports.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the unsampled report for.
   * @param {string} params.profileId View (Profile) ID to delete the unsampled report for.
   * @param {string} params.unsampledReportId ID of the unsampled report to be deleted.
   * @param {string} params.webPropertyId Web property ID to delete the unsampled reports for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'unsampledReportId'],
      pathParams:
          ['accountId', 'profileId', 'unsampledReportId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.unsampledReports.get
   * @desc Returns a single unsampled report.
   * @alias analytics.management.unsampledReports.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve unsampled report for.
   * @param {string} params.profileId View (Profile) ID to retrieve unsampled report for.
   * @param {string} params.unsampledReportId ID of the unsampled report to retrieve.
   * @param {string} params.webPropertyId Web property ID to retrieve unsampled reports for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$UnsampledReport>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReport>,
      callback?: BodyResponseCallback<Schema$UnsampledReport>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReport>,
      callback?: BodyResponseCallback<Schema$UnsampledReport>):
      void|AxiosPromise<Schema$UnsampledReport> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'profileId', 'unsampledReportId'],
      pathParams:
          ['accountId', 'profileId', 'unsampledReportId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UnsampledReport>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UnsampledReport>(parameters);
    }
  }


  /**
   * analytics.management.unsampledReports.insert
   * @desc Create a new unsampled report.
   * @alias analytics.management.unsampledReports.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the unsampled report for.
   * @param {string} params.profileId View (Profile) ID to create the unsampled report for.
   * @param {string} params.webPropertyId Web property ID to create the unsampled report for.
   * @param {().UnsampledReport} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UnsampledReport>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReport>,
      callback?: BodyResponseCallback<Schema$UnsampledReport>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReport>,
      callback?: BodyResponseCallback<Schema$UnsampledReport>):
      void|AxiosPromise<Schema$UnsampledReport> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UnsampledReport>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UnsampledReport>(parameters);
    }
  }


  /**
   * analytics.management.unsampledReports.list
   * @desc Lists unsampled reports to which the user has access.
   * @alias analytics.management.unsampledReports.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
   * @param {integer=} params.max-results The maximum number of unsampled reports to include in this response.
   * @param {string} params.profileId View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
   * @param {integer=} params.start-index An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$UnsampledReports>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReports>,
      callback?: BodyResponseCallback<Schema$UnsampledReports>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$UnsampledReports>,
      callback?: BodyResponseCallback<Schema$UnsampledReports>):
      void|AxiosPromise<Schema$UnsampledReports> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'profileId'],
      pathParams: ['accountId', 'profileId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$UnsampledReports>(parameters, callback);
    } else {
      return createAPIRequest<Schema$UnsampledReports>(parameters);
    }
  }
}

export class Resource$Management$Uploads {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.uploads.deleteUploadData
   * @desc Delete data associated with a previous upload.
   * @alias analytics.management.uploads.deleteUploadData
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account Id for the uploads to be deleted.
   * @param {string} params.customDataSourceId Custom data source Id for the uploads to be deleted.
   * @param {string} params.webPropertyId Web property Id for the uploads to be deleted.
   * @param {().AnalyticsDataimportDeleteUploadDataRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  deleteUploadData(params?: any, options?: MethodOptions): AxiosPromise<void>;
  deleteUploadData(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  deleteUploadData(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
      pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.uploads.get
   * @desc List uploads to which the user has access.
   * @alias analytics.management.uploads.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account Id for the upload to retrieve.
   * @param {string} params.customDataSourceId Custom data source Id for upload to retrieve.
   * @param {string} params.uploadId Upload Id to retrieve.
   * @param {string} params.webPropertyId Web property Id for the upload to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Upload>;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Upload>,
      callback?: BodyResponseCallback<Schema$Upload>): void;
  get(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Upload>,
      callback?: BodyResponseCallback<Schema$Upload>):
      void|AxiosPromise<Schema$Upload> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'customDataSourceId', 'uploadId'],
      pathParams:
          ['accountId', 'customDataSourceId', 'uploadId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Upload>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Upload>(parameters);
    }
  }


  /**
   * analytics.management.uploads.list
   * @desc List uploads to which the user has access.
   * @alias analytics.management.uploads.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account Id for the uploads to retrieve.
   * @param {string} params.customDataSourceId Custom data source Id for uploads to retrieve.
   * @param {integer=} params.max-results The maximum number of uploads to include in this response.
   * @param {integer=} params.start-index A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property Id for the uploads to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Uploads>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Uploads>,
      callback?: BodyResponseCallback<Schema$Uploads>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Uploads>,
      callback?: BodyResponseCallback<Schema$Uploads>):
      void|AxiosPromise<Schema$Uploads> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
      pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Uploads>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Uploads>(parameters);
    }
  }


  /**
   * analytics.management.uploads.uploadData
   * @desc Upload data for a custom data source.
   * @alias analytics.management.uploads.uploadData
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account Id associated with the upload.
   * @param {string} params.customDataSourceId Custom data source Id to which the data being uploaded belongs.
   * @param {string} params.webPropertyId Web property UA-string associated with the upload.
   * @param {object} params.media Media object
   * @param {string} params.media.mimeType Media mime-type
   * @param {string|object} params.media.body Media body contents
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  uploadData(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Upload>;
  uploadData(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Upload>,
      callback?: BodyResponseCallback<Schema$Upload>): void;
  uploadData(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Upload>,
      callback?: BodyResponseCallback<Schema$Upload>):
      void|AxiosPromise<Schema$Upload> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      mediaUrl:
          (rootUrl +
           '/upload/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads')
              .replace(/([^:]\/)\/+/g, '$1'),
      requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
      pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Upload>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Upload>(parameters);
    }
  }
}

export class Resource$Management$Webproperties {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.webproperties.get
   * @desc Gets a web property to which the user has access.
   * @alias analytics.management.webproperties.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve the web property for.
   * @param {string} params.webPropertyId ID to retrieve the web property for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Webproperty>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>):
      void|AxiosPromise<Schema$Webproperty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Webproperty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Webproperty>(parameters);
    }
  }


  /**
   * analytics.management.webproperties.insert
   * @desc Create a new property if the account has fewer than 20 properties.
   * Web properties are visible in the Google Analytics interface only if they
   * have at least one profile.
   * @alias analytics.management.webproperties.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the web property for.
   * @param {().Webproperty} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Webproperty>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>):
      void|AxiosPromise<Schema$Webproperty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/analytics/v3/management/accounts/{accountId}/webproperties')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Webproperty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Webproperty>(parameters);
    }
  }


  /**
   * analytics.management.webproperties.list
   * @desc Lists web properties to which the user has access.
   * @alias analytics.management.webproperties.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
   * @param {integer=} params.max-results The maximum number of web properties to include in this response.
   * @param {integer=} params.start-index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Webproperties>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperties>,
      callback?: BodyResponseCallback<Schema$Webproperties>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperties>,
      callback?: BodyResponseCallback<Schema$Webproperties>):
      void|AxiosPromise<Schema$Webproperties> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl +
                  '/analytics/v3/management/accounts/{accountId}/webproperties')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId'],
      pathParams: ['accountId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Webproperties>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Webproperties>(parameters);
    }
  }


  /**
   * analytics.management.webproperties.patch
   * @desc Updates an existing web property. This method supports patch
   * semantics.
   * @alias analytics.management.webproperties.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the web property belongs
   * @param {string} params.webPropertyId Web property ID
   * @param {().Webproperty} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Webproperty>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>):
      void|AxiosPromise<Schema$Webproperty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Webproperty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Webproperty>(parameters);
    }
  }


  /**
   * analytics.management.webproperties.update
   * @desc Updates an existing web property.
   * @alias analytics.management.webproperties.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to which the web property belongs
   * @param {string} params.webPropertyId Web property ID
   * @param {().Webproperty} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$Webproperty>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Webproperty>,
      callback?: BodyResponseCallback<Schema$Webproperty>):
      void|AxiosPromise<Schema$Webproperty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Webproperty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Webproperty>(parameters);
    }
  }
}

export class Resource$Management$Webpropertyadwordslinks {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.delete
   * @desc Deletes a web property-AdWords link.
   * @alias analytics.management.webPropertyAdWordsLinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the account which the given web property belongs to.
   * @param {string} params.webPropertyAdWordsLinkId Web property AdWords link ID.
   * @param {string} params.webPropertyId Web property ID to delete the AdWords link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
      pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.get
   * @desc Returns a web property-AdWords link to which the user has access.
   * @alias analytics.management.webPropertyAdWordsLinks.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the account which the given web property belongs to.
   * @param {string} params.webPropertyAdWordsLinkId Web property-AdWords link ID.
   * @param {string} params.webPropertyId Web property ID to retrieve the AdWords link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$EntityAdWordsLink>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>):
      void|AxiosPromise<Schema$EntityAdWordsLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
      pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityAdWordsLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
    }
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.insert
   * @desc Creates a webProperty-AdWords link.
   * @alias analytics.management.webPropertyAdWordsLinks.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the Google Analytics account to create the link for.
   * @param {string} params.webPropertyId Web property ID to create the link for.
   * @param {().EntityAdWordsLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityAdWordsLink>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>):
      void|AxiosPromise<Schema$EntityAdWordsLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityAdWordsLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
    }
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.list
   * @desc Lists webProperty-AdWords links for a given web property.
   * @alias analytics.management.webPropertyAdWordsLinks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the account which the given web property belongs to.
   * @param {integer=} params.max-results The maximum number of webProperty-AdWords links to include in this response.
   * @param {integer=} params.start-index An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web property ID to retrieve the AdWords links for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityAdWordsLinks>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLinks>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLinks>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLinks>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLinks>):
      void|AxiosPromise<Schema$EntityAdWordsLinks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityAdWordsLinks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityAdWordsLinks>(parameters);
    }
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.patch
   * @desc Updates an existing webProperty-AdWords link. This method supports
   * patch semantics.
   * @alias analytics.management.webPropertyAdWordsLinks.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the account which the given web property belongs to.
   * @param {string} params.webPropertyAdWordsLinkId Web property-AdWords link ID.
   * @param {string} params.webPropertyId Web property ID to retrieve the AdWords link for.
   * @param {().EntityAdWordsLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityAdWordsLink>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>):
      void|AxiosPromise<Schema$EntityAdWordsLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
      pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityAdWordsLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
    }
  }


  /**
   * analytics.management.webPropertyAdWordsLinks.update
   * @desc Updates an existing webProperty-AdWords link.
   * @alias analytics.management.webPropertyAdWordsLinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId ID of the account which the given web property belongs to.
   * @param {string} params.webPropertyAdWordsLinkId Web property-AdWords link ID.
   * @param {string} params.webPropertyId Web property ID to retrieve the AdWords link for.
   * @param {().EntityAdWordsLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityAdWordsLink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback?: BodyResponseCallback<Schema$EntityAdWordsLink>):
      void|AxiosPromise<Schema$EntityAdWordsLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams:
          ['accountId', 'webPropertyId', 'webPropertyAdWordsLinkId'],
      pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityAdWordsLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
    }
  }
}

export class Resource$Management$Webpropertyuserlinks {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.management.webpropertyUserLinks.delete
   * @desc Removes a user from the given web property.
   * @alias analytics.management.webpropertyUserLinks.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to delete the user link for.
   * @param {string} params.linkId Link ID to delete the user link for.
   * @param {string} params.webPropertyId Web Property ID to delete the user link for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }


  /**
   * analytics.management.webpropertyUserLinks.insert
   * @desc Adds a new user to the given web property.
   * @alias analytics.management.webpropertyUserLinks.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to create the user link for.
   * @param {string} params.webPropertyId Web Property ID to create the user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  insert(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }


  /**
   * analytics.management.webpropertyUserLinks.list
   * @desc Lists webProperty-user links for a given web property.
   * @alias analytics.management.webpropertyUserLinks.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID which the given web property belongs to.
   * @param {integer=} params.max-results The maximum number of webProperty-user Links to include in this response.
   * @param {integer=} params.start-index An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
   * @param {string} params.webPropertyId Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLinks>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLinks>,
      callback?: BodyResponseCallback<Schema$EntityUserLinks>):
      void|AxiosPromise<Schema$EntityUserLinks> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId'],
      pathParams: ['accountId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLinks>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLinks>(parameters);
    }
  }


  /**
   * analytics.management.webpropertyUserLinks.update
   * @desc Updates permissions for an existing user on the given web property.
   * @alias analytics.management.webpropertyUserLinks.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.accountId Account ID to update the account-user link for.
   * @param {string} params.linkId Link ID to update the account-user link for.
   * @param {string} params.webPropertyId Web property ID to update the account-user link for.
   * @param {().EntityUserLink} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$EntityUserLink>;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>): void;
  update(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$EntityUserLink>,
      callback?: BodyResponseCallback<Schema$EntityUserLink>):
      void|AxiosPromise<Schema$EntityUserLink> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT'
          },
          options),
      params,
      requiredParams: ['accountId', 'webPropertyId', 'linkId'],
      pathParams: ['accountId', 'linkId', 'webPropertyId'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$EntityUserLink>(parameters, callback);
    } else {
      return createAPIRequest<Schema$EntityUserLink>(parameters);
    }
  }
}


export class Resource$Metadata {
  root: Analytics;
  columns: Resource$Metadata$Columns;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
    this.columns = new Resource$Metadata$Columns(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Metadata$Columns {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.metadata.columns.list
   * @desc Lists all columns for a report type
   * @alias analytics.metadata.columns.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.reportType Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions): AxiosPromise<Schema$Columns>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Columns>,
      callback?: BodyResponseCallback<Schema$Columns>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Columns>,
      callback?: BodyResponseCallback<Schema$Columns>):
      void|AxiosPromise<Schema$Columns> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/metadata/{reportType}/columns')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['reportType'],
      pathParams: ['reportType'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Columns>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Columns>(parameters);
    }
  }
}


export class Resource$Provisioning {
  root: Analytics;
  constructor(root: Analytics) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * analytics.provisioning.createAccountTicket
   * @desc Creates an account ticket.
   * @alias analytics.provisioning.createAccountTicket
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().AccountTicket} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createAccountTicket(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountTicket>;
  createAccountTicket(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTicket>,
      callback?: BodyResponseCallback<Schema$AccountTicket>): void;
  createAccountTicket(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTicket>,
      callback?: BodyResponseCallback<Schema$AccountTicket>):
      void|AxiosPromise<Schema$AccountTicket> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/provisioning/createAccountTicket')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountTicket>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountTicket>(parameters);
    }
  }


  /**
   * analytics.provisioning.createAccountTree
   * @desc Provision account.
   * @alias analytics.provisioning.createAccountTree
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().AccountTreeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createAccountTree(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$AccountTreeResponse>;
  createAccountTree(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTreeResponse>,
      callback?: BodyResponseCallback<Schema$AccountTreeResponse>): void;
  createAccountTree(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$AccountTreeResponse>,
      callback?: BodyResponseCallback<Schema$AccountTreeResponse>):
      void|AxiosPromise<Schema$AccountTreeResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/provisioning/createAccountTree')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: [],
      pathParams: [],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$AccountTreeResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$AccountTreeResponse>(parameters);
    }
  }
}

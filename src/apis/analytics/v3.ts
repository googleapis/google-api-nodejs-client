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

export namespace analytics_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Google Analytics API
   *
   * Views and manages your Google Analytics data.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const analytics = google.analytics('v3');
   * ```
   */
  export class Analytics {
    context: APIRequestContext;
    data: Resource$Data;
    management: Resource$Management;
    metadata: Resource$Metadata;
    provisioning: Resource$Provisioning;
    userDeletion: Resource$Userdeletion;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.data = new Resource$Data(this.context);
      this.management = new Resource$Management(this.context);
      this.metadata = new Resource$Metadata(this.context);
      this.provisioning = new Resource$Provisioning(this.context);
      this.userDeletion = new Resource$Userdeletion(this.context);
    }
  }

  /**
   * JSON template for Analytics account entry.
   */
  export interface Schema$Account {
    /**
     * Child link for an account entry. Points to the list of web properties for this account.
     */
    childLink?: {href?: string; type?: string} | null;
    /**
     * Time the account was created.
     */
    created?: string | null;
    /**
     * Account ID.
     */
    id?: string | null;
    /**
     * Resource type for Analytics account.
     */
    kind?: string | null;
    /**
     * Account name.
     */
    name?: string | null;
    /**
     * Permissions the user has for this account.
     */
    permissions?: {effective?: string[]} | null;
    /**
     * Link for this account.
     */
    selfLink?: string | null;
    /**
     * Indicates whether this account is starred or not.
     */
    starred?: boolean | null;
    /**
     * Time the account was last modified.
     */
    updated?: string | null;
  }
  /**
   * JSON template for a linked account.
   */
  export interface Schema$AccountRef {
    /**
     * Link for this account.
     */
    href?: string | null;
    /**
     * Account ID.
     */
    id?: string | null;
    /**
     * Analytics account reference.
     */
    kind?: string | null;
    /**
     * Account name.
     */
    name?: string | null;
  }
  /**
   * An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
   */
  export interface Schema$Accounts {
    /**
     * A list of accounts.
     */
    items?: Schema$Account[];
    /**
     * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Next link for this account collection.
     */
    nextLink?: string | null;
    /**
     * Previous link for this account collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
   */
  export interface Schema$AccountSummaries {
    /**
     * A list of AccountSummaries.
     */
    items?: Schema$AccountSummary[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this AccountSummary collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this AccountSummary collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
   */
  export interface Schema$AccountSummary {
    /**
     * Account ID.
     */
    id?: string | null;
    /**
     * Resource type for Analytics AccountSummary.
     */
    kind?: string | null;
    /**
     * Account name.
     */
    name?: string | null;
    /**
     * Indicates whether this account is starred or not.
     */
    starred?: boolean | null;
    /**
     * List of web properties under this account.
     */
    webProperties?: Schema$WebPropertySummary[];
  }
  /**
   * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
   */
  export interface Schema$AccountTicket {
    /**
     * Account for this ticket.
     */
    account?: Schema$Account;
    /**
     * Account ticket ID used to access the account ticket.
     */
    id?: string | null;
    /**
     * Resource type for account ticket.
     */
    kind?: string | null;
    /**
     * View (Profile) for the account.
     */
    profile?: Schema$Profile;
    /**
     * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
     */
    redirectUri?: string | null;
    /**
     * Web property for the account.
     */
    webproperty?: Schema$Webproperty;
  }
  /**
   * JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
   */
  export interface Schema$AccountTreeRequest {
    accountName?: string | null;
    /**
     * Resource type for account ticket.
     */
    kind?: string | null;
    profileName?: string | null;
    timezone?: string | null;
    webpropertyName?: string | null;
    websiteUrl?: string | null;
  }
  /**
   * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
   */
  export interface Schema$AccountTreeResponse {
    /**
     * The account created.
     */
    account?: Schema$Account;
    /**
     * Resource type for account ticket.
     */
    kind?: string | null;
    /**
     * View (Profile) for the account.
     */
    profile?: Schema$Profile;
    /**
     * Web property for the account.
     */
    webproperty?: Schema$Webproperty;
  }
  /**
   * JSON template for an Google Ads account.
   */
  export interface Schema$AdWordsAccount {
    /**
     * True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.
     */
    autoTaggingEnabled?: boolean | null;
    /**
     * Customer ID. This field is required when creating a Google Ads link.
     */
    customerId?: string | null;
    /**
     * Resource type for Google Ads account.
     */
    kind?: string | null;
  }
  /**
   * Request template for the delete upload data request.
   */
  export interface Schema$AnalyticsDataimportDeleteUploadDataRequest {
    /**
     * A list of upload UIDs.
     */
    customDataImportUids?: string[] | null;
  }
  /**
   * JSON template for a metadata column.
   */
  export interface Schema$Column {
    /**
     * Map of attribute name and value for this column.
     */
    attributes?: {[key: string]: string} | null;
    /**
     * Column id.
     */
    id?: string | null;
    /**
     * Resource type for Analytics column.
     */
    kind?: string | null;
  }
  /**
   * Lists columns (dimensions and metrics) for a particular report type.
   */
  export interface Schema$Columns {
    /**
     * List of attributes names returned by columns.
     */
    attributeNames?: string[] | null;
    /**
     * Etag of collection. This etag can be compared with the last response etag to check if response has changed.
     */
    etag?: string | null;
    /**
     * List of columns for a report type.
     */
    items?: Schema$Column[];
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Total number of columns returned in the response.
     */
    totalResults?: number | null;
  }
  /**
   * JSON template for an Analytics custom data source.
   */
  export interface Schema$CustomDataSource {
    /**
     * Account ID to which this custom data source belongs.
     */
    accountId?: string | null;
    childLink?: {href?: string; type?: string} | null;
    /**
     * Time this custom data source was created.
     */
    created?: string | null;
    /**
     * Description of custom data source.
     */
    description?: string | null;
    /**
     * Custom data source ID.
     */
    id?: string | null;
    importBehavior?: string | null;
    /**
     * Resource type for Analytics custom data source.
     */
    kind?: string | null;
    /**
     * Name of this custom data source.
     */
    name?: string | null;
    /**
     * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * IDs of views (profiles) linked to the custom data source.
     */
    profilesLinked?: string[] | null;
    /**
     * Collection of schema headers of the custom data source.
     */
    schema?: string[] | null;
    /**
     * Link for this Analytics custom data source.
     */
    selfLink?: string | null;
    /**
     * Type of the custom data source.
     */
    type?: string | null;
    /**
     * Time this custom data source was last modified.
     */
    updated?: string | null;
    /**
     * Upload type of the custom data source.
     */
    uploadType?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
     */
    webPropertyId?: string | null;
  }
  /**
   * Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
   */
  export interface Schema$CustomDataSources {
    /**
     * Collection of custom data sources.
     */
    items?: Schema$CustomDataSource[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this custom data source collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this custom data source collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for Analytics Custom Dimension.
   */
  export interface Schema$CustomDimension {
    /**
     * Account ID.
     */
    accountId?: string | null;
    /**
     * Boolean indicating whether the custom dimension is active.
     */
    active?: boolean | null;
    /**
     * Time the custom dimension was created.
     */
    created?: string | null;
    /**
     * Custom dimension ID.
     */
    id?: string | null;
    /**
     * Index of the custom dimension.
     */
    index?: number | null;
    /**
     * Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
     */
    kind?: string | null;
    /**
     * Name of the custom dimension.
     */
    name?: string | null;
    /**
     * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
     */
    scope?: string | null;
    /**
     * Link for the custom dimension
     */
    selfLink?: string | null;
    /**
     * Time the custom dimension was last modified.
     */
    updated?: string | null;
    /**
     * Property ID.
     */
    webPropertyId?: string | null;
  }
  /**
   * A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.
   */
  export interface Schema$CustomDimensions {
    /**
     * Collection of custom dimensions.
     */
    items?: Schema$CustomDimension[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this custom dimension collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this custom dimension collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for Analytics Custom Metric.
   */
  export interface Schema$CustomMetric {
    /**
     * Account ID.
     */
    accountId?: string | null;
    /**
     * Boolean indicating whether the custom metric is active.
     */
    active?: boolean | null;
    /**
     * Time the custom metric was created.
     */
    created?: string | null;
    /**
     * Custom metric ID.
     */
    id?: string | null;
    /**
     * Index of the custom metric.
     */
    index?: number | null;
    /**
     * Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
     */
    kind?: string | null;
    /**
     * Max value of custom metric.
     */
    max_value?: string | null;
    /**
     * Min value of custom metric.
     */
    min_value?: string | null;
    /**
     * Name of the custom metric.
     */
    name?: string | null;
    /**
     * Parent link for the custom metric. Points to the property to which the custom metric belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * Scope of the custom metric: HIT or PRODUCT.
     */
    scope?: string | null;
    /**
     * Link for the custom metric
     */
    selfLink?: string | null;
    /**
     * Data type of custom metric.
     */
    type?: string | null;
    /**
     * Time the custom metric was last modified.
     */
    updated?: string | null;
    /**
     * Property ID.
     */
    webPropertyId?: string | null;
  }
  /**
   * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
   */
  export interface Schema$CustomMetrics {
    /**
     * Collection of custom metrics.
     */
    items?: Schema$CustomMetric[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this custom metric collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this custom metric collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for Analytics Entity Google Ads Link.
   */
  export interface Schema$EntityAdWordsLink {
    /**
     * A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.
     */
    adWordsAccounts?: Schema$AdWordsAccount[];
    /**
     * Web property being linked.
     */
    entity?: {webPropertyRef?: Schema$WebPropertyRef} | null;
    /**
     * Entity Google Ads link ID
     */
    id?: string | null;
    /**
     * Resource type for entity Google Ads link.
     */
    kind?: string | null;
    /**
     * Name of the link. This field is required when creating a Google Ads link.
     */
    name?: string | null;
    /**
     * IDs of linked Views (Profiles) represented as strings.
     */
    profileIds?: string[] | null;
    /**
     * URL link for this Google Analytics - Google Ads link.
     */
    selfLink?: string | null;
  }
  /**
   * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
   */
  export interface Schema$EntityAdWordsLinks {
    /**
     * A list of entity Google Ads links.
     */
    items?: Schema$EntityAdWordsLink[];
    /**
     * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Next link for this Google Ads link collection.
     */
    nextLink?: string | null;
    /**
     * Previous link for this Google Ads link collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
  }
  /**
   * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
   */
  export interface Schema$EntityUserLink {
    /**
     * Entity for this link. It can be an account, a web property, or a view (profile).
     */
    entity?: {
      accountRef?: Schema$AccountRef;
      profileRef?: Schema$ProfileRef;
      webPropertyRef?: Schema$WebPropertyRef;
    } | null;
    /**
     * Entity user link ID
     */
    id?: string | null;
    /**
     * Resource type for entity user link.
     */
    kind?: string | null;
    /**
     * Permissions the user has for this entity.
     */
    permissions?: {effective?: string[]; local?: string[]} | null;
    /**
     * Self link for this resource.
     */
    selfLink?: string | null;
    /**
     * User reference.
     */
    userRef?: Schema$UserRef;
  }
  /**
   * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
   */
  export interface Schema$EntityUserLinks {
    /**
     * A list of entity user links.
     */
    items?: Schema$EntityUserLink[];
    /**
     * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Next link for this account collection.
     */
    nextLink?: string | null;
    /**
     * Previous link for this account collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
  }
  /**
   * JSON template for Analytics experiment resource.
   */
  export interface Schema$Experiment {
    /**
     * Account ID to which this experiment belongs. This field is read-only.
     */
    accountId?: string | null;
    /**
     * Time the experiment was created. This field is read-only.
     */
    created?: string | null;
    /**
     * Notes about this experiment.
     */
    description?: string | null;
    /**
     * If true, the end user will be able to edit the experiment via the Google Analytics user interface.
     */
    editableInGaUi?: boolean | null;
    /**
     * The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
     */
    endTime?: string | null;
    /**
     * Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
     */
    equalWeighting?: boolean | null;
    /**
     * Experiment ID. Required for patch and update. Disallowed for create.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this experiment belongs. This field is read-only.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for an Analytics experiment. This field is read-only.
     */
    kind?: string | null;
    /**
     * An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
     */
    minimumExperimentLengthInDays?: number | null;
    /**
     * Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
     */
    name?: string | null;
    /**
     * The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
     */
    objectiveMetric?: string | null;
    /**
     * Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
     */
    optimizationType?: string | null;
    /**
     * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * View (Profile) ID to which this experiment belongs. This field is read-only.
     */
    profileId?: string | null;
    /**
     * Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
     */
    reasonExperimentEnded?: string | null;
    /**
     * Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
     */
    rewriteVariationUrlsAsOriginal?: boolean | null;
    /**
     * Link for this experiment. This field is read-only.
     */
    selfLink?: string | null;
    /**
     * The framework used to serve the experiment variations and evaluate the results. One of:
     * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
     * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
     * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
     */
    servingFramework?: string | null;
    /**
     * The snippet of code to include on the control page(s). This field is read-only.
     */
    snippet?: string | null;
    /**
     * The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
     */
    startTime?: string | null;
    /**
     * Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
     */
    status?: string | null;
    /**
     * A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
     */
    trafficCoverage?: number | null;
    /**
     * Time the experiment was last modified. This field is read-only.
     */
    updated?: string | null;
    /**
     * Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
     */
    variations?: Array<{
      name?: string;
      status?: string;
      url?: string;
      weight?: number;
      won?: boolean;
    }> | null;
    /**
     * Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
     */
    webPropertyId?: string | null;
    /**
     * A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
     */
    winnerConfidenceLevel?: number | null;
    /**
     * Boolean specifying whether a winner has been found for this experiment. This field is read-only.
     */
    winnerFound?: boolean | null;
  }
  /**
   * An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
   */
  export interface Schema$Experiments {
    /**
     * A list of experiments.
     */
    items?: Schema$Experiment[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this experiment collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this experiment collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for an Analytics account filter.
   */
  export interface Schema$Filter {
    /**
     * Account ID to which this filter belongs.
     */
    accountId?: string | null;
    /**
     * Details for the filter of the type ADVANCED.
     */
    advancedDetails?: {
      caseSensitive?: boolean;
      extractA?: string;
      extractB?: string;
      fieldA?: string;
      fieldAIndex?: number;
      fieldARequired?: boolean;
      fieldB?: string;
      fieldBIndex?: number;
      fieldBRequired?: boolean;
      outputConstructor?: string;
      outputToField?: string;
      outputToFieldIndex?: number;
      overrideOutputField?: boolean;
    } | null;
    /**
     * Time this filter was created.
     */
    created?: string | null;
    /**
     * Details for the filter of the type EXCLUDE.
     */
    excludeDetails?: Schema$FilterExpression;
    /**
     * Filter ID.
     */
    id?: string | null;
    /**
     * Details for the filter of the type INCLUDE.
     */
    includeDetails?: Schema$FilterExpression;
    /**
     * Resource type for Analytics filter.
     */
    kind?: string | null;
    /**
     * Details for the filter of the type LOWER.
     */
    lowercaseDetails?: {field?: string; fieldIndex?: number} | null;
    /**
     * Name of this filter.
     */
    name?: string | null;
    /**
     * Parent link for this filter. Points to the account to which this filter belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * Details for the filter of the type SEARCH_AND_REPLACE.
     */
    searchAndReplaceDetails?: {
      caseSensitive?: boolean;
      field?: string;
      fieldIndex?: number;
      replaceString?: string;
      searchString?: string;
    } | null;
    /**
     * Link for this filter.
     */
    selfLink?: string | null;
    /**
     * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
     */
    type?: string | null;
    /**
     * Time this filter was last modified.
     */
    updated?: string | null;
    /**
     * Details for the filter of the type UPPER.
     */
    uppercaseDetails?: {field?: string; fieldIndex?: number} | null;
  }
  /**
   * JSON template for an Analytics filter expression.
   */
  export interface Schema$FilterExpression {
    /**
     * Determines if the filter is case sensitive.
     */
    caseSensitive?: boolean | null;
    /**
     * Filter expression value
     */
    expressionValue?: string | null;
    /**
     * Field to filter. Possible values:
     * - Content and Traffic
     * - PAGE_REQUEST_URI,
     * - PAGE_HOSTNAME,
     * - PAGE_TITLE,
     * - REFERRAL,
     * - COST_DATA_URI (Campaign target URL),
     * - HIT_TYPE,
     * - INTERNAL_SEARCH_TERM,
     * - INTERNAL_SEARCH_TYPE,
     * - SOURCE_PROPERTY_TRACKING_ID,
     * - Campaign or AdGroup
     * - CAMPAIGN_SOURCE,
     * - CAMPAIGN_MEDIUM,
     * - CAMPAIGN_NAME,
     * - CAMPAIGN_AD_GROUP,
     * - CAMPAIGN_TERM,
     * - CAMPAIGN_CONTENT,
     * - CAMPAIGN_CODE,
     * - CAMPAIGN_REFERRAL_PATH,
     * - E-Commerce
     * - TRANSACTION_COUNTRY,
     * - TRANSACTION_REGION,
     * - TRANSACTION_CITY,
     * - TRANSACTION_AFFILIATION (Store or order location),
     * - ITEM_NAME,
     * - ITEM_CODE,
     * - ITEM_VARIATION,
     * - TRANSACTION_ID,
     * - TRANSACTION_CURRENCY_CODE,
     * - PRODUCT_ACTION_TYPE,
     * - Audience/Users
     * - BROWSER,
     * - BROWSER_VERSION,
     * - BROWSER_SIZE,
     * - PLATFORM,
     * - PLATFORM_VERSION,
     * - LANGUAGE,
     * - SCREEN_RESOLUTION,
     * - SCREEN_COLORS,
     * - JAVA_ENABLED (Boolean Field),
     * - FLASH_VERSION,
     * - GEO_SPEED (Connection speed),
     * - VISITOR_TYPE,
     * - GEO_ORGANIZATION (ISP organization),
     * - GEO_DOMAIN,
     * - GEO_IP_ADDRESS,
     * - GEO_IP_VERSION,
     * - Location
     * - GEO_COUNTRY,
     * - GEO_REGION,
     * - GEO_CITY,
     * - Event
     * - EVENT_CATEGORY,
     * - EVENT_ACTION,
     * - EVENT_LABEL,
     * - Other
     * - CUSTOM_FIELD_1,
     * - CUSTOM_FIELD_2,
     * - USER_DEFINED_VALUE,
     * - Application
     * - APP_ID,
     * - APP_INSTALLER_ID,
     * - APP_NAME,
     * - APP_VERSION,
     * - SCREEN,
     * - IS_APP (Boolean Field),
     * - IS_FATAL_EXCEPTION (Boolean Field),
     * - EXCEPTION_DESCRIPTION,
     * - Mobile device
     * - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
     * - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
     * - DEVICE_CATEGORY,
     * - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
     * - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
     * - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
     * - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
     * - MOBILE_BRAND_NAME,
     * - MOBILE_MODEL_NAME,
     * - MOBILE_MARKETING_NAME,
     * - MOBILE_POINTING_METHOD,
     * - Social
     * - SOCIAL_NETWORK,
     * - SOCIAL_ACTION,
     * - SOCIAL_ACTION_TARGET,
     * - Custom dimension
     * - CUSTOM_DIMENSION (See accompanying field index),
     */
    field?: string | null;
    /**
     * The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.
     */
    fieldIndex?: number | null;
    /**
     * Kind value for filter expression
     */
    kind?: string | null;
    /**
     * Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.
     */
    matchType?: string | null;
  }
  /**
   * JSON template for a profile filter link.
   */
  export interface Schema$FilterRef {
    /**
     * Account ID to which this filter belongs.
     */
    accountId?: string | null;
    /**
     * Link for this filter.
     */
    href?: string | null;
    /**
     * Filter ID.
     */
    id?: string | null;
    /**
     * Kind value for filter reference.
     */
    kind?: string | null;
    /**
     * Name of this filter.
     */
    name?: string | null;
  }
  /**
   * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
   */
  export interface Schema$Filters {
    /**
     * A list of filters.
     */
    items?: Schema$Filter[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this filter collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this filter collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * Analytics data for a given view (profile).
   */
  export interface Schema$GaData {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: Array<{
      columnType?: string;
      dataType?: string;
      name?: string;
    }> | null;
    /**
     * Determines if Analytics data contains samples.
     */
    containsSampledData?: boolean | null;
    /**
     * The last refreshed time in seconds for Analytics data.
     */
    dataLastRefreshed?: string | null;
    dataTable?: {
      cols?: Array<{id?: string; label?: string; type?: string}>;
      rows?: Array<{c?: Array<{v?: string}>}>;
    } | null;
    /**
     * Unique ID for this data response.
     */
    id?: string | null;
    /**
     * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Link to next page for this Analytics data query.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this Analytics data query.
     */
    previousLink?: string | null;
    /**
     * Information for the view (profile), for which the Analytics data was requested.
     */
    profileInfo?: {
      accountId?: string;
      internalWebPropertyId?: string;
      profileId?: string;
      profileName?: string;
      tableId?: string;
      webPropertyId?: string;
    } | null;
    /**
     * Analytics data request query parameters.
     */
    query?: {
      dimensions?: string;
      'end-date'?: string;
      filters?: string;
      ids?: string;
      'max-results'?: number;
      metrics?: string[];
      samplingLevel?: string;
      segment?: string;
      sort?: string[];
      'start-date'?: string;
      'start-index'?: number;
    } | null;
    /**
     * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: string[][] | null;
    /**
     * The number of samples used to calculate the result.
     */
    sampleSize?: string | null;
    /**
     * Total size of the sample space from which the samples were selected.
     */
    sampleSpace?: string | null;
    /**
     * Link to this page.
     */
    selfLink?: string | null;
    /**
     * The total number of rows for the query, regardless of the number of rows in the response.
     */
    totalResults?: number | null;
    /**
     * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
     */
    totalsForAllResults?: {[key: string]: string} | null;
  }
  /**
   * JSON template for Analytics goal resource.
   */
  export interface Schema$Goal {
    /**
     * Account ID to which this goal belongs.
     */
    accountId?: string | null;
    /**
     * Determines whether this goal is active.
     */
    active?: boolean | null;
    /**
     * Time this goal was created.
     */
    created?: string | null;
    /**
     * Details for the goal of the type EVENT.
     */
    eventDetails?: {
      eventConditions?: Array<{
        comparisonType?: string;
        comparisonValue?: string;
        expression?: string;
        matchType?: string;
        type?: string;
      }>;
      useEventValue?: boolean;
    } | null;
    /**
     * Goal ID.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this goal belongs.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for an Analytics goal.
     */
    kind?: string | null;
    /**
     * Goal name.
     */
    name?: string | null;
    /**
     * Parent link for a goal. Points to the view (profile) to which this goal belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * View (Profile) ID to which this goal belongs.
     */
    profileId?: string | null;
    /**
     * Link for this goal.
     */
    selfLink?: string | null;
    /**
     * Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
     */
    type?: string | null;
    /**
     * Time this goal was last modified.
     */
    updated?: string | null;
    /**
     * Details for the goal of the type URL_DESTINATION.
     */
    urlDestinationDetails?: {
      caseSensitive?: boolean;
      firstStepRequired?: boolean;
      matchType?: string;
      steps?: Array<{name?: string; number?: number; url?: string}>;
      url?: string;
    } | null;
    /**
     * Goal value.
     */
    value?: number | null;
    /**
     * Details for the goal of the type VISIT_NUM_PAGES.
     */
    visitNumPagesDetails?: {
      comparisonType?: string;
      comparisonValue?: string;
    } | null;
    /**
     * Details for the goal of the type VISIT_TIME_ON_SITE.
     */
    visitTimeOnSiteDetails?: {
      comparisonType?: string;
      comparisonValue?: string;
    } | null;
    /**
     * Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
     */
    webPropertyId?: string | null;
  }
  /**
   * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
   */
  export interface Schema$Goals {
    /**
     * A list of goals.
     */
    items?: Schema$Goal[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this goal collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this goal collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for a hash Client Id request resource.
   */
  export interface Schema$HashClientIdRequest {
    clientId?: string | null;
    kind?: string | null;
    webPropertyId?: string | null;
  }
  /**
   * JSON template for a hash Client Id response resource.
   */
  export interface Schema$HashClientIdResponse {
    clientId?: string | null;
    hashedClientId?: string | null;
    kind?: string | null;
    webPropertyId?: string | null;
  }
  /**
   * JSON template for an Analytics Remarketing Include Conditions.
   */
  export interface Schema$IncludeConditions {
    /**
     * The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.
     */
    daysToLookBack?: number | null;
    /**
     * Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
     */
    isSmartList?: boolean | null;
    /**
     * Resource type for include conditions.
     */
    kind?: string | null;
    /**
     * Number of days (in the range 1 to 540) a user remains in the audience.
     */
    membershipDurationDays?: number | null;
    /**
     * The segment condition that will cause a user to be added to an audience.
     */
    segment?: string | null;
  }
  /**
   * JSON template for an Analytics Remarketing Audience Foreign Link.
   */
  export interface Schema$LinkedForeignAccount {
    /**
     * Account ID to which this linked foreign account belongs.
     */
    accountId?: string | null;
    /**
     * Boolean indicating whether this is eligible for search.
     */
    eligibleForSearch?: boolean | null;
    /**
     * Entity ad account link ID.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this linked foreign account belongs.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for linked foreign account.
     */
    kind?: string | null;
    /**
     * The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.
     */
    linkedAccountId?: string | null;
    /**
     * Remarketing audience ID to which this linked foreign account belongs.
     */
    remarketingAudienceId?: string | null;
    /**
     * The status of this foreign account link.
     */
    status?: string | null;
    /**
     * The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
     */
    type?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
     */
    webPropertyId?: string | null;
  }
  /**
   * Multi-Channel Funnels data for a given view (profile).
   */
  export interface Schema$McfData {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: Array<{
      columnType?: string;
      dataType?: string;
      name?: string;
    }> | null;
    /**
     * Determines if the Analytics data contains sampled data.
     */
    containsSampledData?: boolean | null;
    /**
     * Unique ID for this data response.
     */
    id?: string | null;
    /**
     * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Link to next page for this Analytics data query.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this Analytics data query.
     */
    previousLink?: string | null;
    /**
     * Information for the view (profile), for which the Analytics data was requested.
     */
    profileInfo?: {
      accountId?: string;
      internalWebPropertyId?: string;
      profileId?: string;
      profileName?: string;
      tableId?: string;
      webPropertyId?: string;
    } | null;
    /**
     * Analytics data request query parameters.
     */
    query?: {
      dimensions?: string;
      'end-date'?: string;
      filters?: string;
      ids?: string;
      'max-results'?: number;
      metrics?: string[];
      samplingLevel?: string;
      segment?: string;
      sort?: string[];
      'start-date'?: string;
      'start-index'?: number;
    } | null;
    /**
     * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: Array<
      Array<{
        conversionPathValue?: Array<{
          interactionType?: string;
          nodeValue?: string;
        }>;
        primitiveValue?: string;
      }>
    > | null;
    /**
     * The number of samples used to calculate the result.
     */
    sampleSize?: string | null;
    /**
     * Total size of the sample space from which the samples were selected.
     */
    sampleSpace?: string | null;
    /**
     * Link to this page.
     */
    selfLink?: string | null;
    /**
     * The total number of rows for the query, regardless of the number of rows in the response.
     */
    totalResults?: number | null;
    /**
     * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
     */
    totalsForAllResults?: {[key: string]: string} | null;
  }
  /**
   * JSON template for an Analytics view (profile).
   */
  export interface Schema$Profile {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string | null;
    /**
     * Indicates whether bot filtering is enabled for this view (profile).
     */
    botFilteringEnabled?: boolean | null;
    /**
     * Child link for this view (profile). Points to the list of goals for this view (profile).
     */
    childLink?: {href?: string; type?: string} | null;
    /**
     * Time this view (profile) was created.
     */
    created?: string | null;
    /**
     * The currency type associated with this view (profile), defaults to USD. The supported values are:
     * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
     */
    currency?: string | null;
    /**
     * Default page for this view (profile).
     */
    defaultPage?: string | null;
    /**
     * Indicates whether ecommerce tracking is enabled for this view (profile).
     */
    eCommerceTracking?: boolean | null;
    /**
     * Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
     */
    enhancedECommerceTracking?: boolean | null;
    /**
     * The query parameters that are excluded from this view (profile).
     */
    excludeQueryParameters?: string | null;
    /**
     * View (Profile) ID.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this view (profile) belongs.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for Analytics view (profile).
     */
    kind?: string | null;
    /**
     * Name of this view (profile).
     */
    name?: string | null;
    /**
     * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * Permissions the user has for this view (profile).
     */
    permissions?: {effective?: string[]} | null;
    /**
     * Link for this view (profile).
     */
    selfLink?: string | null;
    /**
     * Site search category parameters for this view (profile).
     */
    siteSearchCategoryParameters?: string | null;
    /**
     * The site search query parameters for this view (profile).
     */
    siteSearchQueryParameters?: string | null;
    /**
     * Indicates whether this view (profile) is starred or not.
     */
    starred?: boolean | null;
    /**
     * Whether or not Analytics will strip search category parameters from the URLs in your reports.
     */
    stripSiteSearchCategoryParameters?: boolean | null;
    /**
     * Whether or not Analytics will strip search query parameters from the URLs in your reports.
     */
    stripSiteSearchQueryParameters?: boolean | null;
    /**
     * Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
     */
    timezone?: string | null;
    /**
     * View (Profile) type. Supported types: WEB or APP.
     */
    type?: string | null;
    /**
     * Time this view (profile) was last modified.
     */
    updated?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
     */
    webPropertyId?: string | null;
    /**
     * Website URL for this view (profile).
     */
    websiteUrl?: string | null;
  }
  /**
   * JSON template for an Analytics profile filter link.
   */
  export interface Schema$ProfileFilterLink {
    /**
     * Filter for this link.
     */
    filterRef?: Schema$FilterRef;
    /**
     * Profile filter link ID.
     */
    id?: string | null;
    /**
     * Resource type for Analytics filter.
     */
    kind?: string | null;
    /**
     * View (Profile) for this link.
     */
    profileRef?: Schema$ProfileRef;
    /**
     * The rank of this profile filter link relative to the other filters linked to the same profile.
     * For readonly (i.e., list and get) operations, the rank always starts at 1.
     * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
     */
    rank?: number | null;
    /**
     * Link for this profile filter link.
     */
    selfLink?: string | null;
  }
  /**
   * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
   */
  export interface Schema$ProfileFilterLinks {
    /**
     * A list of profile filter links.
     */
    items?: Schema$ProfileFilterLink[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this profile filter link collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this profile filter link collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for a linked view (profile).
   */
  export interface Schema$ProfileRef {
    /**
     * Account ID to which this view (profile) belongs.
     */
    accountId?: string | null;
    /**
     * Link for this view (profile).
     */
    href?: string | null;
    /**
     * View (Profile) ID.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this view (profile) belongs.
     */
    internalWebPropertyId?: string | null;
    /**
     * Analytics view (profile) reference.
     */
    kind?: string | null;
    /**
     * Name of this view (profile).
     */
    name?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
     */
    webPropertyId?: string | null;
  }
  /**
   * A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
   */
  export interface Schema$Profiles {
    /**
     * A list of views (profiles).
     */
    items?: Schema$Profile[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this view (profile) collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this view (profile) collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
   */
  export interface Schema$ProfileSummary {
    /**
     * View (profile) ID.
     */
    id?: string | null;
    /**
     * Resource type for Analytics ProfileSummary.
     */
    kind?: string | null;
    /**
     * View (profile) name.
     */
    name?: string | null;
    /**
     * Indicates whether this view (profile) is starred or not.
     */
    starred?: boolean | null;
    /**
     * View (Profile) type. Supported types: WEB or APP.
     */
    type?: string | null;
  }
  /**
   * Real time data for a given view (profile).
   */
  export interface Schema$RealtimeData {
    /**
     * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
     */
    columnHeaders?: Array<{
      columnType?: string;
      dataType?: string;
      name?: string;
    }> | null;
    /**
     * Unique ID for this data response.
     */
    id?: string | null;
    /**
     * Resource type.
     */
    kind?: string | null;
    /**
     * Information for the view (profile), for which the real time data was requested.
     */
    profileInfo?: {
      accountId?: string;
      internalWebPropertyId?: string;
      profileId?: string;
      profileName?: string;
      tableId?: string;
      webPropertyId?: string;
    } | null;
    /**
     * Real time data request query parameters.
     */
    query?: {
      dimensions?: string;
      filters?: string;
      ids?: string;
      'max-results'?: number;
      metrics?: string[];
      sort?: string[];
    } | null;
    /**
     * Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
     */
    rows?: string[][] | null;
    /**
     * Link to this page.
     */
    selfLink?: string | null;
    /**
     * The total number of rows for the query, regardless of the number of rows in the response.
     */
    totalResults?: number | null;
    /**
     * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
     */
    totalsForAllResults?: {[key: string]: string} | null;
  }
  /**
   * JSON template for an Analytics remarketing audience.
   */
  export interface Schema$RemarketingAudience {
    /**
     * Account ID to which this remarketing audience belongs.
     */
    accountId?: string | null;
    /**
     * The simple audience definition that will cause a user to be added to an audience.
     */
    audienceDefinition?: {includeConditions?: Schema$IncludeConditions} | null;
    /**
     * The type of audience, either SIMPLE or STATE_BASED.
     */
    audienceType?: string | null;
    /**
     * Time this remarketing audience was created.
     */
    created?: string | null;
    /**
     * The description of this remarketing audience.
     */
    description?: string | null;
    /**
     * Remarketing Audience ID.
     */
    id?: string | null;
    /**
     * Internal ID for the web property to which this remarketing audience belongs.
     */
    internalWebPropertyId?: string | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
     */
    linkedAdAccounts?: Schema$LinkedForeignAccount[];
    /**
     * The views (profiles) that this remarketing audience is linked to.
     */
    linkedViews?: string[] | null;
    /**
     * The name of this remarketing audience.
     */
    name?: string | null;
    /**
     * A state based audience definition that will cause a user to be added or removed from an audience.
     */
    stateBasedAudienceDefinition?: {
      excludeConditions?: {exclusionDuration?: string; segment?: string};
      includeConditions?: Schema$IncludeConditions;
    } | null;
    /**
     * Time this remarketing audience was last modified.
     */
    updated?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
     */
    webPropertyId?: string | null;
  }
  /**
   * A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.
   */
  export interface Schema$RemarketingAudiences {
    /**
     * A list of remarketing audiences.
     */
    items?: Schema$RemarketingAudience[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this remarketing audience collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this view (profile) collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for an Analytics segment.
   */
  export interface Schema$Segment {
    /**
     * Time the segment was created.
     */
    created?: string | null;
    /**
     * Segment definition.
     */
    definition?: string | null;
    /**
     * Segment ID.
     */
    id?: string | null;
    /**
     * Resource type for Analytics segment.
     */
    kind?: string | null;
    /**
     * Segment name.
     */
    name?: string | null;
    /**
     * Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
     */
    segmentId?: string | null;
    /**
     * Link for this segment.
     */
    selfLink?: string | null;
    /**
     * Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
     */
    type?: string | null;
    /**
     * Time the segment was last modified.
     */
    updated?: string | null;
  }
  /**
   * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
   */
  export interface Schema$Segments {
    /**
     * A list of segments.
     */
    items?: Schema$Segment[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type for segments.
     */
    kind?: string | null;
    /**
     * Link to next page for this segment collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this segment collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for Analytics unsampled report resource.
   */
  export interface Schema$UnsampledReport {
    /**
     * Account ID to which this unsampled report belongs.
     */
    accountId?: string | null;
    /**
     * Download details for a file stored in Google Cloud Storage.
     */
    cloudStorageDownloadDetails?: {bucketId?: string; objectId?: string} | null;
    /**
     * Time this unsampled report was created.
     */
    created?: string | null;
    /**
     * The dimensions for the unsampled report.
     */
    dimensions?: string | null;
    /**
     * The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
     */
    downloadType?: string | null;
    /**
     * Download details for a file stored in Google Drive.
     */
    driveDownloadDetails?: {documentId?: string} | null;
    /**
     * The end date for the unsampled report.
     */
    'end-date'?: string | null;
    /**
     * The filters for the unsampled report.
     */
    filters?: string | null;
    /**
     * Unsampled report ID.
     */
    id?: string | null;
    /**
     * Resource type for an Analytics unsampled report.
     */
    kind?: string | null;
    /**
     * The metrics for the unsampled report.
     */
    metrics?: string | null;
    /**
     * View (Profile) ID to which this unsampled report belongs.
     */
    profileId?: string | null;
    /**
     * The segment for the unsampled report.
     */
    segment?: string | null;
    /**
     * Link for this unsampled report.
     */
    selfLink?: string | null;
    /**
     * The start date for the unsampled report.
     */
    'start-date'?: string | null;
    /**
     * Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
     */
    status?: string | null;
    /**
     * Title of the unsampled report.
     */
    title?: string | null;
    /**
     * Time this unsampled report was last modified.
     */
    updated?: string | null;
    /**
     * Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
     */
    webPropertyId?: string | null;
  }
  /**
   * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
   */
  export interface Schema$UnsampledReports {
    /**
     * A list of unsampled reports.
     */
    items?: Schema$UnsampledReport[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this unsampled report collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this unsampled report collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * Metadata returned for an upload operation.
   */
  export interface Schema$Upload {
    /**
     * Account Id to which this upload belongs.
     */
    accountId?: string | null;
    /**
     * Custom data source Id to which this data import belongs.
     */
    customDataSourceId?: string | null;
    /**
     * Data import errors collection.
     */
    errors?: string[] | null;
    /**
     * A unique ID for this upload.
     */
    id?: string | null;
    /**
     * Resource type for Analytics upload.
     */
    kind?: string | null;
    /**
     * Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
     */
    status?: string | null;
    /**
     * Time this file is uploaded.
     */
    uploadTime?: string | null;
  }
  /**
   * Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
   */
  export interface Schema$Uploads {
    /**
     * A list of uploads.
     */
    items?: Schema$Upload[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this upload collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this upload collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of resources in the result.
     */
    totalResults?: number | null;
  }
  /**
   * JSON template for a user deletion request resource.
   */
  export interface Schema$UserDeletionRequest {
    /**
     * This marks the point in time for which all user data before should be deleted
     */
    deletionRequestTime?: string | null;
    /**
     * Firebase Project Id
     */
    firebaseProjectId?: string | null;
    /**
     * User ID.
     */
    id?: {type?: string; userId?: string} | null;
    /**
     * Value is "analytics#userDeletionRequest".
     */
    kind?: string | null;
    /**
     * Property ID
     */
    propertyId?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    webPropertyId?: string | null;
  }
  /**
   * JSON template for a user reference.
   */
  export interface Schema$UserRef {
    /**
     * Email ID of this user.
     */
    email?: string | null;
    /**
     * User ID.
     */
    id?: string | null;
    kind?: string | null;
  }
  /**
   * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
   */
  export interface Schema$Webproperties {
    /**
     * A list of web properties.
     */
    items?: Schema$Webproperty[];
    /**
     * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
     */
    itemsPerPage?: number | null;
    /**
     * Collection type.
     */
    kind?: string | null;
    /**
     * Link to next page for this web property collection.
     */
    nextLink?: string | null;
    /**
     * Link to previous page for this web property collection.
     */
    previousLink?: string | null;
    /**
     * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
     */
    startIndex?: number | null;
    /**
     * The total number of results for the query, regardless of the number of results in the response.
     */
    totalResults?: number | null;
    /**
     * Email ID of the authenticated user
     */
    username?: string | null;
  }
  /**
   * JSON template for an Analytics web property.
   */
  export interface Schema$Webproperty {
    /**
     * Account ID to which this web property belongs.
     */
    accountId?: string | null;
    /**
     * Child link for this web property. Points to the list of views (profiles) for this web property.
     */
    childLink?: {href?: string; type?: string} | null;
    /**
     * Time this web property was created.
     */
    created?: string | null;
    /**
     * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
     * Set to false to delete data associated with the user identifier automatically after the rentention period.
     * This property cannot be set on insert.
     */
    dataRetentionResetOnNewActivity?: boolean | null;
    /**
     * The length of time for which user and event data is retained.
     * This property cannot be set on insert.
     */
    dataRetentionTtl?: string | null;
    /**
     * Default view (profile) ID.
     */
    defaultProfileId?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string | null;
    /**
     * The industry vertical/category selected for this web property.
     */
    industryVertical?: string | null;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for Analytics WebProperty.
     */
    kind?: string | null;
    /**
     * Level for this web property. Possible values are STANDARD or PREMIUM.
     */
    level?: string | null;
    /**
     * Name of this web property.
     */
    name?: string | null;
    /**
     * Parent link for this web property. Points to the account to which this web property belongs.
     */
    parentLink?: {href?: string; type?: string} | null;
    /**
     * Permissions the user has for this web property.
     */
    permissions?: {effective?: string[]} | null;
    /**
     * View (Profile) count for this web property.
     */
    profileCount?: number | null;
    /**
     * Link for this web property.
     */
    selfLink?: string | null;
    /**
     * Indicates whether this web property is starred or not.
     */
    starred?: boolean | null;
    /**
     * Time this web property was last modified.
     */
    updated?: string | null;
    /**
     * Website url for this web property.
     */
    websiteUrl?: string | null;
  }
  /**
   * JSON template for a web property reference.
   */
  export interface Schema$WebPropertyRef {
    /**
     * Account ID to which this web property belongs.
     */
    accountId?: string | null;
    /**
     * Link for this web property.
     */
    href?: string | null;
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string | null;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string | null;
    /**
     * Analytics web property reference.
     */
    kind?: string | null;
    /**
     * Name of this web property.
     */
    name?: string | null;
  }
  /**
   * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
   */
  export interface Schema$WebPropertySummary {
    /**
     * Web property ID of the form UA-XXXXX-YY.
     */
    id?: string | null;
    /**
     * Internal ID for this web property.
     */
    internalWebPropertyId?: string | null;
    /**
     * Resource type for Analytics WebPropertySummary.
     */
    kind?: string | null;
    /**
     * Level for this web property. Possible values are STANDARD or PREMIUM.
     */
    level?: string | null;
    /**
     * Web property name.
     */
    name?: string | null;
    /**
     * List of profiles under this web property.
     */
    profiles?: Schema$ProfileSummary[];
    /**
     * Indicates whether this web property is starred or not.
     */
    starred?: boolean | null;
    /**
     * Website url for this web property.
     */
    websiteUrl?: string | null;
  }

  export class Resource$Data {
    context: APIRequestContext;
    ga: Resource$Data$Ga;
    mcf: Resource$Data$Mcf;
    realtime: Resource$Data$Realtime;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.ga = new Resource$Data$Ga(this.context);
      this.mcf = new Resource$Data$Mcf(this.context);
      this.realtime = new Resource$Data$Realtime(this.context);
    }
  }

  export class Resource$Data$Ga {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns Analytics data for a view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.data.ga.get({
     *     // A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     *     dimensions: '(ga:.+)?',
     *     // End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
     *     'end-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)',
     *     // A comma-separated list of dimension or metric filters to be applied to Analytics data.
     *     filters: 'ga:.+',
     *     // Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     *     ids: 'ga:[0-9]+',
     *     // The response will include empty rows if this parameter is set to true, the default is true
     *     'include-empty-rows': 'placeholder-value',
     *     // The maximum number of entries to include in this feed.
     *     'max-results': 'placeholder-value',
     *     // A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
     *     metrics: 'ga:.+',
     *     // The selected format for the response. Default format is JSON.
     *     output: 'placeholder-value',
     *     // The desired sampling level.
     *     samplingLevel: 'placeholder-value',
     *     // An Analytics segment to be applied to data.
     *     segment: 'placeholder-value',
     *     // A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
     *     sort: '(-)?ga:.+',
     *     // Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     *     'start-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "columnHeaders": [],
     *   //   "containsSampledData": false,
     *   //   "dataLastRefreshed": "my_dataLastRefreshed",
     *   //   "dataTable": {},
     *   //   "id": "my_id",
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "profileInfo": {},
     *   //   "query": {},
     *   //   "rows": [],
     *   //   "sampleSize": "my_sampleSize",
     *   //   "sampleSpace": "my_sampleSpace",
     *   //   "selfLink": "my_selfLink",
     *   //   "totalResults": 0,
     *   //   "totalsForAllResults": {}
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
      params: Params$Resource$Data$Ga$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Data$Ga$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GaData>;
    get(
      params: Params$Resource$Data$Ga$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Data$Ga$Get,
      options: MethodOptions | BodyResponseCallback<Schema$GaData>,
      callback: BodyResponseCallback<Schema$GaData>
    ): void;
    get(
      params: Params$Resource$Data$Ga$Get,
      callback: BodyResponseCallback<Schema$GaData>
    ): void;
    get(callback: BodyResponseCallback<Schema$GaData>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Data$Ga$Get
        | BodyResponseCallback<Schema$GaData>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GaData>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GaData>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$GaData> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Data$Ga$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Data$Ga$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/ga').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GaData>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GaData>(parameters);
      }
    }
  }

  export interface Params$Resource$Data$Ga$Get extends StandardParameters {
    /**
     * A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     */
    dimensions?: string;
    /**
     * End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
     */
    'end-date'?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to Analytics data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids?: string;
    /**
     * The response will include empty rows if this parameter is set to true, the default is true
     */
    'include-empty-rows'?: boolean;
    /**
     * The maximum number of entries to include in this feed.
     */
    'max-results'?: number;
    /**
     * A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
     */
    metrics?: string;
    /**
     * The selected format for the response. Default format is JSON.
     */
    output?: string;
    /**
     * The desired sampling level.
     */
    samplingLevel?: string;
    /**
     * An Analytics segment to be applied to data.
     */
    segment?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
     */
    sort?: string;
    /**
     * Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     */
    'start-date'?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Data$Mcf {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns Analytics Multi-Channel Funnels data for a view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.data.mcf.get({
     *     // A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
     *     dimensions: '(mcf:.+)?',
     *     // End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     *     'end-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)',
     *     // A comma-separated list of dimension or metric filters to be applied to the Analytics data.
     *     filters: 'mcf:.+',
     *     // Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     *     ids: 'ga:[0-9]+',
     *     // The maximum number of entries to include in this feed.
     *     'max-results': 'placeholder-value',
     *     // A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
     *     metrics: 'mcf:.+',
     *     // The desired sampling level.
     *     samplingLevel: 'placeholder-value',
     *     // A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
     *     sort: '(-)?mcf:.+',
     *     // Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     *     'start-date': '[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "columnHeaders": [],
     *   //   "containsSampledData": false,
     *   //   "id": "my_id",
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "profileInfo": {},
     *   //   "query": {},
     *   //   "rows": [],
     *   //   "sampleSize": "my_sampleSize",
     *   //   "sampleSpace": "my_sampleSpace",
     *   //   "selfLink": "my_selfLink",
     *   //   "totalResults": 0,
     *   //   "totalsForAllResults": {}
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
      params: Params$Resource$Data$Mcf$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Data$Mcf$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$McfData>;
    get(
      params: Params$Resource$Data$Mcf$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Data$Mcf$Get,
      options: MethodOptions | BodyResponseCallback<Schema$McfData>,
      callback: BodyResponseCallback<Schema$McfData>
    ): void;
    get(
      params: Params$Resource$Data$Mcf$Get,
      callback: BodyResponseCallback<Schema$McfData>
    ): void;
    get(callback: BodyResponseCallback<Schema$McfData>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Data$Mcf$Get
        | BodyResponseCallback<Schema$McfData>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$McfData>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$McfData>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$McfData> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Data$Mcf$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Data$Mcf$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/mcf').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ids', 'start-date', 'end-date', 'metrics'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$McfData>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$McfData>(parameters);
      }
    }
  }

  export interface Params$Resource$Data$Mcf$Get extends StandardParameters {
    /**
     * A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
     */
    dimensions?: string;
    /**
     * End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     */
    'end-date'?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to the Analytics data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids?: string;
    /**
     * The maximum number of entries to include in this feed.
     */
    'max-results'?: number;
    /**
     * A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
     */
    metrics?: string;
    /**
     * The desired sampling level.
     */
    samplingLevel?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
     */
    sort?: string;
    /**
     * Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     */
    'start-date'?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Data$Realtime {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns real time data for a view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.data.realtime.get({
     *     // A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
     *     dimensions: '(ga:.+)|(rt:.+)',
     *     // A comma-separated list of dimension or metric filters to be applied to real time data.
     *     filters: '(ga:.+)|(rt:.+)',
     *     // Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     *     ids: 'ga:[0-9]+',
     *     // The maximum number of entries to include in this feed.
     *     'max-results': 'placeholder-value',
     *     // A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
     *     metrics: '(ga:.+)|(rt:.+)',
     *     // A comma-separated list of dimensions or metrics that determine the sort order for real time data.
     *     sort: '(-)?((ga:.+)|(rt:.+))',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "columnHeaders": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profileInfo": {},
     *   //   "query": {},
     *   //   "rows": [],
     *   //   "selfLink": "my_selfLink",
     *   //   "totalResults": 0,
     *   //   "totalsForAllResults": {}
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
      params: Params$Resource$Data$Realtime$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Data$Realtime$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RealtimeData>;
    get(
      params: Params$Resource$Data$Realtime$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Data$Realtime$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RealtimeData>,
      callback: BodyResponseCallback<Schema$RealtimeData>
    ): void;
    get(
      params: Params$Resource$Data$Realtime$Get,
      callback: BodyResponseCallback<Schema$RealtimeData>
    ): void;
    get(callback: BodyResponseCallback<Schema$RealtimeData>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Data$Realtime$Get
        | BodyResponseCallback<Schema$RealtimeData>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RealtimeData>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RealtimeData>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RealtimeData> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Data$Realtime$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Data$Realtime$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/data/realtime').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['ids', 'metrics'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RealtimeData>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RealtimeData>(parameters);
      }
    }
  }

  export interface Params$Resource$Data$Realtime$Get
    extends StandardParameters {
    /**
     * A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
     */
    dimensions?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to real time data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids?: string;
    /**
     * The maximum number of entries to include in this feed.
     */
    'max-results'?: number;
    /**
     * A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
     */
    metrics?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for real time data.
     */
    sort?: string;
  }

  export class Resource$Management {
    context: APIRequestContext;
    accounts: Resource$Management$Accounts;
    accountSummaries: Resource$Management$Accountsummaries;
    accountUserLinks: Resource$Management$Accountuserlinks;
    clientId: Resource$Management$Clientid;
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
    constructor(context: APIRequestContext) {
      this.context = context;
      this.accounts = new Resource$Management$Accounts(this.context);
      this.accountSummaries = new Resource$Management$Accountsummaries(
        this.context
      );
      this.accountUserLinks = new Resource$Management$Accountuserlinks(
        this.context
      );
      this.clientId = new Resource$Management$Clientid(this.context);
      this.customDataSources = new Resource$Management$Customdatasources(
        this.context
      );
      this.customDimensions = new Resource$Management$Customdimensions(
        this.context
      );
      this.customMetrics = new Resource$Management$Custommetrics(this.context);
      this.experiments = new Resource$Management$Experiments(this.context);
      this.filters = new Resource$Management$Filters(this.context);
      this.goals = new Resource$Management$Goals(this.context);
      this.profileFilterLinks = new Resource$Management$Profilefilterlinks(
        this.context
      );
      this.profiles = new Resource$Management$Profiles(this.context);
      this.profileUserLinks = new Resource$Management$Profileuserlinks(
        this.context
      );
      this.remarketingAudience = new Resource$Management$Remarketingaudience(
        this.context
      );
      this.segments = new Resource$Management$Segments(this.context);
      this.unsampledReports = new Resource$Management$Unsampledreports(
        this.context
      );
      this.uploads = new Resource$Management$Uploads(this.context);
      this.webproperties = new Resource$Management$Webproperties(this.context);
      this.webPropertyAdWordsLinks =
        new Resource$Management$Webpropertyadwordslinks(this.context);
      this.webpropertyUserLinks = new Resource$Management$Webpropertyuserlinks(
        this.context
      );
    }
  }

  export class Resource$Management$Accounts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all accounts to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accounts.list({
     *     // The maximum number of accounts to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Accounts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Accounts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Accounts>;
    list(
      params: Params$Resource$Management$Accounts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Accounts$List,
      options: MethodOptions | BodyResponseCallback<Schema$Accounts>,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(
      params: Params$Resource$Management$Accounts$List,
      callback: BodyResponseCallback<Schema$Accounts>
    ): void;
    list(callback: BodyResponseCallback<Schema$Accounts>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Accounts$List
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Accounts>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Accounts> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accounts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accounts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/management/accounts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Accounts>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Accounts>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Accounts$List
    extends StandardParameters {
    /**
     * The maximum number of accounts to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management$Accountsummaries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accountSummaries.list({
     *     // The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Accountsummaries$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Accountsummaries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountSummaries>;
    list(
      params: Params$Resource$Management$Accountsummaries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Accountsummaries$List,
      options: MethodOptions | BodyResponseCallback<Schema$AccountSummaries>,
      callback: BodyResponseCallback<Schema$AccountSummaries>
    ): void;
    list(
      params: Params$Resource$Management$Accountsummaries$List,
      callback: BodyResponseCallback<Schema$AccountSummaries>
    ): void;
    list(callback: BodyResponseCallback<Schema$AccountSummaries>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Accountsummaries$List
        | BodyResponseCallback<Schema$AccountSummaries>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountSummaries>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountSummaries>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountSummaries> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accountsummaries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accountsummaries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/management/accountSummaries'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccountSummaries>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountSummaries>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Accountsummaries$List
    extends StandardParameters {
    /**
     * The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management$Accountuserlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a user from the given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accountUserLinks.delete({
     *     // Account ID to delete the user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to delete the user link for.
     *     linkId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Accountuserlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Accountuserlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Accountuserlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Accountuserlinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Accountuserlinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Accountuserlinks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accountuserlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accountuserlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'linkId'],
        pathParams: ['accountId', 'linkId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Adds a new user to the given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accountUserLinks.insert({
     *     // Account ID to create the user link for.
     *     accountId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
    insert(
      params: Params$Resource$Management$Accountuserlinks$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Accountuserlinks$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    insert(
      params: Params$Resource$Management$Accountuserlinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Accountuserlinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(
      params: Params$Resource$Management$Accountuserlinks$Insert,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Accountuserlinks$Insert
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accountuserlinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accountuserlinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }

    /**
     * Lists account-user links for a given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accountUserLinks.list({
     *     // Account ID to retrieve the user links for.
     *     accountId: 'placeholder-value',
     *     // The maximum number of account-user links to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0
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
      params: Params$Resource$Management$Accountuserlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Accountuserlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLinks>;
    list(
      params: Params$Resource$Management$Accountuserlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Accountuserlinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLinks>,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(
      params: Params$Resource$Management$Accountuserlinks$List,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(callback: BodyResponseCallback<Schema$EntityUserLinks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Accountuserlinks$List
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLinks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accountuserlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accountuserlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLinks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLinks>(parameters);
      }
    }

    /**
     * Updates permissions for an existing user on the given account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.accountUserLinks.update({
     *     // Account ID to update the account-user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to update the account-user link for.
     *     linkId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
      params: Params$Resource$Management$Accountuserlinks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Accountuserlinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    update(
      params: Params$Resource$Management$Accountuserlinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Accountuserlinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(
      params: Params$Resource$Management$Accountuserlinks$Update,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Accountuserlinks$Update
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Accountuserlinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Accountuserlinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'linkId'],
        pathParams: ['accountId', 'linkId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Accountuserlinks$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the user link for.
     */
    accountId?: string;
    /**
     * Link ID to delete the user link for.
     */
    linkId?: string;
  }
  export interface Params$Resource$Management$Accountuserlinks$Insert
    extends StandardParameters {
    /**
     * Account ID to create the user link for.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }
  export interface Params$Resource$Management$Accountuserlinks$List
    extends StandardParameters {
    /**
     * Account ID to retrieve the user links for.
     */
    accountId?: string;
    /**
     * The maximum number of account-user links to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }
  export interface Params$Resource$Management$Accountuserlinks$Update
    extends StandardParameters {
    /**
     * Account ID to update the account-user link for.
     */
    accountId?: string;
    /**
     * Link ID to update the account-user link for.
     */
    linkId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }

  export class Resource$Management$Clientid {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Hashes the given Client ID.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.clientId.hashClientId({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "clientId": "my_clientId",
     *       //   "kind": "my_kind",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clientId": "my_clientId",
     *   //   "hashedClientId": "my_hashedClientId",
     *   //   "kind": "my_kind",
     *   //   "webPropertyId": "my_webPropertyId"
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
    hashClientId(
      params: Params$Resource$Management$Clientid$Hashclientid,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    hashClientId(
      params?: Params$Resource$Management$Clientid$Hashclientid,
      options?: MethodOptions
    ): GaxiosPromise<Schema$HashClientIdResponse>;
    hashClientId(
      params: Params$Resource$Management$Clientid$Hashclientid,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    hashClientId(
      params: Params$Resource$Management$Clientid$Hashclientid,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$HashClientIdResponse>,
      callback: BodyResponseCallback<Schema$HashClientIdResponse>
    ): void;
    hashClientId(
      params: Params$Resource$Management$Clientid$Hashclientid,
      callback: BodyResponseCallback<Schema$HashClientIdResponse>
    ): void;
    hashClientId(
      callback: BodyResponseCallback<Schema$HashClientIdResponse>
    ): void;
    hashClientId(
      paramsOrCallback?:
        | Params$Resource$Management$Clientid$Hashclientid
        | BodyResponseCallback<Schema$HashClientIdResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HashClientIdResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HashClientIdResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$HashClientIdResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Clientid$Hashclientid;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Clientid$Hashclientid;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/management/clientId:hashClientId'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HashClientIdResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HashClientIdResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Clientid$Hashclientid
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$HashClientIdRequest;
  }

  export class Resource$Management$Customdatasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List custom data sources to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDataSources.list({
     *     // Account Id for the custom data sources to retrieve.
     *     accountId: 'd+',
     *     // The maximum number of custom data sources to include in this response.
     *     'max-results': 'placeholder-value',
     *     // A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property Id for the custom data sources to retrieve.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Customdatasources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Customdatasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDataSources>;
    list(
      params: Params$Resource$Management$Customdatasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Customdatasources$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDataSources>,
      callback: BodyResponseCallback<Schema$CustomDataSources>
    ): void;
    list(
      params: Params$Resource$Management$Customdatasources$List,
      callback: BodyResponseCallback<Schema$CustomDataSources>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomDataSources>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Customdatasources$List
        | BodyResponseCallback<Schema$CustomDataSources>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDataSources>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDataSources>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CustomDataSources>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdatasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdatasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDataSources>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDataSources>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Customdatasources$List
    extends StandardParameters {
    /**
     * Account Id for the custom data sources to retrieve.
     */
    accountId?: string;
    /**
     * The maximum number of custom data sources to include in this response.
     */
    'max-results'?: number;
    /**
     * A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property Id for the custom data sources to retrieve.
     */
    webPropertyId?: string;
  }

  export class Resource$Management$Customdimensions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a custom dimension to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDimensions.get({
     *     // Account ID for the custom dimension to retrieve.
     *     accountId: 'placeholder-value',
     *     // The ID of the custom dimension to retrieve.
     *     customDimensionId: 'placeholder-value',
     *     // Web property ID for the custom dimension to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Customdimensions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Customdimensions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDimension>;
    get(
      params: Params$Resource$Management$Customdimensions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Customdimensions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDimension>,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    get(
      params: Params$Resource$Management$Customdimensions$Get,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomDimension>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Customdimensions$Get
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomDimension> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdimensions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdimensions$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
        pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDimension>(parameters);
      }
    }

    /**
     * Create a new custom dimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDimensions.insert({
     *     // Account ID for the custom dimension to create.
     *     accountId: 'placeholder-value',
     *     // Web property ID for the custom dimension to create.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
    insert(
      params: Params$Resource$Management$Customdimensions$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Customdimensions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDimension>;
    insert(
      params: Params$Resource$Management$Customdimensions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Customdimensions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDimension>,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    insert(
      params: Params$Resource$Management$Customdimensions$Insert,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CustomDimension>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Customdimensions$Insert
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomDimension> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdimensions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdimensions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDimension>(parameters);
      }
    }

    /**
     * Lists custom dimensions to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDimensions.list({
     *     // Account ID for the custom dimensions to retrieve.
     *     accountId: 'placeholder-value',
     *     // The maximum number of custom dimensions to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID for the custom dimensions to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Customdimensions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Customdimensions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDimensions>;
    list(
      params: Params$Resource$Management$Customdimensions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Customdimensions$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDimensions>,
      callback: BodyResponseCallback<Schema$CustomDimensions>
    ): void;
    list(
      params: Params$Resource$Management$Customdimensions$List,
      callback: BodyResponseCallback<Schema$CustomDimensions>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomDimensions>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Customdimensions$List
        | BodyResponseCallback<Schema$CustomDimensions>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDimensions>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDimensions>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomDimensions> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdimensions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdimensions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDimensions>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDimensions>(parameters);
      }
    }

    /**
     * Updates an existing custom dimension. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDimensions.patch({
     *     // Account ID for the custom dimension to update.
     *     accountId: 'placeholder-value',
     *     // Custom dimension ID for the custom dimension to update.
     *     customDimensionId: 'placeholder-value',
     *     // Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     *     ignoreCustomDataSourceLinks: 'placeholder-value',
     *     // Web property ID for the custom dimension to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Customdimensions$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Customdimensions$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDimension>;
    patch(
      params: Params$Resource$Management$Customdimensions$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Customdimensions$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDimension>,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    patch(
      params: Params$Resource$Management$Customdimensions$Patch,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CustomDimension>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Customdimensions$Patch
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomDimension> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdimensions$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdimensions$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
        pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDimension>(parameters);
      }
    }

    /**
     * Updates an existing custom dimension.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customDimensions.update({
     *     // Account ID for the custom dimension to update.
     *     accountId: 'placeholder-value',
     *     // Custom dimension ID for the custom dimension to update.
     *     customDimensionId: 'placeholder-value',
     *     // Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     *     ignoreCustomDataSourceLinks: 'placeholder-value',
     *     // Web property ID for the custom dimension to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Customdimensions$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Customdimensions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomDimension>;
    update(
      params: Params$Resource$Management$Customdimensions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Customdimensions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CustomDimension>,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    update(
      params: Params$Resource$Management$Customdimensions$Update,
      callback: BodyResponseCallback<Schema$CustomDimension>
    ): void;
    update(callback: BodyResponseCallback<Schema$CustomDimension>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Customdimensions$Update
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomDimension>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomDimension> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Customdimensions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Customdimensions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customDimensionId'],
        pathParams: ['accountId', 'customDimensionId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomDimension>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomDimension>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Customdimensions$Get
    extends StandardParameters {
    /**
     * Account ID for the custom dimension to retrieve.
     */
    accountId?: string;
    /**
     * The ID of the custom dimension to retrieve.
     */
    customDimensionId?: string;
    /**
     * Web property ID for the custom dimension to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Customdimensions$Insert
    extends StandardParameters {
    /**
     * Account ID for the custom dimension to create.
     */
    accountId?: string;
    /**
     * Web property ID for the custom dimension to create.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomDimension;
  }
  export interface Params$Resource$Management$Customdimensions$List
    extends StandardParameters {
    /**
     * Account ID for the custom dimensions to retrieve.
     */
    accountId?: string;
    /**
     * The maximum number of custom dimensions to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID for the custom dimensions to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Customdimensions$Patch
    extends StandardParameters {
    /**
     * Account ID for the custom dimension to update.
     */
    accountId?: string;
    /**
     * Custom dimension ID for the custom dimension to update.
     */
    customDimensionId?: string;
    /**
     * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     */
    ignoreCustomDataSourceLinks?: boolean;
    /**
     * Web property ID for the custom dimension to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomDimension;
  }
  export interface Params$Resource$Management$Customdimensions$Update
    extends StandardParameters {
    /**
     * Account ID for the custom dimension to update.
     */
    accountId?: string;
    /**
     * Custom dimension ID for the custom dimension to update.
     */
    customDimensionId?: string;
    /**
     * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     */
    ignoreCustomDataSourceLinks?: boolean;
    /**
     * Web property ID for the custom dimension to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomDimension;
  }

  export class Resource$Management$Custommetrics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a custom metric to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customMetrics.get({
     *     // Account ID for the custom metric to retrieve.
     *     accountId: 'placeholder-value',
     *     // The ID of the custom metric to retrieve.
     *     customMetricId: 'placeholder-value',
     *     // Web property ID for the custom metric to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "max_value": "my_max_value",
     *   //   "min_value": "my_min_value",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Custommetrics$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Custommetrics$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomMetric>;
    get(
      params: Params$Resource$Management$Custommetrics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Custommetrics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$CustomMetric>,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    get(
      params: Params$Resource$Management$Custommetrics$Get,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    get(callback: BodyResponseCallback<Schema$CustomMetric>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Custommetrics$Get
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomMetric> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Custommetrics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Custommetrics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
        pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomMetric>(parameters);
      }
    }

    /**
     * Create a new custom metric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customMetrics.insert({
     *     // Account ID for the custom metric to create.
     *     accountId: 'placeholder-value',
     *     // Web property ID for the custom dimension to create.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "max_value": "my_max_value",
     *       //   "min_value": "my_min_value",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "max_value": "my_max_value",
     *   //   "min_value": "my_min_value",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
    insert(
      params: Params$Resource$Management$Custommetrics$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Custommetrics$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomMetric>;
    insert(
      params: Params$Resource$Management$Custommetrics$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Custommetrics$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CustomMetric>,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    insert(
      params: Params$Resource$Management$Custommetrics$Insert,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CustomMetric>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Custommetrics$Insert
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomMetric> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Custommetrics$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Custommetrics$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomMetric>(parameters);
      }
    }

    /**
     * Lists custom metrics to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customMetrics.list({
     *     // Account ID for the custom metrics to retrieve.
     *     accountId: 'placeholder-value',
     *     // The maximum number of custom metrics to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID for the custom metrics to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Custommetrics$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Custommetrics$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomMetrics>;
    list(
      params: Params$Resource$Management$Custommetrics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Custommetrics$List,
      options: MethodOptions | BodyResponseCallback<Schema$CustomMetrics>,
      callback: BodyResponseCallback<Schema$CustomMetrics>
    ): void;
    list(
      params: Params$Resource$Management$Custommetrics$List,
      callback: BodyResponseCallback<Schema$CustomMetrics>
    ): void;
    list(callback: BodyResponseCallback<Schema$CustomMetrics>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Custommetrics$List
        | BodyResponseCallback<Schema$CustomMetrics>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomMetrics>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomMetrics>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomMetrics> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Custommetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Custommetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomMetrics>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomMetrics>(parameters);
      }
    }

    /**
     * Updates an existing custom metric. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customMetrics.patch({
     *     // Account ID for the custom metric to update.
     *     accountId: 'placeholder-value',
     *     // Custom metric ID for the custom metric to update.
     *     customMetricId: 'placeholder-value',
     *     // Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     *     ignoreCustomDataSourceLinks: 'placeholder-value',
     *     // Web property ID for the custom metric to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "max_value": "my_max_value",
     *       //   "min_value": "my_min_value",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "max_value": "my_max_value",
     *   //   "min_value": "my_min_value",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Custommetrics$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Custommetrics$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomMetric>;
    patch(
      params: Params$Resource$Management$Custommetrics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Custommetrics$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$CustomMetric>,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    patch(
      params: Params$Resource$Management$Custommetrics$Patch,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    patch(callback: BodyResponseCallback<Schema$CustomMetric>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Custommetrics$Patch
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomMetric> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Custommetrics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Custommetrics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
        pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomMetric>(parameters);
      }
    }

    /**
     * Updates an existing custom metric.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.customMetrics.update({
     *     // Account ID for the custom metric to update.
     *     accountId: 'placeholder-value',
     *     // Custom metric ID for the custom metric to update.
     *     customMetricId: 'placeholder-value',
     *     // Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     *     ignoreCustomDataSourceLinks: 'placeholder-value',
     *     // Web property ID for the custom metric to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "id": "my_id",
     *       //   "index": 0,
     *       //   "kind": "my_kind",
     *       //   "max_value": "my_max_value",
     *       //   "min_value": "my_min_value",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "scope": "my_scope",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "id": "my_id",
     *   //   "index": 0,
     *   //   "kind": "my_kind",
     *   //   "max_value": "my_max_value",
     *   //   "min_value": "my_min_value",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "scope": "my_scope",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Custommetrics$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Custommetrics$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CustomMetric>;
    update(
      params: Params$Resource$Management$Custommetrics$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Custommetrics$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CustomMetric>,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    update(
      params: Params$Resource$Management$Custommetrics$Update,
      callback: BodyResponseCallback<Schema$CustomMetric>
    ): void;
    update(callback: BodyResponseCallback<Schema$CustomMetric>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Custommetrics$Update
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CustomMetric>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CustomMetric> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Custommetrics$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Custommetrics$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customMetricId'],
        pathParams: ['accountId', 'customMetricId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CustomMetric>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CustomMetric>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Custommetrics$Get
    extends StandardParameters {
    /**
     * Account ID for the custom metric to retrieve.
     */
    accountId?: string;
    /**
     * The ID of the custom metric to retrieve.
     */
    customMetricId?: string;
    /**
     * Web property ID for the custom metric to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Custommetrics$Insert
    extends StandardParameters {
    /**
     * Account ID for the custom metric to create.
     */
    accountId?: string;
    /**
     * Web property ID for the custom dimension to create.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomMetric;
  }
  export interface Params$Resource$Management$Custommetrics$List
    extends StandardParameters {
    /**
     * Account ID for the custom metrics to retrieve.
     */
    accountId?: string;
    /**
     * The maximum number of custom metrics to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID for the custom metrics to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Custommetrics$Patch
    extends StandardParameters {
    /**
     * Account ID for the custom metric to update.
     */
    accountId?: string;
    /**
     * Custom metric ID for the custom metric to update.
     */
    customMetricId?: string;
    /**
     * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     */
    ignoreCustomDataSourceLinks?: boolean;
    /**
     * Web property ID for the custom metric to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomMetric;
  }
  export interface Params$Resource$Management$Custommetrics$Update
    extends StandardParameters {
    /**
     * Account ID for the custom metric to update.
     */
    accountId?: string;
    /**
     * Custom metric ID for the custom metric to update.
     */
    customMetricId?: string;
    /**
     * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
     */
    ignoreCustomDataSourceLinks?: boolean;
    /**
     * Web property ID for the custom metric to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CustomMetric;
  }

  export class Resource$Management$Experiments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete an experiment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.delete({
     *     // Account ID to which the experiment belongs
     *     accountId: 'placeholder-value',
     *     // ID of the experiment to delete
     *     experimentId: 'placeholder-value',
     *     // View (Profile) ID to which the experiment belongs
     *     profileId: 'placeholder-value',
     *     // Web property ID to which the experiment belongs
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Experiments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Experiments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Experiments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Experiments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Experiments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'experimentId',
        ],
        pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns an experiment to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.get({
     *     // Account ID to retrieve the experiment for.
     *     accountId: 'placeholder-value',
     *     // Experiment ID to retrieve the experiment for.
     *     experimentId: 'placeholder-value',
     *     // View (Profile) ID to retrieve the experiment for.
     *     profileId: 'placeholder-value',
     *     // Web property ID to retrieve the experiment for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "editableInGaUi": false,
     *   //   "endTime": "my_endTime",
     *   //   "equalWeighting": false,
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "minimumExperimentLengthInDays": 0,
     *   //   "name": "my_name",
     *   //   "objectiveMetric": "my_objectiveMetric",
     *   //   "optimizationType": "my_optimizationType",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *   //   "rewriteVariationUrlsAsOriginal": false,
     *   //   "selfLink": "my_selfLink",
     *   //   "servingFramework": "my_servingFramework",
     *   //   "snippet": "my_snippet",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "trafficCoverage": {},
     *   //   "updated": "my_updated",
     *   //   "variations": [],
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "winnerConfidenceLevel": {},
     *   //   "winnerFound": false
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
      params: Params$Resource$Management$Experiments$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Experiments$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Experiment>;
    get(
      params: Params$Resource$Management$Experiments$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Experiments$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Experiment>,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    get(
      params: Params$Resource$Management$Experiments$Get,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    get(callback: BodyResponseCallback<Schema$Experiment>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$Get
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Experiment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'experimentId',
        ],
        pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Experiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Experiment>(parameters);
      }
    }

    /**
     * Create a new experiment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.insert({
     *     // Account ID to create the experiment for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to create the experiment for.
     *     profileId: 'placeholder-value',
     *     // Web property ID to create the experiment for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "editableInGaUi": false,
     *       //   "endTime": "my_endTime",
     *       //   "equalWeighting": false,
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "minimumExperimentLengthInDays": 0,
     *       //   "name": "my_name",
     *       //   "objectiveMetric": "my_objectiveMetric",
     *       //   "optimizationType": "my_optimizationType",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *       //   "rewriteVariationUrlsAsOriginal": false,
     *       //   "selfLink": "my_selfLink",
     *       //   "servingFramework": "my_servingFramework",
     *       //   "snippet": "my_snippet",
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "trafficCoverage": {},
     *       //   "updated": "my_updated",
     *       //   "variations": [],
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "winnerConfidenceLevel": {},
     *       //   "winnerFound": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "editableInGaUi": false,
     *   //   "endTime": "my_endTime",
     *   //   "equalWeighting": false,
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "minimumExperimentLengthInDays": 0,
     *   //   "name": "my_name",
     *   //   "objectiveMetric": "my_objectiveMetric",
     *   //   "optimizationType": "my_optimizationType",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *   //   "rewriteVariationUrlsAsOriginal": false,
     *   //   "selfLink": "my_selfLink",
     *   //   "servingFramework": "my_servingFramework",
     *   //   "snippet": "my_snippet",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "trafficCoverage": {},
     *   //   "updated": "my_updated",
     *   //   "variations": [],
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "winnerConfidenceLevel": {},
     *   //   "winnerFound": false
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
    insert(
      params: Params$Resource$Management$Experiments$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Experiments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Experiment>;
    insert(
      params: Params$Resource$Management$Experiments$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Experiments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Experiment>,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    insert(
      params: Params$Resource$Management$Experiments$Insert,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Experiment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$Insert
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Experiment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Experiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Experiment>(parameters);
      }
    }

    /**
     * Lists experiments to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.list({
     *     // Account ID to retrieve experiments for.
     *     accountId: 'd+',
     *     // The maximum number of experiments to include in this response.
     *     'max-results': 'placeholder-value',
     *     // View (Profile) ID to retrieve experiments for.
     *     profileId: 'd+',
     *     // An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID to retrieve experiments for.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Experiments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Experiments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Experiments>;
    list(
      params: Params$Resource$Management$Experiments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Experiments$List,
      options: MethodOptions | BodyResponseCallback<Schema$Experiments>,
      callback: BodyResponseCallback<Schema$Experiments>
    ): void;
    list(
      params: Params$Resource$Management$Experiments$List,
      callback: BodyResponseCallback<Schema$Experiments>
    ): void;
    list(callback: BodyResponseCallback<Schema$Experiments>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$List
        | BodyResponseCallback<Schema$Experiments>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Experiments>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Experiments>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Experiments> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Experiments>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Experiments>(parameters);
      }
    }

    /**
     * Update an existing experiment. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.patch({
     *     // Account ID of the experiment to update.
     *     accountId: 'placeholder-value',
     *     // Experiment ID of the experiment to update.
     *     experimentId: 'placeholder-value',
     *     // View (Profile) ID of the experiment to update.
     *     profileId: 'placeholder-value',
     *     // Web property ID of the experiment to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "editableInGaUi": false,
     *       //   "endTime": "my_endTime",
     *       //   "equalWeighting": false,
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "minimumExperimentLengthInDays": 0,
     *       //   "name": "my_name",
     *       //   "objectiveMetric": "my_objectiveMetric",
     *       //   "optimizationType": "my_optimizationType",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *       //   "rewriteVariationUrlsAsOriginal": false,
     *       //   "selfLink": "my_selfLink",
     *       //   "servingFramework": "my_servingFramework",
     *       //   "snippet": "my_snippet",
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "trafficCoverage": {},
     *       //   "updated": "my_updated",
     *       //   "variations": [],
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "winnerConfidenceLevel": {},
     *       //   "winnerFound": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "editableInGaUi": false,
     *   //   "endTime": "my_endTime",
     *   //   "equalWeighting": false,
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "minimumExperimentLengthInDays": 0,
     *   //   "name": "my_name",
     *   //   "objectiveMetric": "my_objectiveMetric",
     *   //   "optimizationType": "my_optimizationType",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *   //   "rewriteVariationUrlsAsOriginal": false,
     *   //   "selfLink": "my_selfLink",
     *   //   "servingFramework": "my_servingFramework",
     *   //   "snippet": "my_snippet",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "trafficCoverage": {},
     *   //   "updated": "my_updated",
     *   //   "variations": [],
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "winnerConfidenceLevel": {},
     *   //   "winnerFound": false
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
      params: Params$Resource$Management$Experiments$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Experiments$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Experiment>;
    patch(
      params: Params$Resource$Management$Experiments$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Experiments$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Experiment>,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    patch(
      params: Params$Resource$Management$Experiments$Patch,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Experiment>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$Patch
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Experiment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'experimentId',
        ],
        pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Experiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Experiment>(parameters);
      }
    }

    /**
     * Update an existing experiment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.experiments.update({
     *     // Account ID of the experiment to update.
     *     accountId: 'placeholder-value',
     *     // Experiment ID of the experiment to update.
     *     experimentId: 'placeholder-value',
     *     // View (Profile) ID of the experiment to update.
     *     profileId: 'placeholder-value',
     *     // Web property ID of the experiment to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "editableInGaUi": false,
     *       //   "endTime": "my_endTime",
     *       //   "equalWeighting": false,
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "minimumExperimentLengthInDays": 0,
     *       //   "name": "my_name",
     *       //   "objectiveMetric": "my_objectiveMetric",
     *       //   "optimizationType": "my_optimizationType",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *       //   "rewriteVariationUrlsAsOriginal": false,
     *       //   "selfLink": "my_selfLink",
     *       //   "servingFramework": "my_servingFramework",
     *       //   "snippet": "my_snippet",
     *       //   "startTime": "my_startTime",
     *       //   "status": "my_status",
     *       //   "trafficCoverage": {},
     *       //   "updated": "my_updated",
     *       //   "variations": [],
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "winnerConfidenceLevel": {},
     *       //   "winnerFound": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "editableInGaUi": false,
     *   //   "endTime": "my_endTime",
     *   //   "equalWeighting": false,
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "minimumExperimentLengthInDays": 0,
     *   //   "name": "my_name",
     *   //   "objectiveMetric": "my_objectiveMetric",
     *   //   "optimizationType": "my_optimizationType",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "reasonExperimentEnded": "my_reasonExperimentEnded",
     *   //   "rewriteVariationUrlsAsOriginal": false,
     *   //   "selfLink": "my_selfLink",
     *   //   "servingFramework": "my_servingFramework",
     *   //   "snippet": "my_snippet",
     *   //   "startTime": "my_startTime",
     *   //   "status": "my_status",
     *   //   "trafficCoverage": {},
     *   //   "updated": "my_updated",
     *   //   "variations": [],
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "winnerConfidenceLevel": {},
     *   //   "winnerFound": false
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
      params: Params$Resource$Management$Experiments$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Experiments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Experiment>;
    update(
      params: Params$Resource$Management$Experiments$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Experiments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Experiment>,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    update(
      params: Params$Resource$Management$Experiments$Update,
      callback: BodyResponseCallback<Schema$Experiment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Experiment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Experiments$Update
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Experiment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Experiment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Experiments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Experiments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'experimentId',
        ],
        pathParams: ['accountId', 'experimentId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Experiment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Experiment>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Experiments$Delete
    extends StandardParameters {
    /**
     * Account ID to which the experiment belongs
     */
    accountId?: string;
    /**
     * ID of the experiment to delete
     */
    experimentId?: string;
    /**
     * View (Profile) ID to which the experiment belongs
     */
    profileId?: string;
    /**
     * Web property ID to which the experiment belongs
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Experiments$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve the experiment for.
     */
    accountId?: string;
    /**
     * Experiment ID to retrieve the experiment for.
     */
    experimentId?: string;
    /**
     * View (Profile) ID to retrieve the experiment for.
     */
    profileId?: string;
    /**
     * Web property ID to retrieve the experiment for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Experiments$Insert
    extends StandardParameters {
    /**
     * Account ID to create the experiment for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to create the experiment for.
     */
    profileId?: string;
    /**
     * Web property ID to create the experiment for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Experiment;
  }
  export interface Params$Resource$Management$Experiments$List
    extends StandardParameters {
    /**
     * Account ID to retrieve experiments for.
     */
    accountId?: string;
    /**
     * The maximum number of experiments to include in this response.
     */
    'max-results'?: number;
    /**
     * View (Profile) ID to retrieve experiments for.
     */
    profileId?: string;
    /**
     * An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID to retrieve experiments for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Experiments$Patch
    extends StandardParameters {
    /**
     * Account ID of the experiment to update.
     */
    accountId?: string;
    /**
     * Experiment ID of the experiment to update.
     */
    experimentId?: string;
    /**
     * View (Profile) ID of the experiment to update.
     */
    profileId?: string;
    /**
     * Web property ID of the experiment to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Experiment;
  }
  export interface Params$Resource$Management$Experiments$Update
    extends StandardParameters {
    /**
     * Account ID of the experiment to update.
     */
    accountId?: string;
    /**
     * Experiment ID of the experiment to update.
     */
    experimentId?: string;
    /**
     * View (Profile) ID of the experiment to update.
     */
    profileId?: string;
    /**
     * Web property ID of the experiment to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Experiment;
  }

  export class Resource$Management$Filters {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.delete({
     *     // Account ID to delete the filter for.
     *     accountId: 'placeholder-value',
     *     // ID of the filter to be deleted.
     *     filterId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "advancedDetails": {},
     *   //   "created": "my_created",
     *   //   "excludeDetails": {},
     *   //   "id": "my_id",
     *   //   "includeDetails": {},
     *   //   "kind": "my_kind",
     *   //   "lowercaseDetails": {},
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "searchAndReplaceDetails": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "uppercaseDetails": {}
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
    delete(
      params: Params$Resource$Management$Filters$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Filters$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    delete(
      params: Params$Resource$Management$Filters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Filters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    delete(
      params: Params$Resource$Management$Filters$Delete,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Filter>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$Delete
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/filters/{filterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'filterId'],
        pathParams: ['accountId', 'filterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Returns filters to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.get({
     *     // Account ID to retrieve filters for.
     *     accountId: 'placeholder-value',
     *     // Filter ID to retrieve filters for.
     *     filterId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "advancedDetails": {},
     *   //   "created": "my_created",
     *   //   "excludeDetails": {},
     *   //   "id": "my_id",
     *   //   "includeDetails": {},
     *   //   "kind": "my_kind",
     *   //   "lowercaseDetails": {},
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "searchAndReplaceDetails": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "uppercaseDetails": {}
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
      params: Params$Resource$Management$Filters$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Filters$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    get(
      params: Params$Resource$Management$Filters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Filters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    get(
      params: Params$Resource$Management$Filters$Get,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    get(callback: BodyResponseCallback<Schema$Filter>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$Get
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/filters/{filterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'filterId'],
        pathParams: ['accountId', 'filterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Create a new filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.insert({
     *     // Account ID to create filter for.
     *     accountId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "advancedDetails": {},
     *       //   "created": "my_created",
     *       //   "excludeDetails": {},
     *       //   "id": "my_id",
     *       //   "includeDetails": {},
     *       //   "kind": "my_kind",
     *       //   "lowercaseDetails": {},
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "searchAndReplaceDetails": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "uppercaseDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "advancedDetails": {},
     *   //   "created": "my_created",
     *   //   "excludeDetails": {},
     *   //   "id": "my_id",
     *   //   "includeDetails": {},
     *   //   "kind": "my_kind",
     *   //   "lowercaseDetails": {},
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "searchAndReplaceDetails": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "uppercaseDetails": {}
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
    insert(
      params: Params$Resource$Management$Filters$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Filters$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    insert(
      params: Params$Resource$Management$Filters$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Filters$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    insert(
      params: Params$Resource$Management$Filters$Insert,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Filter>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$Insert
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/management/accounts/{accountId}/filters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Lists all filters for an account
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.list({
     *     // Account ID to retrieve filters for.
     *     accountId: 'd+',
     *     // The maximum number of filters to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Filters$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Filters$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filters>;
    list(
      params: Params$Resource$Management$Filters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Filters$List,
      options: MethodOptions | BodyResponseCallback<Schema$Filters>,
      callback: BodyResponseCallback<Schema$Filters>
    ): void;
    list(
      params: Params$Resource$Management$Filters$List,
      callback: BodyResponseCallback<Schema$Filters>
    ): void;
    list(callback: BodyResponseCallback<Schema$Filters>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$List
        | BodyResponseCallback<Schema$Filters>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filters>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filters>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filters> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/management/accounts/{accountId}/filters'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filters>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filters>(parameters);
      }
    }

    /**
     * Updates an existing filter. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.patch({
     *     // Account ID to which the filter belongs.
     *     accountId: 'placeholder-value',
     *     // ID of the filter to be updated.
     *     filterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "advancedDetails": {},
     *       //   "created": "my_created",
     *       //   "excludeDetails": {},
     *       //   "id": "my_id",
     *       //   "includeDetails": {},
     *       //   "kind": "my_kind",
     *       //   "lowercaseDetails": {},
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "searchAndReplaceDetails": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "uppercaseDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "advancedDetails": {},
     *   //   "created": "my_created",
     *   //   "excludeDetails": {},
     *   //   "id": "my_id",
     *   //   "includeDetails": {},
     *   //   "kind": "my_kind",
     *   //   "lowercaseDetails": {},
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "searchAndReplaceDetails": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "uppercaseDetails": {}
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
      params: Params$Resource$Management$Filters$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Filters$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    patch(
      params: Params$Resource$Management$Filters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Filters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    patch(
      params: Params$Resource$Management$Filters$Patch,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Filter>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$Patch
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/filters/{filterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'filterId'],
        pathParams: ['accountId', 'filterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }

    /**
     * Updates an existing filter.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.filters.update({
     *     // Account ID to which the filter belongs.
     *     accountId: 'placeholder-value',
     *     // ID of the filter to be updated.
     *     filterId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "advancedDetails": {},
     *       //   "created": "my_created",
     *       //   "excludeDetails": {},
     *       //   "id": "my_id",
     *       //   "includeDetails": {},
     *       //   "kind": "my_kind",
     *       //   "lowercaseDetails": {},
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "searchAndReplaceDetails": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "uppercaseDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "advancedDetails": {},
     *   //   "created": "my_created",
     *   //   "excludeDetails": {},
     *   //   "id": "my_id",
     *   //   "includeDetails": {},
     *   //   "kind": "my_kind",
     *   //   "lowercaseDetails": {},
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "searchAndReplaceDetails": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "uppercaseDetails": {}
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
      params: Params$Resource$Management$Filters$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Filters$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Filter>;
    update(
      params: Params$Resource$Management$Filters$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Filters$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Filter>,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    update(
      params: Params$Resource$Management$Filters$Update,
      callback: BodyResponseCallback<Schema$Filter>
    ): void;
    update(callback: BodyResponseCallback<Schema$Filter>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Filters$Update
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Filter>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Filter> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Filters$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Filters$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/filters/{filterId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'filterId'],
        pathParams: ['accountId', 'filterId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Filter>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Filter>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Filters$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the filter for.
     */
    accountId?: string;
    /**
     * ID of the filter to be deleted.
     */
    filterId?: string;
  }
  export interface Params$Resource$Management$Filters$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve filters for.
     */
    accountId?: string;
    /**
     * Filter ID to retrieve filters for.
     */
    filterId?: string;
  }
  export interface Params$Resource$Management$Filters$Insert
    extends StandardParameters {
    /**
     * Account ID to create filter for.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Filter;
  }
  export interface Params$Resource$Management$Filters$List
    extends StandardParameters {
    /**
     * Account ID to retrieve filters for.
     */
    accountId?: string;
    /**
     * The maximum number of filters to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }
  export interface Params$Resource$Management$Filters$Patch
    extends StandardParameters {
    /**
     * Account ID to which the filter belongs.
     */
    accountId?: string;
    /**
     * ID of the filter to be updated.
     */
    filterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Filter;
  }
  export interface Params$Resource$Management$Filters$Update
    extends StandardParameters {
    /**
     * Account ID to which the filter belongs.
     */
    accountId?: string;
    /**
     * ID of the filter to be updated.
     */
    filterId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Filter;
  }

  export class Resource$Management$Goals {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a goal to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.get({
     *     // Account ID to retrieve the goal for.
     *     accountId: 'placeholder-value',
     *     // Goal ID to retrieve the goal for.
     *     goalId: 'placeholder-value',
     *     // View (Profile) ID to retrieve the goal for.
     *     profileId: 'placeholder-value',
     *     // Web property ID to retrieve the goal for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "eventDetails": {},
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "urlDestinationDetails": {},
     *   //   "value": {},
     *   //   "visitNumPagesDetails": {},
     *   //   "visitTimeOnSiteDetails": {},
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Goals$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Goals$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Goal>;
    get(
      params: Params$Resource$Management$Goals$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Goals$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Goal>,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    get(
      params: Params$Resource$Management$Goals$Get,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    get(callback: BodyResponseCallback<Schema$Goal>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$Get
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Goal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
        pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Goal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Goal>(parameters);
      }
    }

    /**
     * Create a new goal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.insert({
     *     // Account ID to create the goal for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to create the goal for.
     *     profileId: 'placeholder-value',
     *     // Web property ID to create the goal for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "eventDetails": {},
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "urlDestinationDetails": {},
     *       //   "value": {},
     *       //   "visitNumPagesDetails": {},
     *       //   "visitTimeOnSiteDetails": {},
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "eventDetails": {},
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "urlDestinationDetails": {},
     *   //   "value": {},
     *   //   "visitNumPagesDetails": {},
     *   //   "visitTimeOnSiteDetails": {},
     *   //   "webPropertyId": "my_webPropertyId"
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
    insert(
      params: Params$Resource$Management$Goals$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Goals$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Goal>;
    insert(
      params: Params$Resource$Management$Goals$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Goals$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Goal>,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    insert(
      params: Params$Resource$Management$Goals$Insert,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Goal>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$Insert
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Goal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Goal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Goal>(parameters);
      }
    }

    /**
     * Lists goals to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.list({
     *     // Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of goals to include in this response.
     *     'max-results': 'placeholder-value',
     *     // View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     *     profileId: 'placeholder-value',
     *     // An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Goals$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Goals$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Goals>;
    list(
      params: Params$Resource$Management$Goals$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Goals$List,
      options: MethodOptions | BodyResponseCallback<Schema$Goals>,
      callback: BodyResponseCallback<Schema$Goals>
    ): void;
    list(
      params: Params$Resource$Management$Goals$List,
      callback: BodyResponseCallback<Schema$Goals>
    ): void;
    list(callback: BodyResponseCallback<Schema$Goals>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$List
        | BodyResponseCallback<Schema$Goals>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Goals>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Goals>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Goals> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Goals>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Goals>(parameters);
      }
    }

    /**
     * Updates an existing goal. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.patch({
     *     // Account ID to update the goal.
     *     accountId: 'placeholder-value',
     *     // Index of the goal to be updated.
     *     goalId: 'placeholder-value',
     *     // View (Profile) ID to update the goal.
     *     profileId: 'placeholder-value',
     *     // Web property ID to update the goal.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "eventDetails": {},
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "urlDestinationDetails": {},
     *       //   "value": {},
     *       //   "visitNumPagesDetails": {},
     *       //   "visitTimeOnSiteDetails": {},
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "eventDetails": {},
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "urlDestinationDetails": {},
     *   //   "value": {},
     *   //   "visitNumPagesDetails": {},
     *   //   "visitTimeOnSiteDetails": {},
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Goals$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Goals$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Goal>;
    patch(
      params: Params$Resource$Management$Goals$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Goals$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Goal>,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    patch(
      params: Params$Resource$Management$Goals$Patch,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Goal>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$Patch
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Goal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
        pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Goal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Goal>(parameters);
      }
    }

    /**
     * Updates an existing goal.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.goals.update({
     *     // Account ID to update the goal.
     *     accountId: 'placeholder-value',
     *     // Index of the goal to be updated.
     *     goalId: 'placeholder-value',
     *     // View (Profile) ID to update the goal.
     *     profileId: 'placeholder-value',
     *     // Web property ID to update the goal.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "active": false,
     *       //   "created": "my_created",
     *       //   "eventDetails": {},
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "profileId": "my_profileId",
     *       //   "selfLink": "my_selfLink",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "urlDestinationDetails": {},
     *       //   "value": {},
     *       //   "visitNumPagesDetails": {},
     *       //   "visitTimeOnSiteDetails": {},
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "active": false,
     *   //   "created": "my_created",
     *   //   "eventDetails": {},
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "profileId": "my_profileId",
     *   //   "selfLink": "my_selfLink",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "urlDestinationDetails": {},
     *   //   "value": {},
     *   //   "visitNumPagesDetails": {},
     *   //   "visitTimeOnSiteDetails": {},
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Goals$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Goals$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Goal>;
    update(
      params: Params$Resource$Management$Goals$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Goals$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Goal>,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    update(
      params: Params$Resource$Management$Goals$Update,
      callback: BodyResponseCallback<Schema$Goal>
    ): void;
    update(callback: BodyResponseCallback<Schema$Goal>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Goals$Update
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Goal>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Goal> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Goals$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Goals$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'goalId'],
        pathParams: ['accountId', 'goalId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Goal>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Goal>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Goals$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve the goal for.
     */
    accountId?: string;
    /**
     * Goal ID to retrieve the goal for.
     */
    goalId?: string;
    /**
     * View (Profile) ID to retrieve the goal for.
     */
    profileId?: string;
    /**
     * Web property ID to retrieve the goal for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Goals$Insert
    extends StandardParameters {
    /**
     * Account ID to create the goal for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to create the goal for.
     */
    profileId?: string;
    /**
     * Web property ID to create the goal for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Goal;
  }
  export interface Params$Resource$Management$Goals$List
    extends StandardParameters {
    /**
     * Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     */
    accountId?: string;
    /**
     * The maximum number of goals to include in this response.
     */
    'max-results'?: number;
    /**
     * View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
     */
    profileId?: string;
    /**
     * An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Goals$Patch
    extends StandardParameters {
    /**
     * Account ID to update the goal.
     */
    accountId?: string;
    /**
     * Index of the goal to be updated.
     */
    goalId?: string;
    /**
     * View (Profile) ID to update the goal.
     */
    profileId?: string;
    /**
     * Web property ID to update the goal.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Goal;
  }
  export interface Params$Resource$Management$Goals$Update
    extends StandardParameters {
    /**
     * Account ID to update the goal.
     */
    accountId?: string;
    /**
     * Index of the goal to be updated.
     */
    goalId?: string;
    /**
     * View (Profile) ID to update the goal.
     */
    profileId?: string;
    /**
     * Web property ID to update the goal.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Goal;
  }

  export class Resource$Management$Profilefilterlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a profile filter link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.delete({
     *     // Account ID to which the profile filter link belongs.
     *     accountId: 'd+',
     *     // ID of the profile filter link to delete.
     *     linkId: 'd+:d+',
     *     // Profile ID to which the filter link belongs.
     *     profileId: 'd+',
     *     // Web property Id to which the profile filter link belongs.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Profilefilterlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Profilefilterlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Profilefilterlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Profilefilterlinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Profilefilterlinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns a single profile filter link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.get({
     *     // Account ID to retrieve profile filter link for.
     *     accountId: 'd+',
     *     // ID of the profile filter link.
     *     linkId: 'd+:d+',
     *     // Profile ID to retrieve filter link for.
     *     profileId: 'd+',
     *     // Web property Id to retrieve profile filter link for.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "filterRef": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profileRef": {},
     *   //   "rank": 0,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Profilefilterlinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Profilefilterlinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProfileFilterLink>;
    get(
      params: Params$Resource$Management$Profilefilterlinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Profilefilterlinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ProfileFilterLink>,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    get(
      params: Params$Resource$Management$Profilefilterlinks$Get,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    get(callback: BodyResponseCallback<Schema$ProfileFilterLink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$Get
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProfileFilterLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProfileFilterLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProfileFilterLink>(parameters);
      }
    }

    /**
     * Create a new profile filter link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.insert({
     *     // Account ID to create profile filter link for.
     *     accountId: 'd+',
     *     // Profile ID to create filter link for.
     *     profileId: 'd+',
     *     // Web property Id to create profile filter link for.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filterRef": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "profileRef": {},
     *       //   "rank": 0,
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "filterRef": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profileRef": {},
     *   //   "rank": 0,
     *   //   "selfLink": "my_selfLink"
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
    insert(
      params: Params$Resource$Management$Profilefilterlinks$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Profilefilterlinks$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProfileFilterLink>;
    insert(
      params: Params$Resource$Management$Profilefilterlinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Profilefilterlinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ProfileFilterLink>,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    insert(
      params: Params$Resource$Management$Profilefilterlinks$Insert,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ProfileFilterLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$Insert
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProfileFilterLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProfileFilterLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProfileFilterLink>(parameters);
      }
    }

    /**
     * Lists all profile filter links for a profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.list({
     *     // Account ID to retrieve profile filter links for.
     *     accountId: 'd+',
     *     // The maximum number of profile filter links to include in this response.
     *     'max-results': 'placeholder-value',
     *     // Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     *     profileId: 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Profilefilterlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Profilefilterlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProfileFilterLinks>;
    list(
      params: Params$Resource$Management$Profilefilterlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Profilefilterlinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ProfileFilterLinks>,
      callback: BodyResponseCallback<Schema$ProfileFilterLinks>
    ): void;
    list(
      params: Params$Resource$Management$Profilefilterlinks$List,
      callback: BodyResponseCallback<Schema$ProfileFilterLinks>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProfileFilterLinks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$List
        | BodyResponseCallback<Schema$ProfileFilterLinks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProfileFilterLinks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProfileFilterLinks>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProfileFilterLinks>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProfileFilterLinks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProfileFilterLinks>(parameters);
      }
    }

    /**
     * Update an existing profile filter link. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.patch({
     *     // Account ID to which profile filter link belongs.
     *     accountId: 'd+',
     *     // ID of the profile filter link to be updated.
     *     linkId: 'd+:d+',
     *     // Profile ID to which filter link belongs
     *     profileId: 'd+',
     *     // Web property Id to which profile filter link belongs
     *     webPropertyId: 'UA-(d+)-(d+)',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filterRef": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "profileRef": {},
     *       //   "rank": 0,
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "filterRef": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profileRef": {},
     *   //   "rank": 0,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Profilefilterlinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Profilefilterlinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProfileFilterLink>;
    patch(
      params: Params$Resource$Management$Profilefilterlinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Profilefilterlinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ProfileFilterLink>,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    patch(
      params: Params$Resource$Management$Profilefilterlinks$Patch,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ProfileFilterLink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$Patch
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProfileFilterLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProfileFilterLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProfileFilterLink>(parameters);
      }
    }

    /**
     * Update an existing profile filter link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileFilterLinks.update({
     *     // Account ID to which profile filter link belongs.
     *     accountId: 'd+',
     *     // ID of the profile filter link to be updated.
     *     linkId: 'd+:d+',
     *     // Profile ID to which filter link belongs
     *     profileId: 'd+',
     *     // Web property Id to which profile filter link belongs
     *     webPropertyId: 'UA-(d+)-(d+)',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filterRef": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "profileRef": {},
     *       //   "rank": 0,
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "filterRef": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profileRef": {},
     *   //   "rank": 0,
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Profilefilterlinks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Profilefilterlinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProfileFilterLink>;
    update(
      params: Params$Resource$Management$Profilefilterlinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Profilefilterlinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ProfileFilterLink>,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    update(
      params: Params$Resource$Management$Profilefilterlinks$Update,
      callback: BodyResponseCallback<Schema$ProfileFilterLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$ProfileFilterLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Profilefilterlinks$Update
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProfileFilterLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ProfileFilterLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profilefilterlinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profilefilterlinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProfileFilterLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProfileFilterLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Profilefilterlinks$Delete
    extends StandardParameters {
    /**
     * Account ID to which the profile filter link belongs.
     */
    accountId?: string;
    /**
     * ID of the profile filter link to delete.
     */
    linkId?: string;
    /**
     * Profile ID to which the filter link belongs.
     */
    profileId?: string;
    /**
     * Web property Id to which the profile filter link belongs.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profilefilterlinks$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve profile filter link for.
     */
    accountId?: string;
    /**
     * ID of the profile filter link.
     */
    linkId?: string;
    /**
     * Profile ID to retrieve filter link for.
     */
    profileId?: string;
    /**
     * Web property Id to retrieve profile filter link for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profilefilterlinks$Insert
    extends StandardParameters {
    /**
     * Account ID to create profile filter link for.
     */
    accountId?: string;
    /**
     * Profile ID to create filter link for.
     */
    profileId?: string;
    /**
     * Web property Id to create profile filter link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProfileFilterLink;
  }
  export interface Params$Resource$Management$Profilefilterlinks$List
    extends StandardParameters {
    /**
     * Account ID to retrieve profile filter links for.
     */
    accountId?: string;
    /**
     * The maximum number of profile filter links to include in this response.
     */
    'max-results'?: number;
    /**
     * Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     */
    profileId?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profilefilterlinks$Patch
    extends StandardParameters {
    /**
     * Account ID to which profile filter link belongs.
     */
    accountId?: string;
    /**
     * ID of the profile filter link to be updated.
     */
    linkId?: string;
    /**
     * Profile ID to which filter link belongs
     */
    profileId?: string;
    /**
     * Web property Id to which profile filter link belongs
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProfileFilterLink;
  }
  export interface Params$Resource$Management$Profilefilterlinks$Update
    extends StandardParameters {
    /**
     * Account ID to which profile filter link belongs.
     */
    accountId?: string;
    /**
     * ID of the profile filter link to be updated.
     */
    linkId?: string;
    /**
     * Profile ID to which filter link belongs
     */
    profileId?: string;
    /**
     * Web property Id to which profile filter link belongs
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ProfileFilterLink;
  }

  export class Resource$Management$Profiles {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.delete({
     *     // Account ID to delete the view (profile) for.
     *     accountId: 'placeholder-value',
     *     // ID of the view (profile) to be deleted.
     *     profileId: 'placeholder-value',
     *     // Web property ID to delete the view (profile) for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Profiles$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Profiles$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Profiles$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Profiles$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Profiles$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a view (profile) to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.get({
     *     // Account ID to retrieve the view (profile) for.
     *     accountId: '[0-9]+',
     *     // View (Profile) ID to retrieve the view (profile) for.
     *     profileId: '[0-9]+',
     *     // Web property ID to retrieve the view (profile) for.
     *     webPropertyId: 'UA-[0-9]+-[0-9]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "botFilteringEnabled": false,
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "currency": "my_currency",
     *   //   "defaultPage": "my_defaultPage",
     *   //   "eCommerceTracking": false,
     *   //   "enhancedECommerceTracking": false,
     *   //   "excludeQueryParameters": "my_excludeQueryParameters",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *   //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *   //   "starred": false,
     *   //   "stripSiteSearchCategoryParameters": false,
     *   //   "stripSiteSearchQueryParameters": false,
     *   //   "timezone": "my_timezone",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Profiles$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Profiles$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
    get(
      params: Params$Resource$Management$Profiles$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Profiles$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    get(
      params: Params$Resource$Management$Profiles$Get,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    get(callback: BodyResponseCallback<Schema$Profile>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$Get
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Create a new view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.insert({
     *     // Account ID to create the view (profile) for.
     *     accountId: 'placeholder-value',
     *     // Web property ID to create the view (profile) for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "botFilteringEnabled": false,
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "currency": "my_currency",
     *       //   "defaultPage": "my_defaultPage",
     *       //   "eCommerceTracking": false,
     *       //   "enhancedECommerceTracking": false,
     *       //   "excludeQueryParameters": "my_excludeQueryParameters",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *       //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *       //   "starred": false,
     *       //   "stripSiteSearchCategoryParameters": false,
     *       //   "stripSiteSearchQueryParameters": false,
     *       //   "timezone": "my_timezone",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "botFilteringEnabled": false,
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "currency": "my_currency",
     *   //   "defaultPage": "my_defaultPage",
     *   //   "eCommerceTracking": false,
     *   //   "enhancedECommerceTracking": false,
     *   //   "excludeQueryParameters": "my_excludeQueryParameters",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *   //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *   //   "starred": false,
     *   //   "stripSiteSearchCategoryParameters": false,
     *   //   "stripSiteSearchQueryParameters": false,
     *   //   "timezone": "my_timezone",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "websiteUrl": "my_websiteUrl"
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
    insert(
      params: Params$Resource$Management$Profiles$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Profiles$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
    insert(
      params: Params$Resource$Management$Profiles$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Profiles$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    insert(
      params: Params$Resource$Management$Profiles$Insert,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Profile>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$Insert
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Lists views (profiles) to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.list({
     *     // Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     *     accountId: 'placeholder-value',
     *     // The maximum number of views (profiles) to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Profiles$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Profiles$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profiles>;
    list(
      params: Params$Resource$Management$Profiles$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Profiles$List,
      options: MethodOptions | BodyResponseCallback<Schema$Profiles>,
      callback: BodyResponseCallback<Schema$Profiles>
    ): void;
    list(
      params: Params$Resource$Management$Profiles$List,
      callback: BodyResponseCallback<Schema$Profiles>
    ): void;
    list(callback: BodyResponseCallback<Schema$Profiles>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$List
        | BodyResponseCallback<Schema$Profiles>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profiles>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profiles>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profiles> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profiles>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profiles>(parameters);
      }
    }

    /**
     * Updates an existing view (profile). This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.patch({
     *     // Account ID to which the view (profile) belongs
     *     accountId: 'placeholder-value',
     *     // ID of the view (profile) to be updated.
     *     profileId: 'placeholder-value',
     *     // Web property ID to which the view (profile) belongs
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "botFilteringEnabled": false,
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "currency": "my_currency",
     *       //   "defaultPage": "my_defaultPage",
     *       //   "eCommerceTracking": false,
     *       //   "enhancedECommerceTracking": false,
     *       //   "excludeQueryParameters": "my_excludeQueryParameters",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *       //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *       //   "starred": false,
     *       //   "stripSiteSearchCategoryParameters": false,
     *       //   "stripSiteSearchQueryParameters": false,
     *       //   "timezone": "my_timezone",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "botFilteringEnabled": false,
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "currency": "my_currency",
     *   //   "defaultPage": "my_defaultPage",
     *   //   "eCommerceTracking": false,
     *   //   "enhancedECommerceTracking": false,
     *   //   "excludeQueryParameters": "my_excludeQueryParameters",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *   //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *   //   "starred": false,
     *   //   "stripSiteSearchCategoryParameters": false,
     *   //   "stripSiteSearchQueryParameters": false,
     *   //   "timezone": "my_timezone",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Profiles$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Profiles$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
    patch(
      params: Params$Resource$Management$Profiles$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Profiles$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    patch(
      params: Params$Resource$Management$Profiles$Patch,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Profile>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$Patch
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }

    /**
     * Updates an existing view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profiles.update({
     *     // Account ID to which the view (profile) belongs
     *     accountId: 'placeholder-value',
     *     // ID of the view (profile) to be updated.
     *     profileId: 'placeholder-value',
     *     // Web property ID to which the view (profile) belongs
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "botFilteringEnabled": false,
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "currency": "my_currency",
     *       //   "defaultPage": "my_defaultPage",
     *       //   "eCommerceTracking": false,
     *       //   "enhancedECommerceTracking": false,
     *       //   "excludeQueryParameters": "my_excludeQueryParameters",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *       //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *       //   "starred": false,
     *       //   "stripSiteSearchCategoryParameters": false,
     *       //   "stripSiteSearchQueryParameters": false,
     *       //   "timezone": "my_timezone",
     *       //   "type": "my_type",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "botFilteringEnabled": false,
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "currency": "my_currency",
     *   //   "defaultPage": "my_defaultPage",
     *   //   "eCommerceTracking": false,
     *   //   "enhancedECommerceTracking": false,
     *   //   "excludeQueryParameters": "my_excludeQueryParameters",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "siteSearchCategoryParameters": "my_siteSearchCategoryParameters",
     *   //   "siteSearchQueryParameters": "my_siteSearchQueryParameters",
     *   //   "starred": false,
     *   //   "stripSiteSearchCategoryParameters": false,
     *   //   "stripSiteSearchQueryParameters": false,
     *   //   "timezone": "my_timezone",
     *   //   "type": "my_type",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Profiles$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Profiles$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Profile>;
    update(
      params: Params$Resource$Management$Profiles$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Profiles$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Profile>,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    update(
      params: Params$Resource$Management$Profiles$Update,
      callback: BodyResponseCallback<Schema$Profile>
    ): void;
    update(callback: BodyResponseCallback<Schema$Profile>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Profiles$Update
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Profile>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Profile> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profiles$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profiles$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Profile>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Profile>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Profiles$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the view (profile) for.
     */
    accountId?: string;
    /**
     * ID of the view (profile) to be deleted.
     */
    profileId?: string;
    /**
     * Web property ID to delete the view (profile) for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profiles$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve the view (profile) for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to retrieve the view (profile) for.
     */
    profileId?: string;
    /**
     * Web property ID to retrieve the view (profile) for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profiles$Insert
    extends StandardParameters {
    /**
     * Account ID to create the view (profile) for.
     */
    accountId?: string;
    /**
     * Web property ID to create the view (profile) for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
  export interface Params$Resource$Management$Profiles$List
    extends StandardParameters {
    /**
     * Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
     */
    accountId?: string;
    /**
     * The maximum number of views (profiles) to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profiles$Patch
    extends StandardParameters {
    /**
     * Account ID to which the view (profile) belongs
     */
    accountId?: string;
    /**
     * ID of the view (profile) to be updated.
     */
    profileId?: string;
    /**
     * Web property ID to which the view (profile) belongs
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }
  export interface Params$Resource$Management$Profiles$Update
    extends StandardParameters {
    /**
     * Account ID to which the view (profile) belongs
     */
    accountId?: string;
    /**
     * ID of the view (profile) to be updated.
     */
    profileId?: string;
    /**
     * Web property ID to which the view (profile) belongs
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Profile;
  }

  export class Resource$Management$Profileuserlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a user from the given view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileUserLinks.delete({
     *     // Account ID to delete the user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to delete the user link for.
     *     linkId: 'placeholder-value',
     *     // View (Profile) ID to delete the user link for.
     *     profileId: 'placeholder-value',
     *     // Web Property ID to delete the user link for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Profileuserlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Profileuserlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Profileuserlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Profileuserlinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Profileuserlinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Profileuserlinks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profileuserlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profileuserlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Adds a new user to the given view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileUserLinks.insert({
     *     // Account ID to create the user link for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to create the user link for.
     *     profileId: 'placeholder-value',
     *     // Web Property ID to create the user link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
    insert(
      params: Params$Resource$Management$Profileuserlinks$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Profileuserlinks$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    insert(
      params: Params$Resource$Management$Profileuserlinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Profileuserlinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(
      params: Params$Resource$Management$Profileuserlinks$Insert,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Profileuserlinks$Insert
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profileuserlinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profileuserlinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }

    /**
     * Lists profile-user links for a given view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileUserLinks.list({
     *     // Account ID which the given view (profile) belongs to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of profile-user links to include in this response.
     *     'max-results': 'placeholder-value',
     *     // View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     *     profileId: 'placeholder-value',
     *     // An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0
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
      params: Params$Resource$Management$Profileuserlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Profileuserlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLinks>;
    list(
      params: Params$Resource$Management$Profileuserlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Profileuserlinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLinks>,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(
      params: Params$Resource$Management$Profileuserlinks$List,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(callback: BodyResponseCallback<Schema$EntityUserLinks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Profileuserlinks$List
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLinks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profileuserlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profileuserlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLinks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLinks>(parameters);
      }
    }

    /**
     * Updates permissions for an existing user on the given view (profile).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.profileUserLinks.update({
     *     // Account ID to update the user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to update the user link for.
     *     linkId: 'placeholder-value',
     *     // View (Profile ID) to update the user link for.
     *     profileId: 'placeholder-value',
     *     // Web Property ID to update the user link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
      params: Params$Resource$Management$Profileuserlinks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Profileuserlinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    update(
      params: Params$Resource$Management$Profileuserlinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Profileuserlinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(
      params: Params$Resource$Management$Profileuserlinks$Update,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Profileuserlinks$Update
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Profileuserlinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Profileuserlinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Profileuserlinks$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the user link for.
     */
    accountId?: string;
    /**
     * Link ID to delete the user link for.
     */
    linkId?: string;
    /**
     * View (Profile) ID to delete the user link for.
     */
    profileId?: string;
    /**
     * Web Property ID to delete the user link for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profileuserlinks$Insert
    extends StandardParameters {
    /**
     * Account ID to create the user link for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to create the user link for.
     */
    profileId?: string;
    /**
     * Web Property ID to create the user link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }
  export interface Params$Resource$Management$Profileuserlinks$List
    extends StandardParameters {
    /**
     * Account ID which the given view (profile) belongs to.
     */
    accountId?: string;
    /**
     * The maximum number of profile-user links to include in this response.
     */
    'max-results'?: number;
    /**
     * View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     */
    profileId?: string;
    /**
     * An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Profileuserlinks$Update
    extends StandardParameters {
    /**
     * Account ID to update the user link for.
     */
    accountId?: string;
    /**
     * Link ID to update the user link for.
     */
    linkId?: string;
    /**
     * View (Profile ID) to update the user link for.
     */
    profileId?: string;
    /**
     * Web Property ID to update the user link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }

  export class Resource$Management$Remarketingaudience {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a remarketing audience.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.delete({
     *     // Account ID to which the remarketing audience belongs.
     *     accountId: 'placeholder-value',
     *     // The ID of the remarketing audience to delete.
     *     remarketingAudienceId: 'placeholder-value',
     *     // Web property ID to which the remarketing audience belongs.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Remarketingaudience$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Remarketingaudience$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Remarketingaudience$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Remarketingaudience$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Remarketingaudience$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
        pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Gets a remarketing audience to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.get({
     *     // The account ID of the remarketing audience to retrieve.
     *     accountId: 'placeholder-value',
     *     // The ID of the remarketing audience to retrieve.
     *     remarketingAudienceId: 'placeholder-value',
     *     // The web property ID of the remarketing audience to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "audienceDefinition": {},
     *   //   "audienceType": "my_audienceType",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "linkedAdAccounts": [],
     *   //   "linkedViews": [],
     *   //   "name": "my_name",
     *   //   "stateBasedAudienceDefinition": {},
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Remarketingaudience$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Remarketingaudience$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingAudience>;
    get(
      params: Params$Resource$Management$Remarketingaudience$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Remarketingaudience$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingAudience>,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    get(
      params: Params$Resource$Management$Remarketingaudience$Get,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    get(callback: BodyResponseCallback<Schema$RemarketingAudience>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$Get
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RemarketingAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
        pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemarketingAudience>(parameters);
      }
    }

    /**
     * Creates a new remarketing audience.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.insert({
     *     // The account ID for which to create the remarketing audience.
     *     accountId: 'placeholder-value',
     *     // Web property ID for which to create the remarketing audience.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "audienceDefinition": {},
     *       //   "audienceType": "my_audienceType",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "linkedAdAccounts": [],
     *       //   "linkedViews": [],
     *       //   "name": "my_name",
     *       //   "stateBasedAudienceDefinition": {},
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "audienceDefinition": {},
     *   //   "audienceType": "my_audienceType",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "linkedAdAccounts": [],
     *   //   "linkedViews": [],
     *   //   "name": "my_name",
     *   //   "stateBasedAudienceDefinition": {},
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
    insert(
      params: Params$Resource$Management$Remarketingaudience$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Remarketingaudience$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingAudience>;
    insert(
      params: Params$Resource$Management$Remarketingaudience$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Remarketingaudience$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingAudience>,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    insert(
      params: Params$Resource$Management$Remarketingaudience$Insert,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    insert(callback: BodyResponseCallback<Schema$RemarketingAudience>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$Insert
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RemarketingAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemarketingAudience>(parameters);
      }
    }

    /**
     * Lists remarketing audiences to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.list({
     *     // The account ID of the remarketing audiences to retrieve.
     *     accountId: 'placeholder-value',
     *     // The maximum number of remarketing audiences to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *
     *     type: 'placeholder-value',
     *     // The web property ID of the remarketing audiences to retrieve.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Remarketingaudience$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Remarketingaudience$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingAudiences>;
    list(
      params: Params$Resource$Management$Remarketingaudience$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Remarketingaudience$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemarketingAudiences>,
      callback: BodyResponseCallback<Schema$RemarketingAudiences>
    ): void;
    list(
      params: Params$Resource$Management$Remarketingaudience$List,
      callback: BodyResponseCallback<Schema$RemarketingAudiences>
    ): void;
    list(callback: BodyResponseCallback<Schema$RemarketingAudiences>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$List
        | BodyResponseCallback<Schema$RemarketingAudiences>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemarketingAudiences>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemarketingAudiences>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RemarketingAudiences>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingAudiences>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemarketingAudiences>(parameters);
      }
    }

    /**
     * Updates an existing remarketing audience. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.patch({
     *     // The account ID of the remarketing audience to update.
     *     accountId: 'placeholder-value',
     *     // The ID of the remarketing audience to update.
     *     remarketingAudienceId: 'placeholder-value',
     *     // The web property ID of the remarketing audience to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "audienceDefinition": {},
     *       //   "audienceType": "my_audienceType",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "linkedAdAccounts": [],
     *       //   "linkedViews": [],
     *       //   "name": "my_name",
     *       //   "stateBasedAudienceDefinition": {},
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "audienceDefinition": {},
     *   //   "audienceType": "my_audienceType",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "linkedAdAccounts": [],
     *   //   "linkedViews": [],
     *   //   "name": "my_name",
     *   //   "stateBasedAudienceDefinition": {},
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Remarketingaudience$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Remarketingaudience$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingAudience>;
    patch(
      params: Params$Resource$Management$Remarketingaudience$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Remarketingaudience$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingAudience>,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    patch(
      params: Params$Resource$Management$Remarketingaudience$Patch,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    patch(callback: BodyResponseCallback<Schema$RemarketingAudience>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$Patch
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RemarketingAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
        pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemarketingAudience>(parameters);
      }
    }

    /**
     * Updates an existing remarketing audience.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.remarketingAudience.update({
     *     // The account ID of the remarketing audience to update.
     *     accountId: 'placeholder-value',
     *     // The ID of the remarketing audience to update.
     *     remarketingAudienceId: 'placeholder-value',
     *     // The web property ID of the remarketing audience to update.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "audienceDefinition": {},
     *       //   "audienceType": "my_audienceType",
     *       //   "created": "my_created",
     *       //   "description": "my_description",
     *       //   "id": "my_id",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "linkedAdAccounts": [],
     *       //   "linkedViews": [],
     *       //   "name": "my_name",
     *       //   "stateBasedAudienceDefinition": {},
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "audienceDefinition": {},
     *   //   "audienceType": "my_audienceType",
     *   //   "created": "my_created",
     *   //   "description": "my_description",
     *   //   "id": "my_id",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "linkedAdAccounts": [],
     *   //   "linkedViews": [],
     *   //   "name": "my_name",
     *   //   "stateBasedAudienceDefinition": {},
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Remarketingaudience$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Remarketingaudience$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RemarketingAudience>;
    update(
      params: Params$Resource$Management$Remarketingaudience$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Remarketingaudience$Update,
      options: MethodOptions | BodyResponseCallback<Schema$RemarketingAudience>,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    update(
      params: Params$Resource$Management$Remarketingaudience$Update,
      callback: BodyResponseCallback<Schema$RemarketingAudience>
    ): void;
    update(callback: BodyResponseCallback<Schema$RemarketingAudience>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Remarketingaudience$Update
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemarketingAudience>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$RemarketingAudience>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Remarketingaudience$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Remarketingaudience$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'remarketingAudienceId'],
        pathParams: ['accountId', 'remarketingAudienceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemarketingAudience>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemarketingAudience>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Remarketingaudience$Delete
    extends StandardParameters {
    /**
     * Account ID to which the remarketing audience belongs.
     */
    accountId?: string;
    /**
     * The ID of the remarketing audience to delete.
     */
    remarketingAudienceId?: string;
    /**
     * Web property ID to which the remarketing audience belongs.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Remarketingaudience$Get
    extends StandardParameters {
    /**
     * The account ID of the remarketing audience to retrieve.
     */
    accountId?: string;
    /**
     * The ID of the remarketing audience to retrieve.
     */
    remarketingAudienceId?: string;
    /**
     * The web property ID of the remarketing audience to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Remarketingaudience$Insert
    extends StandardParameters {
    /**
     * The account ID for which to create the remarketing audience.
     */
    accountId?: string;
    /**
     * Web property ID for which to create the remarketing audience.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingAudience;
  }
  export interface Params$Resource$Management$Remarketingaudience$List
    extends StandardParameters {
    /**
     * The account ID of the remarketing audiences to retrieve.
     */
    accountId?: string;
    /**
     * The maximum number of remarketing audiences to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     *
     */
    type?: string;
    /**
     * The web property ID of the remarketing audiences to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Remarketingaudience$Patch
    extends StandardParameters {
    /**
     * The account ID of the remarketing audience to update.
     */
    accountId?: string;
    /**
     * The ID of the remarketing audience to update.
     */
    remarketingAudienceId?: string;
    /**
     * The web property ID of the remarketing audience to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingAudience;
  }
  export interface Params$Resource$Management$Remarketingaudience$Update
    extends StandardParameters {
    /**
     * The account ID of the remarketing audience to update.
     */
    accountId?: string;
    /**
     * The ID of the remarketing audience to update.
     */
    remarketingAudienceId?: string;
    /**
     * The web property ID of the remarketing audience to update.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemarketingAudience;
  }

  export class Resource$Management$Segments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists segments to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.segments.list({
     *     // The maximum number of segments to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Segments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Segments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Segments>;
    list(
      params: Params$Resource$Management$Segments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Segments$List,
      options: MethodOptions | BodyResponseCallback<Schema$Segments>,
      callback: BodyResponseCallback<Schema$Segments>
    ): void;
    list(
      params: Params$Resource$Management$Segments$List,
      callback: BodyResponseCallback<Schema$Segments>
    ): void;
    list(callback: BodyResponseCallback<Schema$Segments>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Segments$List
        | BodyResponseCallback<Schema$Segments>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Segments>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Segments>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Segments> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Segments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Segments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/analytics/v3/management/segments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Segments>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Segments>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Segments$List
    extends StandardParameters {
    /**
     * The maximum number of segments to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }

  export class Resource$Management$Unsampledreports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes an unsampled report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.unsampledReports.delete({
     *     // Account ID to delete the unsampled report for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to delete the unsampled report for.
     *     profileId: 'placeholder-value',
     *     // ID of the unsampled report to be deleted.
     *     unsampledReportId: 'placeholder-value',
     *     // Web property ID to delete the unsampled reports for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Unsampledreports$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Unsampledreports$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Unsampledreports$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Unsampledreports$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Unsampledreports$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Unsampledreports$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Unsampledreports$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Unsampledreports$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'unsampledReportId',
        ],
        pathParams: [
          'accountId',
          'profileId',
          'unsampledReportId',
          'webPropertyId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns a single unsampled report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.unsampledReports.get({
     *     // Account ID to retrieve unsampled report for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to retrieve unsampled report for.
     *     profileId: 'placeholder-value',
     *     // ID of the unsampled report to retrieve.
     *     unsampledReportId: 'placeholder-value',
     *     // Web property ID to retrieve unsampled reports for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "cloudStorageDownloadDetails": {},
     *   //   "created": "my_created",
     *   //   "dimensions": "my_dimensions",
     *   //   "downloadType": "my_downloadType",
     *   //   "driveDownloadDetails": {},
     *   //   "end-date": "my_end-date",
     *   //   "filters": "my_filters",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "metrics": "my_metrics",
     *   //   "profileId": "my_profileId",
     *   //   "segment": "my_segment",
     *   //   "selfLink": "my_selfLink",
     *   //   "start-date": "my_start-date",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
      params: Params$Resource$Management$Unsampledreports$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Unsampledreports$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UnsampledReport>;
    get(
      params: Params$Resource$Management$Unsampledreports$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Unsampledreports$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UnsampledReport>,
      callback: BodyResponseCallback<Schema$UnsampledReport>
    ): void;
    get(
      params: Params$Resource$Management$Unsampledreports$Get,
      callback: BodyResponseCallback<Schema$UnsampledReport>
    ): void;
    get(callback: BodyResponseCallback<Schema$UnsampledReport>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Unsampledreports$Get
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UnsampledReport> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Unsampledreports$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Unsampledreports$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'profileId',
          'unsampledReportId',
        ],
        pathParams: [
          'accountId',
          'profileId',
          'unsampledReportId',
          'webPropertyId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UnsampledReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnsampledReport>(parameters);
      }
    }

    /**
     * Create a new unsampled report.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.unsampledReports.insert({
     *     // Account ID to create the unsampled report for.
     *     accountId: 'placeholder-value',
     *     // View (Profile) ID to create the unsampled report for.
     *     profileId: 'placeholder-value',
     *     // Web property ID to create the unsampled report for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "cloudStorageDownloadDetails": {},
     *       //   "created": "my_created",
     *       //   "dimensions": "my_dimensions",
     *       //   "downloadType": "my_downloadType",
     *       //   "driveDownloadDetails": {},
     *       //   "end-date": "my_end-date",
     *       //   "filters": "my_filters",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "metrics": "my_metrics",
     *       //   "profileId": "my_profileId",
     *       //   "segment": "my_segment",
     *       //   "selfLink": "my_selfLink",
     *       //   "start-date": "my_start-date",
     *       //   "status": "my_status",
     *       //   "title": "my_title",
     *       //   "updated": "my_updated",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "cloudStorageDownloadDetails": {},
     *   //   "created": "my_created",
     *   //   "dimensions": "my_dimensions",
     *   //   "downloadType": "my_downloadType",
     *   //   "driveDownloadDetails": {},
     *   //   "end-date": "my_end-date",
     *   //   "filters": "my_filters",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "metrics": "my_metrics",
     *   //   "profileId": "my_profileId",
     *   //   "segment": "my_segment",
     *   //   "selfLink": "my_selfLink",
     *   //   "start-date": "my_start-date",
     *   //   "status": "my_status",
     *   //   "title": "my_title",
     *   //   "updated": "my_updated",
     *   //   "webPropertyId": "my_webPropertyId"
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
    insert(
      params: Params$Resource$Management$Unsampledreports$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Unsampledreports$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UnsampledReport>;
    insert(
      params: Params$Resource$Management$Unsampledreports$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Unsampledreports$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$UnsampledReport>,
      callback: BodyResponseCallback<Schema$UnsampledReport>
    ): void;
    insert(
      params: Params$Resource$Management$Unsampledreports$Insert,
      callback: BodyResponseCallback<Schema$UnsampledReport>
    ): void;
    insert(callback: BodyResponseCallback<Schema$UnsampledReport>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Unsampledreports$Insert
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnsampledReport>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UnsampledReport> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Unsampledreports$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Unsampledreports$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UnsampledReport>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnsampledReport>(parameters);
      }
    }

    /**
     * Lists unsampled reports to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.unsampledReports.list({
     *     // Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
     *     accountId: 'placeholder-value',
     *     // The maximum number of unsampled reports to include in this response.
     *     'max-results': 'placeholder-value',
     *     // View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
     *     profileId: 'placeholder-value',
     *     // An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Unsampledreports$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Unsampledreports$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UnsampledReports>;
    list(
      params: Params$Resource$Management$Unsampledreports$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Unsampledreports$List,
      options: MethodOptions | BodyResponseCallback<Schema$UnsampledReports>,
      callback: BodyResponseCallback<Schema$UnsampledReports>
    ): void;
    list(
      params: Params$Resource$Management$Unsampledreports$List,
      callback: BodyResponseCallback<Schema$UnsampledReports>
    ): void;
    list(callback: BodyResponseCallback<Schema$UnsampledReports>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Unsampledreports$List
        | BodyResponseCallback<Schema$UnsampledReports>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnsampledReports>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnsampledReports>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$UnsampledReports> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Unsampledreports$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Unsampledreports$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'profileId'],
        pathParams: ['accountId', 'profileId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UnsampledReports>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnsampledReports>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Unsampledreports$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the unsampled report for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to delete the unsampled report for.
     */
    profileId?: string;
    /**
     * ID of the unsampled report to be deleted.
     */
    unsampledReportId?: string;
    /**
     * Web property ID to delete the unsampled reports for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Unsampledreports$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve unsampled report for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to retrieve unsampled report for.
     */
    profileId?: string;
    /**
     * ID of the unsampled report to retrieve.
     */
    unsampledReportId?: string;
    /**
     * Web property ID to retrieve unsampled reports for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Unsampledreports$Insert
    extends StandardParameters {
    /**
     * Account ID to create the unsampled report for.
     */
    accountId?: string;
    /**
     * View (Profile) ID to create the unsampled report for.
     */
    profileId?: string;
    /**
     * Web property ID to create the unsampled report for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnsampledReport;
  }
  export interface Params$Resource$Management$Unsampledreports$List
    extends StandardParameters {
    /**
     * Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
     */
    accountId?: string;
    /**
     * The maximum number of unsampled reports to include in this response.
     */
    'max-results'?: number;
    /**
     * View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
     */
    profileId?: string;
    /**
     * An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
     */
    webPropertyId?: string;
  }

  export class Resource$Management$Uploads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete data associated with a previous upload.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.uploads.deleteUploadData({
     *     // Account Id for the uploads to be deleted.
     *     accountId: 'd+',
     *     // Custom data source Id for the uploads to be deleted.
     *     customDataSourceId: '.{22}',
     *     // Web property Id for the uploads to be deleted.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "customDataImportUids": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
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
    deleteUploadData(
      params: Params$Resource$Management$Uploads$Deleteuploaddata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteUploadData(
      params?: Params$Resource$Management$Uploads$Deleteuploaddata,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    deleteUploadData(
      params: Params$Resource$Management$Uploads$Deleteuploaddata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteUploadData(
      params: Params$Resource$Management$Uploads$Deleteuploaddata,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    deleteUploadData(
      params: Params$Resource$Management$Uploads$Deleteuploaddata,
      callback: BodyResponseCallback<void>
    ): void;
    deleteUploadData(callback: BodyResponseCallback<void>): void;
    deleteUploadData(
      paramsOrCallback?:
        | Params$Resource$Management$Uploads$Deleteuploaddata
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Uploads$Deleteuploaddata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Uploads$Deleteuploaddata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
        pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * List uploads to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.uploads.get({
     *     // Account Id for the upload to retrieve.
     *     accountId: 'd+',
     *     // Custom data source Id for upload to retrieve.
     *     customDataSourceId: '.{22}',
     *     // Upload Id to retrieve.
     *     uploadId: '.{22}',
     *     // Web property Id for the upload to retrieve.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "customDataSourceId": "my_customDataSourceId",
     *   //   "errors": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "uploadTime": "my_uploadTime"
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
      params: Params$Resource$Management$Uploads$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Uploads$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Upload>;
    get(
      params: Params$Resource$Management$Uploads$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Uploads$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Upload>,
      callback: BodyResponseCallback<Schema$Upload>
    ): void;
    get(
      params: Params$Resource$Management$Uploads$Get,
      callback: BodyResponseCallback<Schema$Upload>
    ): void;
    get(callback: BodyResponseCallback<Schema$Upload>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Uploads$Get
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Upload> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Uploads$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Uploads$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'customDataSourceId',
          'uploadId',
        ],
        pathParams: [
          'accountId',
          'customDataSourceId',
          'uploadId',
          'webPropertyId',
        ],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Upload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Upload>(parameters);
      }
    }

    /**
     * List uploads to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.uploads.list({
     *     // Account Id for the uploads to retrieve.
     *     accountId: 'd+',
     *     // Custom data source Id for uploads to retrieve.
     *     customDataSourceId: '.{22}',
     *     // The maximum number of uploads to include in this response.
     *     'max-results': 'placeholder-value',
     *     // A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property Id for the uploads to retrieve.
     *     webPropertyId: 'UA-(d+)-(d+)',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0
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
      params: Params$Resource$Management$Uploads$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Uploads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Uploads>;
    list(
      params: Params$Resource$Management$Uploads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Uploads$List,
      options: MethodOptions | BodyResponseCallback<Schema$Uploads>,
      callback: BodyResponseCallback<Schema$Uploads>
    ): void;
    list(
      params: Params$Resource$Management$Uploads$List,
      callback: BodyResponseCallback<Schema$Uploads>
    ): void;
    list(callback: BodyResponseCallback<Schema$Uploads>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Uploads$List
        | BodyResponseCallback<Schema$Uploads>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Uploads>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Uploads>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Uploads> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Uploads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Uploads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
        pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Uploads>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Uploads>(parameters);
      }
    }

    /**
     * Upload data for a custom data source.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.uploads.uploadData({
     *     // Account Id associated with the upload.
     *     accountId: 'd+',
     *     // Custom data source Id to which the data being uploaded belongs.
     *     customDataSourceId: 'placeholder-value',
     *     // Web property UA-string associated with the upload.
     *     webPropertyId: 'UA-d+-d+',
     *
     *     requestBody: {
     *       // request body parameters
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "customDataSourceId": "my_customDataSourceId",
     *   //   "errors": [],
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "status": "my_status",
     *   //   "uploadTime": "my_uploadTime"
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
    uploadData(
      params: Params$Resource$Management$Uploads$Uploaddata,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    uploadData(
      params?: Params$Resource$Management$Uploads$Uploaddata,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Upload>;
    uploadData(
      params: Params$Resource$Management$Uploads$Uploaddata,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    uploadData(
      params: Params$Resource$Management$Uploads$Uploaddata,
      options: MethodOptions | BodyResponseCallback<Schema$Upload>,
      callback: BodyResponseCallback<Schema$Upload>
    ): void;
    uploadData(
      params: Params$Resource$Management$Uploads$Uploaddata,
      callback: BodyResponseCallback<Schema$Upload>
    ): void;
    uploadData(callback: BodyResponseCallback<Schema$Upload>): void;
    uploadData(
      paramsOrCallback?:
        | Params$Resource$Management$Uploads$Uploaddata
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Upload>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Upload> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Uploads$Uploaddata;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Uploads$Uploaddata;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl +
          '/upload/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['accountId', 'webPropertyId', 'customDataSourceId'],
        pathParams: ['accountId', 'customDataSourceId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Upload>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Upload>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Uploads$Deleteuploaddata
    extends StandardParameters {
    /**
     * Account Id for the uploads to be deleted.
     */
    accountId?: string;
    /**
     * Custom data source Id for the uploads to be deleted.
     */
    customDataSourceId?: string;
    /**
     * Web property Id for the uploads to be deleted.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AnalyticsDataimportDeleteUploadDataRequest;
  }
  export interface Params$Resource$Management$Uploads$Get
    extends StandardParameters {
    /**
     * Account Id for the upload to retrieve.
     */
    accountId?: string;
    /**
     * Custom data source Id for upload to retrieve.
     */
    customDataSourceId?: string;
    /**
     * Upload Id to retrieve.
     */
    uploadId?: string;
    /**
     * Web property Id for the upload to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Uploads$List
    extends StandardParameters {
    /**
     * Account Id for the uploads to retrieve.
     */
    accountId?: string;
    /**
     * Custom data source Id for uploads to retrieve.
     */
    customDataSourceId?: string;
    /**
     * The maximum number of uploads to include in this response.
     */
    'max-results'?: number;
    /**
     * A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property Id for the uploads to retrieve.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Uploads$Uploaddata
    extends StandardParameters {
    /**
     * Account Id associated with the upload.
     */
    accountId?: string;
    /**
     * Custom data source Id to which the data being uploaded belongs.
     */
    customDataSourceId?: string;
    /**
     * Web property UA-string associated with the upload.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Management$Webproperties {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a web property to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.get({
     *     // Account ID to retrieve the web property for.
     *     accountId: '[0-9]+',
     *     // ID to retrieve the web property for.
     *     webPropertyId: 'UA-[0-9]+-[0-9]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "dataRetentionResetOnNewActivity": false,
     *   //   "dataRetentionTtl": "my_dataRetentionTtl",
     *   //   "defaultProfileId": "my_defaultProfileId",
     *   //   "id": "my_id",
     *   //   "industryVertical": "my_industryVertical",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "level": "my_level",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "profileCount": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "starred": false,
     *   //   "updated": "my_updated",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Webproperties$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Webproperties$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Webproperty>;
    get(
      params: Params$Resource$Management$Webproperties$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Webproperties$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Webproperty>,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    get(
      params: Params$Resource$Management$Webproperties$Get,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    get(callback: BodyResponseCallback<Schema$Webproperty>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$Get
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Webproperty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Webproperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Webproperty>(parameters);
      }
    }

    /**
     * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.insert({
     *     // Account ID to create the web property for.
     *     accountId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "dataRetentionResetOnNewActivity": false,
     *       //   "dataRetentionTtl": "my_dataRetentionTtl",
     *       //   "defaultProfileId": "my_defaultProfileId",
     *       //   "id": "my_id",
     *       //   "industryVertical": "my_industryVertical",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "level": "my_level",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "profileCount": 0,
     *       //   "selfLink": "my_selfLink",
     *       //   "starred": false,
     *       //   "updated": "my_updated",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "dataRetentionResetOnNewActivity": false,
     *   //   "dataRetentionTtl": "my_dataRetentionTtl",
     *   //   "defaultProfileId": "my_defaultProfileId",
     *   //   "id": "my_id",
     *   //   "industryVertical": "my_industryVertical",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "level": "my_level",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "profileCount": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "starred": false,
     *   //   "updated": "my_updated",
     *   //   "websiteUrl": "my_websiteUrl"
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
    insert(
      params: Params$Resource$Management$Webproperties$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Webproperties$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Webproperty>;
    insert(
      params: Params$Resource$Management$Webproperties$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Webproperties$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Webproperty>,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    insert(
      params: Params$Resource$Management$Webproperties$Insert,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Webproperty>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$Insert
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Webproperty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Webproperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Webproperty>(parameters);
      }
    }

    /**
     * Lists web properties to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.list({
     *     // Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of web properties to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0,
     *   //   "username": "my_username"
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
      params: Params$Resource$Management$Webproperties$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Webproperties$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Webproperties>;
    list(
      params: Params$Resource$Management$Webproperties$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Webproperties$List,
      options: MethodOptions | BodyResponseCallback<Schema$Webproperties>,
      callback: BodyResponseCallback<Schema$Webproperties>
    ): void;
    list(
      params: Params$Resource$Management$Webproperties$List,
      callback: BodyResponseCallback<Schema$Webproperties>
    ): void;
    list(callback: BodyResponseCallback<Schema$Webproperties>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$List
        | BodyResponseCallback<Schema$Webproperties>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Webproperties>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Webproperties>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Webproperties> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Webproperties>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Webproperties>(parameters);
      }
    }

    /**
     * Updates an existing web property. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.patch({
     *     // Account ID to which the web property belongs
     *     accountId: 'placeholder-value',
     *     // Web property ID
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "dataRetentionResetOnNewActivity": false,
     *       //   "dataRetentionTtl": "my_dataRetentionTtl",
     *       //   "defaultProfileId": "my_defaultProfileId",
     *       //   "id": "my_id",
     *       //   "industryVertical": "my_industryVertical",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "level": "my_level",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "profileCount": 0,
     *       //   "selfLink": "my_selfLink",
     *       //   "starred": false,
     *       //   "updated": "my_updated",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "dataRetentionResetOnNewActivity": false,
     *   //   "dataRetentionTtl": "my_dataRetentionTtl",
     *   //   "defaultProfileId": "my_defaultProfileId",
     *   //   "id": "my_id",
     *   //   "industryVertical": "my_industryVertical",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "level": "my_level",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "profileCount": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "starred": false,
     *   //   "updated": "my_updated",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Webproperties$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Webproperties$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Webproperty>;
    patch(
      params: Params$Resource$Management$Webproperties$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Webproperties$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Webproperty>,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    patch(
      params: Params$Resource$Management$Webproperties$Patch,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Webproperty>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$Patch
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Webproperty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Webproperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Webproperty>(parameters);
      }
    }

    /**
     * Updates an existing web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webproperties.update({
     *     // Account ID to which the web property belongs
     *     accountId: 'placeholder-value',
     *     // Web property ID
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountId": "my_accountId",
     *       //   "childLink": {},
     *       //   "created": "my_created",
     *       //   "dataRetentionResetOnNewActivity": false,
     *       //   "dataRetentionTtl": "my_dataRetentionTtl",
     *       //   "defaultProfileId": "my_defaultProfileId",
     *       //   "id": "my_id",
     *       //   "industryVertical": "my_industryVertical",
     *       //   "internalWebPropertyId": "my_internalWebPropertyId",
     *       //   "kind": "my_kind",
     *       //   "level": "my_level",
     *       //   "name": "my_name",
     *       //   "parentLink": {},
     *       //   "permissions": {},
     *       //   "profileCount": 0,
     *       //   "selfLink": "my_selfLink",
     *       //   "starred": false,
     *       //   "updated": "my_updated",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "accountId": "my_accountId",
     *   //   "childLink": {},
     *   //   "created": "my_created",
     *   //   "dataRetentionResetOnNewActivity": false,
     *   //   "dataRetentionTtl": "my_dataRetentionTtl",
     *   //   "defaultProfileId": "my_defaultProfileId",
     *   //   "id": "my_id",
     *   //   "industryVertical": "my_industryVertical",
     *   //   "internalWebPropertyId": "my_internalWebPropertyId",
     *   //   "kind": "my_kind",
     *   //   "level": "my_level",
     *   //   "name": "my_name",
     *   //   "parentLink": {},
     *   //   "permissions": {},
     *   //   "profileCount": 0,
     *   //   "selfLink": "my_selfLink",
     *   //   "starred": false,
     *   //   "updated": "my_updated",
     *   //   "websiteUrl": "my_websiteUrl"
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
      params: Params$Resource$Management$Webproperties$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Webproperties$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Webproperty>;
    update(
      params: Params$Resource$Management$Webproperties$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Webproperties$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Webproperty>,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    update(
      params: Params$Resource$Management$Webproperties$Update,
      callback: BodyResponseCallback<Schema$Webproperty>
    ): void;
    update(callback: BodyResponseCallback<Schema$Webproperty>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Webproperties$Update
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Webproperty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Webproperty> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webproperties$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webproperties$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Webproperty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Webproperty>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Webproperties$Get
    extends StandardParameters {
    /**
     * Account ID to retrieve the web property for.
     */
    accountId?: string;
    /**
     * ID to retrieve the web property for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webproperties$Insert
    extends StandardParameters {
    /**
     * Account ID to create the web property for.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Webproperty;
  }
  export interface Params$Resource$Management$Webproperties$List
    extends StandardParameters {
    /**
     * Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
     */
    accountId?: string;
    /**
     * The maximum number of web properties to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
  }
  export interface Params$Resource$Management$Webproperties$Patch
    extends StandardParameters {
    /**
     * Account ID to which the web property belongs
     */
    accountId?: string;
    /**
     * Web property ID
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Webproperty;
  }
  export interface Params$Resource$Management$Webproperties$Update
    extends StandardParameters {
    /**
     * Account ID to which the web property belongs
     */
    accountId?: string;
    /**
     * Web property ID
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Webproperty;
  }

  export class Resource$Management$Webpropertyadwordslinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a web property-Google Ads link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.delete({
     *     // ID of the account which the given web property belongs to.
     *     accountId: 'placeholder-value',
     *     // Web property Google Ads link ID.
     *     webPropertyAdWordsLinkId: 'placeholder-value',
     *     // Web property ID to delete the Google Ads link for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Webpropertyadwordslinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Webpropertyadwordslinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Webpropertyadwordslinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Webpropertyadwordslinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Webpropertyadwordslinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Management$Webpropertyadwordslinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'webPropertyAdWordsLinkId',
        ],
        pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Returns a web property-Google Ads link to which the user has access.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.get({
     *     // ID of the account which the given web property belongs to.
     *     accountId: 'placeholder-value',
     *     // Web property-Google Ads link ID.
     *     webPropertyAdWordsLinkId: 'placeholder-value',
     *     // Web property ID to retrieve the Google Ads link for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsAccounts": [],
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "profileIds": [],
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Webpropertyadwordslinks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Management$Webpropertyadwordslinks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityAdWordsLink>;
    get(
      params: Params$Resource$Management$Webpropertyadwordslinks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Management$Webpropertyadwordslinks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    get(
      params: Params$Resource$Management$Webpropertyadwordslinks$Get,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    get(callback: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$Get
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EntityAdWordsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyadwordslinks$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'webPropertyAdWordsLinkId',
        ],
        pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityAdWordsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
      }
    }

    /**
     * Creates a webProperty-Google Ads link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.insert({
     *     // ID of the Google Analytics account to create the link for.
     *     accountId: 'placeholder-value',
     *     // Web property ID to create the link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adWordsAccounts": [],
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "profileIds": [],
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsAccounts": [],
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "profileIds": [],
     *   //   "selfLink": "my_selfLink"
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
    insert(
      params: Params$Resource$Management$Webpropertyadwordslinks$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Webpropertyadwordslinks$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityAdWordsLink>;
    insert(
      params: Params$Resource$Management$Webpropertyadwordslinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Webpropertyadwordslinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    insert(
      params: Params$Resource$Management$Webpropertyadwordslinks$Insert,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$Insert
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EntityAdWordsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Management$Webpropertyadwordslinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityAdWordsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
      }
    }

    /**
     * Lists webProperty-Google Ads links for a given web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.list({
     *     // ID of the account which the given web property belongs to.
     *     accountId: 'd+',
     *     // The maximum number of webProperty-Google Ads links to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web property ID to retrieve the Google Ads links for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0
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
      params: Params$Resource$Management$Webpropertyadwordslinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Webpropertyadwordslinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityAdWordsLinks>;
    list(
      params: Params$Resource$Management$Webpropertyadwordslinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Webpropertyadwordslinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$EntityAdWordsLinks>,
      callback: BodyResponseCallback<Schema$EntityAdWordsLinks>
    ): void;
    list(
      params: Params$Resource$Management$Webpropertyadwordslinks$List,
      callback: BodyResponseCallback<Schema$EntityAdWordsLinks>
    ): void;
    list(callback: BodyResponseCallback<Schema$EntityAdWordsLinks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$List
        | BodyResponseCallback<Schema$EntityAdWordsLinks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityAdWordsLinks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityAdWordsLinks>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EntityAdWordsLinks>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyadwordslinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityAdWordsLinks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityAdWordsLinks>(parameters);
      }
    }

    /**
     * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.patch({
     *     // ID of the account which the given web property belongs to.
     *     accountId: 'placeholder-value',
     *     // Web property-Google Ads link ID.
     *     webPropertyAdWordsLinkId: 'placeholder-value',
     *     // Web property ID to retrieve the Google Ads link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adWordsAccounts": [],
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "profileIds": [],
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsAccounts": [],
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "profileIds": [],
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Webpropertyadwordslinks$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Management$Webpropertyadwordslinks$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityAdWordsLink>;
    patch(
      params: Params$Resource$Management$Webpropertyadwordslinks$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Management$Webpropertyadwordslinks$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    patch(
      params: Params$Resource$Management$Webpropertyadwordslinks$Patch,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    patch(callback: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$Patch
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EntityAdWordsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyadwordslinks$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'webPropertyAdWordsLinkId',
        ],
        pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityAdWordsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
      }
    }

    /**
     * Updates an existing webProperty-Google Ads link.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.edit'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webPropertyAdWordsLinks.update({
     *     // ID of the account which the given web property belongs to.
     *     accountId: 'placeholder-value',
     *     // Web property-Google Ads link ID.
     *     webPropertyAdWordsLinkId: 'placeholder-value',
     *     // Web property ID to retrieve the Google Ads link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "adWordsAccounts": [],
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "name": "my_name",
     *       //   "profileIds": [],
     *       //   "selfLink": "my_selfLink"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "adWordsAccounts": [],
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "name": "my_name",
     *   //   "profileIds": [],
     *   //   "selfLink": "my_selfLink"
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
      params: Params$Resource$Management$Webpropertyadwordslinks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Webpropertyadwordslinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityAdWordsLink>;
    update(
      params: Params$Resource$Management$Webpropertyadwordslinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Webpropertyadwordslinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EntityAdWordsLink>,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    update(
      params: Params$Resource$Management$Webpropertyadwordslinks$Update,
      callback: BodyResponseCallback<Schema$EntityAdWordsLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$EntityAdWordsLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyadwordslinks$Update
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityAdWordsLink>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EntityAdWordsLink>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyadwordslinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Management$Webpropertyadwordslinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: [
          'accountId',
          'webPropertyId',
          'webPropertyAdWordsLinkId',
        ],
        pathParams: ['accountId', 'webPropertyAdWordsLinkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityAdWordsLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityAdWordsLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Webpropertyadwordslinks$Delete
    extends StandardParameters {
    /**
     * ID of the account which the given web property belongs to.
     */
    accountId?: string;
    /**
     * Web property Google Ads link ID.
     */
    webPropertyAdWordsLinkId?: string;
    /**
     * Web property ID to delete the Google Ads link for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webpropertyadwordslinks$Get
    extends StandardParameters {
    /**
     * ID of the account which the given web property belongs to.
     */
    accountId?: string;
    /**
     * Web property-Google Ads link ID.
     */
    webPropertyAdWordsLinkId?: string;
    /**
     * Web property ID to retrieve the Google Ads link for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webpropertyadwordslinks$Insert
    extends StandardParameters {
    /**
     * ID of the Google Analytics account to create the link for.
     */
    accountId?: string;
    /**
     * Web property ID to create the link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityAdWordsLink;
  }
  export interface Params$Resource$Management$Webpropertyadwordslinks$List
    extends StandardParameters {
    /**
     * ID of the account which the given web property belongs to.
     */
    accountId?: string;
    /**
     * The maximum number of webProperty-Google Ads links to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web property ID to retrieve the Google Ads links for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webpropertyadwordslinks$Patch
    extends StandardParameters {
    /**
     * ID of the account which the given web property belongs to.
     */
    accountId?: string;
    /**
     * Web property-Google Ads link ID.
     */
    webPropertyAdWordsLinkId?: string;
    /**
     * Web property ID to retrieve the Google Ads link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityAdWordsLink;
  }
  export interface Params$Resource$Management$Webpropertyadwordslinks$Update
    extends StandardParameters {
    /**
     * ID of the account which the given web property belongs to.
     */
    accountId?: string;
    /**
     * Web property-Google Ads link ID.
     */
    webPropertyAdWordsLinkId?: string;
    /**
     * Web property ID to retrieve the Google Ads link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityAdWordsLink;
  }

  export class Resource$Management$Webpropertyuserlinks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Removes a user from the given web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webpropertyUserLinks.delete({
     *     // Account ID to delete the user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to delete the user link for.
     *     linkId: 'placeholder-value',
     *     // Web Property ID to delete the user link for.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
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
      params: Params$Resource$Management$Webpropertyuserlinks$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Management$Webpropertyuserlinks$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Management$Webpropertyuserlinks$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Management$Webpropertyuserlinks$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Management$Webpropertyuserlinks$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyuserlinks$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyuserlinks$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyuserlinks$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * Adds a new user to the given web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webpropertyUserLinks.insert({
     *     // Account ID to create the user link for.
     *     accountId: 'placeholder-value',
     *     // Web Property ID to create the user link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
    insert(
      params: Params$Resource$Management$Webpropertyuserlinks$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Management$Webpropertyuserlinks$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    insert(
      params: Params$Resource$Management$Webpropertyuserlinks$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Management$Webpropertyuserlinks$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(
      params: Params$Resource$Management$Webpropertyuserlinks$Insert,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    insert(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyuserlinks$Insert
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyuserlinks$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyuserlinks$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }

    /**
     * Lists webProperty-user links for a given web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics.manage.users',
     *       'https://www.googleapis.com/auth/analytics.manage.users.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webpropertyUserLinks.list({
     *     // Account ID which the given web property belongs to.
     *     accountId: 'placeholder-value',
     *     // The maximum number of webProperty-user Links to include in this response.
     *     'max-results': 'placeholder-value',
     *     // An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     *     'start-index': 'placeholder-value',
     *     // Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     *     webPropertyId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "items": [],
     *   //   "itemsPerPage": 0,
     *   //   "kind": "my_kind",
     *   //   "nextLink": "my_nextLink",
     *   //   "previousLink": "my_previousLink",
     *   //   "startIndex": 0,
     *   //   "totalResults": 0
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
      params: Params$Resource$Management$Webpropertyuserlinks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Management$Webpropertyuserlinks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLinks>;
    list(
      params: Params$Resource$Management$Webpropertyuserlinks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Management$Webpropertyuserlinks$List,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLinks>,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(
      params: Params$Resource$Management$Webpropertyuserlinks$List,
      callback: BodyResponseCallback<Schema$EntityUserLinks>
    ): void;
    list(callback: BodyResponseCallback<Schema$EntityUserLinks>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyuserlinks$List
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLinks>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLinks> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyuserlinks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyuserlinks$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId'],
        pathParams: ['accountId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLinks>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLinks>(parameters);
      }
    }

    /**
     * Updates permissions for an existing user on the given web property.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.manage.users'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.management.webpropertyUserLinks.update({
     *     // Account ID to update the account-user link for.
     *     accountId: 'placeholder-value',
     *     // Link ID to update the account-user link for.
     *     linkId: 'placeholder-value',
     *     // Web property ID to update the account-user link for.
     *     webPropertyId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entity": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "permissions": {},
     *       //   "selfLink": "my_selfLink",
     *       //   "userRef": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entity": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "permissions": {},
     *   //   "selfLink": "my_selfLink",
     *   //   "userRef": {}
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
      params: Params$Resource$Management$Webpropertyuserlinks$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Management$Webpropertyuserlinks$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EntityUserLink>;
    update(
      params: Params$Resource$Management$Webpropertyuserlinks$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Management$Webpropertyuserlinks$Update,
      options: MethodOptions | BodyResponseCallback<Schema$EntityUserLink>,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(
      params: Params$Resource$Management$Webpropertyuserlinks$Update,
      callback: BodyResponseCallback<Schema$EntityUserLink>
    ): void;
    update(callback: BodyResponseCallback<Schema$EntityUserLink>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Management$Webpropertyuserlinks$Update
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EntityUserLink>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$EntityUserLink> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Management$Webpropertyuserlinks$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Management$Webpropertyuserlinks$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/analytics/v3/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['accountId', 'webPropertyId', 'linkId'],
        pathParams: ['accountId', 'linkId', 'webPropertyId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EntityUserLink>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EntityUserLink>(parameters);
      }
    }
  }

  export interface Params$Resource$Management$Webpropertyuserlinks$Delete
    extends StandardParameters {
    /**
     * Account ID to delete the user link for.
     */
    accountId?: string;
    /**
     * Link ID to delete the user link for.
     */
    linkId?: string;
    /**
     * Web Property ID to delete the user link for.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webpropertyuserlinks$Insert
    extends StandardParameters {
    /**
     * Account ID to create the user link for.
     */
    accountId?: string;
    /**
     * Web Property ID to create the user link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }
  export interface Params$Resource$Management$Webpropertyuserlinks$List
    extends StandardParameters {
    /**
     * Account ID which the given web property belongs to.
     */
    accountId?: string;
    /**
     * The maximum number of webProperty-user Links to include in this response.
     */
    'max-results'?: number;
    /**
     * An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    'start-index'?: number;
    /**
     * Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId?: string;
  }
  export interface Params$Resource$Management$Webpropertyuserlinks$Update
    extends StandardParameters {
    /**
     * Account ID to update the account-user link for.
     */
    accountId?: string;
    /**
     * Link ID to update the account-user link for.
     */
    linkId?: string;
    /**
     * Web property ID to update the account-user link for.
     */
    webPropertyId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EntityUserLink;
  }

  export class Resource$Metadata {
    context: APIRequestContext;
    columns: Resource$Metadata$Columns;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.columns = new Resource$Metadata$Columns(this.context);
    }
  }

  export class Resource$Metadata$Columns {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists all columns for a report type
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/analytics',
     *       'https://www.googleapis.com/auth/analytics.edit',
     *       'https://www.googleapis.com/auth/analytics.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.metadata.columns.list({
     *     // Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
     *     reportType: 'ga',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributeNames": [],
     *   //   "etag": "my_etag",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "totalResults": 0
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
      params: Params$Resource$Metadata$Columns$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Metadata$Columns$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Columns>;
    list(
      params: Params$Resource$Metadata$Columns$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Metadata$Columns$List,
      options: MethodOptions | BodyResponseCallback<Schema$Columns>,
      callback: BodyResponseCallback<Schema$Columns>
    ): void;
    list(
      params: Params$Resource$Metadata$Columns$List,
      callback: BodyResponseCallback<Schema$Columns>
    ): void;
    list(callback: BodyResponseCallback<Schema$Columns>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Metadata$Columns$List
        | BodyResponseCallback<Schema$Columns>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Columns>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Columns>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Columns> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Metadata$Columns$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Metadata$Columns$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/metadata/{reportType}/columns'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['reportType'],
        pathParams: ['reportType'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Columns>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Columns>(parameters);
      }
    }
  }

  export interface Params$Resource$Metadata$Columns$List
    extends StandardParameters {
    /**
     * Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
     */
    reportType?: string;
  }

  export class Resource$Provisioning {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates an account ticket.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.provision'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.provisioning.createAccountTicket({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "account": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "profile": {},
     *       //   "redirectUri": "my_redirectUri",
     *       //   "webproperty": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "profile": {},
     *   //   "redirectUri": "my_redirectUri",
     *   //   "webproperty": {}
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
    createAccountTicket(
      params: Params$Resource$Provisioning$Createaccountticket,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createAccountTicket(
      params?: Params$Resource$Provisioning$Createaccountticket,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTicket>;
    createAccountTicket(
      params: Params$Resource$Provisioning$Createaccountticket,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createAccountTicket(
      params: Params$Resource$Provisioning$Createaccountticket,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTicket>,
      callback: BodyResponseCallback<Schema$AccountTicket>
    ): void;
    createAccountTicket(
      params: Params$Resource$Provisioning$Createaccountticket,
      callback: BodyResponseCallback<Schema$AccountTicket>
    ): void;
    createAccountTicket(
      callback: BodyResponseCallback<Schema$AccountTicket>
    ): void;
    createAccountTicket(
      paramsOrCallback?:
        | Params$Resource$Provisioning$Createaccountticket
        | BodyResponseCallback<Schema$AccountTicket>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTicket>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTicket>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AccountTicket> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Provisioning$Createaccountticket;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Provisioning$Createaccountticket;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/provisioning/createAccountTicket'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccountTicket>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountTicket>(parameters);
      }
    }

    /**
     * Provision account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.provision'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.provisioning.createAccountTree({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "accountName": "my_accountName",
     *       //   "kind": "my_kind",
     *       //   "profileName": "my_profileName",
     *       //   "timezone": "my_timezone",
     *       //   "webpropertyName": "my_webpropertyName",
     *       //   "websiteUrl": "my_websiteUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "account": {},
     *   //   "kind": "my_kind",
     *   //   "profile": {},
     *   //   "webproperty": {}
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
    createAccountTree(
      params: Params$Resource$Provisioning$Createaccounttree,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createAccountTree(
      params?: Params$Resource$Provisioning$Createaccounttree,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AccountTreeResponse>;
    createAccountTree(
      params: Params$Resource$Provisioning$Createaccounttree,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createAccountTree(
      params: Params$Resource$Provisioning$Createaccounttree,
      options: MethodOptions | BodyResponseCallback<Schema$AccountTreeResponse>,
      callback: BodyResponseCallback<Schema$AccountTreeResponse>
    ): void;
    createAccountTree(
      params: Params$Resource$Provisioning$Createaccounttree,
      callback: BodyResponseCallback<Schema$AccountTreeResponse>
    ): void;
    createAccountTree(
      callback: BodyResponseCallback<Schema$AccountTreeResponse>
    ): void;
    createAccountTree(
      paramsOrCallback?:
        | Params$Resource$Provisioning$Createaccounttree
        | BodyResponseCallback<Schema$AccountTreeResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AccountTreeResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AccountTreeResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$AccountTreeResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Provisioning$Createaccounttree;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Provisioning$Createaccounttree;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/provisioning/createAccountTree'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$AccountTreeResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AccountTreeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Provisioning$Createaccountticket
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountTicket;
  }
  export interface Params$Resource$Provisioning$Createaccounttree
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$AccountTreeRequest;
  }

  export class Resource$Userdeletion {
    context: APIRequestContext;
    userDeletionRequest: Resource$Userdeletion$Userdeletionrequest;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.userDeletionRequest = new Resource$Userdeletion$Userdeletionrequest(
        this.context
      );
    }
  }

  export class Resource$Userdeletion$Userdeletionrequest {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Insert or update a user deletion requests.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/analytics.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const analytics = google.analytics('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/analytics.user.deletion'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await analytics.userDeletion.userDeletionRequest.upsert({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deletionRequestTime": "my_deletionRequestTime",
     *       //   "firebaseProjectId": "my_firebaseProjectId",
     *       //   "id": {},
     *       //   "kind": "my_kind",
     *       //   "propertyId": "my_propertyId",
     *       //   "webPropertyId": "my_webPropertyId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "deletionRequestTime": "my_deletionRequestTime",
     *   //   "firebaseProjectId": "my_firebaseProjectId",
     *   //   "id": {},
     *   //   "kind": "my_kind",
     *   //   "propertyId": "my_propertyId",
     *   //   "webPropertyId": "my_webPropertyId"
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
    upsert(
      params: Params$Resource$Userdeletion$Userdeletionrequest$Upsert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    upsert(
      params?: Params$Resource$Userdeletion$Userdeletionrequest$Upsert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$UserDeletionRequest>;
    upsert(
      params: Params$Resource$Userdeletion$Userdeletionrequest$Upsert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upsert(
      params: Params$Resource$Userdeletion$Userdeletionrequest$Upsert,
      options: MethodOptions | BodyResponseCallback<Schema$UserDeletionRequest>,
      callback: BodyResponseCallback<Schema$UserDeletionRequest>
    ): void;
    upsert(
      params: Params$Resource$Userdeletion$Userdeletionrequest$Upsert,
      callback: BodyResponseCallback<Schema$UserDeletionRequest>
    ): void;
    upsert(callback: BodyResponseCallback<Schema$UserDeletionRequest>): void;
    upsert(
      paramsOrCallback?:
        | Params$Resource$Userdeletion$Userdeletionrequest$Upsert
        | BodyResponseCallback<Schema$UserDeletionRequest>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UserDeletionRequest>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UserDeletionRequest>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$UserDeletionRequest>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Userdeletion$Userdeletionrequest$Upsert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userdeletion$Userdeletionrequest$Upsert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://analytics.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/analytics/v3/userDeletion/userDeletionRequests:upsert'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UserDeletionRequest>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UserDeletionRequest>(parameters);
      }
    }
  }

  export interface Params$Resource$Userdeletion$Userdeletionrequest$Upsert
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$UserDeletionRequest;
  }
}

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace datacatalog_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
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
   * Google Cloud Data Catalog API
   *
   * A fully managed and highly scalable data discovery and metadata management service.
   *
   * @example
   * const {google} = require('googleapis');
   * const datacatalog = google.datacatalog('v1beta1');
   *
   * @namespace datacatalog
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Datacatalog
   */
  export class Datacatalog {
    context: APIRequestContext;
    catalog: Resource$Catalog;
    entries: Resource$Entries;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.catalog = new Resource$Catalog(this.context);
      this.entries = new Resource$Entries(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.  * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a user that has been recently deleted. For    example, `alice@example.com?uid=123456789012345678901`. If the user is    recovered, this value reverts to `user:{emailid}` and the recovered user    retains the role in the binding.  * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus    unique identifier) representing a service account that has been recently    deleted. For example,    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.    If the service account is undeleted, this value reverts to    `serviceAccount:{emailid}` and the undeleted service account retains the    role in the binding.  * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique    identifier) representing a Google group that has been recently    deleted. For example, `admins@example.com?uid=123456789012345678901`. If    the group is recovered, this value reverts to `group:{emailid}` and the    recovered group retains the role in the binding.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.  Example (Comparison):      title: &quot;Summary size limit&quot;     description: &quot;Determines if a summary is less than 100 chars&quot;     expression: &quot;document.summary.size() &lt; 100&quot;  Example (Equality):      title: &quot;Requestor is owner&quot;     description: &quot;Determines if requestor is the document owner&quot;     expression: &quot;document.owner == request.auth.claims.email&quot;  Example (Logic):      title: &quot;Public documents&quot;     description: &quot;Determine whether the document should be publicly visible&quot;     expression: &quot;document.type != &#39;private&#39; &amp;&amp; document.type != &#39;internal&#39;&quot;  Example (Data Manipulation):      title: &quot;Notification string&quot;     description: &quot;Create a notification string with a timestamp.&quot;     expression: &quot;&#39;New message received at &#39; + string(document.create_time)&quot;  The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. This field is only used by Cloud IAM.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec {
    /**
     * Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.
     */
    dataset?: string | null;
    /**
     * Output only. Total number of shards.
     */
    shardCount?: string | null;
    /**
     * Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`.
     */
    tablePrefix?: string | null;
  }
  /**
   * Describes a BigQuery table.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1BigQueryTableSpec {
    /**
     * Output only. The table source type.
     */
    tableSourceType?: string | null;
    /**
     * Spec of a BigQuery table. This field should only be populated if `table_source_type` is `BIGQUERY_TABLE`.
     */
    tableSpec?: Schema$GoogleCloudDatacatalogV1beta1TableSpec;
    /**
     * Table view specification. This field should only be populated if `table_source_type` is `BIGQUERY_VIEW`.
     */
    viewSpec?: Schema$GoogleCloudDatacatalogV1beta1ViewSpec;
  }
  /**
   * Representation of a column within a schema. Columns could be nested inside other columns.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ColumnSchema {
    /**
     * Required. Name of the column.
     */
    column?: string | null;
    /**
     * Optional. Description of the column. Default value is an empty string.
     */
    description?: string | null;
    /**
     * Optional. A column&#39;s mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`.
     */
    mode?: string | null;
    /**
     * Optional. Schema of sub-columns. A column can have zero or more sub-columns.
     */
    subcolumns?: Schema$GoogleCloudDatacatalogV1beta1ColumnSchema[];
    /**
     * Required. Type of the column.
     */
    type?: string | null;
  }
  /**
   * Entry Metadata.  A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Cloud Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system.  An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1Entry {
    /**
     * Specification for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.
     */
    bigqueryDateShardedSpec?: Schema$GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;
    /**
     * Specification that applies to a BigQuery table. This is only valid on entries of type `TABLE`.
     */
    bigqueryTableSpec?: Schema$GoogleCloudDatacatalogV1beta1BigQueryTableSpec;
    /**
     * Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.
     */
    description?: string | null;
    /**
     * Display information such as title and description. A short name to identify the entry, for example, &quot;Analytics Data - Jan 2011&quot;. Default value is an empty string.
     */
    displayName?: string | null;
    /**
     * Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.
     */
    gcsFilesetSpec?: Schema$GoogleCloudDatacatalogV1beta1GcsFilesetSpec;
    /**
     * Output only. This field indicates the entry&#39;s source system that Data Catalog integrates with, such as BigQuery or Cloud Pub/Sub.
     */
    integratedSystem?: string | null;
    /**
     * The resource this metadata entry refers to.  For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is:  * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId  Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.
     */
    linkedResource?: string | null;
    /**
     * The Data Catalog resource name of the entry in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Entry and its child resources may not actually be stored in the location in this name.
     */
    name?: string | null;
    /**
     * Schema of the entry. An entry might not have any schema attached to it.
     */
    schema?: Schema$GoogleCloudDatacatalogV1beta1Schema;
    /**
     * Output only. Timestamps about the underlying resource, not about this Data Catalog entry. Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty timestamp.
     */
    sourceSystemTimestamps?: Schema$GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * The type of the entry. Only used for Entries with types in the EntryType enum.
     */
    type?: string | null;
    /**
     * This field indicates the entry&#39;s source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedSystem?: string | null;
    /**
     * Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example &quot;my_special_type&quot;. `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.  Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.
     */
    userSpecifiedType?: string | null;
  }
  /**
   * EntryGroup Metadata.  An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1EntryGroup {
    /**
     * Output only. Timestamps about this EntryGroup. Default value is empty timestamps.
     */
    dataCatalogTimestamps?: Schema$GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.
     */
    description?: string | null;
    /**
     * A short name to identify the entry group, for example, &quot;analytics data - jan 2011&quot;. Default value is an empty string.
     */
    displayName?: string | null;
    /**
     * The resource name of the entry group in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}  Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     */
    name?: string | null;
  }
  /**
   * Response message for ExportTaxonomies.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse {
    /**
     * List of taxonomies and policy tags in a tree structure.
     */
    taxonomies?: Schema$GoogleCloudDatacatalogV1beta1SerializedTaxonomy[];
  }
  export interface Schema$GoogleCloudDatacatalogV1beta1FieldType {
    /**
     * Represents an enum type.
     */
    enumType?: Schema$GoogleCloudDatacatalogV1beta1FieldTypeEnumType;
    /**
     * Represents primitive types - string, bool etc.
     */
    primitiveType?: string | null;
  }
  export interface Schema$GoogleCloudDatacatalogV1beta1FieldTypeEnumType {
    /**
     * Required on create; optional on update. The set of allowed values for this enum. This set must not be empty, the display names of the values in this set must not be empty and the display names of the values must be case-insensitively unique within this set. Currently, enum values can only be added to the list of allowed values. Deletion and renaming of enum values are not supported. Can have up to 500 allowed values.
     */
    allowedValues?: Schema$GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue[];
  }
  export interface Schema$GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue {
    /**
     * Required. The display name of the enum value. Must not be an empty string.
     */
    displayName?: string | null;
  }
  /**
   * Describes a Cloud Storage fileset entry.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1GcsFilesetSpec {
    /**
     * Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported.  Examples of valid file_patterns:   * `gs://bucket_name/dir/x: matches all files within `bucket_name/dir`                              directory.  * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir`                               spanning all subdirectories.  * `gs://bucket_name/file*`: matches files prefixed by `file` in                              `bucket_name`  * `gs://bucket_name/??.txt`: matches files with two characters followed by                               `.txt` in `bucket_name`  * `gs://bucket_name/[aeiou].txt`: matches files that contain a single                                    vowel character followed by `.txt` in                                    `bucket_name`  * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ...                                  or `m` followed by `.txt` in `bucket_name`  * `gs://bucket_name/a/x/b`: matches all files in `bucket_name` that match                              `a/x/b` pattern, such as `a/c/b`, `a/d/b`  * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt`  You can combine wildcards to provide more powerful matches, for example:   * `gs://bucket_name/[a-m]??.j*g`
     */
    filePatterns?: string[] | null;
    /**
     * Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.
     */
    sampleGcsFileSpecs?: Schema$GoogleCloudDatacatalogV1beta1GcsFileSpec[];
  }
  /**
   * Specifications of a single file in Cloud Storage.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1GcsFileSpec {
    /**
     * Required. The full file path. Example: `gs://bucket_name/a/b.txt`.
     */
    filePath?: string | null;
    /**
     * Output only. Timestamps about the Cloud Storage file.
     */
    gcsTimestamps?: Schema$GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * Output only. The size of the file, in bytes.
     */
    sizeBytes?: string | null;
  }
  /**
   * Request message for ImportTaxonomies.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest {
    /**
     * Inline source used for taxonomies import
     */
    inlineSource?: Schema$GoogleCloudDatacatalogV1beta1InlineSource;
  }
  /**
   * Response message for ImportTaxonomies.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse {
    /**
     * Taxonomies that were imported.
     */
    taxonomies?: Schema$GoogleCloudDatacatalogV1beta1Taxonomy[];
  }
  /**
   * Inline source used for taxonomies import.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1InlineSource {
    /**
     * Required. Taxonomies to be imported.
     */
    taxonomies?: Schema$GoogleCloudDatacatalogV1beta1SerializedTaxonomy[];
  }
  /**
   * Response message for ListEntries.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse {
    /**
     * Entry details.
     */
    entries?: Schema$GoogleCloudDatacatalogV1beta1Entry[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListEntryGroups.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse {
    /**
     * EntryGroup details.
     */
    entryGroups?: Schema$GoogleCloudDatacatalogV1beta1EntryGroup[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListPolicyTags.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse {
    /**
     * Token used to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The policy tags that are in the requested taxonomy.
     */
    policyTags?: Schema$GoogleCloudDatacatalogV1beta1PolicyTag[];
  }
  /**
   * Response message for ListTags.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse {
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string | null;
    /**
     * Tag details.
     */
    tags?: Schema$GoogleCloudDatacatalogV1beta1Tag[];
  }
  /**
   * Response message for ListTaxonomies.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse {
    /**
     * Token used to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * Taxonomies that the project contains.
     */
    taxonomies?: Schema$GoogleCloudDatacatalogV1beta1Taxonomy[];
  }
  /**
   * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -&amp;gt; (LatLong, City, ZipCode). PolicyTag &quot;Geolocation&quot; contains three child policy tags: &quot;LatLong&quot;, &quot;City&quot;, and &quot;ZipCode&quot;.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1PolicyTag {
    /**
     * Output only. Resource names of child policy tags of this policy tag.
     */
    childPolicyTags?: string[] | null;
    /**
     * Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.
     */
    description?: string | null;
    /**
     * Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this policy tag, whose format is: &quot;projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}&quot;.
     */
    name?: string | null;
    /**
     * Resource name of this policy tag&#39;s parent policy tag (e.g. for the &quot;LatLong&quot; policy tag in the example above, this field contains the resource name of the &quot;Geolocation&quot; policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the &quot;Geolocation&quot; policy tag in the example above). If not set, defaults to an empty string.
     */
    parentPolicyTag?: string | null;
  }
  /**
   * Request message for RenameTagTemplateField.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest {
    /**
     * Required. The new ID of this tag template field. For example, `my_new_field`.
     */
    newTagTemplateFieldId?: string | null;
  }
  /**
   * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1Schema {
    /**
     * Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified.
     */
    columns?: Schema$GoogleCloudDatacatalogV1beta1ColumnSchema[];
  }
  /**
   * Request message for SearchCatalog.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SearchCatalogRequest {
    /**
     * Specifies the ordering of results, currently supported case-sensitive choices are:    * `relevance`, only supports descending   * `last_modified_timestamp [asc|desc]`, defaults to descending if not     specified  If not specified, defaults to `relevance` descending.
     */
    orderBy?: string | null;
    /**
     * Number of results in the search page. If &lt;=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size &gt; 1000.
     */
    pageSize?: number | null;
    /**
     * Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.
     */
    pageToken?: string | null;
    /**
     * Required. The query string in search query syntax. The query must be non-empty.  Query strings can be simple as &quot;x&quot; or more qualified as:  * name:x * column:x * description:y  Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](/data-catalog/docs/how-to/search-reference) for more information.
     */
    query?: string | null;
    /**
     * Required. The scope of this search request. A `scope` that has empty `include_org_ids`, `include_project_ids` AND false `include_gcp_public_datasets` is considered invalid. Data Catalog will return an error in such a case.
     */
    scope?: Schema$GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
  }
  /**
   * The criteria that select the subspace used for query matching.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope {
    /**
     * If `true`, include Google Cloud Platform (GCP) public datasets in the search results. Info on GCP public datasets is available at https://cloud.google.com/public-datasets/. By default, GCP public datasets are excluded.
     */
    includeGcpPublicDatasets?: boolean | null;
    /**
     * The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization.
     */
    includeOrgIds?: string[] | null;
    /**
     * The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects.
     */
    includeProjectIds?: string[] | null;
  }
  /**
   * Response message for SearchCatalog.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse {
    /**
     * The token that can be used to retrieve the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Search results.
     */
    results?: Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResult[];
  }
  /**
   * A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResult {
    /**
     * The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example:   * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId`
     */
    linkedResource?: string | null;
    /**
     * The relative resource name of the resource in URL format. Examples:   * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}`  * `projects/{project_id}/tagTemplates/{tag_template_id}`
     */
    relativeResourceName?: string | null;
    /**
     * Sub-type of the search result. This is a dot-delimited description of the resource&#39;s full type, and is the same as the value callers would provide in the &quot;type&quot; search facet.  Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.
     */
    searchResultSubtype?: string | null;
    /**
     * Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.
     */
    searchResultType?: string | null;
  }
  /**
   * Message representing one policy tag when exported as a nested proto.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SerializedPolicyTag {
    /**
     * Children of the policy tag if any.
     */
    childPolicyTags?: Schema$GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
    /**
     * Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string | null;
    /**
     * Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8.
     */
    displayName?: string | null;
  }
  /**
   * Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SerializedTaxonomy {
    /**
     * Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string | null;
    /**
     * Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8.
     */
    displayName?: string | null;
    /**
     * Top level policy tags associated with the taxonomy if any.
     */
    policyTags?: Schema$GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
  }
  /**
   * Timestamps about this resource according to a particular system.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1SystemTimestamps {
    /**
     * The creation time of the resource within the given system.
     */
    createTime?: string | null;
    /**
     * Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources.
     */
    expireTime?: string | null;
    /**
     * The last-modified time of the resource within the given system.
     */
    updateTime?: string | null;
  }
  /**
   * Normal BigQuery table spec.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1TableSpec {
    /**
     * Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty.
     */
    groupedEntry?: string | null;
  }
  /**
   * Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template.  See [Data Catalog IAM](/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1Tag {
    /**
     * Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema.  For attaching a tag to a nested column, use `.` to separate the column names. Example:  * `outer_column.inner_column`
     */
    column?: string | null;
    /**
     * Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag&#39;s template. A tag must have at least 1 field and at most 500 fields.
     */
    fields?: {
      [key: string]: Schema$GoogleCloudDatacatalogV1beta1TagField;
    } | null;
    /**
     * The resource name of the tag in URL format. Example:  * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}  where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     */
    name?: string | null;
    /**
     * Required. The resource name of the tag template that this tag uses. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}  This field cannot be modified after creation.
     */
    template?: string | null;
    /**
     * Output only. The display name of the tag template.
     */
    templateDisplayName?: string | null;
  }
  /**
   * Contains the value and supporting information for a field within a Tag.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1TagField {
    /**
     * Holds the value for a tag field with boolean type.
     */
    boolValue?: boolean | null;
    /**
     * Output only. The display name of this field.
     */
    displayName?: string | null;
    /**
     * Holds the value for a tag field with double type.
     */
    doubleValue?: number | null;
    /**
     * Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.
     */
    enumValue?: Schema$GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
    /**
     * Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
     */
    order?: number | null;
    /**
     * Holds the value for a tag field with string type.
     */
    stringValue?: string | null;
    /**
     * Holds the value for a tag field with timestamp type.
     */
    timestampValue?: string | null;
  }
  /**
   * Holds an enum value.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1TagFieldEnumValue {
    /**
     * The display name of the enum value.
     */
    displayName?: string | null;
  }
  /**
   * A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to GCP resources. [Tag template roles](/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template (see, for example, the [TagTemplate User](/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1TagTemplate {
    /**
     * The display name for this template. Defaults to an empty string.
     */
    displayName?: string | null;
    /**
     * Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields.  The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore.
     */
    fields?: {
      [key: string]: Schema$GoogleCloudDatacatalogV1beta1TagTemplateField;
    } | null;
    /**
     * The resource name of the tag template in URL format. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}  Note that this TagTemplate and its child resources may not actually be stored in the location in this name.
     */
    name?: string | null;
  }
  /**
   * The template for an individual field within a tag template.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1TagTemplateField {
    /**
     * The display name for this field. Defaults to an empty string.
     */
    displayName?: string | null;
    /**
     * Whether this is a required field. Defaults to false.
     */
    isRequired?: boolean | null;
    /**
     * Output only. The resource name of the tag template field in URL format. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field}  Note that this TagTemplateField may not actually be stored in the location in this name.
     */
    name?: string | null;
    /**
     * The order of this field with respect to other fields in this tag template.  A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
     */
    order?: number | null;
    /**
     * Required. The type of value this tag field can contain.
     */
    type?: Schema$GoogleCloudDatacatalogV1beta1FieldType;
  }
  /**
   * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1Taxonomy {
    /**
     * Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.
     */
    activatedPolicyTypes?: string[] | null;
    /**
     * Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string | null;
    /**
     * Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
     */
    displayName?: string | null;
    /**
     * Output only. Resource name of this taxonomy, whose format is: &quot;projects/{project_number}/locations/{location_id}/taxonomies/{id}&quot;.
     */
    name?: string | null;
  }
  /**
   * Table view specification.
   */
  export interface Schema$GoogleCloudDatacatalogV1beta1ViewSpec {
    /**
     * Output only. The query that defines the table view.
     */
    viewQuery?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.   A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role.  Optionally, a `binding` can specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both.  **JSON example:**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationAdmin&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-project-id@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/resourcemanager.organizationViewer&quot;,           &quot;members&quot;: [&quot;user:eve@example.com&quot;],           &quot;condition&quot;: {             &quot;title&quot;: &quot;expirable access&quot;,             &quot;description&quot;: &quot;Does not grant access after Sep 2020&quot;,             &quot;expression&quot;: &quot;request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)&quot;,           }         }       ],       &quot;etag&quot;: &quot;BwWWja0YfJA=&quot;,       &quot;version&quot;: 3     }  **YAML example:**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-project-id@appspot.gserviceaccount.com       role: roles/resourcemanager.organizationAdmin     - members:       - user:eve@example.com       role: roles/resourcemanager.organizationViewer       condition:         title: expirable access         description: Does not grant access after Sep 2020         expression: request.time &lt; timestamp(&#39;2020-10-01T00:00:00.000Z&#39;)     - etag: BwWWja0YfJA=     - version: 3  For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected.  Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations:  * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy   that includes conditions  **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.  If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.
     */
    version?: number | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }

  export class Resource$Catalog {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.catalog.search
     * @desc Searches Data Catalog for multiple resources like entries, tags that match a query.  This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequentally call `Get` methods.  Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries.  See [Data Catalog Search Syntax](/data-catalog/docs/how-to/search-reference) for more information.
     * @alias datacatalog.catalog.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().GoogleCloudDatacatalogV1beta1SearchCatalogRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
      params?: Params$Resource$Catalog$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse>;
    search(
      params: Params$Resource$Catalog$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
      >
    ): void;
    search(
      params: Params$Resource$Catalog$Search,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
      >
    ): void;
    search(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
      >
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Catalog$Search
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
    > {
      let params = (paramsOrCallback || {}) as Params$Resource$Catalog$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Catalog$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/catalog:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1SearchCatalogResponse
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Catalog$Search extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1SearchCatalogRequest;
  }

  export class Resource$Entries {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.entries.lookup
     * @desc Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.
     * @alias datacatalog.entries.lookup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.linkedResource The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive.  Examples:   * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId  * //pubsub.googleapis.com/projects/projectId/topics/topicId
     * @param {string=} params.sqlResource The SQL name of the entry. SQL names are case-sensitive.  Examples:    * `cloud_pubsub.project_id.topic_id`   * ``pubsub.project_id.`topic.id.with.dots` ``   * `bigquery.table.project_id.dataset_id.table_id`   * `bigquery.dataset.project_id.dataset_id`   * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id`  `*_id`s shoud satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup(
      params?: Params$Resource$Entries$Lookup,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry>;
    lookup(
      params: Params$Resource$Entries$Lookup,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    lookup(
      params: Params$Resource$Entries$Lookup,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    lookup(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    lookup(
      paramsOrCallback?:
        | Params$Resource$Entries$Lookup
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry> {
      let params = (paramsOrCallback || {}) as Params$Resource$Entries$Lookup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Entries$Lookup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/entries:lookup').replace(
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
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Entries$Lookup extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive.  Examples:   * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId  * //pubsub.googleapis.com/projects/projectId/topics/topicId
     */
    linkedResource?: string;
    /**
     * The SQL name of the entry. SQL names are case-sensitive.  Examples:    * `cloud_pubsub.project_id.topic_id`   * ``pubsub.project_id.`topic.id.with.dots` ``   * `bigquery.table.project_id.dataset_id.table_id`   * `bigquery.dataset.project_id.dataset_id`   * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id`  `*_id`s shoud satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
     */
    sqlResource?: string;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    entryGroups: Resource$Projects$Locations$Entrygroups;
    tagTemplates: Resource$Projects$Locations$Tagtemplates;
    taxonomies: Resource$Projects$Locations$Taxonomies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entryGroups = new Resource$Projects$Locations$Entrygroups(
        this.context
      );
      this.tagTemplates = new Resource$Projects$Locations$Tagtemplates(
        this.context
      );
      this.taxonomies = new Resource$Projects$Locations$Taxonomies(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Entrygroups {
    context: APIRequestContext;
    entries: Resource$Projects$Locations$Entrygroups$Entries;
    tags: Resource$Projects$Locations$Entrygroups$Tags;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entries = new Resource$Projects$Locations$Entrygroups$Entries(
        this.context
      );
      this.tags = new Resource$Projects$Locations$Entrygroups$Tags(
        this.context
      );
    }

    /**
     * datacatalog.projects.locations.entryGroups.create
     * @desc A maximum of 10,000 entry groups may be created per organization across all locations.  Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.entryGroups.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.entryGroupId Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.
     * @param {string} params.parent Required. The name of the project this entry group is in. Example:  * projects/{project_id}/locations/{location}  Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     * @param {().GoogleCloudDatacatalogV1beta1EntryGroup} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Entrygroups$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/entryGroups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.delete
     * @desc Deletes an EntryGroup. Only entry groups that do not contain entries can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.entryGroups.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force Optional. If true, deletes all entries in the entry group.
     * @param {string} params.name Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Entrygroups$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.get
     * @desc Gets an EntryGroup.
     * @alias datacatalog.projects.locations.entryGroups.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     * @param {string=} params.readMask The fields to return. If not set or empty, all fields are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Entrygroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>;
    get(
      params: Params$Resource$Projects$Locations$Entrygroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Entrygroups$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.getIamPolicy
     * @desc Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  Callers must have following Google IAM permission   - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag     templates.   - `datacatalog.entries.getIamPolicy` to get policies on entries.   - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @alias datacatalog.projects.locations.entryGroups.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Entrygroups$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.list
     * @desc Lists entry groups.
     * @alias datacatalog.projects.locations.entryGroups.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     * @param {string=} params.pageToken Optional. Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent Required. The name of the location that contains the entry groups, which can be provided in URL format. Example:  * projects/{project_id}/locations/{location}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Entrygroups$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
    >;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/entryGroups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.patch
     * @desc Updates an EntryGroup. The user should enable the Data Catalog API in the project identified by the `entry_group.name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.entryGroups.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the entry group in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}  Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     * @param {string=} params.updateMask The fields to update on the entry group. If absent or empty, all modifiable fields are updated.
     * @param {().GoogleCloudDatacatalogV1beta1EntryGroup} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Entrygroups$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1EntryGroup
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1EntryGroup> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1EntryGroup>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.setIamPolicy
     * @desc Sets the access control policy for a resource. Replaces any existing policy. Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  Callers must have following Google IAM permission   - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag     templates.   - `datacatalog.entries.setIamPolicy` to set policies on entries.   - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @alias datacatalog.projects.locations.entryGroups.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Entrygroups$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.testIamPermissions
     * @desc Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error).  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  A caller is not required to have Google IAM permission to make this request.
     * @alias datacatalog.projects.locations.entryGroups.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Entrygroups$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Entrygroups$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Entrygroups$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entrygroups$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.
     */
    entryGroupId?: string;
    /**
     * Required. The name of the project this entry group is in. Example:  * projects/{project_id}/locations/{location}  Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1EntryGroup;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. If true, deletes all entries in the entry group.
     */
    force?: boolean;
    /**
     * Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entry group. For example, `projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}`.
     */
    name?: string;
    /**
     * The fields to return. If not set or empty, all fields are returned.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     */
    pageSize?: number;
    /**
     * Optional. Token that specifies which page is requested. If empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The name of the location that contains the entry groups, which can be provided in URL format. Example:  * projects/{project_id}/locations/{location}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the entry group in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}  Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The fields to update on the entry group. If absent or empty, all modifiable fields are updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1EntryGroup;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Entrygroups$Entries {
    context: APIRequestContext;
    tags: Resource$Projects$Locations$Entrygroups$Entries$Tags;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tags = new Resource$Projects$Locations$Entrygroups$Entries$Tags(
        this.context
      );
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.create
     * @desc Creates an entry. Only entries of 'FILESET' type or user-specified type can be created.  Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).  A maximum of 100,000 entries may be created per entry group.
     * @alias datacatalog.projects.locations.entryGroups.entries.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.entryId Required. The id of the entry to create.
     * @param {string} params.parent Required. The name of the entry group this entry is in. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}  Note that this Entry and its child resources may not actually be stored in the location in this name.
     * @param {().GoogleCloudDatacatalogV1beta1Entry} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry>;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/entries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.delete
     * @desc Deletes an existing entry. Only entries created through CreateEntry method can be deleted. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.entryGroups.entries.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entry. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.get
     * @desc Gets an entry.
     * @alias datacatalog.projects.locations.entryGroups.entries.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the entry. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry>;
    get(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.getIamPolicy
     * @desc Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  Callers must have following Google IAM permission   - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag     templates.   - `datacatalog.entries.getIamPolicy` to get policies on entries.   - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @alias datacatalog.projects.locations.entryGroups.entries.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.list
     * @desc Lists entries.
     * @alias datacatalog.projects.locations.entryGroups.entries.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     * @param {string=} params.pageToken Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent Required. The name of the entry group that contains the entries, which can be provided in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
     * @param {string=} params.readMask The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/entries').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListEntriesResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.patch
     * @desc Updates an existing entry. Users should enable the Data Catalog API in the project identified by the `entry.name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.entryGroups.entries.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The Data Catalog resource name of the entry in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Entry and its child resources may not actually be stored in the location in this name.
     * @param {string=} params.updateMask The fields to update on the entry. If absent or empty, all modifiable fields are updated.  The following fields are modifiable: * For entries with type `DATA_STREAM`:    * `schema` * For entries with type `FILESET`    * `schema`    * `display_name`    * `description`    * `gcs_fileset_spec`    * `gcs_fileset_spec.file_patterns` * For entries with `user_specified_type`    * `schema`    * `display_name`    * `description`    * user_specified_type    * user_specified_system    * linked_resource    * source_system_timestamps
     * @param {().GoogleCloudDatacatalogV1beta1Entry} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry>;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Entry>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Entry> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Entry>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.testIamPermissions
     * @desc Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error).  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  A caller is not required to have Google IAM permission to make this request.
     * @alias datacatalog.projects.locations.entryGroups.entries.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The id of the entry to create.
     */
    entryId?: string;
    /**
     * Required. The name of the entry group this entry is in. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}  Note that this Entry and its child resources may not actually be stored in the location in this name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Entry;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entry. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the entry. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.
     */
    pageSize?: number;
    /**
     * Token that specifies which page is requested. If empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The name of the entry group that contains the entries, which can be provided in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}
     */
    parent?: string;
    /**
     * The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The Data Catalog resource name of the entry in URL format. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Entry and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The fields to update on the entry. If absent or empty, all modifiable fields are updated.  The following fields are modifiable: * For entries with type `DATA_STREAM`:    * `schema` * For entries with type `FILESET`    * `schema`    * `display_name`    * `description`    * `gcs_fileset_spec`    * `gcs_fileset_spec.file_patterns` * For entries with `user_specified_type`    * `schema`    * `display_name`    * `description`    * user_specified_type    * user_specified_system    * linked_resource    * source_system_timestamps
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Entry;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Entrygroups$Entries$Tags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.tags.create
     * @desc Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
     * @alias datacatalog.projects.locations.entryGroups.entries.tags.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Tag and its child resources may not actually be stored in the location in this name.
     * @param {().GoogleCloudDatacatalogV1beta1Tag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag>;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.tags.delete
     * @desc Deletes a tag.
     * @alias datacatalog.projects.locations.entryGroups.entries.tags.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the tag to delete. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.tags.list
     * @desc Lists the tags on an Entry.
     * @alias datacatalog.projects.locations.entryGroups.entries.tags.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of tags to return. Default is 10. Max limit is 1000.
     * @param {string=} params.pageToken Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup.  Examples:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.entries.tags.patch
     * @desc Updates an existing tag.
     * @alias datacatalog.projects.locations.entryGroups.entries.tags.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the tag in URL format. Example:  * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}  where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     * @param {string=} params.updateMask The fields to update on the Tag. If absent or empty, all modifiable fields are updated. Currently the only modifiable field is the field `fields`.
     * @param {().GoogleCloudDatacatalogV1beta1Tag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag>;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Tag and its child resources may not actually be stored in the location in this name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Tag;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the tag to delete. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of tags to return. Default is 10. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Token that specifies which page is requested. If empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup.  Examples:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Entries$Tags$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the tag in URL format. Example:  * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}  where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The fields to update on the Tag. If absent or empty, all modifiable fields are updated. Currently the only modifiable field is the field `fields`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Tag;
  }

  export class Resource$Projects$Locations$Entrygroups$Tags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.projects.locations.entryGroups.tags.create
     * @desc Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.
     * @alias datacatalog.projects.locations.entryGroups.tags.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Tag and its child resources may not actually be stored in the location in this name.
     * @param {().GoogleCloudDatacatalogV1beta1Tag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Entrygroups$Tags$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag>;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Tags$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Tags$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Tags$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.tags.delete
     * @desc Deletes a tag.
     * @alias datacatalog.projects.locations.entryGroups.tags.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the tag to delete. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Entrygroups$Tags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Tags$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Tags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Tags$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.tags.list
     * @desc Lists the tags on an Entry.
     * @alias datacatalog.projects.locations.entryGroups.tags.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of tags to return. Default is 10. Max limit is 1000.
     * @param {string=} params.pageToken Token that specifies which page is requested. If empty, the first page is returned.
     * @param {string} params.parent Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup.  Examples:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Entrygroups$Tags$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Tags$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Tags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Tags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListTagsResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.entryGroups.tags.patch
     * @desc Updates an existing tag.
     * @alias datacatalog.projects.locations.entryGroups.tags.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the tag in URL format. Example:  * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}  where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     * @param {string=} params.updateMask The fields to update on the Tag. If absent or empty, all modifiable fields are updated. Currently the only modifiable field is the field `fields`.
     * @param {().GoogleCloudDatacatalogV1beta1Tag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Entrygroups$Tags$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag>;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Entrygroups$Tags$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Entrygroups$Tags$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>,
      callback?: BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Tag>
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Tag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Entrygroups$Tags$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Entrygroups$Tags$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Tag>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Entrygroups$Tags$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}  Note that this Tag and its child resources may not actually be stored in the location in this name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Tag;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Tags$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the tag to delete. Example:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Tags$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of tags to return. Default is 10. Max limit is 1000.
     */
    pageSize?: number;
    /**
     * Token that specifies which page is requested. If empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup.  Examples:  * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Entrygroups$Tags$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the tag in URL format. Example:  * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id}  where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The fields to update on the Tag. If absent or empty, all modifiable fields are updated. Currently the only modifiable field is the field `fields`.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Tag;
  }

  export class Resource$Projects$Locations$Tagtemplates {
    context: APIRequestContext;
    fields: Resource$Projects$Locations$Tagtemplates$Fields;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.fields = new Resource$Projects$Locations$Tagtemplates$Fields(
        this.context
      );
    }

    /**
     * datacatalog.projects.locations.tagTemplates.create
     * @desc Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the project and the template location [region](/compute/docs/regions-zones/#available). NOTE: Currently, only the `us-central1 region` is supported.  Example:  * projects/{project_id}/locations/us-central1
     * @param {string=} params.tagTemplateId Required. The id of the tag template to create.
     * @param {().GoogleCloudDatacatalogV1beta1TagTemplate} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>;
    create(
      params: Params$Resource$Projects$Locations$Tagtemplates$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tagtemplates$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tagTemplates').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplate
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.delete
     * @desc Deletes a tag template and all tags using the template. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force Required. Currently, this field must always be set to `true`. This confirms the deletion of any possible tags using this template. `force = false` will be supported in the future.
     * @param {string} params.name Required. The name of the tag template to delete. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Tagtemplates$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tagtemplates$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.get
     * @desc Gets a tag template.
     * @alias datacatalog.projects.locations.tagTemplates.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the tag template. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>;
    get(
      params: Params$Resource$Projects$Locations$Tagtemplates$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tagtemplates$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplate
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.getIamPolicy
     * @desc Gets the access control policy for a resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  Callers must have following Google IAM permission   - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag     templates.   - `datacatalog.entries.getIamPolicy` to get policies on entries.   - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
     * @alias datacatalog.projects.locations.tagTemplates.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.patch
     * @desc Updates a tag template. This method cannot be used to update the fields of a template. The tag template fields are represented as separate resources and should be updated using their own create/update/delete methods. Users should enable the Data Catalog API in the project identified by the `tag_template.name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the tag template in URL format. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}  Note that this TagTemplate and its child resources may not actually be stored in the location in this name.
     * @param {string=} params.updateMask The field mask specifies the parts of the template to overwrite.  Allowed fields:    * `display_name`  If absent or empty, all of the allowed fields above will be updated.
     * @param {().GoogleCloudDatacatalogV1beta1TagTemplate} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>;
    patch(
      params: Params$Resource$Projects$Locations$Tagtemplates$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tagtemplates$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplate
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplate> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplate>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplate
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.setIamPolicy
     * @desc Sets the access control policy for a resource. Replaces any existing policy. Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  Callers must have following Google IAM permission   - `datacatalog.tagTemplates.setIamPolicy` to set policies on tag     templates.   - `datacatalog.entries.setIamPolicy` to set policies on entries.   - `datacatalog.entryGroups.setIamPolicy` to set policies on entry groups.
     * @alias datacatalog.projects.locations.tagTemplates.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.testIamPermissions
     * @desc Returns the caller's permissions on a resource. If the resource does not exist, an empty set of permissions is returned (We don't return a `NOT_FOUND` error).  Supported resources are:   - Tag templates.   - Entries.   - Entry groups. Note, this method cannot be used to manage policies for BigQuery, Cloud Pub/Sub and any external Google Cloud Platform resources synced to Cloud Data Catalog.  A caller is not required to have Google IAM permission to make this request.
     * @alias datacatalog.projects.locations.tagTemplates.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Tagtemplates$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the project and the template location [region](/compute/docs/regions-zones/#available). NOTE: Currently, only the `us-central1 region` is supported.  Example:  * projects/{project_id}/locations/us-central1
     */
    parent?: string;
    /**
     * Required. The id of the tag template to create.
     */
    tagTemplateId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1TagTemplate;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Currently, this field must always be set to `true`. This confirms the deletion of any possible tags using this template. `force = false` will be supported in the future.
     */
    force?: boolean;
    /**
     * Required. The name of the tag template to delete. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the tag template. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the tag template in URL format. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}  Note that this TagTemplate and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * The field mask specifies the parts of the template to overwrite.  Allowed fields:    * `display_name`  If absent or empty, all of the allowed fields above will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1TagTemplate;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Tagtemplates$Fields {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.projects.locations.tagTemplates.fields.create
     * @desc Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.fields.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The name of the project and the template location [region](/compute/docs/regions-zones/#available). NOTE: Currently, only the `us-central1 region` is supported.  Example:  * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}
     * @param {string=} params.tagTemplateFieldId Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
     * @param {().GoogleCloudDatacatalogV1beta1TagTemplateField} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Fields$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>;
    create(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Fields$Create
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Fields$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Fields$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/fields').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.fields.delete
     * @desc Deletes a field in a tag template and all uses of that field. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.fields.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.force Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.
     * @param {string} params.name Required. The name of the tag template field to delete. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.fields.patch
     * @desc Updates a field in a tag template. This method cannot be used to update the field type. Users should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project] (/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.fields.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the tag template field. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @param {string=} params.updateMask Optional. The field mask specifies the parts of the template to be updated. Allowed fields:    * `display_name`   * `type.enum_type`   * `is_required`  If `update_mask` is not set or empty, all of the allowed fields above will be updated.  When updating an enum type, the provided values will be merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted nor renamed. Updating a template field from optional to required is NOT allowed.
     * @param {().GoogleCloudDatacatalogV1beta1TagTemplateField} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>;
    patch(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.tagTemplates.fields.rename
     * @desc Renames a field in a tag template. The user should enable the Data Catalog API in the project identified by the `name` parameter (see [Data Catalog Resource Project](/data-catalog/docs/concepts/resource-project) for more information).
     * @alias datacatalog.projects.locations.tagTemplates.fields.rename
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the tag template. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     * @param {().GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rename(
      params?: Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>;
    rename(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    rename(
      params: Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    rename(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void;
    rename(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:rename').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1TagTemplateField>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1TagTemplateField
        >(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Tagtemplates$Fields$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the project and the template location [region](/compute/docs/regions-zones/#available). NOTE: Currently, only the `us-central1 region` is supported.  Example:  * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}
     */
    parent?: string;
    /**
     * Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.
     */
    tagTemplateFieldId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1TagTemplateField;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Fields$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.
     */
    force?: boolean;
    /**
     * Required. The name of the tag template field to delete. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Fields$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the tag template field. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     */
    name?: string;
    /**
     * Optional. The field mask specifies the parts of the template to be updated. Allowed fields:    * `display_name`   * `type.enum_type`   * `is_required`  If `update_mask` is not set or empty, all of the allowed fields above will be updated.  When updating an enum type, the provided values will be merged with the existing values. Therefore, enum values can only be added, existing enum values cannot be deleted nor renamed. Updating a template field from optional to required is NOT allowed.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1TagTemplateField;
  }
  export interface Params$Resource$Projects$Locations$Tagtemplates$Fields$Rename
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the tag template. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest;
  }

  export class Resource$Projects$Locations$Taxonomies {
    context: APIRequestContext;
    policyTags: Resource$Projects$Locations$Taxonomies$Policytags;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.policyTags = new Resource$Projects$Locations$Taxonomies$Policytags(
        this.context
      );
    }

    /**
     * datacatalog.projects.locations.taxonomies.create
     * @desc Creates a taxonomy in the specified project.
     * @alias datacatalog.projects.locations.taxonomies.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of the project that the taxonomy will belong to.
     * @param {().GoogleCloudDatacatalogV1beta1Taxonomy} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Taxonomies$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>;
    create(
      params: Params$Resource$Projects$Locations$Taxonomies$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Taxonomies$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/taxonomies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.delete
     * @desc Deletes a taxonomy. This operation will also delete all policy tags in this taxonomy along with their associated policies.
     * @alias datacatalog.projects.locations.taxonomies.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the taxonomy to be deleted. All policy tags in this taxonomy will also be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Taxonomies$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Taxonomies$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Taxonomies$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.export
     * @desc Exports all taxonomies and their policy tags in a project.  This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.
     * @alias datacatalog.projects.locations.taxonomies.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of the project that taxonomies to be exported will share.
     * @param {boolean=} params.serializedTaxonomies Export taxonomies as serialized taxonomies.
     * @param {string=} params.taxonomies Required. Resource names of the taxonomies to be exported.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(
      params?: Params$Resource$Projects$Locations$Taxonomies$Export,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
    >;
    export(
      params: Params$Resource$Projects$Locations$Taxonomies$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
      >
    ): void;
    export(
      params: Params$Resource$Projects$Locations$Taxonomies$Export,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
      >
    ): void;
    export(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
      >
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Export
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/taxonomies:export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.get
     * @desc Gets a taxonomy.
     * @alias datacatalog.projects.locations.taxonomies.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the requested taxonomy.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Taxonomies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>;
    get(
      params: Params$Resource$Projects$Locations$Taxonomies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Taxonomies$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.getIamPolicy
     * @desc Gets the IAM policy for a taxonomy or a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Taxonomies$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.import
     * @desc Imports all taxonomies and their policy tags to a project as new taxonomies.  This method provides a bulk taxonomy / policy tag creation using nested proto structure.
     * @alias datacatalog.projects.locations.taxonomies.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of project that the newly created taxonomies will belong to.
     * @param {().GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    import(
      params?: Params$Resource$Projects$Locations$Taxonomies$Import,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
    >;
    import(
      params: Params$Resource$Projects$Locations$Taxonomies$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
      >
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Taxonomies$Import,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
      >
    ): void;
    import(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
      >
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Import
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/taxonomies:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.list
     * @desc Lists all taxonomies in a project in a particular location that the caller has permission to view.
     * @alias datacatalog.projects.locations.taxonomies.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     * @param {string=} params.pageToken The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.
     * @param {string} params.parent Required. Resource name of the project to list the taxonomies of.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Taxonomies$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
    >;
    list(
      params: Params$Resource$Projects$Locations$Taxonomies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Taxonomies$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/taxonomies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.patch
     * @desc Updates a taxonomy.
     * @alias datacatalog.projects.locations.taxonomies.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
     * @param {string=} params.updateMask The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {().GoogleCloudDatacatalogV1beta1Taxonomy} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Taxonomies$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>;
    patch(
      params: Params$Resource$Projects$Locations$Taxonomies$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Taxonomies$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1Taxonomy
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1Taxonomy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1Taxonomy>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.setIamPolicy
     * @desc Sets the IAM policy for a taxonomy or a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Taxonomies$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified taxonomy or policy tag.
     * @alias datacatalog.projects.locations.taxonomies.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Taxonomies$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Taxonomies$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Taxonomies$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Taxonomies$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the project that the taxonomy will belong to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Taxonomy;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the taxonomy to be deleted. All policy tags in this taxonomy will also be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Export
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the project that taxonomies to be exported will share.
     */
    parent?: string;
    /**
     * Export taxonomies as serialized taxonomies.
     */
    serializedTaxonomies?: boolean;
    /**
     * Required. Resource names of the taxonomies to be exported.
     */
    taxonomies?: string[];
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the requested taxonomy.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Import
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of project that the newly created taxonomies will belong to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the project to list the taxonomies of.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".
     */
    name?: string;
    /**
     * The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1Taxonomy;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Taxonomies$Policytags {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.create
     * @desc Creates a policy tag in the specified taxonomy.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Resource name of the taxonomy that the policy tag will belong to.
     * @param {().GoogleCloudDatacatalogV1beta1PolicyTag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>;
    create(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Create,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    create(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Create
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/policyTags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.delete
     * @desc Deletes a policy tag. Also deletes all of its descendant policy tags.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.get
     * @desc Gets a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. Resource name of the requested policy tag.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>;
    get(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Get,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    get(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Get
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy
     * @desc Gets the IAM policy for a taxonomy or a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.list
     * @desc Lists all policy tags in a taxonomy.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     * @param {string=} params.pageToken The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.
     * @param {string} params.parent Required. Resource name of the taxonomy to list the policy tags of.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$List,
      options?: MethodOptions
    ): GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
    >;
    list(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$List,
      options:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
          >,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
      >
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$List,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
      >
    ): void;
    list(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
      >
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$List
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
          >,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<
            Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
          >,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
      >
    ): void | GaxiosPromise<
      Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
    > {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/policyTags').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
        >(parameters, callback);
      } else {
        return createAPIRequest<
          Schema$GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse
        >(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.patch
     * @desc Updates a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
     * @param {string=} params.updateMask The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {().GoogleCloudDatacatalogV1beta1PolicyTag} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>;
    patch(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch,
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    patch(
      callback: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>,
      callback?: BodyResponseCallback<
        Schema$GoogleCloudDatacatalogV1beta1PolicyTag
      >
    ): void | GaxiosPromise<Schema$GoogleCloudDatacatalogV1beta1PolicyTag> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDatacatalogV1beta1PolicyTag>(
          parameters
        );
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy
     * @desc Sets the IAM policy for a taxonomy or a policy tag.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions
     * @desc Returns the permissions that a caller has on the specified taxonomy or policy tag.
     * @alias datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://datacatalog.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the taxonomy that the policy tag will belong to.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1PolicyTag;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Resource name of the requested policy tag.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the taxonomy to list the policy tags of.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".
     */
    name?: string;
    /**
     * The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDatacatalogV1beta1PolicyTag;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Taxonomies$Policytags$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}

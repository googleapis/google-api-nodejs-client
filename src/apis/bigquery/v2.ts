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

export namespace bigquery_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * BigQuery API
   *
   * A data platform for customers to create, manage, share and query data.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const bigquery = google.bigquery('v2');
   * ```
   */
  export class Bigquery {
    context: APIRequestContext;
    datasets: Resource$Datasets;
    jobs: Resource$Jobs;
    models: Resource$Models;
    projects: Resource$Projects;
    routines: Resource$Routines;
    rowAccessPolicies: Resource$Rowaccesspolicies;
    tabledata: Resource$Tabledata;
    tables: Resource$Tables;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.datasets = new Resource$Datasets(this.context);
      this.jobs = new Resource$Jobs(this.context);
      this.models = new Resource$Models(this.context);
      this.projects = new Resource$Projects(this.context);
      this.routines = new Resource$Routines(this.context);
      this.rowAccessPolicies = new Resource$Rowaccesspolicies(this.context);
      this.tabledata = new Resource$Tabledata(this.context);
      this.tables = new Resource$Tables(this.context);
    }
  }

  /**
   * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
   */
  export interface Schema$AggregateClassificationMetrics {
    /**
     * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
     */
    accuracy?: number | null;
    /**
     * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
     */
    f1Score?: number | null;
    /**
     * Logarithmic Loss. For multiclass this is a macro-averaged metric.
     */
    logLoss?: number | null;
    /**
     * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
     */
    precision?: number | null;
    /**
     * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
     */
    recall?: number | null;
    /**
     * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
     */
    rocAuc?: number | null;
    /**
     * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold.
     */
    threshold?: number | null;
  }
  /**
   * Represents privacy policy associated with "aggregation threshold" method.
   */
  export interface Schema$AggregationThresholdPolicy {
    /**
     * Optional. The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation ("outer.inner")
     */
    privacyUnitColumns?: string[] | null;
    /**
     * Optional. The threshold for the "aggregation threshold" policy.
     */
    threshold?: string | null;
  }
  /**
   * Input/output argument of a function or a stored procedure.
   */
  export interface Schema$Argument {
    /**
     * Optional. Defaults to FIXED_TYPE.
     */
    argumentKind?: string | null;
    /**
     * Required unless argument_kind = ANY_TYPE.
     */
    dataType?: Schema$StandardSqlDataType;
    /**
     * Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding "NOT AGGREGATE" clause in DDL; Otherwise, it is equivalent to omitting "NOT AGGREGATE" clause in DDL.
     */
    isAggregate?: boolean | null;
    /**
     * Optional. Specifies whether the argument is input or output. Can be set for procedures only.
     */
    mode?: string | null;
    /**
     * Optional. The name of this argument. Can be absent for function return argument.
     */
    name?: string | null;
  }
  /**
   * Arima coefficients.
   */
  export interface Schema$ArimaCoefficients {
    /**
     * Auto-regressive coefficients, an array of double.
     */
    autoRegressiveCoefficients?: number[] | null;
    /**
     * Intercept coefficient, just a double not an array.
     */
    interceptCoefficient?: number | null;
    /**
     * Moving-average coefficients, an array of double.
     */
    movingAverageCoefficients?: number[] | null;
  }
  /**
   * ARIMA model fitting metrics.
   */
  export interface Schema$ArimaFittingMetrics {
    /**
     * AIC.
     */
    aic?: number | null;
    /**
     * Log-likelihood.
     */
    logLikelihood?: number | null;
    /**
     * Variance.
     */
    variance?: number | null;
  }
  /**
   * Model evaluation metrics for ARIMA forecasting models.
   */
  export interface Schema$ArimaForecastingMetrics {
    /**
     * Arima model fitting metrics.
     */
    arimaFittingMetrics?: Schema$ArimaFittingMetrics[];
    /**
     * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
     */
    arimaSingleModelForecastingMetrics?: Schema$ArimaSingleModelForecastingMetrics[];
    /**
     * Whether Arima model fitted with drift or not. It is always false when d is not 1.
     */
    hasDrift?: boolean[] | null;
    /**
     * Non-seasonal order.
     */
    nonSeasonalOrder?: Schema$ArimaOrder[];
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: string[] | null;
    /**
     * Id to differentiate different time series for the large-scale case.
     */
    timeSeriesId?: string[] | null;
  }
  /**
   * Arima model information.
   */
  export interface Schema$ArimaModelInfo {
    /**
     * Arima coefficients.
     */
    arimaCoefficients?: Schema$ArimaCoefficients;
    /**
     * Arima fitting metrics.
     */
    arimaFittingMetrics?: Schema$ArimaFittingMetrics;
    /**
     * Whether Arima model fitted with drift or not. It is always false when d is not 1.
     */
    hasDrift?: boolean | null;
    /**
     * If true, holiday_effect is a part of time series decomposition result.
     */
    hasHolidayEffect?: boolean | null;
    /**
     * If true, spikes_and_dips is a part of time series decomposition result.
     */
    hasSpikesAndDips?: boolean | null;
    /**
     * If true, step_changes is a part of time series decomposition result.
     */
    hasStepChanges?: boolean | null;
    /**
     * Non-seasonal order.
     */
    nonSeasonalOrder?: Schema$ArimaOrder;
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: string[] | null;
    /**
     * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
     */
    timeSeriesId?: string | null;
    /**
     * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
     */
    timeSeriesIds?: string[] | null;
  }
  /**
   * Arima order, can be used for both non-seasonal and seasonal parts.
   */
  export interface Schema$ArimaOrder {
    /**
     * Order of the differencing part.
     */
    d?: string | null;
    /**
     * Order of the autoregressive part.
     */
    p?: string | null;
    /**
     * Order of the moving-average part.
     */
    q?: string | null;
  }
  /**
   * (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results.
   */
  export interface Schema$ArimaResult {
    /**
     * This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one.
     */
    arimaModelInfo?: Schema$ArimaModelInfo[];
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: string[] | null;
  }
  /**
   * Model evaluation metrics for a single ARIMA forecasting model.
   */
  export interface Schema$ArimaSingleModelForecastingMetrics {
    /**
     * Arima fitting metrics.
     */
    arimaFittingMetrics?: Schema$ArimaFittingMetrics;
    /**
     * Is arima model fitted with drift or not. It is always false when d is not 1.
     */
    hasDrift?: boolean | null;
    /**
     * If true, holiday_effect is a part of time series decomposition result.
     */
    hasHolidayEffect?: boolean | null;
    /**
     * If true, spikes_and_dips is a part of time series decomposition result.
     */
    hasSpikesAndDips?: boolean | null;
    /**
     * If true, step_changes is a part of time series decomposition result.
     */
    hasStepChanges?: boolean | null;
    /**
     * Non-seasonal order.
     */
    nonSeasonalOrder?: Schema$ArimaOrder;
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: string[] | null;
    /**
     * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
     */
    timeSeriesId?: string | null;
    /**
     * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
     */
    timeSeriesIds?: string[] | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[] | null;
    /**
     * The log type that this config enables.
     */
    logType?: string | null;
  }
  /**
   * Options for external data sources.
   */
  export interface Schema$AvroOptions {
    /**
     * Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
     */
    useAvroLogicalTypes?: boolean | null;
  }
  /**
   * Reason why BI Engine didn't accelerate the query (or sub-query).
   */
  export interface Schema$BiEngineReason {
    /**
     * Output only. High-level BI Engine reason for partial or disabled acceleration
     */
    code?: string | null;
    /**
     * Output only. Free form human-readable reason for partial or disabled acceleration.
     */
    message?: string | null;
  }
  /**
   * Statistics for a BI Engine specific query. Populated as part of JobStatistics2
   */
  export interface Schema$BiEngineStatistics {
    /**
     * Output only. Specifies which mode of BI Engine acceleration was performed (if any).
     */
    accelerationMode?: string | null;
    /**
     * Output only. Specifies which mode of BI Engine acceleration was performed (if any).
     */
    biEngineMode?: string | null;
    /**
     * In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated.
     */
    biEngineReasons?: Schema$BiEngineReason[];
  }
  /**
   * Configuration for BigLake managed tables.
   */
  export interface Schema$BigLakeConfiguration {
    /**
     * Required. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection_id can have the form "<project\_id\>.<location\_id\>.<connection\_id\>" or "projects/<project\_id\>/locations/<location\_id\>/connections/<connection\_id\>".
     */
    connectionId?: string | null;
    /**
     * Required. The file format the table data is stored in.
     */
    fileFormat?: string | null;
    /**
     * Required. The fully qualified location prefix of the external folder where table data is stored. The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"
     */
    storageUri?: string | null;
    /**
     * Required. The table format the metadata only snapshots are stored in.
     */
    tableFormat?: string | null;
  }
  export interface Schema$BigQueryModelTraining {
    /**
     * Deprecated.
     */
    currentIteration?: number | null;
    /**
     * Deprecated.
     */
    expectedTotalIterations?: string | null;
  }
  /**
   * Information related to a Bigtable column.
   */
  export interface Schema$BigtableColumn {
    /**
     * Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.
     */
    encoding?: string | null;
    /**
     * Optional. If the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as the column field name and is used as field name in queries.
     */
    fieldName?: string | null;
    /**
     * Optional. If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.
     */
    onlyReadLatest?: boolean | null;
    /**
     * [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match a-zA-Z*, a valid identifier must be provided as field_name.
     */
    qualifierEncoded?: string | null;
    /**
     * Qualifier string.
     */
    qualifierString?: string | null;
    /**
     * Optional. The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.
     */
    type?: string | null;
  }
  /**
   * Information related to a Bigtable column family.
   */
  export interface Schema$BigtableColumnFamily {
    /**
     * Optional. Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field.
     */
    columns?: Schema$BigtableColumn[];
    /**
     * Optional. The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.
     */
    encoding?: string | null;
    /**
     * Identifier of the column family.
     */
    familyId?: string | null;
    /**
     * Optional. If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.
     */
    onlyReadLatest?: boolean | null;
    /**
     * Optional. The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): * BYTES * STRING * INTEGER * FLOAT * BOOLEAN * JSON Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.
     */
    type?: string | null;
  }
  /**
   * Options specific to Google Cloud Bigtable data sources.
   */
  export interface Schema$BigtableOptions {
    /**
     * Optional. List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.
     */
    columnFamilies?: Schema$BigtableColumnFamily[];
    /**
     * Optional. If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
     */
    ignoreUnspecifiedColumnFamilies?: boolean | null;
    /**
     * Optional. If field is true, then each column family will be read as a single JSON column. Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.
     */
    outputColumnFamiliesAsJson?: boolean | null;
    /**
     * Optional. If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.
     */
    readRowkeyAsString?: boolean | null;
  }
  /**
   * Evaluation metrics for binary classification/classifier models.
   */
  export interface Schema$BinaryClassificationMetrics {
    /**
     * Aggregate classification metrics.
     */
    aggregateClassificationMetrics?: Schema$AggregateClassificationMetrics;
    /**
     * Binary confusion matrix at multiple thresholds.
     */
    binaryConfusionMatrixList?: Schema$BinaryConfusionMatrix[];
    /**
     * Label representing the negative class.
     */
    negativeLabel?: string | null;
    /**
     * Label representing the positive class.
     */
    positiveLabel?: string | null;
  }
  /**
   * Confusion matrix for binary classification models.
   */
  export interface Schema$BinaryConfusionMatrix {
    /**
     * The fraction of predictions given the correct label.
     */
    accuracy?: number | null;
    /**
     * The equally weighted average of recall and precision.
     */
    f1Score?: number | null;
    /**
     * Number of false samples predicted as false.
     */
    falseNegatives?: string | null;
    /**
     * Number of false samples predicted as true.
     */
    falsePositives?: string | null;
    /**
     * Threshold value used when computing each of the following metric.
     */
    positiveClassThreshold?: number | null;
    /**
     * The fraction of actual positive predictions that had positive actual labels.
     */
    precision?: number | null;
    /**
     * The fraction of actual positive labels that were given a positive prediction.
     */
    recall?: number | null;
    /**
     * Number of true samples predicted as false.
     */
    trueNegatives?: string | null;
    /**
     * Number of true samples predicted as true.
     */
    truePositives?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  export interface Schema$BqmlIterationResult {
    /**
     * Deprecated.
     */
    durationMs?: string | null;
    /**
     * Deprecated.
     */
    evalLoss?: number | null;
    /**
     * Deprecated.
     */
    index?: number | null;
    /**
     * Deprecated.
     */
    learnRate?: number | null;
    /**
     * Deprecated.
     */
    trainingLoss?: number | null;
  }
  export interface Schema$BqmlTrainingRun {
    /**
     * Deprecated.
     */
    iterationResults?: Schema$BqmlIterationResult[];
    /**
     * Deprecated.
     */
    startTime?: string | null;
    /**
     * Deprecated.
     */
    state?: string | null;
    /**
     * Deprecated.
     */
    trainingOptions?: {
      earlyStop?: boolean;
      l1Reg?: number;
      l2Reg?: number;
      learnRate?: number;
      learnRateStrategy?: string;
      lineSearchInitLearnRate?: number;
      maxIteration?: string;
      minRelProgress?: number;
      warmStart?: boolean;
    } | null;
  }
  /**
   * Representative value of a categorical feature.
   */
  export interface Schema$CategoricalValue {
    /**
     * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories.
     */
    categoryCounts?: Schema$CategoryCount[];
  }
  /**
   * Represents the count of a single category within the cluster.
   */
  export interface Schema$CategoryCount {
    /**
     * The name of category.
     */
    category?: string | null;
    /**
     * The count of training samples matching the category within the cluster.
     */
    count?: string | null;
  }
  /**
   * Information about base table and clone time of a table clone.
   */
  export interface Schema$CloneDefinition {
    /**
     * Required. Reference describing the ID of the table that was cloned.
     */
    baseTableReference?: Schema$TableReference;
    /**
     * Required. The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format.
     */
    cloneTime?: string | null;
  }
  /**
   * Message containing the information about one cluster.
   */
  export interface Schema$Cluster {
    /**
     * Centroid id.
     */
    centroidId?: string | null;
    /**
     * Count of training data rows that were assigned to this cluster.
     */
    count?: string | null;
    /**
     * Values of highly variant features for this cluster.
     */
    featureValues?: Schema$FeatureValue[];
  }
  /**
   * Information about a single cluster for clustering model.
   */
  export interface Schema$ClusterInfo {
    /**
     * Centroid id.
     */
    centroidId?: string | null;
    /**
     * Cluster radius, the average distance from centroid to each point assigned to the cluster.
     */
    clusterRadius?: number | null;
    /**
     * Cluster size, the total number of points assigned to the cluster.
     */
    clusterSize?: string | null;
  }
  /**
   * Configures table clustering.
   */
  export interface Schema$Clustering {
    /**
     * One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. The ordering of the clustering fields should be prioritized from most to least important for filtering purposes. Additional information on limitations can be found here: https://cloud.google.com/bigquery/docs/creating-clustered-tables#limitations
     */
    fields?: string[] | null;
  }
  /**
   * Evaluation metrics for clustering models.
   */
  export interface Schema$ClusteringMetrics {
    /**
     * Information for all clusters.
     */
    clusters?: Schema$Cluster[];
    /**
     * Davies-Bouldin index.
     */
    daviesBouldinIndex?: number | null;
    /**
     * Mean of squared distances between each sample to its cluster centroid.
     */
    meanSquaredDistance?: number | null;
  }
  /**
   * Confusion matrix for multi-class classification models.
   */
  export interface Schema$ConfusionMatrix {
    /**
     * Confidence threshold used when computing the entries of the confusion matrix.
     */
    confidenceThreshold?: number | null;
    /**
     * One row per actual label.
     */
    rows?: Schema$Row[];
  }
  /**
   * A connection-level property to customize query behavior. Under JDBC, these correspond directly to connection properties passed to the DriverManager. Under ODBC, these correspond to properties in the connection string. Currently supported connection properties: * **dataset_project_id**: represents the default project for datasets that are used in the query. Setting the system variable `@@dataset_project_id` achieves the same behavior. For more information about system variables, see: https://cloud.google.com/bigquery/docs/reference/system-variables * **time_zone**: represents the default timezone used to run the query. * **session_id**: associates the query with a given session. * **query_label**: associates the query with a given job label. If set, all subsequent queries in a script or session will have this label. For the format in which a you can specify a query label, see labels in the JobConfiguration resource type: https://cloud.google.com/bigquery/docs/reference/rest/v2/Job#jobconfiguration Additional properties are allowed, but ignored. Specifying multiple connection properties with the same key returns an error.
   */
  export interface Schema$ConnectionProperty {
    /**
     * The key of the property to set.
     */
    key?: string | null;
    /**
     * The value of the property to set.
     */
    value?: string | null;
  }
  /**
   * Information related to a CSV data source.
   */
  export interface Schema$CsvOptions {
    /**
     * Optional. Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
     */
    allowJaggedRows?: boolean | null;
    /**
     * Optional. Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
     */
    allowQuotedNewlines?: boolean | null;
    /**
     * Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
     */
    encoding?: string | null;
    /**
     * Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
     */
    fieldDelimiter?: string | null;
    /**
     * [Optional] A custom string that will represent a NULL value in CSV import data.
     */
    nullMarker?: string | null;
    /**
     * Optional. Indicates if the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
     */
    preserveAsciiControlCharacters?: boolean | null;
    /**
     * Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ("). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '.
     */
    quote?: string | null;
    /**
     * Optional. The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
     */
    skipLeadingRows?: string | null;
  }
  /**
   * Options for data format adjustments.
   */
  export interface Schema$DataFormatOptions {
    /**
     * Optional. Output timestamp as usec int64. Default is false.
     */
    useInt64Timestamp?: boolean | null;
  }
  /**
   * Statistics for data-masking.
   */
  export interface Schema$DataMaskingStatistics {
    /**
     * Whether any accessed data was protected by the data masking.
     */
    dataMaskingApplied?: boolean | null;
  }
  export interface Schema$Dataset {
    /**
     * Optional. An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
     */
    access?: Array<{
      dataset?: Schema$DatasetAccessEntry;
      domain?: string;
      groupByEmail?: string;
      iamMember?: string;
      role?: string;
      routine?: Schema$RoutineReference;
      specialGroup?: string;
      userByEmail?: string;
      view?: Schema$TableReference;
    }> | null;
    /**
     * Output only. The time when this dataset was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * Required. A reference that identifies the dataset.
     */
    datasetReference?: Schema$DatasetReference;
    /**
     * Optional. Defines the default collation specification of future tables created in the dataset. If a table is created in this dataset without table-level default collation, then the table inherits the dataset default collation, which is applied to the string fields that do not have explicit collation specified. A change to this field affects only tables created afterwards, and does not alter the existing tables. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
     */
    defaultCollation?: string | null;
    /**
     * The default encryption key for all tables in the dataset. Once this property is set, all newly-created partitioned tables in the dataset will have encryption key set to this value, unless table creation request (or query) overrides the key.
     */
    defaultEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * This default partition expiration, expressed in milliseconds. When new time-partitioned tables are created in a dataset where this property is set, the table will inherit this value, propagated as the `TimePartitioning.expirationMs` property on the new table. If you set `TimePartitioning.expirationMs` explicitly when creating a table, the `defaultPartitionExpirationMs` of the containing dataset is ignored. When creating a partitioned table, if `defaultPartitionExpirationMs` is set, the `defaultTableExpirationMs` value is ignored and the table will not be inherit a table expiration deadline.
     */
    defaultPartitionExpirationMs?: string | null;
    /**
     * Optional. Defines the default rounding mode specification of new tables created within this dataset. During table creation, if this field is specified, the table within this dataset will inherit the default rounding mode of the dataset. Setting the default rounding mode on a table overrides this option. Existing tables in the dataset are unaffected. If columns are defined during that table creation, they will immediately inherit the table's default rounding mode, unless otherwise specified.
     */
    defaultRoundingMode?: string | null;
    /**
     * Optional. The default lifetime of all tables in the dataset, in milliseconds. The minimum lifetime value is 3600000 milliseconds (one hour). To clear an existing default expiration with a PATCH request, set to 0. Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
     */
    defaultTableExpirationMs?: string | null;
    /**
     * Optional. A user-friendly description of the dataset.
     */
    description?: string | null;
    /**
     * Output only. A hash of the resource.
     */
    etag?: string | null;
    /**
     * Optional. Reference to a read-only external dataset defined in data catalogs outside of BigQuery. Filled out when the dataset type is EXTERNAL.
     */
    externalDatasetReference?: Schema$ExternalDatasetReference;
    /**
     * Optional. A descriptive name for the dataset.
     */
    friendlyName?: string | null;
    /**
     * Output only. The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
     */
    id?: string | null;
    /**
     * Optional. TRUE if the dataset and its table names are case-insensitive, otherwise FALSE. By default, this is FALSE, which means the dataset and its table names are case-sensitive. This field does not affect routine references.
     */
    isCaseInsensitive?: boolean | null;
    /**
     * Output only. The resource type.
     */
    kind?: string | null;
    /**
     * The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The date when this dataset was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Optional. The source dataset reference when the dataset is of type LINKED. For all other dataset types it is not set. This field cannot be updated once it is set. Any attempt to update this field using Update and Patch API Operations will be ignored.
     */
    linkedDatasetSource?: Schema$LinkedDatasetSource;
    /**
     * The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.
     */
    location?: string | null;
    /**
     * Optional. Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days). The default value is 168 hours if this is not set.
     */
    maxTimeTravelHours?: string | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
     */
    selfLink?: string | null;
    /**
     * Optional. Updates storage_billing_model for the dataset.
     */
    storageBillingModel?: string | null;
    /**
     * Output only. Tags for the Dataset.
     */
    tags?: Array<{tagKey?: string; tagValue?: string}> | null;
    /**
     * Output only. Same as `type` in `ListFormatDataset`. The type of the dataset, one of: * DEFAULT - only accessible by owner and authorized accounts, * PUBLIC - accessible by everyone, * LINKED - linked dataset, * EXTERNAL - dataset with definition in external metadata catalog. -- *BIGLAKE_METASTORE - dataset that references a database created in BigLakeMetastore service. --
     */
    type?: string | null;
  }
  /**
   * Grants all resources of particular types in a particular dataset read access to the current dataset. Similar to how individually authorized views work, updates to any resource granted through its dataset (including creation of new resources) requires read permission to referenced resources, plus write permission to the authorizing dataset.
   */
  export interface Schema$DatasetAccessEntry {
    /**
     * The dataset this entry applies to
     */
    dataset?: Schema$DatasetReference;
    /**
     * Which resources in the dataset this entry applies to. Currently, only views are supported, but additional target types may be added in the future.
     */
    targetTypes?: string[] | null;
  }
  /**
   * Response format for a page of results when listing datasets.
   */
  export interface Schema$DatasetList {
    /**
     * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
     */
    datasets?: Array<{
      datasetReference?: Schema$DatasetReference;
      friendlyName?: string;
      id?: string;
      kind?: string;
      labels?: {[key: string]: string};
      location?: string;
    }> | null;
    /**
     * Output only. A hash value of the results page. You can use this property to determine if the page has changed since the last request.
     */
    etag?: string | null;
    /**
     * Output only. The resource type. This property always returns the value "bigquery#datasetList"
     */
    kind?: string | null;
    /**
     * A token that can be used to request the next results page. This property is omitted on the final results page.
     */
    nextPageToken?: string | null;
    /**
     * A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"
     */
    unreachable?: string[] | null;
  }
  export interface Schema$DatasetReference {
    /**
     * Required. A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * Optional. The ID of the project containing this dataset.
     */
    projectId?: string | null;
  }
  /**
   * Data split result. This contains references to the training and evaluation data tables that were used to train the model.
   */
  export interface Schema$DataSplitResult {
    /**
     * Table reference of the evaluation data after split.
     */
    evaluationTable?: Schema$TableReference;
    /**
     * Table reference of the test data after split.
     */
    testTable?: Schema$TableReference;
    /**
     * Table reference of the training data after split.
     */
    trainingTable?: Schema$TableReference;
  }
  /**
   * Properties for the destination table.
   */
  export interface Schema$DestinationTableProperties {
    /**
     * Optional. The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.
     */
    description?: string | null;
    /**
     * Internal use only.
     */
    expirationTime?: string | null;
    /**
     * Optional. Friendly name for the destination table. If the table already exists, it should be same as the existing friendly name.
     */
    friendlyName?: string | null;
    /**
     * Optional. The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.
     */
    labels?: {[key: string]: string} | null;
  }
  /**
   * Model evaluation metrics for dimensionality reduction models.
   */
  export interface Schema$DimensionalityReductionMetrics {
    /**
     * Total percentage of variance explained by the selected principal components.
     */
    totalExplainedVarianceRatio?: number | null;
  }
  /**
   * Detailed statistics for DML statements
   */
  export interface Schema$DmlStatistics {
    /**
     * Output only. Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements.
     */
    deletedRowCount?: string | null;
    /**
     * Output only. Number of inserted Rows. Populated by DML INSERT and MERGE statements
     */
    insertedRowCount?: string | null;
    /**
     * Output only. Number of updated Rows. Populated by DML UPDATE and MERGE statements.
     */
    updatedRowCount?: string | null;
  }
  /**
   * Discrete candidates of a double hyperparameter.
   */
  export interface Schema$DoubleCandidates {
    /**
     * Candidates for the double parameter in increasing order.
     */
    candidates?: number[] | null;
  }
  /**
   * Search space for a double hyperparameter.
   */
  export interface Schema$DoubleHparamSearchSpace {
    /**
     * Candidates of the double hyperparameter.
     */
    candidates?: Schema$DoubleCandidates;
    /**
     * Range of the double hyperparameter.
     */
    range?: Schema$DoubleRange;
  }
  /**
   * Range of a double hyperparameter.
   */
  export interface Schema$DoubleRange {
    /**
     * Max value of the double parameter.
     */
    max?: number | null;
    /**
     * Min value of the double parameter.
     */
    min?: number | null;
  }
  export interface Schema$EncryptionConfiguration {
    /**
     * Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
     */
    kmsKeyName?: string | null;
  }
  /**
   * A single entry in the confusion matrix.
   */
  export interface Schema$Entry {
    /**
     * Number of items being predicted as this label.
     */
    itemCount?: string | null;
    /**
     * The predicted label. For confidence_threshold \> 0, we will also add an entry indicating the number of items under the confidence threshold.
     */
    predictedLabel?: string | null;
  }
  /**
   * Error details.
   */
  export interface Schema$ErrorProto {
    /**
     * Debugging information. This property is internal to Google and should not be used.
     */
    debugInfo?: string | null;
    /**
     * Specifies where the error occurred, if present.
     */
    location?: string | null;
    /**
     * A human-readable description of the error.
     */
    message?: string | null;
    /**
     * A short error code that summarizes the error.
     */
    reason?: string | null;
  }
  /**
   * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
   */
  export interface Schema$EvaluationMetrics {
    /**
     * Populated for ARIMA models.
     */
    arimaForecastingMetrics?: Schema$ArimaForecastingMetrics;
    /**
     * Populated for binary classification/classifier models.
     */
    binaryClassificationMetrics?: Schema$BinaryClassificationMetrics;
    /**
     * Populated for clustering models.
     */
    clusteringMetrics?: Schema$ClusteringMetrics;
    /**
     * Evaluation metrics when the model is a dimensionality reduction model, which currently includes PCA.
     */
    dimensionalityReductionMetrics?: Schema$DimensionalityReductionMetrics;
    /**
     * Populated for multi-class classification/classifier models.
     */
    multiClassClassificationMetrics?: Schema$MultiClassClassificationMetrics;
    /**
     * Populated for implicit feedback type matrix factorization models.
     */
    rankingMetrics?: Schema$RankingMetrics;
    /**
     * Populated for regression models and explicit feedback type matrix factorization models.
     */
    regressionMetrics?: Schema$RegressionMetrics;
  }
  /**
   * A single stage of query execution.
   */
  export interface Schema$ExplainQueryStage {
    /**
     * Number of parallel input segments completed.
     */
    completedParallelInputs?: string | null;
    /**
     * Output only. Compute mode for this stage.
     */
    computeMode?: string | null;
    /**
     * Milliseconds the average shard spent on CPU-bound tasks.
     */
    computeMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent on CPU-bound tasks.
     */
    computeMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent on CPU-bound tasks.
     */
    computeRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent on CPU-bound tasks.
     */
    computeRatioMax?: number | null;
    /**
     * Stage end time represented as milliseconds since the epoch.
     */
    endMs?: string | null;
    /**
     * Unique ID for the stage within the plan.
     */
    id?: string | null;
    /**
     * IDs for stages that are inputs to this stage.
     */
    inputStages?: string[] | null;
    /**
     * Human-readable name for the stage.
     */
    name?: string | null;
    /**
     * Number of parallel input segments to be processed
     */
    parallelInputs?: string | null;
    /**
     * Milliseconds the average shard spent reading input.
     */
    readMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent reading input.
     */
    readMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent reading input.
     */
    readRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent reading input.
     */
    readRatioMax?: number | null;
    /**
     * Number of records read into the stage.
     */
    recordsRead?: string | null;
    /**
     * Number of records written by the stage.
     */
    recordsWritten?: string | null;
    /**
     * Total number of bytes written to shuffle.
     */
    shuffleOutputBytes?: string | null;
    /**
     * Total number of bytes written to shuffle and spilled to disk.
     */
    shuffleOutputBytesSpilled?: string | null;
    /**
     * Slot-milliseconds used by the stage.
     */
    slotMs?: string | null;
    /**
     * Stage start time represented as milliseconds since the epoch.
     */
    startMs?: string | null;
    /**
     * Current status for this stage.
     */
    status?: string | null;
    /**
     * List of operations within the stage in dependency order (approximately chronological).
     */
    steps?: Schema$ExplainQueryStep[];
    /**
     * Milliseconds the average shard spent waiting to be scheduled.
     */
    waitMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent waiting to be scheduled.
     */
    waitMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent waiting to be scheduled.
     */
    waitRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent waiting to be scheduled.
     */
    waitRatioMax?: number | null;
    /**
     * Milliseconds the average shard spent on writing output.
     */
    writeMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent on writing output.
     */
    writeMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent on writing output.
     */
    writeRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent on writing output.
     */
    writeRatioMax?: number | null;
  }
  /**
   * An operation within a stage.
   */
  export interface Schema$ExplainQueryStep {
    /**
     * Machine-readable operation type.
     */
    kind?: string | null;
    /**
     * Human-readable description of the step(s).
     */
    substeps?: string[] | null;
  }
  /**
   * Explanation for a single feature.
   */
  export interface Schema$Explanation {
    /**
     * Attribution of feature.
     */
    attribution?: number | null;
    /**
     * The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters.
     */
    featureName?: string | null;
  }
  /**
   * Statistics for the EXPORT DATA statement as part of Query Job. EXTRACT JOB statistics are populated in JobStatistics4.
   */
  export interface Schema$ExportDataStatistics {
    /**
     * Number of destination files generated in case of EXPORT DATA statement only.
     */
    fileCount?: string | null;
    /**
     * [Alpha] Number of destination rows generated in case of EXPORT DATA statement only.
     */
    rowCount?: string | null;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
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
  export interface Schema$ExternalDataConfiguration {
    /**
     * Try to detect schema and format options automatically. Any option specified explicitly will be honored.
     */
    autodetect?: boolean | null;
    /**
     * Optional. Additional properties to set if sourceFormat is set to AVRO.
     */
    avroOptions?: Schema$AvroOptions;
    /**
     * Optional. Additional options if sourceFormat is set to BIGTABLE.
     */
    bigtableOptions?: Schema$BigtableOptions;
    /**
     * Optional. The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats. An empty string is an invalid value.
     */
    compression?: string | null;
    /**
     * Optional. The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connection_id can have the form "<project\_id\>.<location\_id\>.<connection\_id\>" or "projects/<project\_id\>/locations/<location\_id\>/connections/<connection\_id\>".
     */
    connectionId?: string | null;
    /**
     * Optional. Additional properties to set if sourceFormat is set to CSV.
     */
    csvOptions?: Schema$CsvOptions;
    /**
     * Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -\> NUMERIC; * (39,9) -\> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -\> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -\> BIGNUMERIC; * (77,38) -\> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.
     */
    decimalTargetTypes?: string[] | null;
    /**
     * Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems.
     */
    fileSetSpecType?: string | null;
    /**
     * Optional. Additional options if sourceFormat is set to GOOGLE_SHEETS.
     */
    googleSheetsOptions?: Schema$GoogleSheetsOptions;
    /**
     * Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
     */
    hivePartitioningOptions?: Schema$HivePartitioningOptions;
    /**
     * Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. ORC: This setting is ignored. Parquet: This setting is ignored.
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).
     */
    jsonExtension?: string | null;
    /**
     * Optional. Additional properties to set if sourceFormat is set to JSON.
     */
    jsonOptions?: Schema$JsonOptions;
    /**
     * Optional. The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups, Avro, ORC and Parquet formats.
     */
    maxBadRecords?: number | null;
    /**
     * Optional. Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
     */
    metadataCacheMode?: string | null;
    /**
     * Optional. ObjectMetadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the source_uris. If ObjectMetadata is set, source_format should be omitted. Currently SIMPLE is the only supported Object Metadata type.
     */
    objectMetadata?: string | null;
    /**
     * Optional. Additional properties to set if sourceFormat is set to PARQUET.
     */
    parquetOptions?: Schema$ParquetOptions;
    /**
     * Optional. When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
     */
    referenceFileSchemaUri?: string | null;
    /**
     * Optional. The schema for the data. Schema is required for CSV and JSON formats if autodetect is not on. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, Avro, ORC and Parquet formats.
     */
    schema?: Schema$TableSchema;
    /**
     * [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". For Apache Iceberg tables, specify "ICEBERG". For ORC files, specify "ORC". For Parquet files, specify "PARQUET". [Beta] For Google Cloud Bigtable, specify "BIGTABLE".
     */
    sourceFormat?: string | null;
    /**
     * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
     */
    sourceUris?: string[] | null;
  }
  /**
   * Configures the access a dataset defined in an external metadata storage.
   */
  export interface Schema$ExternalDatasetReference {
    /**
     * Required. The connection id that is used to access the external_source. Format: projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}
     */
    connection?: string | null;
    /**
     * Required. External source that backs this dataset.
     */
    externalSource?: string | null;
  }
  /**
   * The external service cost is a portion of the total cost, these costs are not additive with total_bytes_billed. Moreover, this field only track external service costs that will show up as BigQuery costs (e.g. training BigQuery ML job with google cloud CAIP or Automl Tables services), not other costs which may be accrued by running the query (e.g. reading from Bigtable or Cloud Storage). The external service costs with different billing sku (e.g. CAIP job is charged based on VM usage) are converted to BigQuery billed_bytes and slot_ms with equivalent amount of US dollars. Services may not directly correlate to these metrics, but these are the equivalents for billing purposes. Output only.
   */
  export interface Schema$ExternalServiceCost {
    /**
     * External service cost in terms of bigquery bytes billed.
     */
    bytesBilled?: string | null;
    /**
     * External service cost in terms of bigquery bytes processed.
     */
    bytesProcessed?: string | null;
    /**
     * External service name.
     */
    externalService?: string | null;
    /**
     * Non-preemptable reserved slots used for external job. For example, reserved slots for Cloua AI Platform job are the VM usages converted to BigQuery slot with equivalent mount of price.
     */
    reservedSlotCount?: string | null;
    /**
     * External service cost in terms of bigquery slot milliseconds.
     */
    slotMs?: string | null;
  }
  /**
   * Representative value of a single feature within the cluster.
   */
  export interface Schema$FeatureValue {
    /**
     * The categorical feature value.
     */
    categoricalValue?: Schema$CategoricalValue;
    /**
     * The feature column name.
     */
    featureColumn?: string | null;
    /**
     * The numerical feature value. This is the centroid value for this feature.
     */
    numericalValue?: number | null;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {
    /**
     * OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.
     */
    options?: Schema$GetPolicyOptions;
  }
  /**
   * Encapsulates settings provided to GetIamPolicy.
   */
  export interface Schema$GetPolicyOptions {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    requestedPolicyVersion?: number | null;
  }
  /**
   * Response object of GetQueryResults.
   */
  export interface Schema$GetQueryResultsResponse {
    /**
     * Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).
     */
    errors?: Schema$ErrorProto[];
    /**
     * A hash of this response.
     */
    etag?: string | null;
    /**
     * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
     */
    jobComplete?: boolean | null;
    /**
     * Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
     */
    jobReference?: Schema$JobReference;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * A token used for paging results. When this token is non-empty, it indicates additional results are available.
     */
    pageToken?: string | null;
    /**
     * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. The REST-based representation of this data leverages a series of JSON f,v objects for indicating fields and values.
     */
    rows?: Schema$TableRow[];
    /**
     * The schema of the results. Present only when the query completes successfully.
     */
    schema?: Schema$TableSchema;
    /**
     * The total number of bytes processed for this query.
     */
    totalBytesProcessed?: string | null;
    /**
     * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
     */
    totalRows?: string | null;
  }
  /**
   * Response object of GetServiceAccount
   */
  export interface Schema$GetServiceAccountResponse {
    /**
     * The service account email address.
     */
    email?: string | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
  }
  /**
   * Global explanations containing the top most important features after training.
   */
  export interface Schema$GlobalExplanation {
    /**
     * Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order.
     */
    classLabel?: string | null;
    /**
     * A list of the top global explanations. Sorted by absolute value of attribution in descending order.
     */
    explanations?: Schema$Explanation[];
  }
  /**
   * Options specific to Google Sheets data sources.
   */
  export interface Schema$GoogleSheetsOptions {
    /**
     * Optional. Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
     */
    range?: string | null;
    /**
     * Optional. The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
     */
    skipLeadingRows?: string | null;
  }
  /**
   * High cardinality join detailed information.
   */
  export interface Schema$HighCardinalityJoin {
    /**
     * Output only. Count of left input rows.
     */
    leftRows?: string | null;
    /**
     * Output only. Count of the output rows.
     */
    outputRows?: string | null;
    /**
     * Output only. Count of right input rows.
     */
    rightRows?: string | null;
    /**
     * Output only. The index of the join operator in the ExplainQueryStep lists.
     */
    stepIndex?: number | null;
  }
  /**
   * Options for configuring hive partitioning detect.
   */
  export interface Schema$HivePartitioningOptions {
    /**
     * Output only. For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field.
     */
    fields?: string[] | null;
    /**
     * Optional. When set, what mode of hive partitioning to use when reading data. The following modes are supported: * AUTO: automatically infer partition key name(s) and type(s). * STRINGS: automatically infer partition key name(s). All types are strings. * CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported formats are: JSON, CSV, ORC, Avro and Parquet.
     */
    mode?: string | null;
    /**
     * Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with require_partition_filter explicitly set to true will fail.
     */
    requirePartitionFilter?: boolean | null;
    /**
     * Optional. When hive partition detection is requested, a common prefix for all source uris must be required. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout: gs://bucket/path_to_table/dt=2019-06-01/country=USA/id=7/file.avro gs://bucket/path_to_table/dt=2019-05-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/. CUSTOM detection requires encoding the partitioning schema immediately after the common prefix. For CUSTOM, any of * gs://bucket/path_to_table/{dt:DATE\}/{country:STRING\}/{id:INTEGER\} * gs://bucket/path_to_table/{dt:STRING\}/{country:STRING\}/{id:INTEGER\} * gs://bucket/path_to_table/{dt:DATE\}/{country:STRING\}/{id:STRING\} would all be valid source URI prefixes.
     */
    sourceUriPrefix?: string | null;
  }
  /**
   * Hyperparameter search spaces. These should be a subset of training_options.
   */
  export interface Schema$HparamSearchSpaces {
    /**
     * Activation functions of neural network models.
     */
    activationFn?: Schema$StringHparamSearchSpace;
    /**
     * Mini batch sample size.
     */
    batchSize?: Schema$IntHparamSearchSpace;
    /**
     * Booster type for boosted tree models.
     */
    boosterType?: Schema$StringHparamSearchSpace;
    /**
     * Subsample ratio of columns for each level for boosted tree models.
     */
    colsampleBylevel?: Schema$DoubleHparamSearchSpace;
    /**
     * Subsample ratio of columns for each node(split) for boosted tree models.
     */
    colsampleBynode?: Schema$DoubleHparamSearchSpace;
    /**
     * Subsample ratio of columns when constructing each tree for boosted tree models.
     */
    colsampleBytree?: Schema$DoubleHparamSearchSpace;
    /**
     * Dart normalization type for boosted tree models.
     */
    dartNormalizeType?: Schema$StringHparamSearchSpace;
    /**
     * Dropout probability for dnn model training and boosted tree models using dart booster.
     */
    dropout?: Schema$DoubleHparamSearchSpace;
    /**
     * Hidden units for neural network models.
     */
    hiddenUnits?: Schema$IntArrayHparamSearchSpace;
    /**
     * L1 regularization coefficient.
     */
    l1Reg?: Schema$DoubleHparamSearchSpace;
    /**
     * L2 regularization coefficient.
     */
    l2Reg?: Schema$DoubleHparamSearchSpace;
    /**
     * Learning rate of training jobs.
     */
    learnRate?: Schema$DoubleHparamSearchSpace;
    /**
     * Maximum depth of a tree for boosted tree models.
     */
    maxTreeDepth?: Schema$IntHparamSearchSpace;
    /**
     * Minimum split loss for boosted tree models.
     */
    minSplitLoss?: Schema$DoubleHparamSearchSpace;
    /**
     * Minimum sum of instance weight needed in a child for boosted tree models.
     */
    minTreeChildWeight?: Schema$IntHparamSearchSpace;
    /**
     * Number of clusters for k-means.
     */
    numClusters?: Schema$IntHparamSearchSpace;
    /**
     * Number of latent factors to train on.
     */
    numFactors?: Schema$IntHparamSearchSpace;
    /**
     * Number of parallel trees for boosted tree models.
     */
    numParallelTree?: Schema$IntHparamSearchSpace;
    /**
     * Optimizer of TF models.
     */
    optimizer?: Schema$StringHparamSearchSpace;
    /**
     * Subsample the training data to grow tree to prevent overfitting for boosted tree models.
     */
    subsample?: Schema$DoubleHparamSearchSpace;
    /**
     * Tree construction algorithm for boosted tree models.
     */
    treeMethod?: Schema$StringHparamSearchSpace;
    /**
     * Hyperparameter for matrix factoration when implicit feedback type is specified.
     */
    walsAlpha?: Schema$DoubleHparamSearchSpace;
  }
  /**
   * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
   */
  export interface Schema$HparamTuningTrial {
    /**
     * Ending time of the trial.
     */
    endTimeMs?: string | null;
    /**
     * Error message for FAILED and INFEASIBLE trial.
     */
    errorMessage?: string | null;
    /**
     * Loss computed on the eval data at the end of trial.
     */
    evalLoss?: number | null;
    /**
     * Evaluation metrics of this trial calculated on the test data. Empty in Job API.
     */
    evaluationMetrics?: Schema$EvaluationMetrics;
    /**
     * The hyperprameters selected for this trial.
     */
    hparams?: Schema$TrainingOptions;
    /**
     * Hyperparameter tuning evaluation metrics of this trial calculated on the eval data. Unlike evaluation_metrics, only the fields corresponding to the hparam_tuning_objectives are set.
     */
    hparamTuningEvaluationMetrics?: Schema$EvaluationMetrics;
    /**
     * Starting time of the trial.
     */
    startTimeMs?: string | null;
    /**
     * The status of the trial.
     */
    status?: string | null;
    /**
     * Loss computed on the training data at the end of trial.
     */
    trainingLoss?: number | null;
    /**
     * 1-based index of the trial.
     */
    trialId?: string | null;
  }
  /**
   * Reason about why no search index was used in the search query (or sub-query).
   */
  export interface Schema$IndexUnusedReason {
    /**
     * Specifies the base table involved in the reason that no search index was used.
     */
    baseTable?: Schema$TableReference;
    /**
     * Specifies the high-level reason for the scenario when no search index was used.
     */
    code?: string | null;
    /**
     * Specifies the name of the unused search index, if available.
     */
    indexName?: string | null;
    /**
     * Free form human-readable reason for the scenario when no search index was used.
     */
    message?: string | null;
  }
  /**
   * Details about the input data change insight.
   */
  export interface Schema$InputDataChange {
    /**
     * Output only. Records read difference percentage compared to a previous run.
     */
    recordsReadDiffPercentage?: number | null;
  }
  /**
   * An array of int.
   */
  export interface Schema$IntArray {
    /**
     * Elements in the int array.
     */
    elements?: string[] | null;
  }
  /**
   * Search space for int array.
   */
  export interface Schema$IntArrayHparamSearchSpace {
    /**
     * Candidates for the int array parameter.
     */
    candidates?: Schema$IntArray[];
  }
  /**
   * Discrete candidates of an int hyperparameter.
   */
  export interface Schema$IntCandidates {
    /**
     * Candidates for the int parameter in increasing order.
     */
    candidates?: string[] | null;
  }
  /**
   * Search space for an int hyperparameter.
   */
  export interface Schema$IntHparamSearchSpace {
    /**
     * Candidates of the int hyperparameter.
     */
    candidates?: Schema$IntCandidates;
    /**
     * Range of the int hyperparameter.
     */
    range?: Schema$IntRange;
  }
  /**
   * Range of an int hyperparameter.
   */
  export interface Schema$IntRange {
    /**
     * Max value of the int parameter.
     */
    max?: string | null;
    /**
     * Min value of the int parameter.
     */
    min?: string | null;
  }
  /**
   * Information about a single iteration of the training run.
   */
  export interface Schema$IterationResult {
    /**
     * Arima result.
     */
    arimaResult?: Schema$ArimaResult;
    /**
     * Information about top clusters for clustering models.
     */
    clusterInfos?: Schema$ClusterInfo[];
    /**
     * Time taken to run the iteration in milliseconds.
     */
    durationMs?: string | null;
    /**
     * Loss computed on the eval data at the end of iteration.
     */
    evalLoss?: number | null;
    /**
     * Index of the iteration, 0 based.
     */
    index?: number | null;
    /**
     * Learn rate used for this iteration.
     */
    learnRate?: number | null;
    /**
     * The information of the principal components.
     */
    principalComponentInfos?: Schema$PrincipalComponentInfo[];
    /**
     * Loss computed on the training data at the end of iteration.
     */
    trainingLoss?: number | null;
  }
  export interface Schema$Job {
    /**
     * Required. Describes the job configuration.
     */
    configuration?: Schema$JobConfiguration;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Output only. Opaque ID field of the job.
     */
    id?: string | null;
    /**
     * Output only. If set, it provides the reason why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created.
     */
    jobCreationReason?: Schema$JobCreationReason;
    /**
     * Optional. Reference describing the unique-per-user name of the job.
     */
    jobReference?: Schema$JobReference;
    /**
     * Output only. The type of the resource.
     */
    kind?: string | null;
    /**
     * Output only. [Full-projection-only] String representation of identity of requesting party. Populated for both first- and third-party identities. Only present for APIs that support third-party identities.
     */
    principal_subject?: string | null;
    /**
     * Output only. A URL that can be used to access the resource again.
     */
    selfLink?: string | null;
    /**
     * Output only. Information about the job, including starting time and ending time of the job.
     */
    statistics?: Schema$JobStatistics;
    /**
     * Output only. The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
     */
    status?: Schema$JobStatus;
    /**
     * Output only. Email address of the user who ran the job.
     */
    user_email?: string | null;
  }
  /**
   * Describes format of a jobs cancellation response.
   */
  export interface Schema$JobCancelResponse {
    /**
     * The final state of the job.
     */
    job?: Schema$Job;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
  }
  export interface Schema$JobConfiguration {
    /**
     * [Pick one] Copies a table.
     */
    copy?: Schema$JobConfigurationTableCopy;
    /**
     * Optional. If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined.
     */
    dryRun?: boolean | null;
    /**
     * [Pick one] Configures an extract job.
     */
    extract?: Schema$JobConfigurationExtract;
    /**
     * Optional. Job timeout in milliseconds. If this time limit is exceeded, BigQuery might attempt to stop the job.
     */
    jobTimeoutMs?: string | null;
    /**
     * Output only. The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
     */
    jobType?: string | null;
    /**
     * The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * [Pick one] Configures a load job.
     */
    load?: Schema$JobConfigurationLoad;
    /**
     * [Pick one] Configures a query job.
     */
    query?: Schema$JobConfigurationQuery;
  }
  /**
   * JobConfigurationExtract configures a job that exports data from a BigQuery table into Google Cloud Storage.
   */
  export interface Schema$JobConfigurationExtract {
    /**
     * Optional. The compression type to use for exported files. Possible values include DEFLATE, GZIP, NONE, SNAPPY, and ZSTD. The default value is NONE. Not all compression formats are support for all file formats. DEFLATE is only supported for Avro. ZSTD is only supported for Parquet. Not applicable when extracting models.
     */
    compression?: string | null;
    /**
     * Optional. The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET, or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL.
     */
    destinationFormat?: string | null;
    /**
     * [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
     */
    destinationUri?: string | null;
    /**
     * [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
     */
    destinationUris?: string[] | null;
    /**
     * Optional. When extracting data in CSV format, this defines the delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models.
     */
    fieldDelimiter?: string | null;
    /**
     * Optional. Model extract options only applicable when extracting models.
     */
    modelExtractOptions?: Schema$ModelExtractOptions;
    /**
     * Optional. Whether to print out a header row in the results. Default is true. Not applicable when extracting models.
     */
    printHeader?: boolean | null;
    /**
     * A reference to the model being exported.
     */
    sourceModel?: Schema$ModelReference;
    /**
     * A reference to the table being exported.
     */
    sourceTable?: Schema$TableReference;
    /**
     * Whether to use logical types when extracting to AVRO format. Not applicable when extracting models.
     */
    useAvroLogicalTypes?: boolean | null;
  }
  /**
   * JobConfigurationLoad contains the configuration properties for loading data into a destination table.
   */
  export interface Schema$JobConfigurationLoad {
    /**
     * Optional. Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
     */
    allowJaggedRows?: boolean | null;
    /**
     * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
     */
    allowQuotedNewlines?: boolean | null;
    /**
     * Optional. Indicates if we should automatically infer the options and schema for CSV and JSON sources.
     */
    autodetect?: boolean | null;
    /**
     * Clustering specification for the destination table.
     */
    clustering?: Schema$Clustering;
    /**
     * Optional. Connection properties which can modify the load job behavior. Currently, only the 'session_id' connection property is supported, and is used to resolve _SESSION appearing as the dataset id.
     */
    connectionProperties?: Schema$ConnectionProperty[];
    /**
     * Optional. [Experimental] Configures the load job to only copy files to the destination BigLake managed table with an external storage_uri, without reading file content and writing them to new files. Copying files only is supported when: * source_uris are in the same external storage system as the destination table but they do not overlap with storage_uri of the destination table. * source_format is the same file format as the destination table. * destination_table is an existing BigLake managed table. Its schema does not have default value expression. It schema does not have type parameters other than precision and scale. * No options other than the above are specified.
     */
    copyFilesOnly?: boolean | null;
    /**
     * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * Optional. If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
     */
    createSession?: boolean | null;
    /**
     * Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: * (38,9) -\> NUMERIC; * (39,9) -\> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); * (38,10) -\> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); * (76,38) -\> BIGNUMERIC; * (77,38) -\> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats.
     */
    decimalTargetTypes?: string[] | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys)
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Required] The destination table to load the data into.
     */
    destinationTable?: Schema$TableReference;
    /**
     * Optional. [Experimental] Properties with which to create the destination table if it is new.
     */
    destinationTableProperties?: Schema$DestinationTableProperties;
    /**
     * Optional. The character encoding of the data. The supported values are UTF-8, ISO-8859-1, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the `quote` and `fieldDelimiter` properties. If you don't specify an encoding, or if you specify a UTF-8 encoding when the CSV file is not UTF-8 encoded, BigQuery attempts to convert the data to UTF-8. Generally, your data loads successfully, but it may not match byte-for-byte what you expect. To avoid this, specify the correct encoding by using the `--encoding` flag. If BigQuery can't convert a character other than the ASCII `0` character, BigQuery converts the character to the standard Unicode replacement character: �.
     */
    encoding?: string | null;
    /**
     * Optional. The separator character for fields in a CSV file. The separator is interpreted as a single byte. For files encoded in ISO-8859-1, any single character can be used as a separator. For files encoded in UTF-8, characters represented in decimal range 1-127 (U+0001-U+007F) can be used without any modification. UTF-8 characters encoded with multiple bytes (i.e. U+0080 and above) will have only the first byte used for separating fields. The remaining bytes will be treated as a part of the field. BigQuery also supports the escape sequence "\t" (U+0009) to specify a tab separator. The default value is comma (",", U+002C).
     */
    fieldDelimiter?: string | null;
    /**
     * Optional. Specifies how source URIs are interpreted for constructing the file set to load. By default, source URIs are expanded against the underlying storage. You can also specify manifest files to control how the file set is constructed. This option is only applicable to object storage systems.
     */
    fileSetSpecType?: string | null;
    /**
     * Optional. When set, configures hive partitioning support. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error, as will providing an invalid specification.
     */
    hivePartitioningOptions?: Schema$HivePartitioningOptions;
    /**
     * Optional. Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names in the table schema Avro, Parquet, ORC: Fields in the file schema that don't exist in the table schema.
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * Optional. Load option to be used together with source_format newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and source_format must be set to NEWLINE_DELIMITED_JSON).
     */
    jsonExtension?: string | null;
    /**
     * Optional. The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. The default value is 0, which requires that all records are valid. This is only supported for CSV and NEWLINE_DELIMITED_JSON file formats.
     */
    maxBadRecords?: number | null;
    /**
     * Optional. Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
     */
    nullMarker?: string | null;
    /**
     * Optional. Additional properties to set if sourceFormat is set to PARQUET.
     */
    parquetOptions?: Schema$ParquetOptions;
    /**
     * Optional. When sourceFormat is set to "CSV", this indicates whether the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') are preserved.
     */
    preserveAsciiControlCharacters?: boolean | null;
    /**
     * If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result.
     */
    projectionFields?: string[] | null;
    /**
     * Optional. The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, if you want to escape the default character ' " ', use ' "" '. @default "
     */
    quote?: string | null;
    /**
     * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * Optional. The user can provide a reference file with the reader schema. This file is only loaded if it is part of source URIs, but is not loaded otherwise. It is enabled for the following formats: AVRO, PARQUET, ORC.
     */
    referenceFileSchemaUri?: string | null;
    /**
     * Optional. The schema for the destination table. The schema can be omitted if the destination table already exists, or if you're loading data from Google Cloud Datastore.
     */
    schema?: Schema$TableSchema;
    /**
     * [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT".
     */
    schemaInline?: string | null;
    /**
     * [Deprecated] The format of the schemaInline property.
     */
    schemaInlineFormat?: string | null;
    /**
     * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
     */
    schemaUpdateOptions?: string[] | null;
    /**
     * Optional. The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N \> 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
     */
    skipLeadingRows?: number | null;
    /**
     * Optional. The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV.
     */
    sourceFormat?: string | null;
    /**
     * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed.
     */
    sourceUris?: string[] | null;
    /**
     * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * Optional. If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
     */
    useAvroLogicalTypes?: boolean | null;
    /**
     * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints and uses the schema from the load job. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  /**
   * JobConfigurationQuery configures a BigQuery query job.
   */
  export interface Schema$JobConfigurationQuery {
    /**
     * Optional. If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For GoogleSQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
     */
    allowLargeResults?: boolean | null;
    /**
     * Clustering specification for the destination table.
     */
    clustering?: Schema$Clustering;
    /**
     * Connection properties which can modify the query behavior.
     */
    connectionProperties?: Schema$ConnectionProperty[];
    /**
     * [Optional] Specifies whether the query should be executed as a continuous query. The default value is false.
     */
    continuous?: boolean | null;
    /**
     * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * If this property is true, the job creates a new session using a randomly generated session_id. To continue using a created session with subsequent queries, pass the existing session identifier as a `ConnectionProperty` value. The session identifier is returned as part of the `SessionInfo` message within the query statistics. The new session's location will be set to `Job.JobReference.location` if it is present, otherwise it's set to the default location based on existing routing logic.
     */
    createSession?: boolean | null;
    /**
     * Optional. Specifies the default dataset to use for unqualified table names in the query. This setting does not alter behavior of unqualified dataset names. Setting the system variable `@@dataset_id` achieves the same behavior. See https://cloud.google.com/bigquery/docs/reference/system-variables for more information on system variables.
     */
    defaultDataset?: Schema$DatasetReference;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys)
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * Optional. Describes the table where the query results should be stored. This property must be set for large results that exceed the maximum response size. For queries that produce anonymous (cached) results, this field will be populated by BigQuery.
     */
    destinationTable?: Schema$TableReference;
    /**
     * Optional. If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For GoogleSQL queries, this flag is ignored and results are never flattened.
     */
    flattenResults?: boolean | null;
    /**
     * Optional. [Deprecated] Maximum billing tier allowed for this query. The billing tier controls the amount of compute resources allotted to the query, and multiplies the on-demand cost of the query accordingly. A query that runs within its allotted resources will succeed and indicate its billing tier in statistics.query.billingTier, but if the query exceeds its allotted resources, it will fail with billingTierLimitExceeded. WARNING: The billed byte amount can be multiplied by an amount up to this number! Most users should not need to alter this setting, and we recommend that you avoid introducing new uses of it.
     */
    maximumBillingTier?: number | null;
    /**
     * Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
     */
    maximumBytesBilled?: string | null;
    /**
     * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
     */
    parameterMode?: string | null;
    /**
     * [Deprecated] This property is deprecated.
     */
    preserveNulls?: boolean | null;
    /**
     * Optional. Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
     */
    priority?: string | null;
    /**
     * [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or GoogleSQL.
     */
    query?: string | null;
    /**
     * Query parameters for GoogleSQL queries.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * Range partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: * ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. * ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
     */
    schemaUpdateOptions?: string[] | null;
    /**
     * Options controlling the execution of scripts.
     */
    scriptOptions?: Schema$ScriptOptions;
    /**
     * Output only. System variables for GoogleSQL queries. A system variable is output if the variable is settable and its value differs from the system default. "@@" prefix is not included in the name of the System variables.
     */
    systemVariables?: Schema$SystemVariables;
    /**
     * Optional. You can specify external table definitions, which operate as ephemeral tables that can be queried. These definitions are configured using a JSON map, where the string key represents the table identifier, and the value is the corresponding external data configuration object.
     */
    tableDefinitions?: {[key: string]: Schema$ExternalDataConfiguration} | null;
    /**
     * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * Optional. Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
     */
    useLegacySql?: boolean | null;
    /**
     * Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
     */
    useQueryCache?: boolean | null;
    /**
     * Describes user-defined function resources used in the query.
     */
    userDefinedFunctionResources?: Schema$UserDefinedFunctionResource[];
    /**
     * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the data, removes the constraints, and uses the schema from the query result. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  /**
   * JobConfigurationTableCopy configures a job that copies data from one table to another. For more information on copying tables, see [Copy a table](https://cloud.google.com/bigquery/docs/managing-tables#copy-table).
   */
  export interface Schema$JobConfigurationTableCopy {
    /**
     * Optional. Specifies whether the job is allowed to create new tables. The following values are supported: * CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. * CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * Optional. The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.
     */
    destinationExpirationTime?: string | null;
    /**
     * [Required] The destination table.
     */
    destinationTable?: Schema$TableReference;
    /**
     * Optional. Supported operation types in table copy job.
     */
    operationType?: string | null;
    /**
     * [Pick one] Source table to copy.
     */
    sourceTable?: Schema$TableReference;
    /**
     * [Pick one] Source tables to copy.
     */
    sourceTables?: Schema$TableReference[];
    /**
     * Optional. Specifies the action that occurs if the destination table already exists. The following values are supported: * WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema and table constraints from the source table. * WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. * WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  /**
   * Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`. This feature is not yet available. Jobs will always be created.
   */
  export interface Schema$JobCreationReason {
    /**
     * Output only. Specifies the high level reason why a Job was created.
     */
    code?: string | null;
  }
  /**
   * JobList is the response format for a jobs.list call.
   */
  export interface Schema$JobList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * List of jobs that were requested.
     */
    jobs?: Array<{
      configuration?: Schema$JobConfiguration;
      errorResult?: Schema$ErrorProto;
      id?: string;
      jobReference?: Schema$JobReference;
      kind?: string;
      principal_subject?: string;
      state?: string;
      statistics?: Schema$JobStatistics;
      status?: Schema$JobStatus;
      user_email?: string;
    }> | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: "europe-west5"
     */
    unreachable?: string[] | null;
  }
  /**
   * A job reference is a fully qualified identifier for referring to a job.
   */
  export interface Schema$JobReference {
    /**
     * Required. The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
     */
    jobId?: string | null;
    /**
     * Optional. The geographic location of the job. The default value is US. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations
     */
    location?: string | null;
    /**
     * Required. The ID of the project containing this job.
     */
    projectId?: string | null;
  }
  /**
   * Statistics for a single job execution.
   */
  export interface Schema$JobStatistics {
    /**
     * Output only. [TrustedTester] Job progress (0.0 -\> 1.0) for LOAD and EXTRACT jobs.
     */
    completionRatio?: number | null;
    /**
     * Output only. Statistics for a copy job.
     */
    copy?: Schema$JobStatistics5;
    /**
     * Output only. Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
     */
    creationTime?: string | null;
    /**
     * Output only. Statistics for data-masking. Present only for query and extract jobs.
     */
    dataMaskingStatistics?: Schema$DataMaskingStatistics;
    /**
     * Output only. End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
     */
    endTime?: string | null;
    /**
     * Output only. Statistics for an extract job.
     */
    extract?: Schema$JobStatistics4;
    /**
     * Output only. The duration in milliseconds of the execution of the final attempt of this job, as BigQuery may internally re-attempt to execute the job.
     */
    finalExecutionDurationMs?: string | null;
    /**
     * Output only. Statistics for a load job.
     */
    load?: Schema$JobStatistics3;
    /**
     * Output only. Number of child jobs executed.
     */
    numChildJobs?: string | null;
    /**
     * Output only. If this is a child job, specifies the job ID of the parent.
     */
    parentJobId?: string | null;
    /**
     * Output only. Statistics for a query job.
     */
    query?: Schema$JobStatistics2;
    /**
     * Output only. Quotas which delayed this job's start time.
     */
    quotaDeferments?: string[] | null;
    /**
     * Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
     */
    reservationUsage?: Array<{name?: string; slotMs?: string}> | null;
    /**
     * Output only. Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
     */
    reservation_id?: string | null;
    /**
     * Output only. Statistics for row-level security. Present only for query and extract jobs.
     */
    rowLevelSecurityStatistics?: Schema$RowLevelSecurityStatistics;
    /**
     * Output only. If this a child job of a script, specifies information about the context of this job within the script.
     */
    scriptStatistics?: Schema$ScriptStatistics;
    /**
     * Output only. Information of the session if this job is part of one.
     */
    sessionInfo?: Schema$SessionInfo;
    /**
     * Output only. Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
     */
    startTime?: string | null;
    /**
     * Output only. Total bytes processed for the job.
     */
    totalBytesProcessed?: string | null;
    /**
     * Output only. Slot-milliseconds for the job.
     */
    totalSlotMs?: string | null;
    /**
     * Output only. [Alpha] Information of the multi-statement transaction if this job is part of one. This property is only expected on a child job or a job that is in a session. A script parent job is not part of the transaction started in the script.
     */
    transactionInfo?: Schema$TransactionInfo;
  }
  /**
   * Statistics for a query job.
   */
  export interface Schema$JobStatistics2 {
    /**
     * Output only. BI Engine specific Statistics.
     */
    biEngineStatistics?: Schema$BiEngineStatistics;
    /**
     * Output only. Billing tier for the job. This is a BigQuery-specific concept which is not related to the Google Cloud notion of "free tier". The value here is a measure of the query's resource consumption relative to the amount of data scanned. For on-demand queries, the limit is 100, and all queries within this limit are billed at the standard on-demand rates. On-demand queries that exceed this limit will fail with a billingTierLimitExceeded error.
     */
    billingTier?: number | null;
    /**
     * Output only. Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * Output only. Referenced dataset for DCL statement.
     */
    dclTargetDataset?: Schema$DatasetReference;
    /**
     * Output only. Referenced table for DCL statement.
     */
    dclTargetTable?: Schema$TableReference;
    /**
     * Output only. Referenced view for DCL statement.
     */
    dclTargetView?: Schema$TableReference;
    /**
     * Output only. The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries.
     */
    ddlAffectedRowAccessPolicyCount?: string | null;
    /**
     * Output only. The table after rename. Present only for ALTER TABLE RENAME TO query.
     */
    ddlDestinationTable?: Schema$TableReference;
    /**
     * Output only. The DDL operation performed, possibly dependent on the pre-existence of the DDL target.
     */
    ddlOperationPerformed?: string | null;
    /**
     * Output only. The DDL target dataset. Present only for CREATE/ALTER/DROP SCHEMA(dataset) queries.
     */
    ddlTargetDataset?: Schema$DatasetReference;
    /**
     * Output only. [Beta] The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.
     */
    ddlTargetRoutine?: Schema$RoutineReference;
    /**
     * Output only. The DDL target row access policy. Present only for CREATE/DROP ROW ACCESS POLICY queries.
     */
    ddlTargetRowAccessPolicy?: Schema$RowAccessPolicyReference;
    /**
     * Output only. The DDL target table. Present only for CREATE/DROP TABLE/VIEW and DROP ALL ROW ACCESS POLICIES queries.
     */
    ddlTargetTable?: Schema$TableReference;
    /**
     * Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.
     */
    dmlStats?: Schema$DmlStatistics;
    /**
     * Output only. The original estimate of bytes processed for the job.
     */
    estimatedBytesProcessed?: string | null;
    /**
     * Output only. Stats for EXPORT DATA statement.
     */
    exportDataStatistics?: Schema$ExportDataStatistics;
    /**
     * Output only. Job cost breakdown as bigquery internal cost and external service costs.
     */
    externalServiceCosts?: Schema$ExternalServiceCost[];
    /**
     * Output only. Statistics for a LOAD query.
     */
    loadQueryStatistics?: Schema$LoadQueryStatistics;
    /**
     * Output only. Statistics of materialized views of a query job.
     */
    materializedViewStatistics?: Schema$MaterializedViewStatistics;
    /**
     * Output only. Statistics of metadata cache usage in a query for BigLake tables.
     */
    metadataCacheStatistics?: Schema$MetadataCacheStatistics;
    /**
     * Output only. Statistics of a BigQuery ML training job.
     */
    mlStatistics?: Schema$MlStatistics;
    /**
     * Deprecated.
     */
    modelTraining?: Schema$BigQueryModelTraining;
    /**
     * Deprecated.
     */
    modelTrainingCurrentIteration?: number | null;
    /**
     * Deprecated.
     */
    modelTrainingExpectedTotalIteration?: string | null;
    /**
     * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * Output only. Performance insights.
     */
    performanceInsights?: Schema$PerformanceInsights;
    /**
     * Output only. Query optimization information for a QUERY job.
     */
    queryInfo?: Schema$QueryInfo;
    /**
     * Output only. Describes execution plan for the query.
     */
    queryPlan?: Schema$ExplainQueryStage[];
    /**
     * Output only. Referenced routines for the job.
     */
    referencedRoutines?: Schema$RoutineReference[];
    /**
     * Output only. Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
     */
    referencedTables?: Schema$TableReference[];
    /**
     * Output only. Job resource usage breakdown by reservation. This field reported misleading information and will no longer be populated.
     */
    reservationUsage?: Array<{name?: string; slotMs?: string}> | null;
    /**
     * Output only. The schema of the results. Present only for successful dry run of non-legacy SQL queries.
     */
    schema?: Schema$TableSchema;
    /**
     * Output only. Search query specific statistics.
     */
    searchStatistics?: Schema$SearchStatistics;
    /**
     * Output only. Statistics of a Spark procedure job.
     */
    sparkStatistics?: Schema$SparkStatistics;
    /**
     * Output only. The type of query statement, if valid. Possible values: * `SELECT`: [`SELECT`](/bigquery/docs/reference/standard-sql/query-syntax#select_list) statement. * `ASSERT`: [`ASSERT`](/bigquery/docs/reference/standard-sql/debugging-statements#assert) statement. * `INSERT`: [`INSERT`](/bigquery/docs/reference/standard-sql/dml-syntax#insert_statement) statement. * `UPDATE`: [`UPDATE`](/bigquery/docs/reference/standard-sql/query-syntax#update_statement) statement. * `DELETE`: [`DELETE`](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `MERGE`: [`MERGE`](/bigquery/docs/reference/standard-sql/data-manipulation-language) statement. * `CREATE_TABLE`: [`CREATE TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_statement) statement, without `AS SELECT`. * `CREATE_TABLE_AS_SELECT`: [`CREATE TABLE AS SELECT`](/bigquery/docs/reference/standard-sql/data-definition-language#query_statement) statement. * `CREATE_VIEW`: [`CREATE VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#create_view_statement) statement. * `CREATE_MODEL`: [`CREATE MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-create#create_model_statement) statement. * `CREATE_MATERIALIZED_VIEW`: [`CREATE MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#create_materialized_view_statement) statement. * `CREATE_FUNCTION`: [`CREATE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#create_function_statement) statement. * `CREATE_TABLE_FUNCTION`: [`CREATE TABLE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#create_table_function_statement) statement. * `CREATE_PROCEDURE`: [`CREATE PROCEDURE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_procedure) statement. * `CREATE_ROW_ACCESS_POLICY`: [`CREATE ROW ACCESS POLICY`](/bigquery/docs/reference/standard-sql/data-definition-language#create_row_access_policy_statement) statement. * `CREATE_SCHEMA`: [`CREATE SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#create_schema_statement) statement. * `CREATE_SNAPSHOT_TABLE`: [`CREATE SNAPSHOT TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_snapshot_table_statement) statement. * `CREATE_SEARCH_INDEX`: [`CREATE SEARCH INDEX`](/bigquery/docs/reference/standard-sql/data-definition-language#create_search_index_statement) statement. * `DROP_TABLE`: [`DROP TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_statement) statement. * `DROP_EXTERNAL_TABLE`: [`DROP EXTERNAL TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_external_table_statement) statement. * `DROP_VIEW`: [`DROP VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_view_statement) statement. * `DROP_MODEL`: [`DROP MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-drop-model) statement. * `DROP_MATERIALIZED_VIEW`: [`DROP MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_materialized_view_statement) statement. * `DROP_FUNCTION` : [`DROP FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_function_statement) statement. * `DROP_TABLE_FUNCTION` : [`DROP TABLE FUNCTION`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_table_function) statement. * `DROP_PROCEDURE`: [`DROP PROCEDURE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_procedure_statement) statement. * `DROP_SEARCH_INDEX`: [`DROP SEARCH INDEX`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_search_index) statement. * `DROP_SCHEMA`: [`DROP SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_schema_statement) statement. * `DROP_SNAPSHOT_TABLE`: [`DROP SNAPSHOT TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_snapshot_table_statement) statement. * `DROP_ROW_ACCESS_POLICY`: [`DROP [ALL] ROW ACCESS POLICY|POLICIES`](/bigquery/docs/reference/standard-sql/data-definition-language#drop_row_access_policy_statement) statement. * `ALTER_TABLE`: [`ALTER TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_table_set_options_statement) statement. * `ALTER_VIEW`: [`ALTER VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_view_set_options_statement) statement. * `ALTER_MATERIALIZED_VIEW`: [`ALTER MATERIALIZED VIEW`](/bigquery/docs/reference/standard-sql/data-definition-language#alter_materialized_view_set_options_statement) statement. * `ALTER_SCHEMA`: [`ALTER SCHEMA`](/bigquery/docs/reference/standard-sql/data-definition-language#aalter_schema_set_options_statement) statement. * `SCRIPT`: [`SCRIPT`](/bigquery/docs/reference/standard-sql/procedural-language). * `TRUNCATE_TABLE`: [`TRUNCATE TABLE`](/bigquery/docs/reference/standard-sql/dml-syntax#truncate_table_statement) statement. * `CREATE_EXTERNAL_TABLE`: [`CREATE EXTERNAL TABLE`](/bigquery/docs/reference/standard-sql/data-definition-language#create_external_table_statement) statement. * `EXPORT_DATA`: [`EXPORT DATA`](/bigquery/docs/reference/standard-sql/other-statements#export_data_statement) statement. * `EXPORT_MODEL`: [`EXPORT MODEL`](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-export-model) statement. * `LOAD_DATA`: [`LOAD DATA`](/bigquery/docs/reference/standard-sql/other-statements#load_data_statement) statement. * `CALL`: [`CALL`](/bigquery/docs/reference/standard-sql/procedural-language#call) statement.
     */
    statementType?: string | null;
    /**
     * Output only. Describes a timeline of job execution.
     */
    timeline?: Schema$QueryTimelineSample[];
    /**
     * Output only. If the project is configured to use on-demand pricing, then this field contains the total bytes billed for the job. If the project is configured to use flat-rate pricing, then you are not billed for bytes and this field is informational only.
     */
    totalBytesBilled?: string | null;
    /**
     * Output only. Total bytes processed for the job.
     */
    totalBytesProcessed?: string | null;
    /**
     * Output only. For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
     */
    totalBytesProcessedAccuracy?: string | null;
    /**
     * Output only. Total number of partitions processed from all partitioned tables referenced in the job.
     */
    totalPartitionsProcessed?: string | null;
    /**
     * Output only. Slot-milliseconds for the job.
     */
    totalSlotMs?: string | null;
    /**
     * Output only. Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS).
     */
    transferredBytes?: string | null;
    /**
     * Output only. GoogleSQL only: list of undeclared query parameters detected during a dry run validation.
     */
    undeclaredQueryParameters?: Schema$QueryParameter[];
    /**
     * Output only. Vector Search query specific statistics.
     */
    vectorSearchStatistics?: Schema$VectorSearchStatistics;
  }
  /**
   * Statistics for a load job.
   */
  export interface Schema$JobStatistics3 {
    /**
     * Output only. The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
     */
    badRecords?: string | null;
    /**
     * Output only. Number of bytes of source data in a load job.
     */
    inputFileBytes?: string | null;
    /**
     * Output only. Number of source files in a load job.
     */
    inputFiles?: string | null;
    /**
     * Output only. Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
     */
    outputBytes?: string | null;
    /**
     * Output only. Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
     */
    outputRows?: string | null;
    /**
     * Output only. Describes a timeline of job execution.
     */
    timeline?: Schema$QueryTimelineSample[];
  }
  /**
   * Statistics for an extract job.
   */
  export interface Schema$JobStatistics4 {
    /**
     * Output only. Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field.
     */
    destinationUriFileCounts?: string[] | null;
    /**
     * Output only. Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes and doesn't have any relationship with the number of actual result bytes extracted in the desired format.
     */
    inputBytes?: string | null;
    /**
     * Output only. Describes a timeline of job execution.
     */
    timeline?: Schema$QueryTimelineSample[];
  }
  /**
   * Statistics for a copy job.
   */
  export interface Schema$JobStatistics5 {
    /**
     * Output only. Number of logical bytes copied to the destination table.
     */
    copiedLogicalBytes?: string | null;
    /**
     * Output only. Number of rows copied to the destination table.
     */
    copiedRows?: string | null;
  }
  export interface Schema$JobStatus {
    /**
     * Output only. Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
     */
    errorResult?: Schema$ErrorProto;
    /**
     * Output only. The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has not completed or was unsuccessful.
     */
    errors?: Schema$ErrorProto[];
    /**
     * Output only. Running state of the job. Valid states include 'PENDING', 'RUNNING', and 'DONE'.
     */
    state?: string | null;
  }
  /**
   * Represents a single JSON object.
   */
  export interface Schema$JsonObject {}
  /**
   * Json Options for load and make external tables.
   */
  export interface Schema$JsonOptions {
    /**
     * Optional. The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
     */
    encoding?: string | null;
  }
  export interface Schema$JsonValue {}
  /**
   * A dataset source type which refers to another BigQuery dataset.
   */
  export interface Schema$LinkedDatasetSource {
    /**
     * The source dataset reference contains project numbers and not project ids.
     */
    sourceDataset?: Schema$DatasetReference;
  }
  /**
   * Response format for a single page when listing BigQuery ML models.
   */
  export interface Schema$ListModelsResponse {
    /**
     * Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.
     */
    models?: Schema$Model[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Describes the format of a single result page when listing routines.
   */
  export interface Schema$ListRoutinesResponse {
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options.
     */
    routines?: Schema$Routine[];
  }
  /**
   * Response message for the ListRowAccessPolicies method.
   */
  export interface Schema$ListRowAccessPoliciesResponse {
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Row access policies on the requested table.
     */
    rowAccessPolicies?: Schema$RowAccessPolicy[];
  }
  /**
   * Statistics for a LOAD query.
   */
  export interface Schema$LoadQueryStatistics {
    /**
     * Output only. The number of bad records encountered while processing a LOAD query. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
     */
    badRecords?: string | null;
    /**
     * Output only. This field is deprecated. The number of bytes of source data copied over the network for a `LOAD` query. `transferred_bytes` has the canonical value for physical transferred bytes, which is used for BigQuery Omni billing.
     */
    bytesTransferred?: string | null;
    /**
     * Output only. Number of bytes of source data in a LOAD query.
     */
    inputFileBytes?: string | null;
    /**
     * Output only. Number of source files in a LOAD query.
     */
    inputFiles?: string | null;
    /**
     * Output only. Size of the loaded data in bytes. Note that while a LOAD query is in the running state, this value may change.
     */
    outputBytes?: string | null;
    /**
     * Output only. Number of rows imported in a LOAD query. Note that while a LOAD query is in the running state, this value may change.
     */
    outputRows?: string | null;
  }
  /**
   * BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.
   */
  export interface Schema$LocationMetadata {
    /**
     * The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.
     */
    legacyLocationId?: string | null;
  }
  /**
   * A materialized view considered for a query job.
   */
  export interface Schema$MaterializedView {
    /**
     * Whether the materialized view is chosen for the query. A materialized view can be chosen to rewrite multiple parts of the same query. If a materialized view is chosen to rewrite any part of the query, then this field is true, even if the materialized view was not chosen to rewrite others parts.
     */
    chosen?: boolean | null;
    /**
     * If present, specifies a best-effort estimation of the bytes saved by using the materialized view rather than its base tables.
     */
    estimatedBytesSaved?: string | null;
    /**
     * If present, specifies the reason why the materialized view was not chosen for the query.
     */
    rejectedReason?: string | null;
    /**
     * The candidate materialized view.
     */
    tableReference?: Schema$TableReference;
  }
  /**
   * Definition and configuration of a materialized view.
   */
  export interface Schema$MaterializedViewDefinition {
    /**
     * Optional. This option declares authors intention to construct a materialized view that will not be refreshed incrementally.
     */
    allowNonIncrementalDefinition?: boolean | null;
    /**
     * Optional. Enable automatic refresh of the materialized view when the base table is updated. The default value is "true".
     */
    enableRefresh?: boolean | null;
    /**
     * Output only. The time when this materialized view was last refreshed, in milliseconds since the epoch.
     */
    lastRefreshTime?: string | null;
    /**
     * [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type).
     */
    maxStaleness?: string | null;
    /**
     * Required. A query whose results are persisted.
     */
    query?: string | null;
    /**
     * Optional. The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes).
     */
    refreshIntervalMs?: string | null;
  }
  /**
   * Statistics of materialized views considered in a query job.
   */
  export interface Schema$MaterializedViewStatistics {
    /**
     * Materialized views considered for the query job. Only certain materialized views are used. For a detailed list, see the child message. If many materialized views are considered, then the list might be incomplete.
     */
    materializedView?: Schema$MaterializedView[];
  }
  /**
   * Status of a materialized view. The last refresh timestamp status is omitted here, but is present in the MaterializedViewDefinition message.
   */
  export interface Schema$MaterializedViewStatus {
    /**
     * Output only. Error result of the last automatic refresh. If present, indicates that the last automatic refresh was unsuccessful.
     */
    lastRefreshStatus?: Schema$ErrorProto;
    /**
     * Output only. Refresh watermark of materialized view. The base tables' data were collected into the materialized view cache until this time.
     */
    refreshWatermark?: string | null;
  }
  /**
   * Statistics for metadata caching in BigLake tables.
   */
  export interface Schema$MetadataCacheStatistics {
    /**
     * Set for the Metadata caching eligible tables referenced in the query.
     */
    tableMetadataCacheUsage?: Schema$TableMetadataCacheUsage[];
  }
  /**
   * Job statistics specific to a BigQuery ML training job.
   */
  export interface Schema$MlStatistics {
    /**
     * Output only. Trials of a [hyperparameter tuning job](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) sorted by trial_id.
     */
    hparamTrials?: Schema$HparamTuningTrial[];
    /**
     * Results for all completed iterations. Empty for [hyperparameter tuning jobs](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview).
     */
    iterationResults?: Schema$IterationResult[];
    /**
     * Output only. Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop.
     */
    maxIterations?: string | null;
    /**
     * Output only. The type of the model that is being trained.
     */
    modelType?: string | null;
    /**
     * Output only. Training type of the job.
     */
    trainingType?: string | null;
  }
  export interface Schema$Model {
    /**
     * The best trial_id across all training runs.
     */
    bestTrialId?: string | null;
    /**
     * Output only. The time when this model was created, in millisecs since the epoch.
     */
    creationTime?: string | null;
    /**
     * Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials.
     */
    defaultTrialId?: string | null;
    /**
     * Optional. A user-friendly description of this model.
     */
    description?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while stored in BigQuery storage. This field can be used with PatchModel to update encryption key for an already encrypted model.
     */
    encryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
     */
    expirationTime?: string | null;
    /**
     * Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause.
     */
    featureColumns?: Schema$StandardSqlField[];
    /**
     * Optional. A descriptive name for this model.
     */
    friendlyName?: string | null;
    /**
     * Output only. All hyperparameter search spaces in this model.
     */
    hparamSearchSpaces?: Schema$HparamSearchSpaces;
    /**
     * Output only. Trials of a [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id.
     */
    hparamTrials?: Schema$HparamTuningTrial[];
    /**
     * Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns.
     */
    labelColumns?: Schema$StandardSqlField[];
    /**
     * The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The time when this model was last modified, in millisecs since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Output only. The geographic location where the model resides. This value is inherited from the dataset.
     */
    location?: string | null;
    /**
     * Required. Unique identifier for this model.
     */
    modelReference?: Schema$ModelReference;
    /**
     * Output only. Type of the model resource.
     */
    modelType?: string | null;
    /**
     * Output only. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id.
     */
    optimalTrialIds?: string[] | null;
    /**
     * Output only. Remote model info
     */
    remoteModelInfo?: Schema$RemoteModelInfo;
    /**
     * Information for all training runs in increasing order of start_time.
     */
    trainingRuns?: Schema$TrainingRun[];
    /**
     * Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model.
     */
    transformColumns?: Schema$TransformColumn[];
  }
  export interface Schema$ModelDefinition {
    /**
     * Deprecated.
     */
    modelOptions?: {
      labels?: string[];
      lossType?: string;
      modelType?: string;
    } | null;
    /**
     * Deprecated.
     */
    trainingRuns?: Schema$BqmlTrainingRun[];
  }
  /**
   * Options related to model extraction.
   */
  export interface Schema$ModelExtractOptions {
    /**
     * The 1-based ID of the trial to be exported from a hyperparameter tuning model. If not specified, the trial with id = [Model](/bigquery/docs/reference/rest/v2/models#resource:-model).defaultTrialId is exported. This field is ignored for models not trained with hyperparameter tuning.
     */
    trialId?: string | null;
  }
  /**
   * Id path of a model.
   */
  export interface Schema$ModelReference {
    /**
     * Required. The ID of the dataset containing this model.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    modelId?: string | null;
    /**
     * Required. The ID of the project containing this model.
     */
    projectId?: string | null;
  }
  /**
   * Evaluation metrics for multi-class classification/classifier models.
   */
  export interface Schema$MultiClassClassificationMetrics {
    /**
     * Aggregate classification metrics.
     */
    aggregateClassificationMetrics?: Schema$AggregateClassificationMetrics;
    /**
     * Confusion matrix at different thresholds.
     */
    confusionMatrixList?: Schema$ConfusionMatrix[];
  }
  /**
   * Parquet Options for load and make external tables.
   */
  export interface Schema$ParquetOptions {
    /**
     * Optional. Indicates whether to use schema inference specifically for Parquet LIST logical type.
     */
    enableListInference?: boolean | null;
    /**
     * Optional. Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
     */
    enumAsString?: boolean | null;
  }
  /**
   * Performance insights for the job.
   */
  export interface Schema$PerformanceInsights {
    /**
     * Output only. Average execution ms of previous runs. Indicates the job ran slow compared to previous executions. To find previous executions, use INFORMATION_SCHEMA tables and filter jobs with same query hash.
     */
    avgPreviousExecutionMs?: string | null;
    /**
     * Output only. Query stage performance insights compared to previous runs, for diagnosing performance regression.
     */
    stagePerformanceChangeInsights?: Schema$StagePerformanceChangeInsight[];
    /**
     * Output only. Standalone query stage performance insights, for exploring potential improvements.
     */
    stagePerformanceStandaloneInsights?: Schema$StagePerformanceStandaloneInsight[];
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order.
   */
  export interface Schema$PrincipalComponentInfo {
    /**
     * The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio.
     */
    cumulativeExplainedVarianceRatio?: number | null;
    /**
     * Explained variance by this principal component, which is simply the eigenvalue.
     */
    explainedVariance?: number | null;
    /**
     * Explained_variance over the total explained variance.
     */
    explainedVarianceRatio?: number | null;
    /**
     * Id of the principal component.
     */
    principalComponentId?: string | null;
  }
  /**
   * Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views.
   */
  export interface Schema$PrivacyPolicy {
    /**
     * Optional. Policy used for aggregation thresholds.
     */
    aggregationThresholdPolicy?: Schema$AggregationThresholdPolicy;
  }
  /**
   * Response object of ListProjects
   */
  export interface Schema$ProjectList {
    /**
     * A hash of the page of results.
     */
    etag?: string | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * Use this token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Projects to which the user has at least READ access.
     */
    projects?: Array<{
      friendlyName?: string;
      id?: string;
      kind?: string;
      numericId?: string;
      projectReference?: Schema$ProjectReference;
    }> | null;
    /**
     * The total number of projects in the page. A wrapper is used here because the field should still be in the response when the value is 0.
     */
    totalItems?: number | null;
  }
  /**
   * A unique reference to a project.
   */
  export interface Schema$ProjectReference {
    /**
     * Required. ID of the project. Can be either the numeric ID or the assigned ID of the project.
     */
    projectId?: string | null;
  }
  /**
   * Query optimization information for a QUERY job.
   */
  export interface Schema$QueryInfo {
    /**
     * Output only. Information about query optimizations.
     */
    optimizationDetails?: {[key: string]: any} | null;
  }
  /**
   * A parameter given to a query.
   */
  export interface Schema$QueryParameter {
    /**
     * Optional. If unset, this is a positional parameter. Otherwise, should be unique within a query.
     */
    name?: string | null;
    /**
     * Required. The type of this parameter.
     */
    parameterType?: Schema$QueryParameterType;
    /**
     * Required. The value of this parameter.
     */
    parameterValue?: Schema$QueryParameterValue;
  }
  /**
   * The type of a query parameter.
   */
  export interface Schema$QueryParameterType {
    /**
     * Optional. The type of the array's elements, if this is an array.
     */
    arrayType?: Schema$QueryParameterType;
    /**
     * Optional. The element type of the range, if this is a range.
     */
    rangeElementType?: Schema$QueryParameterType;
    /**
     * Optional. The types of the fields of this struct, in order, if this is a struct.
     */
    structTypes?: Array<{
      description?: string;
      name?: string;
      type?: Schema$QueryParameterType;
    }> | null;
    /**
     * Required. The top level type of this field.
     */
    type?: string | null;
  }
  /**
   * The value of a query parameter.
   */
  export interface Schema$QueryParameterValue {
    /**
     * Optional. The array values, if this is an array type.
     */
    arrayValues?: Schema$QueryParameterValue[];
    /**
     * Optional. The range value, if this is a range type.
     */
    rangeValue?: Schema$RangeValue;
    /**
     * The struct field values.
     */
    structValues?: {[key: string]: Schema$QueryParameterValue} | null;
    /**
     * Optional. The value of this value, if a simple scalar type.
     */
    value?: string | null;
  }
  /**
   * Describes the format of the jobs.query request.
   */
  export interface Schema$QueryRequest {
    /**
     * Optional. Connection properties which can modify the query behavior.
     */
    connectionProperties?: Schema$ConnectionProperty[];
    /**
     * [Optional] Specifies whether the query should be executed as a continuous query. The default value is false.
     */
    continuous?: boolean | null;
    /**
     * Optional. If true, creates a new session using a randomly generated session_id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. The session location will be set to QueryRequest.location if it is present, otherwise it's set to the default location based on existing routing logic.
     */
    createSession?: boolean | null;
    /**
     * Optional. Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format 'datasetId.tableId'.
     */
    defaultDataset?: Schema$DatasetReference;
    /**
     * Optional. If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
     */
    dryRun?: boolean | null;
    /**
     * Optional. Output format adjustments.
     */
    formatOptions?: Schema$DataFormatOptions;
    /**
     * Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. This feature is not yet available. Jobs will always be created.
     */
    jobCreationMode?: string | null;
    /**
     * The resource type of the request.
     */
    kind?: string | null;
    /**
     * Optional. The labels associated with this query. Labels can be used to organize and group query jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string | null;
    /**
     * Optional. Limits the bytes billed for this query. Queries with bytes billed above this limit will fail (without incurring a charge). If unspecified, the project default is used.
     */
    maximumBytesBilled?: string | null;
    /**
     * Optional. The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
     */
    maxResults?: number | null;
    /**
     * GoogleSQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
     */
    parameterMode?: string | null;
    /**
     * This property is deprecated.
     */
    preserveNulls?: boolean | null;
    /**
     * Required. A query string to execute, using Google Standard SQL or legacy SQL syntax. Example: "SELECT COUNT(f1) FROM myProjectId.myDatasetId.myTableId".
     */
    query?: string | null;
    /**
     * Query parameters for GoogleSQL queries.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * Optional. A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of another request, all parameters in the request that may affect the result are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed.
     */
    requestId?: string | null;
    /**
     * Optional. Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
     */
    timeoutMs?: number | null;
    /**
     * Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
     */
    useLegacySql?: boolean | null;
    /**
     * Optional. Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
     */
    useQueryCache?: boolean | null;
  }
  export interface Schema$QueryResponse {
    /**
     * Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * Output only. Detailed statistics for DML statements INSERT, UPDATE, DELETE, MERGE or TRUNCATE.
     */
    dmlStats?: Schema$DmlStatistics;
    /**
     * Output only. The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. For more information about error messages, see [Error messages](https://cloud.google.com/bigquery/docs/error-messages).
     */
    errors?: Schema$ErrorProto[];
    /**
     * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
     */
    jobComplete?: boolean | null;
    /**
     * Optional. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset. When job_reference is present, this field should be interpreted as follows: If set, it will provide the reason of why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created.
     */
    jobCreationReason?: Schema$JobCreationReason;
    /**
     * Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
     */
    jobReference?: Schema$JobReference;
    /**
     * The resource type.
     */
    kind?: string | null;
    /**
     * Output only. The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * A token used for paging results. A non-empty token indicates that additional results are available. To see additional results, query the [`jobs.getQueryResults`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/getQueryResults) method. For more information, see [Paging through table data](https://cloud.google.com/bigquery/docs/paging-results).
     */
    pageToken?: string | null;
    /**
     * Query ID for the completed query. This ID will be auto-generated. This field is not yet available and it is currently not guaranteed to be populated.
     */
    queryId?: string | null;
    /**
     * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
     */
    rows?: Schema$TableRow[];
    /**
     * The schema of the results. Present only when the query completes successfully.
     */
    schema?: Schema$TableSchema;
    /**
     * Output only. Information of the session if this job is part of one.
     */
    sessionInfo?: Schema$SessionInfo;
    /**
     * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
     */
    totalBytesProcessed?: string | null;
    /**
     * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
     */
    totalRows?: string | null;
  }
  /**
   * Summary of the state of query execution at a given time.
   */
  export interface Schema$QueryTimelineSample {
    /**
     * Total number of active workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
     */
    activeUnits?: string | null;
    /**
     * Total parallel units of work completed by this query.
     */
    completedUnits?: string | null;
    /**
     * Milliseconds elapsed since the start of query execution.
     */
    elapsedMs?: string | null;
    /**
     * Units of work that can be scheduled immediately. Providing additional slots for these units of work will accelerate the query, if no other query in the reservation needs additional slots.
     */
    estimatedRunnableUnits?: string | null;
    /**
     * Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running.
     */
    pendingUnits?: string | null;
    /**
     * Cumulative slot-ms consumed by the query.
     */
    totalSlotMs?: string | null;
  }
  export interface Schema$RangePartitioning {
    /**
     * Required. [Experimental] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.
     */
    field?: string | null;
    /**
     * [Experimental] Defines the ranges for range partitioning.
     */
    range?: {end?: string; interval?: string; start?: string} | null;
  }
  /**
   * Represents the value of a range.
   */
  export interface Schema$RangeValue {
    /**
     * Optional. The end value of the range. A missing value represents an unbounded end.
     */
    end?: Schema$QueryParameterValue;
    /**
     * Optional. The start value of the range. A missing value represents an unbounded start.
     */
    start?: Schema$QueryParameterValue;
  }
  /**
   * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
   */
  export interface Schema$RankingMetrics {
    /**
     * Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank.
     */
    averageRank?: number | null;
    /**
     * Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users.
     */
    meanAveragePrecision?: number | null;
    /**
     * Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not.
     */
    meanSquaredError?: number | null;
    /**
     * A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings.
     */
    normalizedDiscountedCumulativeGain?: number | null;
  }
  /**
   * Evaluation metrics for regression and explicit feedback type matrix factorization models.
   */
  export interface Schema$RegressionMetrics {
    /**
     * Mean absolute error.
     */
    meanAbsoluteError?: number | null;
    /**
     * Mean squared error.
     */
    meanSquaredError?: number | null;
    /**
     * Mean squared log error.
     */
    meanSquaredLogError?: number | null;
    /**
     * Median absolute error.
     */
    medianAbsoluteError?: number | null;
    /**
     * R^2 score. This corresponds to r2_score in ML.EVALUATE.
     */
    rSquared?: number | null;
  }
  /**
   * Options for a remote user-defined function.
   */
  export interface Schema$RemoteFunctionOptions {
    /**
     * Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: ```"projects/{projectId\}/locations/{locationId\}/connections/{connectionId\}"```
     */
    connection?: string | null;
    /**
     * Endpoint of the user-provided remote service, e.g. ```https://us-east1-my_gcf_project.cloudfunctions.net/remote_add```
     */
    endpoint?: string | null;
    /**
     * Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch.
     */
    maxBatchingRows?: string | null;
    /**
     * User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB.
     */
    userDefinedContext?: {[key: string]: string} | null;
  }
  /**
   * Remote Model Info
   */
  export interface Schema$RemoteModelInfo {
    /**
     * Output only. Fully qualified name of the user-provided connection object of the remote model. Format: ```"projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}"```
     */
    connection?: string | null;
    /**
     * Output only. The endpoint for remote model.
     */
    endpoint?: string | null;
    /**
     * Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically.
     */
    maxBatchingRows?: string | null;
    /**
     * Output only. The model version for LLM.
     */
    remoteModelVersion?: string | null;
    /**
     * Output only. The remote service type for remote model.
     */
    remoteServiceType?: string | null;
    /**
     * Output only. The name of the speech recognizer to use for speech recognition. The expected format is `projects/{project\}/locations/{location\}/recognizers/{recognizer\}`. Customers can specify this field at model creation. If not specified, a default recognizer `projects/{model project\}/locations/global/recognizers/_` will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers)
     */
    speechRecognizer?: string | null;
  }
  /**
   * A user-defined function or a stored procedure.
   */
  export interface Schema$Routine {
    /**
     * Optional.
     */
    arguments?: Schema$Argument[];
    /**
     * Output only. The time when this routine was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask).
     */
    dataGovernanceType?: string | null;
    /**
     * Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks.
     */
    definitionBody?: string | null;
    /**
     * Optional. The description of the routine, if defined.
     */
    description?: string | null;
    /**
     * Optional. The determinism level of the JavaScript UDF, if defined.
     */
    determinismLevel?: string | null;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: string[] | null;
    /**
     * Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise.
     */
    language?: string | null;
    /**
     * Output only. The time when this routine was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Optional. Remote function specific options.
     */
    remoteFunctionOptions?: Schema$RemoteFunctionOptions;
    /**
     * Optional. Can be set only if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return table type is inferred from definition_body at query time in each query that references this routine. If present, then the columns in the evaluated table result will be cast to match the column types specified in return table type, at query time.
     */
    returnTableType?: Schema$StandardSqlTableType;
    /**
     * Optional if language = "SQL"; required otherwise. Cannot be set if routine_type = "TABLE_VALUED_FUNCTION". If absent, the return type is inferred from definition_body at query time in each query that references this routine. If present, then the evaluated result will be cast to the specified returned type at query time. For example, for the functions created with the following statements: * `CREATE FUNCTION Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x + y);` * `CREATE FUNCTION Increment(x FLOAT64) AS (Add(x, 1));` * `CREATE FUNCTION Decrement(x FLOAT64) RETURNS FLOAT64 AS (Add(x, -1));` The return_type is `{type_kind: "FLOAT64"\}` for `Add` and `Decrement`, and is absent for `Increment` (inferred as FLOAT64 at query time). Suppose the function `Add` is replaced by `CREATE OR REPLACE FUNCTION Add(x INT64, y INT64) AS (x + y);` Then the inferred return type of `Increment` is automatically changed to INT64 at query time, while the return type of `Decrement` remains FLOAT64.
     */
    returnType?: Schema$StandardSqlDataType;
    /**
     * Required. Reference describing the ID of this routine.
     */
    routineReference?: Schema$RoutineReference;
    /**
     * Required. The type of routine.
     */
    routineType?: string | null;
    /**
     * Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration.
     */
    securityMode?: string | null;
    /**
     * Optional. Spark specific options.
     */
    sparkOptions?: Schema$SparkOptions;
    /**
     * Optional. Use this option to catch many common errors. Error checking is not exhaustive, and successfully creating a procedure doesn't guarantee that the procedure will successfully execute at runtime. If `strictMode` is set to `TRUE`, the procedure body is further checked for errors such as non-existent tables or columns. The `CREATE PROCEDURE` statement fails if the body fails any of these checks. If `strictMode` is set to `FALSE`, the procedure body is checked only for syntax. For procedures that invoke themselves recursively, specify `strictMode=FALSE` to avoid non-existent procedure errors during validation. Default value is `TRUE`.
     */
    strictMode?: boolean | null;
  }
  /**
   * Id path of a routine.
   */
  export interface Schema$RoutineReference {
    /**
     * Required. The ID of the dataset containing this routine.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the project containing this routine.
     */
    projectId?: string | null;
    /**
     * Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
     */
    routineId?: string | null;
  }
  /**
   * A single row in the confusion matrix.
   */
  export interface Schema$Row {
    /**
     * The original label of this row.
     */
    actualLabel?: string | null;
    /**
     * Info describing predicted label distribution.
     */
    entries?: Schema$Entry[];
  }
  /**
   * Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy.
   */
  export interface Schema$RowAccessPolicy {
    /**
     * Output only. The time when this row access policy was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0
     */
    filterPredicate?: string | null;
    /**
     * Output only. The time when this row access policy was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Required. Reference describing the ID of this row access policy.
     */
    rowAccessPolicyReference?: Schema$RowAccessPolicyReference;
  }
  /**
   * Id path of a row access policy.
   */
  export interface Schema$RowAccessPolicyReference {
    /**
     * Required. The ID of the dataset containing this row access policy.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
     */
    policyId?: string | null;
    /**
     * Required. The ID of the project containing this row access policy.
     */
    projectId?: string | null;
    /**
     * Required. The ID of the table containing this row access policy.
     */
    tableId?: string | null;
  }
  /**
   * Statistics for row-level security.
   */
  export interface Schema$RowLevelSecurityStatistics {
    /**
     * Whether any accessed data was protected by row access policies.
     */
    rowLevelSecurityApplied?: boolean | null;
  }
  /**
   * Options related to script execution.
   */
  export interface Schema$ScriptOptions {
    /**
     * Determines which statement in the script represents the "key result", used to populate the schema and query results of the script job. Default is LAST.
     */
    keyResultStatement?: string | null;
    /**
     * Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
     */
    statementByteBudget?: string | null;
    /**
     * Timeout period for each statement in a script.
     */
    statementTimeoutMs?: string | null;
  }
  /**
   * Represents the location of the statement/expression being evaluated. Line and column numbers are defined as follows: - Line and column numbers start with one. That is, line 1 column 1 denotes the start of the script. - When inside a stored procedure, all line/column numbers are relative to the procedure body, not the script in which the procedure was defined. - Start/end positions exclude leading/trailing comments and whitespace. The end position always ends with a ";", when present. - Multi-byte Unicode characters are treated as just one column. - If the original script (or procedure definition) contains TAB characters, a tab "snaps" the indentation forward to the nearest multiple of 8 characters, plus 1. For example, a TAB on column 1, 2, 3, 4, 5, 6 , or 8 will advance the next character to column 9. A TAB on column 9, 10, 11, 12, 13, 14, 15, or 16 will advance the next character to column 17.
   */
  export interface Schema$ScriptStackFrame {
    /**
     * Output only. One-based end column.
     */
    endColumn?: number | null;
    /**
     * Output only. One-based end line.
     */
    endLine?: number | null;
    /**
     * Output only. Name of the active procedure, empty if in a top-level script.
     */
    procedureId?: string | null;
    /**
     * Output only. One-based start column.
     */
    startColumn?: number | null;
    /**
     * Output only. One-based start line.
     */
    startLine?: number | null;
    /**
     * Output only. Text of the current statement/expression.
     */
    text?: string | null;
  }
  /**
   * Job statistics specific to the child job of a script.
   */
  export interface Schema$ScriptStatistics {
    /**
     * Whether this child job was a statement or expression.
     */
    evaluationKind?: string | null;
    /**
     * Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty.
     */
    stackFrames?: Schema$ScriptStackFrame[];
  }
  /**
   * Statistics for a search query. Populated as part of JobStatistics2.
   */
  export interface Schema$SearchStatistics {
    /**
     * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
     */
    indexUnusedReasons?: Schema$IndexUnusedReason[];
    /**
     * Specifies the index usage mode for the query.
     */
    indexUsageMode?: string | null;
  }
  /**
   * [Preview] Information related to sessions.
   */
  export interface Schema$SessionInfo {
    /**
     * Output only. The id of the session.
     */
    sessionId?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Information about base table and snapshot time of the snapshot.
   */
  export interface Schema$SnapshotDefinition {
    /**
     * Required. Reference describing the ID of the table that was snapshot.
     */
    baseTableReference?: Schema$TableReference;
    /**
     * Required. The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format.
     */
    snapshotTime?: string | null;
  }
  /**
   * Spark job logs can be filtered by these fields in Cloud Logging.
   */
  export interface Schema$SparkLoggingInfo {
    /**
     * Output only. Project ID where the Spark logs were written.
     */
    projectId?: string | null;
    /**
     * Output only. Resource type used for logging.
     */
    resourceType?: string | null;
  }
  /**
   * Options for a user-defined Spark routine.
   */
  export interface Schema$SparkOptions {
    /**
     * Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    archiveUris?: string[] | null;
    /**
     * Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id\}/locations/{location_id\}/connections/{connection_id\}"```
     */
    connection?: string | null;
    /**
     * Custom container image for the runtime environment.
     */
    containerImage?: string | null;
    /**
     * Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    fileUris?: string[] | null;
    /**
     * JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    jarUris?: string[] | null;
    /**
     * The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type.
     */
    mainClass?: string | null;
    /**
     * The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type.
     */
    mainFileUri?: string | null;
    /**
     * Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list).
     */
    properties?: {[key: string]: string} | null;
    /**
     * Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: `.py`, `.egg`, and `.zip`. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    pyFileUris?: string[] | null;
    /**
     * Runtime version. If not specified, the default runtime version is used.
     */
    runtimeVersion?: string | null;
  }
  /**
   * Statistics for a BigSpark query. Populated as part of JobStatistics2
   */
  export interface Schema$SparkStatistics {
    /**
     * Output only. Endpoints returned from Dataproc. Key list: - history_server_endpoint: A link to Spark job UI.
     */
    endpoints?: {[key: string]: string} | null;
    /**
     * Output only. The Google Cloud Storage bucket that is used as the default filesystem by the Spark application. This fields is only filled when the Spark procedure uses the INVOKER security mode. It is inferred from the system variable @@spark_proc_properties.staging_bucket if it is provided. Otherwise, BigQuery creates a default staging bucket for the job and returns the bucket name in this field. Example: * `gs://[bucket_name]`
     */
    gcsStagingBucket?: string | null;
    /**
     * Output only. The Cloud KMS encryption key that is used to protect the resources created by the Spark job. If the Spark procedure uses DEFINER security mode, the Cloud KMS key is inferred from the Spark connection associated with the procedure if it is provided. Otherwise the key is inferred from the default key of the Spark connection's project if the CMEK organization policy is enforced. If the Spark procedure uses INVOKER security mode, the Cloud KMS encryption key is inferred from the system variable @@spark_proc_properties.kms_key_name if it is provided. Otherwise, the key is inferred fromt he default key of the BigQuery job's project if the CMEK organization policy is enforced. Example: * `projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]`
     */
    kmsKeyName?: string | null;
    /**
     * Output only. Logging info is used to generate a link to Cloud Logging.
     */
    loggingInfo?: Schema$SparkLoggingInfo;
    /**
     * Output only. Spark job ID if a Spark job is created successfully.
     */
    sparkJobId?: string | null;
    /**
     * Output only. Location where the Spark job is executed. A location is selected by BigQueury for jobs configured to run in a multi-region.
     */
    sparkJobLocation?: string | null;
  }
  /**
   * Performance insights compared to the previous executions for a specific stage.
   */
  export interface Schema$StagePerformanceChangeInsight {
    /**
     * Output only. Input data change insight of the query stage.
     */
    inputDataChange?: Schema$InputDataChange;
    /**
     * Output only. The stage id that the insight mapped to.
     */
    stageId?: string | null;
  }
  /**
   * Standalone performance insights for a specific stage.
   */
  export interface Schema$StagePerformanceStandaloneInsight {
    /**
     * Output only. If present, the stage had the following reasons for being disqualified from BI Engine execution.
     */
    biEngineReasons?: Schema$BiEngineReason[];
    /**
     * Output only. High cardinality joins in the stage.
     */
    highCardinalityJoins?: Schema$HighCardinalityJoin[];
    /**
     * Output only. True if the stage has insufficient shuffle quota.
     */
    insufficientShuffleQuota?: boolean | null;
    /**
     * Output only. True if the stage has a slot contention issue.
     */
    slotContention?: boolean | null;
    /**
     * Output only. The stage id that the insight mapped to.
     */
    stageId?: string | null;
  }
  /**
   * The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"\}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"\} \} * STRUCT\>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"\} \}, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"\} \} \} ] \} \}
   */
  export interface Schema$StandardSqlDataType {
    /**
     * The type of the array's elements, if type_kind = "ARRAY".
     */
    arrayElementType?: Schema$StandardSqlDataType;
    /**
     * The type of the range's elements, if type_kind = "RANGE".
     */
    rangeElementType?: Schema$StandardSqlDataType;
    /**
     * The fields of this struct, in order, if type_kind = "STRUCT".
     */
    structType?: Schema$StandardSqlStructType;
    /**
     * Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY").
     */
    typeKind?: string | null;
  }
  /**
   * A field or a column.
   */
  export interface Schema$StandardSqlField {
    /**
     * Optional. The name of this field. Can be absent for struct fields.
     */
    name?: string | null;
    /**
     * Optional. The type of this parameter. Absent if not explicitly specified (e.g., CREATE FUNCTION statement can omit the return type; in this case the output parameter does not have this "type" field).
     */
    type?: Schema$StandardSqlDataType;
  }
  /**
   * The representation of a SQL STRUCT type.
   */
  export interface Schema$StandardSqlStructType {
    /**
     * Fields within the struct.
     */
    fields?: Schema$StandardSqlField[];
  }
  /**
   * A table type
   */
  export interface Schema$StandardSqlTableType {
    /**
     * The columns in this table type
     */
    columns?: Schema$StandardSqlField[];
  }
  export interface Schema$Streamingbuffer {
    /**
     * Output only. A lower-bound estimate of the number of bytes currently in the streaming buffer.
     */
    estimatedBytes?: string | null;
    /**
     * Output only. A lower-bound estimate of the number of rows currently in the streaming buffer.
     */
    estimatedRows?: string | null;
    /**
     * Output only. Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.
     */
    oldestEntryTime?: string | null;
  }
  /**
   * Search space for string and enum.
   */
  export interface Schema$StringHparamSearchSpace {
    /**
     * Canididates for the string or enum parameter in lower case.
     */
    candidates?: string[] | null;
  }
  /**
   * System variables given to a query.
   */
  export interface Schema$SystemVariables {
    /**
     * Output only. Data type for each system variable.
     */
    types?: {[key: string]: Schema$StandardSqlDataType} | null;
    /**
     * Output only. Value for each system variable.
     */
    values?: {[key: string]: any} | null;
  }
  export interface Schema$Table {
    /**
     * Optional. Specifies the configuration of a BigLake managed table.
     */
    biglakeConfiguration?: Schema$BigLakeConfiguration;
    /**
     * Output only. Contains information about the clone. This value is set via the clone operation.
     */
    cloneDefinition?: Schema$CloneDefinition;
    /**
     * Clustering specification for the table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
     */
    clustering?: Schema$Clustering;
    /**
     * Output only. The time when this table was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * Optional. Defines the default collation specification of new STRING fields in the table. During table creation or update, if a STRING field is added to this table without explicit collation specified, then the table inherits the table default collation. A change to this field affects only fields added afterwards, and does not alter the existing fields. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
     */
    defaultCollation?: string | null;
    /**
     * Optional. Defines the default rounding mode specification of new decimal fields (NUMERIC OR BIGNUMERIC) in the table. During table creation or update, if a decimal field is added to this table without an explicit rounding mode specified, then the field inherits the table default rounding mode. Changing this field doesn't affect existing fields.
     */
    defaultRoundingMode?: string | null;
    /**
     * Optional. A user-friendly description of this table.
     */
    description?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    encryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Optional. The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
     */
    expirationTime?: string | null;
    /**
     * Optional. Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
     */
    externalDataConfiguration?: Schema$ExternalDataConfiguration;
    /**
     * Optional. A descriptive name for this table.
     */
    friendlyName?: string | null;
    /**
     * Output only. An opaque ID uniquely identifying the table.
     */
    id?: string | null;
    /**
     * The type of resource ID.
     */
    kind?: string | null;
    /**
     * The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The time when this table was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Output only. The geographic location where the table resides. This value is inherited from the dataset.
     */
    location?: string | null;
    /**
     * Optional. The materialized view definition.
     */
    materializedView?: Schema$MaterializedViewDefinition;
    /**
     * Output only. The materialized view status.
     */
    materializedViewStatus?: Schema$MaterializedViewStatus;
    /**
     * Optional. The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of sql IntervalValue type.
     */
    maxStaleness?: string | null;
    /**
     * Deprecated.
     */
    model?: Schema$ModelDefinition;
    /**
     * Output only. Number of logical bytes that are less than 90 days old.
     */
    numActiveLogicalBytes?: string | null;
    /**
     * Output only. Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numActivePhysicalBytes?: string | null;
    /**
     * Output only. The size of this table in logical bytes, excluding any data in the streaming buffer.
     */
    numBytes?: string | null;
    /**
     * Output only. The number of logical bytes in the table that are considered "long-term storage".
     */
    numLongTermBytes?: string | null;
    /**
     * Output only. Number of logical bytes that are more than 90 days old.
     */
    numLongTermLogicalBytes?: string | null;
    /**
     * Output only. Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numLongTermPhysicalBytes?: string | null;
    /**
     * Output only. The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numPartitions?: string | null;
    /**
     * Output only. The physical size of this table in bytes. This includes storage used for time travel.
     */
    numPhysicalBytes?: string | null;
    /**
     * Output only. The number of rows of data in this table, excluding any data in the streaming buffer.
     */
    numRows?: string | null;
    /**
     * Output only. Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numTimeTravelPhysicalBytes?: string | null;
    /**
     * Output only. Total number of logical bytes in the table or materialized view.
     */
    numTotalLogicalBytes?: string | null;
    /**
     * Output only. The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numTotalPhysicalBytes?: string | null;
    /**
     * If specified, configures range partitioning for this table.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * Optional. Output only. Table references of all replicas currently active on the table.
     */
    replicas?: Schema$TableReference[];
    /**
     * Optional. If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
     */
    requirePartitionFilter?: boolean | null;
    /**
     * [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production".
     */
    resourceTags?: {[key: string]: string} | null;
    /**
     * Optional. Describes the schema of this table.
     */
    schema?: Schema$TableSchema;
    /**
     * Output only. A URL that can be used to access this resource again.
     */
    selfLink?: string | null;
    /**
     * Output only. Contains information about the snapshot. This value is set via snapshot creation.
     */
    snapshotDefinition?: Schema$SnapshotDefinition;
    /**
     * Output only. Contains information regarding this table's streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer.
     */
    streamingBuffer?: Schema$Streamingbuffer;
    /**
     * Optional. Tables Primary Key and Foreign Key information
     */
    tableConstraints?: Schema$TableConstraints;
    /**
     * Required. Reference describing the ID of this table.
     */
    tableReference?: Schema$TableReference;
    /**
     * Optional. Table replication info for table created `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`
     */
    tableReplicationInfo?: Schema$TableReplicationInfo;
    /**
     * If specified, configures time-based partitioning for this table.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * Output only. Describes the table type. The following values are supported: * `TABLE`: A normal BigQuery table. * `VIEW`: A virtual table defined by a SQL query. * `EXTERNAL`: A table that references data stored in an external storage system, such as Google Cloud Storage. * `MATERIALIZED_VIEW`: A precomputed view defined by a SQL query. * `SNAPSHOT`: An immutable BigQuery table that preserves the contents of a base table at a particular time. See additional information on [table snapshots](/bigquery/docs/table-snapshots-intro). The default value is `TABLE`.
     */
    type?: string | null;
    /**
     * Optional. The view definition.
     */
    view?: Schema$ViewDefinition;
  }
  export interface Schema$TableCell {
    v?: any | null;
  }
  /**
   * The TableConstraints defines the primary key and foreign key.
   */
  export interface Schema$TableConstraints {
    /**
     * Optional. Present only if the table has a foreign key. The foreign key is not enforced.
     */
    foreignKeys?: Array<{
      columnReferences?: Array<{
        referencedColumn?: string;
        referencingColumn?: string;
      }>;
      name?: string;
      referencedTable?: {
        datasetId?: string;
        projectId?: string;
        tableId?: string;
      };
    }> | null;
    /**
     * Represents the primary key constraint on a table's columns.
     */
    primaryKey?: {columns?: string[]} | null;
  }
  /**
   * Request for sending a single streaming insert.
   */
  export interface Schema$TableDataInsertAllRequest {
    /**
     * Optional. Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * Optional. The resource type of the response. The value is not checked at the backend. Historically, it has been set to "bigquery#tableDataInsertAllRequest" but you are not required to set it.
     */
    kind?: string | null;
    rows?: Array<{insertId?: string; json?: Schema$JsonObject}> | null;
    /**
     * Optional. Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
     */
    skipInvalidRows?: boolean | null;
    /**
     * Optional. If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination\}{templateSuffix\}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
     */
    templateSuffix?: string | null;
    /**
     * Optional. Unique request trace id. Used for debugging purposes only. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended.
     */
    traceId?: string | null;
  }
  /**
   * Describes the format of a streaming insert response.
   */
  export interface Schema$TableDataInsertAllResponse {
    /**
     * Describes specific errors encountered while processing the request.
     */
    insertErrors?: Array<{errors?: Schema$ErrorProto[]; index?: number}> | null;
    /**
     * Returns "bigquery#tableDataInsertAllResponse".
     */
    kind?: string | null;
  }
  export interface Schema$TableDataList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
     */
    pageToken?: string | null;
    /**
     * Rows of results.
     */
    rows?: Schema$TableRow[];
    /**
     * Total rows of the entire table. In order to show default value 0 we have to present it as string.
     */
    totalRows?: string | null;
  }
  /**
   * A field in TableSchema
   */
  export interface Schema$TableFieldSchema {
    /**
     * Deprecated.
     */
    categories?: {names?: string[]} | null;
    /**
     * Optional. Field collation can be set only when the type of field is STRING. The following values are supported: * 'und:ci': undetermined locale, case insensitive. * '': empty string. Default to case-sensitive behavior.
     */
    collation?: string | null;
    /**
     * Optional. A SQL expression to specify the [default value] (https://cloud.google.com/bigquery/docs/default-values) for this field.
     */
    defaultValueExpression?: string | null;
    /**
     * Optional. The field description. The maximum length is 1,024 characters.
     */
    description?: string | null;
    /**
     * Optional. Describes the nested schema fields if the type property is set to RECORD.
     */
    fields?: Schema$TableFieldSchema[];
    /**
     * Optional. Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES".
     */
    maxLength?: string | null;
    /**
     * Optional. The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
     */
    mode?: string | null;
    /**
     * Required. The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters.
     */
    name?: string | null;
    /**
     * Optional. The policy tags attached to this field, used for field-level access control. If not set, defaults to empty policy_tags.
     */
    policyTags?: {names?: string[]} | null;
    /**
     * Optional. Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: * Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] * Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: * If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. * If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): * If type = "NUMERIC": 1 ≤ precision ≤ 29. * If type = "BIGNUMERIC": 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid.
     */
    precision?: string | null;
    /**
     * Represents the type of a field element.
     */
    rangeElementType?: {type?: string} | null;
    /**
     * Optional. Specifies the rounding mode to be used when storing values of NUMERIC and BIGNUMERIC type.
     */
    roundingMode?: string | null;
    /**
     * Optional. See documentation for precision.
     */
    scale?: string | null;
    /**
     * Required. The field data type. Possible values include: * STRING * BYTES * INTEGER (or INT64) * FLOAT (or FLOAT64) * BOOLEAN (or BOOL) * TIMESTAMP * DATE * TIME * DATETIME * GEOGRAPHY * NUMERIC * BIGNUMERIC * JSON * RECORD (or STRUCT) Use of RECORD/STRUCT indicates that the field contains a nested schema.
     */
    type?: string | null;
  }
  /**
   * Partial projection of the metadata for a given table in a list response.
   */
  export interface Schema$TableList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * The type of list.
     */
    kind?: string | null;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Tables in the requested dataset.
     */
    tables?: Array<{
      clustering?: Schema$Clustering;
      creationTime?: string;
      expirationTime?: string;
      friendlyName?: string;
      id?: string;
      kind?: string;
      labels?: {[key: string]: string};
      rangePartitioning?: Schema$RangePartitioning;
      requirePartitionFilter?: boolean;
      tableReference?: Schema$TableReference;
      timePartitioning?: Schema$TimePartitioning;
      type?: string;
      view?: {privacyPolicy?: Schema$PrivacyPolicy; useLegacySql?: boolean};
    }> | null;
    /**
     * The total number of tables in the dataset.
     */
    totalItems?: number | null;
  }
  /**
   * Table level detail on the usage of metadata caching. Only set for Metadata caching eligible tables referenced in the query.
   */
  export interface Schema$TableMetadataCacheUsage {
    /**
     * Free form human-readable reason metadata caching was unused for the job.
     */
    explanation?: string | null;
    /**
     * Metadata caching eligible table referenced in the query.
     */
    tableReference?: Schema$TableReference;
    /**
     * [Table type](/bigquery/docs/reference/rest/v2/tables#Table.FIELDS.type).
     */
    tableType?: string | null;
    /**
     * Reason for not using metadata caching for the table.
     */
    unusedReason?: string | null;
  }
  export interface Schema$TableReference {
    /**
     * Required. The ID of the dataset containing this table.
     */
    datasetId?: string | null;
    /**
     * Required. The ID of the project containing this table.
     */
    projectId?: string | null;
    /**
     * Required. The ID of the table. The ID can contain Unicode characters in category L (letter), M (mark), N (number), Pc (connector, including underscore), Pd (dash), and Zs (space). For more information, see [General Category](https://wikipedia.org/wiki/Unicode_character_property#General_Category). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as `sample_table$20190123`.
     */
    tableId?: string | null;
  }
  /**
   * Replication info of a table created using `AS REPLICA` DDL like: `CREATE MATERIALIZED VIEW mv1 AS REPLICA OF src_mv`
   */
  export interface Schema$TableReplicationInfo {
    /**
     * Optional. Output only. If source is a materialized view, this field signifies the last refresh time of the source.
     */
    replicatedSourceLastRefreshTime?: string | null;
    /**
     * Optional. Output only. Replication error that will permanently stopped table replication.
     */
    replicationError?: Schema$ErrorProto;
    /**
     * Required. Specifies the interval at which the source table is polled for updates.
     */
    replicationIntervalMs?: string | null;
    /**
     * Optional. Output only. Replication status of configured replication.
     */
    replicationStatus?: string | null;
    /**
     * Required. Source table reference that is replicated.
     */
    sourceTable?: Schema$TableReference;
  }
  export interface Schema$TableRow {
    /**
     * Represents a single row in the result set, consisting of one or more fields.
     */
    f?: Schema$TableCell[];
  }
  /**
   * Schema of a table
   */
  export interface Schema$TableSchema {
    /**
     * Describes the fields in a table.
     */
    fields?: Schema$TableFieldSchema[];
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
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
  export interface Schema$TimePartitioning {
    /**
     * Optional. Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
     */
    expirationMs?: string | null;
    /**
     * Optional. If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. A wrapper is used here because an empty string is an invalid value.
     */
    field?: string | null;
    /**
     * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. This field is deprecated; please set the field with the same name on the table itself instead. This field needs a wrapper because we want to output the default value, false, if the user explicitly set it.
     */
    requirePartitionFilter?: boolean | null;
    /**
     * Required. The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
     */
    type?: string | null;
  }
  /**
   * Options used in model training.
   */
  export interface Schema$TrainingOptions {
    /**
     * Activation function of the neural nets.
     */
    activationFn?: string | null;
    /**
     * If true, detect step changes and make data adjustment in the input time series.
     */
    adjustStepChanges?: boolean | null;
    /**
     * Whether to use approximate feature contribution method in XGBoost model explanation for global explain.
     */
    approxGlobalFeatureContrib?: boolean | null;
    /**
     * Whether to enable auto ARIMA or not.
     */
    autoArima?: boolean | null;
    /**
     * The max value of the sum of non-seasonal p and q.
     */
    autoArimaMaxOrder?: string | null;
    /**
     * The min value of the sum of non-seasonal p and q.
     */
    autoArimaMinOrder?: string | null;
    /**
     * Whether to calculate class weights automatically based on the popularity of each label.
     */
    autoClassWeights?: boolean | null;
    /**
     * Batch size for dnn models.
     */
    batchSize?: string | null;
    /**
     * Booster type for boosted tree models.
     */
    boosterType?: string | null;
    /**
     * Budget in hours for AutoML training.
     */
    budgetHours?: number | null;
    /**
     * Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models.
     */
    calculatePValues?: boolean | null;
    /**
     * Categorical feature encoding method.
     */
    categoryEncodingMethod?: string | null;
    /**
     * If true, clean spikes and dips in the input time series.
     */
    cleanSpikesAndDips?: boolean | null;
    /**
     * Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace.
     */
    colorSpace?: string | null;
    /**
     * Subsample ratio of columns for each level for boosted tree models.
     */
    colsampleBylevel?: number | null;
    /**
     * Subsample ratio of columns for each node(split) for boosted tree models.
     */
    colsampleBynode?: number | null;
    /**
     * Subsample ratio of columns when constructing each tree for boosted tree models.
     */
    colsampleBytree?: number | null;
    /**
     * Type of normalization algorithm for boosted tree models using dart booster.
     */
    dartNormalizeType?: string | null;
    /**
     * The data frequency of a time series.
     */
    dataFrequency?: string | null;
    /**
     * The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
     */
    dataSplitColumn?: string | null;
    /**
     * The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
     */
    dataSplitEvalFraction?: number | null;
    /**
     * The data split type for training and evaluation, e.g. RANDOM.
     */
    dataSplitMethod?: string | null;
    /**
     * If true, perform decompose time series and save the results.
     */
    decomposeTimeSeries?: boolean | null;
    /**
     * Distance type for clustering models.
     */
    distanceType?: string | null;
    /**
     * Dropout probability for dnn models.
     */
    dropout?: number | null;
    /**
     * Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
     */
    earlyStop?: boolean | null;
    /**
     * If true, enable global explanation during training.
     */
    enableGlobalExplain?: boolean | null;
    /**
     * Feedback type that specifies which algorithm to run for matrix factorization.
     */
    feedbackType?: string | null;
    /**
     * Whether the model should include intercept during model training.
     */
    fitIntercept?: boolean | null;
    /**
     * Hidden units for dnn models.
     */
    hiddenUnits?: string[] | null;
    /**
     * The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled.
     */
    holidayRegion?: string | null;
    /**
     * A list of geographical regions that are used for time series modeling.
     */
    holidayRegions?: string[] | null;
    /**
     * The number of periods ahead that need to be forecasted.
     */
    horizon?: string | null;
    /**
     * The target evaluation metrics to optimize the hyperparameters for.
     */
    hparamTuningObjectives?: string[] | null;
    /**
     * Include drift when fitting an ARIMA model.
     */
    includeDrift?: boolean | null;
    /**
     * Specifies the initial learning rate for the line search learn rate strategy.
     */
    initialLearnRate?: number | null;
    /**
     * Name of input label columns in training data.
     */
    inputLabelColumns?: string[] | null;
    /**
     * Name of the instance weight column for training data. This column isn't be used as a feature.
     */
    instanceWeightColumn?: string | null;
    /**
     * Number of integral steps for the integrated gradients explain method.
     */
    integratedGradientsNumSteps?: string | null;
    /**
     * Item column specified for matrix factorization models.
     */
    itemColumn?: string | null;
    /**
     * The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
     */
    kmeansInitializationColumn?: string | null;
    /**
     * The method used to initialize the centroids for kmeans algorithm.
     */
    kmeansInitializationMethod?: string | null;
    /**
     * L1 regularization coefficient to activations.
     */
    l1RegActivation?: number | null;
    /**
     * L1 regularization coefficient.
     */
    l1Regularization?: number | null;
    /**
     * L2 regularization coefficient.
     */
    l2Regularization?: number | null;
    /**
     * Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
     */
    labelClassWeights?: {[key: string]: number} | null;
    /**
     * Learning rate in training. Used only for iterative training algorithms.
     */
    learnRate?: number | null;
    /**
     * The strategy to determine learn rate for the current iteration.
     */
    learnRateStrategy?: string | null;
    /**
     * Type of loss function used during training run.
     */
    lossType?: string | null;
    /**
     * The maximum number of iterations in training. Used only for iterative training algorithms.
     */
    maxIterations?: string | null;
    /**
     * Maximum number of trials to run in parallel.
     */
    maxParallelTrials?: string | null;
    /**
     * The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options.
     */
    maxTimeSeriesLength?: string | null;
    /**
     * Maximum depth of a tree for boosted tree models.
     */
    maxTreeDepth?: string | null;
    /**
     * When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms.
     */
    minRelativeProgress?: number | null;
    /**
     * Minimum split loss for boosted tree models.
     */
    minSplitLoss?: number | null;
    /**
     * The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points.
     */
    minTimeSeriesLength?: string | null;
    /**
     * Minimum sum of instance weight needed in a child for boosted tree models.
     */
    minTreeChildWeight?: string | null;
    /**
     * The model registry.
     */
    modelRegistry?: string | null;
    /**
     * Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
     */
    modelUri?: string | null;
    /**
     * A specification of the non-seasonal part of the ARIMA model: the three components (p, d, q) are the AR order, the degree of differencing, and the MA order.
     */
    nonSeasonalOrder?: Schema$ArimaOrder;
    /**
     * Number of clusters for clustering models.
     */
    numClusters?: string | null;
    /**
     * Num factors specified for matrix factorization models.
     */
    numFactors?: string | null;
    /**
     * Number of parallel trees constructed during each iteration for boosted tree models.
     */
    numParallelTree?: string | null;
    /**
     * Number of principal components to keep in the PCA model. Must be <= the number of features.
     */
    numPrincipalComponents?: string | null;
    /**
     * Number of trials to run this hyperparameter tuning job.
     */
    numTrials?: string | null;
    /**
     * Optimization strategy for training linear regression models.
     */
    optimizationStrategy?: string | null;
    /**
     * Optimizer used for training the neural nets.
     */
    optimizer?: string | null;
    /**
     * The minimum ratio of cumulative explained variance that needs to be given by the PCA model.
     */
    pcaExplainedVarianceRatio?: number | null;
    /**
     * The solver for PCA.
     */
    pcaSolver?: string | null;
    /**
     * Number of paths for the sampled Shapley explain method.
     */
    sampledShapleyNumPaths?: string | null;
    /**
     * If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA.
     */
    scaleFeatures?: boolean | null;
    /**
     * Whether to standardize numerical features. Default to true.
     */
    standardizeFeatures?: boolean | null;
    /**
     * Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models.
     */
    subsample?: number | null;
    /**
     * Based on the selected TF version, the corresponding docker image is used to train external models.
     */
    tfVersion?: string | null;
    /**
     * Column to be designated as time series data for ARIMA model.
     */
    timeSeriesDataColumn?: string | null;
    /**
     * The time series id column that was used during ARIMA model training.
     */
    timeSeriesIdColumn?: string | null;
    /**
     * The time series id columns that were used during ARIMA model training.
     */
    timeSeriesIdColumns?: string[] | null;
    /**
     * The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`.
     */
    timeSeriesLengthFraction?: number | null;
    /**
     * Column to be designated as time series timestamp for ARIMA model.
     */
    timeSeriesTimestampColumn?: string | null;
    /**
     * Tree construction algorithm for boosted tree models.
     */
    treeMethod?: string | null;
    /**
     * Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied.
     */
    trendSmoothingWindowSize?: string | null;
    /**
     * User column specified for matrix factorization models.
     */
    userColumn?: string | null;
    /**
     * The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model.
     */
    vertexAiModelVersionAliases?: string[] | null;
    /**
     * Hyperparameter for matrix factoration when implicit feedback type is specified.
     */
    walsAlpha?: number | null;
    /**
     * Whether to train a model from the last checkpoint.
     */
    warmStart?: boolean | null;
    /**
     * User-selected XGBoost versions for training of XGBoost models.
     */
    xgboostVersion?: string | null;
  }
  /**
   * Information about a single training query run for the model.
   */
  export interface Schema$TrainingRun {
    /**
     * Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only.
     */
    classLevelGlobalExplanations?: Schema$GlobalExplanation[];
    /**
     * Output only. Data split result of the training run. Only set when the input data is actually split.
     */
    dataSplitResult?: Schema$DataSplitResult;
    /**
     * Output only. The evaluation metrics over training/eval data that were computed at the end of training.
     */
    evaluationMetrics?: Schema$EvaluationMetrics;
    /**
     * Output only. Global explanation contains the explanation of top features on the model level. Applies to both regression and classification models.
     */
    modelLevelGlobalExplanation?: Schema$GlobalExplanation;
    /**
     * Output only. Output of each iteration run, results.size() <= max_iterations.
     */
    results?: Schema$IterationResult[];
    /**
     * Output only. The start time of this training run.
     */
    startTime?: string | null;
    /**
     * Output only. Options that were used for this training run, includes user specified and default options that were used.
     */
    trainingOptions?: Schema$TrainingOptions;
    /**
     * Output only. The start time of this training run, in milliseconds since epoch.
     */
    trainingStartTime?: string | null;
    /**
     * The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
     */
    vertexAiModelId?: string | null;
    /**
     * Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run.
     */
    vertexAiModelVersion?: string | null;
  }
  /**
   * [Alpha] Information of a multi-statement transaction.
   */
  export interface Schema$TransactionInfo {
    /**
     * Output only. [Alpha] Id of the transaction.
     */
    transactionId?: string | null;
  }
  /**
   * Information about a single transform column.
   */
  export interface Schema$TransformColumn {
    /**
     * Output only. Name of the column.
     */
    name?: string | null;
    /**
     * Output only. The SQL expression used in the column transform.
     */
    transformSql?: string | null;
    /**
     * Output only. Data type of the column after the transform.
     */
    type?: Schema$StandardSqlDataType;
  }
  /**
   * Request format for undeleting a dataset.
   */
  export interface Schema$UndeleteDatasetRequest {
    /**
     * Optional. The exact time when the dataset was deleted. If not specified, it will undelete the most recently deleted version.
     */
    deletionTime?: string | null;
  }
  /**
   *  This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of GoogleSQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions
   */
  export interface Schema$UserDefinedFunctionResource {
    /**
     * [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
     */
    inlineCode?: string | null;
    /**
     * [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
     */
    resourceUri?: string | null;
  }
  /**
   * Statistics for a vector search query. Populated as part of JobStatistics2.
   */
  export interface Schema$VectorSearchStatistics {
    /**
     * When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the vector search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated.
     */
    indexUnusedReasons?: Schema$IndexUnusedReason[];
    /**
     * Specifies the index usage mode for the query.
     */
    indexUsageMode?: string | null;
  }
  /**
   * Describes the definition of a logical view.
   */
  export interface Schema$ViewDefinition {
    /**
     * Optional. Specifices the privacy policy for the view.
     */
    privacyPolicy?: Schema$PrivacyPolicy;
    /**
     * Required. A query that BigQuery executes when the view is referenced.
     */
    query?: string | null;
    /**
     * True if the column names are explicitly specified. For example by using the 'CREATE VIEW v(c1, c2) AS ...' syntax. Can only be set for GoogleSQL views.
     */
    useExplicitColumnNames?: boolean | null;
    /**
     * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's GoogleSQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. A wrapper is used here because the default value is True.
     */
    useLegacySql?: boolean | null;
    /**
     * Describes user-defined function resources used in the query.
     */
    userDefinedFunctionResources?: Schema$UserDefinedFunctionResource[];
  }

  export class Resource$Datasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Datasets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Datasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Datasets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Datasets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Datasets$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
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
     * Returns the dataset specified by datasetID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Datasets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Datasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    get(
      params: Params$Resource$Datasets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Datasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(
      params: Params$Resource$Datasets$Get,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datasets$Get
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Creates a new empty dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Datasets$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Datasets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    insert(
      params: Params$Resource$Datasets$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Datasets$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    insert(
      params: Params$Resource$Datasets$Insert,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Dataset>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Datasets$Insert
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/datasets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Lists all datasets in the specified project to which the user has been granted the READER dataset role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Datasets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Datasets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatasetList>;
    list(
      params: Params$Resource$Datasets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Datasets$List,
      options: MethodOptions | BodyResponseCallback<Schema$DatasetList>,
      callback: BodyResponseCallback<Schema$DatasetList>
    ): void;
    list(
      params: Params$Resource$Datasets$List,
      callback: BodyResponseCallback<Schema$DatasetList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DatasetList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datasets$List
        | BodyResponseCallback<Schema$DatasetList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DatasetList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DatasetList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DatasetList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/datasets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatasetList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DatasetList>(parameters);
      }
    }

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports RFC5789 patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Datasets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Datasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    patch(
      params: Params$Resource$Datasets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Datasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(
      params: Params$Resource$Datasets$Patch,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Datasets$Patch
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Undeletes a dataset which is within time travel window based on datasetId. If a time is specified, the dataset version deleted at that time is undeleted, else the last live version is undeleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    undelete(
      params: Params$Resource$Datasets$Undelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    undelete(
      params?: Params$Resource$Datasets$Undelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    undelete(
      params: Params$Resource$Datasets$Undelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    undelete(
      params: Params$Resource$Datasets$Undelete,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    undelete(
      params: Params$Resource$Datasets$Undelete,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    undelete(callback: BodyResponseCallback<Schema$Dataset>): void;
    undelete(
      paramsOrCallback?:
        | Params$Resource$Datasets$Undelete
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Datasets$Undelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Undelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}:undelete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Datasets$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Datasets$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    update(
      params: Params$Resource$Datasets$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Datasets$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    update(
      params: Params$Resource$Datasets$Update,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    update(callback: BodyResponseCallback<Schema$Dataset>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Datasets$Update
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Dataset>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Dataset> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }
  }

  export interface Params$Resource$Datasets$Delete extends StandardParameters {
    /**
     * Required. Dataset ID of dataset being deleted
     */
    datasetId?: string;
    /**
     * If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     */
    deleteContents?: boolean;
    /**
     * Required. Project ID of the dataset being deleted
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Get extends StandardParameters {
    /**
     * Required. Dataset ID of the requested dataset
     */
    datasetId?: string;
    /**
     * Optional. Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned.
     */
    datasetView?: string;
    /**
     * Required. Project ID of the requested dataset
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Insert extends StandardParameters {
    /**
     * Required. Project ID of the new dataset
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Datasets$List extends StandardParameters {
    /**
     * Whether to list all datasets, including hidden ones
     */
    all?: boolean;
    /**
     * An expression for filtering the results of the request by label. The syntax is \"labels.<name\>[:<value\>]\". Multiple filters can be ANDed together by connecting with a space. Example: \"labels.department:receiving labels.active\". See [Filtering datasets using labels](/bigquery/docs/labeling-datasets#filtering_datasets_using_labels) for details.
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the datasets to be listed
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Patch extends StandardParameters {
    /**
     * Required. Dataset ID of the dataset being updated
     */
    datasetId?: string;
    /**
     * Required. Project ID of the dataset being updated
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Datasets$Undelete
    extends StandardParameters {
    /**
     * Required. Dataset ID of dataset being deleted
     */
    datasetId?: string;
    /**
     * Required. Project ID of the dataset to be undeleted
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UndeleteDatasetRequest;
  }
  export interface Params$Resource$Datasets$Update extends StandardParameters {
    /**
     * Required. Dataset ID of the dataset being updated
     */
    datasetId?: string;
    /**
     * Required. Project ID of the dataset being updated
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }

  export class Resource$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Jobs$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$JobCancelResponse>;
    cancel(
      params: Params$Resource$Jobs$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Jobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$JobCancelResponse>,
      callback: BodyResponseCallback<Schema$JobCancelResponse>
    ): void;
    cancel(
      params: Params$Resource$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$JobCancelResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$JobCancelResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Jobs$Cancel
        | BodyResponseCallback<Schema$JobCancelResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$JobCancelResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$JobCancelResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$JobCancelResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/jobs/{+jobId}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$JobCancelResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$JobCancelResponse>(parameters);
      }
    }

    /**
     * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Jobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Jobs$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Jobs$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/jobs/{+jobId}/delete'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
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
     * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Jobs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Jobs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Get
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/jobs/{+jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * RPC to get the results of a query job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getQueryResults(
      params?: Params$Resource$Jobs$Getqueryresults,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetQueryResultsResponse>;
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetQueryResultsResponse>,
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      paramsOrCallback?:
        | Params$Resource$Jobs$Getqueryresults
        | BodyResponseCallback<Schema$GetQueryResultsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetQueryResultsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetQueryResultsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetQueryResultsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Jobs$Getqueryresults;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Getqueryresults;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/queries/{+jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetQueryResultsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetQueryResultsResponse>(parameters);
      }
    }

    /**
     * Starts a new asynchronous job. This API has two different kinds of endpoint URIs, as this method supports a variety of use cases. * The *Metadata* URI is used for most interactions, as it accepts the job configuration directly. * The *Upload* URI is ONLY for the case when you're sending both a load job configuration and a data stream together. In this case, the Upload URI accepts the job configuration and the data as two distinct multipart MIME parts.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Jobs$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Jobs$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    insert(
      params: Params$Resource$Jobs$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Jobs$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    insert(
      params: Params$Resource$Jobs$Insert,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Job>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Jobs$Insert
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Job>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Job> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects/{+projectId}/jobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/bigquery/v2/projects/{+projectId}/jobs'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Jobs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$JobList>;
    list(
      params: Params$Resource$Jobs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$JobList>,
      callback: BodyResponseCallback<Schema$JobList>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      callback: BodyResponseCallback<Schema$JobList>
    ): void;
    list(callback: BodyResponseCallback<Schema$JobList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$List
        | BodyResponseCallback<Schema$JobList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$JobList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$JobList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$JobList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects/{+projectId}/jobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$JobList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$JobList>(parameters);
      }
    }

    /**
     * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    query(
      params: Params$Resource$Jobs$Query,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    query(
      params?: Params$Resource$Jobs$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryResponse>;
    query(
      params: Params$Resource$Jobs$Query,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    query(
      params: Params$Resource$Jobs$Query,
      options: MethodOptions | BodyResponseCallback<Schema$QueryResponse>,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(
      params: Params$Resource$Jobs$Query,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(callback: BodyResponseCallback<Schema$QueryResponse>): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Jobs$Query
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$QueryResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$QueryResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/queries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$QueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Cancel extends StandardParameters {
    /**
     * Required. Job ID of the job to cancel
     */
    jobId?: string;
    /**
     * The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * Required. Project ID of the job to cancel
     */
    projectId?: string;
  }
  export interface Params$Resource$Jobs$Delete extends StandardParameters {
    /**
     * Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.
     */
    jobId?: string;
    /**
     * The geographic location of the job. Required. See details at: https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * Required. Project ID of the job for which metadata is to be deleted.
     */
    projectId?: string;
  }
  export interface Params$Resource$Jobs$Get extends StandardParameters {
    /**
     * Required. Job ID of the requested job.
     */
    jobId?: string;
    /**
     * The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * Required. Project ID of the requested job.
     */
    projectId?: string;
  }
  export interface Params$Resource$Jobs$Getqueryresults
    extends StandardParameters {
    /**
     * Optional. Output timestamp as usec int64. Default is false.
     */
    'formatOptions.useInt64Timestamp'?: boolean;
    /**
     * Required. Job ID of the query job.
     */
    jobId?: string;
    /**
     * The geographic location of the job. You must specify the location to run the job for the following scenarios: - If the location to run a job is not in the `us` or the `eu` multi-regional location - If the job's location is in a single region (for example, `us-central1`) For more information, see https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * Maximum number of results to read.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. Project ID of the query job.
     */
    projectId?: string;
    /**
     * Zero-based index of the starting row.
     */
    startIndex?: string;
    /**
     * Optional: Specifies the maximum amount of time, in milliseconds, that the client is willing to wait for the query to complete. By default, this limit is 10 seconds (10,000 milliseconds). If the query is complete, the jobComplete field in the response is true. If the query has not yet completed, jobComplete is false. You can request a longer timeout period in the timeoutMs field. However, the call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. If jobComplete is false, you can continue to wait for the query to complete by calling the getQueryResults method until the jobComplete field in the getQueryResults response is true.
     */
    timeoutMs?: number;
  }
  export interface Params$Resource$Jobs$Insert extends StandardParameters {
    /**
     * Project ID of project that will be billed for the job.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;

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
  export interface Params$Resource$Jobs$List extends StandardParameters {
    /**
     * Whether to display jobs owned by all users in the project. Default False.
     */
    allUsers?: boolean;
    /**
     * Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned.
     */
    maxCreationTime?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned.
     */
    minCreationTime?: string;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * If set, show only child jobs of the specified parent. Otherwise, show all top-level jobs.
     */
    parentJobId?: string;
    /**
     * Project ID of the jobs to list.
     */
    projectId?: string;
    /**
     * Restrict information returned to a set of selected fields
     */
    projection?: string;
    /**
     * Filter for job state
     */
    stateFilter?: string[];
  }
  export interface Params$Resource$Jobs$Query extends StandardParameters {
    /**
     * Required. Project ID of the query request.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryRequest;
  }

  export class Resource$Models {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the model specified by modelId from the dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Models$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Models$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Models$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Models$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Models$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Models$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
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
     * Gets the specified model resource by model ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Models$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Models$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Model>;
    get(
      params: Params$Resource$Models$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Models$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    get(
      params: Params$Resource$Models$Get,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    get(callback: BodyResponseCallback<Schema$Model>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Models$Get
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Model> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Model>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Model>(parameters);
      }
    }

    /**
     * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Models$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Models$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListModelsResponse>;
    list(
      params: Params$Resource$Models$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Models$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListModelsResponse>,
      callback: BodyResponseCallback<Schema$ListModelsResponse>
    ): void;
    list(
      params: Params$Resource$Models$List,
      callback: BodyResponseCallback<Schema$ListModelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListModelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Models$List
        | BodyResponseCallback<Schema$ListModelsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListModelsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListModelsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListModelsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListModelsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListModelsResponse>(parameters);
      }
    }

    /**
     * Patch specific fields in the specified model.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Models$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Models$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Model>;
    patch(
      params: Params$Resource$Models$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Models$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    patch(
      params: Params$Resource$Models$Patch,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Model>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Models$Patch
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Model>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Model> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Model>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Model>(parameters);
      }
    }
  }

  export interface Params$Resource$Models$Delete extends StandardParameters {
    /**
     * Required. Dataset ID of the model to delete.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the model to delete.
     */
    modelId?: string;
    /**
     * Required. Project ID of the model to delete.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$Get extends StandardParameters {
    /**
     * Required. Dataset ID of the requested model.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the requested model.
     */
    modelId?: string;
    /**
     * Required. Project ID of the requested model.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$List extends StandardParameters {
    /**
     * Required. Dataset ID of the models to list.
     */
    datasetId?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the models to list.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$Patch extends StandardParameters {
    /**
     * Required. Dataset ID of the model to patch.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the model to patch.
     */
    modelId?: string;
    /**
     * Required. Project ID of the model to patch.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Model;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * RPC to get the service account for a project used for interactions with Google Cloud KMS
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getServiceAccount(
      params?: Params$Resource$Projects$Getserviceaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetServiceAccountResponse>;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetServiceAccountResponse>,
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      paramsOrCallback?:
        | Params$Resource$Projects$Getserviceaccount
        | BodyResponseCallback<Schema$GetServiceAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GetServiceAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GetServiceAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GetServiceAccountResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getserviceaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getserviceaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{+projectId}/serviceAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetServiceAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GetServiceAccountResponse>(parameters);
      }
    }

    /**
     * RPC to list projects to which the user has been granted any project role. Users of this method are encouraged to consider the [Resource Manager](https://cloud.google.com/resource-manager/docs/) API, which provides the underlying data for this method and has more capabilities.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProjectList>;
    list(
      params: Params$Resource$Projects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectList>,
      callback: BodyResponseCallback<Schema$ProjectList>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      callback: BodyResponseCallback<Schema$ProjectList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProjectList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$List
        | BodyResponseCallback<Schema$ProjectList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ProjectList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ProjectList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ProjectList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects').replace(
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
        createAPIRequest<Schema$ProjectList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ProjectList>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getserviceaccount
    extends StandardParameters {
    /**
     * Required. ID of the project.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$List extends StandardParameters {
    /**
     * `maxResults` unset returns all results, up to 50 per page. Additionally, the number of projects in a page may be fewer than `maxResults` because projects are retrieved and then filtered to only projects with the BigQuery API enabled.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results. If not present, no further pages are present.
     */
    pageToken?: string;
  }

  export class Resource$Routines {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the routine specified by routineId from the dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Routines$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Routines$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Routines$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Routines$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Routines$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Routines$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
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
     * Gets the specified routine resource by routine ID.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Routines$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Routines$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    get(
      params: Params$Resource$Routines$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Routines$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    get(
      params: Params$Resource$Routines$Get,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    get(callback: BodyResponseCallback<Schema$Routine>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Routines$Get
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Routine> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }

    /**
     * Creates a new routine in the dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Routines$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Routines$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    insert(
      params: Params$Resource$Routines$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Routines$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    insert(
      params: Params$Resource$Routines$Insert,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Routine>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Routines$Insert
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Routine> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }

    /**
     * Lists all routines in the specified dataset. Requires the READER dataset role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Routines$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Routines$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutinesResponse>;
    list(
      params: Params$Resource$Routines$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Routines$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRoutinesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutinesResponse>
    ): void;
    list(
      params: Params$Resource$Routines$List,
      callback: BodyResponseCallback<Schema$ListRoutinesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutinesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Routines$List
        | BodyResponseCallback<Schema$ListRoutinesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutinesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutinesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRoutinesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutinesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutinesResponse>(parameters);
      }
    }

    /**
     * Updates information in an existing routine. The update method replaces the entire Routine resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Routines$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Routines$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    update(
      params: Params$Resource$Routines$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Routines$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    update(
      params: Params$Resource$Routines$Update,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    update(callback: BodyResponseCallback<Schema$Routine>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Routines$Update
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Routine>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Routine> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }
  }

  export interface Params$Resource$Routines$Delete extends StandardParameters {
    /**
     * Required. Dataset ID of the routine to delete
     */
    datasetId?: string;
    /**
     * Required. Project ID of the routine to delete
     */
    projectId?: string;
    /**
     * Required. Routine ID of the routine to delete
     */
    routineId?: string;
  }
  export interface Params$Resource$Routines$Get extends StandardParameters {
    /**
     * Required. Dataset ID of the requested routine
     */
    datasetId?: string;
    /**
     * Required. Project ID of the requested routine
     */
    projectId?: string;
    /**
     * If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     */
    readMask?: string;
    /**
     * Required. Routine ID of the requested routine
     */
    routineId?: string;
  }
  export interface Params$Resource$Routines$Insert extends StandardParameters {
    /**
     * Required. Dataset ID of the new routine
     */
    datasetId?: string;
    /**
     * Required. Project ID of the new routine
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Routine;
  }
  export interface Params$Resource$Routines$List extends StandardParameters {
    /**
     * Required. Dataset ID of the routines to list
     */
    datasetId?: string;
    /**
     * If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType\}`, where `{RoutineType\}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.
     */
    filter?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the routines to list
     */
    projectId?: string;
    /**
     * If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
     */
    readMask?: string;
  }
  export interface Params$Resource$Routines$Update extends StandardParameters {
    /**
     * Required. Dataset ID of the routine to update
     */
    datasetId?: string;
    /**
     * Required. Project ID of the routine to update
     */
    projectId?: string;
    /**
     * Required. Routine ID of the routine to update
     */
    routineId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Routine;
  }

  export class Resource$Rowaccesspolicies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Rowaccesspolicies$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Rowaccesspolicies$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Rowaccesspolicies$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Rowaccesspolicies$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Rowaccesspolicies$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Rowaccesspolicies$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Rowaccesspolicies$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rowaccesspolicies$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists all row access policies on the specified table.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Rowaccesspolicies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Rowaccesspolicies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRowAccessPoliciesResponse>;
    list(
      params: Params$Resource$Rowaccesspolicies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Rowaccesspolicies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>,
      callback: BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
    ): void;
    list(
      params: Params$Resource$Rowaccesspolicies$List,
      callback: BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Rowaccesspolicies$List
        | BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRowAccessPoliciesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRowAccessPoliciesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Rowaccesspolicies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rowaccesspolicies$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/rowAccessPolicies'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRowAccessPoliciesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRowAccessPoliciesResponse>(
          parameters
        );
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Rowaccesspolicies$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Rowaccesspolicies$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Rowaccesspolicies$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Rowaccesspolicies$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Rowaccesspolicies$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Rowaccesspolicies$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Rowaccesspolicies$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Rowaccesspolicies$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/{+resource}:testIamPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Rowaccesspolicies$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Rowaccesspolicies$List
    extends StandardParameters {
    /**
     * Required. Dataset ID of row access policies to list.
     */
    datasetId?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    pageSize?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. Project ID of the row access policies to list.
     */
    projectId?: string;
    /**
     * Required. Table ID of the table to list row access policies.
     */
    tableId?: string;
  }
  export interface Params$Resource$Rowaccesspolicies$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Tabledata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Streams data into BigQuery one record at a time without needing to run a load job.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insertAll(
      params?: Params$Resource$Tabledata$Insertall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableDataInsertAllResponse>;
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>,
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      paramsOrCallback?:
        | Params$Resource$Tabledata$Insertall
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TableDataInsertAllResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tabledata$Insertall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tabledata$Insertall;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/insertAll'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableDataInsertAllResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TableDataInsertAllResponse>(parameters);
      }
    }

    /**
     * List the content of a table in rows.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tabledata$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tabledata$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableDataList>;
    list(
      params: Params$Resource$Tabledata$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tabledata$List,
      options: MethodOptions | BodyResponseCallback<Schema$TableDataList>,
      callback: BodyResponseCallback<Schema$TableDataList>
    ): void;
    list(
      params: Params$Resource$Tabledata$List,
      callback: BodyResponseCallback<Schema$TableDataList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TableDataList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tabledata$List
        | BodyResponseCallback<Schema$TableDataList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TableDataList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TableDataList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TableDataList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tabledata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tabledata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}/data'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableDataList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TableDataList>(parameters);
      }
    }
  }

  export interface Params$Resource$Tabledata$Insertall
    extends StandardParameters {
    /**
     * Required. Dataset ID of the destination.
     */
    datasetId?: string;
    /**
     * Required. Project ID of the destination.
     */
    projectId?: string;
    /**
     * Required. Table ID of the destination.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TableDataInsertAllRequest;
  }
  export interface Params$Resource$Tabledata$List extends StandardParameters {
    /**
     * Required. Dataset id of the table to list.
     */
    datasetId?: string;
    /**
     * Optional. Output timestamp as usec int64. Default is false.
     */
    'formatOptions.useInt64Timestamp'?: boolean;
    /**
     * Row limit of the table.
     */
    maxResults?: number;
    /**
     * To retrieve the next page of table data, set this field to the string provided in the pageToken field of the response body from your previous call to tabledata.list.
     */
    pageToken?: string;
    /**
     * Required. Project id of the table to list.
     */
    projectId?: string;
    /**
     * Subset of fields to return, supports select into sub fields. Example: selected_fields = "a,e.d.f";
     */
    selectedFields?: string;
    /**
     * Start row index of the table.
     */
    startIndex?: string;
    /**
     * Required. Table id of the table to list.
     */
    tableId?: string;
  }

  export class Resource$Tables {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Tables$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Tables$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Tables$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Tables$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Tables$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tables$Delete
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
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
     * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Tables$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Tables$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    get(
      params: Params$Resource$Tables$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Tables$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(
      params: Params$Resource$Tables$Get,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(callback: BodyResponseCallback<Schema$Table>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tables$Get
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Table> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Tables$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Tables$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Tables$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Tables$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Tables$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Tables$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/{+resource}:getIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Creates a new, empty table in the dataset.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    insert(
      params: Params$Resource$Tables$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Tables$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    insert(
      params: Params$Resource$Tables$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    insert(
      params: Params$Resource$Tables$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    insert(
      params: Params$Resource$Tables$Insert,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Table>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Tables$Insert
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Table> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * Lists all tables in the specified dataset. Requires the READER dataset role.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Tables$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Tables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableList>;
    list(
      params: Params$Resource$Tables$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Tables$List,
      options: MethodOptions | BodyResponseCallback<Schema$TableList>,
      callback: BodyResponseCallback<Schema$TableList>
    ): void;
    list(
      params: Params$Resource$Tables$List,
      callback: BodyResponseCallback<Schema$TableList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TableList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tables$List
        | BodyResponseCallback<Schema$TableList>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TableList>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TableList>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TableList> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableList>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TableList>(parameters);
      }
    }

    /**
     * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports RFC5789 patch semantics.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Tables$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Tables$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    patch(
      params: Params$Resource$Tables$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Tables$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    patch(
      params: Params$Resource$Tables$Patch,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Table>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Tables$Patch
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Table> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Tables$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Tables$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Tables$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Tables$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Tables$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Tables$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/{+resource}:setIamPolicy').replace(
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Tables$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Tables$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Tables$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Tables$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Tables$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Tables$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tables$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/{+resource}:testIamPermissions'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }

    /**
     * Updates information in an existing table. The update method replaces the entire Table resource, whereas the patch method only replaces fields that are provided in the submitted Table resource.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    update(
      params: Params$Resource$Tables$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Tables$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    update(
      params: Params$Resource$Tables$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Tables$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    update(
      params: Params$Resource$Tables$Update,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    update(callback: BodyResponseCallback<Schema$Table>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Tables$Update
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Table>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Table> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/tables/{+tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }
  }

  export interface Params$Resource$Tables$Delete extends StandardParameters {
    /**
     * Required. Dataset ID of the table to delete
     */
    datasetId?: string;
    /**
     * Required. Project ID of the table to delete
     */
    projectId?: string;
    /**
     * Required. Table ID of the table to delete
     */
    tableId?: string;
  }
  export interface Params$Resource$Tables$Get extends StandardParameters {
    /**
     * Required. Dataset ID of the requested table
     */
    datasetId?: string;
    /**
     * Required. Project ID of the requested table
     */
    projectId?: string;
    /**
     * List of table schema fields to return (comma-separated). If unspecified, all fields are returned. A fieldMask cannot be used here because the fields will automatically be converted from camelCase to snake_case and the conversion will fail if there are underscores. Since these are fields in BigQuery table schemas, underscores are allowed.
     */
    selectedFields?: string;
    /**
     * Required. Table ID of the requested table
     */
    tableId?: string;
    /**
     * Optional. Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
     */
    view?: string;
  }
  export interface Params$Resource$Tables$Getiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetIamPolicyRequest;
  }
  export interface Params$Resource$Tables$Insert extends StandardParameters {
    /**
     * Required. Dataset ID of the new table
     */
    datasetId?: string;
    /**
     * Required. Project ID of the new table
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Tables$List extends StandardParameters {
    /**
     * Required. Dataset ID of the tables to list
     */
    datasetId?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the tables to list
     */
    projectId?: string;
  }
  export interface Params$Resource$Tables$Patch extends StandardParameters {
    /**
     * Optional.  When true will autodetect schema, else will keep original schema
     */
    autodetect_schema?: boolean;
    /**
     * Required. Dataset ID of the table to update
     */
    datasetId?: string;
    /**
     * Required. Project ID of the table to update
     */
    projectId?: string;
    /**
     * Required. Table ID of the table to update
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Tables$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Tables$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
  export interface Params$Resource$Tables$Update extends StandardParameters {
    /**
     * Optional.  When true will autodetect schema, else will keep original schema
     */
    autodetect_schema?: boolean;
    /**
     * Required. Dataset ID of the table to update
     */
    datasetId?: string;
    /**
     * Required. Project ID of the table to update
     */
    projectId?: string;
    /**
     * Required. Table ID of the table to update
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
}

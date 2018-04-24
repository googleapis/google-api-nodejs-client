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
// tslint:disable: no-namespace

export namespace genomics_v1 {
  /**
   * Genomics API
   *
   * Upload, process, query, and search Genomics data in the cloud.
   *
   * @example
   * const google = require('googleapis');
   * const genomics = google.genomics('v1');
   *
   * @namespace genomics
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Genomics
   */
  export class Genomics {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    annotations: Resource$Annotations;
    annotationsets: Resource$Annotationsets;
    callsets: Resource$Callsets;
    datasets: Resource$Datasets;
    operations: Resource$Operations;
    readgroupsets: Resource$Readgroupsets;
    reads: Resource$Reads;
    references: Resource$References;
    referencesets: Resource$Referencesets;
    variants: Resource$Variants;
    variantsets: Resource$Variantsets;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.annotations = new Resource$Annotations(this);
      this.annotationsets = new Resource$Annotationsets(this);
      this.callsets = new Resource$Callsets(this);
      this.datasets = new Resource$Datasets(this);
      this.operations = new Resource$Operations(this);
      this.readgroupsets = new Resource$Readgroupsets(this);
      this.reads = new Resource$Reads(this);
      this.references = new Resource$References(this);
      this.referencesets = new Resource$Referencesets(this);
      this.variants = new Resource$Variants(this);
      this.variantsets = new Resource$Variantsets(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * An annotation describes a region of reference genome. The value of an
   * annotation may be one of several canonical types, supplemented by arbitrary
   * info tags. An annotation is not inherently associated with a specific
   * sample or individual (though a client could choose to use annotations in
   * this way). Example canonical annotation types are `GENE` and `VARIANT`.
   */
  export interface Schema$Annotation {
    /**
     * The annotation set to which this annotation belongs.
     */
    annotationSetId: string;
    /**
     * The end position of the range on the reference, 0-based exclusive.
     */
    end: string;
    /**
     * The server-generated annotation ID, unique across all annotations.
     */
    id: string;
    /**
     * A map of additional read alignment information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The display name of this annotation.
     */
    name: string;
    /**
     * The ID of the Google Genomics reference associated with this range.
     */
    referenceId: string;
    /**
     * The display name corresponding to the reference specified by
     * `referenceId`, for example `chr1`, `1`, or `chrX`.
     */
    referenceName: string;
    /**
     * Whether this range refers to the reverse strand, as opposed to the
     * forward strand. Note that regardless of this field, the start/end
     * position of the range always refer to the forward strand.
     */
    reverseStrand: boolean;
    /**
     * The start position of the range on the reference, 0-based inclusive.
     */
    start: string;
    /**
     * A transcript value represents the assertion that a particular region of
     * the reference genome may be transcribed as RNA. An alternative splicing
     * pattern would be represented as a separate transcript object. This field
     * is only set for annotations of type `TRANSCRIPT`.
     */
    transcript: Schema$Transcript;
    /**
     * The data type for this annotation. Must match the containing annotation
     * set&#39;s type.
     */
    type: string;
    /**
     * A variant annotation, which describes the effect of a variant on the
     * genome, the coding sequence, and/or higher level consequences at the
     * organism level e.g. pathogenicity. This field is only set for annotations
     * of type `VARIANT`.
     */
    variant: Schema$VariantAnnotation;
  }
  /**
   * An annotation set is a logical grouping of annotations that share
   * consistent type information and provenance. Examples of annotation sets
   * include &#39;all genes from refseq&#39;, and &#39;all variant annotations
   * from ClinVar&#39;.
   */
  export interface Schema$AnnotationSet {
    /**
     * The dataset to which this annotation set belongs.
     */
    datasetId: string;
    /**
     * The server-generated annotation set ID, unique across all annotation
     * sets.
     */
    id: string;
    /**
     * A map of additional read alignment information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The display name for this annotation set.
     */
    name: string;
    /**
     * The ID of the reference set that defines the coordinate space for this
     * set&#39;s annotations.
     */
    referenceSetId: string;
    /**
     * The source URI describing the file from which this annotation set was
     * generated, if any.
     */
    sourceUri: string;
    /**
     * The type of annotations contained within this set.
     */
    type: string;
  }
  export interface Schema$BatchCreateAnnotationsRequest {
    /**
     * The annotations to be created. At most 4096 can be specified in a single
     * request.
     */
    annotations: Schema$Annotation[];
    /**
     * A unique request ID which enables the server to detect duplicated
     * requests. If provided, duplicated requests will result in the same
     * response; if not provided, duplicated requests may result in duplicated
     * data. For a given annotation set, callers should not reuse `request_id`s
     * when writing different batches of annotations - behavior in this case is
     * undefined. A common approach is to use a UUID. For batch jobs where
     * worker crashes are a possibility, consider using some unique variant of a
     * worker or run ID.
     */
    requestId: string;
  }
  export interface Schema$BatchCreateAnnotationsResponse {
    /**
     * The resulting per-annotation entries, ordered consistently with the
     * original request.
     */
    entries: Schema$Entry[];
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com`
     * or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address
     * that represents a service    account. For example,
     * `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An
     * email address that represents a Google group.    For example,
     * `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name
     * that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`. Required
     */
    role: string;
  }
  /**
   * A call set is a collection of variant calls, typically for one sample. It
   * belongs to a variant set.
   */
  export interface Schema$CallSet {
    /**
     * The date this call set was created in milliseconds from the epoch.
     */
    created: string;
    /**
     * The server-generated call set ID, unique across all call sets.
     */
    id: string;
    /**
     * A map of additional call set information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The call set name.
     */
    name: string;
    /**
     * The sample ID this call set corresponds to.
     */
    sampleId: string;
    /**
     * The IDs of the variant sets this call set belongs to. This field must
     * have exactly length one, as a call set belongs to a single variant set.
     * This field is repeated for compatibility with the [GA4GH 0.5.1
     * API](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variants.avdl#L76).
     */
    variantSetIds: string[];
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A single CIGAR operation.
   */
  export interface Schema$CigarUnit {
    operation: string;
    /**
     * The number of genomic bases that the operation runs for. Required.
     */
    operationLength: string;
    /**
     * `referenceSequence` is only used at mismatches (`SEQUENCE_MISMATCH`) and
     * deletions (`DELETE`). Filling this field replaces SAM&#39;s MD tag. If
     * the relevant information is not available, this field is unset.
     */
    referenceSequence: string;
  }
  export interface Schema$ClinicalCondition {
    /**
     * The MedGen concept id associated with this gene. Search for these IDs at
     * http://www.ncbi.nlm.nih.gov/medgen/
     */
    conceptId: string;
    /**
     * The set of external IDs for this condition.
     */
    externalIds: Schema$ExternalId[];
    /**
     * A set of names for the condition.
     */
    names: string[];
    /**
     * The OMIM id for this condition. Search for these IDs at http://omim.org/
     */
    omimId: string;
  }
  export interface Schema$CodingSequence {
    /**
     * The end of the coding sequence on this annotation&#39;s reference
     * sequence, 0-based exclusive. Note that this position is relative to the
     * reference start, and *not* the containing annotation start.
     */
    end: string;
    /**
     * The start of the coding sequence on this annotation&#39;s reference
     * sequence, 0-based inclusive. Note that this position is relative to the
     * reference start, and *not* the containing annotation start.
     */
    start: string;
  }
  /**
   * Describes a Compute Engine resource that is being managed by a running
   * pipeline.
   */
  export interface Schema$ComputeEngine {
    /**
     * The names of the disks that were created for this pipeline.
     */
    diskNames: string[];
    /**
     * The instance on which the operation is running.
     */
    instanceName: string;
    /**
     * The machine type of the instance.
     */
    machineType: string;
    /**
     * The availability zone in which the instance resides.
     */
    zone: string;
  }
  /**
   * This event is generated when a container starts.
   */
  export interface Schema$ContainerStartedEvent {
    /**
     * The numeric ID of the action that started this container.
     */
    actionId: number;
    /**
     * The public IP address that can be used to connect to the container.  This
     * field is only populated when at least one port mapping is present.  If
     * the instance was created with a private address this field will be empty
     * even if port mappings exist.
     */
    ipAddress: string;
    /**
     * The container to host port mappings installed for this container.  This
     * set will contain any ports exposed using the PUBLISH_EXPOSED_PORTS flag
     * as well as any specified in the Action definition.
     */
    portMappings: any;
  }
  /**
   * This event is generated when a container exits.
   */
  export interface Schema$ContainerStoppedEvent {
    /**
     * The numeric ID of the action that started this container.
     */
    actionId: number;
    /**
     * The exit status of the container.
     */
    exitStatus: number;
  }
  /**
   * A bucket over which read coverage has been precomputed. A bucket
   * corresponds to a specific range of the reference sequence.
   */
  export interface Schema$CoverageBucket {
    /**
     * The average number of reads which are aligned to each individual
     * reference base in this bucket.
     */
    meanCoverage: number;
    /**
     * The genomic coordinate range spanned by this bucket.
     */
    range: Schema$Range;
  }
  /**
   * A Dataset is a collection of genomic data.
   */
  export interface Schema$Dataset {
    /**
     * The time this dataset was created, in seconds from the epoch.
     */
    createTime: string;
    /**
     * The server-generated dataset ID, unique across all datasets.
     */
    id: string;
    /**
     * The dataset name.
     */
    name: string;
    /**
     * The Google Cloud project ID that this dataset belongs to.
     */
    projectId: string;
  }
  /**
   * This event is generated whenever a resource limitation or transient error
   * delays execution of a pipeline that was otherwise ready to run.
   */
  export interface Schema$DelayedEvent {
    /**
     * A textual description of the cause of the delay.  The string may change
     * without notice since it is often generated by another service (such as
     * Compute Engine).
     */
    cause: string;
    /**
     * If the delay was caused by a resource shortage, this field lists the
     * Compute Engine metrics that are preventing this operation from running
     * (for example, CPUS or INSTANCES).  If the particular metric is not known,
     * a single UNKNOWN metric will be present.
     */
    metrics: string[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  export interface Schema$Entry {
    /**
     * The created annotation, if creation was successful.
     */
    annotation: Schema$Annotation;
    /**
     * The creation status.
     */
    status: Schema$Status;
  }
  /**
   * Event carries information about events that occur during pipeline
   * execution.
   */
  export interface Schema$Event {
    /**
     * A human readable description of the event.  Note that these strings may
     * change at any time without notice.  Any application logic must use the
     * information in the details field.
     */
    description: string;
    /**
     * Machine readable details about the event.
     */
    details: any;
    /**
     * The time that the event occurred.
     */
    timestamp: string;
  }
  export interface Schema$Exon {
    /**
     * The end position of the exon on this annotation&#39;s reference sequence,
     * 0-based exclusive. Note that this is relative to the reference start, and
     * *not* the containing annotation start.
     */
    end: string;
    /**
     * The frame of this exon. Contains a value of 0, 1, or 2, which indicates
     * the offset of the first coding base of the exon within the reading frame
     * of the coding DNA sequence, if any. This field is dependent on the
     * strandedness of this annotation (see Annotation.reverse_strand). For
     * forward stranded annotations, this offset is relative to the exon.start.
     * For reverse strand annotations, this offset is relative to the exon.end
     * `- 1`.  Unset if this exon does not intersect the coding sequence. Upon
     * creation of a transcript, the frame must be populated for all or none of
     * the coding exons.
     */
    frame: number;
    /**
     * The start position of the exon on this annotation&#39;s reference
     * sequence, 0-based inclusive. Note that this is relative to the reference
     * start, and **not** the containing annotation start.
     */
    start: string;
  }
  export interface Schema$Experiment {
    /**
     * The instrument model used as part of this experiment. This maps to
     * sequencing technology in the SAM spec.
     */
    instrumentModel: string;
    /**
     * A client-supplied library identifier; a library is a collection of DNA
     * fragments which have been prepared for sequencing from a sample. This
     * field is important for quality control as error or bias can be introduced
     * during sample preparation.
     */
    libraryId: string;
    /**
     * The platform unit used as part of this experiment, for example
     * flowcell-barcode.lane for Illumina or slide for SOLiD. Corresponds to the
     * @RG PU field in the SAM spec.
     */
    platformUnit: string;
    /**
     * The sequencing center used as part of this experiment.
     */
    sequencingCenter: string;
  }
  /**
   * The read group set export request.
   */
  export interface Schema$ExportReadGroupSetRequest {
    /**
     * Required. A Google Cloud Storage URI for the exported BAM file. The
     * currently authenticated user must have write access to the new file. An
     * error will be returned if the URI already contains data.
     */
    exportUri: string;
    /**
     * Required. The Google Cloud project ID that owns this export. The caller
     * must have WRITE access to this project.
     */
    projectId: string;
    /**
     * The reference names to export. If this is not specified, all reference
     * sequences, including unmapped reads, are exported. Use `*` to export only
     * unmapped reads.
     */
    referenceNames: string[];
  }
  /**
   * The variant data export request.
   */
  export interface Schema$ExportVariantSetRequest {
    /**
     * Required. The BigQuery dataset to export data to. This dataset must
     * already exist. Note that this is distinct from the Genomics concept of
     * &quot;dataset&quot;.
     */
    bigqueryDataset: string;
    /**
     * Required. The BigQuery table to export data to. If the table doesn&#39;t
     * exist, it will be created. If it already exists, it will be overwritten.
     */
    bigqueryTable: string;
    /**
     * If provided, only variant call information from the specified call sets
     * will be exported. By default all variant calls are exported.
     */
    callSetIds: string[];
    /**
     * The format for the exported data.
     */
    format: string;
    /**
     * Required. The Google Cloud project ID that owns the destination BigQuery
     * dataset. The caller must have WRITE access to this project.  This project
     * will also own the resulting export job.
     */
    projectId: string;
  }
  export interface Schema$ExternalId {
    /**
     * The id used by the source of this data.
     */
    id: string;
    /**
     * The name of the source of this data.
     */
    sourceName: string;
  }
  /**
   * This event is generated when the execution of a pipeline has failed.  Note
   * that other events may continue to occur after this event.
   */
  export interface Schema$FailedEvent {
    /**
     * The human readable description of the cause of the failure.
     */
    cause: string;
    /**
     * The Google standard error code that best describes this failure.
     */
    code: string;
  }
  /**
   * Request message for `GetIamPolicy` method.
   */
  export interface Schema$GetIamPolicyRequest {}
  /**
   * The read group set import request.
   */
  export interface Schema$ImportReadGroupSetsRequest {
    /**
     * Required. The ID of the dataset these read group sets will belong to. The
     * caller must have WRITE permissions to this dataset.
     */
    datasetId: string;
    /**
     * The partition strategy describes how read groups are partitioned into
     * read group sets.
     */
    partitionStrategy: string;
    /**
     * The reference set to which the imported read group sets are aligned to,
     * if any. The reference names of this reference set must be a superset of
     * those found in the imported file headers. If no reference set id is
     * provided, a best effort is made to associate with a matching reference
     * set.
     */
    referenceSetId: string;
    /**
     * A list of URIs pointing at [BAM
     * files](https://samtools.github.io/hts-specs/SAMv1.pdf) in Google Cloud
     * Storage. Those URIs can include wildcards (*), but do not add or remove
     * matching files before import has completed.  Note that Google Cloud
     * Storage object listing is only eventually consistent: files added may be
     * not be immediately visible to everyone. Thus, if using a wildcard it is
     * preferable not to start the import immediately after the files are
     * created.
     */
    sourceUris: string[];
  }
  /**
   * The read group set import response.
   */
  export interface Schema$ImportReadGroupSetsResponse {
    /**
     * IDs of the read group sets that were created.
     */
    readGroupSetIds: string[];
  }
  /**
   * The variant data import request.
   */
  export interface Schema$ImportVariantsRequest {
    /**
     * The format of the variant data being imported. If unspecified, defaults
     * to to `VCF`.
     */
    format: string;
    /**
     * A mapping between info field keys and the InfoMergeOperations to be
     * performed on them. This is plumbed down to the MergeVariantRequests
     * generated by the resulting import job.
     */
    infoMergeConfig: any;
    /**
     * Convert reference names to the canonical representation. hg19 haploytypes
     * (those reference names containing &quot;_hap&quot;) are not modified in
     * any way. All other reference names are modified according to the
     * following rules: The reference name is capitalized. The &quot;chr&quot;
     * prefix is dropped for all autosomes and sex chromsomes. For example
     * &quot;chr17&quot; becomes &quot;17&quot; and &quot;chrX&quot; becomes
     * &quot;X&quot;. All mitochondrial chromosomes (&quot;chrM&quot;,
     * &quot;chrMT&quot;, etc) become &quot;MT&quot;.
     */
    normalizeReferenceNames: boolean;
    /**
     * A list of URIs referencing variant files in Google Cloud Storage. URIs
     * can include wildcards [as described
     * here](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames).
     * Note that recursive wildcards (&#39;**&#39;) are not supported.
     */
    sourceUris: string[];
    /**
     * Required. The variant set to which variant data should be imported.
     */
    variantSetId: string;
  }
  /**
   * The variant data import response.
   */
  export interface Schema$ImportVariantsResponse {
    /**
     * IDs of the call sets created during the import.
     */
    callSetIds: string[];
  }
  /**
   * A linear alignment can be represented by one CIGAR string. Describes the
   * mapped position and local alignment of the read to the reference.
   */
  export interface Schema$LinearAlignment {
    /**
     * Represents the local alignment of this sequence (alignment matches,
     * indels, etc) against the reference.
     */
    cigar: Schema$CigarUnit[];
    /**
     * The mapping quality of this alignment. Represents how likely the read
     * maps to this position as opposed to other locations.  Specifically, this
     * is -10 log10 Pr(mapping position is wrong), rounded to the nearest
     * integer.
     */
    mappingQuality: number;
    /**
     * The position of this alignment.
     */
    position: Schema$Position;
  }
  export interface Schema$ListBasesResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The offset position (0-based) of the given `sequence` from the start of
     * this `Reference`. This value will differ for each page in a paginated
     * request.
     */
    offset: string;
    /**
     * A substring of the bases that make up this reference.
     */
    sequence: string;
  }
  export interface Schema$ListCoverageBucketsResponse {
    /**
     * The length of each coverage bucket in base pairs. Note that buckets at
     * the end of a reference sequence may be shorter. This value is omitted if
     * the bucket width is infinity (the default behaviour, with no range or
     * `targetBucketWidth`).
     */
    bucketWidth: string;
    /**
     * The coverage buckets. The list of buckets is sparse; a bucket with 0
     * overlapping reads is not returned. A bucket never crosses more than one
     * reference sequence. Each bucket has width `bucketWidth`, unless its end
     * is the end of the reference sequence.
     */
    coverageBuckets: Schema$CoverageBucket[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  /**
   * The dataset list response.
   */
  export interface Schema$ListDatasetsResponse {
    /**
     * The list of matching Datasets.
     */
    datasets: Schema$Dataset[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken: string;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations: Schema$Operation[];
  }
  export interface Schema$MergeVariantsRequest {
    /**
     * A mapping between info field keys and the InfoMergeOperations to be
     * performed on them.
     */
    infoMergeConfig: any;
    /**
     * The variants to be merged with existing variants.
     */
    variants: Schema$Variant[];
    /**
     * The destination variant set.
     */
    variantSetId: string;
  }
  /**
   * This resource represents a long-running operation that is the result of a
   * network API call.
   */
  export interface Schema$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress. If
     * `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done: boolean;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error: Schema$Status;
    /**
     * An OperationMetadata or Metadata object. This will always be returned
     * with the Operation.
     */
    metadata: any;
    /**
     * The server-assigned name, which is only unique within the same service
     * that originally returns it. For example&amp;#58;
     * `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
     */
    name: string;
    /**
     * If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned.
     * If importing Variants, an ImportVariantsResponse is returned. For
     * pipelines and exports, an Empty response is returned.
     */
    response: any;
  }
  /**
   * An event that occurred during an Operation.
   */
  export interface Schema$OperationEvent {
    /**
     * Required description of event.
     */
    description: string;
    /**
     * Optional time of when event finished. An event can have a start time and
     * no finish time. If an event has a finish time, there must be a start
     * time.
     */
    endTime: string;
    /**
     * Optional time of when event started.
     */
    startTime: string;
  }
  /**
   * Metadata describing an Operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * This field is deprecated. Use `labels` instead. Optionally provided by
     * the caller when submitting the request that creates the operation.
     */
    clientId: string;
    /**
     * The time at which the job was submitted to the Genomics service.
     */
    createTime: string;
    /**
     * The time at which the job stopped running.
     */
    endTime: string;
    /**
     * Optional event messages that were generated during the job&#39;s
     * execution. This also contains any warnings that were generated during
     * import or export.
     */
    events: Schema$OperationEvent[];
    /**
     * Optionally provided by the caller when submitting the request that
     * creates the operation.
     */
    labels: any;
    /**
     * The Google Cloud Project in which the job is scoped.
     */
    projectId: string;
    /**
     * The original request that started the operation. Note that this will be
     * in current version of the API. If the operation was started with v1beta2
     * API and a GetOperation is performed on v1 API, a v1 request will be
     * returned.
     */
    request: any;
    /**
     * Runtime metadata on this Operation.
     */
    runtimeMetadata: any;
    /**
     * The time at which the job began to run.
     */
    startTime: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `Binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **Example**      {       &quot;bindings&quot;: [         {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;, ] },
   * {           &quot;role&quot;: &quot;roles/viewer&quot;,
   * &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]
   * }  For a description of IAM and its features, see the [IAM developer&#39;s
   * guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag: string;
    /**
     * Deprecated.
     */
    version: number;
  }
  /**
   * An abstraction for referring to a genomic position, in relation to some
   * already known reference. For now, represents a genomic position as a
   * reference name, a base number on that reference (0-based), and a
   * determination of forward or reverse strand.
   */
  export interface Schema$Position {
    /**
     * The 0-based offset from the start of the forward strand for that
     * reference.
     */
    position: string;
    /**
     * The name of the reference in whatever reference set is being used.
     */
    referenceName: string;
    /**
     * Whether this position is on the reverse strand, as opposed to the forward
     * strand.
     */
    reverseStrand: boolean;
  }
  export interface Schema$Program {
    /**
     * The command line used to run this program.
     */
    commandLine: string;
    /**
     * The user specified locally unique ID of the program. Used along with
     * `prevProgramId` to define an ordering between programs.
     */
    id: string;
    /**
     * The display name of the program. This is typically the colloquial name of
     * the tool used, for example &#39;bwa&#39; or &#39;picard&#39;.
     */
    name: string;
    /**
     * The ID of the program run before this one.
     */
    prevProgramId: string;
    /**
     * The version of the program run.
     */
    version: string;
  }
  /**
   * This event is generated when the worker starts pulling an image.
   */
  export interface Schema$PullStartedEvent {
    /**
     * The URI of the image that was pulled.
     */
    imageUri: string;
  }
  /**
   * This event is generated when the worker stops pulling an image.
   */
  export interface Schema$PullStoppedEvent {
    /**
     * The URI of the image that was pulled.
     */
    imageUri: string;
  }
  /**
   * A 0-based half-open genomic coordinate range for search requests.
   */
  export interface Schema$Range {
    /**
     * The end position of the range on the reference, 0-based exclusive.
     */
    end: string;
    /**
     * The reference sequence name, for example `chr1`, `1`, or `chrX`.
     */
    referenceName: string;
    /**
     * The start position of the range on the reference, 0-based inclusive.
     */
    start: string;
  }
  /**
   * A read alignment describes a linear alignment of a string of DNA to a
   * reference sequence, in addition to metadata about the fragment (the
   * molecule of DNA sequenced) and the read (the bases which were read by the
   * sequencer). A read is equivalent to a line in a SAM file. A read belongs to
   * exactly one read group and exactly one read group set.  ###
   * Reverse-stranded reads  Mapped reads (reads having a non-null `alignment`)
   * can be aligned to either the forward or the reverse strand of their
   * associated reference. Strandedness of a mapped read is encoded by
   * `alignment.position.reverseStrand`.  If we consider the reference to be a
   * forward-stranded coordinate space of `[0, reference.length)` with `0` as
   * the left-most position and `reference.length` as the right-most position,
   * reads are always aligned left to right. That is,
   * `alignment.position.position` always refers to the left-most reference
   * coordinate and `alignment.cigar` describes the alignment of this read to
   * the reference from left to right. All per-base fields such as
   * `alignedSequence` and `alignedQuality` share this same left-to-right
   * orientation; this is true of reads which are aligned to either strand. For
   * reverse-stranded reads, this means that `alignedSequence` is the reverse
   * complement of the bases that were originally reported by the sequencing
   * machine.  ### Generating a reference-aligned sequence string  When
   * interacting with mapped reads, it&#39;s often useful to produce a string
   * representing the local alignment of the read to reference. The following
   * pseudocode demonstrates one way of doing this:      out = &quot;&quot;
   * offset = 0     for c in read.alignment.cigar {       switch c.operation {
   * case &quot;ALIGNMENT_MATCH&quot;, &quot;SEQUENCE_MATCH&quot;,
   * &quot;SEQUENCE_MISMATCH&quot;:         out +=
   * read.alignedSequence[offset:offset+c.operationLength]         offset +=
   * c.operationLength         break       case &quot;CLIP_SOFT&quot;,
   * &quot;INSERT&quot;:         offset += c.operationLength         break case
   * &quot;PAD&quot;:         out += repeat(&quot;*&quot;, c.operationLength)
   * break       case &quot;DELETE&quot;:         out += repeat(&quot;-&quot;,
   * c.operationLength)         break       case &quot;SKIP&quot;:         out
   * += repeat(&quot; &quot;, c.operationLength)         break       case
   * &quot;CLIP_HARD&quot;:         break       }     }     return out  ###
   * Converting to SAM&#39;s CIGAR string  The following pseudocode generates a
   * SAM CIGAR string from the `cigar` field. Note that this is a lossy
   * conversion (`cigar.referenceSequence` is lost).      cigarMap = {
   * &quot;ALIGNMENT_MATCH&quot;: &quot;M&quot;,       &quot;INSERT&quot;:
   * &quot;I&quot;,       &quot;DELETE&quot;: &quot;D&quot;, &quot;SKIP&quot;:
   * &quot;N&quot;,       &quot;CLIP_SOFT&quot;: &quot;S&quot;,
   * &quot;CLIP_HARD&quot;: &quot;H&quot;,       &quot;PAD&quot;: &quot;P&quot;,
   * &quot;SEQUENCE_MATCH&quot;: &quot;=&quot;, &quot;SEQUENCE_MISMATCH&quot;:
   * &quot;X&quot;,     }     cigarStr = &quot;&quot;     for c in
   * read.alignment.cigar {       cigarStr += c.operationLength +
   * cigarMap[c.operation]     }     return cigarStr
   */
  export interface Schema$Read {
    /**
     * The quality of the read sequence contained in this alignment record
     * (equivalent to QUAL in SAM). `alignedSequence` and `alignedQuality` may
     * be shorter than the full read sequence and quality. This will occur if
     * the alignment is part of a chimeric alignment, or if the read was
     * trimmed. When this occurs, the CIGAR for this read will begin/end with a
     * hard clip operator that will indicate the length of the excised sequence.
     */
    alignedQuality: number[];
    /**
     * The bases of the read sequence contained in this alignment record,
     * **without CIGAR operations applied** (equivalent to SEQ in SAM).
     * `alignedSequence` and `alignedQuality` may be shorter than the full read
     * sequence and quality. This will occur if the alignment is part of a
     * chimeric alignment, or if the read was trimmed. When this occurs, the
     * CIGAR for this read will begin/end with a hard clip operator that will
     * indicate the length of the excised sequence.
     */
    alignedSequence: string;
    /**
     * The linear alignment for this alignment record. This field is null for
     * unmapped reads.
     */
    alignment: Schema$LinearAlignment;
    /**
     * The fragment is a PCR or optical duplicate (SAM flag 0x400).
     */
    duplicateFragment: boolean;
    /**
     * Whether this read did not pass filters, such as platform or vendor
     * quality controls (SAM flag 0x200).
     */
    failedVendorQualityChecks: boolean;
    /**
     * The observed length of the fragment, equivalent to TLEN in SAM.
     */
    fragmentLength: number;
    /**
     * The fragment name. Equivalent to QNAME (query template name) in SAM.
     */
    fragmentName: string;
    /**
     * The server-generated read ID, unique across all reads. This is different
     * from the `fragmentName`.
     */
    id: string;
    /**
     * A map of additional read alignment information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The mapping of the primary alignment of the `(readNumber+1)%numberReads`
     * read in the fragment. It replaces mate position and mate strand in SAM.
     */
    nextMatePosition: Schema$Position;
    /**
     * The number of reads in the fragment (extension to SAM flag 0x1).
     */
    numberReads: number;
    /**
     * The orientation and the distance between reads from the fragment are
     * consistent with the sequencing protocol (SAM flag 0x2).
     */
    properPlacement: boolean;
    /**
     * The ID of the read group this read belongs to. A read belongs to exactly
     * one read group. This is a server-generated ID which is distinct from
     * SAM&#39;s RG tag (for that value, see ReadGroup.name).
     */
    readGroupId: string;
    /**
     * The ID of the read group set this read belongs to. A read belongs to
     * exactly one read group set.
     */
    readGroupSetId: string;
    /**
     * The read number in sequencing. 0-based and less than numberReads. This
     * field replaces SAM flag 0x40 and 0x80.
     */
    readNumber: number;
    /**
     * Whether this alignment is secondary. Equivalent to SAM flag 0x100. A
     * secondary alignment represents an alternative to the primary alignment
     * for this read. Aligners may return secondary alignments if a read can map
     * ambiguously to multiple coordinates in the genome. By convention, each
     * read has one and only one alignment where both `secondaryAlignment` and
     * `supplementaryAlignment` are false.
     */
    secondaryAlignment: boolean;
    /**
     * Whether this alignment is supplementary. Equivalent to SAM flag 0x800.
     * Supplementary alignments are used in the representation of a chimeric
     * alignment. In a chimeric alignment, a read is split into multiple linear
     * alignments that map to different reference contigs. The first linear
     * alignment in the read will be designated as the representative alignment;
     * the remaining linear alignments will be designated as supplementary
     * alignments. These alignments may have different mapping quality scores.
     * In each linear alignment in a chimeric alignment, the read will be hard
     * clipped. The `alignedSequence` and `alignedQuality` fields in the
     * alignment record will only represent the bases for its respective linear
     * alignment.
     */
    supplementaryAlignment: boolean;
  }
  /**
   * A read group is all the data that&#39;s processed the same way by the
   * sequencer.
   */
  export interface Schema$ReadGroup {
    /**
     * The dataset to which this read group belongs.
     */
    datasetId: string;
    /**
     * A free-form text description of this read group.
     */
    description: string;
    /**
     * The experiment used to generate this read group.
     */
    experiment: Schema$Experiment;
    /**
     * The server-generated read group ID, unique for all read groups. Note:
     * This is different than the @RG ID field in the SAM spec. For that value,
     * see name.
     */
    id: string;
    /**
     * A map of additional read group information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The read group name. This corresponds to the @RG ID field in the SAM
     * spec.
     */
    name: string;
    /**
     * The predicted insert size of this read group. The insert size is the
     * length the sequenced DNA fragment from end-to-end, not including the
     * adapters.
     */
    predictedInsertSize: number;
    /**
     * The programs used to generate this read group. Programs are always
     * identical for all read groups within a read group set. For this reason,
     * only the first read group in a returned set will have this field
     * populated.
     */
    programs: Schema$Program[];
    /**
     * The reference set the reads in this read group are aligned to.
     */
    referenceSetId: string;
    /**
     * A client-supplied sample identifier for the reads in this read group.
     */
    sampleId: string;
  }
  /**
   * A read group set is a logical collection of read groups, which are
   * collections of reads produced by a sequencer. A read group set typically
   * models reads corresponding to one sample, sequenced one way, and aligned
   * one way.  * A read group set belongs to one dataset. * A read group belongs
   * to one read group set. * A read belongs to one read group.
   */
  export interface Schema$ReadGroupSet {
    /**
     * The dataset to which this read group set belongs.
     */
    datasetId: string;
    /**
     * The filename of the original source file for this read group set, if any.
     */
    filename: string;
    /**
     * The server-generated read group set ID, unique for all read group sets.
     */
    id: string;
    /**
     * A map of additional read group set information.
     */
    info: any;
    /**
     * The read group set name. By default this will be initialized to the
     * sample name of the sequenced data contained in this set.
     */
    name: string;
    /**
     * The read groups in this set. There are typically 1-10 read groups in a
     * read group set.
     */
    readGroups: Schema$ReadGroup[];
    /**
     * The reference set to which the reads in this read group set are aligned.
     */
    referenceSetId: string;
  }
  /**
   * A reference is a canonical assembled DNA sequence, intended to act as a
   * reference coordinate space for other genomic annotations. A single
   * reference might represent the human chromosome 1 or mitochandrial DNA, for
   * instance. A reference belongs to one or more reference sets.
   */
  export interface Schema$Reference {
    /**
     * The server-generated reference ID, unique across all references.
     */
    id: string;
    /**
     * The length of this reference&#39;s sequence.
     */
    length: string;
    /**
     * MD5 of the upper-case sequence excluding all whitespace characters (this
     * is equivalent to SQ:M5 in SAM). This value is represented in lower case
     * hexadecimal format.
     */
    md5checksum: string;
    /**
     * The name of this reference, for example `22`.
     */
    name: string;
    /**
     * ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for
     * human.
     */
    ncbiTaxonId: number;
    /**
     * All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
     * with a version number, for example `GCF_000001405.26`.
     */
    sourceAccessions: string[];
    /**
     * The URI from which the sequence was obtained. Typically specifies a FASTA
     * format file.
     */
    sourceUri: string;
  }
  /**
   * ReferenceBound records an upper bound for the starting coordinate of
   * variants in a particular reference.
   */
  export interface Schema$ReferenceBound {
    /**
     * The name of the reference associated with this reference bound.
     */
    referenceName: string;
    /**
     * An upper bound (inclusive) on the starting coordinate of any variant in
     * the reference sequence.
     */
    upperBound: string;
  }
  /**
   * A reference set is a set of references which typically comprise a reference
   * assembly for a species, such as `GRCh38` which is representative of the
   * human genome. A reference set defines a common coordinate space for
   * comparing reference-aligned experimental data. A reference set contains 1
   * or more references.
   */
  export interface Schema$ReferenceSet {
    /**
     * Public id of this reference set, such as `GRCh37`.
     */
    assemblyId: string;
    /**
     * Free text description of this reference set.
     */
    description: string;
    /**
     * The server-generated reference set ID, unique across all reference sets.
     */
    id: string;
    /**
     * Order-independent MD5 checksum which identifies this reference set. The
     * checksum is computed by sorting all lower case hexidecimal string
     * `reference.md5checksum` (for all reference in this set) in ascending
     * lexicographic order, concatenating, and taking the MD5 of that value. The
     * resulting value is represented in lower case hexadecimal format.
     */
    md5checksum: string;
    /**
     * ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for
     * human) indicating the species which this reference set is intended to
     * model. Note that contained references may specify a different
     * `ncbiTaxonId`, as assemblies may contain reference sequences which do not
     * belong to the modeled species, for example EBV in a human reference
     * genome.
     */
    ncbiTaxonId: number;
    /**
     * The IDs of the reference objects that are part of this set.
     * `Reference.md5checksum` must be unique within this set.
     */
    referenceIds: string[];
    /**
     * All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
     * with a version number, for example `NC_000001.11`.
     */
    sourceAccessions: string[];
    /**
     * The URI from which the references were obtained.
     */
    sourceUri: string;
  }
  /**
   * Runtime metadata that will be populated in the runtimeMetadata field of the
   * Operation associated with a RunPipeline execution.
   */
  export interface Schema$RuntimeMetadata {
    /**
     * Execution information specific to Google Compute Engine.
     */
    computeEngine: Schema$ComputeEngine;
  }
  export interface Schema$SearchAnnotationSetsRequest {
    /**
     * Required. The dataset IDs to search within. Caller must have `READ`
     * access to these datasets.
     */
    datasetIds: string[];
    /**
     * Only return annotations sets for which a substring of the name matches
     * this string (case insensitive).
     */
    name: string;
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 128. The maximum value is 1024.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * If specified, only annotation sets associated with the given reference
     * set are returned.
     */
    referenceSetId: string;
    /**
     * If specified, only annotation sets that have any of these types are
     * returned.
     */
    types: string[];
  }
  export interface Schema$SearchAnnotationSetsResponse {
    /**
     * The matching annotation sets.
     */
    annotationSets: Schema$AnnotationSet[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  export interface Schema$SearchAnnotationsRequest {
    /**
     * Required. The annotation sets to search within. The caller must have
     * `READ` access to these annotation sets. All queried annotation sets must
     * have the same type.
     */
    annotationSetIds: string[];
    /**
     * The end position of the range on the reference, 0-based exclusive. If
     * referenceId or referenceName must be specified, Defaults to the length of
     * the reference.
     */
    end: string;
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 256. The maximum value is 2048.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * The ID of the reference to query.
     */
    referenceId: string;
    /**
     * The name of the reference to query, within the reference set associated
     * with this query.
     */
    referenceName: string;
    /**
     * The start position of the range on the reference, 0-based inclusive. If
     * specified, referenceId or referenceName must be specified. Defaults to 0.
     */
    start: string;
  }
  export interface Schema$SearchAnnotationsResponse {
    /**
     * The matching annotations.
     */
    annotations: Schema$Annotation[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  /**
   * The call set search request.
   */
  export interface Schema$SearchCallSetsRequest {
    /**
     * Only return call sets for which a substring of the name matches this
     * string.
     */
    name: string;
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 1024.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * Restrict the query to call sets within the given variant sets. At least
     * one ID must be provided.
     */
    variantSetIds: string[];
  }
  /**
   * The call set search response.
   */
  export interface Schema$SearchCallSetsResponse {
    /**
     * The list of matching call sets.
     */
    callSets: Schema$CallSet[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  /**
   * The read group set search request.
   */
  export interface Schema$SearchReadGroupSetsRequest {
    /**
     * Restricts this query to read group sets within the given datasets. At
     * least one ID must be provided.
     */
    datasetIds: string[];
    /**
     * Only return read group sets for which a substring of the name matches
     * this string.
     */
    name: string;
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 256. The maximum value is 1024.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
  }
  /**
   * The read group set search response.
   */
  export interface Schema$SearchReadGroupSetsResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The list of matching read group sets.
     */
    readGroupSets: Schema$ReadGroupSet[];
  }
  /**
   * The read search request.
   */
  export interface Schema$SearchReadsRequest {
    /**
     * The end position of the range on the reference, 0-based exclusive. If
     * specified, `referenceName` must also be specified.
     */
    end: string;
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 256. The maximum value is 2048.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * The IDs of the read groups within which to search for reads. All
     * specified read groups must belong to the same read group sets. Must
     * specify one of `readGroupSetIds` or `readGroupIds`.
     */
    readGroupIds: string[];
    /**
     * The IDs of the read groups sets within which to search for reads. All
     * specified read group sets must be aligned against a common set of
     * reference sequences; this defines the genomic coordinates for the query.
     * Must specify one of `readGroupSetIds` or `readGroupIds`.
     */
    readGroupSetIds: string[];
    /**
     * The reference sequence name, for example `chr1`, `1`, or `chrX`. If set
     * to `*`, only unmapped reads are returned. If unspecified, all reads
     * (mapped and unmapped) are returned.
     */
    referenceName: string;
    /**
     * The start position of the range on the reference, 0-based inclusive. If
     * specified, `referenceName` must also be specified.
     */
    start: string;
  }
  /**
   * The read search response.
   */
  export interface Schema$SearchReadsResponse {
    /**
     * The list of matching alignments sorted by mapped genomic coordinate, if
     * any, ascending in position within the same reference. Unmapped reads,
     * which have no position, are returned contiguously and are sorted in
     * ascending lexicographic order by fragment name.
     */
    alignments: Schema$Read[];
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
  }
  export interface Schema$SearchReferenceSetsRequest {
    /**
     * If present, return reference sets for which a prefix of any of
     * sourceAccessions match any of these strings. Accession numbers typically
     * have a main number and a version, for example `NC_000001.11`.
     */
    accessions: string[];
    /**
     * If present, return reference sets for which a substring of their
     * `assemblyId` matches this string (case insensitive).
     */
    assemblyId: string;
    /**
     * If present, return reference sets for which the md5checksum matches
     * exactly.
     */
    md5checksums: string[];
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 1024. The maximum value is 4096.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
  }
  export interface Schema$SearchReferenceSetsResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The matching references sets.
     */
    referenceSets: Schema$ReferenceSet[];
  }
  export interface Schema$SearchReferencesRequest {
    /**
     * If present, return references for which a prefix of any of
     * sourceAccessions match any of these strings. Accession numbers typically
     * have a main number and a version, for example `GCF_000001405.26`.
     */
    accessions: string[];
    /**
     * If present, return references for which the md5checksum matches exactly.
     */
    md5checksums: string[];
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 1024. The maximum value is 4096.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * If present, return only references which belong to this reference set.
     */
    referenceSetId: string;
  }
  export interface Schema$SearchReferencesResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The matching references.
     */
    references: Schema$Reference[];
  }
  /**
   * The search variant sets request.
   */
  export interface Schema$SearchVariantSetsRequest {
    /**
     * Exactly one dataset ID must be provided here. Only variant sets which
     * belong to this dataset will be returned.
     */
    datasetIds: string[];
    /**
     * The maximum number of results to return in a single page. If unspecified,
     * defaults to 1024.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
  }
  /**
   * The search variant sets response.
   */
  export interface Schema$SearchVariantSetsResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The variant sets belonging to the requested dataset.
     */
    variantSets: Schema$VariantSet[];
  }
  /**
   * The variant search request.
   */
  export interface Schema$SearchVariantsRequest {
    /**
     * Only return variant calls which belong to call sets with these ids.
     * Leaving this blank returns all variant calls. If a variant has no calls
     * belonging to any of these call sets, it won&#39;t be returned at all.
     */
    callSetIds: string[];
    /**
     * The end of the window, 0-based exclusive. If unspecified or 0, defaults
     * to the length of the reference.
     */
    end: string;
    /**
     * The maximum number of calls to return in a single page. Note that this
     * limit may be exceeded in the event that a matching variant contains more
     * calls than the requested maximum. If unspecified, defaults to 5000. The
     * maximum value is 10000.
     */
    maxCalls: number;
    /**
     * The maximum number of variants to return in a single page. If
     * unspecified, defaults to 5000. The maximum value is 10000.
     */
    pageSize: number;
    /**
     * The continuation token, which is used to page through large result sets.
     * To get the next page of results, set this parameter to the value of
     * `nextPageToken` from the previous response.
     */
    pageToken: string;
    /**
     * Required. Only return variants in this reference sequence.
     */
    referenceName: string;
    /**
     * The beginning of the window (0-based, inclusive) for which overlapping
     * variants should be returned. If unspecified, defaults to 0.
     */
    start: string;
    /**
     * Only return variants which have exactly this name.
     */
    variantName: string;
    /**
     * At most one variant set ID must be provided. Only variants from this
     * variant set will be returned. If omitted, a call set id must be included
     * in the request.
     */
    variantSetIds: string[];
  }
  /**
   * The variant search response.
   */
  export interface Schema$SearchVariantsResponse {
    /**
     * The continuation token, which is used to page through large result sets.
     * Provide this value in a subsequent request to return the next page of
     * results. This field will be empty if there aren&#39;t any additional
     * results.
     */
    nextPageToken: string;
    /**
     * The list of matching Variants.
     */
    variants: Schema$Variant[];
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy: Schema$Policy;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details: any[];
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * REQUIRED: The set of permissions to check for the &#39;resource&#39;.
     * Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;)
     * are not allowed. Allowed permissions are&amp;#58;  *
     * `genomics.datasets.create` * `genomics.datasets.delete` *
     * `genomics.datasets.get` * `genomics.datasets.list` *
     * `genomics.datasets.update` * `genomics.datasets.getIamPolicy` *
     * `genomics.datasets.setIamPolicy`
     */
    permissions: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions: string[];
  }
  /**
   * A transcript represents the assertion that a particular region of the
   * reference genome may be transcribed as RNA.
   */
  export interface Schema$Transcript {
    /**
     * The range of the coding sequence for this transcript, if any. To
     * determine the exact ranges of coding sequence, intersect this range with
     * those of the exons, if any. If there are any exons, the codingSequence
     * must start and end within them.  Note that in some cases, the reference
     * genome will not exactly match the observed mRNA transcript e.g. due to
     * variance in the source genome from reference. In these cases, exon.frame
     * will not necessarily match the expected reference reading frame and
     * coding exon reference bases cannot necessarily be concatenated to produce
     * the original transcript mRNA.
     */
    codingSequence: Schema$CodingSequence;
    /**
     * The &lt;a
     * href=&quot;http://en.wikipedia.org/wiki/Exon&quot;&gt;exons&lt;/a&gt;
     * that compose this transcript. This field should be unset for genomes
     * where transcript splicing does not occur, for example prokaryotes.
     * Introns are regions of the transcript that are not included in the
     * spliced RNA product. Though not explicitly modeled here, intron ranges
     * can be deduced; all regions of this transcript that are not exons are
     * introns.  Exonic sequences do not necessarily code for a translational
     * product (amino acids). Only the regions of exons bounded by the
     * codingSequence correspond to coding DNA sequence.  Exons are ordered by
     * start position and may not overlap.
     */
    exons: Schema$Exon[];
    /**
     * The annotation ID of the gene from which this transcript is transcribed.
     */
    geneId: string;
  }
  export interface Schema$UndeleteDatasetRequest {}
  /**
   * This event is generated when the execution of a container results in a
   * non-zero exit status that was not otherwise ignored.  Execution will
   * continue, but only actions that are flagged as ALWAYS_RUN will be executed:
   * other actions will be skipped.
   */
  export interface Schema$UnexpectedExitStatusEvent {
    /**
     * The numeric ID of the action that started the container.
     */
    actionId: number;
    /**
     * The exit status of the container.
     */
    exitStatus: number;
  }
  /**
   * A variant represents a change in DNA sequence relative to a reference
   * sequence. For example, a variant could represent a SNP or an insertion.
   * Variants belong to a variant set.  Each of the calls on a variant represent
   * a determination of genotype with respect to that variant. For example, a
   * call might assign probability of 0.32 to the occurrence of a SNP named
   * rs1234 in a sample named NA12345. A call belongs to a call set, which
   * contains related calls typically from one sample.
   */
  export interface Schema$Variant {
    /**
     * The bases that appear instead of the reference bases.
     */
    alternateBases: string[];
    /**
     * The variant calls for this particular variant. Each one represents the
     * determination of genotype with respect to this variant.
     */
    calls: Schema$VariantCall[];
    /**
     * The date this variant was created, in milliseconds from the epoch.
     */
    created: string;
    /**
     * The end position (0-based) of this variant. This corresponds to the first
     * base after the last base in the reference allele. So, the length of the
     * reference allele is (end - start). This is useful for variants that
     * don&#39;t explicitly give alternate bases, for example large deletions.
     */
    end: string;
    /**
     * A list of filters (normally quality filters) this variant has failed.
     * `PASS` indicates this variant has passed all filters.
     */
    filter: string[];
    /**
     * The server-generated variant ID, unique across all variants.
     */
    id: string;
    /**
     * A map of additional variant information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * Names for the variant, for example a RefSNP ID.
     */
    names: string[];
    /**
     * A measure of how likely this variant is to be real. A higher value is
     * better.
     */
    quality: number;
    /**
     * The reference bases for this variant. They start at the given position.
     */
    referenceBases: string;
    /**
     * The reference on which this variant occurs. (such as `chr20` or `X`)
     */
    referenceName: string;
    /**
     * The position at which this variant occurs (0-based). This corresponds to
     * the first base of the string of reference bases.
     */
    start: string;
    /**
     * The ID of the variant set this variant belongs to.
     */
    variantSetId: string;
  }
  export interface Schema$VariantAnnotation {
    /**
     * The alternate allele for this variant. If multiple alternate alleles
     * exist at this location, create a separate variant for each one, as they
     * may represent distinct conditions.
     */
    alternateBases: string;
    /**
     * Describes the clinical significance of a variant. It is adapted from the
     * ClinVar controlled vocabulary for clinical significance described at:
     * http://www.ncbi.nlm.nih.gov/clinvar/docs/clinsig/
     */
    clinicalSignificance: string;
    /**
     * The set of conditions associated with this variant. A condition describes
     * the way a variant influences human health.
     */
    conditions: Schema$ClinicalCondition[];
    /**
     * Effect of the variant on the coding sequence.
     */
    effect: string;
    /**
     * Google annotation ID of the gene affected by this variant. This should be
     * provided when the variant is created.
     */
    geneId: string;
    /**
     * Google annotation IDs of the transcripts affected by this variant. These
     * should be provided when the variant is created.
     */
    transcriptIds: string[];
    /**
     * Type has been adapted from ClinVar&#39;s list of variant types.
     */
    type: string;
  }
  /**
   * A call represents the determination of genotype with respect to a
   * particular variant. It may include associated information such as quality
   * and phasing. For example, a call might assign a probability of 0.32 to the
   * occurrence of a SNP named rs1234 in a call set with the name NA12345.
   */
  export interface Schema$VariantCall {
    /**
     * The ID of the call set this variant call belongs to.
     */
    callSetId: string;
    /**
     * The name of the call set this variant call belongs to.
     */
    callSetName: string;
    /**
     * The genotype of this variant call. Each value represents either the value
     * of the `referenceBases` field or a 1-based index into `alternateBases`.
     * If a variant had a `referenceBases` value of `T` and an `alternateBases`
     * value of `[&quot;A&quot;, &quot;C&quot;]`, and the `genotype` was `[2,
     * 1]`, that would mean the call represented the heterozygous value `CA` for
     * this variant. If the `genotype` was instead `[0, 1]`, the represented
     * value would be `TA`. Ordering of the genotype values is important if the
     * `phaseset` is present. If a genotype is not called (that is, a `.` is
     * present in the GT string) -1 is returned.
     */
    genotype: number[];
    /**
     * The genotype likelihoods for this variant call. Each array entry
     * represents how likely a specific genotype is for this call. The value
     * ordering is defined by the GL tag in the VCF spec. If Phred-scaled
     * genotype likelihood scores (PL) are available and log10(P) genotype
     * likelihood scores (GL) are not, PL scores are converted to GL scores.  If
     * both are available, PL scores are stored in `info`.
     */
    genotypeLikelihood: number[];
    /**
     * A map of additional variant call information. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * If this field is present, this variant call&#39;s genotype ordering
     * implies the phase of the bases and is consistent with any other variant
     * calls in the same reference sequence which have the same phaseset value.
     * When importing data from VCF, if the genotype data was phased but no
     * phase set was specified this field will be set to `*`.
     */
    phaseset: string;
  }
  /**
   * A variant set is a collection of call sets and variants. It contains
   * summary statistics of those contents. A variant set belongs to a dataset.
   */
  export interface Schema$VariantSet {
    /**
     * The dataset to which this variant set belongs.
     */
    datasetId: string;
    /**
     * A textual description of this variant set.
     */
    description: string;
    /**
     * The server-generated variant set ID, unique across all variant sets.
     */
    id: string;
    /**
     * The metadata associated with this variant set.
     */
    metadata: Schema$VariantSetMetadata[];
    /**
     * User-specified, mutable name.
     */
    name: string;
    /**
     * A list of all references used by the variants in a variant set with
     * associated coordinate upper bounds for each one.
     */
    referenceBounds: Schema$ReferenceBound[];
    /**
     * The reference set to which the variant set is mapped. The reference set
     * describes the alignment provenance of the variant set, while the
     * `referenceBounds` describe the shape of the actual variant data. The
     * reference set&#39;s reference names are a superset of those found in the
     * `referenceBounds`.  For example, given a variant set that is mapped to
     * the GRCh38 reference set and contains a single variant on reference
     * &#39;X&#39;, `referenceBounds` would contain only an entry for
     * &#39;X&#39;, while the associated reference set enumerates all possible
     * references: &#39;1&#39;, &#39;2&#39;, &#39;X&#39;, &#39;Y&#39;,
     * &#39;MT&#39;, etc.
     */
    referenceSetId: string;
  }
  /**
   * Metadata describes a single piece of variant call metadata. These data
   * include a top level key and either a single value string (value) or a list
   * of key-value pairs (info.) Value and info are mutually exclusive.
   */
  export interface Schema$VariantSetMetadata {
    /**
     * A textual description of this metadata.
     */
    description: string;
    /**
     * User-provided ID field, not enforced by this API. Two or more pieces of
     * structured metadata with identical id and key fields are considered
     * equivalent.
     */
    id: string;
    /**
     * Remaining structured metadata key-value pairs. This must be of the form
     * map&lt;string, string[]&gt; (string key mapping to a list of string
     * values).
     */
    info: any;
    /**
     * The top-level key.
     */
    key: string;
    /**
     * The number of values that can be included in a field described by this
     * metadata.
     */
    number: string;
    /**
     * The type of data. Possible types include: Integer, Float, Flag,
     * Character, and String.
     */
    type: string;
    /**
     * The value field for simple metadata
     */
    value: string;
  }
  /**
   * This event is generated once a worker VM has been assigned to run the
   * pipeline.
   */
  export interface Schema$WorkerAssignedEvent {
    /**
     * The worker&#39;s instance name.
     */
    instance: string;
    /**
     * The zone the worker is running in.
     */
    zone: string;
  }
  /**
   * This event is generated when the worker VM that was assigned to the
   * pipeline has been released (i.e., deleted).
   */
  export interface Schema$WorkerReleasedEvent {
    /**
     * The worker&#39;s instance name.
     */
    instance: string;
    /**
     * The zone the worker was running in.
     */
    zone: string;
  }

  export class Resource$Annotations {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.annotations.batchCreate
     * @desc Creates one or more new annotations atomically. All annotations
     * must belong to the same annotation set. Caller must have WRITE permission
     * for this annotation set. For optimal performance, batch positionally
     * adjacent annotations together.  If the request has a systemic issue, such
     * as an attempt to write to an inaccessible annotation set, the entire RPC
     * will fail accordingly. For lesser data issues, when possible an error
     * will be isolated to the corresponding batch entry in the response; the
     * remaining well formed annotations will be created normally.  For details
     * on the requirements for each individual annotation resource, see
     * CreateAnnotation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.batchCreate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.batchCreate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchCreateAnnotationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchCreate(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$BatchCreateAnnotationsResponse>;
    batchCreate(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BatchCreateAnnotationsResponse>,
        callback?: BodyResponseCallback<Schema$BatchCreateAnnotationsResponse>):
        void;
    batchCreate(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$BatchCreateAnnotationsResponse>,
        callback?: BodyResponseCallback<Schema$BatchCreateAnnotationsResponse>):
        void|AxiosPromise<Schema$BatchCreateAnnotationsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations:batchCreate')
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
        createAPIRequest<Schema$BatchCreateAnnotationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchCreateAnnotationsResponse>(
            parameters);
      }
    }


    /**
     * genomics.annotations.create
     * @desc Creates a new annotation. Caller must have WRITE permission for the
     * associated annotation set.  The following fields are required:  *
     * annotationSetId * referenceName or   referenceId  ### Transcripts  For
     * annotations of type TRANSCRIPT, the following fields of transcript must
     * be provided:  * exons.start * exons.end  All other fields may be
     * optionally specified, unless documented as being server-generated (for
     * example, the `id` field). The annotated range must be no longer than
     * 100Mbp (mega base pairs). See the Annotation resource for additional
     * restrictions on each field.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Annotation>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|AxiosPromise<Schema$Annotation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }


    /**
     * genomics.annotations.delete
     * @desc Deletes an annotation. Caller must have WRITE permission for the
     * associated annotation set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be deleted.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations/{annotationId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.annotations.get
     * @desc Gets an annotation. Caller must have READ permission for the
     * associated annotation set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be retrieved.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Annotation>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|AxiosPromise<Schema$Annotation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations/{annotationId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }


    /**
     * genomics.annotations.search
     * @desc Searches for annotations that match the given criteria. Results are
     * ordered by genomic coordinate (by reference sequence, then position).
     * Annotations with equivalent genomic coordinates are returned in an
     * unspecified order. This order is consistent, such that two queries for
     * the same content (regardless of page size) yield annotations in the same
     * order across their respective streams of paginated responses. Caller must
     * have READ permission for the queried annotation sets.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var annotationsPage = response['annotations'];
     *     if (!annotationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < annotationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `annotationsPage`: console.log(JSON.stringify(annotationsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.annotations.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.annotations.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchAnnotationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchAnnotationsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchAnnotationsResponse>,
        callback?: BodyResponseCallback<Schema$SearchAnnotationsResponse>):
        void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchAnnotationsResponse>,
        callback?: BodyResponseCallback<Schema$SearchAnnotationsResponse>):
        void|AxiosPromise<Schema$SearchAnnotationsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations/search')
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
        createAPIRequest<Schema$SearchAnnotationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchAnnotationsResponse>(parameters);
      }
    }


    /**
     * genomics.annotations.update
     * @desc Updates an annotation. Caller must have WRITE permission for the
     * associated dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation to be updated.
     *     annotationId: 'my-annotation-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotations.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationId The ID of the annotation to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, variant, transcript, and info. If unspecified, all mutable fields will be updated.
     * @param {().Annotation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Annotation>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Annotation>,
        callback?: BodyResponseCallback<Schema$Annotation>):
        void|AxiosPromise<Schema$Annotation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotations/{annotationId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['annotationId'],
        pathParams: ['annotationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Annotation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Annotation>(parameters);
      }
    }
  }

  export class Resource$Annotationsets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.annotationsets.create
     * @desc Creates a new annotation set. Caller must have WRITE permission for
     * the associated dataset.  The following fields are required:    *
     * datasetId   * referenceSetId  All other fields may be optionally
     * specified, unless documented as being server-generated (for example, the
     * `id` field).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotationsets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().AnnotationSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$AnnotationSet>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>):
        void|AxiosPromise<Schema$AnnotationSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotationsets')
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
        createAPIRequest<Schema$AnnotationSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationSet>(parameters);
      }
    }


    /**
     * genomics.annotationsets.delete
     * @desc Deletes an annotation set. Caller must have WRITE permission for
     * the associated annotation set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be deleted.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotationsets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.annotationsets.get
     * @desc Gets an annotation set. Caller must have READ permission for the
     * associated dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be retrieved.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotationsets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be retrieved.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$AnnotationSet>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>):
        void|AxiosPromise<Schema$AnnotationSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationSet>(parameters);
      }
    }


    /**
     * genomics.annotationsets.search
     * @desc Searches for annotation sets that match the given criteria.
     * Annotation sets are returned in an unspecified order. This order is
     * consistent, such that two queries for the same content (regardless of
     * page size) yield annotation sets in the same order across their
     * respective streams of paginated responses. Caller must have READ
     * permission for the queried datasets.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var annotationSetsPage = response['annotationSets'];
     *     if (!annotationSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < annotationSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `annotationSetsPage`: console.log(JSON.stringify(annotationSetsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.annotationsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.annotationsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotationsets.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchAnnotationSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchAnnotationSetsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchAnnotationSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchAnnotationSetsResponse>):
        void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchAnnotationSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchAnnotationSetsResponse>):
        void|AxiosPromise<Schema$SearchAnnotationSetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotationsets/search')
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
        createAPIRequest<Schema$SearchAnnotationSetsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchAnnotationSetsResponse>(
            parameters);
      }
    }


    /**
     * genomics.annotationsets.update
     * @desc Updates an annotation set. The update must respect all mutability
     * restrictions and other invariants described on the annotation set
     * resource. Caller must have WRITE permission for the associated dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the annotation set to be updated.
     *     annotationSetId: 'my-annotation-set-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.annotationsets.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.annotationsets.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.annotationSetId The ID of the annotation set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Mutable fields are name, source_uri, and info. If unspecified, all mutable fields will be updated.
     * @param {().AnnotationSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$AnnotationSet>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$AnnotationSet>,
        callback?: BodyResponseCallback<Schema$AnnotationSet>):
        void|AxiosPromise<Schema$AnnotationSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/annotationsets/{annotationSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['annotationSetId'],
        pathParams: ['annotationSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AnnotationSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AnnotationSet>(parameters);
      }
    }
  }

  export class Resource$Callsets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.callsets.create
     * @desc Creates a new call set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.callsets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().CallSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$CallSet>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>):
        void|AxiosPromise<Schema$CallSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/callsets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CallSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CallSet>(parameters);
      }
    }


    /**
     * genomics.callsets.delete
     * @desc Deletes a call set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set to be deleted.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.callsets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/callsets/{callSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.callsets.get
     * @desc Gets a call set by ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.callsets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$CallSet>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>):
        void|AxiosPromise<Schema$CallSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/callsets/{callSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CallSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CallSet>(parameters);
      }
    }


    /**
     * genomics.callsets.patch
     * @desc Updates a call set.  This method supports patch semantics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the call set to be updated.
     *     callSetId: 'my-call-set-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these
     * properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.callsets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.callsets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.callSetId The ID of the call set to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {().CallSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$CallSet>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$CallSet>,
        callback?: BodyResponseCallback<Schema$CallSet>):
        void|AxiosPromise<Schema$CallSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/callsets/{callSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['callSetId'],
        pathParams: ['callSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$CallSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CallSet>(parameters);
      }
    }


    /**
     * genomics.callsets.search
     * @desc Gets a list of call sets matching the criteria.  Implements
     * [GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var callSetsPage = response['callSets'];
     *     if (!callSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < callSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `callSetsPage`: console.log(JSON.stringify(callSetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.callsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.callsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.callsets.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchCallSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchCallSetsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchCallSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchCallSetsResponse>): void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchCallSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchCallSetsResponse>):
        void|AxiosPromise<Schema$SearchCallSetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/callsets/search')
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
        createAPIRequest<Schema$SearchCallSetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchCallSetsResponse>(parameters);
      }
    }
  }

  export class Resource$Datasets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.datasets.create
     * @desc Creates a new dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Dataset>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|AxiosPromise<Schema$Dataset> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * genomics.datasets.delete
     * @desc Deletes a dataset and all of its contents (all read group sets,
     * reference sets, variant sets, call sets, annotation sets, etc.) This is
     * reversible (up to one week after the deletion) via the datasets.undelete
     * operation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be deleted.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets/{datasetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.datasets.get
     * @desc Gets a dataset by ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Dataset>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|AxiosPromise<Schema$Dataset> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets/{datasetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * genomics.datasets.getIamPolicy
     * @desc Gets the access control policy for the dataset. This is empty if
     * the policy or resource does not exist.  See <a
     * href="/iam/docs/managing-policies#getting_a_policy">Getting a Policy</a>
     * for more information.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format
     * is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.getIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {().GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * genomics.datasets.list
     * @desc Lists datasets within a project.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var datasetsPage = response['datasets'];
     *     if (!datasetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < datasetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `datasetsPage`: console.log(JSON.stringify(datasetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.datasets.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.datasets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 50. The maximum value is 1024.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {string=} params.projectId Required. The Google Cloud project ID to list datasets for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ListDatasetsResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback?: BodyResponseCallback<Schema$ListDatasetsResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListDatasetsResponse>,
        callback?: BodyResponseCallback<Schema$ListDatasetsResponse>):
        void|AxiosPromise<Schema$ListDatasetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListDatasetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDatasetsResponse>(parameters);
      }
    }


    /**
     * genomics.datasets.patch
     * @desc Updates a dataset.  This method supports patch semantics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be updated.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these
     * properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be updated.
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, the only mutable field is name. The only acceptable value is "name". If unspecified, all mutable fields will be updated.
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Dataset>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|AxiosPromise<Schema$Dataset> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets/{datasetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }


    /**
     * genomics.datasets.setIamPolicy
     * @desc Sets the access control policy on the specified dataset. Replaces
     * any existing policy.  See <a
     * href="/iam/docs/managing-policies#setting_a_policy">Setting a Policy</a>
     * for more information.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format
     * is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.setIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * genomics.datasets.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource.
     * See <a href="/iam/docs/managing-policies#testing_permissions">Testing
     * Permissions</a> for more information.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which policy is being specified. Format
     * is
     *     // `datasets/<dataset ID>`.
     *     resource_: 'datasets/my-dataset',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.testIamPermissions(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which policy is being specified. Format is `datasets/<dataset ID>`.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }


    /**
     * genomics.datasets.undelete
     * @desc Undeletes a dataset by restoring a dataset which was deleted via
     * this API.  This operation is only possible for a week after the deletion
     * occurred.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the dataset to be undeleted.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.datasets.undelete(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.datasets.undelete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId The ID of the dataset to be undeleted.
     * @param {().UndeleteDatasetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Dataset>;
    undelete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>): void;
    undelete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Dataset>,
        callback?: BodyResponseCallback<Schema$Dataset>):
        void|AxiosPromise<Schema$Dataset> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/datasets/{datasetId}:undelete')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['datasetId'],
        pathParams: ['datasetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }
  }

  export class Resource$Operations {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation. The
     * server makes a best effort to cancel the operation, but success is not
     * guaranteed. Clients may use Operations.GetOperation or
     * Operations.ListOperations to check whether the cancellation succeeded or
     * the operation completed despite cancellation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource to be cancelled.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.operations.cancel(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.operations.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be cancelled.
     * @param {().CancelOperationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    cancel(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    cancel(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}:cancel')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: 'operations/my-operation',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * genomics.operations.list
     * @desc Lists operations that match the specified filter in the request.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation's parent resource.
     *     name: 'operations',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var operationsPage = response['operations'];
     *     if (!operationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < operationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `operationsPage`: console.log(JSON.stringify(operationsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.operations.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.operations.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.operations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter A string for filtering Operations. In v2alpha1, the following filter fields are supported&#58;  * createTime&#58; The time this job was created * events&#58; The set of event (names) that have occurred while running   the pipeline.  The &#58; operator can be used to determine if a   particular event has occurred. * error&#58; If the pipeline is running, this value is NULL.  Once the   pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key.  In v1 and v1alpha2, the following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
     * @param {string} params.name The name of the operation's parent resource.
     * @param {integer=} params.pageSize The maximum number of results to return. If unspecified, defaults to 256. The maximum value is 2048.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ListOperationsResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListOperationsResponse>,
        callback?: BodyResponseCallback<Schema$ListOperationsResponse>):
        void|AxiosPromise<Schema$ListOperationsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export class Resource$Readgroupsets {
    root: Genomics;
    coveragebuckets: Resource$Readgroupsets$Coveragebuckets;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
      this.coveragebuckets = new Resource$Readgroupsets$Coveragebuckets(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.readgroupsets.delete
     * @desc Deletes a read group set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the read group set to be deleted. The caller must have
     * WRITE
     *     // permissions to the dataset associated with this read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set to be deleted. The caller must have WRITE permissions to the dataset associated with this read group set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.readgroupsets.export
     * @desc Exports a read group set to a BAM file in Google Cloud Storage.
     * Note that currently there may be some differences between exported BAM
     * files and the original BAM file at the time of import. See
     * ImportReadGroupSets for caveats.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the read group set to export. The caller must
     * have
     *     // READ access to this read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.export(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId Required. The ID of the read group set to export. The caller must have READ access to this read group set.
     * @param {().ExportReadGroupSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * genomics.readgroupsets.get
     * @desc Gets a read group set by ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the read group set.
     *     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.readGroupSetId The ID of the read group set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$ReadGroupSet>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReadGroupSet>,
        callback?: BodyResponseCallback<Schema$ReadGroupSet>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReadGroupSet>,
        callback?: BodyResponseCallback<Schema$ReadGroupSet>):
        void|AxiosPromise<Schema$ReadGroupSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReadGroupSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReadGroupSet>(parameters);
      }
    }


    /**
     * genomics.readgroupsets.import
     * @desc Creates read group sets by asynchronously importing the provided
     * information.  The caller must have WRITE permissions to the dataset.  ##
     * Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import  -
     * Tags will be converted to strings - tag types are not preserved -
     * Comments (`@CO`) in the input file header will not be preserved -
     * Original header order of references (`@SQ`) will not be preserved - Any
     * reverse stranded unmapped reads will be reverse complemented, and their
     * qualities (also the "BQ" and "OQ" tags, if any) will be reversed -
     * Unmapped reads will be stripped of positional information (reference name
     * and position)
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.readgroupsets.import(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ImportReadGroupSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
import(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void|AxiosPromise<Schema$Operation> {if(typeof options === 'function') {
    callback = options;
    options = {};
    } if(typeof params === 'function') {
    callback = params;
    params = {};
    } options = options || {}; const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v1/readgroupsets:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: [], pathParams: [], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$Operation>(parameters, callback);
    } else { return createAPIRequest<Schema$Operation>(parameters);
    }}


    /**
 * genomics.readgroupsets.patch
 * @desc Updates a read group set.  This method supports patch semantics.
 * @example
 * * // BEFORE RUNNING:
* // ---------------
* // 1. If not already done, enable the Genomics API
* //    and check the quota for your project at
* //    https://console.developers.google.com/apis/api/genomics
* // 2. This sample uses Application Default Credentials for authentication.
* //    If not already done, install the gcloud CLI from
* //    https://cloud.google.com/sdk and run
* //    `gcloud beta auth application-default login`.
* //    For more information, see
* //    https://developers.google.com/identity/protocols/application-default-credentials
* // 3. Install the Node.js client library by running
* //    `npm install googleapis --save`
*
* var google = require('googleapis');
* var genomics = google.genomics('v1');
*
* authorize(function(authClient) {
*   var request = {
*     // The ID of the read group set to be updated. The caller must have WRITE
*     // permissions to the dataset associated with this read group set.
*     readGroupSetId: 'my-read-group-set-id',  // TODO: Update placeholder value.
*
*     resource: {
*       // TODO: Add desired properties to the request body. Only these properties
*       // will be changed.
*     },
*
*     auth: authClient,
*   };
*
*   genomics.readgroupsets.patch(request, function(err, response) {
*     if (err) {
*       console.error(err);
*       return;
*     }
*
*     // TODO: Change code below to process the `response` object:
*     console.log(JSON.stringify(response, null, 2));
*   });
* });
*
* function authorize(callback) {
*   google.auth.getApplicationDefault(function(err, authClient) {
*     if (err) {
*       console.error('authentication failed: ', err);
*       return;
*     }
*     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
*       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
*       authClient = authClient.createScoped(scopes);
*     }
*     callback(authClient);
*   });
* }
 * @alias genomics.readgroupsets.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.readGroupSetId The ID of the read group set to be updated. The caller must have WRITE permissions to the dataset associated with this read group set.
 * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * name. * referenceSetId.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
 * @param {().ReadGroupSet} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$ReadGroupSet>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReadGroupSet>,
        callback?: BodyResponseCallback<Schema$ReadGroupSet>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReadGroupSet>,
        callback?: BodyResponseCallback<Schema$ReadGroupSet>):
        void|AxiosPromise<Schema$ReadGroupSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/readgroupsets/{readGroupSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReadGroupSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReadGroupSet>(parameters);
      }
    }


    /**
     * genomics.readgroupsets.search
     * @desc Searches for read group sets matching the criteria.  Implements
     * [GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var readGroupSetsPage = response['readGroupSets'];
     *     if (!readGroupSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < readGroupSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `readGroupSetsPage`: console.log(JSON.stringify(readGroupSetsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.readgroupsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.readgroupsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchReadGroupSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchReadGroupSetsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReadGroupSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReadGroupSetsResponse>):
        void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReadGroupSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReadGroupSetsResponse>):
        void|AxiosPromise<Schema$SearchReadGroupSetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/readgroupsets/search')
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
        createAPIRequest<Schema$SearchReadGroupSetsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchReadGroupSetsResponse>(parameters);
      }
    }
  }
  export class Resource$Readgroupsets$Coveragebuckets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.readgroupsets.coveragebuckets.list
     * @desc Lists fixed width coverage buckets for a read group set, each of
     * which correspond to a range of a reference sequence. Each bucket
     * summarizes coverage information across its corresponding genomic range.
     * Coverage is defined as the number of reads which are aligned to a given
     * base in the reference sequence. Coverage buckets are available at several
     * precomputed bucket widths, enabling retrieval of various coverage 'zoom
     * levels'. The caller must have READ permissions for the target read group
     * set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the read group set over which coverage is
     * requested. readGroupSetId: 'my-read-group-set-id',  // TODO: Update
     * placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var coverageBucketsPage = response['coverageBuckets'];
     *     if (!coverageBucketsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < coverageBucketsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `coverageBucketsPage`: console.log(JSON.stringify(coverageBucketsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.readgroupsets.coveragebuckets.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.readgroupsets.coveragebuckets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.readgroupsets.coveragebuckets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.end The end position of the range on the reference, 0-based exclusive. If specified, `referenceName` must also be specified. If unset or 0, defaults to the length of the reference.
     * @param {integer=} params.pageSize The maximum number of results to return in a single page. If unspecified, defaults to 1024. The maximum value is 2048.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {string} params.readGroupSetId Required. The ID of the read group set over which coverage is requested.
     * @param {string=} params.referenceName The name of the reference to query, within the reference set associated with this query. Optional.
     * @param {string=} params.start The start position of the range on the reference, 0-based inclusive. If specified, `referenceName` must also be specified. Defaults to 0.
     * @param {string=} params.targetBucketWidth The desired width of each reported coverage bucket in base pairs. This will be rounded down to the nearest precomputed bucket width; the value of which is returned as `bucketWidth` in the response. Defaults to infinity (each bucket spans an entire reference sequence) or the length of the target range, if specified. The smallest precomputed `bucketWidth` is currently 2048 base pairs; this is subject to change.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ListCoverageBucketsResponse>;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListCoverageBucketsResponse>,
        callback?: BodyResponseCallback<Schema$ListCoverageBucketsResponse>):
        void;
    list(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$ListCoverageBucketsResponse>,
        callback?: BodyResponseCallback<Schema$ListCoverageBucketsResponse>):
        void|AxiosPromise<Schema$ListCoverageBucketsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1/readgroupsets/{readGroupSetId}/coveragebuckets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['readGroupSetId'],
        pathParams: ['readGroupSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCoverageBucketsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCoverageBucketsResponse>(parameters);
      }
    }
  }


  export class Resource$Reads {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.reads.search
     * @desc Gets a list of reads for one or more read group sets.  Reads search
     * operates over a genomic coordinate space of reference sequence & position
     * defined over the reference sequences to which the requested read group
     * sets are aligned.  If a target positional range is specified, search
     * returns all reads whose alignment to the reference genome overlap the
     * range. A query which specifies only read group set IDs yields all reads
     * in those read group sets, including unmapped reads.  All reads returned
     * (including reads on subsequent pages) are ordered by genomic coordinate
     * (by reference sequence, then position). Reads with equivalent genomic
     * coordinates are returned in an unspecified order. This order is
     * consistent, such that two queries for the same content (regardless of
     * page size) yield reads in the same order across their respective streams
     * of paginated responses.  Implements
     * [GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var alignmentsPage = response['alignments'];
     *     if (!alignmentsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < alignmentsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `alignmentsPage`: console.log(JSON.stringify(alignmentsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.reads.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.reads.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.reads.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchReadsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchReadsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReadsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReadsResponse>): void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReadsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReadsResponse>):
        void|AxiosPromise<Schema$SearchReadsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/reads/search').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SearchReadsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchReadsResponse>(parameters);
      }
    }
  }

  export class Resource$References {
    root: Genomics;
    bases: Resource$References$Bases;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
      this.bases = new Resource$References$Bases(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.references.get
     * @desc Gets a reference.  Implements
     * [GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the reference.
     *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.references.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.references.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceId The ID of the reference.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Reference>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reference>,
        callback?: BodyResponseCallback<Schema$Reference>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Reference>,
        callback?: BodyResponseCallback<Schema$Reference>):
        void|AxiosPromise<Schema$Reference> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/references/{referenceId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Reference>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Reference>(parameters);
      }
    }


    /**
     * genomics.references.search
     * @desc Searches for references which match the given criteria.  Implements
     * [GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var referencesPage = response['references'];
     *     if (!referencesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < referencesPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `referencesPage`: console.log(JSON.stringify(referencesPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.references.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.references.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.references.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchReferencesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchReferencesResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReferencesResponse>,
        callback?: BodyResponseCallback<Schema$SearchReferencesResponse>): void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReferencesResponse>,
        callback?: BodyResponseCallback<Schema$SearchReferencesResponse>):
        void|AxiosPromise<Schema$SearchReferencesResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/references/search')
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
        createAPIRequest<Schema$SearchReferencesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchReferencesResponse>(parameters);
      }
    }
  }
  export class Resource$References$Bases {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.references.bases.list
     * @desc Lists the bases in a reference, optionally restricted to a range.
     * Implements
     * [GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the reference.
     *     referenceId: 'my-reference-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var nextPageTokenPage = response['nextPageToken'];
     *     if (!nextPageTokenPage) {
     *       return;
     *     }
     *     // TODO: Change code below to process each `nextPageTokenPage`
     * resource: console.log(nextPageTokenPage);
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       genomics.references.bases.list(request, handlePage);
     *     }
     *   };
     *
     *   genomics.references.bases.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.references.bases.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.end The end position (0-based, exclusive) of this query. Defaults to the length of this reference.
     * @param {integer=} params.pageSize The maximum number of bases to return in a single page. If unspecified, defaults to 200Kbp (kilo base pairs). The maximum value is 10Mbp (mega base pairs).
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of `nextPageToken` from the previous response.
     * @param {string} params.referenceId The ID of the reference.
     * @param {string=} params.start The start position (0-based) of this query. Defaults to 0.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$ListBasesResponse>;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ListBasesResponse>,
        callback?: BodyResponseCallback<Schema$ListBasesResponse>): void;
    list(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ListBasesResponse>,
        callback?: BodyResponseCallback<Schema$ListBasesResponse>):
        void|AxiosPromise<Schema$ListBasesResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/references/{referenceId}/bases')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['referenceId'],
        pathParams: ['referenceId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBasesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBasesResponse>(parameters);
      }
    }
  }


  export class Resource$Referencesets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.referencesets.get
     * @desc Gets a reference set.  Implements
     * [GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the reference set.
     *     referenceSetId: 'my-reference-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.referencesets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.referencesets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.referenceSetId The ID of the reference set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any,
        options?: MethodOptions): AxiosPromise<Schema$ReferenceSet>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReferenceSet>,
        callback?: BodyResponseCallback<Schema$ReferenceSet>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$ReferenceSet>,
        callback?: BodyResponseCallback<Schema$ReferenceSet>):
        void|AxiosPromise<Schema$ReferenceSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/referencesets/{referenceSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['referenceSetId'],
        pathParams: ['referenceSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ReferenceSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReferenceSet>(parameters);
      }
    }


    /**
     * genomics.referencesets.search
     * @desc Searches for reference sets which match the given criteria.
     * Implements
     * [GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var referenceSetsPage = response['referenceSets'];
     *     if (!referenceSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < referenceSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `referenceSetsPage`: console.log(JSON.stringify(referenceSetsPage[i],
     * null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.referencesets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.referencesets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.referencesets.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchReferenceSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchReferenceSetsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReferenceSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReferenceSetsResponse>):
        void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchReferenceSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchReferenceSetsResponse>):
        void|AxiosPromise<Schema$SearchReferenceSetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/referencesets/search')
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
        createAPIRequest<Schema$SearchReferenceSetsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchReferenceSetsResponse>(parameters);
      }
    }
  }

  export class Resource$Variants {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.variants.create
     * @desc Creates a new variant.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Variant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variant>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>):
        void|AxiosPromise<Schema$Variant> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Variant>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variant>(parameters);
      }
    }


    /**
     * genomics.variants.delete
     * @desc Deletes a variant.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be deleted.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants/{variantId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.variants.get
     * @desc Gets a variant by ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantId The ID of the variant.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variant>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>):
        void|AxiosPromise<Schema$Variant> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants/{variantId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Variant>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variant>(parameters);
      }
    }


    /**
     * genomics.variants.import
     * @desc Creates variant data by asynchronously importing the provided
     * information.  The variants for import will be merged with any existing
     * variant that matches its reference sequence, start, end, reference bases,
     * and alternative bases. If no such variant exists, a new one will be
     * created. When variants are merged, the call information from the new
     * variant is added to the existing variant, and Variant info fields are
     * merged as specified in infoMergeConfig. As a special case, for
     * single-sample VCF files, QUAL and FILTER fields will be moved to the call
     * level; these are sometimes interpreted in a call-specific context.
     * Imported VCF headers are appended to the metadata already in a variant
     * set.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.import(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.import
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().ImportVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
import(params?: any, options?: MethodOptions): AxiosPromise<Schema$Operation>;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void;
import(params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Operation>, callback?: BodyResponseCallback<Schema$Operation>): void|AxiosPromise<Schema$Operation> {if(typeof options === 'function') {
    callback = options;
    options = {};
    } if(typeof params === 'function') {
    callback = params;
    params = {};
    } options = options || {}; const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/'; const parameters = {options: Object.assign({url: (rootUrl + '/v1/variants:import').replace(/([^:]\/)\/+/g, '$1'), method: 'POST'}, options), params, requiredParams: [], pathParams: [], context: this.getRoot()}; if(callback) {
    createAPIRequest<Schema$Operation>(parameters, callback);
    } else { return createAPIRequest<Schema$Operation>(parameters);
    }}


    /**
 * genomics.variants.merge
 * @desc Merges the given variants with existing variants.  Each variant will be merged with an existing variant that matches its reference sequence, start, end, reference bases, and alternative bases. If no such variant exists, a new one will be created.  When variants are merged, the call information from the new variant is added to the existing variant. Variant info fields are merged as specified in the infoMergeConfig field of the MergeVariantsRequest.  Please exercise caution when using this method!  It is easy to introduce mistakes in existing variants and difficult to back out of them.  For example, suppose you were trying to merge a new variant with an existing one and both variants contain calls that belong to callsets with the same callset ID.      // Existing variant - irrelevant fields trimmed for clarity     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     0,                     1                 ],             }         ]     }      // New variant with conflicting call information     {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  The resulting merged variant would overwrite the existing calls with those from the new variant:      {         "variantSetId": "10473108253681171589",         "referenceName": "1",         "start": "10582",         "referenceBases": "G",         "alternateBases": [             "A"         ],         "calls": [             {                 "callSetId": "10473108253681171589-0",                 "callSetName": "CALLSET0",                 "genotype": [                     1,                     1                 ],             }         ]     }  This may be the desired outcome, but it is up to the user to determine if if that is indeed the case.
 * @example
 * * // BEFORE RUNNING:
* // ---------------
* // 1. If not already done, enable the Genomics API
* //    and check the quota for your project at
* //    https://console.developers.google.com/apis/api/genomics
* // 2. This sample uses Application Default Credentials for authentication.
* //    If not already done, install the gcloud CLI from
* //    https://cloud.google.com/sdk and run
* //    `gcloud beta auth application-default login`.
* //    For more information, see
* //    https://developers.google.com/identity/protocols/application-default-credentials
* // 3. Install the Node.js client library by running
* //    `npm install googleapis --save`
*
* var google = require('googleapis');
* var genomics = google.genomics('v1');
*
* authorize(function(authClient) {
*   var request = {
*     resource: {
*       // TODO: Add desired properties to the request body.
*     },
*
*     auth: authClient,
*   };
*
*   genomics.variants.merge(request, function(err) {
*     if (err) {
*       console.error(err);
*       return;
*     }
*   });
* });
*
* function authorize(callback) {
*   google.auth.getApplicationDefault(function(err, authClient) {
*     if (err) {
*       console.error('authentication failed: ', err);
*       return;
*     }
*     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
*       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
*       authClient = authClient.createScoped(scopes);
*     }
*     callback(authClient);
*   });
* }
 * @alias genomics.variants.merge
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {().MergeVariantsRequest} params.resource Request body data
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
    merge(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    merge(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    merge(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants:merge')
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.variants.patch
     * @desc Updates a variant.  This method supports patch semantics. Returns
     * the modified variant without its calls.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be updated.
     *     variantId: 'my-variant-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these
     * properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variants.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.updateMask An optional mask specifying which fields to update. At this time, mutable fields are names and info. Acceptable values are "names" and "info". If unspecified, all mutable fields will be updated.
     * @param {string} params.variantId The ID of the variant to be updated.
     * @param {().Variant} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Variant>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Variant>,
        callback?: BodyResponseCallback<Schema$Variant>):
        void|AxiosPromise<Schema$Variant> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants/{variantId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['variantId'],
        pathParams: ['variantId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Variant>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Variant>(parameters);
      }
    }


    /**
     * genomics.variants.search
     * @desc Gets a list of variants matching the criteria.  Implements
     * [GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var variantsPage = response['variants'];
     *     if (!variantsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < variantsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `variantsPage`: console.log(JSON.stringify(variantsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.variants.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.variants.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variants.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchVariantsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchVariantsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchVariantsResponse>,
        callback?: BodyResponseCallback<Schema$SearchVariantsResponse>): void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchVariantsResponse>,
        callback?: BodyResponseCallback<Schema$SearchVariantsResponse>):
        void|AxiosPromise<Schema$SearchVariantsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variants/search')
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
        createAPIRequest<Schema$SearchVariantsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchVariantsResponse>(parameters);
      }
    }
  }

  export class Resource$Variantsets {
    root: Genomics;
    constructor(root: Genomics) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * genomics.variantsets.create
     * @desc Creates a new variant set.  The provided variant set must have a
     * valid `datasetId` set - all other fields are optional. Note that the `id`
     * field will be ignored, as this is assigned by the server.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().VariantSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$VariantSet>;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>): void;
    create(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>):
        void|AxiosPromise<Schema$VariantSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$VariantSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VariantSet>(parameters);
      }
    }


    /**
     * genomics.variantsets.delete
     * @desc Deletes a variant set including all variants, call sets, and calls
     * within. This is not reversible.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant set to be deleted.
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId The ID of the variant set to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets/{variantSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * genomics.variantsets.export
     * @desc Exports variant set data to an external destination.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the variant set that contains variant data
     * which
     *     // should be exported. The caller must have READ access to this
     * variant set. variantSetId: 'my-variant-set-id',  // TODO: Update
     * placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.export(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.export
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set that contains variant data which should be exported. The caller must have READ access to this variant set.
     * @param {().ExportVariantSetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    export(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Operation>;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>): void;
    export(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets/{variantSetId}:export')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * genomics.variantsets.get
     * @desc Gets a variant set by ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Required. The ID of the variant set.
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder
     * value.
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.variantSetId Required. The ID of the variant set.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$VariantSet>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>):
        void|AxiosPromise<Schema$VariantSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets/{variantSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$VariantSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VariantSet>(parameters);
      }
    }


    /**
     * genomics.variantsets.patch
     * @desc Updates a variant set using patch semantics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the variant to be updated (must already exist).
     *     variantSetId: 'my-variant-set-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these
     * properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   genomics.variantsets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.updateMask An optional mask specifying which fields to update. Supported fields:  * metadata. * name. * description.  Leaving `updateMask` unset is equivalent to specifying all mutable fields.
     * @param {string} params.variantSetId The ID of the variant to be updated (must already exist).
     * @param {().VariantSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$VariantSet>;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>): void;
    patch(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$VariantSet>,
        callback?: BodyResponseCallback<Schema$VariantSet>):
        void|AxiosPromise<Schema$VariantSet> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets/{variantSetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['variantSetId'],
        pathParams: ['variantSetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$VariantSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VariantSet>(parameters);
      }
    }


    /**
     * genomics.variantsets.search
     * @desc Returns a list of all variant sets matching search criteria.
     * Implements
     * [GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Genomics API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/genomics
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var genomics = google.genomics('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var variantSetsPage = response['variantSets'];
     *     if (!variantSetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < variantSetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in
     * `variantSetsPage`: console.log(JSON.stringify(variantSetsPage[i], null,
     * 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.resource.pageToken = response.nextPageToken;
     *       genomics.variantsets.search(request, handlePage);
     *     }
     *   };
     *
     *   genomics.variantsets.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias genomics.variantsets.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().SearchVariantSetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$SearchVariantSetsResponse>;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchVariantSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchVariantSetsResponse>):
        void;
    search(
        params?: any,
        options?: MethodOptions|
        BodyResponseCallback<Schema$SearchVariantSetsResponse>,
        callback?: BodyResponseCallback<Schema$SearchVariantSetsResponse>):
        void|AxiosPromise<Schema$SearchVariantSetsResponse> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/variantsets/search')
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
        createAPIRequest<Schema$SearchVariantSetsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchVariantSetsResponse>(parameters);
      }
    }
  }
}

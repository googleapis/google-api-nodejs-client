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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Genomics API
 *
 * Upload, process, query, and search Genomics data in the cloud.
 *
 * @example
 * const google = require('googleapis');
 * const genomics = google.genomics('v2alpha1');
 *
 * @namespace genomics
 * @type {Function}
 * @version v2alpha1
 * @variation v2alpha1
 * @param {object=} options Options for Genomics
 */
function Genomics(options) {
  const self = this;
  self._options = options || {};
  self.pipelines = {
    /**
     * genomics.pipelines.run
     * @desc Runs a pipeline.  **Note:** In order to use this method, the
     * Genomics Service Agent must have access to your project.  This is done
     * automatically when the Genomics API is first enabled, but if you delete
     * this permission, or if you have already enabled the Genomics API prior to
     * the launch of the v2alpha1 API, you must disable and re-enable the API to
     * grant the Genomics Service Agent the required permissions.
     * @alias genomics.pipelines.run
     * @memberOf! genomics(v2alpha1)
     *
     * @param {object} params Parameters for request
     * @param {genomics(v2alpha1).RunPipelineRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2alpha1/pipelines:run')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.projects = {
    operations: {
      /**
       * genomics.projects.operations.cancel
       * @desc Starts asynchronous cancellation on a long-running operation. The
       * server makes a best effort to cancel the operation, but success is not
       * guaranteed. Clients may use Operations.GetOperation or
       * Operations.ListOperations to check whether the cancellation succeeded
       * or the operation completed despite cancellation.
       * @alias genomics.projects.operations.cancel
       * @memberOf! genomics(v2alpha1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be cancelled.
       * @param {genomics(v2alpha1).CancelOperationRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2alpha1/{name}:cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * genomics.projects.operations.get
          * @desc Gets the latest state of a long-running operation.  Clients
          * can use this method to poll the operation result at intervals as
          * recommended by the API service.
          * @alias genomics.projects.operations.get
          * @memberOf! genomics(v2alpha1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the operation resource.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2alpha1/{name}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * genomics.projects.operations.list
          * @desc Lists operations that match the specified filter in the
          * request.
          * @alias genomics.projects.operations.list
          * @memberOf! genomics(v2alpha1)
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
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2alpha1/{name}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.workers = {
    /**
     * genomics.workers.checkIn
     * @desc The worker uses this method to retrieve the assigned operation and
     * provide periodic status updates.
     * @alias genomics.workers.checkIn
     * @memberOf! genomics(v2alpha1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The worker id, assigned when it was created.
     * @param {genomics(v2alpha1).CheckInRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkIn(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://genomics.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2alpha1/workers/{id}:checkIn')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef Action
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string[]} commands If specified, overrides the CMD specified in the container.  If the container also has an ENTRYPOINT the values are used as entrypoint arguments.  Otherwise, they are used as a command and arguments to run inside the container.
 * @property {string} entrypoint If specified, overrides the ENTRYPOINT specified in the container.
 * @property {object} environment The environment to pass into the container.  This environment is merged with any values specified in the Pipeline message.  These values overwrite any in the Pipeline message.
 * @property {string[]} flags The set of flags to apply to this action.
 * @property {string} imageUri The URI to pull the container image from.  Note that all images referenced by actions in the pipeline are pulled before the first action runs.  If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline.
 * @property {object} labels Labels to associate with the action.  This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform: eg. localization, debugging, etc).  They are returned in the operation metadata but are otherwise ignored.
 * @property {genomics(v2alpha1).Mount[]} mounts A list of mounts to make available to the action.  In addition to the values specified here, every action has a special virtual disk mounted under /google that contains log files and other operational components.  &lt;ul&gt;   &lt;li&gt;&lt;code&gt;/google/logs&lt;/code&gt;: all logs written during the pipeline   execution are stored here.&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/output&lt;/code&gt;: the combined standard output and   standard error of all actions run as part of the pipeline   execution.&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/action/x/stdout&lt;/code&gt;: the complete contents of   each individual action&#39;s standard output&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/action/x/stderr&lt;/code&gt;: the complete contents of   each individual action&#39;s standard error output&lt;/li&gt; &lt;/ul&gt;
 * @property {string} name An optional name for the container.  The container hostname will be set to this name, making it useful for inter-container communication.  The name must contain only upper and lowercase alphanumeric characters and hypens and cannot start with a hypen.
 * @property {string} pidNamespace The PID namespace to run the action inside.  If unspecified, a separate isolated namespace is used.
 * @property {object} portMappings A map of container to host port mappings for this container.  Note that if the container already specifies exposed ports, the PUBLISH_EXPOSED_PORTS flag should be used instead.  The host port number must be less than 65536.  If it is zero, an unused random port is assigned.  To determine the resulting port number, consult the ContainerStartedEvent in the operation metadata.
 */
/**
 * @typedef CancelOperationRequest
 * @memberOf! genomics(v2alpha1)
 * @type object
 */
/**
 * @typedef CheckInRequest
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {genomics(v2alpha1).Empty} deadlineExpired The deadline has expired and the worker needs more time.
 * @property {object} event A workflow specific event occurred.
 * @property {genomics(v2alpha1).Status} result The operation has finished with the given result.
 */
/**
 * @typedef CheckInResponse
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} deadline The deadline by which the worker must request an extension.  The backend will allow for network transmission time and other delays, but the worker must attempt to transmit the extension request no later than the deadline.
 * @property {object} metadata The metadata that describes the operation assigned to the worker.
 */
/**
 * @typedef ComputeEngine
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string[]} diskNames The names of the disks that were created for this pipeline.
 * @property {string} instanceName The instance on which the operation is running.
 * @property {string} machineType The machine type of the instance.
 * @property {string} zone The availability zone in which the instance resides.
 */
/**
 * @typedef ContainerStartedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {integer} actionId The numeric ID of the action that started this container.
 * @property {string} ipAddress The public IP address that can be used to connect to the container.  This field is only populated when at least one port mapping is present.  If the instance was created with a private address this field will be empty even if port mappings exist.
 * @property {object} portMappings The container to host port mappings installed for this container.  This set will contain any ports exposed using the PUBLISH_EXPOSED_PORTS flag as well as any specified in the Action definition.
 */
/**
 * @typedef ContainerStoppedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {integer} actionId The numeric ID of the action that started this container.
 * @property {integer} exitStatus The exit status of the container.
 */
/**
 * @typedef DelayedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} cause A textual description of the cause of the delay.  The string may change without notice since it is often generated by another service (such as Compute Engine).
 * @property {string[]} metrics If the delay was caused by a resource shortage, this field lists the Compute Engine metrics that are preventing this operation from running (for example, CPUS or INSTANCES).  If the particular metric is not known, a single UNKNOWN metric will be present.
 */
/**
 * @typedef Disk
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} name A user supplied name for the disk, used when mounting it into actions. The name must contain only upper and lowercase alphanumeric characters and hypens and cannot start with a hypen.
 * @property {integer} sizeGb The size, in gigabytes, of the disk to attach.  Note that this value is not configurable for some disk types such as local-ssd.  If the size is not specified, a size of at least 500gb is used to ensure reasonable I/O performance.
 * @property {string} sourceImage An optional image to put on the disk before attaching it to the VM.
 * @property {string} type The Compute Engine disk type.  If unspecified, &#39;standard-pd&#39; is used.
 */
/**
 * @typedef Empty
 * @memberOf! genomics(v2alpha1)
 * @type object
 */
/**
 * @typedef Event
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} description A human readable description of the event.  Note that these strings may change at any time without notice.  Any application logic must use the information in the details field.
 * @property {object} details Machine readable details about the event.
 * @property {string} timestamp The time that the event occurred.
 */
/**
 * @typedef FailedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} cause The human readable description of the cause of the failure.
 * @property {string} code The Google standard error code that best describes this failure.
 */
/**
 * @typedef ImportReadGroupSetsResponse
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string[]} readGroupSetIds IDs of the read group sets that were created.
 */
/**
 * @typedef ImportVariantsResponse
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string[]} callSetIds IDs of the call sets created during the import.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {genomics(v2alpha1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef Metadata
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} createTime The time that the operation was created by the API.
 * @property {genomics(v2alpha1).Event[]} events The list of events that have happened so far during the execution of this operation.
 * @property {object} labels The user defined labels associated with this operation.
 * @property {genomics(v2alpha1).Pipeline} pipeline The pipeline this operation represents.
 */
/**
 * @typedef Mount
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} disk The name of the disk to mount, as specified in the resources section.
 * @property {string} path The path to mount the disk at inside the container.
 * @property {boolean} readOnly If true, the disk is mounted read only inside the container.
 */
/**
 * @typedef Network
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} name The network name to attach the VM&#39;s network interface to.  If unspecified, the global default network is used.
 * @property {boolean} usePrivateAddress If set to true, do not attach a public IP address to the VM.  Note that without an public IP address, additional configuration is required to allow the VM to access Google services.  See https://cloud.google.com/vpc/docs/configure-private-google-access for more information.
 */
/**
 * @typedef Operation
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {genomics(v2alpha1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata An OperationMetadata or Metadata object. This will always be returned with the Operation.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. For example&amp;#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
 * @property {object} response If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For pipelines and exports, an Empty response is returned.
 */
/**
 * @typedef OperationEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} description Required description of event.
 * @property {string} endTime Optional time of when event finished. An event can have a start time and no finish time. If an event has a finish time, there must be a start time.
 * @property {string} startTime Optional time of when event started.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} clientId This field is deprecated. Use `labels` instead. Optionally provided by the caller when submitting the request that creates the operation.
 * @property {string} createTime The time at which the job was submitted to the Genomics service.
 * @property {string} endTime The time at which the job stopped running.
 * @property {genomics(v2alpha1).OperationEvent[]} events Optional event messages that were generated during the job&#39;s execution. This also contains any warnings that were generated during import or export.
 * @property {object} labels Optionally provided by the caller when submitting the request that creates the operation.
 * @property {string} projectId The Google Cloud Project in which the job is scoped.
 * @property {object} request The original request that started the operation. Note that this will be in current version of the API. If the operation was started with v1beta2 API and a GetOperation is performed on v1 API, a v1 request will be returned.
 * @property {object} runtimeMetadata Runtime metadata on this Operation.
 * @property {string} startTime The time at which the job began to run.
 */
/**
 * @typedef Pipeline
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {genomics(v2alpha1).Action[]} actions The list of actions to execute, in the order they are specified.
 * @property {object} environment The environment to pass into every action.  Each action may also specify additional environment variables but cannot delete an entry from this map (though they may overwrite it with a different value).
 * @property {genomics(v2alpha1).Resources} resources The resources required for execution.
 */
/**
 * @typedef PullStartedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} imageUri The URI of the image that was pulled.
 */
/**
 * @typedef PullStoppedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} imageUri The URI of the image that was pulled.
 */
/**
 * @typedef Resources
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} projectId The customer project ID to allocate resources in.
 * @property {string[]} regions The list of regions allowed for VM allocation.  If set, the zones field must not be set.
 * @property {genomics(v2alpha1).VirtualMachine} virtualMachine The virtual machine specification.
 * @property {string[]} zones The list of zones allowed for VM allocation.  If set, the regions field must not be set.
 */
/**
 * @typedef RunPipelineRequest
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {object} labels User defined labels to associate with the returned operation.  These labels are not propogated to any Google Cloud Platform resources used by the operation, and may be modified at any time.  To associate labels with resources created while executing the operation, see the appropriate resource message (i.e., VirtualMachine).
 * @property {genomics(v2alpha1).Pipeline} pipeline The description of the pipeline to run.
 */
/**
 * @typedef RuntimeMetadata
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {genomics(v2alpha1).ComputeEngine} computeEngine Execution information specific to Google Compute Engine.
 */
/**
 * @typedef ServiceAccount
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} email Email address of the service account.  If not specified, the default compute engine service account for the project will be used.
 * @property {string[]} scopes List of scopes to be enabled for this service account on the VM, in addition to the Google Genomics API scope.
 */
/**
 * @typedef Status
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef UnexpectedExitStatusEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {integer} actionId The numeric ID of the action that started the container.
 * @property {integer} exitStatus The exit status of the container.
 */
/**
 * @typedef VirtualMachine
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {integer} bootDiskSizeGb The size of the boot disk, in gigabytes. The boot disk must be large enough to accommodate all of the docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used.
 * @property {string} bootImage The host operating system image to use.  At present, only Container Optimized OS images may be used.  The default value is &quot;projects/cos-cloud/global/images/family/cos-stable&quot; which selects the latest stable release of Container Optimized OS.  This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines.  To test a pipeline against the beta release of COS, use the value &quot;projects/cos-cloud/global/images/family/cos-beta&quot;.
 * @property {string} cpuPlatform The CPU platform to request.  An instance based on a newer platform may be allocated but never one with less capabilities.  The value of this parameter must be a valid Compute Engine CPU platform name (such as &quot;Intel Skylake&quot;).  This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact.  For more information about the effect of this parameter, please visit https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.
 * @property {genomics(v2alpha1).Disk[]} disks The list of disks to create and attach to the VM.
 * @property {object} labels Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the name and value restrictions on VM labels imposed by Compute Engine.  These labels are applied at creation time to the VM and are applied on a best-effort basis to attached disk resources shortly after VM creation.
 * @property {string} machineType The machine type of the virtual machine to create.  Must be the short name of a standard machine type (such as &quot;n1-standard-1&quot;) or a custom machine type (such as &quot;custom-1-4096&quot;).
 * @property {genomics(v2alpha1).Network} network The VM network configuration.
 * @property {boolean} preemptible If true, allocate a preemptible VM.
 * @property {genomics(v2alpha1).ServiceAccount} serviceAccount The service account to install on the VM.  This account does not need any permissions other than those required by the pipeline.
 */
/**
 * @typedef WorkerAssignedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} instance The worker&#39;s instance name.
 * @property {string} zone The zone the worker is running in.
 */
/**
 * @typedef WorkerReleasedEvent
 * @memberOf! genomics(v2alpha1)
 * @type object
 * @property {string} instance The worker&#39;s instance name.
 * @property {string} zone The zone the worker was running in.
 */

export = Genomics;

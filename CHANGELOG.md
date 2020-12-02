# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/googleapis?activeTab=versions

## [66.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v65.0.0...v66.0.0) (2020-12-02)


### ⚠ BREAKING CHANGES

* **servicenetworking:** This release has breaking changes.
    #### servicenetworking:v1beta
    The following keys were deleted:
    - schemas.ConsumerConfig.properties.reservedRanges.items.type
* **servicedirectory:** This release has breaking changes.
    #### servicedirectory:v1beta1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **pubsub:** This release has breaking changes.
* **notebooks:** This release has breaking changes.
    #### notebooks:v1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **ml:** This release has breaking changes.
    #### ml:v1
    The following keys were deleted:
    - schemas.GoogleIamV1__Binding.properties.bindingId.type
* **deploymentmanager:** This release has breaking changes.
    #### deploymentmanager:alpha
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **datacatalog:** This release has breaking changes.
    #### datacatalog:v1beta1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **containeranalysis:** This release has breaking changes.
    #### containeranalysis:v1alpha1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **compute:** This release has breaking changes.
    #### compute:alpha
    The following keys were deleted:
    - schemas.FirewallPolicyRule.properties.preview.description
    - schemas.FirewallPolicyRule.properties.preview.type
* **cloudtasks:** This release has breaking changes.
    #### cloudtasks:v2beta2
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **cloudiot:** This release has breaking changes.
    #### cloudiot:v1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type
* **admin:** This release has breaking changes.
    #### admin:datatransfer_v1
    The following keys were changed:
    - schemas.Application.description
    - schemas.ApplicationsListResponse.description
    - schemas.DataTransfer.description
    - schemas.DataTransfersListResponse.description
    - title
* **privateca:** This release has breaking changes.
    #### privateca:v1beta1
    The following keys were deleted:
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.description
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.flatPath
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.httpMethod
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.id
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameterOrder
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.certificateRevocationListId.description
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.certificateRevocationListId.location
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.certificateRevocationListId.type
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.parent.description
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.parent.location
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.parent.pattern
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.parent.required
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.parent.type
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.requestId.description
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.requestId.location
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.parameters.requestId.type
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.path
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.request.$ref
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.response.$ref
    - resources.projects.resources.locations.resources.certificateAuthorities.resources.certificateRevocationLists.methods.create.scopes
    - schemas.Binding.properties.bindingId.type
* **games:** This release has breaking changes.
    #### games:v1
    The following keys were deleted:
    - schemas.SnapshotCoverImageResource.properties.height.readOnly
    - schemas.SnapshotCoverImageResource.properties.mimeType.readOnly
    - schemas.SnapshotCoverImageResource.properties.width.readOnly
* **dataflow:** This release has breaking changes.
    #### dataflow:v1b3
    The following keys were deleted:
    - schemas.LaunchFlexTemplateParameter.properties.transformNameMappings.additionalProperties.type
    - schemas.LaunchFlexTemplateParameter.properties.transformNameMappings.description
    - schemas.LaunchFlexTemplateParameter.properties.transformNameMappings.type
    - schemas.LaunchFlexTemplateParameter.properties.update.description
    - schemas.LaunchFlexTemplateParameter.properties.update.type
* **binaryauthorization:** This release has breaking changes.
    #### binaryauthorization:v1beta1
    The following keys were deleted:
    - schemas.Binding.properties.bindingId.type

### Features

* **actions:** switch to GitHub action for releases ([#2458](https://www.github.com/googleapis/google-api-nodejs-client/issues/2458)) ([d473ac3](https://www.github.com/googleapis/google-api-nodejs-client/commit/d473ac398401071c98f514d89b4787e063935c90))
* regenerate index files ([eaa1128](https://www.github.com/googleapis/google-api-nodejs-client/commit/eaa1128d5439096bea9d40b0da0796e9f044215c))
* **adexchangebuyer2:** update the API ([92b94ae](https://www.github.com/googleapis/google-api-nodejs-client/commit/92b94ae7a3ace22248950961c6367eff2b3c15ff))
* **admin:** update the API ([54a817b](https://www.github.com/googleapis/google-api-nodejs-client/commit/54a817be9eb8c44f2ffdf91c9f26764cebb9a614))
* **analyticsdata:** update the API ([88fac76](https://www.github.com/googleapis/google-api-nodejs-client/commit/88fac764b1e6f86ecd1910ccbd0d4bd24fa5e6a7))
* **androidmanagement:** update the API ([008eee9](https://www.github.com/googleapis/google-api-nodejs-client/commit/008eee9e1c4ec00ffd77ede4a244c746ab976c2e))
* **appengine:** update the API ([5940274](https://www.github.com/googleapis/google-api-nodejs-client/commit/59402743c973430fc585ae4236afc2c0adeb9a35))
* **binaryauthorization:** update the API ([5a07026](https://www.github.com/googleapis/google-api-nodejs-client/commit/5a07026503964eea57fa13ef37faf9877d2da186))
* **cloudiot:** update the API ([092044c](https://www.github.com/googleapis/google-api-nodejs-client/commit/092044cdf2582120fb91bda59daf5ed69850997b))
* **cloudtasks:** update the API ([44eaaf6](https://www.github.com/googleapis/google-api-nodejs-client/commit/44eaaf676778a5b7d0babd4ca51770e61dc45f05))
* **compute:** update the API ([ada555e](https://www.github.com/googleapis/google-api-nodejs-client/commit/ada555e192f300bc0ad949dc731c2fec52d22baf))
* **containeranalysis:** update the API ([25aeded](https://www.github.com/googleapis/google-api-nodejs-client/commit/25aededd5feba135b44d818af99960e9a4afe116))
* **datacatalog:** update the API ([24a2a81](https://www.github.com/googleapis/google-api-nodejs-client/commit/24a2a815579213a50b92348d1d276d62aabfe53f))
* **dataflow:** update the API ([2c4e03f](https://www.github.com/googleapis/google-api-nodejs-client/commit/2c4e03fad97b6984e6dee6f5086bd30d401536fb))
* **dataflow:** update the API ([6309919](https://www.github.com/googleapis/google-api-nodejs-client/commit/63099196a932f8af1e0258e7f986ff21dbaa0527))
* **deploymentmanager:** update the API ([106196e](https://www.github.com/googleapis/google-api-nodejs-client/commit/106196eda5a6ecc5cc2180447001faae04f2ce00))
* **dialogflow:** update the API ([e510c94](https://www.github.com/googleapis/google-api-nodejs-client/commit/e510c9496d2dd8c16fd67d7c6342b84029799594))
* **games:** update the API ([3f60e6b](https://www.github.com/googleapis/google-api-nodejs-client/commit/3f60e6bf6ee8718447fed1ef1628e1290179896a))
* **games:** update the API ([53dde6a](https://www.github.com/googleapis/google-api-nodejs-client/commit/53dde6ab2e38dab7331074d65129058775976648))
* **gmailpostmastertools:** update the API ([b9b88aa](https://www.github.com/googleapis/google-api-nodejs-client/commit/b9b88aa9d7a6ec8f0f9dcd4711642d0c0f247be5))
* **iam:** update the API ([564bb66](https://www.github.com/googleapis/google-api-nodejs-client/commit/564bb660183fe8cf7a82b2f1ad1272a665ede05d))
* **licensing:** update the API ([94decb8](https://www.github.com/googleapis/google-api-nodejs-client/commit/94decb864865ac82a5d8b549b1319a3bcb370a15))
* **lifesciences:** update the API ([2ababff](https://www.github.com/googleapis/google-api-nodejs-client/commit/2ababffd979392c00c8e9ca0dd13e3daf4c77783))
* **logging:** update the API ([94d1c14](https://www.github.com/googleapis/google-api-nodejs-client/commit/94d1c1483c8547b9d70feb73caec746285aad716))
* **ml:** update the API ([49df4fe](https://www.github.com/googleapis/google-api-nodejs-client/commit/49df4fed2d0b311d5c9571ed65674b3875d30ab8))
* **notebooks:** update the API ([d0de162](https://www.github.com/googleapis/google-api-nodejs-client/commit/d0de162eb351942fd5fa05eb36d3d308439bfc6f))
* **osconfig:** update the API ([94fe6d9](https://www.github.com/googleapis/google-api-nodejs-client/commit/94fe6d960f458533384dec93506db3fd497e077a))
* **privateca:** update the API ([d697bd9](https://www.github.com/googleapis/google-api-nodejs-client/commit/d697bd97bcb97985365f759d2537d612dacbf92d))
* **pubsub:** update the API ([621f122](https://www.github.com/googleapis/google-api-nodejs-client/commit/621f122e7b4a7761078b22aeada6c1b9a02238ef))
* **securitycenter:** update the API ([07840ad](https://www.github.com/googleapis/google-api-nodejs-client/commit/07840ad61044f9bf7c920abdcc3b3b7cd46834fe))
* **servicedirectory:** update the API ([6b0722f](https://www.github.com/googleapis/google-api-nodejs-client/commit/6b0722f330f57381d58b7cd819d45ba97cecdbd5))
* **servicenetworking:** update the API ([d7559e2](https://www.github.com/googleapis/google-api-nodejs-client/commit/d7559e27ea6cae4241dd6d1758001bca26e7c488))
* **speech:** update the API ([10834c4](https://www.github.com/googleapis/google-api-nodejs-client/commit/10834c4364fa63aafb6dc2973c50affd106d59da))
* **sqladmin:** update the API ([29f9992](https://www.github.com/googleapis/google-api-nodejs-client/commit/29f99921859f50798ee6e00603559bbce6c25b87))
* regenerate index files ([e3f88e5](https://www.github.com/googleapis/google-api-nodejs-client/commit/e3f88e569bb6a88770f2cc6c2f153fb7990f6bd3))
* **storage:** update the API ([f5477a6](https://www.github.com/googleapis/google-api-nodejs-client/commit/f5477a63633a36088a0527b8fdbf96d11be33c05))


### Bug Fixes

* **adexchangebuyer:** update the API ([ae890e0](https://www.github.com/googleapis/google-api-nodejs-client/commit/ae890e0aebf0975d07fb97565905dc1c67211fa8))
* **admob:** update the API ([f6682b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/f6682b83d2e489dd95acddd44c00e47802a91988))
* **analyticsadmin:** update the API ([823e05f](https://www.github.com/googleapis/google-api-nodejs-client/commit/823e05f12572767ecc5f635392ab0b1610fec7d2))
* **analyticsdata:** update the API ([030ebba](https://www.github.com/googleapis/google-api-nodejs-client/commit/030ebbafbd66d5a1b1b6b9c44674338246400316))
* **androiddeviceprovisioning:** update the API ([886a952](https://www.github.com/googleapis/google-api-nodejs-client/commit/886a9523e1396c4124598bace1057c2d192fb78f))
* **androidenterprise:** update the API ([8017ae2](https://www.github.com/googleapis/google-api-nodejs-client/commit/8017ae2e3cab56f74e61927b89cbcd45577703f2))
* **androidpublisher:** update the API ([110e16d](https://www.github.com/googleapis/google-api-nodejs-client/commit/110e16dedd0c4bce31286c90e9712ba19a8ef21f))
* **apigateway:** update the API ([5c20722](https://www.github.com/googleapis/google-api-nodejs-client/commit/5c207229d86b76dea0e01186be7253142a45532d))
* **artifactregistry:** update the API ([30b8c42](https://www.github.com/googleapis/google-api-nodejs-client/commit/30b8c4204e330f7ee4d11ba5798df9009b751e58))
* **assuredworkloads:** update the API ([7b8c35b](https://www.github.com/googleapis/google-api-nodejs-client/commit/7b8c35b4f84007d71e0231ebcb660fbd38fa0b81))
* **assuredworkloads:** update the API ([9a9c727](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a9c727ea9597ee04010b828199cbd48addd614f))
* **billingbudgets:** update the API ([b88a8fc](https://www.github.com/googleapis/google-api-nodejs-client/commit/b88a8fc3a7ece0502bcbfcb8b1f8ba04b76aec5c))
* **binaryauthorization:** update the API ([aed26d8](https://www.github.com/googleapis/google-api-nodejs-client/commit/aed26d893981e5f2008f6b09bf6bd789d3d38b63))
* **cloudasset:** update the API ([d5c6b27](https://www.github.com/googleapis/google-api-nodejs-client/commit/d5c6b27d89fdee8bb267f8340c694cef2345e71a))
* **cloudidentity:** update the API ([6c67605](https://www.github.com/googleapis/google-api-nodejs-client/commit/6c67605d334c1d7a45bffbec6a3e36f95f68ebf6))
* **cloudresourcemanager:** update the API ([09f308b](https://www.github.com/googleapis/google-api-nodejs-client/commit/09f308b1228c61f7b161b07e7006f2ec26345284))
* **cloudsearch:** update the API ([ce9952f](https://www.github.com/googleapis/google-api-nodejs-client/commit/ce9952f2b0b268296043ca9d70365094f8735414))
* **content:** update the API ([2afcd21](https://www.github.com/googleapis/google-api-nodejs-client/commit/2afcd210f945cd2797a3794d20a6b6ca5b19853a))
* **content:** update the API ([f387900](https://www.github.com/googleapis/google-api-nodejs-client/commit/f387900089ad09d47654ac80f003a69e0f28ccda))
* **datalabeling:** update the API ([28e3d3b](https://www.github.com/googleapis/google-api-nodejs-client/commit/28e3d3b3146806a92e777950ee4a067943282662))
* **datastore:** update the API ([1995089](https://www.github.com/googleapis/google-api-nodejs-client/commit/1995089bd1067fb554745f7ad70474a57dfc6950))
* **deps:** update dependency nconf to ^0.11.0 ([4dc31a6](https://www.github.com/googleapis/google-api-nodejs-client/commit/4dc31a6436ba7bc85451b41d81075fd456be31e2))
* **dfareporting:** update the API ([eb2d0c9](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb2d0c93daf0c2da91b59f2607325970ed3e3b99))
* **displayvideo:** update the API ([061e8bb](https://www.github.com/googleapis/google-api-nodejs-client/commit/061e8bb857f88d1e67959ae25e19d5ae5bb3d304))
* **dlp:** update the API ([f93c446](https://www.github.com/googleapis/google-api-nodejs-client/commit/f93c4469c2bd5579b3d44490d13a13f5a32d27e9))
* **documentai:** update the API ([51b5d29](https://www.github.com/googleapis/google-api-nodejs-client/commit/51b5d29ed4840b516faa7f6226e6677792a038a3))
* **drive:** update the API ([b651135](https://www.github.com/googleapis/google-api-nodejs-client/commit/b65113547cc2c6a934a4a92a62bdfe6f59740dd6))
* **factchecktools:** update the API ([465d588](https://www.github.com/googleapis/google-api-nodejs-client/commit/465d588c289f735de78eb1cb6c69564605cfe211))
* **firebasedatabase:** update the API ([b213fcb](https://www.github.com/googleapis/google-api-nodejs-client/commit/b213fcb5e2cb6e0f43d8aeda35d8f1a4661ddb1c))
* **firebasedynamiclinks:** update the API ([5eeecad](https://www.github.com/googleapis/google-api-nodejs-client/commit/5eeecad91a05f831e8c3a703bbdccde9da08cd6a))
* **firestore:** update the API ([6340d03](https://www.github.com/googleapis/google-api-nodejs-client/commit/6340d03f88bf25deba02a2e2d227cdaa23fdddf1))
* **gamesConfiguration:** update the API ([bbf8e22](https://www.github.com/googleapis/google-api-nodejs-client/commit/bbf8e22953fa3e54836735a806368381d2ec4a37))
* **gameservices:** update the API ([0529b89](https://www.github.com/googleapis/google-api-nodejs-client/commit/0529b8941e4b82ce53684d58c8dbfc4337260c80))
* **healthcare:** update the API ([cc7103f](https://www.github.com/googleapis/google-api-nodejs-client/commit/cc7103f38feb6fed4c4b03f22d763eb24929f0e9))
* **iap:** update the API ([a67a280](https://www.github.com/googleapis/google-api-nodejs-client/commit/a67a2806c63993b5ca19159c27f74add1f5c7140))
* **identitytoolkit:** update the API ([5523d57](https://www.github.com/googleapis/google-api-nodejs-client/commit/5523d57a7e22791653ab693e8c01c738859beb55))
* **libraryagent:** update the API ([a6db26a](https://www.github.com/googleapis/google-api-nodejs-client/commit/a6db26acdc855240fdeacd0573d50e1c2210609a))
* **localservices:** update the API ([7bb5e2c](https://www.github.com/googleapis/google-api-nodejs-client/commit/7bb5e2cf599a9592def4bff7247575f5fbf4a22d))
* **monitoring:** update the API ([c871347](https://www.github.com/googleapis/google-api-nodejs-client/commit/c8713471b0c1c8ec96b32da7b62c306d7d580b81))
* **people:** update the API ([b639a17](https://www.github.com/googleapis/google-api-nodejs-client/commit/b639a1728048a0b541e16c537ef4c053e1a4c62f))
* **playablelocations:** update the API ([b329ad0](https://www.github.com/googleapis/google-api-nodejs-client/commit/b329ad00f88a4e3c4e648da6289564a06c6cfc89))
* **policytroubleshooter:** update the API ([7224d76](https://www.github.com/googleapis/google-api-nodejs-client/commit/7224d760a5ab8d80e73e54313cb5740009f84fb3))
* **privateca:** update the API ([d70a1d7](https://www.github.com/googleapis/google-api-nodejs-client/commit/d70a1d719ad7da5daa0bbe38e27184992b4e7ee3))
* **recommendationengine:** update the API ([47959ea](https://www.github.com/googleapis/google-api-nodejs-client/commit/47959eaa05dc82f881bf2ee3c5bb2091cde99968))
* **recommender:** update the API ([6330721](https://www.github.com/googleapis/google-api-nodejs-client/commit/63307215ef23aacca5a7f405c3da8174e9feb773))
* **remotebuildexecution:** update the API ([b5f5e99](https://www.github.com/googleapis/google-api-nodejs-client/commit/b5f5e99aec0699b5793c3955cac08727439c4a8f))
* **reseller:** update the API ([469b7b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/469b7b82b99bf3565aa2f99811ec77ce0d1593ac))
* **run:** update the API ([a21fd13](https://www.github.com/googleapis/google-api-nodejs-client/commit/a21fd13e21f5ab82f89cdd3d5f3ef78c0e099620))
* **serviceconsumermanagement:** update the API ([983c199](https://www.github.com/googleapis/google-api-nodejs-client/commit/983c19989698aafad79902e49315c739ba5a247b))
* **sheets:** update the API ([24334b3](https://www.github.com/googleapis/google-api-nodejs-client/commit/24334b3f1d9f56ee43c532115b0f20af56b76313))
* **siteVerification:** update the API ([4d8d935](https://www.github.com/googleapis/google-api-nodejs-client/commit/4d8d935442a1aef128b661ac722e375a8b120055))
* **slides:** update the API ([25b1b8b](https://www.github.com/googleapis/google-api-nodejs-client/commit/25b1b8b7abd050ed18f1df60b74018642691a9bb))
* **smartdevicemanagement:** update the API ([4ffeff5](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ffeff544fa11554a50c5469167aca86622be514))
* **sts:** update the API ([49e6aa7](https://www.github.com/googleapis/google-api-nodejs-client/commit/49e6aa7232592ad711c18dea19563f4364e8f9cc))
* **toolresults:** update the API ([6e00303](https://www.github.com/googleapis/google-api-nodejs-client/commit/6e00303c032c039793cdb222aca4b5ab4056061b))
* **videointelligence:** update the API ([7ec56d5](https://www.github.com/googleapis/google-api-nodejs-client/commit/7ec56d5aadd7ad8ef2fb791acb2ba8367c122a1a))
* **vision:** update the API ([6c47d8a](https://www.github.com/googleapis/google-api-nodejs-client/commit/6c47d8a724890f0719aca9cd0f358e85b80e06a8))

## [65.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v64.0.0...v65.0.0) (2020-11-16)


### ⚠ BREAKING CHANGES

* **spanner:** This release has breaking changes.
* **run:** This release has breaking changes.
* switch to googleapis org for submodules (#2443)
* **secretmanager:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **servicemanagement:** This release has breaking changes.
* **securitycenter:** This release has breaking changes.
* **runtimeconfig:** This release has breaking changes.
* **policytroubleshooter:** This release has breaking changes.
* **healthcare:** This release has breaking changes.
* **domains:** This release has breaking changes.
* **analyticsdata:** This release has breaking changes.
* **spanner:** This release has breaking changes.
* **servicedirectory:** This release has breaking changes.
* **managedidentities:** This release has breaking changes.
* **dataproc:** This release has breaking changes.
* **datacatalog:** This release has breaking changes.
* **cloudtasks:** This release has breaking changes.
* **cloudkms:** This release has breaking changes.
* **artifactregistry:** This release has breaking changes.
* **ml:** This release has breaking changes.
* **managedidentities:** This release has breaking changes.
* **cloudresourcemanager:** This release has breaking changes.

### Features

* regenerate index files ([90db68e](https://www.github.com/googleapis/google-api-nodejs-client/commit/90db68e517294d0e398e78a01361606d8406db9d))
* **admob:** update the API ([5a0b97a](https://www.github.com/googleapis/google-api-nodejs-client/commit/5a0b97a49e50d23de422923f28ff25d24be683e3))
* **analyticsdata:** update the API ([14c3fb7](https://www.github.com/googleapis/google-api-nodejs-client/commit/14c3fb77c588ec6012cb4f60c143aba92c375a28))
* **androidenterprise:** update the API ([cec37ee](https://www.github.com/googleapis/google-api-nodejs-client/commit/cec37ee2495a35736829386bc99a7f99df80b7f0))
* **apigateway:** update the API ([ead281d](https://www.github.com/googleapis/google-api-nodejs-client/commit/ead281dfd17a7c9a7b84a0a37703878b123bbf90))
* **area120tables:** update the API ([236d533](https://www.github.com/googleapis/google-api-nodejs-client/commit/236d533367ae332c9d384077371a8e783af95019))
* **artifactregistry:** update the API ([87d2089](https://www.github.com/googleapis/google-api-nodejs-client/commit/87d2089ef2e68aa93519abf448ddacca0146aaff))
* **assuredworkloads:** update the API ([34ee744](https://www.github.com/googleapis/google-api-nodejs-client/commit/34ee74478bf496ebfb24d1e0884f495f9b648307))
* **bigquery:** update the API ([632b137](https://www.github.com/googleapis/google-api-nodejs-client/commit/632b137a2000863cbc8857eee4731221d3ef2b58))
* **bigqueryconnection:** update the API ([89c2cf0](https://www.github.com/googleapis/google-api-nodejs-client/commit/89c2cf0acc6e238787a3468437759f9208ba95b3))
* **cloudasset:** update the API ([5995488](https://www.github.com/googleapis/google-api-nodejs-client/commit/59954889eedf8b3e18078d8b641afe8fb4ebe6f8))
* **cloudkms:** update the API ([3539f67](https://www.github.com/googleapis/google-api-nodejs-client/commit/3539f67abaee3fe0ddc0d2aa23d277360cec5367))
* **cloudresourcemanager:** update the API ([b708ab7](https://www.github.com/googleapis/google-api-nodejs-client/commit/b708ab7cc1503c694337f31bd72a799ea61909ba))
* **cloudtasks:** update the API ([5ad7200](https://www.github.com/googleapis/google-api-nodejs-client/commit/5ad72005e3e4e392cd5989f310f3cb4b63a31593))
* **container:** update the API ([f6ef239](https://www.github.com/googleapis/google-api-nodejs-client/commit/f6ef23956d6fb5af75773558dcfcd1cfa8f83beb))
* **content:** update the API ([78e46e5](https://www.github.com/googleapis/google-api-nodejs-client/commit/78e46e56daf19a3190fd80735f46c1348a853d13))
* **datacatalog:** update the API ([e559971](https://www.github.com/googleapis/google-api-nodejs-client/commit/e5599715e15f5205c21e7a98b32cd89796d83e77))
* **dataproc:** update the API ([db2591b](https://www.github.com/googleapis/google-api-nodejs-client/commit/db2591b48c9a658c6a7ddcc5d50b3b44afa013ca))
* **deploymentmanager:** update the API ([432e7f9](https://www.github.com/googleapis/google-api-nodejs-client/commit/432e7f9b7d159e91f1e5bde519fa56a55d983283))
* **dialogflow:** update the API ([ca9c4b6](https://www.github.com/googleapis/google-api-nodejs-client/commit/ca9c4b6983f6568a3393000e7dea9766aa1b4dd2))
* **dialogflow:** update the API ([82d0dba](https://www.github.com/googleapis/google-api-nodejs-client/commit/82d0dbaedd20cb2c380a88d2f29bb57c6c997301))
* **dns:** update the API ([9c8668b](https://www.github.com/googleapis/google-api-nodejs-client/commit/9c8668be916a2c15e8e0c34ba8831868dec29d44))
* **domains:** update the API ([7d70cdc](https://www.github.com/googleapis/google-api-nodejs-client/commit/7d70cdccd3fa3be0efc905c809361568ded8b892))
* **eventarc:** update the API ([106d3a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/106d3a398c08b75c3f15f4be2b128f5740ff98b0))
* **file:** update the API ([595a6ed](https://www.github.com/googleapis/google-api-nodejs-client/commit/595a6eda41a9c12c422551881b43c79cf967a63c))
* **file:** update the API ([b9465c3](https://www.github.com/googleapis/google-api-nodejs-client/commit/b9465c35968aa7a584192772f88382a123f38d17))
* **healthcare:** update the API ([15e1699](https://www.github.com/googleapis/google-api-nodejs-client/commit/15e1699d73921be946fd981d14e6fecdcff2fec0))
* **managedidentities:** update the API ([852059f](https://www.github.com/googleapis/google-api-nodejs-client/commit/852059f742cdfd5f0fc7afd1c17a6743510f1392))
* **managedidentities:** update the API ([e6cd7e0](https://www.github.com/googleapis/google-api-nodejs-client/commit/e6cd7e04af833c715259ca62bc24850e319d14d0))
* **managedidentities:** update the API ([e7f2840](https://www.github.com/googleapis/google-api-nodejs-client/commit/e7f2840038b147d51edb8fcd91f8d3be37c616dd))
* **memcache:** update the API ([fea8b36](https://www.github.com/googleapis/google-api-nodejs-client/commit/fea8b3650eca176b27b505748617cddc214676f8))
* **ml:** update the API ([41fc95d](https://www.github.com/googleapis/google-api-nodejs-client/commit/41fc95d2de4d451f2e6dcbb79888204ba8d357e7))
* **networkmanagement:** update the API ([2939e5c](https://www.github.com/googleapis/google-api-nodejs-client/commit/2939e5c31f0d1414ea99b9833cf445cdd3e43eb6))
* **policytroubleshooter:** update the API ([0517ae9](https://www.github.com/googleapis/google-api-nodejs-client/commit/0517ae92dce115fa98c76ab28afbc0eeff9c8053))
* **privateca:** update the API ([4660be5](https://www.github.com/googleapis/google-api-nodejs-client/commit/4660be583150c6ca4830967bd6e2667a81a0f4a8))
* **realtimebidding:** update the API ([e36ba01](https://www.github.com/googleapis/google-api-nodejs-client/commit/e36ba013e3ae5e8343c7cc1e00957d97bba3550c))
* **redis:** update the API ([6dce97d](https://www.github.com/googleapis/google-api-nodejs-client/commit/6dce97d75bff34bdaf088b0c705a0b9a30afa630))
* **redis:** update the API ([342b570](https://www.github.com/googleapis/google-api-nodejs-client/commit/342b5706b5654a35eb4e5f96439e1ffd3d0672e7))
* **run:** update the API ([41ce818](https://www.github.com/googleapis/google-api-nodejs-client/commit/41ce8189b96de5cf3524fa72015f3bab63d07a8b))
* **run:** update the API ([f10e719](https://www.github.com/googleapis/google-api-nodejs-client/commit/f10e71930b47e3d35af7a30ffe7133b7a8576bf4))
* **runtimeconfig:** update the API ([1a693a2](https://www.github.com/googleapis/google-api-nodejs-client/commit/1a693a2bd375201c30e9b2cab65565e3f3144d0c))
* **secretmanager:** update the API ([55e45df](https://www.github.com/googleapis/google-api-nodejs-client/commit/55e45dfd6ce9aef6e3333ef24d1d90a69f5446a3))
* **securitycenter:** update the API ([a9cce23](https://www.github.com/googleapis/google-api-nodejs-client/commit/a9cce232d342dff9fb771279ea420906cafdc52f))
* **servicedirectory:** update the API ([a7c51c3](https://www.github.com/googleapis/google-api-nodejs-client/commit/a7c51c3f8f9764336f40fbf0741ecf83783025e4))
* **servicemanagement:** update the API ([997750d](https://www.github.com/googleapis/google-api-nodejs-client/commit/997750d4199044cace06fb80263ce7c940fa00d3))
* **servicemanagement:** update the API ([d5e54c2](https://www.github.com/googleapis/google-api-nodejs-client/commit/d5e54c2cdd01741e70e7f104b7787642ab544182))
* **spanner:** update the API ([331bfb8](https://www.github.com/googleapis/google-api-nodejs-client/commit/331bfb86f9d40e5dbff4d9ea0fa72c82ad4fb41b))
* **spanner:** update the API ([7d504fe](https://www.github.com/googleapis/google-api-nodejs-client/commit/7d504fee11a64793693bf4ddc6b02c597c934073))
* **storagetransfer:** update the API ([e351dd2](https://www.github.com/googleapis/google-api-nodejs-client/commit/e351dd28e975803694aa2fa8e1243822ae38a93d))
* regenerate index files ([c9e365e](https://www.github.com/googleapis/google-api-nodejs-client/commit/c9e365ea49f8273cb2ed31b34113d45df50ff573))
* regenerate index files ([d75cb1e](https://www.github.com/googleapis/google-api-nodejs-client/commit/d75cb1e1d0ed2a8c2e3522605e187b96620677c9))
* regenerate index files ([5082f7d](https://www.github.com/googleapis/google-api-nodejs-client/commit/5082f7d7e787d00a2a64b8bb4f3fdadd983e0e87))
* switch to googleapis org for submodules ([#2443](https://www.github.com/googleapis/google-api-nodejs-client/issues/2443)) ([392ce44](https://www.github.com/googleapis/google-api-nodejs-client/commit/392ce443b13bb5b18f854bb57870d6db44e31124))
* **servicenetworking:** update the API ([9bb56c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/9bb56c5c731008a17c96f596c9a5693e20157644))
* regenerate index files ([b706742](https://www.github.com/googleapis/google-api-nodejs-client/commit/b706742847c0c0103cf5f7b0b52d5d34a800b358))
* regenerate index files ([c8329fb](https://www.github.com/googleapis/google-api-nodejs-client/commit/c8329fb2855c1f3b54aa26779f9463ffa8bf8b8a))
* **servicenetworking:** update the API ([3aa40a2](https://www.github.com/googleapis/google-api-nodejs-client/commit/3aa40a24a641960a469c25b531beed875f941ffb))


### Bug Fixes

* **accessapproval:** update the API ([3d567d2](https://www.github.com/googleapis/google-api-nodejs-client/commit/3d567d2dac10f968211919328a5a7138f3ee7fa9))
* **analyticsdata:** update the API ([d85b005](https://www.github.com/googleapis/google-api-nodejs-client/commit/d85b00526091f578058cb20859ea17546dd73d2b))
* **billingbudgets:** update the API ([4ce4618](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ce461886cf34fda289fcff53770e7471c8cedf9))
* **cloudidentity:** update the API ([6130577](https://www.github.com/googleapis/google-api-nodejs-client/commit/61305772bf6cd959c051d025b989eb72845e2039))
* **cloudidentity:** update the API ([fb961aa](https://www.github.com/googleapis/google-api-nodejs-client/commit/fb961aa105c51d981c5d7251d5907e6b507fcc97))
* **content:** update the API ([0102cf4](https://www.github.com/googleapis/google-api-nodejs-client/commit/0102cf449c341c97f6eb5b64278a72c35c22c3d7))
* **displayvideo:** update the API ([a29648b](https://www.github.com/googleapis/google-api-nodejs-client/commit/a29648b4c73d7df47755cb5943636400b1f7800b))
* **drive:** update the API ([f8b958c](https://www.github.com/googleapis/google-api-nodejs-client/commit/f8b958c6a5ca98e03646b9550abc0dc6b49454da))
* **gamesConfiguration:** update the API ([b791c0e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b791c0ed73d3f8a40147c56cd68a98c5ca8b3758))
* **gameservices:** update the API ([9b69f7e](https://www.github.com/googleapis/google-api-nodejs-client/commit/9b69f7e23e6e94f361ff5b3fc93769a097bbbd62))
* **gamesManagement:** update the API ([e330ff1](https://www.github.com/googleapis/google-api-nodejs-client/commit/e330ff1ab3efcbf38317e4081502ca7a0bc742be))
* **genomics:** update the API ([90a4da6](https://www.github.com/googleapis/google-api-nodejs-client/commit/90a4da68bddcb2bee7d73f78c2b9fd7b29d0e044))
* **gmail:** update the API ([269a468](https://www.github.com/googleapis/google-api-nodejs-client/commit/269a468da31826f7e46bf65ac131a183be56d890))
* **gmailpostmastertools:** update the API ([d764309](https://www.github.com/googleapis/google-api-nodejs-client/commit/d7643095b81b2b2f08294ab2eb27772f1146edd2))
* **groupsmigration:** update the API ([d133f48](https://www.github.com/googleapis/google-api-nodejs-client/commit/d133f48ff0d20cfbe5eaa82470e4866381fa09fc))
* **groupssettings:** update the API ([c69c48d](https://www.github.com/googleapis/google-api-nodejs-client/commit/c69c48de387d5cf58cedf6c4a56d3674f435856f))
* **healthcare:** update the API ([a33105d](https://www.github.com/googleapis/google-api-nodejs-client/commit/a33105d0fbf2ec57df708a36a9556cc7ca6ccdd5))
* **homegraph:** update the API ([9f87184](https://www.github.com/googleapis/google-api-nodejs-client/commit/9f871844c9885953a545a4d125dc57c02cf1d950))
* **iam:** update the API ([140ec57](https://www.github.com/googleapis/google-api-nodejs-client/commit/140ec57143388c78435fe3210d3728e150ab59b9))
* **iamcredentials:** update the API ([46e68e6](https://www.github.com/googleapis/google-api-nodejs-client/commit/46e68e6c779ae5f6ed7615984ebba3af673f1c4a))
* **iap:** update the API ([b488eeb](https://www.github.com/googleapis/google-api-nodejs-client/commit/b488eebae3d3088eef777cbd2dad228fea236bf9))
* **identitytoolkit:** update the API ([48c2b61](https://www.github.com/googleapis/google-api-nodejs-client/commit/48c2b61bd7c8ef21377b916c94f8460bef630377))
* **indexing:** update the API ([6bfb632](https://www.github.com/googleapis/google-api-nodejs-client/commit/6bfb632f0198b31d6c94ca5e5ba4b8ae80c86e06))
* **jobs:** update the API ([641a965](https://www.github.com/googleapis/google-api-nodejs-client/commit/641a965499fe73b53513765142c1be9e6e46b492))
* **kgsearch:** update the API ([cac92c0](https://www.github.com/googleapis/google-api-nodejs-client/commit/cac92c0a09d1e709c4bcc055146977e2b14a439d))
* **language:** update the API ([207789a](https://www.github.com/googleapis/google-api-nodejs-client/commit/207789a0e7298255b49ab88839441bc9d8f10fd5))
* **libraryagent:** update the API ([dba2b49](https://www.github.com/googleapis/google-api-nodejs-client/commit/dba2b49935cd1b3d899f6446c4f465a5125d3b70))
* **licensing:** update the API ([e314a0a](https://www.github.com/googleapis/google-api-nodejs-client/commit/e314a0a77aec81d0c812ca5dc0e407022116223d))
* **lifesciences:** update the API ([2b4185b](https://www.github.com/googleapis/google-api-nodejs-client/commit/2b4185b04e2081ede564c78a0971f326260222b9))
* **localservices:** update the API ([5c9a3fd](https://www.github.com/googleapis/google-api-nodejs-client/commit/5c9a3fd209b0b893e1378e6b49fefc82f7c77944))
* **logging:** update the API ([3712ede](https://www.github.com/googleapis/google-api-nodejs-client/commit/3712ede107ee540770751dd323755dd6867015db))
* **logging:** update the API ([bd7cd8c](https://www.github.com/googleapis/google-api-nodejs-client/commit/bd7cd8cf5e5c0cd8998512d36ee05afd336256a4))
* **manufacturers:** update the API ([243af05](https://www.github.com/googleapis/google-api-nodejs-client/commit/243af055ca6f600fdececaab7a1ce7a7fb8ce0ee))
* **ml:** update the API ([bf33531](https://www.github.com/googleapis/google-api-nodejs-client/commit/bf335314fc44af83c3b3ed00d4a5f22227561965))
* **monitoring:** update the API ([b29d9e4](https://www.github.com/googleapis/google-api-nodejs-client/commit/b29d9e4f2841dd14c9f87bfea4e0164fea8940d0))
* **networkmanagement:** update the API ([feb036e](https://www.github.com/googleapis/google-api-nodejs-client/commit/feb036e35dc1da6bf86555bec3961b121ae484ff))
* **notebooks:** update the API ([d1b1e2d](https://www.github.com/googleapis/google-api-nodejs-client/commit/d1b1e2de88d90e39c743966d0525cc9ddc8b213c))
* **notebooks:** update the API ([1eb31e0](https://www.github.com/googleapis/google-api-nodejs-client/commit/1eb31e0219187f8e611c89966147facc735d1a75))
* **oauth2:** update the API ([36e64c0](https://www.github.com/googleapis/google-api-nodejs-client/commit/36e64c071c00a66c4a65646021d6a97d77826257))
* **osconfig:** update the API ([dca4ea2](https://www.github.com/googleapis/google-api-nodejs-client/commit/dca4ea2edae973a0871bcb545e33a65faa14e292))
* **oslogin:** update the API ([15dc3ab](https://www.github.com/googleapis/google-api-nodejs-client/commit/15dc3aba40f79cb4d4dfa4e1daab2f44cccb17cf))
* **pagespeedonline:** update the API ([c9b9e6f](https://www.github.com/googleapis/google-api-nodejs-client/commit/c9b9e6fde3ffb866d85610731b6ca52f8d9f2ec0))
* **people:** update the API ([db67240](https://www.github.com/googleapis/google-api-nodejs-client/commit/db672409ab4443f490b861412e4092cfa96d49bd))
* **people:** update the API ([3fa1deb](https://www.github.com/googleapis/google-api-nodejs-client/commit/3fa1debe568a4552f813da6f5161233c9702d33e))
* **playablelocations:** update the API ([db6de0e](https://www.github.com/googleapis/google-api-nodejs-client/commit/db6de0ea8f8fc5c00e27a62ea300a1f82fc182cf))
* **playcustomapp:** update the API ([84beddf](https://www.github.com/googleapis/google-api-nodejs-client/commit/84beddffde21a9f3c92df25b258c12067bdfca9d))
* **plus:** update the API ([b4ff82e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b4ff82e8fcd741e1a8441c4ecb397f042423ae28))
* **policytroubleshooter:** update the API ([538a5d1](https://www.github.com/googleapis/google-api-nodejs-client/commit/538a5d122d9654c6592cf86971a9f0fb07a71b0f))
* **poly:** update the API ([4350bb8](https://www.github.com/googleapis/google-api-nodejs-client/commit/4350bb8a297193dda5a0fcb1ca5c1d1249d10d33))
* **privateca:** update the API ([eb3165b](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb3165be12a3e9e4ab08199ac5a65129c27e1d33))
* **prod_tt_sasportal:** update the API ([0896127](https://www.github.com/googleapis/google-api-nodejs-client/commit/0896127c1196f4abe104e0cb696d210a995feb12))
* **pubsub:** update the API ([5e31d0a](https://www.github.com/googleapis/google-api-nodejs-client/commit/5e31d0ac21bfa3ef99c4e62959a0f1025e900bf9))
* **pubsublite:** update the API ([8a846bb](https://www.github.com/googleapis/google-api-nodejs-client/commit/8a846bb769f7eba3a9b4022a63056c7c823d42f0))
* **realtimebidding:** update the API ([95bebbe](https://www.github.com/googleapis/google-api-nodejs-client/commit/95bebbe1aaaaec775972644600179bc9e9515ec7))
* **recommendationengine:** update the API ([a6f2e7f](https://www.github.com/googleapis/google-api-nodejs-client/commit/a6f2e7f5605aacfb9dcf3e0df78d3355f93d0f0e))
* **recommender:** update the API ([d42ee26](https://www.github.com/googleapis/google-api-nodejs-client/commit/d42ee2697e1653ca1fc8323ba110b5212b8d931e))
* **remotebuildexecution:** update the API ([25c4cad](https://www.github.com/googleapis/google-api-nodejs-client/commit/25c4cad9f602a34a68e00d64f9ec0d5b4ea20a22))
* **reseller:** update the API ([9b8d40b](https://www.github.com/googleapis/google-api-nodejs-client/commit/9b8d40b595646ffbe7a8bfed09f1e1e28f1517d8))
* **run:** update the API ([db6d610](https://www.github.com/googleapis/google-api-nodejs-client/commit/db6d6106fd302382739f4c96191018cee5657556))
* **runtimeconfig:** update the API ([9a786d3](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a786d34c4d9cc82db596c0e8169d806e68fa3b1))
* **safebrowsing:** update the API ([e535819](https://www.github.com/googleapis/google-api-nodejs-client/commit/e535819b4caba99771623b5ff107ac2eba00def6))
* **sasportal:** update the API ([0f902cc](https://www.github.com/googleapis/google-api-nodejs-client/commit/0f902ccd2567a359f04027408a6268da39a8d2e8))
* **script:** update the API ([96d6689](https://www.github.com/googleapis/google-api-nodejs-client/commit/96d6689ae9d8663b347276ea5337e3c30b5863e7))
* **searchconsole:** update the API ([89a2b0f](https://www.github.com/googleapis/google-api-nodejs-client/commit/89a2b0f6205e210acb2d374cd900f37fb0f5210a))
* **secretmanager:** update the API ([580876c](https://www.github.com/googleapis/google-api-nodejs-client/commit/580876ce52a8a933e63ee8d456f1c39cbd13c036))
* **securitycenter:** update the API ([5c40a0b](https://www.github.com/googleapis/google-api-nodejs-client/commit/5c40a0b34c1edcb45936a861585e90fb67dadfd5))
* **serviceconsumermanagement:** update the API ([58b82b5](https://www.github.com/googleapis/google-api-nodejs-client/commit/58b82b5517f455ba560b1a8707bb6a4d5d119092))
* **serviceconsumermanagement:** update the API ([97ea611](https://www.github.com/googleapis/google-api-nodejs-client/commit/97ea611f978e28a24ee6474b4bc8cabd5e92f489))
* **servicecontrol:** update the API ([9ab3238](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ab32389c73c2abff2c5f717ea874d6d3631b324))
* **servicedirectory:** update the API ([3ff6030](https://www.github.com/googleapis/google-api-nodejs-client/commit/3ff6030fb9fdc4e2146ce49256f85f6e581f9af6))
* **servicemanagement:** update the API ([3b6530e](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b6530ee6d7e32e98e5f90605bc7724d7c6c42f5))
* **servicenetworking:** update the API ([49f6772](https://www.github.com/googleapis/google-api-nodejs-client/commit/49f67725ad9141b4ec67be03416bebda5632a9a2))
* **serviceusage:** update the API ([b4ec93e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b4ec93ee930bb1d9b3ff9610aabdaa30dfe5ebe0))
* **serviceusage:** update the API ([da56c9f](https://www.github.com/googleapis/google-api-nodejs-client/commit/da56c9fed6d80811e8174523572d491b9e5f5c22))
* **sheets:** update the API ([a12b3fa](https://www.github.com/googleapis/google-api-nodejs-client/commit/a12b3fa8c823c97339246993ec3c83989da14aff))
* **siteVerification:** update the API ([548c7cc](https://www.github.com/googleapis/google-api-nodejs-client/commit/548c7cc3c286c0aef757e3868cc2f1f756dd1d97))
* **slides:** update the API ([d6bfad1](https://www.github.com/googleapis/google-api-nodejs-client/commit/d6bfad1273be9c2f365d70f808c2cbcc6bdddc07))
* **smartdevicemanagement:** update the API ([2381107](https://www.github.com/googleapis/google-api-nodejs-client/commit/238110799597217868a22d546bb729e39a76fdd0))
* **sourcerepo:** update the API ([ab277c0](https://www.github.com/googleapis/google-api-nodejs-client/commit/ab277c06afa94ecbdecb09c05904528b1deba163))
* **speech:** update the API ([2355a12](https://www.github.com/googleapis/google-api-nodejs-client/commit/2355a1217d0c27fcba461f9cafe5311505e6cacd))
* **sql:** update the API ([e646dbf](https://www.github.com/googleapis/google-api-nodejs-client/commit/e646dbf68bb148cbeec2d704695682102851e11c))
* **sqladmin:** update the API ([50cfd3f](https://www.github.com/googleapis/google-api-nodejs-client/commit/50cfd3f2ef8c2c103c8ac58bb43c29600405d4c0))
* **storage:** update the API ([92c026e](https://www.github.com/googleapis/google-api-nodejs-client/commit/92c026e7607449b6af34860d329b2c75c78b7a76))
* **streetviewpublish:** update the API ([a61adba](https://www.github.com/googleapis/google-api-nodejs-client/commit/a61adba62be56a118e0868b948ecbc7107278c60))
* **sts:** update the API ([1d9b809](https://www.github.com/googleapis/google-api-nodejs-client/commit/1d9b8095c039ce533d53b8ef9cffabc8d8289a1c))
* **tagmanager:** update the API ([c3d6554](https://www.github.com/googleapis/google-api-nodejs-client/commit/c3d655452e72d320f339c825e5af3b056379117a))
* **tasks:** update the API ([d1f915a](https://www.github.com/googleapis/google-api-nodejs-client/commit/d1f915a3a66dc799e5738353dce7c9ec9bb6d016))
* **testing:** update the API ([fc7c1da](https://www.github.com/googleapis/google-api-nodejs-client/commit/fc7c1dab4948731b4d55844d854cecb1d79287bc))
* **texttospeech:** update the API ([c7f417b](https://www.github.com/googleapis/google-api-nodejs-client/commit/c7f417bfb36173a370bde4e181ead5b6e8c0a49e))
* **toolresults:** update the API ([ef03494](https://www.github.com/googleapis/google-api-nodejs-client/commit/ef034947f2e4d6648e908d3cc32ea86ad5a2fc40))
* **tpu:** update the API ([5583524](https://www.github.com/googleapis/google-api-nodejs-client/commit/5583524c2ecbdc1980657beb21126c7dd37ca57b))
* **trafficdirector:** update the API ([68df75c](https://www.github.com/googleapis/google-api-nodejs-client/commit/68df75c5d8219aa63f79f85fc16cc5bc24623689))
* **transcoder:** update the API ([41701a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/41701a32700de87e8d85667ecf15577614c44343))
* **transcoder:** update the API ([521a61c](https://www.github.com/googleapis/google-api-nodejs-client/commit/521a61ce5c39d9b50a9bad171e4774f8dca15875))
* **translate:** update the API ([7ce94af](https://www.github.com/googleapis/google-api-nodejs-client/commit/7ce94af95f25882ecb44ada4684655c404d0a132))
* **translate:** update the API ([a2c5da6](https://www.github.com/googleapis/google-api-nodejs-client/commit/a2c5da67712ad1df9e4c88f62fdfb167f52eedfa))
* **vault:** update the API ([de89827](https://www.github.com/googleapis/google-api-nodejs-client/commit/de898279869288938bc64499cae6df8eb699ba9c))
* **vectortile:** update the API ([91f90bd](https://www.github.com/googleapis/google-api-nodejs-client/commit/91f90bdca846f4b456f599a18e380c0dc1d967fd))
* **verifiedaccess:** update the API ([b7841c9](https://www.github.com/googleapis/google-api-nodejs-client/commit/b7841c9b91f7cb491ad7c2a2956b081dfcb06aed))
* **videointelligence:** update the API ([5ed8005](https://www.github.com/googleapis/google-api-nodejs-client/commit/5ed8005f62fa23930ed2d27ea33f9f8624ab2700))
* **vision:** update the API ([6880149](https://www.github.com/googleapis/google-api-nodejs-client/commit/6880149f0ebcccea5e6f6c5361416e8deb208042))
* **webfonts:** update the API ([aeb9aca](https://www.github.com/googleapis/google-api-nodejs-client/commit/aeb9aca4185d767e76c508d83a176e1369e5e56b))
* **webmasters:** update the API ([d47348d](https://www.github.com/googleapis/google-api-nodejs-client/commit/d47348dc0d195f36cea07c68eab82fb3acf68e6f))
* **websecurityscanner:** update the API ([00ed15c](https://www.github.com/googleapis/google-api-nodejs-client/commit/00ed15c07c6b6c6b7b71e0ac7fe415b80d3a5e8c))
* **workflowexecutions:** update the API ([87dda86](https://www.github.com/googleapis/google-api-nodejs-client/commit/87dda8640e5077b653fd5fc952c7c2028489e236))
* **workflows:** update the API ([9a00054](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a00054f2d8266cca3b6e884ea93854e743de39e))
* **youtube:** update the API ([afbc00e](https://www.github.com/googleapis/google-api-nodejs-client/commit/afbc00e1bd10e1d2b7679b2aa626861f88c0e1eb))
* **youtubeAnalytics:** update the API ([f8ed35d](https://www.github.com/googleapis/google-api-nodejs-client/commit/f8ed35dc5a385762117d515bfaa94d1ba9a04c7c))
* **youtubereporting:** update the API ([1834013](https://www.github.com/googleapis/google-api-nodejs-client/commit/1834013958e0afeac21e9e2527734fb6b6a5e066))

## [64.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v63.0.0...v64.0.0) (2020-11-05)


### ⚠ BREAKING CHANGES

* **pubsub:** This release has breaking changes.
* **networkmanagement:** This release has breaking changes.
* **iap:** This release has breaking changes.
* **apigateway:** This release has breaking changes.
* **privateca:** This release has breaking changes.
* **iam:** This release has breaking changes.
* **gameservices:** This release has breaking changes.
* **containeranalysis:** This release has breaking changes.
* **cloudiot:** This release has breaking changes.
* **binaryauthorization:** This release has breaking changes.
* **secretmanager:** This release has breaking changes.
* **runtimeconfig:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **binaryauthorization:** This release has breaking changes.

### Features

* regenerate index files ([548b105](https://www.github.com/googleapis/google-api-nodejs-client/commit/548b1053504e2c227abf27ed40173fdf80e30930))
* **analyticsdata:** update the API ([ed11aea](https://www.github.com/googleapis/google-api-nodejs-client/commit/ed11aeac8d7f042787d6f41be9dbf5c66621cdd5))
* **apigateway:** update the API ([70a4b0f](https://www.github.com/googleapis/google-api-nodejs-client/commit/70a4b0f3b7b1a94b05a2b00b22bb6d1ac281b358))
* **apigateway:** update the API ([282d124](https://www.github.com/googleapis/google-api-nodejs-client/commit/282d12433e1019d9ee7ccbd4d00c0daa8f7113f7))
* **billingbudgets:** update the API ([74ea523](https://www.github.com/googleapis/google-api-nodejs-client/commit/74ea5239fb465a9e68148b757220bfaf995c9dd0))
* **binaryauthorization:** update the API ([865ea76](https://www.github.com/googleapis/google-api-nodejs-client/commit/865ea766a6b12807e87b076f62b39aab676fff34))
* **binaryauthorization:** update the API ([eaa5338](https://www.github.com/googleapis/google-api-nodejs-client/commit/eaa533854660ceee8c7f226cc621a99fdd27c095))
* **cloudasset:** update the API ([a8eb8fd](https://www.github.com/googleapis/google-api-nodejs-client/commit/a8eb8fd2b49fb7b1e16ac7af86fec04b5dabcf5a))
* **cloudfunctions:** update the API ([eb35c55](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb35c55c963ca358859fb66dab1af4c813838ac0))
* **cloudiot:** update the API ([0107c86](https://www.github.com/googleapis/google-api-nodejs-client/commit/0107c868d5933f3fe5fefb55591712fc94f0e11d))
* **compute:** update the API ([4ee66cf](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ee66cf74c5abcbc5ccda1db758d1c8bf8d57a2c))
* **containeranalysis:** update the API ([c60e1f8](https://www.github.com/googleapis/google-api-nodejs-client/commit/c60e1f8c689a25472e69a70ec67498143f281d2e))
* **dialogflow:** update the API ([090495b](https://www.github.com/googleapis/google-api-nodejs-client/commit/090495b1bc254719e0e8e944848e2e780e675621))
* **displayvideo:** update the API ([5ae804e](https://www.github.com/googleapis/google-api-nodejs-client/commit/5ae804e659ff8c3cb83b86d8144617f5e6c17718))
* **domains:** update the API ([caf1b69](https://www.github.com/googleapis/google-api-nodejs-client/commit/caf1b6946e78da89e4396db5315ba309b0fdcf15))
* **gameservices:** update the API ([eb501ad](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb501ad88c6b4c494e1196a238b9ff27cba3dec2))
* **genomics:** update the API ([6f3af3c](https://www.github.com/googleapis/google-api-nodejs-client/commit/6f3af3cda25f3b8c8e24f33dd6eb7cb9b35399b5))
* **healthcare:** update the API ([39490ef](https://www.github.com/googleapis/google-api-nodejs-client/commit/39490ef4d5f3faedaddb81227357be146072ff76))
* **iam:** update the API ([2c2c726](https://www.github.com/googleapis/google-api-nodejs-client/commit/2c2c72600b24b9b6d40e291c012aa6a8490f18e3))
* **iap:** update the API ([a862a03](https://www.github.com/googleapis/google-api-nodejs-client/commit/a862a0351c173b44747dba12580da368091e8c92))
* **logging:** update the API ([88ddb0f](https://www.github.com/googleapis/google-api-nodejs-client/commit/88ddb0fa6512844f3415cb1a4bdb1a349ea04b7d))
* **logging:** update the API ([3e59f67](https://www.github.com/googleapis/google-api-nodejs-client/commit/3e59f67351f07391609caba7bdf7bae6258d8e8c))
* **networkmanagement:** update the API ([d84cac4](https://www.github.com/googleapis/google-api-nodejs-client/commit/d84cac44535dd692089e113f4005958183d24ba0))
* **networkmanagement:** update the API ([8dd17e5](https://www.github.com/googleapis/google-api-nodejs-client/commit/8dd17e50f4c91bdbc8527f8428784cc95a6d5c9d))
* **policytroubleshooter:** update the API ([81d5d90](https://www.github.com/googleapis/google-api-nodejs-client/commit/81d5d906686a889a0ddfc512b12d50edcc339a9b))
* **privateca:** update the API ([a0fb24f](https://www.github.com/googleapis/google-api-nodejs-client/commit/a0fb24f34f07c4c233a95b390845dd9577eab1ae))
* **pubsub:** update the API ([a5082e1](https://www.github.com/googleapis/google-api-nodejs-client/commit/a5082e17f5ffaee24009b7b74d8748e8994c70f4))
* **recommendationengine:** update the API ([b28c28b](https://www.github.com/googleapis/google-api-nodejs-client/commit/b28c28b740b918bc2d007425864672825bf77dec))
* **runtimeconfig:** update the API ([87b262e](https://www.github.com/googleapis/google-api-nodejs-client/commit/87b262e5b3be594aed0808ddb996bfb4afa6ee2f))
* **secretmanager:** update the API ([adda505](https://www.github.com/googleapis/google-api-nodejs-client/commit/adda505dfc964f38e481947020eee55314982a76))
* **securitycenter:** update the API ([6e1df3a](https://www.github.com/googleapis/google-api-nodejs-client/commit/6e1df3ae4fe5593e6ebd1628aab0b6a40318d825))
* **sheets:** update the API ([79dfa69](https://www.github.com/googleapis/google-api-nodejs-client/commit/79dfa69919b9e2b0352bcb741c54aa7b40bdf002))
* regenerate index files ([a7a18a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/a7a18a3f364c6053d9f6ccc487d10fa6148476a3))
* regenerate index files ([cbe09bf](https://www.github.com/googleapis/google-api-nodejs-client/commit/cbe09bfa10ace5083ce89e0a3d0949ff6c8a2331))
* **servicecontrol:** update the API ([7b9be93](https://www.github.com/googleapis/google-api-nodejs-client/commit/7b9be938ede86a52684f0ec0faac3ad8cec23dc2))
* **serviceusage:** update the API ([fbeecb3](https://www.github.com/googleapis/google-api-nodejs-client/commit/fbeecb3b4dbff08453253781c06e5db0b72f21fb))
* **toolresults:** update the API ([8a299d4](https://www.github.com/googleapis/google-api-nodejs-client/commit/8a299d4410d8e827d5c2591368b18ac60b98ef86))


### Bug Fixes

* **admin:** update the API ([a70bef6](https://www.github.com/googleapis/google-api-nodejs-client/commit/a70bef62fd18a22a484ca62a3779fac03fb2311d))
* **admin:** update the API ([8c93090](https://www.github.com/googleapis/google-api-nodejs-client/commit/8c930909a568f21aa5827c9f4ef50240000ac5d5))
* **analyticsadmin:** update the API ([4dcabfe](https://www.github.com/googleapis/google-api-nodejs-client/commit/4dcabfee8aa8b6a38ea59d06b5d6cee7da40c5b1))
* **assuredworkloads:** update the API ([7a826a1](https://www.github.com/googleapis/google-api-nodejs-client/commit/7a826a1c27a8361bfb6b31714d1e4a03323000e2))
* **bigquery:** update the API ([72acde5](https://www.github.com/googleapis/google-api-nodejs-client/commit/72acde5f4a62ee68e8b66c72f400056c9315ae90))
* **calendar:** update the API ([2e97d01](https://www.github.com/googleapis/google-api-nodejs-client/commit/2e97d0104e08555b42d28f78247ed84473412033))
* **chat:** update the API ([18b4140](https://www.github.com/googleapis/google-api-nodejs-client/commit/18b4140738b1651020c871586e2ee249df98abe9))
* **content:** update the API ([bd06032](https://www.github.com/googleapis/google-api-nodejs-client/commit/bd0603299335a0e0f1f1e702fa66a1e72e2f60b0))
* **datamigration:** update the API ([c8732d5](https://www.github.com/googleapis/google-api-nodejs-client/commit/c8732d51befc3d65391eef204861a102406d3cb6))
* **dfareporting:** update the API ([cb116e4](https://www.github.com/googleapis/google-api-nodejs-client/commit/cb116e44497cad59f653f0914b7f6500c82d595e))
* **displayvideo:** update the API ([c936b10](https://www.github.com/googleapis/google-api-nodejs-client/commit/c936b10dd5507c86c457bbd1629c1c63d7a43651))
* **drive:** update the API ([16ba23c](https://www.github.com/googleapis/google-api-nodejs-client/commit/16ba23c3d05095265ed6afb82611bdb3242caab9))
* **eventarc:** update the API ([82fb838](https://www.github.com/googleapis/google-api-nodejs-client/commit/82fb838bddffc8384b3817b4be23c76253a7a167))
* **eventarc:** update the API ([8fed434](https://www.github.com/googleapis/google-api-nodejs-client/commit/8fed43437ea74c05b16e40c17103b091aae0b40b))
* **iamcredentials:** update the API ([d920c35](https://www.github.com/googleapis/google-api-nodejs-client/commit/d920c357ace2dfff5c014acf0db5c98fe855903a))
* **licensing:** update the API ([03d7098](https://www.github.com/googleapis/google-api-nodejs-client/commit/03d7098cd22bc2883162038ac0b153ed09db7fa3))
* **privateca:** update the API ([31788c2](https://www.github.com/googleapis/google-api-nodejs-client/commit/31788c27ec0b5b22da332429c01d6f403c080ec1))
* **reseller:** update the API ([0a85f29](https://www.github.com/googleapis/google-api-nodejs-client/commit/0a85f2914ccc83fc80f0bbcdb9eded485acebf21))
* **storage:** update the API ([dfcda50](https://www.github.com/googleapis/google-api-nodejs-client/commit/dfcda50a64650bd4d82ee52a4ce10914149a4245))
* **storagetransfer:** update the API ([e51e1d3](https://www.github.com/googleapis/google-api-nodejs-client/commit/e51e1d3a72b3a18812df67ee20cb6e64ff4032c2))
* **vision:** update the API ([f14e76c](https://www.github.com/googleapis/google-api-nodejs-client/commit/f14e76cfde9fc3eec28c38ca8481541d79990520))

## [63.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v62.0.0...v63.0.0) (2020-10-29)


### ⚠ BREAKING CHANGES

* **deploymentmanager:** This release has breaking changes.

### Features

* regenerate index files ([95e46e6](https://www.github.com/googleapis/google-api-nodejs-client/commit/95e46e682c093b5f3e9d5f4c5c4930c1c75291e2))
* **content:** update the API ([c03446b](https://www.github.com/googleapis/google-api-nodejs-client/commit/c03446bd06245286d6e9befa132661e89b23f26d))
* **datacatalog:** update the API ([9240bc7](https://www.github.com/googleapis/google-api-nodejs-client/commit/9240bc7ff916e3e1a7bff9f5a1743a3f3079bbd6))
* **deploymentmanager:** update the API ([e32d555](https://www.github.com/googleapis/google-api-nodejs-client/commit/e32d555caa337c8852c14386353910e0dd959612))


### Bug Fixes

* **datalabeling:** update the API ([9b8b03a](https://www.github.com/googleapis/google-api-nodejs-client/commit/9b8b03adbe023887418339a66b467f08cebb3c8c))
* **eventarc:** update the API ([2028f1d](https://www.github.com/googleapis/google-api-nodejs-client/commit/2028f1d924aa13c6446fd0b7ac4f035457cdc890))
* **firebase:** update the API ([def1cb5](https://www.github.com/googleapis/google-api-nodejs-client/commit/def1cb5c39ff30e75479c4316da9222555b09450))
* **firebasehosting:** update the API ([998b9a5](https://www.github.com/googleapis/google-api-nodejs-client/commit/998b9a5c8b4c409505b1be01683794d3396d40ff))
* **reseller:** update the API ([b818e56](https://www.github.com/googleapis/google-api-nodejs-client/commit/b818e5620a8086f19924e55780a552cd00b95f8e))
* **translate:** update the API ([c765672](https://www.github.com/googleapis/google-api-nodejs-client/commit/c7656722a95968ec148b9abd1b6587b01998fa48))

## [62.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v61.0.0...v62.0.0) (2020-10-28)


### ⚠ BREAKING CHANGES

* **videointelligence:** This release has breaking changes.
* **smartdevicemanagement:** This release has breaking changes.
* **serviceusage:** This release has breaking changes.
* **servicemanagement:** This release has breaking changes.
* **serviceconsumermanagement:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **servicenetworking:** This release has breaking changes.
* **dns:** This release has breaking changes.
* **videointelligence:** This release has breaking changes.
* **smartdevicemanagement:** This release has breaking changes.
* **realtimebidding:** This release has breaking changes.
* **managedidentities:** This release has breaking changes.
* **content:** This release has breaking changes.
* **androidpublisher:** This release has breaking changes.
* **realtimebidding:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **accesscontextmanager:** This release has breaking changes.

### Features

* regenerate index files ([b66e68b](https://www.github.com/googleapis/google-api-nodejs-client/commit/b66e68b47e9f2fcd8c7a539ebe5fd592bdf02260))
* **accesscontextmanager:** update the API ([97b0736](https://www.github.com/googleapis/google-api-nodejs-client/commit/97b07368c85a58992ab3b8fa34fb71d247b625d7))
* **accesscontextmanager:** update the API ([afa950d](https://www.github.com/googleapis/google-api-nodejs-client/commit/afa950d6c8c984ead49d633482ddb145cba68d20))
* **admin:** update the API ([1184f50](https://www.github.com/googleapis/google-api-nodejs-client/commit/1184f501e175857f338be8cea47499bcc38b70d1))
* **analyticsdata:** update the API ([04fc2c3](https://www.github.com/googleapis/google-api-nodejs-client/commit/04fc2c33de0c0bc1f0a3b9aa5ab92817f9661afd))
* **androidpublisher:** update the API ([859a99b](https://www.github.com/googleapis/google-api-nodejs-client/commit/859a99bf57173e349477301d11f4f726ba7959a6))
* **bigquery:** update the API ([79625a8](https://www.github.com/googleapis/google-api-nodejs-client/commit/79625a810157ebe55a88b96404b6b8a57da5f3fb))
* **books:** update the API ([4771835](https://www.github.com/googleapis/google-api-nodejs-client/commit/4771835f7cb119591a4def7b49f6056338d41a12))
* **chat:** update the API ([7c85b91](https://www.github.com/googleapis/google-api-nodejs-client/commit/7c85b91283aed171b285317b3adcca60402786eb))
* **cloudshell:** update the API ([ae53887](https://www.github.com/googleapis/google-api-nodejs-client/commit/ae53887f920e9201b0234b81a53786d16155b270))
* **compute:** update the API ([bb0ed96](https://www.github.com/googleapis/google-api-nodejs-client/commit/bb0ed9646fcd6532deeeacc02ae70f994697f1a9))
* **compute:** update the API ([a5848ec](https://www.github.com/googleapis/google-api-nodejs-client/commit/a5848ec5b41c84073a737acf112af595b57e4365))
* **content:** update the API ([ece490b](https://www.github.com/googleapis/google-api-nodejs-client/commit/ece490b84b90c75c28924761cd606bf1ff29c433))
* **dataflow:** update the API ([42830a2](https://www.github.com/googleapis/google-api-nodejs-client/commit/42830a2ca3694ce5a95993acf28b7d3966bd1c40))
* **dataproc:** update the API ([b8e9a1e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b8e9a1e7e4040742709577ee35cd607696ad6178))
* **dialogflow:** update the API ([dd939eb](https://www.github.com/googleapis/google-api-nodejs-client/commit/dd939ebd660dc6a0803ca58b3200b062c7acced1))
* **dialogflow:** update the API ([022e6b6](https://www.github.com/googleapis/google-api-nodejs-client/commit/022e6b6f96d6eff2ac4f80beac424b4be69c9230))
* **dns:** update the API ([88f18f7](https://www.github.com/googleapis/google-api-nodejs-client/commit/88f18f7b5519b81018b819d49c12b161c6e00146))
* **dns:** update the API ([18ba27d](https://www.github.com/googleapis/google-api-nodejs-client/commit/18ba27dd61a2dc251b2a240bb9114cf8789dffc1))
* **fitness:** update the API ([e592524](https://www.github.com/googleapis/google-api-nodejs-client/commit/e592524e09a326eaf8989d4e6f27c648b30db87a))
* **games:** update the API ([7d186d9](https://www.github.com/googleapis/google-api-nodejs-client/commit/7d186d9a84b15f958300e839b881fe0a1d53d69c))
* **healthcare:** update the API ([e95ec1d](https://www.github.com/googleapis/google-api-nodejs-client/commit/e95ec1dcab111671fcc4b2d4ecfa0b270ddbf3f9))
* **lifesciences:** update the API ([9917f7d](https://www.github.com/googleapis/google-api-nodejs-client/commit/9917f7d79d8067cca9fab083184685d9161d227f))
* **localservices:** update the API ([71fb007](https://www.github.com/googleapis/google-api-nodejs-client/commit/71fb007b19edd0a03add9038fee7cb771569acfb))
* **logging:** update the API ([bf3e557](https://www.github.com/googleapis/google-api-nodejs-client/commit/bf3e55755ad649ab67713e657a0b36162c96b948))
* **managedidentities:** update the API ([eb4b1e3](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb4b1e369f664adb5bf0f5bb7d7b360f3afd4da4))
* **ml:** update the API ([f5d873c](https://www.github.com/googleapis/google-api-nodejs-client/commit/f5d873c971f1846c6e3dd0a3efde8305d880f05b))
* **monitoring:** update the API ([6b51bcd](https://www.github.com/googleapis/google-api-nodejs-client/commit/6b51bcd59450df506ec839a739c33e2f4e143098))
* **monitoring:** update the API ([a6f7a9a](https://www.github.com/googleapis/google-api-nodejs-client/commit/a6f7a9a1ebb8cc2ae7e1e9e35d28304b737ba519))
* **poly:** update the API ([f187e34](https://www.github.com/googleapis/google-api-nodejs-client/commit/f187e344ed1baf88c45fd44ea51c237915d23caa))
* **prod_tt_sasportal:** update the API ([95a1f95](https://www.github.com/googleapis/google-api-nodejs-client/commit/95a1f9564f2ba6a60c6b17552777cec962207ed9))
* **realtimebidding:** update the API ([7c2c1ac](https://www.github.com/googleapis/google-api-nodejs-client/commit/7c2c1acf316768bf10ef0cc36c38a05dc432d72d))
* **realtimebidding:** update the API ([3f67c3e](https://www.github.com/googleapis/google-api-nodejs-client/commit/3f67c3e03a66130f231ca457059ae2a39241907f))
* **remotebuildexecution:** update the API ([7690730](https://www.github.com/googleapis/google-api-nodejs-client/commit/76907300c0d800bab93f968db250346149f7c0a7))
* **sasportal:** update the API ([e39415d](https://www.github.com/googleapis/google-api-nodejs-client/commit/e39415d7dec298de758fa74200a19e3cd167df65))
* **serviceconsumermanagement:** update the API ([00eb137](https://www.github.com/googleapis/google-api-nodejs-client/commit/00eb137d9bf0846c2f6fe7ce2d8810288fd58770))
* **servicecontrol:** update the API ([13e1883](https://www.github.com/googleapis/google-api-nodejs-client/commit/13e188365aca69333c62e2b2a4bf14fd830f41e7))
* **servicemanagement:** update the API ([3bf3039](https://www.github.com/googleapis/google-api-nodejs-client/commit/3bf3039351f848f397e3d4a65da3f4c8605d6c88))
* **servicenetworking:** update the API ([628fe5f](https://www.github.com/googleapis/google-api-nodejs-client/commit/628fe5f621434e6b7af78654e9775c71b522e980))
* **servicenetworking:** update the API ([6809a01](https://www.github.com/googleapis/google-api-nodejs-client/commit/6809a0101bc1e740f7d1f91a8393f9dd2ee0a37e))
* **servicenetworking:** update the API ([bd9aae3](https://www.github.com/googleapis/google-api-nodejs-client/commit/bd9aae3b8e4a13b16baacf973f83db49e11f1ab5))
* **serviceusage:** update the API ([e047b67](https://www.github.com/googleapis/google-api-nodejs-client/commit/e047b67c9ae7b096a39d1fc9fa02eccf09b75e9c))
* **smartdevicemanagement:** update the API ([380a946](https://www.github.com/googleapis/google-api-nodejs-client/commit/380a9465503a236af554984084ca4ee6f1db642b))
* **smartdevicemanagement:** update the API ([44adeb0](https://www.github.com/googleapis/google-api-nodejs-client/commit/44adeb0e1e21b065e04576e022294662f1d54b6e))
* **sqladmin:** update the API ([f448cab](https://www.github.com/googleapis/google-api-nodejs-client/commit/f448cab5b28ab85e95d7a9e8cd8f68eec2a03db3))
* **sqladmin:** update the API ([9ac4f68](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ac4f68e81cc317c02668586358ff56161989a84))
* **storagetransfer:** update the API ([69bc8a5](https://www.github.com/googleapis/google-api-nodejs-client/commit/69bc8a500d56dbd72bf1f1644104ba8902736ffd))
* **storagetransfer:** update the API ([9653168](https://www.github.com/googleapis/google-api-nodejs-client/commit/9653168be4658a8154415cab13274607a3e61903))
* **tagmanager:** update the API ([da24c53](https://www.github.com/googleapis/google-api-nodejs-client/commit/da24c5306de0bc47e43952a90e4307cc4cefad9e))
* **videointelligence:** update the API ([b2c326f](https://www.github.com/googleapis/google-api-nodejs-client/commit/b2c326f2dcc8927537836c901d3cf731ce50cd0a))
* regenerate index files ([96e3a77](https://www.github.com/googleapis/google-api-nodejs-client/commit/96e3a77fbfc893c3f1abc7d200aad2c9f3b0f47d))
* **testing:** update the API ([b123d88](https://www.github.com/googleapis/google-api-nodejs-client/commit/b123d88b81e9e20d8c210a9d312e73c96f2f3127))
* **testing:** update the API ([394fdb4](https://www.github.com/googleapis/google-api-nodejs-client/commit/394fdb40fecb34e01e4e9b307085be9359986aab))
* **tpu:** update the API ([9e02d17](https://www.github.com/googleapis/google-api-nodejs-client/commit/9e02d17c01dcd34331aedf67693f26b6ade47f19))
* **videointelligence:** update the API ([0606da2](https://www.github.com/googleapis/google-api-nodejs-client/commit/0606da2de48106dae9890714423a1faafea2a8c8))
* regenerate index files ([394fc2f](https://www.github.com/googleapis/google-api-nodejs-client/commit/394fc2fdd29e6bc4ea5778cb61b798c252946ad4))
* **vault:** update the API ([0218681](https://www.github.com/googleapis/google-api-nodejs-client/commit/0218681d427839ba05917f52112f429e96fa4149))
* **videointelligence:** update the API ([77ab989](https://www.github.com/googleapis/google-api-nodejs-client/commit/77ab9892f8ce04a6507156e033bbfc1496e9bfbc))
* regenerate index files ([a28ddc4](https://www.github.com/googleapis/google-api-nodejs-client/commit/a28ddc4b3c99e2aff21acfa0d7de9e6133e115e6))
* **videointelligence:** update the API ([00da575](https://www.github.com/googleapis/google-api-nodejs-client/commit/00da575bc61d6885b82940b5bbcf783d5d8c2ba3))
* regenerate index files ([06817be](https://www.github.com/googleapis/google-api-nodejs-client/commit/06817bebb25e2a1cf772c67faba5720717a14670))
* regenerate index files ([8fd603f](https://www.github.com/googleapis/google-api-nodejs-client/commit/8fd603f78101f801c605cc5f9dd215de883fdcad))


### Bug Fixes

* **accessapproval:** update the API ([30faddb](https://www.github.com/googleapis/google-api-nodejs-client/commit/30faddbee81513f6d2a0a5488130a6e9ab4ba568))
* **admin:** update the API ([266f586](https://www.github.com/googleapis/google-api-nodejs-client/commit/266f586733523186eb17e71ccdec8baef6eda31c))
* **analytics:** update the API ([c0df145](https://www.github.com/googleapis/google-api-nodejs-client/commit/c0df145cf4424ab81793245dcf5e13f8b36aa079))
* **analyticsdata:** update the API ([0aff8af](https://www.github.com/googleapis/google-api-nodejs-client/commit/0aff8af4bbb26da816cbc7491a88f19656e0fb04))
* **analyticsdata:** update the API ([95109ff](https://www.github.com/googleapis/google-api-nodejs-client/commit/95109ff91cd9270ab86d7b7443cab58f31966509))
* **androidpublisher:** update the API ([09d446f](https://www.github.com/googleapis/google-api-nodejs-client/commit/09d446f9837c7728929d0739beca8cbbc94dad0d))
* **area120tables:** update the API ([b8af9e8](https://www.github.com/googleapis/google-api-nodejs-client/commit/b8af9e8795ddcb2c838469a9b4aff97585f683e4))
* **assuredworkloads:** update the API ([eb655aa](https://www.github.com/googleapis/google-api-nodejs-client/commit/eb655aab99660a3887ababc54b52da83e27d3b3e))
* **cloudbuild:** update the API ([711370d](https://www.github.com/googleapis/google-api-nodejs-client/commit/711370daf5f37e348fa31ba16fd67ffbb405c1d7))
* **cloudbuild:** update the API ([077a891](https://www.github.com/googleapis/google-api-nodejs-client/commit/077a8917b9e5a15bed176e6bb7da3f8650b9c25e))
* **cloudresourcemanager:** update the API ([973d18d](https://www.github.com/googleapis/google-api-nodejs-client/commit/973d18dae0508f9f757afda9c8c2a53cdf938006))
* **cloudsearch:** update the API ([4ef36bf](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ef36bff1ae11d3cd7e7bb135588d77fd274a133))
* **composer:** update the API ([1f4a154](https://www.github.com/googleapis/google-api-nodejs-client/commit/1f4a154e6ea4cff959362587c51212e0edcdb5e6))
* **content:** update the API ([7a38718](https://www.github.com/googleapis/google-api-nodejs-client/commit/7a387186a0ea103c56cc15575dfcda544159c5ae))
* **datacatalog:** update the API ([8addb9c](https://www.github.com/googleapis/google-api-nodejs-client/commit/8addb9c0852e141f819a3b456dabd883524dcf50))
* **dataproc:** update the API ([bebff81](https://www.github.com/googleapis/google-api-nodejs-client/commit/bebff81e293f7ae382a2be63fc64aea24c2d1de1))
* **datastore:** update the API ([f6a9d11](https://www.github.com/googleapis/google-api-nodejs-client/commit/f6a9d113b4d235862f3d1b332b99d678fb45282f))
* **displayvideo:** update the API ([081aed9](https://www.github.com/googleapis/google-api-nodejs-client/commit/081aed9647a5b92fee356f9eedf68d204e8e7a56))
* **dlp:** update the API ([d65b977](https://www.github.com/googleapis/google-api-nodejs-client/commit/d65b97792581d0da2ed17d504a75b8c6b1dab891))
* **domains:** update the API ([24bff51](https://www.github.com/googleapis/google-api-nodejs-client/commit/24bff51737d2809da352bd9d5d10507bca86dcb7))
* **doubleclickbidmanager:** update the API ([e2e71a0](https://www.github.com/googleapis/google-api-nodejs-client/commit/e2e71a0569d6b97b03e7ce616fb2e16e434a913a))
* **doubleclickbidmanager:** update the API ([ef6f866](https://www.github.com/googleapis/google-api-nodejs-client/commit/ef6f866da9e86948d3e919d3572734967112f6d7))
* **doubleclickbidmanager:** update the API ([6a8e4fc](https://www.github.com/googleapis/google-api-nodejs-client/commit/6a8e4fc713ad9cb6b1cce53142b2e007d0156be6))
* **drive:** update the API ([a79448d](https://www.github.com/googleapis/google-api-nodejs-client/commit/a79448dae6a4cfe66bba604aa3d0d306b49b0328))
* **eventarc:** update the API ([c3190e9](https://www.github.com/googleapis/google-api-nodejs-client/commit/c3190e9014a2b7981394143122bb0a8e3439310f))
* **firestore:** update the API ([0f4e9de](https://www.github.com/googleapis/google-api-nodejs-client/commit/0f4e9dec115a9d0946e4684d6a72b0882eb0d083))
* **fitness:** update the API ([93478c3](https://www.github.com/googleapis/google-api-nodejs-client/commit/93478c3493e8829b4885cb392c58956934612e45))
* **gameservices:** update the API ([2b21cf2](https://www.github.com/googleapis/google-api-nodejs-client/commit/2b21cf20226d86d85aaab8a5e969b61368935a9c))
* **gmailpostmastertools:** update the API ([c4a245a](https://www.github.com/googleapis/google-api-nodejs-client/commit/c4a245a1e3f6f32c9663e278aa07e9ca86df1870))
* **healthcare:** update the API ([4c27d1a](https://www.github.com/googleapis/google-api-nodejs-client/commit/4c27d1a2fe4aee66b8026abe658d35da19c45170))
* **iam:** update the API ([e3b6904](https://www.github.com/googleapis/google-api-nodejs-client/commit/e3b6904ba069574d4db663d35676ba8b7fcc1589))
* **iamcredentials:** update the API ([8836f2f](https://www.github.com/googleapis/google-api-nodejs-client/commit/8836f2fc2977e650a410b9185fc4c94d90e58d6d))
* **licensing:** update the API ([dbc4913](https://www.github.com/googleapis/google-api-nodejs-client/commit/dbc491320d43abec77d9386029bbe0b60698cd5e))
* **licensing:** update the API ([b69694e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b69694e2b30cb86ecd884a7465a7e2630b825773))
* **licensing:** update the API ([c1213b7](https://www.github.com/googleapis/google-api-nodejs-client/commit/c1213b71df682f37649dbbf9a070294bdd2355e4))
* **logging:** update the API ([5069b69](https://www.github.com/googleapis/google-api-nodejs-client/commit/5069b698d528ca33e3a20734629fa550b66aea7a))
* **logging:** update the API ([e4aae18](https://www.github.com/googleapis/google-api-nodejs-client/commit/e4aae188af458d8e90ae98d22bc98a68abf22e4f))
* **memcache:** update the API ([a4968e3](https://www.github.com/googleapis/google-api-nodejs-client/commit/a4968e30d76f41afc7d8e9958ff739d397a025c2))
* **oauth2:** update the API ([1b9b441](https://www.github.com/googleapis/google-api-nodejs-client/commit/1b9b441185029d5f8ce20cad1f40598aa7b1760e))
* **people:** update the API ([7d2eb7a](https://www.github.com/googleapis/google-api-nodejs-client/commit/7d2eb7a6ce283c769a2db44d5e25ab5b7502577c))
* **people:** update the API ([0c58bef](https://www.github.com/googleapis/google-api-nodejs-client/commit/0c58bef6a6e7bf5aa9ace7b71529bc0e0386855e))
* **people:** update the API ([6f32921](https://www.github.com/googleapis/google-api-nodejs-client/commit/6f3292189a55803e15b71c9f31e7fe84c32fd947))
* **people:** update the API ([9718714](https://www.github.com/googleapis/google-api-nodejs-client/commit/97187148dfa671e66c54e53fd59bea93262a2ee8))
* **playablelocations:** update the API ([f82fdc7](https://www.github.com/googleapis/google-api-nodejs-client/commit/f82fdc7f74928f402e3a0b0a0ebddf0d4a67e4bc))
* **pubsub:** update the API ([61b30e0](https://www.github.com/googleapis/google-api-nodejs-client/commit/61b30e05bd266180a49a47bc5a74ef40f6614678))
* **recommender:** update the API ([d01d4e3](https://www.github.com/googleapis/google-api-nodejs-client/commit/d01d4e3ca72c5f9172dd1ee016a2de88e6f0f9e2))
* **run:** update the API ([9739728](https://www.github.com/googleapis/google-api-nodejs-client/commit/9739728d4cc15e613fa4bc83a4e3ffc19d1e2308))
* **run:** update the API ([ebf9000](https://www.github.com/googleapis/google-api-nodejs-client/commit/ebf9000769127da3b4cb005f1290593458695cc2))
* **serviceconsumermanagement:** update the API ([b9afcd7](https://www.github.com/googleapis/google-api-nodejs-client/commit/b9afcd76a138a33788a7d2c5706aaec3ece54526))
* **serviceconsumermanagement:** update the API ([bcc1d7e](https://www.github.com/googleapis/google-api-nodejs-client/commit/bcc1d7e163f90a095de5ac499f0c1e725795b7c6))
* **serviceusage:** update the API ([0c2b20e](https://www.github.com/googleapis/google-api-nodejs-client/commit/0c2b20e79250b2bbae5506c38caf804fdd076453))
* **serviceusage:** update the API ([6e98df4](https://www.github.com/googleapis/google-api-nodejs-client/commit/6e98df48e11aa916b748ddf797e1b70fbb77244e))
* **storagetransfer:** update the API ([7aeb081](https://www.github.com/googleapis/google-api-nodejs-client/commit/7aeb08149d8a86ce84b4c3d5350a7db36addf72b))
* **streetviewpublish:** update the API ([dfbc9dd](https://www.github.com/googleapis/google-api-nodejs-client/commit/dfbc9ddbffc22a7da93c7470334b56fa75eb83a6))
* **sts:** update the API ([5ba201f](https://www.github.com/googleapis/google-api-nodejs-client/commit/5ba201fbab67539133edca01b5095e2c0995d3e6))
* **types:** treat supportsMediaDownload return type as unknown ([#2412](https://www.github.com/googleapis/google-api-nodejs-client/issues/2412)) ([ff795f0](https://www.github.com/googleapis/google-api-nodejs-client/commit/ff795f077042d0695d2500491da1455292680eb9))
* **webmasters:** update the API ([bbc6f18](https://www.github.com/googleapis/google-api-nodejs-client/commit/bbc6f18442ff8382474d987fd626bb7e3d719495))
* **workflows:** update the API ([2019de0](https://www.github.com/googleapis/google-api-nodejs-client/commit/2019de027d4a514a0dc37f119b42bcaef2371784))
* **workflows:** update the API ([4e3b7e9](https://www.github.com/googleapis/google-api-nodejs-client/commit/4e3b7e9beae9e8f9c26353661438a324b84ee2e5))
* **workflows:** update the API ([435c852](https://www.github.com/googleapis/google-api-nodejs-client/commit/435c852d79550395cae765d89f5a15956e335e80))
* **youtube:** update the API ([174af33](https://www.github.com/googleapis/google-api-nodejs-client/commit/174af33159897422072c2808c14b315ed5a06591))

## [61.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v60.0.1...v61.0.0) (2020-10-05)


### ⚠ BREAKING CHANGES

* **videointelligence:** This release has breaking changes.
* **tagmanager:** This release has breaking changes.
* **storagetransfer:** This release has breaking changes.
* **storage:** This release has breaking changes.
* **sqladmin:** This release has breaking changes.
* **servicenetworking:** This release has breaking changes.
* **servicemanagement:** This release has breaking changes.
* **securitycenter:** This release has breaking changes.
* **run:** This release has breaking changes.
* **redis:** This release has breaking changes.
* **realtimebidding:** This release has breaking changes.
* **osconfig:** This release has breaking changes.
* **monitoring:** This release has breaking changes.
* **ml:** This release has breaking changes.
* **memcache:** This release has breaking changes.
* **licensing:** This release has breaking changes.
* **jobs:** This release has breaking changes.
* **healthcare:** This release has breaking changes.
* **genomics:** This release has breaking changes.
* **fitness:** This release has breaking changes.
* **doubleclickbidmanager:** This release has breaking changes.
* **digitalassetlinks:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **dfareporting:** This release has breaking changes.
* **deploymentmanager:** This release has breaking changes.
* **dataflow:** This release has breaking changes.
* **datacatalog:** This release has breaking changes.
* **content:** This release has breaking changes.
* **compute:** This release has breaking changes.
* **cloudsearch:** This release has breaking changes.
* **cloudbuild:** This release has breaking changes.
* **cloudasset:** This release has breaking changes.
* **chat:** This release has breaking changes.
* **calendar:** This release has breaking changes.

### Features

* regenerate index files ([799a348](https://www.github.com/googleapis/google-api-nodejs-client/commit/799a348b218c429bfb6f4448aa6764c7b3f624bd))
* **calendar:** update the API ([c0648dd](https://www.github.com/googleapis/google-api-nodejs-client/commit/c0648dde9e4cecee3669c83cde0c8a5672dc7c9a))
* **chat:** update the API ([d3c5e3c](https://www.github.com/googleapis/google-api-nodejs-client/commit/d3c5e3caf1e813383505872e2ef08a10519868c1))
* **civicinfo:** update the API ([b93342d](https://www.github.com/googleapis/google-api-nodejs-client/commit/b93342d31d2a1721ab2afa63c4f15c62002f143d))
* **classroom:** update the API ([f1c535f](https://www.github.com/googleapis/google-api-nodejs-client/commit/f1c535f652d64615b624cbf4a9d2619718badd02))
* **cloudasset:** update the API ([73b1830](https://www.github.com/googleapis/google-api-nodejs-client/commit/73b18309a390ba792dbccd5d6a2b5fd90f1a09cd))
* **cloudbilling:** update the API ([30b19a7](https://www.github.com/googleapis/google-api-nodejs-client/commit/30b19a75f28455f4c3474afe2132da254801ef34))
* **cloudbuild:** update the API ([69095ff](https://www.github.com/googleapis/google-api-nodejs-client/commit/69095ffea00f4f493fa0cecb1693da56c3868015))
* **cloudfunctions:** update the API ([52cc316](https://www.github.com/googleapis/google-api-nodejs-client/commit/52cc3167b57b5c35d6f15ed43cc9fbe7c35a062e))
* **cloudidentity:** update the API ([02cbdfc](https://www.github.com/googleapis/google-api-nodejs-client/commit/02cbdfc42934abefb6c70397391288135c374baa))
* **cloudiot:** update the API ([4cfa144](https://www.github.com/googleapis/google-api-nodejs-client/commit/4cfa144eafe41e8556edaf36d8ed0f9d17039168))
* **cloudkms:** update the API ([edbcc03](https://www.github.com/googleapis/google-api-nodejs-client/commit/edbcc0339da8af9dae1dc8a70321b3461b202095))
* **cloudresourcemanager:** update the API ([75040af](https://www.github.com/googleapis/google-api-nodejs-client/commit/75040afd1869d21541185668b227f204429a23c7))
* **cloudsearch:** update the API ([4be1c43](https://www.github.com/googleapis/google-api-nodejs-client/commit/4be1c43f44ae404892d37e1c9095426034a5baff))
* **cloudtasks:** update the API ([24162b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/24162b8ba2fccb7b4ce789bf8864888b94a81dee))
* **compute:** update the API ([9b860c4](https://www.github.com/googleapis/google-api-nodejs-client/commit/9b860c40a8a448b7a24a1d1fe07e594dda505a3a))
* **container:** update the API ([5c7f222](https://www.github.com/googleapis/google-api-nodejs-client/commit/5c7f222b3164b5d5ff4ece404607a2bca319fa05))
* **containeranalysis:** update the API ([b2b1bec](https://www.github.com/googleapis/google-api-nodejs-client/commit/b2b1becfd2b3de205fe0258969da31a457feb175))
* **content:** update the API ([e70c638](https://www.github.com/googleapis/google-api-nodejs-client/commit/e70c638dec8995bdc3fe7cd976e13b77d977ca15))
* **datacatalog:** update the API ([14a8332](https://www.github.com/googleapis/google-api-nodejs-client/commit/14a8332bd9a248d06d6a15da1c130d71eb784f2c))
* **dataflow:** update the API ([6634789](https://www.github.com/googleapis/google-api-nodejs-client/commit/6634789b991a2ec71c9b662b91e154b5b8811b74))
* **datafusion:** update the API ([0afc693](https://www.github.com/googleapis/google-api-nodejs-client/commit/0afc693c9764b3d74f2dc99f99bc2e7ec5e0a73a))
* **dataproc:** update the API ([c92bdbe](https://www.github.com/googleapis/google-api-nodejs-client/commit/c92bdbe219c505e9fb1f3268a480f7ceed230d86))
* **deploymentmanager:** update the API ([9257e64](https://www.github.com/googleapis/google-api-nodejs-client/commit/9257e6465dffec1352d0069eb06e14dfb43e36ce))
* **dfareporting:** update the API ([3860a61](https://www.github.com/googleapis/google-api-nodejs-client/commit/3860a61644a4b832325d8fb10b85a8b137d3996e))
* **dialogflow:** update the API ([8b67bb6](https://www.github.com/googleapis/google-api-nodejs-client/commit/8b67bb6dc19fe26853de9045f004b81363177d19))
* **digitalassetlinks:** update the API ([4980eb0](https://www.github.com/googleapis/google-api-nodejs-client/commit/4980eb0294db0f322725222c1987b04f68428c6e))
* **displayvideo:** update the API ([cf7db54](https://www.github.com/googleapis/google-api-nodejs-client/commit/cf7db546fcf293f9af93540b5b31e0a83a43a80a))
* **dlp:** update the API ([58da305](https://www.github.com/googleapis/google-api-nodejs-client/commit/58da30532a911f0cd68bc659a99c45a3bc25a61d))
* **documentai:** update the API ([150fd17](https://www.github.com/googleapis/google-api-nodejs-client/commit/150fd174618d1203375501695c471a863dde12a0))
* **doubleclickbidmanager:** update the API ([9478e96](https://www.github.com/googleapis/google-api-nodejs-client/commit/9478e96d82d31eb751283a0c5c3253590d2be51a))
* **drive:** update the API ([de29160](https://www.github.com/googleapis/google-api-nodejs-client/commit/de291604398781b529cca18da77fbd2786fd153c))
* **firebasehosting:** update the API ([c36263f](https://www.github.com/googleapis/google-api-nodejs-client/commit/c36263ff48c41964269c667100f29b4872921712))
* **firebaseml:** update the API ([5f527aa](https://www.github.com/googleapis/google-api-nodejs-client/commit/5f527aad07300fa5ae8ac1285914d7573e73cf8b))
* **fitness:** update the API ([48e3869](https://www.github.com/googleapis/google-api-nodejs-client/commit/48e386930522932746f6cf6bdd2a1954f16e1b86))
* **gameservices:** update the API ([7855e1e](https://www.github.com/googleapis/google-api-nodejs-client/commit/7855e1ee85a05db3e053067a986be7a451837ae4))
* **genomics:** update the API ([f305e41](https://www.github.com/googleapis/google-api-nodejs-client/commit/f305e41e3a5fc379289ba0b3fded77caa847e6da))
* **healthcare:** update the API ([309da03](https://www.github.com/googleapis/google-api-nodejs-client/commit/309da031989f74b394a7540d1aa1790ef40b023e))
* **homegraph:** update the API ([9cd500c](https://www.github.com/googleapis/google-api-nodejs-client/commit/9cd500c6df45f4da9a198028c094f5afa379f437))
* **iam:** update the API ([8553527](https://www.github.com/googleapis/google-api-nodejs-client/commit/8553527ac2d4093126655c2f0c6bfeb4955ea373))
* **iap:** update the API ([343b1d6](https://www.github.com/googleapis/google-api-nodejs-client/commit/343b1d6899079367f889183d89b9294c2443b608))
* **jobs:** update the API ([8a6b60c](https://www.github.com/googleapis/google-api-nodejs-client/commit/8a6b60c5737e14fd3f0ba88ef99901ab84e8878a))
* **licensing:** update the API ([1ec9e02](https://www.github.com/googleapis/google-api-nodejs-client/commit/1ec9e02ed714dcf29fd0cbce420c016120d0fc25))
* **managedidentities:** update the API ([a836490](https://www.github.com/googleapis/google-api-nodejs-client/commit/a836490019ab1b9f3c72b6889bfcb550de8da0c1))
* **memcache:** update the API ([6d711c6](https://www.github.com/googleapis/google-api-nodejs-client/commit/6d711c6d38b36f173dcc086d5f091c579449a454))
* **ml:** update the API ([e7ba0db](https://www.github.com/googleapis/google-api-nodejs-client/commit/e7ba0db3b8ff2604b38d0461d553fd4c645f4426))
* **monitoring:** update the API ([8f45268](https://www.github.com/googleapis/google-api-nodejs-client/commit/8f452685d5f211527e58be0080250e06788c06d4))
* **networkmanagement:** update the API ([58e9f8f](https://www.github.com/googleapis/google-api-nodejs-client/commit/58e9f8f7c79f6526f9f0129c7ced05ace737cee0))
* **osconfig:** update the API ([47b89a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/47b89a3f158024153ab0be45dd329415fc4e181c))
* **oslogin:** update the API ([c027f96](https://www.github.com/googleapis/google-api-nodejs-client/commit/c027f96d57c56d38ba1de515a4a1540265978bf5))
* **prod_tt_sasportal:** update the API ([852104c](https://www.github.com/googleapis/google-api-nodejs-client/commit/852104c00a325f0467abaad0a715bb3872bb5509))
* **pubsub:** update the API ([95c2737](https://www.github.com/googleapis/google-api-nodejs-client/commit/95c273786cdbc9681dbb9b8ccc72cde816b658dd))
* **pubsublite:** update the API ([f25084b](https://www.github.com/googleapis/google-api-nodejs-client/commit/f25084b4bed15558347da46cfa925c80cc7b0c58))
* **realtimebidding:** update the API ([e6a0e0c](https://www.github.com/googleapis/google-api-nodejs-client/commit/e6a0e0c430b1f52c5a5c9a7e11782f8f6d345516))
* **redis:** update the API ([8d41677](https://www.github.com/googleapis/google-api-nodejs-client/commit/8d4167781919b16a37f16f440d731625e02dfd6f))
* **run:** update the API ([8c63fcd](https://www.github.com/googleapis/google-api-nodejs-client/commit/8c63fcdc525c0a282314c8b4f347c322f7cbe1e6))
* **runtimeconfig:** update the API ([696dbaf](https://www.github.com/googleapis/google-api-nodejs-client/commit/696dbaf91bfe736aa3e15dee2b3713e9f8ef962d))
* **sasportal:** update the API ([325597f](https://www.github.com/googleapis/google-api-nodejs-client/commit/325597f52122f58cc32920cd3282b2dfb82b7d0a))
* **searchconsole:** update the API ([51f38fa](https://www.github.com/googleapis/google-api-nodejs-client/commit/51f38fa1053086a9e9baf28f25b90635515ccf5d))
* **secretmanager:** update the API ([585365d](https://www.github.com/googleapis/google-api-nodejs-client/commit/585365dcc7e6b3fe8c96e8dba44072b454065ee8))
* **securitycenter:** update the API ([ccf0a06](https://www.github.com/googleapis/google-api-nodejs-client/commit/ccf0a06ff6bcbe8a3b56a70a2dd6b08c055ec372))
* **serviceconsumermanagement:** update the API ([1e2655c](https://www.github.com/googleapis/google-api-nodejs-client/commit/1e2655cae9c6fceb5d31dbec4a7cc56e8195eccd))
* **servicedirectory:** update the API ([b341b8e](https://www.github.com/googleapis/google-api-nodejs-client/commit/b341b8e0d7eb935ff0b9c976e7487c116e2e1b5d))
* **servicemanagement:** update the API ([904c155](https://www.github.com/googleapis/google-api-nodejs-client/commit/904c15561214e3b2167ac988000a531ded003f42))
* **servicenetworking:** update the API ([18f9e9e](https://www.github.com/googleapis/google-api-nodejs-client/commit/18f9e9e7d376cfd20b7ea3d060a573dfe799a0cb))
* **sheets:** update the API ([d4d9252](https://www.github.com/googleapis/google-api-nodejs-client/commit/d4d92525cecd24ad2fb579834114a782da0e9221))
* **spanner:** update the API ([b98923c](https://www.github.com/googleapis/google-api-nodejs-client/commit/b98923c27b49c62712eb681dbf543ca272d4b8b3))
* **speech:** update the API ([ba088d5](https://www.github.com/googleapis/google-api-nodejs-client/commit/ba088d549403cda23c25a95be527c75db513d831))
* **sqladmin:** update the API ([e85236f](https://www.github.com/googleapis/google-api-nodejs-client/commit/e85236f83082546593cce859baf93ea92eb7214f))
* **storage:** update the API ([3b2528f](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b2528faddcdf9d690d16b7bcf123300d9665ded))
* **storagetransfer:** update the API ([d386644](https://www.github.com/googleapis/google-api-nodejs-client/commit/d386644aeef9be29e21ef92985b45c98283580c7))
* **tagmanager:** update the API ([fce300b](https://www.github.com/googleapis/google-api-nodejs-client/commit/fce300b67f114c69e41d1a1f1ccbad4d68fb7c96))
* **tasks:** update the API ([cfe8fb4](https://www.github.com/googleapis/google-api-nodejs-client/commit/cfe8fb42474a45e838e9118a732cf68dfa96eae0))
* **tpu:** update the API ([897a43d](https://www.github.com/googleapis/google-api-nodejs-client/commit/897a43d26ca50e42d30529001d7144803dd1a78a))
* **vault:** update the API ([ad8d2ff](https://www.github.com/googleapis/google-api-nodejs-client/commit/ad8d2ff58c77ac3e3a321097a78b79d84a51ebc4))
* **videointelligence:** update the API ([e0c3703](https://www.github.com/googleapis/google-api-nodejs-client/commit/e0c37038358cde957f2d89d644ce6f2220455eac))


### Bug Fixes

* **composer:** update the API ([deb11bd](https://www.github.com/googleapis/google-api-nodejs-client/commit/deb11bd4762a2eada7a898e3dc781ed7967a9af3))
* **discovery:** update the API ([b7fa3cc](https://www.github.com/googleapis/google-api-nodejs-client/commit/b7fa3cc52ad8711e7c3134ded47eb7e9c3292f29))
* **doubleclicksearch:** update the API ([1456405](https://www.github.com/googleapis/google-api-nodejs-client/commit/14564050aa81575fd7498cd0519fb9f7bc53dc89))
* **file:** update the API ([91ba390](https://www.github.com/googleapis/google-api-nodejs-client/commit/91ba39072eccd67b7edf3ab0cdd540903bf62375))
* **firebase:** update the API ([a4ac499](https://www.github.com/googleapis/google-api-nodejs-client/commit/a4ac49935f8fbb3cb0d874c3acf6937482d16a1c))
* **gmail:** update the API ([8508d05](https://www.github.com/googleapis/google-api-nodejs-client/commit/8508d0513294e159fa437a6afe9edc6ae6d01e85))
* **groupssettings:** update the API ([e1a4c33](https://www.github.com/googleapis/google-api-nodejs-client/commit/e1a4c33c23ee499771154905d67c74cd0ad19d18))
* **iamcredentials:** update the API ([04c571e](https://www.github.com/googleapis/google-api-nodejs-client/commit/04c571e383899b364f13590f8e8d99cd6eb8fbaa))
* **kgsearch:** update the API ([b94dd19](https://www.github.com/googleapis/google-api-nodejs-client/commit/b94dd194bfa7dc433ebced3fe21121f4b2de0da2))
* **people:** update the API ([b37c65b](https://www.github.com/googleapis/google-api-nodejs-client/commit/b37c65b1f162f2a8e304d16aff60227c6ea5db3a))
* **playcustomapp:** update the API ([e524554](https://www.github.com/googleapis/google-api-nodejs-client/commit/e5245543ff8a535255faf349e3e23cc37b4e6e7f))
* **plus:** update the API ([3b04001](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b04001a2b8f71fa24846e910028d368ad7ebfab))
* **recommender:** update the API ([9a1fb04](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a1fb049fc90e1207c4fa4190469203aec6924e9))
* **servicecontrol:** update the API ([0c1842f](https://www.github.com/googleapis/google-api-nodejs-client/commit/0c1842f16594b8708797e8736d278271fa270fce))
* **smartdevicemanagement:** update the API ([aa00231](https://www.github.com/googleapis/google-api-nodejs-client/commit/aa00231e9c15c2e83a362636f669f0e9464f390e))
* **sourcerepo:** update the API ([7df6b77](https://www.github.com/googleapis/google-api-nodejs-client/commit/7df6b773ebfa80ef3888a384a81e09f6fc4769d5))
* **sql:** update the API ([97684fb](https://www.github.com/googleapis/google-api-nodejs-client/commit/97684fbb7f0f5d8fa5c59e05d4292759fffd3038))
* **sts:** update the API ([48cf35e](https://www.github.com/googleapis/google-api-nodejs-client/commit/48cf35e5efc20ca7bb99153df39d14657bf9fe00))
* **testing:** update the API ([0cde769](https://www.github.com/googleapis/google-api-nodejs-client/commit/0cde76937261d3cb6d82f8d663395c427d330eab))
* **trafficdirector:** update the API ([9d69a65](https://www.github.com/googleapis/google-api-nodejs-client/commit/9d69a657468029581eb27e27af18077b81efe8c5))
* **translate:** update the API ([137acb1](https://www.github.com/googleapis/google-api-nodejs-client/commit/137acb15ff439cd5b57a63b4af2b3dc9d2cc1922))
* **verifiedaccess:** update the API ([fe02c05](https://www.github.com/googleapis/google-api-nodejs-client/commit/fe02c053c55dd8c5c9ec20d4b85652137cf2cca6))
* **workflowexecutions:** update the API ([829caa0](https://www.github.com/googleapis/google-api-nodejs-client/commit/829caa02f8076e3d1bd658c5e734e20f86ce8335))
* **workflows:** update the API ([a9cb808](https://www.github.com/googleapis/google-api-nodejs-client/commit/a9cb8085325c0f952d35dcc64afe246b0015998e))

### [60.0.1](https://www.github.com/googleapis/google-api-nodejs-client/compare/v60.0.0...v60.0.1) (2020-09-22)


### Bug Fixes

* fixed compile error of invalid export ([#2362](https://www.github.com/googleapis/google-api-nodejs-client/issues/2362)) ([3e98a0d](https://www.github.com/googleapis/google-api-nodejs-client/commit/3e98a0d2548579417c0f7781a5d6ffdc3c0e804c))

## [60.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v59.0.0...v60.0.0) (2020-09-01)


### ⚠ BREAKING CHANGES

* **toolresults:** This release has breaking changes.
* **sasportal:** This release has breaking changes.
* **groupsmigration:** This release has breaking changes.
* **firebaseml:** This release has breaking changes.
* **firebase:** This release has breaking changes.
* **file:** This release has breaking changes.
* **displayvideo:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **dfareporting:** This release has breaking changes.
* **compute:** This release has breaking changes.
* **cloudidentity:** This release has breaking changes.
* **calendar:** This release has breaking changes.
* **bigtableadmin:** This release has breaking changes.
* **admin:** This release has breaking changes.
* **adexchangebuyer2:** This release has breaking changes.

### Features

* delete blunderbuss ([#2344](https://www.github.com/googleapis/google-api-nodejs-client/issues/2344)) ([9ee32ad](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ee32ade107674deeb3b7bb8d2a7fa0351d08ef1))
* regenerate index files ([dd0f540](https://www.github.com/googleapis/google-api-nodejs-client/commit/dd0f5405afd54f5556335418bec733d7276bb6c1))
* **adexchangebuyer2:** update the API ([d3865e9](https://www.github.com/googleapis/google-api-nodejs-client/commit/d3865e981b362137ebce38ba4c6db1445fe66101))
* **admin:** update the API ([270eed6](https://www.github.com/googleapis/google-api-nodejs-client/commit/270eed65c06a3888c3231b5dd902a3d11f024454))
* **androidmanagement:** update the API ([cf0f6a1](https://www.github.com/googleapis/google-api-nodejs-client/commit/cf0f6a171038e5ba609a6afd607cc458149ca15a))
* **bigtableadmin:** update the API ([3cde8f6](https://www.github.com/googleapis/google-api-nodejs-client/commit/3cde8f6ee4208b243ba54a96f1b88ad778fd29db))
* **calendar:** update the API ([cdf692a](https://www.github.com/googleapis/google-api-nodejs-client/commit/cdf692a78ecf3f59605d7853933d29444406c18d))
* **cloudbilling:** update the API ([38dcbf9](https://www.github.com/googleapis/google-api-nodejs-client/commit/38dcbf909e2baeb90536343b1c7f21769f9fddc7))
* **cloudbuild:** update the API ([e6cabc2](https://www.github.com/googleapis/google-api-nodejs-client/commit/e6cabc20edf5743031e6ede7a35740862a4ffb99))
* **cloudidentity:** update the API ([c52f6bf](https://www.github.com/googleapis/google-api-nodejs-client/commit/c52f6bf7afb9906f993485564cc700ed83a41075))
* **cloudkms:** update the API ([ab161e7](https://www.github.com/googleapis/google-api-nodejs-client/commit/ab161e7793e704c0e48900ce287693a1354ce133))
* **composer:** update the API ([df760ef](https://www.github.com/googleapis/google-api-nodejs-client/commit/df760ef916912071f86e504d9eca7d7aafc1bcf1))
* **compute:** update the API ([1318e3e](https://www.github.com/googleapis/google-api-nodejs-client/commit/1318e3ebb946a881907aef22fccc5ab8d6fd2df6))
* **container:** update the API ([95e2090](https://www.github.com/googleapis/google-api-nodejs-client/commit/95e209097fe76e4bfb2e3376b117eef336a17984))
* **dfareporting:** update the API ([3013cdd](https://www.github.com/googleapis/google-api-nodejs-client/commit/3013cdd7805208e798c777bd9db23997c6f37575))
* **dialogflow:** update the API ([ff39f29](https://www.github.com/googleapis/google-api-nodejs-client/commit/ff39f297da26a19e1cbe47a45f97d0482a3fed35))
* **displayvideo:** update the API ([b6a5172](https://www.github.com/googleapis/google-api-nodejs-client/commit/b6a517249d7161b86d71b7755e541b780086359d))
* **documentai:** update the API ([d4a1cbb](https://www.github.com/googleapis/google-api-nodejs-client/commit/d4a1cbb392687db5507727954c7173be661438c7))
* **file:** update the API ([0ba3f79](https://www.github.com/googleapis/google-api-nodejs-client/commit/0ba3f79bf9fde4a6358872ef234c38ec00919244))
* **firebase:** update the API ([986aaf9](https://www.github.com/googleapis/google-api-nodejs-client/commit/986aaf955c3823754e3ba4282171ce3f50add1ab))
* **firebaseml:** update the API ([dcd0663](https://www.github.com/googleapis/google-api-nodejs-client/commit/dcd0663b00445591ffd755039c80668871850c6f))
* **fitness:** update the API ([b10b005](https://www.github.com/googleapis/google-api-nodejs-client/commit/b10b005120975515cb0f1a44dbcc06a7bc385f67))
* **groupsmigration:** update the API ([cc6fb96](https://www.github.com/googleapis/google-api-nodejs-client/commit/cc6fb9694afde1df4c5e0d4c337436e0c1104e82))
* **healthcare:** update the API ([d339b28](https://www.github.com/googleapis/google-api-nodejs-client/commit/d339b288bb15ea38cdc08820143489619a8c99c6))
* **memcache:** update the API ([99c414c](https://www.github.com/googleapis/google-api-nodejs-client/commit/99c414c7611e54e174bb304d2da683e0d8b05be2))
* **monitoring:** update the API ([aaca4ea](https://www.github.com/googleapis/google-api-nodejs-client/commit/aaca4ea636842998e70fc98e86613f14e6256bf2))
* **networkmanagement:** update the API ([784ca46](https://www.github.com/googleapis/google-api-nodejs-client/commit/784ca4621b971e31bedc0926aabe0c2242f2b12b))
* **remotebuildexecution:** update the API ([d97620e](https://www.github.com/googleapis/google-api-nodejs-client/commit/d97620e1154b3f8cdfe14af38d76feaada0489a2))
* **sasportal:** update the API ([60d2b5c](https://www.github.com/googleapis/google-api-nodejs-client/commit/60d2b5c8c6564cbcb8535cac27fab27d396b39d0))
* **servicenetworking:** update the API ([40b7818](https://www.github.com/googleapis/google-api-nodejs-client/commit/40b78184426eaac3a7965cfffcdd66833f7a75a9))
* **serviceusage:** update the API ([710252a](https://www.github.com/googleapis/google-api-nodejs-client/commit/710252a9f2a617411ba13d18ebc0a5a3a88ce4ea))
* **sheets:** update the API ([5f9c7b3](https://www.github.com/googleapis/google-api-nodejs-client/commit/5f9c7b3140e03611ae021d4bcab8981bbb9be909))
* **testing:** update the API ([1978318](https://www.github.com/googleapis/google-api-nodejs-client/commit/1978318c40187020b5d4ab14c593ccf62e408f86))
* **toolresults:** update the API ([2afd0a7](https://www.github.com/googleapis/google-api-nodejs-client/commit/2afd0a7078c141a98bd7749d14e1c5d291894fae))
* **tpu:** update the API ([e195d9a](https://www.github.com/googleapis/google-api-nodejs-client/commit/e195d9a5c28699e0e2fa231517bb1fa40ce4fcfe))
* **translate:** update the API ([8d36bd6](https://www.github.com/googleapis/google-api-nodejs-client/commit/8d36bd688270eb78efff569dae5f27bc7f490ef7))
* **webfonts:** update the API ([bfb8899](https://www.github.com/googleapis/google-api-nodejs-client/commit/bfb889999f486e92d1ab2d9389e750e7a7f7f001))
* run the generator ([#2327](https://www.github.com/googleapis/google-api-nodejs-client/issues/2327)) ([dd6b8f5](https://www.github.com/googleapis/google-api-nodejs-client/commit/dd6b8f5f707cd716e6e1bbba3dd79ac5903032c7))


### Bug Fixes

* failing tests ([89ed4e4](https://www.github.com/googleapis/google-api-nodejs-client/commit/89ed4e474294f16e22019394659ca971c38ba492))
* failing tests ([8d0e0b3](https://www.github.com/googleapis/google-api-nodejs-client/commit/8d0e0b3e8eefa8f728557fcf7525201384b5e998))
* npm runlint ([bdb29bb](https://www.github.com/googleapis/google-api-nodejs-client/commit/bdb29bbe1702446a7a977b36611c9d91163536f5))
* **androidpublisher:** update the API ([fc7fb9e](https://www.github.com/googleapis/google-api-nodejs-client/commit/fc7fb9e91348bc6b2b83f443f36ae06fdc8bb58d))
* **cloudasset:** update the API ([6bd56f9](https://www.github.com/googleapis/google-api-nodejs-client/commit/6bd56f91d383984757b714a1f5688580fd6a9665))
* **cloudscheduler:** update the API ([fbcd73b](https://www.github.com/googleapis/google-api-nodejs-client/commit/fbcd73bfccbc71a720e7693783105410e973a8d7))
* **doubleclickbidmanager:** update the API ([bdf1b91](https://www.github.com/googleapis/google-api-nodejs-client/commit/bdf1b9162a9e416d0d4be8d6a9c42a403008fc62))
* **gmail:** update the API ([ad82454](https://www.github.com/googleapis/google-api-nodejs-client/commit/ad82454c24435ca979bb33a3cc2dd75f9d830065))
* **gmailpostmastertools:** update the API ([37d0f0b](https://www.github.com/googleapis/google-api-nodejs-client/commit/37d0f0b7b2c656254347130b8576262555e32749))
* **iam:** update the API ([29b7117](https://www.github.com/googleapis/google-api-nodejs-client/commit/29b7117bdab06a38b0a48f46e351e976a1aae7ab))
* **iamcredentials:** update the API ([db5cc71](https://www.github.com/googleapis/google-api-nodejs-client/commit/db5cc71d874078eaecc571caa7703d0c95517229))
* **lifesciences:** update the API ([4118789](https://www.github.com/googleapis/google-api-nodejs-client/commit/4118789e43fa8b308f10830dfd5c6c9b32dc712e))
* **localservices:** update the API ([feba241](https://www.github.com/googleapis/google-api-nodejs-client/commit/feba241fdeb7a8bec2bd1c9cf887e01f7972a52a))
* **pubsublite:** update the API ([9a0510a](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a0510ae2190cb9323d7d8e34abdb2fa7351f37c))
* **securitycenter:** update the API ([99139ed](https://www.github.com/googleapis/google-api-nodejs-client/commit/99139ed943b7eca66e2b14e51b807cce5f13c5f9))
* **serviceconsumermanagement:** update the API ([84097df](https://www.github.com/googleapis/google-api-nodejs-client/commit/84097dfb1743205da4516a69b3039c2acd5f0abb))
* **servicecontrol:** update the API ([061d08c](https://www.github.com/googleapis/google-api-nodejs-client/commit/061d08c240be07bc578f3563aef24ce09158c85a))
* **siteVerification:** update the API ([b98ef47](https://www.github.com/googleapis/google-api-nodejs-client/commit/b98ef47338b2cc2aa5b81104b1257626433a21f2))
* **tasks:** update the API ([65a1c7d](https://www.github.com/googleapis/google-api-nodejs-client/commit/65a1c7d77fb060dc92fde1ce2aa3b4aec9da32b4))
* **texttospeech:** update the API ([6bc9ba6](https://www.github.com/googleapis/google-api-nodejs-client/commit/6bc9ba67acb53e34b86d7aee1184115503a4df8c))

## [59.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v58.0.0...v59.0.0) (2020-08-11)


### ⚠ BREAKING CHANGES

* This release has breaking changes.
* This release has breaking changes.
* This release has breaking changes.
* This release has breaking changes.
* **doubleclickbidmanager:** This release has breaking changes.
* **realtimebidding:** This release has breaking changes.
* **memcache:** This release has breaking changes.
* **datacatalog:** This release has breaking changes.

### Features

* **accessapproval:** update the API ([ae90a50](https://www.github.com/googleapis/google-api-nodejs-client/commit/ae90a50b28eb531743329e4c06ecdb9b7ece71c6))
* **adexchangebuyer2:** update the API ([330dee0](https://www.github.com/googleapis/google-api-nodejs-client/commit/330dee0bd2d15626f6bba5c489ec97cb35462cf3))
* **adexperiencereport:** update the API ([32bddd1](https://www.github.com/googleapis/google-api-nodejs-client/commit/32bddd1364b24a30e406037f2e21e5b7eed338e3))
* **admob:** update the API ([6aaf2d9](https://www.github.com/googleapis/google-api-nodejs-client/commit/6aaf2d9855c2330adbec88c6f00bac1166ebf982))
* **alertcenter:** update the API ([af9c91b](https://www.github.com/googleapis/google-api-nodejs-client/commit/af9c91b8dc931ed1c53b8398843a6e8df479e768))
* **analyticsreporting:** update the API ([2c0a6b6](https://www.github.com/googleapis/google-api-nodejs-client/commit/2c0a6b68418dab66c0b644d49bb6acea2f80a7a9))
* **androiddeviceprovisioning:** update the API ([51aa72d](https://www.github.com/googleapis/google-api-nodejs-client/commit/51aa72d50e1ee32b041ab243035e834f0d436815))
* **androidenterprise:** update the API ([b3f2a14](https://www.github.com/googleapis/google-api-nodejs-client/commit/b3f2a14e4d0ef3331c07d3f02e31fb28a55ae015))
* **androidpublisher:** update the API ([828cd89](https://www.github.com/googleapis/google-api-nodejs-client/commit/828cd89c4871ea00379ab81058d3ab7c0e6b2614))
* **appengine:** update the API ([c801b30](https://www.github.com/googleapis/google-api-nodejs-client/commit/c801b30be4e24563dadf7b30a382e105c9a0b293))
* **billingbudgets:** update the API ([2056439](https://www.github.com/googleapis/google-api-nodejs-client/commit/20564396d3a005d846609ec84703771923c8dd84))
* **blogger:** update the API ([ee9878d](https://www.github.com/googleapis/google-api-nodejs-client/commit/ee9878d98d72c530145260ad14811a07d1d3a503))
* **classroom:** update the API ([cdf4894](https://www.github.com/googleapis/google-api-nodejs-client/commit/cdf48944867475f9195a8c0acec605250ab66d21))
* **customsearch:** update the API ([9a57c25](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a57c25a9c9a0fcc7cd998365b2f740c84c441ba))
* **datacatalog:** update the API ([abf359c](https://www.github.com/googleapis/google-api-nodejs-client/commit/abf359c7da8f0c85c31b485a98983296432f2db1))
* **datafusion:** update the API ([6316d04](https://www.github.com/googleapis/google-api-nodejs-client/commit/6316d04a4d34ccf60ddbab00fb71364531bb6af4))
* **dataproc:** update the API ([e400b20](https://www.github.com/googleapis/google-api-nodejs-client/commit/e400b20c5b021663f9c5ab19695e15c4876df8d8))
* **dfareporting:** update the API ([6420be9](https://www.github.com/googleapis/google-api-nodejs-client/commit/6420be988ff8741ee7e90e4336c931af6ce20f74))
* **dialogflow:** update the API ([1ec8d2b](https://www.github.com/googleapis/google-api-nodejs-client/commit/1ec8d2bd8e1ba7acbb22998d922ecf210ac3436a))
* **doubleclickbidmanager:** update the API ([9f0c8a2](https://www.github.com/googleapis/google-api-nodejs-client/commit/9f0c8a2de89cb2fd33bb57cb5d1694cafe5e793b))
* **drive:** update the API ([ee489cc](https://www.github.com/googleapis/google-api-nodejs-client/commit/ee489ccdc086fe913ea6adf095858d0fbb7c263b))
* **firebase:** update the API ([e43c59c](https://www.github.com/googleapis/google-api-nodejs-client/commit/e43c59cee027da24960ae0cf2190643f296db2f1))
* **firebasedynamiclinks:** update the API ([6538587](https://www.github.com/googleapis/google-api-nodejs-client/commit/6538587f6300ce22987d62503941e243398683e8))
* **firebasehosting:** update the API ([9408f89](https://www.github.com/googleapis/google-api-nodejs-client/commit/9408f89661ebbef43d1050119896bfecfd4c2aec))
* **firebaseml:** update the API ([900d029](https://www.github.com/googleapis/google-api-nodejs-client/commit/900d029936347a04dc5b4969baf306d3e190ed2c))
* **healthcare:** update the API ([a25ff32](https://www.github.com/googleapis/google-api-nodejs-client/commit/a25ff328826038a166e1a3fae5e6cca594b14f31))
* **managedidentities:** update the API ([120d84b](https://www.github.com/googleapis/google-api-nodejs-client/commit/120d84bcd6c6f6d024336cd3b16b08d2170997ac))
* **memcache:** update the API ([09f1d0c](https://www.github.com/googleapis/google-api-nodejs-client/commit/09f1d0c292777fa3175fdb3404378374c38fd7d0))
* **monitoring:** update the API ([b1af31a](https://www.github.com/googleapis/google-api-nodejs-client/commit/b1af31ad603f6831089896811985ca709202dc8c))
* **people:** update the API ([25508d0](https://www.github.com/googleapis/google-api-nodejs-client/commit/25508d01c99dacd7ed32a3466159093e56957948))
* **prod_tt_sasportal:** update the API ([5ef698d](https://www.github.com/googleapis/google-api-nodejs-client/commit/5ef698d39d91fa89d8d84ce76cbbf80d68e6c0f2))
* regenerate index files ([45d1479](https://www.github.com/googleapis/google-api-nodejs-client/commit/45d147934f49ad5de1d0229a8f8cea35d0417288))
* regenerate index files ([1caf086](https://www.github.com/googleapis/google-api-nodejs-client/commit/1caf0869bdb97ddd1d2c14b3c6042b79526a2674))
* regenerate index files ([21a492b](https://www.github.com/googleapis/google-api-nodejs-client/commit/21a492b6580ce827b7c41bd1a69712e869232bcb))
* run the generator ([#2319](https://www.github.com/googleapis/google-api-nodejs-client/issues/2319)) ([2d578ca](https://www.github.com/googleapis/google-api-nodejs-client/commit/2d578ca2e3e6778d31a29902a46f8d399289e089))
* **serviceusage:** update the API ([e82f2f2](https://www.github.com/googleapis/google-api-nodejs-client/commit/e82f2f221e698737aeb1d0d83ea741a8b44eb454))
* run the generator ([#2320](https://www.github.com/googleapis/google-api-nodejs-client/issues/2320)) ([424ced7](https://www.github.com/googleapis/google-api-nodejs-client/commit/424ced71c0e2ec24457ba247d21ee12425f1a382))
* **safebrowsing:** update the API ([29960c6](https://www.github.com/googleapis/google-api-nodejs-client/commit/29960c64969329a4e23f80e87e589ecebf756e37))
* run the generator ([#2321](https://www.github.com/googleapis/google-api-nodejs-client/issues/2321)) ([701edf3](https://www.github.com/googleapis/google-api-nodejs-client/commit/701edf301c4fd910f335774cc6f4d4f1d62c5436))
* **realtimebidding:** update the API ([ed6f4b3](https://www.github.com/googleapis/google-api-nodejs-client/commit/ed6f4b3d924f2b16b40763f9c4e5eb3741cad5b4))
* **realtimebidding:** update the API ([e0c047f](https://www.github.com/googleapis/google-api-nodejs-client/commit/e0c047f37329261cae48bcbd110431465a62c0aa))
* **run:** update the API ([1cece79](https://www.github.com/googleapis/google-api-nodejs-client/commit/1cece79a990ae3b47b0d9f21c54de6acd3b516b8))
* **sasportal:** update the API ([f8e2f34](https://www.github.com/googleapis/google-api-nodejs-client/commit/f8e2f34c487dd22081b07ab44cdc156931e66149))
* **securitycenter:** update the API ([401e676](https://www.github.com/googleapis/google-api-nodejs-client/commit/401e676f406c5ce6abbd778831a59d66b4522553))
* **serviceconsumermanagement:** update the API ([73ad4be](https://www.github.com/googleapis/google-api-nodejs-client/commit/73ad4be79d7aad8c3fed0e28b2c3e538bad4a748))
* **servicenetworking:** update the API ([e6f3fd3](https://www.github.com/googleapis/google-api-nodejs-client/commit/e6f3fd356b3d43c009d21ca72f3aa0100a9d4d14))
* **tagmanager:** update the API ([c79abcd](https://www.github.com/googleapis/google-api-nodejs-client/commit/c79abcdc5c2bfe8cac205af66a695bd142b8cd8f))
* **toolresults:** update the API ([3a32acd](https://www.github.com/googleapis/google-api-nodejs-client/commit/3a32acd01cdcc08fd406a2156bf9b9129111e4f0))


### Bug Fixes

* **abusiveexperiencereport:** update the API ([277b193](https://www.github.com/googleapis/google-api-nodejs-client/commit/277b1937083f00d5cc843477cfcf455eae211a07))
* **adsense:** update the API ([e7a55af](https://www.github.com/googleapis/google-api-nodejs-client/commit/e7a55afda18204cd1871c320cd0c876f093bca5e))
* **bigtableadmin:** update the API ([ddbaa9c](https://www.github.com/googleapis/google-api-nodejs-client/commit/ddbaa9c077ad45f124c1a4e6e8decf051d8e157f))
* **chromeuxreport:** update the API ([92e314c](https://www.github.com/googleapis/google-api-nodejs-client/commit/92e314c23597b1a0ef0a9d24f9c1be632445ffe2))
* **cloudasset:** update the API ([75c1cce](https://www.github.com/googleapis/google-api-nodejs-client/commit/75c1cceb55fa6fc5a0e296d2c0fd46c9991abcc8))
* **dns:** update the API ([b7bd09f](https://www.github.com/googleapis/google-api-nodejs-client/commit/b7bd09ffa33e6ef14d8ab59d66d33982a226ab55))
* **domainsrdap:** update the API ([e4c51c3](https://www.github.com/googleapis/google-api-nodejs-client/commit/e4c51c37f4665d2149b97cdf7d2896aa6ca69973))
* **driveactivity:** update the API ([b8dbd25](https://www.github.com/googleapis/google-api-nodejs-client/commit/b8dbd25087d28a801d78aa332b3d399a14af88ef))
* **factchecktools:** update the API ([75f29d8](https://www.github.com/googleapis/google-api-nodejs-client/commit/75f29d8dde455d78ede92e6de02031e6b1e09490))
* **fitness:** update the API ([7cfa445](https://www.github.com/googleapis/google-api-nodejs-client/commit/7cfa445e94d608acd1958e5ba01eabf721ac4dea))
* **gameservices:** update the API ([4023f99](https://www.github.com/googleapis/google-api-nodejs-client/commit/4023f9974fc3e017f78b19e1e6b24e2547facb9f))
* **gmailpostmastertools:** update the API ([65a4cfe](https://www.github.com/googleapis/google-api-nodejs-client/commit/65a4cfe433a16cd6badd338185933841586118a3))
* **libraryagent:** update the API ([4ae1b93](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ae1b93212e40ed953c2b9253f4d73e85cfc4762))
* **logging:** update the API ([81b47e5](https://www.github.com/googleapis/google-api-nodejs-client/commit/81b47e52f2ea42422b8dbc367bdea13a99a37fe2))
* **ml:** update the API ([d9c47dc](https://www.github.com/googleapis/google-api-nodejs-client/commit/d9c47dc9d89d5f18f9315717319d540fc2d10221))
* **policytroubleshooter:** update the API ([4a4624b](https://www.github.com/googleapis/google-api-nodejs-client/commit/4a4624b38cc0dc6eddbaba9cc5435678b3c991c0))
* **pubsublite:** update the API ([2c51891](https://www.github.com/googleapis/google-api-nodejs-client/commit/2c51891f6ac28f1db3e6fe729cd00ccff2c1092a))
* **recommendationengine:** update the API ([13bb576](https://www.github.com/googleapis/google-api-nodejs-client/commit/13bb576c4d68eb06b1d9213524bc657dbff1b77c))
* **runtimeconfig:** update the API ([2e78fca](https://www.github.com/googleapis/google-api-nodejs-client/commit/2e78fca1947b9751dff38d063c0d37c190509313))
* **runtimeconfig:** update the API ([7ee42d7](https://www.github.com/googleapis/google-api-nodejs-client/commit/7ee42d72e2fed395be2d12fde821060ed61fa877))
* **servicecontrol:** update the API ([d0322a8](https://www.github.com/googleapis/google-api-nodejs-client/commit/d0322a85907e023e3d8620c0db0190790966344d))
* **sql:** update the API ([d4ff69c](https://www.github.com/googleapis/google-api-nodejs-client/commit/d4ff69c04501515c54a76ac31835724b4f72f1e3))
* **storagetransfer:** update the API ([ea3c280](https://www.github.com/googleapis/google-api-nodejs-client/commit/ea3c2808f7bb8493b8dc7c7766624a4d771df4a3))
* **tpu:** update the API ([4a10b49](https://www.github.com/googleapis/google-api-nodejs-client/commit/4a10b49a8939b1fb613eed99e76505b1435caf78))
* **youtubeAnalytics:** update the API ([78b89c4](https://www.github.com/googleapis/google-api-nodejs-client/commit/78b89c47332878601a241c0bd9227bd39b695fe5))
* **youtubereporting:** update the API ([736a8a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/736a8a39bd72e7a3473732759716d2b74e488867))

## [58.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v57.0.0...v58.0.0) (2020-07-30)


### ⚠ BREAKING CHANGES

* **dataproc:** This release has breaking changes.
* **compute:** This release has breaking changes.
* **genomics:** This release has breaking changes.

### Features

* regenerate index files ([2b252f5](https://www.github.com/googleapis/google-api-nodejs-client/commit/2b252f5dc2de16800774449af946057674354dd3))
* regenerate index files ([8e81bc3](https://www.github.com/googleapis/google-api-nodejs-client/commit/8e81bc3601c218afe91b05d4b6e277ccac533792))
* **tagmanager:** update the API ([54f05d4](https://www.github.com/googleapis/google-api-nodejs-client/commit/54f05d4d318404eae9402d083a080003a9e1ac5c))
* regenerate index files ([3ac0511](https://www.github.com/googleapis/google-api-nodejs-client/commit/3ac05119b92f2ffd3fab743f53387df68e0d922c))
* **clouderrorreporting:** update the API ([3e5e22a](https://www.github.com/googleapis/google-api-nodejs-client/commit/3e5e22a2c08933c0943b8e646aab2f27c5200c35))
* **compute:** update the API ([6cda6b2](https://www.github.com/googleapis/google-api-nodejs-client/commit/6cda6b2029b133c737062fdea599cd2d18818201))
* **container:** update the API ([3bb7746](https://www.github.com/googleapis/google-api-nodejs-client/commit/3bb77462340c9de39da205930ec1d87e1a2a77c3))
* **dataproc:** update the API ([cd98eb3](https://www.github.com/googleapis/google-api-nodejs-client/commit/cd98eb3bb50d6c1461bec0e303c031c0407f1e59))
* **dataproc:** update the API ([1f2e0b5](https://www.github.com/googleapis/google-api-nodejs-client/commit/1f2e0b5a97d4d44a6e75b829baa483b0fe0d7db3))
* **displayvideo:** update the API ([6a6a912](https://www.github.com/googleapis/google-api-nodejs-client/commit/6a6a912618c0e1b07abfc2b8d43c5dbcaed7dfa4))
* **doubleclickbidmanager:** update the API ([f8977f3](https://www.github.com/googleapis/google-api-nodejs-client/commit/f8977f300ab6a41a5b1c5506fe567d776a7717bb))
* **drive:** update the API ([b6a446a](https://www.github.com/googleapis/google-api-nodejs-client/commit/b6a446aa39f7c13cfb2700239f7133e4f39d568f))
* **firebase:** update the API ([c33cfcd](https://www.github.com/googleapis/google-api-nodejs-client/commit/c33cfcdfd34b3f9fe1ea9af7620368d1adac62e3))
* **genomics:** update the API ([f52dd58](https://www.github.com/googleapis/google-api-nodejs-client/commit/f52dd585e495e613e4a4820526327aef2ecc98f5))
* **people:** update the API ([aff8960](https://www.github.com/googleapis/google-api-nodejs-client/commit/aff8960e6c20d7eb1c571439f734ec8fcbf94fbf))
* **pubsub:** update the API ([eda6668](https://www.github.com/googleapis/google-api-nodejs-client/commit/eda6668b0180214b2d6462ce6de96594ba90ea2a))
* **servicemanagement:** update the API ([b1060ae](https://www.github.com/googleapis/google-api-nodejs-client/commit/b1060ae1e8c5ee15ddb5e13f8afc8ca11c991d9b))


### Bug Fixes

* **bigquerydatatransfer:** update the API ([3b61f8b](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b61f8baf21f13e662e999c2a8d771ad28cdfa68))
* **cloudsearch:** update the API ([1e7867a](https://www.github.com/googleapis/google-api-nodejs-client/commit/1e7867a0f7c5fef6e095905e0727d1419becbc22))
* **content:** update the API ([05d5d97](https://www.github.com/googleapis/google-api-nodejs-client/commit/05d5d9798a82dc8b2e2eaceeef39f8b90dcf3d90))
* **dlp:** update the API ([45c0a74](https://www.github.com/googleapis/google-api-nodejs-client/commit/45c0a744ff602d63839c071610fcec2c460af521))
* **firebase:** update the API ([9ad83a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ad83a37211e6b0634ac97f7b2841c5f0085a90e))
* **spanner:** update the API ([1ad236e](https://www.github.com/googleapis/google-api-nodejs-client/commit/1ad236e96ff31d53bbffbd906887deb835127fc4))

## [57.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v56.0.0...v57.0.0) (2020-07-27)


### ⚠ BREAKING CHANGES

* **sasportal:** This release has breaking changes.
* **pubsub:** This release has breaking changes.
* **cloudfunctions:** This release has breaking changes.

### Features

* **bigquery:** update the API ([40573c6](https://www.github.com/googleapis/google-api-nodejs-client/commit/40573c6c23bb0eda30d4b9cf42794fd9f366f707))
* **cloudfunctions:** update the API ([6445eb8](https://www.github.com/googleapis/google-api-nodejs-client/commit/6445eb808647674d3ee3f215e1429af6b9dfde05))
* **dfareporting:** update the API ([58fb0df](https://www.github.com/googleapis/google-api-nodejs-client/commit/58fb0dfa978ddf4ec4967429e1b3da894ce527b9))
* **displayvideo:** update the API ([244afe6](https://www.github.com/googleapis/google-api-nodejs-client/commit/244afe658953095690bd3c7811af387afeab366f))
* **pubsub:** update the API ([f9a69a8](https://www.github.com/googleapis/google-api-nodejs-client/commit/f9a69a89a13aaeffa2739500f464e5dbba1d95ae))
* **redis:** update the API ([39ca367](https://www.github.com/googleapis/google-api-nodejs-client/commit/39ca3676a0172eac1a8edb833e952d6295085cbc))
* **sasportal:** update the API ([09688c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/09688c5ba8d4a90f4a97ff0e66896f649ad736ad))
* regenerate index files ([cfbbf9c](https://www.github.com/googleapis/google-api-nodejs-client/commit/cfbbf9cb97a7cd64d08128bf3efbb0472e77e61a))
* regenerate index files ([a619a9c](https://www.github.com/googleapis/google-api-nodejs-client/commit/a619a9cc846ac0e8a61a80cb4f4245b0f8484ec5))


### Bug Fixes

* **cloudresourcemanager:** update the API ([932a461](https://www.github.com/googleapis/google-api-nodejs-client/commit/932a4611dd8559764682c30a290e0c09ec3b16e6))
* **customsearch:** update the API ([6e25475](https://www.github.com/googleapis/google-api-nodejs-client/commit/6e25475dd5a013bfc08c14bb9e8e40546fddab26))
* **dataflow:** update the API ([13c8527](https://www.github.com/googleapis/google-api-nodejs-client/commit/13c8527e0d81f862d9b81acf3dde9ce7a669f3aa))

## [56.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v55.0.0...v56.0.0) (2020-07-24)


### ⚠ BREAKING CHANGES

* **redis:** This release has breaking changes.
* **toolresults:** This release has breaking changes.
* **sql:** This release has breaking changes.
* **prod_tt_sasportal:** This release has breaking changes.
* **dns:** This release has breaking changes.

### Features

* **books:** update the API ([3b8f8e7](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b8f8e7fa6a88c20f5c756d3733343dd8c311df5))
* **chat:** update the API ([3e584db](https://www.github.com/googleapis/google-api-nodejs-client/commit/3e584db84ccfe11c60ebee2de7a3be6189e88ebf))
* **chromeuxreport:** update the API ([e31415f](https://www.github.com/googleapis/google-api-nodejs-client/commit/e31415f7c531529640dbfac03cd9a5e70a7aa4cf))
* **cloudscheduler:** update the API ([78e233d](https://www.github.com/googleapis/google-api-nodejs-client/commit/78e233d318e7be68064487fb99d004700920e784))
* **container:** update the API ([09522c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/09522c5528816ffe6aed3af8d67c30ac51427e16))
* **content:** update the API ([6994cea](https://www.github.com/googleapis/google-api-nodejs-client/commit/6994ceac9f71157022778d458490d7ddfe6e9832))
* **datacatalog:** update the API ([0522b96](https://www.github.com/googleapis/google-api-nodejs-client/commit/0522b96be84464f299dbed968fbe0745e27a44d1))
* **dialogflow:** update the API ([faff33a](https://www.github.com/googleapis/google-api-nodejs-client/commit/faff33a6ca8cda72d67b1194610bfd23eee22d1d))
* **displayvideo:** update the API ([508f6f7](https://www.github.com/googleapis/google-api-nodejs-client/commit/508f6f7d004024cc2688ac1aa4b2265462d8ae91))
* **dns:** update the API ([29ecce8](https://www.github.com/googleapis/google-api-nodejs-client/commit/29ecce82d067dd1e164a854c72c427f935a3e503))
* **firebaseml:** update the API ([a0834b5](https://www.github.com/googleapis/google-api-nodejs-client/commit/a0834b5303759291bdc439bfb143328627bea706))
* **games:** update the API ([63e7160](https://www.github.com/googleapis/google-api-nodejs-client/commit/63e7160953231bdb3cffb8e799ce3b3064c76a67))
* **gmailpostmastertools:** update the API ([ee1894a](https://www.github.com/googleapis/google-api-nodejs-client/commit/ee1894a2c623b0b9d9bc7acf8255d114e3d05a72))
* **healthcare:** update the API ([c89f959](https://www.github.com/googleapis/google-api-nodejs-client/commit/c89f959e184dfeeb9886a6332c0868dbcacfb3d7))
* **osconfig:** update the API ([bd53832](https://www.github.com/googleapis/google-api-nodejs-client/commit/bd538325084d0e82f3dc5a231df39c0391a37bf5))
* regenerate index files ([bd0909c](https://www.github.com/googleapis/google-api-nodejs-client/commit/bd0909c7dacf2c58ae8a31c78027f3e3ea6e36e6))
* regenerate index files ([c4f9d37](https://www.github.com/googleapis/google-api-nodejs-client/commit/c4f9d370b41133ef19f07d250903e566df4ff842))
* **people:** update the API ([e43a67b](https://www.github.com/googleapis/google-api-nodejs-client/commit/e43a67b4c3d0ae0c54334e7dc4c6b0eeb65d70b1))
* **prod_tt_sasportal:** update the API ([9cc3327](https://www.github.com/googleapis/google-api-nodejs-client/commit/9cc3327d03a172d9590c4165a8055767ed1e75bc))
* **pubsub:** update the API ([122fffb](https://www.github.com/googleapis/google-api-nodejs-client/commit/122fffb864625860ec8ec14afeeb78fcc0c3db09))
* **redis:** update the API ([19469bb](https://www.github.com/googleapis/google-api-nodejs-client/commit/19469bb7ad222c0924143e4517f69ce72c31bd34))
* **redis:** update the API ([ff00073](https://www.github.com/googleapis/google-api-nodejs-client/commit/ff0007356d69d88f2b4c2fc8d062faa31d9adf0f))
* **sql:** update the API ([3274cfd](https://www.github.com/googleapis/google-api-nodejs-client/commit/3274cfd1096191b7c7a1d876d2b551973c95c28b))
* **testing:** update the API ([fdebf10](https://www.github.com/googleapis/google-api-nodejs-client/commit/fdebf1000f557870e63f6597b1b180a3c37b7738))
* **toolresults:** update the API ([24a7247](https://www.github.com/googleapis/google-api-nodejs-client/commit/24a7247fb26e4f9c6b31a8e7c123bf4c25edc567))


### Bug Fixes

* **admob:** update the API ([b0e685b](https://www.github.com/googleapis/google-api-nodejs-client/commit/b0e685bd384828b9b45e6869db478ca306ec244c))
* **chat:** update the API ([4ee0fc1](https://www.github.com/googleapis/google-api-nodejs-client/commit/4ee0fc15bf82b0383a075d77cea4ded1c036f92a))
* **cloudasset:** update the API ([043c8c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/043c8c57478dd70a4e137ae8e2ff1f1a6f4f28d7))
* **cloudresourcemanager:** update the API ([657cc93](https://www.github.com/googleapis/google-api-nodejs-client/commit/657cc9350dd945863355e62801c353f3420826d9))
* **cloudresourcemanager:** update the API ([ab81b4d](https://www.github.com/googleapis/google-api-nodejs-client/commit/ab81b4dac9796d7d965d32b76ea7d7f9d7550f54))
* **dataproc:** update the API ([1747789](https://www.github.com/googleapis/google-api-nodejs-client/commit/1747789632737ebf68fa54e3e5767f01b7918b70))
* **doubleclicksearch:** update the API ([87547df](https://www.github.com/googleapis/google-api-nodejs-client/commit/87547df75933298dd1c9953efd834030b81d501f))
* **fcm:** update the API ([77f6b10](https://www.github.com/googleapis/google-api-nodejs-client/commit/77f6b10be2fefeba4a3d2a0238ea202edbdfec96))
* **firebase:** update the API ([bfef3d7](https://www.github.com/googleapis/google-api-nodejs-client/commit/bfef3d75d9612bd13e286616918ee5c0a558019a))
* **gamesConfiguration:** update the API ([2070ebc](https://www.github.com/googleapis/google-api-nodejs-client/commit/2070ebc420cb44199705fdce6d388f9fa3131e1d))
* **gamesManagement:** update the API ([ac06340](https://www.github.com/googleapis/google-api-nodejs-client/commit/ac063407fc8fdb5c8186b63d3ea9d6c5a5f298b6))
* **gmail:** update the API ([9f021f4](https://www.github.com/googleapis/google-api-nodejs-client/commit/9f021f4f6d87445d45323f03647004f4d092afd9))
* **ml:** update the API ([cdff9ac](https://www.github.com/googleapis/google-api-nodejs-client/commit/cdff9ac8b20ae93e918bb271132b152245191809))
* **monitoring:** update the API ([0b18bc5](https://www.github.com/googleapis/google-api-nodejs-client/commit/0b18bc59415dcd95bb470361fa38cf8fce142f0e))
* **monitoring:** update the API ([783aca9](https://www.github.com/googleapis/google-api-nodejs-client/commit/783aca9d6541715e980aa72496f7cb25b20c43c1))
* **run:** update the API ([374d759](https://www.github.com/googleapis/google-api-nodejs-client/commit/374d75935a1c3923b73943122ee364524d9ab526))
* **serviceconsumermanagement:** update the API ([188b437](https://www.github.com/googleapis/google-api-nodejs-client/commit/188b437dc73cc93e08b8444b5878eada13b61a97))
* **servicecontrol:** update the API ([f625c90](https://www.github.com/googleapis/google-api-nodejs-client/commit/f625c90c44e5d40bbcd875acec13369e3156ff31))
* **servicenetworking:** update the API ([346a0d2](https://www.github.com/googleapis/google-api-nodejs-client/commit/346a0d2ccd01cd9e1dc11c75227930540b0f720a))
* **serviceusage:** update the API ([2093fce](https://www.github.com/googleapis/google-api-nodejs-client/commit/2093fcef19a5037dd9590755b6eaaa5f5feb183a))
* **vision:** update the API ([e4e2917](https://www.github.com/googleapis/google-api-nodejs-client/commit/e4e29175bebd32b9b8155eefb2ec43b8ef50a5c6))
* **webfonts:** update the API ([e404e51](https://www.github.com/googleapis/google-api-nodejs-client/commit/e404e51bb4ca443c2836b26b4eafdec10594a299))

## [55.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v54.1.0...v55.0.0) (2020-07-17)


### ⚠ BREAKING CHANGES

* **doubleclicksearch:** This release has breaking changes.

### Features

* **bigtableadmin:** update the API ([a26ca35](https://www.github.com/googleapis/google-api-nodejs-client/commit/a26ca350c4685fec7fe73b841af5a5dc1f7025da))
* **billingbudgets:** update the API ([e476479](https://www.github.com/googleapis/google-api-nodejs-client/commit/e4764798941bedfdd4b3a2a35c6eb730e67e96e5))
* **datacatalog:** update the API ([c6406bf](https://www.github.com/googleapis/google-api-nodejs-client/commit/c6406bf29eedf25ef06954ed3fb094a6d14cd860))
* **doubleclicksearch:** update the API ([8d5c13e](https://www.github.com/googleapis/google-api-nodejs-client/commit/8d5c13e0da58e78ceb5d17d24174abcc44c46826))
* regenerate index files ([8dd6865](https://www.github.com/googleapis/google-api-nodejs-client/commit/8dd68650f73ea52f1b86af2f768a18d250fc3d12))
* regenerate index files ([2037fce](https://www.github.com/googleapis/google-api-nodejs-client/commit/2037fcec502b5c220c04e237937fe6548581ee7e))


### Bug Fixes

* **admob:** update the API ([36ff967](https://www.github.com/googleapis/google-api-nodejs-client/commit/36ff967ea0a25762d70aa45f8bf4e4049ecbe832))
* **appengine:** update the API ([fe79bcf](https://www.github.com/googleapis/google-api-nodejs-client/commit/fe79bcf1822f74b8798141f3eccf46df61103019))
* **classroom:** update the API ([91b4aee](https://www.github.com/googleapis/google-api-nodejs-client/commit/91b4aee0df5a1ad7d8a18caf30d29a0293204a1a))
* **cloudbuild:** update the API ([c2212f0](https://www.github.com/googleapis/google-api-nodejs-client/commit/c2212f0f75ad28fb80cfc483778d3cc9f48c176f))
* **cloudtrace:** update the API ([84f2be8](https://www.github.com/googleapis/google-api-nodejs-client/commit/84f2be820df7868d5f465395aac84e0411fdffdb))
* **customsearch:** update the API ([ae136da](https://www.github.com/googleapis/google-api-nodejs-client/commit/ae136da8f7427e4dbc82cd45d046815fbfca91fc))
* **dataproc:** update the API ([060cec8](https://www.github.com/googleapis/google-api-nodejs-client/commit/060cec84944baf95baf225aed22649a7b833300e))
* **dataproc:** update the API ([c1dc387](https://www.github.com/googleapis/google-api-nodejs-client/commit/c1dc387db0102de8d6234d1685dd1449bfcafa4c))
* **displayvideo:** update the API ([f0da5ea](https://www.github.com/googleapis/google-api-nodejs-client/commit/f0da5eaf555e8c7b9fc6bb6cb61fc4903aef3ee9))
* **dlp:** update the API ([e6e9a36](https://www.github.com/googleapis/google-api-nodejs-client/commit/e6e9a36e142bd8622606fc9db65d709aad80dd1d))
* **gmail:** update the API ([f8670e9](https://www.github.com/googleapis/google-api-nodejs-client/commit/f8670e9fc71b6917eb0548fb6c65c0fbc1410cbb))
* **iam:** update the API ([ca62f87](https://www.github.com/googleapis/google-api-nodejs-client/commit/ca62f87e8bbb46c8d7206e504bb1183dce57834e))
* **ml:** update the API ([6d58831](https://www.github.com/googleapis/google-api-nodejs-client/commit/6d58831ab53f9c7afb65705e0ab55197e5e89319))
* **networkmanagement:** update the API ([6b31fbc](https://www.github.com/googleapis/google-api-nodejs-client/commit/6b31fbcbf09a642d74651f1d104235314587ed61))
* **servicemanagement:** update the API ([3927a7a](https://www.github.com/googleapis/google-api-nodejs-client/commit/3927a7a03ac4fc730a3c6f8c3b19ea2aeb95bfd3))

## [54.1.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v54.0.0...v54.1.0) (2020-07-15)


### Features

* **chat:** update the API ([9612338](https://www.github.com/googleapis/google-api-nodejs-client/commit/961233803ceae68358794cbeef1475352944582d))
* regenerate index files ([be89b61](https://www.github.com/googleapis/google-api-nodejs-client/commit/be89b6142736eb638bdfdef35d7d0a3d34ceb8b6))
* **cloudasset:** update the API ([a963672](https://www.github.com/googleapis/google-api-nodejs-client/commit/a9636723076205516d2fa6d449560c0fdf54d851))
* regenerate index files ([d1f97b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/d1f97b89268649a174ed3bf29a633ddde8ac22a2))
* **cloudfunctions:** update the API ([381c112](https://www.github.com/googleapis/google-api-nodejs-client/commit/381c11295d4ca985b736170c3ab1a8a32669c297))
* **cloudidentity:** update the API ([0d38f27](https://www.github.com/googleapis/google-api-nodejs-client/commit/0d38f27df0363597d307785ebda8fa97d696d95c))
* **compute:** update the API ([c2857fe](https://www.github.com/googleapis/google-api-nodejs-client/commit/c2857feb5f7f4ab7afc81e6030f314cc90731292))
* **dataflow:** update the API ([4e9d303](https://www.github.com/googleapis/google-api-nodejs-client/commit/4e9d303dac0d59e340b58a5ae61dceda346fcb82))
* **drive:** update the API ([ec834d3](https://www.github.com/googleapis/google-api-nodejs-client/commit/ec834d3a33fe42039a486f4504b450d98ad6af21))
* **file:** update the API ([7c126f7](https://www.github.com/googleapis/google-api-nodejs-client/commit/7c126f72f0d3d980b9c1eb9889188d7c29777834))
* **firestore:** update the API ([c6a9a80](https://www.github.com/googleapis/google-api-nodejs-client/commit/c6a9a8055579f870d3656f128f35b2eb8aebfb92))
* **run:** update the API ([128f5e2](https://www.github.com/googleapis/google-api-nodejs-client/commit/128f5e2d071df192524d152bc0db4f6da87cbf95))


### Bug Fixes

* **androidpublisher:** update the API ([ef6a188](https://www.github.com/googleapis/google-api-nodejs-client/commit/ef6a188eb10783543003ba2e92c18eb592434885))
* **bigqueryreservation:** update the API ([33a768d](https://www.github.com/googleapis/google-api-nodejs-client/commit/33a768df0bbbdd2f842c5b59818f619b2cceb40d))
* **cloudtrace:** update the API ([dfd4140](https://www.github.com/googleapis/google-api-nodejs-client/commit/dfd4140ff7a32cffcf8fc56e85822c5615c9bea2))
* **content:** update the API ([c9d8e3d](https://www.github.com/googleapis/google-api-nodejs-client/commit/c9d8e3d3ea935092b7c756a778cbe96fb64482a3))
* **datastore:** update the API ([e3fd2f7](https://www.github.com/googleapis/google-api-nodejs-client/commit/e3fd2f7032c78afa1e28e9cc6ec50116f4a77eb9))
* **displayvideo:** update the API ([c8b851d](https://www.github.com/googleapis/google-api-nodejs-client/commit/c8b851decd2d353904f8d9615eb58da6737d3b13))
* **dns:** update the API ([2df0278](https://www.github.com/googleapis/google-api-nodejs-client/commit/2df0278ee06fed663d81847365ea7373ba4217b0))
* **drive:** update the API ([b746e24](https://www.github.com/googleapis/google-api-nodejs-client/commit/b746e24eeb17db71deb25a9c8b8ba99ddb591320))
* **memcache:** update the API ([feb2917](https://www.github.com/googleapis/google-api-nodejs-client/commit/feb29170d713fa09e32f4bb27c0adfd4e4addff2))
* **osconfig:** update the API ([b176e11](https://www.github.com/googleapis/google-api-nodejs-client/commit/b176e119447690a86a7dcc140f600f9d8a71b499))
* **recommendationengine:** update the API ([02bf96c](https://www.github.com/googleapis/google-api-nodejs-client/commit/02bf96ce3f2fc8bd6c7e57b5623880ea325a1f3c))
* **searchconsole:** update the API ([f016b92](https://www.github.com/googleapis/google-api-nodejs-client/commit/f016b920985d0282f3e63d7a90b5f18b7c769076))
* **serviceconsumermanagement:** update the API ([beb5b1a](https://www.github.com/googleapis/google-api-nodejs-client/commit/beb5b1a952c7cba9144789d0554ad84454fe2cc8))
* **servicenetworking:** update the API ([2da20f8](https://www.github.com/googleapis/google-api-nodejs-client/commit/2da20f80e5d0c69856e7f367d8b4257c46250144))
* **serviceusage:** update the API ([e765eb5](https://www.github.com/googleapis/google-api-nodejs-client/commit/e765eb522f112d5551f8eaa045be3bbf8812d97a))
* **sheets:** update the API ([ae10fd4](https://www.github.com/googleapis/google-api-nodejs-client/commit/ae10fd4c93686c98bf08f77380b1e321d1d6cdc8))

## [54.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v53.0.0...v54.0.0) (2020-07-10)


### ⚠ BREAKING CHANGES

* **webfonts:** This release has breaking changes.
* **run:** This release has breaking changes.
* **playcustomapp:** This release has breaking changes.
* **groupssettings:** This release has breaking changes.
* **games:** This release has breaking changes.
* **dns:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **cloudbuild:** This release has breaking changes.
* **civicinfo:** This release has breaking changes.
* **books:** This release has breaking changes.

### Features

* **admin:** update the API ([b58f001](https://www.github.com/googleapis/google-api-nodejs-client/commit/b58f001282bebe3d0bc9bb8842125f3bc19a4a35))
* **androidpublisher:** update the API ([a39978c](https://www.github.com/googleapis/google-api-nodejs-client/commit/a39978cd9b1f743d1d25538de26264cdc7665ce9))
* **artifactregistry:** update the API ([d3e6b4e](https://www.github.com/googleapis/google-api-nodejs-client/commit/d3e6b4e13461f5aa4d0fd7ab7c8b6379d04b34d5))
* **bigquery:** update the API ([801f29a](https://www.github.com/googleapis/google-api-nodejs-client/commit/801f29ababf8b2a2b96e3a91abbe613cffff627d))
* **bigqueryreservation:** update the API ([47b9da6](https://www.github.com/googleapis/google-api-nodejs-client/commit/47b9da6164a7c5f538c262e266c392c2016a6479))
* **books:** update the API ([bbbed18](https://www.github.com/googleapis/google-api-nodejs-client/commit/bbbed18118673ad005acd00f8507c7b909972068))
* **civicinfo:** update the API ([a164b5c](https://www.github.com/googleapis/google-api-nodejs-client/commit/a164b5c2c694db387b17565a0529895c2940c20c))
* **cloudasset:** update the API ([e74b3bf](https://www.github.com/googleapis/google-api-nodejs-client/commit/e74b3bfd925b9fec90944826d41a4d183fb88dd4))
* **cloudbilling:** update the API ([c174f6e](https://www.github.com/googleapis/google-api-nodejs-client/commit/c174f6e77ce170e794bff4969eae3efed9fe9049))
* **cloudbuild:** update the API ([9016438](https://www.github.com/googleapis/google-api-nodejs-client/commit/90164385d0b93e242468029f9dcfa71cb25dbce1))
* **cloudidentity:** update the API ([747850e](https://www.github.com/googleapis/google-api-nodejs-client/commit/747850e61b288451d564ed0950716352f00b1d0b))
* **cloudresourcemanager:** update the API ([6394bec](https://www.github.com/googleapis/google-api-nodejs-client/commit/6394bec0bfa34382864bbff6bca0837327b29bf4))
* **compute:** update the API ([02cce0d](https://www.github.com/googleapis/google-api-nodejs-client/commit/02cce0d057740e04b380ca47904e0bbe54172602))
* **container:** update the API ([e221ff5](https://www.github.com/googleapis/google-api-nodejs-client/commit/e221ff5075417976e477263d5cdc2b9ecbb8b1b5))
* **content:** update the API ([00012b6](https://www.github.com/googleapis/google-api-nodejs-client/commit/00012b6369f82170d8627caf00cc965aad013dd5))
* **dataproc:** update the API ([2ff7db7](https://www.github.com/googleapis/google-api-nodejs-client/commit/2ff7db7a5936997ad476ce840a9b7203bbd84a0c))
* **dialogflow:** update the API ([e92b84e](https://www.github.com/googleapis/google-api-nodejs-client/commit/e92b84ebf1aa563d60b5bb0f4229c83ad457db5c))
* **displayvideo:** update the API ([8691bdd](https://www.github.com/googleapis/google-api-nodejs-client/commit/8691bddcccc3e622c4929960be5cf9e0eceeaf36))
* **dns:** update the API ([639a258](https://www.github.com/googleapis/google-api-nodejs-client/commit/639a2580bf8ac79bce26c8c46d802ddf722580e2))
* **drive:** update the API ([4b468b7](https://www.github.com/googleapis/google-api-nodejs-client/commit/4b468b7414b971b11ff9dbf901679e2b0e2dddb5))
* **playcustomapp:** update the API ([df4618d](https://www.github.com/googleapis/google-api-nodejs-client/commit/df4618dad72715cdedb6fef9e1d8b6132bb40e3d))
* regenerate index files ([e15df98](https://www.github.com/googleapis/google-api-nodejs-client/commit/e15df9821cb034f834ccbdaed775e1a4dc436a51))
* **fcm:** update the API ([1251fb8](https://www.github.com/googleapis/google-api-nodejs-client/commit/1251fb81af5ea33d2dedec38f970fdfed98de0d3))
* **games:** update the API ([c93cb30](https://www.github.com/googleapis/google-api-nodejs-client/commit/c93cb30b91d6e8fa0bbb1fe0486d4d75e681f928))
* **groupssettings:** update the API ([81cd81d](https://www.github.com/googleapis/google-api-nodejs-client/commit/81cd81d4c7bcbf6d2f94229ba0bf90242f1018ba))
* **healthcare:** update the API ([3083559](https://www.github.com/googleapis/google-api-nodejs-client/commit/30835593c8f10529244c14c566499a635b638e31))
* **lifesciences:** update the API ([7feb073](https://www.github.com/googleapis/google-api-nodejs-client/commit/7feb073e5e57baccea3a91419ecb4ff9295e6371))
* **managedidentities:** update the API ([48b16fe](https://www.github.com/googleapis/google-api-nodejs-client/commit/48b16fe334c4bad14e35280b7aae0a8abf9d9e0a))
* **ml:** update the API ([51eb5c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/51eb5c549b5c876a5a62ee2f413eef779f29f22c))
* **monitoring:** update the API ([08334a3](https://www.github.com/googleapis/google-api-nodejs-client/commit/08334a3ca25d76572a81c9eeec8cce463c06efee))
* **people:** update the API ([3b82224](https://www.github.com/googleapis/google-api-nodejs-client/commit/3b82224a6b8a45ce27d8401e1b9bec726114a483))
* **prod_tt_sasportal:** update the API ([75b7e2d](https://www.github.com/googleapis/google-api-nodejs-client/commit/75b7e2dc5ee293644ab208d7b5f7f502848cbe91))
* **recommender:** update the API ([8d1a4b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/8d1a4b87fa01e82c43c8decf58506ebcd9a0ce0f))
* **run:** update the API ([5f57e3c](https://www.github.com/googleapis/google-api-nodejs-client/commit/5f57e3ce20249d7caacc6fc39342960e9ed90667))
* **sasportal:** update the API ([355fe63](https://www.github.com/googleapis/google-api-nodejs-client/commit/355fe63f0ffe90fe7ce823c111abb5b2d7367746))
* **serviceconsumermanagement:** update the API ([a1c8bac](https://www.github.com/googleapis/google-api-nodejs-client/commit/a1c8bac0d0c85f61f05cf335371e4e0b12898a00))
* **servicecontrol:** update the API ([7c069fe](https://www.github.com/googleapis/google-api-nodejs-client/commit/7c069feac12632d09a352f0ad372fb5b6533c650))
* **serviceusage:** update the API ([1d635b8](https://www.github.com/googleapis/google-api-nodejs-client/commit/1d635b8990e61dcf9727950763c61f8cf90e1e55))
* **testing:** update the API ([29b315e](https://www.github.com/googleapis/google-api-nodejs-client/commit/29b315e2b3c37545f7cc839faa0c915330be7d12))
* **webfonts:** update the API ([1cb38af](https://www.github.com/googleapis/google-api-nodejs-client/commit/1cb38af59700107210e82d08ddf074534df77985))


### Bug Fixes

* **accessapproval:** update the API ([cd856eb](https://www.github.com/googleapis/google-api-nodejs-client/commit/cd856eb230ae1476283034943b36f610bd415bdd))
* **admob:** update the API ([571c96a](https://www.github.com/googleapis/google-api-nodejs-client/commit/571c96a919ff3cbf0ab79884efb520b1b641f260))
* **androiddeviceprovisioning:** update the API ([265d4c0](https://www.github.com/googleapis/google-api-nodejs-client/commit/265d4c09c1ad1251d453cf832b1a13d03f8cdbfd))
* **bigqueryconnection:** update the API ([309be47](https://www.github.com/googleapis/google-api-nodejs-client/commit/309be47d070c7540b4bfbff6dafaf48011cadcba))
* **bigtableadmin:** update the API ([68c4a0d](https://www.github.com/googleapis/google-api-nodejs-client/commit/68c4a0dc841b51a8552f0fb6aad4724a1cdbb965))
* **billingbudgets:** update the API ([9089b8f](https://www.github.com/googleapis/google-api-nodejs-client/commit/9089b8fde8fd2b145ba597db0611ce707e07f799))
* **chat:** update the API ([ed14465](https://www.github.com/googleapis/google-api-nodejs-client/commit/ed144650e548d98fb2aa37463815aa3c0f3a0b65))
* **classroom:** update the API ([3c73d57](https://www.github.com/googleapis/google-api-nodejs-client/commit/3c73d57576a96573f608e55e2589be74b833173c))
* **clouderrorreporting:** update the API ([ed135f3](https://www.github.com/googleapis/google-api-nodejs-client/commit/ed135f3bbf4a2ab682cd55e1c95cb391523661cb))
* **cloudfunctions:** update the API ([54c8b57](https://www.github.com/googleapis/google-api-nodejs-client/commit/54c8b57fe9752e7b93ef1fdd308323a3131aa233))
* **cloudscheduler:** update the API ([ed2f240](https://www.github.com/googleapis/google-api-nodejs-client/commit/ed2f2407f22d3b67ce680bc4732f3c7418986937))
* **composer:** update the API ([07c95c0](https://www.github.com/googleapis/google-api-nodejs-client/commit/07c95c01135cd82c776869ea9591a718efda6698))
* **containeranalysis:** update the API ([a2fdc43](https://www.github.com/googleapis/google-api-nodejs-client/commit/a2fdc439e8b620aabdffedb352dbabdc432f6c73))
* **dlp:** update the API ([c18496b](https://www.github.com/googleapis/google-api-nodejs-client/commit/c18496b0db04a9a552b60c83b493cf2f8666459b))
* **documentai:** update the API ([d09d2f3](https://www.github.com/googleapis/google-api-nodejs-client/commit/d09d2f35361e5c100ff04b2e02f42fcb1332d7dc))
* **doubleclicksearch:** update the API ([8fbbc3f](https://www.github.com/googleapis/google-api-nodejs-client/commit/8fbbc3f582bef6dd059903051af5ad561bfc973d))
* **firebase:** update the API ([6354956](https://www.github.com/googleapis/google-api-nodejs-client/commit/635495658e8682d0d3a2e56e18e6d8bcca0617ea))
* **firebasehosting:** update the API ([dce4929](https://www.github.com/googleapis/google-api-nodejs-client/commit/dce4929944a9406f344688bb99233420003105e0))
* **gameservices:** update the API ([d23d5f1](https://www.github.com/googleapis/google-api-nodejs-client/commit/d23d5f1b9381bb36a6f1cb23b09f22a52e212395))
* **gmailpostmastertools:** update the API ([7a88976](https://www.github.com/googleapis/google-api-nodejs-client/commit/7a88976518abf6da1bad8bd08b2a4ed7785eb203))
* **groupsmigration:** update the API ([414e50a](https://www.github.com/googleapis/google-api-nodejs-client/commit/414e50ad191ccf36db3fc1ac304b33c40bcf03d2))
* **iam:** update the API ([653d902](https://www.github.com/googleapis/google-api-nodejs-client/commit/653d902aee44a1dfa00a904b02891f6b51bb0a25))
* **iamcredentials:** update the API ([880c339](https://www.github.com/googleapis/google-api-nodejs-client/commit/880c33973439f1c2ec27e4d1d29f1241d222f196))
* **logging:** update the API ([b2a1eb1](https://www.github.com/googleapis/google-api-nodejs-client/commit/b2a1eb17f5ff7410bdd7463c0da3254e28be3e66))
* **pagespeedonline:** update the API ([fef4e3d](https://www.github.com/googleapis/google-api-nodejs-client/commit/fef4e3da076234c860ef5b672c3fc2fad4dcb7b9))
* **playablelocations:** update the API ([3c0a75c](https://www.github.com/googleapis/google-api-nodejs-client/commit/3c0a75c66fef257f639d1227c89b577dd10e8db8))
* **pubsub:** update the API ([b7c4d93](https://www.github.com/googleapis/google-api-nodejs-client/commit/b7c4d93c500d133914e49013520f64910f0daf91))
* **realtimebidding:** update the API ([4295587](https://www.github.com/googleapis/google-api-nodejs-client/commit/4295587f8b4558d633ba657448b6b929ff8d647d))
* **redis:** update the API ([6685609](https://www.github.com/googleapis/google-api-nodejs-client/commit/668560917de291fc9345f4b340d7961617df6ad9))
* **remotebuildexecution:** update the API ([7853b30](https://www.github.com/googleapis/google-api-nodejs-client/commit/7853b3089aac87fb5b6587b03ef3f1c32d08912f))
* **safebrowsing:** update the API ([59295a6](https://www.github.com/googleapis/google-api-nodejs-client/commit/59295a6d4689b582fe6667bb9318a9e6e32347d0))
* **securitycenter:** update the API ([1be3b58](https://www.github.com/googleapis/google-api-nodejs-client/commit/1be3b58aa29fb01296062a2c3196842a38c79061))
* **servicemanagement:** update the API ([e2e63ad](https://www.github.com/googleapis/google-api-nodejs-client/commit/e2e63adaddce24671f624468e68c54df873bef72))
* **servicenetworking:** update the API ([43840be](https://www.github.com/googleapis/google-api-nodejs-client/commit/43840be058cd32524b40edf51216833fc7490027))
* **sheets:** update the API ([9c10fe8](https://www.github.com/googleapis/google-api-nodejs-client/commit/9c10fe851891c3f0dc01241118ee48c391d12df3))
* **spanner:** update the API ([5c7ecc5](https://www.github.com/googleapis/google-api-nodejs-client/commit/5c7ecc504b04342ab8e4cb0a8062b46ae6b6c59a))
* **storage:** update the API ([3c12d1a](https://www.github.com/googleapis/google-api-nodejs-client/commit/3c12d1a56b69d223e10f89354866fd69b8a83c39))
* **vectortile:** update the API ([9a11146](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a11146bb65632ff278d6e5cabfc5eda455c8d5b))
* **vision:** update the API ([d100bc6](https://www.github.com/googleapis/google-api-nodejs-client/commit/d100bc625b5023644a78439daebf79c98db988d7))

## [53.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v52.1.0...v53.0.0) (2020-07-09)


### ⚠ BREAKING CHANGES

* **run:** This release has breaking changes.
* **androidenterprise:** This release has breaking changes.
* **cloudasset:** This release has breaking changes.
* **books:** This release has breaking changes.
* **servicemanagement:** This release has breaking changes.
* **people:** This release has breaking changes.
* **gmail:** This release has breaking changes.
* **file:** This release has breaking changes.
* **fcm:** This release has breaking changes.
* **datafusion:** This release has breaking changes.
* **displayvideo:** This release has breaking changes.
* **books:** This release has breaking changes.
* **androidenterprise:** This release has breaking changes.
* **serviceusage:** This release has breaking changes.
* **servicenetworking:** This release has breaking changes.
* **serviceconsumermanagement:** This release has breaking changes.
* **file:** This release has breaking changes.
* **androidpublisher:** This release has breaking changes.
* **dialogflow:** This release has breaking changes.
* **compute:** This release has breaking changes.
* **cloudresourcemanager:** This release has breaking changes.

### Features

* **androidenterprise:** update the API ([b9dd62a](https://www.github.com/googleapis/google-api-nodejs-client/commit/b9dd62aca0d5e8e6af20bca1d1d2852e781fa33d))
* **androidenterprise:** update the API ([fe47e5f](https://www.github.com/googleapis/google-api-nodejs-client/commit/fe47e5f96e5a54f6d847b6a80578bbe0777ee41c))
* add disclaimers for services with GAPICs/Veneers ([#2242](https://www.github.com/googleapis/google-api-nodejs-client/issues/2242)) ([88cc4bd](https://www.github.com/googleapis/google-api-nodejs-client/commit/88cc4bd372899b7951ba7397e6197b0236d5a02c))
* enable experimental HTTP/2 support ([#2246](https://www.github.com/googleapis/google-api-nodejs-client/issues/2246)) ([9a3150b](https://www.github.com/googleapis/google-api-nodejs-client/commit/9a3150bc18b9b23190a51a7ad18105b4b85769ec))
* export bundled types for TypeScript ([#2250](https://www.github.com/googleapis/google-api-nodejs-client/issues/2250)) ([62f8193](https://www.github.com/googleapis/google-api-nodejs-client/commit/62f819397567d9e584cb18e5e48a0ff615b542a1))
* **servicenetworking:** update the API ([092ebef](https://www.github.com/googleapis/google-api-nodejs-client/commit/092ebef7e85aa1c734435643f5e969bf7725894b))
* regenerate index files ([7c3c305](https://www.github.com/googleapis/google-api-nodejs-client/commit/7c3c305c1b15f207b96d658d101539f54bd9ab27))
* regenerate index files ([a67796a](https://www.github.com/googleapis/google-api-nodejs-client/commit/a67796a62b1cf0fdbb574025597ffed9f2e65825))
* regenerate index files ([61cef87](https://www.github.com/googleapis/google-api-nodejs-client/commit/61cef87c5e265b02511640cf37e6976f23200793))
* regenerate index files ([227078e](https://www.github.com/googleapis/google-api-nodejs-client/commit/227078eb368c77f2142d652342d3ab61e9002728))
* **androidmanagement:** update the API ([dcc0e88](https://www.github.com/googleapis/google-api-nodejs-client/commit/dcc0e88c07ac5e1b9661e1331700863bf02e8739))
* **androidpublisher:** update the API ([bc6f3f8](https://www.github.com/googleapis/google-api-nodejs-client/commit/bc6f3f8eeaab1ce2a892c55839deaa425dc0f6b9))
* **androidpublisher:** update the API ([fa57e04](https://www.github.com/googleapis/google-api-nodejs-client/commit/fa57e04ceed12242ddfa468380b38edf941887ea))
* **artifactregistry:** update the API ([6214dde](https://www.github.com/googleapis/google-api-nodejs-client/commit/6214dde619986d59b2bc41a20c25b599413e7990))
* **books:** update the API ([124978c](https://www.github.com/googleapis/google-api-nodejs-client/commit/124978c872983e2cb9c3ad2c236f7dcf9cc00b74))
* **books:** update the API ([66842f3](https://www.github.com/googleapis/google-api-nodejs-client/commit/66842f3da896825bb46b11eb08f732a03b2c2e07))
* **cloudasset:** update the API ([423ea12](https://www.github.com/googleapis/google-api-nodejs-client/commit/423ea12924c58ca56c1df8bfe289a457e1ce9767))
* **cloudbuild:** update the API ([4cba781](https://www.github.com/googleapis/google-api-nodejs-client/commit/4cba781b53fb189c0d3e3a1f8cbf8935c43796ed))
* **cloudresourcemanager:** update the API ([d60380a](https://www.github.com/googleapis/google-api-nodejs-client/commit/d60380a13b35783a4f0568afef35e8f604950f26))
* **cloudtasks:** update the API ([d5b01a7](https://www.github.com/googleapis/google-api-nodejs-client/commit/d5b01a77574b0011e3ae1a6409a4097ca8ad49d4))
* **compute:** update the API ([4590a48](https://www.github.com/googleapis/google-api-nodejs-client/commit/4590a4821e5cdada59b54b812da2511511933ee9))
* **compute:** update the API ([fc97385](https://www.github.com/googleapis/google-api-nodejs-client/commit/fc97385eece0cf5454fec3bb803b56d2887446ff))
* **container:** update the API ([b88e7de](https://www.github.com/googleapis/google-api-nodejs-client/commit/b88e7deb64a0ef9b3479ec31200bfee039b06cd0))
* **content:** update the API ([71960a2](https://www.github.com/googleapis/google-api-nodejs-client/commit/71960a201cfd67955b292a9ea167e5e1d9ae7748))
* **datafusion:** update the API ([b5ab2e1](https://www.github.com/googleapis/google-api-nodejs-client/commit/b5ab2e111957df3846a5857df2bf724b5ee359a3))
* **dialogflow:** update the API ([979ad5a](https://www.github.com/googleapis/google-api-nodejs-client/commit/979ad5a70bbe40627190ef91df2da7c1b667f886))
* **displayvideo:** update the API ([b528060](https://www.github.com/googleapis/google-api-nodejs-client/commit/b528060a6e55c19e7f999ff27a3d5039889664c7))
* **displayvideo:** update the API ([5b9ce8e](https://www.github.com/googleapis/google-api-nodejs-client/commit/5b9ce8ea0a47505b91390989b3057d2529aec898))
* **fcm:** update the API ([7b137fa](https://www.github.com/googleapis/google-api-nodejs-client/commit/7b137fac4c82a9e783c2ae5009c24582f7abe612))
* **file:** update the API ([15937c1](https://www.github.com/googleapis/google-api-nodejs-client/commit/15937c1a90ab7423636e70532cfb930b103e687c))
* **file:** update the API ([c3fb5e9](https://www.github.com/googleapis/google-api-nodejs-client/commit/c3fb5e9ade6834a26f313e0d04c2599225ef4ea3))
* **genomics:** update the API ([cb17c59](https://www.github.com/googleapis/google-api-nodejs-client/commit/cb17c596ae7a40bc10edc6e6c42be066a94363b4))
* **gmail:** update the API ([b6d3024](https://www.github.com/googleapis/google-api-nodejs-client/commit/b6d30245316aae9de8b208e9afd7ebfc812ea36e))
* **memcache:** update the API ([cca8a40](https://www.github.com/googleapis/google-api-nodejs-client/commit/cca8a40498f1ffb613b7d79682235006989db7e7))
* **monitoring:** update the API ([ef6f4b2](https://www.github.com/googleapis/google-api-nodejs-client/commit/ef6f4b23c37dc4c79955a1807e362f25aa6123cd))
* **pagespeedonline:** update the API ([dec6844](https://www.github.com/googleapis/google-api-nodejs-client/commit/dec68449c980f0ea8477af25f8b86fa4844657ad))
* **people:** update the API ([81cd993](https://www.github.com/googleapis/google-api-nodejs-client/commit/81cd9932d21034cd11a3905d4ebd9f8681a61d3d))
* **people:** update the API ([ab1285e](https://www.github.com/googleapis/google-api-nodejs-client/commit/ab1285e2841693d92df11f1f4326cf4b402edbc1))
* **prod_tt_sasportal:** update the API ([8a3fbc3](https://www.github.com/googleapis/google-api-nodejs-client/commit/8a3fbc3754d9d2f2d1a7e4de98a75d3100bc7a2f))
* **pubsub:** update the API ([42a8ee5](https://www.github.com/googleapis/google-api-nodejs-client/commit/42a8ee519f60c04a0161351b398d32c40d12bb67))
* **pubsub:** update the API ([92ae41c](https://www.github.com/googleapis/google-api-nodejs-client/commit/92ae41cb3aec2d90a6fe7735d9b08b781f837d1f))
* **run:** update the API ([b49f12d](https://www.github.com/googleapis/google-api-nodejs-client/commit/b49f12d866ac348b83fc87a1deb9999f71689b7b))
* **run:** update the API ([5e55acf](https://www.github.com/googleapis/google-api-nodejs-client/commit/5e55acf3002be37e7b6beba58745e24317f3b195))
* **sasportal:** update the API ([12dcfcd](https://www.github.com/googleapis/google-api-nodejs-client/commit/12dcfcd9284ad4bb02bed649fd2739cf40542562))
* **securitycenter:** update the API ([1d2a61a](https://www.github.com/googleapis/google-api-nodejs-client/commit/1d2a61ae2d62d29eea002632f909a34fcb0a0715))
* **serviceconsumermanagement:** update the API ([a294350](https://www.github.com/googleapis/google-api-nodejs-client/commit/a2943507995db07a2a943e9ec566f6c20f474cf3))
* **serviceconsumermanagement:** update the API ([7e785b1](https://www.github.com/googleapis/google-api-nodejs-client/commit/7e785b127e85da40ff2672f1833acb8518a6a7b5))
* **servicemanagement:** update the API ([ccf2606](https://www.github.com/googleapis/google-api-nodejs-client/commit/ccf260607c90208103fce05567ec16540b6edda5))
* **serviceusage:** update the API ([6914841](https://www.github.com/googleapis/google-api-nodejs-client/commit/6914841189af97ab56ca4ad1f46debf0bd4ec343))
* **serviceusage:** update the API ([177d160](https://www.github.com/googleapis/google-api-nodejs-client/commit/177d160f4bd82e5aed804e56d4e6656887deeb1c))
* **serviceusage:** update the API ([196fee9](https://www.github.com/googleapis/google-api-nodejs-client/commit/196fee977ede017c43cf39ffe0a2d4cf6084d09a))
* **sql:** update the API ([6ee5890](https://www.github.com/googleapis/google-api-nodejs-client/commit/6ee5890520ee9d87b30571b576923cfaada0b16f))
* **videointelligence:** update the API ([d1c3570](https://www.github.com/googleapis/google-api-nodejs-client/commit/d1c3570125941dde768eabe00e4951af5db17c8c))


### Bug Fixes

* **admob:** update the API ([4512da0](https://www.github.com/googleapis/google-api-nodejs-client/commit/4512da06c9eeedf385a9ad71c9c6cb5a594fe0ee))
* **bigquery:** update the API ([cba7b81](https://www.github.com/googleapis/google-api-nodejs-client/commit/cba7b817c6b6a1265273bb750a4fe13b65d64231))
* **bigtableadmin:** update the API ([44d4299](https://www.github.com/googleapis/google-api-nodejs-client/commit/44d4299e40109dbf528fc8d25ac51d5ead3087ac))
* **binaryauthorization:** update the API ([9acb1ae](https://www.github.com/googleapis/google-api-nodejs-client/commit/9acb1ae6b4f17b0d510b7a115fa43a7752938c96))
* **cloudbuild:** update the API ([fb83f71](https://www.github.com/googleapis/google-api-nodejs-client/commit/fb83f71fa7f95c41d4089f27171ef23228085105))
* **cloudkms:** update the API ([33fe343](https://www.github.com/googleapis/google-api-nodejs-client/commit/33fe34302125bbad3b5afff72bf080a60b5e5a64))
* **cloudsearch:** update the API ([11e33e0](https://www.github.com/googleapis/google-api-nodejs-client/commit/11e33e010e53001ac1efe5246cd62698f1809a2e))
* **dataproc:** update the API ([d04d55a](https://www.github.com/googleapis/google-api-nodejs-client/commit/d04d55a9743e1909fef4743b4e42b311cc5ff37a))
* **deps:** update dependency @google-cloud/local-auth to v1 ([#2240](https://www.github.com/googleapis/google-api-nodejs-client/issues/2240)) ([26c64f5](https://www.github.com/googleapis/google-api-nodejs-client/commit/26c64f5918737e2ac2f4ae88aa76cbe418f23cab))
* **dlp:** update the API ([6a06dfc](https://www.github.com/googleapis/google-api-nodejs-client/commit/6a06dfc7a531c2ee81e0e2d71879698fc1776072))
* **docs:** fix inline jsdoc samples ([#2224](https://www.github.com/googleapis/google-api-nodejs-client/issues/2224)) ([9ae4149](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ae4149a97ea40d2967294e1939c6a18de13aeb3))
* **firebasehosting:** update the API ([dbd1c7d](https://www.github.com/googleapis/google-api-nodejs-client/commit/dbd1c7dcf801345e99d4d13290a298af29d76400))
* **fitness:** update the API ([9bee744](https://www.github.com/googleapis/google-api-nodejs-client/commit/9bee7442ec560a6fccd1b223f76fc7747ddc8900))
* **healthcare:** update the API ([63fb234](https://www.github.com/googleapis/google-api-nodejs-client/commit/63fb234793af2ae2ebf457ff1f1cfa5f35127169))
* **iam:** update the API ([2de643a](https://www.github.com/googleapis/google-api-nodejs-client/commit/2de643a15ca7453484fa6466eccd28bc62d27135))
* **iamcredentials:** update the API ([83bd08d](https://www.github.com/googleapis/google-api-nodejs-client/commit/83bd08d2d3df4638d44678e642a06e58619d93bf))
* **memcache:** update the API ([f9195c5](https://www.github.com/googleapis/google-api-nodejs-client/commit/f9195c59cf5c72be7151fa7f272667bbe16f56c2))
* **osconfig:** update the API ([3c3c944](https://www.github.com/googleapis/google-api-nodejs-client/commit/3c3c944c624fd41e079491beee7692110851a34d))
* **policytroubleshooter:** update the API ([9d9db0f](https://www.github.com/googleapis/google-api-nodejs-client/commit/9d9db0f40ef6df93742e1dd957ac3804e30aa418))
* **recommender:** update the API ([98a816a](https://www.github.com/googleapis/google-api-nodejs-client/commit/98a816a9b0521b7cf1618936f49788bbaaa177fe))
* **secretmanager:** update the API ([fc6a878](https://www.github.com/googleapis/google-api-nodejs-client/commit/fc6a878ad725dc3d34873942bf5c6a5a7e9a6b6b))
* **serviceconsumermanagement:** update the API ([545a557](https://www.github.com/googleapis/google-api-nodejs-client/commit/545a55717a8370df99d7bf1bb995a6d04ffeb9ad))
* **serviceconsumermanagement:** update the API ([42a3f57](https://www.github.com/googleapis/google-api-nodejs-client/commit/42a3f571d4f51a482f0f0e8b7580c69cf1bca7de))
* **servicecontrol:** update the API ([0cb6a5e](https://www.github.com/googleapis/google-api-nodejs-client/commit/0cb6a5e7a5698a930f48d4500c5636a00d6803f1))
* **servicenetworking:** update the API ([2468829](https://www.github.com/googleapis/google-api-nodejs-client/commit/246882980d4cdf0a5af35156e8e82ebc2db3d6fb))
* **servicenetworking:** update the API ([9d9d7b4](https://www.github.com/googleapis/google-api-nodejs-client/commit/9d9d7b42e55dde3d8c75f03d4ddf8b1170cbdac6))
* **serviceusage:** update the API ([1bda652](https://www.github.com/googleapis/google-api-nodejs-client/commit/1bda652321df2720e10c2287b694a380383bdda7))
* **slides:** update the API ([a8fc1fb](https://www.github.com/googleapis/google-api-nodejs-client/commit/a8fc1fb3b5890de4cc487d6e04bb09a5580cb273))
* **storagetransfer:** update the API ([bf027a7](https://www.github.com/googleapis/google-api-nodejs-client/commit/bf027a7ad351d4c230c9d27ae8577a9eefc62f00))
* only generated docs ([#2244](https://www.github.com/googleapis/google-api-nodejs-client/issues/2244)) ([f581297](https://www.github.com/googleapis/google-api-nodejs-client/commit/f5812970fd2964c12e2b329f589dc3fbec88f3e5))
* **testing:** update the API ([193c575](https://www.github.com/googleapis/google-api-nodejs-client/commit/193c575aa4ed11367d378b190ca3aa91e2c3b799))
* **texttospeech:** update the API ([d179cd1](https://www.github.com/googleapis/google-api-nodejs-client/commit/d179cd1b86cae5bbb380b8dcf14c8ab599bfd3ba))
* **youtube:** update the API ([1910ca9](https://www.github.com/googleapis/google-api-nodejs-client/commit/1910ca90237578936d676dc6e9e77d9b8bffcca3))
* **youtube:** update the API ([c1bdc70](https://www.github.com/googleapis/google-api-nodejs-client/commit/c1bdc709ea7c9c5227084a64823779c36d7d7e2f))

## [52.1.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v52.0.0...v52.1.0) (2020-06-03)


### Features

* support GoogleAuth parameter ([#2210](https://www.github.com/googleapis/google-api-nodejs-client/issues/2210)) ([b08ef52](https://www.github.com/googleapis/google-api-nodejs-client/commit/b08ef52eb5db13067d8b5c52452d51208b7733cd))


### Bug Fixes

* ensure params are not deleted from global options ([#2190](https://www.github.com/googleapis/google-api-nodejs-client/issues/2190)) ([787e296](https://www.github.com/googleapis/google-api-nodejs-client/commit/787e296773f1d7daa655b4294cea41ecd1476ceb))
* **deps:** update dependency googleapis to v52 ([#2213](https://www.github.com/googleapis/google-api-nodejs-client/issues/2213)) ([78ff014](https://www.github.com/googleapis/google-api-nodejs-client/commit/78ff01482a67ca4385d80042eaf80ee756106edd))

## [52.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v51.0.0...v52.0.0) (2020-06-01)


### ⚠ BREAKING CHANGES

* This release has breaking changes.
* run the generator (#2104)

### Features

* run the generator ([#2104](https://www.github.com/googleapis/google-api-nodejs-client/issues/2104)) ([dca679d](https://www.github.com/googleapis/google-api-nodejs-client/commit/dca679d1cf41154b093c5c2217892733ee8047dd)), closes [/github.com/googleapis/google-api-nodejs-client/pull/2104/files#diff-aa33c994c0faf2308b6f3b52e9774a95](https://www.github.com/googleapis//github.com/googleapis/google-api-nodejs-client/pull/2104/files/issues/diff-aa33c994c0faf2308b6f3b52e9774a95) [/github.com/googleapis/google-api-nodejs-client/pull/2104/files#diff-7a149e24d8a857d58df585d4560b602bL785](https://www.github.com/googleapis//github.com/googleapis/google-api-nodejs-client/pull/2104/files/issues/diff-7a149e24d8a857d58df585d4560b602bL785) [/github.com/googleapis/google-api-nodejs-client/pull/2104/files#diff-fb190556a259ff0d91cd366665703b05](https://www.github.com/googleapis//github.com/googleapis/google-api-nodejs-client/pull/2104/files/issues/diff-fb190556a259ff0d91cd366665703b05)
* run the generator ([#2122](https://www.github.com/googleapis/google-api-nodejs-client/issues/2122)) ([7b306a8](https://www.github.com/googleapis/google-api-nodejs-client/commit/7b306a8871fd1a7fac014375f6b7d14876fffb86))
* run the generator ([#2197](https://www.github.com/googleapis/google-api-nodejs-client/issues/2197)) ([9ae8d42](https://www.github.com/googleapis/google-api-nodejs-client/commit/9ae8d4215b491f4a5b3b16346f7a88b53bf0f2ce))


### Bug Fixes

* run the generator ([#2109](https://www.github.com/googleapis/google-api-nodejs-client/issues/2109)) ([c12710a](https://www.github.com/googleapis/google-api-nodejs-client/commit/c12710ab45f65dc2533edb52b2e91e5cc328e677))
* **types:** augment types to manage response streams ([#2188](https://www.github.com/googleapis/google-api-nodejs-client/issues/2188)) ([46ac8ba](https://www.github.com/googleapis/google-api-nodejs-client/commit/46ac8ba712daff9fe617be00b5df61ce9552b26e))

## [51.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v50.0.0...v51.0.0) (2020-05-13)


### ⚠ BREAKING CHANGES

* run the generator (#2096)

### Features

* generate samples ([#2056](https://www.github.com/googleapis/google-api-nodejs-client/issues/2056)) ([ea599ac](https://www.github.com/googleapis/google-api-nodejs-client/commit/ea599acb1a5adfdfe4efefdf701f19cc07963b70))
* run the generator ([#2096](https://www.github.com/googleapis/google-api-nodejs-client/issues/2096)) ([a89ca06](https://www.github.com/googleapis/google-api-nodejs-client/commit/a89ca0677d79c3dd0376459de77bdad3118d3f44))

## [50.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v49.0.0...v50.0.0) (2020-05-05)


### ⚠ BREAKING CHANGES

* upgrade to gts@2 (#2062)
* run the generator (#2053)

### Features

* add Blunderbussconfig ([#2065](https://www.github.com/googleapis/google-api-nodejs-client/issues/2065)) ([e293188](https://www.github.com/googleapis/google-api-nodejs-client/commit/e293188add17f32c2d11fa06df917f2374f84ac4))
* run the generator ([#2053](https://www.github.com/googleapis/google-api-nodejs-client/issues/2053)) ([1124249](https://www.github.com/googleapis/google-api-nodejs-client/commit/1124249d4c7efc3fe52d48f3f489715db2acd6b9))
* run the generator ([#2081](https://www.github.com/googleapis/google-api-nodejs-client/issues/2081)) ([0c06d1c](https://www.github.com/googleapis/google-api-nodejs-client/commit/0c06d1cc8eea8a0a937436d571d14a9a462647ff))


### Bug Fixes

* **deps:** update dependency uuid to v8 ([#2069](https://www.github.com/googleapis/google-api-nodejs-client/issues/2069)) ([8f2454c](https://www.github.com/googleapis/google-api-nodejs-client/commit/8f2454c06d4e1de087482e5e6f84c2d11603f868))


### Build System

* upgrade to gts@2 ([#2062](https://www.github.com/googleapis/google-api-nodejs-client/issues/2062)) ([0b8d04c](https://www.github.com/googleapis/google-api-nodejs-client/commit/0b8d04cbb87f7b7f779de035ef02e18f66c12f18))

## [49.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v48.0.0...v49.0.0) (2020-04-15)


### ⚠ BREAKING CHANGES

* regenerate the API (#2028)
* **dep:** deprecate node 8 (#2021)

### Features

* regenerate the API ([#2028](https://www.github.com/googleapis/google-api-nodejs-client/issues/2028)) ([fea414a](https://www.github.com/googleapis/google-api-nodejs-client/commit/fea414a450e5702f71c84f40b3e1ab8981ab997e))


### Bug Fixes

* apache license URL ([#468](https://www.github.com/googleapis/google-api-nodejs-client/issues/468)) ([#2017](https://www.github.com/googleapis/google-api-nodejs-client/issues/2017)) ([05090da](https://www.github.com/googleapis/google-api-nodejs-client/commit/05090da6fd417af1a53be83b5d5e59c89ed48e7e))
* **deps:** update common and auth ([#2038](https://www.github.com/googleapis/google-api-nodejs-client/issues/2038)) ([73d284b](https://www.github.com/googleapis/google-api-nodejs-client/commit/73d284be28a7fdbd6c1b43adc6eee765ea4cad73))


### Miscellaneous Chores

* **dep:** deprecate node 8 ([#2021](https://www.github.com/googleapis/google-api-nodejs-client/issues/2021)) ([48a4f05](https://www.github.com/googleapis/google-api-nodejs-client/commit/48a4f051ecb42c592540716284fa6d00d4a9d375))

## [48.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v47.0.0...v48.0.0) (2020-03-11)


### ⚠ BREAKING CHANGES

* removes toolresults_v1.
* regenerate all APIs (#1978)

### Features

* regenerate all APIs ([#1978](https://www.github.com/googleapis/google-api-nodejs-client/issues/1978)) ([f0d4913](https://www.github.com/googleapis/google-api-nodejs-client/commit/f0d49136eaa12838a74a56aa45e08fa870278ae5))
* run the generator (adds: displayvideo, gamesConfiguration, managedidentities, networkmanagement) ([#1989](https://www.github.com/googleapis/google-api-nodejs-client/issues/1989)) ([8bcb212](https://www.github.com/googleapis/google-api-nodejs-client/commit/8bcb212fbab43a1e3214da4712b4c3363d1b1285))


### Bug Fixes

* **deps:** update dependency uuid to v7 ([#1970](https://www.github.com/googleapis/google-api-nodejs-client/issues/1970)) ([fdf096e](https://www.github.com/googleapis/google-api-nodejs-client/commit/fdf096ee80c87a98b7d20666a2e38996228fbaf1))
* allow an empty requestBody to be provided for APIs that support multipart post ([#1988](https://www.github.com/googleapis/google-api-nodejs-client/issues/1988)) ([074f641](https://www.github.com/googleapis/google-api-nodejs-client/commit/074f6417754930cbcbf5589bbcb88549b9f430a9))

## [47.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v46.0.0...v47.0.0) (2020-01-16)


### ⚠ BREAKING CHANGES

* run the generator (#1935)

### Features

* run the generator ([#1935](https://www.github.com/googleapis/google-api-nodejs-client/issues/1935)) ([e5d8c08](https://www.github.com/googleapis/google-api-nodejs-client/commit/e5d8c083365892a35d6e620e15b90999e117deea))

## [46.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v45.0.0...v46.0.0) (2019-12-09)


### ⚠ BREAKING CHANGES

* run the generator (#1892)

### Features

* run the generator ([#1892](https://www.github.com/googleapis/google-api-nodejs-client/issues/1892)) ([e3e3714](https://www.github.com/googleapis/google-api-nodejs-client/commit/e3e3714d206bc341e2fda5ec323cdabd3f678450))


### Bug Fixes

* **deps:** pin TypeScript below 3.7.0 ([#1897](https://www.github.com/googleapis/google-api-nodejs-client/issues/1897)) ([5cdc823](https://www.github.com/googleapis/google-api-nodejs-client/commit/5cdc823b52ea5b2fae52dbc0ec0040e42d054fc9))
* **docs:** add jsdoc-region-tag plugin ([#1879](https://www.github.com/googleapis/google-api-nodejs-client/issues/1879)) ([36635c7](https://www.github.com/googleapis/google-api-nodejs-client/commit/36635c752fae99161d02a0dc8631c57ff0814151))
* **docs:** bloggerId should be a string ([#1896](https://www.github.com/googleapis/google-api-nodejs-client/issues/1896)) ([a3e9285](https://www.github.com/googleapis/google-api-nodejs-client/commit/a3e9285f5a1b76fcd330d194dc22adbd42adff71))
* **docs:** change JSDoc from `.resource` to `.requestBody` ([#1864](https://www.github.com/googleapis/google-api-nodejs-client/issues/1864)) ([8803e77](https://www.github.com/googleapis/google-api-nodejs-client/commit/8803e7700a0799c484defc776afd04ef26d50e91))

## [45.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v44.0.0...v45.0.0) (2019-11-06)


### ⚠ BREAKING CHANGES

* run the generator (#1873)

### Features

* run the generator ([#1873](https://www.github.com/googleapis/google-api-nodejs-client/issues/1873)) ([8e45b55](https://www.github.com/googleapis/google-api-nodejs-client/commit/8e45b55152874d4b4b93e1a29604ca03dc887d6e))


### Bug Fixes

* **deps:** update dependency googleapis to v44 ([#1854](https://www.github.com/googleapis/google-api-nodejs-client/issues/1854)) ([c9b253c](https://www.github.com/googleapis/google-api-nodejs-client/commit/c9b253cf5fad4b4ecdaeecd31e3041bf1e16427e))
* **deps:** update dependency open to v7 ([#1858](https://www.github.com/googleapis/google-api-nodejs-client/issues/1858)) ([34c95dc](https://www.github.com/googleapis/google-api-nodejs-client/commit/34c95dc795ef316dd89b96f83e80579dbea1b4c3))

## [44.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v43.0.0...v44.0.0) (2019-10-12)


### ⚠ BREAKING CHANGES

* accept null values in request bodies (#1824)

### Bug Fixes

* **example:** sample exited before finishing write to disk ([#1798](https://www.github.com/googleapis/google-api-nodejs-client/issues/1798)) ([26ac7d8](https://www.github.com/googleapis/google-api-nodejs-client/commit/26ac7d82f19323c60318c605f76e6777633d7c9b))
* accept null values in request bodies ([#1824](https://www.github.com/googleapis/google-api-nodejs-client/issues/1824)) ([de127eb](https://www.github.com/googleapis/google-api-nodejs-client/commit/de127eb63905406db5b5f474db9d355e4e7fb52a))

## [43.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v42.0.0...v43.0.0) (2019-09-06)


### ⚠ BREAKING CHANGES

* This release has multiple breaking changes.  The following APIs have been removed:
- appstate/v1
- compute/alpha
- run/v1beta1

In addition, the default rootUrl for the compute API has been switched from `www.googleapis.com` to `compute.googleapis.com`.

The following APIs have been added:
- bigqueryreservation/v1
- bigqueryreservation/v1alpha2
- domainsrdap/v1
- homegraph/v1
- speech/v2beta
- translate/v3beta1
- verifiedaccess/v1

### Bug Fixes

* **deps:** fix nock version ([#1812](https://www.github.com/googleapis/google-api-nodejs-client/issues/1812)) ([a9a7329](https://www.github.com/googleapis/google-api-nodejs-client/commit/a9a7329))


### Features

* **gen:** run the generator ([#1814](https://www.github.com/googleapis/google-api-nodejs-client/issues/1814)) ([381f54a](https://www.github.com/googleapis/google-api-nodejs-client/commit/381f54a))
* run the generator ([b99011a](https://www.github.com/googleapis/google-api-nodejs-client/commit/b99011a))

## [42.1.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v42.0.0...v42.1.0) (2019-09-06)


### Bug Fixes

* **deps:** fix nock version ([#1812](https://www.github.com/googleapis/google-api-nodejs-client/issues/1812)) ([a9a7329](https://www.github.com/googleapis/google-api-nodejs-client/commit/a9a7329))


### Features

* **gen:** run the generator ([#1814](https://www.github.com/googleapis/google-api-nodejs-client/issues/1814)) ([381f54a](https://www.github.com/googleapis/google-api-nodejs-client/commit/381f54a))

## [42.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v41.0.1...v42.0.0) (2019-07-31)


### ⚠ BREAKING CHANGES

* **auth:** pulling in updated idempotent google-auth-library (#1769)

### Bug Fixes

* **deps:** pull in version of gts that does not OOM error ([#1780](https://www.github.com/googleapis/google-api-nodejs-client/issues/1780)) ([c09e6f4](https://www.github.com/googleapis/google-api-nodejs-client/commit/c09e6f4))
* **deps:** update dependency googleapis-common to v3 ([#1774](https://www.github.com/googleapis/google-api-nodejs-client/issues/1774)) ([9607c02](https://www.github.com/googleapis/google-api-nodejs-client/commit/9607c02))


### Code Refactoring

* **auth:** pulling in updated idempotent google-auth-library ([#1769](https://www.github.com/googleapis/google-api-nodejs-client/issues/1769)) ([168ad6b](https://www.github.com/googleapis/google-api-nodejs-client/commit/168ad6b))

### [41.0.1](https://www.github.com/googleapis/google-api-nodejs-client/compare/v41.0.0...v41.0.1) (2019-07-16)


### Bug Fixes

* **docs:** switch to googleapis.dev link for reference docs ([#1761](https://www.github.com/googleapis/google-api-nodejs-client/issues/1761)) ([a99d968](https://www.github.com/googleapis/google-api-nodejs-client/commit/a99d968))

## [41.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v40.0.1...v41.0.0) (2019-07-11)


### ⚠ BREAKING CHANGES

* options when instantiating clients now expect correct `vx.x` format rather than failing `vx_x` format (effects only TypeScript).
* auto generate libraries (#1759)

### Bug Fixes

* don't replace '.' with '_' in interface ([#1757](https://www.github.com/googleapis/google-api-nodejs-client/issues/1757)) ([3a183c2](https://www.github.com/googleapis/google-api-nodejs-client/commit/3a183c2))


### Features

* auto generate libraries ([#1759](https://www.github.com/googleapis/google-api-nodejs-client/issues/1759)) ([c726608](https://www.github.com/googleapis/google-api-nodejs-client/commit/c726608))

### [40.0.1](https://www.github.com/googleapis/google-api-nodejs-client/compare/v40.0.0...v40.0.1) (2019-07-02)


### Bug Fixes

* make webpack work on Windows ([#1742](https://www.github.com/googleapis/google-api-nodejs-client/issues/1742)) ([cac269f](https://www.github.com/googleapis/google-api-nodejs-client/commit/cac269f))
* **deps:** update googleapis-common to most recent release. ([#1739](https://www.github.com/googleapis/google-api-nodejs-client/issues/1739)) ([8bfa702](https://www.github.com/googleapis/google-api-nodejs-client/commit/8bfa702))
* **docs:** make anchors work in jsdoc ([#1747](https://www.github.com/googleapis/google-api-nodejs-client/issues/1747)) ([799e391](https://www.github.com/googleapis/google-api-nodejs-client/commit/799e391))
* **docs:** move to new client docs URL ([#1734](https://www.github.com/googleapis/google-api-nodejs-client/issues/1734)) ([4df71ed](https://www.github.com/googleapis/google-api-nodejs-client/commit/4df71ed))

## [40.0.0](https://www.github.com/googleapis/google-api-nodejs-client/compare/v39.2.0...v40.0.0) (2019-05-13)


### Bug Fixes

* Incorrect case README ([#1706](https://www.github.com/googleapis/google-api-nodejs-client/issues/1706)) ([3e17bd8](https://www.github.com/googleapis/google-api-nodejs-client/commit/3e17bd8))
* **samples:** fix readline args in youtube upload ([#1676](https://www.github.com/googleapis/google-api-nodejs-client/issues/1676)) ([3db63d6](https://www.github.com/googleapis/google-api-nodejs-client/commit/3db63d6))


### Build System

* upgrade engines field to >=8.10.0 ([#1691](https://www.github.com/googleapis/google-api-nodejs-client/issues/1691)) ([8428d5c](https://www.github.com/googleapis/google-api-nodejs-client/commit/8428d5c))


### Features

* run the generator ([#1680](https://www.github.com/googleapis/google-api-nodejs-client/issues/1680)) ([6d5a9c8](https://www.github.com/googleapis/google-api-nodejs-client/commit/6d5a9c8))
* run the generator ([#1709](https://www.github.com/googleapis/google-api-nodejs-client/issues/1709)) ([6817c39](https://www.github.com/googleapis/google-api-nodejs-client/commit/6817c39))


### BREAKING CHANGES

* This release has a few breaking changes.
- Node.js 8.x is now the minimum required version
- The healthcare/v1alpha API has been removed
- Uses google-auth-library 4.0
* upgrade engines field to >=8.10.0 (#1691)

## v39.2.0

04-03-2019 16:17 PDT

This release has a few hot new APIs:
- healthcare_v1beta1
- run_v1
- run_v1alpha1
- securitycenter_v1
- securitycenter_v1beta1

### New Features
- feat: run the generator ([#1668](https://github.com/google/google-api-nodejs-client/pull/1668))

### Internal / Testing Changes
- chore(deps): update dependency typescript to ~3.4.0
- chore(deps): update dependency @types/tmp to ^0.1.0

## v39.1.0

03-28-2019 16:17 PDT

**This release has security fixes.**. Versions 36.0.0 => 39.0.0 have a potential [vulnerability](https://github.com/googleapis/google-api-nodejs-client/issues/1594) where the scope of auth objects may be shared across different clients.  This was addressed in #1660, and is part of this minor release.  All clients should be updated to the latest version.

### Bug Fixes
- fix: move context from namespace to class scope ([#1660](https://github.com/google/google-api-nodejs-client/pull/1660))

### New Features
- feat: run the generator ([#1659](https://github.com/google/google-api-nodejs-client/pull/1659))

### Internal / Testing Changes
- fix: README should not be generated ([#1657](https://github.com/google/google-api-nodejs-client/pull/1657))

## v39.0.0

03-26-2019 22:05 PDT

**This release had breaking changes**.  There have been a variety of TypeScript type changes.  There have also been a variety of changes to the Google Plus API, and the OAuth2 API. Please take care!

There are also some sweet new APIs:
- cloudasset_v1
- cloudtasks_v2
- factchecktools_v1alpha1
- servicenetworking_v1
- websecurityscanner_v1beta

### New Features
- feat: run the generator ([#1653](https://github.com/googleapis/google-api-nodejs-client/pull/1653))
- feat: run the generator ([#1644](https://github.com/googleapis/google-api-nodejs-client/pull/1644))

### Documentation
- docs: remove the plus samples ([#1654](https://github.com/googleapis/google-api-nodejs-client/pull/1654))
- docs: Update typo in README.md ([#1640](https://github.com/googleapis/google-api-nodejs-client/pull/1640))
- docs: fix typos in README files ([#1642](https://github.com/googleapis/google-api-nodejs-client/pull/1642))

### Internal / Testing Changes
- chore(deps): update dependency tmp to ^0.1.0 ([#1652](https://github.com/googleapis/google-api-nodejs-client/pull/1652))
- chore: publish to npm using wombat ([#1645](https://github.com/googleapis/google-api-nodejs-client/pull/1645))
- build: update npm token ([#1641](https://github.com/googleapis/google-api-nodejs-client/pull/1641))
- chore(deps): update dependency hard-rejection to v2 ([#1643](https://github.com/googleapis/google-api-nodejs-client/pull/1643))
- build: use per-repo publish token ([#1638](https://github.com/googleapis/google-api-nodejs-client/pull/1638))

## v38.0.0

03-12-2019 14:00 PDT

Greetings y'all!  This release has some new APIs, says goodbye to a few older ones, and fixes a bunch of doc issues.  Enjoy!

*BREAKING CHANGES*: The following APIs have been *deleted*:
- appengine_v1beta4
- appengine_v1beta5

The following APIs have been added:
- accesscontextmanager_v1
- bigtableadmin_v1
- cloudprivatecatalog_v1beta1
- cloudprivatecatalogproducer_v1beta1
- healthcare_v1alpha2
- videointelligence_v1p3beta1

### New Features
- feat: run the generator ([#1636](https://github.com/googleapis/google-api-nodejs-client/pull/1636))
- feat: run the generator ([#1634](https://github.com/googleapis/google-api-nodejs-client/pull/1634))

### Bug Fixes
- fix: remove @types/p-queue ([#1627](https://github.com/googleapis/google-api-nodejs-client/pull/1627))
- fix: correct types param name for media mime-type ([#1602](https://github.com/googleapis/google-api-nodejs-client/pull/1602))

### Documentation
- docs: fix npm install cmd in readme ([#1635](https://github.com/googleapis/google-api-nodejs-client/pull/1635))
- docs: update contributing guide ([#1615](https://github.com/googleapis/google-api-nodejs-client/pull/1615))
- docs: Remove "releasing" ToC from CONTRIBUTING.md ([#1607](https://github.com/googleapis/google-api-nodejs-client/pull/1607))
- docs: update CONTRIBUTING link ([#1603](https://github.com/googleapis/google-api-nodejs-client/pull/1603))
- docs: update links in contrib guide ([#1599](https://github.com/googleapis/google-api-nodejs-client/pull/1599))
- docs: Use people API instead of plus API
- docs: move CONTRIBUTING.md to root ([#1583](https://github.com/googleapis/google-api-nodejs-client/pull/1583))

### Internal / Testing Changes
- chore(deps): update dependency p-queue to v4 ([#1631](https://github.com/googleapis/google-api-nodejs-client/pull/1631))
- build: Add docuploader credentials to node publish jobs ([#1630](https://github.com/googleapis/google-api-nodejs-client/pull/1630))
- build: use node10 to run samples-test, system-test etc ([#1628](https://github.com/googleapis/google-api-nodejs-client/pull/1628))
- build: update release config ([#1625](https://github.com/googleapis/google-api-nodejs-client/pull/1625))
- chore(deps): update dependency @types/source-map-support to ^0.5.0 ([#1626](https://github.com/googleapis/google-api-nodejs-client/pull/1626))
- chore(deps): update dependency mocha to v6
- build: use linkinator for docs test ([#1596](https://github.com/googleapis/google-api-nodejs-client/pull/1596))
- chore(deps): update dependency @types/tmp to ^0.0.34 ([#1597](https://github.com/googleapis/google-api-nodejs-client/pull/1597))
- build: create docs test npm scripts ([#1592](https://github.com/googleapis/google-api-nodejs-client/pull/1592))
- build: test using @grpc/grpc-js in CI ([#1589](https://github.com/googleapis/google-api-nodejs-client/pull/1589))

## v37.2.0

02-07-2019 14:55 PST

### New Features
- feat: run the generator ([#1584](https://github.com/google/google-api-nodejs-client/pull/1584))

This pulls in a few new APIs:
- dfareporting_v3_3
- healthcare_v1alpha
- videointelligence_v1p2beta1

### Bug fixes
- fix: respect `.` in api versions (fix adsense API) ([#1573](https://github.com/google/google-api-nodejs-client/pull/1573))

### Documentation
- docs: add lint/fix example to contributing guide ([#1581](https://github.com/google/google-api-nodejs-client/pull/1581))
- docs(samples): Talent API Sample Revision & Test ([#1546](https://github.com/google/google-api-nodejs-client/pull/1546))

## v37.1.0

01-29-2019 13:33 PST

This release includes a new API for working with Google Docs.  Enjoy!

- feat: run the generator ([#1570](https://github.com/google/google-api-nodejs-client/pull/1570))

## v37.0.0

01-28-2019 10:29 PST

**This release has breaking changes**.  But it's also got a lot of good stuff too.  Keep reading!

#### google-auth-library 3.0
The `google-auth-library` module has been upgrade to `3.0`.  This comes with it's own breaking changes, which are covered [here](https://github.com/googleapis/google-auth-library-nodejs/releases/tag/v3.0.0).

#### gaxios upgrade
Previous versions of this library used the [axios](https://github.com/axios/axios) library as an underlying HTTP transport. In an effort to fix a variety of problems, this has been swapped out for an API compatible library: [gaxios](https://github.com/JustinBeckwith/gaxios). While we've tried really hard to ensure compatibility with `axios`, it's entirely possible there are subtle differences. If you run into trouble - just let us know!

#### Removed APIs
The `replicapoolupdater_v1beta1` API has been removed.

### New features

#### Webpack support
This library is now webpack-able!  Samples and docs are still coming, but you should be able to bundle for the browser now.

#### New APIs
The following APIs have been introduced:
- file_v1
- bigtableadmin_v2
- cloudbuild_v1alpha1
- cloudidentity_v1
- cloudidentity_v1beta1
- containeranalysis_v1alpha1
- containeranalysis_v1beta1
- content_v2_1
- iap_v1
- libraryagent_v1
- remotebuildexecution_v1
- remotebuildexecution_v1alpha
- remotebuildexecution_v2

#### Changes
It includes the following changes:
- feat: run the generator ([#1564](https://github.com/google/google-api-nodejs-client/pull/1564))
- feat: run the generator ([#1541](https://github.com/google/google-api-nodejs-client/pull/1541))
- feat: webpack support for all APIs ([#1554](https://github.com/google/google-api-nodejs-client/pull/1554))
- feat: generating webpackable packages ([#1547](https://github.com/google/google-api-nodejs-client/pull/1547))

### Documentation
- docs: specify gaxios over axios ([#1558](https://github.com/google/google-api-nodejs-client/pull/1558))
- docs(samples): add people samples for get & create contacts ([#1543](https://github.com/google/google-api-nodejs-client/pull/1543))
- docs: fix typo in README.md ([#1549](https://github.com/google/google-api-nodejs-client/pull/1549))
- docs: improve the compute sample in the README ([#1537](https://github.com/google/google-api-nodejs-client/pull/1537))
- docs(samples): rework the compute list vms sample ([#1534](https://github.com/google/google-api-nodejs-client/pull/1534))
- docs: correct the README ([#1522](https://github.com/google/google-api-nodejs-client/pull/1522))
- docs: use blogger to demonstrate key authentication ([#1519](https://github.com/google/google-api-nodejs-client/pull/1519))
- docs: fix the doc generator ([#1489](https://github.com/google/google-api-nodejs-client/pull/1489))

### Dependencies
- fix(deps): update dependency googleapis-common to ^0.7.0 ([#1560](https://github.com/google/google-api-nodejs-client/pull/1560))
- fix(deps): update googleapis-common and google-auth-library ([#1556](https://github.com/google/google-api-nodejs-client/pull/1556))

### Bug fixes
- fix(generator): convert method names to camelCase ([#1552](https://github.com/google/google-api-nodejs-client/pull/1552))
- fix(test): fix the revoke token test ([#1532](https://github.com/google/google-api-nodejs-client/pull/1532))

## v36.0.0

12-06-2018 17:35 PST

### New APIs
- cloudscheduler_v1beta1
- driveactivity_v2
- pagespeedonline_v5
- speech_v1p1beta1

### Removed APIs
- dfareporting_v3_0
- partners_v2
- speech_v1beta1

### Features
- feat: run the generator ([#1474](https://github.com/google/google-api-nodejs-client/pull/1474))
- feat: Add support for repeated fields ([#1451](https://github.com/google/google-api-nodejs-client/pull/1451))

### Bug fixes
- fix: Fix [#1383](https://github.com/google/google-api-nodejs-client/pull/1383) Poor Typings for Schema ([#1433](https://github.com/google/google-api-nodejs-client/pull/1433))

### Documentation
- docs: be more explicit about supported version of nodejs for docs ([#1473](https://github.com/google/google-api-nodejs-client/pull/1473))
- docs: add note about minimum Node.js version required ([#1464](https://github.com/google/google-api-nodejs-client/pull/1464))
- fix(samples): fix url parsing in sampleClient ([#1462](https://github.com/google/google-api-nodejs-client/pull/1462))
- docs: Added information to run the quickstart sample ([#1460](https://github.com/google/google-api-nodejs-client/pull/1460))

### Internal / Testing Changes
- chore: always nyc report before calling codecov ([#1482](https://github.com/google/google-api-nodejs-client/pull/1482))
- chore: nyc ignore build/test by default ([#1481](https://github.com/google/google-api-nodejs-client/pull/1481))
- refactor: remove weird root binding ([#1476](https://github.com/google/google-api-nodejs-client/pull/1476))
- refactor: add dev dependencies to APIs ([#1475](https://github.com/google/google-api-nodejs-client/pull/1475))
- chore(deps): update dependency typescript to ~3.2.0 ([#1465](https://github.com/google/google-api-nodejs-client/pull/1465))
- fix(build): fix system key decryption ([#1467](https://github.com/google/google-api-nodejs-client/pull/1467))
- chore(deps): update dependency @types/p-queue to v3 ([#1449](https://github.com/google/google-api-nodejs-client/pull/1449))
- chore: try to fix codecov ([#1439](https://github.com/google/google-api-nodejs-client/pull/1439))
- chore(deps): update dependency gts to ^0.9.0 ([#1440](https://github.com/google/google-api-nodejs-client/pull/1440))
- chore: update eslintignore config ([#1438](https://github.com/google/google-api-nodejs-client/pull/1438))

## v35.0.0

**This release has breaking changes**.  Please take care with your upgrade!

### Breaking changes
The following APIs have been deprecated and removed:
- content_v2sandbox
- dfareporting_v2_8
- serviceuser_v1

### New APIs
The following new APIs have been added since the last release:
- accesscontextmanager_v1beta
- alertcenter_v1beta1
- cloudasset_v1beta1
- cloudsearch_v1
- firebasehosting_v1beta1
- servicenetworking_v1beta

### Generator runs (adds and removes APIs above)
- feat: run the generator ([#1430](https://github.com/google/google-api-nodejs-client/pull/1430))
- feat: run the generator ([#1384](https://github.com/google/google-api-nodejs-client/pull/1384))

### Bug fixes
- fix: generator missing standard parameters ([#1390](https://github.com/google/google-api-nodejs-client/pull/1390))
- Don't publish sourcemaps ([#1364](https://github.com/google/google-api-nodejs-client/pull/1364))

### Dependencies
- fix(deps): update dependency googleapis-common to ^0.4.0 ([#1426](https://github.com/google/google-api-nodejs-client/pull/1426))
- fix: update gsuite admin samples ([#1361](https://github.com/google/google-api-nodejs-client/pull/1361))

### Samples
- fix: use URL constructor in the samples ([#1424](https://github.com/google/google-api-nodejs-client/pull/1424))

### Internal / Testing Changes
- chore: drop contributors from multiple places ([#1428](https://github.com/google/google-api-nodejs-client/pull/1428))
- fix: failing system test ([#1429](https://github.com/google/google-api-nodejs-client/pull/1429))
- chore: use latest npm on Windows ([#1427](https://github.com/google/google-api-nodejs-client/pull/1427))
- chore: update CircleCI config ([#1423](https://github.com/google/google-api-nodejs-client/pull/1423))
- chore: include build in eslintignore ([#1420](https://github.com/google/google-api-nodejs-client/pull/1420))
- chore(deps): update dependency eslint-plugin-node to v8 ([#1415](https://github.com/google/google-api-nodejs-client/pull/1415))
- chore: update issue templates ([#1413](https://github.com/google/google-api-nodejs-client/pull/1413))
- chore: remove old issue template ([#1411](https://github.com/google/google-api-nodejs-client/pull/1411))
- build: run tests on node11 ([#1410](https://github.com/google/google-api-nodejs-client/pull/1410))
- chore(deps): update dependency typescript to ~3.1.0 ([#1403](https://github.com/google/google-api-nodejs-client/pull/1403))
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#1404](https://github.com/google/google-api-nodejs-client/pull/1404))
- chore(deps): update dependency nock to v10 ([#1405](https://github.com/google/google-api-nodejs-client/pull/1405))
- chores(build): do not collect sponge.xml from windows builds ([#1406](https://github.com/google/google-api-nodejs-client/pull/1406))
- chores(build): run codecov on continuous builds ([#1401](https://github.com/google/google-api-nodejs-client/pull/1401))
- chore: update new issue template ([#1398](https://github.com/google/google-api-nodejs-client/pull/1398))
- feat: Allow use of --discovery-url parameter ([#1377](https://github.com/google/google-api-nodejs-client/pull/1377))
- build: fix codecov uploading on Kokoro ([#1389](https://github.com/google/google-api-nodejs-client/pull/1389))
- Update kokoro config ([#1372](https://github.com/google/google-api-nodejs-client/pull/1372))
- Update CI config ([#1368](https://github.com/google/google-api-nodejs-client/pull/1368))
- Fix Windows Kokoro builds ([#1365](https://github.com/google/google-api-nodejs-client/pull/1365))

## v34.0.0

Welcome to the `googleapis@34` 🎊  This release has breaking changes, new features, and a bunch of bug fixes.  Enjoy!

The following APIs have been removed:
- adexchangeseller/v1.1
- adexchangeseller/v1'
- adexchangeseller/v2.0
- sqladmin/v1beta3

The following APIs have been added:
- cloudtasks/v2beta3
- redis/v1
- file/v1beta1
- jobs/v3p1beta1
- videointelligence/v1p1beta1


### Fixes
- fix: upgrade to the latest google-auth-library ([#1313](https://github.com/google/google-api-nodejs-client/pull/1313))
- fix: add better error handling around sample client and redirect URIs ([#1285](https://github.com/google/google-api-nodejs-client/pull/1285))
- chore(deps): update dependency p-queue to v3 ([#1310](https://github.com/google/google-api-nodejs-client/pull/1310))
- chore(deps): update dependency nyc to v13 ([#1307](https://github.com/google/google-api-nodejs-client/pull/1307))

### New Features
- feat: run the generator ([#1359](https://github.com/google/google-api-nodejs-client/pull/1359))
- feat: run the generator ([#1326](https://github.com/google/google-api-nodejs-client/pull/1326))
- feat: run the generator and synth ([#1324](https://github.com/google/google-api-nodejs-client/pull/1324))

### Documentation
- docs: add supported versions of node.js to the readme ([#1355](https://github.com/google/google-api-nodejs-client/pull/1355))
- docs: fix generator script path ([#1345](https://github.com/google/google-api-nodejs-client/pull/1345))
- docs: replace google/ with googleapis/ in URIs ([#1342](https://github.com/google/google-api-nodejs-client/pull/1342))
- docs: Fix error handling in batchGet sample ([#1338](https://github.com/google/google-api-nodejs-client/pull/1338))
- docs: Add statement of support to readme ([#1333](https://github.com/google/google-api-nodejs-client/pull/1333))
- docs: Remove reference docs ([#1331](https://github.com/google/google-api-nodejs-client/pull/1331))

### Internal / Testing Changes
- Update the kokoro config ([#1353](https://github.com/google/google-api-nodejs-client/pull/1353))
- test: remove appveyor config ([#1357](https://github.com/google/google-api-nodejs-client/pull/1357))
- Do not generate libraries with synth ([#1350](https://github.com/google/google-api-nodejs-client/pull/1350))
- Enable prefer-const in the eslint config ([#1347](https://github.com/google/google-api-nodejs-client/pull/1347))
- Fix the sample tests ([#1344](https://github.com/google/google-api-nodejs-client/pull/1344))
- Make npm install timeout configurable ([#1343](https://github.com/google/google-api-nodejs-client/pull/1343))
- Enable no-var in eslint ([#1340](https://github.com/google/google-api-nodejs-client/pull/1340))
- Use prettier and eslint on samples ([#1341](https://github.com/google/google-api-nodejs-client/pull/1341))
- Fix samples tests ([#1323](https://github.com/google/google-api-nodejs-client/pull/1323))
- Use synth templating and update CI ([#1321](https://github.com/google/google-api-nodejs-client/pull/1321))
- Retry npm install in CI ([#1320](https://github.com/google/google-api-nodejs-client/pull/1320))
- Add synth.py for automating client library generation ([#1306](https://github.com/google/google-api-nodejs-client/pull/1306))

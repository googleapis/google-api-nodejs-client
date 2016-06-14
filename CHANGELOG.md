##### 8.2.0 - 14 June 2016

###### Backwards compatible changes
- Regenerate, now including code snippets

##### 8.1.0 - 08 June 2016

###### Backwards compatible changes
- Update generator to pull in auto generated code samples and add them to the JSDoc comments.

##### 8.0.0 - 08 June 2016

###### Breaking changes
- Removed `cloudbuild` `v1` API
- Removed `cloudlatencytest` `v2` API
- Removed `drive` `v1` API

###### Backwards compatible changes
- Added `dns` `v2beta1` API
- Added `routers.preview` to `compute` `alpha` API
- Added `instances.startWithEncryptionKey` to `compute` `v1` API
- Added `routers.aggregatedList` to `compute` `v1` API
- Added `routers.delete` to `compute` `v1` API
- Added `routers.get` to `compute` `v1` API
- Added `routers.getRouterStatus` to `compute` `v1` API
- Added `routers.insert` to `compute` `v1` API
- Added `routers.list` to `compute` `v1` API
- Added `routers.patch` to `compute` `v1` API
- Added `routers.updated` to `compute` `v1` API
- Added `mobileapppanels.get` to `consumersurveys` `v2` API
- Added `mobileapppanels.list` to `consumersurveys` `v2` API
- Added `mobileapppanels.update` to `consumersurveys` `v2` API

##### 7.1.0 - 24 May 2016

###### Backwards compatible changes
- Added `acceleratedmobilepageurl` `v1` API
- Added `reviews.get` to `androidpublisher` `v2` API
- Added `reviews.list` to `androidpublisher` `v2` API
- Added `reviews.reply` to `androidpublisher` `v2` API
- Added `courses.courseWork.create` to `classroom` `v1` API
- Added `courses.courseWork.get` to `classroom` `v1` API
- Added `courses.courseWork.list` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.get` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.patch` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.list` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.turnIn` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.reclaim` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.return` to `classroom` `v1` API
- Added `courses.courseWork.studentSubmissions.modifyAttachments` to `classroom` `v1` API
- Added `projects.getAncestry` to `cloudresourcemanager` `v1beta1` API
- Added `accounts.avails.get` to `playmoviespartner` `v1` API
- Added `accounts.components.list` to `playmoviespartner` `v1` API
- Added `accounts.components.type.get` to `playmoviespartner` `v1` API

##### 7.0.0 - 16 May 2016

###### Breaking changes
- Removed `reseller` `v1sandbox` API

###### Backwards compatible changes
- Added `namespaces.update` to `proximitybeacon` `v1beta1` API
- Added `runtimeconfig` `v4` API
- Added `sheets` `v1beta1` API

##### 6.1.0 - 11 May 2016

###### Backwards compatible changes
- Added `dfareporting` `v2.5` API
- Added ability to use authentication with `discoverAPI`

##### 6.0.0 - 10 May 2016

###### Breaking changes
- Removed `media.upload` from `dataproc` `v1` API
- Removed `media.download` from `dataproc` `v1` API
- Removed `projects.clusters.setIamPolicy` from `dataproc` `v1beta` API
- Removed `projects.clusters.getIamPolicy` from `dataproc` `v1beta` API
- Removed `projects.clusters.testIamPermissions` from `dataproc` `v1beta` API
- Removed `projects.jobs.setIamPolicy` from `dataproc` `v1beta` API
- Removed `projects.jobs.getIamPolicy` from `dataproc` `v1beta` API
- Removed `projects.jobs.testIamPermissions` from `dataproc` `v1beta` API
- Removed `dfareporting` `v1` API
- Removed `dfareporting` `v1.1` API
- Removed `dfareporting` `v1.2` API
- Removed `dfareporting` `v1.3` API
- Removed `dfareporting` `v2.0` API
- Removed `dfareporting` `v2.1` API
- Removed `gan` `v1beta1` API
- Removed `manager` `v1beta2` API

###### Backwards compatible changes
- Added `products.list` to `androidenterprise` `v1` API
- Added `projects.moveDisk` to `compute` `beta` API
- Added `projects.moveInstance` to `compute` `beta` API
- Added `v1beta1.getEidparams` to `proximitybeacon` `v1beta1` API
- Added `compute` `alpha` API
- Added `firebaserules` `v1` API
- Added `safebrowsing` `v4` API

###### Other
- Merged PR #571 by @georules - v2 does not have the create function, updating to v3

##### 5.2.0 - 21 April 2016

###### Backwards compatible changes
- Added `instances.startWithEncryptionKey` to `compute` `beta` API
- Added `images.getFromFamily` to `compute` `v1` API
- #555 - Added "discover" and "discoverAPI" methods for discovering API(s) at runtime.
  - Closes #416

###### Other
- #556 - Switched from JSHint to Semistandard
- Improved JSDocs

##### 5.1.0 - 19 April 2016

###### Backwards compatible changes
- Added `instances.list` to `appengine` `v1beta4` API
- Added `instances.list` to `appengine` `v1beta5` API
- Added `instanceGroupManagers.resizeAdvanced` to `compute` `beta` API

###### Other
- Switched from coveralls to codecov

##### 5.0.0 - 11 April 2016

###### Breaking changes
- Removed `deploymentmanager` `v2beta1` API
- Removed `deploymentmanager` `v2beta2` API

###### Backwards compatible changes
- Added `analyticsreporting` `v4` API
- Added `consumersurveys` `v2` API
- Added `datastore` `v1beta3` API
- Added `dfareporting` `v2.5beta1` API
- Removed `apis/index.js`, now the apis are loaded dynamically by `lib/googleapis.js`

##### 4.0.0 - 23 March 2016

###### Breaking changes
- `adexchangebuyer` `v1.4`: Renamed required param `private_auction_id` to `privateAuctionId`

###### Backwards compatible changes
- Added `clouderrorreporting` `v1beta1` API
- `compute` `v1`: Added `resize` method

##### 3.1.0 - 16 March 2016

###### Backwards compatible changes
- Added `monitoring` `v3` API

###### Other
- #536 - Update README URLs based on HTTP redirects (by @ReadmeCritic)
- #537 - [github template] minor edits to pull request template (by @ReadmeCritic)

##### 3.0.0 - 14 March 2016

###### Breaking changes
- Removed `admin` `email_migration_v2` API
- Removed `mapsengine` `exp2` API
- Removed `mapsengine` `v1` API

###### Backwards compatible changes
- Added `adexchangebuyer2` `v3beta1` API
- Added `appengine` `v1beta5` API
- Added `cloudbuild` `v1` API
- Added `cloudresourcemanager` `v1` API
- Added `compute` `beta` API
- Added `dfareporting` `v2`.4 API
- Added `genomics` `v1alpha2` API
- Added `iam` `v1` API
- Added `iam` `v1alpha1` API
- Added `people` `v1` API
- Added `serviceregister` `alpha` API
- Added `toolresults` `v1beta3` API
- Added `vision` `v1` API
- #488 - Added support for generating an API from a discovery doc file
- #533 - Add etag support with samples and test
- `node scripts/generate` can now accept a variable list of discovery urls and/or paths to discovery doc files

###### Backwards compatible bug fixes
- #463 - `--discovery-url` option works again.

###### Other
- #527 - Added glass mirror api sample

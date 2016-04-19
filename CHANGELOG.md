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

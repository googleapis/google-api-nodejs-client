# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/googleapis?activeTab=versions

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


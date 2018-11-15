# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/googleapis?activeTab=versions

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


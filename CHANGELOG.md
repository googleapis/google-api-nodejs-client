# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/googleapis?activeTab=versions

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


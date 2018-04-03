<img src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# Google APIs Node.js Client

[![CircleCI][circleimg]][circle]
[![Greenkeeper][greenkeeperimg]][greenkeeper]
[![npm version][npmimg]][npm]
[![Code Coverage][codecovimg]][codecov]
[![Downloads][downloadsimg]][downloads]
[![Dependency Status][david-image]][david-url]
[![devDependency Status][david-dev-image]][david-dev-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[Node.js][node] client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT (Service Tokens) is included.

## Library maintenance

This client library is supported but in maintenance mode only.  We are fixing necessary bugs and adding essential features to ensure this library continues to meet your needs for accessing Google APIs.  Non-critical issues will be closed.  Any issue may be reopened if it is causing ongoing problems.

## Table of Contents

* [Alpha](#alpha)
* [Migrating to version `25.x` of this library](#migrating-to-version-25x-of-this-library)
* [Supported APIs](#supported-apis)
* [Questions/problems?](#questionsproblems)
* [Working with Google Cloud Platform APIs?](#working-with-google-cloud-platform-apis)
* [Installation](#installation)
* [Usage](#usage)
  * [Create a service client](#create-a-service-client)
  * [Authorizing and authenticating](#authorizing-and-authenticating)
    * [OAuth2 client](#oauth2-client)
      * [Generating an authentication URL](#generating-an-authentication-url)
      * [Retrieve authorization code](#retrieve-authorization-code)
      * [Retrieve access token](#retrieve-access-token)
      * [Setting global or service-level auth](#setting-global-or-service-level-auth)
      * [Making authenticated requests](#making-authenticated-requests)
      * [Manually refreshing access token](#manually-refreshing-access-token)
    * [Using API keys](#using-api-keys)
    * [Using JWT (Service Tokens)](#using-jwt-service-tokens)
    * [Choosing the correct credential type automatically](#choosing-the-correct-credential-type-automatically)
  * [Specifying request body](#specifying-request-body)
  * [Media uploads](#media-uploads)
    * [Example: Upload a plain text file to Google Drive](#example-upload-a-plain-text-file-to-google-drive)
    * [Example: Upload an image to Google Drive from a readable stream](#example-upload-an-image-to-google-drive-from-a-readable-stream)
  * [Exposing request object](#exposing-request-object)
  * [Options](#options)
    * [Available options](#available-options)
    * [Global options](#global-options)
      * [Example: Specifying a default `timeout` and `auth` to be used for each request](#example-specifying-a-default-timeout-and-auth-to-be-used-for-each-request)
      * [Example: Specifying global request parameters](#example-specifying-global-request-parameters)
    * [Service-client options](#service-client-options)
      * [Example: Specifying a default `auth` option (API key or OAuth2 client)](#example-specifying-a-default-auth-option-api-key-or-oauth2-client)
      * [Example: Specifying default service client query parameters](#example-specifying-default-service-client-query-parameters)
    * [Request-level options](#request-level-options)
* [Using a Proxy](#using-a-proxy)
* [License](#license)
* [Contributing](#contributing)

### Alpha

This library is in Alpha. We will make an effort to support the library, but we reserve the right to make incompatible changes when necessary.

### Release Notes & Breaking Changes

You can find a detailed list of breaking changes and new features in our [Release Notes][releasenotes]. If you've used this library before `25.x`, see our [Release Notes][releasenotes] to learn about migrating your code from `24.x.x` to `25.x.x`. It's pretty easy :)

### Supported APIs

The full list of supported APIs can be found [here][supported-list]. The API endpoints are automatically generated, so if the API is not in the list, it is currently not supported by this API client library.

### Questions/problems?

* Ask your development related questions on [Ask a question on Stackoverflow][stackoverflow]
* If you've found an bug/issue, please [file it on GitHub][bugs].

### Working with Google Cloud Platform APIs?

If you're working with [Google Cloud Platform][cloudplatform] APIs such as Datastore, Cloud Storage or Pub/Sub, consider using the [`google-cloud`][googlecloud] package, an idiomatic Node.js client for Google Cloud Platform services.

You can find the list of Google Cloud Platform APIs supported by google-cloud in the [google-cloud docs][googlecloudapis].

## Installation

This library is distributed on `npm`. In order to add it as a dependency,
run the following command:

``` sh
$ npm install googleapis --save
```

## Usage

**Example** Creates a URL Shortener client and retrieves the long url of the given short url:

``` js
const {google} = require('googleapis');
const urlshortener = google.urlshortener('v1');

const params = {
  shortUrl: 'http://goo.gl/xKbRu3',
  key: 'YOUR API KEY'
};

// get the long url of a shortened url
urlshortener.url.get(params, (err, response) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log('Long url is', response.data.longUrl);
});
```

You can also use promises:

``` js
urlshortener.url.get(params)
  .then(response => {
    console.log('Long url is', response.data.longUrl);
  })
  .catch(error => console.error);
```

Or async/await:

``` js
async function runSample() {
  const response = await urlshortener.url.get(params);
  console.log('Long url is', response.data.longUrl);
}
runSample().catch(console.error);
```


**Example** Updates an email message's labels, using the `resource`
parameter to specify the request body.

```js
gmail.users.messages.modify({
  id: Number,
  resource: {
    addLabelIds: Array,
    removeLabelIds: Array
  },
  userId: 'me',
}, (err, response) => {
  console.log(response.data);
});
```

### Create a service client

To interact with the various Google APIs you need to create a service client for that particular API. These are immutable objects you use to make API calls.

Example: Creating a `urlshortener` client with version `v1` of the API.

``` js
const {google} = require('googleapis');
const urlshortener = google.urlshortener('v1');
```

Supported APIs are listed on the [Google APIs Explorer][apiexplorer].

### Authorizing and authenticating

#### OAuth2 client

This client comes with an [OAuth2][oauth] client that allows you to retrieve an access token and refreshes the token and retry the request seamlessly if you also provide an `expiry_date` and the token is expired. The basics of Google's OAuth2 implementation is explained on [Google Authorization and Authentication documentation][authdocs].

In the following examples, you may need a `CLIENT_ID`, `CLIENT_SECRET` and `REDIRECT_URL`. You can find these pieces of information by going to the [Developer Console][devconsole], clicking your project --> APIs & auth --> credentials.

For more information about OAuth2 and how it works, [see here][oauth].

A complete sample application that authorizes and authenticates with the OAuth2 client is available at [`samples/oauth2.js`][oauthexample].

##### Generating an authentication URL

To ask for permissions from a user to retrieve an access token, you redirect them to a consent page. To create a consent page URL:

``` js
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// generate a url that asks permissions for Google+ and Google Calendar scopes
const scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,

  // Optional property that passes state parameters to redirect URI
  // state: 'foo'
});
```
##### IMPORTANT NOTE
`refresh_token` is only returned on the first authorization. More details [here](https://github.com/google/google-api-nodejs-client/issues/750#issuecomment-304521450)

##### Retrieve authorization code

Once a user has given permissions on the consent page, Google will redirect the page to the redirect URL you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

##### Retrieve access token

With the code returned, you can ask for an access token as shown below:

``` js
oauth2Client.getToken(code, (err, tokens) => {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if (!err) {
    oauth2Client.setCredentials(tokens);
  }
});
```

##### Setting global or service-level auth

You can set the `auth` as a global or service-level option so you don't need to specify it every request.

Example: Setting a global `auth` option.

``` js
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// set auth as a global default
google.options({
  auth: oauth2Client
});
```

Example: Setting a service-level `auth` option.

``` js
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

const drive = google.drive({
  version: 'v2',
  auth: oauth2Client
});
```

See the [Options section][options] for more information.

##### Making authenticated requests

You can start using OAuth2 to authorize and authenticate your requests to Google APIs with the retrieved tokens. If you provide a `refresh_token` and `expiry_date` (milliseconds since the Unix Epoch) and the `access_token` has expired, the `access_token` will be automatically refreshed and the request is replayed (with the except of requests with a media body, as we cannot reliably restart your media stream). Set `expiry_date` to `true` to force a refresh.

The following sample retrieves Google+ profile of the authenticated user.

``` js
const {google} = require('googleapis');
const plus = google.plus('v1');
const OAuth2 = google.auth.OAuth2;

// WARNING: Make sure your CLIENT_SECRET is stored in a safe place.
const oauth2Client = new OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
  // Optional, provide an expiry_date (milliseconds since the Unix Epoch)
  // expiry_date: (new Date()).getTime() + (1000 * 60 * 60 * 24 * 7)
});

plus.people.get({
  userId: 'me',
  auth: oauth2Client
}, function (err, response) {
  console.log(response.data);
});
```

##### Manually refreshing access token

If you need to manually refresh the `access_token` associated with your OAuth2 client, make sure you have a `refresh_token` set in your credentials first and then call:

``` js
oauth2Client.refreshAccessToken((err, tokens) => {
  // your access_token is now refreshed and stored in oauth2Client
  // store these new tokens in a safe place (e.g. database)
});
```

#### Using API keys

You may need to send an API key with the request you are going to make. The following uses an API key to make a request to the Google+ API service to retrieve a person's profile given a userId:

``` js
const {google} = require('googleapis');
const plus = google.plus('v1');

const API_KEY = 'ABC123'; // specify your API key here

plus.people.get({
  auth: API_KEY,
  userId: '+google'
}, (err, response) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(response.data.displayName);
});
```

Alternatively, you can specify the `key` parameter and it will get used:

``` js
plus.people.get({
  key: API_KEY,
  userId: '+google'
}, function (err, response) {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(response.data.displayName);
});
```

To learn more about API keys, please see the [documentation][usingkeys].

#### Using JWT (Service Tokens)

The Google Developers Console provides `.json` file that you can use to configure a JWT auth client and authenticate your requests, for example when using a service account.

``` js
const {google} = require('googleapis');
const drive = google.drive('v3');

const key = require('/path/to/key.json');
const jwtClient = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ['https://www.googleapis.com/auth/drive']
});

// Make an authorized request to list Drive files.
drive.files.list({
  auth: jwtClient
}, (err, response) => {
  // handle err and response
});
```

The parameters for the JWT auth client including how to use it with a `.pem` file are explained in [samples/jwt.js](samples/jwt.js).

#### Choosing the correct credential type automatically

Rather than manually creating an OAuth2 client, JWT client, or Compute client, the auth library can create the correct credential type for you, depending upon the environment your code is running under.

For example, a JWT auth client will be created when your code is running on your local developer machine, and a Compute client will be created when the same code is running on a configured instance of Google Compute Engine.

The code below shows how to retrieve a default credential type, depending upon the runtime environment. The createScopedRequired must be called to determine when you need to pass in the scopes manually, and when they have been set for you automatically based on the configured runtime environment.

```js
async function main () {
  // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS environment variables.
  const client = await google.auth.getClient();

  // Scopes can be specified either as an array or as a single, space-delimited string.
  if (client instanceof google.auth.JWT) {
    client.scopes = ['https://www.googleapis.com/auth/compute'];
  }

  // Fetch the list of GCE zones within a project.
  const project = await google.auth.getDefaultProjectId();
  const res = await compute.zones.list({ project, auth: client });
  console.log(res.data);
}

main().catch(console.error);
```

### Specifying request body

The body of the request is specified in the `resource` parameter object of the request. The resource/body is specified as a JavaScript object with key/value pairs. See the example in the next section below for an example on how it is specified.

### Media uploads

This client supports multipart media uploads. The resource parameters are specified in the `resource` parameter object, and the media itself is specified in the `media.body` parameter with mime-type specified in `media.mimeType`.

##### Example: Upload a plain text file to Google Drive

This example uploads a plain text file to Google Drive with the title "Test" and contents "Hello World".

``` js
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

drive.files.create({
  resource: {
    name: 'Test',
    mimeType: 'text/plain'
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World'
  }
}, callback);
```

You can also upload media by specifying `media.body` as a [Readable stream][stream]. This can allow you to upload very large files that cannot fit into memory.

Note: Your readable stream may be [unstable][stability]. Use at your own risk.

##### Example: Upload an image to Google Drive from a readable stream

```js
const fs = require('fs');
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

drive.files.create({
  resource: {
    name: 'testimage.png',
    mimeType: 'image/png'
  },
  media: {
    mimeType: 'image/png',
    body: fs.createReadStream('awesome.png') // read streams are awesome!
  }
}, callback);
```

For more examples of creation and modification requests with media attachments, take a look at the `samples/drive/upload.js` sample.

### Options

For more fine-tuned control over how your API calls are made, we provide you with the ability to specify additional options that can be applied directly to the ['axios'][axios] object used in this library to make network calls to the API.

You may specify additional options either in the global `google` object or on a service client basis.

#### Available options

The options you specify are attached to the `axios` object so whatever `axios` supports, this library supports. You may also specify global or per-service request parameters that will be attached to all API calls you make.

A full list of supported options can be [found here][requestopts].

#### Global options

##### Example: Specifying a default `timeout` and `auth` to be used for each request

You can choose default options that will be sent with each request.  For a list
of available options, see the [Axios Request Options][requestopts].

```js
const {google} = require('googleapis');
google.options({ timeout: 1000, auth: auth });

// All requests made with this object will use these settings unless overridden.
```

##### Example: Specifying global request parameters

```js
const {google} = require('googleapis');
google.options({ params: { quotaUser: 'user123@example.com' } });

// All requests from all services will contain the above query parameter
// unless overridden either in a service client or in individual API calls.
```

#### Service-client options

You can also specify options when creating a service client.

##### Example: Specifying a default `auth` option (API key or OAuth2 client)

```js
const auth = 'API KEY'; // or you could use oauth2Client
const urlshortener = google.urlshortener({ version: 'v1', auth: auth });

// All requests made with this object will use the specified auth.
```

By doing this, every API call made with this service client will use `'API KEY'` to authenticate.

**Note:** Created clients are **immutable** so you must create a new one if you want to specify different options.

##### Example: Specifying default service client query parameters

```js
const urlshortener = google.urlshortener({
  version: 'v1',
  params: { quotaUser: 'user123@example.com' }
});
// All requests made with this service client will contain the
// quotaUser query parameter unless overridden in individual API calls.

// Calls with this drive client will NOT contain the quotaUser query parameter.
const drive = google.drive('v3');
```

#### Request-level options

You can specify an `auth` object to be used per request. Each request also inherits the options specified at the service level and global level.

For example:

```js
const {google} = require('googleapis');
const bigquery = google.bigquery('v2');

// This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
// environment variables.
google.auth.getApplicationDefault((err, authClient, projectId) => {
  if (err) {
    console.error('Authentication failed because of ', err);
    throw err;
  }

  if (authClient.createScopedRequired && authClient.createScopedRequired()) {
    const scopes = ['https://www.googleapis.com/auth/cloud-platform'];
    authClient = authClient.createScoped(scopes);
  }

  const request = {
    projectId: projectId,
    datasetId: '<YOUR_DATASET_ID>',

    // This is a "request-level" option
    auth: authClient
  };

  bigquery.datasets.delete(request, (err, response) => {
    if (err) {
      throw err;
    }
    console.log(response.data);
  });
});
```

You can also override *axios* options per request, such as `url`, `method`, and `encoding`.

For example:

```js
drive.files.export({
  fileId: 'asxKJod9s79', // A Google Doc
  mimeType: 'application/pdf'
}, {
  encoding: null // Make sure we get the binary data
}, (err, response) => {
  // ...
});
```

## Using a Proxy
You can use the following environment variables to proxy HTTP and HTTPS requests:

- `HTTP_PROXY` / `http_proxy`
- `HTTPS_PROXY` / `https_proxy`

When HTTP_PROXY / http_proxy are set, they will be used to proxy non-SSL requests that do not have an explicit proxy configuration option present. Similarly, HTTPS_PROXY / https_proxy will be respected for SSL requests that do not have an explicit proxy configuration option. It is valid to define a proxy in one of the environment variables, but then override it for a specific request, using the proxy configuration option.

## License

This library is licensed under Apache 2.0. Full license text is available in [COPYING][copying].

## Contributing

See [CONTRIBUTING][contributing].

[snyk-image]: https://snyk.io/test/github/google/google-api-nodejs-client/badge.svg
[snyk-url]: https://snyk.io/test/github/google/google-api-nodejs-client
[david-image]: https://david-dm.org/google/google-api-nodejs-client.svg
[david-url]: https://david-dm.org/google/google-api-nodejs-client
[david-dev-image]: https://david-dm.org/google/google-api-nodejs-client/dev-status.svg
[david-dev-url]: https://david-dm.org/google/google-api-nodejs-client?type=dev
[npmimg]: https://img.shields.io/npm/v/googleapis.svg
[npm]: https://www.npmjs.org/package/googleapis
[circle]: https://circleci.com/gh/google/google-auth-library-nodejs
[circleimg]: https://circleci.com/gh/google/google-auth-library-nodejs.svg?style=svg
[supported-list]: https://developers.google.com/apis-explorer/
[bugs]: https://github.com/google/google-api-nodejs-client/issues
[node]: http://nodejs.org/
[stackoverflow]: http://stackoverflow.com/questions/tagged/google-api-nodejs-client
[apiexplorer]: https://developers.google.com/apis-explorer
[urlshort]: https://developers.google.com/url-shortener/
[usingkeys]: https://support.google.com/cloud/answer/6158862?hl=en
[contributing]: https://github.com/google/google-api-nodejs-client/blob/master/.github/CONTRIBUTING.md
[copying]: https://github.com/google/google-api-nodejs-client/tree/master/COPYING
[authdocs]: https://developers.google.com/identity/protocols/OpenIDConnect
[axios]: https://github.com/axios/axios
[requestopts]: https://github.com/axios/axios#request-config
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_readable
[releasenotes]: https://github.com/google/google-api-nodejs-client/releases
[stability]: http://nodejs.org/api/stream.html#stream_stream
[devconsole]: https://console.developer.google.com
[oauth]: https://developers.google.com/identity/protocols/OAuth2
[oauthexample]: https://github.com/google/google-api-nodejs-client/tree/master/samples/oauth2.js
[options]: https://github.com/google/google-api-nodejs-client/tree/master#options
[googlecloud]: https://github.com/GoogleCloudPlatform/google-cloud-node
[googlecloudapis]: https://cloud.google.com/nodejs/docs/reference/apis
[cloudplatform]: https://cloud.google.com/docs/
[codecovimg]: https://codecov.io/github/google/google-api-nodejs-client/coverage.svg?branch=master
[codecov]: https://codecov.io/github/google/google-api-nodejs-client?branch=master
[downloadsimg]: https://img.shields.io/npm/dm/googleapis.svg
[downloads]: https://nodei.co/npm/googleapis/
[greenkeeperimg]: https://badges.greenkeeper.io/google/google-api-nodejs-client.svg
[greenkeeper]: https://greenkeeper.io/

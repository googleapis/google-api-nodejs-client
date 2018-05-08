<img src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# Google APIs Node.js Client

[![Release Level][releaselevelimg]][releaselevel]
[![CircleCI][circleimg]][circle]
[![Greenkeeper][greenkeeperimg]][greenkeeper]
[![npm version][npmimg]][npm]
[![Code Coverage][codecovimg]][codecov]
[![Downloads][downloadsimg]][downloads]
[![Dependency Status][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[Node.js][node] client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included.

* [Google APIs](#google-apis)
* [Getting started](#getting-started)
  * [Installation](#installation)
  * [First example](#first-example)
  * [Samples](#samples)
  * [Reference API](#reference-api)
* [Authentication and authorization](#authentication-and-authorization)
  * [OAuth2 client](#oauth2-client)
  * [Using API keys](#using-api-keys)
  * [Service <--> Service authentication](#service-to-service-authentication)
  * [Setting global or service-level auth](#setting-global-or-service-level-auth)
* [Usage](#usage)
  * [Specifying request body](#specifying-request-body)
  * [Media uploads](#media-uploads)
  * [Request Options](#request-options)
  * [Using a Proxy](#using-a-proxy)
  * [Supported APIs](#getting-supported-apis)
  * [TypeScript](#typescript)
* [License](#license)
* [Contributing](#contributing)
* [Questions/problems?](#questionsproblems)

## Google APIs
The full list of supported APIs can be found [here][supported-list]. The API endpoints are automatically generated, so if the API is not in the list, it is currently not supported by this API client library.

Supported APIs are listed on the [Google APIs Explorer][apiexplorer].

### Working with Google Cloud Platform APIs?
If you're working with [Google Cloud Platform][cloudplatform] APIs such as Datastore, Cloud Storage or Pub/Sub, consider using the [`@google-cloud`][googlecloud] client libraries: single purpose idiomatic Node.js clients for Google Cloud Platform services.

## Getting started

### Installation
This library is distributed on `npm`. In order to add it as a dependency, run the following command:

``` sh
$ npm install googleapis
```

### First example
This is a very simple example. This creates a URL Shortener client and retrieves the long url of the given short url:

``` js
const {google} = require('googleapis');

// Each API may support multiple version. With this sample, we're getting
// v1 of the urlshortener API, and using an API key to authenticate.
const urlshortener = google.urlshortener({
  version: 'v1',
  auth: 'YOUR API KEY'
});

const params = {
  shortUrl: 'http://goo.gl/xKbRu3'
};

// get the long url of a shortened url
urlshortener.url.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`Long url is ${res.data.longUrl}`);
});
```

Instead of using callbacks you can also use promises!

``` js
urlshortener.url.get(params)
  .then(res => {
    console.log(`Long url is ${res.data.longUrl}`);
  })
  .catch(error => {
    console.error(error);
  });
```

Or async/await:

``` js
async function runSample() {
  const res = await urlshortener.url.get(params);
  console.log(`Long url is ${res.data.longUrl}`);
}
runSample().catch(console.error);
```

### Samples
There are a lot of [samples](samples/) 🤗  If you're trying to figure out how to use an API ... look there first! If there's a sample you need missing, feel free to file an [issue][bugs].

### Reference API
This library provides generated [Reference API documentation](http://google.github.io/google-api-nodejs-client/).

## Authentication and authorization
The are three primary ways to authenticate to Google APIs. Some service support all authentication methods, other may only support one or two.

- **OAuth2** - This allows you to make API calls on behalf of a given user.  In this model, the user visits your application, signs in with their Google account, and provides your application with authorization against a set of scopes.  [Learn more](#oauth2-client).

- **Service <--> Service** - In this model, your application talks directly to Google APIs using a Service Account.  It's useful when you have a backend application that will talk directly to Google APIs from the backend. [Learn more](#service-to-service-authentication).

- **API Key** - With an API key, you can access your service from a client or the server.  Typically less secure, this is only available on a small subset of services with limited scopes.  [Learn more](#using-api-keys).

To learn more about the authentication client, see the [Google Auth Library](https://github.com/google/google-auth-library-nodejs).

### OAuth2 client
This client comes with an [OAuth2][oauth] client that allows you to retrieve an access token and refreshes the token and retry the request seamlessly The basics of Google's OAuth2 implementation is explained on [Google Authorization and Authentication documentation][authdocs].

In the following examples, you may need a `CLIENT_ID`, `CLIENT_SECRET` and `REDIRECT_URL`. You can find these pieces of information by going to the [Developer Console][devconsole], clicking your project --> APIs & auth --> credentials.

For more information about OAuth2 and how it works, [see here][oauth].

A complete sample application that authorizes and authenticates with the OAuth2 client is available at [`samples/oauth2.js`][oauthexample].

#### Generating an authentication URL

To ask for permissions from a user to retrieve an access token, you redirect them to a consent page. To create a consent page URL:

``` js
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
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
  scope: scopes
});
```

**IMPORTANT NOTE** - The `refresh_token` is only returned on the first authorization. More details [here](https://github.com/google/google-api-nodejs-client/issues/750#issuecomment-304521450).

#### Retrieve authorization code

Once a user has given permissions on the consent page, Google will redirect the page to the redirect URL you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

#### Retrieve access token

With the code returned, you can ask for an access token as shown below:

``` js
// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
const {tokens} = await oauth2Client.getToken(code)
oauth2Client.setCredentials(tokens);
```

With the credentials set on your OAuth2 client - you're ready to go!

### Using API keys
You may need to send an API key with the request you are going to make. The following uses an API key to make a request to the Google+ API service to retrieve a person's profile given a userId:

``` js
const {google} = require('googleapis');
const plus = google.plus({
  version: 'v1',
  auth: 'YOUR_API_KEY' // specify your API key here
});

async function main() {
  const res = await plus.people.get({ userId: 'me' });
  console.log(`Hello ${res.data.displayName}!`);
});

main().catch(console.error);
```

To learn more about API keys, please see the [documentation][usingkeys].

#### Service to Service Authentication

Rather than manually creating an OAuth2 client, JWT client, or Compute client, the auth library can create the correct credential type for you, depending upon the environment your code is running under.

For example, a JWT auth client will be created when your code is running on your local developer machine, and a Compute client will be created when the same code is running on a configured instance of Google Compute Engine.

The code below shows how to retrieve a default credential type, depending upon the runtime environment. The createScopedRequired must be called to determine when you need to pass in the scopes manually, and when they have been set for you automatically based on the configured runtime environment.

```js
async function main () {

  // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
  // environment variables.
  const auth = await google.auth.getClient({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/compute']
  });

  // obtain the current project Id
  const project = await google.auth.getDefaultProjectId();

  // Fetch the list of GCE zones within a project.
  const res = await compute.zones.list({ project, auth });
  console.log(res.data);
}

main().catch(console.error);
```

### Setting global or service-level auth

You can set the `auth` as a global or service-level option so you don't need to specify it every request. For example, you can set `auth` as a global option:

``` js
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

// set auth as a global default
google.options({
  auth: oauth2Client
});
```

Instead of setting the option globally, you can also set the authentication client at the service-level:

``` js
const {google} = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
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

## Usage

### Specifying request body

The body of the request is specified in the `requestBody` parameter object of the request. The body is specified as a JavaScript object with key/value pairs. For example, this sample creates a watcher that posts notifications to a Google Cloud Pub/Sub topic when emails are sent to a gmail account:

```js
const res = await gmail.users.watch({
  userId: 'me',
  requestBody: {
    // Replace with `projects/${PROJECT_ID}/topics/${TOPIC_NAME}`
    topicName: `projects/el-gato/topics/gmail`
  }
});
console.log(res.data);
```

### Media uploads
This client supports multipart media uploads. The resource parameters are specified in the `requestBody` parameter object, and the media itself is specified in the `media.body` parameter with mime-type specified in `media.mimeType`.

This example uploads a plain text file to Google Drive with the title "Test" and contents "Hello World".

``` js
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

const res = await drive.files.create({
  requestBody: {
    name: 'Test',
    mimeType: 'text/plain'
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World'
  }
});
```

You can also upload media by specifying `media.body` as a [Readable stream][stream]. This can allow you to upload very large files that cannot fit into memory.

```js
const fs = require('fs');

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

async function main() {
  const res = await drive.files.create({
    requestBody: {
      name: 'testimage.png',
      mimeType: 'image/png'
    },
    media: {
      mimeType: 'image/png',
      body: fs.createReadStream('awesome.png')
    }
  });
  console.log(res.data);
}

main().catch(console.error);
```

For more examples of creation and modification requests with media attachments, take a look at the `samples/drive/upload.js` sample.

### Request Options
For more fine-tuned control over how your API calls are made, we provide you with the ability to specify additional options that can be applied directly to the ['axios'][axios] object used in this library to make network calls to the API.

You may specify additional options either in the global `google` object or on a service client basis.  The options you specify are attached to the `axios` object so whatever `axios` supports, this library supports. You may also specify global or per-service request parameters that will be attached to all API calls you make.

A full list of supported options can be [found here][requestopts].

#### Global options
You can choose default options that will be sent with each request. These options will be used for every service instantiated by the google client. In this example, the `timeout` property of `AxiosRequestConfig` will be set for every request:

```js
const {google} = require('googleapis');
google.options({
  // All requests made with this object will use these settings unless overridden.
  timeout: 1000,
  auth: auth
});
```

You can also modify the parameters sent with each request:

```js
const {google} = require('googleapis');
google.options({
  // All requests from all services will contain the above query parameter
  // unless overridden either in a service client or in individual API calls.
  params: {
    quotaUser: 'user123@example.com'
  }
});
```

#### Service-client options

You can also specify options when creating a service client.

```js
const urlshortener = google.urlshortener({
  version: 'v1',
  // All requests made with this object will use the specified auth.
  auth: 'API KEY';
});
```

By doing this, every API call made with this service client will use `'API KEY'` to authenticate.

**Note:** Created clients are **immutable** so you must create a new one if you want to specify different options.

Similar to the examples above, you can also modify the parameters used for every call of a given service:

```js
const urlshortener = google.urlshortener({
  version: 'v1',
  // All requests made with this service client will contain the
  // quotaUser query parameter unless overridden in individual API calls.
  params: {
    quotaUser: 'user123@example.com'
  }
});

// Calls with this drive client will NOT contain the quotaUser query parameter.
const drive = google.drive('v3');
...

```

#### Request-level options
You can specify an `auth` object to be used per request. Each request also inherits the options specified at the service level and global level.

For example:

```js
const {google} = require('googleapis');
const bigquery = google.bigquery('v2');

async function main() {

  // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
  // environment variables.
  const client = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  });

  const projectId = await google.auth.getDefaultProjectId();

  const request = {
    projectId,
    datasetId: '<YOUR_DATASET_ID>',

    // This is a "request-level" option
    auth: client
  };

  const res = await bigquery.datasets.delete(request);
  console.log(res.data);

}

main().catch(console.error);
```

You can also override *axios* options per request, such as `url`, `method`, and `encoding`.

For example:

```js
const res = await drive.files.export({
  fileId: 'asxKJod9s79', // A Google Doc
  mimeType: 'application/pdf'
}, {
  // Make sure we get the binary data
  encoding: null
});
```

### Using a Proxy
You can use the following environment variables to proxy HTTP and HTTPS requests:

- `HTTP_PROXY` / `http_proxy`
- `HTTPS_PROXY` / `https_proxy`

When HTTP_PROXY / http_proxy are set, they will be used to proxy non-SSL requests that do not have an explicit proxy configuration option present. Similarly, HTTPS_PROXY / https_proxy will be respected for SSL requests that do not have an explicit proxy configuration option. It is valid to define a proxy in one of the environment variables, but then override it for a specific request, using the proxy configuration option.

### Getting Supported APIs
You can programatically obtain the list of supported APIs, and all available versions:

```js
const {google} = require('googleapis');
const apis = google.getSupportedAPIs();
```

This will return an object with the API name as object property names, and an array of version strings as the object values;

### TypeScript
This library is written in TypeScript, and provides types out of the box. All classes and interfaces generated for each API are exported under the `${apiName}_${version}` namespace.  For example, the Drive v3 API types are are all available from the `drive_v3` namespace:

```ts
import { drive_v3 } from 'googleapis';
```

## Release Notes & Breaking Changes
You can find a detailed list of breaking changes and new features in our [Release Notes][releasenotes]. If you've used this library before `25.x`, see our [Release Notes][releasenotes] to learn about migrating your code from `24.x.x` to `25.x.x`. It's pretty easy :)

## License
This library is licensed under Apache 2.0. Full license text is available in [COPYING][copying].

## Contributing
We love contributions! Before submitting a Pull Request, it's always good to start with a new issue first. To learn more, see [CONTRIBUTING][contributing].

## Questions/problems?
* Ask your development related questions on [Stackoverflow][stackoverflow].
* If you've found an bug/issue, please [file it on GitHub][bugs].


[snyk-image]: https://snyk.io/test/github/google/google-api-nodejs-client/badge.svg
[snyk-url]: https://snyk.io/test/github/google/google-api-nodejs-client
[david-image]: https://david-dm.org/google/google-api-nodejs-client.svg
[david-url]: https://david-dm.org/google/google-api-nodejs-client
[npmimg]: https://img.shields.io/npm/v/googleapis.svg
[npm]: https://www.npmjs.org/package/googleapis
[circle]: https://circleci.com/gh/google/google-api-nodejs-client
[circleimg]: https://circleci.com/gh/google/google-api-nodejs-client.svg?style=svg
[releaselevel]: https://cloud.google.com/terms/launch-stages
[releaselevelimg]: https://img.shields.io/badge/Release%20Level-Alpha-ff69b4.svg
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
[devconsole]: https://console.developer.google.com
[oauth]: https://developers.google.com/identity/protocols/OAuth2
[oauthexample]: https://github.com/google/google-api-nodejs-client/tree/master/samples/oauth2.js
[options]: https://github.com/google/google-api-nodejs-client/tree/master#options
[googlecloud]: https://cloud.google.com/nodejs/docs/reference/libraries
[googlecloudapis]: https://cloud.google.com/nodejs/docs/reference/apis
[cloudplatform]: https://cloud.google.com/docs/
[codecovimg]: https://codecov.io/github/google/google-api-nodejs-client/coverage.svg?branch=master
[codecov]: https://codecov.io/github/google/google-api-nodejs-client?branch=master
[downloadsimg]: https://img.shields.io/npm/dm/googleapis.svg
[downloads]: https://nodei.co/npm/googleapis/
[greenkeeperimg]: https://badges.greenkeeper.io/google/google-api-nodejs-client.svg
[greenkeeper]: https://greenkeeper.io/

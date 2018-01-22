# Migrating from version `24.x` to `25.x`
This release includes the 1.0 version of the [Google Auth Library][googleauth]. This release has several breaking changes.

For the latest, please see the [release notes](https://github.com/google/google-auth-library-nodejs/releases/tag/v1.0.0).

TL;DR - This release includes a variety of bug fixes, new features, and breaking changes.  Please take care.

## New Features

### Ability to set maxExpiry when verifying tokens
The `OAuth2Client.verifyIdToken` method now accepts an optional maxExpiry field:

```js
const result = await client.verifyIdToken({
  idToken: <id Token>,
  audience: <audience>,
  maxExpiry: <max expiry>
});
```
### Support for code_verifier and code_challenge with OAuth2

The `OAuth2Client.generateAuthUrl` method has been extended to support the `code_challenge_method` and `code_challenge` fields.  There is also a convenience method to generate a verifier:

```js
// Generate a code_verifier and code_challenge
const codes = oAuth2Client.generateCodeVerifier();

// Generate the url that will be used for the consent dialog.
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/plus.me',
  code_challenge_method: 'S256',
  code_challenge: codes.codeChallenge
});
```

## Breaking changes
There have been multiple API breaking changes with this release.  Please test your code accordingly after upgrading.

### Synchronous methods
Several public methods were switched from asynchronous to synchronous APIs.  In all cases, the APIs were not doing anything asynchronous - they were just providing errors in callback form.  This has been changed.

```js
// OLD CODE
var auth = new GoogleAuth();
auth.fromJSON(input, function (err, client) {
  if (err) {
    console.error('Error acquiring client: ' + err);
  }
  // make request with client ...
});

// NEW CODE
const auth = new GoogleAuth();
const client = auth.fromJSON(input);
// make request with client ...
```

This change was made with the following methods:
- `GoogleAuth.fromJSON`
- `GoogleAuth.fromAPIKey`
- `JWTAccess. getRequestMetadata`
- `JWTAccess.fromJSON`
- `JWTClient.fromJSON`
- `JWTClient.fromAPIKey`
- `UserRefreshClient.fromJSON`


### Request -> Axios
The underlying transport used for HTTP requests was changed from [`request`](https://github.com/request/request) to [`axios`](https://github.com/axios/axios).  This will result in a number of breaking changes.

Any calls to the `client.request(opts)` method will both accept different parameters, and have different return types.  For the options passed to these methods, they are changing from a [request options object](https://github.com/request/request#requestoptions-callback) to an [axios request options object](https://github.com/axios/axios#request-config).

In addition to the properties on the `opts` object changing, the signature of the callback is changing as well.  The previous version of the library would return objects with a callback that reversed `request`'s default order:  `function (err, body, response)`.  The signature of that callback has simply been changed to `function (err, response)`, where the body of the response is available by looking at `response.data`.

```js
// OLD CODE
oAuth2Client.request({
  uri: 'https://www.googleapis.com/plus/v1/people?query=pizza'
}, function (err, body, res) {
  console.log('The body of the response was ' + body);
});

// NEW CODE (using callbacks)
oAuth2Client.request({
  // note that we're using `url` instead of `uri` here, per the Axios request config.
  url: 'https://www.googleapis.com/plus/v1/people?query=pizza'
}, function (err, res) {
  // The body isn't returned as part of the callback, and is available from `res.data`
  console.log(`The body of the response was ${res.data}`);
});

// NEW CODE (using async/await)
const res = await oAuth2Client.request({
  url:  'https://www.googleapis.com/plus/v1/people?query=pizza'
});
console.log(`The body of the response was ${res.data}`);
```

In addition to these changes - the `request` and `axios` libraries handle errors differently.  `request` treats any completed request, even if it returns a non `2xx` response code, as a success.  The `err` parameter will be `null` or `undefined`.  `axios` treats any non `2xx` response as an *error*.  Code which may have previous not worked, but also not thrown errors - may now start throwing errors.

### Parameter change for `verifyIdToken`
The parameters to the `verifyIdToken` method of OAuth2Client have been changed. The function now accepts a single options object, and an optional callback. A function that used to look like this:

```js
oAuth2Client.verifyIdToken(idToken, audience, callback);
```

Would now be rewritten as this:

```js
oAuth2Client.verifyIdToken({
  idToken: idToken,
  audience: audience
}, callback);
```


# Migrating from version `2.x` to `3.x`

The only breaking changes from `2.x` to `3.x` are listed in the [changelog](https://github.com/google/google-api-nodejs-client/blob/master/CHANGELOG.md#300---14-march-2016).

Everything else should continue to work.

# Migrating from version `1.x` to `2.x`

Code written against a `1.x` version of this library should continue to work with the `2.x`
version. However, you may need to update any direct links in your code to
ensure better forward compatibility.

In the 2.0 version of this library, the authentication and authorization code was moved
to the new [google-nodejs-auth-library][googleauth], and a dependency was taken from
this library to the new auth module. The list of files which were moved from this library to the
new auth module are:

```
lib/auth/authclient.js
lib/auth/computeclient.js
lib/auth/jwtclient.js
lib/auth/loginticket.js
lib/auth/oauth2client/js
lib/pemverifier.js
lib/transporters.js
lib/utils.js
```

In each case, a stub file has been left behind in this library, forwarding the link to the
new version of the file in the [google-nodejs-auth-library][googleauth] module. If your code
directly requires any of these files, you should add a dependency on the
[google-nodejs-auth-library][googleauth]
module, and update your requires statement to link to the version of the file within that library.

# Migrating from version `0.x.x` to `1.x`

Many changes and improvements have been made to the `google-api-nodejs-client`
library to bring it to `1.x`. If you are starting a new project or haven't used
this library before version `1.x`, see the [README][readme] to get started
as you won't need to migrate anything.

## Discovery

In `0.x.x` the library would "discover" APIs on the fly, introducing
additional network calls and instability. That has been fixed in `1.0`.

To get the `drive` client in `0.x.x` required this:

``` js
var google = require('googleapis');
google.discover('drive', 'v2').execute(function(err, client) {
  if(err) {
    // handle error
  } else {
    // client.drive.files.insert...
  }
});
```

In `1.0` the same thing can be accomplished like this:

``` js
var google = require('googleapis');
var drive = google.drive('v2'); // no network call! :)
// drive.files.insert...
```

All APIs are immediately accessible without requiring discovery.

## Moved `resource`

We moved `resource` object from the second parameter to the `resource` property
in the first parameter object:

In `0.x.x`, a resource was specified this way:

``` js
var resourceObj = { title: 'updated title' };
client.drive.files.update({ fileId: 'abc' }, resourceObj).execute();
```

New way in `1.0`:

``` js
var resourceObj = { title: 'updated title' };
drive.files.update({ fileId: 'abc', resource: resourceObj })
```

## Removed `.execute` everywhere

Now callbacks are specified in the second parameter and `.execute` is always
implied.

The `0.x.x` way to specify a callback:

``` js
client.drive.files.get({ fileId: 'abc' }).execute(function(err, resp) {
  // handle err, resp
});
```

How to specify callback in `1.0` (in the second parameter):

``` js
drive.files.get({ fileId: 'abc' }, function(err, resp) {
  // handle err, resp
});
```

**Note:** Prior to `1.0`, the library would not execute your requests until you
specifically called `.execute`. Because this was removed in `1.0`, all requests
now immediately execute, even if a callback is not specified.

## Media uploads

Media data is now specified in a `media` parameter instead of in `withMedia()`.

The old `0.x.x` way of uploading media:

``` js
client.drive.files.insert({ title: 'Test', mimeType: 'text/plain' })
  .withMedia('text/plain', 'Hello World')
  .execute(callback);
```

The fancy new way in `1.0` using `resource` and `media` parameters:

``` js
drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World'
  }
}, callback);
```

**Bonus:** Media uploads now also support readable streams. Simply specify `media` as a
readable stream like this:

``` js
var fs = require('fs');

drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: {
    mimeType: 'text/plain',
    body: fs.createReadStream('hello.txt')
  }
}, callback);
```

## Authentication

In `1.0` the ability to auth with `.withAuthClient()` and
`.withApiKey(API_KEY)` is removed.  Now just simply specify your `OAuth2`
client or API key in the `auth` parameter of any API call.
You can additionally specify it in global or service specific options to set
it as a default. See [here][options] for more information.

In `0.x.x` an OAuth2 client was specified like this:

``` js
var googleapis = require('googleapis');
var OAuth2Client = googleapis.OAuth2Client;

var oauth2Client = new OAuth2Client(/* .. */);

// ... discover plus api and get client object here ...

client
  .plus.people.get({ userId: 'me' })
  .withAuthClient(oauth2Client)
  .execute(callback);
```

In `1.0`, OAuth2Client is now available at `google.auth.OAuth2` and now you can
just put your `oauth2Client` right in the `auth` parameter. It's as easy as:

``` js
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2; // changed from google.OAuth2Client
var plus = google.plus('v1');

var oauth2Client = new OAuth2(/* .. */); // initialized the same way
plus.people.get({ userId: 'me', auth: oauth2Client }, callback);
```

You can also specify an API key instead:

``` js
plus.people.get({ userId: 'me', auth: 'api key here' }, callback);
```

## Batch Requests

Batch requests were experimental before `1.0`. We have removed support for batch
requests in `1.0` due to their unpopularity and instability.

[request]: https://github.com/mikeal/request
[readme]: https://github.com/google/google-api-nodejs-client/tree/master/README.md
[options]: https://github.com/google/google-api-nodejs-client/tree/master#options
[googleauth]: https://github.com/google/google-auth-library-nodejs

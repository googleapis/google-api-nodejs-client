# Google APIs NodeJS Client [![Build Status][travisimg]][travis]

Google's officially supported [node.js][node] client library for using
Google APIs. It also supports authorization and authentication with OAuth 2.0.

### Migrating to `v1` of this library

If you've used this library before `v1`, see our [Migration Guide][migrating]
to learn about migrating your code from pre-`v1` to `v1`. It's pretty easy :)

### Questions/problems?

* Ask your development related questions on [![Ask a question on Stackoverflow](https://googledrive.com/host/0ByfSjdPVs9MZbkhjeUhMYzRTeEE/stackoveflow-tag.png)][stackoverflow]
* If you've found an bug/issue, please [file it on GitHub][bugs].

## Installation

This library is distributed on `npm`. In order to add it as a dependency,
run the following command:

``` sh
$ npm install googleapis
```

## Usage

Example: Creates a URL Shortener client and retrieves the long url of the
given short url:

``` js
var google = require('googleapis');
var urlshortener = google.urlshortener('v1');

var params = { shortUrl: 'http://goo.gl/xKbRu3' };

// get the long url of a shortened url
urlshortener.url.get(params, function (err, response) {
  console.log('Long url is', response.longUrl);
});
```

### Create a service client

To interact with the various Google APIs you need to create a service client
for that particular API. These are immutable objects you use to make API calls.

Example: Creating a `urlshortener` client with version `v1` of the API.

``` js
var urlshortener = google.urlshortener('v1');
```

Supported APIs are listed on [Google APIs Explorer][apiexplorer].

### Authorizing and Authenticating

This client comes with an OAuth2 client that allows you to retrieve an access token and
refreshes the token and retry the request seamlessly if token is expired. The
basics of Google's OAuth 2.0 implementation is explained on
[Google Authorization and Authentication documentation][authdocs].

A complete sample application that authorizes and authenticates with the OAuth 2.0
client is available at `examples/oauth2.js`.

#### Generating an authentication URL

To ask for permissions from a user to retrieve an access token, you
redirect them to a consent page. To create a consent page URL:

``` js
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes.join(' ') // space delimited string of scopes
});
```

#### Retrieve authorization code

Once a user has given permissions on the consent page, Google will redirect
the page to the redirect URL you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

#### Retrieve access token

With the code returned, you can ask for an access token as shown below:

``` js
oauth2Client.getToken(code, function(err, tokens) {
  // Now tokens contains an access_token and an optional refresh_token. Save them.
  if(!err) {
    oauth2Client.setCredentials(tokens);
  }
});
```

#### Making Authenticated Requests

You can start using OAuth2 to authorize and authenticate your
requests to Google APIs with the retrieved tokens. If you provide a
refresh_token, the access_token is automatically refreshed and the request is replayed in
case the access_token has expired.

Following sample retrieves Google+ profile of the authenticated user.

``` js
var google = require('googleapis');
var plus = google.plus('v1');
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// Retrieve tokens via token exchange explained above or set them:
oauth2Client.setCredentials({
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
});

plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, response) {
  // handle err and response
});
```

#### Using API keys

You may need to send an API key with the request you are going to make.
The following uses an API key to make a request to the Google+ API service to
retrieve a person's profile given a userId:

``` js
var google = require('googleapis');
var plus = google.plus('v1');

var API_KEY = 'ABC123'; // specify your API key here

plus.people.get({ auth: API_KEY, userId: '+google' }, function(err, user) {
  console.log('Result: ' + (err ? err.message : user.displayName));
});
```

Alternatively, you can specify the `key` parameter and it will get used:

``` js
plus.people.get({ key: API_KEY, userId: '+google' }, function(err, user) {
  console.log('Result: ' + (err ? err.message : user.displayName));
});
```

To learn more about API keys, please see the [documentation][usingkeys].

### Media Uploads

This client supports multipart media uploads. The resource parameters are
specified in the `resource` object, and the media body itself is specified in
the `media` object.

Example: Upload a plain text file with the title "Test" and contents
"Hello World".

``` js
var drive = google.drive({ version: 'v2', auth: oauth2Client });

drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: 'Hello World'
}, callback);
```

You can also upload media by specifying `media` as a [Readable stream][stream].
This can allow you to upload very large files that cannot fit into memory.

Note: Streams in Node.js are still unstable. Use at your own risk.

Example: Upload an image from a readable stream.

``` js
var fs = require('fs');
var drive = google.drive({ version: 'v2', auth: oauth2Client });

drive.files.insert({
  resource: {
    title: 'testimage.png',
    mimeType: 'image/png'
  },
  media: fs.createReadStream('awesome.png') // read streams are awesome!
}, callback);
```

For more examples of creation and modification requests with media attachments,
take a look at the `examples/mediaupload.js` sample.

## Exposing request object

Every request to the API returns a [`request`][request] object, allowing you to track
the request's progress or general information about the request.

``` js
var req = drive.files.insert(/* ... */);
console.log(req.uri.href); // print out the request's URL.
```

## Options

For more fine-tuned control over how your API calls are made,
we provide you with the ability to specify additional options that can
be applied directly to the [`mikeal/request`][request] object used in
this library to make network calls to the API.

You may specify additional options either in the global `google` object or on a
service client basis.

A full list of supported options can be [found here][requestopts].

#### Global options

Example: Specifying a proxy to be used for each request

``` js
var google = require('googleapis');
google.options({ proxy: 'http://proxy.example.com' }); // sets options on google
```

#### Service-client options

You can also specify options when creating a service client. For example, to
specify a default `auth` option (API key or OAuth2 client), simply pass it in
like so:

``` js
var auth = 'API KEY'; // or you could use oauth2Client
var urlshortener = google.urlshortener({ version: 'v1', auth: auth });
```

By doing this, every API call made with this service client will use `'API KEY'`
to authenticate.

**Note:** Created clients are **immutable** so you must create a new one if you
want to specify different options.

## License

This library is licensed under Apache 2.0. Full license text is
available in [COPYING][copying].

## Contributing

See [CONTRIBUTING][contributing].

[travisimg]: https://api.travis-ci.org/google/google-api-nodejs-client.svg
[bugs]: https://github.com/google/google-api-nodejs-client/issues
[node]: http://nodejs.org/
[travis]: https://travis-ci.org/google/google-api-nodejs-client
[stackoverflow]: http://stackoverflow.com/questions/tagged/google-api-nodejs-client
[apiexplorer]: https://developers.google.com/apis-explorer
[urlshort]: https://developers.google.com/url-shortener/
[usingkeys]: https://developers.google.com/console/help/#UsingKeys
[contributing]: https://github.com/google/google-api-nodejs-client/tree/master/CONTRIBUTING.md
[copying]: https://github.com/google/google-api-nodejs-client/tree/master/COPYING
[authdocs]: https://developers.google.com/accounts/docs/OAuth2Login
[request]: https://github.com/mikeal/request
[requestopts]: https://github.com/mikeal/request#requestoptions-callback
[stream]: http://nodejs.org/api/stream.html#stream_class_stream_readable
[migrating]: https://github.com/google/google-api-nodejs-client/tree/master/MIGRATING.md

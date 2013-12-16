# google-api-nodejs-client [alpha]

[![Build Status](https://travis-ci.org/google/google-api-nodejs-client.png)](https://travis-ci.org/google/google-api-nodejs-client)

`google-api-nodejs-client` is Google's officially supported
[node.js](http://nodejs.org/) client
library for accessing Google APIs, it also supports authorization and
authentication with OAuth 2.0.

### Questions/problems?

* Ask your development related questions on [![Ask a question on Stackoverflow](https://googledrive.com/host/0ByfSjdPVs9MZbkhjeUhMYzRTeEE/stackoveflow-tag.png)](http://stackoverflow.com/questions/tagged/google-api-nodejs-client)
* If you found a bug, please [file a bug](https://github.com/google/google-api-nodejs-client/issues).

**Note**: This library is currently in *alpha* status, meaning that we can make
changes in the future that *may not be compatible* with the previous versions.

## Installation

The library is distributed on `npm`. In order to add it as a dependency,
run the following command:

    $ npm install googleapis

## Guide

### Discover APIs

Dynamically load Google APIs and start making requests:

~~~~ js
var googleapis = require('googleapis');

googleapis
    .discover('urlshortener', 'v1')
    .discover('plus', 'v1')
    .execute(function(err, client) {
  var params = { shortUrl: 'http://goo.gl/DdUKX' };
  var req1 = client.urlshortener.url.get(params);
  req1.execute(function (err, response) {
    console.log('Long url is', response.longUrl);
  });

  var req2 = client.plus.people.get({ userId: '+burcudogan' });
  req2.execute();
});
~~~~

Supported APIs are listed on
[Google APIs Explorer](https://developers.google.com/apis-explorer).

#### Discovery Document Caching

Discovery documents are being cached for 5 minutes locally.
You can configure the directory used to store cached discovery
files by using the `cache.path` option.

~~~~ js
googleapis
    .discover('plus', 'v3')
    .withOpts({ cache: { path: '<path>' }))
    .execute();
~~~~

### API Client

Client libraries are generated during runtime by metadata provided by Google
APIs Discovery Service. Metadata provided by Discovery Service is cached,
and won't be requested each time you load a client. Below, there is an
example of loading a client for
[URL Shortener API](https://developers.google.com/url-shortener/).

~~~~ js
googleapis
     .discover('urlshortener', 'v1')
     .execute(function(err, client) {
   // make requests
 });
~~~~

### Requests

The following sample loads a client for URL Shortener and retrieves the long url
of the given short url:

~~~~ js
googleapis.discover('urlshortener', 'v1').execute(function(err, client) {
  client.urlshortener.url.get({ shortUrl: 'http://goo.gl/DdUKX' })
      .execute(function(err, result) {
        // result.longUrl contains the long url.
      });
  });
~~~~

Alternatively, you may need to send an API key with the
request you are going to make. The following creates and executes a request from the Google+ API service to retrieve a person profile given a userId:

~~~~ js
googleapis
  .discover('plus', 'v1')
  .execute(function(err, client) {
    var request1 = client.plus.people.get({ userId: '+burcudogan' })
        .withApiKey(API_KEY);

    request1.execute(function(err, result) {
      console.log("Result: " + (err ? err.message : result.displayName));
    });
  });
~~~~

To learn more about API keys, please see the [documentation](https://developers.google.com/console/help/#UsingKeys).

### Batch requests (experimental)

You can combine multiple requests in a single one by using batch requests.

~~~~ js
var request1 =
    client.plus.people.get({ userId: '+BurcuDogan' });

var request2 =
    client.urlshortener.url.insert({ longUrl: 'http://google.com' });

client
  .newBatchRequest()
  .add(request1)
  .add(request2)
  .execute(function(err, results) {

  });
~~~~

### Authorization and Authentication

This client comes with an OAuth2 client that allows you to retrieve an access token and
refreshes the token and re-try the request seamlessly if token is expired. The
basics of Google's OAuth 2.0 implementation is explained on
[Google Authorization and Authentication
documentation](https://developers.google.com/accounts/docs/OAuth2Login).

A complete sample application that authorizes and authenticates with OAuth2.0
client is available at `examples/oauth2.js`.

#### Consent Page Url

In order to ask for permissions from a user to retrieve an access token, you
should redirect them to a consent page. In order to create a consent page
URL:

~~~~ js
var googleapis = require('googleapis'),
    OAuth2 = googleapis.auth.OAuth2;

var oauth2Client =
    new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generates a url that allows offline access and asks permissions
// for Google+ scope.
var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://www.googleapis.com/auth/plus.me'
});
~~~~

#### Retrieving Tokens
Once a user has given permissions on the consent page, Google will redirect
the page to the redirect url you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

With the code returned, you can ask for an access token as shown below:

~~~~ js
oauth2Client.getToken(code, function(err, tokens) {
  // contains an access_token and optionally a refresh_token.
  // save them permanently.
});
~~~~

#### Making Authenticated Requests

And you can start using oauth2Client to authorize and authenticate your
requests to Google APIs with the retrieved tokens. If you provide a
refresh_token, in cases when access_token is expired, it asks for a new
access_token and replays the request.

Following sample retrieves Google+ profile of the authenticated user.

~~~~ js
oauth2Client.credentials = {
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
};

client
  .plus.people.get({ userId: 'me' })
  .withAuthClient(oauth2Client)
  .execute(callback);
~~~~

### Media Uploads

Client supports basic and multipart media uploads. For creation and modification requests
with media attachments, take a look at the `examples/mediaupload.js` sample.

~~~~ js
client
    .drive.files.insert({ title: 'Test', mimeType: 'text/plain' })
	.withMedia('text/plain', 'Hello World')
	.execute();
~~~~

## License

`google-api-nodejs-client` is licensed with Apache 2.0. Full license text is
available on COPYING file.

## Contributors

Before making any contributions, please sign one of the contributor
license agreements below.

Fork the repo, develop and test your code changes.

Install all dependencies including development requirements by running:

    $ npm install -d

Tests use mocha. To run all tests you can use

    $ npm test

which looks for tests in the `./tests` directory.

Your code should honor the
[Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml).
You can use
[Closure Linter](https://code.google.com/p/closure-linter/)
to detect style issues.

Submit a pull request. The repo owner will review your request. If it is
approved, the change will be merged. If it needs additional work, the repo
owner will respond with useful comments.

#### Contributor License Agreements

Before creating a pull request, please fill out either the individual or
corporate Contributor License Agreement.

* If you are an individual writing original source code and you're sure you
own the intellectual property, then you'll need to sign an
[individual CLA](http://code.google.com/legal/individual-cla-v1.0.html).
* If you work for a company that wants to allow you to contribute your work
to this client library, then you'll need to sign a
[corporate CLA](http://code.google.com/legal/corporate-cla-v1.0.html).

Follow either of the two links above to access the appropriate CLA and
instructions for how to sign and return it. Once we receive it, we'll add you
to the official list of contributors and be able to accept your patches.

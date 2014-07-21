# Migrating to `v1`

Many changes and improvements have been made to the `google-api-nodejs-client`
library to bring it to `v1`. If you are starting a new project or haven't used
this library before `v1`, see the [README][readme] to get started as you won't
need to migrate anything.

## Discovery

Before `v1` the library would "discover" APIs on the fly, introducing
additional network calls and instability. That has been fixed that in `v1`.

To get the `drive` client in the old library required something like this:

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

In `v1` the same thing can be accomplished like this:

``` js
var google = require('googleapis');
var drive = google.drive('v2');
// drive.files.insert...
```

All APIs are immediately accessible without requiring discovery.

## Moved `resource`

We moved `resource` object from the second parameter to the `resource` property
in the first parameter object:

Prior to `v1`:

``` js
var resourceObj = { title: 'updated title' };
client.drive.files.update({ fileId: 'abc' }, resourceObj).execute();
```

New way in `v1`:

``` js
var resourceObj = { title: 'updated title' };
drive.files.update({ fileId: 'abc', resource: resourceObj })
```

## Removed `.execute` everywhere

Now callbacks are specified in the second parameter and `.execute` is always
implied.

Old way to specify a callback:

``` js
client.drive.files.get({ fileId: 'abc' }).execute(function(err, resp) {
  // handle err, resp
});
```

How to specify callback in `v1` (in the second parameter):

``` js
drive.files.get({ fileId: 'abc' }, function(err, resp) {
  // handle err, resp
});
```

**Note:** Prior to `v1`, the library would not execute your requests until you
specifically called `.execute`. Because this was removed in `v1`, all requests
now immediately execute, even if a callback is not specified.

## Media uploads

Media data is now specified in a `media` parameter instead of in `withMedia()`.
The mime-type is taken from the `resource` object, so there's no need to specify
it twice.

Old way to do media uploads prior to `v1`:

``` js
client.drive.files.insert({ title: 'Test', mimeType: 'text/plain' })
  .withMedia('text/plain', 'Hello World')
  .execute(callback);
```

New way in `v1` using `resource` and `media` parameters:

``` js
drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: 'Hello World'
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
  media: fs.createReadStream('hello.txt')
}, callback);
```

## Batch Requests

Batch requests were experimental before `v1`. We have removed support for batch
requests in `v1` due to their unpopularity and instability.

[request]: https://github.com/mikeal/request
[readme]: https://github.com/google/google-api-nodejs-client/tree/master/README.md

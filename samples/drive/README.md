# Drive v3 API Samples

This samples allows you to download a single file from Google Drive.

## Running the samples

Set the following values in `secret.json` (up one directory):

* `client_id`
* `project_id`
* `client_secret`

__Run the `download.js` sample:__

```
node download.js <fileId>
```

where `<fileId>` is the id of any file in Google Drive.

Example:

```
node download.js 0B_Klegupc5gUcXhFZjZVUV9NeE0
```

__Run the `export.js` sample:__

```
node export.js <fileId>=
```

where `<fileId>` is the id of a _Google Doc_ in Google Drive.

Example:

```
node export.js 0B_Klegupc5gUcXhFZjZVUV9NeE0 ./file.pdf
```

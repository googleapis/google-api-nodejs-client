# Drive v3 API Samples

This samples allows you to download a single file from Google Drive.

## Running the sample

Set the following values in `secret.json` (up one directory):

* `client_id`
* `project_id`
* `client_secret`

Run the sample:

```
node download.js <fileId> <localPath>
```

where `<fileId>` is the id of a file in Google Drive and `localPath` is the location
where the file should be saved.

Example:

```
node download.js 0B_Klegupc5gUcXhFZjZVUV9NeE0 ./file.txt
```

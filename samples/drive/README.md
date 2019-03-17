# Drive v3 API Samples

These samples allow you to list, download, and upload files from Google Drive.

## Running the samples

### **Note: Node.js version 8 or greater is required to run samples.**
Set the following values in `oauth2.keys.json` (up one directory):

* `client_id`
* `project_id`
* `client_secret`

__Run the `quickstart.js` sample:__

This sample will list the files in the user's Google Drive.

You'll need to do the following before you can run this sample:

* Enable the [Google Drive API](https://console.developers.google.com/apis/api/drive.googleapis.com/overview).
* Set the redirect API in the Google Cloud Console application registration to `http://localhost:3000/oauth2callback`.

```
node quickstart.js
```

__Run the `download.js` sample:__

Run the `quickstart.js` sample to get a list of files in your Google Drive.  

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

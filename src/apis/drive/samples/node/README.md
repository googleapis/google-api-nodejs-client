# Drive v3 API Samples

These samples allow you to list, download, and upload files from Google Drive.

## Running the samples

### **Note: Node.js version 8 or greater is requared to run samples.**
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


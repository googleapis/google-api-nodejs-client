var Multipart = require('multipart-stream');

function createAPIRequest(context, params, options, isMedia, callback) {
  options = options || {};
  if (typeof(params) === 'function') {
    callback = params;
    params = {};
  } else {
    params = params || {};
  }

  if (context.apiKey) {
    params.key = context.apiKey; // set key as param if present
  }

  if(isMedia) {
    var media = params.media || {};
    delete params.media;

    var boundary = Math.random().toString(36).slice(2);
    var mp = new Multipart(boundary);

    params.uploadType = 'multipart';

    options.headers = {
      'Content-Type': 'multipart/related; boundary="' + boundary + '"'
    };

    mp.addPart({
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(media.metadata || {})
    });

    mp.addPart({
      headers: {
        'Content-Type': media.metadata && media.metadata.mimeType || 'application/octet-stream'
      },
      body: media.data || ''
    });

  }
  else {
    options.json = params.resource || true;
    delete params.resource;
  }

  options.qs = params;

  var req;
  if (context.auth.authClient && context.auth.authClient.credentials) {
    req = context.auth.authClient.request(options, callback);
  } else {
    req = context.google.transporter.request(options, callback);
  }

  if(mp) mp.pipe(req);

  return req;

  // var multipart = [{
  //   'Content-Type': 'application/json',
  //   body: JSON.stringify(media.metadata || {})
  // }, {
  //   'Content-Type': media.mimeType || 'application/octet-stream',
  //   body: media.data || ''
  // }];
  //
  // options.multipart = multipart;
}

module.exports = createAPIRequest;

// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs');
const path = require('path');
const express = require('express');
const opn = require('opn');

const keyfile = path.join(__dirname, '../oauth2.keys.json');
const keysString = fs.readFileSync(keyfile).toString();
const indexHtml = fs
  .readFileSync(path.join(__dirname, 'index.html.template'))
  .toString()
  .replace('KEYS', keysString);

const app = express();
const appRoot = path.resolve(__dirname, '..', '..');
app.get('/drive.min.js', (req, res) => {
  res.sendFile(path.join('dist', 'drive.min.js'), {
    root: appRoot,
  });
});
app.get(/.*/, (req, res) => {
  // catch-all route: send the same index.html file
  res.type('html').send(indexHtml);
});

app.listen(3000);
console.log('HTTP server is listening on port 3000.');
console.log('(Ctrl+C to exit)');

// open the browser to the main page
opn('http://localhost:3000/', {wait: false});

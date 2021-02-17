#!/bin/bash

# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -eo pipefail

# build jsdocs (Python is installed on the Node 10 docker image).
if [[ -z "$CREDENTIALS" ]]; then
  # if CREDENTIALS are explicitly set, assume we're testing locally
  # and don't set NPM_CONFIG_PREFIX.
  export NPM_CONFIG_PREFIX=${HOME}/.npm-global
  export PATH="$PATH:${NPM_CONFIG_PREFIX}/bin"
  cd $(dirname $0)/../..
fi

mkdir ./etc

npm install
npm run api-extractor
npm run api-documenter

npm i json@9.0.6 -g
NAME=$(cat .repo-metadata.json | json name)

mkdir ./_devsite
cp ./yaml/$NAME/* ./_devsite

# Clean up TOC
# Delete SharePoint item, see https://github.com/microsoft/rushstack/issues/1229
sed -i -e '1,3d' ./yaml/toc.yml
sed -i -e 's/^    //' ./yaml/toc.yml
# Delete interfaces from TOC (name and uid)
sed -i -e '/name: I[A-Z]/{N;d;}' ./yaml/toc.yml
sed -i -e '/^ *\@google-cloud.*:interface/d' ./yaml/toc.yml

cp ./yaml/toc.yml ./_devsite/toc.yml

# create docs.metadata, based on package.json and .repo-metadata.json.
pip install -U pip
python3 -m pip install --user gcp-docuploader
python3 -m docuploader create-metadata \
  --name=$NAME \
  --version=$(cat package.json | json version) \
  --language=$(cat .repo-metadata.json | json language) \
  --distribution-name=$(cat .repo-metadata.json | json distribution_name) \
  --product-page=$(cat .repo-metadata.json | json product_documentation) \
  --github-repository=$(cat .repo-metadata.json | json repo) \
  --issue-tracker=$(cat .repo-metadata.json | json issue_tracker)
cp docs.metadata ./_devsite/docs.metadata

# deploy the docs.
if [[ -z "$CREDENTIALS" ]]; then
  CREDENTIALS=${KOKORO_KEYSTORE_DIR}/73713_docuploader_service_account
fi
if [[ -z "$BUCKET" ]]; then
  BUCKET=docs-staging-v2
fi

python3 -m docuploader upload ./_devsite --destination-prefix docfx --credentials $CREDENTIALS --staging-bucket $BUCKET

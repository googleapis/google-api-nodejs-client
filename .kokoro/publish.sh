#!/bin/bash

# Copyright 2018 Google LLC
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

if [ -z "${AUTORELEASE_PR}" ]
then
  echo "Need to specify AUTORELEASE_PR environment variable"
  exit 1
fi

export NPM_CONFIG_PREFIX=/home/node/.npm-global

# Start the releasetool reporter
python3 -m releasetool publish-reporter-script > /tmp/publisher-script; source /tmp/publisher-script

cd $(dirname $0)/..

NPM_TOKEN=$(cat "${KOKORO_GFILE_DIR}/secret_manager/repo_automation_bots_npm_publish_token")
printf "//wombat-dressing-room.appspot.com/:_authToken=${NPM_TOKEN}\nregistry=https://wombat-dressing-room.appspot.com" > ~/.npmrc

npx @google-cloud/mono-repo-publish --pr-url="${AUTORELEASE_PR}"

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

export NPM_CONFIG_PREFIX=${HOME}/.npm-global
export PATH="${NPM_CONFIG_PREFIX}/bin:${PATH}"

# Ensure the npm global directory is writable, otherwise rebuild `npm`
mkdir -p ${NPM_CONFIG_PREFIX}
npm config -g ls || npm i -g npm@`npm --version`

cd $(dirname $0)/..

npm install

# Install and link samples
if [ -f samples/package.json ]; then
  cd samples/
  npm link ../
  npm install
  cd ..
fi

npm run lint

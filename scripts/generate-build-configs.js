// Copyright 2026 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require('fs');
const path = require('path');

function generateBuildConfigs() {
  const apisDir = path.join(__dirname, '../src/apis');

  if (!fs.existsSync(apisDir)) {
    return;
  }

  const entries = fs.readdirSync(apisDir, {withFileTypes: true});
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const apiName = entry.name;
      const configPath = path.join(apisDir, apiName, 'tsconfig.build.json');
      const content =
        JSON.stringify(
          {
            extends: '../../../tsconfig.base.json',
            compilerOptions: {
              rootDir: '.',
              outDir: `../../../build/src/apis/${apiName}`,
            },
            include: ['*.ts'],
          },
          null,
          2,
        ) + '\n';

      if (
        !fs.existsSync(configPath) ||
        fs.readFileSync(configPath, 'utf8') !== content
      ) {
        fs.writeFileSync(configPath, content);
      }
    }
  }
}

generateBuildConfigs();

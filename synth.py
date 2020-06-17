# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import synthtool as s
import synthtool.gcp as gcp
import subprocess
import logging

logging.basicConfig(level=logging.DEBUG)
AUTOSYNTH_MULTIPLE_COMMITS = True
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library()
s.copy(templates, excludes=[
  ".github/CONTRIBUTING.md",
  "README.md",
  ".eslintignore",
  ".prettierignore"
])
subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'update-disclaimers'])
subprocess.run(['npm', 'run', 'submit-prs'])

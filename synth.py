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

"""This script is used to synthesize generated parts of this library."""

from synthtool import _tracked_paths
import synthtool as s
import synthtool.log as log
import synthtool.shell as shell
import synthtool.sources.git as git
import logging

logging.basicConfig(level=logging.DEBUG)

repository_url = "https://github.com/google/google-api-nodejs-client.git"

log.debug(f"Cloning {repository_url}.")
repository = git.clone(repository_url, depth=1)

log.debug("Installing dependencies.")
shell.run("npm install".split(), cwd=repository)

log.debug("Generating all libraries.")
shell.run("make generate".split(), cwd=repository)

# copy src directory
s.copy(library / "src")

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

"""
Get workflow name for the current build using CircleCI API.
Would be great if this information is available in one of
CircleCI environment variables, but it's not there.
https://circleci.ideas.aha.io/ideas/CCI-I-295
"""

import json
import os
import sys
import urllib2


def main():
    try:
        username = os.environ['CIRCLE_PROJECT_USERNAME']
        reponame = os.environ['CIRCLE_PROJECT_REPONAME']
        build_num = os.environ['CIRCLE_BUILD_NUM']
    except:
        sys.stderr.write(
            'Looks like we are not inside CircleCI container. Exiting...\n')
        return 1

    try:
        request = urllib2.Request(
            "https://circleci.com/api/v1.1/project/github/%s/%s/%s" %
            (username, reponame, build_num),
            headers={"Accept": "application/json"})
        contents = urllib2.urlopen(request).read()
    except:
        sys.stderr.write('Cannot query CircleCI API. Exiting...\n')
        return 1

    try:
        build_info = json.loads(contents)
    except:
        sys.stderr.write(
            'Cannot parse JSON received from CircleCI API. Exiting...\n')
        return 1

    try:
        workflow_name = build_info['workflows']['workflow_name']
    except:
        sys.stderr.write(
            'Cannot get workflow name from CircleCI build info. Exiting...\n')
        return 1

    print workflow_name
    return 0


retval = main()
exit(retval)

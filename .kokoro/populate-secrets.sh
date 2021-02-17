#!/bin/bash
# Copyright 2020 Google LLC.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# This file is called in the early stage of `trampoline_v2.sh` to
# populate secrets needed for the CI builds.

set -eo pipefail

function now { date +"%Y-%m-%d %H:%M:%S" | tr -d '\n' ;}
function msg { println "$*" >&2 ;}
function println { printf '%s\n' "$(now) $*" ;}

# Populates requested secrets set in SECRET_MANAGER_KEYS

# In Kokoro CI builds, we use the service account attached to the
# Kokoro VM. This means we need to setup auth on other CI systems.
# For local run, we just use the gcloud command for retrieving the
# secrets.

if [[ "${RUNNING_IN_CI:-}" == "true" ]]; then
    GCLOUD_COMMANDS=(
	"docker"
	"run"
	"--entrypoint=gcloud"
	"--volume=${KOKORO_GFILE_DIR}:${KOKORO_GFILE_DIR}"
	"gcr.io/google.com/cloudsdktool/cloud-sdk"
    )
    if [[ "${TRAMPOLINE_CI:-}" == "kokoro" ]]; then
	SECRET_LOCATION="${KOKORO_GFILE_DIR}/secret_manager"
    else
	echo "Authentication for this CI system is not implemented yet."
	exit 2
	# TODO: Determine appropriate SECRET_LOCATION and the GCLOUD_COMMANDS.
    fi
else
    # For local run, use /dev/shm or temporary directory for
    # KOKORO_GFILE_DIR.
    if [[ -d "/dev/shm" ]]; then
	export KOKORO_GFILE_DIR=/dev/shm
    else
	export KOKORO_GFILE_DIR=$(mktemp -d -t ci-XXXXXXXX)
    fi
    SECRET_LOCATION="${KOKORO_GFILE_DIR}/secret_manager"
    GCLOUD_COMMANDS=("gcloud")
fi

msg "Creating folder on disk for secrets: ${SECRET_LOCATION}"
mkdir -p ${SECRET_LOCATION}

for key in $(echo ${SECRET_MANAGER_KEYS} | sed "s/,/ /g")
do
    msg "Retrieving secret ${key}"
    "${GCLOUD_COMMANDS[@]}" \
	secrets versions access latest \
	--project cloud-devrel-kokoro-resources \
	--secret $key > \
	"$SECRET_LOCATION/$key"
    if [[ $? == 0 ]]; then
	msg "Secret written to ${SECRET_LOCATION}/${key}"
    else
	msg "Error retrieving secret ${key}"
	exit 2
    fi
done

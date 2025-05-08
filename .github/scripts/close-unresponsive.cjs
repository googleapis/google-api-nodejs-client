/// Copyright 2024 Google LLC
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

function labeledEvent(data) {
  return data.event === "labeled" && data.label.name === "needs more info";
}

const numberOfDaysLimit = 15;
const close_message = `This has been closed since a request for information has \
not been answered for ${numberOfDaysLimit} days. It can be reopened when the \
requested information is provided.`;

module.exports = async ({ github, context }) => {
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  const issues = await github.rest.issues.listForRepo({
    owner: owner,
    repo: repo,
    labels: "needs more info",
  });
  const numbers = issues.data.map((e) => e.number);

  for (const number of numbers) {
    const events = await github.paginate(
      github.rest.issues.listEventsForTimeline,
      {
        owner: owner,
        repo: repo,
        issue_number: number,
      },
      (response) => response.data.filter(labeledEvent)
    );

    const latest_response_label = events[events.length - 1];

    const created_at = new Date(latest_response_label.created_at);
    const now = new Date();
    const diff = now - created_at;
    const diffDays = diff / (1000 * 60 * 60 * 24);

    if (diffDays > numberOfDaysLimit) {
      await github.rest.issues.update({
        owner: owner,
        repo: repo,
        issue_number: number,
        state: "closed",
      });

      await github.rest.issues.createComment({
        owner: owner,
        repo: repo,
        issue_number: number,
        body: close_message,
      });
    }
  }
};
// Copyright 2024 Google LLC
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
const yaml = require('js-yaml');
const path = require('path');
const TEMPLATE_FILE_PATH = path.resolve(__dirname, '../ISSUE_TEMPLATE/bug_report.yml')

async function closeIssue(github, owner, repo, number) {
    await github.rest.issues.createComment({
          owner: owner,
          repo: repo,
          issue_number: number,
          body: "Issue was opened with an invalid reproduction link. Please make sure the repository is a valid, publicly-accessible github repository, and make sure the url is complete (example: https://github.com/googleapis/google-cloud-node)"
        });
    await github.rest.issues.update({
        owner: owner,
        repo: repo,
        issue_number: number,
        state: "closed"
      });
}
module.exports = async ({ github, context }) => {
    const owner = context.repo.owner;
    const repo = context.repo.repo;
    const number = context.issue.number;

    const issue = await github.rest.issues.get({
      owner: owner,
      repo: repo,
      issue_number: number,
    });

    const yamlData = fs.readFileSync(TEMPLATE_FILE_PATH, 'utf8');
    const obj = yaml.load(yamlData);
    const linkMatchingText = (obj.body.find(x => {return x.type === 'input' && x.validations.required === true && x.attributes.label.includes('link')})).attributes.label;
    const isBugTemplate = issue.data.body.includes(linkMatchingText);

    if (isBugTemplate) {
        console.log(`Issue ${number} is a bug template`)
        try {
            const text = issue.data.body;
            const match = text.indexOf(linkMatchingText);
            if (match !== -1) {
                const nextLineIndex = text.indexOf('http', match);
                if (nextLineIndex == -1) {
                    await closeIssue(github, owner, repo, number);
                    return;
                }
                const link = text.substring(nextLineIndex, text.indexOf('\n', nextLineIndex));
                console.log(`Issue ${number} contains this link: ${link}`);
                const isValidLink = (await fetch(link)).ok;
                console.log(`Issue ${number} has a ${isValidLink ? "valid" : "invalid"} link`)
                if (!isValidLink) {
                    await closeIssue(github, owner, repo, number);
                }
              }            
        } catch (err) {
            await closeIssue(github, owner, repo, number);
        }
    }
};
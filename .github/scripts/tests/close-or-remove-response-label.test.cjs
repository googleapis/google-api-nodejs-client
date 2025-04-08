// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const { describe, it, beforeEach, afterEach } = require('mocha');
const removeResponseLabel = require('../remove-response-label.cjs');
const closeUnresponsive = require('../close-unresponsive.cjs');
const sinon = require('sinon');

function getISODateDaysAgo(days) {
  const today = new Date();
  const daysAgo = new Date(today.setDate(today.getDate() - days));
  return daysAgo.toISOString();
}

describe('close issues or remove needs more info labels', () => {
  let octokitStub;
  let issuesStub;
  let paginateStub;

  beforeEach(() => {
    issuesStub = {
      listForRepo: sinon.stub(),
      update: sinon.stub(),
      createComment: sinon.stub(),
      get: sinon.stub(),
      removeLabel: sinon.stub(),
    };
    paginateStub = sinon.stub();
    octokitStub = {
      rest: {
        issues: issuesStub,
      },
      paginate: paginateStub,
    };
  });

  afterEach(() => {
    sinon.restore();
  });

  it('closes the issue if the OP has not responded within the allotted time and there is a needs-more-info label', async () => {
    const context = { owner: 'testOrg', repo: 'testRepo' };
    const issuesInRepo = [{ user: { login: 'OP' }, labels: [{ name: 'needs more info' }] }];
    const eventsInIssue = [{ event: 'labeled', label: { name: 'needs more info' }, created_at: getISODateDaysAgo(16) }];

    issuesStub.listForRepo.resolves({ data: issuesInRepo });
    paginateStub.resolves(eventsInIssue);

    await closeUnresponsive({ github: octokitStub, context });

    sinon.assert.calledOnce(issuesStub.listForRepo);
    sinon.assert.calledOnce(paginateStub);
    sinon.assert.calledOnce(issuesStub.update);
    sinon.assert.calledOnce(issuesStub.createComment);
  });

  it('does nothing if not enough time has passed and there is a needs-more-info label', async () => {
    const context = { owner: 'testOrg', repo: 'testRepo' };
    const issuesInRepo = [{ user: { login: 'OP' }, labels: [{ name: 'needs more info' }] }];
    const eventsInIssue = [{ event: 'labeled', label: { name: 'needs more info' }, created_at: getISODateDaysAgo(14) }];

    issuesStub.listForRepo.resolves({ data: issuesInRepo });
    paginateStub.resolves(eventsInIssue);

    await closeUnresponsive({ github: octokitStub, context });

    sinon.assert.calledOnce(issuesStub.listForRepo);
    sinon.assert.calledOnce(paginateStub);
    sinon.assert.notCalled(issuesStub.update);
    sinon.assert.notCalled(issuesStub.createComment);
  });

  it('removes the label if OP responded', async () => {
    const context = { actor: 'OP', repo: { owner: 'testOrg', repo: 'testRepo' }, issue: { number: 1 } };
    const issueContext = { user: {login: 'OP'}, labels: [{ name: 'needs more info' }] };

    issuesStub.get.resolves({ data: issueContext });

    await removeResponseLabel({ github: octokitStub, context });

    sinon.assert.calledOnce(issuesStub.get);
    sinon.assert.calledOnce(issuesStub.removeLabel);
  });

  it('does not remove the label if author responded', async () => {
    const context = { actor: 'repo-maintainer', repo: { owner: 'testOrg', repo: 'testRepo' }, issue: { number: 1 } };
    const issueContext = { user: {login: 'OP'}, labels: [{ name: 'needs more info' }] };

    issuesStub.get.resolves({ data: issueContext });

    await removeResponseLabel({ github: octokitStub, context });

    sinon.assert.calledOnce(issuesStub.get);
    sinon.assert.notCalled(issuesStub.removeLabel);
  });
});
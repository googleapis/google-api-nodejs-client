// Copyright 2019 Google Inc.
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

import * as assert from 'assert';
import {adsense_v1_4, GoogleApis} from '../src';
import {Utils} from './utils';

const googleapis = new GoogleApis();

describe('adsense:1.4', () => {
  let localAdsense: adsense_v1_4.Adsense, remoteAdsense: adsense_v1_4.Adsense;

  before(async () => {
    remoteAdsense = await Utils.loadApi<adsense_v1_4.Adsense>(
        googleapis, 'adsense', 'v1.4');
  });

  beforeEach(() => {
    localAdsense = googleapis.adsense('v1.4');
  });

  it('should exist', (done) => {
    assert.notEqual(typeof googleapis.adsense, null);
    done();
  });

  it('should be a function', (done) => {
    assert.strictEqual(typeof googleapis.adsense, 'function');
    done();
  });

  it('should create an adsence object on default', (done) => {
    assert.notEqual(typeof localAdsense, 'undefined');
    assert.notEqual(typeof remoteAdsense, 'undefined');
    done();
  });
});
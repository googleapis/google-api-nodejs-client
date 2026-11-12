// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {AuthPlus, getAPI, GoogleConfigurable} from 'googleapis-common';
import {merchantapi_accounts_v1} from './accounts_v1';
import {merchantapi_conversions_v1} from './conversions_v1';
import {merchantapi_datasources_v1} from './datasources_v1';
import {merchantapi_inventories_v1} from './inventories_v1';
import {merchantapi_issueresolution_v1} from './issueresolution_v1';
import {merchantapi_lfp_v1} from './lfp_v1';
import {merchantapi_loyaltycustomers_v1} from './loyaltycustomers_v1';
import {merchantapi_notifications_v1} from './notifications_v1';
import {merchantapi_ordertracking_v1} from './ordertracking_v1';
import {merchantapi_products_v1} from './products_v1';
import {merchantapi_promotions_v1} from './promotions_v1';
import {merchantapi_quota_v1} from './quota_v1';
import {merchantapi_reports_v1} from './reports_v1';

export const VERSIONS = {
  accounts_v1: merchantapi_accounts_v1.Merchantapi,
  conversions_v1: merchantapi_conversions_v1.Merchantapi,
  datasources_v1: merchantapi_datasources_v1.Merchantapi,
  inventories_v1: merchantapi_inventories_v1.Merchantapi,
  issueresolution_v1: merchantapi_issueresolution_v1.Merchantapi,
  lfp_v1: merchantapi_lfp_v1.Merchantapi,
  loyaltycustomers_v1: merchantapi_loyaltycustomers_v1.Merchantapi,
  notifications_v1: merchantapi_notifications_v1.Merchantapi,
  ordertracking_v1: merchantapi_ordertracking_v1.Merchantapi,
  products_v1: merchantapi_products_v1.Merchantapi,
  promotions_v1: merchantapi_promotions_v1.Merchantapi,
  quota_v1: merchantapi_quota_v1.Merchantapi,
  reports_v1: merchantapi_reports_v1.Merchantapi,
};

export function merchantapi(
  version: 'accounts_v1'
): merchantapi_accounts_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_accounts_v1.Options
): merchantapi_accounts_v1.Merchantapi;
export function merchantapi(
  version: 'conversions_v1'
): merchantapi_conversions_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_conversions_v1.Options
): merchantapi_conversions_v1.Merchantapi;
export function merchantapi(
  version: 'datasources_v1'
): merchantapi_datasources_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_datasources_v1.Options
): merchantapi_datasources_v1.Merchantapi;
export function merchantapi(
  version: 'inventories_v1'
): merchantapi_inventories_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_inventories_v1.Options
): merchantapi_inventories_v1.Merchantapi;
export function merchantapi(
  version: 'issueresolution_v1'
): merchantapi_issueresolution_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_issueresolution_v1.Options
): merchantapi_issueresolution_v1.Merchantapi;
export function merchantapi(version: 'lfp_v1'): merchantapi_lfp_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_lfp_v1.Options
): merchantapi_lfp_v1.Merchantapi;
export function merchantapi(
  version: 'loyaltycustomers_v1'
): merchantapi_loyaltycustomers_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_loyaltycustomers_v1.Options
): merchantapi_loyaltycustomers_v1.Merchantapi;
export function merchantapi(
  version: 'notifications_v1'
): merchantapi_notifications_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_notifications_v1.Options
): merchantapi_notifications_v1.Merchantapi;
export function merchantapi(
  version: 'ordertracking_v1'
): merchantapi_ordertracking_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_ordertracking_v1.Options
): merchantapi_ordertracking_v1.Merchantapi;
export function merchantapi(
  version: 'products_v1'
): merchantapi_products_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_products_v1.Options
): merchantapi_products_v1.Merchantapi;
export function merchantapi(
  version: 'promotions_v1'
): merchantapi_promotions_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_promotions_v1.Options
): merchantapi_promotions_v1.Merchantapi;
export function merchantapi(
  version: 'quota_v1'
): merchantapi_quota_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_quota_v1.Options
): merchantapi_quota_v1.Merchantapi;
export function merchantapi(
  version: 'reports_v1'
): merchantapi_reports_v1.Merchantapi;
export function merchantapi(
  options: merchantapi_reports_v1.Options
): merchantapi_reports_v1.Merchantapi;
export function merchantapi<
  T =
    | merchantapi_accounts_v1.Merchantapi
    | merchantapi_conversions_v1.Merchantapi
    | merchantapi_datasources_v1.Merchantapi
    | merchantapi_inventories_v1.Merchantapi
    | merchantapi_issueresolution_v1.Merchantapi
    | merchantapi_lfp_v1.Merchantapi
    | merchantapi_loyaltycustomers_v1.Merchantapi
    | merchantapi_notifications_v1.Merchantapi
    | merchantapi_ordertracking_v1.Merchantapi
    | merchantapi_products_v1.Merchantapi
    | merchantapi_promotions_v1.Merchantapi
    | merchantapi_quota_v1.Merchantapi
    | merchantapi_reports_v1.Merchantapi,
>(
  this: GoogleConfigurable,
  versionOrOptions:
    | 'accounts_v1'
    | merchantapi_accounts_v1.Options
    | 'conversions_v1'
    | merchantapi_conversions_v1.Options
    | 'datasources_v1'
    | merchantapi_datasources_v1.Options
    | 'inventories_v1'
    | merchantapi_inventories_v1.Options
    | 'issueresolution_v1'
    | merchantapi_issueresolution_v1.Options
    | 'lfp_v1'
    | merchantapi_lfp_v1.Options
    | 'loyaltycustomers_v1'
    | merchantapi_loyaltycustomers_v1.Options
    | 'notifications_v1'
    | merchantapi_notifications_v1.Options
    | 'ordertracking_v1'
    | merchantapi_ordertracking_v1.Options
    | 'products_v1'
    | merchantapi_products_v1.Options
    | 'promotions_v1'
    | merchantapi_promotions_v1.Options
    | 'quota_v1'
    | merchantapi_quota_v1.Options
    | 'reports_v1'
    | merchantapi_reports_v1.Options
) {
  return getAPI<T>('merchantapi', versionOrOptions, VERSIONS, this);
}

const auth = new AuthPlus();
export {auth};
export {merchantapi_accounts_v1};
export {merchantapi_conversions_v1};
export {merchantapi_datasources_v1};
export {merchantapi_inventories_v1};
export {merchantapi_issueresolution_v1};
export {merchantapi_lfp_v1};
export {merchantapi_loyaltycustomers_v1};
export {merchantapi_notifications_v1};
export {merchantapi_ordertracking_v1};
export {merchantapi_products_v1};
export {merchantapi_promotions_v1};
export {merchantapi_quota_v1};
export {merchantapi_reports_v1};
export {
  AuthPlus,
  GlobalOptions,
  APIRequestContext,
  GoogleConfigurable,
  StreamMethodOptions,
  MethodOptions,
  BodyResponseCallback,
} from 'googleapis-common';

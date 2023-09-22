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

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace mybusinessverifications_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * My Business Verifications API
   *
   * The My Business Verifications API provides an interface for taking verifications related actions for locations.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const mybusinessverifications = google.mybusinessverifications('v1');
   * ```
   */
  export class Mybusinessverifications {
    context: APIRequestContext;
    locations: Resource$Locations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.locations = new Resource$Locations(this.context);
    }
  }

  /**
   * Display data for verifications through postcard.
   */
  export interface Schema$AddressVerificationData {
    /**
     * Address that a postcard can be sent to.
     */
    address?: Schema$PostalAddress;
    /**
     * Merchant's business name.
     */
    business?: string | null;
    /**
     * Expected number of days it takes to deliver a postcard to the address's region.
     */
    expectedDeliveryDaysRegion?: number | null;
  }
  /**
   * Request message for Verifications.CompleteVerificationAction.
   */
  export interface Schema$CompleteVerificationRequest {
    /**
     * Required. PIN code received by the merchant to complete the verification.
     */
    pin?: string | null;
  }
  /**
   * Response message for Verifications.CompleteVerificationAction.
   */
  export interface Schema$CompleteVerificationResponse {
    /**
     * The completed verification.
     */
    verification?: Schema$Verification;
  }
  /**
   * Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
   */
  export interface Schema$ComplyWithGuidelines {
    /**
     * The reason why the location is being recommended to comply with guidelines.
     */
    recommendationReason?: string | null;
  }
  /**
   * Display data for verifications through email.
   */
  export interface Schema$EmailVerificationData {
    /**
     * Domain name in the email address. e.g. "gmail.com" in foo@gmail.com
     */
    domain?: string | null;
    /**
     * Whether client is allowed to provide a different user name.
     */
    isUserNameEditable?: boolean | null;
    /**
     * User name in the email address. e.g. "foo" in foo@gmail.com
     */
    user?: string | null;
  }
  /**
   * Request message for Verifications.FetchVerificationOptions.
   */
  export interface Schema$FetchVerificationOptionsRequest {
    /**
     * Optional. Extra context information for the verification of service businesses. Can only be applied to the locations whose business type is CUSTOMER_LOCATION_ONLY. Specifying an accurate address could enable more options. INVALID_ARGUMENT will be thrown if it is set for other business types of locations.
     */
    context?: Schema$ServiceBusinessContext;
    /**
     * Required. The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.
     */
    languageCode?: string | null;
  }
  /**
   * Response message for Verifications.FetchVerificationOptions.
   */
  export interface Schema$FetchVerificationOptionsResponse {
    /**
     * The available verification options.
     */
    options?: Schema$VerificationOption[];
  }
  /**
   * Response message for Verifications.ListVerifications.
   */
  export interface Schema$ListVerificationsResponse {
    /**
     * If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.
     */
    nextPageToken?: string | null;
    /**
     * List of the verifications.
     */
    verifications?: Schema$Verification[];
  }
  /**
   * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
   */
  export interface Schema$PostalAddress {
    /**
     * Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
     */
    addressLines?: string[] | null;
    /**
     * Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
     */
    administrativeArea?: string | null;
    /**
     * Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".
     */
    languageCode?: string | null;
    /**
     * Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.
     */
    locality?: string | null;
    /**
     * Optional. The name of the organization at the address.
     */
    organization?: string | null;
    /**
     * Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
     */
    postalCode?: string | null;
    /**
     * Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
     */
    recipients?: string[] | null;
    /**
     * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
     */
    regionCode?: string | null;
    /**
     * The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.
     */
    revision?: number | null;
    /**
     * Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
     */
    sortingCode?: string | null;
    /**
     * Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
     */
    sublocality?: string | null;
  }
  /**
   * Indicates that the location duplicates another location that is in good standing.
   */
  export interface Schema$ResolveOwnershipConflict {}
  /**
   * Additional data for service business verification.
   */
  export interface Schema$ServiceBusinessContext {
    /**
     * The verification address of the location. It is used to either enable more verification options or send a postcard.
     */
    address?: Schema$PostalAddress;
  }
  /**
   * A verification represents a verification attempt on a location.
   */
  export interface Schema$Verification {
    /**
     * Optional. Response announcement set only if the method is VETTED_PARTNER.
     */
    announcement?: string | null;
    /**
     * The timestamp when the verification is requested.
     */
    createTime?: string | null;
    /**
     * The method of the verification.
     */
    method?: string | null;
    /**
     * Resource name of the verification.
     */
    name?: string | null;
    /**
     * The state of the verification.
     */
    state?: string | null;
  }
  /**
   * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
   */
  export interface Schema$VerificationOption {
    /**
     * Set only if the method is MAIL.
     */
    addressData?: Schema$AddressVerificationData;
    /**
     * Set only if the method is VETTED_PARTNER.
     */
    announcement?: string | null;
    /**
     * Set only if the method is EMAIL.
     */
    emailData?: Schema$EmailVerificationData;
    /**
     * Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to.
     */
    phoneNumber?: string | null;
    /**
     * Method to verify the location.
     */
    verificationMethod?: string | null;
  }
  /**
   * Token generated by a vetted [partner](https://support.google.com/business/answer/7674102).
   */
  export interface Schema$VerificationToken {
    /**
     * The token string.
     */
    tokenString?: string | null;
  }
  /**
   * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
   */
  export interface Schema$Verify {
    /**
     * Indicates whether a verification process has already started, and can be completed by the location.
     */
    hasPendingVerification?: boolean | null;
  }
  /**
   * Request message for Verifications.VerifyLocation.
   */
  export interface Schema$VerifyLocationRequest {
    /**
     * Optional. Extra context information for the verification of service businesses. It is only required for the locations whose business type is CUSTOMER_LOCATION_ONLY. For ADDRESS verification, the address will be used to send out postcard. For other methods, it should be the same as the one that is passed to GetVerificationOptions. INVALID_ARGUMENT will be thrown if it is set for other types of business locations.
     */
    context?: Schema$ServiceBusinessContext;
    /**
     * Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.
     */
    emailAddress?: string | null;
    /**
     * Optional. The BCP 47 language code representing the language that is to be used for the verification process.
     */
    languageCode?: string | null;
    /**
     * Optional. The input for ADDRESS method. Contact name the mail should be sent to.
     */
    mailerContact?: string | null;
    /**
     * Required. Verification method.
     */
    method?: string | null;
    /**
     * Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.
     */
    phoneNumber?: string | null;
    /**
     * Optional. The input for VETTED_PARTNER method available to select [partners.](https://support.google.com/business/answer/7674102) The input is not needed for a vetted account. Token that is associated to the location. Token that is associated to the location.
     */
    token?: Schema$VerificationToken;
  }
  /**
   * Response message for Verifications.VerifyLocation.
   */
  export interface Schema$VerifyLocationResponse {
    /**
     * The created verification request.
     */
    verification?: Schema$Verification;
  }
  /**
   * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
   */
  export interface Schema$VoiceOfMerchantState {
    /**
     * The location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177) and requires additional steps for reinstatement. To fix this issue, consult the [Help Center Article](https://support.google.com/business/answer/4569145).
     */
    complyWithGuidelines?: Schema$ComplyWithGuidelines;
    /**
     * Indicates whether the location has the authority (ownership) over the business on Google. If true, another location cannot take over and become the dominant listing on Maps. However, edits will not become live unless Voice of Merchant is gained (i.e. has_voice_of_merchant is true).
     */
    hasBusinessAuthority?: boolean | null;
    /**
     * Indicates whether the location is in good standing and has control over the business on Google. Any edits made to the location will propagate to Maps after passing the review phase.
     */
    hasVoiceOfMerchant?: boolean | null;
    /**
     * This location duplicates another location that is in good standing. If you have access to the location in good standing, use that location's id to perform operations. Otherwise, request access from the current owner.
     */
    resolveOwnershipConflict?: Schema$ResolveOwnershipConflict;
    /**
     * Start or continue the verification process.
     */
    verify?: Schema$Verify;
    /**
     * Wait to gain Voice of Merchant. The location is under review for quality purposes.
     */
    waitForVoiceOfMerchant?: Schema$WaitForVoiceOfMerchant;
  }
  /**
   * Indicates that the location will gain voice of merchant after passing review.
   */
  export interface Schema$WaitForVoiceOfMerchant {}

  export class Resource$Locations {
    context: APIRequestContext;
    verifications: Resource$Locations$Verifications;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.verifications = new Resource$Locations$Verifications(this.context);
    }

    /**
     * Reports all eligible verification options for a location in a specific language.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    fetchVerificationOptions(
      params: Params$Resource$Locations$Fetchverificationoptions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    fetchVerificationOptions(
      params?: Params$Resource$Locations$Fetchverificationoptions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$FetchVerificationOptionsResponse>;
    fetchVerificationOptions(
      params: Params$Resource$Locations$Fetchverificationoptions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchVerificationOptions(
      params: Params$Resource$Locations$Fetchverificationoptions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchVerificationOptionsResponse>,
      callback: BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
    ): void;
    fetchVerificationOptions(
      params: Params$Resource$Locations$Fetchverificationoptions,
      callback: BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
    ): void;
    fetchVerificationOptions(
      callback: BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
    ): void;
    fetchVerificationOptions(
      paramsOrCallback?:
        | Params$Resource$Locations$Fetchverificationoptions
        | BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchVerificationOptionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$FetchVerificationOptionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Fetchverificationoptions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Fetchverificationoptions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessverifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+location}:fetchVerificationOptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['location'],
        pathParams: ['location'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchVerificationOptionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchVerificationOptionsResponse>(
          parameters
        );
      }
    }

    /**
     * Gets the VoiceOfMerchant state.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getVoiceOfMerchantState(
      params: Params$Resource$Locations$Getvoiceofmerchantstate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getVoiceOfMerchantState(
      params?: Params$Resource$Locations$Getvoiceofmerchantstate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VoiceOfMerchantState>;
    getVoiceOfMerchantState(
      params: Params$Resource$Locations$Getvoiceofmerchantstate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getVoiceOfMerchantState(
      params: Params$Resource$Locations$Getvoiceofmerchantstate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VoiceOfMerchantState>,
      callback: BodyResponseCallback<Schema$VoiceOfMerchantState>
    ): void;
    getVoiceOfMerchantState(
      params: Params$Resource$Locations$Getvoiceofmerchantstate,
      callback: BodyResponseCallback<Schema$VoiceOfMerchantState>
    ): void;
    getVoiceOfMerchantState(
      callback: BodyResponseCallback<Schema$VoiceOfMerchantState>
    ): void;
    getVoiceOfMerchantState(
      paramsOrCallback?:
        | Params$Resource$Locations$Getvoiceofmerchantstate
        | BodyResponseCallback<Schema$VoiceOfMerchantState>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VoiceOfMerchantState>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VoiceOfMerchantState>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VoiceOfMerchantState>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Getvoiceofmerchantstate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Getvoiceofmerchantstate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessverifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/VoiceOfMerchantState').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VoiceOfMerchantState>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VoiceOfMerchantState>(parameters);
      }
    }

    /**
     * Starts the verification process for a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    verify(
      params: Params$Resource$Locations$Verify,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    verify(
      params?: Params$Resource$Locations$Verify,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VerifyLocationResponse>;
    verify(
      params: Params$Resource$Locations$Verify,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    verify(
      params: Params$Resource$Locations$Verify,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VerifyLocationResponse>,
      callback: BodyResponseCallback<Schema$VerifyLocationResponse>
    ): void;
    verify(
      params: Params$Resource$Locations$Verify,
      callback: BodyResponseCallback<Schema$VerifyLocationResponse>
    ): void;
    verify(callback: BodyResponseCallback<Schema$VerifyLocationResponse>): void;
    verify(
      paramsOrCallback?:
        | Params$Resource$Locations$Verify
        | BodyResponseCallback<Schema$VerifyLocationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VerifyLocationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VerifyLocationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VerifyLocationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Locations$Verify;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Verify;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessverifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:verify').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VerifyLocationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$VerifyLocationResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Fetchverificationoptions
    extends StandardParameters {
    /**
     * Required. The location to verify.
     */
    location?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FetchVerificationOptionsRequest;
  }
  export interface Params$Resource$Locations$Getvoiceofmerchantstate
    extends StandardParameters {
    /**
     * Required. Resource name of the location.
     */
    name?: string;
  }
  export interface Params$Resource$Locations$Verify extends StandardParameters {
    /**
     * Required. Resource name of the location to verify.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VerifyLocationRequest;
  }

  export class Resource$Locations$Verifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    complete(
      params: Params$Resource$Locations$Verifications$Complete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    complete(
      params?: Params$Resource$Locations$Verifications$Complete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CompleteVerificationResponse>;
    complete(
      params: Params$Resource$Locations$Verifications$Complete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    complete(
      params: Params$Resource$Locations$Verifications$Complete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CompleteVerificationResponse>,
      callback: BodyResponseCallback<Schema$CompleteVerificationResponse>
    ): void;
    complete(
      params: Params$Resource$Locations$Verifications$Complete,
      callback: BodyResponseCallback<Schema$CompleteVerificationResponse>
    ): void;
    complete(
      callback: BodyResponseCallback<Schema$CompleteVerificationResponse>
    ): void;
    complete(
      paramsOrCallback?:
        | Params$Resource$Locations$Verifications$Complete
        | BodyResponseCallback<Schema$CompleteVerificationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CompleteVerificationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CompleteVerificationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CompleteVerificationResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Verifications$Complete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Verifications$Complete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessverifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:complete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CompleteVerificationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CompleteVerificationResponse>(
          parameters
        );
      }
    }

    /**
     * List verifications of a location, ordered by create time.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Locations$Verifications$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Locations$Verifications$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListVerificationsResponse>;
    list(
      params: Params$Resource$Locations$Verifications$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Locations$Verifications$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListVerificationsResponse>,
      callback: BodyResponseCallback<Schema$ListVerificationsResponse>
    ): void;
    list(
      params: Params$Resource$Locations$Verifications$List,
      callback: BodyResponseCallback<Schema$ListVerificationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListVerificationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Locations$Verifications$List
        | BodyResponseCallback<Schema$ListVerificationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListVerificationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListVerificationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListVerificationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Locations$Verifications$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Locations$Verifications$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://mybusinessverifications.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/verifications').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListVerificationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListVerificationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Locations$Verifications$Complete
    extends StandardParameters {
    /**
     * Required. Resource name of the verification to complete.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteVerificationRequest;
  }
  export interface Params$Resource$Locations$Verifications$List
    extends StandardParameters {
    /**
     * How many verification to include per page. Minimum is 1, and the default and maximum page size is 100.
     */
    pageSize?: number;
    /**
     * If specified, returns the next page of verifications.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the location that verification requests belong to.
     */
    parent?: string;
  }
}

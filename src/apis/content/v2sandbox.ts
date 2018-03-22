/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Content API for Shopping
 *
 * Manages product items, inventory, and Merchant Center accounts for Google
 * Shopping.
 *
 * @example
 * const google = require('googleapis');
 * const content = google.content('v2sandbox');
 *
 * @namespace content
 * @type {Function}
 * @version v2sandbox
 * @variation v2sandbox
 * @param {object=} options Options for Content
 */
export class Content {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  orders: Resource$Orders;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.orders = new Resource$Orders(this);
  }
}

/**
 * An error returned by the API.
 */
export interface Schema$Error {
  /**
   * The domain of the error.
   */
  domain: string;
  /**
   * A description of the error.
   */
  message: string;
  /**
   * The error code.
   */
  reason: string;
}
/**
 * A list of errors returned by a failed batch entry.
 */
export interface Schema$Errors {
  /**
   * The HTTP status of the first error in errors.
   */
  code: number;
  /**
   * A list of errors.
   */
  errors: Schema$Error[];
  /**
   * The message of the first error in errors.
   */
  message: string;
}
export interface Schema$Order {
  /**
   * Whether the order was acknowledged.
   */
  acknowledged: boolean;
  /**
   * The channel type of the order: &quot;purchaseOnGoogle&quot; or
   * &quot;googleExpress&quot;.
   */
  channelType: string;
  /**
   * The details of the customer who placed the order.
   */
  customer: Schema$OrderCustomer;
  /**
   * The details for the delivery.
   */
  deliveryDetails: Schema$OrderDeliveryDetails;
  /**
   * The REST id of the order. Globally unique.
   */
  id: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#order&quot;.
   */
  kind: string;
  /**
   * Line items that are ordered.
   */
  lineItems: Schema$OrderLineItem[];
  merchantId: string;
  /**
   * Merchant-provided id of the order.
   */
  merchantOrderId: string;
  /**
   * The net amount for the order. For example, if an order was originally for a
   * grand total of $100 and a refund was issued for $20, the net amount will be
   * $80.
   */
  netAmount: Schema$Price;
  /**
   * The details of the payment method.
   */
  paymentMethod: Schema$OrderPaymentMethod;
  /**
   * The status of the payment.
   */
  paymentStatus: string;
  /**
   * The date when the order was placed, in ISO 8601 format.
   */
  placedDate: string;
  /**
   * The details of the merchant provided promotions applied to the order. More
   * details about the program are here.
   */
  promotions: Schema$OrderPromotion[];
  /**
   * Refunds for the order.
   */
  refunds: Schema$OrderRefund[];
  /**
   * Shipments of the order.
   */
  shipments: Schema$OrderShipment[];
  /**
   * The total cost of shipping for all items.
   */
  shippingCost: Schema$Price;
  /**
   * The tax for the total shipping cost.
   */
  shippingCostTax: Schema$Price;
  /**
   * The requested shipping option.
   */
  shippingOption: string;
  /**
   * The status of the order.
   */
  status: string;
}
export interface Schema$OrderAddress {
  /**
   * CLDR country code (e.g. &quot;US&quot;).
   */
  country: string;
  /**
   * Strings representing the lines of the printed label for mailing the order,
   * for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043
   * United States
   */
  fullAddress: string[];
  /**
   * Whether the address is a post office box.
   */
  isPostOfficeBox: boolean;
  /**
   * City, town or commune. May also include dependent localities or
   * sublocalities (e.g. neighborhoods or suburbs).
   */
  locality: string;
  /**
   * Postal Code or ZIP (e.g. &quot;94043&quot;).
   */
  postalCode: string;
  /**
   * Name of the recipient.
   */
  recipientName: string;
  /**
   * Top-level administrative subdivision of the country (e.g. &quot;CA&quot;).
   */
  region: string;
  /**
   * Street-level part of the address.
   */
  streetAddress: string[];
}
export interface Schema$OrderCancellation {
  /**
   * The actor that created the cancellation.
   */
  actor: string;
  /**
   * Date on which the cancellation has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * The quantity that was canceled.
   */
  quantity: number;
  /**
   * The reason for the cancellation. Orders that are cancelled with a
   * noInventory reason will lead to the removal of the product from POG until
   * you make an update to that product. This will not affect your Shopping ads.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrderCustomer {
  /**
   * Email address that should be used for order related communications. In
   * certain cases this might not be a real users email, but a proxy email.
   */
  email: string;
  /**
   * If set, this indicates the user explicitly chose to opt in or out of
   * providing marketing rights to the merchant. If unset, this indicates the
   * user has already made this choice in a previous purchase, and was thus not
   * shown the marketing right opt in/out checkbox during the checkout flow.
   */
  explicitMarketingPreference: boolean;
  /**
   * Full name of the customer.
   */
  fullName: string;
}
export interface Schema$OrderDeliveryDetails {
  /**
   * The delivery address
   */
  address: Schema$OrderAddress;
  /**
   * The phone number of the person receiving the delivery.
   */
  phoneNumber: string;
}
export interface Schema$OrderLineItem {
  /**
   * Annotations that are attached to the line item.
   */
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * Cancellations of the line item.
   */
  cancellations: Schema$OrderCancellation[];
  /**
   * The id of the line item.
   */
  id: string;
  /**
   * Total price for the line item. For example, if two items for $10 are
   * purchased, the total price will be $20.
   */
  price: Schema$Price;
  /**
   * Product data from the time of the order placement.
   */
  product: Schema$OrderLineItemProduct;
  /**
   * Number of items canceled.
   */
  quantityCanceled: number;
  /**
   * Number of items delivered.
   */
  quantityDelivered: number;
  /**
   * Number of items ordered.
   */
  quantityOrdered: number;
  /**
   * Number of items pending.
   */
  quantityPending: number;
  /**
   * Number of items returned.
   */
  quantityReturned: number;
  /**
   * Number of items shipped.
   */
  quantityShipped: number;
  /**
   * Details of the return policy for the line item.
   */
  returnInfo: Schema$OrderLineItemReturnInfo;
  /**
   * Returns of the line item.
   */
  returns: Schema$OrderReturn[];
  /**
   * Details of the requested shipping for the line item.
   */
  shippingDetails: Schema$OrderLineItemShippingDetails;
  /**
   * Total tax amount for the line item. For example, if two items are
   * purchased, and each have a cost tax of $2, the total tax amount will be $4.
   */
  tax: Schema$Price;
}
export interface Schema$OrderLineItemProduct {
  /**
   * Brand of the item.
   */
  brand: string;
  /**
   * The item&#39;s channel (online or local).
   */
  channel: string;
  /**
   * Condition or state of the item.
   */
  condition: string;
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number (GTIN) of the item.
   */
  gtin: string;
  /**
   * The REST id of the product.
   */
  id: string;
  /**
   * URL of an image of the item.
   */
  imageLink: string;
  /**
   * Shared identifier for all variants of the same product.
   */
  itemGroupId: string;
  /**
   * Manufacturer Part Number (MPN) of the item.
   */
  mpn: string;
  /**
   * An identifier of the item.
   */
  offerId: string;
  /**
   * Price of the item.
   */
  price: Schema$Price;
  /**
   * URL to the cached image shown to the user when order was placed.
   */
  shownImage: string;
  /**
   * The CLDR territory code of the target country of the product.
   */
  targetCountry: string;
  /**
   * The title of the product.
   */
  title: string;
  /**
   * Variant attributes for the item. These are dimensions of the product, such
   * as color, gender, material, pattern, and size. You can find a comprehensive
   * list of variant attributes here.
   */
  variantAttributes: Schema$OrderLineItemProductVariantAttribute[];
}
export interface Schema$OrderLineItemProductVariantAttribute {
  /**
   * The dimension of the variant.
   */
  dimension: string;
  /**
   * The value for the dimension.
   */
  value: string;
}
export interface Schema$OrderLineItemReturnInfo {
  /**
   * How many days later the item can be returned.
   */
  daysToReturn: number;
  /**
   * Whether the item is returnable.
   */
  isReturnable: boolean;
  /**
   * URL of the item return policy.
   */
  policyUrl: string;
}
export interface Schema$OrderLineItemShippingDetails {
  /**
   * The delivery by date, in ISO 8601 format.
   */
  deliverByDate: string;
  /**
   * Details of the shipping method.
   */
  method: Schema$OrderLineItemShippingDetailsMethod;
  /**
   * The ship by date, in ISO 8601 format.
   */
  shipByDate: string;
}
export interface Schema$OrderLineItemShippingDetailsMethod {
  /**
   * The carrier for the shipping. Optional. See shipments[].carrier for a list
   * of acceptable values.
   */
  carrier: string;
  /**
   * Maximum transit time.
   */
  maxDaysInTransit: number;
  /**
   * The name of the shipping method.
   */
  methodName: string;
  /**
   * Minimum transit time.
   */
  minDaysInTransit: number;
}
export interface Schema$OrderMerchantProvidedAnnotation {
  /**
   * Key for additional merchant provided (as key-value pairs) annotation about
   * the line item.
   */
  key: string;
  /**
   * Value for additional merchant provided (as key-value pairs) annotation
   * about the line item.
   */
  value: string;
}
export interface Schema$OrderPaymentMethod {
  /**
   * The billing address.
   */
  billingAddress: Schema$OrderAddress;
  /**
   * The card expiration month (January = 1, February = 2 etc.).
   */
  expirationMonth: number;
  /**
   * The card expiration year (4-digit, e.g. 2015).
   */
  expirationYear: number;
  /**
   * The last four digits of the card number.
   */
  lastFourDigits: string;
  /**
   * The billing phone number.
   */
  phoneNumber: string;
  /**
   * The type of instrument.  Acceptable values are:   - &quot;AMEX&quot;  -
   * &quot;DISCOVER&quot;  - &quot;JCB&quot;  - &quot;MASTERCARD&quot;  -
   * &quot;UNIONPAY&quot;  - &quot;VISA&quot;  - &quot;&quot;
   */
  type: string;
}
export interface Schema$OrderPromotion {
  benefits: Schema$OrderPromotionBenefit[];
  /**
   * The date and time frame when the promotion is active and ready for
   * validation review. Note that the promotion live time may be delayed for a
   * few hours due to the validation review. Start date and end date are
   * separated by a forward slash (/). The start date is specified by the format
   * (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale
   * starts (in Greenwich Mean Time, GMT), followed by an expression of the time
   * zone for the sale. The end date is in the same format.
   */
  effectiveDates: string;
  /**
   * Optional. The text code that corresponds to the promotion when applied on
   * the retailer?s website.
   */
  genericRedemptionCode: string;
  /**
   * The unique ID of the promotion.
   */
  id: string;
  /**
   * The full title of the promotion.
   */
  longTitle: string;
  /**
   * Whether the promotion is applicable to all products or only specific
   * products.
   */
  productApplicability: string;
  /**
   * Indicates that the promotion is valid online.
   */
  redemptionChannel: string;
}
export interface Schema$OrderPromotionBenefit {
  /**
   * The discount in the order price when the promotion is applied.
   */
  discount: Schema$Price;
  /**
   * The OfferId(s) that were purchased in this order and map to this specific
   * benefit of the promotion.
   */
  offerIds: string[];
  /**
   * Further describes the benefit of the promotion. Note that we will expand on
   * this enumeration as we support new promotion sub-types.
   */
  subType: string;
  /**
   * The impact on tax when the promotion is applied.
   */
  taxImpact: Schema$Price;
  /**
   * Describes whether the promotion applies to products (e.g. 20% off) or to
   * shipping (e.g. Free Shipping).
   */
  type: string;
}
export interface Schema$OrderRefund {
  /**
   * The actor that created the refund.
   */
  actor: string;
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * Date on which the item has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrderReturn {
  /**
   * The actor that created the refund.
   */
  actor: string;
  /**
   * Date on which the item has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * Quantity that is returned.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersAcknowledgeRequest {
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
}
export interface Schema$OrdersAcknowledgeResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersAcknowledgeResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersAdvanceTestOrderResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersAdvanceTestOrderResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCancelLineItemRequest {
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amount: Schema$Price;
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to cancellation amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to cancel. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to cancel. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to cancel.
   */
  quantity: number;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCancelLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCancelLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCancelRequest {
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCancelResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCancelResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCreateTestOrderRequest {
  /**
   * The test order template to use. Specify as an alternative to testOrder as a
   * shortcut for retrieving a template and then creating an order using that
   * template.
   */
  templateName: string;
  /**
   * The test order to create.
   */
  testOrder: Schema$TestOrder;
}
export interface Schema$OrdersCreateTestOrderResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCreateTestOrderResponse&quot;.
   */
  kind: string;
  /**
   * The ID of the newly created test order.
   */
  orderId: string;
}
export interface Schema$OrdersCustomBatchRequest {
  /**
   * The request entries to be processed in the batch.
   */
  entries: Schema$OrdersCustomBatchRequestEntry[];
}
export interface Schema$OrdersCustomBatchRequestEntry {
  /**
   * An entry ID, unique within the batch request.
   */
  batchId: number;
  /**
   * Required for cancel method.
   */
  cancel: Schema$OrdersCustomBatchRequestEntryCancel;
  /**
   * Required for cancelLineItem method.
   */
  cancelLineItem: Schema$OrdersCustomBatchRequestEntryCancelLineItem;
  /**
   * Required for inStoreReturnLineItem method.
   */
  inStoreRefundLineItem:
      Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem;
  /**
   * The ID of the managing account.
   */
  merchantId: string;
  /**
   * The merchant order id. Required for updateMerchantOrderId and
   * getByMerchantOrderId methods.
   */
  merchantOrderId: string;
  /**
   * The method to apply.
   */
  method: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   * Required for all methods beside get and getByMerchantOrderId.
   */
  operationId: string;
  /**
   * The ID of the order. Required for all methods beside getByMerchantOrderId.
   */
  orderId: string;
  /**
   * Required for refund method.
   */
  refund: Schema$OrdersCustomBatchRequestEntryRefund;
  /**
   * Required for rejectReturnLineItem method.
   */
  rejectReturnLineItem:
      Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem;
  /**
   * Required for returnLineItem method.
   */
  returnLineItem: Schema$OrdersCustomBatchRequestEntryReturnLineItem;
  /**
   * Required for returnRefundLineItem method.
   */
  returnRefundLineItem:
      Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem;
  /**
   * Required for setLineItemMetadata method.
   */
  setLineItemMetadata: Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata;
  /**
   * Required for shipLineItems method.
   */
  shipLineItems: Schema$OrdersCustomBatchRequestEntryShipLineItems;
  /**
   * Required for updateLineItemShippingDate method.
   */
  updateLineItemShippingDetails:
      Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
  /**
   * Required for updateShipment method.
   */
  updateShipment: Schema$OrdersCustomBatchRequestEntryUpdateShipment;
}
export interface Schema$OrdersCustomBatchRequestEntryCancel {
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryCancelLineItem {
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amount: Schema$Price;
  /**
   * Amount to refund for the cancelation. Optional. If not set, Google will
   * calculate the default based on the price and tax of the items involved. The
   * amount must not be larger than the net amount left on the order.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to cancellation amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to cancel. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to cancel. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to cancel.
   */
  quantity: number;
  /**
   * The reason for the cancellation.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryInStoreRefundLineItem {
  /**
   * The amount that is refunded. Required.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax. Required.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryRefund {
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * The amount that is refunded. Either amount or amountPretax and amountTax
   * should be filled.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryRejectReturnLineItem {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryReturnLineItem {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntryReturnRefundLineItem {
  /**
   * The amount that is refunded. Optional, but if filled then both amountPretax
   * and amountTax must be set.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersCustomBatchRequestEntrySetLineItemMetadata {
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryShipLineItems {
  /**
   * Deprecated. Please use shipmentInfo instead. The carrier handling the
   * shipment. See shipments[].carrier in the  Orders resource representation
   * for a list of acceptable values.
   */
  carrier: string;
  /**
   * Line items to ship.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
   */
  shipmentId: string;
  /**
   * Shipment information. This field is repeated because a single line item can
   * be shipped in several packages (and have several tracking IDs).
   */
  shipmentInfos:
      Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
  /**
   * Deprecated. Please use shipmentInfo instead. The tracking id for the
   * shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {
  /**
   * The carrier handling the shipment. See shipments[].carrier in the  Orders
   * resource representation for a list of acceptable values.
   */
  carrier: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * The tracking id for the shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
  /**
   * Updated delivery by date, in ISO 8601 format. If not specified only ship by
   * date is updated.
   */
  deliverByDate: string;
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * Updated ship by date, in ISO 8601 format. If not specified only deliver by
   * date is updated.
   */
  shipByDate: string;
}
export interface Schema$OrdersCustomBatchRequestEntryUpdateShipment {
  /**
   * The carrier handling the shipment. Not updated if missing. See
   * shipments[].carrier in the  Orders resource representation for a list of
   * acceptable values.
   */
  carrier: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * New status for the shipment. Not updated if missing.
   */
  status: string;
  /**
   * The tracking id for the shipment. Not updated if missing.
   */
  trackingId: string;
}
export interface Schema$OrdersCustomBatchResponse {
  /**
   * The result of the execution of the batch requests.
   */
  entries: Schema$OrdersCustomBatchResponseEntry[];
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCustomBatchResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersCustomBatchResponseEntry {
  /**
   * The ID of the request entry this entry responds to.
   */
  batchId: number;
  /**
   * A list of errors defined if and only if the request failed.
   */
  errors: Schema$Errors;
  /**
   * The status of the execution. Only defined if the method is not get or
   * getByMerchantOrderId and if the request was successful.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersCustomBatchResponseEntry&quot;.
   */
  kind: string;
  /**
   * The retrieved order. Only defined if the method is get and if the request
   * was successful.
   */
  order: Schema$Order;
}
export interface Schema$OrdersGetByMerchantOrderIdResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersGetByMerchantOrderIdResponse&quot;.
   */
  kind: string;
  /**
   * The requested order.
   */
  order: Schema$Order;
}
export interface Schema$OrdersGetTestOrderTemplateResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersGetTestOrderTemplateResponse&quot;.
   */
  kind: string;
  /**
   * The requested test order template.
   */
  template: Schema$TestOrder;
}
export interface Schema$OrderShipment {
  /**
   * The carrier handling the shipment.  Acceptable values are:   -
   * &quot;gsx&quot;  - &quot;ups&quot;  - &quot;usps&quot;  - &quot;fedex&quot;
   * - &quot;dhl&quot;  - &quot;ecourier&quot;  - &quot;cxt&quot;  -
   * &quot;google&quot;  - &quot;ontrac&quot;  - &quot;emsy&quot;  -
   * &quot;ont&quot;  - &quot;deliv&quot;  - &quot;dynamex&quot;  -
   * &quot;lasership&quot;  - &quot;mpx&quot;  - &quot;uds&quot;
   */
  carrier: string;
  /**
   * Date on which the shipment has been created, in ISO 8601 format.
   */
  creationDate: string;
  /**
   * Date on which the shipment has been delivered, in ISO 8601 format. Present
   * only if status is delievered
   */
  deliveryDate: string;
  /**
   * The id of the shipment.
   */
  id: string;
  /**
   * The line items that are shipped.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * The status of the shipment.
   */
  status: string;
  /**
   * The tracking id for the shipment.
   */
  trackingId: string;
}
export interface Schema$OrderShipmentLineItemShipment {
  /**
   * The id of the line item that is shipped. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the product to ship. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity that is shipped.
   */
  quantity: number;
}
export interface Schema$OrdersInStoreRefundLineItemRequest {
  /**
   * The amount that is refunded. Required.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax. Required.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersInStoreRefundLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersInStoreRefundLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersListResponse {
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersListResponse&quot;.
   */
  kind: string;
  /**
   * The token for the retrieval of the next page of orders.
   */
  nextPageToken: string;
  resources: Schema$Order[];
}
export interface Schema$OrdersRefundRequest {
  /**
   * The amount that is refunded.
   */
  amount: Schema$Price;
  /**
   * The amount that is refunded. Either amount or amountPretax and amountTax
   * should be filled.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The reason for the refund.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersRefundResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersRefundResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersRejectReturnLineItemRequest {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersRejectReturnLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersRejectReturnLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersReturnLineItemRequest {
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersReturnLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersReturnLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersReturnRefundLineItemRequest {
  /**
   * The amount that is refunded. Optional, but if filled then both amountPretax
   * and amountTax must be set.
   */
  amountPretax: Schema$Price;
  /**
   * Tax amount that correspond to refund amount in amountPretax.
   */
  amountTax: Schema$Price;
  /**
   * The ID of the line item to return. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to return. This is the REST ID used in the products
   * service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * The quantity to return and refund.
   */
  quantity: number;
  /**
   * The reason for the return.
   */
  reason: string;
  /**
   * The explanation of the reason.
   */
  reasonText: string;
}
export interface Schema$OrdersReturnRefundLineItemResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersReturnRefundLineItemResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersSetLineItemMetadataRequest {
  annotations: Schema$OrderMerchantProvidedAnnotation[];
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
}
export interface Schema$OrdersSetLineItemMetadataResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersSetLineItemMetadataResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersShipLineItemsRequest {
  /**
   * Deprecated. Please use shipmentInfo instead. The carrier handling the
   * shipment. See shipments[].carrier in the  Orders resource representation
   * for a list of acceptable values.
   */
  carrier: string;
  /**
   * Line items to ship.
   */
  lineItems: Schema$OrderShipmentLineItemShipment[];
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
   */
  shipmentId: string;
  /**
   * Shipment information. This field is repeated because a single line item can
   * be shipped in several packages (and have several tracking IDs).
   */
  shipmentInfos:
      Schema$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
  /**
   * Deprecated. Please use shipmentInfo instead. The tracking id for the
   * shipment.
   */
  trackingId: string;
}
export interface Schema$OrdersShipLineItemsResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersShipLineItemsResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateLineItemShippingDetailsRequest {
  /**
   * Updated delivery by date, in ISO 8601 format. If not specified only ship by
   * date is updated.
   */
  deliverByDate: string;
  /**
   * The ID of the line item to set metadata. Either lineItemId or productId is
   * required.
   */
  lineItemId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the product to set metadata. This is the REST ID used in the
   * products service. Either lineItemId or productId is required.
   */
  productId: string;
  /**
   * Updated ship by date, in ISO 8601 format. If not specified only deliver by
   * date is updated.
   */
  shipByDate: string;
}
export interface Schema$OrdersUpdateLineItemShippingDetailsResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateLineItemShippingDetailsResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateMerchantOrderIdRequest {
  /**
   * The merchant order id to be assigned to the order. Must be unique per
   * merchant.
   */
  merchantOrderId: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
}
export interface Schema$OrdersUpdateMerchantOrderIdResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateMerchantOrderIdResponse&quot;.
   */
  kind: string;
}
export interface Schema$OrdersUpdateShipmentRequest {
  /**
   * The carrier handling the shipment. Not updated if missing. See
   * shipments[].carrier in the  Orders resource representation for a list of
   * acceptable values.
   */
  carrier: string;
  /**
   * The ID of the operation. Unique across all operations for a given order.
   */
  operationId: string;
  /**
   * The ID of the shipment.
   */
  shipmentId: string;
  /**
   * New status for the shipment. Not updated if missing.
   */
  status: string;
  /**
   * The tracking id for the shipment. Not updated if missing.
   */
  trackingId: string;
}
export interface Schema$OrdersUpdateShipmentResponse {
  /**
   * The status of the execution.
   */
  executionStatus: string;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#ordersUpdateShipmentResponse&quot;.
   */
  kind: string;
}
export interface Schema$Price {
  /**
   * The currency of the price.
   */
  currency: string;
  /**
   * The price represented as a number.
   */
  value: string;
}
export interface Schema$TestOrder {
  /**
   * The details of the customer who placed the order.
   */
  customer: Schema$TestOrderCustomer;
  /**
   * Identifies what kind of resource this is. Value: the fixed string
   * &quot;content#testOrder&quot;.
   */
  kind: string;
  /**
   * Line items that are ordered. At least one line item must be provided.
   */
  lineItems: Schema$TestOrderLineItem[];
  /**
   * Determines if test order must be pulled by merchant or pushed to merchant
   * via push integration.
   */
  notificationMode: string;
  /**
   * The details of the payment method.
   */
  paymentMethod: Schema$TestOrderPaymentMethod;
  /**
   * Identifier of one of the predefined delivery addresses for the delivery.
   */
  predefinedDeliveryAddress: string;
  /**
   * The details of the merchant provided promotions applied to the order. More
   * details about the program are here.
   */
  promotions: Schema$OrderPromotion[];
  /**
   * The total cost of shipping for all items.
   */
  shippingCost: Schema$Price;
  /**
   * The tax for the total shipping cost.
   */
  shippingCostTax: Schema$Price;
  /**
   * The requested shipping option.
   */
  shippingOption: string;
}
export interface Schema$TestOrderCustomer {
  /**
   * Email address of the customer.
   */
  email: string;
  /**
   * If set, this indicates the user explicitly chose to opt in or out of
   * providing marketing rights to the merchant. If unset, this indicates the
   * user has already made this choice in a previous purchase, and was thus not
   * shown the marketing right opt in/out checkbox during the checkout flow.
   * Optional.
   */
  explicitMarketingPreference: boolean;
  /**
   * Full name of the customer.
   */
  fullName: string;
}
export interface Schema$TestOrderLineItem {
  /**
   * Product data from the time of the order placement.
   */
  product: Schema$TestOrderLineItemProduct;
  /**
   * Number of items ordered.
   */
  quantityOrdered: number;
  /**
   * Details of the return policy for the line item.
   */
  returnInfo: Schema$OrderLineItemReturnInfo;
  /**
   * Details of the requested shipping for the line item.
   */
  shippingDetails: Schema$OrderLineItemShippingDetails;
  /**
   * Unit tax for the line item.
   */
  unitTax: Schema$Price;
}
export interface Schema$TestOrderLineItemProduct {
  /**
   * Brand of the item.
   */
  brand: string;
  /**
   * The item&#39;s channel.
   */
  channel: string;
  /**
   * Condition or state of the item.
   */
  condition: string;
  /**
   * The two-letter ISO 639-1 language code for the item.
   */
  contentLanguage: string;
  /**
   * Global Trade Item Number (GTIN) of the item. Optional.
   */
  gtin: string;
  /**
   * URL of an image of the item.
   */
  imageLink: string;
  /**
   * Shared identifier for all variants of the same product. Optional.
   */
  itemGroupId: string;
  /**
   * Manufacturer Part Number (MPN) of the item. Optional.
   */
  mpn: string;
  /**
   * An identifier of the item.
   */
  offerId: string;
  /**
   * The price for the product.
   */
  price: Schema$Price;
  /**
   * The CLDR territory code of the target country of the product.
   */
  targetCountry: string;
  /**
   * The title of the product.
   */
  title: string;
  /**
   * Variant attributes for the item. Optional.
   */
  variantAttributes: Schema$OrderLineItemProductVariantAttribute[];
}
export interface Schema$TestOrderPaymentMethod {
  /**
   * The card expiration month (January = 1, February = 2 etc.).
   */
  expirationMonth: number;
  /**
   * The card expiration year (4-digit, e.g. 2015).
   */
  expirationYear: number;
  /**
   * The last four digits of the card number.
   */
  lastFourDigits: string;
  /**
   * The billing address.
   */
  predefinedBillingAddress: string;
  /**
   * The type of instrument. Note that real orders might have different values
   * than the four values accepted by createTestOrder.
   */
  type: string;
}

export class Resource$Orders {
  root: Content;
  constructor(root: Content) {
    this.root = root;
  }

  /**
   * content.orders.acknowledge
   * @desc Marks an order as acknowledged.
   * @alias content.orders.acknowledge
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersAcknowledgeRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  acknowledge =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersAcknowledgeResponse>,
       callback?: BodyResponseCallback<Schema$OrdersAcknowledgeResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/acknowledge')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersAcknowledgeResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.advancetestorder
   * @desc Sandbox only. Moves a test order from state "inProgress" to state
   * "pendingShipment".
   * @alias content.orders.advancetestorder
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the test order to modify.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  advancetestorder =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersAdvanceTestOrderResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/testorders/{orderId}/advance')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersAdvanceTestOrderResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.cancel
   * @desc Cancels all line items in an order, making a full refund.
   * @alias content.orders.cancel
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order to cancel.
   * @param {().OrdersCancelRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancel =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$OrdersCancelResponse>,
       callback?: BodyResponseCallback<Schema$OrdersCancelResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/content/v2sandbox/{merchantId}/orders/{orderId}/cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersCancelResponse>(parameters, callback!);
      };


  /**
   * content.orders.cancellineitem
   * @desc Cancels a line item, making a full refund.
   * @alias content.orders.cancellineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersCancelLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  cancellineitem =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersCancelLineItemResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersCancelLineItemResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/cancelLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersCancelLineItemResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.createtestorder
   * @desc Sandbox only. Creates a test order.
   * @alias content.orders.createtestorder
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
   * @param {().OrdersCreateTestOrderRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createtestorder =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersCreateTestOrderResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/content/v2sandbox/{merchantId}/testorders')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId'],
          pathParams: ['merchantId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersCreateTestOrderResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.custombatch
   * @desc Retrieves or modifies multiple orders in a single request.
   * @alias content.orders.custombatch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().OrdersCustomBatchRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  custombatch =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersCustomBatchResponse>,
       callback?: BodyResponseCallback<Schema$OrdersCustomBatchResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/content/v2sandbox/orders/batch')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$OrdersCustomBatchResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.get
   * @desc Retrieves an order from your Merchant Center account.
   * @alias content.orders.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Order>,
       callback?: BodyResponseCallback<Schema$Order>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/content/v2sandbox/{merchantId}/orders/{orderId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$Order>(parameters, callback!);
      };


  /**
   * content.orders.getbymerchantorderid
   * @desc Retrieves an order using merchant order id.
   * @alias content.orders.getbymerchantorderid
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.merchantOrderId The merchant order id to be looked for.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getbymerchantorderid =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersGetByMerchantOrderIdResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/ordersbymerchantid/{merchantOrderId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['merchantId', 'merchantOrderId'],
          pathParams: ['merchantId', 'merchantOrderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersGetByMerchantOrderIdResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.gettestordertemplate
   * @desc Sandbox only. Retrieves an order template that can be used to quickly
   * create a new order in sandbox.
   * @alias content.orders.gettestordertemplate
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
   * @param {string} params.templateName The name of the template to retrieve.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  gettestordertemplate =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersGetTestOrderTemplateResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/testordertemplates/{templateName}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['merchantId', 'templateName'],
          pathParams: ['merchantId', 'templateName'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersGetTestOrderTemplateResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.instorerefundlineitem
   * @desc Notifies that item return and refund was handled directly in store.
   * @alias content.orders.instorerefundlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersInStoreRefundLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  instorerefundlineitem =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersInStoreRefundLineItemResponse>,
       callback?: BodyResponseCallback<
           Schema$OrdersInStoreRefundLineItemResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/inStoreRefundLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersInStoreRefundLineItemResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.list
   * @desc Lists the orders in your Merchant Center account.
   * @alias content.orders.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {boolean=} params.acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
   * @param {integer=} params.maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page. Known issue: All List calls will return all Orders without limit regardless of the value of this field.
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string=} params.orderBy The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
   * @param {string=} params.pageToken The token returned by the previous request.
   * @param {string=} params.placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
   * @param {string=} params.placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
   * @param {string=} params.statuses Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$OrdersListResponse>,
       callback?: BodyResponseCallback<Schema$OrdersListResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/content/v2sandbox/{merchantId}/orders')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['merchantId'],
          pathParams: ['merchantId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersListResponse>(parameters, callback!);
      };


  /**
   * content.orders.refund
   * @desc Refund a portion of the order, up to the full amount paid.
   * @alias content.orders.refund
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order to refund.
   * @param {().OrdersRefundRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  refund =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$OrdersRefundResponse>,
       callback?: BodyResponseCallback<Schema$OrdersRefundResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/content/v2sandbox/{merchantId}/orders/{orderId}/refund')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersRefundResponse>(parameters, callback!);
      };


  /**
   * content.orders.rejectreturnlineitem
   * @desc Rejects return on an line item.
   * @alias content.orders.rejectreturnlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersRejectReturnLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  rejectreturnlineitem =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersRejectReturnLineItemResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/rejectReturnLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersRejectReturnLineItemResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.returnlineitem
   * @desc Returns a line item.
   * @alias content.orders.returnlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersReturnLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  returnlineitem =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersReturnLineItemResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersReturnLineItemResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/returnLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersReturnLineItemResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.returnrefundlineitem
   * @desc Returns and refunds a line item. Note that this method can only be
   * called on fully shipped orders.
   * @alias content.orders.returnrefundlineitem
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersReturnRefundLineItemRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  returnrefundlineitem =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersReturnRefundLineItemResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/returnRefundLineItem')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersReturnRefundLineItemResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.setlineitemmetadata
   * @desc Sets (overrides) merchant provided annotations on the line item.
   * @alias content.orders.setlineitemmetadata
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersSetLineItemMetadataRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  setlineitemmetadata =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersSetLineItemMetadataResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/setLineItemMetadata')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersSetLineItemMetadataResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.shiplineitems
   * @desc Marks line item(s) as shipped.
   * @alias content.orders.shiplineitems
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersShipLineItemsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  shiplineitems =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersShipLineItemsResponse>,
       callback?: BodyResponseCallback<Schema$OrdersShipLineItemsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/shipLineItems')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersShipLineItemsResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.updatelineitemshippingdetails
   * @desc Updates ship by and delivery by dates for a line item.
   * @alias content.orders.updatelineitemshippingdetails
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateLineItemShippingDetailsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updatelineitemshippingdetails =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersUpdateLineItemShippingDetailsResponse>,
       callback?: BodyResponseCallback<
           Schema$OrdersUpdateLineItemShippingDetailsResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/updateLineItemShippingDetails')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersUpdateLineItemShippingDetailsResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.updatemerchantorderid
   * @desc Updates the merchant order ID for a given order.
   * @alias content.orders.updatemerchantorderid
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateMerchantOrderIdRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updatemerchantorderid =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersUpdateMerchantOrderIdResponse>,
       callback?: BodyResponseCallback<
           Schema$OrdersUpdateMerchantOrderIdResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/updateMerchantOrderId')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersUpdateMerchantOrderIdResponse>(
            parameters, callback!);
      };


  /**
   * content.orders.updateshipment
   * @desc Updates a shipment's status, carrier, and/or tracking ID.
   * @alias content.orders.updateshipment
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.merchantId The ID of the account that manages the order. This cannot be a multi-client account.
   * @param {string} params.orderId The ID of the order.
   * @param {().OrdersUpdateShipmentRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  updateshipment =
      (params: any,
       options: MethodOptions|
       BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>,
       callback?:
           BodyResponseCallback<Schema$OrdersUpdateShipmentResponse>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl +
                     '/content/v2sandbox/{merchantId}/orders/{orderId}/updateShipment')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['merchantId', 'orderId'],
          pathParams: ['merchantId', 'orderId'],
          context: this.root
        };
        createAPIRequest<Schema$OrdersUpdateShipmentResponse>(
            parameters, callback!);
      };
}

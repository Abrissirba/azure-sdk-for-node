/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Base resource object.
 */
export interface Resource extends BaseResource {
  /**
   * ID of the resource.
   */
  readonly id?: string;
  /**
   * Name of the resource.
   */
  readonly name?: string;
  /**
   * Type of Resource.
   */
  readonly type?: string;
  /**
   * The entity tag used for optimistic concurrency when modifying the resource.
   */
  etag?: string;
}

/**
 * Base resource object.
 */
export interface TrackedResource extends BaseResource {
  /**
   * ID of the resource.
   */
  readonly id?: string;
  /**
   * Name of the resource.
   */
  readonly name?: string;
  /**
   * Type of Resource.
   */
  readonly type?: string;
  /**
   * Custom tags for the resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The entity tag used for optimistic concurrency when modifying the resource.
   */
  etag?: string;
}

/**
 * Contains the localized display information for this particular operation or action.
 */
export interface Display {
  /**
   * The localized, friendly version of the resource provider name.
   */
  provider?: string;
  /**
   * The localized, friendly version of the resource type related to this action or operation; the
   * resource type should match the public documentation for the resource provider.
   */
  resource?: string;
  /**
   * The localized, friendly name for the operation. Use the name as it will displayed to the user.
   */
  operation?: string;
  /**
   * The localized, friendly description for the operation. The description will be displayed to
   * the user. It should be thorough and concise for used in both tooltips and detailed views.
   */
  description?: string;
}

/**
 * Describes the supported REST operation.
 */
export interface Operation {
  /**
   * The name of the operation being performed on this particular object.
   */
  name?: string;
  /**
   * Contains the localized display information for this particular operation or action.
   */
  display?: Display;
  /**
   * The intended executor of the operation.
   */
  origin?: string;
}

/**
 * The details of the error.
 */
export interface ErrorDetails {
  /**
   * Error code.
   */
  readonly code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  readonly message?: string;
  /**
   * The target of the particular error.
   */
  readonly target?: string;
}

/**
 * Error response indicates that the service is not able to process the incoming request. The
 * reason is provided in the error message.
 */
export interface ErrorResponse {
  /**
   * The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * OS disk image.
 */
export interface OsDiskImage {
  /**
   * OS operating system type. Possible values include: 'None', 'Windows', 'Linux'
   */
  readonly operatingSystem?: string;
  /**
   * SAS key for source blob.
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * Data disk image.
 */
export interface DataDiskImage {
  /**
   * The LUN.
   */
  readonly lun?: number;
  /**
   * SAS key for source blob.
   */
  readonly sourceBlobSasUri?: string;
}

/**
 * Extended description about the product required for installing it into Azure Stack.
 */
export interface ExtendedProduct {
  /**
   * The URI to the .azpkg file that provides information required for showing product in the
   * gallery.
   */
  readonly galleryPackageBlobSasUri?: string;
  /**
   * Specifies the kind of the product (virtualMachine or virtualMachineExtension).
   */
  readonly productKind?: string;
  /**
   * Specifies kind of compute role included in the package. Possible values include: 'None',
   * 'IaaS', 'PaaS'
   */
  readonly computeRole?: string;
  /**
   * Specifies if product is a Virtual Machine Extension.
   */
  readonly isSystemExtension?: boolean;
  /**
   * The URI.
   */
  readonly uri?: string;
  /**
   * Indicates if specified product supports multiple extensions.
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   */
  readonly version?: string;
  /**
   * Specifies operating system used by the product. Possible values include: 'None', 'Windows',
   * 'Linux'
   */
  readonly vmOsType?: string;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   */
  readonly vmScaleSetEnabled?: boolean;
  /**
   * OS disk image used by product.
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * Product information.
 */
export interface VirtualMachineExtensionProductProperties {
  /**
   * Specifies kind of compute role included in the package. Possible values include: 'None',
   * 'IaaS', 'PaaS'
   */
  readonly computeRole?: string;
  /**
   * Specifies if product is a Virtual Machine Extension.
   */
  readonly isSystemExtension?: boolean;
  /**
   * The URI.
   */
  readonly uri?: string;
  /**
   * Indicates if specified product supports multiple extensions.
   */
  readonly supportMultipleExtensions?: boolean;
  /**
   * Specifies product version.
   */
  readonly version?: string;
  /**
   * Specifies operating system used by the product. Possible values include: 'None', 'Windows',
   * 'Linux'
   */
  readonly vmOsType?: string;
  /**
   * Indicates if virtual machine Scale Set is enabled in the specified product.
   */
  readonly vmScaleSetEnabled?: boolean;
}

/**
 * Product information.
 */
export interface VirtualMachineProductProperties {
  /**
   * Specifies product version.
   */
  readonly version?: string;
  /**
   * OS disk image used by product.
   */
  readonly osDiskImage?: OsDiskImage;
  /**
   * List of attached data disks.
   */
  readonly dataDiskImages?: DataDiskImage[];
}

/**
 * Links to product icons.
 */
export interface IconUris {
  /**
   * URI to large icon.
   */
  large?: string;
  /**
   * URI to wide icon.
   */
  wide?: string;
  /**
   * URI to medium icon.
   */
  medium?: string;
  /**
   * URI to small icon.
   */
  small?: string;
  /**
   * URI to hero icon.
   */
  hero?: string;
}

/**
 * Link with additional information about a product.
 */
export interface ProductLink {
  /**
   * The description of the link.
   */
  displayName?: string;
  /**
   * The URI corresponding to the link.
   */
  uri?: string;
}

/**
 * Additional properties of the product
 */
export interface ProductProperties {
  /**
   * The version.
   */
  version?: string;
}

/**
 * Product information.
 */
export interface Product extends Resource {
  /**
   * The display name of the product.
   */
  displayName?: string;
  /**
   * The description of the product.
   */
  description?: string;
  /**
   * The user-friendly name of the product publisher.
   */
  publisherDisplayName?: string;
  /**
   * Publisher identifier.
   */
  publisherIdentifier?: string;
  /**
   * The offer representing the product.
   */
  offer?: string;
  /**
   * The version of the product offer.
   */
  offerVersion?: string;
  /**
   * The product SKU.
   */
  sku?: string;
  /**
   * The part number used for billing purposes.
   */
  billingPartNumber?: string;
  /**
   * The type of the Virtual Machine Extension.
   */
  vmExtensionType?: string;
  /**
   * The identifier of the gallery item corresponding to the product.
   */
  galleryItemIdentity?: string;
  /**
   * Additional links available for this product.
   */
  iconUris?: IconUris;
  /**
   * Additional links available for this product.
   */
  links?: ProductLink[];
  /**
   * The legal terms.
   */
  legalTerms?: string;
  /**
   * The privacy policy.
   */
  privacyPolicy?: string;
  /**
   * The length of product content.
   */
  payloadLength?: number;
  /**
   * The kind of the product (virtualMachine or virtualMachineExtension)
   */
  productKind?: string;
  /**
   * Additional properties for the product.
   */
  productProperties?: ProductProperties;
}

/**
 * Registration information.
 */
export interface Registration extends TrackedResource {
  /**
   * The object identifier associated with the Azure Stack connecting to Azure.
   */
  objectId?: string;
  /**
   * The identifier of the registered Azure Stack.
   */
  cloudId?: string;
  /**
   * Specifies the billing mode for the Azure Stack registration.
   */
  billingModel?: string;
}

/**
 * The resource containing the Azure Stack activation key.
 */
export interface ActivationKeyResult {
  /**
   * Azure Stack activation key.
   */
  activationKey?: string;
}

/**
 * Registration resource
 */
export interface RegistrationParameter {
  /**
   * The token identifying registered Azure Stack
   */
  registrationToken: string;
  /**
   * Location of the resource. Possible values include: 'global'
   */
  location?: string;
}

/**
 * Customer subscription.
 */
export interface CustomerSubscription extends Resource {
  /**
   * Tenant Id.
   */
  tenantId?: string;
}

/**
 * List of Operations
 */
export interface OperationList extends Array<Operation> {
  /**
   * URI to the next page of operations.
   */
  nextLink?: string;
}

/**
 * Pageable list of products.
 */
export interface ProductList extends Array<Product> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

/**
 * Pageable list of registrations.
 */
export interface RegistrationList extends Array<Registration> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

/**
 * Pageable list of customer subscriptions.
 */
export interface CustomerSubscriptionList extends Array<CustomerSubscription> {
  /**
   * URI to the next page.
   */
  nextLink?: string;
}

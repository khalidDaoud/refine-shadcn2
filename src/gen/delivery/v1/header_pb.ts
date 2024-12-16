// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=.js"
// @generated from file delivery/v1/header.proto (package delivery, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../google/api/field_behavior_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file delivery/v1/header.proto.
 */
export const file_delivery_v1_header: GenFile = /*@__PURE__*/
  fileDesc("ChhkZWxpdmVyeS92MS9oZWFkZXIucHJvdG8SCGRlbGl2ZXJ5IogEChVEZWxpdmVyeVJlcXVlc3RIZWFkZXISFQoNbGFuZ3VhZ2VfY29kZRgBIAEoCRIYCgtyZWdpb25fY29kZRgCIAEoCUID4EECEhMKC3Nka192ZXJzaW9uGAMgASgJEhIKCm9zX3ZlcnNpb24YBCABKAkSFAoMZGV2aWNlX21vZGVsGAUgASgJEjkKCHNka190eXBlGAYgASgOMicuZGVsaXZlcnkuRGVsaXZlcnlSZXF1ZXN0SGVhZGVyLlNka1R5cGUSGAoQbWFwc19zZGtfdmVyc2lvbhgHIAEoCRIXCg9uYXZfc2RrX3ZlcnNpb24YCCABKAkSOgoIcGxhdGZvcm0YCSABKA4yKC5kZWxpdmVyeS5EZWxpdmVyeVJlcXVlc3RIZWFkZXIuUGxhdGZvcm0SFAoMbWFudWZhY3R1cmVyGAogASgJEhkKEWFuZHJvaWRfYXBpX2xldmVsGAsgASgFEhAKCHRyYWNlX2lkGAwgASgJIk0KB1Nka1R5cGUSGAoUU0RLX1RZUEVfVU5TUEVDSUZJRUQQABIMCghDT05TVU1FUhABEgoKBkRSSVZFUhACEg4KCkpBVkFTQ1JJUFQQAyJDCghQbGF0Zm9ybRIYChRQTEFURk9STV9VTlNQRUNJRklFRBAAEgsKB0FORFJPSUQQARIHCgNJT1MQAhIHCgNXRUIQA0KYAQoMY29tLmRlbGl2ZXJ5QgtIZWFkZXJQcm90b1ABWjtnaXRodWIuY29tL3NtYXJ0Zml5L2xvZ2l0ZWNoL3BrZy9kZWxpdmVyeS9hcGkvdjE7ZGVsaXZlcnlwYqICA0RYWKoCCERlbGl2ZXJ5ygIIRGVsaXZlcnniAhREZWxpdmVyeVxHUEJNZXRhZGF0YeoCCERlbGl2ZXJ5YgZwcm90bzM", [file_google_api_field_behavior]);

/**
 * A RequestHeader contains fields common to all Delivery RPC requests.
 *
 * @generated from message delivery.DeliveryRequestHeader
 */
export type DeliveryRequestHeader = Message<"delivery.DeliveryRequestHeader"> & {
  /**
   * The BCP-47 language code, such as en-US or sr-Latn. For more information,
   * see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If none
   * is specified, the response may be in any language, with a preference for
   * English if such a name exists. Field value example: `en-US`.
   *
   * @generated from field: string language_code = 1;
   */
  languageCode: string;

  /**
   * Required. CLDR region code of the region where the request originates.
   * Field value example: `US`.
   *
   * @generated from field: string region_code = 2;
   */
  regionCode: string;

  /**
   * Version of the calling SDK, if applicable.
   * The version format is "major.minor.patch", example: `1.1.2`.
   *
   * @generated from field: string sdk_version = 3;
   */
  sdkVersion: string;

  /**
   * Version of the operating system on which the calling SDK is running.
   * Field value examples: `4.4.1`, `12.1`.
   *
   * @generated from field: string os_version = 4;
   */
  osVersion: string;

  /**
   * Model of the device on which the calling SDK is running.
   * Field value examples: `iPhone12,1`, `SM-G920F`.
   *
   * @generated from field: string device_model = 5;
   */
  deviceModel: string;

  /**
   * The type of SDK sending the request.
   *
   * @generated from field: delivery.DeliveryRequestHeader.SdkType sdk_type = 6;
   */
  sdkType: DeliveryRequestHeader_SdkType;

  /**
   * Version of the MapSDK which the calling SDK depends on, if applicable.
   * The version format is "major.minor.patch", example: `5.2.1`.
   *
   * @generated from field: string maps_sdk_version = 7;
   */
  mapsSdkVersion: string;

  /**
   * Version of the NavSDK which the calling SDK depends on, if applicable.
   * The version format is "major.minor.patch", example: `2.1.0`.
   *
   * @generated from field: string nav_sdk_version = 8;
   */
  navSdkVersion: string;

  /**
   * Platform of the calling SDK.
   *
   * @generated from field: delivery.DeliveryRequestHeader.Platform platform = 9;
   */
  platform: DeliveryRequestHeader_Platform;

  /**
   * Manufacturer of the Android device from the calling SDK, only applicable
   * for the Android SDKs.
   * Field value example: `Samsung`.
   *
   * @generated from field: string manufacturer = 10;
   */
  manufacturer: string;

  /**
   * Android API level of the calling SDK, only applicable for the Android SDKs.
   * Field value example: `23`.
   *
   * @generated from field: int32 android_api_level = 11;
   */
  androidApiLevel: number;

  /**
   * Optional ID that can be provided for logging purposes in order to identify
   * the request.
   *
   * @generated from field: string trace_id = 12;
   */
  traceId: string;
};

/**
 * Describes the message delivery.DeliveryRequestHeader.
 * Use `create(DeliveryRequestHeaderSchema)` to create a new message.
 */
export const DeliveryRequestHeaderSchema: GenMessage<DeliveryRequestHeader> = /*@__PURE__*/
  messageDesc(file_delivery_v1_header, 0);

/**
 * Possible types of SDK.
 *
 * @generated from enum delivery.DeliveryRequestHeader.SdkType
 */
export enum DeliveryRequestHeader_SdkType {
  /**
   * The default value. This value is used if the `sdk_type` is omitted.
   *
   * @generated from enum value: SDK_TYPE_UNSPECIFIED = 0;
   */
  SDK_TYPE_UNSPECIFIED = 0,

  /**
   * The calling SDK is Consumer.
   *
   * @generated from enum value: CONSUMER = 1;
   */
  CONSUMER = 1,

  /**
   * The calling SDK is Driver.
   *
   * @generated from enum value: DRIVER = 2;
   */
  DRIVER = 2,

  /**
   * The calling SDK is JavaScript.
   *
   * @generated from enum value: JAVASCRIPT = 3;
   */
  JAVASCRIPT = 3,
}

/**
 * Describes the enum delivery.DeliveryRequestHeader.SdkType.
 */
export const DeliveryRequestHeader_SdkTypeSchema: GenEnum<DeliveryRequestHeader_SdkType> = /*@__PURE__*/
  enumDesc(file_delivery_v1_header, 0, 0);

/**
 * The platform of the calling SDK.
 *
 * @generated from enum delivery.DeliveryRequestHeader.Platform
 */
export enum DeliveryRequestHeader_Platform {
  /**
   * The default value. This value is used if the platform is omitted.
   *
   * @generated from enum value: PLATFORM_UNSPECIFIED = 0;
   */
  PLATFORM_UNSPECIFIED = 0,

  /**
   * The request is coming from Android.
   *
   * @generated from enum value: ANDROID = 1;
   */
  ANDROID = 1,

  /**
   * The request is coming from iOS.
   *
   * @generated from enum value: IOS = 2;
   */
  IOS = 2,

  /**
   * The request is coming from the web.
   *
   * @generated from enum value: WEB = 3;
   */
  WEB = 3,
}

/**
 * Describes the enum delivery.DeliveryRequestHeader.Platform.
 */
export const DeliveryRequestHeader_PlatformSchema: GenEnum<DeliveryRequestHeader_Platform> = /*@__PURE__*/
  enumDesc(file_delivery_v1_header, 0, 1);


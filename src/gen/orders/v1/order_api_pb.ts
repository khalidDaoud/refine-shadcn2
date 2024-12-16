// Copyright 2024 Smartfiy
//
// The Last Mile Delivery service.

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=.js"
// @generated from file orders/v1/order_api.proto (package orders.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../google/api/annotations_pb.js";
import { file_google_api_client } from "../../google/api/client_pb.js";
import { file_google_api_field_behavior } from "../../google/api/field_behavior_pb.js";
import { file_google_api_resource } from "../../google/api/resource_pb.js";
import { file_google_api_routing } from "../../google/api/routing_pb.js";
import type { Viewport } from "../../google/geo/type/viewport_pb.js";
import { file_google_geo_type_viewport } from "../../google/geo/type/viewport_pb.js";
import type { FieldMask } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_field_mask } from "@bufbuild/protobuf/wkt";
import type { DeliveryParcel, DeliveryParcelSchema } from "./parcel_pb.js";
import { file_orders_v1_parcel } from "./parcel_pb.js";
import type { Order, OrderSchema } from "./order_pb.js";
import { file_orders_v1_order } from "./order_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file orders/v1/order_api.proto.
 */
export const file_orders_v1_order_api: GenFile = /*@__PURE__*/
  fileDesc("ChlvcmRlcnMvdjEvb3JkZXJfYXBpLnByb3RvEglvcmRlcnMudjEijAEKG0NyZWF0ZURlbGl2ZXJ5UGFyY2VsUmVxdWVzdBITCgZwYXJlbnQYASABKAlCA+BBAhIfChJkZWxpdmVyeV9wYXJjZWxfaWQYAiABKAlCA+BBAhI3Cg9kZWxpdmVyeV9wYXJjZWwYAyABKAsyGS5vcmRlcnMudjEuRGVsaXZlcnlQYXJjZWxCA+BBAiJ+ChhHZXREZWxpdmVyeVBhcmNlbFJlcXVlc3QSQQoGcGFyZW50GAEgASgJQjHgQQL6QSsSKWZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL0RlbGl2ZXJ5UGFyY2VsEh8KEmRlbGl2ZXJ5X3BhcmNlbF9pZBgCIAEoCUID4EECItcBChpMaXN0RGVsaXZlcnlQYXJjZWxzUmVxdWVzdBJBCgZwYXJlbnQYAyABKAlCMeBBAvpBKxIpZmxlZXRlbmdpbmUuZ29vZ2xlYXBpcy5jb20vRGVsaXZlcnlQYXJjZWwSFgoJcGFnZV9zaXplGAQgASgFQgPgQQESFwoKcGFnZV90b2tlbhgFIAEoCUID4EEBEhMKBmZpbHRlchgGIAEoCUID4EEBEjAKCHZpZXdwb3J0GAcgASgLMhkuZ29vZ2xlLmdlby50eXBlLlZpZXdwb3J0QgPgQQEijgEKG0xpc3REZWxpdmVyeVBhcmNlbHNSZXNwb25zZRI4ChBkZWxpdmVyeV9wYXJjZWxzGAEgAygLMhkub3JkZXJzLnYxLkRlbGl2ZXJ5UGFyY2VsQgPgQQESHAoPbmV4dF9wYWdlX3Rva2VuGAIgASgJQgPgQQESFwoKdG90YWxfc2l6ZRgDIAEoA0ID4EEBIucBChtVcGRhdGVEZWxpdmVyeVBhcmNlbFJlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSISIGZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL09yZGVyEh8KEmRlbGl2ZXJ5X3BhcmNlbF9pZBgCIAEoCUID4EECEjcKD2RlbGl2ZXJ5X3BhcmNlbBgDIAEoCzIZLm9yZGVycy52MS5EZWxpdmVyeVBhcmNlbEID4EECEjQKC3VwZGF0ZV9tYXNrGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLkZpZWxkTWFza0ID4EEBIpYBCiFCYXRjaENyZWF0ZURlbGl2ZXJ5UGFyY2Vsc1JlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSISIGZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL09yZGVyEjcKD2RlbGl2ZXJ5X3BhcmNlbBgCIAMoCzIZLm9yZGVycy52MS5EZWxpdmVyeVBhcmNlbEID4EECIlgKIkJhdGNoQ3JlYXRlRGVsaXZlcnlQYXJjZWxzUmVzcG9uc2USMgoPZGVsaXZlcnlfcGFyY2VsGAIgAygLMhkub3JkZXJzLnYxLkRlbGl2ZXJ5UGFyY2VsImYKEkNyZWF0ZU9yZGVyUmVxdWVzdBITCgZwYXJlbnQYASABKAlCA+BBAhIVCghPcmRlcl9pZBgCIAEoCUID4EECEiQKBU9yZGVyGAMgASgLMhAub3JkZXJzLnYxLk9yZGVyQgPgQQIiqQEKD0dldE9yZGVyUmVxdWVzdBI4CgZwYXJlbnQYASABKAlCKOBBAvpBIgogZmxlZXRlbmdpbmUuZ29vZ2xlYXBpcy5jb20vT3JkZXISFQoIT3JkZXJfaWQYAiABKAlCA+BBAhITCgZmaWx0ZXIYAyABKAlCA+BBARIwCgh2aWV3cG9ydBgEIAEoCzIZLmdvb2dsZS5nZW8udHlwZS5WaWV3cG9ydEID4EEBIsEBChJVcGRhdGVPcmRlclJlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSISIGZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL09yZGVyEhUKCE9yZGVyX2lkGAIgASgJQgPgQQISJAoFT3JkZXIYAyABKAsyEC5vcmRlcnMudjEuT3JkZXJCA+BBAhI0Cgt1cGRhdGVfbWFzaxgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5GaWVsZE1hc2tCA+BBAiKTAQoRTGlzdE9yZGVyc1JlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSISIGZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL09yZGVyEhYKCXBhZ2Vfc2l6ZRgCIAEoBUID4EEBEhcKCnBhZ2VfdG9rZW4YAyABKAlCA+BBARITCgZmaWx0ZXIYBCABKAlCA+BBASJjChJMaXN0T3JkZXJzUmVzcG9uc2USIAoGT3JkZXJzGAEgAygLMhAub3JkZXJzLnYxLk9yZGVyEhcKD25leHRfcGFnZV90b2tlbhgCIAEoCRISCgp0b3RhbF9zaXplGAMgASgDIooBChhCYXRjaENyZWF0ZU9yZGVyc1JlcXVlc3QSOAoGcGFyZW50GAEgASgJQijgQQL6QSISIGZsZWV0ZW5naW5lLmdvb2dsZWFwaXMuY29tL09yZGVyEjQKCHJlcXVlc3RzGAIgAygLMh0ub3JkZXJzLnYxLkNyZWF0ZU9yZGVyUmVxdWVzdEID4EECIj0KGUJhdGNoQ3JlYXRlT3JkZXJzUmVzcG9uc2USIAoGT3JkZXJzGAEgAygLMhAub3JkZXJzLnYxLk9yZGVyMtASCg1PcmRlcnNTZXJ2aWNlEvQBChRDcmVhdGVEZWxpdmVyeVBhcmNlbBImLm9yZGVycy52MS5DcmVhdGVEZWxpdmVyeVBhcmNlbFJlcXVlc3QaGS5vcmRlcnMudjEuRGVsaXZlcnlQYXJjZWwimAHaQSlwYXJlbnQsZGVsaXZlcnlfcGFyY2VsLGRlbGl2ZXJ5X3BhcmNlbF9pZILT5JMCOzoPZGVsaXZlcnlfcGFyY2VsIigvdjEve3BhcmVudD1wcm92aWRlcnMvKn0vRGVsaXZlcnlQYXJjZWxzitPkkwIlEiMKBnBhcmVudBIZe3Byb3ZpZGVyX2lkPXByb3ZpZGVycy8qfRLPAQoRR2V0RGVsaXZlcnlQYXJjZWwSIy5vcmRlcnMudjEuR2V0RGVsaXZlcnlQYXJjZWxSZXF1ZXN0Ghkub3JkZXJzLnYxLkRlbGl2ZXJ5UGFyY2VsInraQRpwYXJlbnQsIGRlbGl2ZXJ5X3BhcmNlbF9pZILT5JMCLBIqL3YxL3twYXJlbnQ9cHJvdmlkZXJzLyovRGVsaXZlcnlQYXJjZWxzLyp9itPkkwIlEiMKBnBhcmVudBIZe3Byb3ZpZGVyX2lkPXByb3ZpZGVycy8qfRL4AQoUVXBkYXRlRGVsaXZlcnlQYXJjZWwSJi5vcmRlcnMudjEuVXBkYXRlRGVsaXZlcnlQYXJjZWxSZXF1ZXN0Ghkub3JkZXJzLnYxLkRlbGl2ZXJ5UGFyY2VsIpwB2kErcGFyZW50LCBkZWxpdmVyeV9wYXJjZWxfaWQsIGRlbGl2ZXJ5X3BhcmNlbILT5JMCPToPZGVsaXZlcnlfcGFyY2VsMiovdjEve3BhcmVudD1wcm92aWRlcnMvKi9EZWxpdmVyeVBhcmNlbHMvKn2K0+STAiUSIwoGcGFyZW50Ehl7cHJvdmlkZXJfaWQ9cHJvdmlkZXJzLyp9EsoBChNMaXN0RGVsaXZlcnlQYXJjZWxzEiUub3JkZXJzLnYxLkxpc3REZWxpdmVyeVBhcmNlbHNSZXF1ZXN0GiYub3JkZXJzLnYxLkxpc3REZWxpdmVyeVBhcmNlbHNSZXNwb25zZSJk2kEGcGFyZW50gtPkkwIqEigvdjEve3BhcmVudD1wcm92aWRlcnMvKn0vRGVsaXZlcnlQYXJjZWxzitPkkwIlEiMKBnBhcmVudBIZe3Byb3ZpZGVyX2lkPXByb3ZpZGVycy8qfRLlAQoaQmF0Y2hDcmVhdGVEZWxpdmVyeVBhcmNlbHMSLC5vcmRlcnMudjEuQmF0Y2hDcmVhdGVEZWxpdmVyeVBhcmNlbHNSZXF1ZXN0Gi0ub3JkZXJzLnYxLkJhdGNoQ3JlYXRlRGVsaXZlcnlQYXJjZWxzUmVzcG9uc2UiaoLT5JMCOToBKiI0L3YxL3twYXJlbnQ9cHJvdmlkZXJzLyp9L0RlbGl2ZXJ5UGFyY2VsczpiYXRjaENyZWF0ZYrT5JMCJRIjCgZwYXJlbnQSGXtwcm92aWRlcl9pZD1wcm92aWRlcnMvKn0S9wEKG0JhdGNoR2V0UGFyY2Vsc0RlbGl2ZXJ5UXVvdBIjLm9yZGVycy52MS5CYXRjaENyZWF0ZU9yZGVyc1JlcXVlc3QaLS5vcmRlcnMudjEuQmF0Y2hDcmVhdGVEZWxpdmVyeVBhcmNlbHNSZXNwb25zZSKDAdpBBnBhcmVudILT5JMCSToBKiJEL3YxL3twYXJlbnQ9cHJvdmlkZXJzLyp9L0RlbGl2ZXJ5UGFyY2VsczpCYXRjaEdldFBhcmNlbHNEZWxpdmVyeVF1b3SK0+STAiUSIwoGcGFyZW50Ehl7cHJvdmlkZXJfaWQ9cHJvdmlkZXJzLyp9ErEBCgtDcmVhdGVPcmRlchIdLm9yZGVycy52MS5DcmVhdGVPcmRlclJlcXVlc3QaEC5vcmRlcnMudjEuT3JkZXIicdpBFXBhcmVudCxPcmRlcixPcmRlcl9pZILT5JMCKDoFT3JkZXIiHy92MS97cGFyZW50PXByb3ZpZGVycy8qfS9PcmRlcnOK0+STAiUSIwoGcGFyZW50Ehl7cHJvdmlkZXJfaWQ9cHJvdmlkZXJzLyp9EqABCghHZXRPcmRlchIaLm9yZGVycy52MS5HZXRPcmRlclJlcXVlc3QaEC5vcmRlcnMudjEuT3JkZXIiZtpBD3BhcmVudCxPcmRlcl9pZILT5JMCIxIhL3YxL3twYXJlbnQ9cHJvdmlkZXJzLyovT3JkZXJzLyp9itPkkwIlEiMKBnBhcmVudBIZe3Byb3ZpZGVyX2lkPXByb3ZpZGVycy8qfRKtAQoLVXBkYXRlT3JkZXISHS5vcmRlcnMudjEuVXBkYXRlT3JkZXJSZXF1ZXN0GhAub3JkZXJzLnYxLk9yZGVyIm3aQQ9PcmRlciwgT3JkZXJfaWSC0+STAio6BU9yZGVyMiEvdjEve3BhcmVudD1wcm92aWRlcnMvKi9PcmRlcnMvKn2K0+STAiUSIwoGcGFyZW50Ehl7cHJvdmlkZXJfaWQ9cHJvdmlkZXJzLyp9EqYBCgpMaXN0T3JkZXJzEhwub3JkZXJzLnYxLkxpc3RPcmRlcnNSZXF1ZXN0Gh0ub3JkZXJzLnYxLkxpc3RPcmRlcnNSZXNwb25zZSJb2kEGcGFyZW50gtPkkwIhEh8vdjEve3BhcmVudD1wcm92aWRlcnMvKn0vT3JkZXJzitPkkwIlEiMKBnBhcmVudBIZe3Byb3ZpZGVyX2lkPXByb3ZpZGVycy8qfRLKAQoRQmF0Y2hDcmVhdGVPcmRlcnMSIy5vcmRlcnMudjEuQmF0Y2hDcmVhdGVPcmRlcnNSZXF1ZXN0GiQub3JkZXJzLnYxLkJhdGNoQ3JlYXRlT3JkZXJzUmVzcG9uc2UiatpBBnBhcmVudILT5JMCMDoBKiIrL3YxL3twYXJlbnQ9cHJvdmlkZXJzLyp9L09yZGVyczpiYXRjaENyZWF0ZYrT5JMCJRIjCgZwYXJlbnQSGXtwcm92aWRlcl9pZD1wcm92aWRlcnMvKn0aT8pBHmRlbGl2ZXJ5LmxvZ2l0ZWNoLnNtYXJ0Zml5LmNvbdJBK2h0dHBzOi8vZGVsaXZlcnkubG9naXRlY2guc21hcnRmaXkuY29tL2F1dGhC0wEKDWNvbS5vcmRlcnMudjFCDU9yZGVyQXBpUHJvdG9QAVo2Z2l0aHViLmNvbS9zbWFydGZpeS9sb2dpdGVjaC9wa2cvb3JkZXJzL2FwaS92MTtvcmRlcnBiogIDT1hYqgIJT3JkZXJzLlYxygIJT3JkZXJzXFYx4gIVT3JkZXJzXFYxXEdQQk1ldGFkYXRh6gIKT3JkZXJzOjpWMepBNQodbG9naXRlY2guc21hcnRmaXkuY29tL1Byb3ZpZGUSFHByb3ZpZGVycy97cHJvdmlkZXJ9YgZwcm90bzM", [file_google_api_annotations, file_google_api_client, file_google_api_field_behavior, file_google_api_resource, file_google_api_routing, file_google_geo_type_viewport, file_google_protobuf_field_mask, file_orders_v1_parcel, file_orders_v1_order]);

/**
 * The `CreateDeliveryParcel` request message.
 *
 * @generated from message orders.v1.CreateDeliveryParcelRequest
 */
export type CreateDeliveryParcelRequest = Message<"orders.v1.CreateDeliveryParcelRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`. The provider must
   * be the  Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The delivery_parcel_id must be unique and subject to the
   * following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string delivery_parcel_id = 2;
   */
  deliveryParcelId: string;

  /**
   * Required. The `DeliveryParcel` entity to create. When creating a new
   * delivery vehicle.
   *
   * @generated from field: orders.v1.DeliveryParcel delivery_parcel = 3;
   */
  deliveryParcel?: DeliveryParcel;
};

/**
 * Describes the message orders.v1.CreateDeliveryParcelRequest.
 * Use `create(CreateDeliveryParcelRequestSchema)` to create a new message.
 */
export const CreateDeliveryParcelRequestSchema: GenMessage<CreateDeliveryParcelRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 0);

/**
 * The `GetDeliveryParcel` request message.
 *
 * @generated from message orders.v1.GetDeliveryParcelRequest
 */
export type GetDeliveryParcelRequest = Message<"orders.v1.GetDeliveryParcelRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`.
   * The `provider` must be the  Project ID.
   * For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The delivery_parcel_id must be unique and subject to the
   * following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string delivery_parcel_id = 2;
   */
  deliveryParcelId: string;
};

/**
 * Describes the message orders.v1.GetDeliveryParcelRequest.
 * Use `create(GetDeliveryParcelRequestSchema)` to create a new message.
 */
export const GetDeliveryParcelRequestSchema: GenMessage<GetDeliveryParcelRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 1);

/**
 * The `ListDeliveryParcels` request message.
 *
 * @generated from message orders.v1.ListDeliveryParcelsRequest
 */
export type ListDeliveryParcelsRequest = Message<"orders.v1.ListDeliveryParcelsRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`.
   * The `provider` must be the  Project ID.
   * For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 3;
   */
  parent: string;

  /**
   * Optional. The maximum number of vehicles to return. The service may return
   * fewer than this number. If you don't specify this number, then the server
   * determines the number of results to return.
   *
   * @generated from field: int32 page_size = 4;
   */
  pageSize: number;

  /**
   * Optional. A page token, received from a previous `ListDeliveryParcels`
   * call. You must provide this in order to retrieve the subsequent page.
   * 
   * When paginating, all other parameters provided to `ListDeliveryParcels`
   * must match the call that provided the page token.
   *
   * @generated from field: string page_token = 5;
   */
  pageToken: string;

  /**
   * Optional. A filter query to apply when listing delivery Parcels. See
   * http://aip.dev/160 for examples of the filter syntax. If you don't specify
   * a value, or if you specify an empty string for the filter, then all
   * delivery Parcels are returned.
   * 
   * Note that the only queries supported for `ListDeliveryParcels` are
   * on parcel attributes (for example, `attributes.<key> = <value>` or
   * `attributes.<key1> = <value1> AND attributes.<key2> = <value2>`). Also, all
   * attributes are stored as strings, so the only supported comparisons against
   * attributes are string comparisons. In order to compare against number or
   * boolean values, the values must be explicitly quoted to be treated as
   * strings (for example, `attributes.<key> = "10"` or
   * `attributes.<key> = "true"`).
   * 
   * The maximum number of restrictions allowed in a filter query is 50. A
   * restriction is a part of the query of the form
   * `attribute.<KEY> <COMPARATOR> <VALUE>`, for example `attributes.foo = bar`
   * is 1 restriction.
   *
   * @generated from field: string filter = 6;
   */
  filter: string;

  /**
   * Optional. A filter that limits the vehicles returned to those whose last
   * known location was in the rectangular area defined by the viewport.
   *
   * @generated from field: google.geo.type.Viewport viewport = 7;
   */
  viewport?: Viewport;
};

/**
 * Describes the message orders.v1.ListDeliveryParcelsRequest.
 * Use `create(ListDeliveryParcelsRequestSchema)` to create a new message.
 */
export const ListDeliveryParcelsRequestSchema: GenMessage<ListDeliveryParcelsRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 2);

/**
 * The `ListDeliveryParcels` response message.
 *
 * @generated from message orders.v1.ListDeliveryParcelsResponse
 */
export type ListDeliveryParcelsResponse = Message<"orders.v1.ListDeliveryParcelsResponse"> & {
  /**
   * The set of delivery Parcels that meet the requested filtering criteria.
   * When no filter is specified, the request returns all delivery Parcels. A
   * successful response can also be empty. An empty response indicates that no
   * delivery Parcels were found meeting the requested filter criteria.
   *
   * @generated from field: repeated orders.v1.DeliveryParcel delivery_parcels = 1;
   */
  deliveryParcels: DeliveryParcel[];

  /**
   * You can pass this token in the `ListDeliveryParcelsRequest` to continue to
   * list results. When all of the results are returned, this field won't be in
   * the response, or it will be an empty string.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of delivery Parcels that match the request criteria,
   * across all pages.
   *
   * @generated from field: int64 total_size = 3;
   */
  totalSize: bigint;
};

/**
 * Describes the message orders.v1.ListDeliveryParcelsResponse.
 * Use `create(ListDeliveryParcelsResponseSchema)` to create a new message.
 */
export const ListDeliveryParcelsResponseSchema: GenMessage<ListDeliveryParcelsResponse> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 3);

/**
 * The `UpdateDeliveryParcel` request message.
 *
 * @generated from message orders.v1.UpdateDeliveryParcelRequest
 */
export type UpdateDeliveryParcelRequest = Message<"orders.v1.UpdateDeliveryParcelRequest"> & {
  /**
   * Required. The parent resource shared by all Orders. This value must be in
   * the format `providers/{provider}`. The `provider` must be the 
   * Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The delivery_parcel_id must be unique and subject to the
   * following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string delivery_parcel_id = 2;
   */
  deliveryParcelId: string;

  /**
   * Required. The `DeliveryParcel` entity update to apply.
   * Note: You cannot update the name of the `DeliveryParcel`.
   *
   * @generated from field: orders.v1.DeliveryParcel delivery_parcel = 3;
   */
  deliveryParcel?: DeliveryParcel;

  /**
   * Required. A field mask that indicates which `DeliveryParcel` fields to
   * update. Note that the update_mask must contain at least one field.
   * 
   * This is a comma-separated list of fully qualified names of fields. Example:
   * `"remaining_parcel_journey_segments"`.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message orders.v1.UpdateDeliveryParcelRequest.
 * Use `create(UpdateDeliveryParcelRequestSchema)` to create a new message.
 */
export const UpdateDeliveryParcelRequestSchema: GenMessage<UpdateDeliveryParcelRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 4);

/**
 * The `BatchCreateDeliveryParcelsRequest` request message.
 *
 * @generated from message orders.v1.BatchCreateDeliveryParcelsRequest
 */
export type BatchCreateDeliveryParcelsRequest = Message<"orders.v1.BatchCreateDeliveryParcelsRequest"> & {
  /**
   * Required. The parent resource shared by all Orders. This value must be in
   * the format `providers/{provider}`. The `provider` must be the 
   * Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The request message that specifies the resources to create.
   * Note: You can create a maximum of 500 DeliveryParcel in a batch.
   *
   * @generated from field: repeated orders.v1.DeliveryParcel delivery_parcel = 2;
   */
  deliveryParcel: DeliveryParcel[];
};

/**
 * Describes the message orders.v1.BatchCreateDeliveryParcelsRequest.
 * Use `create(BatchCreateDeliveryParcelsRequestSchema)` to create a new message.
 */
export const BatchCreateDeliveryParcelsRequestSchema: GenMessage<BatchCreateDeliveryParcelsRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 5);

/**
 * The `BatchCreateParcelsRequest` response message.
 *
 * @generated from message orders.v1.BatchCreateDeliveryParcelsResponse
 */
export type BatchCreateDeliveryParcelsResponse = Message<"orders.v1.BatchCreateDeliveryParcelsResponse"> & {
  /**
   * The created BatchCreateDeliveryParcels.
   *
   * @generated from field: repeated orders.v1.DeliveryParcel delivery_parcel = 2;
   */
  deliveryParcel: DeliveryParcel[];
};

/**
 * Describes the message orders.v1.BatchCreateDeliveryParcelsResponse.
 * Use `create(BatchCreateDeliveryParcelsResponseSchema)` to create a new message.
 */
export const BatchCreateDeliveryParcelsResponseSchema: GenMessage<BatchCreateDeliveryParcelsResponse> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 6);

/**
 * The `CreateOrder` request message.
 *
 * @generated from message orders.v1.CreateOrderRequest
 */
export type CreateOrderRequest = Message<"orders.v1.CreateOrderRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`. The `provider` must
   * be the  Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The Order ID must be unique, but it should be not a shipment
   * tracking ID. To store a shipment tracking ID, use the `tracking_id` field.
   * Note that multiple Orders can have the same `tracking_id`. Order IDs are
   * subject to the following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string Order_id = 2;
   */
  OrderId: string;

  /**
   * @generated from field: orders.v1.Order Order = 3;
   */
  Order?: Order;
};

/**
 * Describes the message orders.v1.CreateOrderRequest.
 * Use `create(CreateOrderRequestSchema)` to create a new message.
 */
export const CreateOrderRequestSchema: GenMessage<CreateOrderRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 7);

/**
 * The `GetOrder` request message.
 *
 * @generated from message orders.v1.GetOrderRequest
 */
export type GetOrderRequest = Message<"orders.v1.GetOrderRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`. The `provider` must
   * be the  Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The Order ID must be unique, but it should be not a shipment
   * tracking ID. To store a shipment tracking ID, use the `tracking_id` field.
   * Note that multiple Orders can have the same `tracking_id`. Order IDs are
   * subject to the following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string Order_id = 2;
   */
  OrderId: string;

  /**
   * The maximum number of restrictions allowed in a filter query is 50. A
   * restriction is a part of the query of the form
   * `attribute.<KEY> <COMPARATOR> <VALUE>`, for example `attributes.foo = bar`
   * is 1 restriction.
   *
   * @generated from field: string filter = 3;
   */
  filter: string;

  /**
   * Optional. A filter that limits the vehicles returned to those whose last
   * known location was in the rectangular area defined by the viewport.
   *
   * @generated from field: google.geo.type.Viewport viewport = 4;
   */
  viewport?: Viewport;
};

/**
 * Describes the message orders.v1.GetOrderRequest.
 * Use `create(GetOrderRequestSchema)` to create a new message.
 */
export const GetOrderRequestSchema: GenMessage<GetOrderRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 8);

/**
 * The `UpdateOrder` request message.
 *
 * @generated from message orders.v1.UpdateOrderRequest
 */
export type UpdateOrderRequest = Message<"orders.v1.UpdateOrderRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`.
   * The `provider` must be the  Project ID. For example,
   * `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The Order ID must be unique, but it should be not a shipment
   * tracking ID. To store a shipment tracking ID, use the `tracking_id` field.
   * Note that multiple Orders can have the same `tracking_id`. Order IDs are
   * subject to the following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string Order_id = 2;
   */
  OrderId: string;

  /**
   * @generated from field: orders.v1.Order Order = 3;
   */
  Order?: Order;

  /**
   * Required. The field mask that indicates which Order fields to update.
   * Note: The `update_mask` must contain at least one field.
   * 
   * This is a comma-separated list of fully qualified names of fields. Example:
   * `"Order_outcome,Order_outcome_time,Order_outcome_location"`.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 4;
   */
  updateMask?: FieldMask;
};

/**
 * Describes the message orders.v1.UpdateOrderRequest.
 * Use `create(UpdateOrderRequestSchema)` to create a new message.
 */
export const UpdateOrderRequestSchema: GenMessage<UpdateOrderRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 9);

/**
 * The `ListOrders` request message.
 *
 * @generated from message orders.v1.ListOrdersRequest
 */
export type ListOrdersRequest = Message<"orders.v1.ListOrdersRequest"> & {
  /**
   * Required. Must be in the format `providers/{provider}`.
   * The `provider` must be the  Project ID. For example,
   * `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Optional. The maximum number of Orders to return. The service may return
   * fewer than this value. If you don't specify this value, then the server
   * determines the number of results to return.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. A page token received from a previous `ListOrders` call.
   * You can provide this to retrieve the subsequent page.
   * 
   * When paginating, all other parameters provided to `ListOrders` must match
   * the call that provided the page token.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. A filter query to apply when listing Orders. See
   * http://aip.dev/160 for examples of filter syntax. If you don't specify a
   * value, or if you filter on an empty string, then all Orders are returned.
   * For information about the Order properties that you can filter on, see [List
   * Orders](https://developers.google.com/maps/documentation/mobility/fleet-engine/journeys/Orders/find-Orders#filter_listed_Orders).
   *
   * @generated from field: string filter = 4;
   */
  filter: string;
};

/**
 * Describes the message orders.v1.ListOrdersRequest.
 * Use `create(ListOrdersRequestSchema)` to create a new message.
 */
export const ListOrdersRequestSchema: GenMessage<ListOrdersRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 10);

/**
 * @generated from message orders.v1.ListOrdersResponse
 */
export type ListOrdersResponse = Message<"orders.v1.ListOrdersResponse"> & {
  /**
   * The set of Orders that meet the requested filtering criteria. When no filter
   * is specified, the request returns all Orders. A successful response can also
   * be empty. An empty response indicates that no Orders were found meeting the
   * requested filter criteria.
   *
   * @generated from field: repeated orders.v1.Order Orders = 1;
   */
  Orders: Order[];

  /**
   * Pass this token in the `ListOrdersRequest` to continue to list results.
   * If all results have been returned, then this field is either an empty
   * string, or it doesn't appear in the response.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken: string;

  /**
   * The total number of Orders that match the request criteria, across all
   * pages.
   *
   * @generated from field: int64 total_size = 3;
   */
  totalSize: bigint;
};

/**
 * Describes the message orders.v1.ListOrdersResponse.
 * Use `create(ListOrdersResponseSchema)` to create a new message.
 */
export const ListOrdersResponseSchema: GenMessage<ListOrdersResponse> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 11);

/**
 * The `BatchCreateOrder` request message.
 *
 * @generated from message orders.v1.BatchCreateOrdersRequest
 */
export type BatchCreateOrdersRequest = Message<"orders.v1.BatchCreateOrdersRequest"> & {
  /**
   * Required. The parent resource shared by all Orders. This value must be in
   * the format `providers/{provider}`. The `provider` must be the 
   * Project ID. For example, `sample-cloud-project`.
   *
   * @generated from field: string parent = 1;
   */
  parent: string;

  /**
   * Required. The request message that specifies the resources to create.
   * Note: You can create a maximum of 500 Orders in a batch.
   *
   * @generated from field: repeated orders.v1.CreateOrderRequest requests = 2;
   */
  requests: CreateOrderRequest[];
};

/**
 * Describes the message orders.v1.BatchCreateOrdersRequest.
 * Use `create(BatchCreateOrdersRequestSchema)` to create a new message.
 */
export const BatchCreateOrdersRequestSchema: GenMessage<BatchCreateOrdersRequest> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 12);

/**
 * The `BatchCreateOrder` response message.
 *
 * @generated from message orders.v1.BatchCreateOrdersResponse
 */
export type BatchCreateOrdersResponse = Message<"orders.v1.BatchCreateOrdersResponse"> & {
  /**
   * The created Orders .
   *
   * @generated from field: repeated orders.v1.Order Orders = 1;
   */
  Orders: Order[];
};

/**
 * Describes the message orders.v1.BatchCreateOrdersResponse.
 * Use `create(BatchCreateOrdersResponseSchema)` to create a new message.
 */
export const BatchCreateOrdersResponseSchema: GenMessage<BatchCreateOrdersResponse> = /*@__PURE__*/
  messageDesc(file_orders_v1_order_api, 13);

/**
 * The Last Mile Delivery service.
 *
 * @generated from service orders.v1.OrdersService
 */
export const OrdersService: GenService<{
  /**
   * Creates and returns a new `DeliveryParcel`.
   *
   * @generated from rpc orders.v1.OrdersService.CreateDeliveryParcel
   */
  createDeliveryParcel: {
    methodKind: "unary";
    input: typeof CreateDeliveryParcelRequestSchema;
    output: typeof DeliveryParcelSchema;
  },
  /**
   * Returns the specified `DeliveryParcel` instance.
   *
   * @generated from rpc orders.v1.OrdersService.GetDeliveryParcel
   */
  getDeliveryParcel: {
    methodKind: "unary";
    input: typeof GetDeliveryParcelRequestSchema;
    output: typeof DeliveryParcelSchema;
  },
  /**
   * Writes updated `DeliveryParcel` data to Fleet Engine, and assigns
   * `Orders` to the `DeliveryParcel`. You cannot update the delivery_id of the
   * `DeliveryParcel`. 
   *
   * @generated from rpc orders.v1.OrdersService.UpdateDeliveryParcel
   */
  updateDeliveryParcel: {
    methodKind: "unary";
    input: typeof UpdateDeliveryParcelRequestSchema;
    output: typeof DeliveryParcelSchema;
  },
  /**
   * @generated from rpc orders.v1.OrdersService.ListDeliveryParcels
   */
  listDeliveryParcels: {
    methodKind: "unary";
    input: typeof ListDeliveryParcelsRequestSchema;
    output: typeof ListDeliveryParcelsResponseSchema;
  },
  /**
   * Creates and returns a batch of new `Order` objects.
   *
   * @generated from rpc orders.v1.OrdersService.BatchCreateDeliveryParcels
   */
  batchCreateDeliveryParcels: {
    methodKind: "unary";
    input: typeof BatchCreateDeliveryParcelsRequestSchema;
    output: typeof BatchCreateDeliveryParcelsResponseSchema;
  },
  /**
   * Creates and returns a batch of new `Order` objects.
   *
   * @generated from rpc orders.v1.OrdersService.BatchGetParcelsDeliveryQuot
   */
  batchGetParcelsDeliveryQuot: {
    methodKind: "unary";
    input: typeof BatchCreateOrdersRequestSchema;
    output: typeof BatchCreateDeliveryParcelsResponseSchema;
  },
  /**
   * Creates and returns a new `Order` object.
   *
   * @generated from rpc orders.v1.OrdersService.CreateOrder
   */
  createOrder: {
    methodKind: "unary";
    input: typeof CreateOrderRequestSchema;
    output: typeof OrderSchema;
  },
  /**
   * Gets information about a `Order`.
   *
   * @generated from rpc orders.v1.OrdersService.GetOrder
   */
  getOrder: {
    methodKind: "unary";
    input: typeof GetOrderRequestSchema;
    output: typeof OrderSchema;
  },
  /**
   * Updates `Order` data.
   *
   * @generated from rpc orders.v1.OrdersService.UpdateOrder
   */
  updateOrder: {
    methodKind: "unary";
    input: typeof UpdateOrderRequestSchema;
    output: typeof OrderSchema;
  },
  /**
   * Gets all `Order`s that meet the specified filtering criteria.
   *
   * @generated from rpc orders.v1.OrdersService.ListOrders
   */
  listOrders: {
    methodKind: "unary";
    input: typeof ListOrdersRequestSchema;
    output: typeof ListOrdersResponseSchema;
  },
  /**
   * Creates and returns a batch of new `Order` objects.
   *
   * @generated from rpc orders.v1.OrdersService.BatchCreateOrders
   */
  batchCreateOrders: {
    methodKind: "unary";
    input: typeof BatchCreateOrdersRequestSchema;
    output: typeof BatchCreateOrdersResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_orders_v1_order_api, 0);

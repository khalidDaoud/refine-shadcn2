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
// @generated from file delivery/v1/delivery_vehicles.proto (package delivery, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../google/api/field_behavior_pb.js";
import { file_google_api_resource } from "../../google/api/resource_pb.js";
import type { DeliveryVehicleAttribute, DeliveryVehicleLocation, DeliveryVehicleNavigationStatus, TimeWindow } from "./common_pb.js";
import { file_delivery_v1_common } from "./common_pb.js";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import type { LatLng } from "../../google/type/latlng_pb.js";
import { file_google_type_latlng } from "../../google/type/latlng_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file delivery/v1/delivery_vehicles.proto.
 */
export const file_delivery_v1_delivery_vehicles: GenFile = /*@__PURE__*/
  fileDesc("CiNkZWxpdmVyeS92MS9kZWxpdmVyeV92ZWhpY2xlcy5wcm90bxIIZGVsaXZlcnkijQYKD0RlbGl2ZXJ5VmVoaWNsZRIMCgRuYW1lGAEgASgJEjgKDWxhc3RfbG9jYXRpb24YAiABKAsyIS5kZWxpdmVyeS5EZWxpdmVyeVZlaGljbGVMb2NhdGlvbhJEChFuYXZpZ2F0aW9uX3N0YXR1cxgDIAEoDjIpLmRlbGl2ZXJ5LkRlbGl2ZXJ5VmVoaWNsZU5hdmlnYXRpb25TdGF0dXMSHQoVY3VycmVudF9yb3V0ZV9zZWdtZW50GAQgASgMEjwKH2N1cnJlbnRfcm91dGVfc2VnbWVudF9lbmRfcG9pbnQYBSABKAsyEy5nb29nbGUudHlwZS5MYXRMbmcSPgoZcmVtYWluaW5nX2Rpc3RhbmNlX21ldGVycxgGIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEjUKEnJlbWFpbmluZ19kdXJhdGlvbhgHIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbhJLCiJyZW1haW5pbmdfdmVoaWNsZV9qb3VybmV5X3NlZ21lbnRzGAggAygLMh8uZGVsaXZlcnkuVmVoaWNsZUpvdXJuZXlTZWdtZW50EjYKCmF0dHJpYnV0ZXMYCSADKAsyIi5kZWxpdmVyeS5EZWxpdmVyeVZlaGljbGVBdHRyaWJ1dGUSOwoEdHlwZRgKIAEoDjItLmRlbGl2ZXJ5LkRlbGl2ZXJ5VmVoaWNsZS5EZWxpdmVyeVZlaGljbGVUeXBlInQKE0RlbGl2ZXJ5VmVoaWNsZVR5cGUSJQohREVMSVZFUllfVkVISUNMRV9UWVBFX1VOU1BFQ0lGSUVEEAASCAoEQVVUTxABEg8KC1RXT19XSEVFTEVSEAISCwoHQklDWUNMRRADEg4KClBFREVTVFJJQU4QBDpg6kFdCipmbGVldGVuZ2luZS5nb29nbGVhcGlzLmNvbS9EZWxpdmVyeVZlaGljbGUSL3Byb3ZpZGVycy97cHJvdmlkZXJ9L2RlbGl2ZXJ5VmVoaWNsZXMve3ZlaGljbGV9IjIKDExvY2F0aW9uSW5mbxIiCgVwb2ludBgBIAEoCzITLmdvb2dsZS50eXBlLkxhdExuZyLhAQoVVmVoaWNsZUpvdXJuZXlTZWdtZW50EiMKBHN0b3AYASABKAsyFS5kZWxpdmVyeS5WZWhpY2xlU3RvcBJBChdkcml2aW5nX2Rpc3RhbmNlX21ldGVycxgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlQgPgQQMSOAoQZHJpdmluZ19kdXJhdGlvbhgDIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkID4EEDEiYKBHBhdGgYBSADKAsyEy5nb29nbGUudHlwZS5MYXRMbmdCA+BBAyLuAgoLVmVoaWNsZVN0b3ASNQoQcGxhbm5lZF9sb2NhdGlvbhgBIAEoCzIWLmRlbGl2ZXJ5LkxvY2F0aW9uSW5mb0ID4EECEi0KBXRhc2tzGAIgAygLMh4uZGVsaXZlcnkuVmVoaWNsZVN0b3AuVGFza0luZm8SKgoFc3RhdGUYAyABKA4yGy5kZWxpdmVyeS5WZWhpY2xlU3RvcC5TdGF0ZRqJAQoIVGFza0luZm8SDwoHdGFza19pZBgBIAEoCRI1Cg10YXNrX2R1cmF0aW9uGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgPgQQMSNQoSdGFyZ2V0X3RpbWVfd2luZG93GAMgASgLMhQuZGVsaXZlcnkuVGltZVdpbmRvd0ID4EEDIkEKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASBwoDTkVXEAESCwoHRU5ST1VURRACEgsKB0FSUklWRUQQA0KiAQoMY29tLmRlbGl2ZXJ5QhVEZWxpdmVyeVZlaGljbGVzUHJvdG9QAVo7Z2l0aHViLmNvbS9zbWFydGZpeS9sb2dpdGVjaC9wa2cvZGVsaXZlcnkvYXBpL3YxO2RlbGl2ZXJ5cGKiAgNEWFiqAghEZWxpdmVyecoCCERlbGl2ZXJ54gIURGVsaXZlcnlcR1BCTWV0YWRhdGHqAghEZWxpdmVyeWIGcHJvdG8z", [file_google_api_field_behavior, file_google_api_resource, file_delivery_v1_common, file_google_protobuf_duration, file_google_protobuf_wrappers, file_google_type_latlng]);

/**
 * The `DeliveryVehicle` message. A delivery vehicle transports shipments from a
 * depot to a delivery location, and from a pickup location to the depot. In
 * some cases, delivery vehicles also transport shipments directly from the
 * pickup location to the delivery location.
 * 
 * Note: gRPC and REST APIs use different field naming conventions. For example,
 * the `DeliveryVehicle.current_route_segment` field in the gRPC API and the
 * `DeliveryVehicle.currentRouteSegment` field in the REST API refer to the same
 * field.
 *
 * @generated from message delivery.DeliveryVehicle
 */
export type DeliveryVehicle = Message<"delivery.DeliveryVehicle"> & {
  /**
   * The unique name of this Delivery Vehicle.
   * The format is `providers/{provider}/deliveryVehicles/{vehicle}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The last reported location of the Delivery Vehicle.
   *
   * @generated from field: delivery.DeliveryVehicleLocation last_location = 2;
   */
  lastLocation?: DeliveryVehicleLocation;

  /**
   * The Delivery Vehicle's navigation status.
   *
   * @generated from field: delivery.DeliveryVehicleNavigationStatus navigation_status = 3;
   */
  navigationStatus: DeliveryVehicleNavigationStatus;

  /**
   * The encoded polyline specifying the route that the navigation recommends
   * taking to the next waypoint. Your driver app updates this when a
   * stop is reached or passed, and when the navigation reroutes. These
   * `LatLng`s are returned in
   * `Task.journey_sharing_info.remaining_vehicle_journey_segments[0].path`
   * (gRPC) or `Task.journeySharingInfo.remainingVehicleJourneySegments[0].path`
   * (REST) for all active Tasks assigned to the Vehicle.
   * 
   * There are a few cases where this field might not be used to populate
   * `Task.journey_sharing_info.remaining_vehicle_journey_segments[0].path`
   * (gRPC) or `Task.journeySharingInfo.remainingVehicleJourneySegments[0].path`
   * (REST):
   * 
   * * The endpoint of the `current_route_segment` does not match
   * `DeliveryVehicle.remaining_vehicle_journey_segments[0].stop` (gRPC) or
   * `DeliveryVehicle.remainingVehicleJourneySegments[0].stop` (REST).
   * 
   * * The driver app has not updated its location recently, so the last
   * updated value for this field might be stale.
   * 
   * * The driver app has recently updated its location, but the
   * `current_route_segment` is stale, and points to a previous vehicle stop.
   * 
   * In these cases, Fleet Engine populates this field with a route from the
   * most recently passed VehicleStop to the upcoming VehicleStop to ensure that
   * the consumer of this field has the best available information on the
   * current path of the Delivery Vehicle.
   *
   * @generated from field: bytes current_route_segment = 4;
   */
  currentRouteSegment: Uint8Array;

  /**
   * The location where the `current_route_segment` ends. This is not currently
   * populated by the driver app, but you can supply it on
   * `UpdateDeliveryVehicle` calls. It is either the `LatLng` from the upcoming
   * vehicle stop, or the last `LatLng` of the `current_route_segment`. Fleet
   * Engine will then do its best to interpolate to an actual `VehicleStop`.
   * 
   * This field is ignored in `UpdateDeliveryVehicle` calls if the
   * `current_route_segment` field is empty.
   *
   * @generated from field: google.type.LatLng current_route_segment_end_point = 5;
   */
  currentRouteSegmentEndPoint?: LatLng;

  /**
   * The remaining driving distance for the `current_route_segment`.
   * The Driver app typically provides this field, but there are some
   * circumstances in which Fleet Engine will override the value sent by the
   * app. For more information, see
   * [DeliveryVehicle.current_route_segment][maps.fleetengine.delivery.v1.DeliveryVehicle.current_route_segment].
   * This field is returned in
   * `Task.remaining_vehicle_journey_segments[0].driving_distance_meters` (gRPC)
   * or `Task.remainingVehicleJourneySegments[0].drivingDistanceMeters` (REST)
   * for all active `Task`s assigned to the Delivery Vehicle.
   * 
   * Fleet Engine ignores this field in `UpdateDeliveryVehicleRequest` if the
   * `current_route_segment` field is empty.
   *
   * @generated from field: google.protobuf.Int32Value remaining_distance_meters = 6;
   */
  remainingDistanceMeters?: number;

  /**
   * The remaining driving time for the `current_route_segment`.
   * The Driver app typically provides this field, but there are some
   * circumstances in which Fleet Engine will override the value sent by the
   * app.  For more information, see
   * [DeliveryVehicle.current_route_segment][maps.fleetengine.delivery.v1.DeliveryVehicle.current_route_segment].
   * This field is returned in
   * `Task.remaining_vehicle_journey_segments[0].driving_duration` (gRPC) or
   * `Task.remainingVehicleJourneySegments[0].drivingDuration` (REST) for all
   * active tasks assigned to the Delivery Vehicle.
   * 
   * Fleet Engine ignores this field in `UpdateDeliveryVehicleRequest` if the
   * `current_route_segment` field is empty.
   *
   * @generated from field: google.protobuf.Duration remaining_duration = 7;
   */
  remainingDuration?: Duration;

  /**
   * The journey segments assigned to this Delivery Vehicle, starting from the
   * Vehicle's most recently reported location. This field won't be populated
   * in the response of `ListDeliveryVehicles`.
   *
   * @generated from field: repeated delivery.VehicleJourneySegment remaining_vehicle_journey_segments = 8;
   */
  remainingVehicleJourneySegments: VehicleJourneySegment[];

  /**
   * A list of custom Delivery Vehicle attributes. A Delivery Vehicle can have
   * at most 100 attributes, and each attribute must have a unique key.
   *
   * @generated from field: repeated delivery.DeliveryVehicleAttribute attributes = 9;
   */
  attributes: DeliveryVehicleAttribute[];

  /**
   * The type of this delivery vehicle. If unset, this will default to `AUTO`.
   *
   * @generated from field: delivery.DeliveryVehicle.DeliveryVehicleType type = 10;
   */
  type: DeliveryVehicle_DeliveryVehicleType;
};

/**
 * Describes the message delivery.DeliveryVehicle.
 * Use `create(DeliveryVehicleSchema)` to create a new message.
 */
export const DeliveryVehicleSchema: GenMessage<DeliveryVehicle> = /*@__PURE__*/
  messageDesc(file_delivery_v1_delivery_vehicles, 0);

/**
 * The type of delivery vehicle.
 *
 * @generated from enum delivery.DeliveryVehicle.DeliveryVehicleType
 */
export enum DeliveryVehicle_DeliveryVehicleType {
  /**
   * The value is unused.
   *
   * @generated from enum value: DELIVERY_VEHICLE_TYPE_UNSPECIFIED = 0;
   */
  DELIVERY_VEHICLE_TYPE_UNSPECIFIED = 0,

  /**
   * An automobile.
   *
   * @generated from enum value: AUTO = 1;
   */
  AUTO = 1,

  /**
   * A motorcycle, moped, or other two-wheeled vehicle
   *
   * @generated from enum value: TWO_WHEELER = 2;
   */
  TWO_WHEELER = 2,

  /**
   * Human-powered transport.
   *
   * @generated from enum value: BICYCLE = 3;
   */
  BICYCLE = 3,

  /**
   * A human transporter, typically walking or running, traveling along
   * pedestrian pathways.
   *
   * @generated from enum value: PEDESTRIAN = 4;
   */
  PEDESTRIAN = 4,
}

/**
 * Describes the enum delivery.DeliveryVehicle.DeliveryVehicleType.
 */
export const DeliveryVehicle_DeliveryVehicleTypeSchema: GenEnum<DeliveryVehicle_DeliveryVehicleType> = /*@__PURE__*/
  enumDesc(file_delivery_v1_delivery_vehicles, 0, 0);

/**
 * A location with any additional identifiers.
 *
 * @generated from message delivery.LocationInfo
 */
export type LocationInfo = Message<"delivery.LocationInfo"> & {
  /**
   * The location's coordinates.
   *
   * @generated from field: google.type.LatLng point = 1;
   */
  point?: LatLng;
};

/**
 * Describes the message delivery.LocationInfo.
 * Use `create(LocationInfoSchema)` to create a new message.
 */
export const LocationInfoSchema: GenMessage<LocationInfo> = /*@__PURE__*/
  messageDesc(file_delivery_v1_delivery_vehicles, 1);

/**
 * Represents a Vehicle’s travel segment - from its previous stop to the
 * current stop. If it is the first active stop, then it is from the
 * Vehicle’s current location to this stop.
 *
 * @generated from message delivery.VehicleJourneySegment
 */
export type VehicleJourneySegment = Message<"delivery.VehicleJourneySegment"> & {
  /**
   * Specifies the stop location, along with the `Task`s associated with
   * the stop. Some fields of the VehicleStop might not be present if this
   * journey segment is part of `JourneySharingInfo`.
   *
   * @generated from field: delivery.VehicleStop stop = 1;
   */
  stop?: VehicleStop;

  /**
   * Output only. The travel distance from the previous stop to this stop.
   * If the current stop is the first stop in the list of journey
   * segments, then the starting point is the vehicle's location recorded
   * at the time that this stop was added to the list. This field might not be
   * present if this journey segment is part of `JourneySharingInfo`.
   *
   * @generated from field: google.protobuf.Int32Value driving_distance_meters = 2;
   */
  drivingDistanceMeters?: number;

  /**
   * Output only. The travel time from the previous stop to this stop.
   * If the current stop is the first stop in the list of journey
   * segments, then the starting point is the Vehicle's location recorded
   * at the time that this stop was added to the list.
   * 
   * If this field is defined in the path
   * `Task.remaining_vehicle_journey_segments[0].driving_duration` (gRPC) or
   * `Task.remainingVehicleJourneySegments[0].drivingDuration` (REST),
   * then it may be populated with the value from
   * `DeliveryVehicle.remaining_duration` (gRPC) or
   * `DeliveryVehicle.remainingDuration` (REST).
   * This provides the remaining driving duration from the driver app's latest
   * known location rather than the driving time from the previous stop.
   *
   * @generated from field: google.protobuf.Duration driving_duration = 3;
   */
  drivingDuration?: Duration;

  /**
   * Output only. The path from the previous stop to this stop. If the current
   * stop is the first stop in the list of journey segments, then this is the
   * path from the vehicle's current location to this stop at the time that the
   * stop was added to the list. This field might not be present if this journey
   * segment is part of `JourneySharingInfo`.
   * 
   * If this field is defined in the path
   * `Task.journey_sharing_info.remaining_vehicle_journey_segments[0].path`
   * (gRPC) or `Task.journeySharingInfo.remainingVehicleJourneySegments[0].path`
   * (REST), then it may be populated with the `LatLng`s decoded from
   * `DeliveryVehicle.current_route_segment` (gRPC) or
   * `DeliveryVehicle.currentRouteSegment` (REST). This provides the driving
   * path from the driver app's latest known location rather than the path from
   * the previous stop.
   *
   * @generated from field: repeated google.type.LatLng path = 5;
   */
  path: LatLng[];
};

/**
 * Describes the message delivery.VehicleJourneySegment.
 * Use `create(VehicleJourneySegmentSchema)` to create a new message.
 */
export const VehicleJourneySegmentSchema: GenMessage<VehicleJourneySegment> = /*@__PURE__*/
  messageDesc(file_delivery_v1_delivery_vehicles, 2);

/**
 * Describes a point where a Vehicle stops to perform one or more `Task`s.
 *
 * @generated from message delivery.VehicleStop
 */
export type VehicleStop = Message<"delivery.VehicleStop"> & {
  /**
   * Required. The location of the stop. Note that the locations in the `Task`s
   * might not exactly match this location, but will be within a short distance
   * of it. This field won't be populated in the response of a `GetTask` call.
   *
   * @generated from field: delivery.LocationInfo planned_location = 1;
   */
  plannedLocation?: LocationInfo;

  /**
   * The list of `Task`s to be performed at this stop. This field won't be
   * populated in the response of a `GetTask` call.
   *
   * @generated from field: repeated delivery.VehicleStop.TaskInfo tasks = 2;
   */
  tasks: VehicleStop_TaskInfo[];

  /**
   * The state of the `VehicleStop`. This field won't be populated in the
   * response of a `GetTask` call.
   *
   * @generated from field: delivery.VehicleStop.State state = 3;
   */
  state: VehicleStop_State;
};

/**
 * Describes the message delivery.VehicleStop.
 * Use `create(VehicleStopSchema)` to create a new message.
 */
export const VehicleStopSchema: GenMessage<VehicleStop> = /*@__PURE__*/
  messageDesc(file_delivery_v1_delivery_vehicles, 3);

/**
 * Additional information about the Task performed at this stop.
 *
 * @generated from message delivery.VehicleStop.TaskInfo
 */
export type VehicleStop_TaskInfo = Message<"delivery.VehicleStop.TaskInfo"> & {
  /**
   * The Task ID. This field won't be populated in the response of a `GetTask`
   * call. Task IDs are subject to the following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string task_id = 1;
   */
  taskId: string;

  /**
   * Output only. The time required to perform the Task.
   *
   * @generated from field: google.protobuf.Duration task_duration = 2;
   */
  taskDuration?: Duration;

  /**
   * Output only. The time window during which the task should be completed.
   * This is only set in the response to `GetDeliveryVehicle`.
   *
   * @generated from field: delivery.TimeWindow target_time_window = 3;
   */
  targetTimeWindow?: TimeWindow;
};

/**
 * Describes the message delivery.VehicleStop.TaskInfo.
 * Use `create(VehicleStop_TaskInfoSchema)` to create a new message.
 */
export const VehicleStop_TaskInfoSchema: GenMessage<VehicleStop_TaskInfo> = /*@__PURE__*/
  messageDesc(file_delivery_v1_delivery_vehicles, 3, 0);

/**
 * The current state of a `VehicleStop`.
 *
 * @generated from enum delivery.VehicleStop.State
 */
export enum VehicleStop_State {
  /**
   * Unknown.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Created, but not actively routing.
   *
   * @generated from enum value: NEW = 1;
   */
  NEW = 1,

  /**
   * Assigned and actively routing.
   *
   * @generated from enum value: ENROUTE = 2;
   */
  ENROUTE = 2,

  /**
   * Arrived at stop. Assumes that when the Vehicle is routing to the next
   * stop, that all previous stops have been completed.
   *
   * @generated from enum value: ARRIVED = 3;
   */
  ARRIVED = 3,
}

/**
 * Describes the enum delivery.VehicleStop.State.
 */
export const VehicleStop_StateSchema: GenEnum<VehicleStop_State> = /*@__PURE__*/
  enumDesc(file_delivery_v1_delivery_vehicles, 3, 0);


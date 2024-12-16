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
// @generated from file delivery/v1/tasks.proto (package delivery, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../google/api/field_behavior_pb.js";
import { file_google_api_resource } from "../../google/api/resource_pb.js";
import type { DeliveryVehicleLocation, TaskAttribute, TimeWindow } from "./common_pb.js";
import { file_delivery_v1_common } from "./common_pb.js";
import type { LocationInfo, VehicleJourneySegment } from "./delivery_vehicles_pb.js";
import { file_delivery_v1_delivery_vehicles } from "./delivery_vehicles_pb.js";
import type { Duration, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file delivery/v1/tasks.proto.
 */
export const file_delivery_v1_tasks: GenFile = /*@__PURE__*/
  fileDesc("ChdkZWxpdmVyeS92MS90YXNrcy5wcm90bxIIZGVsaXZlcnkixwoKBFRhc2sSDAoEbmFtZRgBIAEoCRIpCgR0eXBlGAIgASgOMhMuZGVsaXZlcnkuVGFzay5UeXBlQgbgQQLgQQUSKAoFc3RhdGUYAyABKA4yFC5kZWxpdmVyeS5UYXNrLlN0YXRlQgPgQQISMAoMdGFza19vdXRjb21lGAkgASgOMhouZGVsaXZlcnkuVGFzay5UYXNrT3V0Y29tZRI1ChF0YXNrX291dGNvbWVfdGltZRgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASNQoVdGFza19vdXRjb21lX2xvY2F0aW9uGAsgASgLMhYuZGVsaXZlcnkuTG9jYXRpb25JbmZvEk4KHHRhc2tfb3V0Y29tZV9sb2NhdGlvbl9zb3VyY2UYDCABKA4yKC5kZWxpdmVyeS5UYXNrLlRhc2tPdXRjb21lTG9jYXRpb25Tb3VyY2USGAoLdHJhY2tpbmdfaWQYBCABKAlCA+BBBRIgChNkZWxpdmVyeV92ZWhpY2xlX2lkGAUgASgJQgPgQQMSNQoQcGxhbm5lZF9sb2NhdGlvbhgGIAEoCzIWLmRlbGl2ZXJ5LkxvY2F0aW9uSW5mb0ID4EEFEjgKDXRhc2tfZHVyYXRpb24YByABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25CBuBBAuBBBRIwChJ0YXJnZXRfdGltZV93aW5kb3cYDiABKAsyFC5kZWxpdmVyeS5UaW1lV2luZG93EkQKFGpvdXJuZXlfc2hhcmluZ19pbmZvGAggASgLMiEuZGVsaXZlcnkuVGFzay5Kb3VybmV5U2hhcmluZ0luZm9CA+BBAxJDChl0YXNrX3RyYWNraW5nX3ZpZXdfY29uZmlnGA0gASgLMiAuZGVsaXZlcnkuVGFza1RyYWNraW5nVmlld0NvbmZpZxIrCgphdHRyaWJ1dGVzGA8gAygLMhcuZGVsaXZlcnkuVGFza0F0dHJpYnV0ZRq8AQoSSm91cm5leVNoYXJpbmdJbmZvEksKInJlbWFpbmluZ192ZWhpY2xlX2pvdXJuZXlfc2VnbWVudHMYASADKAsyHy5kZWxpdmVyeS5WZWhpY2xlSm91cm5leVNlZ21lbnQSOAoNbGFzdF9sb2NhdGlvbhgCIAEoCzIhLmRlbGl2ZXJ5LkRlbGl2ZXJ5VmVoaWNsZUxvY2F0aW9uEh8KF2xhc3RfbG9jYXRpb25fc25hcHBhYmxlGAMgASgIIlsKBFR5cGUSFAoQVFlQRV9VTlNQRUNJRklFRBAAEgoKBlBJQ0tVUBABEgwKCERFTElWRVJZEAISEgoOU0NIRURVTEVEX1NUT1AQAxIPCgtVTkFWQUlMQUJMRRAEIjQKBVN0YXRlEhUKEVNUQVRFX1VOU1BFQ0lGSUVEEAASCAoET1BFThABEgoKBkNMT1NFRBACIkYKC1Rhc2tPdXRjb21lEhwKGFRBU0tfT1VUQ09NRV9VTlNQRUNJRklFRBAAEg0KCVNVQ0NFRURFRBABEgoKBkZBSUxFRBACInIKGVRhc2tPdXRjb21lTG9jYXRpb25Tb3VyY2USLAooVEFTS19PVVRDT01FX0xPQ0FUSU9OX1NPVVJDRV9VTlNQRUNJRklFRBAAEgwKCFBST1ZJREVSEAISGQoVTEFTVF9WRUhJQ0xFX0xPQ0FUSU9OEAM6R+pBRAofZmxlZXRlbmdpbmUuZ29vZ2xlYXBpcy5jb20vVGFzaxIhcHJvdmlkZXJzL3twcm92aWRlcn0vdGFza3Mve3Rhc2t9ItMGChZUYXNrVHJhY2tpbmdWaWV3Q29uZmlnElsKIHJvdXRlX3BvbHlsaW5lX3BvaW50c192aXNpYmlsaXR5GAEgASgLMjEuZGVsaXZlcnkuVGFza1RyYWNraW5nVmlld0NvbmZpZy5WaXNpYmlsaXR5T3B0aW9uElwKIWVzdGltYXRlZF9hcnJpdmFsX3RpbWVfdmlzaWJpbGl0eRgCIAEoCzIxLmRlbGl2ZXJ5LlRhc2tUcmFja2luZ1ZpZXdDb25maWcuVmlzaWJpbGl0eU9wdGlvbhJkCillc3RpbWF0ZWRfdGFza19jb21wbGV0aW9uX3RpbWVfdmlzaWJpbGl0eRgDIAEoCzIxLmRlbGl2ZXJ5LlRhc2tUcmFja2luZ1ZpZXdDb25maWcuVmlzaWJpbGl0eU9wdGlvbhJgCiVyZW1haW5pbmdfZHJpdmluZ19kaXN0YW5jZV92aXNpYmlsaXR5GAQgASgLMjEuZGVsaXZlcnkuVGFza1RyYWNraW5nVmlld0NvbmZpZy5WaXNpYmlsaXR5T3B0aW9uEloKH3JlbWFpbmluZ19zdG9wX2NvdW50X3Zpc2liaWxpdHkYBSABKAsyMS5kZWxpdmVyeS5UYXNrVHJhY2tpbmdWaWV3Q29uZmlnLlZpc2liaWxpdHlPcHRpb24SVgobdmVoaWNsZV9sb2NhdGlvbl92aXNpYmlsaXR5GAYgASgLMjEuZGVsaXZlcnkuVGFza1RyYWNraW5nVmlld0NvbmZpZy5WaXNpYmlsaXR5T3B0aW9uGoECChBWaXNpYmlsaXR5T3B0aW9uEigKHnJlbWFpbmluZ19zdG9wX2NvdW50X3RocmVzaG9sZBgBIAEoBUgAElQKL2R1cmF0aW9uX3VudGlsX2VzdGltYXRlZF9hcnJpdmFsX3RpbWVfdGhyZXNob2xkGAIgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uSAASNQorcmVtYWluaW5nX2RyaXZpbmdfZGlzdGFuY2VfbWV0ZXJzX3RocmVzaG9sZBgDIAEoBUgAEhAKBmFsd2F5cxgEIAEoCEgAEg8KBW5ldmVyGAUgASgISABCEwoRdmlzaWJpbGl0eV9vcHRpb25ClwEKDGNvbS5kZWxpdmVyeUIKVGFza3NQcm90b1ABWjtnaXRodWIuY29tL3NtYXJ0Zml5L2xvZ2l0ZWNoL3BrZy9kZWxpdmVyeS9hcGkvdjE7ZGVsaXZlcnlwYqICA0RYWKoCCERlbGl2ZXJ5ygIIRGVsaXZlcnniAhREZWxpdmVyeVxHUEJNZXRhZGF0YeoCCERlbGl2ZXJ5YgZwcm90bzM", [file_google_api_field_behavior, file_google_api_resource, file_delivery_v1_common, file_delivery_v1_delivery_vehicles, file_google_protobuf_duration, file_google_protobuf_timestamp]);

/**
 * A Task in the Delivery API represents a single action to track. In general,
 * there is a distinction between shipment-related Tasks and break Tasks. A
 * shipment can have multiple Tasks associated with it. For example, there could
 * be one Task for the pickup, and one for the drop-off or transfer. Also,
 * different Tasks for a given shipment can be handled by different vehicles.
 * For example, one vehicle could handle the pickup, driving the shipment to the
 * hub, while another vehicle drives the same shipment from the hub to the
 * drop-off location.
 * 
 * Note: gRPC and REST APIs use different field naming conventions. For example,
 * the `Task.journey_sharing_info` field in the gRPC API and the
 * `Task.journeySharingInfo` field in the REST API refer to the same
 * field.
 *
 * @generated from message delivery.Task
 */
export type Task = Message<"delivery.Task"> & {
  /**
   * Must be in the format `providers/{provider}/tasks/{task}`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Required. Immutable. Defines the type of the Task. For example, a break or
   * shipment.
   *
   * @generated from field: delivery.Task.Type type = 2;
   */
  type: Task_Type;

  /**
   * Required. The current execution state of the Task.
   *
   * @generated from field: delivery.Task.State state = 3;
   */
  state: Task_State;

  /**
   * The outcome of the Task.
   *
   * @generated from field: delivery.Task.TaskOutcome task_outcome = 9;
   */
  taskOutcome: Task_TaskOutcome;

  /**
   * The timestamp that indicates when the `Task`'s outcome was set by the
   * provider.
   *
   * @generated from field: google.protobuf.Timestamp task_outcome_time = 10;
   */
  taskOutcomeTime?: Timestamp;

  /**
   * The location where the `Task`'s outcome was set. This value is updated as
   * part of `UpdateTask`. If this value isn't explicitly updated by the
   * provider, then Fleet Engine populates it by default with the last known
   * vehicle location (the *raw* location).
   *
   * @generated from field: delivery.LocationInfo task_outcome_location = 11;
   */
  taskOutcomeLocation?: LocationInfo;

  /**
   * Indicates where the value of the `task_outcome_location` came from.
   *
   * @generated from field: delivery.Task.TaskOutcomeLocationSource task_outcome_location_source = 12;
   */
  taskOutcomeLocationSource: Task_TaskOutcomeLocationSource;

  /**
   * Immutable. This field facilitates the storing of an ID so you can avoid
   * using a complicated mapping. You cannot set `tracking_id` for Tasks of type
   * `UNAVAILABLE` and `SCHEDULED_STOP`. These IDs are subject to the
   * following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string tracking_id = 4;
   */
  trackingId: string;

  /**
   * Output only. The ID of the vehicle that is executing this Task. Delivery
   * Vehicle IDs are subject to the following restrictions:
   * 
   * * Must be a valid Unicode string.
   * * Limited to a maximum length of 64 characters.
   * * Normalized according to [Unicode Normalization Form C]
   * (http://www.unicode.org/reports/tr15/).
   * * May not contain any of the following ASCII characters: '/', ':', '?',
   * ',', or '#'.
   *
   * @generated from field: string delivery_vehicle_id = 5;
   */
  deliveryVehicleId: string;

  /**
   * Immutable. The location where the Task will be completed.
   * Optional for `UNAVAILABLE` Tasks, but required for all other Tasks.
   *
   * @generated from field: delivery.LocationInfo planned_location = 6;
   */
  plannedLocation?: LocationInfo;

  /**
   * Required. Immutable. The time needed to execute a Task at this location.
   *
   * @generated from field: google.protobuf.Duration task_duration = 7;
   */
  taskDuration?: Duration;

  /**
   * The time window during which the task should be completed.
   *
   * @generated from field: delivery.TimeWindow target_time_window = 14;
   */
  targetTimeWindow?: TimeWindow;

  /**
   * Output only. Journey sharing-specific fields. Not populated when state is
   * `CLOSED`.
   *
   * @generated from field: delivery.Task.JourneySharingInfo journey_sharing_info = 8;
   */
  journeySharingInfo?: Task_JourneySharingInfo;

  /**
   * The configuration for task tracking that specifies which data elements are
   * visible to the end users under what circumstances.
   *
   * @generated from field: delivery.TaskTrackingViewConfig task_tracking_view_config = 13;
   */
  taskTrackingViewConfig?: TaskTrackingViewConfig;

  /**
   * A list of custom Task attributes. Each attribute must have a unique key.
   *
   * @generated from field: repeated delivery.TaskAttribute attributes = 15;
   */
  attributes: TaskAttribute[];
};

/**
 * Describes the message delivery.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export const TaskSchema: GenMessage<Task> = /*@__PURE__*/
  messageDesc(file_delivery_v1_tasks, 0);

/**
 * Journey sharing specific fields.
 *
 * @generated from message delivery.Task.JourneySharingInfo
 */
export type Task_JourneySharingInfo = Message<"delivery.Task.JourneySharingInfo"> & {
  /**
   * Tracking information for the stops that the assigned vehicle will make
   * before it completes this Task. Note that this list can contain stops
   * from other tasks.
   * 
   * The first segment,
   * `Task.journey_sharing_info.remaining_vehicle_journey_segments[0]` (gRPC)
   * or `Task.journeySharingInfo.remainingVehicleJourneySegments[0]` (REST),
   * contains route information from the driver's last known location to the
   * upcoming `VehicleStop`. Current route information usually comes from the
   * driver app, except for some cases noted in the documentation for
   * [DeliveryVehicle.current_route_segment][maps.fleetengine.delivery.v1.DeliveryVehicle.current_route_segment].
   * The other segments in
   * `Task.journey_sharing_info.remaining_vehicle_journey_segments` (gRPC) or
   * `Task.journeySharingInfo.remainingVehicleJourneySegments` (REST) are
   * populated by Fleet Engine. They provide route information between the
   * remaining `VehicleStops`.
   *
   * @generated from field: repeated delivery.VehicleJourneySegment remaining_vehicle_journey_segments = 1;
   */
  remainingVehicleJourneySegments: VehicleJourneySegment[];

  /**
   * Indicates the vehicle's last reported location of the assigned vehicle.
   *
   * @generated from field: delivery.DeliveryVehicleLocation last_location = 2;
   */
  lastLocation?: DeliveryVehicleLocation;

  /**
   * Indicates whether the vehicle's lastLocation can be snapped to
   * the `current_route_segment`. This value is False if either
   * `last_location` or `current_route_segment` don't exist. This value is
   * computed by Fleet Engine. Updates from clients are ignored.
   *
   * @generated from field: bool last_location_snappable = 3;
   */
  lastLocationSnappable: boolean;
};

/**
 * Describes the message delivery.Task.JourneySharingInfo.
 * Use `create(Task_JourneySharingInfoSchema)` to create a new message.
 */
export const Task_JourneySharingInfoSchema: GenMessage<Task_JourneySharingInfo> = /*@__PURE__*/
  messageDesc(file_delivery_v1_tasks, 0, 0);

/**
 * The type of Task.
 *
 * @generated from enum delivery.Task.Type
 */
export enum Task_Type {
  /**
   * Default, the Task type is unknown.
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  TYPE_UNSPECIFIED = 0,

  /**
   * A pickup Task is the action taken for picking up a shipment from a
   * customer. Depot or feeder vehicle pickups should use the `SCHEDULED_STOP`
   * type.
   *
   * @generated from enum value: PICKUP = 1;
   */
  PICKUP = 1,

  /**
   * A delivery Task is the action taken for delivering a shipment to an end
   * customer. Depot or feeder vehicle dropoffs should use the
   * `SCHEDULED_STOP` type.
   *
   * @generated from enum value: DELIVERY = 2;
   */
  DELIVERY = 2,

  /**
   * A scheduled stop Task is used for planning purposes. For example, it
   * could represent picking up or dropping off shipments from feeder vehicles
   * or depots. It shouldn't be used for any shipments that are picked up or
   * dropped off from an end customer.
   *
   * @generated from enum value: SCHEDULED_STOP = 3;
   */
  SCHEDULED_STOP = 3,

  /**
   * A Task that means the Vehicle is not available for service. For example,
   * this can happen when the driver takes a break, or when the vehicle
   * is being refueled.
   *
   * @generated from enum value: UNAVAILABLE = 4;
   */
  UNAVAILABLE = 4,
}

/**
 * Describes the enum delivery.Task.Type.
 */
export const Task_TypeSchema: GenEnum<Task_Type> = /*@__PURE__*/
  enumDesc(file_delivery_v1_tasks, 0, 0);

/**
 * The state of a Task. This indicates the Tasks's progress.
 *
 * @generated from enum delivery.Task.State
 */
export enum Task_State {
  /**
   * Default. Used for an unspecified or unrecognized Task state.
   *
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  STATE_UNSPECIFIED = 0,

  /**
   * Either the Task has not yet been assigned to a delivery vehicle, or the
   * delivery vehicle has not yet passed the `Task`'s assigned vehicle stop.
   *
   * @generated from enum value: OPEN = 1;
   */
  OPEN = 1,

  /**
   * When the vehicle passes the vehicle stop for this Task.
   *
   * @generated from enum value: CLOSED = 2;
   */
  CLOSED = 2,
}

/**
 * Describes the enum delivery.Task.State.
 */
export const Task_StateSchema: GenEnum<Task_State> = /*@__PURE__*/
  enumDesc(file_delivery_v1_tasks, 0, 1);

/**
 * The outcome of attempting to execute a Task. When `TaskState` is closed,
 * `TaskOutcome` indicates whether it was completed successfully.
 *
 * @generated from enum delivery.Task.TaskOutcome
 */
export enum Task_TaskOutcome {
  /**
   * The Task outcome before its value is set.
   *
   * @generated from enum value: TASK_OUTCOME_UNSPECIFIED = 0;
   */
  TASK_OUTCOME_UNSPECIFIED = 0,

  /**
   * The Task completed successfully.
   *
   * @generated from enum value: SUCCEEDED = 1;
   */
  SUCCEEDED = 1,

  /**
   * Either the Task couldn't be completed, or it was cancelled.
   *
   * @generated from enum value: FAILED = 2;
   */
  FAILED = 2,
}

/**
 * Describes the enum delivery.Task.TaskOutcome.
 */
export const Task_TaskOutcomeSchema: GenEnum<Task_TaskOutcome> = /*@__PURE__*/
  enumDesc(file_delivery_v1_tasks, 0, 2);

/**
 * The identity of the source that populated the `task_outcome_location`.
 *
 * @generated from enum delivery.Task.TaskOutcomeLocationSource
 */
export enum Task_TaskOutcomeLocationSource {
  /**
   * The task outcome before it is set.
   *
   * @generated from enum value: TASK_OUTCOME_LOCATION_SOURCE_UNSPECIFIED = 0;
   */
  TASK_OUTCOME_LOCATION_SOURCE_UNSPECIFIED = 0,

  /**
   * The provider-specified the `task_outcome_location`.
   *
   * @generated from enum value: PROVIDER = 2;
   */
  PROVIDER = 2,

  /**
   * The provider didn't specify the `task_outcome_location`, so Fleet Engine
   * used the last known vehicle location.
   *
   * @generated from enum value: LAST_VEHICLE_LOCATION = 3;
   */
  LAST_VEHICLE_LOCATION = 3,
}

/**
 * Describes the enum delivery.Task.TaskOutcomeLocationSource.
 */
export const Task_TaskOutcomeLocationSourceSchema: GenEnum<Task_TaskOutcomeLocationSource> = /*@__PURE__*/
  enumDesc(file_delivery_v1_tasks, 0, 3);

/**
 * The configuration message that defines when a data element of a Task should
 * be visible to the end users.
 *
 * @generated from message delivery.TaskTrackingViewConfig
 */
export type TaskTrackingViewConfig = Message<"delivery.TaskTrackingViewConfig"> & {
  /**
   * The field that specifies when route polyline points can be visible. If this
   * field is not specified, the project level default visibility configuration
   * for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption route_polyline_points_visibility = 1;
   */
  routePolylinePointsVisibility?: TaskTrackingViewConfig_VisibilityOption;

  /**
   * The field that specifies when estimated arrival time can be visible. If
   * this field is not specified, the project level default visibility
   * configuration for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption estimated_arrival_time_visibility = 2;
   */
  estimatedArrivalTimeVisibility?: TaskTrackingViewConfig_VisibilityOption;

  /**
   * The field that specifies when estimated task completion time can be
   * visible. If this field is not specified, the project level default
   * visibility configuration for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption estimated_task_completion_time_visibility = 3;
   */
  estimatedTaskCompletionTimeVisibility?: TaskTrackingViewConfig_VisibilityOption;

  /**
   * The field that specifies when remaining driving distance can be visible. If
   * this field is not specified, the project level default visibility
   * configuration for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption remaining_driving_distance_visibility = 4;
   */
  remainingDrivingDistanceVisibility?: TaskTrackingViewConfig_VisibilityOption;

  /**
   * The field that specifies when remaining stop count can be visible. If this
   * field is not specified, the project level default visibility configuration
   * for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption remaining_stop_count_visibility = 5;
   */
  remainingStopCountVisibility?: TaskTrackingViewConfig_VisibilityOption;

  /**
   * The field that specifies when vehicle location can be visible. If this
   * field is not specified, the project level default visibility configuration
   * for this data will be used.
   *
   * @generated from field: delivery.TaskTrackingViewConfig.VisibilityOption vehicle_location_visibility = 6;
   */
  vehicleLocationVisibility?: TaskTrackingViewConfig_VisibilityOption;
};

/**
 * Describes the message delivery.TaskTrackingViewConfig.
 * Use `create(TaskTrackingViewConfigSchema)` to create a new message.
 */
export const TaskTrackingViewConfigSchema: GenMessage<TaskTrackingViewConfig> = /*@__PURE__*/
  messageDesc(file_delivery_v1_tasks, 1);

/**
 * The option message that defines when a data element should be visible to
 * the end users.
 *
 * @generated from message delivery.TaskTrackingViewConfig.VisibilityOption
 */
export type TaskTrackingViewConfig_VisibilityOption = Message<"delivery.TaskTrackingViewConfig.VisibilityOption"> & {
  /**
   * The specific visibility option chosen.
   *
   * @generated from oneof delivery.TaskTrackingViewConfig.VisibilityOption.visibility_option
   */
  visibilityOption: {
    /**
     * This data element is visible to the end users if the remaining stop
     * count <= remaining_stop_count_threshold.
     *
     * @generated from field: int32 remaining_stop_count_threshold = 1;
     */
    value: number;
    case: "remainingStopCountThreshold";
  } | {
    /**
     * This data element is visible to the end users if the ETA to the stop
     * <= duration_until_estimated_arrival_time_threshold.
     *
     * @generated from field: google.protobuf.Duration duration_until_estimated_arrival_time_threshold = 2;
     */
    value: Duration;
    case: "durationUntilEstimatedArrivalTimeThreshold";
  } | {
    /**
     * This data element is visible to the end users if the remaining
     * driving distance in meters <=
     * remaining_driving_distance_meters_threshold.
     *
     * @generated from field: int32 remaining_driving_distance_meters_threshold = 3;
     */
    value: number;
    case: "remainingDrivingDistanceMetersThreshold";
  } | {
    /**
     * If set to true, this data element is always visible to the end users
     * with no thresholds. This field cannot be set to false.
     *
     * @generated from field: bool always = 4;
     */
    value: boolean;
    case: "always";
  } | {
    /**
     * If set to true, this data element is always hidden from the end users
     * with no thresholds. This field cannot be set to false.
     *
     * @generated from field: bool never = 5;
     */
    value: boolean;
    case: "never";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message delivery.TaskTrackingViewConfig.VisibilityOption.
 * Use `create(TaskTrackingViewConfig_VisibilityOptionSchema)` to create a new message.
 */
export const TaskTrackingViewConfig_VisibilityOptionSchema: GenMessage<TaskTrackingViewConfig_VisibilityOption> = /*@__PURE__*/
  messageDesc(file_delivery_v1_tasks, 1, 0);


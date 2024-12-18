// @generated by protoc-gen-es v2.2.2 with parameter "target=ts,import_extension=.js"
// @generated from file fleet/v1/vehicles.proto (package fleet, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { BaseAsset } from "./common_pb.js";
import { file_fleet_v1_common } from "./common_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file fleet/v1/vehicles.proto.
 */
export const file_fleet_v1_vehicles: GenFile = /*@__PURE__*/
  fileDesc("ChdmbGVldC92MS92ZWhpY2xlcy5wcm90bxIFZmxlZXQi6wEKB1ZlaGljbGUSJAoKYmFzZV9hc3NldBgBIAEoCzIQLmZsZWV0LkJhc2VBc3NldBIRCgljYWxsX3NpZ24YAiABKAkSDAoEbmFtZRgDIAEoCRISCgphY3Jpc3NDb2RlGAQgASgJEhkKEXN0cm9yYWdlX2NhcGFjaXR5GAUgASgCEhgKEHZlaGljbGVfY2F0ZWdvcnkYBiABKAkSFAoMdmVoaWNsZV90eXBlGAcgASgJEhoKEnRyYW5zbWlzc2lvbl9kcml2ZRgIIAEoCRIRCglmdWVsX3R5cGUYCSABKAkSCwoDQ08yGAogASgJQoUBCgljb20uZmxlZXRCDVZlaGljbGVzUHJvdG9QAVo1Z2l0aHViLmNvbS9zbWFydGZpeS9sb2dpdGVjaC9wa2cvZmxlZXQvYXBpL3YxO2ZsZWV0cGKiAgNGWFiqAgVGbGVldMoCBUZsZWV04gIRRmxlZXRcR1BCTWV0YWRhdGHqAgVGbGVldGIGcHJvdG8z", [file_fleet_v1_common, file_google_protobuf_timestamp]);

/**
 * @generated from message fleet.Vehicle
 */
export type Vehicle = Message<"fleet.Vehicle"> & {
  /**
   * @generated from field: fleet.BaseAsset base_asset = 1;
   */
  baseAsset?: BaseAsset;

  /**
   * The name of this  Vehicle.
   *
   * @generated from field: string call_sign = 2;
   */
  callSign: string;

  /**
   * The unique name of this  Vehicle using UUID.
   * The format is `providers/{provider}/deliveryVehicles/{vehicle}`.
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string acrissCode = 4;
   */
  acrissCode: string;

  /**
   * CAPACITY STORAGE m^3
   *
   * @generated from field: float strorage_capacity = 5;
   */
  strorageCapacity: number;

  /**
   * @generated from field: string vehicle_category = 6;
   */
  vehicleCategory: string;

  /**
   * @generated from field: string vehicle_type = 7;
   */
  vehicleType: string;

  /**
   * @generated from field: string transmission_drive = 8;
   */
  transmissionDrive: string;

  /**
   * @generated from field: string fuel_type = 9;
   */
  fuelType: string;

  /**
   * g/km
   *
   * @generated from field: string CO2 = 10;
   */
  CO2: string;
};

/**
 * Describes the message fleet.Vehicle.
 * Use `create(VehicleSchema)` to create a new message.
 */
export const VehicleSchema: GenMessage<Vehicle> = /*@__PURE__*/
  messageDesc(file_fleet_v1_vehicles, 0);


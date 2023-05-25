import { MetricType } from "../enum/metrics-type";
import { UnitType } from "../enum/unit-type";
import { IUnit } from "../interfaces/unit";
import * as headers from "./metrics-header";

export const UNIT_METADATA: IUnit[] = [
  {
    type: MetricType.CPU,
    unit: UnitType.Percentage,
    headers: headers.CPU_HEADER,
  },
  {
    type: MetricType.Memory,
    unit: UnitType.Mebibytes,
    headers: headers.MEM_HEADER,
  },
  {
    type: MetricType.Network,
    unit: UnitType.MegabytePerSecond,
    headers: headers.NET_HEADER,
  },
  {
    type: MetricType.TPS,
    unit: UnitType.RequestPerSecond,
    headers: headers.TPS_HEADER,
  },
  {
    type: MetricType.Response,
    unit: UnitType.Millisecond,
    headers: headers.RESPONSE_HEADER,
  },
];

export const UNIT_METADATA_V2: IUnit[] = [
  {
    type: MetricType.CPU,
    unit: UnitType.Percentage,
    headers: headers.CPU_HEADER_V2,
  },
  {
    type: MetricType.Memory,
    unit: UnitType.Percentage,
    headers: headers.MEM_HEADER_V2,
  },
  {
    type: MetricType.Network,
    unit: UnitType.MegabytePerSecond,
    headers: headers.NET_HEADER_V2,
  },
  {
    type: MetricType.TPS,
    unit: UnitType.RequestPerSecond,
    headers: headers.TPS_HEADER_V2,
  },
  {
    type: MetricType.Response,
    unit: UnitType.Millisecond,
    headers: headers.RESPONSE_HEADER_V2,
  },
];

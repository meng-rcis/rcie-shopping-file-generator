import * as headers from "./constant/metrics-header";
import * as meta from "./constant/unit-meta";
import { IHeader } from "./interfaces/header";
import { IMeta } from "./interfaces/meta";
import { IUnit } from "./interfaces/unit";

const generateHeader = (version: string): IHeader => {
  switch (version) {
    case "v1":
      return {
        CPU: headers.CPU_HEADER,
        MEMORY: headers.MEM_HEADER,
        NETWORK: headers.NET_HEADER,
        TPS: headers.TPS_HEADER,
        RESPONSE: headers.RESPONSE_HEADER,
      };
    case "v2":
      return {
        CPU: headers.CPU_HEADER_V2,
        MEMORY: headers.MEM_HEADER_V2,
        NETWORK: headers.NET_HEADER_V2,
        TPS: headers.TPS_HEADER_V2,
        RESPONSE: headers.RESPONSE_HEADER_V2,
      };
    default:
      throw new Error("Invalid version");
  }
};

const generateUnit = (version: string): IUnit[] => {
  switch (version) {
    case "v1":
      return meta.UNIT_METADATA;
    case "v2":
      return meta.UNIT_METADATA_V2;
    default:
      throw new Error("Invalid version");
  }
};

export const generateMeta = (version: string): IMeta => {
  const header = generateHeader(version);
  const unit = generateUnit(version);
  return { header, unit };
};

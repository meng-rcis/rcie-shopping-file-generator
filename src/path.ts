import fs from "fs";
import { IPath } from "./interfaces/path";
import {
  BASE_NAME,
  COMBINED,
  COMBINED_WITH_OUTPUT,
  COMBINED_WITH_OUTPUT_AND_STANDARDIZED_UNIT,
  CPU,
  LOG,
  MEMORY,
  BASE_PATH,
  NETWORK,
  RESPONSE,
  TPS,
} from "./constant/path";

export const getPath = (time: string, type: string): IPath => {
  if (!time) {
    throw new Error("Please enter the time of the test");
  }

  const isTypeValid =
    type.length === 3 && type.slice(0, 2) === "no" && isNumber(type.slice(2));
  if (type !== "default" && isTypeValid) {
    throw new Error("Please enter a valid type");
  }

  const name = `${time}_${BASE_NAME}${type}`;
  const fileBasePath = `${BASE_PATH}/${name}/`;
  const logFile = `${fileBasePath}${LOG}`;
  const cpuFile = `${fileBasePath}${CPU}`;
  const memoryFile = `${fileBasePath}${MEMORY}`;
  const networkFile = `${fileBasePath}${NETWORK}`;
  const tpsFile = `${fileBasePath}${TPS}`;
  const responseFile = `${fileBasePath}${RESPONSE}`;
  const metricsFile = `${fileBasePath}${COMBINED}`;
  const metricsWithOutputFile = `${fileBasePath}${COMBINED_WITH_OUTPUT}`;
  const metricsWithOutputAndStandardizedUnitFile = `${fileBasePath}${COMBINED_WITH_OUTPUT_AND_STANDARDIZED_UNIT}`;

  const isPathExist = verifyPath(
    cpuFile,
    memoryFile,
    networkFile,
    tpsFile,
    responseFile
  );
  if (!isPathExist) {
    throw new Error("Please enter a valid path");
  }

  const path: IPath = {
    logFile,
    cpuFile,
    memoryFile,
    networkFile,
    tpsFile,
    responseFile,
    metricsFile,
    metricsWithOutputFile,
    metricsWithOutputAndStandardizedUnitFile,
  };
  return path;
};

const isNumber = (value: string) => {
  return !isNaN(Number(value));
};

const verifyPath = (...paths: string[]): boolean => {
  paths.forEach((path) => {
    if (!fs.existsSync(path)) {
      return false;
    }
  });

  return true;
};

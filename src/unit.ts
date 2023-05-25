import { IPath } from "./interfaces/path";
import { IUnit } from "./interfaces/unit";
import { streamStandardizeUnit } from "./stream/unit";

export const standardizeUnit = async (
  path: IPath,
  unit: IUnit[]
): Promise<void> => {
  const { metricsWithOutputFile, metricsWithOutputAndStandardizedUnitFile } =
    path;

  await streamStandardizeUnit(
    metricsWithOutputFile,
    metricsWithOutputAndStandardizedUnitFile,
    unit
  );
};

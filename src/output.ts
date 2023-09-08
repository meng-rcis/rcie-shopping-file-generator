import { IMetric } from "./interfaces/metric";
import { IPath } from "./interfaces/path";
import { streamAddServerStatus } from "./stream/output";

export const addServerStatus = async (
  metrics: IMetric[],
  path: IPath
): Promise<void> => {
  const { metricsFile, metricsWithOutputFile } = path;

  await streamAddServerStatus(metricsFile, metricsWithOutputFile, metrics);
};

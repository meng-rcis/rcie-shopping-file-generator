import { IMetric } from "./interfaces/metric";
import { IPath } from "./interfaces/path";
import {
  streamAddServerStatus,
  streamGetFailedResponse,
} from "./stream/output";

export const addServerStatus = async (
  metrics: IMetric[],
  path: IPath
): Promise<void> => {
  const { logFile, metricsFile, metricsWithOutputFile } = path;
  const errorResponse: any[] = await streamGetFailedResponse(logFile);

  await streamAddServerStatus(
    metricsFile,
    metricsWithOutputFile,
    errorResponse,
    metrics
  );
};

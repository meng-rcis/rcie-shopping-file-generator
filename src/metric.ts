import { NETWORK } from "./constant/path";
import {
  CPU_HEADER,
  MEM_HEADER,
  NET_HEADER,
  RESPONSE_HEADER,
  TPS_HEADER,
} from "./constant/metrics-header";
import { MetricType } from "./enum/metrics-type";
import { IHeader } from "./interfaces/header";
import { IMetric } from "./interfaces/metric";
import { IPath } from "./interfaces/path";
import { streamMergeMetrics } from "./stream/metric";

export const generateMetrics = (path: IPath, header: IHeader): IMetric[] => {
  const metrics: IMetric[] = [
    { type: MetricType.CPU, path: path.cpuFile, headers: header.CPU },
    { type: MetricType.Memory, path: path.memoryFile, headers: header.MEMORY },
    {
      type: MetricType.Network,
      path: path.networkFile,
      headers: header.NETWORK,
    },
    { type: MetricType.TPS, path: path.tpsFile, headers: header.TPS },
    {
      type: MetricType.Response,
      path: path.responseFile,
      headers: header.RESPONSE,
    },
  ];
  return metrics;
};

export const mergeMetrics = async (
  metrics: IMetric[],
  path: IPath
): Promise<void> => {
  await streamMergeMetrics(metrics, path.metricsFile);
};

import fs from "fs";
import csv from "csv-parser";
// @ts-ignore
import { parse } from "json2csv";
import { findServerStatus } from "../utils/timestamp";
import {
  TIMESTAMP_HEADER,
  TIME_HEADER,
  SEVER_STATUS_HEADER,
  TPS_HEADER_V2,
} from "../constant/metrics-header";
import { LOG_HEADER } from "../constant/log-header";
import { IMetric } from "../interfaces/metric";
import { SEVER_STATUS } from "../constant/status";

export const streamGetFailedResponse = async (log: string): Promise<any[]> => {
  let countLog = 0;
  const failedResponse: any[] = [];

  return new Promise(function (resolve, reject) {
    fs.createReadStream(log)
      .pipe(csv({ separator: ",", headers: LOG_HEADER }))
      .on("data", (data: any) => {
        if (countLog === 0) {
          countLog++;
          return;
        }
        if (data.responseCode !== "200") {
          failedResponse.push(data);
        }
      })
      .on("end", () => {
        resolve(failedResponse);
      })
      .on("error", reject);
  });
};

export const streamAddServerStatus = async (
  currentFile: string,
  newFile: string,
  errorResponse: any[],
  metrics: IMetric[]
): Promise<void> => {
  let count = 0;
  const collection: any[] = [];
  const metricsHeaders = metrics.flatMap((metric) => metric.headers);
  const sortedErrors = errorResponse.sort((a, b) => a.timeStamp - b.timeStamp);

  return new Promise(function (resolve, reject) {
    fs.createReadStream(currentFile)
      .pipe(
        csv({
          separator: ",",
          headers: [TIME_HEADER, TIMESTAMP_HEADER, ...metricsHeaders],
        })
      )
      .on("data", (data: any) => {
        if (count === 0) {
          count++;
          return;
        }
        const timeStamp = data[TIMESTAMP_HEADER];
        const tpsError = data[TPS_HEADER_V2[1]];
        const serverStatus =
          tpsError === "0 req/s" ? SEVER_STATUS.OK : SEVER_STATUS.FAIL; // Valid only V2
        // const serverStatus = findServerStatus(timeStamp, sortedErrors);
        // if (serverStatus === "") {
        //   return;
        // }
        data[SEVER_STATUS_HEADER] = serverStatus;
        collection.push(data);
      })
      .on("end", () => {
        var result = parse(collection);
        fs.writeFileSync(newFile, result);
        resolve();
      })
      .on("error", reject);
  });
};

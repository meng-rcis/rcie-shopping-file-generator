import { ERROR_BOUND } from "../constant/bound";
import { SEVER_STATUS } from "../constant/status";

export const findServerStatus = (
  timeStamp: string,
  failedResponse: any[]
): string => {
  const isTimeStampValid =
    Number(failedResponse[failedResponse.length - 1].timeStamp) >=
    Number(timeStamp);

  if (!isTimeStampValid) {
    return "";
  }

  const timeStampInt = Number(timeStamp);
  let skip = 0;

  for (let i = 0; i < failedResponse.length; i++) {
    const error = failedResponse[i];
    const isTimeStampBigger = timeStampInt > Number(error.timeStamp);
    if (!isTimeStampBigger) {
      break;
    }
    skip++;
  }

  if (skip >= failedResponse.length) return "";

  const nearestFailTime = Number(failedResponse[skip].timeStamp) - timeStampInt;

  // If the time difference between the metrics log and error time is greater than this value, the metrics log will be considered as a success
  return nearestFailTime > ERROR_BOUND ? SEVER_STATUS.OK : SEVER_STATUS.FAIL;
};

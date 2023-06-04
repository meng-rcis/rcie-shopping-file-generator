import { ERROR_BOUND } from "../constant/bound";
import { SEVER_STATUS } from "../constant/status";

export const findServerStatus = (
  timeStamp: string,
  errorResponses: any[]
): string => {
  const currentTime = Number(timeStamp);
  let errorIndex = 0;

  for (let i = 0; i < errorResponses.length; i++) {
    const errorTime = Number(errorResponses[i].timeStamp);
    const isErrorTimeReachCurrentTime = errorTime >= currentTime;
    if (isErrorTimeReachCurrentTime) break;
    errorIndex++;
  }

  if (errorIndex === 0) return SEVER_STATUS.OK;
  const previousErrorTime = Number(errorResponses[errorIndex - 1].timeStamp);
  const nearestPreviousFail = currentTime - previousErrorTime;

  // If the time difference between the metrics log and error time is greater than this value, the metrics log will be considered as a success
  return nearestPreviousFail > ERROR_BOUND
    ? SEVER_STATUS.OK
    : SEVER_STATUS.FAIL;
};

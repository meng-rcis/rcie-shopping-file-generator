export const TIME_HEADER = "Time";
export const TIMESTAMP_HEADER = "Timestamp";
export const SEVER_STATUS_HEADER = "status";
export const CPU_HEADER = [
  "iowait",
  "irq",
  "nice",
  "softirq",
  "steal",
  "system",
  "user",
];
export const MEM_HEADER = ["Used", "Buffer", "Cached", "Free"];
export const NET_HEADER = [
  "br-10cd1f6f3899 receive",
  "docker0 receive",
  "eth0 receive",
  "eth1 receive",
  "lo receive",
  "veth6750e95 receive",
  "br-10cd1f6f3899 transmit",
  "docker0 transmit",
  "eth0 transmit",
  "eth1 transmit",
  "lo transmit",
  "veth6750e95 transmit",
];
export const TPS_HEADER = ["total-req-rate", "ok-req-rate", "error-req-rate"];
export const RESPONSE_HEADER = ["avg-res-time"];
export const LATENCY_HEADER = [
  "latency-50-percentile",
  "latency-95-percentile",
  "latency-99-percentile",
];
export const CPU_HEADER_V2 = ["cpu_usage"];
export const MEM_HEADER_V2 = ["memory_usage"];
export const NET_HEADER_V2 = ["bandwidth_inbound", "bandwidth_outbound"];
export const TPS_HEADER_V2 = ["tps", "tps_error"];
export const RESPONSE_HEADER_V2 = ["response_time"];

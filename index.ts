import {
  getPath,
  addServerStatus,
  mergeMetrics,
  generateMetrics,
  standardizeUnit,
  generateMeta,
} from "./src";

const main = async () => {
  const cli = process.argv;
  const time = cli[2];
  const type = cli[3] || "default";
  const version = cli[4] || "v1";

  console.log("Generating metrics path...");
  const path = getPath(time, type);

  console.log("Generating meta...");
  const meta = generateMeta(version);

  console.log("Generating metrics file...");
  const metrics = generateMetrics(path, meta.header);
  await mergeMetrics(metrics, path);

  console.log("Adding timestamp output to metrics file...");
  await addServerStatus(metrics, path);

  console.log("Standardize unit...");
  await standardizeUnit(path, meta.unit);

  console.log("Done!");
};

main();

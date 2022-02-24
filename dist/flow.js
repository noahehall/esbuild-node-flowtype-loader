// flow.mjs
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";
import flow from "../node_modules/flow-bin/index.js";
import flowRemoveTypes from "../node_modules/flow-remove-types/index.js";
async function load(url, context, defaultLoad) {
  console.info("\n\n @nodeproto: examing file", context, url);
  if (context.format !== "module")
    return defaultLoad(url, context, defaultLoad);
  const { source } = await defaultLoad(url, context);
  const rawSource = source.toString();
  const first100chars = rawSource.substring(0, 100).toLowerCase();
  const isFlow = first100chars.includes("@flow") && !first100chars.includes("@flowtodo");
  if (!isFlow)
    return defaultLoad(url, context, defaultLoad);
  console.info("\n@nodeproto: removing flow types", url);
  if (process.env.FLOW_CHECK)
    execFile(flow, ["check", fileURLToPath(url)], (err, stdout) => {
      console.info(stdout);
    });
  console.info("\n\nsource being returned\n\n", url, flowRemoveTypes(rawSource).toString());
  return {
    format: context.format,
    source: Buffer.from(flowRemoveTypes(rawSource).toString())
  };
}
export {
  load
};

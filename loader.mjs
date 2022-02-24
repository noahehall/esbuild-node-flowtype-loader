export async function load(url, context, defaultLoad) {
  return defaultLoad(url, { format: "commonjs" }, defaultLoad);
  // return defaultLoad(url, context, defaultLoad);
}

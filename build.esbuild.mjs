import esbuild from "esbuild";

esbuild
  .build({
    assetNames: "assets/[name]-[hash]",
    bundle: true,
    entryPoints: ["./index.mjs"],
    external: ["./node_modules/*"],
    format: "esm",
    outdir: "./dist",
    platform: "node",
    target: ["node16.14.0"],
    watch: false,
    write: true,
  })
  .then(({ errors, warnings }) => console.info({ errors, warnings }));

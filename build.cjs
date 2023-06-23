const { build } = require("esbuild");
const { globSync } = require("glob");
const pkg = require("./package.json");

const run = ({ entryPoints, pkg }) => {
  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    outdir: "lib",
    target: "es2019",
    bundle: false,
    sourcemap: true,
    minify: true,
    external,
  };

  Promise.all([
    build({
      ...baseConfig,
      format: "cjs",
      outExtension: {
        ".js": ".cjs",
      },
    }),
    build({
      ...baseConfig,
      format: "esm",
    }),
  ]).catch(() => process.exit(1));
};

run({ entryPoints: globSync("./react/**/*.{ts,tsx}"), pkg });

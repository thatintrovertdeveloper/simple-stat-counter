const esbuild = require("esbuild");

const defaultOptions = {
  entryPoints: ["src/simple-stat-counter.js"],
  bundle: true,
  minify: true,
};

const buildOptions = {
  ...defaultOptions,
  format: "esm",
  outfile: "dist/index.js",
};

const buildBrowserOptions = {
  ...defaultOptions,
  globalName: "SimpleStatCounter",
  outfile: "dist/simple-stat-counter.min.js",
  platform: "browser",
  bundle: false,
};

async function build(options) {
  try {
    await esbuild.build(options);
    console.log(`Built ${options.outfile}`);
  } catch (error) {
    console.error(`Error building ${options.outfile}:`, error);
    process.exit(1);
  }
}

async function main() {
  await build(buildOptions);
  await build(buildBrowserOptions);
}

main();

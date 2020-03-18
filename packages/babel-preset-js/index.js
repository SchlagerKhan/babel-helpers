const defaultTargets = "> 0.25%, not dead";
const defaultExtensions = [".js", ".jsx"];
const defaultRoot = ["."];
const defaultAlias = {};

const IS_DEV = process.env.NODE_ENV === "development";

module.exports = function(api, opts) {
  const {
    // prettier-ignore
    targets = defaultTargets,
    extensions = defaultExtensions,
    root = defaultRoot,
    alias = defaultAlias,
    includeMetadata,
    includeStyledComponents = true,
    envOpts = {}
  } = opts;

  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-export-default-from",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["babel-plugin-module-resolver", { root, extensions, alias }],
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        style: "css"
      }
    ]
  ];

  if (includeMetadata) {
    plugins.push("babel-plugin-transform-typescript-metadata");
  }

  if (includeStyledComponents) {
    plugins.push([
      "babel-plugin-styled-components",
      {
        displayName: IS_DEV,
        minify: !IS_DEV
      }
    ]);
  }

  return {
    presets: [
      // prettier-ignore
      ['@babel/env', { targets, ...envOpts }],
      "@babel/react"
    ],
    plugins
  };
};

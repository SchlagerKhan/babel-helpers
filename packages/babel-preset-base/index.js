const defaultTargets = "> 0.25%, not dead";

const IS_DEV = process.env.NODE_ENV === "development";

module.exports = function (api, opts) {
  const {
    // prettier-ignore
    targets = defaultTargets,
    envOpts = {},

    resolver = {},
    includeImport = true,
    includeStyledComponents = true
  } = opts;

  const { root, alias, extensions } = resolver;

  const plugins = [];

  if (root || extensions || alias) {
    plugins.push(["babel-plugin-module-resolver", { root, extensions, alias }]);
  }

  if (includeImport) {
    plugins.push([
      "babel-plugin-import",
      {
        libraryName: "antd",
        style: "css"
      }
    ]);
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
    // prettier-ignore
    presets: [
        ["@babel/env", { targets, ...envOpts }],
        "@babel/react",
      ],
    plugins
  };
};

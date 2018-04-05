exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-html":
      config.plugin('define', webpack.DefinePlugin, [ { "global.GENTLY": false } ]);

        break;
  }

  return config;
};

// Learn more https://docs.expo.io/guides/customizing-metro
//const { getDefaultConfig } = require('expo/metro-config');

//module.exports = getDefaultConfig(__dirname);

/// referencias install biblioteca react native svg : https://github.com/kristerkari/react-native-svg-transformer 
// substituindo a parte de For Expo SDK v41.0.0 or newer - 
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
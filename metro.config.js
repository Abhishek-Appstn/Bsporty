const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const baseConfig = getDefaultConfig(__dirname);
const wrappedConfig = wrapWithReanimatedMetroConfig(baseConfig);

const finalConfig = mergeConfig(wrappedConfig, { resetCache: true });

module.exports = finalConfig;

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          core: './src/core',
          components: './src/core/components',
          src: './src',
        },
      },
    ],
    // this Plugin should be the last.
    'react-native-reanimated/plugin',
  ],
};

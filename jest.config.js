module.exports = {
  preset: "jest-expo",
  bail: false,
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-button|@react-native|@react-navigation|expo|expo-status-bar|react-native-gesture-handler|react-native-safe-area-context)/)",
  ],
  setupFiles: [
    "./src/mocks/libs/async-storage.js",
    "./src/mocks/libs/react-native-safe-area-context.js",
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  coverageDirectory: "./__tests__/coverage",
};

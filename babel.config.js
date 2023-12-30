module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@enums": "./src/enums",
            "@interface": "./src/interface",
            "@images": "./src/images",
            "@stores": "./src/stores",
            "@style": "./src/style",
            "@recoil": "./src/recoil",
            "@pages": "./src/pages",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};

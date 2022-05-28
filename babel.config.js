module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          // root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@elements": "./src/elements",
            "@hooks": "./src/hooks",
            "@lib": "./src/lib",
            "@layout": "./src/layout",
            "@screens": "./src/screens",
            "@stores": "./src/stores",
            "@typings": "./src/typings",
            "@navigation": "./src/navigation",
            "@constants": "./src/constants",
            "@services": "./src/services",
          },
        },
      ],
    ],
  };
};

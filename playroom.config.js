module.exports = {
  components: "./src/index.ts",
  outputPath: "./dist/playroom",
  widths: [320, 560, 760, 1024, 1366, 1920],
  frameComponent: "./playroom/FrameComponent.tsx",
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{ loader: "ts-loader" }],
          exclude: /node_modules/,
        },
      ],
    },
  }),
};

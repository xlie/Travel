module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5,
            selectorBlackList: [".van"],
            propList: ["*"],
            minPixelValue: 2
          })
        ]
      }
    }
  }
}
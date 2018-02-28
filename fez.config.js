export default {
  /* ==================================
   * @ 2017 FEZ 前端模块工程自动化构建工具
   * https://github.com/furic-zhao/fez
   * ================================== */

  webpack: {
    config: {
      externals: {
        vue: 'Vue',
        framework7: 'Framework7',
        'framework7-vue': 'Framework7Vue'
      }
    }
  },

  useREM: {
    css: {
      available: true,
    }
  },

  useInject: {
    vendor: {
      js: [{
        target: "vendor-f7.js",
        contain: ["**/framework7.js"]
      }, {
        target: "vendor-f7-vue.js",
        contain: ["**/vue.js", "**/framework7-vue.js"]
      }],
      css: [{
        target: "vendor-f7.ios.css",
        contain: ["**/framework7.ios.css"]
      }, {
        target: "vendor-f7.ios.colors.css",
        contain: ["**/framework7.ios.colors.css"]
      }]
    }
  }
}

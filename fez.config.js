export default {
    /* ==================================
     * @ 2017 FEZ 前端模块工程自动化构建工具
     * https://github.com/furic-zhao/fez
     * ================================== */

    browserify: {
        shim: [{
            import: "Vue",
            from: "vue"
        }, {
            import: "Framework7",
            from: "framework7"
        }, {
            import: "Framework7Vue",
            from: "framework7-vue"
        }]
    },

    useREM: {
        css: {
            available: true,
        }
    },

    useInject: {
        bower: {
            available: true,
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
        },

        lib: {
            available: true,
        },

        views: true
    }
}

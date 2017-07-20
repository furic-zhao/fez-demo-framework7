# fez-demo-framework7
基于FEZ构建的整合Framework7用于开发HyBrid APP 或H5 WEBAPP 单文件页面的模块化开发示例

> 本示例演示了基于FEZ构建 Framework7 结合Vue 单文件组件形式的开发结构，借助 FEZ 可以使用es6标准特性开发项目。

> [Framework7](http://framework7.cn/) 是一个开源免费的框架可以用来开发混合移动应用（原生和HTML混合）或者开发 iOS & Android 风格的WEB APP。

#### Framework7 更多信息参考
- 【[Framework7官方网站](http://framework7.io/)】
- 【[Framework7中文网站](http://framework7.cn/)】
- 【[Framework7官方Vue网站](http://framework7.io/vue/)】
- 【[Framework7官方React网站](http://framework7.io/react/)】

## 使用方法

- 本示例依赖 【[FEZ前端模块化工程开发框架](https://github.com/furic-zhao/fez)】请先`git clone https://github.com/furic-zhao/fez.git` 下载 FEZ工程框架 到本地任意目录

- 进入 FEZ 工程目录，执行 `git clone https://github.com/furic-zhao/fez-demo-framework7.git` 将本示例下载到 FEZ 根目录

- 进入 fez-demo-framework7 目录执行`gulp`，FEZ会自动打开系统默认浏览器并进入研发环境。

> FEZ默认支持3层目录结构，若项目目录太深，请自行修改项目目录`gulpfile.babel.js`文件中的`fezDeep`数值。

## 目录结构

#### 源码 src 目录

````bash
.
├── lib
│   └── q.js
├── static
│   ├── fonts
│   ├── images
│   │   └── fez-logo.png
│   ├── slice
│   │   ├── weibo.png
│   │   ├── weibo@2x.png
│   │   ├── weibo@3x.png
│   │   ├── weixin.png
│   │   ├── weixin@2x.png
│   │   └── weixin@3x.png
│   └── styles
│       ├── common.less
│       ├── index
│       ├── index.less
│       ├── lib
│       │   ├── mixins.less
│       │   ├── normalize.css
│       │   ├── rem.less
│       │   └── reset.less
│       └── public
└── views
    ├── index
    │   ├── index.html
    │   ├── index.js
    │   ├── index.vue
    │   ├── module
    │   │   ├── about
    │   │   │   └── index.vue
    │   │   ├── article
    │   │   │   ├── index.vue
    │   │   │   └── service.js
    │   │   ├── dynamic-route
    │   │   │   └── index.vue
    │   │   ├── form
    │   │   │   └── index.vue
    │   │   └── listing
    │   │       ├── index.vue
    │   │       └── service.js
    │   ├── routes.js
    │   └── service.js
    └── public
        └── demo-data.js
````

#### 研发环境目录

````bash
.
├── bower_components
│   ├── Framework7-Vue
│   │   └── dist
│   │       └── framework7-vue.js
│   ├── framework7
│   │   └── dist
│   │       ├── css
│   │       │   ├── framework7.ios.colors.css
│   │       │   └── framework7.ios.css
│   │       └── js
│   │           └── framework7.js
│   └── vue
│       └── dist
│           └── vue.js
├── index.html
├── lib
│   └── q.js
├── static
│   ├── css
│   │   ├── common.css
│   │   └── index.css
│   ├── images
│   │   └── fez-logo.png
│   ├── js
│   │   └── index.js
│   └── slice
│       ├── weibo.png
│       ├── weibo@2x.png
│       ├── weibo@3x.png
│       ├── weixin.png
│       ├── weixin@2x.png
│       └── weixin@3x.png
├── zindex
│   ├── css
│   │   └── bootstrap.min.css
│   └── js
│       ├── bootstrap.min.js
│       ├── handlebars-v4.0.5.min.js
│       ├── jquery-2.1.3.min.js
│       └── qrcode.min.js
└── zindex.html
````

#### 生产环境目录

````bash
.
├── index.html
├── manifest.json
└── static
    ├── css
    │   ├── common.017ee2aa.css
    │   ├── index.d41d8cd9.css
    │   ├── vendor-f7.ios.6c0310a5.css
    │   └── vendor-f7.ios.colors.15c17f88.css
    ├── images
    │   └── fez-logo.44b46304.png
    └── js
        ├── common.34f596f9.js
        ├── index.523cff3b.js
        ├── vendor-f7-vue.dac95ae2.js
        └── vendor-f7.3899724c.js
````



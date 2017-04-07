(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _vue = (typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null);

var _vue2 = _interopRequireDefault(_vue);

var _framework = (typeof window !== "undefined" ? window['Framework7'] : typeof global !== "undefined" ? global['Framework7'] : null);

var _framework2 = _interopRequireDefault(_framework);

var _framework7Vue = (typeof window !== "undefined" ? window['Framework7Vue'] : typeof global !== "undefined" ? global['Framework7Vue'] : null);

var _framework7Vue2 = _interopRequireDefault(_framework7Vue);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _index = require('./index.vue');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Init F7 Vue Plugin


// Import Routes


// Import F7
_vue2.default.use(_framework7Vue2.default);

// Init App


// Import App Component


// Import F7 Vue Plugin
// Import Vue
new _vue2.default({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        root: '#app',
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: _routes2.default
    },
    // Register App Component
    components: {
        app: _index2.default
    }
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./index.vue":2,"./routes.js":10}],2:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            index: {
                fezdesc: "",
                jumbotron: {
                    title: "",
                    content: "",
                    button: {
                        name: "",
                        href: ""
                    }
                }
            },
            common: {
                siteName: "",

                navData: [],

                footerText: ""
            }
        };
    },

    methods: {
        indexInit: function indexInit() {
            var _vm = this;
            _service2.default.renderData().then(function (data) {
                _vm.index = (0, _extends3.default)({}, data.index);
                _vm.common = (0, _extends3.default)({}, data.common);
            });
        }
    },
    created: function created() {
        this.indexInit();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('f7-statusbar'),_vm._v(" "),_c('f7-panel',{attrs:{"right":"","cover":"","layout":"dark"}},[_c('f7-view',{attrs:{"id":"right-panel-view","navbar-through":"","dynamic-navbar":true}},[(_vm.$theme.ios)?_c('f7-navbar',{attrs:{"title":"FEZ导航","sliding":""}}):_vm._e(),_vm._v(" "),_c('f7-pages',[_c('f7-page',[(_vm.$theme.material)?_c('f7-navbar',{attrs:{"title":"FEZ导航","sliding":""}}):_vm._e(),_vm._v(" "),_c('f7-list',_vm._l((_vm.common.nav),function(item){return _c('f7-list-item',{attrs:{"link":item.href,"title":item.name,"link-view":"#main-view","link-close-panel":""}})}))],1)],1)],1)],1),_vm._v(" "),_c('f7-views',[_c('f7-view',{attrs:{"id":"main-view","navbar-through":"","dynamic-navbar":true,"main":""}},[(_vm.$theme.ios)?_c('f7-navbar',[_c('f7-nav-center',{attrs:{"sliding":""}},[_vm._v(_vm._s(_vm.common.siteName))]),_vm._v(" "),_c('f7-nav-right',[_c('f7-link',{attrs:{"icon":"icon-bars","open-panel":"right"}})],1)],1):_vm._e(),_vm._v(" "),_c('f7-pages',[_c('f7-page',[(_vm.$theme.material)?_c('f7-navbar',[_c('f7-nav-left',[_c('f7-link',{attrs:{"icon":"icon-bars","open-panel":"left"}})],1),_vm._v(" "),_c('f7-nav-center',{attrs:{"sliding":""}},[_vm._v("Framework7")]),_vm._v(" "),_c('f7-nav-right',[_c('f7-link',{attrs:{"icon":"icon-bars","open-panel":"right"}})],1)],1):_vm._e(),_vm._v(" "),_c('f7-block-title',[_vm._v(_vm._s(_vm.index.jumbotron.title))]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',[_vm._v(_vm._s(_vm.index.jumbotron.content))])]),_vm._v(" "),_c('f7-card',[_c('f7-card-header',[_vm._v("\n                            "+_vm._s(_vm.index.fezdesc)+"\n                        ")]),_vm._v(" "),_c('f7-card-content',[_c('div',{staticClass:"fez-pic"})])],1),_vm._v(" "),_c('f7-list',_vm._l((_vm.common.nav),function(item){return _c('f7-list-item',{attrs:{"link":item.href,"title":item.name,"link-view":"#main-view","link-close-panel":""}})})),_vm._v(" "),_c('f7-block-title',[_vm._v("更多信息")]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":"https://github.com/furic-zhao/fez","external":"","target":"_blank"}},[_vm._v("FEZ Github社区")])],1),_vm._v(" "),_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":"http://framework7.cn/","external":"","target":"_blank"}},[_vm._v("Framework7 中文网")])],1),_vm._v(" "),_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":"https://cn.vuejs.org/","external":"","target":"_blank"}},[_vm._v("Vue 中文网")])],1),_vm._v(" "),_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":"http://vue.framework7.cn/","external":"","target":"_blank"}},[_vm._v("Framework7-Vue")])],1)]),_vm._v(" "),_c('f7-block',[_c('p',[_vm._v(_vm._s(_vm.common.tips))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.common.footerText))])])],1)],1)],1)],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fa87ee8", __vue__options__)
  } else {
    hotAPI.reload("data-v-6fa87ee8", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":11,"babel-runtime/helpers/extends":15,"vue-hot-reload-api":75}],3:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('f7-page',[_c('f7-navbar',{attrs:{"title":"关于FEZ","back-link":"Back","sliding":""}}),_vm._v(" "),_c('f7-block-title',[_vm._v("关于FEZ")]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('div',{staticClass:"fez-pic"}),_vm._v(" "),_c('p',[_vm._v("FEZ 是面向 前端模块化工程 的开发框架。主要为解决 前端开发多人高效协作、提高开发质量、及项目功能扩展的快速迭代和可维护性等问题。核心包括功能模块化、结构规范化、及开发自动化。")]),_vm._v(" "),_c('p',[_vm._v("FE是“front end”首字母，Z是“自动化”首拼音字母，FEZ 意为“前端自动化”。谐音“啡思”，意喻“喝着咖啡，专注思考”。让前端开发停止大量繁杂的手工劳作，更专注于业务逻辑！谐音又读“分治”，体现模块化开发理念！")])])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10492907", __vue__options__)
  } else {
    hotAPI.reload("data-v-10492907", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"vue-hot-reload-api":75}],4:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _service = require("./service");

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            detail: {
                title: "",
                desc: "",
                content: "",
                viewMore: {
                    text: "",
                    href: ""
                }
            }
        };
    },

    methods: {
        jumbotron: function jumbotron(id) {
            var _vm = this;
            _service2.default.renderData(id).then(function (data) {
                _vm.detail = (0, _extends3.default)({}, data);
            });
        }
    },
    created: function created() {
        var _vm = this;
        var id = _vm.$route.params.id;
        this.jumbotron(id);
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('f7-page',[_c('f7-navbar',{attrs:{"title":_vm.detail.title,"back-link":"Back","sliding":""}}),_vm._v(" "),_c('f7-block-title',[_vm._v("Hello "+_vm._s(_vm.detail.title)+"!")]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',[_vm._v(_vm._s(_vm.detail.desc))])]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.detail.content)}}),_vm._v(" "),_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":_vm.detail.viewMore.href,"external":"","target":"_blank"}},[_vm._v(_vm._s(_vm.detail.viewMore.text))])],1)])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-888a9120", __vue__options__)
  } else {
    hotAPI.reload("data-v-888a9120", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":5,"babel-runtime/helpers/extends":15,"vue-hot-reload-api":75}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        return _q2.default.Promise(function (resolve, reject) {
            var rtnData = {};

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    if (v.title === id) {
                        rtnData = v;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            resolve(rtnData);
        });
    }
};

},{"babel-runtime/core-js/get-iterator":13,"public/demo-data":12,"q":74}],6:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('f7-page',[_c('f7-navbar',{attrs:{"title":"REST风格的动态路由","back-link":"Back","sliding":""}}),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('ul',[_c('li',[_c('b',[_vm._v("Url:")]),_vm._v(" "+_vm._s(_vm.$route.url))]),_vm._v(" "),_c('li',[_c('b',[_vm._v("Path:")]),_vm._v(" "+_vm._s(_vm.$route.path))]),_vm._v(" "),_c('li',[_c('b',[_vm._v("Hash:")]),_vm._v(" "+_vm._s(_vm.$route.hash))]),_vm._v(" "),_c('li',[_c('b',[_vm._v("Params:")]),_vm._v(" "),_c('ul',_vm._l((_vm.$route.params),function(value,key){return _c('li',[_c('b',[_vm._v(_vm._s(key)+":")]),_vm._v(" "+_vm._s(value))])}))]),_vm._v(" "),_c('li',[_c('b',[_vm._v("Query:")]),_vm._v(" "),_c('ul',_vm._l((_vm.$route.query),function(value,key){return _c('li',[_c('b',[_vm._v(_vm._s(key)+":")]),_vm._v(" "+_vm._s(value))])}))]),_vm._v(" "),_c('li',[_c('b',[_vm._v("Route:")]),_vm._v(" "+_vm._s(_vm.$route.route))])])]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('f7-link',{on:{"click":function($event){_vm.$router.back()}}},[_vm._v("Go back via Router API")])],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12331f96", __vue__options__)
  } else {
    hotAPI.reload("data-v-12331f96", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"vue-hot-reload-api":75}],7:[function(require,module,exports){
(function (global){
;(function(){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('f7-page',[_c('f7-navbar',{attrs:{"title":"表单示例","back-link":"Back","sliding":""}}),_vm._v(" "),_c('f7-block-title',[_vm._v("Form")]),_vm._v(" "),_c('f7-list',{attrs:{"form":""}},[_c('f7-list-item',[_c('f7-label',[_vm._v("Name")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"text","placeholder":"Name"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Password")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"password","placeholder":"Password"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("E-mail")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"email","placeholder":"E-mail"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("URL")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"url","placeholder":"URL"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Phone")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"tel","placeholder":"Phone"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Birth date")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"date","placeholder":"Birth date","value":"2014-04-30"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Date time")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"datetime-local"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Gender")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"select"}},[_c('option',{attrs:{"value":"1"}},[_vm._v("Male")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Female")])])],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Switch")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"switch"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Range")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"range","min":"0","max":"100","step":"1","value":"90"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',[_vm._v("Textarea")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"textarea","placeholder":"Textarea"}})],1)],1),_vm._v(" "),_c('f7-block-title',[_vm._v("Form With Floating Labels")]),_vm._v(" "),_c('f7-list',{attrs:{"form":""}},[_c('f7-list-item',[_c('f7-label',{attrs:{"floating":""}},[_vm._v("Name")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"text","placeholder":"Name"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',{attrs:{"floating":""}},[_vm._v("Password")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"password","placeholder":"Password"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-label',{attrs:{"floating":""}},[_vm._v("E-mail")]),_vm._v(" "),_c('f7-input',{attrs:{"type":"email","placeholder":"E-mail"}})],1)],1),_vm._v(" "),_c('f7-block-title',[_vm._v("Form Without Labels")]),_vm._v(" "),_c('f7-list',{attrs:{"form":""}},[_c('f7-list-item',[_c('f7-input',{attrs:{"type":"text","placeholder":"Name"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-input',{attrs:{"type":"password","placeholder":"Password"}})],1),_vm._v(" "),_c('f7-list-item',[_c('f7-input',{attrs:{"type":"email","placeholder":"E-mail"}})],1)],1),_vm._v(" "),_c('f7-block-title',[_vm._v("Checkboxes")]),_vm._v(" "),_c('f7-list',{attrs:{"form":""}},_vm._l((3),function(n){return _c('f7-list-item',{attrs:{"checkbox":"","name":"my-checkbox","value":n,"title":'Checkbox ' + n}})})),_vm._v(" "),_c('f7-block-title',[_vm._v("Radios")]),_vm._v(" "),_c('f7-list',{attrs:{"form":""}},_vm._l((3),function(n){return _c('f7-list-item',{attrs:{"radio":"","name":"my-radio","checked":n === 1,"value":n,"title":'Radio ' + n}})})),_vm._v(" "),_c('f7-block-title',[_vm._v("Buttons")]),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',[_c('f7-button',[_vm._v("Button")])],1),_vm._v(" "),_c('p',[_c('f7-button',{attrs:{"round":""}},[_vm._v("Button Round")])],1),_vm._v(" "),_c('p',[_c('f7-button',{attrs:{"fill":""}},[_vm._v("Button Fill")])],1),_vm._v(" "),_c('p',[_c('f7-buttons',[_c('f7-button',{attrs:{"round":"","active":""}},[_vm._v("Button 1")]),_vm._v(" "),_c('f7-button',{attrs:{"round":""}},[_vm._v("Button 2")]),_vm._v(" "),_c('f7-button',{attrs:{"round":""}},[_vm._v("Button 3")])],1)],1),_vm._v(" "),_c('p',[_c('f7-buttons',{attrs:{"color":"orange"}},[_c('f7-button',{attrs:{"round":"","big":""}},[_vm._v("Button 1")]),_vm._v(" "),_c('f7-button',{attrs:{"round":"","big":"","active":""}},[_vm._v("Button 2")]),_vm._v(" "),_c('f7-button',{attrs:{"round":"","big":""}},[_vm._v("Button 3")])],1)],1),_vm._v(" "),_c('p',[_c('f7-grid',[_c('f7-col',[_c('f7-button',{attrs:{"big":"","fill":"","color":"green"}},[_vm._v("Send")])],1),_vm._v(" "),_c('f7-col',[_c('f7-button',{attrs:{"big":"","fill":"","color":"red"}},[_vm._v("Delete")])],1)],1)],1),_vm._v(" "),_c('p',[_c('f7-grid',[_c('f7-col',[_c('f7-button',{attrs:{"fill":"","raised":"","color":"green"}},[_vm._v("Raised")])],1),_vm._v(" "),_c('f7-col',[_c('f7-button',{attrs:{"raised":"","color":"red"}},[_vm._v("Raised")])],1),_vm._v(" "),_c('f7-col',[_c('f7-button',{attrs:{"fill":"","raised":"","color":"pink"}},[_vm._v("Raised")])],1)],1)],1)])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3b1d740", __vue__options__)
  } else {
    hotAPI.reload("data-v-e3b1d740", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"vue-hot-reload-api":75}],8:[function(require,module,exports){
(function (global){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _service = require('./service');

var _service2 = _interopRequireDefault(_service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            listing: [],
            jumbotron: {
                button: {}
            }
        };
    },

    methods: {
        listingInit: function listingInit() {
            var _vm = this;
            _service2.default.renderData().then(function (data) {
                _vm.listing = data.listing;
                _vm.jumbotron = (0, _extends3.default)({}, data.jumbotron);
            });
        }
    },
    created: function created() {
        this.listingInit();
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('f7-page',[_c('f7-navbar',{attrs:{"title":_vm.jumbotron.title,"back-link":"Back","sliding":""}}),_vm._v(" "),_c('f7-block',{attrs:{"inner":""}},[_c('p',[_vm._v(_vm._s(_vm.jumbotron.content))]),_vm._v(" "),_c('p',[_c('f7-link',{staticClass:"button",attrs:{"href":_vm.jumbotron.button.href,"external":"","target":"_blank"}},[_vm._v(_vm._s(_vm.jumbotron.button.name))])],1)]),_vm._v(" "),_c('div',{staticClass:"list-block media-list"},[_c('ul',_vm._l((_vm.listing),function(item){return _c('li',{staticClass:"swipeout"},[_c('div',{staticClass:"swipeout-content"},[_c('a',{staticClass:"item-link item-content",attrs:{"href":'/article/id/'+item.title+'/'}},[_c('div',{staticClass:"item-inner"},[_c('div',{staticClass:"item-title-row"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('div',{staticClass:"item-text"},[_vm._v(_vm._s(item.desc))])])])])])}))])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install((typeof window !== "undefined" ? window['Vue'] : typeof global !== "undefined" ? global['Vue'] : null), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fd18b7e", __vue__options__)
  } else {
    hotAPI.reload("data-v-6fd18b7e", __vue__options__)
  }
})()}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./service":9,"babel-runtime/helpers/extends":15,"vue-hot-reload-api":75}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        var rtnData = [];
        return _q2.default.Promise(function (resolve, reject) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {

                for (var _iterator = (0, _getIterator3.default)(_demoData2.default.frames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var v = _step.value;

                    var dataItem = {};

                    dataItem.title = v.title;
                    dataItem.desc = v.desc;
                    dataItem.id = v.title;

                    rtnData.push(dataItem);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            resolve({
                "listing": rtnData,
                "jumbotron": _demoData2.default.list.jumbotron
            });
        });
    }
};

},{"babel-runtime/core-js/get-iterator":13,"public/demo-data":12,"q":74}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    path: '/about/',
    component: require('./module/about/index.vue')
}, {
    path: '/form/',
    component: require('./module/form/index.vue')
}, {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./module/dynamic-route/index.vue')
}, {
    path: '/listing/',
    component: require('./module/listing/index.vue')
}, {
    path: '/article/id/:id/',
    component: require('./module/article/index.vue')
}];

},{"./module/about/index.vue":3,"./module/article/index.vue":4,"./module/dynamic-route/index.vue":6,"./module/form/index.vue":7,"./module/listing/index.vue":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _demoData = require('public/demo-data');

var _demoData2 = _interopRequireDefault(_demoData);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    renderData: function renderData() {
        return _q2.default.Promise(function (resolve, reject) {

            resolve({
                "index": _demoData2.default.index,
                "common": _demoData2.default.common
            });
        });
    }
};

},{"public/demo-data":12,"q":74}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var frames = [{
    title: "Nodejs",
    desc: "FEZ 构建在 NodeJS 基于 Chrome V8 引擎的 JavaScript 运行环境，其事件驱动非阻塞的特性，极其快速的编译前端各种资源",
    content: "<div id=\"home-intro\">\n\n        <p>Node.js\xAE is a JavaScript runtime built on <a href=\"https://developers.google.com/v8/\">Chrome's V8 JavaScript engine</a>.\nNode.js uses an event-driven, non-blocking I/O model that makes it\nlightweight and efficient. Node.js' package ecosystem, <a href=\"https://www.npmjs.com/\">npm</a>, is the largest ecosystem of open\nsource libraries in the world.</p>\n\n\n\n        <h2 id=\"home-downloadhead\" data-dl-local=\"Download for\">Download for macOS (x64)</h2>\n\n        <div class=\"home-downloadblock\">\n\n          <a href=\"https://nodejs.org/dist/v6.10.0/node-v6.10.0.pkg\" class=\"home-downloadbutton\" title=\"Download v6.10.0 LTS\" data-version=\"v6.10.0\">\n            v6.10.0 LTS\n            <small>Recommended For Most Users</small>\n          </a>\n\n          <ul class=\"list-divider-pipe home-secondary-links\">\n            <li>\n              <a href=\"https://nodejs.org/en/download/\">Other Downloads</a>\n            </li>\n            <li>\n              <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.10.0\">Changelog</a>\n            </li>\n            <li>\n              <a href=\"https://nodejs.org/dist/latest-v6.x/docs/api/\">API Docs</a>\n            </li>\n          </ul>\n\n        </div>\n\n          <div class=\"home-downloadblock\">\n\n            <a href=\"https://nodejs.org/dist/v7.7.1/node-v7.7.1.pkg\" class=\"home-downloadbutton\" title=\"Download v7.7.1 Current\" data-version=\"v7.7.1\">\n              v7.7.1 Current\n              <small>Latest Features</small>\n            </a>\n\n            <ul class=\"list-divider-pipe home-secondary-links\">\n              <li>\n                <a href=\"https://nodejs.org/en/download/current/\">Other Downloads</a>\n              </li>\n              <li>\n                <a href=\"https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.7.1\">Changelog</a>\n              </li>\n              <li>\n                <a href=\"https://nodejs.org/dist/latest-v7.x/docs/api/\">API Docs</a>\n              </li>\n            </ul>\n\n          </div>\n        <p>\n          Or have a look at the <a href=\"https://github.com/nodejs/LTS#lts-schedule\">LTS schedule.</a>\n        </p>\n      </div>",
    viewMore: {
        text: "更多信息",
        href: "https://nodejs.org/"
    }
}, {
    title: "NPM",
    desc: "FEZ 使用 NPM 接入全球最大的开源生态系统，具备无限的功能扩展能力，可整合国际前沿的开源框架，适应瞬息万变的技术更替",
    content: "<h1 class=\"title em-default type-neutral-11\">\n          Build amazing things\n        </h1>\n        <p class=\"h5 em-default type-neutral-11 pbxl\">\n          npm is the package manager for JavaScript. Find, share, and reuse\n          packages of code from hundreds of thousands of developers \u2014 and\n          assemble them in powerful new ways.\n        </p>\n        <a id=\"main-cta\" href=\"#pane-homepage-pricing\" class=\"btn btn-highlight-3 mrl\" data-event-name=\"homepage-hero-cta\">Get started</a>",
    viewMore: {
        text: "更多信息",
        href: "https://www.npmjs.com/"
    }
}, {
    title: "Gulp",
    desc: "FEZ 整合Gulp的众多插件，编译、优化和组织前端复杂的模块及静态资源，喝着可乐儿、哼着小曲儿，自动化完成前端大量重复工作",
    content: "<h1 class=\"heading text-center\">Automate and enhance your workflow</h1><h2 class=\"paragraph\">\n          gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.\n        </h2><div class=\"ctas\">\n          <a class=\"ctas-button\" href=\"https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md\">Get Started</a>\n        </div>",
    viewMore: {
        text: "更多信息",
        href: "http://gulpjs.com/"
    }
}, {
    title: "Browserify",
    desc: "FEZ 使用 Browserify 模块化组织和管理项目的各个功能模块，极大提升项目的可维护性、功能复用性，并实现积木式的搭建网页",
    content: "<section id=\"top-home-section\" class=\"top-section color-a\">\n      <div id=\"top-home-image\"></div>\n\n       <h3 id=\"top-subtitle\" class=\"large-font\">Browserify lets you require(<span class=\"color-d\">'modules'</span>) in the browser by bundling up all of your dependencies.</h3>\n      <a href=\"https://github.com/substack/node-browserify#usage\">\n        <button class=\"top-button\" id=\"top-button2\">\n          Documentation\n        </button>\n      </a>\n    </section>",
    viewMore: {
        text: "更多信息",
        href: "http://browserify.org/"
    }
}, {
    title: "Bower",
    desc: "FEZ 可配置使用 Bower 搜索、安装、更新和卸载如JavaScript、CSS之类的网络资源，通过自动化注入技术完美解决复杂的框架包管理问题",
    content: "<div class=\"main\">\n<p class=\"lead\">Web sites are made of lots of things \u2014 frameworks, libraries, assets, and utilities. Bower manages all these things for you.</p>\n<p>Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue!</p>\n<p>Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn\u2019t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.</p>\n<p>To <a href=\"#getting-started\">get started</a>, Bower works by fetching and installing <a href=\"/search\">packages</a> from all over, taking care of hunting, finding, downloading, and saving the stuff you\u2019re looking for. Bower keeps track of these packages in a manifest file, <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower.json</code></a>. How you use <a href=\"/search\">packages</a> is up to you. Bower provides hooks to facilitate using packages in your <a href=\"/docs/tools\">tools and workflows</a>.</p>\n<p>Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.</p>\n<h2 id=\"install-bower\"><a href=\"#install-bower\" class=\"header-anchor\">\xA7</a>Install Bower</h2>\n<p>Bower is a command line utility. Install it with npm.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>npm install -g bower</code></pre></figure>\n<p>Bower requires <a href=\"http://nodejs.org/\">node, npm</a> and <a href=\"http://git-scm.org\">git</a>.</p>\n<p>Latest release: <a href=\"\"><img src=\"https://img.shields.io/npm/v/bower.svg?maxAge=2592000\" alt=\"bower version\"></a></p>\n<p>For troubleshooting installation on different platforms, read the <a href=\"https://github.com/bower/bower/wiki/Troubleshooting\">troubleshooting</a> wiki page.</p>\n<h2 id=\"getting-started\"><a href=\"#getting-started\" class=\"header-anchor\">\xA7</a>Getting started</h2>\n<h3 id=\"install-packages\"><a href=\"#install-packages\" class=\"header-anchor\">\xA7</a>Install packages</h3>\n<p>Install packages with <a href=\"/docs/api#install\"><code class=\"highlighter-rouge\">bower install</code></a>. Bower installs packages to <code class=\"highlighter-rouge\">bower_components/</code>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"gp\">$ </span>bower install &lt;package&gt;</code></pre></figure>\n<p>A package can be a GitHub shorthand, a Git endpoint, a URL, and more. Read more about <a href=\"/docs/api/#install\"><code class=\"highlighter-rouge\">bower install</code></a>.</p>\n<figure class=\"highlight\"><pre><code class=\"language-bash\" data-lang=\"bash\"><span class=\"c\"># installs the project dependencies listed in bower.json</span>\n<span class=\"gp\">$ </span>bower install\n<span class=\"c\"># registered package</span>\n<span class=\"gp\">$ </span>bower install jquery\n<span class=\"c\"># GitHub shorthand</span>\n<span class=\"gp\">$ </span>bower install desandro/masonry\n<span class=\"c\"># Git endpoint</span>\n<span class=\"gp\">$ </span>bower install git://github.com/user/package.git\n<span class=\"c\"># URL</span>\n<span class=\"gp\">$ </span>bower install http://example.com/script.js</code></pre></figure>\n<h3 id=\"search-packages\"><a href=\"#search-packages\" class=\"header-anchor\">\xA7</a>Search packages</h3>\n<p><a href=\"/search\">Search Bower packages</a> and find the registered package names for your favorite projects.</p>\n<h3 id=\"save-packages\"><a href=\"#save-packages\" class=\"header-anchor\">\xA7</a>Save packages</h3>\n<p>Create a <code class=\"highlighter-rouge\">bower.json</code> file for your package with <a href=\"/docs/creating-packages/#bowerjson\"><code class=\"highlighter-rouge\">bower init</code></a>.</p>\n<p>Then save new dependencies to your <code class=\"highlighter-rouge\">bower.json</code> with <code class=\"highlighter-rouge\">bower install PACKAGE --save</code></p>\n<h3 id=\"use-packages\"><a href=\"#use-packages\" class=\"header-anchor\">\xA7</a>Use packages</h3>\n<p>How you use packages is up to you. We recommend you use Bower together with <a href=\"/docs/tools/\">Grunt, RequireJS, Yeoman, and lots of other tools</a> or build your own workflow with <a href=\"/docs/api/\">the API</a>. You can also use the installed packages directly, like this, in the case of <code class=\"highlighter-rouge\">jquery</code>:</p>\n<figure class=\"highlight\"><pre><code class=\"language-html\" data-lang=\"html\"><span class=\"nt\">&lt;script </span><span class=\"na\">src=</span><span class=\"s\">\"bower_components/jquery/dist/jquery.min.js\"</span><span class=\"nt\">&gt;&lt;/script&gt;</span></code></pre></figure>\n<h2 id=\"twitter-updates-from-bowerhttpstwittercombower\"><a href=\"#twitter-updates-from-bowerhttpstwittercombower\" class=\"header-anchor\">\xA7</a>Twitter updates from <a href=\"https://twitter.com/bower\">@bower</a></h2>\n<p><a class=\"twitter-timeline\" href=\"https://twitter.com/bower\" data-widget-id=\"480377291369754625\">Tweets by @bower</a>\n</p>\n\n</div>",
    viewMore: {
        text: "更多信息",
        href: "https://bower.io/"
    }
}, {
    title: "BorwserSync",
    desc: "FEZ 使用 Browsersync 让浏览器实时快速的响应前端各种文件的更改并自动刷新页面，亦可实时同步各个终端，提高至少30%的开发效率",
    content: "<h1 class=\"hook\">Time-saving synchronised browser testing.</h1><p class=\"ronseal\">It\u2019s wicked-fast and totally free.</p><p class=\"video\"><a class=\"video__link\" href=\"#\"></a></p><p class=\"how-to\"></p><p class=\"how-to__command\">npm install -g browser-sync</p><p class=\"cta\"><a class=\"button button--primary\" href=\"#install\" title=\"Get Started\">Get Started</a></p><div class=\"player\"><p>'bonjour</p></div>",
    viewMore: {
        text: "更多信息",
        href: "https://browsersync.io/"
    }
}];

var index = {
    fezdesc: "FEZ 前端模块化工程开发框架",
    jumbotron: {
        title: "Hello FEZ And Framework7!",
        content: "这是一个使用 FEZ 搭建的用于开发混合移动应用或 iOS 和 Android 风格的WEB APP的示例。演示了基于 Framework7 结合 Vue 构建高性能单页面移动应用。",
        button: {
            name: "<i class=\"fa fa-github-alt\"></i> GitHub",
            href: "https://github.com/furic-zhao/fez"
        }
    }
};

var list = {
    jumbotron: {
        title: "FEZ Frame!",
        content: "这是一个列表展示页，请点击下面列表项目进入详情页浏览",
        button: {
            name: "查看更多信息",
            href: "http://fez.hestudy.com"
        }
    }
};

var common = {
    siteName: "FEZ Framework7 Demo",

    nav: [{
        name: "FEZ基本架构",
        href: "/listing/"
    }, {
        name: "表单示例",
        href: "/form/"
    }, {
        name: "REST风格的动态路由",
        href: "/dynamic-route/blog/45/post/125/?foo=bar#about"
    }, {
        name: "关于FEZ",
        href: "/about/"
    }],
    tips: "本示例为移动端集成了REM解决方案，可以试着横屏、或在更大的移动端屏幕浏览，页面中的所有元素在不同的屏幕中会等比缩放。",
    footerText: "© 2017 FEZ 前端模块化工程开发框架 Created by Furic.zhao"
};

exports.default = {
    "index": index,
    "list": list,
    "frames": frames,
    "common": common
};

},{}],13:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":16}],14:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":17}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":14}],16:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":68,"../modules/es6.string.iterator":71,"../modules/web.dom.iterable":72}],17:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":24,"../../modules/es6.object.assign":70}],18:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],19:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],20:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":38}],21:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":59,"./_to-iobject":61,"./_to-length":62}],22:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":23,"./_wks":66}],23:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],24:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],25:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":18}],26:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],27:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":31}],28:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":32,"./_is-object":38}],29:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],30:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":24,"./_ctx":25,"./_global":32,"./_hide":34}],31:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],32:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],33:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],34:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":27,"./_object-dp":46,"./_property-desc":53}],35:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":32}],36:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":27,"./_dom-create":28,"./_fails":31}],37:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":23}],38:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],39:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":34,"./_object-create":45,"./_property-desc":53,"./_set-to-string-tag":55,"./_wks":66}],40:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":30,"./_has":33,"./_hide":34,"./_iter-create":39,"./_iterators":42,"./_library":43,"./_object-gpo":49,"./_redefine":54,"./_set-to-string-tag":55,"./_wks":66}],41:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],42:[function(require,module,exports){
module.exports = {};
},{}],43:[function(require,module,exports){
module.exports = true;
},{}],44:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":31,"./_iobject":37,"./_object-gops":48,"./_object-keys":51,"./_object-pie":52,"./_to-object":63}],45:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":20,"./_dom-create":28,"./_enum-bug-keys":29,"./_html":35,"./_object-dps":47,"./_shared-key":56}],46:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":20,"./_descriptors":27,"./_ie8-dom-define":36,"./_to-primitive":64}],47:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":20,"./_descriptors":27,"./_object-dp":46,"./_object-keys":51}],48:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],49:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":33,"./_shared-key":56,"./_to-object":63}],50:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":21,"./_has":33,"./_shared-key":56,"./_to-iobject":61}],51:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":29,"./_object-keys-internal":50}],52:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],53:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],54:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":34}],55:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":33,"./_object-dp":46,"./_wks":66}],56:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":57,"./_uid":65}],57:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":32}],58:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":26,"./_to-integer":60}],59:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":60}],60:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],61:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":26,"./_iobject":37}],62:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":60}],63:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":26}],64:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":38}],65:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],66:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":32,"./_shared":57,"./_uid":65}],67:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":22,"./_core":24,"./_iterators":42,"./_wks":66}],68:[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":20,"./_core":24,"./core.get-iterator-method":67}],69:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":19,"./_iter-define":40,"./_iter-step":41,"./_iterators":42,"./_to-iobject":61}],70:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":30,"./_object-assign":44}],71:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":40,"./_string-at":58}],72:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":32,"./_hide":34,"./_iterators":42,"./_wks":66,"./es6.array.iterator":69}],73:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],74:[function(require,module,exports){
(function (process){
// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.nextTick()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack &&
        error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        error.stack = filterStackString(concatedStacks);
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;
        promise.source = newPromise;

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
                deferred.reject(new Error(
                    "Can't get fulfillment value from any promise, all " +
                    "promises were rejected."
                ));
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

}).call(this,require('_process'))

},{"_process":73}],75:[function(require,module,exports){
var Vue // late bind
var version
var map = window.__VUE_HOT_MAP__ = Object.create(null)
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) return
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
      'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Vue.extend(options),
    instances: []
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  injectHook(options, initHookName, function () {
    map[id].instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    var instances = map[id].instances
    instances.splice(instances.indexOf(this), 1)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

function tryWrap (fn) {
  return function (id, arg) {
    try { fn(id, arg) } catch (e) {
      console.error(e)
      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
    }
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (typeof options === 'function') {
    options = options.options
  }
  record.Ctor.options.render = options.render
  record.Ctor.options.staticRenderFns = options.staticRenderFns
  record.instances.slice().forEach(function (instance) {
    instance.$options.render = options.render
    instance.$options.staticRenderFns = options.staticRenderFns
    instance._staticTrees = [] // reset static trees
    instance.$forceUpdate()
  })
})

exports.reload = tryWrap(function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  makeOptionsHot(id, options)
  var record = map[id]
  if (version[1] < 2) {
    // preserve pre 2.2 behavior for global mixin handling
    record.Ctor.extendOptions = options
  }
  var newCtor = record.Ctor.super.extend(options)
  record.Ctor.options = newCtor.options
  record.Ctor.cid = newCtor.cid
  record.Ctor.prototype = newCtor.prototype
  if (newCtor.release) {
    // temporary global mixin strategy used in < 2.0.0-alpha.6
    newCtor.release()
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn('Root or manually mounted instance modified. Full reload required.')
    }
  })
})

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdmlld3MvaW5kZXgvaW5kZXguanMiLCJzcmMvdmlld3MvaW5kZXgvc3JjL3ZpZXdzL2luZGV4L2luZGV4LnZ1ZT9jM2U1ZTI2YyIsInNyYy92aWV3cy9pbmRleC9tb2R1bGUvYWJvdXQvc3JjL3ZpZXdzL2luZGV4L21vZHVsZS9hYm91dC9pbmRleC52dWU/NjQ2MGY0NGMiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2FydGljbGUvc3JjL3ZpZXdzL2luZGV4L21vZHVsZS9hcnRpY2xlL2luZGV4LnZ1ZT9jMmI1YzdjYyIsInNyYy92aWV3cy9pbmRleC9tb2R1bGUvYXJ0aWNsZS9zZXJ2aWNlLmpzIiwic3JjL3ZpZXdzL2luZGV4L21vZHVsZS9keW5hbWljLXJvdXRlL3NyYy92aWV3cy9pbmRleC9tb2R1bGUvZHluYW1pYy1yb3V0ZS9pbmRleC52dWU/MzMwN2M4YzgiLCJzcmMvdmlld3MvaW5kZXgvbW9kdWxlL2Zvcm0vc3JjL3ZpZXdzL2luZGV4L21vZHVsZS9mb3JtL2luZGV4LnZ1ZT82NmMzMzk4NSIsInNyYy92aWV3cy9pbmRleC9tb2R1bGUvbGlzdGluZy9zcmMvdmlld3MvaW5kZXgvbW9kdWxlL2xpc3RpbmcvaW5kZXgudnVlPzMzOWEzZTYyIiwic3JjL3ZpZXdzL2luZGV4L21vZHVsZS9saXN0aW5nL3NlcnZpY2UuanMiLCJzcmMvdmlld3MvaW5kZXgvcm91dGVzLmpzIiwic3JjL3ZpZXdzL2luZGV4L3NlcnZpY2UuanMiLCJzcmMvdmlld3MvcHVibGljL2RlbW8tZGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EvcS5qcyIsIi4uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNDQTs7OztBQUdBOzs7O0FBR0E7Ozs7QUFHQTs7OztBQUdBOzs7Ozs7QUFFQTs7O0FBTkE7OztBQU5BO0FBYUEsY0FBSSxHQUFKOztBQUVBOzs7QUFOQTs7O0FBTkE7QUFOQTtBQW1CQSxrQkFBUTtBQUNKLFFBQUksTUFEQTtBQUVKLGNBQVUsUUFGTjtBQUdKO0FBQ0EsZ0JBQVk7QUFDUixjQUFNLE1BREU7QUFFUjtBQUNBO0FBQ0E7QUFKUSxLQUpSO0FBVUo7QUFDQSxnQkFBWTtBQUNSO0FBRFE7QUFYUixDQUFSOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2dFQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQUZBO0FBV0E7QUFDQTs7QUFFQTs7QUFFQTtBQUxBO0FBWkE7QUFvQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBbENBOzs7OztBQXBGQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNnQkE7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBREE7QUFXQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTs7Ozs7QUFqQkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBRUE7Ozs7OztrQkFFZTtBQUNYLGNBRFcsd0JBQ1M7QUFBQSxZQUFULEVBQVMsdUVBQUosRUFBSTs7QUFDaEIsZUFBTyxZQUFFLE9BQUYsQ0FBVSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ2xDLGdCQUFJLFVBQVUsRUFBZDs7QUFEa0M7QUFBQTtBQUFBOztBQUFBO0FBR2xDLGdFQUFjLG1CQUFRLE1BQXRCLDRHQUE4QjtBQUFBLHdCQUFyQixDQUFxQjs7QUFDMUIsd0JBQUksRUFBRSxLQUFGLEtBQVksRUFBaEIsRUFBb0I7QUFDaEIsa0NBQVUsQ0FBVjtBQUNIO0FBQ0o7QUFQaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRbEMsb0JBQVEsT0FBUjtBQUNILFNBVE0sQ0FBUDtBQVVIO0FBWlUsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSmY7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNEJBOzs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFwQkE7Ozs7O0FBOUJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUVBOzs7Ozs7a0JBRWU7QUFDWCxjQURXLHdCQUNFO0FBQ1QsWUFBSSxVQUFVLEVBQWQ7QUFDQSxlQUFPLFlBQUUsT0FBRixDQUFVLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBRWxDLGdFQUFjLG1CQUFRLE1BQXRCLDRHQUE4QjtBQUFBLHdCQUFyQixDQUFxQjs7QUFDMUIsd0JBQUksV0FBVyxFQUFmOztBQUVBLDZCQUFTLEtBQVQsR0FBaUIsRUFBRSxLQUFuQjtBQUNBLDZCQUFTLElBQVQsR0FBZ0IsRUFBRSxJQUFsQjtBQUNBLDZCQUFTLEVBQVQsR0FBYyxFQUFFLEtBQWhCOztBQUVBLDRCQUFRLElBQVIsQ0FBYSxRQUFiO0FBQ0g7QUFWaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZbEMsb0JBQVE7QUFDSiwyQkFBVyxPQURQO0FBRUosNkJBQWEsbUJBQVEsSUFBUixDQUFhO0FBRnRCLGFBQVI7QUFJSCxTQWhCTSxDQUFQO0FBaUJIO0FBcEJVLEM7Ozs7Ozs7O2tCQ0pBLENBQUM7QUFDWixVQUFNLFNBRE07QUFFWixlQUFXLFFBQVEsMEJBQVI7QUFGQyxDQUFELEVBR1o7QUFDQyxVQUFNLFFBRFA7QUFFQyxlQUFXLFFBQVEseUJBQVI7QUFGWixDQUhZLEVBTVo7QUFDQyxVQUFNLDJDQURQO0FBRUMsZUFBVyxRQUFRLGtDQUFSO0FBRlosQ0FOWSxFQVNaO0FBQ0MsVUFBTSxXQURQO0FBRUMsZUFBVyxRQUFRLDRCQUFSO0FBRlosQ0FUWSxFQVlaO0FBQ0MsVUFBTSxrQkFEUDtBQUVDLGVBQVcsUUFBUSw0QkFBUjtBQUZaLENBWlksQzs7Ozs7Ozs7O0FDQWY7Ozs7QUFFQTs7Ozs7O2tCQUVlO0FBQ1gsY0FEVyx3QkFDRTtBQUNULGVBQU8sWUFBRSxPQUFGLENBQVUsVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjs7QUFFbEMsb0JBQVE7QUFDSix5QkFBUyxtQkFBUSxLQURiO0FBRUosMEJBQVUsbUJBQVE7QUFGZCxhQUFSO0FBSUgsU0FOTSxDQUFQO0FBT0g7QUFUVSxDOzs7Ozs7OztBQ0pmLElBQUksU0FBUyxDQUFDO0FBQ1YsV0FBTyxRQURHO0FBRVYsVUFBTSwyRUFGSTtBQUdWLGt3RUFIVTtBQTJEVixjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBM0RBLENBQUQsRUErRFY7QUFDQyxXQUFPLEtBRFI7QUFFQyxVQUFNLCtEQUZQO0FBR0MscWhCQUhEO0FBWUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQVpYLENBL0RVLEVBK0VWO0FBQ0MsV0FBTyxNQURSO0FBRUMsVUFBTSxnRUFGUDtBQUdDLGljQUhEO0FBUUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQVJYLENBL0VVLEVBMkZWO0FBQ0MsV0FBTyxZQURSO0FBRUMsVUFBTSxtRUFGUDtBQUdDLHlmQUhEO0FBYUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQWJYLENBM0ZVLEVBNEdWO0FBQ0MsV0FBTyxPQURSO0FBRUMsVUFBTSwyRUFGUDtBQUdDLGl2S0FIRDtBQTJDQyxjQUFVO0FBQ04sY0FBTSxNQURBO0FBRU4sY0FBTTtBQUZBO0FBM0NYLENBNUdVLEVBMkpWO0FBQ0MsV0FBTyxhQURSO0FBRUMsVUFBTSx3RUFGUDtBQUdDLDhiQUhEO0FBSUMsY0FBVTtBQUNOLGNBQU0sTUFEQTtBQUVOLGNBQU07QUFGQTtBQUpYLENBM0pVLENBQWI7O0FBcUtBLElBQUksUUFBUTtBQUNSLGFBQVMsaUJBREQ7QUFFUixlQUFXO0FBQ1AsZUFBTywyQkFEQTtBQUVQLGlCQUFTLDZGQUZGO0FBR1AsZ0JBQVE7QUFDSiw2REFESTtBQUVKLGtCQUFNO0FBRkY7QUFIRDtBQUZILENBQVo7O0FBWUEsSUFBSSxPQUFPO0FBQ1AsZUFBVztBQUNQLGVBQU8sWUFEQTtBQUVQLGlCQUFTLDRCQUZGO0FBR1AsZ0JBQVE7QUFDSixrQkFBTSxRQURGO0FBRUosa0JBQU07QUFGRjtBQUhEO0FBREosQ0FBWDs7QUFXQSxJQUFJLFNBQVM7QUFDVCxjQUFVLHFCQUREOztBQUdULFNBQUssQ0FBQztBQUNGLGNBQU0sU0FESjtBQUVGLGNBQU07QUFGSixLQUFELEVBR0Y7QUFDQyxjQUFNLE1BRFA7QUFFQyxjQUFNO0FBRlAsS0FIRSxFQU1GO0FBQ0MsY0FBTSxhQURQO0FBRUMsY0FBTTtBQUZQLEtBTkUsRUFTRjtBQUNDLGNBQU0sT0FEUDtBQUVDLGNBQU07QUFGUCxLQVRFLENBSEk7QUFnQlQsVUFBTSw2REFoQkc7QUFpQlQsZ0JBQVk7QUFqQkgsQ0FBYjs7a0JBb0JlO0FBQ1gsYUFBUyxLQURFO0FBRVgsWUFBUSxJQUZHO0FBR1gsY0FBVSxNQUhDO0FBSVgsY0FBVTtBQUpDLEM7OztBQ2hOZjs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaGdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBJbXBvcnQgVnVlXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuLy8gSW1wb3J0IEY3XHJcbmltcG9ydCBGcmFtZXdvcms3IGZyb20gJ2ZyYW1ld29yazcnXHJcblxyXG4vLyBJbXBvcnQgRjcgVnVlIFBsdWdpblxyXG5pbXBvcnQgRnJhbWV3b3JrN1Z1ZSBmcm9tICdmcmFtZXdvcms3LXZ1ZSdcclxuXHJcbi8vIEltcG9ydCBSb3V0ZXNcclxuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcy5qcydcclxuXHJcbi8vIEltcG9ydCBBcHAgQ29tcG9uZW50XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9pbmRleC52dWUnXHJcblxyXG4vLyBJbml0IEY3IFZ1ZSBQbHVnaW5cclxuVnVlLnVzZShGcmFtZXdvcms3VnVlKVxyXG5cclxuLy8gSW5pdCBBcHBcclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgdGVtcGxhdGU6ICc8YXBwLz4nLFxyXG4gICAgLy8gSW5pdCBGcmFtZXdvcms3IGJ5IHBhc3NpbmcgcGFyYW1ldGVycyBoZXJlXHJcbiAgICBmcmFtZXdvcms3OiB7XHJcbiAgICAgICAgcm9vdDogJyNhcHAnLFxyXG4gICAgICAgIC8qIFVuY29tbWVudCB0byBlbmFibGUgTWF0ZXJpYWwgdGhlbWU6ICovXHJcbiAgICAgICAgLy8gbWF0ZXJpYWw6IHRydWUsXHJcbiAgICAgICAgcm91dGVzOiBSb3V0ZXMsXHJcbiAgICB9LFxyXG4gICAgLy8gUmVnaXN0ZXIgQXBwIENvbXBvbmVudFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGFwcDogQXBwXHJcbiAgICB9XHJcbn0pO1xyXG4iLCI8dGVtcGxhdGU+XG4gICAgPCEtLSBBcHAgLS0+XG4gICAgPGRpdiBpZD1cImFwcFwiPlxuICAgICAgICA8IS0tIFN0YXR1c2JhciAtLT5cbiAgICAgICAgPGY3LXN0YXR1c2Jhcj48L2Y3LXN0YXR1c2Jhcj5cbiAgICAgICAgPCEtLSBSaWdodCBQYW5lbCAtLT5cbiAgICAgICAgPGY3LXBhbmVsIHJpZ2h0IGNvdmVyIGxheW91dD1cImRhcmtcIj5cbiAgICAgICAgICAgIDxmNy12aWV3IGlkPVwicmlnaHQtcGFuZWwtdmlld1wiIG5hdmJhci10aHJvdWdoIDpkeW5hbWljLW5hdmJhcj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZjctbmF2YmFyIHYtaWY9XCIkdGhlbWUuaW9zXCIgdGl0bGU9XCJGRVrlr7zoiKpcIiBzbGlkaW5nPjwvZjctbmF2YmFyPlxuICAgICAgICAgICAgICAgIDxmNy1wYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgPGY3LXBhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZjctbmF2YmFyIHYtaWY9XCIkdGhlbWUubWF0ZXJpYWxcIiB0aXRsZT1cIkZFWuWvvOiIqlwiIHNsaWRpbmc+PC9mNy1uYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZjctbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZjctbGlzdC1pdGVtIHYtZm9yPVwiaXRlbSBpbiBjb21tb24ubmF2XCIgOmxpbms9XCJpdGVtLmhyZWZcIiA6dGl0bGU9XCJpdGVtLm5hbWVcIiBsaW5rLXZpZXc9XCIjbWFpbi12aWV3XCIgbGluay1jbG9zZS1wYW5lbD48L2Y3LWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZjctbGlzdD5cbiAgICAgICAgICAgICAgICAgICAgPC9mNy1wYWdlPlxuICAgICAgICAgICAgICAgIDwvZjctcGFnZXM+XG4gICAgICAgICAgICA8L2Y3LXZpZXc+XG4gICAgICAgIDwvZjctcGFuZWw+XG4gICAgICAgIDwhLS0gTWFpbiBWaWV3cyAtLT5cbiAgICAgICAgPGY3LXZpZXdzPlxuICAgICAgICAgICAgPGY3LXZpZXcgaWQ9XCJtYWluLXZpZXdcIiBuYXZiYXItdGhyb3VnaCA6ZHluYW1pYy1uYXZiYXI9XCJ0cnVlXCIgbWFpbj5cbiAgICAgICAgICAgICAgICA8IS0tIGlPUyBUaGVtZSBOYXZiYXIgLS0+XG4gICAgICAgICAgICAgICAgPGY3LW5hdmJhciB2LWlmPVwiJHRoZW1lLmlvc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZjctbmF2LWNlbnRlciBzbGlkaW5nPnt7Y29tbW9uLnNpdGVOYW1lfX08L2Y3LW5hdi1jZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxmNy1uYXYtcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZjctbGluayBpY29uPVwiaWNvbi1iYXJzXCIgb3Blbi1wYW5lbD1cInJpZ2h0XCI+PC9mNy1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Y3LW5hdi1yaWdodD5cbiAgICAgICAgICAgICAgICA8L2Y3LW5hdmJhcj5cbiAgICAgICAgICAgICAgICA8IS0tIFBhZ2VzIC0tPlxuICAgICAgICAgICAgICAgIDxmNy1wYWdlcz5cbiAgICAgICAgICAgICAgICAgICAgPGY3LXBhZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1hdGVyaWFsIFRoZW1lIE5hdmJhciAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1uYXZiYXIgdi1pZj1cIiR0aGVtZS5tYXRlcmlhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1uYXYtbGVmdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGY3LWxpbmsgaWNvbj1cImljb24tYmFyc1wiIG9wZW4tcGFuZWw9XCJsZWZ0XCI+PC9mNy1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZjctbmF2LWxlZnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGY3LW5hdi1jZW50ZXIgc2xpZGluZz5GcmFtZXdvcms3PC9mNy1uYXYtY2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1uYXYtcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1saW5rIGljb249XCJpY29uLWJhcnNcIiBvcGVuLXBhbmVsPVwicmlnaHRcIj48L2Y3LWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mNy1uYXYtcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Y3LW5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1ibG9jay10aXRsZT57e2luZGV4Lmp1bWJvdHJvbi50aXRsZX19PC9mNy1ibG9jay10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1ibG9jayBpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e2luZGV4Lmp1bWJvdHJvbi5jb250ZW50fX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Y3LWJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGY3LWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGY3LWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2luZGV4LmZlemRlc2N9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZjctY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGY3LWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlei1waWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Y3LWNhcmQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZjctY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1saXN0LWl0ZW0gdi1mb3I9XCJpdGVtIGluIGNvbW1vbi5uYXZcIiA6bGluaz1cIml0ZW0uaHJlZlwiIDp0aXRsZT1cIml0ZW0ubmFtZVwiIGxpbmstdmlldz1cIiNtYWluLXZpZXdcIiBsaW5rLWNsb3NlLXBhbmVsPjwvZjctbGlzdC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mNy1saXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGY3LWJsb2NrLXRpdGxlPuabtOWkmuS/oeaBrzwvZjctYmxvY2stdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZjctYmxvY2sgaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1saW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZnVyaWMtemhhby9mZXpcIiBleHRlcm5hbCB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ1dHRvblwiPkZFWiBHaXRodWLnpL7ljLo8L2Y3LWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZjctbGluayBocmVmPVwiaHR0cDovL2ZyYW1ld29yazcuY24vXCIgZXh0ZXJuYWwgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidXR0b25cIj5GcmFtZXdvcms3IOS4reaWh+e9kTwvZjctbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1saW5rIGhyZWY9XCJodHRwczovL2NuLnZ1ZWpzLm9yZy9cIiBleHRlcm5hbCB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJ1dHRvblwiPlZ1ZSDkuK3mlofnvZE8L2Y3LWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZjctbGluayBocmVmPVwiaHR0cDovL3Z1ZS5mcmFtZXdvcms3LmNuL1wiIGV4dGVybmFsIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnV0dG9uXCI+RnJhbWV3b3JrNy1WdWU8L2Y3LWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mNy1ibG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmNy1ibG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57e2NvbW1vbi50aXBzfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tjb21tb24uZm9vdGVyVGV4dH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mNy1ibG9jaz5cbiAgICAgICAgICAgICAgICAgICAgPC9mNy1wYWdlPlxuICAgICAgICAgICAgICAgIDwvZjctcGFnZXM+XG4gICAgICAgICAgICA8L2Y3LXZpZXc+XG4gICAgICAgIDwvZjctdmlld3M+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleDoge1xuICAgICAgICAgICAgICAgICAgICBmZXpkZXNjOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBqdW1ib3Ryb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21tb246IHtcbiAgICAgICAgICAgICAgICAgICAgc2l0ZU5hbWU6IFwiXCIsXG5cbiAgICAgICAgICAgICAgICAgICAgbmF2RGF0YTogW10sXG5cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyVGV4dDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaW5kZXhJbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgX3ZtID0gdGhpc1xuICAgICAgICAgICAgICAgIFNlcnZpY2UucmVuZGVyRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmluZGV4ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YS5pbmRleClcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbW1vbiA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEuY29tbW9uKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4SW5pdCgpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxmNy1wYWdlPlxuICAgICAgICA8ZjctbmF2YmFyIHRpdGxlPVwi5YWz5LqORkVaXCIgYmFjay1saW5rPVwiQmFja1wiIHNsaWRpbmc+PC9mNy1uYXZiYXI+XG4gICAgICAgIDxmNy1ibG9jay10aXRsZT7lhbPkuo5GRVo8L2Y3LWJsb2NrLXRpdGxlPlxuICAgICAgICA8ZjctYmxvY2sgaW5uZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmV6LXBpY1wiPjwvZGl2PlxuICAgICAgICAgICAgPHA+RkVaIOaYr+mdouWQkSDliY3nq6/mqKHlnZfljJblt6XnqIsg55qE5byA5Y+R5qGG5p6244CC5Li76KaB5Li66Kej5YazIOWJjeerr+W8gOWPkeWkmuS6uumrmOaViOWNj+S9nOOAgeaPkOmrmOW8gOWPkei0qOmHj+OAgeWPiumhueebruWKn+iDveaJqeWxleeahOW/q+mAn+i/reS7o+WSjOWPr+e7tOaKpOaAp+etiemXrumimOOAguaguOW/g+WMheaLrOWKn+iDveaooeWdl+WMluOAgee7k+aehOinhOiMg+WMluOAgeWPiuW8gOWPkeiHquWKqOWMluOAgjwvcD5cbiAgICAgICAgICAgIDxwPkZF5piv4oCcZnJvbnQgZW5k4oCd6aaW5a2X5q+N77yMWuaYr+KAnOiHquWKqOWMluKAnemmluaLvOmfs+Wtl+avje+8jEZFWiDmhI/kuLrigJzliY3nq6/oh6rliqjljJbigJ3jgILosJDpn7PigJzllaHmgJ3igJ3vvIzmhI/llrvigJzllp3nnYDlkpbllaHvvIzkuJPms6jmgJ3ogIPigJ3jgILorqnliY3nq6/lvIDlj5HlgZzmraLlpKfph4/nuYHmnYLnmoTmiYvlt6XlirPkvZzvvIzmm7TkuJPms6jkuo7kuJrliqHpgLvovpHvvIHosJDpn7Plj4jor7vigJzliIbmsrvigJ3vvIzkvZPnjrDmqKHlnZfljJblvIDlj5HnkIblv7XvvIE8L3A+XG4gICAgICAgIDwvZjctYmxvY2s+XG4gICAgPC9mNy1wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7fVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGY3LXBhZ2U+XG4gICAgICAgIDxmNy1uYXZiYXIgOnRpdGxlPVwiZGV0YWlsLnRpdGxlXCIgYmFjay1saW5rPVwiQmFja1wiIHNsaWRpbmc+PC9mNy1uYXZiYXI+XG4gICAgICAgIDxmNy1ibG9jay10aXRsZT5IZWxsbyB7e2RldGFpbC50aXRsZX19ITwvZjctYmxvY2stdGl0bGU+XG4gICAgICAgIDxmNy1ibG9jayBpbm5lcj5cbiAgICAgICAgICAgIDxwPnt7ZGV0YWlsLmRlc2N9fTwvcD5cbiAgICAgICAgPC9mNy1ibG9jaz5cbiAgICAgICAgPGY3LWJsb2NrIGlubmVyPlxuICAgICAgICAgICAgPHAgdi1odG1sPVwiZGV0YWlsLmNvbnRlbnRcIj48L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8ZjctbGluayA6aHJlZj1cImRldGFpbC52aWV3TW9yZS5ocmVmXCIgZXh0ZXJuYWwgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJidXR0b25cIj57e2RldGFpbC52aWV3TW9yZS50ZXh0fX08L2Y3LWxpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZjctYmxvY2s+XG4gICAgPC9mNy1wYWdlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgU2VydmljZSBmcm9tICcuL3NlcnZpY2UnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB2aWV3TW9yZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAganVtYm90cm9uOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgIGxldCBfdm0gPSB0aGlzXG4gICAgICAgICAgICAgICAgU2VydmljZS5yZW5kZXJEYXRhKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5kZXRhaWwgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBsZXQgX3ZtID0gdGhpc1xuICAgICAgICAgICAgbGV0IGlkID0gX3ZtLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgICAgICAgIHRoaXMuanVtYm90cm9uKGlkKVxuICAgICAgICB9XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBBcGlEYXRhIGZyb20gJ3B1YmxpYy9kZW1vLWRhdGEnXG5cbmltcG9ydCBRIGZyb20gJ3EnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJEYXRhKGlkID0gXCJcIikge1xuICAgICAgICByZXR1cm4gUS5Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBydG5EYXRhID0ge31cblxuICAgICAgICAgICAgZm9yIChsZXQgdiBvZiBBcGlEYXRhLmZyYW1lcykge1xuICAgICAgICAgICAgICAgIGlmICh2LnRpdGxlID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBydG5EYXRhID0gdlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocnRuRGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gIDxmNy1wYWdlPlxuICAgIDxmNy1uYXZiYXIgdGl0bGU9XCJSRVNU6aOO5qC855qE5Yqo5oCB6Lev55SxXCIgYmFjay1saW5rPVwiQmFja1wiIHNsaWRpbmc+PC9mNy1uYXZiYXI+XG4gICAgPGY3LWJsb2NrIGlubmVyPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PGI+VXJsOjwvYj4ge3skcm91dGUudXJsfX08L2xpPlxuICAgICAgICA8bGk+PGI+UGF0aDo8L2I+IHt7JHJvdXRlLnBhdGh9fTwvbGk+XG4gICAgICAgIDxsaT48Yj5IYXNoOjwvYj4ge3skcm91dGUuaGFzaH19PC9saT5cbiAgICAgICAgPGxpPjxiPlBhcmFtczo8L2I+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluICRyb3V0ZS5wYXJhbXNcIj48Yj57e2tleX19OjwvYj4ge3t2YWx1ZX19PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGI+UXVlcnk6PC9iPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiAkcm91dGUucXVlcnlcIj48Yj57e2tleX19OjwvYj4ge3t2YWx1ZX19PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+PGI+Um91dGU6PC9iPiB7eyRyb3V0ZS5yb3V0ZX19PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9mNy1ibG9jaz5cbiAgICA8ZjctYmxvY2sgaW5uZXI+XG4gICAgICA8ZjctbGluayBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiPkdvIGJhY2sgdmlhIFJvdXRlciBBUEk8L2Y3LWxpbms+XG4gICAgPC9mNy1ibG9jaz5cblxuICA8L2Y3LXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge31cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGY3LXBhZ2U+XG4gICAgPGY3LW5hdmJhciB0aXRsZT1cIuihqOWNleekuuS+i1wiIGJhY2stbGluaz1cIkJhY2tcIiBzbGlkaW5nPjwvZjctbmF2YmFyPlxuICAgIDxmNy1ibG9jay10aXRsZT5Gb3JtPC9mNy1ibG9jay10aXRsZT5cbiAgICA8ZjctbGlzdCBmb3JtPlxuICAgICAgPGY3LWxpc3QtaXRlbT5cbiAgICAgICAgPGY3LWxhYmVsPk5hbWU8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWw+UGFzc3dvcmQ8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1sYWJlbD5FLW1haWw8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWw+VVJMPC9mNy1sYWJlbD5cbiAgICAgICAgPGY3LWlucHV0IHR5cGU9XCJ1cmxcIiBwbGFjZWhvbGRlcj1cIlVSTFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1sYWJlbD5QaG9uZTwvZjctbGFiZWw+XG4gICAgICAgIDxmNy1pbnB1dCB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZVwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1sYWJlbD5CaXJ0aCBkYXRlPC9mNy1sYWJlbD5cbiAgICAgICAgPGY3LWlucHV0IHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJCaXJ0aCBkYXRlXCIgdmFsdWU9XCIyMDE0LTA0LTMwXCI+PC9mNy1pbnB1dD5cbiAgICAgIDwvZjctbGlzdC1pdGVtPlxuICAgICAgPGY3LWxpc3QtaXRlbT5cbiAgICAgICAgPGY3LWxhYmVsPkRhdGUgdGltZTwvZjctbGFiZWw+XG4gICAgICAgIDxmNy1pbnB1dCB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWw+R2VuZGVyPC9mNy1sYWJlbD5cbiAgICAgICAgPGY3LWlucHV0IHR5cGU9XCJzZWxlY3RcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk1hbGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkZlbWFsZTwvb3B0aW9uPlxuICAgICAgICA8L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWw+U3dpdGNoPC9mNy1sYWJlbD5cbiAgICAgICAgPGY3LWlucHV0IHR5cGU9XCJzd2l0Y2hcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWw+UmFuZ2U8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxXCIgdmFsdWU9XCI5MFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1sYWJlbD5UZXh0YXJlYTwvZjctbGFiZWw+XG4gICAgICAgIDxmNy1pbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIlRleHRhcmVhXCI+PC9mNy1pbnB1dD5cbiAgICAgIDwvZjctbGlzdC1pdGVtPlxuICAgIDwvZjctbGlzdD5cblxuICAgIDxmNy1ibG9jay10aXRsZT5Gb3JtIFdpdGggRmxvYXRpbmcgTGFiZWxzPC9mNy1ibG9jay10aXRsZT5cbiAgICA8ZjctbGlzdCBmb3JtPlxuICAgICAgPGY3LWxpc3QtaXRlbT5cbiAgICAgICAgPGY3LWxhYmVsIGZsb2F0aW5nPk5hbWU8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctbGFiZWwgZmxvYXRpbmc+UGFzc3dvcmQ8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1sYWJlbCBmbG9hdGluZz5FLW1haWw8L2Y3LWxhYmVsPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgPC9mNy1saXN0PlxuXG4gICAgPGY3LWJsb2NrLXRpdGxlPkZvcm0gV2l0aG91dCBMYWJlbHM8L2Y3LWJsb2NrLXRpdGxlPlxuICAgIDxmNy1saXN0IGZvcm0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIj48L2Y3LWlucHV0PlxuICAgICAgPC9mNy1saXN0LWl0ZW0+XG4gICAgICA8ZjctbGlzdC1pdGVtPlxuICAgICAgICA8ZjctaW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICAgIDxmNy1saXN0LWl0ZW0+XG4gICAgICAgIDxmNy1pbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiPjwvZjctaW5wdXQ+XG4gICAgICA8L2Y3LWxpc3QtaXRlbT5cbiAgICA8L2Y3LWxpc3Q+XG5cbiAgICA8ZjctYmxvY2stdGl0bGU+Q2hlY2tib3hlczwvZjctYmxvY2stdGl0bGU+XG4gICAgPGY3LWxpc3QgZm9ybT5cbiAgICAgIDxmNy1saXN0LWl0ZW0gdi1mb3I9XCJuIGluIDNcIiBjaGVja2JveCBuYW1lPVwibXktY2hlY2tib3hcIiA6dmFsdWU9XCJuXCIgOnRpdGxlPVwiJ0NoZWNrYm94ICcgKyBuXCI+PC9mNy1saXN0LWl0ZW0+XG4gICAgPC9mNy1saXN0PlxuXG4gICAgPGY3LWJsb2NrLXRpdGxlPlJhZGlvczwvZjctYmxvY2stdGl0bGU+XG4gICAgPGY3LWxpc3QgZm9ybT5cbiAgICAgIDxmNy1saXN0LWl0ZW0gdi1mb3I9XCJuIGluIDNcIiByYWRpbyBuYW1lPVwibXktcmFkaW9cIiA6Y2hlY2tlZD1cIm4gPT09IDFcIiA6dmFsdWU9XCJuXCIgOnRpdGxlPVwiJ1JhZGlvICcgKyBuXCI+PC9mNy1saXN0LWl0ZW0+XG4gICAgPC9mNy1saXN0PlxuXG4gICAgPGY3LWJsb2NrLXRpdGxlPkJ1dHRvbnM8L2Y3LWJsb2NrLXRpdGxlPlxuICAgIDxmNy1ibG9jayBpbm5lcj5cbiAgICAgIDxwPjxmNy1idXR0b24+QnV0dG9uPC9mNy1idXR0b24+PC9wPlxuICAgICAgPHA+PGY3LWJ1dHRvbiByb3VuZD5CdXR0b24gUm91bmQ8L2Y3LWJ1dHRvbj48L3A+XG4gICAgICA8cD48ZjctYnV0dG9uIGZpbGw+QnV0dG9uIEZpbGw8L2Y3LWJ1dHRvbj48L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGY3LWJ1dHRvbnM+XG4gICAgICAgICAgPGY3LWJ1dHRvbiByb3VuZCBhY3RpdmU+QnV0dG9uIDE8L2Y3LWJ1dHRvbj5cbiAgICAgICAgICA8ZjctYnV0dG9uIHJvdW5kPkJ1dHRvbiAyPC9mNy1idXR0b24+XG4gICAgICAgICAgPGY3LWJ1dHRvbiByb3VuZD5CdXR0b24gMzwvZjctYnV0dG9uPlxuICAgICAgICA8L2Y3LWJ1dHRvbnM+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGY3LWJ1dHRvbnMgY29sb3I9XCJvcmFuZ2VcIj5cbiAgICAgICAgICA8ZjctYnV0dG9uIHJvdW5kIGJpZz5CdXR0b24gMTwvZjctYnV0dG9uPlxuICAgICAgICAgIDxmNy1idXR0b24gcm91bmQgYmlnIGFjdGl2ZT5CdXR0b24gMjwvZjctYnV0dG9uPlxuICAgICAgICAgIDxmNy1idXR0b24gcm91bmQgYmlnPkJ1dHRvbiAzPC9mNy1idXR0b24+XG4gICAgICAgIDwvZjctYnV0dG9ucz5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8ZjctZ3JpZD5cbiAgICAgICAgICA8ZjctY29sPjxmNy1idXR0b24gYmlnIGZpbGwgY29sb3I9XCJncmVlblwiPlNlbmQ8L2Y3LWJ1dHRvbj48L2Y3LWNvbD5cbiAgICAgICAgICA8ZjctY29sPjxmNy1idXR0b24gYmlnIGZpbGwgY29sb3I9XCJyZWRcIj5EZWxldGU8L2Y3LWJ1dHRvbj48L2Y3LWNvbD5cbiAgICAgICAgPC9mNy1ncmlkPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxmNy1ncmlkPlxuICAgICAgICAgIDxmNy1jb2w+PGY3LWJ1dHRvbiBmaWxsIHJhaXNlZCBjb2xvcj1cImdyZWVuXCI+UmFpc2VkPC9mNy1idXR0b24+PC9mNy1jb2w+XG4gICAgICAgICAgPGY3LWNvbD48ZjctYnV0dG9uIHJhaXNlZCBjb2xvcj1cInJlZFwiPlJhaXNlZDwvZjctYnV0dG9uPjwvZjctY29sPlxuICAgICAgICAgIDxmNy1jb2w+PGY3LWJ1dHRvbiBmaWxsIHJhaXNlZCBjb2xvcj1cInBpbmtcIj5SYWlzZWQ8L2Y3LWJ1dHRvbj48L2Y3LWNvbD5cbiAgICAgICAgPC9mNy1ncmlkPlxuICAgICAgPC9wPlxuICAgIDwvZjctYmxvY2s+XG4gIDwvZjctcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxmNy1wYWdlPlxuICAgICAgICA8ZjctbmF2YmFyIDp0aXRsZT1cImp1bWJvdHJvbi50aXRsZVwiIGJhY2stbGluaz1cIkJhY2tcIiBzbGlkaW5nPjwvZjctbmF2YmFyPlxuICAgICAgICA8ZjctYmxvY2sgaW5uZXI+XG4gICAgICAgICAgICA8cD57e2p1bWJvdHJvbi5jb250ZW50fX08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8ZjctbGluayA6aHJlZj1cImp1bWJvdHJvbi5idXR0b24uaHJlZlwiIGV4dGVybmFsIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYnV0dG9uXCI+e3tqdW1ib3Ryb24uYnV0dG9uLm5hbWV9fTwvZjctbGluaz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mNy1ibG9jaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtYmxvY2sgbWVkaWEtbGlzdFwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInN3aXBlb3V0XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlb3V0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9hcnRpY2xlL2lkLycraXRlbS50aXRsZSsnLydcIiBjbGFzcz1cIml0ZW0tbGluayBpdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS10aXRsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXRpdGxlXCI+e3tpdGVtLnRpdGxlfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXRleHRcIj57e2l0ZW0uZGVzY319PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Y3LXBhZ2U+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTZXJ2aWNlIGZyb20gJy4vc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpc3Rpbmc6IFtdLFxuICAgICAgICAgICAgICAgIGp1bWJvdHJvbjoge1xuICAgICAgICAgICAgICAgICAgICBidXR0b246IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsaXN0aW5nSW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IF92bSA9IHRoaXNcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLnJlbmRlckRhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5saXN0aW5nID0gZGF0YS5saXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIF92bS5qdW1ib3Ryb24gPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLmp1bWJvdHJvbilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5saXN0aW5nSW5pdCgpXG4gICAgICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEFwaURhdGEgZnJvbSAncHVibGljL2RlbW8tZGF0YSdcblxuaW1wb3J0IFEgZnJvbSAncSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlckRhdGEoKSB7XG4gICAgICAgIGxldCBydG5EYXRhID0gW11cbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IHYgb2YgQXBpRGF0YS5mcmFtZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUl0ZW0gPSB7fVxuXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0udGl0bGUgPSB2LnRpdGxlXG4gICAgICAgICAgICAgICAgZGF0YUl0ZW0uZGVzYyA9IHYuZGVzY1xuICAgICAgICAgICAgICAgIGRhdGFJdGVtLmlkID0gdi50aXRsZVxuXG4gICAgICAgICAgICAgICAgcnRuRGF0YS5wdXNoKGRhdGFJdGVtKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBcImxpc3RpbmdcIjogcnRuRGF0YSxcbiAgICAgICAgICAgICAgICBcImp1bWJvdHJvblwiOiBBcGlEYXRhLmxpc3QuanVtYm90cm9uXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFt7XG4gICAgcGF0aDogJy9hYm91dC8nLFxuICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9tb2R1bGUvYWJvdXQvaW5kZXgudnVlJylcbn0sIHtcbiAgICBwYXRoOiAnL2Zvcm0vJyxcbiAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vbW9kdWxlL2Zvcm0vaW5kZXgudnVlJylcbn0sIHtcbiAgICBwYXRoOiAnL2R5bmFtaWMtcm91dGUvYmxvZy86YmxvZ0lkL3Bvc3QvOnBvc3RJZC8nLFxuICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9tb2R1bGUvZHluYW1pYy1yb3V0ZS9pbmRleC52dWUnKVxufSwge1xuICAgIHBhdGg6ICcvbGlzdGluZy8nLFxuICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9tb2R1bGUvbGlzdGluZy9pbmRleC52dWUnKVxufSwge1xuICAgIHBhdGg6ICcvYXJ0aWNsZS9pZC86aWQvJyxcbiAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vbW9kdWxlL2FydGljbGUvaW5kZXgudnVlJylcbn1dXG4iLCJpbXBvcnQgQXBpRGF0YSBmcm9tICdwdWJsaWMvZGVtby1kYXRhJ1xuXG5pbXBvcnQgUSBmcm9tICdxJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIFEuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIFwiaW5kZXhcIjogQXBpRGF0YS5pbmRleCxcbiAgICAgICAgICAgICAgICBcImNvbW1vblwiOiBBcGlEYXRhLmNvbW1vblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJsZXQgZnJhbWVzID0gW3tcbiAgICB0aXRsZTogXCJOb2RlanNcIixcbiAgICBkZXNjOiBcIkZFWiDmnoTlu7rlnKggTm9kZUpTIOWfuuS6jiBDaHJvbWUgVjgg5byV5pOO55qEIEphdmFTY3JpcHQg6L+Q6KGM546v5aKD77yM5YW25LqL5Lu26amx5Yqo6Z2e6Zi75aGe55qE54m55oCn77yM5p6B5YW25b+r6YCf55qE57yW6K+R5YmN56uv5ZCE56eN6LWE5rqQXCIsXG4gICAgY29udGVudDogYDxkaXYgaWQ9XCJob21lLWludHJvXCI+XG5cbiAgICAgICAgPHA+Tm9kZS5qc8KuIGlzIGEgSmF2YVNjcmlwdCBydW50aW1lIGJ1aWx0IG9uIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS92OC9cIj5DaHJvbWUncyBWOCBKYXZhU2NyaXB0IGVuZ2luZTwvYT4uXG5Ob2RlLmpzIHVzZXMgYW4gZXZlbnQtZHJpdmVuLCBub24tYmxvY2tpbmcgSS9PIG1vZGVsIHRoYXQgbWFrZXMgaXRcbmxpZ2h0d2VpZ2h0IGFuZCBlZmZpY2llbnQuIE5vZGUuanMnIHBhY2thZ2UgZWNvc3lzdGVtLCA8YSBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiPm5wbTwvYT4sIGlzIHRoZSBsYXJnZXN0IGVjb3N5c3RlbSBvZiBvcGVuXG5zb3VyY2UgbGlicmFyaWVzIGluIHRoZSB3b3JsZC48L3A+XG5cblxuXG4gICAgICAgIDxoMiBpZD1cImhvbWUtZG93bmxvYWRoZWFkXCIgZGF0YS1kbC1sb2NhbD1cIkRvd25sb2FkIGZvclwiPkRvd25sb2FkIGZvciBtYWNPUyAoeDY0KTwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvbWUtZG93bmxvYWRibG9ja1wiPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y2LjEwLjAvbm9kZS12Ni4xMC4wLnBrZ1wiIGNsYXNzPVwiaG9tZS1kb3dubG9hZGJ1dHRvblwiIHRpdGxlPVwiRG93bmxvYWQgdjYuMTAuMCBMVFNcIiBkYXRhLXZlcnNpb249XCJ2Ni4xMC4wXCI+XG4gICAgICAgICAgICB2Ni4xMC4wIExUU1xuICAgICAgICAgICAgPHNtYWxsPlJlY29tbWVuZGVkIEZvciBNb3N0IFVzZXJzPC9zbWFsbD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ub2RlanMub3JnL2VuL2Rvd25sb2FkL1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y2Lm1kIzYuMTAuMFwiPkNoYW5nZWxvZzwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25vZGVqcy5vcmcvZGlzdC9sYXRlc3QtdjYueC9kb2NzL2FwaS9cIj5BUEkgRG9jczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWRvd25sb2FkYmxvY2tcIj5cblxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L3Y3LjcuMS9ub2RlLXY3LjcuMS5wa2dcIiBjbGFzcz1cImhvbWUtZG93bmxvYWRidXR0b25cIiB0aXRsZT1cIkRvd25sb2FkIHY3LjcuMSBDdXJyZW50XCIgZGF0YS12ZXJzaW9uPVwidjcuNy4xXCI+XG4gICAgICAgICAgICAgIHY3LjcuMSBDdXJyZW50XG4gICAgICAgICAgICAgIDxzbWFsbD5MYXRlc3QgRmVhdHVyZXM8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWRpdmlkZXItcGlwZSBob21lLXNlY29uZGFyeS1saW5rc1wiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9lbi9kb3dubG9hZC9jdXJyZW50L1wiPk90aGVyIERvd25sb2FkczwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9tYXN0ZXIvZG9jL2NoYW5nZWxvZ3MvQ0hBTkdFTE9HX1Y3Lm1kIzcuNy4xXCI+Q2hhbmdlbG9nPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC12Ny54L2RvY3MvYXBpL1wiPkFQSSBEb2NzPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBPciBoYXZlIGEgbG9vayBhdCB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvTFRTI2x0cy1zY2hlZHVsZVwiPkxUUyBzY2hlZHVsZS48L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL25vZGVqcy5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiTlBNXCIsXG4gICAgZGVzYzogXCJGRVog5L2/55SoIE5QTSDmjqXlhaXlhajnkIPmnIDlpKfnmoTlvIDmupDnlJ/mgIHns7vnu5/vvIzlhbflpIfml6DpmZDnmoTlip/og73mianlsZXog73lipvvvIzlj6/mlbTlkIjlm73pmYXliY3msr/nmoTlvIDmupDmoYbmnrbvvIzpgILlupTnnqzmga/kuIflj5jnmoTmioDmnK/mm7Tmm79cIixcbiAgICBjb250ZW50OiBgPGgxIGNsYXNzPVwidGl0bGUgZW0tZGVmYXVsdCB0eXBlLW5ldXRyYWwtMTFcIj5cbiAgICAgICAgICBCdWlsZCBhbWF6aW5nIHRoaW5nc1xuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzcz1cImg1IGVtLWRlZmF1bHQgdHlwZS1uZXV0cmFsLTExIHBieGxcIj5cbiAgICAgICAgICBucG0gaXMgdGhlIHBhY2thZ2UgbWFuYWdlciBmb3IgSmF2YVNjcmlwdC4gRmluZCwgc2hhcmUsIGFuZCByZXVzZVxuICAgICAgICAgIHBhY2thZ2VzIG9mIGNvZGUgZnJvbSBodW5kcmVkcyBvZiB0aG91c2FuZHMgb2YgZGV2ZWxvcGVycyDigJQgYW5kXG4gICAgICAgICAgYXNzZW1ibGUgdGhlbSBpbiBwb3dlcmZ1bCBuZXcgd2F5cy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YSBpZD1cIm1haW4tY3RhXCIgaHJlZj1cIiNwYW5lLWhvbWVwYWdlLXByaWNpbmdcIiBjbGFzcz1cImJ0biBidG4taGlnaGxpZ2h0LTMgbXJsXCIgZGF0YS1ldmVudC1uYW1lPVwiaG9tZXBhZ2UtaGVyby1jdGFcIj5HZXQgc3RhcnRlZDwvYT5gLFxuICAgIHZpZXdNb3JlOiB7XG4gICAgICAgIHRleHQ6IFwi5pu05aSa5L+h5oGvXCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkd1bHBcIixcbiAgICBkZXNjOiBcIkZFWiDmlbTlkIhHdWxw55qE5LyX5aSa5o+S5Lu277yM57yW6K+R44CB5LyY5YyW5ZKM57uE57uH5YmN56uv5aSN5p2C55qE5qih5Z2X5Y+K6Z2Z5oCB6LWE5rqQ77yM5Zad552A5Y+v5LmQ5YS/44CB5ZO8552A5bCP5puy5YS/77yM6Ieq5Yqo5YyW5a6M5oiQ5YmN56uv5aSn6YeP6YeN5aSN5bel5L2cXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj5BdXRvbWF0ZSBhbmQgZW5oYW5jZSB5b3VyIHdvcmtmbG93PC9oMT48aDIgY2xhc3M9XCJwYXJhZ3JhcGhcIj5cbiAgICAgICAgICBndWxwIGlzIGEgdG9vbGtpdCBmb3IgYXV0b21hdGluZyBwYWluZnVsIG9yIHRpbWUtY29uc3VtaW5nIHRhc2tzIGluIHlvdXIgZGV2ZWxvcG1lbnQgd29ya2Zsb3csIHNvIHlvdSBjYW4gc3RvcCBtZXNzaW5nIGFyb3VuZCBhbmQgYnVpbGQgc29tZXRoaW5nLlxuICAgICAgICA8L2gyPjxkaXYgY2xhc3M9XCJjdGFzXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJjdGFzLWJ1dHRvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3VscGpzL2d1bHAvYmxvYi9tYXN0ZXIvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQubWRcIj5HZXQgU3RhcnRlZDwvYT5cbiAgICAgICAgPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHA6Ly9ndWxwanMuY29tL1wiXG4gICAgfVxufSwge1xuICAgIHRpdGxlOiBcIkJyb3dzZXJpZnlcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcmlmeSDmqKHlnZfljJbnu4Tnu4flkoznrqHnkIbpobnnm67nmoTlkITkuKrlip/og73mqKHlnZfvvIzmnoHlpKfmj5DljYfpobnnm67nmoTlj6/nu7TmiqTmgKfjgIHlip/og73lpI3nlKjmgKfvvIzlubblrp7njrDnp6/mnKjlvI/nmoTmkK3lu7rnvZHpobVcIixcbiAgICBjb250ZW50OiBgPHNlY3Rpb24gaWQ9XCJ0b3AtaG9tZS1zZWN0aW9uXCIgY2xhc3M9XCJ0b3Atc2VjdGlvbiBjb2xvci1hXCI+XG4gICAgICA8ZGl2IGlkPVwidG9wLWhvbWUtaW1hZ2VcIj48L2Rpdj5cblxuICAgICAgIDxoMyBpZD1cInRvcC1zdWJ0aXRsZVwiIGNsYXNzPVwibGFyZ2UtZm9udFwiPkJyb3dzZXJpZnkgbGV0cyB5b3UgcmVxdWlyZSg8c3BhbiBjbGFzcz1cImNvbG9yLWRcIj4nbW9kdWxlcyc8L3NwYW4+KSBpbiB0aGUgYnJvd3NlciBieSBidW5kbGluZyB1cCBhbGwgb2YgeW91ciBkZXBlbmRlbmNpZXMuPC9oMz5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svbm9kZS1icm93c2VyaWZ5I3VzYWdlXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0b3AtYnV0dG9uXCIgaWQ9XCJ0b3AtYnV0dG9uMlwiPlxuICAgICAgICAgIERvY3VtZW50YXRpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2E+XG4gICAgPC9zZWN0aW9uPmAsXG4gICAgdmlld01vcmU6IHtcbiAgICAgICAgdGV4dDogXCLmm7TlpJrkv6Hmga9cIixcbiAgICAgICAgaHJlZjogXCJodHRwOi8vYnJvd3NlcmlmeS5vcmcvXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm93ZXJcIixcbiAgICBkZXNjOiBcIkZFWiDlj6/phY3nva7kvb/nlKggQm93ZXIg5pCc57Si44CB5a6J6KOF44CB5pu05paw5ZKM5Y246L295aaCSmF2YVNjcmlwdOOAgUNTU+S5i+exu+eahOe9kee7nOi1hOa6kO+8jOmAmui/h+iHquWKqOWMluazqOWFpeaKgOacr+WujOe+juino+WGs+WkjeadgueahOahhuaetuWMheeuoeeQhumXrumimFwiLFxuICAgIGNvbnRlbnQ6IGA8ZGl2IGNsYXNzPVwibWFpblwiPlxuPHAgY2xhc3M9XCJsZWFkXCI+V2ViIHNpdGVzIGFyZSBtYWRlIG9mIGxvdHMgb2YgdGhpbmdzIOKAlCBmcmFtZXdvcmtzLCBsaWJyYXJpZXMsIGFzc2V0cywgYW5kIHV0aWxpdGllcy4gQm93ZXIgbWFuYWdlcyBhbGwgdGhlc2UgdGhpbmdzIGZvciB5b3UuPC9wPlxuPHA+S2VlcGluZyB0cmFjayBvZiBhbGwgdGhlc2UgcGFja2FnZXMgYW5kIG1ha2luZyBzdXJlIHRoZXkgYXJlIHVwIHRvIGRhdGUgKG9yIHNldCB0byB0aGUgc3BlY2lmaWMgdmVyc2lvbnMgeW91IG5lZWQpIGlzIHRyaWNreS4gQm93ZXIgdG8gdGhlIHJlc2N1ZSE8L3A+XG48cD5Cb3dlciBjYW4gbWFuYWdlIGNvbXBvbmVudHMgdGhhdCBjb250YWluIEhUTUwsIENTUywgSmF2YVNjcmlwdCwgZm9udHMgb3IgZXZlbiBpbWFnZSBmaWxlcy4gQm93ZXIgZG9lc27igJl0IGNvbmNhdGVuYXRlIG9yIG1pbmlmeSBjb2RlIG9yIGRvIGFueXRoaW5nIGVsc2UgLSBpdCBqdXN0IGluc3RhbGxzIHRoZSByaWdodCB2ZXJzaW9ucyBvZiB0aGUgcGFja2FnZXMgeW91IG5lZWQgYW5kIHRoZWlyIGRlcGVuZGVuY2llcy48L3A+XG48cD5UbyA8YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiPmdldCBzdGFydGVkPC9hPiwgQm93ZXIgd29ya3MgYnkgZmV0Y2hpbmcgYW5kIGluc3RhbGxpbmcgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gZnJvbSBhbGwgb3ZlciwgdGFraW5nIGNhcmUgb2YgaHVudGluZywgZmluZGluZywgZG93bmxvYWRpbmcsIGFuZCBzYXZpbmcgdGhlIHN0dWZmIHlvdeKAmXJlIGxvb2tpbmcgZm9yLiBCb3dlciBrZWVwcyB0cmFjayBvZiB0aGVzZSBwYWNrYWdlcyBpbiBhIG1hbmlmZXN0IGZpbGUsIDxhIGhyZWY9XCIvZG9jcy9jcmVhdGluZy1wYWNrYWdlcy8jYm93ZXJqc29uXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+PC9hPi4gSG93IHlvdSB1c2UgPGEgaHJlZj1cIi9zZWFyY2hcIj5wYWNrYWdlczwvYT4gaXMgdXAgdG8geW91LiBCb3dlciBwcm92aWRlcyBob29rcyB0byBmYWNpbGl0YXRlIHVzaW5nIHBhY2thZ2VzIGluIHlvdXIgPGEgaHJlZj1cIi9kb2NzL3Rvb2xzXCI+dG9vbHMgYW5kIHdvcmtmbG93czwvYT4uPC9wPlxuPHA+Qm93ZXIgaXMgb3B0aW1pemVkIGZvciB0aGUgZnJvbnQtZW5kLiBJZiBtdWx0aXBsZSBwYWNrYWdlcyBkZXBlbmQgb24gYSBwYWNrYWdlIC0galF1ZXJ5IGZvciBleGFtcGxlIC0gQm93ZXIgd2lsbCBkb3dubG9hZCBqUXVlcnkganVzdCBvbmNlLiBUaGlzIGlzIGtub3duIGFzIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoIGFuZCBpdCBoZWxwcyByZWR1Y2UgcGFnZSBsb2FkLjwvcD5cbjxoMiBpZD1cImluc3RhbGwtYm93ZXJcIj48YSBocmVmPVwiI2luc3RhbGwtYm93ZXJcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5JbnN0YWxsIEJvd2VyPC9oMj5cbjxwPkJvd2VyIGlzIGEgY29tbWFuZCBsaW5lIHV0aWxpdHkuIEluc3RhbGwgaXQgd2l0aCBucG0uPC9wPlxuPGZpZ3VyZSBjbGFzcz1cImhpZ2hsaWdodFwiPjxwcmU+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS1iYXNoXCIgZGF0YS1sYW5nPVwiYmFzaFwiPjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ucG0gaW5zdGFsbCAtZyBib3dlcjwvY29kZT48L3ByZT48L2ZpZ3VyZT5cbjxwPkJvd2VyIHJlcXVpcmVzIDxhIGhyZWY9XCJodHRwOi8vbm9kZWpzLm9yZy9cIj5ub2RlLCBucG08L2E+IGFuZCA8YSBocmVmPVwiaHR0cDovL2dpdC1zY20ub3JnXCI+Z2l0PC9hPi48L3A+XG48cD5MYXRlc3QgcmVsZWFzZTogPGEgaHJlZj1cIlwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vdi9ib3dlci5zdmc/bWF4QWdlPTI1OTIwMDBcIiBhbHQ9XCJib3dlciB2ZXJzaW9uXCI+PC9hPjwvcD5cbjxwPkZvciB0cm91Ymxlc2hvb3RpbmcgaW5zdGFsbGF0aW9uIG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMsIHJlYWQgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYm93ZXIvYm93ZXIvd2lraS9Ucm91Ymxlc2hvb3RpbmdcIj50cm91Ymxlc2hvb3Rpbmc8L2E+IHdpa2kgcGFnZS48L3A+XG48aDIgaWQ9XCJnZXR0aW5nLXN0YXJ0ZWRcIj48YSBocmVmPVwiI2dldHRpbmctc3RhcnRlZFwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPkdldHRpbmcgc3RhcnRlZDwvaDI+XG48aDMgaWQ9XCJpbnN0YWxsLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNpbnN0YWxsLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+SW5zdGFsbCBwYWNrYWdlczwvaDM+XG48cD5JbnN0YWxsIHBhY2thZ2VzIHdpdGggPGEgaHJlZj1cIi9kb2NzL2FwaSNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi4gQm93ZXIgaW5zdGFsbHMgcGFja2FnZXMgdG8gPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyX2NvbXBvbmVudHMvPC9jb2RlPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgJmx0O3BhY2thZ2UmZ3Q7PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPHA+QSBwYWNrYWdlIGNhbiBiZSBhIEdpdEh1YiBzaG9ydGhhbmQsIGEgR2l0IGVuZHBvaW50LCBhIFVSTCwgYW5kIG1vcmUuIFJlYWQgbW9yZSBhYm91dCA8YSBocmVmPVwiL2RvY3MvYXBpLyNpbnN0YWxsXCI+PGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGw8L2NvZGU+PC9hPi48L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWJhc2hcIiBkYXRhLWxhbmc9XCJiYXNoXCI+PHNwYW4gY2xhc3M9XCJjXCI+IyBpbnN0YWxscyB0aGUgcHJvamVjdCBkZXBlbmRlbmNpZXMgbGlzdGVkIGluIGJvd2VyLmpzb248L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbFxuPHNwYW4gY2xhc3M9XCJjXCI+IyByZWdpc3RlcmVkIHBhY2thZ2U8L3NwYW4+XG48c3BhbiBjbGFzcz1cImdwXCI+JCA8L3NwYW4+Ym93ZXIgaW5zdGFsbCBqcXVlcnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0SHViIHNob3J0aGFuZDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGRlc2FuZHJvL21hc29ucnlcbjxzcGFuIGNsYXNzPVwiY1wiPiMgR2l0IGVuZHBvaW50PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJncFwiPiQgPC9zcGFuPmJvd2VyIGluc3RhbGwgZ2l0Oi8vZ2l0aHViLmNvbS91c2VyL3BhY2thZ2UuZ2l0XG48c3BhbiBjbGFzcz1cImNcIj4jIFVSTDwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiZ3BcIj4kIDwvc3Bhbj5ib3dlciBpbnN0YWxsIGh0dHA6Ly9leGFtcGxlLmNvbS9zY3JpcHQuanM8L2NvZGU+PC9wcmU+PC9maWd1cmU+XG48aDMgaWQ9XCJzZWFyY2gtcGFja2FnZXNcIj48YSBocmVmPVwiI3NlYXJjaC1wYWNrYWdlc1wiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlNlYXJjaCBwYWNrYWdlczwvaDM+XG48cD48YSBocmVmPVwiL3NlYXJjaFwiPlNlYXJjaCBCb3dlciBwYWNrYWdlczwvYT4gYW5kIGZpbmQgdGhlIHJlZ2lzdGVyZWQgcGFja2FnZSBuYW1lcyBmb3IgeW91ciBmYXZvcml0ZSBwcm9qZWN0cy48L3A+XG48aDMgaWQ9XCJzYXZlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiNzYXZlLXBhY2thZ2VzXCIgY2xhc3M9XCJoZWFkZXItYW5jaG9yXCI+wqc8L2E+U2F2ZSBwYWNrYWdlczwvaDM+XG48cD5DcmVhdGUgYSA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIuanNvbjwvY29kZT4gZmlsZSBmb3IgeW91ciBwYWNrYWdlIHdpdGggPGEgaHJlZj1cIi9kb2NzL2NyZWF0aW5nLXBhY2thZ2VzLyNib3dlcmpzb25cIj48Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+Ym93ZXIgaW5pdDwvY29kZT48L2E+LjwvcD5cbjxwPlRoZW4gc2F2ZSBuZXcgZGVwZW5kZW5jaWVzIHRvIHlvdXIgPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyLmpzb248L2NvZGU+IHdpdGggPGNvZGUgY2xhc3M9XCJoaWdobGlnaHRlci1yb3VnZVwiPmJvd2VyIGluc3RhbGwgUEFDS0FHRSAtLXNhdmU8L2NvZGU+PC9wPlxuPGgzIGlkPVwidXNlLXBhY2thZ2VzXCI+PGEgaHJlZj1cIiN1c2UtcGFja2FnZXNcIiBjbGFzcz1cImhlYWRlci1hbmNob3JcIj7CpzwvYT5Vc2UgcGFja2FnZXM8L2gzPlxuPHA+SG93IHlvdSB1c2UgcGFja2FnZXMgaXMgdXAgdG8geW91LiBXZSByZWNvbW1lbmQgeW91IHVzZSBCb3dlciB0b2dldGhlciB3aXRoIDxhIGhyZWY9XCIvZG9jcy90b29scy9cIj5HcnVudCwgUmVxdWlyZUpTLCBZZW9tYW4sIGFuZCBsb3RzIG9mIG90aGVyIHRvb2xzPC9hPiBvciBidWlsZCB5b3VyIG93biB3b3JrZmxvdyB3aXRoIDxhIGhyZWY9XCIvZG9jcy9hcGkvXCI+dGhlIEFQSTwvYT4uIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGluc3RhbGxlZCBwYWNrYWdlcyBkaXJlY3RseSwgbGlrZSB0aGlzLCBpbiB0aGUgY2FzZSBvZiA8Y29kZSBjbGFzcz1cImhpZ2hsaWdodGVyLXJvdWdlXCI+anF1ZXJ5PC9jb2RlPjo8L3A+XG48ZmlndXJlIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PHByZT48Y29kZSBjbGFzcz1cImxhbmd1YWdlLWh0bWxcIiBkYXRhLWxhbmc9XCJodG1sXCI+PHNwYW4gY2xhc3M9XCJudFwiPiZsdDtzY3JpcHQgPC9zcGFuPjxzcGFuIGNsYXNzPVwibmFcIj5zcmM9PC9zcGFuPjxzcGFuIGNsYXNzPVwic1wiPlwiYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzXCI8L3NwYW4+PHNwYW4gY2xhc3M9XCJudFwiPiZndDsmbHQ7L3NjcmlwdCZndDs8L3NwYW4+PC9jb2RlPjwvcHJlPjwvZmlndXJlPlxuPGgyIGlkPVwidHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiPjxhIGhyZWY9XCIjdHdpdHRlci11cGRhdGVzLWZyb20tYm93ZXJodHRwc3R3aXR0ZXJjb21ib3dlclwiIGNsYXNzPVwiaGVhZGVyLWFuY2hvclwiPsKnPC9hPlR3aXR0ZXIgdXBkYXRlcyBmcm9tIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jvd2VyXCI+QGJvd2VyPC9hPjwvaDI+XG48cD48YSBjbGFzcz1cInR3aXR0ZXItdGltZWxpbmVcIiBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ib3dlclwiIGRhdGEtd2lkZ2V0LWlkPVwiNDgwMzc3MjkxMzY5NzU0NjI1XCI+VHdlZXRzIGJ5IEBib3dlcjwvYT5cbjwvcD5cblxuPC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYm93ZXIuaW8vXCJcbiAgICB9XG59LCB7XG4gICAgdGl0bGU6IFwiQm9yd3NlclN5bmNcIixcbiAgICBkZXNjOiBcIkZFWiDkvb/nlKggQnJvd3NlcnN5bmMg6K6p5rWP6KeI5Zmo5a6e5pe25b+r6YCf55qE5ZON5bqU5YmN56uv5ZCE56eN5paH5Lu255qE5pu05pS55bm26Ieq5Yqo5Yi35paw6aG16Z2i77yM5Lqm5Y+v5a6e5pe25ZCM5q2l5ZCE5Liq57uI56uv77yM5o+Q6auY6Iez5bCRMzAl55qE5byA5Y+R5pWI546HXCIsXG4gICAgY29udGVudDogYDxoMSBjbGFzcz1cImhvb2tcIj5UaW1lLXNhdmluZyBzeW5jaHJvbmlzZWQgYnJvd3NlciB0ZXN0aW5nLjwvaDE+PHAgY2xhc3M9XCJyb25zZWFsXCI+SXTigJlzIHdpY2tlZC1mYXN0IGFuZCB0b3RhbGx5IGZyZWUuPC9wPjxwIGNsYXNzPVwidmlkZW9cIj48YSBjbGFzcz1cInZpZGVvX19saW5rXCIgaHJlZj1cIiNcIj48L2E+PC9wPjxwIGNsYXNzPVwiaG93LXRvXCI+PC9wPjxwIGNsYXNzPVwiaG93LXRvX19jb21tYW5kXCI+bnBtIGluc3RhbGwgLWcgYnJvd3Nlci1zeW5jPC9wPjxwIGNsYXNzPVwiY3RhXCI+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgaHJlZj1cIiNpbnN0YWxsXCIgdGl0bGU9XCJHZXQgU3RhcnRlZFwiPkdldCBTdGFydGVkPC9hPjwvcD48ZGl2IGNsYXNzPVwicGxheWVyXCI+PHA+J2JvbmpvdXI8L3A+PC9kaXY+YCxcbiAgICB2aWV3TW9yZToge1xuICAgICAgICB0ZXh0OiBcIuabtOWkmuS/oeaBr1wiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vYnJvd3NlcnN5bmMuaW8vXCJcbiAgICB9XG59XVxuXG5sZXQgaW5kZXggPSB7XG4gICAgZmV6ZGVzYzogXCJGRVog5YmN56uv5qih5Z2X5YyW5bel56iL5byA5Y+R5qGG5p62XCIsXG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkhlbGxvIEZFWiBBbmQgRnJhbWV3b3JrNyFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKrkvb/nlKggRkVaIOaQreW7uueahOeUqOS6juW8gOWPkea3t+WQiOenu+WKqOW6lOeUqOaIliBpT1Mg5ZKMIEFuZHJvaWQg6aOO5qC855qEV0VCIEFQUOeahOekuuS+i+OAgua8lOekuuS6huWfuuS6jiBGcmFtZXdvcms3IOe7k+WQiCBWdWUg5p6E5bu66auY5oCn6IO95Y2V6aG16Z2i56e75Yqo5bqU55So44CCXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgbmFtZTogYDxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViLWFsdFwiPjwvaT4gR2l0SHViYCxcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Z1cmljLXpoYW8vZmV6XCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGxpc3QgPSB7XG4gICAganVtYm90cm9uOiB7XG4gICAgICAgIHRpdGxlOiBcIkZFWiBGcmFtZSFcIixcbiAgICAgICAgY29udGVudDogXCLov5nmmK/kuIDkuKrliJfooajlsZXnpLrpobXvvIzor7fngrnlh7vkuIvpnaLliJfooajpobnnm67ov5vlhaXor6bmg4XpobXmtY/op4hcIixcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICBuYW1lOiBcIuafpeeci+abtOWkmuS/oeaBr1wiLFxuICAgICAgICAgICAgaHJlZjogXCJodHRwOi8vZmV6Lmhlc3R1ZHkuY29tXCJcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGNvbW1vbiA9IHtcbiAgICBzaXRlTmFtZTogXCJGRVogRnJhbWV3b3JrNyBEZW1vXCIsXG5cbiAgICBuYXY6IFt7XG4gICAgICAgIG5hbWU6IFwiRkVa5Z+65pys5p625p6EXCIsXG4gICAgICAgIGhyZWY6IFwiL2xpc3RpbmcvXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwi6KGo5Y2V56S65L6LXCIsXG4gICAgICAgIGhyZWY6IFwiL2Zvcm0vXCJcbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiUkVTVOmjjuagvOeahOWKqOaAgei3r+eUsVwiLFxuICAgICAgICBocmVmOiBcIi9keW5hbWljLXJvdXRlL2Jsb2cvNDUvcG9zdC8xMjUvP2Zvbz1iYXIjYWJvdXRcIlxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCLlhbPkuo5GRVpcIixcbiAgICAgICAgaHJlZjogXCIvYWJvdXQvXCJcbiAgICB9XSxcbiAgICB0aXBzOiBcIuacrOekuuS+i+S4uuenu+WKqOerr+mbhuaIkOS6hlJFTeino+WGs+aWueahiO+8jOWPr+S7peivleedgOaoquWxj+OAgeaIluWcqOabtOWkp+eahOenu+WKqOerr+Wxj+W5lea1j+iniO+8jOmhtemdouS4reeahOaJgOacieWFg+e0oOWcqOS4jeWQjOeahOWxj+W5leS4reS8muetieavlOe8qeaUvuOAglwiLFxuICAgIGZvb3RlclRleHQ6IFwiwqkgMjAxNyBGRVog5YmN56uv5qih5Z2X5YyW5bel56iL5byA5Y+R5qGG5p62IENyZWF0ZWQgYnkgRnVyaWMuemhhb1wiXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcImluZGV4XCI6IGluZGV4LFxuICAgIFwibGlzdFwiOiBsaXN0LFxuICAgIFwiZnJhbWVzXCI6IGZyYW1lcyxcbiAgICBcImNvbW1vblwiOiBjb21tb25cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvLyB2aW06dHM9NDpzdHM9NDpzdz00OlxuLyohXG4gKlxuICogQ29weXJpZ2h0IDIwMDktMjAxMiBLcmlzIEtvd2FsIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUXG4gKiBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL3Jhdy9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIFdpdGggcGFydHMgYnkgVHlsZXIgQ2xvc2VcbiAqIENvcHlyaWdodCAyMDA3LTIwMDkgVHlsZXIgQ2xvc2UgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgWCBsaWNlbnNlIGZvdW5kXG4gKiBhdCBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLmh0bWxcbiAqIEZvcmtlZCBhdCByZWZfc2VuZC5qcyB2ZXJzaW9uOiAyMDA5LTA1LTExXG4gKlxuICogV2l0aCBwYXJ0cyBieSBNYXJrIE1pbGxlclxuICogQ29weXJpZ2h0IChDKSAyMDExIEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbihmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGhpcyBmaWxlIHdpbGwgZnVuY3Rpb24gcHJvcGVybHkgYXMgYSA8c2NyaXB0PiB0YWcsIG9yIGEgbW9kdWxlXG4gICAgLy8gdXNpbmcgQ29tbW9uSlMgYW5kIE5vZGVKUyBvciBSZXF1aXJlSlMgbW9kdWxlIGZvcm1hdHMuICBJblxuICAgIC8vIENvbW1vbi9Ob2RlL1JlcXVpcmVKUywgdGhlIG1vZHVsZSBleHBvcnRzIHRoZSBRIEFQSSBhbmQgd2hlblxuICAgIC8vIGV4ZWN1dGVkIGFzIGEgc2ltcGxlIDxzY3JpcHQ+LCBpdCBjcmVhdGVzIGEgUSBnbG9iYWwgaW5zdGVhZC5cblxuICAgIC8vIE1vbnRhZ2UgUmVxdWlyZVxuICAgIGlmICh0eXBlb2YgYm9vdHN0cmFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYm9vdHN0cmFwKFwicHJvbWlzZVwiLCBkZWZpbml0aW9uKTtcblxuICAgIC8vIENvbW1vbkpTXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpO1xuXG4gICAgLy8gUmVxdWlyZUpTXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZGVmaW5pdGlvbik7XG5cbiAgICAvLyBTRVMgKFNlY3VyZSBFY21hU2NyaXB0KVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoIXNlcy5vaygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXMubWFrZVEgPSBkZWZpbml0aW9uO1xuICAgICAgICB9XG5cbiAgICAvLyA8c2NyaXB0PlxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBQcmVmZXIgd2luZG93IG92ZXIgc2VsZiBmb3IgYWRkLW9uIHNjcmlwdHMuIFVzZSBzZWxmIGZvclxuICAgICAgICAvLyBub24td2luZG93ZWQgY29udGV4dHMuXG4gICAgICAgIHZhciBnbG9iYWwgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogc2VsZjtcblxuICAgICAgICAvLyBHZXQgdGhlIGB3aW5kb3dgIG9iamVjdCwgc2F2ZSB0aGUgcHJldmlvdXMgUSBnbG9iYWxcbiAgICAgICAgLy8gYW5kIGluaXRpYWxpemUgUSBhcyBhIGdsb2JhbC5cbiAgICAgICAgdmFyIHByZXZpb3VzUSA9IGdsb2JhbC5RO1xuICAgICAgICBnbG9iYWwuUSA9IGRlZmluaXRpb24oKTtcblxuICAgICAgICAvLyBBZGQgYSBub0NvbmZsaWN0IGZ1bmN0aW9uIHNvIFEgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAgICAgICAgLy8gZ2xvYmFsIG5hbWVzcGFjZS5cbiAgICAgICAgZ2xvYmFsLlEubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdsb2JhbC5RID0gcHJldmlvdXNRO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIGVudmlyb25tZW50IHdhcyBub3QgYW50aWNpcGF0ZWQgYnkgUS4gUGxlYXNlIGZpbGUgYSBidWcuXCIpO1xuICAgIH1cblxufSkoZnVuY3Rpb24gKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBoYXNTdGFja3MgPSBmYWxzZTtcbnRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG59IGNhdGNoIChlKSB7XG4gICAgaGFzU3RhY2tzID0gISFlLnN0YWNrO1xufVxuXG4vLyBBbGwgY29kZSBhZnRlciB0aGlzIHBvaW50IHdpbGwgYmUgZmlsdGVyZWQgZnJvbSBzdGFjayB0cmFjZXMgcmVwb3J0ZWRcbi8vIGJ5IFEuXG52YXIgcVN0YXJ0aW5nTGluZSA9IGNhcHR1cmVMaW5lKCk7XG52YXIgcUZpbGVOYW1lO1xuXG4vLyBzaGltc1xuXG4vLyB1c2VkIGZvciBmYWxsYmFjayBpbiBcImFsbFJlc29sdmVkXCJcbnZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBwb3NzaWJsZSBtZWFucyB0byBleGVjdXRlIGEgdGFzayBpbiBhIGZ1dHVyZSB0dXJuXG4vLyBvZiB0aGUgZXZlbnQgbG9vcC5cbnZhciBuZXh0VGljayA9KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBsaW5rZWQgbGlzdCBvZiB0YXNrcyAoc2luZ2xlLCB3aXRoIGhlYWQgbm9kZSlcbiAgICB2YXIgaGVhZCA9IHt0YXNrOiB2b2lkIDAsIG5leHQ6IG51bGx9O1xuICAgIHZhciB0YWlsID0gaGVhZDtcbiAgICB2YXIgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICB2YXIgcmVxdWVzdFRpY2sgPSB2b2lkIDA7XG4gICAgdmFyIGlzTm9kZUpTID0gZmFsc2U7XG4gICAgLy8gcXVldWUgZm9yIGxhdGUgdGFza3MsIHVzZWQgYnkgdW5oYW5kbGVkIHJlamVjdGlvbiB0cmFja2luZ1xuICAgIHZhciBsYXRlclF1ZXVlID0gW107XG5cbiAgICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICAgICAgLyoganNoaW50IGxvb3BmdW5jOiB0cnVlICovXG4gICAgICAgIHZhciB0YXNrLCBkb21haW47XG5cbiAgICAgICAgd2hpbGUgKGhlYWQubmV4dCkge1xuICAgICAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgICAgICAgIHRhc2sgPSBoZWFkLnRhc2s7XG4gICAgICAgICAgICBoZWFkLnRhc2sgPSB2b2lkIDA7XG4gICAgICAgICAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcblxuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICAgIGhlYWQuZG9tYWluID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVuU2luZ2xlKHRhc2ssIGRvbWFpbik7XG5cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAobGF0ZXJRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRhc2sgPSBsYXRlclF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgcnVuU2luZ2xlKHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGZsdXNoaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJ1bnMgYSBzaW5nbGUgZnVuY3Rpb24gaW4gdGhlIGFzeW5jIHF1ZXVlXG4gICAgZnVuY3Rpb24gcnVuU2luZ2xlKHRhc2ssIGRvbWFpbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFzaygpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChpc05vZGVKUykge1xuICAgICAgICAgICAgICAgIC8vIEluIG5vZGUsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgYXJlIGNvbnNpZGVyZWQgZmF0YWwgZXJyb3JzLlxuICAgICAgICAgICAgICAgIC8vIFJlLXRocm93IHRoZW0gc3luY2hyb25vdXNseSB0byBpbnRlcnJ1cHQgZmx1c2hpbmchXG5cbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgY29udGludWF0aW9uIGlmIHRoZSB1bmNhdWdodCBleGNlcHRpb24gaXMgc3VwcHJlc3NlZFxuICAgICAgICAgICAgICAgIC8vIGxpc3RlbmluZyBcInVuY2F1Z2h0RXhjZXB0aW9uXCIgZXZlbnRzIChhcyBkb21haW5zIGRvZXMpLlxuICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIGluIG5leHQgZXZlbnQgdG8gYXZvaWQgdGljayByZWN1cnNpb24uXG4gICAgICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoLCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRocm93IGU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gYnJvd3NlcnMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC5cbiAgICAgICAgICAgICAgICAvLyBSZS10aHJvdyB0aGVtIGFzeW5jaHJvbm91c2x5IHRvIGF2b2lkIHNsb3ctZG93bnMuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFRpY2sgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICB0YWlsID0gdGFpbC5uZXh0ID0ge1xuICAgICAgICAgICAgdGFzazogdGFzayxcbiAgICAgICAgICAgIGRvbWFpbjogaXNOb2RlSlMgJiYgcHJvY2Vzcy5kb21haW4sXG4gICAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFmbHVzaGluZykge1xuICAgICAgICAgICAgZmx1c2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdFRpY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgcHJvY2Vzcy50b1N0cmluZygpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIiAmJiBwcm9jZXNzLm5leHRUaWNrKSB7XG4gICAgICAgIC8vIEVuc3VyZSBRIGlzIGluIGEgcmVhbCBOb2RlIGVudmlyb25tZW50LCB3aXRoIGEgYHByb2Nlc3MubmV4dFRpY2tgLlxuICAgICAgICAvLyBUbyBzZWUgdGhyb3VnaCBmYWtlIE5vZGUgZW52aXJvbm1lbnRzOlxuICAgICAgICAvLyAqIE1vY2hhIHRlc3QgcnVubmVyIC0gZXhwb3NlcyBhIGBwcm9jZXNzYCBnbG9iYWwgd2l0aG91dCBhIGBuZXh0VGlja2BcbiAgICAgICAgLy8gKiBCcm93c2VyaWZ5IC0gZXhwb3NlcyBhIGBwcm9jZXNzLm5leFRpY2tgIGZ1bmN0aW9uIHRoYXQgdXNlc1xuICAgICAgICAvLyAgIGBzZXRUaW1lb3V0YC4gSW4gdGhpcyBjYXNlIGBzZXRJbW1lZGlhdGVgIGlzIHByZWZlcnJlZCBiZWNhdXNlXG4gICAgICAgIC8vICAgIGl0IGlzIGZhc3Rlci4gQnJvd3NlcmlmeSdzIGBwcm9jZXNzLnRvU3RyaW5nKClgIHlpZWxkc1xuICAgICAgICAvLyAgIFwiW29iamVjdCBPYmplY3RdXCIsIHdoaWxlIGluIGEgcmVhbCBOb2RlIGVudmlyb25tZW50XG4gICAgICAgIC8vICAgYHByb2Nlc3MubmV4dFRpY2soKWAgeWllbGRzIFwiW29iamVjdCBwcm9jZXNzXVwiLlxuICAgICAgICBpc05vZGVKUyA9IHRydWU7XG5cbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIEluIElFMTAsIE5vZGUuanMgMC45Kywgb3IgaHR0cHM6Ly9naXRodWIuY29tL05vYmxlSlMvc2V0SW1tZWRpYXRlXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0VGljayA9IHNldEltbWVkaWF0ZS5iaW5kKHdpbmRvdywgZmx1c2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0SW1tZWRpYXRlKGZsdXNoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2Vyc1xuICAgICAgICAvLyBodHRwOi8vd3d3Lm5vbmJsb2NraW5nLmlvLzIwMTEvMDYvd2luZG93bmV4dHRpY2suaHRtbFxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICAvLyBBdCBsZWFzdCBTYWZhcmkgVmVyc2lvbiA2LjAuNSAoODUzNi4zMC4xKSBpbnRlcm1pdHRlbnRseSBjYW5ub3QgY3JlYXRlXG4gICAgICAgIC8vIHdvcmtpbmcgbWVzc2FnZSBwb3J0cyB0aGUgZmlyc3QgdGltZSBhIHBhZ2UgbG9hZHMuXG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdFRpY2sgPSByZXF1ZXN0UG9ydFRpY2s7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlcXVlc3RQb3J0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIE9wZXJhIHJlcXVpcmVzIHVzIHRvIHByb3ZpZGUgYSBtZXNzYWdlIHBheWxvYWQsIHJlZ2FyZGxlc3Mgb2ZcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgd2UgdXNlIGl0LlxuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsdXNoLCAwKTtcbiAgICAgICAgICAgIHJlcXVlc3RQb3J0VGljaygpO1xuICAgICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXJzXG4gICAgICAgIHJlcXVlc3RUaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmbHVzaCwgMCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIHJ1bnMgYSB0YXNrIGFmdGVyIGFsbCBvdGhlciB0YXNrcyBoYXZlIGJlZW4gcnVuXG4gICAgLy8gdGhpcyBpcyB1c2VmdWwgZm9yIHVuaGFuZGxlZCByZWplY3Rpb24gdHJhY2tpbmcgdGhhdCBuZWVkcyB0byBoYXBwZW5cbiAgICAvLyBhZnRlciBhbGwgYHRoZW5gZCB0YXNrcyBoYXZlIGJlZW4gcnVuLlxuICAgIG5leHRUaWNrLnJ1bkFmdGVyID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgbGF0ZXJRdWV1ZS5wdXNoKHRhc2spO1xuICAgICAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0VGljaygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV4dFRpY2s7XG59KSgpO1xuXG4vLyBBdHRlbXB0IHRvIG1ha2UgZ2VuZXJpY3Mgc2FmZSBpbiB0aGUgZmFjZSBvZiBkb3duc3RyZWFtXG4vLyBtb2RpZmljYXRpb25zLlxuLy8gVGhlcmUgaXMgbm8gc2l0dWF0aW9uIHdoZXJlIHRoaXMgaXMgbmVjZXNzYXJ5LlxuLy8gSWYgeW91IG5lZWQgYSBzZWN1cml0eSBndWFyYW50ZWUsIHRoZXNlIHByaW1vcmRpYWxzIG5lZWQgdG8gYmVcbi8vIGRlZXBseSBmcm96ZW4gYW55d2F5LCBhbmQgaWYgeW91IGRvbuKAmXQgbmVlZCBhIHNlY3VyaXR5IGd1YXJhbnRlZSxcbi8vIHRoaXMgaXMganVzdCBwbGFpbiBwYXJhbm9pZC5cbi8vIEhvd2V2ZXIsIHRoaXMgKiptaWdodCoqIGhhdmUgdGhlIG5pY2Ugc2lkZS1lZmZlY3Qgb2YgcmVkdWNpbmcgdGhlIHNpemUgb2Zcbi8vIHRoZSBtaW5pZmllZCBjb2RlIGJ5IHJlZHVjaW5nIHguY2FsbCgpIHRvIG1lcmVseSB4KClcbi8vIFNlZSBNYXJrIE1pbGxlcuKAmXMgZXhwbGFuYXRpb24gb2Ygd2hhdCB0aGlzIGRvZXMuXG4vLyBodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1jb252ZW50aW9uczpzYWZlX21ldGFfcHJvZ3JhbW1pbmdcbnZhciBjYWxsID0gRnVuY3Rpb24uY2FsbDtcbmZ1bmN0aW9uIHVuY3VycnlUaGlzKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbC5hcHBseShmLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG4vLyBUaGlzIGlzIGVxdWl2YWxlbnQsIGJ1dCBzbG93ZXI6XG4vLyB1bmN1cnJ5VGhpcyA9IEZ1bmN0aW9uX2JpbmQuYmluZChGdW5jdGlvbl9iaW5kLmNhbGwpO1xuLy8gaHR0cDovL2pzcGVyZi5jb20vdW5jdXJyeXRoaXNcblxudmFyIGFycmF5X3NsaWNlID0gdW5jdXJyeVRoaXMoQXJyYXkucHJvdG90eXBlLnNsaWNlKTtcblxudmFyIGFycmF5X3JlZHVjZSA9IHVuY3VycnlUaGlzKFxuICAgIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UgfHwgZnVuY3Rpb24gKGNhbGxiYWNrLCBiYXNpcykge1xuICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIC8vIGNvbmNlcm5pbmcgdGhlIGluaXRpYWwgdmFsdWUsIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHNlZWsgdG8gdGhlIGZpcnN0IHZhbHVlIGluIHRoZSBhcnJheSwgYWNjb3VudGluZ1xuICAgICAgICAgICAgLy8gZm9yIHRoZSBwb3NzaWJpbGl0eSB0aGF0IGlzIGlzIGEgc3BhcnNlIGFycmF5XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFzaXMgPSB0aGlzW2luZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCsraW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlICgxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWR1Y2VcbiAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgcG9zc2liaWxpdHkgdGhhdCB0aGUgYXJyYXkgaXMgc3BhcnNlXG4gICAgICAgICAgICBpZiAoaW5kZXggaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGJhc2lzID0gY2FsbGJhY2soYmFzaXMsIHRoaXNbaW5kZXhdLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2lzO1xuICAgIH1cbik7XG5cbnZhciBhcnJheV9pbmRleE9mID0gdW5jdXJyeVRoaXMoXG4gICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIG5vdCBhIHZlcnkgZ29vZCBzaGltLCBidXQgZ29vZCBlbm91Z2ggZm9yIG91ciBvbmUgdXNlIG9mIGl0XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbik7XG5cbnZhciBhcnJheV9tYXAgPSB1bmN1cnJ5VGhpcyhcbiAgICBBcnJheS5wcm90b3R5cGUubWFwIHx8IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc3ApIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY29sbGVjdCA9IFtdO1xuICAgICAgICBhcnJheV9yZWR1Y2Uoc2VsZiwgZnVuY3Rpb24gKHVuZGVmaW5lZCwgdmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICBjb2xsZWN0LnB1c2goY2FsbGJhY2suY2FsbCh0aGlzcCwgdmFsdWUsIGluZGV4LCBzZWxmKSk7XG4gICAgICAgIH0sIHZvaWQgMCk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0O1xuICAgIH1cbik7XG5cbnZhciBvYmplY3RfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG90eXBlKSB7XG4gICAgZnVuY3Rpb24gVHlwZSgpIHsgfVxuICAgIFR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICAgIHJldHVybiBuZXcgVHlwZSgpO1xufTtcblxudmFyIG9iamVjdF9oYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG52YXIgb2JqZWN0X2tleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3RfaGFzT3duUHJvcGVydHkob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn07XG5cbnZhciBvYmplY3RfdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IE9iamVjdCh2YWx1ZSk7XG59XG5cbi8vIGdlbmVyYXRvciByZWxhdGVkIHNoaW1zXG5cbi8vIEZJWE1FOiBSZW1vdmUgdGhpcyBmdW5jdGlvbiBvbmNlIEVTNiBnZW5lcmF0b3JzIGFyZSBpbiBTcGlkZXJNb25rZXkuXG5mdW5jdGlvbiBpc1N0b3BJdGVyYXRpb24oZXhjZXB0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgb2JqZWN0X3RvU3RyaW5nKGV4Y2VwdGlvbikgPT09IFwiW29iamVjdCBTdG9wSXRlcmF0aW9uXVwiIHx8XG4gICAgICAgIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIFFSZXR1cm5WYWx1ZVxuICAgICk7XG59XG5cbi8vIEZJWE1FOiBSZW1vdmUgdGhpcyBoZWxwZXIgYW5kIFEucmV0dXJuIG9uY2UgRVM2IGdlbmVyYXRvcnMgYXJlIGluXG4vLyBTcGlkZXJNb25rZXkuXG52YXIgUVJldHVyblZhbHVlO1xuaWYgKHR5cGVvZiBSZXR1cm5WYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIFFSZXR1cm5WYWx1ZSA9IFJldHVyblZhbHVlO1xufSBlbHNlIHtcbiAgICBRUmV0dXJuVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH07XG59XG5cbi8vIGxvbmcgc3RhY2sgdHJhY2VzXG5cbnZhciBTVEFDS19KVU1QX1NFUEFSQVRPUiA9IFwiRnJvbSBwcmV2aW91cyBldmVudDpcIjtcblxuZnVuY3Rpb24gbWFrZVN0YWNrVHJhY2VMb25nKGVycm9yLCBwcm9taXNlKSB7XG4gICAgLy8gSWYgcG9zc2libGUsIHRyYW5zZm9ybSB0aGUgZXJyb3Igc3RhY2sgdHJhY2UgYnkgcmVtb3ZpbmcgTm9kZSBhbmQgUVxuICAgIC8vIGNydWZ0LCB0aGVuIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgc3RhY2sgdHJhY2Ugb2YgYHByb21pc2VgLiBTZWUgIzU3LlxuICAgIGlmIChoYXNTdGFja3MgJiZcbiAgICAgICAgcHJvbWlzZS5zdGFjayAmJlxuICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgZXJyb3IgIT09IG51bGwgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2sgJiZcbiAgICAgICAgZXJyb3Iuc3RhY2suaW5kZXhPZihTVEFDS19KVU1QX1NFUEFSQVRPUikgPT09IC0xXG4gICAgKSB7XG4gICAgICAgIHZhciBzdGFja3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcCA9IHByb21pc2U7ICEhcDsgcCA9IHAuc291cmNlKSB7XG4gICAgICAgICAgICBpZiAocC5zdGFjaykge1xuICAgICAgICAgICAgICAgIHN0YWNrcy51bnNoaWZ0KHAuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrcy51bnNoaWZ0KGVycm9yLnN0YWNrKTtcblxuICAgICAgICB2YXIgY29uY2F0ZWRTdGFja3MgPSBzdGFja3Muam9pbihcIlxcblwiICsgU1RBQ0tfSlVNUF9TRVBBUkFUT1IgKyBcIlxcblwiKTtcbiAgICAgICAgZXJyb3Iuc3RhY2sgPSBmaWx0ZXJTdGFja1N0cmluZyhjb25jYXRlZFN0YWNrcyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJTdGFja1N0cmluZyhzdGFja1N0cmluZykge1xuICAgIHZhciBsaW5lcyA9IHN0YWNrU3RyaW5nLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBkZXNpcmVkTGluZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gbGluZXNbaV07XG5cbiAgICAgICAgaWYgKCFpc0ludGVybmFsRnJhbWUobGluZSkgJiYgIWlzTm9kZUZyYW1lKGxpbmUpICYmIGxpbmUpIHtcbiAgICAgICAgICAgIGRlc2lyZWRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZXNpcmVkTGluZXMuam9pbihcIlxcblwiKTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlRnJhbWUoc3RhY2tMaW5lKSB7XG4gICAgcmV0dXJuIHN0YWNrTGluZS5pbmRleE9mKFwiKG1vZHVsZS5qczpcIikgIT09IC0xIHx8XG4gICAgICAgICAgIHN0YWNrTGluZS5pbmRleE9mKFwiKG5vZGUuanM6XCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSkge1xuICAgIC8vIE5hbWVkIGZ1bmN0aW9uczogXCJhdCBmdW5jdGlvbk5hbWUgKGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyKVwiXG4gICAgLy8gSW4gSUUxMCBmdW5jdGlvbiBuYW1lIGNhbiBoYXZlIHNwYWNlcyAoXCJBbm9ueW1vdXMgZnVuY3Rpb25cIikgT19vXG4gICAgdmFyIGF0dGVtcHQxID0gL2F0IC4rIFxcKCguKyk6KFxcZCspOig/OlxcZCspXFwpJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0MSkge1xuICAgICAgICByZXR1cm4gW2F0dGVtcHQxWzFdLCBOdW1iZXIoYXR0ZW1wdDFbMl0pXTtcbiAgICB9XG5cbiAgICAvLyBBbm9ueW1vdXMgZnVuY3Rpb25zOiBcImF0IGZpbGVuYW1lOmxpbmVOdW1iZXI6Y29sdW1uTnVtYmVyXCJcbiAgICB2YXIgYXR0ZW1wdDIgPSAvYXQgKFteIF0rKTooXFxkKyk6KD86XFxkKykkLy5leGVjKHN0YWNrTGluZSk7XG4gICAgaWYgKGF0dGVtcHQyKSB7XG4gICAgICAgIHJldHVybiBbYXR0ZW1wdDJbMV0sIE51bWJlcihhdHRlbXB0MlsyXSldO1xuICAgIH1cblxuICAgIC8vIEZpcmVmb3ggc3R5bGU6IFwiZnVuY3Rpb25AZmlsZW5hbWU6bGluZU51bWJlciBvciBAZmlsZW5hbWU6bGluZU51bWJlclwiXG4gICAgdmFyIGF0dGVtcHQzID0gLy4qQCguKyk6KFxcZCspJC8uZXhlYyhzdGFja0xpbmUpO1xuICAgIGlmIChhdHRlbXB0Mykge1xuICAgICAgICByZXR1cm4gW2F0dGVtcHQzWzFdLCBOdW1iZXIoYXR0ZW1wdDNbMl0pXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzSW50ZXJuYWxGcmFtZShzdGFja0xpbmUpIHtcbiAgICB2YXIgZmlsZU5hbWVBbmRMaW5lTnVtYmVyID0gZ2V0RmlsZU5hbWVBbmRMaW5lTnVtYmVyKHN0YWNrTGluZSk7XG5cbiAgICBpZiAoIWZpbGVOYW1lQW5kTGluZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzBdO1xuICAgIHZhciBsaW5lTnVtYmVyID0gZmlsZU5hbWVBbmRMaW5lTnVtYmVyWzFdO1xuXG4gICAgcmV0dXJuIGZpbGVOYW1lID09PSBxRmlsZU5hbWUgJiZcbiAgICAgICAgbGluZU51bWJlciA+PSBxU3RhcnRpbmdMaW5lICYmXG4gICAgICAgIGxpbmVOdW1iZXIgPD0gcUVuZGluZ0xpbmU7XG59XG5cbi8vIGRpc2NvdmVyIG93biBmaWxlIG5hbWUgYW5kIGxpbmUgbnVtYmVyIHJhbmdlIGZvciBmaWx0ZXJpbmcgc3RhY2tcbi8vIHRyYWNlc1xuZnVuY3Rpb24gY2FwdHVyZUxpbmUoKSB7XG4gICAgaWYgKCFoYXNTdGFja3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdmFyIGxpbmVzID0gZS5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgdmFyIGZpcnN0TGluZSA9IGxpbmVzWzBdLmluZGV4T2YoXCJAXCIpID4gMCA/IGxpbmVzWzFdIDogbGluZXNbMl07XG4gICAgICAgIHZhciBmaWxlTmFtZUFuZExpbmVOdW1iZXIgPSBnZXRGaWxlTmFtZUFuZExpbmVOdW1iZXIoZmlyc3RMaW5lKTtcbiAgICAgICAgaWYgKCFmaWxlTmFtZUFuZExpbmVOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHFGaWxlTmFtZSA9IGZpbGVOYW1lQW5kTGluZU51bWJlclswXTtcbiAgICAgICAgcmV0dXJuIGZpbGVOYW1lQW5kTGluZU51bWJlclsxXTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZShjYWxsYmFjaywgbmFtZSwgYWx0ZXJuYXRpdmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLndhcm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKG5hbWUgKyBcIiBpcyBkZXByZWNhdGVkLCB1c2UgXCIgKyBhbHRlcm5hdGl2ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCIgaW5zdGVhZC5cIiwgbmV3IEVycm9yKFwiXCIpLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuLy8gZW5kIG9mIHNoaW1zXG4vLyBiZWdpbm5pbmcgb2YgcmVhbCB3b3JrXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHByb21pc2UgZm9yIGFuIGltbWVkaWF0ZSByZWZlcmVuY2UsIHBhc3NlcyBwcm9taXNlcyB0aHJvdWdoLCBvclxuICogY29lcmNlcyBwcm9taXNlcyBmcm9tIGRpZmZlcmVudCBzeXN0ZW1zLlxuICogQHBhcmFtIHZhbHVlIGltbWVkaWF0ZSByZWZlcmVuY2Ugb3IgcHJvbWlzZVxuICovXG5mdW5jdGlvbiBRKHZhbHVlKSB7XG4gICAgLy8gSWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGEgUHJvbWlzZSwgcmV0dXJuIGl0IGRpcmVjdGx5LiAgVGhpcyBlbmFibGVzXG4gICAgLy8gdGhlIHJlc29sdmUgZnVuY3Rpb24gdG8gYm90aCBiZSB1c2VkIHRvIGNyZWF0ZWQgcmVmZXJlbmNlcyBmcm9tIG9iamVjdHMsXG4gICAgLy8gYnV0IHRvIHRvbGVyYWJseSBjb2VyY2Ugbm9uLXByb21pc2VzIHRvIHByb21pc2VzLlxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGFzc2ltaWxhdGUgdGhlbmFibGVzXG4gICAgaWYgKGlzUHJvbWlzZUFsaWtlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29lcmNlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVsZmlsbCh2YWx1ZSk7XG4gICAgfVxufVxuUS5yZXNvbHZlID0gUTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIHRhc2sgaW4gYSBmdXR1cmUgdHVybiBvZiB0aGUgZXZlbnQgbG9vcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRhc2tcbiAqL1xuUS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4vKipcbiAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGxvbmcgc3RhY2sgdHJhY2VzIHdpbGwgYmUgb25cbiAqL1xuUS5sb25nU3RhY2tTdXBwb3J0ID0gZmFsc2U7XG5cbi8vIGVuYWJsZSBsb25nIHN0YWNrcyBpZiBRX0RFQlVHIGlzIHNldFxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuUV9ERUJVRykge1xuICAgIFEubG9uZ1N0YWNrU3VwcG9ydCA9IHRydWU7XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHtwcm9taXNlLCByZXNvbHZlLCByZWplY3R9IG9iamVjdC5cbiAqXG4gKiBgcmVzb2x2ZWAgaXMgYSBjYWxsYmFjayB0byBpbnZva2Ugd2l0aCBhIG1vcmUgcmVzb2x2ZWQgdmFsdWUgZm9yIHRoZVxuICogcHJvbWlzZS4gVG8gZnVsZmlsbCB0aGUgcHJvbWlzZSwgaW52b2tlIGByZXNvbHZlYCB3aXRoIGFueSB2YWx1ZSB0aGF0IGlzXG4gKiBub3QgYSB0aGVuYWJsZS4gVG8gcmVqZWN0IHRoZSBwcm9taXNlLCBpbnZva2UgYHJlc29sdmVgIHdpdGggYSByZWplY3RlZFxuICogdGhlbmFibGUsIG9yIGludm9rZSBgcmVqZWN0YCB3aXRoIHRoZSByZWFzb24gZGlyZWN0bHkuIFRvIHJlc29sdmUgdGhlXG4gKiBwcm9taXNlIHRvIGFub3RoZXIgdGhlbmFibGUsIHRodXMgcHV0dGluZyBpdCBpbiB0aGUgc2FtZSBzdGF0ZSwgaW52b2tlXG4gKiBgcmVzb2x2ZWAgd2l0aCB0aGF0IG90aGVyIHRoZW5hYmxlLlxuICovXG5RLmRlZmVyID0gZGVmZXI7XG5mdW5jdGlvbiBkZWZlcigpIHtcbiAgICAvLyBpZiBcIm1lc3NhZ2VzXCIgaXMgYW4gXCJBcnJheVwiLCB0aGF0IGluZGljYXRlcyB0aGF0IHRoZSBwcm9taXNlIGhhcyBub3QgeWV0XG4gICAgLy8gYmVlbiByZXNvbHZlZC4gIElmIGl0IGlzIFwidW5kZWZpbmVkXCIsIGl0IGhhcyBiZWVuIHJlc29sdmVkLiAgRWFjaFxuICAgIC8vIGVsZW1lbnQgb2YgdGhlIG1lc3NhZ2VzIGFycmF5IGlzIGl0c2VsZiBhbiBhcnJheSBvZiBjb21wbGV0ZSBhcmd1bWVudHMgdG9cbiAgICAvLyBmb3J3YXJkIHRvIHRoZSByZXNvbHZlZCBwcm9taXNlLiAgV2UgY29lcmNlIHRoZSByZXNvbHV0aW9uIHZhbHVlIHRvIGFcbiAgICAvLyBwcm9taXNlIHVzaW5nIHRoZSBgcmVzb2x2ZWAgZnVuY3Rpb24gYmVjYXVzZSBpdCBoYW5kbGVzIGJvdGggZnVsbHlcbiAgICAvLyBub24tdGhlbmFibGUgdmFsdWVzIGFuZCBvdGhlciB0aGVuYWJsZXMgZ3JhY2VmdWxseS5cbiAgICB2YXIgbWVzc2FnZXMgPSBbXSwgcHJvZ3Jlc3NMaXN0ZW5lcnMgPSBbXSwgcmVzb2x2ZWRQcm9taXNlO1xuXG4gICAgdmFyIGRlZmVycmVkID0gb2JqZWN0X2NyZWF0ZShkZWZlci5wcm90b3R5cGUpO1xuICAgIHZhciBwcm9taXNlID0gb2JqZWN0X2NyZWF0ZShQcm9taXNlLnByb3RvdHlwZSk7XG5cbiAgICBwcm9taXNlLnByb21pc2VEaXNwYXRjaCA9IGZ1bmN0aW9uIChyZXNvbHZlLCBvcCwgb3BlcmFuZHMpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VzLnB1c2goYXJncyk7XG4gICAgICAgICAgICBpZiAob3AgPT09IFwid2hlblwiICYmIG9wZXJhbmRzWzFdKSB7IC8vIHByb2dyZXNzIG9wZXJhbmRcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0xpc3RlbmVycy5wdXNoKG9wZXJhbmRzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFEubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkUHJvbWlzZS5wcm9taXNlRGlzcGF0Y2guYXBwbHkocmVzb2x2ZWRQcm9taXNlLCBhcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFhYWCBkZXByZWNhdGVkXG4gICAgcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZWFyZXJWYWx1ZSA9IG5lYXJlcihyZXNvbHZlZFByb21pc2UpO1xuICAgICAgICBpZiAoaXNQcm9taXNlKG5lYXJlclZhbHVlKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWRQcm9taXNlID0gbmVhcmVyVmFsdWU7IC8vIHNob3J0ZW4gY2hhaW5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVhcmVyVmFsdWU7XG4gICAgfTtcblxuICAgIHByb21pc2UuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXRlOiBcInBlbmRpbmdcIiB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlZFByb21pc2UuaW5zcGVjdCgpO1xuICAgIH07XG5cbiAgICBpZiAoUS5sb25nU3RhY2tTdXBwb3J0ICYmIGhhc1N0YWNrcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IGRvbid0IHRyeSB0byB1c2UgYEVycm9yLmNhcHR1cmVTdGFja1RyYWNlYCBvciB0cmFuc2ZlciB0aGVcbiAgICAgICAgICAgIC8vIGFjY2Vzc29yIGFyb3VuZDsgdGhhdCBjYXVzZXMgbWVtb3J5IGxlYWtzIGFzIHBlciBHSC0xMTEuIEp1c3RcbiAgICAgICAgICAgIC8vIHJlaWZ5IHRoZSBzdGFjayB0cmFjZSBhcyBhIHN0cmluZyBBU0FQLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEF0IHRoZSBzYW1lIHRpbWUsIGN1dCBvZmYgdGhlIGZpcnN0IGxpbmU7IGl0J3MgYWx3YXlzIGp1c3RcbiAgICAgICAgICAgIC8vIFwiW29iamVjdCBQcm9taXNlXVxcblwiLCBhcyBwZXIgdGhlIGB0b1N0cmluZ2AuXG4gICAgICAgICAgICBwcm9taXNlLnN0YWNrID0gZS5zdGFjay5zdWJzdHJpbmcoZS5zdGFjay5pbmRleE9mKFwiXFxuXCIpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOT1RFOiB3ZSBkbyB0aGUgY2hlY2tzIGZvciBgcmVzb2x2ZWRQcm9taXNlYCBpbiBlYWNoIG1ldGhvZCwgaW5zdGVhZCBvZlxuICAgIC8vIGNvbnNvbGlkYXRpbmcgdGhlbSBpbnRvIGBiZWNvbWVgLCBzaW5jZSBvdGhlcndpc2Ugd2UnZCBjcmVhdGUgbmV3XG4gICAgLy8gcHJvbWlzZXMgd2l0aCB0aGUgbGluZXMgYGJlY29tZSh3aGF0ZXZlcih2YWx1ZSkpYC4gU2VlIGUuZy4gR0gtMjUyLlxuXG4gICAgZnVuY3Rpb24gYmVjb21lKG5ld1Byb21pc2UpIHtcbiAgICAgICAgcmVzb2x2ZWRQcm9taXNlID0gbmV3UHJvbWlzZTtcbiAgICAgICAgcHJvbWlzZS5zb3VyY2UgPSBuZXdQcm9taXNlO1xuXG4gICAgICAgIGFycmF5X3JlZHVjZShtZXNzYWdlcywgZnVuY3Rpb24gKHVuZGVmaW5lZCwgbWVzc2FnZSkge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvbWlzZS5wcm9taXNlRGlzcGF0Y2guYXBwbHkobmV3UHJvbWlzZSwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdm9pZCAwKTtcblxuICAgICAgICBtZXNzYWdlcyA9IHZvaWQgMDtcbiAgICAgICAgcHJvZ3Jlc3NMaXN0ZW5lcnMgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgZGVmZXJyZWQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAocmVzb2x2ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBiZWNvbWUoUSh2YWx1ZSkpO1xuICAgIH07XG5cbiAgICBkZWZlcnJlZC5mdWxmaWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlY29tZShmdWxmaWxsKHZhbHVlKSk7XG4gICAgfTtcbiAgICBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJlY29tZShyZWplY3QocmVhc29uKSk7XG4gICAgfTtcbiAgICBkZWZlcnJlZC5ub3RpZnkgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKHJlc29sdmVkUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyYXlfcmVkdWNlKHByb2dyZXNzTGlzdGVuZXJzLCBmdW5jdGlvbiAodW5kZWZpbmVkLCBwcm9ncmVzc0xpc3RlbmVyKSB7XG4gICAgICAgICAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB2b2lkIDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIE5vZGUtc3R5bGUgY2FsbGJhY2sgdGhhdCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBkZWZlcnJlZFxuICogcHJvbWlzZS5cbiAqIEByZXR1cm5zIGEgbm9kZWJhY2tcbiAqL1xuZGVmZXIucHJvdG90eXBlLm1ha2VOb2RlUmVzb2x2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgc2VsZi5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBzZWxmLnJlc29sdmUoYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHJlc29sdmVyIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgbm90aGluZyBhbmQgYWNjZXB0c1xuICogdGhlIHJlc29sdmUsIHJlamVjdCwgYW5kIG5vdGlmeSBmdW5jdGlvbnMgZm9yIGEgZGVmZXJyZWQuXG4gKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCBtYXkgYmUgcmVzb2x2ZWQgd2l0aCB0aGUgZ2l2ZW4gcmVzb2x2ZSBhbmQgcmVqZWN0XG4gKiBmdW5jdGlvbnMsIG9yIHJlamVjdGVkIGJ5IGEgdGhyb3duIGV4Y2VwdGlvbiBpbiByZXNvbHZlclxuICovXG5RLlByb21pc2UgPSBwcm9taXNlOyAvLyBFUzZcblEucHJvbWlzZSA9IHByb21pc2U7XG5mdW5jdGlvbiBwcm9taXNlKHJlc29sdmVyKSB7XG4gICAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xuICAgIH1cbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHRyeSB7XG4gICAgICAgIHJlc29sdmVyKGRlZmVycmVkLnJlc29sdmUsIGRlZmVycmVkLnJlamVjdCwgZGVmZXJyZWQubm90aWZ5KTtcbiAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5wcm9taXNlLnJhY2UgPSByYWNlOyAvLyBFUzZcbnByb21pc2UuYWxsID0gYWxsOyAvLyBFUzZcbnByb21pc2UucmVqZWN0ID0gcmVqZWN0OyAvLyBFUzZcbnByb21pc2UucmVzb2x2ZSA9IFE7IC8vIEVTNlxuXG4vLyBYWFggZXhwZXJpbWVudGFsLiAgVGhpcyBtZXRob2QgaXMgYSB3YXkgdG8gZGVub3RlIHRoYXQgYSBsb2NhbCB2YWx1ZSBpc1xuLy8gc2VyaWFsaXphYmxlIGFuZCBzaG91bGQgYmUgaW1tZWRpYXRlbHkgZGlzcGF0Y2hlZCB0byBhIHJlbW90ZSB1cG9uIHJlcXVlc3QsXG4vLyBpbnN0ZWFkIG9mIHBhc3NpbmcgYSByZWZlcmVuY2UuXG5RLnBhc3NCeUNvcHkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgLy9mcmVlemUob2JqZWN0KTtcbiAgICAvL3Bhc3NCeUNvcGllcy5zZXQob2JqZWN0LCB0cnVlKTtcbiAgICByZXR1cm4gb2JqZWN0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucGFzc0J5Q29weSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2ZyZWV6ZShvYmplY3QpO1xuICAgIC8vcGFzc0J5Q29waWVzLnNldChvYmplY3QsIHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBJZiB0d28gcHJvbWlzZXMgZXZlbnR1YWxseSBmdWxmaWxsIHRvIHRoZSBzYW1lIHZhbHVlLCBwcm9taXNlcyB0aGF0IHZhbHVlLFxuICogYnV0IG90aGVyd2lzZSByZWplY3RzLlxuICogQHBhcmFtIHgge0FueSp9XG4gKiBAcGFyYW0geSB7QW55Kn1cbiAqIEByZXR1cm5zIHtBbnkqfSBhIHByb21pc2UgZm9yIHggYW5kIHkgaWYgdGhleSBhcmUgdGhlIHNhbWUsIGJ1dCBhIHJlamVjdGlvblxuICogb3RoZXJ3aXNlLlxuICpcbiAqL1xuUS5qb2luID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4gUSh4KS5qb2luKHkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uICh0aGF0KSB7XG4gICAgcmV0dXJuIFEoW3RoaXMsIHRoYXRdKS5zcHJlYWQoZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFwiPT09XCIgc2hvdWxkIGJlIE9iamVjdC5pcyBvciBlcXVpdlxuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBqb2luOiBub3QgdGhlIHNhbWU6IFwiICsgeCArIFwiIFwiICsgeSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSBmaXJzdCBvZiBhbiBhcnJheSBvZiBwcm9taXNlcyB0byBiZWNvbWUgc2V0dGxlZC5cbiAqIEBwYXJhbSBhbnN3ZXJzIHtBcnJheVtBbnkqXX0gcHJvbWlzZXMgdG8gcmFjZVxuICogQHJldHVybnMge0FueSp9IHRoZSBmaXJzdCBwcm9taXNlIHRvIGJlIHNldHRsZWRcbiAqL1xuUS5yYWNlID0gcmFjZTtcbmZ1bmN0aW9uIHJhY2UoYW5zd2VyUHMpIHtcbiAgICByZXR1cm4gcHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIFN3aXRjaCB0byB0aGlzIG9uY2Ugd2UgY2FuIGFzc3VtZSBhdCBsZWFzdCBFUzVcbiAgICAgICAgLy8gYW5zd2VyUHMuZm9yRWFjaChmdW5jdGlvbiAoYW5zd2VyUCkge1xuICAgICAgICAvLyAgICAgUShhbnN3ZXJQKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBVc2UgdGhpcyBpbiB0aGUgbWVhbnRpbWVcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFuc3dlclBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBRKGFuc3dlclBzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKFEucmFjZSk7XG59O1xuXG4vKipcbiAqIENvbnN0cnVjdHMgYSBQcm9taXNlIHdpdGggYSBwcm9taXNlIGRlc2NyaXB0b3Igb2JqZWN0IGFuZCBvcHRpb25hbCBmYWxsYmFja1xuICogZnVuY3Rpb24uICBUaGUgZGVzY3JpcHRvciBjb250YWlucyBtZXRob2RzIGxpa2Ugd2hlbihyZWplY3RlZCksIGdldChuYW1lKSxcbiAqIHNldChuYW1lLCB2YWx1ZSksIHBvc3QobmFtZSwgYXJncyksIGFuZCBkZWxldGUobmFtZSksIHdoaWNoIGFsbFxuICogcmV0dXJuIGVpdGhlciBhIHZhbHVlLCBhIHByb21pc2UgZm9yIGEgdmFsdWUsIG9yIGEgcmVqZWN0aW9uLiAgVGhlIGZhbGxiYWNrXG4gKiBhY2NlcHRzIHRoZSBvcGVyYXRpb24gbmFtZSwgYSByZXNvbHZlciwgYW5kIGFueSBmdXJ0aGVyIGFyZ3VtZW50cyB0aGF0IHdvdWxkXG4gKiBoYXZlIGJlZW4gZm9yd2FyZGVkIHRvIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgYWJvdmUgaGFkIGEgbWV0aG9kIGJlZW5cbiAqIHByb3ZpZGVkIHdpdGggdGhlIHByb3BlciBuYW1lLiAgVGhlIEFQSSBtYWtlcyBubyBndWFyYW50ZWVzIGFib3V0IHRoZSBuYXR1cmVcbiAqIG9mIHRoZSByZXR1cm5lZCBvYmplY3QsIGFwYXJ0IGZyb20gdGhhdCBpdCBpcyB1c2FibGUgd2hlcmVldmVyIHByb21pc2VzIGFyZVxuICogYm91Z2h0IGFuZCBzb2xkLlxuICovXG5RLm1ha2VQcm9taXNlID0gUHJvbWlzZTtcbmZ1bmN0aW9uIFByb21pc2UoZGVzY3JpcHRvciwgZmFsbGJhY2ssIGluc3BlY3QpIHtcbiAgICBpZiAoZmFsbGJhY2sgPT09IHZvaWQgMCkge1xuICAgICAgICBmYWxsYmFjayA9IGZ1bmN0aW9uIChvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJQcm9taXNlIGRvZXMgbm90IHN1cHBvcnQgb3BlcmF0aW9uOiBcIiArIG9wXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGluc3BlY3QgPT09IHZvaWQgMCkge1xuICAgICAgICBpbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtzdGF0ZTogXCJ1bmtub3duXCJ9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlID0gb2JqZWN0X2NyZWF0ZShQcm9taXNlLnByb3RvdHlwZSk7XG5cbiAgICBwcm9taXNlLnByb21pc2VEaXNwYXRjaCA9IGZ1bmN0aW9uIChyZXNvbHZlLCBvcCwgYXJncykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3Jbb3BdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZGVzY3JpcHRvcltvcF0uYXBwbHkocHJvbWlzZSwgYXJncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbGxiYWNrLmNhbGwocHJvbWlzZSwgb3AsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJvbWlzZS5pbnNwZWN0ID0gaW5zcGVjdDtcblxuICAgIC8vIFhYWCBkZXByZWNhdGVkIGB2YWx1ZU9mYCBhbmQgYGV4Y2VwdGlvbmAgc3VwcG9ydFxuICAgIGlmIChpbnNwZWN0KSB7XG4gICAgICAgIHZhciBpbnNwZWN0ZWQgPSBpbnNwZWN0KCk7XG4gICAgICAgIGlmIChpbnNwZWN0ZWQuc3RhdGUgPT09IFwicmVqZWN0ZWRcIikge1xuICAgICAgICAgICAgcHJvbWlzZS5leGNlcHRpb24gPSBpbnNwZWN0ZWQucmVhc29uO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluc3BlY3RlZCA9IGluc3BlY3QoKTtcbiAgICAgICAgICAgIGlmIChpbnNwZWN0ZWQuc3RhdGUgPT09IFwicGVuZGluZ1wiIHx8XG4gICAgICAgICAgICAgICAgaW5zcGVjdGVkLnN0YXRlID09PSBcInJlamVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnNwZWN0ZWQudmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgUHJvbWlzZV1cIjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAoZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3NlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHZhciBkb25lID0gZmFsc2U7ICAgLy8gZW5zdXJlIHRoZSB1bnRydXN0ZWQgcHJvbWlzZSBtYWtlcyBhdCBtb3N0IGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBjYWxsIHRvIG9uZSBvZiB0aGUgY2FsbGJhY2tzXG5cbiAgICBmdW5jdGlvbiBfZnVsZmlsbGVkKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZ1bGZpbGxlZCA9PT0gXCJmdW5jdGlvblwiID8gZnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZWplY3RlZChleGNlcHRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3RlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBtYWtlU3RhY2tUcmFjZUxvbmcoZXhjZXB0aW9uLCBzZWxmKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdGVkKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChuZXdFeGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ld0V4Y2VwdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlamVjdChleGNlcHRpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wcm9ncmVzc2VkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcHJvZ3Jlc3NlZCA9PT0gXCJmdW5jdGlvblwiID8gcHJvZ3Jlc3NlZCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBRLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wcm9taXNlRGlzcGF0Y2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9mdWxmaWxsZWQodmFsdWUpKTtcbiAgICAgICAgfSwgXCJ3aGVuXCIsIFtmdW5jdGlvbiAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKF9yZWplY3RlZChleGNlcHRpb24pKTtcbiAgICAgICAgfV0pO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgcHJvcGFnYXRvciBuZWVkIHRvIGJlIGF0dGFjaGVkIGluIHRoZSBjdXJyZW50IHRpY2suXG4gICAgc2VsZi5wcm9taXNlRGlzcGF0Y2godm9pZCAwLCBcIndoZW5cIiwgW3ZvaWQgMCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZTtcbiAgICAgICAgdmFyIHRocmV3ID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IF9wcm9ncmVzc2VkKHZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyZXcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKFEub25lcnJvcikge1xuICAgICAgICAgICAgICAgIFEub25lcnJvcihlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhyZXcpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeShuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblEudGFwID0gZnVuY3Rpb24gKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZSkudGFwKGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogV29ya3MgYWxtb3N0IGxpa2UgXCJmaW5hbGx5XCIsIGJ1dCBub3QgY2FsbGVkIGZvciByZWplY3Rpb25zLlxuICogT3JpZ2luYWwgcmVzb2x1dGlvbiB2YWx1ZSBpcyBwYXNzZWQgdGhyb3VnaCBjYWxsYmFjayB1bmFmZmVjdGVkLlxuICogQ2FsbGJhY2sgbWF5IHJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGJlIGF3YWl0ZWQgZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtRLlByb21pc2V9XG4gKiBAZXhhbXBsZVxuICogZG9Tb21ldGhpbmcoKVxuICogICAudGhlbiguLi4pXG4gKiAgIC50YXAoY29uc29sZS5sb2cpXG4gKiAgIC50aGVuKC4uLik7XG4gKi9cblByb21pc2UucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gUShjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suZmNhbGwodmFsdWUpLnRoZW5SZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXJzIGFuIG9ic2VydmVyIG9uIGEgcHJvbWlzZS5cbiAqXG4gKiBHdWFyYW50ZWVzOlxuICpcbiAqIDEuIHRoYXQgZnVsZmlsbGVkIGFuZCByZWplY3RlZCB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gKiAyLiB0aGF0IGVpdGhlciB0aGUgZnVsZmlsbGVkIGNhbGxiYWNrIG9yIHRoZSByZWplY3RlZCBjYWxsYmFjayB3aWxsIGJlXG4gKiAgICBjYWxsZWQsIGJ1dCBub3QgYm90aC5cbiAqIDMuIHRoYXQgZnVsZmlsbGVkIGFuZCByZWplY3RlZCB3aWxsIG5vdCBiZSBjYWxsZWQgaW4gdGhpcyB0dXJuLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAgICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSB0byBvYnNlcnZlXG4gKiBAcGFyYW0gZnVsZmlsbGVkICBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgZnVsZmlsbGVkIHZhbHVlXG4gKiBAcGFyYW0gcmVqZWN0ZWQgICBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2l0aCB0aGUgcmVqZWN0aW9uIGV4Y2VwdGlvblxuICogQHBhcmFtIHByb2dyZXNzZWQgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGFueSBwcm9ncmVzcyBub3RpZmljYXRpb25zXG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgZnJvbSB0aGUgaW52b2tlZCBjYWxsYmFja1xuICovXG5RLndoZW4gPSB3aGVuO1xuZnVuY3Rpb24gd2hlbih2YWx1ZSwgZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3NlZCkge1xuICAgIHJldHVybiBRKHZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzZWQpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuUmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWU7IH0pO1xufTtcblxuUS50aGVuUmVzb2x2ZSA9IGZ1bmN0aW9uIChwcm9taXNlLCB2YWx1ZSkge1xuICAgIHJldHVybiBRKHByb21pc2UpLnRoZW5SZXNvbHZlKHZhbHVlKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW5SZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IHJlYXNvbjsgfSk7XG59O1xuXG5RLnRoZW5SZWplY3QgPSBmdW5jdGlvbiAocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZSkudGhlblJlamVjdChyZWFzb24pO1xufTtcblxuLyoqXG4gKiBJZiBhbiBvYmplY3QgaXMgbm90IGEgcHJvbWlzZSwgaXQgaXMgYXMgXCJuZWFyXCIgYXMgcG9zc2libGUuXG4gKiBJZiBhIHByb21pc2UgaXMgcmVqZWN0ZWQsIGl0IGlzIGFzIFwibmVhclwiIGFzIHBvc3NpYmxlIHRvby5cbiAqIElmIGl04oCZcyBhIGZ1bGZpbGxlZCBwcm9taXNlLCB0aGUgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmVhcmVyLlxuICogSWYgaXTigJlzIGEgZGVmZXJyZWQgcHJvbWlzZSBhbmQgdGhlIGRlZmVycmVkIGhhcyBiZWVuIHJlc29sdmVkLCB0aGVcbiAqIHJlc29sdXRpb24gaXMgXCJuZWFyZXJcIi5cbiAqIEBwYXJhbSBvYmplY3RcbiAqIEByZXR1cm5zIG1vc3QgcmVzb2x2ZWQgKG5lYXJlc3QpIGZvcm0gb2YgdGhlIG9iamVjdFxuICovXG5cbi8vIFhYWCBzaG91bGQgd2UgcmUtZG8gdGhpcz9cblEubmVhcmVyID0gbmVhcmVyO1xuZnVuY3Rpb24gbmVhcmVyKHZhbHVlKSB7XG4gICAgaWYgKGlzUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGluc3BlY3RlZCA9IHZhbHVlLmluc3BlY3QoKTtcbiAgICAgICAgaWYgKGluc3BlY3RlZC5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIGluc3BlY3RlZC52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcHJvbWlzZS5cbiAqIE90aGVyd2lzZSBpdCBpcyBhIGZ1bGZpbGxlZCB2YWx1ZS5cbiAqL1xuUS5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5mdW5jdGlvbiBpc1Byb21pc2Uob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cblEuaXNQcm9taXNlQWxpa2UgPSBpc1Byb21pc2VBbGlrZTtcbmZ1bmN0aW9uIGlzUHJvbWlzZUFsaWtlKG9iamVjdCkge1xuICAgIHJldHVybiBpc09iamVjdChvYmplY3QpICYmIHR5cGVvZiBvYmplY3QudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIG9iamVjdCBpcyBhIHBlbmRpbmcgcHJvbWlzZSwgbWVhbmluZyBub3RcbiAqIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cbiAqL1xuUS5pc1BlbmRpbmcgPSBpc1BlbmRpbmc7XG5mdW5jdGlvbiBpc1BlbmRpbmcob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzUHJvbWlzZShvYmplY3QpICYmIG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwicGVuZGluZ1wiO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zcGVjdCgpLnN0YXRlID09PSBcInBlbmRpbmdcIjtcbn07XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgdmFsdWUgb3IgZnVsZmlsbGVkXG4gKiBwcm9taXNlLlxuICovXG5RLmlzRnVsZmlsbGVkID0gaXNGdWxmaWxsZWQ7XG5mdW5jdGlvbiBpc0Z1bGZpbGxlZChvYmplY3QpIHtcbiAgICByZXR1cm4gIWlzUHJvbWlzZShvYmplY3QpIHx8IG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwiZnVsZmlsbGVkXCI7XG59XG5cblByb21pc2UucHJvdG90eXBlLmlzRnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmluc3BlY3QoKS5zdGF0ZSA9PT0gXCJmdWxmaWxsZWRcIjtcbn07XG5cbi8qKlxuICogQHJldHVybnMgd2hldGhlciB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgcmVqZWN0ZWQgcHJvbWlzZS5cbiAqL1xuUS5pc1JlamVjdGVkID0gaXNSZWplY3RlZDtcbmZ1bmN0aW9uIGlzUmVqZWN0ZWQob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzUHJvbWlzZShvYmplY3QpICYmIG9iamVjdC5pbnNwZWN0KCkuc3RhdGUgPT09IFwicmVqZWN0ZWRcIjtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNwZWN0KCkuc3RhdGUgPT09IFwicmVqZWN0ZWRcIjtcbn07XG5cbi8vLy8gQkVHSU4gVU5IQU5ETEVEIFJFSkVDVElPTiBUUkFDS0lOR1xuXG4vLyBUaGlzIHByb21pc2UgbGlicmFyeSBjb25zdW1lcyBleGNlcHRpb25zIHRocm93biBpbiBoYW5kbGVycyBzbyB0aGV5IGNhbiBiZVxuLy8gaGFuZGxlZCBieSBhIHN1YnNlcXVlbnQgcHJvbWlzZS4gIFRoZSBleGNlcHRpb25zIGdldCBhZGRlZCB0byB0aGlzIGFycmF5IHdoZW5cbi8vIHRoZXkgYXJlIGNyZWF0ZWQsIGFuZCByZW1vdmVkIHdoZW4gdGhleSBhcmUgaGFuZGxlZC4gIE5vdGUgdGhhdCBpbiBFUzYgb3Jcbi8vIHNoaW1tZWQgZW52aXJvbm1lbnRzLCB0aGlzIHdvdWxkIG5hdHVyYWxseSBiZSBhIGBTZXRgLlxudmFyIHVuaGFuZGxlZFJlYXNvbnMgPSBbXTtcbnZhciB1bmhhbmRsZWRSZWplY3Rpb25zID0gW107XG52YXIgcmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zID0gW107XG52YXIgdHJhY2tVbmhhbmRsZWRSZWplY3Rpb25zID0gdHJ1ZTtcblxuZnVuY3Rpb24gcmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zKCkge1xuICAgIHVuaGFuZGxlZFJlYXNvbnMubGVuZ3RoID0gMDtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25zLmxlbmd0aCA9IDA7XG5cbiAgICBpZiAoIXRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucykge1xuICAgICAgICB0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMgPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdHJhY2tSZWplY3Rpb24ocHJvbWlzZSwgcmVhc29uKSB7XG4gICAgaWYgKCF0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHByb2Nlc3MuZW1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIFEubmV4dFRpY2sucnVuQWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGFycmF5X2luZGV4T2YodW5oYW5kbGVkUmVqZWN0aW9ucywgcHJvbWlzZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsIHJlYXNvbiwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgcmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zLnB1c2gocHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVuaGFuZGxlZFJlamVjdGlvbnMucHVzaChwcm9taXNlKTtcbiAgICBpZiAocmVhc29uICYmIHR5cGVvZiByZWFzb24uc3RhY2sgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdW5oYW5kbGVkUmVhc29ucy5wdXNoKHJlYXNvbi5zdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdW5oYW5kbGVkUmVhc29ucy5wdXNoKFwiKG5vIHN0YWNrKSBcIiArIHJlYXNvbik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bnRyYWNrUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgICBpZiAoIXRyYWNrVW5oYW5kbGVkUmVqZWN0aW9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGF0ID0gYXJyYXlfaW5kZXhPZih1bmhhbmRsZWRSZWplY3Rpb25zLCBwcm9taXNlKTtcbiAgICBpZiAoYXQgIT09IC0xKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIFEubmV4dFRpY2sucnVuQWZ0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhdFJlcG9ydCA9IGFycmF5X2luZGV4T2YocmVwb3J0ZWRVbmhhbmRsZWRSZWplY3Rpb25zLCBwcm9taXNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYXRSZXBvcnQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIiwgdW5oYW5kbGVkUmVhc29uc1thdF0sIHByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXBvcnRlZFVuaGFuZGxlZFJlamVjdGlvbnMuc3BsaWNlKGF0UmVwb3J0LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB1bmhhbmRsZWRSZWplY3Rpb25zLnNwbGljZShhdCwgMSk7XG4gICAgICAgIHVuaGFuZGxlZFJlYXNvbnMuc3BsaWNlKGF0LCAxKTtcbiAgICB9XG59XG5cblEucmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zID0gcmVzZXRVbmhhbmRsZWRSZWplY3Rpb25zO1xuXG5RLmdldFVuaGFuZGxlZFJlYXNvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gTWFrZSBhIGNvcHkgc28gdGhhdCBjb25zdW1lcnMgY2FuJ3QgaW50ZXJmZXJlIHdpdGggb3VyIGludGVybmFsIHN0YXRlLlxuICAgIHJldHVybiB1bmhhbmRsZWRSZWFzb25zLnNsaWNlKCk7XG59O1xuXG5RLnN0b3BVbmhhbmRsZWRSZWplY3Rpb25UcmFja2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXNldFVuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICB0cmFja1VuaGFuZGxlZFJlamVjdGlvbnMgPSBmYWxzZTtcbn07XG5cbnJlc2V0VW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuXG4vLy8vIEVORCBVTkhBTkRMRUQgUkVKRUNUSU9OIFRSQUNLSU5HXG5cbi8qKlxuICogQ29uc3RydWN0cyBhIHJlamVjdGVkIHByb21pc2UuXG4gKiBAcGFyYW0gcmVhc29uIHZhbHVlIGRlc2NyaWJpbmcgdGhlIGZhaWx1cmVcbiAqL1xuUS5yZWplY3QgPSByZWplY3Q7XG5mdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHJlamVjdGlvbiA9IFByb21pc2Uoe1xuICAgICAgICBcIndoZW5cIjogZnVuY3Rpb24gKHJlamVjdGVkKSB7XG4gICAgICAgICAgICAvLyBub3RlIHRoYXQgdGhlIGVycm9yIGhhcyBiZWVuIGhhbmRsZWRcbiAgICAgICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgICAgIHVudHJhY2tSZWplY3Rpb24odGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0ZWQgPyByZWplY3RlZChyZWFzb24pIDogdGhpcztcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIGZhbGxiYWNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4geyBzdGF0ZTogXCJyZWplY3RlZFwiLCByZWFzb246IHJlYXNvbiB9O1xuICAgIH0pO1xuXG4gICAgLy8gTm90ZSB0aGF0IHRoZSByZWFzb24gaGFzIG5vdCBiZWVuIGhhbmRsZWQuXG4gICAgdHJhY2tSZWplY3Rpb24ocmVqZWN0aW9uLCByZWFzb24pO1xuXG4gICAgcmV0dXJuIHJlamVjdGlvbjtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgZnVsZmlsbGVkIHByb21pc2UgZm9yIGFuIGltbWVkaWF0ZSByZWZlcmVuY2UuXG4gKiBAcGFyYW0gdmFsdWUgaW1tZWRpYXRlIHJlZmVyZW5jZVxuICovXG5RLmZ1bGZpbGwgPSBmdWxmaWxsO1xuZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlKHtcbiAgICAgICAgXCJ3aGVuXCI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRcIjogZnVuY3Rpb24gKG5hbWUsIHJocykge1xuICAgICAgICAgICAgdmFsdWVbbmFtZV0gPSByaHM7XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlXCI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBkZWxldGUgdmFsdWVbbmFtZV07XG4gICAgICAgIH0sXG4gICAgICAgIFwicG9zdFwiOiBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgICAgICAgICAgLy8gTWFyayBNaWxsZXIgcHJvcG9zZXMgdGhhdCBwb3N0IHdpdGggbm8gbmFtZSBzaG91bGQgYXBwbHkgYVxuICAgICAgICAgICAgLy8gcHJvbWlzZWQgZnVuY3Rpb24uXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW25hbWVdLmFwcGx5KHZhbHVlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJhcHBseVwiOiBmdW5jdGlvbiAodGhpc3AsIGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5hcHBseSh0aGlzcCwgYXJncyk7XG4gICAgICAgIH0sXG4gICAgICAgIFwia2V5c1wiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0X2tleXModmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgdm9pZCAwLCBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4geyBzdGF0ZTogXCJmdWxmaWxsZWRcIiwgdmFsdWU6IHZhbHVlIH07XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlbmFibGVzIHRvIFEgcHJvbWlzZXMuXG4gKiBAcGFyYW0gcHJvbWlzZSB0aGVuYWJsZSBwcm9taXNlXG4gKiBAcmV0dXJucyBhIFEgcHJvbWlzZVxuICovXG5mdW5jdGlvbiBjb2VyY2UocHJvbWlzZSkge1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oZGVmZXJyZWQucmVzb2x2ZSwgZGVmZXJyZWQucmVqZWN0LCBkZWZlcnJlZC5ub3RpZnkpO1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbi8qKlxuICogQW5ub3RhdGVzIGFuIG9iamVjdCBzdWNoIHRoYXQgaXQgd2lsbCBuZXZlciBiZVxuICogdHJhbnNmZXJyZWQgYXdheSBmcm9tIHRoaXMgcHJvY2VzcyBvdmVyIGFueSBwcm9taXNlXG4gKiBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXG4gKiBAcGFyYW0gb2JqZWN0XG4gKiBAcmV0dXJucyBwcm9taXNlIGEgd3JhcHBpbmcgb2YgdGhhdCBvYmplY3QgdGhhdFxuICogYWRkaXRpb25hbGx5IHJlc3BvbmRzIHRvIHRoZSBcImlzRGVmXCIgbWVzc2FnZVxuICogd2l0aG91dCBhIHJlamVjdGlvbi5cbiAqL1xuUS5tYXN0ZXIgPSBtYXN0ZXI7XG5mdW5jdGlvbiBtYXN0ZXIob2JqZWN0KSB7XG4gICAgcmV0dXJuIFByb21pc2Uoe1xuICAgICAgICBcImlzRGVmXCI6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSwgZnVuY3Rpb24gZmFsbGJhY2sob3AsIGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKG9iamVjdCwgb3AsIGFyZ3MpO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFEob2JqZWN0KS5pbnNwZWN0KCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogU3ByZWFkcyB0aGUgdmFsdWVzIG9mIGEgcHJvbWlzZWQgYXJyYXkgb2YgYXJndW1lbnRzIGludG8gdGhlXG4gKiBmdWxmaWxsbWVudCBjYWxsYmFjay5cbiAqIEBwYXJhbSBmdWxmaWxsZWQgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyB2YXJpYWRpYyBhcmd1bWVudHMgZnJvbSB0aGVcbiAqIHByb21pc2VkIGFycmF5XG4gKiBAcGFyYW0gcmVqZWN0ZWQgY2FsbGJhY2sgdGhhdCByZWNlaXZlcyB0aGUgZXhjZXB0aW9uIGlmIHRoZSBwcm9taXNlXG4gKiBpcyByZWplY3RlZC5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZSBvciB0aHJvd24gZXhjZXB0aW9uIG9mXG4gKiBlaXRoZXIgY2FsbGJhY2suXG4gKi9cblEuc3ByZWFkID0gc3ByZWFkO1xuZnVuY3Rpb24gc3ByZWFkKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIFEodmFsdWUpLnNwcmVhZChmdWxmaWxsZWQsIHJlamVjdGVkKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuc3ByZWFkID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGwoKS50aGVuKGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICByZXR1cm4gZnVsZmlsbGVkLmFwcGx5KHZvaWQgMCwgYXJyYXkpO1xuICAgIH0sIHJlamVjdGVkKTtcbn07XG5cbi8qKlxuICogVGhlIGFzeW5jIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yIGZvciBnZW5lcmF0b3IgZnVuY3Rpb25zLCB0dXJuaW5nXG4gKiB0aGVtIGludG8gYXN5bmNocm9ub3VzIGdlbmVyYXRvcnMuICBBbHRob3VnaCBnZW5lcmF0b3JzIGFyZSBvbmx5IHBhcnRcbiAqIG9mIHRoZSBuZXdlc3QgRUNNQVNjcmlwdCA2IGRyYWZ0cywgdGhpcyBjb2RlIGRvZXMgbm90IGNhdXNlIHN5bnRheFxuICogZXJyb3JzIGluIG9sZGVyIGVuZ2luZXMuICBUaGlzIGNvZGUgc2hvdWxkIGNvbnRpbnVlIHRvIHdvcmsgYW5kIHdpbGxcbiAqIGluIGZhY3QgaW1wcm92ZSBvdmVyIHRpbWUgYXMgdGhlIGxhbmd1YWdlIGltcHJvdmVzLlxuICpcbiAqIEVTNiBnZW5lcmF0b3JzIGFyZSBjdXJyZW50bHkgcGFydCBvZiBWOCB2ZXJzaW9uIDMuMTkgd2l0aCB0aGVcbiAqIC0taGFybW9ueS1nZW5lcmF0b3JzIHJ1bnRpbWUgZmxhZyBlbmFibGVkLiAgU3BpZGVyTW9ua2V5IGhhcyBoYWQgdGhlbVxuICogZm9yIGxvbmdlciwgYnV0IHVuZGVyIGFuIG9sZGVyIFB5dGhvbi1pbnNwaXJlZCBmb3JtLiAgVGhpcyBmdW5jdGlvblxuICogd29ya3Mgb24gYm90aCBraW5kcyBvZiBnZW5lcmF0b3JzLlxuICpcbiAqIERlY29yYXRlcyBhIGdlbmVyYXRvciBmdW5jdGlvbiBzdWNoIHRoYXQ6XG4gKiAgLSBpdCBtYXkgeWllbGQgcHJvbWlzZXNcbiAqICAtIGV4ZWN1dGlvbiB3aWxsIGNvbnRpbnVlIHdoZW4gdGhhdCBwcm9taXNlIGlzIGZ1bGZpbGxlZFxuICogIC0gdGhlIHZhbHVlIG9mIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpbGwgYmUgdGhlIGZ1bGZpbGxlZCB2YWx1ZVxuICogIC0gaXQgcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgKHdoZW4gdGhlIGdlbmVyYXRvclxuICogICAgc3RvcHMgaXRlcmF0aW5nKVxuICogIC0gdGhlIGRlY29yYXRlZCBmdW5jdGlvbiByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICogICAgb2YgdGhlIGdlbmVyYXRvciBvciB0aGUgZmlyc3QgcmVqZWN0ZWQgcHJvbWlzZSBhbW9uZyB0aG9zZVxuICogICAgeWllbGRlZC5cbiAqICAtIGlmIGFuIGVycm9yIGlzIHRocm93biBpbiB0aGUgZ2VuZXJhdG9yLCBpdCBwcm9wYWdhdGVzIHRocm91Z2hcbiAqICAgIGV2ZXJ5IGZvbGxvd2luZyB5aWVsZCB1bnRpbCBpdCBpcyBjYXVnaHQsIG9yIHVudGlsIGl0IGVzY2FwZXNcbiAqICAgIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gYWx0b2dldGhlciwgYW5kIGlzIHRyYW5zbGF0ZWQgaW50byBhXG4gKiAgICByZWplY3Rpb24gZm9yIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBkZWNvcmF0ZWQgZ2VuZXJhdG9yLlxuICovXG5RLmFzeW5jID0gYXN5bmM7XG5mdW5jdGlvbiBhc3luYyhtYWtlR2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gd2hlbiB2ZXJiIGlzIFwic2VuZFwiLCBhcmcgaXMgYSB2YWx1ZVxuICAgICAgICAvLyB3aGVuIHZlcmIgaXMgXCJ0aHJvd1wiLCBhcmcgaXMgYW4gZXhjZXB0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRpbnVlcih2ZXJiLCBhcmcpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgIC8vIFVudGlsIFY4IDMuMTkgLyBDaHJvbWl1bSAyOSBpcyByZWxlYXNlZCwgU3BpZGVyTW9ua2V5IGlzIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyBlbmdpbmUgdGhhdCBoYXMgYSBkZXBsb3llZCBiYXNlIG9mIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBnZW5lcmF0b3JzLlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgU00ncyBnZW5lcmF0b3JzIHVzZSB0aGUgUHl0aG9uLWluc3BpcmVkIHNlbWFudGljcyBvZlxuICAgICAgICAgICAgLy8gb3V0ZGF0ZWQgRVM2IGRyYWZ0cy4gIFdlIHdvdWxkIGxpa2UgdG8gc3VwcG9ydCBFUzYsIGJ1dCB3ZSdkIGFsc29cbiAgICAgICAgICAgIC8vIGxpa2UgdG8gbWFrZSBpdCBwb3NzaWJsZSB0byB1c2UgZ2VuZXJhdG9ycyBpbiBkZXBsb3llZCBicm93c2Vycywgc29cbiAgICAgICAgICAgIC8vIHdlIGFsc28gc3VwcG9ydCBQeXRob24tc3R5bGUgZ2VuZXJhdG9ycy4gIEF0IHNvbWUgcG9pbnQgd2UgY2FuIHJlbW92ZVxuICAgICAgICAgICAgLy8gdGhpcyBibG9jay5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBTdG9wSXRlcmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gRVM2IEdlbmVyYXRvcnNcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBnZW5lcmF0b3JbdmVyYl0oYXJnKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChleGNlcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2hlbihyZXN1bHQudmFsdWUsIGNhbGxiYWNrLCBlcnJiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNwaWRlck1vbmtleSBHZW5lcmF0b3JzXG4gICAgICAgICAgICAgICAgLy8gRklYTUU6IFJlbW92ZSB0aGlzIGNhc2Ugd2hlbiBTTSBkb2VzIEVTNiBnZW5lcmF0b3JzLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGdlbmVyYXRvclt2ZXJiXShhcmcpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdG9wSXRlcmF0aW9uKGV4Y2VwdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBRKGV4Y2VwdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdoZW4ocmVzdWx0LCBjYWxsYmFjaywgZXJyYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IG1ha2VHZW5lcmF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY29udGludWVyLmJpbmQoY29udGludWVyLCBcIm5leHRcIik7XG4gICAgICAgIHZhciBlcnJiYWNrID0gY29udGludWVyLmJpbmQoY29udGludWVyLCBcInRocm93XCIpO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoZSBzcGF3biBmdW5jdGlvbiBpcyBhIHNtYWxsIHdyYXBwZXIgYXJvdW5kIGFzeW5jIHRoYXQgaW1tZWRpYXRlbHlcbiAqIGNhbGxzIHRoZSBnZW5lcmF0b3IgYW5kIGFsc28gZW5kcyB0aGUgcHJvbWlzZSBjaGFpbiwgc28gdGhhdCBhbnlcbiAqIHVuaGFuZGxlZCBlcnJvcnMgYXJlIHRocm93biBpbnN0ZWFkIG9mIGZvcndhcmRlZCB0byB0aGUgZXJyb3JcbiAqIGhhbmRsZXIuIFRoaXMgaXMgdXNlZnVsIGJlY2F1c2UgaXQncyBleHRyZW1lbHkgY29tbW9uIHRvIHJ1blxuICogZ2VuZXJhdG9ycyBhdCB0aGUgdG9wLWxldmVsIHRvIHdvcmsgd2l0aCBsaWJyYXJpZXMuXG4gKi9cblEuc3Bhd24gPSBzcGF3bjtcbmZ1bmN0aW9uIHNwYXduKG1ha2VHZW5lcmF0b3IpIHtcbiAgICBRLmRvbmUoUS5hc3luYyhtYWtlR2VuZXJhdG9yKSgpKTtcbn1cblxuLy8gRklYTUU6IFJlbW92ZSB0aGlzIGludGVyZmFjZSBvbmNlIEVTNiBnZW5lcmF0b3JzIGFyZSBpbiBTcGlkZXJNb25rZXkuXG4vKipcbiAqIFRocm93cyBhIFJldHVyblZhbHVlIGV4Y2VwdGlvbiB0byBzdG9wIGFuIGFzeW5jaHJvbm91cyBnZW5lcmF0b3IuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgaXMgYSBzdG9wLWdhcCBtZWFzdXJlIHRvIHN1cHBvcnQgZ2VuZXJhdG9yIHJldHVyblxuICogdmFsdWVzIGluIG9sZGVyIEZpcmVmb3gvU3BpZGVyTW9ua2V5LiAgSW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEVTNlxuICogZ2VuZXJhdG9ycyBsaWtlIENocm9taXVtIDI5LCBqdXN0IHVzZSBcInJldHVyblwiIGluIHlvdXIgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHZhbHVlIHRoZSByZXR1cm4gdmFsdWUgZm9yIHRoZSBzdXJyb3VuZGluZyBnZW5lcmF0b3JcbiAqIEB0aHJvd3MgUmV0dXJuVmFsdWUgZXhjZXB0aW9uIHdpdGggdGhlIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIC8vIEVTNiBzdHlsZVxuICogUS5hc3luYyhmdW5jdGlvbiogKCkge1xuICogICAgICB2YXIgZm9vID0geWllbGQgZ2V0Rm9vUHJvbWlzZSgpO1xuICogICAgICB2YXIgYmFyID0geWllbGQgZ2V0QmFyUHJvbWlzZSgpO1xuICogICAgICByZXR1cm4gZm9vICsgYmFyO1xuICogfSlcbiAqIC8vIE9sZGVyIFNwaWRlck1vbmtleSBzdHlsZVxuICogUS5hc3luYyhmdW5jdGlvbiAoKSB7XG4gKiAgICAgIHZhciBmb28gPSB5aWVsZCBnZXRGb29Qcm9taXNlKCk7XG4gKiAgICAgIHZhciBiYXIgPSB5aWVsZCBnZXRCYXJQcm9taXNlKCk7XG4gKiAgICAgIFEucmV0dXJuKGZvbyArIGJhcik7XG4gKiB9KVxuICovXG5RW1wicmV0dXJuXCJdID0gX3JldHVybjtcbmZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgUVJldHVyblZhbHVlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgcHJvbWlzZWQgZnVuY3Rpb24gZGVjb3JhdG9yIGVuc3VyZXMgdGhhdCBhbnkgcHJvbWlzZSBhcmd1bWVudHNcbiAqIGFyZSBzZXR0bGVkIGFuZCBwYXNzZWQgYXMgdmFsdWVzIChgdGhpc2AgaXMgYWxzbyBzZXR0bGVkIGFuZCBwYXNzZWRcbiAqIGFzIGEgdmFsdWUpLiAgSXQgd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZSByZXN1bHQgb2YgYSBmdW5jdGlvbiBpc1xuICogYWx3YXlzIGEgcHJvbWlzZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIGFkZCA9IFEucHJvbWlzZWQoZnVuY3Rpb24gKGEsIGIpIHtcbiAqICAgICByZXR1cm4gYSArIGI7XG4gKiB9KTtcbiAqIGFkZChRKGEpLCBRKEIpKTtcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gZGVjb3JhdGVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGhhcyBiZWVuIGRlY29yYXRlZC5cbiAqL1xuUS5wcm9taXNlZCA9IHByb21pc2VkO1xuZnVuY3Rpb24gcHJvbWlzZWQoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3ByZWFkKFt0aGlzLCBhbGwoYXJndW1lbnRzKV0sIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbi8qKlxuICogc2VuZHMgYSBtZXNzYWdlIHRvIGEgdmFsdWUgaW4gYSBmdXR1cmUgdHVyblxuICogQHBhcmFtIG9iamVjdCogdGhlIHJlY2lwaWVudFxuICogQHBhcmFtIG9wIHRoZSBuYW1lIG9mIHRoZSBtZXNzYWdlIG9wZXJhdGlvbiwgZS5nLiwgXCJ3aGVuXCIsXG4gKiBAcGFyYW0gYXJncyBmdXJ0aGVyIGFyZ3VtZW50cyB0byBiZSBmb3J3YXJkZWQgdG8gdGhlIG9wZXJhdGlvblxuICogQHJldHVybnMgcmVzdWx0IHtQcm9taXNlfSBhIHByb21pc2UgZm9yIHRoZSByZXN1bHQgb2YgdGhlIG9wZXJhdGlvblxuICovXG5RLmRpc3BhdGNoID0gZGlzcGF0Y2g7XG5mdW5jdGlvbiBkaXNwYXRjaChvYmplY3QsIG9wLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChvcCwgYXJncyk7XG59XG5cblByb21pc2UucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gKG9wLCBhcmdzKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucHJvbWlzZURpc3BhdGNoKGRlZmVycmVkLnJlc29sdmUsIG9wLCBhcmdzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBwcm9wZXJ0eSB0byBnZXRcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHByb3BlcnR5IHZhbHVlXG4gKi9cblEuZ2V0ID0gZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5kaXNwYXRjaChcImdldFwiLCBba2V5XSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJnZXRcIiwgW2tleV0pO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHByb3BlcnR5IGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3Igb2JqZWN0IG9iamVjdFxuICogQHBhcmFtIG5hbWUgICAgICBuYW1lIG9mIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHZhbHVlICAgICBuZXcgdmFsdWUgb2YgcHJvcGVydHlcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICovXG5RLnNldCA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwic2V0XCIsIFtrZXksIHZhbHVlXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwic2V0XCIsIFtrZXksIHZhbHVlXSk7XG59O1xuXG4vKipcbiAqIERlbGV0ZXMgYSBwcm9wZXJ0eSBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBwcm9wZXJ0eSB0byBkZWxldGVcbiAqIEByZXR1cm4gcHJvbWlzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICovXG5RLmRlbCA9IC8vIFhYWCBsZWdhY3lcblFbXCJkZWxldGVcIl0gPSBmdW5jdGlvbiAob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwiZGVsZXRlXCIsIFtrZXldKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbCA9IC8vIFhYWCBsZWdhY3lcblByb21pc2UucHJvdG90eXBlW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwiZGVsZXRlXCIsIFtrZXldKTtcbn07XG5cbi8qKlxuICogSW52b2tlcyBhIG1ldGhvZCBpbiBhIGZ1dHVyZSB0dXJuLlxuICogQHBhcmFtIG9iamVjdCAgICBwcm9taXNlIG9yIGltbWVkaWF0ZSByZWZlcmVuY2UgZm9yIHRhcmdldCBvYmplY3RcbiAqIEBwYXJhbSBuYW1lICAgICAgbmFtZSBvZiBtZXRob2QgdG8gaW52b2tlXG4gKiBAcGFyYW0gdmFsdWUgICAgIGEgdmFsdWUgdG8gcG9zdCwgdHlwaWNhbGx5IGFuIGFycmF5IG9mXG4gKiAgICAgICAgICAgICAgICAgIGludm9jYXRpb24gYXJndW1lbnRzIGZvciBwcm9taXNlcyB0aGF0XG4gKiAgICAgICAgICAgICAgICAgIGFyZSB1bHRpbWF0ZWx5IGJhY2tlZCB3aXRoIGByZXNvbHZlYCB2YWx1ZXMsXG4gKiAgICAgICAgICAgICAgICAgIGFzIG9wcG9zZWQgdG8gdGhvc2UgYmFja2VkIHdpdGggVVJMc1xuICogICAgICAgICAgICAgICAgICB3aGVyZWluIHRoZSBwb3N0ZWQgdmFsdWUgY2FuIGJlIGFueVxuICogICAgICAgICAgICAgICAgICBKU09OIHNlcmlhbGl6YWJsZSBvYmplY3QuXG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWVcbiAqL1xuLy8gYm91bmQgbG9jYWxseSBiZWNhdXNlIGl0IGlzIHVzZWQgYnkgb3RoZXIgbWV0aG9kc1xuUS5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUS5wb3N0ID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSwgYXJncykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcmdzXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUHJvbWlzZS5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcmdzXSk7XG59O1xuXG4vKipcbiAqIEludm9rZXMgYSBtZXRob2QgaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgb2JqZWN0XG4gKiBAcGFyYW0gbmFtZSAgICAgIG5hbWUgb2YgbWV0aG9kIHRvIGludm9rZVxuICogQHBhcmFtIC4uLmFyZ3MgICBhcnJheSBvZiBpbnZvY2F0aW9uIGFyZ3VtZW50c1xuICogQHJldHVybiBwcm9taXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKi9cblEuc2VuZCA9IC8vIFhYWCBNYXJrIE1pbGxlcidzIHByb3Bvc2VkIHBhcmxhbmNlXG5RLm1jYWxsID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblEuaW52b2tlID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZSAvKi4uLmFyZ3MqLykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDIpXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZW5kID0gLy8gWFhYIE1hcmsgTWlsbGVyJ3MgcHJvcG9zZWQgcGFybGFuY2VcblByb21pc2UucHJvdG90eXBlLm1jYWxsID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblByb21pc2UucHJvdG90eXBlLmludm9rZSA9IGZ1bmN0aW9uIChuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpXSk7XG59O1xuXG4vKipcbiAqIEFwcGxpZXMgdGhlIHByb21pc2VkIGZ1bmN0aW9uIGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IGZ1bmN0aW9uXG4gKiBAcGFyYW0gYXJncyAgICAgIGFycmF5IG9mIGFwcGxpY2F0aW9uIGFyZ3VtZW50c1xuICovXG5RLmZhcHBseSA9IGZ1bmN0aW9uIChvYmplY3QsIGFyZ3MpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwiYXBwbHlcIiwgW3ZvaWQgMCwgYXJnc10pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmFwcGx5ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChcImFwcGx5XCIsIFt2b2lkIDAsIGFyZ3NdKTtcbn07XG5cbi8qKlxuICogQ2FsbHMgdGhlIHByb21pc2VkIGZ1bmN0aW9uIGluIGEgZnV0dXJlIHR1cm4uXG4gKiBAcGFyYW0gb2JqZWN0ICAgIHByb21pc2Ugb3IgaW1tZWRpYXRlIHJlZmVyZW5jZSBmb3IgdGFyZ2V0IGZ1bmN0aW9uXG4gKiBAcGFyYW0gLi4uYXJncyAgIGFycmF5IG9mIGFwcGxpY2F0aW9uIGFyZ3VtZW50c1xuICovXG5RW1widHJ5XCJdID1cblEuZmNhbGwgPSBmdW5jdGlvbiAob2JqZWN0IC8qIC4uLmFyZ3MqLykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZGlzcGF0Y2goXCJhcHBseVwiLCBbdm9pZCAwLCBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mY2FsbCA9IGZ1bmN0aW9uICgvKi4uLmFyZ3MqLykge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwiYXBwbHlcIiwgW3ZvaWQgMCwgYXJyYXlfc2xpY2UoYXJndW1lbnRzKV0pO1xufTtcblxuLyoqXG4gKiBCaW5kcyB0aGUgcHJvbWlzZWQgZnVuY3Rpb24sIHRyYW5zZm9ybWluZyByZXR1cm4gdmFsdWVzIGludG8gYSBmdWxmaWxsZWRcbiAqIHByb21pc2UgYW5kIHRocm93biBlcnJvcnMgaW50byBhIHJlamVjdGVkIG9uZS5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgZnVuY3Rpb25cbiAqIEBwYXJhbSAuLi5hcmdzICAgYXJyYXkgb2YgYXBwbGljYXRpb24gYXJndW1lbnRzXG4gKi9cblEuZmJpbmQgPSBmdW5jdGlvbiAob2JqZWN0IC8qLi4uYXJncyovKSB7XG4gICAgdmFyIHByb21pc2UgPSBRKG9iamVjdCk7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiBmYm91bmQoKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLmRpc3BhdGNoKFwiYXBwbHlcIiwgW1xuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGFyZ3MuY29uY2F0KGFycmF5X3NsaWNlKGFyZ3VtZW50cykpXG4gICAgICAgIF0pO1xuICAgIH07XG59O1xuUHJvbWlzZS5wcm90b3R5cGUuZmJpbmQgPSBmdW5jdGlvbiAoLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIHJldHVybiBmdW5jdGlvbiBmYm91bmQoKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLmRpc3BhdGNoKFwiYXBwbHlcIiwgW1xuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIGFyZ3MuY29uY2F0KGFycmF5X3NsaWNlKGFyZ3VtZW50cykpXG4gICAgICAgIF0pO1xuICAgIH07XG59O1xuXG4vKipcbiAqIFJlcXVlc3RzIHRoZSBuYW1lcyBvZiB0aGUgb3duZWQgcHJvcGVydGllcyBvZiBhIHByb21pc2VkXG4gKiBvYmplY3QgaW4gYSBmdXR1cmUgdHVybi5cbiAqIEBwYXJhbSBvYmplY3QgICAgcHJvbWlzZSBvciBpbW1lZGlhdGUgcmVmZXJlbmNlIGZvciB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJuIHByb21pc2UgZm9yIHRoZSBrZXlzIG9mIHRoZSBldmVudHVhbGx5IHNldHRsZWQgb2JqZWN0XG4gKi9cblEua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLmRpc3BhdGNoKFwia2V5c1wiLCBbXSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKFwia2V5c1wiLCBbXSk7XG59O1xuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIHByb21pc2VzIGludG8gYSBwcm9taXNlIGZvciBhbiBhcnJheS4gIElmIGFueSBvZlxuICogdGhlIHByb21pc2VzIGdldHMgcmVqZWN0ZWQsIHRoZSB3aG9sZSBhcnJheSBpcyByZWplY3RlZCBpbW1lZGlhdGVseS5cbiAqIEBwYXJhbSB7QXJyYXkqfSBhbiBhcnJheSAob3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkpIG9mIHZhbHVlcyAob3JcbiAqIHByb21pc2VzIGZvciB2YWx1ZXMpXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIGFuIGFycmF5IG9mIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlc1xuICovXG4vLyBCeSBNYXJrIE1pbGxlclxuLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9c3RyYXdtYW46Y29uY3VycmVuY3kmcmV2PTEzMDg3NzY1MjEjYWxsZnVsZmlsbGVkXG5RLmFsbCA9IGFsbDtcbmZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICAgIHJldHVybiB3aGVuKHByb21pc2VzLCBmdW5jdGlvbiAocHJvbWlzZXMpIHtcbiAgICAgICAgdmFyIHBlbmRpbmdDb3VudCA9IDA7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIGFycmF5X3JlZHVjZShwcm9taXNlcywgZnVuY3Rpb24gKHVuZGVmaW5lZCwgcHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBzbmFwc2hvdDtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpc1Byb21pc2UocHJvbWlzZSkgJiZcbiAgICAgICAgICAgICAgICAoc25hcHNob3QgPSBwcm9taXNlLmluc3BlY3QoKSkuc3RhdGUgPT09IFwiZnVsZmlsbGVkXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzW2luZGV4XSA9IHNuYXBzaG90LnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICArK3BlbmRpbmdDb3VudDtcbiAgICAgICAgICAgICAgICB3aGVuKFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0tcGVuZGluZ0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShwcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoeyBpbmRleDogaW5kZXgsIHZhbHVlOiBwcm9ncmVzcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHZvaWQgMCk7XG4gICAgICAgIGlmIChwZW5kaW5nQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocHJvbWlzZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH0pO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgcmVzb2x2ZWQgcHJvbWlzZSBvZiBhbiBhcnJheS4gUHJpb3IgcmVqZWN0ZWQgcHJvbWlzZXMgYXJlXG4gKiBpZ25vcmVkLiAgUmVqZWN0cyBvbmx5IGlmIGFsbCBwcm9taXNlcyBhcmUgcmVqZWN0ZWQuXG4gKiBAcGFyYW0ge0FycmF5Kn0gYW4gYXJyYXkgY29udGFpbmluZyB2YWx1ZXMgb3IgcHJvbWlzZXMgZm9yIHZhbHVlc1xuICogQHJldHVybnMgYSBwcm9taXNlIGZ1bGZpbGxlZCB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVzb2x2ZWQgcHJvbWlzZSxcbiAqIG9yIGEgcmVqZWN0ZWQgcHJvbWlzZSBpZiBhbGwgcHJvbWlzZXMgYXJlIHJlamVjdGVkLlxuICovXG5RLmFueSA9IGFueTtcblxuZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG4gICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gUS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGRlZmVycmVkID0gUS5kZWZlcigpO1xuICAgIHZhciBwZW5kaW5nQ291bnQgPSAwO1xuICAgIGFycmF5X3JlZHVjZShwcm9taXNlcywgZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQsIGluZGV4KSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gcHJvbWlzZXNbaW5kZXhdO1xuXG4gICAgICAgIHBlbmRpbmdDb3VudCsrO1xuXG4gICAgICAgIHdoZW4ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpO1xuICAgICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXN1bHQpIHtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblJlamVjdGVkKCkge1xuICAgICAgICAgICAgcGVuZGluZ0NvdW50LS07XG4gICAgICAgICAgICBpZiAocGVuZGluZ0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgXCJDYW4ndCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgZnJvbSBhbnkgcHJvbWlzZSwgYWxsIFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9taXNlcyB3ZXJlIHJlamVjdGVkLlwiXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25Qcm9ncmVzcyhwcm9ncmVzcykge1xuICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYW55ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhbnkodGhpcyk7XG59O1xuXG4vKipcbiAqIFdhaXRzIGZvciBhbGwgcHJvbWlzZXMgdG8gYmUgc2V0dGxlZCwgZWl0aGVyIGZ1bGZpbGxlZCBvclxuICogcmVqZWN0ZWQuICBUaGlzIGlzIGRpc3RpbmN0IGZyb20gYGFsbGAgc2luY2UgdGhhdCB3b3VsZCBzdG9wXG4gKiB3YWl0aW5nIGF0IHRoZSBmaXJzdCByZWplY3Rpb24uICBUaGUgcHJvbWlzZSByZXR1cm5lZCBieVxuICogYGFsbFJlc29sdmVkYCB3aWxsIG5ldmVyIGJlIHJlamVjdGVkLlxuICogQHBhcmFtIHByb21pc2VzIGEgcHJvbWlzZSBmb3IgYW4gYXJyYXkgKG9yIGFuIGFycmF5KSBvZiBwcm9taXNlc1xuICogKG9yIHZhbHVlcylcbiAqIEByZXR1cm4gYSBwcm9taXNlIGZvciBhbiBhcnJheSBvZiBwcm9taXNlc1xuICovXG5RLmFsbFJlc29sdmVkID0gZGVwcmVjYXRlKGFsbFJlc29sdmVkLCBcImFsbFJlc29sdmVkXCIsIFwiYWxsU2V0dGxlZFwiKTtcbmZ1bmN0aW9uIGFsbFJlc29sdmVkKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHdoZW4ocHJvbWlzZXMsIGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgICAgICBwcm9taXNlcyA9IGFycmF5X21hcChwcm9taXNlcywgUSk7XG4gICAgICAgIHJldHVybiB3aGVuKGFsbChhcnJheV9tYXAocHJvbWlzZXMsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2hlbihwcm9taXNlLCBub29wLCBub29wKTtcbiAgICAgICAgfSkpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGxSZXNvbHZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWxsUmVzb2x2ZWQodGhpcyk7XG59O1xuXG4vKipcbiAqIEBzZWUgUHJvbWlzZSNhbGxTZXR0bGVkXG4gKi9cblEuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG5mdW5jdGlvbiBhbGxTZXR0bGVkKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFEocHJvbWlzZXMpLmFsbFNldHRsZWQoKTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBhcnJheSBvZiBwcm9taXNlcyBpbnRvIGEgcHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgdGhlaXIgc3RhdGVzIChhc1xuICogcmV0dXJuZWQgYnkgYGluc3BlY3RgKSB3aGVuIHRoZXkgaGF2ZSBhbGwgc2V0dGxlZC5cbiAqIEBwYXJhbSB7QXJyYXlbQW55Kl19IHZhbHVlcyBhbiBhcnJheSAob3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkpIG9mIHZhbHVlcyAob3JcbiAqIHByb21pc2VzIGZvciB2YWx1ZXMpXG4gKiBAcmV0dXJucyB7QXJyYXlbU3RhdGVdfSBhbiBhcnJheSBvZiBzdGF0ZXMgZm9yIHRoZSByZXNwZWN0aXZlIHZhbHVlcy5cbiAqL1xuUHJvbWlzZS5wcm90b3R5cGUuYWxsU2V0dGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgICAgICByZXR1cm4gYWxsKGFycmF5X21hcChwcm9taXNlcywgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBRKHByb21pc2UpO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVnYXJkbGVzcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5pbnNwZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlZ2FyZGxlc3MsIHJlZ2FyZGxlc3MpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIENhcHR1cmVzIHRoZSBmYWlsdXJlIG9mIGEgcHJvbWlzZSwgZ2l2aW5nIGFuIG9wb3J0dW5pdHkgdG8gcmVjb3ZlclxuICogd2l0aCBhIGNhbGxiYWNrLiAgSWYgdGhlIGdpdmVuIHByb21pc2UgaXMgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAqIHByb21pc2UgaXMgZnVsZmlsbGVkLlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlIGZvciBzb21ldGhpbmdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIGZ1bGZpbGwgdGhlIHJldHVybmVkIHByb21pc2UgaWYgdGhlXG4gKiBnaXZlbiBwcm9taXNlIGlzIHJlamVjdGVkXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGNhbGxiYWNrXG4gKi9cblEuZmFpbCA9IC8vIFhYWCBsZWdhY3lcblFbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvYmplY3QsIHJlamVjdGVkKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS50aGVuKHZvaWQgMCwgcmVqZWN0ZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmFpbCA9IC8vIFhYWCBsZWdhY3lcblByb21pc2UucHJvdG90eXBlW1wiY2F0Y2hcIl0gPSBmdW5jdGlvbiAocmVqZWN0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgcmVqZWN0ZWQpO1xufTtcblxuLyoqXG4gKiBBdHRhY2hlcyBhIGxpc3RlbmVyIHRoYXQgY2FuIHJlc3BvbmQgdG8gcHJvZ3Jlc3Mgbm90aWZpY2F0aW9ucyBmcm9tIGFcbiAqIHByb21pc2UncyBvcmlnaW5hdGluZyBkZWZlcnJlZC4gVGhpcyBsaXN0ZW5lciByZWNlaXZlcyB0aGUgZXhhY3QgYXJndW1lbnRzXG4gKiBwYXNzZWQgdG8gYGBkZWZlcnJlZC5ub3RpZnlgYC5cbiAqIEBwYXJhbSB7QW55Kn0gcHJvbWlzZSBmb3Igc29tZXRoaW5nXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB0byByZWNlaXZlIGFueSBwcm9ncmVzcyBub3RpZmljYXRpb25zXG4gKiBAcmV0dXJucyB0aGUgZ2l2ZW4gcHJvbWlzZSwgdW5jaGFuZ2VkXG4gKi9cblEucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbmZ1bmN0aW9uIHByb2dyZXNzKG9iamVjdCwgcHJvZ3Jlc3NlZCkge1xuICAgIHJldHVybiBRKG9iamVjdCkudGhlbih2b2lkIDAsIHZvaWQgMCwgcHJvZ3Jlc3NlZCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzZWQpIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgdm9pZCAwLCBwcm9ncmVzc2VkKTtcbn07XG5cbi8qKlxuICogUHJvdmlkZXMgYW4gb3Bwb3J0dW5pdHkgdG8gb2JzZXJ2ZSB0aGUgc2V0dGxpbmcgb2YgYSBwcm9taXNlLFxuICogcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBwcm9taXNlIGlzIGZ1bGZpbGxlZCBvciByZWplY3RlZC4gIEZvcndhcmRzXG4gKiB0aGUgcmVzb2x1dGlvbiB0byB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aGVuIHRoZSBjYWxsYmFjayBpcyBkb25lLlxuICogVGhlIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBwcm9taXNlIHRvIGRlZmVyIGNvbXBsZXRpb24uXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRvIG9ic2VydmUgdGhlIHJlc29sdXRpb24gb2YgdGhlIGdpdmVuXG4gKiBwcm9taXNlLCB0YWtlcyBubyBhcmd1bWVudHMuXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlIHdoZW5cbiAqIGBgZmluYGAgaXMgZG9uZS5cbiAqL1xuUS5maW4gPSAvLyBYWFggbGVnYWN5XG5RW1wiZmluYWxseVwiXSA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KVtcImZpbmFsbHlcIl0oY2FsbGJhY2spO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmluID0gLy8gWFhYIGxlZ2FjeVxuUHJvbWlzZS5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBRKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suZmNhbGwoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAvLyBUT0RPIGF0dGVtcHQgdG8gcmVjeWNsZSB0aGUgcmVqZWN0aW9uIHdpdGggXCJ0aGlzXCIuXG4gICAgICAgIHJldHVybiBjYWxsYmFjay5mY2FsbCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogVGVybWluYXRlcyBhIGNoYWluIG9mIHByb21pc2VzLCBmb3JjaW5nIHJlamVjdGlvbnMgdG8gYmVcbiAqIHRocm93biBhcyBleGNlcHRpb25zLlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlIGF0IHRoZSBlbmQgb2YgYSBjaGFpbiBvZiBwcm9taXNlc1xuICogQHJldHVybnMgbm90aGluZ1xuICovXG5RLmRvbmUgPSBmdW5jdGlvbiAob2JqZWN0LCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBRKG9iamVjdCkuZG9uZShmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG4gICAgdmFyIG9uVW5oYW5kbGVkRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgLy8gZm9yd2FyZCB0byBhIGZ1dHVyZSB0dXJuIHNvIHRoYXQgYGB3aGVuYGBcbiAgICAgICAgLy8gZG9lcyBub3QgY2F0Y2ggaXQgYW5kIHR1cm4gaXQgaW50byBhIHJlamVjdGlvbi5cbiAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtYWtlU3RhY2tUcmFjZUxvbmcoZXJyb3IsIHByb21pc2UpO1xuICAgICAgICAgICAgaWYgKFEub25lcnJvcikge1xuICAgICAgICAgICAgICAgIFEub25lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgYG5leHRUaWNrYGluZyB2aWEgYW4gdW5uZWNlc3NhcnkgYHdoZW5gLlxuICAgIHZhciBwcm9taXNlID0gZnVsZmlsbGVkIHx8IHJlamVjdGVkIHx8IHByb2dyZXNzID9cbiAgICAgICAgdGhpcy50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSA6XG4gICAgICAgIHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2VzcyAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgICBvblVuaGFuZGxlZEVycm9yID0gcHJvY2Vzcy5kb21haW4uYmluZChvblVuaGFuZGxlZEVycm9yKTtcbiAgICB9XG5cbiAgICBwcm9taXNlLnRoZW4odm9pZCAwLCBvblVuaGFuZGxlZEVycm9yKTtcbn07XG5cbi8qKlxuICogQ2F1c2VzIGEgcHJvbWlzZSB0byBiZSByZWplY3RlZCBpZiBpdCBkb2VzIG5vdCBnZXQgZnVsZmlsbGVkIGJlZm9yZVxuICogc29tZSBtaWxsaXNlY29uZHMgdGltZSBvdXQuXG4gKiBAcGFyYW0ge0FueSp9IHByb21pc2VcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaWxsaXNlY29uZHMgdGltZW91dFxuICogQHBhcmFtIHtBbnkqfSBjdXN0b20gZXJyb3IgbWVzc2FnZSBvciBFcnJvciBvYmplY3QgKG9wdGlvbmFsKVxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW4gcHJvbWlzZSBpZiBpdCBpc1xuICogZnVsZmlsbGVkIGJlZm9yZSB0aGUgdGltZW91dCwgb3RoZXJ3aXNlIHJlamVjdGVkLlxuICovXG5RLnRpbWVvdXQgPSBmdW5jdGlvbiAob2JqZWN0LCBtcywgZXJyb3IpIHtcbiAgICByZXR1cm4gUShvYmplY3QpLnRpbWVvdXQobXMsIGVycm9yKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAobXMsIGVycm9yKSB7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZXJyb3IgfHwgXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihlcnJvciB8fCBcIlRpbWVkIG91dCBhZnRlciBcIiArIG1zICsgXCIgbXNcIik7XG4gICAgICAgICAgICBlcnJvci5jb2RlID0gXCJFVElNRURPVVRcIjtcbiAgICAgICAgfVxuICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuICAgIH0sIG1zKTtcblxuICAgIHRoaXMudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUodmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdChleGNlcHRpb24pO1xuICAgIH0sIGRlZmVycmVkLm5vdGlmeSk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSBnaXZlbiB2YWx1ZSAob3IgcHJvbWlzZWQgdmFsdWUpLCBzb21lXG4gKiBtaWxsaXNlY29uZHMgYWZ0ZXIgaXQgcmVzb2x2ZWQuIFBhc3NlcyByZWplY3Rpb25zIGltbWVkaWF0ZWx5LlxuICogQHBhcmFtIHtBbnkqfSBwcm9taXNlXG4gKiBAcGFyYW0ge051bWJlcn0gbWlsbGlzZWNvbmRzXG4gKiBAcmV0dXJucyBhIHByb21pc2UgZm9yIHRoZSByZXNvbHV0aW9uIG9mIHRoZSBnaXZlbiBwcm9taXNlIGFmdGVyIG1pbGxpc2Vjb25kc1xuICogdGltZSBoYXMgZWxhcHNlZCBzaW5jZSB0aGUgcmVzb2x1dGlvbiBvZiB0aGUgZ2l2ZW4gcHJvbWlzZS5cbiAqIElmIHRoZSBnaXZlbiBwcm9taXNlIHJlamVjdHMsIHRoYXQgaXMgcGFzc2VkIGltbWVkaWF0ZWx5LlxuICovXG5RLmRlbGF5ID0gZnVuY3Rpb24gKG9iamVjdCwgdGltZW91dCkge1xuICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgdGltZW91dCA9IG9iamVjdDtcbiAgICAgICAgb2JqZWN0ID0gdm9pZCAwO1xuICAgIH1cbiAgICByZXR1cm4gUShvYmplY3QpLmRlbGF5KHRpbWVvdXQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiAodGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUGFzc2VzIGEgY29udGludWF0aW9uIHRvIGEgTm9kZSBmdW5jdGlvbiwgd2hpY2ggaXMgY2FsbGVkIHdpdGggdGhlIGdpdmVuXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgYXMgYW4gYXJyYXksIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqXG4gKiAgICAgIFEubmZhcHBseShGUy5yZWFkRmlsZSwgW19fZmlsZW5hbWVdKVxuICogICAgICAudGhlbihmdW5jdGlvbiAoY29udGVudCkge1xuICogICAgICB9KVxuICpcbiAqL1xuUS5uZmFwcGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEoY2FsbGJhY2spLm5mYXBwbHkoYXJncyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmFwcGx5ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3MpO1xuICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICB0aGlzLmZhcHBseShub2RlQXJncykuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBQYXNzZXMgYSBjb250aW51YXRpb24gdG8gYSBOb2RlIGZ1bmN0aW9uLCB3aGljaCBpcyBjYWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAqIGFyZ3VtZW50cyBwcm92aWRlZCBpbmRpdmlkdWFsbHksIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqIEBleGFtcGxlXG4gKiBRLm5mY2FsbChGUy5yZWFkRmlsZSwgX19maWxlbmFtZSlcbiAqIC50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gKiB9KVxuICpcbiAqL1xuUS5uZmNhbGwgPSBmdW5jdGlvbiAoY2FsbGJhY2sgLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIFEoY2FsbGJhY2spLm5mYXBwbHkoYXJncyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmNhbGwgPSBmdW5jdGlvbiAoLyouLi5hcmdzKi8pIHtcbiAgICB2YXIgbm9kZUFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIHRoaXMuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59O1xuXG4vKipcbiAqIFdyYXBzIGEgTm9kZUpTIGNvbnRpbnVhdGlvbiBwYXNzaW5nIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGFuIGVxdWl2YWxlbnRcbiAqIHZlcnNpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZS5cbiAqIEBleGFtcGxlXG4gKiBRLm5mYmluZChGUy5yZWFkRmlsZSwgX19maWxlbmFtZSkoXCJ1dGYtOFwiKVxuICogLnRoZW4oY29uc29sZS5sb2cpXG4gKiAuZG9uZSgpXG4gKi9cblEubmZiaW5kID1cblEuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKGNhbGxiYWNrIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGJhc2VBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZUFyZ3MgPSBiYXNlQXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSk7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICAgICAgUShjYWxsYmFjaykuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uZmJpbmQgPVxuUHJvbWlzZS5wcm90b3R5cGUuZGVub2RlaWZ5ID0gZnVuY3Rpb24gKC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGFyZ3MgPSBhcnJheV9zbGljZShhcmd1bWVudHMpO1xuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICByZXR1cm4gUS5kZW5vZGVpZnkuYXBwbHkodm9pZCAwLCBhcmdzKTtcbn07XG5cblEubmJpbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNwIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIGJhc2VBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm9kZUFyZ3MgPSBiYXNlQXJncy5jb25jYXQoYXJyYXlfc2xpY2UoYXJndW1lbnRzKSk7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICAgICAgZnVuY3Rpb24gYm91bmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpc3AsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgUShib3VuZCkuZmFwcGx5KG5vZGVBcmdzKS5mYWlsKGRlZmVycmVkLnJlamVjdCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5uYmluZCA9IGZ1bmN0aW9uICgvKnRoaXNwLCAuLi5hcmdzKi8pIHtcbiAgICB2YXIgYXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMCk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIHJldHVybiBRLm5iaW5kLmFwcGx5KHZvaWQgMCwgYXJncyk7XG59O1xuXG4vKipcbiAqIENhbGxzIGEgbWV0aG9kIG9mIGEgTm9kZS1zdHlsZSBvYmplY3QgdGhhdCBhY2NlcHRzIGEgTm9kZS1zdHlsZVxuICogY2FsbGJhY2sgd2l0aCBhIGdpdmVuIGFycmF5IG9mIGFyZ3VtZW50cywgcGx1cyBhIHByb3ZpZGVkIGNhbGxiYWNrLlxuICogQHBhcmFtIG9iamVjdCBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIG5hbWVkIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kIG9mIG9iamVjdFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kOyB0aGUgY2FsbGJhY2tcbiAqIHdpbGwgYmUgcHJvdmlkZWQgYnkgUSBhbmQgYXBwZW5kZWQgdG8gdGhlc2UgYXJndW1lbnRzLlxuICogQHJldHVybnMgYSBwcm9taXNlIGZvciB0aGUgdmFsdWUgb3IgZXJyb3JcbiAqL1xuUS5ubWFwcGx5ID0gLy8gWFhYIEFzIHByb3Bvc2VkIGJ5IFwiUmVkc2FuZHJvXCJcblEubnBvc3QgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lLCBhcmdzKSB7XG4gICAgcmV0dXJuIFEob2JqZWN0KS5ucG9zdChuYW1lLCBhcmdzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5tYXBwbHkgPSAvLyBYWFggQXMgcHJvcG9zZWQgYnkgXCJSZWRzYW5kcm9cIlxuUHJvbWlzZS5wcm90b3R5cGUubnBvc3QgPSBmdW5jdGlvbiAobmFtZSwgYXJncykge1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3MgfHwgW10pO1xuICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgbm9kZUFyZ3MucHVzaChkZWZlcnJlZC5tYWtlTm9kZVJlc29sdmVyKCkpO1xuICAgIHRoaXMuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBub2RlQXJnc10pLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbi8qKlxuICogQ2FsbHMgYSBtZXRob2Qgb2YgYSBOb2RlLXN0eWxlIG9iamVjdCB0aGF0IGFjY2VwdHMgYSBOb2RlLXN0eWxlXG4gKiBjYWxsYmFjaywgZm9yd2FyZGluZyB0aGUgZ2l2ZW4gdmFyaWFkaWMgYXJndW1lbnRzLCBwbHVzIGEgcHJvdmlkZWRcbiAqIGNhbGxiYWNrIGFyZ3VtZW50LlxuICogQHBhcmFtIG9iamVjdCBhbiBvYmplY3QgdGhhdCBoYXMgdGhlIG5hbWVkIG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbWV0aG9kIG9mIG9iamVjdFxuICogQHBhcmFtIC4uLmFyZ3MgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIG1ldGhvZDsgdGhlIGNhbGxiYWNrIHdpbGxcbiAqIGJlIHByb3ZpZGVkIGJ5IFEgYW5kIGFwcGVuZGVkIHRvIHRoZXNlIGFyZ3VtZW50cy5cbiAqIEByZXR1cm5zIGEgcHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9yIGVycm9yXG4gKi9cblEubnNlbmQgPSAvLyBYWFggQmFzZWQgb24gTWFyayBNaWxsZXIncyBwcm9wb3NlZCBcInNlbmRcIlxuUS5ubWNhbGwgPSAvLyBYWFggQmFzZWQgb24gXCJSZWRzYW5kcm8nc1wiIHByb3Bvc2FsXG5RLm5pbnZva2UgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lIC8qLi4uYXJncyovKSB7XG4gICAgdmFyIG5vZGVBcmdzID0gYXJyYXlfc2xpY2UoYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIG5vZGVBcmdzLnB1c2goZGVmZXJyZWQubWFrZU5vZGVSZXNvbHZlcigpKTtcbiAgICBRKG9iamVjdCkuZGlzcGF0Y2goXCJwb3N0XCIsIFtuYW1lLCBub2RlQXJnc10pLmZhaWwoZGVmZXJyZWQucmVqZWN0KTtcbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLm5zZW5kID0gLy8gWFhYIEJhc2VkIG9uIE1hcmsgTWlsbGVyJ3MgcHJvcG9zZWQgXCJzZW5kXCJcblByb21pc2UucHJvdG90eXBlLm5tY2FsbCA9IC8vIFhYWCBCYXNlZCBvbiBcIlJlZHNhbmRybydzXCIgcHJvcG9zYWxcblByb21pc2UucHJvdG90eXBlLm5pbnZva2UgPSBmdW5jdGlvbiAobmFtZSAvKi4uLmFyZ3MqLykge1xuICAgIHZhciBub2RlQXJncyA9IGFycmF5X3NsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICBub2RlQXJncy5wdXNoKGRlZmVycmVkLm1ha2VOb2RlUmVzb2x2ZXIoKSk7XG4gICAgdGhpcy5kaXNwYXRjaChcInBvc3RcIiwgW25hbWUsIG5vZGVBcmdzXSkuZmFpbChkZWZlcnJlZC5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufTtcblxuLyoqXG4gKiBJZiBhIGZ1bmN0aW9uIHdvdWxkIGxpa2UgdG8gc3VwcG9ydCBib3RoIE5vZGUgY29udGludWF0aW9uLXBhc3Npbmctc3R5bGUgYW5kXG4gKiBwcm9taXNlLXJldHVybmluZy1zdHlsZSwgaXQgY2FuIGVuZCBpdHMgaW50ZXJuYWwgcHJvbWlzZSBjaGFpbiB3aXRoXG4gKiBgbm9kZWlmeShub2RlYmFjaylgLCBmb3J3YXJkaW5nIHRoZSBvcHRpb25hbCBub2RlYmFjayBhcmd1bWVudC4gIElmIHRoZSB1c2VyXG4gKiBlbGVjdHMgdG8gdXNlIGEgbm9kZWJhY2ssIHRoZSByZXN1bHQgd2lsbCBiZSBzZW50IHRoZXJlLiAgSWYgdGhleSBkbyBub3RcbiAqIHBhc3MgYSBub2RlYmFjaywgdGhleSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdCBwcm9taXNlLlxuICogQHBhcmFtIG9iamVjdCBhIHJlc3VsdCAob3IgYSBwcm9taXNlIGZvciBhIHJlc3VsdClcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5vZGViYWNrIGEgTm9kZS5qcy1zdHlsZSBjYWxsYmFja1xuICogQHJldHVybnMgZWl0aGVyIHRoZSBwcm9taXNlIG9yIG5vdGhpbmdcbiAqL1xuUS5ub2RlaWZ5ID0gbm9kZWlmeTtcbmZ1bmN0aW9uIG5vZGVpZnkob2JqZWN0LCBub2RlYmFjaykge1xuICAgIHJldHVybiBRKG9iamVjdCkubm9kZWlmeShub2RlYmFjayk7XG59XG5cblByb21pc2UucHJvdG90eXBlLm5vZGVpZnkgPSBmdW5jdGlvbiAobm9kZWJhY2spIHtcbiAgICBpZiAobm9kZWJhY2spIHtcbiAgICAgICAgdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbm9kZWJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgUS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbm9kZWJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cblEubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlEubm9Db25mbGljdCBvbmx5IHdvcmtzIHdoZW4gUSBpcyB1c2VkIGFzIGEgZ2xvYmFsXCIpO1xufTtcblxuLy8gQWxsIGNvZGUgYmVmb3JlIHRoaXMgcG9pbnQgd2lsbCBiZSBmaWx0ZXJlZCBmcm9tIHN0YWNrIHRyYWNlcy5cbnZhciBxRW5kaW5nTGluZSA9IGNhcHR1cmVMaW5lKCk7XG5cbnJldHVybiBRO1xuXG59KTtcbiIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgdmVyc2lvblxudmFyIG1hcCA9IHdpbmRvdy5fX1ZVRV9IT1RfTUFQX18gPSBPYmplY3QuY3JlYXRlKG51bGwpXG52YXIgaW5zdGFsbGVkID0gZmFsc2VcbnZhciBpc0Jyb3dzZXJpZnkgPSBmYWxzZVxudmFyIGluaXRIb29rTmFtZSA9ICdiZWZvcmVDcmVhdGUnXG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh2dWUsIGJyb3dzZXJpZnkpIHtcbiAgaWYgKGluc3RhbGxlZCkgcmV0dXJuXG4gIGluc3RhbGxlZCA9IHRydWVcblxuICBWdWUgPSB2dWUuX19lc01vZHVsZSA/IHZ1ZS5kZWZhdWx0IDogdnVlXG4gIHZlcnNpb24gPSBWdWUudmVyc2lvbi5zcGxpdCgnLicpLm1hcChOdW1iZXIpXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICAvLyBjb21wYXQgd2l0aCA8IDIuMC4wLWFscGhhLjdcbiAgaWYgKFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xKSB7XG4gICAgaW5pdEhvb2tOYW1lID0gJ2luaXQnXG4gIH1cblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSB2ZXJzaW9uWzBdID49IDJcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gWW91IGFyZSB1c2luZyBhIHZlcnNpb24gb2YgdnVlLWhvdC1yZWxvYWQtYXBpIHRoYXQgaXMgJyArXG4gICAgICAnb25seSBjb21wYXRpYmxlIHdpdGggVnVlLmpzIGNvcmUgXjIuMC4wLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjdG9yXG4gKiBhbmQgaW5zdGFuY2VzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmV4cG9ydHMuY3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG4gIHZhciBDdG9yID0gbnVsbFxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBDdG9yID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnNcbiAgfVxuICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgbWFwW2lkXSA9IHtcbiAgICBDdG9yOiBWdWUuZXh0ZW5kKG9wdGlvbnMpLFxuICAgIGluc3RhbmNlczogW11cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgaW5qZWN0SG9vayhvcHRpb25zLCBpbml0SG9va05hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBtYXBbaWRdLmluc3RhbmNlcy5wdXNoKHRoaXMpXG4gIH0pXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2JlZm9yZURlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlcyA9IG1hcFtpZF0uaW5zdGFuY2VzXG4gICAgaW5zdGFuY2VzLnNwbGljZShpbnN0YW5jZXMuaW5kZXhPZih0aGlzKSwgMSlcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuZnVuY3Rpb24gdHJ5V3JhcCAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpZCwgYXJnKSB7XG4gICAgdHJ5IHsgZm4oaWQsIGFyZykgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS53YXJuKCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgVnVlIGNvbXBvbmVudCBob3QtcmVsb2FkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLnJlcmVuZGVyID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIHJlY29yZC5DdG9yLm9wdGlvbnMucmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgcmVjb3JkLkN0b3Iub3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBvcHRpb25zLnN0YXRpY1JlbmRlckZuc1xuICByZWNvcmQuaW5zdGFuY2VzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS4kb3B0aW9ucy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgIGluc3RhbmNlLiRvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zXG4gICAgaW5zdGFuY2UuX3N0YXRpY1RyZWVzID0gW10gLy8gcmVzZXQgc3RhdGljIHRyZWVzXG4gICAgaW5zdGFuY2UuJGZvcmNlVXBkYXRlKClcbiAgfSlcbn0pXG5cbmV4cG9ydHMucmVsb2FkID0gdHJ5V3JhcChmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIG1ha2VPcHRpb25zSG90KGlkLCBvcHRpb25zKVxuICB2YXIgcmVjb3JkID0gbWFwW2lkXVxuICBpZiAodmVyc2lvblsxXSA8IDIpIHtcbiAgICAvLyBwcmVzZXJ2ZSBwcmUgMi4yIGJlaGF2aW9yIGZvciBnbG9iYWwgbWl4aW4gaGFuZGxpbmdcbiAgICByZWNvcmQuQ3Rvci5leHRlbmRPcHRpb25zID0gb3B0aW9uc1xuICB9XG4gIHZhciBuZXdDdG9yID0gcmVjb3JkLkN0b3Iuc3VwZXIuZXh0ZW5kKG9wdGlvbnMpXG4gIHJlY29yZC5DdG9yLm9wdGlvbnMgPSBuZXdDdG9yLm9wdGlvbnNcbiAgcmVjb3JkLkN0b3IuY2lkID0gbmV3Q3Rvci5jaWRcbiAgcmVjb3JkLkN0b3IucHJvdG90eXBlID0gbmV3Q3Rvci5wcm90b3R5cGVcbiAgaWYgKG5ld0N0b3IucmVsZWFzZSkge1xuICAgIC8vIHRlbXBvcmFyeSBnbG9iYWwgbWl4aW4gc3RyYXRlZ3kgdXNlZCBpbiA8IDIuMC4wLWFscGhhLjZcbiAgICBuZXdDdG9yLnJlbGVhc2UoKVxuICB9XG4gIHJlY29yZC5pbnN0YW5jZXMuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS4kdm5vZGUgJiYgaW5zdGFuY2UuJHZub2RlLmNvbnRleHQpIHtcbiAgICAgIGluc3RhbmNlLiR2bm9kZS5jb250ZXh0LiRmb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignUm9vdCBvciBtYW51YWxseSBtb3VudGVkIGluc3RhbmNlIG1vZGlmaWVkLiBGdWxsIHJlbG9hZCByZXF1aXJlZC4nKVxuICAgIH1cbiAgfSlcbn0pXG4iXSwicHJlRXhpc3RpbmdDb21tZW50IjoiLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZhVzVrWlhndWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZjM0pqTDNacFpYZHpMMmx1WkdWNEwybHVaR1Y0TG5aMVpUOWpNMlUxWlRJMll5SXNJbk55WXk5MmFXVjNjeTlwYm1SbGVDOXRiMlIxYkdVdllXSnZkWFF2YzNKakwzWnBaWGR6TDJsdVpHVjRMMjF2WkhWc1pTOWhZbTkxZEM5cGJtUmxlQzUyZFdVL05qUTJNR1kwTkdNaUxDSnpjbU12ZG1sbGQzTXZhVzVrWlhndmJXOWtkV3hsTDJGeWRHbGpiR1V2YzNKakwzWnBaWGR6TDJsdVpHVjRMMjF2WkhWc1pTOWhjblJwWTJ4bEwybHVaR1Y0TG5aMVpUOWpNbUkxWXpkall5SXNJbk55WXk5MmFXVjNjeTlwYm1SbGVDOXRiMlIxYkdVdllYSjBhV05zWlM5elpYSjJhV05sTG1weklpd2ljM0pqTDNacFpYZHpMMmx1WkdWNEwyMXZaSFZzWlM5a2VXNWhiV2xqTFhKdmRYUmxMM055WXk5MmFXVjNjeTlwYm1SbGVDOXRiMlIxYkdVdlpIbHVZVzFwWXkxeWIzVjBaUzlwYm1SbGVDNTJkV1UvTXpNd04yTTRZemdpTENKemNtTXZkbWxsZDNNdmFXNWtaWGd2Ylc5a2RXeGxMMlp2Y20wdmMzSmpMM1pwWlhkekwybHVaR1Y0TDIxdlpIVnNaUzltYjNKdEwybHVaR1Y0TG5aMVpUODJObU16TXprNE5TSXNJbk55WXk5MmFXVjNjeTlwYm1SbGVDOXRiMlIxYkdVdmJHbHpkR2x1Wnk5emNtTXZkbWxsZDNNdmFXNWtaWGd2Ylc5a2RXeGxMMnhwYzNScGJtY3ZhVzVrWlhndWRuVmxQek16T1dFelpUWXlJaXdpYzNKakwzWnBaWGR6TDJsdVpHVjRMMjF2WkhWc1pTOXNhWE4wYVc1bkwzTmxjblpwWTJVdWFuTWlMQ0p6Y21NdmRtbGxkM012YVc1a1pYZ3ZjbTkxZEdWekxtcHpJaXdpYzNKakwzWnBaWGR6TDJsdVpHVjRMM05sY25acFkyVXVhbk1pTENKemNtTXZkbWxsZDNNdmNIVmliR2xqTDJSbGJXOHRaR0YwWVM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWlZV0psYkMxeWRXNTBhVzFsTDJOdmNtVXRhbk12WjJWMExXbDBaWEpoZEc5eUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMkpoWW1Wc0xYSjFiblJwYldVdlkyOXlaUzFxY3k5dlltcGxZM1F2WVhOemFXZHVMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJKaFltVnNMWEoxYm5ScGJXVXZhR1ZzY0dWeWN5OWxlSFJsYm1SekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOW1iaTluWlhRdGFYUmxjbUYwYjNJdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyWnVMMjlpYW1WamRDOWhjM05wWjI0dWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgyRXRablZ1WTNScGIyNHVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMkZrWkMxMGJ5MTFibk5qYjNCaFlteGxjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWVc0dGIySnFaV04wTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5aGNuSmhlUzFwYm1Oc2RXUmxjeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWTJ4aGMzTnZaaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmWTI5bUxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWpiM0psTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5amRIZ3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlJsWm1sdVpXUXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMlJsYzJOeWFYQjBiM0p6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5a2IyMHRZM0psWVhSbExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOWxiblZ0TFdKMVp5MXJaWGx6TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5bGVIQnZjblF1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJaaGFXeHpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTluYkc5aVlXd3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmhoY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmFHbGtaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYUhSdGJDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhV1U0TFdSdmJTMWtaV1pwYm1VdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHZZbXBsWTNRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgybHpMVzlpYW1WamRDNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZhWFJsY2kxamNtVmhkR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDJsMFpYSXRaR1ZtYVc1bExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXBkR1Z5TFhOMFpYQXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYMmwwWlhKaGRHOXljeTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYkdsaWNtRnllUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYjJKcVpXTjBMV0Z6YzJsbmJpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXTnlaV0YwWlM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdSd0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdFpIQnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl2WW1wbFkzUXRaMjl3Y3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmIySnFaV04wTFdkd2J5NXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZiMkpxWldOMExXdGxlWE10YVc1MFpYSnVZV3d1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDI5aWFtVmpkQzFyWlhsekxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXZZbXBsWTNRdGNHbGxMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMTl3Y205d1pYSjBlUzFrWlhOakxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOXlaV1JsWm1sdVpTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZjMlYwTFhSdkxYTjBjbWx1WnkxMFlXY3Vhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12WTI5eVpTMXFjeTlzYVdKeVlYSjVMMjF2WkhWc1pYTXZYM05vWVhKbFpDMXJaWGt1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WDNOb1lYSmxaQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmYzNSeWFXNW5MV0YwTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXBibVJsZUM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OWpiM0psTFdwekwyeHBZbkpoY25rdmJXOWtkV3hsY3k5ZmRHOHRhVzUwWldkbGNpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjNKbExXcHpMMnhwWW5KaGNua3ZiVzlrZFd4bGN5OWZkRzh0YVc5aWFtVmpkQzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZEc4dGJHVnVaM1JvTG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDE5MGJ5MXZZbXBsWTNRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjl5WlMxcWN5OXNhV0p5WVhKNUwyMXZaSFZzWlhNdlgzUnZMWEJ5YVcxcGRHbDJaUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlmZFdsa0xtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Y21VdGFuTXZiR2xpY21GeWVTOXRiMlIxYkdWekwxOTNhM011YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXlaUzFxY3k5c2FXSnlZWEo1TDIxdlpIVnNaWE12WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0l0YldWMGFHOWtMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMk52Y21VdVoyVjBMV2wwWlhKaGRHOXlMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDJOdmNtVXRhbk12YkdsaWNtRnllUzl0YjJSMWJHVnpMMlZ6Tmk1aGNuSmhlUzVwZEdWeVlYUnZjaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlsY3pZdWIySnFaV04wTG1GemMybG5iaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5amIzSmxMV3B6TDJ4cFluSmhjbmt2Ylc5a2RXeGxjeTlsY3pZdWMzUnlhVzVuTG1sMFpYSmhkRzl5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwyTnZjbVV0YW5NdmJHbGljbUZ5ZVM5dGIyUjFiR1Z6TDNkbFlpNWtiMjB1YVhSbGNtRmliR1V1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdmNISnZZMlZ6Y3k5aWNtOTNjMlZ5TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwzRXZjUzVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5MmRXVXRhRzkwTFhKbGJHOWhaQzFoY0drdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3UVVORFFUczdPenRCUVVkQk96czdPMEZCUjBFN096czdRVUZIUVRzN096dEJRVWRCT3pzN096czdRVUZGUVRzN08wRkJUa0U3T3p0QlFVNUJPMEZCWVVFc1kwRkJTU3hIUVVGS096dEJRVVZCT3pzN1FVRk9RVHM3TzBGQlRrRTdRVUZPUVR0QlFXMUNRU3hyUWtGQlVUdEJRVU5LTEZGQlFVa3NUVUZFUVR0QlFVVktMR05CUVZVc1VVRkdUanRCUVVkS08wRkJRMEVzWjBKQlFWazdRVUZEVWl4alFVRk5MRTFCUkVVN1FVRkZVanRCUVVOQk8wRkJRMEU3UVVGS1VTeExRVXBTTzBGQlZVbzdRVUZEUVN4blFrRkJXVHRCUVVOU08wRkJSRkU3UVVGWVVpeERRVUZTT3pzN096czdPenM3T3pzN096czdPenRCUTJkRlFUczdPenM3T3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUmtFN1FVRklRVHRCUVVaQk8wRkJWMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVV4Qk8wRkJXa0U3UVVGdlFrRTdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFWQkJPMEZCVTBFN1FVRkRRVHRCUVVOQk8wRkJiRU5CT3pzN096dEJRWEJHUVR0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVR0QlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5uUWtFN096czdPenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGR1FUdEJRVXBCTzBGQlJFRTdRVUZYUVRzN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVNUJPMEZCVVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVEZDUVRzN096czdRVUZxUWtFN1FVRkJRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMEZCT3pzN08wRkJSVUU3T3pzN096dHJRa0ZGWlR0QlFVTllMR05CUkZjc2QwSkJRMU03UVVGQlFTeFpRVUZVTEVWQlFWTXNkVVZCUVVvc1JVRkJTVHM3UVVGRGFFSXNaVUZCVHl4WlFVRkZMRTlCUVVZc1EwRkJWU3hWUVVGRExFOUJRVVFzUlVGQlZTeE5RVUZXTEVWQlFYRkNPMEZCUTJ4RExHZENRVUZKTEZWQlFWVXNSVUZCWkRzN1FVRkVhME03UVVGQlFUdEJRVUZCT3p0QlFVRkJPMEZCUjJ4RExHZEZRVUZqTEcxQ1FVRlJMRTFCUVhSQ0xEUkhRVUU0UWp0QlFVRkJMSGRDUVVGeVFpeERRVUZ4UWpzN1FVRkRNVUlzZDBKQlFVa3NSVUZCUlN4TFFVRkdMRXRCUVZrc1JVRkJhRUlzUlVGQmIwSTdRVUZEYUVJc2EwTkJRVlVzUTBGQlZqdEJRVU5JTzBGQlEwbzdRVUZRYVVNN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZSYkVNc2IwSkJRVkVzVDBGQlVqdEJRVU5JTEZOQlZFMHNRMEZCVUR0QlFWVklPMEZCV2xVc1F6czdPenM3T3pzN096czdPenM3TzBGRFNtWTdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFFVRTdRVUZCUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRE5FSkJPenM3T3pzN08wRkJSMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVUkJPMEZCUmtFN1FVRk5RVHM3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJVRUU3UVVGVFFUdEJRVU5CTzBGQlEwRTdRVUZ3UWtFN096czdPMEZCT1VKQk8wRkJRVUU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CUVRzN096dEJRVVZCT3pzN096czdhMEpCUldVN1FVRkRXQ3hqUVVSWExIZENRVU5GTzBGQlExUXNXVUZCU1N4VlFVRlZMRVZCUVdRN1FVRkRRU3hsUVVGUExGbEJRVVVzVDBGQlJpeERRVUZWTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZc1JVRkJjVUk3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN08wRkJSV3hETEdkRlFVRmpMRzFDUVVGUkxFMUJRWFJDTERSSFFVRTRRanRCUVVGQkxIZENRVUZ5UWl4RFFVRnhRanM3UVVGRE1VSXNkMEpCUVVrc1YwRkJWeXhGUVVGbU96dEJRVVZCTERaQ1FVRlRMRXRCUVZRc1IwRkJhVUlzUlVGQlJTeExRVUZ1UWp0QlFVTkJMRFpDUVVGVExFbEJRVlFzUjBGQlowSXNSVUZCUlN4SlFVRnNRanRCUVVOQkxEWkNRVUZUTEVWQlFWUXNSMEZCWXl4RlFVRkZMRXRCUVdoQ096dEJRVVZCTERSQ1FVRlJMRWxCUVZJc1EwRkJZU3hSUVVGaU8wRkJRMGc3UVVGV2FVTTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGWmJFTXNiMEpCUVZFN1FVRkRTaXd5UWtGQlZ5eFBRVVJRTzBGQlJVb3NOa0pCUVdFc2JVSkJRVkVzU1VGQlVpeERRVUZoTzBGQlJuUkNMR0ZCUVZJN1FVRkpTQ3hUUVdoQ1RTeERRVUZRTzBGQmFVSklPMEZCY0VKVkxFTTdPenM3T3pzN08ydENRMHBCTEVOQlFVTTdRVUZEV2l4VlFVRk5MRk5CUkUwN1FVRkZXaXhsUVVGWExGRkJRVkVzTUVKQlFWSTdRVUZHUXl4RFFVRkVMRVZCUjFvN1FVRkRReXhWUVVGTkxGRkJSRkE3UVVGRlF5eGxRVUZYTEZGQlFWRXNlVUpCUVZJN1FVRkdXaXhEUVVoWkxFVkJUVm83UVVGRFF5eFZRVUZOTERKRFFVUlFPMEZCUlVNc1pVRkJWeXhSUVVGUkxHdERRVUZTTzBGQlJsb3NRMEZPV1N4RlFWTmFPMEZCUTBNc1ZVRkJUU3hYUVVSUU8wRkJSVU1zWlVGQlZ5eFJRVUZSTERSQ1FVRlNPMEZCUmxvc1EwRlVXU3hGUVZsYU8wRkJRME1zVlVGQlRTeHJRa0ZFVUR0QlFVVkRMR1ZCUVZjc1VVRkJVU3cwUWtGQlVqdEJRVVphTEVOQldsa3NRenM3T3pzN096czdPMEZEUVdZN096czdRVUZGUVRzN096czdPMnRDUVVWbE8wRkJRMWdzWTBGRVZ5eDNRa0ZEUlR0QlFVTlVMR1ZCUVU4c1dVRkJSU3hQUVVGR0xFTkJRVlVzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVml4RlFVRnhRanM3UVVGRmJFTXNiMEpCUVZFN1FVRkRTaXg1UWtGQlV5eHRRa0ZCVVN4TFFVUmlPMEZCUlVvc01FSkJRVlVzYlVKQlFWRTdRVUZHWkN4aFFVRlNPMEZCU1Vnc1UwRk9UU3hEUVVGUU8wRkJUMGc3UVVGVVZTeERPenM3T3pzN096dEJRMHBtTEVsQlFVa3NVMEZCVXl4RFFVRkRPMEZCUTFZc1YwRkJUeXhSUVVSSE8wRkJSVllzVlVGQlRTd3lSVUZHU1R0QlFVZFdMR3QzUlVGSVZUdEJRVEpFVml4alFVRlZPMEZCUTA0c1kwRkJUU3hOUVVSQk8wRkJSVTRzWTBGQlRUdEJRVVpCTzBGQk0wUkJMRU5CUVVRc1JVRXJSRlk3UVVGRFF5eFhRVUZQTEV0QlJGSTdRVUZGUXl4VlFVRk5MQ3RFUVVaUU8wRkJSME1zY1doQ1FVaEVPMEZCV1VNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFWcFlMRU5CTDBSVkxFVkJLMFZXTzBGQlEwTXNWMEZCVHl4TlFVUlNPMEZCUlVNc1ZVRkJUU3huUlVGR1VEdEJRVWRETEdsalFVaEVPMEZCVVVNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFWSllMRU5CTDBWVkxFVkJNa1pXTzBGQlEwTXNWMEZCVHl4WlFVUlNPMEZCUlVNc1ZVRkJUU3h0UlVGR1VEdEJRVWRETEhsbVFVaEVPMEZCWVVNc1kwRkJWVHRCUVVOT0xHTkJRVTBzVFVGRVFUdEJRVVZPTEdOQlFVMDdRVUZHUVR0QlFXSllMRU5CTTBaVkxFVkJORWRXTzBGQlEwTXNWMEZCVHl4UFFVUlNPMEZCUlVNc1ZVRkJUU3d5UlVGR1VEdEJRVWRETEdsMlMwRklSRHRCUVRKRFF5eGpRVUZWTzBGQlEwNHNZMEZCVFN4TlFVUkJPMEZCUlU0c1kwRkJUVHRCUVVaQk8wRkJNME5ZTEVOQk5VZFZMRVZCTWtwV08wRkJRME1zVjBGQlR5eGhRVVJTTzBGQlJVTXNWVUZCVFN4M1JVRkdVRHRCUVVkRExEaGlRVWhFTzBGQlNVTXNZMEZCVlR0QlFVTk9MR05CUVUwc1RVRkVRVHRCUVVWT0xHTkJRVTA3UVVGR1FUdEJRVXBZTEVOQk0wcFZMRU5CUVdJN08wRkJjVXRCTEVsQlFVa3NVVUZCVVR0QlFVTlNMR0ZCUVZNc2FVSkJSRVE3UVVGRlVpeGxRVUZYTzBGQlExQXNaVUZCVHl3eVFrRkVRVHRCUVVWUUxHbENRVUZUTERaR1FVWkdPMEZCUjFBc1owSkJRVkU3UVVGRFNpdzJSRUZFU1R0QlFVVktMR3RDUVVGTk8wRkJSa1k3UVVGSVJEdEJRVVpJTEVOQlFWbzdPMEZCV1VFc1NVRkJTU3hQUVVGUE8wRkJRMUFzWlVGQlZ6dEJRVU5RTEdWQlFVOHNXVUZFUVR0QlFVVlFMR2xDUVVGVExEUkNRVVpHTzBGQlIxQXNaMEpCUVZFN1FVRkRTaXhyUWtGQlRTeFJRVVJHTzBGQlJVb3NhMEpCUVUwN1FVRkdSanRCUVVoRU8wRkJSRW9zUTBGQldEczdRVUZYUVN4SlFVRkpMRk5CUVZNN1FVRkRWQ3hqUVVGVkxIRkNRVVJFT3p0QlFVZFVMRk5CUVVzc1EwRkJRenRCUVVOR0xHTkJRVTBzVTBGRVNqdEJRVVZHTEdOQlFVMDdRVUZHU2l4TFFVRkVMRVZCUjBZN1FVRkRReXhqUVVGTkxFMUJSRkE3UVVGRlF5eGpRVUZOTzBGQlJsQXNTMEZJUlN4RlFVMUdPMEZCUTBNc1kwRkJUU3hoUVVSUU8wRkJSVU1zWTBGQlRUdEJRVVpRTEV0QlRrVXNSVUZUUmp0QlFVTkRMR05CUVUwc1QwRkVVRHRCUVVWRExHTkJRVTA3UVVGR1VDeExRVlJGTEVOQlNFazdRVUZuUWxRc1ZVRkJUU3cyUkVGb1FrYzdRVUZwUWxRc1owSkJRVms3UVVGcVFrZ3NRMEZCWWpzN2EwSkJiMEpsTzBGQlExZ3NZVUZCVXl4TFFVUkZPMEZCUlZnc1dVRkJVU3hKUVVaSE8wRkJSMWdzWTBGQlZTeE5RVWhETzBGQlNWZ3NZMEZCVlR0QlFVcERMRU03T3p0QlEyaE9aanM3UVVOQlFUczdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRM1JDUVR0QlFVTkJPMEZCUTBFN08wRkRSa0U3UVVGRFFUczdRVU5FUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVOSVFUczdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMHBCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTndRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTjBRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTktRVHRCUVVOQk96dEJRMFJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEYmtKQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEU2tFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRTRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkROVVJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTBoQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEwaEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVUVFN08wRkRRVUU3UVVGRFFUdEJRVU5CT3p0QlEwWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFNrRTdRVUZEUVR0QlFVTkJPenRCUTBaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlExcEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlEzSkZRVHRCUVVOQk8wRkJRMEU3TzBGRFJrRTdPMEZEUVVFN08wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTJoRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRla05CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMlpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFwQk96dEJRMEZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTFwQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRhRUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMDVCT3p0QlEwRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVUVFN08wRkRRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTktRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTm9Ra0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRUa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUTB4Qk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTk1RVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkRXRUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVTktRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFVFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRFRrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGFrTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMGhCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGRGFFSkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRMXBCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVTndURUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3TzBGRGFHZEZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnWlNoMExHNHNjaWw3Wm5WdVkzUnBiMjRnY3lodkxIVXBlMmxtS0NGdVcyOWRLWHRwWmlnaGRGdHZYU2w3ZG1GeUlHRTlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRwWmlnaGRTWW1ZU2x5WlhSMWNtNGdZU2h2TENFd0tUdHBaaWhwS1hKbGRIVnliaUJwS0c4c0lUQXBPM1poY2lCbVBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmJ5dGNJaWRjSWlrN2RHaHliM2NnWmk1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdaOWRtRnlJR3c5Ymx0dlhUMTdaWGh3YjNKMGN6cDdmWDA3ZEZ0dlhWc3dYUzVqWVd4c0tHd3VaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaGxLWHQyWVhJZ2JqMTBXMjlkV3pGZFcyVmRPM0psZEhWeWJpQnpLRzQvYmpwbEtYMHNiQ3hzTG1WNGNHOXlkSE1zWlN4MExHNHNjaWw5Y21WMGRYSnVJRzViYjEwdVpYaHdiM0owYzMxMllYSWdhVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJadmNpaDJZWElnYnowd08yODhjaTVzWlc1bmRHZzdieXNyS1hNb2NsdHZYU2s3Y21WMGRYSnVJSE45S1NJc0lpOHZJRWx0Y0c5eWRDQldkV1ZjY2x4dWFXMXdiM0owSUZaMVpTQm1jbTl0SUNkMmRXVW5YSEpjYmx4eVhHNHZMeUJKYlhCdmNuUWdSamRjY2x4dWFXMXdiM0owSUVaeVlXMWxkMjl5YXpjZ1puSnZiU0FuWm5KaGJXVjNiM0pyTnlkY2NseHVYSEpjYmk4dklFbHRjRzl5ZENCR055QldkV1VnVUd4MVoybHVYSEpjYm1sdGNHOXlkQ0JHY21GdFpYZHZjbXMzVm5WbElHWnliMjBnSjJaeVlXMWxkMjl5YXpjdGRuVmxKMXh5WEc1Y2NseHVMeThnU1cxd2IzSjBJRkp2ZFhSbGMxeHlYRzVwYlhCdmNuUWdVbTkxZEdWeklHWnliMjBnSnk0dmNtOTFkR1Z6TG1wekoxeHlYRzVjY2x4dUx5OGdTVzF3YjNKMElFRndjQ0JEYjIxd2IyNWxiblJjY2x4dWFXMXdiM0owSUVGd2NDQm1jbTl0SUNjdUwybHVaR1Y0TG5aMVpTZGNjbHh1WEhKY2JpOHZJRWx1YVhRZ1JqY2dWblZsSUZCc2RXZHBibHh5WEc1V2RXVXVkWE5sS0VaeVlXMWxkMjl5YXpkV2RXVXBYSEpjYmx4eVhHNHZMeUJKYm1sMElFRndjRnh5WEc1dVpYY2dWblZsS0h0Y2NseHVJQ0FnSUdWc09pQW5JMkZ3Y0Njc1hISmNiaUFnSUNCMFpXMXdiR0YwWlRvZ0p6eGhjSEF2UGljc1hISmNiaUFnSUNBdkx5QkpibWwwSUVaeVlXMWxkMjl5YXpjZ1lua2djR0Z6YzJsdVp5QndZWEpoYldWMFpYSnpJR2hsY21WY2NseHVJQ0FnSUdaeVlXMWxkMjl5YXpjNklIdGNjbHh1SUNBZ0lDQWdJQ0J5YjI5ME9pQW5JMkZ3Y0Njc1hISmNiaUFnSUNBZ0lDQWdMeW9nVlc1amIyMXRaVzUwSUhSdklHVnVZV0pzWlNCTllYUmxjbWxoYkNCMGFHVnRaVG9nS2k5Y2NseHVJQ0FnSUNBZ0lDQXZMeUJ0WVhSbGNtbGhiRG9nZEhKMVpTeGNjbHh1SUNBZ0lDQWdJQ0J5YjNWMFpYTTZJRkp2ZFhSbGN5eGNjbHh1SUNBZ0lIMHNYSEpjYmlBZ0lDQXZMeUJTWldkcGMzUmxjaUJCY0hBZ1EyOXRjRzl1Wlc1MFhISmNiaUFnSUNCamIyMXdiMjVsYm5Sek9pQjdYSEpjYmlBZ0lDQWdJQ0FnWVhCd09pQkJjSEJjY2x4dUlDQWdJSDFjY2x4dWZTazdYSEpjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnSUNBOElTMHRJRUZ3Y0NBdExUNWNiaUFnSUNBOFpHbDJJR2xrUFZ3aVlYQndYQ0krWEc0Z0lDQWdJQ0FnSUR3aExTMGdVM1JoZEhWelltRnlJQzB0UGx4dUlDQWdJQ0FnSUNBOFpqY3RjM1JoZEhWelltRnlQand2WmpjdGMzUmhkSFZ6WW1GeVBseHVJQ0FnSUNBZ0lDQThJUzB0SUZKcFoyaDBJRkJoYm1Wc0lDMHRQbHh1SUNBZ0lDQWdJQ0E4WmpjdGNHRnVaV3dnY21sbmFIUWdZMjkyWlhJZ2JHRjViM1YwUFZ3aVpHRnlhMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQR1kzTFhacFpYY2dhV1E5WENKeWFXZG9kQzF3WVc1bGJDMTJhV1YzWENJZ2JtRjJZbUZ5TFhSb2NtOTFaMmdnT21SNWJtRnRhV010Ym1GMlltRnlQVndpZEhKMVpWd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxdVlYWmlZWElnZGkxcFpqMWNJaVIwYUdWdFpTNXBiM05jSWlCMGFYUnNaVDFjSWtaRld1V3Z2T2lJcWx3aUlITnNhV1JwYm1jK1BDOW1OeTF1WVhaaVlYSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFhCaFoyVnpQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpqY3RjR0ZuWlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bU55MXVZWFppWVhJZ2RpMXBaajFjSWlSMGFHVnRaUzV0WVhSbGNtbGhiRndpSUhScGRHeGxQVndpUmtWYTVhKzg2SWlxWENJZ2MyeHBaR2x1Wno0OEwyWTNMVzVoZG1KaGNqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG1OeTFzYVhOMFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxc2FYTjBMV2wwWlcwZ2RpMW1iM0k5WENKcGRHVnRJR2x1SUdOdmJXMXZiaTV1WVhaY0lpQTZiR2x1YXoxY0ltbDBaVzB1YUhKbFpsd2lJRHAwYVhSc1pUMWNJbWwwWlcwdWJtRnRaVndpSUd4cGJtc3RkbWxsZHoxY0lpTnRZV2x1TFhacFpYZGNJaUJzYVc1ckxXTnNiM05sTFhCaGJtVnNQand2WmpjdGJHbHpkQzFwZEdWdFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOW1OeTFzYVhOMFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJZM0xYQmhaMlUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5bU55MXdZV2RsY3o1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WmpjdGRtbGxkejVjYmlBZ0lDQWdJQ0FnUEM5bU55MXdZVzVsYkQ1Y2JpQWdJQ0FnSUNBZ1BDRXRMU0JOWVdsdUlGWnBaWGR6SUMwdFBseHVJQ0FnSUNBZ0lDQThaamN0ZG1sbGQzTStYRzRnSUNBZ0lDQWdJQ0FnSUNBOFpqY3RkbWxsZHlCcFpEMWNJbTFoYVc0dGRtbGxkMXdpSUc1aGRtSmhjaTEwYUhKdmRXZG9JRHBrZVc1aGJXbGpMVzVoZG1KaGNqMWNJblJ5ZFdWY0lpQnRZV2x1UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3aExTMGdhVTlUSUZSb1pXMWxJRTVoZG1KaGNpQXRMVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WmpjdGJtRjJZbUZ5SUhZdGFXWTlYQ0lrZEdobGJXVXVhVzl6WENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxdVlYWXRZMlZ1ZEdWeUlITnNhV1JwYm1jK2UzdGpiMjF0YjI0dWMybDBaVTVoYldWOWZUd3ZaamN0Ym1GMkxXTmxiblJsY2o1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFc1aGRpMXlhV2RvZEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bU55MXNhVzVySUdsamIyNDlYQ0pwWTI5dUxXSmhjbk5jSWlCdmNHVnVMWEJoYm1Wc1BWd2ljbWxuYUhSY0lqNDhMMlkzTFd4cGJtcytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpqY3RibUYyTFhKcFoyaDBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2WmpjdGJtRjJZbUZ5UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3aExTMGdVR0ZuWlhNZ0xTMCtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFhCaFoyVnpQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFpqY3RjR0ZuWlQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3aExTMGdUV0YwWlhKcFlXd2dWR2hsYldVZ1RtRjJZbUZ5SUMwdFBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHWTNMVzVoZG1KaGNpQjJMV2xtUFZ3aUpIUm9aVzFsTG0xaGRHVnlhV0ZzWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFc1aGRpMXNaV1owUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WmpjdGJHbHVheUJwWTI5dVBWd2lhV052YmkxaVlYSnpYQ0lnYjNCbGJpMXdZVzVsYkQxY0lteGxablJjSWo0OEwyWTNMV3hwYm1zK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzltTnkxdVlYWXRiR1ZtZEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaamN0Ym1GMkxXTmxiblJsY2lCemJHbGthVzVuUGtaeVlXMWxkMjl5YXpjOEwyWTNMVzVoZGkxalpXNTBaWEkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHWTNMVzVoZGkxeWFXZG9kRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFd4cGJtc2dhV052YmoxY0ltbGpiMjR0WW1GeWMxd2lJRzl3Wlc0dGNHRnVaV3c5WENKeWFXZG9kRndpUGp3dlpqY3RiR2x1YXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlkzTFc1aGRpMXlhV2RvZEQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpqY3RibUYyWW1GeVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHWTNMV0pzYjJOckxYUnBkR3hsUG50N2FXNWtaWGd1YW5WdFltOTBjbTl1TG5ScGRHeGxmWDA4TDJZM0xXSnNiMk5yTFhScGRHeGxQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFdKc2IyTnJJR2x1Ym1WeVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh3UG50N2FXNWtaWGd1YW5WdFltOTBjbTl1TG1OdmJuUmxiblI5ZlR3dmNENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaamN0WW14dlkycytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaamN0WTJGeVpENWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WmpjdFkyRnlaQzFvWldGa1pYSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIdDdhVzVrWlhndVptVjZaR1Z6WTMxOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzltTnkxallYSmtMV2hsWVdSbGNqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WmpjdFkyRnlaQzFqYjI1MFpXNTBQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpWm1WNkxYQnBZMXdpUGp3dlpHbDJQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlpqY3RZMkZ5WkMxamIyNTBaVzUwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5bU55MWpZWEprUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdZM0xXeHBjM1ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHWTNMV3hwYzNRdGFYUmxiU0IyTFdadmNqMWNJbWwwWlcwZ2FXNGdZMjl0Ylc5dUxtNWhkbHdpSURwc2FXNXJQVndpYVhSbGJTNW9jbVZtWENJZ09uUnBkR3hsUFZ3aWFYUmxiUzV1WVcxbFhDSWdiR2x1YXkxMmFXVjNQVndpSTIxaGFXNHRkbWxsZDF3aUlHeHBibXN0WTJ4dmMyVXRjR0Z1Wld3K1BDOW1OeTFzYVhOMExXbDBaVzArWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJZM0xXeHBjM1ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WmpjdFlteHZZMnN0ZEdsMGJHVSs1cHUwNWFTYTVMK2g1b0d2UEM5bU55MWliRzlqYXkxMGFYUnNaVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxaWJHOWpheUJwYm01bGNqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0Q1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdZM0xXeHBibXNnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltZFhKcFl5MTZhR0Z2TDJabGVsd2lJR1Y0ZEdWeWJtRnNJSFJoY21kbGREMWNJbDlpYkdGdWExd2lJR05zWVhOelBWd2lZblYwZEc5dVhDSStSa1ZhSUVkcGRHaDFZdWVrdnVXTXVqd3ZaamN0YkdsdWF6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxc2FXNXJJR2h5WldZOVhDSm9kSFJ3T2k4dlpuSmhiV1YzYjNKck55NWpiaTljSWlCbGVIUmxjbTVoYkNCMFlYSm5aWFE5WENKZllteGhibXRjSWlCamJHRnpjejFjSW1KMWRIUnZibHdpUGtaeVlXMWxkMjl5YXpjZzVMaXQ1cGFINTcyUlBDOW1OeTFzYVc1clBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Y0Q1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR1kzTFd4cGJtc2dhSEpsWmoxY0ltaDBkSEJ6T2k4dlkyNHVkblZsYW5NdWIzSm5MMXdpSUdWNGRHVnlibUZzSUhSaGNtZGxkRDFjSWw5aWJHRnVhMXdpSUdOc1lYTnpQVndpWW5WMGRHOXVYQ0krVm5WbElPUzRyZWFXaCtlOWtUd3ZaamN0YkdsdWF6NWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxc2FXNXJJR2h5WldZOVhDSm9kSFJ3T2k4dmRuVmxMbVp5WVcxbGQyOXlhemN1WTI0dlhDSWdaWGgwWlhKdVlXd2dkR0Z5WjJWMFBWd2lYMkpzWVc1clhDSWdZMnhoYzNNOVhDSmlkWFIwYjI1Y0lqNUdjbUZ0WlhkdmNtczNMVloxWlR3dlpqY3RiR2x1YXo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJZM0xXSnNiMk5yUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdZM0xXSnNiMk5yUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdQbnQ3WTI5dGJXOXVMblJwY0hOOWZUd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGNENTdlMk52YlcxdmJpNW1iMjkwWlhKVVpYaDBmWDA4TDNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyWTNMV0pzYjJOclBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJZM0xYQmhaMlUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5bU55MXdZV2RsY3o1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2WmpjdGRtbGxkejVjYmlBZ0lDQWdJQ0FnUEM5bU55MTJhV1YzY3o1Y2JpQWdJQ0E4TDJScGRqNWNiand2ZEdWdGNHeGhkR1UrWEc0OGMyTnlhWEIwUGx4dWFXMXdiM0owSUZObGNuWnBZMlVnWm5KdmJTQW5MaTl6WlhKMmFXTmxKMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmhkR0VvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1WkdWNE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdabGVtUmxjMk02SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdwMWJXSnZkSEp2YmpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWlc1ME9pQmNJbHdpTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVG9nWENKY0lpeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvY21WbU9pQmNJbHdpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052YlcxdmJqb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFYUmxUbUZ0WlRvZ1hDSmNJaXhjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZWFpFWVhSaE9pQmJYU3hjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjkwWlhKVVpYaDBPaUJjSWx3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQnRaWFJvYjJSek9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJtUmxlRWx1YVhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCZmRtMGdQU0IwYUdselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1UyVnlkbWxqWlM1eVpXNWtaWEpFWVhSaEtDa3VkR2hsYmlnb1pHRjBZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmZG0wdWFXNWtaWGdnUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCa1lYUmhMbWx1WkdWNEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JmZG0wdVkyOXRiVzl1SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHRjBZUzVqYjIxdGIyNHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWTNKbFlYUmxaQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFXNWtaWGhKYm1sMEtDbGNiaUFnSUNBZ0lDQWdmVnh1ZlZ4dVBDOXpZM0pwY0hRK1hHNGlMQ0k4ZEdWdGNHeGhkR1UrWEc0Z0lDQWdQR1kzTFhCaFoyVStYRzRnSUNBZ0lDQWdJRHhtTnkxdVlYWmlZWElnZEdsMGJHVTlYQ0xsaGJQa3VvNUdSVnBjSWlCaVlXTnJMV3hwYm1zOVhDSkNZV05yWENJZ2MyeHBaR2x1Wno0OEwyWTNMVzVoZG1KaGNqNWNiaUFnSUNBZ0lDQWdQR1kzTFdKc2IyTnJMWFJwZEd4bFB1V0ZzK1M2amtaRldqd3ZaamN0WW14dlkyc3RkR2wwYkdVK1hHNGdJQ0FnSUNBZ0lEeG1OeTFpYkc5amF5QnBibTVsY2o1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKbVpYb3RjR2xqWENJK1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQThjRDVHUlZvZzVwaXY2WjJpNVpDUklPV0pqZWVycithb29lV2RsK1dNbHVXM3BlZW9peURubW9UbHZJRGxqNUhtb1libW5yYmpnSUxrdUx2b3BvSGt1THJvcDZQbGhyTWc1WW1ONTZ1djVieUE1WStSNWFTYTVMcTY2YXVZNXBXSTVZMlA1TDJjNDRDQjVvK1E2YXVZNWJ5QTVZK1I2TFNvNlllUDQ0Q0I1WStLNmFHNTU1dXU1WXFmNklPOTVvbXA1YkdWNTVxRTViK3I2WUNmNkwrdDVMdWo1WktNNVkrdjU3dTA1b3FrNW9DbjU2Mko2WmV1NmFLWTQ0Q0M1cUM0NWIrRDVZeUY1b3VzNVlxZjZJTzk1cWloNVoyWDVZeVc0NENCNTd1VDVwNkU2S2VFNkl5RDVZeVc0NENCNVkrSzVieUE1WStSNkllcTVZcW81WXlXNDRDQ1BDOXdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIQStSa1htbUsvaWdKeG1jbTl1ZENCbGJtVGlnSjNwcHBibHJaZm1yNDN2dkl4YTVwaXY0b0NjNkllcTVZcW81WXlXNG9DZDZhYVc1b3U4NlorejVhMlg1cStONzd5TVJrVmFJT2FFaitTNHV1S0FuT1dKamVlcnIraUhxdVdLcU9XTWx1S0FuZU9BZ3Vpd2tPbWZzK0tBbk9XVm9lYUFuZUtBbmUrOGpPYUVqK1dXdStLQW5PV1duZWVkZ09XU2x1V1ZvZSs4ak9TNGsrYXpxT2FBbmVpQWcrS0FuZU9BZ3VpdXFlV0pqZWVycitXOGdPV1BrZVdCbk9hdG91V2twK21IaitlNWdlYWRndWVhaE9hSmkrVzNwZVdLcytTOW5PKzhqT2FidE9TNGsrYXpxT1M2anVTNG11V0tvZW1BdStpK2tlKzhnZWl3a09tZnMrV1BpT2l2dStLQW5PV0lodWF5dStLQW5lKzhqT1M5aytlT3NPYW9vZVdkbCtXTWx1VzhnT1dQa2VlUWh1Vy90ZSs4Z1R3dmNENWNiaUFnSUNBZ0lDQWdQQzltTnkxaWJHOWphejVjYmlBZ0lDQThMMlkzTFhCaFoyVStYRzQ4TDNSbGJYQnNZWFJsUGx4dVBITmpjbWx3ZEQ1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0OVhHNDhMM05qY21sd2RENWNiaUlzSWp4MFpXMXdiR0YwWlQ1Y2JpQWdJQ0E4WmpjdGNHRm5aVDVjYmlBZ0lDQWdJQ0FnUEdZM0xXNWhkbUpoY2lBNmRHbDBiR1U5WENKa1pYUmhhV3d1ZEdsMGJHVmNJaUJpWVdOckxXeHBibXM5WENKQ1lXTnJYQ0lnYzJ4cFpHbHVaejQ4TDJZM0xXNWhkbUpoY2o1Y2JpQWdJQ0FnSUNBZ1BHWTNMV0pzYjJOckxYUnBkR3hsUGtobGJHeHZJSHQ3WkdWMFlXbHNMblJwZEd4bGZYMGhQQzltTnkxaWJHOWpheTEwYVhSc1pUNWNiaUFnSUNBZ0lDQWdQR1kzTFdKc2IyTnJJR2x1Ym1WeVBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEhBK2UzdGtaWFJoYVd3dVpHVnpZMzE5UEM5d1BseHVJQ0FnSUNBZ0lDQThMMlkzTFdKc2IyTnJQbHh1SUNBZ0lDQWdJQ0E4WmpjdFlteHZZMnNnYVc1dVpYSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOGNDQjJMV2gwYld3OVhDSmtaWFJoYVd3dVkyOXVkR1Z1ZEZ3aVBqd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxc2FXNXJJRHBvY21WbVBWd2laR1YwWVdsc0xuWnBaWGROYjNKbExtaHlaV1pjSWlCbGVIUmxjbTVoYkNCMFlYSm5aWFE5WENKZllteGhibXRjSWlCamJHRnpjejFjSW1KMWRIUnZibHdpUG50N1pHVjBZV2xzTG5acFpYZE5iM0psTG5SbGVIUjlmVHd2WmpjdGJHbHVhejVjYmlBZ0lDQWdJQ0FnSUNBZ0lEd3ZjRDVjYmlBZ0lDQWdJQ0FnUEM5bU55MWliRzlqYXo1Y2JpQWdJQ0E4TDJZM0xYQmhaMlUrWEc0OEwzUmxiWEJzWVhSbFBseHVQSE5qY21sd2RENWNibWx0Y0c5eWRDQlRaWEoyYVdObElHWnliMjBnSnk0dmMyVnlkbWxqWlNkY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWVhSaEtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pYUmhhV3c2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2wwYkdVNklGd2lYQ0lzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxjMk02SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmxiblE2SUZ3aVhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhacFpYZE5iM0psT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMFpYaDBPaUJjSWx3aUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FISmxaam9nWENKY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCdFpYUm9iMlJ6T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JxZFcxaWIzUnliMjQ2SUdaMWJtTjBhVzl1S0dsa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUY5MmJTQTlJSFJvYVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCVFpYSjJhV05sTG5KbGJtUmxja1JoZEdFb2FXUXBMblJvWlc0b0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWDNadExtUmxkR0ZwYkNBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lHUmhkR0VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ1kzSmxZWFJsWkNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQmZkbTBnUFNCMGFHbHpYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhV1FnUFNCZmRtMHVKSEp2ZFhSbExuQmhjbUZ0Y3k1cFpGeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXFkVzFpYjNSeWIyNG9hV1FwWEc0Z0lDQWdJQ0FnSUgxY2JuMWNiand2YzJOeWFYQjBQbHh1SWl3aWFXMXdiM0owSUVGd2FVUmhkR0VnWm5KdmJTQW5jSFZpYkdsakwyUmxiVzh0WkdGMFlTZGNibHh1YVcxd2IzSjBJRkVnWm5KdmJTQW5jU2RjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJSEpsYm1SbGNrUmhkR0VvYVdRZ1BTQmNJbHdpS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCUkxsQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEowYmtSaGRHRWdQU0I3ZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0IySUc5bUlFRndhVVJoZEdFdVpuSmhiV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFl1ZEdsMGJHVWdQVDA5SUdsa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMGJrUmhkR0VnUFNCMlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaHlkRzVFWVhSaEtWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNibjFjYmlJc0lqeDBaVzF3YkdGMFpUNWNiaUFnUEdZM0xYQmhaMlUrWEc0Z0lDQWdQR1kzTFc1aGRtSmhjaUIwYVhSc1pUMWNJbEpGVTFUcG80N21vTHpubW9UbGlxam1nSUhvdDYvbmxMRmNJaUJpWVdOckxXeHBibXM5WENKQ1lXTnJYQ0lnYzJ4cFpHbHVaejQ4TDJZM0xXNWhkbUpoY2o1Y2JpQWdJQ0E4WmpjdFlteHZZMnNnYVc1dVpYSStYRzRnSUNBZ0lDQThkV3crWEc0Z0lDQWdJQ0FnSUR4c2FUNDhZajVWY213NlBDOWlQaUI3ZXlSeWIzVjBaUzUxY214OWZUd3ZiR2srWEc0Z0lDQWdJQ0FnSUR4c2FUNDhZajVRWVhSb09qd3ZZajRnZTNza2NtOTFkR1V1Y0dGMGFIMTlQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ1BHeHBQanhpUGtoaGMyZzZQQzlpUGlCN2V5UnliM1YwWlM1b1lYTm9mWDA4TDJ4cFBseHVJQ0FnSUNBZ0lDQThiR2srUEdJK1VHRnlZVzF6T2p3dllqNWNiaUFnSUNBZ0lDQWdJQ0E4ZFd3K1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4YkdrZ2RpMW1iM0k5WENJb2RtRnNkV1VzSUd0bGVTa2dhVzRnSkhKdmRYUmxMbkJoY21GdGMxd2lQanhpUG50N2EyVjVmWDA2UEM5aVBpQjdlM1poYkhWbGZYMDhMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZkV3crWEc0Z0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJRHhzYVQ0OFlqNVJkV1Z5ZVRvOEwySStYRzRnSUNBZ0lDQWdJQ0FnUEhWc1BseHVJQ0FnSUNBZ0lDQWdJQ0FnUEd4cElIWXRabTl5UFZ3aUtIWmhiSFZsTENCclpYa3BJR2x1SUNSeWIzVjBaUzV4ZFdWeWVWd2lQanhpUG50N2EyVjVmWDA2UEM5aVBpQjdlM1poYkhWbGZYMDhMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lEd3ZkV3crWEc0Z0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJRHhzYVQ0OFlqNVNiM1YwWlRvOEwySStJSHQ3SkhKdmRYUmxMbkp2ZFhSbGZYMDhMMnhwUGx4dUlDQWdJQ0FnUEM5MWJENWNiaUFnSUNBOEwyWTNMV0pzYjJOclBseHVJQ0FnSUR4bU55MWliRzlqYXlCcGJtNWxjajVjYmlBZ0lDQWdJRHhtTnkxc2FXNXJJRUJqYkdsamF6MWNJaVJ5YjNWMFpYSXVZbUZqYXlncFhDSStSMjhnWW1GamF5QjJhV0VnVW05MWRHVnlJRUZRU1R3dlpqY3RiR2x1YXo1Y2JpQWdJQ0E4TDJZM0xXSnNiMk5yUGx4dVhHNGdJRHd2WmpjdGNHRm5aVDVjYmp3dmRHVnRjR3hoZEdVK1hHNWNianh6WTNKcGNIUStYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdmVnh1UEM5elkzSnBjSFErSWl3aVBIUmxiWEJzWVhSbFBseHVJQ0E4WmpjdGNHRm5aVDVjYmlBZ0lDQThaamN0Ym1GMlltRnlJSFJwZEd4bFBWd2k2S0dvNVkyVjU2UzY1TDZMWENJZ1ltRmpheTFzYVc1clBWd2lRbUZqYTF3aUlITnNhV1JwYm1jK1BDOW1OeTF1WVhaaVlYSStYRzRnSUNBZ1BHWTNMV0pzYjJOckxYUnBkR3hsUGtadmNtMDhMMlkzTFdKc2IyTnJMWFJwZEd4bFBseHVJQ0FnSUR4bU55MXNhWE4wSUdadmNtMCtYRzRnSUNBZ0lDQThaamN0YkdsemRDMXBkR1Z0UGx4dUlDQWdJQ0FnSUNBOFpqY3RiR0ZpWld3K1RtRnRaVHd2WmpjdGJHRmlaV3crWEc0Z0lDQWdJQ0FnSUR4bU55MXBibkIxZENCMGVYQmxQVndpZEdWNGRGd2lJSEJzWVdObGFHOXNaR1Z5UFZ3aVRtRnRaVndpUGp3dlpqY3RhVzV3ZFhRK1hHNGdJQ0FnSUNBOEwyWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQWdJRHhtTnkxc2FYTjBMV2wwWlcwK1hHNGdJQ0FnSUNBZ0lEeG1OeTFzWVdKbGJENVFZWE56ZDI5eVpEd3ZaamN0YkdGaVpXdytYRzRnSUNBZ0lDQWdJRHhtTnkxcGJuQjFkQ0IwZVhCbFBWd2ljR0Z6YzNkdmNtUmNJaUJ3YkdGalpXaHZiR1JsY2oxY0lsQmhjM04zYjNKa1hDSStQQzltTnkxcGJuQjFkRDVjYmlBZ0lDQWdJRHd2WmpjdGJHbHpkQzFwZEdWdFBseHVJQ0FnSUNBZ1BHWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQWdJQ0FnUEdZM0xXeGhZbVZzUGtVdGJXRnBiRHd2WmpjdGJHRmlaV3crWEc0Z0lDQWdJQ0FnSUR4bU55MXBibkIxZENCMGVYQmxQVndpWlcxaGFXeGNJaUJ3YkdGalpXaHZiR1JsY2oxY0lrVXRiV0ZwYkZ3aVBqd3ZaamN0YVc1d2RYUStYRzRnSUNBZ0lDQThMMlkzTFd4cGMzUXRhWFJsYlQ1Y2JpQWdJQ0FnSUR4bU55MXNhWE4wTFdsMFpXMCtYRzRnSUNBZ0lDQWdJRHhtTnkxc1lXSmxiRDVWVWt3OEwyWTNMV3hoWW1Wc1BseHVJQ0FnSUNBZ0lDQThaamN0YVc1d2RYUWdkSGx3WlQxY0luVnliRndpSUhCc1lXTmxhRzlzWkdWeVBWd2lWVkpNWENJK1BDOW1OeTFwYm5CMWRENWNiaUFnSUNBZ0lEd3ZaamN0YkdsemRDMXBkR1Z0UGx4dUlDQWdJQ0FnUEdZM0xXeHBjM1F0YVhSbGJUNWNiaUFnSUNBZ0lDQWdQR1kzTFd4aFltVnNQbEJvYjI1bFBDOW1OeTFzWVdKbGJENWNiaUFnSUNBZ0lDQWdQR1kzTFdsdWNIVjBJSFI1Y0dVOVhDSjBaV3hjSWlCd2JHRmpaV2h2YkdSbGNqMWNJbEJvYjI1bFhDSStQQzltTnkxcGJuQjFkRDVjYmlBZ0lDQWdJRHd2WmpjdGJHbHpkQzFwZEdWdFBseHVJQ0FnSUNBZ1BHWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQWdJQ0FnUEdZM0xXeGhZbVZzUGtKcGNuUm9JR1JoZEdVOEwyWTNMV3hoWW1Wc1BseHVJQ0FnSUNBZ0lDQThaamN0YVc1d2RYUWdkSGx3WlQxY0ltUmhkR1ZjSWlCd2JHRmpaV2h2YkdSbGNqMWNJa0pwY25Sb0lHUmhkR1ZjSWlCMllXeDFaVDFjSWpJd01UUXRNRFF0TXpCY0lqNDhMMlkzTFdsdWNIVjBQbHh1SUNBZ0lDQWdQQzltTnkxc2FYTjBMV2wwWlcwK1hHNGdJQ0FnSUNBOFpqY3RiR2x6ZEMxcGRHVnRQbHh1SUNBZ0lDQWdJQ0E4WmpjdGJHRmlaV3crUkdGMFpTQjBhVzFsUEM5bU55MXNZV0psYkQ1Y2JpQWdJQ0FnSUNBZ1BHWTNMV2x1Y0hWMElIUjVjR1U5WENKa1lYUmxkR2x0WlMxc2IyTmhiRndpUGp3dlpqY3RhVzV3ZFhRK1hHNGdJQ0FnSUNBOEwyWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQWdJRHhtTnkxc2FYTjBMV2wwWlcwK1hHNGdJQ0FnSUNBZ0lEeG1OeTFzWVdKbGJENUhaVzVrWlhJOEwyWTNMV3hoWW1Wc1BseHVJQ0FnSUNBZ0lDQThaamN0YVc1d2RYUWdkSGx3WlQxY0luTmxiR1ZqZEZ3aVBseHVJQ0FnSUNBZ0lDQWdJRHh2Y0hScGIyNGdkbUZzZFdVOVhDSXhYQ0krVFdGc1pUd3ZiM0IwYVc5dVBseHVJQ0FnSUNBZ0lDQWdJRHh2Y0hScGIyNGdkbUZzZFdVOVhDSXhYQ0krUm1WdFlXeGxQQzl2Y0hScGIyNCtYRzRnSUNBZ0lDQWdJRHd2WmpjdGFXNXdkWFErWEc0Z0lDQWdJQ0E4TDJZM0xXeHBjM1F0YVhSbGJUNWNiaUFnSUNBZ0lEeG1OeTFzYVhOMExXbDBaVzArWEc0Z0lDQWdJQ0FnSUR4bU55MXNZV0psYkQ1VGQybDBZMmc4TDJZM0xXeGhZbVZzUGx4dUlDQWdJQ0FnSUNBOFpqY3RhVzV3ZFhRZ2RIbHdaVDFjSW5OM2FYUmphRndpUGp3dlpqY3RhVzV3ZFhRK1hHNGdJQ0FnSUNBOEwyWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQWdJRHhtTnkxc2FYTjBMV2wwWlcwK1hHNGdJQ0FnSUNBZ0lEeG1OeTFzWVdKbGJENVNZVzVuWlR3dlpqY3RiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lEeG1OeTFwYm5CMWRDQjBlWEJsUFZ3aWNtRnVaMlZjSWlCdGFXNDlYQ0l3WENJZ2JXRjRQVndpTVRBd1hDSWdjM1JsY0QxY0lqRmNJaUIyWVd4MVpUMWNJamt3WENJK1BDOW1OeTFwYm5CMWRENWNiaUFnSUNBZ0lEd3ZaamN0YkdsemRDMXBkR1Z0UGx4dUlDQWdJQ0FnUEdZM0xXeHBjM1F0YVhSbGJUNWNiaUFnSUNBZ0lDQWdQR1kzTFd4aFltVnNQbFJsZUhSaGNtVmhQQzltTnkxc1lXSmxiRDVjYmlBZ0lDQWdJQ0FnUEdZM0xXbHVjSFYwSUhSNWNHVTlYQ0owWlhoMFlYSmxZVndpSUhCc1lXTmxhRzlzWkdWeVBWd2lWR1Y0ZEdGeVpXRmNJajQ4TDJZM0xXbHVjSFYwUGx4dUlDQWdJQ0FnUEM5bU55MXNhWE4wTFdsMFpXMCtYRzRnSUNBZ1BDOW1OeTFzYVhOMFBseHVYRzRnSUNBZ1BHWTNMV0pzYjJOckxYUnBkR3hsUGtadmNtMGdWMmwwYUNCR2JHOWhkR2x1WnlCTVlXSmxiSE04TDJZM0xXSnNiMk5yTFhScGRHeGxQbHh1SUNBZ0lEeG1OeTFzYVhOMElHWnZjbTArWEc0Z0lDQWdJQ0E4WmpjdGJHbHpkQzFwZEdWdFBseHVJQ0FnSUNBZ0lDQThaamN0YkdGaVpXd2dabXh2WVhScGJtYytUbUZ0WlR3dlpqY3RiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lEeG1OeTFwYm5CMWRDQjBlWEJsUFZ3aWRHVjRkRndpSUhCc1lXTmxhRzlzWkdWeVBWd2lUbUZ0WlZ3aVBqd3ZaamN0YVc1d2RYUStYRzRnSUNBZ0lDQThMMlkzTFd4cGMzUXRhWFJsYlQ1Y2JpQWdJQ0FnSUR4bU55MXNhWE4wTFdsMFpXMCtYRzRnSUNBZ0lDQWdJRHhtTnkxc1lXSmxiQ0JtYkc5aGRHbHVaejVRWVhOemQyOXlaRHd2WmpjdGJHRmlaV3crWEc0Z0lDQWdJQ0FnSUR4bU55MXBibkIxZENCMGVYQmxQVndpY0dGemMzZHZjbVJjSWlCd2JHRmpaV2h2YkdSbGNqMWNJbEJoYzNOM2IzSmtYQ0krUEM5bU55MXBibkIxZEQ1Y2JpQWdJQ0FnSUR3dlpqY3RiR2x6ZEMxcGRHVnRQbHh1SUNBZ0lDQWdQR1kzTFd4cGMzUXRhWFJsYlQ1Y2JpQWdJQ0FnSUNBZ1BHWTNMV3hoWW1Wc0lHWnNiMkYwYVc1blBrVXRiV0ZwYkR3dlpqY3RiR0ZpWld3K1hHNGdJQ0FnSUNBZ0lEeG1OeTFwYm5CMWRDQjBlWEJsUFZ3aVpXMWhhV3hjSWlCd2JHRmpaV2h2YkdSbGNqMWNJa1V0YldGcGJGd2lQand2WmpjdGFXNXdkWFErWEc0Z0lDQWdJQ0E4TDJZM0xXeHBjM1F0YVhSbGJUNWNiaUFnSUNBOEwyWTNMV3hwYzNRK1hHNWNiaUFnSUNBOFpqY3RZbXh2WTJzdGRHbDBiR1UrUm05eWJTQlhhWFJvYjNWMElFeGhZbVZzY3p3dlpqY3RZbXh2WTJzdGRHbDBiR1UrWEc0Z0lDQWdQR1kzTFd4cGMzUWdabTl5YlQ1Y2JpQWdJQ0FnSUR4bU55MXNhWE4wTFdsMFpXMCtYRzRnSUNBZ0lDQWdJRHhtTnkxcGJuQjFkQ0IwZVhCbFBWd2lkR1Y0ZEZ3aUlIQnNZV05sYUc5c1pHVnlQVndpVG1GdFpWd2lQand2WmpjdGFXNXdkWFErWEc0Z0lDQWdJQ0E4TDJZM0xXeHBjM1F0YVhSbGJUNWNiaUFnSUNBZ0lEeG1OeTFzYVhOMExXbDBaVzArWEc0Z0lDQWdJQ0FnSUR4bU55MXBibkIxZENCMGVYQmxQVndpY0dGemMzZHZjbVJjSWlCd2JHRmpaV2h2YkdSbGNqMWNJbEJoYzNOM2IzSmtYQ0krUEM5bU55MXBibkIxZEQ1Y2JpQWdJQ0FnSUR3dlpqY3RiR2x6ZEMxcGRHVnRQbHh1SUNBZ0lDQWdQR1kzTFd4cGMzUXRhWFJsYlQ1Y2JpQWdJQ0FnSUNBZ1BHWTNMV2x1Y0hWMElIUjVjR1U5WENKbGJXRnBiRndpSUhCc1lXTmxhRzlzWkdWeVBWd2lSUzF0WVdsc1hDSStQQzltTnkxcGJuQjFkRDVjYmlBZ0lDQWdJRHd2WmpjdGJHbHpkQzFwZEdWdFBseHVJQ0FnSUR3dlpqY3RiR2x6ZEQ1Y2JseHVJQ0FnSUR4bU55MWliRzlqYXkxMGFYUnNaVDVEYUdWamEySnZlR1Z6UEM5bU55MWliRzlqYXkxMGFYUnNaVDVjYmlBZ0lDQThaamN0YkdsemRDQm1iM0p0UGx4dUlDQWdJQ0FnUEdZM0xXeHBjM1F0YVhSbGJTQjJMV1p2Y2oxY0ltNGdhVzRnTTF3aUlHTm9aV05yWW05NElHNWhiV1U5WENKdGVTMWphR1ZqYTJKdmVGd2lJRHAyWVd4MVpUMWNJbTVjSWlBNmRHbDBiR1U5WENJblEyaGxZMnRpYjNnZ0p5QXJJRzVjSWo0OEwyWTNMV3hwYzNRdGFYUmxiVDVjYmlBZ0lDQThMMlkzTFd4cGMzUStYRzVjYmlBZ0lDQThaamN0WW14dlkyc3RkR2wwYkdVK1VtRmthVzl6UEM5bU55MWliRzlqYXkxMGFYUnNaVDVjYmlBZ0lDQThaamN0YkdsemRDQm1iM0p0UGx4dUlDQWdJQ0FnUEdZM0xXeHBjM1F0YVhSbGJTQjJMV1p2Y2oxY0ltNGdhVzRnTTF3aUlISmhaR2x2SUc1aGJXVTlYQ0p0ZVMxeVlXUnBiMXdpSURwamFHVmphMlZrUFZ3aWJpQTlQVDBnTVZ3aUlEcDJZV3gxWlQxY0ltNWNJaUE2ZEdsMGJHVTlYQ0luVW1Ga2FXOGdKeUFySUc1Y0lqNDhMMlkzTFd4cGMzUXRhWFJsYlQ1Y2JpQWdJQ0E4TDJZM0xXeHBjM1ErWEc1Y2JpQWdJQ0E4WmpjdFlteHZZMnN0ZEdsMGJHVStRblYwZEc5dWN6d3ZaamN0WW14dlkyc3RkR2wwYkdVK1hHNGdJQ0FnUEdZM0xXSnNiMk5ySUdsdWJtVnlQbHh1SUNBZ0lDQWdQSEErUEdZM0xXSjFkSFJ2Ymo1Q2RYUjBiMjQ4TDJZM0xXSjFkSFJ2Ymo0OEwzQStYRzRnSUNBZ0lDQThjRDQ4WmpjdFluVjBkRzl1SUhKdmRXNWtQa0oxZEhSdmJpQlNiM1Z1WkR3dlpqY3RZblYwZEc5dVBqd3ZjRDVjYmlBZ0lDQWdJRHh3UGp4bU55MWlkWFIwYjI0Z1ptbHNiRDVDZFhSMGIyNGdSbWxzYkR3dlpqY3RZblYwZEc5dVBqd3ZjRDVjYmlBZ0lDQWdJRHh3UGx4dUlDQWdJQ0FnSUNBOFpqY3RZblYwZEc5dWN6NWNiaUFnSUNBZ0lDQWdJQ0E4WmpjdFluVjBkRzl1SUhKdmRXNWtJR0ZqZEdsMlpUNUNkWFIwYjI0Z01Ud3ZaamN0WW5WMGRHOXVQbHh1SUNBZ0lDQWdJQ0FnSUR4bU55MWlkWFIwYjI0Z2NtOTFibVErUW5WMGRHOXVJREk4TDJZM0xXSjFkSFJ2Ymo1Y2JpQWdJQ0FnSUNBZ0lDQThaamN0WW5WMGRHOXVJSEp2ZFc1a1BrSjFkSFJ2YmlBelBDOW1OeTFpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJRHd2WmpjdFluVjBkRzl1Y3o1Y2JpQWdJQ0FnSUR3dmNENWNiaUFnSUNBZ0lEeHdQbHh1SUNBZ0lDQWdJQ0E4WmpjdFluVjBkRzl1Y3lCamIyeHZjajFjSW05eVlXNW5aVndpUGx4dUlDQWdJQ0FnSUNBZ0lEeG1OeTFpZFhSMGIyNGdjbTkxYm1RZ1ltbG5Qa0oxZEhSdmJpQXhQQzltTnkxaWRYUjBiMjQrWEc0Z0lDQWdJQ0FnSUNBZ1BHWTNMV0oxZEhSdmJpQnliM1Z1WkNCaWFXY2dZV04wYVhabFBrSjFkSFJ2YmlBeVBDOW1OeTFpZFhSMGIyNCtYRzRnSUNBZ0lDQWdJQ0FnUEdZM0xXSjFkSFJ2YmlCeWIzVnVaQ0JpYVdjK1FuVjBkRzl1SURNOEwyWTNMV0oxZEhSdmJqNWNiaUFnSUNBZ0lDQWdQQzltTnkxaWRYUjBiMjV6UGx4dUlDQWdJQ0FnUEM5d1BseHVJQ0FnSUNBZ1BIQStYRzRnSUNBZ0lDQWdJRHhtTnkxbmNtbGtQbHh1SUNBZ0lDQWdJQ0FnSUR4bU55MWpiMncrUEdZM0xXSjFkSFJ2YmlCaWFXY2dabWxzYkNCamIyeHZjajFjSW1keVpXVnVYQ0krVTJWdVpEd3ZaamN0WW5WMGRHOXVQand2WmpjdFkyOXNQbHh1SUNBZ0lDQWdJQ0FnSUR4bU55MWpiMncrUEdZM0xXSjFkSFJ2YmlCaWFXY2dabWxzYkNCamIyeHZjajFjSW5KbFpGd2lQa1JsYkdWMFpUd3ZaamN0WW5WMGRHOXVQand2WmpjdFkyOXNQbHh1SUNBZ0lDQWdJQ0E4TDJZM0xXZHlhV1ErWEc0Z0lDQWdJQ0E4TDNBK1hHNGdJQ0FnSUNBOGNENWNiaUFnSUNBZ0lDQWdQR1kzTFdkeWFXUStYRzRnSUNBZ0lDQWdJQ0FnUEdZM0xXTnZiRDQ4WmpjdFluVjBkRzl1SUdacGJHd2djbUZwYzJWa0lHTnZiRzl5UFZ3aVozSmxaVzVjSWo1U1lXbHpaV1E4TDJZM0xXSjFkSFJ2Ymo0OEwyWTNMV052YkQ1Y2JpQWdJQ0FnSUNBZ0lDQThaamN0WTI5c1BqeG1OeTFpZFhSMGIyNGdjbUZwYzJWa0lHTnZiRzl5UFZ3aWNtVmtYQ0krVW1GcGMyVmtQQzltTnkxaWRYUjBiMjQrUEM5bU55MWpiMncrWEc0Z0lDQWdJQ0FnSUNBZ1BHWTNMV052YkQ0OFpqY3RZblYwZEc5dUlHWnBiR3dnY21GcGMyVmtJR052Ykc5eVBWd2ljR2x1YTF3aVBsSmhhWE5sWkR3dlpqY3RZblYwZEc5dVBqd3ZaamN0WTI5c1BseHVJQ0FnSUNBZ0lDQThMMlkzTFdkeWFXUStYRzRnSUNBZ0lDQThMM0ErWEc0Z0lDQWdQQzltTnkxaWJHOWphejVjYmlBZ1BDOW1OeTF3WVdkbFBseHVQQzkwWlcxd2JHRjBaVDVjYmx4dVBITmpjbWx3ZEQ1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0OVhHNDhMM05qY21sd2RENGlMQ0k4ZEdWdGNHeGhkR1UrWEc0Z0lDQWdQR1kzTFhCaFoyVStYRzRnSUNBZ0lDQWdJRHhtTnkxdVlYWmlZWElnT25ScGRHeGxQVndpYW5WdFltOTBjbTl1TG5ScGRHeGxYQ0lnWW1GamF5MXNhVzVyUFZ3aVFtRmphMXdpSUhOc2FXUnBibWMrUEM5bU55MXVZWFppWVhJK1hHNGdJQ0FnSUNBZ0lEeG1OeTFpYkc5amF5QnBibTVsY2o1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHh3UG50N2FuVnRZbTkwY205dUxtTnZiblJsYm5SOWZUd3ZjRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhtTnkxc2FXNXJJRHBvY21WbVBWd2lhblZ0WW05MGNtOXVMbUoxZEhSdmJpNW9jbVZtWENJZ1pYaDBaWEp1WVd3Z2RHRnlaMlYwUFZ3aVgySnNZVzVyWENJZ1kyeGhjM005WENKaWRYUjBiMjVjSWo1N2UycDFiV0p2ZEhKdmJpNWlkWFIwYjI0dWJtRnRaWDE5UEM5bU55MXNhVzVyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzl3UGx4dUlDQWdJQ0FnSUNBOEwyWTNMV0pzYjJOclBseHVJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpYkdsemRDMWliRzlqYXlCdFpXUnBZUzFzYVhOMFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBOGRXdytYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwSUdOc1lYTnpQVndpYzNkcGNHVnZkWFJjSWlCMkxXWnZjajFjSW1sMFpXMGdhVzRnYkdsemRHbHVaMXdpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaR2wySUdOc1lYTnpQVndpYzNkcGNHVnZkWFF0WTI5dWRHVnVkRndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdFZ09taHlaV1k5WENJbkwyRnlkR2xqYkdVdmFXUXZKeXRwZEdWdExuUnBkR3hsS3ljdkoxd2lJR05zWVhOelBWd2lhWFJsYlMxc2FXNXJJR2wwWlcwdFkyOXVkR1Z1ZEZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhrYVhZZ1kyeGhjM005WENKcGRHVnRMV2x1Ym1WeVhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pwZEdWdExYUnBkR3hsTFhKdmQxd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltbDBaVzB0ZEdsMGJHVmNJajU3ZTJsMFpXMHVkR2wwYkdWOWZUd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHUnBkaUJqYkdGemN6MWNJbWwwWlcwdGRHVjRkRndpUG50N2FYUmxiUzVrWlhOamZYMDhMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dllUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHd2ZFd3K1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJRHd2WmpjdGNHRm5aVDVjYmp3dmRHVnRjR3hoZEdVK1hHNDhjMk55YVhCMFBseHVhVzF3YjNKMElGTmxjblpwWTJVZ1puSnZiU0FuTGk5elpYSjJhV05sSjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdGMFlTZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHpkR2x1WnpvZ1cxMHNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhblZ0WW05MGNtOXVPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmpvZ2UzMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRzFsZEdodlpITTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeHBjM1JwYm1kSmJtbDBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdYM1p0SUQwZ2RHaHBjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRk5sY25acFkyVXVjbVZ1WkdWeVJHRjBZU2dwTG5Sb1pXNG9LR1JoZEdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1gzWnRMbXhwYzNScGJtY2dQU0JrWVhSaExteHBjM1JwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYM1p0TG1wMWJXSnZkSEp2YmlBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lHUmhkR0V1YW5WdFltOTBjbTl1S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHTnlaV0YwWldRb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhwYzNScGJtZEpibWwwS0NsY2JpQWdJQ0FnSUNBZ2ZWeHVmVnh1UEM5elkzSnBjSFErWEc0aUxDSnBiWEJ2Y25RZ1FYQnBSR0YwWVNCbWNtOXRJQ2R3ZFdKc2FXTXZaR1Z0Ynkxa1lYUmhKMXh1WEc1cGJYQnZjblFnVVNCbWNtOXRJQ2R4SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnY21WdVpHVnlSR0YwWVNncElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKMGJrUmhkR0VnUFNCYlhWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1VTNVFjbTl0YVhObEtDaHlaWE52YkhabExDQnlaV3BsWTNRcElEMCtJSHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdkaUJ2WmlCQmNHbEVZWFJoTG1aeVlXMWxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQmtZWFJoU1hSbGJTQTlJSHQ5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYUmhTWFJsYlM1MGFYUnNaU0E5SUhZdWRHbDBiR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaFNYUmxiUzVrWlhOaklEMGdkaTVrWlhOalhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHRjBZVWwwWlcwdWFXUWdQU0IyTG5ScGRHeGxYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5ZEc1RVlYUmhMbkIxYzJnb1pHRjBZVWwwWlcwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpYkdsemRHbHVaMXdpT2lCeWRHNUVZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ3aWFuVnRZbTkwY205dVhDSTZJRUZ3YVVSaGRHRXViR2x6ZEM1cWRXMWliM1J5YjI1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dWZWeHVJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdXM3RjYmlBZ0lDQndZWFJvT2lBbkwyRmliM1YwTHljc1hHNGdJQ0FnWTI5dGNHOXVaVzUwT2lCeVpYRjFhWEpsS0NjdUwyMXZaSFZzWlM5aFltOTFkQzlwYm1SbGVDNTJkV1VuS1Z4dWZTd2dlMXh1SUNBZ0lIQmhkR2c2SUNjdlptOXliUzhuTEZ4dUlDQWdJR052YlhCdmJtVnVkRG9nY21WeGRXbHlaU2duTGk5dGIyUjFiR1V2Wm05eWJTOXBibVJsZUM1MmRXVW5LVnh1ZlN3Z2UxeHVJQ0FnSUhCaGRHZzZJQ2N2WkhsdVlXMXBZeTF5YjNWMFpTOWliRzluTHpwaWJHOW5TV1F2Y0c5emRDODZjRzl6ZEVsa0x5Y3NYRzRnSUNBZ1kyOXRjRzl1Wlc1ME9pQnlaWEYxYVhKbEtDY3VMMjF2WkhWc1pTOWtlVzVoYldsakxYSnZkWFJsTDJsdVpHVjRMbloxWlNjcFhHNTlMQ0I3WEc0Z0lDQWdjR0YwYURvZ0p5OXNhWE4wYVc1bkx5Y3NYRzRnSUNBZ1kyOXRjRzl1Wlc1ME9pQnlaWEYxYVhKbEtDY3VMMjF2WkhWc1pTOXNhWE4wYVc1bkwybHVaR1Y0TG5aMVpTY3BYRzU5TENCN1hHNGdJQ0FnY0dGMGFEb2dKeTloY25ScFkyeGxMMmxrTHpwcFpDOG5MRnh1SUNBZ0lHTnZiWEJ2Ym1WdWREb2djbVZ4ZFdseVpTZ25MaTl0YjJSMWJHVXZZWEowYVdOc1pTOXBibVJsZUM1MmRXVW5LVnh1ZlYxY2JpSXNJbWx0Y0c5eWRDQkJjR2xFWVhSaElHWnliMjBnSjNCMVlteHBZeTlrWlcxdkxXUmhkR0VuWEc1Y2JtbHRjRzl5ZENCUklHWnliMjBnSjNFblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCeVpXNWtaWEpFWVhSaEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdVUzVRY205dGFYTmxLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKcGJtUmxlRndpT2lCQmNHbEVZWFJoTG1sdVpHVjRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWTI5dGJXOXVYQ0k2SUVGd2FVUmhkR0V1WTI5dGJXOXVYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNibjFjYmlJc0lteGxkQ0JtY21GdFpYTWdQU0JiZTF4dUlDQWdJSFJwZEd4bE9pQmNJazV2WkdWcWMxd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT2FlaE9XN3V1V2NxQ0JPYjJSbFNsTWc1Wis2NUxxT0lFTm9jbTl0WlNCV09DRGx2SlhtazQ3bm1vUWdTbUYyWVZOamNtbHdkQ0RvdjVEb29Zem5qcS9sb29QdnZJemxoYmJrdW92a3U3YnBxYkhsaXFqcG5aN3BtTHZsb1o3bm1vVG5pYm5tZ0tmdnZJem1ub0hsaGJibHY2dnBnSi9ubW9UbnZKYm9yNUhsaVkzbnE2L2xrSVRucDQzb3RZVG11cEJjSWl4Y2JpQWdJQ0JqYjI1MFpXNTBPaUJnUEdScGRpQnBaRDFjSW1odmJXVXRhVzUwY205Y0lqNWNibHh1SUNBZ0lDQWdJQ0E4Y0Q1T2IyUmxMbXB6d3E0Z2FYTWdZU0JLWVhaaFUyTnlhWEIwSUhKMWJuUnBiV1VnWW5WcGJIUWdiMjRnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WkdWMlpXeHZjR1Z5Y3k1bmIyOW5iR1V1WTI5dEwzWTRMMXdpUGtOb2NtOXRaU2R6SUZZNElFcGhkbUZUWTNKcGNIUWdaVzVuYVc1bFBDOWhQaTVjYms1dlpHVXVhbk1nZFhObGN5QmhiaUJsZG1WdWRDMWtjbWwyWlc0c0lHNXZiaTFpYkc5amEybHVaeUJKTDA4Z2JXOWtaV3dnZEdoaGRDQnRZV3RsY3lCcGRGeHViR2xuYUhSM1pXbG5hSFFnWVc1a0lHVm1abWxqYVdWdWRDNGdUbTlrWlM1cWN5Y2djR0ZqYTJGblpTQmxZMjl6ZVhOMFpXMHNJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMM2QzZHk1dWNHMXFjeTVqYjIwdlhDSStibkJ0UEM5aFBpd2dhWE1nZEdobElHeGhjbWRsYzNRZ1pXTnZjM2x6ZEdWdElHOW1JRzl3Wlc1Y2JuTnZkWEpqWlNCc2FXSnlZWEpwWlhNZ2FXNGdkR2hsSUhkdmNteGtMand2Y0Q1Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnUEdneUlHbGtQVndpYUc5dFpTMWtiM2R1Ykc5aFpHaGxZV1JjSWlCa1lYUmhMV1JzTFd4dlkyRnNQVndpUkc5M2JteHZZV1FnWm05eVhDSStSRzkzYm14dllXUWdabTl5SUcxaFkwOVRJQ2g0TmpRcFBDOW9NajVjYmx4dUlDQWdJQ0FnSUNBOFpHbDJJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKc2IyTnJYQ0krWEc1Y2JpQWdJQ0FnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMlJwYzNRdmRqWXVNVEF1TUM5dWIyUmxMWFkyTGpFd0xqQXVjR3RuWENJZ1kyeGhjM005WENKb2IyMWxMV1J2ZDI1c2IyRmtZblYwZEc5dVhDSWdkR2wwYkdVOVhDSkViM2R1Ykc5aFpDQjJOaTR4TUM0d0lFeFVVMXdpSUdSaGRHRXRkbVZ5YzJsdmJqMWNJblkyTGpFd0xqQmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWTJMakV3TGpBZ1RGUlRYRzRnSUNBZ0lDQWdJQ0FnSUNBOGMyMWhiR3crVW1WamIyMXRaVzVrWldRZ1JtOXlJRTF2YzNRZ1ZYTmxjbk04TDNOdFlXeHNQbHh1SUNBZ0lDQWdJQ0FnSUR3dllUNWNibHh1SUNBZ0lDQWdJQ0FnSUR4MWJDQmpiR0Z6Y3oxY0lteHBjM1F0WkdsMmFXUmxjaTF3YVhCbElHaHZiV1V0YzJWamIyNWtZWEo1TFd4cGJtdHpYQ0krWEc0Z0lDQWdJQ0FnSUNBZ0lDQThiR2srWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHhoSUdoeVpXWTlYQ0pvZEhSd2N6b3ZMMjV2WkdWcWN5NXZjbWN2Wlc0dlpHOTNibXh2WVdRdlhDSStUM1JvWlhJZ1JHOTNibXh2WVdSelBDOWhQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BDOXNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0VnYUhKbFpqMWNJbWgwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl1YjJSbGFuTXZibTlrWlM5aWJHOWlMMjFoYzNSbGNpOWtiMk12WTJoaGJtZGxiRzluY3k5RFNFRk9SMFZNVDBkZlZqWXViV1FqTmk0eE1DNHdYQ0krUTJoaGJtZGxiRzluUEM5aFBseHVJQ0FnSUNBZ0lDQWdJQ0FnUEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUR4c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dmJtOWtaV3B6TG05eVp5OWthWE4wTDJ4aGRHVnpkQzEyTmk1NEwyUnZZM012WVhCcEwxd2lQa0ZRU1NCRWIyTnpQQzloUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQThMM1ZzUGx4dVhHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dVhHNGdJQ0FnSUNBZ0lDQWdQR1JwZGlCamJHRnpjejFjSW1odmJXVXRaRzkzYm14dllXUmliRzlqYTF3aVBseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5dWIyUmxhbk11YjNKbkwyUnBjM1F2ZGpjdU55NHhMMjV2WkdVdGRqY3VOeTR4TG5Ccloxd2lJR05zWVhOelBWd2lhRzl0WlMxa2IzZHViRzloWkdKMWRIUnZibHdpSUhScGRHeGxQVndpUkc5M2JteHZZV1FnZGpjdU55NHhJRU4xY25KbGJuUmNJaUJrWVhSaExYWmxjbk5wYjI0OVhDSjJOeTQzTGpGY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RqY3VOeTR4SUVOMWNuSmxiblJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE50WVd4c1BreGhkR1Z6ZENCR1pXRjBkWEpsY3p3dmMyMWhiR3crWEc0Z0lDQWdJQ0FnSUNBZ0lDQThMMkUrWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRHgxYkNCamJHRnpjejFjSW14cGMzUXRaR2wyYVdSbGNpMXdhWEJsSUdodmJXVXRjMlZqYjI1a1lYSjVMV3hwYm10elhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHNhVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4WVNCb2NtVm1QVndpYUhSMGNITTZMeTl1YjJSbGFuTXViM0puTDJWdUwyUnZkMjVzYjJGa0wyTjFjbkpsYm5RdlhDSStUM1JvWlhJZ1JHOTNibXh2WVdSelBDOWhQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMnhwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHRWdhSEpsWmoxY0ltaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXViMlJsYW5NdmJtOWtaUzlpYkc5aUwyMWhjM1JsY2k5a2IyTXZZMmhoYm1kbGJHOW5jeTlEU0VGT1IwVk1UMGRmVmpjdWJXUWpOeTQzTGpGY0lqNURhR0Z1WjJWc2IyYzhMMkUrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YkdrK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZU0JvY21WbVBWd2lhSFIwY0hNNkx5OXViMlJsYW5NdWIzSm5MMlJwYzNRdmJHRjBaWE4wTFhZM0xuZ3ZaRzlqY3k5aGNHa3ZYQ0krUVZCSklFUnZZM004TDJFK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmJHaytYRzRnSUNBZ0lDQWdJQ0FnSUNBOEwzVnNQbHh1WEc0Z0lDQWdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0FnSUR4d1BseHVJQ0FnSUNBZ0lDQWdJRTl5SUdoaGRtVWdZU0JzYjI5cklHRjBJSFJvWlNBOFlTQm9jbVZtUFZ3aWFIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyNXZaR1ZxY3k5TVZGTWpiSFJ6TFhOamFHVmtkV3hsWENJK1RGUlRJSE5qYUdWa2RXeGxMand2WVQ1Y2JpQWdJQ0FnSUNBZ1BDOXdQbHh1SUNBZ0lDQWdQQzlrYVhZK1lDeGNiaUFnSUNCMmFXVjNUVzl5WlRvZ2UxeHVJQ0FnSUNBZ0lDQjBaWGgwT2lCY0l1YWJ0T1drbXVTL29lYUJyMXdpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSW1oMGRIQnpPaTh2Ym05a1pXcHpMbTl5Wnk5Y0lseHVJQ0FnSUgxY2JuMHNJSHRjYmlBZ0lDQjBhWFJzWlRvZ1hDSk9VRTFjSWl4Y2JpQWdJQ0JrWlhOak9pQmNJa1pGV2lEa3ZiL25sS2dnVGxCTklPYU9wZVdGcGVXRnFPZVFnK2FjZ09Xa3ArZWFoT1c4Z09hNmtPZVVuK2FBZ2VlenUrZTduKys4ak9XRnQrV2toK2FYb09tWmtPZWFoT1dLbitpRHZlYUpxZVd4bGVpRHZlV0ttKys4ak9XUHIrYVZ0T1dRaU9XYnZlbVpoZVdKamVheXYrZWFoT1c4Z09hNmtPYWhodWFldHUrOGpPbUFndVc2bE9lZXJPYUJyK1M0aCtXUG1PZWFoT2FLZ09hY3IrYWJ0T2FidjF3aUxGeHVJQ0FnSUdOdmJuUmxiblE2SUdBOGFERWdZMnhoYzNNOVhDSjBhWFJzWlNCbGJTMWtaV1poZFd4MElIUjVjR1V0Ym1WMWRISmhiQzB4TVZ3aVBseHVJQ0FnSUNBZ0lDQWdJRUoxYVd4a0lHRnRZWHBwYm1jZ2RHaHBibWR6WEc0Z0lDQWdJQ0FnSUR3dmFERStYRzRnSUNBZ0lDQWdJRHh3SUdOc1lYTnpQVndpYURVZ1pXMHRaR1ZtWVhWc2RDQjBlWEJsTFc1bGRYUnlZV3d0TVRFZ2NHSjRiRndpUGx4dUlDQWdJQ0FnSUNBZ0lHNXdiU0JwY3lCMGFHVWdjR0ZqYTJGblpTQnRZVzVoWjJWeUlHWnZjaUJLWVhaaFUyTnlhWEIwTGlCR2FXNWtMQ0J6YUdGeVpTd2dZVzVrSUhKbGRYTmxYRzRnSUNBZ0lDQWdJQ0FnY0dGamEyRm5aWE1nYjJZZ1kyOWtaU0JtY205dElHaDFibVJ5WldSeklHOW1JSFJvYjNWellXNWtjeUJ2WmlCa1pYWmxiRzl3WlhKeklPS0FsQ0JoYm1SY2JpQWdJQ0FnSUNBZ0lDQmhjM05sYldKc1pTQjBhR1Z0SUdsdUlIQnZkMlZ5Wm5Wc0lHNWxkeUIzWVhsekxseHVJQ0FnSUNBZ0lDQThMM0ErWEc0Z0lDQWdJQ0FnSUR4aElHbGtQVndpYldGcGJpMWpkR0ZjSWlCb2NtVm1QVndpSTNCaGJtVXRhRzl0WlhCaFoyVXRjSEpwWTJsdVoxd2lJR05zWVhOelBWd2lZblJ1SUdKMGJpMW9hV2RvYkdsbmFIUXRNeUJ0Y214Y0lpQmtZWFJoTFdWMlpXNTBMVzVoYldVOVhDSm9iMjFsY0dGblpTMW9aWEp2TFdOMFlWd2lQa2RsZENCemRHRnlkR1ZrUEM5aFBtQXNYRzRnSUNBZ2RtbGxkMDF2Y21VNklIdGNiaUFnSUNBZ0lDQWdkR1Y0ZERvZ1hDTG1tN1RscEpya3Y2SG1nYTljSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENKb2RIUndjem92TDNkM2R5NXVjRzFxY3k1amIyMHZYQ0pjYmlBZ0lDQjlYRzU5TENCN1hHNGdJQ0FnZEdsMGJHVTZJRndpUjNWc2NGd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT2FWdE9XUWlFZDFiSERubW9Ua3ZKZmxwSnJtajVMa3U3YnZ2SXpudkpib3I1SGpnSUhrdkpqbGpKYmxrb3pudTRUbnU0ZmxpWTNucTYvbHBJM21uWUxubW9UbXFLSGxuWmZsajRycG5abm1nSUhvdFlUbXVwRHZ2SXpsbHAzbm5ZRGxqNi9rdVpEbGhML2pnSUhsazd6bm5ZRGxzSS9tbTdMbGhML3Z2SXpvaDZybGlxamxqSmJscm96bWlKRGxpWTNucTYvbHBLZnBoNC9waDQzbHBJM2x0Nlhrdlp4Y0lpeGNiaUFnSUNCamIyNTBaVzUwT2lCZ1BHZ3hJR05zWVhOelBWd2lhR1ZoWkdsdVp5QjBaWGgwTFdObGJuUmxjbHdpUGtGMWRHOXRZWFJsSUdGdVpDQmxibWhoYm1ObElIbHZkWElnZDI5eWEyWnNiM2M4TDJneFBqeG9NaUJqYkdGemN6MWNJbkJoY21GbmNtRndhRndpUGx4dUlDQWdJQ0FnSUNBZ0lHZDFiSEFnYVhNZ1lTQjBiMjlzYTJsMElHWnZjaUJoZFhSdmJXRjBhVzVuSUhCaGFXNW1kV3dnYjNJZ2RHbHRaUzFqYjI1emRXMXBibWNnZEdGemEzTWdhVzRnZVc5MWNpQmtaWFpsYkc5d2JXVnVkQ0IzYjNKclpteHZkeXdnYzI4Z2VXOTFJR05oYmlCemRHOXdJRzFsYzNOcGJtY2dZWEp2ZFc1a0lHRnVaQ0JpZFdsc1pDQnpiMjFsZEdocGJtY3VYRzRnSUNBZ0lDQWdJRHd2YURJK1BHUnBkaUJqYkdGemN6MWNJbU4wWVhOY0lqNWNiaUFnSUNBZ0lDQWdJQ0E4WVNCamJHRnpjejFjSW1OMFlYTXRZblYwZEc5dVhDSWdhSEpsWmoxY0ltaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5kV3h3YW5NdlozVnNjQzlpYkc5aUwyMWhjM1JsY2k5a2IyTnpMMmRsZEhScGJtY3RjM1JoY25SbFpDNXRaRndpUGtkbGRDQlRkR0Z5ZEdWa1BDOWhQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWdMRnh1SUNBZ0lIWnBaWGROYjNKbE9pQjdYRzRnSUNBZ0lDQWdJSFJsZUhRNklGd2k1cHUwNWFTYTVMK2g1b0d2WENJc1hHNGdJQ0FnSUNBZ0lHaHlaV1k2SUZ3aWFIUjBjRG92TDJkMWJIQnFjeTVqYjIwdlhDSmNiaUFnSUNCOVhHNTlMQ0I3WEc0Z0lDQWdkR2wwYkdVNklGd2lRbkp2ZDNObGNtbG1lVndpTEZ4dUlDQWdJR1JsYzJNNklGd2lSa1ZhSU9TOXYrZVVxQ0JDY205M2MyVnlhV1o1SU9hb29lV2RsK1dNbHVlN2hPZTdoK1dTak9ldW9lZVFodW1odWVlYnJ1ZWFoT1dRaE9TNHF1V0tuK2lEdmVhb29lV2RsKys4ak9hZWdlV2twK2FQa09XTmgrbWh1ZWVicnVlYWhPV1ByK2U3dE9hS3BPYUFwK09BZ2VXS24raUR2ZVdramVlVXFPYUFwKys4ak9XNXR1V3VudWVPc09lbnIrYWNxT1c4aitlYWhPYVFyZVc3dXVlOWtlbWh0VndpTEZ4dUlDQWdJR052Ym5SbGJuUTZJR0E4YzJWamRHbHZiaUJwWkQxY0luUnZjQzFvYjIxbExYTmxZM1JwYjI1Y0lpQmpiR0Z6Y3oxY0luUnZjQzF6WldOMGFXOXVJR052Ykc5eUxXRmNJajVjYmlBZ0lDQWdJRHhrYVhZZ2FXUTlYQ0owYjNBdGFHOXRaUzFwYldGblpWd2lQand2WkdsMlBseHVYRzRnSUNBZ0lDQWdQR2d6SUdsa1BWd2lkRzl3TFhOMVluUnBkR3hsWENJZ1kyeGhjM005WENKc1lYSm5aUzFtYjI1MFhDSStRbkp2ZDNObGNtbG1lU0JzWlhSeklIbHZkU0J5WlhGMWFYSmxLRHh6Y0dGdUlHTnNZWE56UFZ3aVkyOXNiM0l0WkZ3aVBpZHRiMlIxYkdWekp6d3ZjM0JoYmo0cElHbHVJSFJvWlNCaWNtOTNjMlZ5SUdKNUlHSjFibVJzYVc1bklIVndJR0ZzYkNCdlppQjViM1Z5SUdSbGNHVnVaR1Z1WTJsbGN5NDhMMmd6UGx4dUlDQWdJQ0FnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5emRXSnpkR0ZqYXk5dWIyUmxMV0p5YjNkelpYSnBabmtqZFhOaFoyVmNJajVjYmlBZ0lDQWdJQ0FnUEdKMWRIUnZiaUJqYkdGemN6MWNJblJ2Y0MxaWRYUjBiMjVjSWlCcFpEMWNJblJ2Y0MxaWRYUjBiMjR5WENJK1hHNGdJQ0FnSUNBZ0lDQWdSRzlqZFcxbGJuUmhkR2x2Ymx4dUlDQWdJQ0FnSUNBOEwySjFkSFJ2Ymo1Y2JpQWdJQ0FnSUR3dllUNWNiaUFnSUNBOEwzTmxZM1JwYjI0K1lDeGNiaUFnSUNCMmFXVjNUVzl5WlRvZ2UxeHVJQ0FnSUNBZ0lDQjBaWGgwT2lCY0l1YWJ0T1drbXVTL29lYUJyMXdpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSW1oMGRIQTZMeTlpY205M2MyVnlhV1o1TG05eVp5OWNJbHh1SUNBZ0lIMWNibjBzSUh0Y2JpQWdJQ0IwYVhSc1pUb2dYQ0pDYjNkbGNsd2lMRnh1SUNBZ0lHUmxjMk02SUZ3aVJrVmFJT1dQcittRmplZTlydVM5ditlVXFDQkNiM2RsY2lEbWtKem50S0xqZ0lIbHJvbm9vNFhqZ0lIbW03VG1sckRsa296bGpiam92YjNscG9KS1lYWmhVMk55YVhCMDQ0Q0JRMU5UNUxtTDU3Rzc1NXFFNTcyUjU3dWM2TFdFNXJxUTc3eU02WUNhNkwrSDZJZXE1WXFvNVl5VzVyT281WVdsNW9xQTVweXY1YTZNNTc2TzZLZWo1WWF6NWFTTjVwMkM1NXFFNXFHRzVwNjI1WXlGNTY2aDU1Q0c2WmV1NmFLWVhDSXNYRzRnSUNBZ1kyOXVkR1Z1ZERvZ1lEeGthWFlnWTJ4aGMzTTlYQ0p0WVdsdVhDSStYRzQ4Y0NCamJHRnpjejFjSW14bFlXUmNJajVYWldJZ2MybDBaWE1nWVhKbElHMWhaR1VnYjJZZ2JHOTBjeUJ2WmlCMGFHbHVaM01nNG9DVUlHWnlZVzFsZDI5eWEzTXNJR3hwWW5KaGNtbGxjeXdnWVhOelpYUnpMQ0JoYm1RZ2RYUnBiR2wwYVdWekxpQkNiM2RsY2lCdFlXNWhaMlZ6SUdGc2JDQjBhR1Z6WlNCMGFHbHVaM01nWm05eUlIbHZkUzQ4TDNBK1hHNDhjRDVMWldWd2FXNW5JSFJ5WVdOcklHOW1JR0ZzYkNCMGFHVnpaU0J3WVdOcllXZGxjeUJoYm1RZ2JXRnJhVzVuSUhOMWNtVWdkR2hsZVNCaGNtVWdkWEFnZEc4Z1pHRjBaU0FvYjNJZ2MyVjBJSFJ2SUhSb1pTQnpjR1ZqYVdacFl5QjJaWEp6YVc5dWN5QjViM1VnYm1WbFpDa2dhWE1nZEhKcFkydDVMaUJDYjNkbGNpQjBieUIwYUdVZ2NtVnpZM1ZsSVR3dmNENWNianh3UGtKdmQyVnlJR05oYmlCdFlXNWhaMlVnWTI5dGNHOXVaVzUwY3lCMGFHRjBJR052Ym5SaGFXNGdTRlJOVEN3Z1ExTlRMQ0JLWVhaaFUyTnlhWEIwTENCbWIyNTBjeUJ2Y2lCbGRtVnVJR2x0WVdkbElHWnBiR1Z6TGlCQ2IzZGxjaUJrYjJWemJ1S0FtWFFnWTI5dVkyRjBaVzVoZEdVZ2IzSWdiV2x1YVdaNUlHTnZaR1VnYjNJZ1pHOGdZVzU1ZEdocGJtY2daV3h6WlNBdElHbDBJR3AxYzNRZ2FXNXpkR0ZzYkhNZ2RHaGxJSEpwWjJoMElIWmxjbk5wYjI1eklHOW1JSFJvWlNCd1lXTnJZV2RsY3lCNWIzVWdibVZsWkNCaGJtUWdkR2hsYVhJZ1pHVndaVzVrWlc1amFXVnpMand2Y0Q1Y2JqeHdQbFJ2SUR4aElHaHlaV1k5WENJaloyVjBkR2x1WnkxemRHRnlkR1ZrWENJK1oyVjBJSE4wWVhKMFpXUThMMkUrTENCQ2IzZGxjaUIzYjNKcmN5QmllU0JtWlhSamFHbHVaeUJoYm1RZ2FXNXpkR0ZzYkdsdVp5QThZU0JvY21WbVBWd2lMM05sWVhKamFGd2lQbkJoWTJ0aFoyVnpQQzloUGlCbWNtOXRJR0ZzYkNCdmRtVnlMQ0IwWVd0cGJtY2dZMkZ5WlNCdlppQm9kVzUwYVc1bkxDQm1hVzVrYVc1bkxDQmtiM2R1Ykc5aFpHbHVaeXdnWVc1a0lITmhkbWx1WnlCMGFHVWdjM1IxWm1ZZ2VXOTE0b0NaY21VZ2JHOXZhMmx1WnlCbWIzSXVJRUp2ZDJWeUlHdGxaWEJ6SUhSeVlXTnJJRzltSUhSb1pYTmxJSEJoWTJ0aFoyVnpJR2x1SUdFZ2JXRnVhV1psYzNRZ1ptbHNaU3dnUEdFZ2FISmxaajFjSWk5a2IyTnpMMk55WldGMGFXNW5MWEJoWTJ0aFoyVnpMeU5pYjNkbGNtcHpiMjVjSWo0OFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSXVhbk52Ymp3dlkyOWtaVDQ4TDJFK0xpQkliM2NnZVc5MUlIVnpaU0E4WVNCb2NtVm1QVndpTDNObFlYSmphRndpUG5CaFkydGhaMlZ6UEM5aFBpQnBjeUIxY0NCMGJ5QjViM1V1SUVKdmQyVnlJSEJ5YjNacFpHVnpJR2h2YjJ0eklIUnZJR1poWTJsc2FYUmhkR1VnZFhOcGJtY2djR0ZqYTJGblpYTWdhVzRnZVc5MWNpQThZU0JvY21WbVBWd2lMMlJ2WTNNdmRHOXZiSE5jSWo1MGIyOXNjeUJoYm1RZ2QyOXlhMlpzYjNkelBDOWhQaTQ4TDNBK1hHNDhjRDVDYjNkbGNpQnBjeUJ2Y0hScGJXbDZaV1FnWm05eUlIUm9aU0JtY205dWRDMWxibVF1SUVsbUlHMTFiSFJwY0d4bElIQmhZMnRoWjJWeklHUmxjR1Z1WkNCdmJpQmhJSEJoWTJ0aFoyVWdMU0JxVVhWbGNua2dabTl5SUdWNFlXMXdiR1VnTFNCQ2IzZGxjaUIzYVd4c0lHUnZkMjVzYjJGa0lHcFJkV1Z5ZVNCcWRYTjBJRzl1WTJVdUlGUm9hWE1nYVhNZ2EyNXZkMjRnWVhNZ1lTQm1iR0YwSUdSbGNHVnVaR1Z1WTNrZ1ozSmhjR2dnWVc1a0lHbDBJR2hsYkhCeklISmxaSFZqWlNCd1lXZGxJR3h2WVdRdVBDOXdQbHh1UEdneUlHbGtQVndpYVc1emRHRnNiQzFpYjNkbGNsd2lQanhoSUdoeVpXWTlYQ0lqYVc1emRHRnNiQzFpYjNkbGNsd2lJR05zWVhOelBWd2lhR1ZoWkdWeUxXRnVZMmh2Y2x3aVBzS25QQzloUGtsdWMzUmhiR3dnUW05M1pYSThMMmd5UGx4dVBIQStRbTkzWlhJZ2FYTWdZU0JqYjIxdFlXNWtJR3hwYm1VZ2RYUnBiR2wwZVM0Z1NXNXpkR0ZzYkNCcGRDQjNhWFJvSUc1d2JTNDhMM0ErWEc0OFptbG5kWEpsSUdOc1lYTnpQVndpYUdsbmFHeHBaMmgwWENJK1BIQnlaVDQ4WTI5a1pTQmpiR0Z6Y3oxY0lteGhibWQxWVdkbExXSmhjMmhjSWlCa1lYUmhMV3hoYm1jOVhDSmlZWE5vWENJK1BITndZVzRnWTJ4aGMzTTlYQ0puY0Z3aVBpUWdQQzl6Y0dGdVBtNXdiU0JwYm5OMFlXeHNJQzFuSUdKdmQyVnlQQzlqYjJSbFBqd3ZjSEpsUGp3dlptbG5kWEpsUGx4dVBIQStRbTkzWlhJZ2NtVnhkV2x5WlhNZ1BHRWdhSEpsWmoxY0ltaDBkSEE2THk5dWIyUmxhbk11YjNKbkwxd2lQbTV2WkdVc0lHNXdiVHd2WVQ0Z1lXNWtJRHhoSUdoeVpXWTlYQ0pvZEhSd09pOHZaMmwwTFhOamJTNXZjbWRjSWo1bmFYUThMMkUrTGp3dmNENWNianh3UGt4aGRHVnpkQ0J5Wld4bFlYTmxPaUE4WVNCb2NtVm1QVndpWENJK1BHbHRaeUJ6Y21NOVhDSm9kSFJ3Y3pvdkwybHRaeTV6YUdsbGJHUnpMbWx2TDI1d2JTOTJMMkp2ZDJWeUxuTjJaejl0WVhoQloyVTlNalU1TWpBd01Gd2lJR0ZzZEQxY0ltSnZkMlZ5SUhabGNuTnBiMjVjSWo0OEwyRStQQzl3UGx4dVBIQStSbTl5SUhSeWIzVmliR1Z6YUc5dmRHbHVaeUJwYm5OMFlXeHNZWFJwYjI0Z2IyNGdaR2xtWm1WeVpXNTBJSEJzWVhSbWIzSnRjeXdnY21WaFpDQjBhR1VnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5aWIzZGxjaTlpYjNkbGNpOTNhV3RwTDFSeWIzVmliR1Z6YUc5dmRHbHVaMXdpUG5SeWIzVmliR1Z6YUc5dmRHbHVaend2WVQ0Z2QybHJhU0J3WVdkbExqd3ZjRDVjYmp4b01pQnBaRDFjSW1kbGRIUnBibWN0YzNSaGNuUmxaRndpUGp4aElHaHlaV1k5WENJaloyVjBkR2x1WnkxemRHRnlkR1ZrWENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStSMlYwZEdsdVp5QnpkR0Z5ZEdWa1BDOW9NajVjYmp4b015QnBaRDFjSW1sdWMzUmhiR3d0Y0dGamEyRm5aWE5jSWo0OFlTQm9jbVZtUFZ3aUkybHVjM1JoYkd3dGNHRmphMkZuWlhOY0lpQmpiR0Z6Y3oxY0ltaGxZV1JsY2kxaGJtTm9iM0pjSWo3Q3B6d3ZZVDVKYm5OMFlXeHNJSEJoWTJ0aFoyVnpQQzlvTXo1Y2JqeHdQa2x1YzNSaGJHd2djR0ZqYTJGblpYTWdkMmwwYUNBOFlTQm9jbVZtUFZ3aUwyUnZZM012WVhCcEkybHVjM1JoYkd4Y0lqNDhZMjlrWlNCamJHRnpjejFjSW1ocFoyaHNhV2RvZEdWeUxYSnZkV2RsWENJK1ltOTNaWElnYVc1emRHRnNiRHd2WTI5a1pUNDhMMkUrTGlCQ2IzZGxjaUJwYm5OMFlXeHNjeUJ3WVdOcllXZGxjeUIwYnlBOFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSmZZMjl0Y0c5dVpXNTBjeTg4TDJOdlpHVStMand2Y0Q1Y2JqeG1hV2QxY21VZ1kyeGhjM005WENKb2FXZG9iR2xuYUhSY0lqNDhjSEpsUGp4amIyUmxJR05zWVhOelBWd2liR0Z1WjNWaFoyVXRZbUZ6YUZ3aUlHUmhkR0V0YkdGdVp6MWNJbUpoYzJoY0lqNDhjM0JoYmlCamJHRnpjejFjSW1kd1hDSStKQ0E4TDNOd1lXNCtZbTkzWlhJZ2FXNXpkR0ZzYkNBbWJIUTdjR0ZqYTJGblpTWm5kRHM4TDJOdlpHVStQQzl3Y21VK1BDOW1hV2QxY21VK1hHNDhjRDVCSUhCaFkydGhaMlVnWTJGdUlHSmxJR0VnUjJsMFNIVmlJSE5vYjNKMGFHRnVaQ3dnWVNCSGFYUWdaVzVrY0c5cGJuUXNJR0VnVlZKTUxDQmhibVFnYlc5eVpTNGdVbVZoWkNCdGIzSmxJR0ZpYjNWMElEeGhJR2h5WldZOVhDSXZaRzlqY3k5aGNHa3ZJMmx1YzNSaGJHeGNJajQ4WTI5a1pTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RHVnlMWEp2ZFdkbFhDSStZbTkzWlhJZ2FXNXpkR0ZzYkR3dlkyOWtaVDQ4TDJFK0xqd3ZjRDVjYmp4bWFXZDFjbVVnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJjSWo0OGNISmxQanhqYjJSbElHTnNZWE56UFZ3aWJHRnVaM1ZoWjJVdFltRnphRndpSUdSaGRHRXRiR0Z1WnoxY0ltSmhjMmhjSWo0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklHbHVjM1JoYkd4eklIUm9aU0J3Y205cVpXTjBJR1JsY0dWdVpHVnVZMmxsY3lCc2FYTjBaV1FnYVc0Z1ltOTNaWEl1YW5OdmJqd3ZjM0JoYmo1Y2JqeHpjR0Z1SUdOc1lYTnpQVndpWjNCY0lqNGtJRHd2YzNCaGJqNWliM2RsY2lCcGJuTjBZV3hzWEc0OGMzQmhiaUJqYkdGemN6MWNJbU5jSWo0aklISmxaMmx6ZEdWeVpXUWdjR0ZqYTJGblpUd3ZjM0JoYmo1Y2JqeHpjR0Z1SUdOc1lYTnpQVndpWjNCY0lqNGtJRHd2YzNCaGJqNWliM2RsY2lCcGJuTjBZV3hzSUdweGRXVnllVnh1UEhOd1lXNGdZMnhoYzNNOVhDSmpYQ0krSXlCSGFYUklkV0lnYzJodmNuUm9ZVzVrUEM5emNHRnVQbHh1UEhOd1lXNGdZMnhoYzNNOVhDSm5jRndpUGlRZ1BDOXpjR0Z1UG1KdmQyVnlJR2x1YzNSaGJHd2daR1Z6WVc1a2NtOHZiV0Z6YjI1eWVWeHVQSE53WVc0Z1kyeGhjM005WENKalhDSStJeUJIYVhRZ1pXNWtjRzlwYm5ROEwzTndZVzQrWEc0OGMzQmhiaUJqYkdGemN6MWNJbWR3WENJK0pDQThMM053WVc0K1ltOTNaWElnYVc1emRHRnNiQ0JuYVhRNkx5OW5hWFJvZFdJdVkyOXRMM1Z6WlhJdmNHRmphMkZuWlM1bmFYUmNianh6Y0dGdUlHTnNZWE56UFZ3aVkxd2lQaU1nVlZKTVBDOXpjR0Z1UGx4dVBITndZVzRnWTJ4aGMzTTlYQ0puY0Z3aVBpUWdQQzl6Y0dGdVBtSnZkMlZ5SUdsdWMzUmhiR3dnYUhSMGNEb3ZMMlY0WVcxd2JHVXVZMjl0TDNOamNtbHdkQzVxY3p3dlkyOWtaVDQ4TDNCeVpUNDhMMlpwWjNWeVpUNWNianhvTXlCcFpEMWNJbk5sWVhKamFDMXdZV05yWVdkbGMxd2lQanhoSUdoeVpXWTlYQ0lqYzJWaGNtTm9MWEJoWTJ0aFoyVnpYQ0lnWTJ4aGMzTTlYQ0pvWldGa1pYSXRZVzVqYUc5eVhDSSt3cWM4TDJFK1UyVmhjbU5vSUhCaFkydGhaMlZ6UEM5b016NWNianh3UGp4aElHaHlaV1k5WENJdmMyVmhjbU5vWENJK1UyVmhjbU5vSUVKdmQyVnlJSEJoWTJ0aFoyVnpQQzloUGlCaGJtUWdabWx1WkNCMGFHVWdjbVZuYVhOMFpYSmxaQ0J3WVdOcllXZGxJRzVoYldWeklHWnZjaUI1YjNWeUlHWmhkbTl5YVhSbElIQnliMnBsWTNSekxqd3ZjRDVjYmp4b015QnBaRDFjSW5OaGRtVXRjR0ZqYTJGblpYTmNJajQ4WVNCb2NtVm1QVndpSTNOaGRtVXRjR0ZqYTJGblpYTmNJaUJqYkdGemN6MWNJbWhsWVdSbGNpMWhibU5vYjNKY0lqN0Nwend2WVQ1VFlYWmxJSEJoWTJ0aFoyVnpQQzlvTXo1Y2JqeHdQa055WldGMFpTQmhJRHhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2k1cWMyOXVQQzlqYjJSbFBpQm1hV3hsSUdadmNpQjViM1Z5SUhCaFkydGhaMlVnZDJsMGFDQThZU0JvY21WbVBWd2lMMlJ2WTNNdlkzSmxZWFJwYm1jdGNHRmphMkZuWlhNdkkySnZkMlZ5YW5OdmJsd2lQanhqYjJSbElHTnNZWE56UFZ3aWFHbG5hR3hwWjJoMFpYSXRjbTkxWjJWY0lqNWliM2RsY2lCcGJtbDBQQzlqYjJSbFBqd3ZZVDR1UEM5d1BseHVQSEErVkdobGJpQnpZWFpsSUc1bGR5QmtaWEJsYm1SbGJtTnBaWE1nZEc4Z2VXOTFjaUE4WTI5a1pTQmpiR0Z6Y3oxY0ltaHBaMmhzYVdkb2RHVnlMWEp2ZFdkbFhDSStZbTkzWlhJdWFuTnZiand2WTI5a1pUNGdkMmwwYUNBOFkyOWtaU0JqYkdGemN6MWNJbWhwWjJoc2FXZG9kR1Z5TFhKdmRXZGxYQ0krWW05M1pYSWdhVzV6ZEdGc2JDQlFRVU5MUVVkRklDMHRjMkYyWlR3dlkyOWtaVDQ4TDNBK1hHNDhhRE1nYVdROVhDSjFjMlV0Y0dGamEyRm5aWE5jSWo0OFlTQm9jbVZtUFZ3aUkzVnpaUzF3WVdOcllXZGxjMXdpSUdOc1lYTnpQVndpYUdWaFpHVnlMV0Z1WTJodmNsd2lQc0tuUEM5aFBsVnpaU0J3WVdOcllXZGxjend2YURNK1hHNDhjRDVJYjNjZ2VXOTFJSFZ6WlNCd1lXTnJZV2RsY3lCcGN5QjFjQ0IwYnlCNWIzVXVJRmRsSUhKbFkyOXRiV1Z1WkNCNWIzVWdkWE5sSUVKdmQyVnlJSFJ2WjJWMGFHVnlJSGRwZEdnZ1BHRWdhSEpsWmoxY0lpOWtiMk56TDNSdmIyeHpMMXdpUGtkeWRXNTBMQ0JTWlhGMWFYSmxTbE1zSUZsbGIyMWhiaXdnWVc1a0lHeHZkSE1nYjJZZ2IzUm9aWElnZEc5dmJITThMMkUrSUc5eUlHSjFhV3hrSUhsdmRYSWdiM2R1SUhkdmNtdG1iRzkzSUhkcGRHZ2dQR0VnYUhKbFpqMWNJaTlrYjJOekwyRndhUzljSWo1MGFHVWdRVkJKUEM5aFBpNGdXVzkxSUdOaGJpQmhiSE52SUhWelpTQjBhR1VnYVc1emRHRnNiR1ZrSUhCaFkydGhaMlZ6SUdScGNtVmpkR3g1TENCc2FXdGxJSFJvYVhNc0lHbHVJSFJvWlNCallYTmxJRzltSUR4amIyUmxJR05zWVhOelBWd2lhR2xuYUd4cFoyaDBaWEl0Y205MVoyVmNJajVxY1hWbGNuazhMMk52WkdVK09qd3ZjRDVjYmp4bWFXZDFjbVVnWTJ4aGMzTTlYQ0pvYVdkb2JHbG5hSFJjSWo0OGNISmxQanhqYjJSbElHTnNZWE56UFZ3aWJHRnVaM1ZoWjJVdGFIUnRiRndpSUdSaGRHRXRiR0Z1WnoxY0ltaDBiV3hjSWo0OGMzQmhiaUJqYkdGemN6MWNJbTUwWENJK0pteDBPM05qY21sd2RDQThMM053WVc0K1BITndZVzRnWTJ4aGMzTTlYQ0p1WVZ3aVBuTnlZejA4TDNOd1lXNCtQSE53WVc0Z1kyeGhjM005WENKelhDSStYQ0ppYjNkbGNsOWpiMjF3YjI1bGJuUnpMMnB4ZFdWeWVTOWthWE4wTDJweGRXVnllUzV0YVc0dWFuTmNJand2YzNCaGJqNDhjM0JoYmlCamJHRnpjejFjSW01MFhDSStKbWQwT3lac2REc3ZjMk55YVhCMEptZDBPend2YzNCaGJqNDhMMk52WkdVK1BDOXdjbVUrUEM5bWFXZDFjbVUrWEc0OGFESWdhV1E5WENKMGQybDBkR1Z5TFhWd1pHRjBaWE10Wm5KdmJTMWliM2RsY21oMGRIQnpkSGRwZEhSbGNtTnZiV0p2ZDJWeVhDSStQR0VnYUhKbFpqMWNJaU4wZDJsMGRHVnlMWFZ3WkdGMFpYTXRabkp2YlMxaWIzZGxjbWgwZEhCemRIZHBkSFJsY21OdmJXSnZkMlZ5WENJZ1kyeGhjM005WENKb1pXRmtaWEl0WVc1amFHOXlYQ0krd3FjOEwyRStWSGRwZEhSbGNpQjFjR1JoZEdWeklHWnliMjBnUEdFZ2FISmxaajFjSW1oMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlltOTNaWEpjSWo1QVltOTNaWEk4TDJFK1BDOW9NajVjYmp4d1BqeGhJR05zWVhOelBWd2lkSGRwZEhSbGNpMTBhVzFsYkdsdVpWd2lJR2h5WldZOVhDSm9kSFJ3Y3pvdkwzUjNhWFIwWlhJdVkyOXRMMkp2ZDJWeVhDSWdaR0YwWVMxM2FXUm5aWFF0YVdROVhDSTBPREF6TnpjeU9URXpOamszTlRRMk1qVmNJajVVZDJWbGRITWdZbmtnUUdKdmQyVnlQQzloUGx4dVBDOXdQbHh1WEc0OEwyUnBkajVnTEZ4dUlDQWdJSFpwWlhkTmIzSmxPaUI3WEc0Z0lDQWdJQ0FnSUhSbGVIUTZJRndpNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJR2h5WldZNklGd2lhSFIwY0hNNkx5OWliM2RsY2k1cGJ5OWNJbHh1SUNBZ0lIMWNibjBzSUh0Y2JpQWdJQ0IwYVhSc1pUb2dYQ0pDYjNKM2MyVnlVM2x1WTF3aUxGeHVJQ0FnSUdSbGMyTTZJRndpUmtWYUlPUzl2K2VVcUNCQ2NtOTNjMlZ5YzNsdVl5RG9ycW5tdFkvb3A0amxtYWpscnA3bWw3Ymx2NnZwZ0ovbm1vVGxrNDNsdXBUbGlZM25xNi9sa0lUbnA0M21sb2ZrdTdibm1vVG1tN1RtbExubHViYm9oNnJsaXFqbGlMZm1sckRwb2JYcG5hTHZ2SXprdXFibGo2L2xycDdtbDdibGtJem1yYVhsa0lUa3VLcm51NGpucTYvdnZJem1qNURwcTVqb2g3UGxzSkV6TUNYbm1vVGx2SURsajVIbWxZam5qb2RjSWl4Y2JpQWdJQ0JqYjI1MFpXNTBPaUJnUEdneElHTnNZWE56UFZ3aWFHOXZhMXdpUGxScGJXVXRjMkYyYVc1bklITjVibU5vY205dWFYTmxaQ0JpY205M2MyVnlJSFJsYzNScGJtY3VQQzlvTVQ0OGNDQmpiR0Z6Y3oxY0luSnZibk5sWVd4Y0lqNUpkT0tBbVhNZ2QybGphMlZrTFdaaGMzUWdZVzVrSUhSdmRHRnNiSGtnWm5KbFpTNDhMM0ErUEhBZ1kyeGhjM005WENKMmFXUmxiMXdpUGp4aElHTnNZWE56UFZ3aWRtbGtaVzlmWDJ4cGJtdGNJaUJvY21WbVBWd2lJMXdpUGp3dllUNDhMM0ErUEhBZ1kyeGhjM005WENKb2IzY3RkRzljSWo0OEwzQStQSEFnWTJ4aGMzTTlYQ0pvYjNjdGRHOWZYMk52YlcxaGJtUmNJajV1Y0cwZ2FXNXpkR0ZzYkNBdFp5QmljbTkzYzJWeUxYTjVibU04TDNBK1BIQWdZMnhoYzNNOVhDSmpkR0ZjSWo0OFlTQmpiR0Z6Y3oxY0ltSjFkSFJ2YmlCaWRYUjBiMjR0TFhCeWFXMWhjbmxjSWlCb2NtVm1QVndpSTJsdWMzUmhiR3hjSWlCMGFYUnNaVDFjSWtkbGRDQlRkR0Z5ZEdWa1hDSStSMlYwSUZOMFlYSjBaV1E4TDJFK1BDOXdQanhrYVhZZ1kyeGhjM005WENKd2JHRjVaWEpjSWo0OGNENG5ZbTl1YW05MWNqd3ZjRDQ4TDJScGRqNWdMRnh1SUNBZ0lIWnBaWGROYjNKbE9pQjdYRzRnSUNBZ0lDQWdJSFJsZUhRNklGd2k1cHUwNWFTYTVMK2g1b0d2WENJc1hHNGdJQ0FnSUNBZ0lHaHlaV1k2SUZ3aWFIUjBjSE02THk5aWNtOTNjMlZ5YzNsdVl5NXBieTljSWx4dUlDQWdJSDFjYm4xZFhHNWNibXhsZENCcGJtUmxlQ0E5SUh0Y2JpQWdJQ0JtWlhwa1pYTmpPaUJjSWtaRldpRGxpWTNucTYvbXFLSGxuWmZsakpibHQ2WG5xSXZsdklEbGo1SG1vWWJtbnJaY0lpeGNiaUFnSUNCcWRXMWliM1J5YjI0NklIdGNiaUFnSUNBZ0lDQWdkR2wwYkdVNklGd2lTR1ZzYkc4Z1JrVmFJRUZ1WkNCR2NtRnRaWGR2Y21zM0lWd2lMRnh1SUNBZ0lDQWdJQ0JqYjI1MFpXNTBPaUJjSXVpL21lYVlyK1M0Z09TNHF1Uzl2K2VVcUNCR1JWb2c1cEN0NWJ1NjU1cUU1NVNvNUxxTzVieUE1WStSNXJlMzVaQ0k1NmU3NVlxbzVicVU1NVNvNW9pV0lHbFBVeURsa293Z1FXNWtjbTlwWkNEcG80N21vTHpubW9SWFJVSWdRVkJRNTVxRTU2UzY1TDZMNDRDQzVyeVU1NlM2NUxxRzVaKzY1THFPSUVaeVlXMWxkMjl5YXpjZzU3dVQ1WkNJSUZaMVpTRG1ub1RsdTdycHE1am1nS2ZvZzczbGpaWHBvYlhwbmFMbnA3dmxpcWpsdXBUbmxLampnSUpjSWl4Y2JpQWdJQ0FnSUNBZ1luVjBkRzl1T2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQmdQR2tnWTJ4aGMzTTlYQ0ptWVNCbVlTMW5hWFJvZFdJdFlXeDBYQ0krUEM5cFBpQkhhWFJJZFdKZ0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYUhKbFpqb2dYQ0pvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wm5WeWFXTXRlbWhoYnk5bVpYcGNJbHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNXNaWFFnYkdsemRDQTlJSHRjYmlBZ0lDQnFkVzFpYjNSeWIyNDZJSHRjYmlBZ0lDQWdJQ0FnZEdsMGJHVTZJRndpUmtWYUlFWnlZVzFsSVZ3aUxGeHVJQ0FnSUNBZ0lDQmpiMjUwWlc1ME9pQmNJdWkvbWVhWXIrUzRnT1M0cXVXSWwraWhxT1d4bGVla3V1bWh0ZSs4ak9pdnQrZUN1ZVdIdStTNGkrbWRvdVdJbCtpaHFPbWh1ZWVicnVpL20rV0ZwZWl2cHVhRGhlbWh0ZWExaitpbmlGd2lMRnh1SUNBZ0lDQWdJQ0JpZFhSMGIyNDZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U2SUZ3aTVwK2w1NXlMNXB1MDVhU2E1TCtoNW9HdlhDSXNYRzRnSUNBZ0lDQWdJQ0FnSUNCb2NtVm1PaUJjSW1oMGRIQTZMeTltWlhvdWFHVnpkSFZrZVM1amIyMWNJbHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNXNaWFFnWTI5dGJXOXVJRDBnZTF4dUlDQWdJSE5wZEdWT1lXMWxPaUJjSWtaRldpQkdjbUZ0WlhkdmNtczNJRVJsYlc5Y0lpeGNibHh1SUNBZ0lHNWhkam9nVzN0Y2JpQWdJQ0FnSUNBZ2JtRnRaVG9nWENKR1JWcmxuN3Jtbkt6bW5yYm1ub1JjSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENJdmJHbHpkR2x1Wnk5Y0lseHVJQ0FnSUgwc0lIdGNiaUFnSUNBZ0lDQWdibUZ0WlRvZ1hDTG9vYWpsalpYbnBMcmt2b3RjSWl4Y2JpQWdJQ0FnSUNBZ2FISmxaam9nWENJdlptOXliUzljSWx4dUlDQWdJSDBzSUh0Y2JpQWdJQ0FnSUNBZ2JtRnRaVG9nWENKU1JWTlU2YU9PNXFDODU1cUU1WXFvNW9DQjZMZXY1NVN4WENJc1hHNGdJQ0FnSUNBZ0lHaHlaV1k2SUZ3aUwyUjVibUZ0YVdNdGNtOTFkR1V2WW14dlp5ODBOUzl3YjNOMEx6RXlOUzgvWm05dlBXSmhjaU5oWW05MWRGd2lYRzRnSUNBZ2ZTd2dlMXh1SUNBZ0lDQWdJQ0J1WVcxbE9pQmNJdVdGcytTNmprWkZXbHdpTEZ4dUlDQWdJQ0FnSUNCb2NtVm1PaUJjSWk5aFltOTFkQzljSWx4dUlDQWdJSDFkTEZ4dUlDQWdJSFJwY0hNNklGd2k1cHlzNTZTNjVMNkw1TGk2NTZlNzVZcW81NnV2Nlp1RzVvaVE1THFHVWtWTjZLZWo1WWF6NXBhNTVxR0k3N3lNNVkrdjVMdWw2SytWNTUyQTVxaXE1YkdQNDRDQjVvaVc1WnlvNXB1MDVhU241NXFFNTZlNzVZcW81NnV2NWJHUDVibVY1cldQNktlSTc3eU02YUcxNloyaTVMaXQ1NXFFNW9tQTVweUo1WVdENTdTZzVaeW81TGlONVpDTTU1cUU1YkdQNWJtVjVMaXQ1THlhNTYySjVxK1U1N3lwNXBTKzQ0Q0NYQ0lzWEc0Z0lDQWdabTl2ZEdWeVZHVjRkRG9nWENMQ3FTQXlNREUzSUVaRldpRGxpWTNucTYvbXFLSGxuWmZsakpibHQ2WG5xSXZsdklEbGo1SG1vWWJtbnJZZ1EzSmxZWFJsWkNCaWVTQkdkWEpwWXk1NmFHRnZYQ0pjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUZ3aWFXNWtaWGhjSWpvZ2FXNWtaWGdzWEc0Z0lDQWdYQ0pzYVhOMFhDSTZJR3hwYzNRc1hHNGdJQ0FnWENKbWNtRnRaWE5jSWpvZ1puSmhiV1Z6TEZ4dUlDQWdJRndpWTI5dGJXOXVYQ0k2SUdOdmJXMXZibHh1ZlZ4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdJRndpWkdWbVlYVnNkRndpT2lCeVpYRjFhWEpsS0Z3aVkyOXlaUzFxY3k5c2FXSnlZWEo1TDJadUwyZGxkQzFwZEdWeVlYUnZjbHdpS1N3Z1gxOWxjMDF2WkhWc1pUb2dkSEoxWlNCOU95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdleUJjSW1SbFptRjFiSFJjSWpvZ2NtVnhkV2x5WlNoY0ltTnZjbVV0YW5NdmJHbGljbUZ5ZVM5bWJpOXZZbXBsWTNRdllYTnphV2R1WENJcExDQmZYMlZ6VFc5a2RXeGxPaUIwY25WbElIMDdJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYm1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3WEc1Y2JuWmhjaUJmWVhOemFXZHVJRDBnY21WeGRXbHlaU2hjSWk0dUwyTnZjbVV0YW5NdmIySnFaV04wTDJGemMybG5ibHdpS1R0Y2JseHVkbUZ5SUY5aGMzTnBaMjR5SUQwZ1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2hmWVhOemFXZHVLVHRjYmx4dVpuVnVZM1JwYjI0Z1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2h2WW1vcElIc2djbVYwZFhKdUlHOWlhaUFtSmlCdlltb3VYMTlsYzAxdlpIVnNaU0EvSUc5aWFpQTZJSHNnWkdWbVlYVnNkRG9nYjJKcUlIMDdJSDFjYmx4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1gyRnpjMmxuYmpJdVpHVm1ZWFZzZENCOGZDQm1kVzVqZEdsdmJpQW9kR0Z5WjJWMEtTQjdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXhPeUJwSUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdkbUZ5SUhOdmRYSmpaU0E5SUdGeVozVnRaVzUwYzF0cFhUdGNibHh1SUNBZ0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCemIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29jMjkxY21ObExDQnJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lIUmhjbWRsZEZ0clpYbGRJRDBnYzI5MWNtTmxXMnRsZVYwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSaGNtZGxkRHRjYm4wN0lpd2ljbVZ4ZFdseVpTZ25MaTR2Ylc5a2RXeGxjeTkzWldJdVpHOXRMbWwwWlhKaFlteGxKeWs3WEc1eVpYRjFhWEpsS0NjdUxpOXRiMlIxYkdWekwyVnpOaTV6ZEhKcGJtY3VhWFJsY21GMGIzSW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk0dmJXOWtkV3hsY3k5amIzSmxMbWRsZEMxcGRHVnlZWFJ2Y2ljcE95SXNJbkpsY1hWcGNtVW9KeTR1THk0dUwyMXZaSFZzWlhNdlpYTTJMbTlpYW1WamRDNWhjM05wWjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbVZ4ZFdseVpTZ25MaTR2TGk0dmJXOWtkV3hsY3k5ZlkyOXlaU2NwTGs5aWFtVmpkQzVoYzNOcFoyNDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWhwZENsN1hHNGdJR2xtS0hSNWNHVnZaaUJwZENBaFBTQW5ablZ1WTNScGIyNG5LWFJvY205M0lGUjVjR1ZGY25KdmNpaHBkQ0FySUNjZ2FYTWdibTkwSUdFZ1puVnVZM1JwYjI0aEp5azdYRzRnSUhKbGRIVnliaUJwZER0Y2JuMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWdwZXlBdktpQmxiWEIwZVNBcUx5QjlPeUlzSW5aaGNpQnBjMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJsekxXOWlhbVZqZENjcE8xeHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpaHBkQ2w3WEc0Z0lHbG1LQ0ZwYzA5aWFtVmpkQ2hwZENrcGRHaHliM2NnVkhsd1pVVnljbTl5S0dsMElDc2dKeUJwY3lCdWIzUWdZVzRnYjJKcVpXTjBJU2NwTzF4dUlDQnlaWFIxY200Z2FYUTdYRzU5T3lJc0lpOHZJR1poYkhObElDMCtJRUZ5Y21GNUkybHVaR1Y0VDJaY2JpOHZJSFJ5ZFdVZ0lDMCtJRUZ5Y21GNUkybHVZMngxWkdWelhHNTJZWElnZEc5SlQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0YVc5aWFtVmpkQ2NwWEc0Z0lDd2dkRzlNWlc1bmRHZ2dJRDBnY21WeGRXbHlaU2duTGk5ZmRHOHRiR1Z1WjNSb0p5bGNiaUFnTENCMGIwbHVaR1Y0SUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTkwYnkxcGJtUmxlQ2NwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloSlUxOUpUa05NVlVSRlV5bDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWdrZEdocGN5d2daV3dzSUdaeWIyMUpibVJsZUNsN1hHNGdJQ0FnZG1GeUlFOGdJQ0FnSUNBOUlIUnZTVTlpYW1WamRDZ2tkR2hwY3lsY2JpQWdJQ0FnSUN3Z2JHVnVaM1JvSUQwZ2RHOU1aVzVuZEdnb1R5NXNaVzVuZEdncFhHNGdJQ0FnSUNBc0lHbHVaR1Y0SUNBOUlIUnZTVzVrWlhnb1puSnZiVWx1WkdWNExDQnNaVzVuZEdncFhHNGdJQ0FnSUNBc0lIWmhiSFZsTzF4dUlDQWdJQzh2SUVGeWNtRjVJMmx1WTJ4MVpHVnpJSFZ6WlhNZ1UyRnRaVlpoYkhWbFdtVnlieUJsY1hWaGJHbDBlU0JoYkdkdmNtbDBhRzFjYmlBZ0lDQnBaaWhKVTE5SlRrTk1WVVJGVXlBbUppQmxiQ0FoUFNCbGJDbDNhR2xzWlNoc1pXNW5kR2dnUGlCcGJtUmxlQ2w3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJRTliYVc1a1pYZ3JLMTA3WEc0Z0lDQWdJQ0JwWmloMllXeDFaU0FoUFNCMllXeDFaU2x5WlhSMWNtNGdkSEoxWlR0Y2JpQWdJQ0F2THlCQmNuSmhlU04wYjBsdVpHVjRJR2xuYm05eVpYTWdhRzlzWlhNc0lFRnljbUY1STJsdVkyeDFaR1Z6SUMwZ2JtOTBYRzRnSUNBZ2ZTQmxiSE5sSUdadmNpZzdiR1Z1WjNSb0lENGdhVzVrWlhnN0lHbHVaR1Y0S3lzcGFXWW9TVk5mU1U1RFRGVkVSVk1nZkh3Z2FXNWtaWGdnYVc0Z1R5bDdYRzRnSUNBZ0lDQnBaaWhQVzJsdVpHVjRYU0E5UFQwZ1pXd3BjbVYwZFhKdUlFbFRYMGxPUTB4VlJFVlRJSHg4SUdsdVpHVjRJSHg4SURBN1hHNGdJQ0FnZlNCeVpYUjFjbTRnSVVsVFgwbE9RMHhWUkVWVElDWW1JQzB4TzF4dUlDQjlPMXh1ZlRzaUxDSXZMeUJuWlhSMGFXNW5JSFJoWnlCbWNtOXRJREU1TGpFdU15NDJJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY29LVnh1ZG1GeUlHTnZaaUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZaaWNwWEc0Z0lDd2dWRUZISUQwZ2NtVnhkV2x5WlNnbkxpOWZkMnR6Snlrb0ozUnZVM1J5YVc1blZHRm5KeWxjYmlBZ0x5OGdSVk16SUhkeWIyNW5JR2hsY21WY2JpQWdMQ0JCVWtjZ1BTQmpiMllvWm5WdVkzUnBiMjRvS1hzZ2NtVjBkWEp1SUdGeVozVnRaVzUwY3pzZ2ZTZ3BLU0E5UFNBblFYSm5kVzFsYm5Sekp6dGNibHh1THk4Z1ptRnNiR0poWTJzZ1ptOXlJRWxGTVRFZ1UyTnlhWEIwSUVGalkyVnpjeUJFWlc1cFpXUWdaWEp5YjNKY2JuWmhjaUIwY25sSFpYUWdQU0JtZFc1amRHbHZiaWhwZEN3Z2EyVjVLWHRjYmlBZ2RISjVJSHRjYmlBZ0lDQnlaWFIxY200Z2FYUmJhMlY1WFR0Y2JpQWdmU0JqWVhSamFDaGxLWHNnTHlvZ1pXMXdkSGtnS2k4Z2ZWeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDbDdYRzRnSUhaaGNpQlBMQ0JVTENCQ08xeHVJQ0J5WlhSMWNtNGdhWFFnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JQ2RWYm1SbFptbHVaV1FuSURvZ2FYUWdQVDA5SUc1MWJHd2dQeUFuVG5Wc2JDZGNiaUFnSUNBdkx5QkFRSFJ2VTNSeWFXNW5WR0ZuSUdOaGMyVmNiaUFnSUNBNklIUjVjR1Z2WmlBb1ZDQTlJSFJ5ZVVkbGRDaFBJRDBnVDJKcVpXTjBLR2wwS1N3Z1ZFRkhLU2tnUFQwZ0ozTjBjbWx1WnljZ1B5QlVYRzRnSUNBZ0x5OGdZblZwYkhScGJsUmhaeUJqWVhObFhHNGdJQ0FnT2lCQlVrY2dQeUJqYjJZb1R5bGNiaUFnSUNBdkx5QkZVek1nWVhKbmRXMWxiblJ6SUdaaGJHeGlZV05yWEc0Z0lDQWdPaUFvUWlBOUlHTnZaaWhQS1NrZ1BUMGdKMDlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRTh1WTJGc2JHVmxJRDA5SUNkbWRXNWpkR2x2YmljZ1B5QW5RWEpuZFcxbGJuUnpKeUE2SUVJN1hHNTlPeUlzSW5aaGNpQjBiMU4wY21sdVp5QTlJSHQ5TG5SdlUzUnlhVzVuTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2NtVjBkWEp1SUhSdlUzUnlhVzVuTG1OaGJHd29hWFFwTG5Oc2FXTmxLRGdzSUMweEtUdGNibjA3SWl3aWRtRnlJR052Y21VZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdDJaWEp6YVc5dU9pQW5NaTQwTGpBbmZUdGNibWxtS0hSNWNHVnZaaUJmWDJVZ1BUMGdKMjUxYldKbGNpY3BYMTlsSUQwZ1kyOXlaVHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTExYm1SbFppSXNJaTh2SUc5d2RHbHZibUZzSUM4Z2MybHRjR3hsSUdOdmJuUmxlSFFnWW1sdVpHbHVaMXh1ZG1GeUlHRkdkVzVqZEdsdmJpQTlJSEpsY1hWcGNtVW9KeTR2WDJFdFpuVnVZM1JwYjI0bktUdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9abTRzSUhSb1lYUXNJR3hsYm1kMGFDbDdYRzRnSUdGR2RXNWpkR2x2YmlobWJpazdYRzRnSUdsbUtIUm9ZWFFnUFQwOUlIVnVaR1ZtYVc1bFpDbHlaWFIxY200Z1ptNDdYRzRnSUhOM2FYUmphQ2hzWlc1bmRHZ3BlMXh1SUNBZ0lHTmhjMlVnTVRvZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0dFcGUxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDd2dZU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQmpZWE5sSURJNklISmxkSFZ5YmlCbWRXNWpkR2x2YmloaExDQmlLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzSUdFc0lHSXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1kyRnpaU0F6T2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRvWVN3Z1lpd2dZeWw3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabTR1WTJGc2JDaDBhR0YwTENCaExDQmlMQ0JqS1R0Y2JpQWdJQ0I5TzF4dUlDQjlYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWd2S2lBdUxpNWhjbWR6SUNvdktYdGNiaUFnSUNCeVpYUjFjbTRnWm00dVlYQndiSGtvZEdoaGRDd2dZWEpuZFcxbGJuUnpLVHRjYmlBZ2ZUdGNibjA3SWl3aUx5OGdOeTR5TGpFZ1VtVnhkV2x5WlU5aWFtVmpkRU52WlhKamFXSnNaU2hoY21kMWJXVnVkQ2xjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRcGUxeHVJQ0JwWmlocGRDQTlQU0IxYm1SbFptbHVaV1FwZEdoeWIzY2dWSGx3WlVWeWNtOXlLRndpUTJGdUozUWdZMkZzYkNCdFpYUm9iMlFnYjI0Z0lGd2lJQ3NnYVhRcE8xeHVJQ0J5WlhSMWNtNGdhWFE3WEc1OU95SXNJaTh2SUZSb1lXNXJKM01nU1VVNElHWnZjaUJvYVhNZ1puVnVibmtnWkdWbWFXNWxVSEp2Y0dWeWRIbGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJWEpsY1hWcGNtVW9KeTR2WDJaaGFXeHpKeWtvWm5WdVkzUnBiMjRvS1h0Y2JpQWdjbVYwZFhKdUlFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2g3ZlN3Z0oyRW5MQ0I3WjJWME9pQm1kVzVqZEdsdmJpZ3BleUJ5WlhSMWNtNGdOenNnZlgwcExtRWdJVDBnTnp0Y2JuMHBPeUlzSW5aaGNpQnBjMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR2WDJsekxXOWlhbVZqZENjcFhHNGdJQ3dnWkc5amRXMWxiblFnUFNCeVpYRjFhWEpsS0NjdUwxOW5iRzlpWVd3bktTNWtiMk4xYldWdWRGeHVJQ0F2THlCcGJpQnZiR1FnU1VVZ2RIbHdaVzltSUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUWdhWE1nSjI5aWFtVmpkQ2RjYmlBZ0xDQnBjeUE5SUdselQySnFaV04wS0dSdlkzVnRaVzUwS1NBbUppQnBjMDlpYW1WamRDaGtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnYVhNZ1B5QmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0dsMEtTQTZJSHQ5TzF4dWZUc2lMQ0l2THlCSlJTQTRMU0JrYjI0bmRDQmxiblZ0SUdKMVp5QnJaWGx6WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUNoY2JpQWdKMk52Ym5OMGNuVmpkRzl5TEdoaGMwOTNibEJ5YjNCbGNuUjVMR2x6VUhKdmRHOTBlWEJsVDJZc2NISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVXNkRzlNYjJOaGJHVlRkSEpwYm1jc2RHOVRkSEpwYm1jc2RtRnNkV1ZQWmlkY2Jpa3VjM0JzYVhRb0p5d25LVHNpTENKMllYSWdaMnh2WW1Gc0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZloyeHZZbUZzSnlsY2JpQWdMQ0JqYjNKbElDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWpiM0psSnlsY2JpQWdMQ0JqZEhnZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOWpkSGduS1Z4dUlDQXNJR2hwWkdVZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyaHBaR1VuS1Z4dUlDQXNJRkJTVDFSUFZGbFFSU0E5SUNkd2NtOTBiM1I1Y0dVbk8xeHVYRzUyWVhJZ0pHVjRjRzl5ZENBOUlHWjFibU4wYVc5dUtIUjVjR1VzSUc1aGJXVXNJSE52ZFhKalpTbDdYRzRnSUhaaGNpQkpVMTlHVDFKRFJVUWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUdYRzRnSUNBZ0xDQkpVMTlIVEU5Q1FVd2dQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUhYRzRnSUNBZ0xDQkpVMTlUVkVGVVNVTWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVRYRzRnSUNBZ0xDQkpVMTlRVWs5VVR5QWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVFYRzRnSUNBZ0xDQkpVMTlDU1U1RUlDQWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNUNYRzRnSUNBZ0xDQkpVMTlYVWtGUUlDQWdQU0IwZVhCbElDWWdKR1Y0Y0c5eWRDNVhYRzRnSUNBZ0xDQmxlSEJ2Y25SeklDQWdQU0JKVTE5SFRFOUNRVXdnUHlCamIzSmxJRG9nWTI5eVpWdHVZVzFsWFNCOGZDQW9ZMjl5WlZ0dVlXMWxYU0E5SUh0OUtWeHVJQ0FnSUN3Z1pYaHdVSEp2ZEc4Z0lEMGdaWGh3YjNKMGMxdFFVazlVVDFSWlVFVmRYRzRnSUNBZ0xDQjBZWEpuWlhRZ0lDQWdQU0JKVTE5SFRFOUNRVXdnUHlCbmJHOWlZV3dnT2lCSlUxOVRWRUZVU1VNZ1B5Qm5iRzlpWVd4YmJtRnRaVjBnT2lBb1oyeHZZbUZzVzI1aGJXVmRJSHg4SUh0OUtWdFFVazlVVDFSWlVFVmRYRzRnSUNBZ0xDQnJaWGtzSUc5M2Jpd2diM1YwTzF4dUlDQnBaaWhKVTE5SFRFOUNRVXdwYzI5MWNtTmxJRDBnYm1GdFpUdGNiaUFnWm05eUtHdGxlU0JwYmlCemIzVnlZMlVwZTF4dUlDQWdJQzh2SUdOdmJuUmhhVzV6SUdsdUlHNWhkR2wyWlZ4dUlDQWdJRzkzYmlBOUlDRkpVMTlHVDFKRFJVUWdKaVlnZEdGeVoyVjBJQ1ltSUhSaGNtZGxkRnRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdhV1lvYjNkdUlDWW1JR3RsZVNCcGJpQmxlSEJ2Y25SektXTnZiblJwYm5WbE8xeHVJQ0FnSUM4dklHVjRjRzl5ZENCdVlYUnBkbVVnYjNJZ2NHRnpjMlZrWEc0Z0lDQWdiM1YwSUQwZ2IzZHVJRDhnZEdGeVoyVjBXMnRsZVYwZ09pQnpiM1Z5WTJWYmEyVjVYVHRjYmlBZ0lDQXZMeUJ3Y21WMlpXNTBJR2RzYjJKaGJDQndiMnhzZFhScGIyNGdabTl5SUc1aGJXVnpjR0ZqWlhOY2JpQWdJQ0JsZUhCdmNuUnpXMnRsZVYwZ1BTQkpVMTlIVEU5Q1FVd2dKaVlnZEhsd1pXOW1JSFJoY21kbGRGdHJaWGxkSUNFOUlDZG1kVzVqZEdsdmJpY2dQeUJ6YjNWeVkyVmJhMlY1WFZ4dUlDQWdJQzh2SUdKcGJtUWdkR2x0WlhKeklIUnZJR2RzYjJKaGJDQm1iM0lnWTJGc2JDQm1jbTl0SUdWNGNHOXlkQ0JqYjI1MFpYaDBYRzRnSUNBZ09pQkpVMTlDU1U1RUlDWW1JRzkzYmlBL0lHTjBlQ2h2ZFhRc0lHZHNiMkpoYkNsY2JpQWdJQ0F2THlCM2NtRndJR2RzYjJKaGJDQmpiMjV6ZEhKMVkzUnZjbk1nWm05eUlIQnlaWFpsYm5RZ1kyaGhibWRsSUhSb1pXMGdhVzRnYkdsaWNtRnllVnh1SUNBZ0lEb2dTVk5mVjFKQlVDQW1KaUIwWVhKblpYUmJhMlY1WFNBOVBTQnZkWFFnUHlBb1puVnVZM1JwYjI0b1F5bDdYRzRnSUNBZ0lDQjJZWElnUmlBOUlHWjFibU4wYVc5dUtHRXNJR0lzSUdNcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdseklHbHVjM1JoYm1ObGIyWWdReWw3WEc0Z0lDQWdJQ0FnSUNBZ2MzZHBkR05vS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBd09pQnlaWFIxY200Z2JtVjNJRU03WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSURFNklISmxkSFZ5YmlCdVpYY2dReWhoS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ01qb2djbVYwZFhKdUlHNWxkeUJES0dFc0lHSXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ2NtVjBkWEp1SUc1bGR5QkRLR0VzSUdJc0lHTXBPMXh1SUNBZ0lDQWdJQ0I5SUhKbGRIVnliaUJETG1Gd2NHeDVLSFJvYVhNc0lHRnlaM1Z0Wlc1MGN5azdYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdSbHRRVWs5VVQxUlpVRVZkSUQwZ1ExdFFVazlVVDFSWlVFVmRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlFWTdYRzRnSUNBZ0x5OGdiV0ZyWlNCemRHRjBhV01nZG1WeWMybHZibk1nWm05eUlIQnliM1J2ZEhsd1pTQnRaWFJvYjJSelhHNGdJQ0FnZlNrb2IzVjBLU0E2SUVsVFgxQlNUMVJQSUNZbUlIUjVjR1Z2WmlCdmRYUWdQVDBnSjJaMWJtTjBhVzl1SnlBL0lHTjBlQ2hHZFc1amRHbHZiaTVqWVd4c0xDQnZkWFFwSURvZ2IzVjBPMXh1SUNBZ0lDOHZJR1Y0Y0c5eWRDQndjbTkwYnlCdFpYUm9iMlJ6SUhSdklHTnZjbVV1SlVOUFRsTlVVbFZEVkU5U0pTNXRaWFJvYjJSekxpVk9RVTFGSlZ4dUlDQWdJR2xtS0VsVFgxQlNUMVJQS1h0Y2JpQWdJQ0FnSUNobGVIQnZjblJ6TG5acGNuUjFZV3dnZkh3Z0tHVjRjRzl5ZEhNdWRtbHlkSFZoYkNBOUlIdDlLU2xiYTJWNVhTQTlJRzkxZER0Y2JpQWdJQ0FnSUM4dklHVjRjRzl5ZENCd2NtOTBieUJ0WlhSb2IyUnpJSFJ2SUdOdmNtVXVKVU5QVGxOVVVsVkRWRTlTSlM1d2NtOTBiM1I1Y0dVdUpVNUJUVVVsWEc0Z0lDQWdJQ0JwWmloMGVYQmxJQ1lnSkdWNGNHOXlkQzVTSUNZbUlHVjRjRkJ5YjNSdklDWW1JQ0ZsZUhCUWNtOTBiMXRyWlhsZEtXaHBaR1VvWlhod1VISnZkRzhzSUd0bGVTd2diM1YwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc0dkx5QjBlWEJsSUdKcGRHMWhjRnh1SkdWNGNHOXlkQzVHSUQwZ01Uc2dJQ0F2THlCbWIzSmpaV1JjYmlSbGVIQnZjblF1UnlBOUlESTdJQ0FnTHk4Z1oyeHZZbUZzWEc0a1pYaHdiM0owTGxNZ1BTQTBPeUFnSUM4dklITjBZWFJwWTF4dUpHVjRjRzl5ZEM1UUlEMGdPRHNnSUNBdkx5QndjbTkwYjF4dUpHVjRjRzl5ZEM1Q0lEMGdNVFk3SUNBdkx5QmlhVzVrWEc0a1pYaHdiM0owTGxjZ1BTQXpNanNnSUM4dklIZHlZWEJjYmlSbGVIQnZjblF1VlNBOUlEWTBPeUFnTHk4Z2MyRm1aVnh1SkdWNGNHOXlkQzVTSUQwZ01USTRPeUF2THlCeVpXRnNJSEJ5YjNSdklHMWxkR2h2WkNCbWIzSWdZR3hwWW5KaGNubGdJRnh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0FrWlhod2IzSjBPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvWlhobFl5bDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUNFaFpYaGxZeWdwTzF4dUlDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOVhHNTlPeUlzSWk4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOTZiRzlwY205amF5OWpiM0psTFdwekwybHpjM1ZsY3k4NE5pTnBjM04xWldOdmJXMWxiblF0TVRFMU56VTVNREk0WEc1MllYSWdaMnh2WW1Gc0lEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjBlWEJsYjJZZ2QybHVaRzkzSUNFOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTVOWVhSb0lEMDlJRTFoZEdoY2JpQWdQeUIzYVc1a2IzY2dPaUIwZVhCbGIyWWdjMlZzWmlBaFBTQW5kVzVrWldacGJtVmtKeUFtSmlCelpXeG1MazFoZEdnZ1BUMGdUV0YwYUNBL0lITmxiR1lnT2lCR2RXNWpkR2x2YmlnbmNtVjBkWEp1SUhSb2FYTW5LU2dwTzF4dWFXWW9kSGx3Wlc5bUlGOWZaeUE5UFNBbmJuVnRZbVZ5SnlsZlgyY2dQU0JuYkc5aVlXdzdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ2JtOHRkVzVrWldZaUxDSjJZWElnYUdGelQzZHVVSEp2Y0dWeWRIa2dQU0I3ZlM1b1lYTlBkMjVRY205d1pYSjBlVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRvYVhRc0lHdGxlU2w3WEc0Z0lISmxkSFZ5YmlCb1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHbDBMQ0JyWlhrcE8xeHVmVHNpTENKMllYSWdaRkFnSUNBZ0lDQWdJQ0E5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxa2NDY3BYRzRnSUN3Z1kzSmxZWFJsUkdWell5QTlJSEpsY1hWcGNtVW9KeTR2WDNCeWIzQmxjblI1TFdSbGMyTW5LVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnYTJWNUxDQjJZV3gxWlNsN1hHNGdJSEpsZEhWeWJpQmtVQzVtS0c5aWFtVmpkQ3dnYTJWNUxDQmpjbVZoZEdWRVpYTmpLREVzSUhaaGJIVmxLU2s3WEc1OUlEb2dablZ1WTNScGIyNG9iMkpxWldOMExDQnJaWGtzSUhaaGJIVmxLWHRjYmlBZ2IySnFaV04wVzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnY21WMGRYSnVJRzlpYW1WamREdGNibjA3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCeVpYRjFhWEpsS0NjdUwxOW5iRzlpWVd3bktTNWtiMk4xYldWdWRDQW1KaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUTdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0FoY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0FtSmlBaGNtVnhkV2x5WlNnbkxpOWZabUZwYkhNbktTaG1kVzVqZEdsdmJpZ3BlMXh1SUNCeVpYUjFjbTRnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtISmxjWFZwY21Vb0p5NHZYMlJ2YlMxamNtVmhkR1VuS1NnblpHbDJKeWtzSUNkaEp5d2dlMmRsZERvZ1puVnVZM1JwYjI0b0tYc2djbVYwZFhKdUlEYzdJSDE5S1M1aElDRTlJRGM3WEc1OUtUc2lMQ0l2THlCbVlXeHNZbUZqYXlCbWIzSWdibTl1TFdGeWNtRjVMV3hwYTJVZ1JWTXpJR0Z1WkNCdWIyNHRaVzUxYldWeVlXSnNaU0J2YkdRZ1ZqZ2djM1J5YVc1bmMxeHVkbUZ5SUdOdlppQTlJSEpsY1hWcGNtVW9KeTR2WDJOdlppY3BPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JQWW1wbFkzUW9KM29uS1M1d2NtOXdaWEowZVVselJXNTFiV1Z5WVdKc1pTZ3dLU0EvSUU5aWFtVmpkQ0E2SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJR052WmlocGRDa2dQVDBnSjFOMGNtbHVaeWNnUHlCcGRDNXpjR3hwZENnbkp5a2dPaUJQWW1wbFkzUW9hWFFwTzF4dWZUc2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCcGRDQTlQVDBnSjI5aWFtVmpkQ2NnUHlCcGRDQWhQVDBnYm5Wc2JDQTZJSFI1Y0dWdlppQnBkQ0E5UFQwZ0oyWjFibU4wYVc5dUp6dGNibjA3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1ZG1GeUlHTnlaV0YwWlNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExXTnlaV0YwWlNjcFhHNGdJQ3dnWkdWelkzSnBjSFJ2Y2lBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5d2NtOXdaWEowZVMxa1pYTmpKeWxjYmlBZ0xDQnpaWFJVYjFOMGNtbHVaMVJoWnlBOUlISmxjWFZwY21Vb0p5NHZYM05sZEMxMGJ5MXpkSEpwYm1jdGRHRm5KeWxjYmlBZ0xDQkpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTQTlJSHQ5TzF4dVhHNHZMeUF5TlM0eExqSXVNUzR4SUNWSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNWYlFFQnBkR1Z5WVhSdmNsMG9LVnh1Y21WeGRXbHlaU2duTGk5ZmFHbGtaU2NwS0VsMFpYSmhkRzl5VUhKdmRHOTBlWEJsTENCeVpYRjFhWEpsS0NjdUwxOTNhM01uS1NnbmFYUmxjbUYwYjNJbktTd2dablZ1WTNScGIyNG9LWHNnY21WMGRYSnVJSFJvYVhNN0lIMHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0VOdmJuTjBjblZqZEc5eUxDQk9RVTFGTENCdVpYaDBLWHRjYmlBZ1EyOXVjM1J5ZFdOMGIzSXVjSEp2ZEc5MGVYQmxJRDBnWTNKbFlYUmxLRWwwWlhKaGRHOXlVSEp2ZEc5MGVYQmxMQ0I3Ym1WNGREb2daR1Z6WTNKcGNIUnZjaWd4TENCdVpYaDBLWDBwTzF4dUlDQnpaWFJVYjFOMGNtbHVaMVJoWnloRGIyNXpkSEoxWTNSdmNpd2dUa0ZOUlNBcklDY2dTWFJsY21GMGIzSW5LVHRjYm4wN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dWRtRnlJRXhKUWxKQlVsa2dJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYkdsaWNtRnllU2NwWEc0Z0lDd2dKR1Y0Y0c5eWRDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlsZUhCdmNuUW5LVnh1SUNBc0lISmxaR1ZtYVc1bElDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjbVZrWldacGJtVW5LVnh1SUNBc0lHaHBaR1VnSUNBZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhR2xrWlNjcFhHNGdJQ3dnYUdGeklDQWdJQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5b1lYTW5LVnh1SUNBc0lFbDBaWEpoZEc5eWN5QWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWxjYmlBZ0xDQWthWFJsY2tOeVpXRjBaU0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdFkzSmxZWFJsSnlsY2JpQWdMQ0J6WlhSVWIxTjBjbWx1WjFSaFp5QTlJSEpsY1hWcGNtVW9KeTR2WDNObGRDMTBieTF6ZEhKcGJtY3RkR0ZuSnlsY2JpQWdMQ0JuWlhSUWNtOTBiM1I1Y0dWUFppQTlJSEpsY1hWcGNtVW9KeTR2WDI5aWFtVmpkQzFuY0c4bktWeHVJQ0FzSUVsVVJWSkJWRTlTSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjJsMFpYSmhkRzl5SnlsY2JpQWdMQ0JDVlVkSFdTQWdJQ0FnSUNBZ0lDQTlJQ0VvVzEwdWEyVjVjeUFtSmlBbmJtVjRkQ2NnYVc0Z1cxMHVhMlY1Y3lncEtTQXZMeUJUWVdaaGNta2dhR0Z6SUdKMVoyZDVJR2wwWlhKaGRHOXljeUIzTDI4Z1lHNWxlSFJnWEc0Z0lDd2dSa1pmU1ZSRlVrRlVUMUlnSUNBZ1BTQW5RRUJwZEdWeVlYUnZjaWRjYmlBZ0xDQkxSVmxUSUNBZ0lDQWdJQ0FnSUNBOUlDZHJaWGx6SjF4dUlDQXNJRlpCVEZWRlV5QWdJQ0FnSUNBZ0lEMGdKM1poYkhWbGN5YzdYRzVjYm5aaGNpQnlaWFIxY201VWFHbHpJRDBnWm5WdVkzUnBiMjRvS1hzZ2NtVjBkWEp1SUhSb2FYTTdJSDA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1FtRnpaU3dnVGtGTlJTd2dRMjl1YzNSeWRXTjBiM0lzSUc1bGVIUXNJRVJGUmtGVlRGUXNJRWxUWDFORlZDd2dSazlTUTBWRUtYdGNiaUFnSkdsMFpYSkRjbVZoZEdVb1EyOXVjM1J5ZFdOMGIzSXNJRTVCVFVVc0lHNWxlSFFwTzF4dUlDQjJZWElnWjJWMFRXVjBhRzlrSUQwZ1puVnVZM1JwYjI0b2EybHVaQ2w3WEc0Z0lDQWdhV1lvSVVKVlIwZFpJQ1ltSUd0cGJtUWdhVzRnY0hKdmRHOHBjbVYwZFhKdUlIQnliM1J2VzJ0cGJtUmRPMXh1SUNBZ0lITjNhWFJqYUNocmFXNWtLWHRjYmlBZ0lDQWdJR05oYzJVZ1MwVlpVem9nY21WMGRYSnVJR1oxYm1OMGFXOXVJR3RsZVhNb0tYc2djbVYwZFhKdUlHNWxkeUJEYjI1emRISjFZM1J2Y2loMGFHbHpMQ0JyYVc1a0tUc2dmVHRjYmlBZ0lDQWdJR05oYzJVZ1ZrRk1WVVZUT2lCeVpYUjFjbTRnWm5WdVkzUnBiMjRnZG1Gc2RXVnpLQ2w3SUhKbGRIVnliaUJ1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9kR2hwY3l3Z2EybHVaQ2s3SUgwN1hHNGdJQ0FnZlNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnWlc1MGNtbGxjeWdwZXlCeVpYUjFjbTRnYm1WM0lFTnZibk4wY25WamRHOXlLSFJvYVhNc0lHdHBibVFwT3lCOU8xeHVJQ0I5TzF4dUlDQjJZWElnVkVGSElDQWdJQ0FnSUNBOUlFNUJUVVVnS3lBbklFbDBaWEpoZEc5eUoxeHVJQ0FnSUN3Z1JFVkdYMVpCVEZWRlV5QTlJRVJGUmtGVlRGUWdQVDBnVmtGTVZVVlRYRzRnSUNBZ0xDQldRVXhWUlZOZlFsVkhJRDBnWm1Gc2MyVmNiaUFnSUNBc0lIQnliM1J2SUNBZ0lDQWdQU0JDWVhObExuQnliM1J2ZEhsd1pWeHVJQ0FnSUN3Z0pHNWhkR2wyWlNBZ0lDQTlJSEJ5YjNSdlcwbFVSVkpCVkU5U1hTQjhmQ0J3Y205MGIxdEdSbDlKVkVWU1FWUlBVbDBnZkh3Z1JFVkdRVlZNVkNBbUppQndjbTkwYjF0RVJVWkJWVXhVWFZ4dUlDQWdJQ3dnSkdSbFptRjFiSFFnSUNBOUlDUnVZWFJwZG1VZ2ZId2daMlYwVFdWMGFHOWtLRVJGUmtGVlRGUXBYRzRnSUNBZ0xDQWtaVzUwY21sbGN5QWdJRDBnUkVWR1FWVk1WQ0EvSUNGRVJVWmZWa0ZNVlVWVElEOGdKR1JsWm1GMWJIUWdPaUJuWlhSTlpYUm9iMlFvSjJWdWRISnBaWE1uS1NBNklIVnVaR1ZtYVc1bFpGeHVJQ0FnSUN3Z0pHRnVlVTVoZEdsMlpTQTlJRTVCVFVVZ1BUMGdKMEZ5Y21GNUp5QS9JSEJ5YjNSdkxtVnVkSEpwWlhNZ2ZId2dKRzVoZEdsMlpTQTZJQ1J1WVhScGRtVmNiaUFnSUNBc0lHMWxkR2h2WkhNc0lHdGxlU3dnU1hSbGNtRjBiM0pRY205MGIzUjVjR1U3WEc0Z0lDOHZJRVpwZUNCdVlYUnBkbVZjYmlBZ2FXWW9KR0Z1ZVU1aGRHbDJaU2w3WEc0Z0lDQWdTWFJsY21GMGIzSlFjbTkwYjNSNWNHVWdQU0JuWlhSUWNtOTBiM1I1Y0dWUFppZ2tZVzU1VG1GMGFYWmxMbU5oYkd3b2JtVjNJRUpoYzJVcEtUdGNiaUFnSUNCcFppaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTQWhQVDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaU2w3WEc0Z0lDQWdJQ0F2THlCVFpYUWdRRUIwYjFOMGNtbHVaMVJoWnlCMGJ5QnVZWFJwZG1VZ2FYUmxjbUYwYjNKelhHNGdJQ0FnSUNCelpYUlViMU4wY21sdVoxUmhaeWhKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3dnVkVGSExDQjBjblZsS1R0Y2JpQWdJQ0FnSUM4dklHWnBlQ0JtYjNJZ2MyOXRaU0J2YkdRZ1pXNW5hVzVsYzF4dUlDQWdJQ0FnYVdZb0lVeEpRbEpCVWxrZ0ppWWdJV2hoY3loSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlN3Z1NWUkZVa0ZVVDFJcEtXaHBaR1VvU1hSbGNtRjBiM0pRY205MGIzUjVjR1VzSUVsVVJWSkJWRTlTTENCeVpYUjFjbTVVYUdsektUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ0x5OGdabWw0SUVGeWNtRjVJM3QyWVd4MVpYTXNJRUJBYVhSbGNtRjBiM0o5TG01aGJXVWdhVzRnVmpnZ0x5QkdSbHh1SUNCcFppaEVSVVpmVmtGTVZVVlRJQ1ltSUNSdVlYUnBkbVVnSmlZZ0pHNWhkR2wyWlM1dVlXMWxJQ0U5UFNCV1FVeFZSVk1wZTF4dUlDQWdJRlpCVEZWRlUxOUNWVWNnUFNCMGNuVmxPMXh1SUNBZ0lDUmtaV1poZFd4MElEMGdablZ1WTNScGIyNGdkbUZzZFdWektDbDdJSEpsZEhWeWJpQWtibUYwYVhabExtTmhiR3dvZEdocGN5azdJSDA3WEc0Z0lIMWNiaUFnTHk4Z1JHVm1hVzVsSUdsMFpYSmhkRzl5WEc0Z0lHbG1LQ2doVEVsQ1VrRlNXU0I4ZkNCR1QxSkRSVVFwSUNZbUlDaENWVWRIV1NCOGZDQldRVXhWUlZOZlFsVkhJSHg4SUNGd2NtOTBiMXRKVkVWU1FWUlBVbDBwS1h0Y2JpQWdJQ0JvYVdSbEtIQnliM1J2TENCSlZFVlNRVlJQVWl3Z0pHUmxabUYxYkhRcE8xeHVJQ0I5WEc0Z0lDOHZJRkJzZFdjZ1ptOXlJR3hwWW5KaGNubGNiaUFnU1hSbGNtRjBiM0p6VzA1QlRVVmRJRDBnSkdSbFptRjFiSFE3WEc0Z0lFbDBaWEpoZEc5eWMxdFVRVWRkSUNBOUlISmxkSFZ5YmxSb2FYTTdYRzRnSUdsbUtFUkZSa0ZWVEZRcGUxeHVJQ0FnSUcxbGRHaHZaSE1nUFNCN1hHNGdJQ0FnSUNCMllXeDFaWE02SUNCRVJVWmZWa0ZNVlVWVElEOGdKR1JsWm1GMWJIUWdPaUJuWlhSTlpYUm9iMlFvVmtGTVZVVlRLU3hjYmlBZ0lDQWdJR3RsZVhNNklDQWdJRWxUWDFORlZDQWdJQ0FnUHlBa1pHVm1ZWFZzZENBNklHZGxkRTFsZEdodlpDaExSVmxUS1N4Y2JpQWdJQ0FnSUdWdWRISnBaWE02SUNSbGJuUnlhV1Z6WEc0Z0lDQWdmVHRjYmlBZ0lDQnBaaWhHVDFKRFJVUXBabTl5S0d0bGVTQnBiaUJ0WlhSb2IyUnpLWHRjYmlBZ0lDQWdJR2xtS0NFb2EyVjVJR2x1SUhCeWIzUnZLU2x5WldSbFptbHVaU2h3Y205MGJ5d2dhMlY1TENCdFpYUm9iMlJ6VzJ0bGVWMHBPMXh1SUNBZ0lIMGdaV3h6WlNBa1pYaHdiM0owS0NSbGVIQnZjblF1VUNBcklDUmxlSEJ2Y25RdVJpQXFJQ2hDVlVkSFdTQjhmQ0JXUVV4VlJWTmZRbFZIS1N3Z1RrRk5SU3dnYldWMGFHOWtjeWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzFsZEdodlpITTdYRzU5T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b1pHOXVaU3dnZG1Gc2RXVXBlMXh1SUNCeVpYUjFjbTRnZTNaaGJIVmxPaUIyWVd4MVpTd2daRzl1WlRvZ0lTRmtiMjVsZlR0Y2JuMDdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3ZlRzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIUnlkV1U3SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1THk4Z01Ua3VNUzR5TGpFZ1QySnFaV04wTG1GemMybG5iaWgwWVhKblpYUXNJSE52ZFhKalpTd2dMaTR1S1Z4dWRtRnlJR2RsZEV0bGVYTWdJRDBnY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFd0bGVYTW5LVnh1SUNBc0lHZFBVRk1nSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYjJKcVpXTjBMV2R2Y0hNbktWeHVJQ0FzSUhCSlJTQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExYQnBaU2NwWEc0Z0lDd2dkRzlQWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXZZbXBsWTNRbktWeHVJQ0FzSUVsUFltcGxZM1FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhVzlpYW1WamRDY3BYRzRnSUN3Z0pHRnpjMmxuYmlBZ1BTQlBZbXBsWTNRdVlYTnphV2R1TzF4dVhHNHZMeUJ6YUc5MWJHUWdkMjl5YXlCM2FYUm9JSE41YldKdmJITWdZVzVrSUhOb2IzVnNaQ0JvWVhabElHUmxkR1Z5YldsdWFYTjBhV01nY0hKdmNHVnlkSGtnYjNKa1pYSWdLRlk0SUdKMVp5bGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdJU1JoYzNOcFoyNGdmSHdnY21WeGRXbHlaU2duTGk5ZlptRnBiSE1uS1NobWRXNWpkR2x2YmlncGUxeHVJQ0IyWVhJZ1FTQTlJSHQ5WEc0Z0lDQWdMQ0JDSUQwZ2UzMWNiaUFnSUNBc0lGTWdQU0JUZVcxaWIyd29LVnh1SUNBZ0lDd2dTeUE5SUNkaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRDYzdYRzRnSUVGYlUxMGdQU0EzTzF4dUlDQkxMbk53YkdsMEtDY25LUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLR3NwZXlCQ1cydGRJRDBnYXpzZ2ZTazdYRzRnSUhKbGRIVnliaUFrWVhOemFXZHVLSHQ5TENCQktWdFRYU0FoUFNBM0lIeDhJRTlpYW1WamRDNXJaWGx6S0NSaGMzTnBaMjRvZTMwc0lFSXBLUzVxYjJsdUtDY25LU0FoUFNCTE8xeHVmU2tnUHlCbWRXNWpkR2x2YmlCaGMzTnBaMjRvZEdGeVoyVjBMQ0J6YjNWeVkyVXBleUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHNXZMWFZ1ZFhObFpDMTJZWEp6WEc0Z0lIWmhjaUJVSUNBZ0lDQTlJSFJ2VDJKcVpXTjBLSFJoY21kbGRDbGNiaUFnSUNBc0lHRk1aVzRnSUQwZ1lYSm5kVzFsYm5SekxteGxibWQwYUZ4dUlDQWdJQ3dnYVc1a1pYZ2dQU0F4WEc0Z0lDQWdMQ0JuWlhSVGVXMWliMnh6SUQwZ1owOVFVeTVtWEc0Z0lDQWdMQ0JwYzBWdWRXMGdJQ0FnSUQwZ2NFbEZMbVk3WEc0Z0lIZG9hV3hsS0dGTVpXNGdQaUJwYm1SbGVDbDdYRzRnSUNBZ2RtRnlJRk1nSUNBZ0lDQTlJRWxQWW1wbFkzUW9ZWEpuZFcxbGJuUnpXMmx1WkdWNEt5dGRLVnh1SUNBZ0lDQWdMQ0JyWlhseklDQWdQU0JuWlhSVGVXMWliMnh6SUQ4Z1oyVjBTMlY1Y3loVEtTNWpiMjVqWVhRb1oyVjBVM2x0WW05c2N5aFRLU2tnT2lCblpYUkxaWGx6S0ZNcFhHNGdJQ0FnSUNBc0lHeGxibWQwYUNBOUlHdGxlWE11YkdWdVozUm9YRzRnSUNBZ0lDQXNJR29nSUNBZ0lDQTlJREJjYmlBZ0lDQWdJQ3dnYTJWNU8xeHVJQ0FnSUhkb2FXeGxLR3hsYm1kMGFDQStJR29wYVdZb2FYTkZiblZ0TG1OaGJHd29VeXdnYTJWNUlEMGdhMlY1YzF0cUt5dGRLU2xVVzJ0bGVWMGdQU0JUVzJ0bGVWMDdYRzRnSUgwZ2NtVjBkWEp1SUZRN1hHNTlJRG9nSkdGemMybG5ianNpTENJdkx5QXhPUzR4TGpJdU1pQXZJREUxTGpJdU15NDFJRTlpYW1WamRDNWpjbVZoZEdVb1R5QmJMQ0JRY205d1pYSjBhV1Z6WFNsY2JuWmhjaUJoYms5aWFtVmpkQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMkZ1TFc5aWFtVmpkQ2NwWEc0Z0lDd2daRkJ6SUNBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOXZZbXBsWTNRdFpIQnpKeWxjYmlBZ0xDQmxiblZ0UW5WblMyVjVjeUE5SUhKbGNYVnBjbVVvSnk0dlgyVnVkVzB0WW5WbkxXdGxlWE1uS1Z4dUlDQXNJRWxGWDFCU1QxUlBJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZjMmhoY21Wa0xXdGxlU2NwS0NkSlJWOVFVazlVVHljcFhHNGdJQ3dnUlcxd2RIa2dJQ0FnSUNBZ1BTQm1kVzVqZEdsdmJpZ3BleUF2S2lCbGJYQjBlU0FxTHlCOVhHNGdJQ3dnVUZKUFZFOVVXVkJGSUNBZ1BTQW5jSEp2ZEc5MGVYQmxKenRjYmx4dUx5OGdRM0psWVhSbElHOWlhbVZqZENCM2FYUm9JR1poYTJVZ1lHNTFiR3hnSUhCeWIzUnZkSGx3WlRvZ2RYTmxJR2xtY21GdFpTQlBZbXBsWTNRZ2QybDBhQ0JqYkdWaGNtVmtJSEJ5YjNSdmRIbHdaVnh1ZG1GeUlHTnlaV0YwWlVScFkzUWdQU0JtZFc1amRHbHZiaWdwZTF4dUlDQXZMeUJVYUhKaGMyZ3NJSGRoYzNSbElHRnVaQ0J6YjJSdmJYazZJRWxGSUVkRElHSjFaMXh1SUNCMllYSWdhV1p5WVcxbElEMGdjbVZ4ZFdseVpTZ25MaTlmWkc5dExXTnlaV0YwWlNjcEtDZHBabkpoYldVbktWeHVJQ0FnSUN3Z2FTQWdJQ0FnSUQwZ1pXNTFiVUoxWjB0bGVYTXViR1Z1WjNSb1hHNGdJQ0FnTENCc2RDQWdJQ0FnUFNBblBDZGNiaUFnSUNBc0lHZDBJQ0FnSUNBOUlDYytKMXh1SUNBZ0lDd2dhV1p5WVcxbFJHOWpkVzFsYm5RN1hHNGdJR2xtY21GdFpTNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0oyNXZibVVuTzF4dUlDQnlaWEYxYVhKbEtDY3VMMTlvZEcxc0p5a3VZWEJ3Wlc1a1EyaHBiR1FvYVdaeVlXMWxLVHRjYmlBZ2FXWnlZVzFsTG5OeVl5QTlJQ2RxWVhaaGMyTnlhWEIwT2ljN0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnYm04dGMyTnlhWEIwTFhWeWJGeHVJQ0F2THlCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1VDJKcVpXTjBPMXh1SUNBdkx5Qm9kRzFzTG5KbGJXOTJaVU5vYVd4a0tHbG1jbUZ0WlNrN1hHNGdJR2xtY21GdFpVUnZZM1Z0Wlc1MElEMGdhV1p5WVcxbExtTnZiblJsYm5SWGFXNWtiM2N1Wkc5amRXMWxiblE3WEc0Z0lHbG1jbUZ0WlVSdlkzVnRaVzUwTG05d1pXNG9LVHRjYmlBZ2FXWnlZVzFsUkc5amRXMWxiblF1ZDNKcGRHVW9iSFFnS3lBbmMyTnlhWEIwSnlBcklHZDBJQ3NnSjJSdlkzVnRaVzUwTGtZOVQySnFaV04wSnlBcklHeDBJQ3NnSnk5elkzSnBjSFFuSUNzZ1ozUXBPMXh1SUNCcFpuSmhiV1ZFYjJOMWJXVnVkQzVqYkc5elpTZ3BPMXh1SUNCamNtVmhkR1ZFYVdOMElEMGdhV1p5WVcxbFJHOWpkVzFsYm5RdVJqdGNiaUFnZDJocGJHVW9hUzB0S1dSbGJHVjBaU0JqY21WaGRHVkVhV04wVzFCU1QxUlBWRmxRUlYxYlpXNTFiVUoxWjB0bGVYTmJhVjFkTzF4dUlDQnlaWFIxY200Z1kzSmxZWFJsUkdsamRDZ3BPMXh1ZlR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlBZbXBsWTNRdVkzSmxZWFJsSUh4OElHWjFibU4wYVc5dUlHTnlaV0YwWlNoUExDQlFjbTl3WlhKMGFXVnpLWHRjYmlBZ2RtRnlJSEpsYzNWc2REdGNiaUFnYVdZb1R5QWhQVDBnYm5Wc2JDbDdYRzRnSUNBZ1JXMXdkSGxiVUZKUFZFOVVXVkJGWFNBOUlHRnVUMkpxWldOMEtFOHBPMXh1SUNBZ0lISmxjM1ZzZENBOUlHNWxkeUJGYlhCMGVUdGNiaUFnSUNCRmJYQjBlVnRRVWs5VVQxUlpVRVZkSUQwZ2JuVnNiRHRjYmlBZ0lDQXZMeUJoWkdRZ1hDSmZYM0J5YjNSdlgxOWNJaUJtYjNJZ1QySnFaV04wTG1kbGRGQnliM1J2ZEhsd1pVOW1JSEJ2YkhsbWFXeHNYRzRnSUNBZ2NtVnpkV3gwVzBsRlgxQlNUMVJQWFNBOUlFODdYRzRnSUgwZ1pXeHpaU0J5WlhOMWJIUWdQU0JqY21WaGRHVkVhV04wS0NrN1hHNGdJSEpsZEhWeWJpQlFjbTl3WlhKMGFXVnpJRDA5UFNCMWJtUmxabWx1WldRZ1B5QnlaWE4xYkhRZ09pQmtVSE1vY21WemRXeDBMQ0JRY205d1pYSjBhV1Z6S1R0Y2JuMDdYRzRpTENKMllYSWdZVzVQWW1wbFkzUWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTloYmkxdlltcGxZM1FuS1Z4dUlDQXNJRWxGT0Y5RVQwMWZSRVZHU1U1RklEMGdjbVZ4ZFdseVpTZ25MaTlmYVdVNExXUnZiUzFrWldacGJtVW5LVnh1SUNBc0lIUnZVSEpwYldsMGFYWmxJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkRzh0Y0hKcGJXbDBhWFpsSnlsY2JpQWdMQ0JrVUNBZ0lDQWdJQ0FnSUNBZ0lDQTlJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVR0Y2JseHVaWGh3YjNKMGN5NW1JRDBnY21WeGRXbHlaU2duTGk5ZlpHVnpZM0pwY0hSdmNuTW5LU0EvSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTQTZJR1oxYm1OMGFXOXVJR1JsWm1sdVpWQnliM0JsY25SNUtFOHNJRkFzSUVGMGRISnBZblYwWlhNcGUxeHVJQ0JoYms5aWFtVmpkQ2hQS1R0Y2JpQWdVQ0E5SUhSdlVISnBiV2wwYVhabEtGQXNJSFJ5ZFdVcE8xeHVJQ0JoYms5aWFtVmpkQ2hCZEhSeWFXSjFkR1Z6S1R0Y2JpQWdhV1lvU1VVNFgwUlBUVjlFUlVaSlRrVXBkSEo1SUh0Y2JpQWdJQ0J5WlhSMWNtNGdaRkFvVHl3Z1VDd2dRWFIwY21saWRYUmxjeWs3WEc0Z0lIMGdZMkYwWTJnb1pTbDdJQzhxSUdWdGNIUjVJQ292SUgxY2JpQWdhV1lvSjJkbGRDY2dhVzRnUVhSMGNtbGlkWFJsY3lCOGZDQW5jMlYwSnlCcGJpQkJkSFJ5YVdKMWRHVnpLWFJvY205M0lGUjVjR1ZGY25KdmNpZ25RV05qWlhOemIzSnpJRzV2ZENCemRYQndiM0owWldRaEp5azdYRzRnSUdsbUtDZDJZV3gxWlNjZ2FXNGdRWFIwY21saWRYUmxjeWxQVzFCZElEMGdRWFIwY21saWRYUmxjeTUyWVd4MVpUdGNiaUFnY21WMGRYSnVJRTg3WEc1OU95SXNJblpoY2lCa1VDQWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMWtjQ2NwWEc0Z0lDd2dZVzVQWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5aGJpMXZZbXBsWTNRbktWeHVJQ0FzSUdkbGRFdGxlWE1nSUQwZ2NtVnhkV2x5WlNnbkxpOWZiMkpxWldOMExXdGxlWE1uS1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWlhOamNtbHdkRzl5Y3ljcElEOGdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblJwWlhNZ09pQm1kVzVqZEdsdmJpQmtaV1pwYm1WUWNtOXdaWEowYVdWektFOHNJRkJ5YjNCbGNuUnBaWE1wZTF4dUlDQmhiazlpYW1WamRDaFBLVHRjYmlBZ2RtRnlJR3RsZVhNZ0lDQTlJR2RsZEV0bGVYTW9VSEp2Y0dWeWRHbGxjeWxjYmlBZ0lDQXNJR3hsYm1kMGFDQTlJR3RsZVhNdWJHVnVaM1JvWEc0Z0lDQWdMQ0JwSUQwZ01GeHVJQ0FnSUN3Z1VEdGNiaUFnZDJocGJHVW9iR1Z1WjNSb0lENGdhU2xrVUM1bUtFOHNJRkFnUFNCclpYbHpXMmtySzEwc0lGQnliM0JsY25ScFpYTmJVRjBwTzF4dUlDQnlaWFIxY200Z1R6dGNibjA3SWl3aVpYaHdiM0owY3k1bUlEMGdUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjenNpTENJdkx5QXhPUzR4TGpJdU9TQXZJREUxTGpJdU15NHlJRTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWmloUEtWeHVkbUZ5SUdoaGN5QWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYUdGekp5bGNiaUFnTENCMGIwOWlhbVZqZENBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDNSdkxXOWlhbVZqZENjcFhHNGdJQ3dnU1VWZlVGSlBWRThnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUXRhMlY1Snlrb0owbEZYMUJTVDFSUEp5bGNiaUFnTENCUFltcGxZM1JRY205MGJ5QTlJRTlpYW1WamRDNXdjbTkwYjNSNWNHVTdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVDJKcVpXTjBMbWRsZEZCeWIzUnZkSGx3WlU5bUlIeDhJR1oxYm1OMGFXOXVLRThwZTF4dUlDQlBJRDBnZEc5UFltcGxZM1FvVHlrN1hHNGdJR2xtS0doaGN5aFBMQ0JKUlY5UVVrOVVUeWtwY21WMGRYSnVJRTliU1VWZlVGSlBWRTlkTzF4dUlDQnBaaWgwZVhCbGIyWWdUeTVqYjI1emRISjFZM1J2Y2lBOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUU4Z2FXNXpkR0Z1WTJWdlppQlBMbU52Ym5OMGNuVmpkRzl5S1h0Y2JpQWdJQ0J5WlhSMWNtNGdUeTVqYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVN1hHNGdJSDBnY21WMGRYSnVJRThnYVc1emRHRnVZMlZ2WmlCUFltcGxZM1FnUHlCUFltcGxZM1JRY205MGJ5QTZJRzUxYkd3N1hHNTlPeUlzSW5aaGNpQm9ZWE1nSUNBZ0lDQWdJQ0FnUFNCeVpYRjFhWEpsS0NjdUwxOW9ZWE1uS1Z4dUlDQXNJSFJ2U1U5aWFtVmpkQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYM1J2TFdsdlltcGxZM1FuS1Z4dUlDQXNJR0Z5Y21GNVNXNWtaWGhQWmlBOUlISmxjWFZwY21Vb0p5NHZYMkZ5Y21GNUxXbHVZMngxWkdWekp5a29abUZzYzJVcFhHNGdJQ3dnU1VWZlVGSlBWRThnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmYzJoaGNtVmtMV3RsZVNjcEtDZEpSVjlRVWs5VVR5Y3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnYm1GdFpYTXBlMXh1SUNCMllYSWdUeUFnSUNBZ0lEMGdkRzlKVDJKcVpXTjBLRzlpYW1WamRDbGNiaUFnSUNBc0lHa2dJQ0FnSUNBOUlEQmNiaUFnSUNBc0lISmxjM1ZzZENBOUlGdGRYRzRnSUNBZ0xDQnJaWGs3WEc0Z0lHWnZjaWhyWlhrZ2FXNGdUeWxwWmloclpYa2dJVDBnU1VWZlVGSlBWRThwYUdGektFOHNJR3RsZVNrZ0ppWWdjbVZ6ZFd4MExuQjFjMmdvYTJWNUtUdGNiaUFnTHk4Z1JHOXVKM1FnWlc1MWJTQmlkV2NnSmlCb2FXUmtaVzRnYTJWNWMxeHVJQ0IzYUdsc1pTaHVZVzFsY3k1c1pXNW5kR2dnUGlCcEtXbG1LR2hoY3loUExDQnJaWGtnUFNCdVlXMWxjMXRwS3l0ZEtTbDdYRzRnSUNBZ2ZtRnljbUY1U1c1a1pYaFBaaWh5WlhOMWJIUXNJR3RsZVNrZ2ZId2djbVZ6ZFd4MExuQjFjMmdvYTJWNUtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2NtVnpkV3gwTzF4dWZUc2lMQ0l2THlBeE9TNHhMakl1TVRRZ0x5QXhOUzR5TGpNdU1UUWdUMkpxWldOMExtdGxlWE1vVHlsY2JuWmhjaUFrYTJWNWN5QWdJQ0FnSUNBOUlISmxjWFZwY21Vb0p5NHZYMjlpYW1WamRDMXJaWGx6TFdsdWRHVnlibUZzSnlsY2JpQWdMQ0JsYm5WdFFuVm5TMlY1Y3lBOUlISmxjWFZwY21Vb0p5NHZYMlZ1ZFcwdFluVm5MV3RsZVhNbktUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JQWW1wbFkzUXVhMlY1Y3lCOGZDQm1kVzVqZEdsdmJpQnJaWGx6S0U4cGUxeHVJQ0J5WlhSMWNtNGdKR3RsZVhNb1R5d2daVzUxYlVKMVowdGxlWE1wTzF4dWZUc2lMQ0psZUhCdmNuUnpMbVlnUFNCN2ZTNXdjbTl3WlhKMGVVbHpSVzUxYldWeVlXSnNaVHNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dKcGRHMWhjQ3dnZG1Gc2RXVXBlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJR1Z1ZFcxbGNtRmliR1VnSURvZ0lTaGlhWFJ0WVhBZ0ppQXhLU3hjYmlBZ0lDQmpiMjVtYVdkMWNtRmliR1U2SUNFb1ltbDBiV0Z3SUNZZ01pa3NYRzRnSUNBZ2QzSnBkR0ZpYkdVZ0lDQWdPaUFoS0dKcGRHMWhjQ0FtSURRcExGeHVJQ0FnSUhaaGJIVmxJQ0FnSUNBZ0lEb2dkbUZzZFdWY2JpQWdmVHRjYm4wN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5azdJaXdpZG1GeUlHUmxaaUE5SUhKbGNYVnBjbVVvSnk0dlgyOWlhbVZqZEMxa2NDY3BMbVpjYmlBZ0xDQm9ZWE1nUFNCeVpYRjFhWEpsS0NjdUwxOW9ZWE1uS1Z4dUlDQXNJRlJCUnlBOUlISmxjWFZwY21Vb0p5NHZYM2RyY3ljcEtDZDBiMU4wY21sdVoxUmhaeWNwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHbDBMQ0IwWVdjc0lITjBZWFFwZTF4dUlDQnBaaWhwZENBbUppQWhhR0Z6S0dsMElEMGdjM1JoZENBL0lHbDBJRG9nYVhRdWNISnZkRzkwZVhCbExDQlVRVWNwS1dSbFppaHBkQ3dnVkVGSExDQjdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkR0ZuZlNrN1hHNTlPeUlzSW5aaGNpQnphR0Z5WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUW5LU2duYTJWNWN5Y3BYRzRnSUN3Z2RXbGtJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZkV2xrSnlrN1hHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtHdGxlU2w3WEc0Z0lISmxkSFZ5YmlCemFHRnlaV1JiYTJWNVhTQjhmQ0FvYzJoaGNtVmtXMnRsZVYwZ1BTQjFhV1FvYTJWNUtTazdYRzU5T3lJc0luWmhjaUJuYkc5aVlXd2dQU0J5WlhGMWFYSmxLQ2N1TDE5bmJHOWlZV3duS1Z4dUlDQXNJRk5JUVZKRlJDQTlJQ2RmWDJOdmNtVXRhbk5mYzJoaGNtVmtYMThuWEc0Z0lDd2djM1J2Y21VZ0lEMGdaMnh2WW1Gc1cxTklRVkpGUkYwZ2ZId2dLR2RzYjJKaGJGdFRTRUZTUlVSZElEMGdlMzBwTzF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmloclpYa3BlMXh1SUNCeVpYUjFjbTRnYzNSdmNtVmJhMlY1WFNCOGZDQW9jM1J2Y21WYmEyVjVYU0E5SUh0OUtUdGNibjA3SWl3aWRtRnlJSFJ2U1c1MFpXZGxjaUE5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x1ZEdWblpYSW5LVnh1SUNBc0lHUmxabWx1WldRZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJSbFptbHVaV1FuS1R0Y2JpOHZJSFJ5ZFdVZ0lDMCtJRk4wY21sdVp5TmhkRnh1THk4Z1ptRnNjMlVnTFQ0Z1UzUnlhVzVuSTJOdlpHVlFiMmx1ZEVGMFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWjFibU4wYVc5dUtGUlBYMU5VVWtsT1J5bDdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWgwYUdGMExDQndiM01wZTF4dUlDQWdJSFpoY2lCeklEMGdVM1J5YVc1bktHUmxabWx1WldRb2RHaGhkQ2twWEc0Z0lDQWdJQ0FzSUdrZ1BTQjBiMGx1ZEdWblpYSW9jRzl6S1Z4dUlDQWdJQ0FnTENCc0lEMGdjeTVzWlc1bmRHaGNiaUFnSUNBZ0lDd2dZU3dnWWp0Y2JpQWdJQ0JwWmlocElEd2dNQ0I4ZkNCcElENDlJR3dwY21WMGRYSnVJRlJQWDFOVVVrbE9SeUEvSUNjbklEb2dkVzVrWldacGJtVmtPMXh1SUNBZ0lHRWdQU0J6TG1Ob1lYSkRiMlJsUVhRb2FTazdYRzRnSUNBZ2NtVjBkWEp1SUdFZ1BDQXdlR1E0TURBZ2ZId2dZU0ErSURCNFpHSm1aaUI4ZkNCcElDc2dNU0E5UFQwZ2JDQjhmQ0FvWWlBOUlITXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ01Ta3BJRHdnTUhoa1l6QXdJSHg4SUdJZ1BpQXdlR1JtWm1aY2JpQWdJQ0FnSUQ4Z1ZFOWZVMVJTU1U1SElEOGdjeTVqYUdGeVFYUW9hU2tnT2lCaFhHNGdJQ0FnSUNBNklGUlBYMU5VVWtsT1J5QS9JSE11YzJ4cFkyVW9hU3dnYVNBcklESXBJRG9nS0dFZ0xTQXdlR1E0TURBZ1BEd2dNVEFwSUNzZ0tHSWdMU0F3ZUdSak1EQXBJQ3NnTUhneE1EQXdNRHRjYmlBZ2ZUdGNibjA3SWl3aWRtRnlJSFJ2U1c1MFpXZGxjaUE5SUhKbGNYVnBjbVVvSnk0dlgzUnZMV2x1ZEdWblpYSW5LVnh1SUNBc0lHMWhlQ0FnSUNBZ0lDQTlJRTFoZEdndWJXRjRYRzRnSUN3Z2JXbHVJQ0FnSUNBZ0lEMGdUV0YwYUM1dGFXNDdYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLR2x1WkdWNExDQnNaVzVuZEdncGUxeHVJQ0JwYm1SbGVDQTlJSFJ2U1c1MFpXZGxjaWhwYm1SbGVDazdYRzRnSUhKbGRIVnliaUJwYm1SbGVDQThJREFnUHlCdFlYZ29hVzVrWlhnZ0t5QnNaVzVuZEdnc0lEQXBJRG9nYldsdUtHbHVaR1Y0TENCc1pXNW5kR2dwTzF4dWZUc2lMQ0l2THlBM0xqRXVOQ0JVYjBsdWRHVm5aWEpjYm5aaGNpQmpaV2xzSUNBOUlFMWhkR2d1WTJWcGJGeHVJQ0FzSUdac2IyOXlJRDBnVFdGMGFDNW1iRzl2Y2p0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnYVhOT1lVNG9hWFFnUFNBcmFYUXBJRDhnTUNBNklDaHBkQ0ErSURBZ1B5Qm1iRzl2Y2lBNklHTmxhV3dwS0dsMEtUdGNibjA3SWl3aUx5OGdkRzhnYVc1a1pYaGxaQ0J2WW1wbFkzUXNJSFJ2VDJKcVpXTjBJSGRwZEdnZ1ptRnNiR0poWTJzZ1ptOXlJRzV2YmkxaGNuSmhlUzFzYVd0bElFVlRNeUJ6ZEhKcGJtZHpYRzUyWVhJZ1NVOWlhbVZqZENBOUlISmxjWFZwY21Vb0p5NHZYMmx2WW1wbFkzUW5LVnh1SUNBc0lHUmxabWx1WldRZ1BTQnlaWEYxYVhKbEtDY3VMMTlrWldacGJtVmtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0dsMEtYdGNiaUFnY21WMGRYSnVJRWxQWW1wbFkzUW9aR1ZtYVc1bFpDaHBkQ2twTzF4dWZUc2lMQ0l2THlBM0xqRXVNVFVnVkc5TVpXNW5kR2hjYm5aaGNpQjBiMGx1ZEdWblpYSWdQU0J5WlhGMWFYSmxLQ2N1TDE5MGJ5MXBiblJsWjJWeUp5bGNiaUFnTENCdGFXNGdJQ0FnSUNBZ1BTQk5ZWFJvTG0xcGJqdGNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9hWFFwZTF4dUlDQnlaWFIxY200Z2FYUWdQaUF3SUQ4Z2JXbHVLSFJ2U1c1MFpXZGxjaWhwZENrc0lEQjRNV1ptWm1abVptWm1abVptWm1ZcElEb2dNRHNnTHk4Z2NHOTNLRElzSURVektTQXRJREVnUFQwZ09UQXdOekU1T1RJMU5EYzBNRGs1TVZ4dWZUc2lMQ0l2THlBM0xqRXVNVE1nVkc5UFltcGxZM1FvWVhKbmRXMWxiblFwWEc1MllYSWdaR1ZtYVc1bFpDQTlJSEpsY1hWcGNtVW9KeTR2WDJSbFptbHVaV1FuS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2FYUXBlMXh1SUNCeVpYUjFjbTRnVDJKcVpXTjBLR1JsWm1sdVpXUW9hWFFwS1R0Y2JuMDdJaXdpTHk4Z055NHhMakVnVkc5UWNtbHRhWFJwZG1Vb2FXNXdkWFFnV3l3Z1VISmxabVZ5Y21Wa1ZIbHdaVjBwWEc1MllYSWdhWE5QWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TDE5cGN5MXZZbXBsWTNRbktUdGNiaTh2SUdsdWMzUmxZV1FnYjJZZ2RHaGxJRVZUTmlCemNHVmpJSFpsY25OcGIyNHNJSGRsSUdScFpHNG5kQ0JwYlhCc1pXMWxiblFnUUVCMGIxQnlhVzFwZEdsMlpTQmpZWE5sWEc0dkx5QmhibVFnZEdobElITmxZMjl1WkNCaGNtZDFiV1Z1ZENBdElHWnNZV2NnTFNCd2NtVm1aWEp5WldRZ2RIbHdaU0JwY3lCaElITjBjbWx1WjF4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlocGRDd2dVeWw3WEc0Z0lHbG1LQ0ZwYzA5aWFtVmpkQ2hwZENrcGNtVjBkWEp1SUdsME8xeHVJQ0IyWVhJZ1ptNHNJSFpoYkR0Y2JpQWdhV1lvVXlBbUppQjBlWEJsYjJZZ0tHWnVJRDBnYVhRdWRHOVRkSEpwYm1jcElEMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ0lXbHpUMkpxWldOMEtIWmhiQ0E5SUdadUxtTmhiR3dvYVhRcEtTbHlaWFIxY200Z2RtRnNPMXh1SUNCcFppaDBlWEJsYjJZZ0tHWnVJRDBnYVhRdWRtRnNkV1ZQWmlrZ1BUMGdKMloxYm1OMGFXOXVKeUFtSmlBaGFYTlBZbXBsWTNRb2RtRnNJRDBnWm00dVkyRnNiQ2hwZENrcEtYSmxkSFZ5YmlCMllXdzdYRzRnSUdsbUtDRlRJQ1ltSUhSNWNHVnZaaUFvWm00Z1BTQnBkQzUwYjFOMGNtbHVaeWtnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUFoYVhOUFltcGxZM1FvZG1Gc0lEMGdabTR1WTJGc2JDaHBkQ2twS1hKbGRIVnliaUIyWVd3N1hHNGdJSFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa05oYmlkMElHTnZiblpsY25RZ2IySnFaV04wSUhSdklIQnlhVzFwZEdsMlpTQjJZV3gxWlZ3aUtUdGNibjA3SWl3aWRtRnlJR2xrSUQwZ01GeHVJQ0FzSUhCNElEMGdUV0YwYUM1eVlXNWtiMjBvS1R0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0b2EyVjVLWHRjYmlBZ2NtVjBkWEp1SUNkVGVXMWliMndvSnk1amIyNWpZWFFvYTJWNUlEMDlQU0IxYm1SbFptbHVaV1FnUHlBbkp5QTZJR3RsZVN3Z0p5bGZKeXdnS0NzcmFXUWdLeUJ3ZUNrdWRHOVRkSEpwYm1jb016WXBLVHRjYm4wN0lpd2lkbUZ5SUhOMGIzSmxJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6YUdGeVpXUW5LU2duZDJ0ekp5bGNiaUFnTENCMWFXUWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmZFdsa0p5bGNiaUFnTENCVGVXMWliMndnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmWjJ4dlltRnNKeWt1VTNsdFltOXNYRzRnSUN3Z1ZWTkZYMU5aVFVKUFRDQTlJSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMGdKMloxYm1OMGFXOXVKenRjYmx4dWRtRnlJQ1JsZUhCdmNuUnpJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaWh1WVcxbEtYdGNiaUFnY21WMGRYSnVJSE4wYjNKbFcyNWhiV1ZkSUh4OElDaHpkRzl5WlZ0dVlXMWxYU0E5WEc0Z0lDQWdWVk5GWDFOWlRVSlBUQ0FtSmlCVGVXMWliMnhiYm1GdFpWMGdmSHdnS0ZWVFJWOVRXVTFDVDB3Z1B5QlRlVzFpYjJ3Z09pQjFhV1FwS0NkVGVXMWliMnd1SnlBcklHNWhiV1VwS1R0Y2JuMDdYRzVjYmlSbGVIQnZjblJ6TG5OMGIzSmxJRDBnYzNSdmNtVTdJaXdpZG1GeUlHTnNZWE56YjJZZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WDJOc1lYTnpiMlluS1Z4dUlDQXNJRWxVUlZKQlZFOVNJQ0E5SUhKbGNYVnBjbVVvSnk0dlgzZHJjeWNwS0NkcGRHVnlZWFJ2Y2ljcFhHNGdJQ3dnU1hSbGNtRjBiM0p6SUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZjbVVuS1M1blpYUkpkR1Z5WVhSdmNrMWxkR2h2WkNBOUlHWjFibU4wYVc5dUtHbDBLWHRjYmlBZ2FXWW9hWFFnSVQwZ2RXNWtaV1pwYm1Wa0tYSmxkSFZ5YmlCcGRGdEpWRVZTUVZSUFVsMWNiaUFnSUNCOGZDQnBkRnNuUUVCcGRHVnlZWFJ2Y2lkZFhHNGdJQ0FnZkh3Z1NYUmxjbUYwYjNKelcyTnNZWE56YjJZb2FYUXBYVHRjYm4wN0lpd2lkbUZ5SUdGdVQySnFaV04wSUQwZ2NtVnhkV2x5WlNnbkxpOWZZVzR0YjJKcVpXTjBKeWxjYmlBZ0xDQm5aWFFnSUNBZ0lDQTlJSEpsY1hWcGNtVW9KeTR2WTI5eVpTNW5aWFF0YVhSbGNtRjBiM0l0YldWMGFHOWtKeWs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlgyTnZjbVVuS1M1blpYUkpkR1Z5WVhSdmNpQTlJR1oxYm1OMGFXOXVLR2wwS1h0Y2JpQWdkbUZ5SUdsMFpYSkdiaUE5SUdkbGRDaHBkQ2s3WEc0Z0lHbG1LSFI1Y0dWdlppQnBkR1Z5Um00Z0lUMGdKMloxYm1OMGFXOXVKeWwwYUhKdmR5QlVlWEJsUlhKeWIzSW9hWFFnS3lBbklHbHpJRzV2ZENCcGRHVnlZV0pzWlNFbktUdGNiaUFnY21WMGRYSnVJR0Z1VDJKcVpXTjBLR2wwWlhKR2JpNWpZV3hzS0dsMEtTazdYRzU5T3lJc0lpZDFjMlVnYzNSeWFXTjBKenRjYm5aaGNpQmhaR1JVYjFWdWMyTnZjR0ZpYkdWeklEMGdjbVZ4ZFdseVpTZ25MaTlmWVdSa0xYUnZMWFZ1YzJOdmNHRmliR1Z6SnlsY2JpQWdMQ0J6ZEdWd0lDQWdJQ0FnSUNBZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFYUmxjaTF6ZEdWd0p5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJQ0FnSUQwZ2NtVnhkV2x5WlNnbkxpOWZhWFJsY21GMGIzSnpKeWxjYmlBZ0xDQjBiMGxQWW1wbFkzUWdJQ0FnSUNBZ0lEMGdjbVZ4ZFdseVpTZ25MaTlmZEc4dGFXOWlhbVZqZENjcE8xeHVYRzR2THlBeU1pNHhMak11TkNCQmNuSmhlUzV3Y205MGIzUjVjR1V1Wlc1MGNtbGxjeWdwWEc0dkx5QXlNaTR4TGpNdU1UTWdRWEp5WVhrdWNISnZkRzkwZVhCbExtdGxlWE1vS1Z4dUx5OGdNakl1TVM0ekxqSTVJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNTJZV3gxWlhNb0tWeHVMeThnTWpJdU1TNHpMak13SUVGeWNtRjVMbkJ5YjNSdmRIbHdaVnRBUUdsMFpYSmhkRzl5WFNncFhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmxjWFZwY21Vb0p5NHZYMmwwWlhJdFpHVm1hVzVsSnlrb1FYSnlZWGtzSUNkQmNuSmhlU2NzSUdaMWJtTjBhVzl1S0dsMFpYSmhkR1ZrTENCcmFXNWtLWHRjYmlBZ2RHaHBjeTVmZENBOUlIUnZTVTlpYW1WamRDaHBkR1Z5WVhSbFpDazdJQzh2SUhSaGNtZGxkRnh1SUNCMGFHbHpMbDlwSUQwZ01Ec2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnYm1WNGRDQnBibVJsZUZ4dUlDQjBhR2x6TGw5cklEMGdhMmx1WkRzZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2EybHVaRnh1THk4Z01qSXVNUzQxTGpJdU1TQWxRWEp5WVhsSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlNVdWJtVjRkQ2dwWEc1OUxDQm1kVzVqZEdsdmJpZ3BlMXh1SUNCMllYSWdUeUFnSUNBZ1BTQjBhR2x6TGw5MFhHNGdJQ0FnTENCcmFXNWtJQ0E5SUhSb2FYTXVYMnRjYmlBZ0lDQXNJR2x1WkdWNElEMGdkR2hwY3k1ZmFTc3JPMXh1SUNCcFppZ2hUeUI4ZkNCcGJtUmxlQ0ErUFNCUExteGxibWQwYUNsN1hHNGdJQ0FnZEdocGN5NWZkQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0J5WlhSMWNtNGdjM1JsY0NneEtUdGNiaUFnZlZ4dUlDQnBaaWhyYVc1a0lEMDlJQ2RyWlhsekp5QWdLWEpsZEhWeWJpQnpkR1Z3S0RBc0lHbHVaR1Y0S1R0Y2JpQWdhV1lvYTJsdVpDQTlQU0FuZG1Gc2RXVnpKeWx5WlhSMWNtNGdjM1JsY0Nnd0xDQlBXMmx1WkdWNFhTazdYRzRnSUhKbGRIVnliaUJ6ZEdWd0tEQXNJRnRwYm1SbGVDd2dUMXRwYm1SbGVGMWRLVHRjYm4wc0lDZDJZV3gxWlhNbktUdGNibHh1THk4Z1lYSm5kVzFsYm5SelRHbHpkRnRBUUdsMFpYSmhkRzl5WFNCcGN5QWxRWEp5WVhsUWNtOTBiMTkyWVd4MVpYTWxJQ2c1TGpRdU5DNDJMQ0E1TGpRdU5DNDNLVnh1U1hSbGNtRjBiM0p6TGtGeVozVnRaVzUwY3lBOUlFbDBaWEpoZEc5eWN5NUJjbkpoZVR0Y2JseHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25hMlY1Y3ljcE8xeHVZV1JrVkc5VmJuTmpiM0JoWW14bGN5Z25kbUZzZFdWekp5azdYRzVoWkdSVWIxVnVjMk52Y0dGaWJHVnpLQ2RsYm5SeWFXVnpKeWs3SWl3aUx5OGdNVGt1TVM0ekxqRWdUMkpxWldOMExtRnpjMmxuYmloMFlYSm5aWFFzSUhOdmRYSmpaU2xjYm5aaGNpQWtaWGh3YjNKMElEMGdjbVZ4ZFdseVpTZ25MaTlmWlhod2IzSjBKeWs3WEc1Y2JpUmxlSEJ2Y25Rb0pHVjRjRzl5ZEM1VElDc2dKR1Y0Y0c5eWRDNUdMQ0FuVDJKcVpXTjBKeXdnZTJGemMybG5iam9nY21WeGRXbHlaU2duTGk5ZmIySnFaV04wTFdGemMybG5iaWNwZlNrN0lpd2lKM1Z6WlNCemRISnBZM1FuTzF4dWRtRnlJQ1JoZENBZ1BTQnlaWEYxYVhKbEtDY3VMMTl6ZEhKcGJtY3RZWFFuS1NoMGNuVmxLVHRjYmx4dUx5OGdNakV1TVM0ekxqSTNJRk4wY21sdVp5NXdjbTkwYjNSNWNHVmJRRUJwZEdWeVlYUnZjbDBvS1Z4dWNtVnhkV2x5WlNnbkxpOWZhWFJsY2kxa1pXWnBibVVuS1NoVGRISnBibWNzSUNkVGRISnBibWNuTENCbWRXNWpkR2x2YmlocGRHVnlZWFJsWkNsN1hHNGdJSFJvYVhNdVgzUWdQU0JUZEhKcGJtY29hWFJsY21GMFpXUXBPeUF2THlCMFlYSm5aWFJjYmlBZ2RHaHBjeTVmYVNBOUlEQTdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzVsZUhRZ2FXNWtaWGhjYmk4dklESXhMakV1TlM0eUxqRWdKVk4wY21sdVowbDBaWEpoZEc5eVVISnZkRzkwZVhCbEpTNXVaWGgwS0NsY2JuMHNJR1oxYm1OMGFXOXVLQ2w3WEc0Z0lIWmhjaUJQSUNBZ0lDQTlJSFJvYVhNdVgzUmNiaUFnSUNBc0lHbHVaR1Y0SUQwZ2RHaHBjeTVmYVZ4dUlDQWdJQ3dnY0c5cGJuUTdYRzRnSUdsbUtHbHVaR1Y0SUQ0OUlFOHViR1Z1WjNSb0tYSmxkSFZ5YmlCN2RtRnNkV1U2SUhWdVpHVm1hVzVsWkN3Z1pHOXVaVG9nZEhKMVpYMDdYRzRnSUhCdmFXNTBJRDBnSkdGMEtFOHNJR2x1WkdWNEtUdGNiaUFnZEdocGN5NWZhU0FyUFNCd2IybHVkQzVzWlc1bmRHZzdYRzRnSUhKbGRIVnliaUI3ZG1Gc2RXVTZJSEJ2YVc1MExDQmtiMjVsT2lCbVlXeHpaWDA3WEc1OUtUc2lMQ0p5WlhGMWFYSmxLQ2N1TDJWek5pNWhjbkpoZVM1cGRHVnlZWFJ2Y2ljcE8xeHVkbUZ5SUdkc2IySmhiQ0FnSUNBZ0lDQWdQU0J5WlhGMWFYSmxLQ2N1TDE5bmJHOWlZV3duS1Z4dUlDQXNJR2hwWkdVZ0lDQWdJQ0FnSUNBZ1BTQnlaWEYxYVhKbEtDY3VMMTlvYVdSbEp5bGNiaUFnTENCSmRHVnlZWFJ2Y25NZ0lDQWdJRDBnY21WeGRXbHlaU2duTGk5ZmFYUmxjbUYwYjNKekp5bGNiaUFnTENCVVQxOVRWRkpKVGtkZlZFRkhJRDBnY21WeGRXbHlaU2duTGk5ZmQydHpKeWtvSjNSdlUzUnlhVzVuVkdGbkp5azdYRzVjYm1admNpaDJZWElnWTI5c2JHVmpkR2x2Ym5NZ1BTQmJKMDV2WkdWTWFYTjBKeXdnSjBSUFRWUnZhMlZ1VEdsemRDY3NJQ2ROWldScFlVeHBjM1FuTENBblUzUjViR1ZUYUdWbGRFeHBjM1FuTENBblExTlRVblZzWlV4cGMzUW5YU3dnYVNBOUlEQTdJR2tnUENBMU95QnBLeXNwZTF4dUlDQjJZWElnVGtGTlJTQWdJQ0FnSUNBOUlHTnZiR3hsWTNScGIyNXpXMmxkWEc0Z0lDQWdMQ0JEYjJ4c1pXTjBhVzl1SUQwZ1oyeHZZbUZzVzA1QlRVVmRYRzRnSUNBZ0xDQndjbTkwYnlBZ0lDQWdJRDBnUTI5c2JHVmpkR2x2YmlBbUppQkRiMnhzWldOMGFXOXVMbkJ5YjNSdmRIbHdaVHRjYmlBZ2FXWW9jSEp2ZEc4Z0ppWWdJWEJ5YjNSdlcxUlBYMU5VVWtsT1IxOVVRVWRkS1docFpHVW9jSEp2ZEc4c0lGUlBYMU5VVWtsT1IxOVVRVWNzSUU1QlRVVXBPMXh1SUNCSmRHVnlZWFJ2Y25OYlRrRk5SVjBnUFNCSmRHVnlZWFJ2Y25NdVFYSnlZWGs3WEc1OUlpd2lMeThnYzJocGJTQm1iM0lnZFhOcGJtY2djSEp2WTJWemN5QnBiaUJpY205M2MyVnlYRzUyWVhJZ2NISnZZMlZ6Y3lBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UzMDdYRzVjYmk4dklHTmhZMmhsWkNCbWNtOXRJSGRvWVhSbGRtVnlJR2RzYjJKaGJDQnBjeUJ3Y21WelpXNTBJSE52SUhSb1lYUWdkR1Z6ZENCeWRXNXVaWEp6SUhSb1lYUWdjM1IxWWlCcGRGeHVMeThnWkc5dUozUWdZbkpsWVdzZ2RHaHBibWR6TGlBZ1FuVjBJSGRsSUc1bFpXUWdkRzhnZDNKaGNDQnBkQ0JwYmlCaElIUnllU0JqWVhSamFDQnBiaUJqWVhObElHbDBJR2x6WEc0dkx5QjNjbUZ3Y0dWa0lHbHVJSE4wY21samRDQnRiMlJsSUdOdlpHVWdkMmhwWTJnZ1pHOWxjMjRuZENCa1pXWnBibVVnWVc1NUlHZHNiMkpoYkhNdUlDQkpkQ2R6SUdsdWMybGtaU0JoWEc0dkx5Qm1kVzVqZEdsdmJpQmlaV05oZFhObElIUnllUzlqWVhSamFHVnpJR1JsYjNCMGFXMXBlbVVnYVc0Z1kyVnlkR0ZwYmlCbGJtZHBibVZ6TGx4dVhHNTJZWElnWTJGamFHVmtVMlYwVkdsdFpXOTFkRHRjYm5aaGNpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUTdYRzVjYm1aMWJtTjBhVzl1SUdSbFptRjFiSFJUWlhSVWFXMXZkWFFvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R6WlhSVWFXMWxiM1YwSUdoaGN5QnViM1FnWW1WbGJpQmtaV1pwYm1Wa0p5azdYRzU5WEc1bWRXNWpkR2x2YmlCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWMElDZ3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyTnNaV0Z5VkdsdFpXOTFkQ0JvWVhNZ2JtOTBJR0psWlc0Z1pHVm1hVzVsWkNjcE8xeHVmVnh1S0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhObGRGUnBiV1Z2ZFhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpGTmxkRlJwYldWdmRYUWdQU0J6WlhSVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJR1JsWm1GMWJIUlRaWFJVYVcxdmRYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHTnNaV0Z5VkdsdFpXOTFkQ0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMElEMGdZMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRU5zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0I5WEc1OUlDZ3BLVnh1Wm5WdVkzUnBiMjRnY25WdVZHbHRaVzkxZENobWRXNHBJSHRjYmlBZ0lDQnBaaUFvWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5UFQwZ2MyVjBWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0F2TDI1dmNtMWhiQ0JsYm5acGNtOXRaVzUwY3lCcGJpQnpZVzVsSUhOcGRIVmhkR2x2Ym5OY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRGUnBiV1Z2ZFhRb1puVnVMQ0F3S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnYVdZZ2MyVjBWR2x0Wlc5MWRDQjNZWE51SjNRZ1lYWmhhV3hoWW14bElHSjFkQ0IzWVhNZ2JHRjBkR1Z5SUdSbFptbHVaV1JjYmlBZ0lDQnBaaUFvS0dOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFQwOUlHUmxabUYxYkhSVFpYUlVhVzF2ZFhRZ2ZId2dJV05oWTJobFpGTmxkRlJwYldWdmRYUXBJQ1ltSUhObGRGUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUM4dklIZG9aVzRnZDJobGJpQnpiMjFsWW05a2VTQm9ZWE1nYzJOeVpYZGxaQ0IzYVhSb0lITmxkRlJwYldWdmRYUWdZblYwSUc1dklFa3VSUzRnYldGa1pHNWxjM05jYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUW9ablZ1TENBd0tUdGNiaUFnSUNCOUlHTmhkR05vS0dVcGUxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVjJobGJpQjNaU0JoY21VZ2FXNGdTUzVGTGlCaWRYUWdkR2hsSUhOamNtbHdkQ0JvWVhNZ1ltVmxiaUJsZG1Gc1pXUWdjMjhnU1M1RkxpQmtiMlZ6YmlkMElIUnlkWE4wSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUhkb1pXNGdZMkZzYkdWa0lHNXZjbTFoYkd4NVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDNWpZV3hzS0c1MWJHd3NJR1oxYml3Z01DazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ29aU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ6WVcxbElHRnpJR0ZpYjNabElHSjFkQ0IzYUdWdUlHbDBKM01nWVNCMlpYSnphVzl1SUc5bUlFa3VSUzRnZEdoaGRDQnRkWE4wSUdoaGRtVWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdabTl5SUNkMGFHbHpKeXdnYUc5d1puVnNiSGtnYjNWeUlHTnZiblJsZUhRZ1kyOXljbVZqZENCdmRHaGxjbmRwYzJVZ2FYUWdkMmxzYkNCMGFISnZkeUJoSUdkc2IySmhiQ0JsY25KdmNseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpGTmxkRlJwYldWdmRYUXVZMkZzYkNoMGFHbHpMQ0JtZFc0c0lEQXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc1Y2JuMWNibVoxYm1OMGFXOXVJSEoxYmtOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcElIdGNiaUFnSUNCcFppQW9ZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDA5UFNCamJHVmhjbFJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnTHk5dWIzSnRZV3dnWlc1MmFYSnZiV1Z1ZEhNZ2FXNGdjMkZ1WlNCemFYUjFZWFJwYjI1elhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtUdGNiaUFnSUNCOVhHNGdJQ0FnTHk4Z2FXWWdZMnhsWVhKVWFXMWxiM1YwSUhkaGMyNG5kQ0JoZG1GcGJHRmliR1VnWW5WMElIZGhjeUJzWVhSMFpYSWdaR1ZtYVc1bFpGeHVJQ0FnSUdsbUlDZ29ZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDA5UFNCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWMElIeDhJQ0ZqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFwSUNZbUlHTnNaV0Z5VkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmpiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0x5OGdkMmhsYmlCM2FHVnVJSE52YldWaWIyUjVJR2hoY3lCelkzSmxkMlZrSUhkcGRHZ2djMlYwVkdsdFpXOTFkQ0JpZFhRZ2JtOGdTUzVGTGlCdFlXUmtibVZ6YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2w3WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlhhR1Z1SUhkbElHRnlaU0JwYmlCSkxrVXVJR0oxZENCMGFHVWdjMk55YVhCMElHaGhjeUJpWldWdUlHVjJZV3hsWkNCemJ5QkpMa1V1SUdSdlpYTnVKM1FnSUhSeWRYTjBJSFJvWlNCbmJHOWlZV3dnYjJKcVpXTjBJSGRvWlc0Z1kyRnNiR1ZrSUc1dmNtMWhiR3g1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMExtTmhiR3dvYm5Wc2JDd2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDQW9aU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ6WVcxbElHRnpJR0ZpYjNabElHSjFkQ0IzYUdWdUlHbDBKM01nWVNCMlpYSnphVzl1SUc5bUlFa3VSUzRnZEdoaGRDQnRkWE4wSUdoaGRtVWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdabTl5SUNkMGFHbHpKeXdnYUc5d1puVnNiSGtnYjNWeUlHTnZiblJsZUhRZ1kyOXljbVZqZENCdmRHaGxjbmRwYzJVZ2FYUWdkMmxzYkNCMGFISnZkeUJoSUdkc2IySmhiQ0JsY25KdmNpNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGTnZiV1VnZG1WeWMybHZibk1nYjJZZ1NTNUZMaUJvWVhabElHUnBabVpsY21WdWRDQnlkV3hsY3lCbWIzSWdZMnhsWVhKVWFXMWxiM1YwSUhaeklITmxkRlJwYldWdmRYUmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFF1WTJGc2JDaDBhR2x6TENCdFlYSnJaWElwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNWNibHh1ZlZ4dWRtRnlJSEYxWlhWbElEMGdXMTA3WEc1MllYSWdaSEpoYVc1cGJtY2dQU0JtWVd4elpUdGNiblpoY2lCamRYSnlaVzUwVVhWbGRXVTdYRzUyWVhJZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dVhHNW1kVzVqZEdsdmJpQmpiR1ZoYmxWd1RtVjRkRlJwWTJzb0tTQjdYRzRnSUNBZ2FXWWdLQ0ZrY21GcGJtbHVaeUI4ZkNBaFkzVnljbVZ1ZEZGMVpYVmxLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzRnSUNBZ1pISmhhVzVwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JwWmlBb1kzVnljbVZ1ZEZGMVpYVmxMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpTQTlJR04xY25KbGJuUlJkV1YxWlM1amIyNWpZWFFvY1hWbGRXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIRjFaWFZsU1c1a1pYZ2dQU0F0TVR0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hGMVpYVmxMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0JrY21GcGJsRjFaWFZsS0NrN1hHNGdJQ0FnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJrY21GcGJsRjFaWFZsS0NrZ2UxeHVJQ0FnSUdsbUlDaGtjbUZwYm1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUhaaGNpQjBhVzFsYjNWMElEMGdjblZ1VkdsdFpXOTFkQ2hqYkdWaGJsVndUbVY0ZEZScFkyc3BPMXh1SUNBZ0lHUnlZV2x1YVc1bklEMGdkSEoxWlR0Y2JseHVJQ0FnSUhaaGNpQnNaVzRnUFNCeGRXVjFaUzVzWlc1bmRHZzdYRzRnSUNBZ2QyaHBiR1VvYkdWdUtTQjdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlNBOUlIRjFaWFZsTzF4dUlDQWdJQ0FnSUNCeGRXVjFaU0E5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjNhR2xzWlNBb0t5dHhkV1YxWlVsdVpHVjRJRHdnYkdWdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGRjFaWFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZGMVpYVmxXM0YxWlhWbFNXNWtaWGhkTG5KMWJpZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNiaUFnSUNBZ0lDQWdiR1Z1SUQwZ2NYVmxkV1V1YkdWdVozUm9PMXh1SUNBZ0lIMWNiaUFnSUNCamRYSnlaVzUwVVhWbGRXVWdQU0J1ZFd4c08xeHVJQ0FnSUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc0Z0lDQWdjblZ1UTJ4bFlYSlVhVzFsYjNWMEtIUnBiV1Z2ZFhRcE8xeHVmVnh1WEc1d2NtOWpaWE56TG01bGVIUlVhV05ySUQwZ1puVnVZM1JwYjI0Z0tHWjFiaWtnZTF4dUlDQWdJSFpoY2lCaGNtZHpJRDBnYm1WM0lFRnljbUY1S0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeEtUdGNiaUFnSUNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREU3SUdrZ1BDQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z5WjNOYmFTQXRJREZkSUQwZ1lYSm5kVzFsYm5SelcybGRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lIRjFaWFZsTG5CMWMyZ29ibVYzSUVsMFpXMG9ablZ1TENCaGNtZHpLU2s3WEc0Z0lDQWdhV1lnS0hGMVpYVmxMbXhsYm1kMGFDQTlQVDBnTVNBbUppQWhaSEpoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY25WdVZHbHRaVzkxZENoa2NtRnBibEYxWlhWbEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dkx5QjJPQ0JzYVd0bGN5QndjbVZrYVdOMGFXSnNaU0J2WW1wbFkzUnpYRzVtZFc1amRHbHZiaUJKZEdWdEtHWjFiaXdnWVhKeVlYa3BJSHRjYmlBZ0lDQjBhR2x6TG1aMWJpQTlJR1oxYmp0Y2JpQWdJQ0IwYUdsekxtRnljbUY1SUQwZ1lYSnlZWGs3WEc1OVhHNUpkR1Z0TG5CeWIzUnZkSGx3WlM1eWRXNGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnZEdocGN5NW1kVzR1WVhCd2JIa29iblZzYkN3Z2RHaHBjeTVoY25KaGVTazdYRzU5TzF4dWNISnZZMlZ6Y3k1MGFYUnNaU0E5SUNkaWNtOTNjMlZ5Snp0Y2JuQnliMk5sYzNNdVluSnZkM05sY2lBOUlIUnlkV1U3WEc1d2NtOWpaWE56TG1WdWRpQTlJSHQ5TzF4dWNISnZZMlZ6Y3k1aGNtZDJJRDBnVzEwN1hHNXdjbTlqWlhOekxuWmxjbk5wYjI0Z1BTQW5KenNnTHk4Z1pXMXdkSGtnYzNSeWFXNW5JSFJ2SUdGMmIybGtJSEpsWjJWNGNDQnBjM04xWlhOY2JuQnliMk5sYzNNdWRtVnljMmx2Ym5NZ1BTQjdmVHRjYmx4dVpuVnVZM1JwYjI0Z2JtOXZjQ2dwSUh0OVhHNWNibkJ5YjJObGMzTXViMjRnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTVoWkdSTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG05dVkyVWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXZabVlnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV5WlcxdmRtVk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxuSmxiVzkyWlVGc2JFeHBjM1JsYm1WeWN5QTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtVnRhWFFnUFNCdWIyOXdPMXh1WEc1d2NtOWpaWE56TG1KcGJtUnBibWNnUFNCbWRXNWpkR2x2YmlBb2JtRnRaU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jSEp2WTJWemN5NWlhVzVrYVc1bklHbHpJRzV2ZENCemRYQndiM0owWldRbktUdGNibjA3WEc1Y2JuQnliMk5sYzNNdVkzZGtJRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z0p5OG5JSDA3WEc1d2NtOWpaWE56TG1Ob1pHbHlJRDBnWm5WdVkzUnBiMjRnS0dScGNpa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmNISnZZMlZ6Y3k1amFHUnBjaUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVjSEp2WTJWemN5NTFiV0Z6YXlBOUlHWjFibU4wYVc5dUtDa2dleUJ5WlhSMWNtNGdNRHNnZlR0Y2JpSXNJaTh2SUhacGJUcDBjejAwT25OMGN6MDBPbk4zUFRRNlhHNHZLaUZjYmlBcVhHNGdLaUJEYjNCNWNtbG5hSFFnTWpBd09TMHlNREV5SUV0eWFYTWdTMjkzWVd3Z2RXNWtaWElnZEdobElIUmxjbTF6SUc5bUlIUm9aU0JOU1ZSY2JpQXFJR3hwWTJWdWMyVWdabTkxYm1RZ1lYUWdhSFIwY0RvdkwyZHBkR2gxWWk1amIyMHZhM0pwYzJ0dmQyRnNMM0V2Y21GM0wyMWhjM1JsY2k5TVNVTkZUbE5GWEc0Z0tseHVJQ29nVjJsMGFDQndZWEowY3lCaWVTQlVlV3hsY2lCRGJHOXpaVnh1SUNvZ1EyOXdlWEpwWjJoMElESXdNRGN0TWpBd09TQlVlV3hsY2lCRGJHOXpaU0IxYm1SbGNpQjBhR1VnZEdWeWJYTWdiMllnZEdobElFMUpWQ0JZSUd4cFkyVnVjMlVnWm05MWJtUmNiaUFxSUdGMElHaDBkSEE2THk5M2QzY3ViM0JsYm5OdmRYSmpaUzV2Y21jdmJHbGpaVzV6WlhNdmJXbDBMV3hwWTJWdWMyVXVhSFJ0YkZ4dUlDb2dSbTl5YTJWa0lHRjBJSEpsWmw5elpXNWtMbXB6SUhabGNuTnBiMjQ2SURJd01Ea3RNRFV0TVRGY2JpQXFYRzRnS2lCWGFYUm9JSEJoY25SeklHSjVJRTFoY21zZ1RXbHNiR1Z5WEc0Z0tpQkRiM0I1Y21sbmFIUWdLRU1wSURJd01URWdSMjl2WjJ4bElFbHVZeTVjYmlBcVhHNGdLaUJNYVdObGJuTmxaQ0IxYm1SbGNpQjBhR1VnUVhCaFkyaGxJRXhwWTJWdWMyVXNJRlpsY25OcGIyNGdNaTR3SUNoMGFHVWdYQ0pNYVdObGJuTmxYQ0lwTzF4dUlDb2dlVzkxSUcxaGVTQnViM1FnZFhObElIUm9hWE1nWm1sc1pTQmxlR05sY0hRZ2FXNGdZMjl0Y0d4cFlXNWpaU0IzYVhSb0lIUm9aU0JNYVdObGJuTmxMbHh1SUNvZ1dXOTFJRzFoZVNCdlluUmhhVzRnWVNCamIzQjVJRzltSUhSb1pTQk1hV05sYm5ObElHRjBYRzRnS2x4dUlDb2dhSFIwY0RvdkwzZDNkeTVoY0dGamFHVXViM0puTDJ4cFkyVnVjMlZ6TDB4SlEwVk9VMFV0TWk0d1hHNGdLbHh1SUNvZ1ZXNXNaWE56SUhKbGNYVnBjbVZrSUdKNUlHRndjR3hwWTJGaWJHVWdiR0YzSUc5eUlHRm5jbVZsWkNCMGJ5QnBiaUIzY21sMGFXNW5MQ0J6YjJaMGQyRnlaVnh1SUNvZ1pHbHpkSEpwWW5WMFpXUWdkVzVrWlhJZ2RHaGxJRXhwWTJWdWMyVWdhWE1nWkdsemRISnBZblYwWldRZ2IyNGdZVzRnWENKQlV5QkpVMXdpSUVKQlUwbFRMRnh1SUNvZ1YwbFVTRTlWVkNCWFFWSlNRVTVVU1VWVElFOVNJRU5QVGtSSlZFbFBUbE1nVDBZZ1FVNVpJRXRKVGtRc0lHVnBkR2hsY2lCbGVIQnlaWE56SUc5eUlHbHRjR3hwWldRdVhHNGdLaUJUWldVZ2RHaGxJRXhwWTJWdWMyVWdabTl5SUhSb1pTQnpjR1ZqYVdacFl5QnNZVzVuZFdGblpTQm5iM1psY201cGJtY2djR1Z5YldsemMybHZibk1nWVc1a1hHNGdLaUJzYVcxcGRHRjBhVzl1Y3lCMWJtUmxjaUIwYUdVZ1RHbGpaVzV6WlM1Y2JpQXFYRzRnS2k5Y2JseHVLR1oxYm1OMGFXOXVJQ2hrWldacGJtbDBhVzl1S1NCN1hHNGdJQ0FnWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVjYmlBZ0lDQXZMeUJVYUdseklHWnBiR1VnZDJsc2JDQm1kVzVqZEdsdmJpQndjbTl3WlhKc2VTQmhjeUJoSUR4elkzSnBjSFErSUhSaFp5d2diM0lnWVNCdGIyUjFiR1ZjYmlBZ0lDQXZMeUIxYzJsdVp5QkRiMjF0YjI1S1V5QmhibVFnVG05a1pVcFRJRzl5SUZKbGNYVnBjbVZLVXlCdGIyUjFiR1VnWm05eWJXRjBjeTRnSUVsdVhHNGdJQ0FnTHk4Z1EyOXRiVzl1TDA1dlpHVXZVbVZ4ZFdseVpVcFRMQ0IwYUdVZ2JXOWtkV3hsSUdWNGNHOXlkSE1nZEdobElGRWdRVkJKSUdGdVpDQjNhR1Z1WEc0Z0lDQWdMeThnWlhobFkzVjBaV1FnWVhNZ1lTQnphVzF3YkdVZ1BITmpjbWx3ZEQ0c0lHbDBJR055WldGMFpYTWdZU0JSSUdkc2IySmhiQ0JwYm5OMFpXRmtMbHh1WEc0Z0lDQWdMeThnVFc5dWRHRm5aU0JTWlhGMWFYSmxYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQmliMjkwYzNSeVlYQWdQVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpa2dlMXh1SUNBZ0lDQWdJQ0JpYjI5MGMzUnlZWEFvWENKd2NtOXRhWE5sWENJc0lHUmxabWx1YVhScGIyNHBPMXh1WEc0Z0lDQWdMeThnUTI5dGJXOXVTbE5jYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0JjSW05aWFtVmpkRndpSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlGd2liMkpxWldOMFhDSXBJSHRjYmlBZ0lDQWdJQ0FnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JrWldacGJtbDBhVzl1S0NrN1hHNWNiaUFnSUNBdkx5QlNaWEYxYVhKbFNsTmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCa1pXWnBibVV1WVcxa0tTQjdYRzRnSUNBZ0lDQWdJR1JsWm1sdVpTaGtaV1pwYm1sMGFXOXVLVHRjYmx4dUlDQWdJQzh2SUZORlV5QW9VMlZqZFhKbElFVmpiV0ZUWTNKcGNIUXBYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2MyVnpJQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hjMlZ6TG05cktDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sY3k1dFlXdGxVU0E5SUdSbFptbHVhWFJwYjI0N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDOHZJRHh6WTNKcGNIUStYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpSUh4OElIUjVjR1Z2WmlCelpXeG1JQ0U5UFNCY0luVnVaR1ZtYVc1bFpGd2lLU0I3WEc0Z0lDQWdJQ0FnSUM4dklGQnlaV1psY2lCM2FXNWtiM2NnYjNabGNpQnpaV3htSUdadmNpQmhaR1F0YjI0Z2MyTnlhWEIwY3k0Z1ZYTmxJSE5sYkdZZ1ptOXlYRzRnSUNBZ0lDQWdJQzh2SUc1dmJpMTNhVzVrYjNkbFpDQmpiMjUwWlhoMGN5NWNiaUFnSUNBZ0lDQWdkbUZ5SUdkc2IySmhiQ0E5SUhSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSWdQeUIzYVc1a2IzY2dPaUJ6Wld4bU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVkbGRDQjBhR1VnWUhkcGJtUnZkMkFnYjJKcVpXTjBMQ0J6WVhabElIUm9aU0J3Y21WMmFXOTFjeUJSSUdkc2IySmhiRnh1SUNBZ0lDQWdJQ0F2THlCaGJtUWdhVzVwZEdsaGJHbDZaU0JSSUdGeklHRWdaMnh2WW1Gc0xseHVJQ0FnSUNBZ0lDQjJZWElnY0hKbGRtbHZkWE5SSUQwZ1oyeHZZbUZzTGxFN1hHNGdJQ0FnSUNBZ0lHZHNiMkpoYkM1UklEMGdaR1ZtYVc1cGRHbHZiaWdwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRUZrWkNCaElHNXZRMjl1Wm14cFkzUWdablZ1WTNScGIyNGdjMjhnVVNCallXNGdZbVVnY21WdGIzWmxaQ0JtY205dElIUm9aVnh1SUNBZ0lDQWdJQ0F2THlCbmJHOWlZV3dnYm1GdFpYTndZV05sTGx4dUlDQWdJQ0FnSUNCbmJHOWlZV3d1VVM1dWIwTnZibVpzYVdOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaMnh2WW1Gc0xsRWdQU0J3Y21WMmFXOTFjMUU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWxSb2FYTWdaVzUyYVhKdmJtMWxiblFnZDJGeklHNXZkQ0JoYm5ScFkybHdZWFJsWkNCaWVTQlJMaUJRYkdWaGMyVWdabWxzWlNCaElHSjFaeTVjSWlrN1hHNGdJQ0FnZlZ4dVhHNTlLU2htZFc1amRHbHZiaUFvS1NCN1hHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVkbUZ5SUdoaGMxTjBZV05yY3lBOUlHWmhiSE5sTzF4dWRISjVJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0tUdGNibjBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0JvWVhOVGRHRmphM01nUFNBaElXVXVjM1JoWTJzN1hHNTlYRzVjYmk4dklFRnNiQ0JqYjJSbElHRm1kR1Z5SUhSb2FYTWdjRzlwYm5RZ2QybHNiQ0JpWlNCbWFXeDBaWEpsWkNCbWNtOXRJSE4wWVdOcklIUnlZV05sY3lCeVpYQnZjblJsWkZ4dUx5OGdZbmtnVVM1Y2JuWmhjaUJ4VTNSaGNuUnBibWRNYVc1bElEMGdZMkZ3ZEhWeVpVeHBibVVvS1R0Y2JuWmhjaUJ4Um1sc1pVNWhiV1U3WEc1Y2JpOHZJSE5vYVcxelhHNWNiaTh2SUhWelpXUWdabTl5SUdaaGJHeGlZV05ySUdsdUlGd2lZV3hzVW1WemIyeDJaV1JjSWx4dWRtRnlJRzV2YjNBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3ZlR0Y2JseHVMeThnVlhObElIUm9aU0JtWVhOMFpYTjBJSEJ2YzNOcFlteGxJRzFsWVc1eklIUnZJR1Y0WldOMWRHVWdZU0IwWVhOcklHbHVJR0VnWm5WMGRYSmxJSFIxY201Y2JpOHZJRzltSUhSb1pTQmxkbVZ1ZENCc2IyOXdMbHh1ZG1GeUlHNWxlSFJVYVdOcklEMG9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQzh2SUd4cGJtdGxaQ0JzYVhOMElHOW1JSFJoYzJ0eklDaHphVzVuYkdVc0lIZHBkR2dnYUdWaFpDQnViMlJsS1Z4dUlDQWdJSFpoY2lCb1pXRmtJRDBnZTNSaGMyczZJSFp2YVdRZ01Dd2dibVY0ZERvZ2JuVnNiSDA3WEc0Z0lDQWdkbUZ5SUhSaGFXd2dQU0JvWldGa08xeHVJQ0FnSUhaaGNpQm1iSFZ6YUdsdVp5QTlJR1poYkhObE8xeHVJQ0FnSUhaaGNpQnlaWEYxWlhOMFZHbGpheUE5SUhadmFXUWdNRHRjYmlBZ0lDQjJZWElnYVhOT2IyUmxTbE1nUFNCbVlXeHpaVHRjYmlBZ0lDQXZMeUJ4ZFdWMVpTQm1iM0lnYkdGMFpTQjBZWE5yY3l3Z2RYTmxaQ0JpZVNCMWJtaGhibVJzWldRZ2NtVnFaV04wYVc5dUlIUnlZV05yYVc1blhHNGdJQ0FnZG1GeUlHeGhkR1Z5VVhWbGRXVWdQU0JiWFR0Y2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdac2RYTm9LQ2tnZTF4dUlDQWdJQ0FnSUNBdktpQnFjMmhwYm5RZ2JHOXZjR1oxYm1NNklIUnlkV1VnS2k5Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJoYzJzc0lHUnZiV0ZwYmp0Y2JseHVJQ0FnSUNBZ0lDQjNhR2xzWlNBb2FHVmhaQzV1WlhoMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCb1pXRmtJRDBnYUdWaFpDNXVaWGgwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR0Z6YXlBOUlHaGxZV1F1ZEdGemF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdobFlXUXVkR0Z6YXlBOUlIWnZhV1FnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2YldGcGJpQTlJR2hsWVdRdVpHOXRZV2x1TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1pHOXRZV2x1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHVmhaQzVrYjIxaGFXNGdQU0IyYjJsa0lEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaRzl0WVdsdUxtVnVkR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlkVzVUYVc1bmJHVW9kR0Z6YXl3Z1pHOXRZV2x1S1R0Y2JseHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaHNZWFJsY2xGMVpYVmxMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRnpheUE5SUd4aGRHVnlVWFZsZFdVdWNHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlkVzVUYVc1bmJHVW9kR0Z6YXlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdabXgxYzJocGJtY2dQU0JtWVd4elpUdGNiaUFnSUNCOVhHNGdJQ0FnTHk4Z2NuVnVjeUJoSUhOcGJtZHNaU0JtZFc1amRHbHZiaUJwYmlCMGFHVWdZWE41Ym1NZ2NYVmxkV1ZjYmlBZ0lDQm1kVzVqZEdsdmJpQnlkVzVUYVc1bmJHVW9kR0Z6YXl3Z1pHOXRZV2x1S1NCN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZWE5yS0NrN1hHNWNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselRtOWtaVXBUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTVzRnYm05a1pTd2dkVzVqWVhWbmFIUWdaWGhqWlhCMGFXOXVjeUJoY21VZ1kyOXVjMmxrWlhKbFpDQm1ZWFJoYkNCbGNuSnZjbk11WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VtVXRkR2h5YjNjZ2RHaGxiU0J6ZVc1amFISnZibTkxYzJ4NUlIUnZJR2x1ZEdWeWNuVndkQ0JtYkhWemFHbHVaeUZjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFVnVjM1Z5WlNCamIyNTBhVzUxWVhScGIyNGdhV1lnZEdobElIVnVZMkYxWjJoMElHVjRZMlZ3ZEdsdmJpQnBjeUJ6ZFhCd2NtVnpjMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2JHbHpkR1Z1YVc1bklGd2lkVzVqWVhWbmFIUkZlR05sY0hScGIyNWNJaUJsZG1WdWRITWdLR0Z6SUdSdmJXRnBibk1nWkc5bGN5a3VYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUTI5dWRHbHVkV1VnYVc0Z2JtVjRkQ0JsZG1WdWRDQjBieUJoZG05cFpDQjBhV05ySUhKbFkzVnljMmx2Ymk1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aRzl0WVdsdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSdmJXRnBiaTVsZUdsMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm14MWMyZ3NJREFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtiMjFoYVc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkc5dFlXbHVMbVZ1ZEdWeUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2daVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKYmlCaWNtOTNjMlZ5Y3l3Z2RXNWpZWFZuYUhRZ1pYaGpaWEIwYVc5dWN5QmhjbVVnYm05MElHWmhkR0ZzTGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklGSmxMWFJvY205M0lIUm9aVzBnWVhONWJtTm9jbTl1YjNWemJIa2dkRzhnWVhadmFXUWdjMnh2ZHkxa2IzZHVjeTVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2daVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TENBd0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoa2IyMWhhVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2YldGcGJpNWxlR2wwS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdVpYaDBWR2xqYXlBOUlHWjFibU4wYVc5dUlDaDBZWE5yS1NCN1hHNGdJQ0FnSUNBZ0lIUmhhV3dnUFNCMFlXbHNMbTVsZUhRZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlYTnJPaUIwWVhOckxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkc5dFlXbHVPaUJwYzA1dlpHVktVeUFtSmlCd2NtOWpaWE56TG1SdmJXRnBiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxlSFE2SUc1MWJHeGNiaUFnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JV1pzZFhOb2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iSFZ6YUdsdVp5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhGMVpYTjBWR2xqYXlncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjSEp2WTJWemN5QTlQVDBnWENKdlltcGxZM1JjSWlBbUpseHVJQ0FnSUNBZ0lDQndjbTlqWlhOekxuUnZVM1J5YVc1bktDa2dQVDA5SUZ3aVcyOWlhbVZqZENCd2NtOWpaWE56WFZ3aUlDWW1JSEJ5YjJObGMzTXVibVY0ZEZScFkyc3BJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1JXNXpkWEpsSUZFZ2FYTWdhVzRnWVNCeVpXRnNJRTV2WkdVZ1pXNTJhWEp2Ym0xbGJuUXNJSGRwZEdnZ1lTQmdjSEp2WTJWemN5NXVaWGgwVkdsamEyQXVYRzRnSUNBZ0lDQWdJQzh2SUZSdklITmxaU0IwYUhKdmRXZG9JR1poYTJVZ1RtOWtaU0JsYm5acGNtOXViV1Z1ZEhNNlhHNGdJQ0FnSUNBZ0lDOHZJQ29nVFc5amFHRWdkR1Z6ZENCeWRXNXVaWElnTFNCbGVIQnZjMlZ6SUdFZ1lIQnliMk5sYzNOZ0lHZHNiMkpoYkNCM2FYUm9iM1YwSUdFZ1lHNWxlSFJVYVdOcllGeHVJQ0FnSUNBZ0lDQXZMeUFxSUVKeWIzZHpaWEpwWm5rZ0xTQmxlSEJ2YzJWeklHRWdZSEJ5YjJObGMzTXVibVY0VkdsamEyQWdablZ1WTNScGIyNGdkR2hoZENCMWMyVnpYRzRnSUNBZ0lDQWdJQzh2SUNBZ1lITmxkRlJwYldWdmRYUmdMaUJKYmlCMGFHbHpJR05oYzJVZ1lITmxkRWx0YldWa2FXRjBaV0FnYVhNZ2NISmxabVZ5Y21Wa0lHSmxZMkYxYzJWY2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnYVhRZ2FYTWdabUZ6ZEdWeUxpQkNjbTkzYzJWeWFXWjVKM01nWUhCeWIyTmxjM011ZEc5VGRISnBibWNvS1dBZ2VXbGxiR1J6WEc0Z0lDQWdJQ0FnSUM4dklDQWdYQ0piYjJKcVpXTjBJRTlpYW1WamRGMWNJaXdnZDJocGJHVWdhVzRnWVNCeVpXRnNJRTV2WkdVZ1pXNTJhWEp2Ym0xbGJuUmNiaUFnSUNBZ0lDQWdMeThnSUNCZ2NISnZZMlZ6Y3k1dVpYaDBWR2xqYXlncFlDQjVhV1ZzWkhNZ1hDSmJiMkpxWldOMElIQnliMk5sYzNOZFhDSXVYRzRnSUNBZ0lDQWdJR2x6VG05a1pVcFRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBWR2xqYXlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1pteDFjMmdwTzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2MyVjBTVzF0WldScFlYUmxJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1NXNGdTVVV4TUN3Z1RtOWtaUzVxY3lBd0xqa3JMQ0J2Y2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlRtOWliR1ZLVXk5elpYUkpiVzFsWkdsaGRHVmNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUZ3aWRXNWtaV1pwYm1Wa1hDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjWFZsYzNSVWFXTnJJRDBnYzJWMFNXMXRaV1JwWVhSbExtSnBibVFvZDJsdVpHOTNMQ0JtYkhWemFDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYRjFaWE4wVkdsamF5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpYUkpiVzFsWkdsaGRHVW9abXgxYzJncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ1RXVnpjMkZuWlVOb1lXNXVaV3dnSVQwOUlGd2lkVzVrWldacGJtVmtYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdiVzlrWlhKdUlHSnliM2R6WlhKelhHNGdJQ0FnSUNBZ0lDOHZJR2gwZEhBNkx5OTNkM2N1Ym05dVlteHZZMnRwYm1jdWFXOHZNakF4TVM4d05pOTNhVzVrYjNkdVpYaDBkR2xqYXk1b2RHMXNYRzRnSUNBZ0lDQWdJSFpoY2lCamFHRnVibVZzSUQwZ2JtVjNJRTFsYzNOaFoyVkRhR0Z1Ym1Wc0tDazdYRzRnSUNBZ0lDQWdJQzh2SUVGMElHeGxZWE4wSUZOaFptRnlhU0JXWlhKemFXOXVJRFl1TUM0MUlDZzROVE0yTGpNd0xqRXBJR2x1ZEdWeWJXbDBkR1Z1ZEd4NUlHTmhibTV2ZENCamNtVmhkR1ZjYmlBZ0lDQWdJQ0FnTHk4Z2QyOXlhMmx1WnlCdFpYTnpZV2RsSUhCdmNuUnpJSFJvWlNCbWFYSnpkQ0IwYVcxbElHRWdjR0ZuWlNCc2IyRmtjeTVjYmlBZ0lDQWdJQ0FnWTJoaGJtNWxiQzV3YjNKME1TNXZibTFsYzNOaFoyVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhGMVpYTjBWR2xqYXlBOUlISmxjWFZsYzNSUWIzSjBWR2xqYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05vWVc1dVpXd3VjRzl5ZERFdWIyNXRaWE56WVdkbElEMGdabXgxYzJnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkhWemFDZ3BPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCMllYSWdjbVZ4ZFdWemRGQnZjblJVYVdOcklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVDNCbGNtRWdjbVZ4ZFdseVpYTWdkWE1nZEc4Z2NISnZkbWxrWlNCaElHMWxjM05oWjJVZ2NHRjViRzloWkN3Z2NtVm5ZWEprYkdWemN5QnZabHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdkMmhsZEdobGNpQjNaU0IxYzJVZ2FYUXVYRzRnSUNBZ0lDQWdJQ0FnSUNCamFHRnVibVZzTG5CdmNuUXlMbkJ2YzNSTlpYTnpZV2RsS0RBcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBWR2xqYXlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9abXgxYzJnc0lEQXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEZCdmNuUlVhV05yS0NrN1hHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJ2YkdRZ1luSnZkM05sY25OY2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEZScFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0dac2RYTm9MQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJQ0FnTHk4Z2NuVnVjeUJoSUhSaGMyc2dZV1owWlhJZ1lXeHNJRzkwYUdWeUlIUmhjMnR6SUdoaGRtVWdZbVZsYmlCeWRXNWNiaUFnSUNBdkx5QjBhR2x6SUdseklIVnpaV1oxYkNCbWIzSWdkVzVvWVc1a2JHVmtJSEpsYW1WamRHbHZiaUIwY21GamEybHVaeUIwYUdGMElHNWxaV1J6SUhSdklHaGhjSEJsYmx4dUlDQWdJQzh2SUdGbWRHVnlJR0ZzYkNCZ2RHaGxibUJrSUhSaGMydHpJR2hoZG1VZ1ltVmxiaUJ5ZFc0dVhHNGdJQ0FnYm1WNGRGUnBZMnN1Y25WdVFXWjBaWElnUFNCbWRXNWpkR2x2YmlBb2RHRnpheWtnZTF4dUlDQWdJQ0FnSUNCc1lYUmxjbEYxWlhWbExuQjFjMmdvZEdGemF5azdYRzRnSUNBZ0lDQWdJR2xtSUNnaFpteDFjMmhwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdac2RYTm9hVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjWFZsYzNSVWFXTnJLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGgwVkdsamF6dGNibjBwS0NrN1hHNWNiaTh2SUVGMGRHVnRjSFFnZEc4Z2JXRnJaU0JuWlc1bGNtbGpjeUJ6WVdabElHbHVJSFJvWlNCbVlXTmxJRzltSUdSdmQyNXpkSEpsWVcxY2JpOHZJRzF2WkdsbWFXTmhkR2x2Ym5NdVhHNHZMeUJVYUdWeVpTQnBjeUJ1YnlCemFYUjFZWFJwYjI0Z2QyaGxjbVVnZEdocGN5QnBjeUJ1WldObGMzTmhjbmt1WEc0dkx5QkpaaUI1YjNVZ2JtVmxaQ0JoSUhObFkzVnlhWFI1SUdkMVlYSmhiblJsWlN3Z2RHaGxjMlVnY0hKcGJXOXlaR2xoYkhNZ2JtVmxaQ0IwYnlCaVpWeHVMeThnWkdWbGNHeDVJR1p5YjNwbGJpQmhibmwzWVhrc0lHRnVaQ0JwWmlCNWIzVWdaRzl1NG9DWmRDQnVaV1ZrSUdFZ2MyVmpkWEpwZEhrZ1ozVmhjbUZ1ZEdWbExGeHVMeThnZEdocGN5QnBjeUJxZFhOMElIQnNZV2x1SUhCaGNtRnViMmxrTGx4dUx5OGdTRzkzWlhabGNpd2dkR2hwY3lBcUttMXBaMmgwS2lvZ2FHRjJaU0IwYUdVZ2JtbGpaU0J6YVdSbExXVm1abVZqZENCdlppQnlaV1IxWTJsdVp5QjBhR1VnYzJsNlpTQnZabHh1THk4Z2RHaGxJRzFwYm1sbWFXVmtJR052WkdVZ1lua2djbVZrZFdOcGJtY2dlQzVqWVd4c0tDa2dkRzhnYldWeVpXeDVJSGdvS1Z4dUx5OGdVMlZsSUUxaGNtc2dUV2xzYkdWeTRvQ1pjeUJsZUhCc1lXNWhkR2x2YmlCdlppQjNhR0YwSUhSb2FYTWdaRzlsY3k1Y2JpOHZJR2gwZEhBNkx5OTNhV3RwTG1WamJXRnpZM0pwY0hRdWIzSm5MMlJ2YTNVdWNHaHdQMmxrUFdOdmJuWmxiblJwYjI1ek9uTmhabVZmYldWMFlWOXdjbTluY21GdGJXbHVaMXh1ZG1GeUlHTmhiR3dnUFNCR2RXNWpkR2x2Ymk1allXeHNPMXh1Wm5WdVkzUnBiMjRnZFc1amRYSnllVlJvYVhNb1ppa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV3hzTG1Gd2NHeDVLR1lzSUdGeVozVnRaVzUwY3lrN1hHNGdJQ0FnZlR0Y2JuMWNiaTh2SUZSb2FYTWdhWE1nWlhGMWFYWmhiR1Z1ZEN3Z1luVjBJSE5zYjNkbGNqcGNiaTh2SUhWdVkzVnljbmxVYUdseklEMGdSblZ1WTNScGIyNWZZbWx1WkM1aWFXNWtLRVoxYm1OMGFXOXVYMkpwYm1RdVkyRnNiQ2s3WEc0dkx5Qm9kSFJ3T2k4dmFuTndaWEptTG1OdmJTOTFibU4xY25KNWRHaHBjMXh1WEc1MllYSWdZWEp5WVhsZmMyeHBZMlVnUFNCMWJtTjFjbko1VkdocGN5aEJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyeHBZMlVwTzF4dVhHNTJZWElnWVhKeVlYbGZjbVZrZFdObElEMGdkVzVqZFhKeWVWUm9hWE1vWEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExuSmxaSFZqWlNCOGZDQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc3NJR0poYzJsektTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCcGJtUmxlQ0E5SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlc1bmRHZ2dQU0IwYUdsekxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ0x5OGdZMjl1WTJWeWJtbHVaeUIwYUdVZ2FXNXBkR2xoYkNCMllXeDFaU3dnYVdZZ2IyNWxJR2x6SUc1dmRDQndjbTkyYVdSbFpGeHVJQ0FnSUNBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMlZsYXlCMGJ5QjBhR1VnWm1seWMzUWdkbUZzZFdVZ2FXNGdkR2hsSUdGeWNtRjVMQ0JoWTJOdmRXNTBhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJtYjNJZ2RHaGxJSEJ2YzNOcFltbHNhWFI1SUhSb1lYUWdhWE1nYVhNZ1lTQnpjR0Z5YzJVZ1lYSnlZWGxjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FXNWtaWGdnYVc0Z2RHaHBjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmlZWE5wY3lBOUlIUm9hWE5iYVc1a1pYZ3JLMTA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9LeXRwYm1SbGVDQStQU0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdkMmhwYkdVZ0tERXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUM4dklISmxaSFZqWlZ4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnYVc1a1pYZ2dQQ0JzWlc1bmRHZzdJR2x1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR0ZqWTI5MWJuUWdabTl5SUhSb1pTQndiM056YVdKcGJHbDBlU0IwYUdGMElIUm9aU0JoY25KaGVTQnBjeUJ6Y0dGeWMyVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBibVJsZUNCcGJpQjBhR2x6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ltRnphWE1nUFNCallXeHNZbUZqYXloaVlYTnBjeXdnZEdocGMxdHBibVJsZUYwc0lHbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWW1GemFYTTdYRzRnSUNBZ2ZWeHVLVHRjYmx4dWRtRnlJR0Z5Y21GNVgybHVaR1Y0VDJZZ1BTQjFibU4xY25KNVZHaHBjeWhjYmlBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWFXNWtaWGhQWmlCOGZDQm1kVzVqZEdsdmJpQW9kbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdMeThnYm05MElHRWdkbVZ5ZVNCbmIyOWtJSE5vYVcwc0lHSjFkQ0JuYjI5a0lHVnViM1ZuYUNCbWIzSWdiM1Z5SUc5dVpTQjFjMlVnYjJZZ2FYUmNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0IwYUdsekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGMxdHBYU0E5UFQwZ2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTFRFN1hHNGdJQ0FnZlZ4dUtUdGNibHh1ZG1GeUlHRnljbUY1WDIxaGNDQTlJSFZ1WTNWeWNubFVhR2x6S0Z4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRZWEFnZkh3Z1puVnVZM1JwYjI0Z0tHTmhiR3hpWVdOckxDQjBhR2x6Y0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYzJWc1ppQTlJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lIWmhjaUJqYjJ4c1pXTjBJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHRnljbUY1WDNKbFpIVmpaU2h6Wld4bUxDQm1kVzVqZEdsdmJpQW9kVzVrWldacGJtVmtMQ0IyWVd4MVpTd2dhVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJHeGxZM1F1Y0hWemFDaGpZV3hzWW1GamF5NWpZV3hzS0hSb2FYTndMQ0IyWVd4MVpTd2dhVzVrWlhnc0lITmxiR1lwS1R0Y2JpQWdJQ0FnSUNBZ2ZTd2dkbTlwWkNBd0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiR3hsWTNRN1hHNGdJQ0FnZlZ4dUtUdGNibHh1ZG1GeUlHOWlhbVZqZEY5amNtVmhkR1VnUFNCUFltcGxZM1F1WTNKbFlYUmxJSHg4SUdaMWJtTjBhVzl1SUNod2NtOTBiM1I1Y0dVcElIdGNiaUFnSUNCbWRXNWpkR2x2YmlCVWVYQmxLQ2tnZXlCOVhHNGdJQ0FnVkhsd1pTNXdjbTkwYjNSNWNHVWdQU0J3Y205MGIzUjVjR1U3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZVhCbEtDazdYRzU5TzF4dVhHNTJZWElnYjJKcVpXTjBYMmhoYzA5M2JsQnliM0JsY25SNUlEMGdkVzVqZFhKeWVWUm9hWE1vVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTazdYRzVjYm5aaGNpQnZZbXBsWTNSZmEyVjVjeUE5SUU5aWFtVmpkQzVyWlhseklIeDhJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUXBJSHRjYmlBZ0lDQjJZWElnYTJWNWN5QTlJRnRkTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnZZbXBsWTNRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0c5aWFtVmpkRjlvWVhOUGQyNVFjbTl3WlhKMGVTaHZZbXBsWTNRc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3RsZVhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJyWlhsek8xeHVmVHRjYmx4dWRtRnlJRzlpYW1WamRGOTBiMU4wY21sdVp5QTlJSFZ1WTNWeWNubFVhR2x6S0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWNwTzF4dVhHNW1kVzVqZEdsdmJpQnBjMDlpYW1WamRDaDJZV3gxWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpTQTlQVDBnVDJKcVpXTjBLSFpoYkhWbEtUdGNibjFjYmx4dUx5OGdaMlZ1WlhKaGRHOXlJSEpsYkdGMFpXUWdjMmhwYlhOY2JseHVMeThnUmtsWVRVVTZJRkpsYlc5MlpTQjBhR2x6SUdaMWJtTjBhVzl1SUc5dVkyVWdSVk0ySUdkbGJtVnlZWFJ2Y25NZ1lYSmxJR2x1SUZOd2FXUmxjazF2Ym10bGVTNWNibVoxYm1OMGFXOXVJR2x6VTNSdmNFbDBaWEpoZEdsdmJpaGxlR05sY0hScGIyNHBJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ0lDQnZZbXBsWTNSZmRHOVRkSEpwYm1jb1pYaGpaWEIwYVc5dUtTQTlQVDBnWENKYmIySnFaV04wSUZOMGIzQkpkR1Z5WVhScGIyNWRYQ0lnZkh4Y2JpQWdJQ0FnSUNBZ1pYaGpaWEIwYVc5dUlHbHVjM1JoYm1ObGIyWWdVVkpsZEhWeWJsWmhiSFZsWEc0Z0lDQWdLVHRjYm4xY2JseHVMeThnUmtsWVRVVTZJRkpsYlc5MlpTQjBhR2x6SUdobGJIQmxjaUJoYm1RZ1VTNXlaWFIxY200Z2IyNWpaU0JGVXpZZ1oyVnVaWEpoZEc5eWN5QmhjbVVnYVc1Y2JpOHZJRk53YVdSbGNrMXZibXRsZVM1Y2JuWmhjaUJSVW1WMGRYSnVWbUZzZFdVN1hHNXBaaUFvZEhsd1pXOW1JRkpsZEhWeWJsWmhiSFZsSUNFOVBTQmNJblZ1WkdWbWFXNWxaRndpS1NCN1hHNGdJQ0FnVVZKbGRIVnlibFpoYkhWbElEMGdVbVYwZFhKdVZtRnNkV1U3WEc1OUlHVnNjMlVnZTF4dUlDQWdJRkZTWlhSMWNtNVdZV3gxWlNBOUlHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxJRDBnZG1Gc2RXVTdYRzRnSUNBZ2ZUdGNibjFjYmx4dUx5OGdiRzl1WnlCemRHRmpheUIwY21GalpYTmNibHh1ZG1GeUlGTlVRVU5MWDBwVlRWQmZVMFZRUVZKQlZFOVNJRDBnWENKR2NtOXRJSEJ5WlhacGIzVnpJR1YyWlc1ME9sd2lPMXh1WEc1bWRXNWpkR2x2YmlCdFlXdGxVM1JoWTJ0VWNtRmpaVXh2Ym1jb1pYSnliM0lzSUhCeWIyMXBjMlVwSUh0Y2JpQWdJQ0F2THlCSlppQndiM056YVdKc1pTd2dkSEpoYm5ObWIzSnRJSFJvWlNCbGNuSnZjaUJ6ZEdGamF5QjBjbUZqWlNCaWVTQnlaVzF2ZG1sdVp5Qk9iMlJsSUdGdVpDQlJYRzRnSUNBZ0x5OGdZM0oxWm5Rc0lIUm9aVzRnWTI5dVkyRjBaVzVoZEdsdVp5QjNhWFJvSUhSb1pTQnpkR0ZqYXlCMGNtRmpaU0J2WmlCZ2NISnZiV2x6WldBdUlGTmxaU0FqTlRjdVhHNGdJQ0FnYVdZZ0tHaGhjMU4wWVdOcmN5QW1KbHh1SUNBZ0lDQWdJQ0J3Y205dGFYTmxMbk4wWVdOcklDWW1YRzRnSUNBZ0lDQWdJSFI1Y0dWdlppQmxjbkp2Y2lBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmx4dUlDQWdJQ0FnSUNCbGNuSnZjaUFoUFQwZ2JuVnNiQ0FtSmx4dUlDQWdJQ0FnSUNCbGNuSnZjaTV6ZEdGamF5QW1KbHh1SUNBZ0lDQWdJQ0JsY25KdmNpNXpkR0ZqYXk1cGJtUmxlRTltS0ZOVVFVTkxYMHBWVFZCZlUwVlFRVkpCVkU5U0tTQTlQVDBnTFRGY2JpQWdJQ0FwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE4wWVdOcmN5QTlJRnRkTzF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCd0lEMGdjSEp2YldselpUc2dJU0Z3T3lCd0lEMGdjQzV6YjNWeVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3TG5OMFlXTnJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSaFkydHpMblZ1YzJocFpuUW9jQzV6ZEdGamF5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjM1JoWTJ0ekxuVnVjMmhwWm5Rb1pYSnliM0l1YzNSaFkyc3BPMXh1WEc0Z0lDQWdJQ0FnSUhaaGNpQmpiMjVqWVhSbFpGTjBZV05yY3lBOUlITjBZV05yY3k1cWIybHVLRndpWEZ4dVhDSWdLeUJUVkVGRFMxOUtWVTFRWDFORlVFRlNRVlJQVWlBcklGd2lYRnh1WENJcE8xeHVJQ0FnSUNBZ0lDQmxjbkp2Y2k1emRHRmpheUE5SUdacGJIUmxjbE4wWVdOclUzUnlhVzVuS0dOdmJtTmhkR1ZrVTNSaFkydHpLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWnBiSFJsY2xOMFlXTnJVM1J5YVc1bktITjBZV05yVTNSeWFXNW5LU0I3WEc0Z0lDQWdkbUZ5SUd4cGJtVnpJRDBnYzNSaFkydFRkSEpwYm1jdWMzQnNhWFFvWENKY1hHNWNJaWs3WEc0Z0lDQWdkbUZ5SUdSbGMybHlaV1JNYVc1bGN5QTlJRnRkTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdsdVpYTXViR1Z1WjNSb095QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR3hwYm1VZ1BTQnNhVzVsYzF0cFhUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXbHpTVzUwWlhKdVlXeEdjbUZ0WlNoc2FXNWxLU0FtSmlBaGFYTk9iMlJsUm5KaGJXVW9iR2x1WlNrZ0ppWWdiR2x1WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWemFYSmxaRXhwYm1WekxuQjFjMmdvYkdsdVpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdSbGMybHlaV1JNYVc1bGN5NXFiMmx1S0Z3aVhGeHVYQ0lwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzA1dlpHVkdjbUZ0WlNoemRHRmphMHhwYm1VcElIdGNiaUFnSUNCeVpYUjFjbTRnYzNSaFkydE1hVzVsTG1sdVpHVjRUMllvWENJb2JXOWtkV3hsTG1wek9sd2lLU0FoUFQwZ0xURWdmSHhjYmlBZ0lDQWdJQ0FnSUNBZ2MzUmhZMnRNYVc1bExtbHVaR1Y0VDJZb1hDSW9ibTlrWlM1cWN6cGNJaWtnSVQwOUlDMHhPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm5aWFJHYVd4bFRtRnRaVUZ1WkV4cGJtVk9kVzFpWlhJb2MzUmhZMnRNYVc1bEtTQjdYRzRnSUNBZ0x5OGdUbUZ0WldRZ1puVnVZM1JwYjI1ek9pQmNJbUYwSUdaMWJtTjBhVzl1VG1GdFpTQW9abWxzWlc1aGJXVTZiR2x1WlU1MWJXSmxjanBqYjJ4MWJXNU9kVzFpWlhJcFhDSmNiaUFnSUNBdkx5QkpiaUJKUlRFd0lHWjFibU4wYVc5dUlHNWhiV1VnWTJGdUlHaGhkbVVnYzNCaFkyVnpJQ2hjSWtGdWIyNTViVzkxY3lCbWRXNWpkR2x2Ymx3aUtTQlBYMjljYmlBZ0lDQjJZWElnWVhSMFpXMXdkREVnUFNBdllYUWdMaXNnWEZ3b0tDNHJLVG9vWEZ4a0t5azZLRDg2WEZ4a0t5bGNYQ2trTHk1bGVHVmpLSE4wWVdOclRHbHVaU2s3WEc0Z0lDQWdhV1lnS0dGMGRHVnRjSFF4S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCYllYUjBaVzF3ZERGYk1WMHNJRTUxYldKbGNpaGhkSFJsYlhCME1Wc3lYU2xkTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGdWIyNTViVzkxY3lCbWRXNWpkR2x2Ym5NNklGd2lZWFFnWm1sc1pXNWhiV1U2YkdsdVpVNTFiV0psY2pwamIyeDFiVzVPZFcxaVpYSmNJbHh1SUNBZ0lIWmhjaUJoZEhSbGJYQjBNaUE5SUM5aGRDQW9XMTRnWFNzcE9paGNYR1FyS1Rvb1B6cGNYR1FyS1NRdkxtVjRaV01vYzNSaFkydE1hVzVsS1R0Y2JpQWdJQ0JwWmlBb1lYUjBaVzF3ZERJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGdGhkSFJsYlhCME1sc3hYU3dnVG5WdFltVnlLR0YwZEdWdGNIUXlXekpkS1YwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1JtbHlaV1p2ZUNCemRIbHNaVG9nWENKbWRXNWpkR2x2YmtCbWFXeGxibUZ0WlRwc2FXNWxUblZ0WW1WeUlHOXlJRUJtYVd4bGJtRnRaVHBzYVc1bFRuVnRZbVZ5WENKY2JpQWdJQ0IyWVhJZ1lYUjBaVzF3ZERNZ1BTQXZMaXBBS0M0cktUb29YRnhrS3lra0x5NWxlR1ZqS0hOMFlXTnJUR2x1WlNrN1hHNGdJQ0FnYVdZZ0tHRjBkR1Z0Y0hRektTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmJZWFIwWlcxd2RETmJNVjBzSUU1MWJXSmxjaWhoZEhSbGJYQjBNMXN5WFNsZE8xeHVJQ0FnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnYVhOSmJuUmxjbTVoYkVaeVlXMWxLSE4wWVdOclRHbHVaU2tnZTF4dUlDQWdJSFpoY2lCbWFXeGxUbUZ0WlVGdVpFeHBibVZPZFcxaVpYSWdQU0JuWlhSR2FXeGxUbUZ0WlVGdVpFeHBibVZPZFcxaVpYSW9jM1JoWTJ0TWFXNWxLVHRjYmx4dUlDQWdJR2xtSUNnaFptbHNaVTVoYldWQmJtUk1hVzVsVG5WdFltVnlLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdabWxzWlU1aGJXVWdQU0JtYVd4bFRtRnRaVUZ1WkV4cGJtVk9kVzFpWlhKYk1GMDdYRzRnSUNBZ2RtRnlJR3hwYm1WT2RXMWlaWElnUFNCbWFXeGxUbUZ0WlVGdVpFeHBibVZPZFcxaVpYSmJNVjA3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdabWxzWlU1aGJXVWdQVDA5SUhGR2FXeGxUbUZ0WlNBbUpseHVJQ0FnSUNBZ0lDQnNhVzVsVG5WdFltVnlJRDQ5SUhGVGRHRnlkR2x1WjB4cGJtVWdKaVpjYmlBZ0lDQWdJQ0FnYkdsdVpVNTFiV0psY2lBOFBTQnhSVzVrYVc1blRHbHVaVHRjYm4xY2JseHVMeThnWkdselkyOTJaWElnYjNkdUlHWnBiR1VnYm1GdFpTQmhibVFnYkdsdVpTQnVkVzFpWlhJZ2NtRnVaMlVnWm05eUlHWnBiSFJsY21sdVp5QnpkR0ZqYTF4dUx5OGdkSEpoWTJWelhHNW1kVzVqZEdsdmJpQmpZWEIwZFhKbFRHbHVaU2dwSUh0Y2JpQWdJQ0JwWmlBb0lXaGhjMU4wWVdOcmN5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2s3WEc0Z0lDQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdiR2x1WlhNZ1BTQmxMbk4wWVdOckxuTndiR2wwS0Z3aVhGeHVYQ0lwTzF4dUlDQWdJQ0FnSUNCMllYSWdabWx5YzNSTWFXNWxJRDBnYkdsdVpYTmJNRjB1YVc1a1pYaFBaaWhjSWtCY0lpa2dQaUF3SUQ4Z2JHbHVaWE5iTVYwZ09pQnNhVzVsYzFzeVhUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdacGJHVk9ZVzFsUVc1a1RHbHVaVTUxYldKbGNpQTlJR2RsZEVacGJHVk9ZVzFsUVc1a1RHbHVaVTUxYldKbGNpaG1hWEp6ZEV4cGJtVXBPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXWnBiR1ZPWVcxbFFXNWtUR2x1WlU1MWJXSmxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY1VacGJHVk9ZVzFsSUQwZ1ptbHNaVTVoYldWQmJtUk1hVzVsVG5WdFltVnlXekJkTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1sc1pVNWhiV1ZCYm1STWFXNWxUblZ0WW1WeVd6RmRPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pHVndjbVZqWVhSbEtHTmhiR3hpWVdOckxDQnVZVzFsTENCaGJIUmxjbTVoZEdsMlpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnWTI5dWMyOXNaU0FoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaUFtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdkSGx3Wlc5bUlHTnZibk52YkdVdWQyRnliaUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvYm1GdFpTQXJJRndpSUdseklHUmxjSEpsWTJGMFpXUXNJSFZ6WlNCY0lpQXJJR0ZzZEdWeWJtRjBhWFpsSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0lpQnBibk4wWldGa0xsd2lMQ0J1WlhjZ1JYSnliM0lvWENKY0lpa3VjM1JoWTJzcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV3hzWW1GamF5NWhjSEJzZVNoallXeHNZbUZqYXl3Z1lYSm5kVzFsYm5SektUdGNiaUFnSUNCOU8xeHVmVnh1WEc0dkx5QmxibVFnYjJZZ2MyaHBiWE5jYmk4dklHSmxaMmx1Ym1sdVp5QnZaaUJ5WldGc0lIZHZjbXRjYmx4dUx5b3FYRzRnS2lCRGIyNXpkSEoxWTNSeklHRWdjSEp2YldselpTQm1iM0lnWVc0Z2FXMXRaV1JwWVhSbElISmxabVZ5Wlc1alpTd2djR0Z6YzJWeklIQnliMjFwYzJWeklIUm9jbTkxWjJnc0lHOXlYRzRnS2lCamIyVnlZMlZ6SUhCeWIyMXBjMlZ6SUdaeWIyMGdaR2xtWm1WeVpXNTBJSE41YzNSbGJYTXVYRzRnS2lCQWNHRnlZVzBnZG1Gc2RXVWdhVzF0WldScFlYUmxJSEpsWm1WeVpXNWpaU0J2Y2lCd2NtOXRhWE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJRkVvZG1Gc2RXVXBJSHRjYmlBZ0lDQXZMeUJKWmlCMGFHVWdiMkpxWldOMElHbHpJR0ZzY21WaFpIa2dZU0JRY205dGFYTmxMQ0J5WlhSMWNtNGdhWFFnWkdseVpXTjBiSGt1SUNCVWFHbHpJR1Z1WVdKc1pYTmNiaUFnSUNBdkx5QjBhR1VnY21WemIyeDJaU0JtZFc1amRHbHZiaUIwYnlCaWIzUm9JR0psSUhWelpXUWdkRzhnWTNKbFlYUmxaQ0J5WldabGNtVnVZMlZ6SUdaeWIyMGdiMkpxWldOMGN5eGNiaUFnSUNBdkx5QmlkWFFnZEc4Z2RHOXNaWEpoWW14NUlHTnZaWEpqWlNCdWIyNHRjSEp2YldselpYTWdkRzhnY0hKdmJXbHpaWE11WEc0Z0lDQWdhV1lnS0haaGJIVmxJR2x1YzNSaGJtTmxiMllnVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdZWE56YVcxcGJHRjBaU0IwYUdWdVlXSnNaWE5jYmlBZ0lDQnBaaUFvYVhOUWNtOXRhWE5sUVd4cGEyVW9kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMlZ5WTJVb2RtRnNkV1VwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kV3htYVd4c0tIWmhiSFZsS1R0Y2JpQWdJQ0I5WEc1OVhHNVJMbkpsYzI5c2RtVWdQU0JSTzF4dVhHNHZLaXBjYmlBcUlGQmxjbVp2Y20xeklHRWdkR0Z6YXlCcGJpQmhJR1oxZEhWeVpTQjBkWEp1SUc5bUlIUm9aU0JsZG1WdWRDQnNiMjl3TGx4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdkR0Z6YTF4dUlDb3ZYRzVSTG01bGVIUlVhV05ySUQwZ2JtVjRkRlJwWTJzN1hHNWNiaThxS2x4dUlDb2dRMjl1ZEhKdmJITWdkMmhsZEdobGNpQnZjaUJ1YjNRZ2JHOXVaeUJ6ZEdGamF5QjBjbUZqWlhNZ2QybHNiQ0JpWlNCdmJseHVJQ292WEc1UkxteHZibWRUZEdGamExTjFjSEJ2Y25RZ1BTQm1ZV3h6WlR0Y2JseHVMeThnWlc1aFlteGxJR3h2Ym1jZ2MzUmhZMnR6SUdsbUlGRmZSRVZDVlVjZ2FYTWdjMlYwWEc1cFppQW9kSGx3Wlc5bUlIQnliMk5sYzNNZ1BUMDlJRndpYjJKcVpXTjBYQ0lnSmlZZ2NISnZZMlZ6Y3lBbUppQndjbTlqWlhOekxtVnVkaUFtSmlCd2NtOWpaWE56TG1WdWRpNVJYMFJGUWxWSEtTQjdYRzRnSUNBZ1VTNXNiMjVuVTNSaFkydFRkWEJ3YjNKMElEMGdkSEoxWlR0Y2JuMWNibHh1THlvcVhHNGdLaUJEYjI1emRISjFZM1J6SUdFZ2UzQnliMjFwYzJVc0lISmxjMjlzZG1Vc0lISmxhbVZqZEgwZ2IySnFaV04wTGx4dUlDcGNiaUFxSUdCeVpYTnZiSFpsWUNCcGN5QmhJR05oYkd4aVlXTnJJSFJ2SUdsdWRtOXJaU0IzYVhSb0lHRWdiVzl5WlNCeVpYTnZiSFpsWkNCMllXeDFaU0JtYjNJZ2RHaGxYRzRnS2lCd2NtOXRhWE5sTGlCVWJ5Qm1kV3htYVd4c0lIUm9aU0J3Y205dGFYTmxMQ0JwYm5admEyVWdZSEpsYzI5c2RtVmdJSGRwZEdnZ1lXNTVJSFpoYkhWbElIUm9ZWFFnYVhOY2JpQXFJRzV2ZENCaElIUm9aVzVoWW14bExpQlVieUJ5WldwbFkzUWdkR2hsSUhCeWIyMXBjMlVzSUdsdWRtOXJaU0JnY21WemIyeDJaV0FnZDJsMGFDQmhJSEpsYW1WamRHVmtYRzRnS2lCMGFHVnVZV0pzWlN3Z2IzSWdhVzUyYjJ0bElHQnlaV3BsWTNSZ0lIZHBkR2dnZEdobElISmxZWE52YmlCa2FYSmxZM1JzZVM0Z1ZHOGdjbVZ6YjJ4MlpTQjBhR1ZjYmlBcUlIQnliMjFwYzJVZ2RHOGdZVzV2ZEdobGNpQjBhR1Z1WVdKc1pTd2dkR2gxY3lCd2RYUjBhVzVuSUdsMElHbHVJSFJvWlNCellXMWxJSE4wWVhSbExDQnBiblp2YTJWY2JpQXFJR0J5WlhOdmJIWmxZQ0IzYVhSb0lIUm9ZWFFnYjNSb1pYSWdkR2hsYm1GaWJHVXVYRzRnS2k5Y2JsRXVaR1ZtWlhJZ1BTQmtaV1psY2p0Y2JtWjFibU4wYVc5dUlHUmxabVZ5S0NrZ2UxeHVJQ0FnSUM4dklHbG1JRndpYldWemMyRm5aWE5jSWlCcGN5QmhiaUJjSWtGeWNtRjVYQ0lzSUhSb1lYUWdhVzVrYVdOaGRHVnpJSFJvWVhRZ2RHaGxJSEJ5YjIxcGMyVWdhR0Z6SUc1dmRDQjVaWFJjYmlBZ0lDQXZMeUJpWldWdUlISmxjMjlzZG1Wa0xpQWdTV1lnYVhRZ2FYTWdYQ0oxYm1SbFptbHVaV1JjSWl3Z2FYUWdhR0Z6SUdKbFpXNGdjbVZ6YjJ4MlpXUXVJQ0JGWVdOb1hHNGdJQ0FnTHk4Z1pXeGxiV1Z1ZENCdlppQjBhR1VnYldWemMyRm5aWE1nWVhKeVlYa2dhWE1nYVhSelpXeG1JR0Z1SUdGeWNtRjVJRzltSUdOdmJYQnNaWFJsSUdGeVozVnRaVzUwY3lCMGIxeHVJQ0FnSUM4dklHWnZjbmRoY21RZ2RHOGdkR2hsSUhKbGMyOXNkbVZrSUhCeWIyMXBjMlV1SUNCWFpTQmpiMlZ5WTJVZ2RHaGxJSEpsYzI5c2RYUnBiMjRnZG1Gc2RXVWdkRzhnWVZ4dUlDQWdJQzh2SUhCeWIyMXBjMlVnZFhOcGJtY2dkR2hsSUdCeVpYTnZiSFpsWUNCbWRXNWpkR2x2YmlCaVpXTmhkWE5sSUdsMElHaGhibVJzWlhNZ1ltOTBhQ0JtZFd4c2VWeHVJQ0FnSUM4dklHNXZiaTEwYUdWdVlXSnNaU0IyWVd4MVpYTWdZVzVrSUc5MGFHVnlJSFJvWlc1aFlteGxjeUJuY21GalpXWjFiR3g1TGx4dUlDQWdJSFpoY2lCdFpYTnpZV2RsY3lBOUlGdGRMQ0J3Y205bmNtVnpjMHhwYzNSbGJtVnljeUE5SUZ0ZExDQnlaWE52YkhabFpGQnliMjFwYzJVN1hHNWNiaUFnSUNCMllYSWdaR1ZtWlhKeVpXUWdQU0J2WW1wbFkzUmZZM0psWVhSbEtHUmxabVZ5TG5CeWIzUnZkSGx3WlNrN1hHNGdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQnZZbXBsWTNSZlkzSmxZWFJsS0ZCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsS1R0Y2JseHVJQ0FnSUhCeWIyMXBjMlV1Y0hKdmJXbHpaVVJwYzNCaGRHTm9JRDBnWm5WdVkzUnBiMjRnS0hKbGMyOXNkbVVzSUc5d0xDQnZjR1Z5WVc1a2N5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1lYSm5jeUE5SUdGeWNtRjVYM05zYVdObEtHRnlaM1Z0Wlc1MGN5azdYRzRnSUNBZ0lDQWdJR2xtSUNodFpYTnpZV2RsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYldWemMyRm5aWE11Y0hWemFDaGhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodmNDQTlQVDBnWENKM2FHVnVYQ0lnSmlZZ2IzQmxjbUZ1WkhOYk1WMHBJSHNnTHk4Z2NISnZaM0psYzNNZ2IzQmxjbUZ1WkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyZHlaWE56VEdsemRHVnVaWEp6TG5CMWMyZ29iM0JsY21GdVpITmJNVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1VTNXVaWGgwVkdsamF5aG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaV1JRY205dGFYTmxMbkJ5YjIxcGMyVkVhWE53WVhSamFDNWhjSEJzZVNoeVpYTnZiSFpsWkZCeWIyMXBjMlVzSUdGeVozTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdMeThnV0ZoWUlHUmxjSEpsWTJGMFpXUmNiaUFnSUNCd2NtOXRhWE5sTG5aaGJIVmxUMllnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNodFpYTnpZV2RsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ5YjIxcGMyVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZG1GeUlHNWxZWEpsY2xaaGJIVmxJRDBnYm1WaGNtVnlLSEpsYzI5c2RtVmtVSEp2YldselpTazdYRzRnSUNBZ0lDQWdJR2xtSUNocGMxQnliMjFwYzJVb2JtVmhjbVZ5Vm1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabFpGQnliMjFwYzJVZ1BTQnVaV0Z5WlhKV1lXeDFaVHNnTHk4Z2MyaHZjblJsYmlCamFHRnBibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WldGeVpYSldZV3gxWlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY0hKdmJXbHpaUzVwYm5Od1pXTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhKbGMyOXNkbVZrVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIc2djM1JoZEdVNklGd2ljR1Z1WkdsdVoxd2lJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGMyOXNkbVZrVUhKdmJXbHpaUzVwYm5Od1pXTjBLQ2s3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR2xtSUNoUkxteHZibWRUZEdGamExTjFjSEJ2Y25RZ0ppWWdhR0Z6VTNSaFkydHpLU0I3WEc0Z0lDQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUazlVUlRvZ1pHOXVKM1FnZEhKNUlIUnZJSFZ6WlNCZ1JYSnliM0l1WTJGd2RIVnlaVk4wWVdOclZISmhZMlZnSUc5eUlIUnlZVzV6Wm1WeUlIUm9aVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdZV05qWlhOemIzSWdZWEp2ZFc1a095QjBhR0YwSUdOaGRYTmxjeUJ0WlcxdmNua2diR1ZoYTNNZ1lYTWdjR1Z5SUVkSUxURXhNUzRnU25WemRGeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2NtVnBabmtnZEdobElITjBZV05ySUhSeVlXTmxJR0Z6SUdFZ2MzUnlhVzVuSUVGVFFWQXVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYUWdkR2hsSUhOaGJXVWdkR2x0WlN3Z1kzVjBJRzltWmlCMGFHVWdabWx5YzNRZ2JHbHVaVHNnYVhRbmN5QmhiSGRoZVhNZ2FuVnpkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdYQ0piYjJKcVpXTjBJRkJ5YjIxcGMyVmRYRnh1WENJc0lHRnpJSEJsY2lCMGFHVWdZSFJ2VTNSeWFXNW5ZQzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJVdWMzUmhZMnNnUFNCbExuTjBZV05yTG5OMVluTjBjbWx1WnlobExuTjBZV05yTG1sdVpHVjRUMllvWENKY1hHNWNJaWtnS3lBeEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRTVQVkVVNklIZGxJR1J2SUhSb1pTQmphR1ZqYTNNZ1ptOXlJR0J5WlhOdmJIWmxaRkJ5YjIxcGMyVmdJR2x1SUdWaFkyZ2diV1YwYUc5a0xDQnBibk4wWldGa0lHOW1YRzRnSUNBZ0x5OGdZMjl1YzI5c2FXUmhkR2x1WnlCMGFHVnRJR2x1ZEc4Z1lHSmxZMjl0WldBc0lITnBibU5sSUc5MGFHVnlkMmx6WlNCM1pTZGtJR055WldGMFpTQnVaWGRjYmlBZ0lDQXZMeUJ3Y205dGFYTmxjeUIzYVhSb0lIUm9aU0JzYVc1bGN5QmdZbVZqYjIxbEtIZG9ZWFJsZG1WeUtIWmhiSFZsS1NsZ0xpQlRaV1VnWlM1bkxpQkhTQzB5TlRJdVhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCaVpXTnZiV1VvYm1WM1VISnZiV2x6WlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWE52YkhabFpGQnliMjFwYzJVZ1BTQnVaWGRRY205dGFYTmxPMXh1SUNBZ0lDQWdJQ0J3Y205dGFYTmxMbk52ZFhKalpTQTlJRzVsZDFCeWIyMXBjMlU3WEc1Y2JpQWdJQ0FnSUNBZ1lYSnlZWGxmY21Wa2RXTmxLRzFsYzNOaFoyVnpMQ0JtZFc1amRHbHZiaUFvZFc1a1pXWnBibVZrTENCdFpYTnpZV2RsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JSTG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRRY205dGFYTmxMbkJ5YjIxcGMyVkVhWE53WVhSamFDNWhjSEJzZVNodVpYZFFjbTl0YVhObExDQnRaWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQjlMQ0IyYjJsa0lEQXBPMXh1WEc0Z0lDQWdJQ0FnSUcxbGMzTmhaMlZ6SUQwZ2RtOXBaQ0F3TzF4dUlDQWdJQ0FnSUNCd2NtOW5jbVZ6YzB4cGMzUmxibVZ5Y3lBOUlIWnZhV1FnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWldabGNuSmxaQzV3Y205dGFYTmxJRDBnY0hKdmJXbHpaVHRjYmlBZ0lDQmtaV1psY25KbFpDNXlaWE52YkhabElEMGdablZ1WTNScGIyNGdLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoeVpYTnZiSFpsWkZCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdKbFkyOXRaU2hSS0haaGJIVmxLU2s3WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR1JsWm1WeWNtVmtMbVoxYkdacGJHd2dQU0JtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxjMjlzZG1Wa1VISnZiV2x6WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1ltVmpiMjFsS0daMWJHWnBiR3dvZG1Gc2RXVXBLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHUmxabVZ5Y21Wa0xuSmxhbVZqZENBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbGMyOXNkbVZrVUhKdmJXbHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWW1WamIyMWxLSEpsYW1WamRDaHlaV0Z6YjI0cEtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdSbFptVnljbVZrTG01dmRHbG1lU0E5SUdaMWJtTjBhVzl1SUNod2NtOW5jbVZ6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY21WemIyeDJaV1JRY205dGFYTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JoY25KaGVWOXlaV1IxWTJVb2NISnZaM0psYzNOTWFYTjBaVzVsY25Nc0lHWjFibU4wYVc5dUlDaDFibVJsWm1sdVpXUXNJSEJ5YjJkeVpYTnpUR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGRXVibVY0ZEZScFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyZHlaWE56VEdsemRHVnVaWElvY0hKdlozSmxjM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUgwc0lIWnZhV1FnTUNrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJrWldabGNuSmxaRHRjYm4xY2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdUbTlrWlMxemRIbHNaU0JqWVd4c1ltRmpheUIwYUdGMElIZHBiR3dnY21WemIyeDJaU0J2Y2lCeVpXcGxZM1FnZEdobElHUmxabVZ5Y21Wa1hHNGdLaUJ3Y205dGFYTmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ1lTQnViMlJsWW1GamExeHVJQ292WEc1a1pXWmxjaTV3Y205MGIzUjVjR1V1YldGclpVNXZaR1ZTWlhOdmJIWmxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMllYSWdjMlZzWmlBOUlIUm9hWE03WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaGxjbkp2Y2l3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1Z5Y205eUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MbkpsYW1WamRDaGxjbkp2Y2lrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJRElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWNtVnpiMngyWlNoaGNuSmhlVjl6YkdsalpTaGhjbWQxYldWdWRITXNJREVwS1R0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWNtVnpiMngyWlNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1THlvcVhHNGdLaUJBY0dGeVlXMGdjbVZ6YjJ4MlpYSWdlMFoxYm1OMGFXOXVmU0JoSUdaMWJtTjBhVzl1SUhSb1lYUWdjbVYwZFhKdWN5QnViM1JvYVc1bklHRnVaQ0JoWTJObGNIUnpYRzRnS2lCMGFHVWdjbVZ6YjJ4MlpTd2djbVZxWldOMExDQmhibVFnYm05MGFXWjVJR1oxYm1OMGFXOXVjeUJtYjNJZ1lTQmtaV1psY25KbFpDNWNiaUFxSUVCeVpYUjFjbTV6SUdFZ2NISnZiV2x6WlNCMGFHRjBJRzFoZVNCaVpTQnlaWE52YkhabFpDQjNhWFJvSUhSb1pTQm5hWFpsYmlCeVpYTnZiSFpsSUdGdVpDQnlaV3BsWTNSY2JpQXFJR1oxYm1OMGFXOXVjeXdnYjNJZ2NtVnFaV04wWldRZ1lua2dZU0IwYUhKdmQyNGdaWGhqWlhCMGFXOXVJR2x1SUhKbGMyOXNkbVZ5WEc0Z0tpOWNibEV1VUhKdmJXbHpaU0E5SUhCeWIyMXBjMlU3SUM4dklFVlRObHh1VVM1d2NtOXRhWE5sSUQwZ2NISnZiV2x6WlR0Y2JtWjFibU4wYVc5dUlIQnliMjFwYzJVb2NtVnpiMngyWlhJcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlISmxjMjlzZG1WeUlDRTlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSW5KbGMyOXNkbVZ5SUcxMWMzUWdZbVVnWVNCbWRXNWpkR2x2Ymk1Y0lpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhaaGNpQmtaV1psY25KbFpDQTlJR1JsWm1WeUtDazdYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnY21WemIyeDJaWElvWkdWbVpYSnlaV1F1Y21WemIyeDJaU3dnWkdWbVpYSnlaV1F1Y21WcVpXTjBMQ0JrWldabGNuSmxaQzV1YjNScFpua3BPMXh1SUNBZ0lIMGdZMkYwWTJnZ0tISmxZWE52YmlrZ2UxeHVJQ0FnSUNBZ0lDQmtaV1psY25KbFpDNXlaV3BsWTNRb2NtVmhjMjl1S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHUmxabVZ5Y21Wa0xuQnliMjFwYzJVN1hHNTlYRzVjYm5CeWIyMXBjMlV1Y21GalpTQTlJSEpoWTJVN0lDOHZJRVZUTmx4dWNISnZiV2x6WlM1aGJHd2dQU0JoYkd3N0lDOHZJRVZUTmx4dWNISnZiV2x6WlM1eVpXcGxZM1FnUFNCeVpXcGxZM1E3SUM4dklFVlRObHh1Y0hKdmJXbHpaUzV5WlhOdmJIWmxJRDBnVVRzZ0x5OGdSVk0yWEc1Y2JpOHZJRmhZV0NCbGVIQmxjbWx0Wlc1MFlXd3VJQ0JVYUdseklHMWxkR2h2WkNCcGN5QmhJSGRoZVNCMGJ5QmtaVzV2ZEdVZ2RHaGhkQ0JoSUd4dlkyRnNJSFpoYkhWbElHbHpYRzR2THlCelpYSnBZV3hwZW1GaWJHVWdZVzVrSUhOb2IzVnNaQ0JpWlNCcGJXMWxaR2xoZEdWc2VTQmthWE53WVhSamFHVmtJSFJ2SUdFZ2NtVnRiM1JsSUhWd2IyNGdjbVZ4ZFdWemRDeGNiaTh2SUdsdWMzUmxZV1FnYjJZZ2NHRnpjMmx1WnlCaElISmxabVZ5Wlc1alpTNWNibEV1Y0dGemMwSjVRMjl3ZVNBOUlHWjFibU4wYVc5dUlDaHZZbXBsWTNRcElIdGNiaUFnSUNBdkwyWnlaV1Y2WlNodlltcGxZM1FwTzF4dUlDQWdJQzh2Y0dGemMwSjVRMjl3YVdWekxuTmxkQ2h2WW1wbFkzUXNJSFJ5ZFdVcE8xeHVJQ0FnSUhKbGRIVnliaUJ2WW1wbFkzUTdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXdZWE56UW5sRGIzQjVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUM4dlpuSmxaWHBsS0c5aWFtVmpkQ2s3WEc0Z0lDQWdMeTl3WVhOelFubERiM0JwWlhNdWMyVjBLRzlpYW1WamRDd2dkSEoxWlNrN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVsbUlIUjNieUJ3Y205dGFYTmxjeUJsZG1WdWRIVmhiR3g1SUdaMWJHWnBiR3dnZEc4Z2RHaGxJSE5oYldVZ2RtRnNkV1VzSUhCeWIyMXBjMlZ6SUhSb1lYUWdkbUZzZFdVc1hHNGdLaUJpZFhRZ2IzUm9aWEozYVhObElISmxhbVZqZEhNdVhHNGdLaUJBY0dGeVlXMGdlQ0I3UVc1NUtuMWNiaUFxSUVCd1lYSmhiU0I1SUh0QmJua3FmVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwRnVlU3A5SUdFZ2NISnZiV2x6WlNCbWIzSWdlQ0JoYm1RZ2VTQnBaaUIwYUdWNUlHRnlaU0IwYUdVZ2MyRnRaU3dnWW5WMElHRWdjbVZxWldOMGFXOXVYRzRnS2lCdmRHaGxjbmRwYzJVdVhHNGdLbHh1SUNvdlhHNVJMbXB2YVc0Z1BTQm1kVzVqZEdsdmJpQW9lQ3dnZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJSS0hncExtcHZhVzRvZVNrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1cWIybHVJRDBnWm5WdVkzUnBiMjRnS0hSb1lYUXBJSHRjYmlBZ0lDQnlaWFIxY200Z1VTaGJkR2hwY3l3Z2RHaGhkRjBwTG5Od2NtVmhaQ2htZFc1amRHbHZiaUFvZUN3Z2VTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2VDQTlQVDBnZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZFOUVUem9nWENJOVBUMWNJaUJ6YUc5MWJHUWdZbVVnVDJKcVpXTjBMbWx6SUc5eUlHVnhkV2wyWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2VEdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWtOaGJpZDBJR3B2YVc0NklHNXZkQ0IwYUdVZ2MyRnRaVG9nWENJZ0t5QjRJQ3NnWENJZ1hDSWdLeUI1S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ2NISnZiV2x6WlNCbWIzSWdkR2hsSUdacGNuTjBJRzltSUdGdUlHRnljbUY1SUc5bUlIQnliMjFwYzJWeklIUnZJR0psWTI5dFpTQnpaWFIwYkdWa0xseHVJQ29nUUhCaGNtRnRJR0Z1YzNkbGNuTWdlMEZ5Y21GNVcwRnVlU3BkZlNCd2NtOXRhWE5sY3lCMGJ5QnlZV05sWEc0Z0tpQkFjbVYwZFhKdWN5QjdRVzU1S24wZ2RHaGxJR1pwY25OMElIQnliMjFwYzJVZ2RHOGdZbVVnYzJWMGRHeGxaRnh1SUNvdlhHNVJMbkpoWTJVZ1BTQnlZV05sTzF4dVpuVnVZM1JwYjI0Z2NtRmpaU2hoYm5OM1pYSlFjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQndjbTl0YVhObEtHWjFibU4wYVc5dUlDaHlaWE52YkhabExDQnlaV3BsWTNRcElIdGNiaUFnSUNBZ0lDQWdMeThnVTNkcGRHTm9JSFJ2SUhSb2FYTWdiMjVqWlNCM1pTQmpZVzRnWVhOemRXMWxJR0YwSUd4bFlYTjBJRVZUTlZ4dUlDQWdJQ0FnSUNBdkx5Qmhibk4zWlhKUWN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaGhibk4zWlhKUUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQlJLR0Z1YzNkbGNsQXBMblJvWlc0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdmU2s3WEc0Z0lDQWdJQ0FnSUM4dklGVnpaU0IwYUdseklHbHVJSFJvWlNCdFpXRnVkR2x0WlZ4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkdWdUlEMGdZVzV6ZDJWeVVITXViR1Z1WjNSb095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRkVvWVc1emQyVnlVSE5iYVYwcExuUm9aVzRvY21WemIyeDJaU3dnY21WcVpXTjBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dWZWeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzV5WVdObElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5Sb1pXNG9VUzV5WVdObEtUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EyOXVjM1J5ZFdOMGN5QmhJRkJ5YjIxcGMyVWdkMmwwYUNCaElIQnliMjFwYzJVZ1pHVnpZM0pwY0hSdmNpQnZZbXBsWTNRZ1lXNWtJRzl3ZEdsdmJtRnNJR1poYkd4aVlXTnJYRzRnS2lCbWRXNWpkR2x2Ymk0Z0lGUm9aU0JrWlhOamNtbHdkRzl5SUdOdmJuUmhhVzV6SUcxbGRHaHZaSE1nYkdsclpTQjNhR1Z1S0hKbGFtVmpkR1ZrS1N3Z1oyVjBLRzVoYldVcExGeHVJQ29nYzJWMEtHNWhiV1VzSUhaaGJIVmxLU3dnY0c5emRDaHVZVzFsTENCaGNtZHpLU3dnWVc1a0lHUmxiR1YwWlNodVlXMWxLU3dnZDJocFkyZ2dZV3hzWEc0Z0tpQnlaWFIxY200Z1pXbDBhR1Z5SUdFZ2RtRnNkV1VzSUdFZ2NISnZiV2x6WlNCbWIzSWdZU0IyWVd4MVpTd2diM0lnWVNCeVpXcGxZM1JwYjI0dUlDQlVhR1VnWm1Gc2JHSmhZMnRjYmlBcUlHRmpZMlZ3ZEhNZ2RHaGxJRzl3WlhKaGRHbHZiaUJ1WVcxbExDQmhJSEpsYzI5c2RtVnlMQ0JoYm1RZ1lXNTVJR1oxY25Sb1pYSWdZWEpuZFcxbGJuUnpJSFJvWVhRZ2QyOTFiR1JjYmlBcUlHaGhkbVVnWW1WbGJpQm1iM0ozWVhKa1pXUWdkRzhnZEdobElHRndjSEp2Y0hKcFlYUmxJRzFsZEdodlpDQmhZbTkyWlNCb1lXUWdZU0J0WlhSb2IyUWdZbVZsYmx4dUlDb2djSEp2ZG1sa1pXUWdkMmwwYUNCMGFHVWdjSEp2Y0dWeUlHNWhiV1V1SUNCVWFHVWdRVkJKSUcxaGEyVnpJRzV2SUdkMVlYSmhiblJsWlhNZ1lXSnZkWFFnZEdobElHNWhkSFZ5WlZ4dUlDb2diMllnZEdobElISmxkSFZ5Ym1Wa0lHOWlhbVZqZEN3Z1lYQmhjblFnWm5KdmJTQjBhR0YwSUdsMElHbHpJSFZ6WVdKc1pTQjNhR1Z5WldWMlpYSWdjSEp2YldselpYTWdZWEpsWEc0Z0tpQmliM1ZuYUhRZ1lXNWtJSE52YkdRdVhHNGdLaTljYmxFdWJXRnJaVkJ5YjIxcGMyVWdQU0JRY205dGFYTmxPMXh1Wm5WdVkzUnBiMjRnVUhKdmJXbHpaU2hrWlhOamNtbHdkRzl5TENCbVlXeHNZbUZqYXl3Z2FXNXpjR1ZqZENrZ2UxeHVJQ0FnSUdsbUlDaG1ZV3hzWW1GamF5QTlQVDBnZG05cFpDQXdLU0I3WEc0Z0lDQWdJQ0FnSUdaaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI0Z0tHOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnFaV04wS0c1bGR5QkZjbkp2Y2loY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0lsQnliMjFwYzJVZ1pHOWxjeUJ1YjNRZ2MzVndjRzl5ZENCdmNHVnlZWFJwYjI0NklGd2lJQ3NnYjNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ2twTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2FXNXpjR1ZqZENBOVBUMGdkbTlwWkNBd0tTQjdYRzRnSUNBZ0lDQWdJR2x1YzNCbFkzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdlM04wWVhSbE9pQmNJblZ1YTI1dmQyNWNJbjA3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlIQnliMjFwYzJVZ1BTQnZZbXBsWTNSZlkzSmxZWFJsS0ZCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsS1R0Y2JseHVJQ0FnSUhCeWIyMXBjMlV1Y0hKdmJXbHpaVVJwYzNCaGRHTm9JRDBnWm5WdVkzUnBiMjRnS0hKbGMyOXNkbVVzSUc5d0xDQmhjbWR6S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ5WlhOMWJIUTdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1pHVnpZM0pwY0hSdmNsdHZjRjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCa1pYTmpjbWx3ZEc5eVcyOXdYUzVoY0hCc2VTaHdjbTl0YVhObExDQmhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdabUZzYkdKaFkyc3VZMkZzYkNod2NtOXRhWE5sTENCdmNDd2dZWEpuY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dWNFkyVndkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBJRDBnY21WcVpXTjBLR1Y0WTJWd2RHbHZiaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWWdLSEpsYzI5c2RtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2NtVnpkV3gwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCd2NtOXRhWE5sTG1sdWMzQmxZM1FnUFNCcGJuTndaV04wTzF4dVhHNGdJQ0FnTHk4Z1dGaFlJR1JsY0hKbFkyRjBaV1FnWUhaaGJIVmxUMlpnSUdGdVpDQmdaWGhqWlhCMGFXOXVZQ0J6ZFhCd2IzSjBYRzRnSUNBZ2FXWWdLR2x1YzNCbFkzUXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHbHVjM0JsWTNSbFpDQTlJR2x1YzNCbFkzUW9LVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjM0JsWTNSbFpDNXpkR0YwWlNBOVBUMGdYQ0p5WldwbFkzUmxaRndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxMbVY0WTJWd2RHbHZiaUE5SUdsdWMzQmxZM1JsWkM1eVpXRnpiMjQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQndjbTl0YVhObExuWmhiSFZsVDJZZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYVc1emNHVmpkR1ZrSUQwZ2FXNXpjR1ZqZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVjM0JsWTNSbFpDNXpkR0YwWlNBOVBUMGdYQ0p3Wlc1a2FXNW5YQ0lnZkh4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJuTndaV04wWldRdWMzUmhkR1VnUFQwOUlGd2ljbVZxWldOMFpXUmNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNCbFkzUmxaQzUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2NISnZiV2x6WlR0Y2JuMWNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWNnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUZ3aVcyOWlhbVZqZENCUWNtOXRhWE5sWFZ3aU8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWRHaGxiaUE5SUdaMWJtTjBhVzl1SUNobWRXeG1hV3hzWldRc0lISmxhbVZqZEdWa0xDQndjbTluY21WemMyVmtLU0I3WEc0Z0lDQWdkbUZ5SUhObGJHWWdQU0IwYUdsek8xeHVJQ0FnSUhaaGNpQmtaV1psY25KbFpDQTlJR1JsWm1WeUtDazdYRzRnSUNBZ2RtRnlJR1J2Ym1VZ1BTQm1ZV3h6WlRzZ0lDQXZMeUJsYm5OMWNtVWdkR2hsSUhWdWRISjFjM1JsWkNCd2NtOXRhWE5sSUcxaGEyVnpJR0YwSUcxdmMzUWdZVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnYzJsdVoyeGxJR05oYkd3Z2RHOGdiMjVsSUc5bUlIUm9aU0JqWVd4c1ltRmphM05jYmx4dUlDQWdJR1oxYm1OMGFXOXVJRjltZFd4bWFXeHNaV1FvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwZVhCbGIyWWdablZzWm1sc2JHVmtJRDA5UFNCY0ltWjFibU4wYVc5dVhDSWdQeUJtZFd4bWFXeHNaV1FvZG1Gc2RXVXBJRG9nZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1Y0WTJWd2RHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlISmxhbVZqZENobGVHTmxjSFJwYjI0cE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z1gzSmxhbVZqZEdWa0tHVjRZMlZ3ZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhKbGFtVmpkR1ZrSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoYTJWVGRHRmphMVJ5WVdObFRHOXVaeWhsZUdObGNIUnBiMjRzSUhObGJHWXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZxWldOMFpXUW9aWGhqWlhCMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdZMkYwWTJnZ0tHNWxkMFY0WTJWd2RHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5WldwbFkzUW9ibVYzUlhoalpYQjBhVzl1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WcVpXTjBLR1Y0WTJWd2RHbHZiaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdablZ1WTNScGIyNGdYM0J5YjJkeVpYTnpaV1FvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFI1Y0dWdlppQndjbTluY21WemMyVmtJRDA5UFNCY0ltWjFibU4wYVc5dVhDSWdQeUJ3Y205bmNtVnpjMlZrS0haaGJIVmxLU0E2SUhaaGJIVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lGRXVibVY0ZEZScFkyc29ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCelpXeG1MbkJ5YjIxcGMyVkVhWE53WVhSamFDaG1kVzVqZEdsdmJpQW9kbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtiMjVsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOXVaU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabVZ5Y21Wa0xuSmxjMjlzZG1Vb1gyWjFiR1pwYkd4bFpDaDJZV3gxWlNrcE8xeHVJQ0FnSUNBZ0lDQjlMQ0JjSW5kb1pXNWNJaXdnVzJaMWJtTjBhVzl1SUNobGVHTmxjSFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtiMjVsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHOXVaU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabVZ5Y21Wa0xuSmxjMjlzZG1Vb1gzSmxhbVZqZEdWa0tHVjRZMlZ3ZEdsdmJpa3BPMXh1SUNBZ0lDQWdJQ0I5WFNrN1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNBdkx5QlFjbTluY21WemN5QndjbTl3WVdkaGRHOXlJRzVsWldRZ2RHOGdZbVVnWVhSMFlXTm9aV1FnYVc0Z2RHaGxJR04xY25KbGJuUWdkR2xqYXk1Y2JpQWdJQ0J6Wld4bUxuQnliMjFwYzJWRWFYTndZWFJqYUNoMmIybGtJREFzSUZ3aWQyaGxibHdpTENCYmRtOXBaQ0F3TENCbWRXNWpkR2x2YmlBb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzVsZDFaaGJIVmxPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2RHaHlaWGNnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ1gzQnliMmR5WlhOelpXUW9kbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEpsZHlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvVVM1dmJtVnljbTl5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1VTNXZibVZ5Y205eUtHVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUhKbGR5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVm1aWEp5WldRdWJtOTBhV1o1S0c1bGQxWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxZEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCa1pXWmxjbkpsWkM1d2NtOXRhWE5sTzF4dWZUdGNibHh1VVM1MFlYQWdQU0JtZFc1amRHbHZiaUFvY0hKdmJXbHpaU3dnWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVU2h3Y205dGFYTmxLUzUwWVhBb1kyRnNiR0poWTJzcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCWGIzSnJjeUJoYkcxdmMzUWdiR2xyWlNCY0ltWnBibUZzYkhsY0lpd2dZblYwSUc1dmRDQmpZV3hzWldRZ1ptOXlJSEpsYW1WamRHbHZibk11WEc0Z0tpQlBjbWxuYVc1aGJDQnlaWE52YkhWMGFXOXVJSFpoYkhWbElHbHpJSEJoYzNObFpDQjBhSEp2ZFdkb0lHTmhiR3hpWVdOcklIVnVZV1ptWldOMFpXUXVYRzRnS2lCRFlXeHNZbUZqYXlCdFlYa2djbVYwZFhKdUlHRWdjSEp2YldselpTQjBhR0YwSUhkcGJHd2dZbVVnWVhkaGFYUmxaQ0JtYjNJdVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JqWVd4c1ltRmphMXh1SUNvZ1FISmxkSFZ5Ym5NZ2UxRXVVSEp2YldselpYMWNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQmtiMU52YldWMGFHbHVaeWdwWEc0Z0tpQWdJQzUwYUdWdUtDNHVMaWxjYmlBcUlDQWdMblJoY0NoamIyNXpiMnhsTG14dlp5bGNiaUFxSUNBZ0xuUm9aVzRvTGk0dUtUdGNiaUFxTDF4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWRHRndJRDBnWm5WdVkzUnBiMjRnS0dOaGJHeGlZV05yS1NCN1hHNGdJQ0FnWTJGc2JHSmhZMnNnUFNCUktHTmhiR3hpWVdOcktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblJvWlc0b1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXeHNZbUZqYXk1bVkyRnNiQ2gyWVd4MVpTa3VkR2hsYmxKbGMyOXNkbVVvZG1Gc2RXVXBPMXh1SUNBZ0lIMHBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQlNaV2RwYzNSbGNuTWdZVzRnYjJKelpYSjJaWElnYjI0Z1lTQndjbTl0YVhObExseHVJQ3BjYmlBcUlFZDFZWEpoYm5SbFpYTTZYRzRnS2x4dUlDb2dNUzRnZEdoaGRDQm1kV3htYVd4c1pXUWdZVzVrSUhKbGFtVmpkR1ZrSUhkcGJHd2dZbVVnWTJGc2JHVmtJRzl1YkhrZ2IyNWpaUzVjYmlBcUlESXVJSFJvWVhRZ1pXbDBhR1Z5SUhSb1pTQm1kV3htYVd4c1pXUWdZMkZzYkdKaFkyc2diM0lnZEdobElISmxhbVZqZEdWa0lHTmhiR3hpWVdOcklIZHBiR3dnWW1WY2JpQXFJQ0FnSUdOaGJHeGxaQ3dnWW5WMElHNXZkQ0JpYjNSb0xseHVJQ29nTXk0Z2RHaGhkQ0JtZFd4bWFXeHNaV1FnWVc1a0lISmxhbVZqZEdWa0lIZHBiR3dnYm05MElHSmxJR05oYkd4bFpDQnBiaUIwYUdseklIUjFjbTR1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSFpoYkhWbElDQWdJQ0FnY0hKdmJXbHpaU0J2Y2lCcGJXMWxaR2xoZEdVZ2NtVm1aWEpsYm1ObElIUnZJRzlpYzJWeWRtVmNiaUFxSUVCd1lYSmhiU0JtZFd4bWFXeHNaV1FnSUdaMWJtTjBhVzl1SUhSdklHSmxJR05oYkd4bFpDQjNhWFJvSUhSb1pTQm1kV3htYVd4c1pXUWdkbUZzZFdWY2JpQXFJRUJ3WVhKaGJTQnlaV3BsWTNSbFpDQWdJR1oxYm1OMGFXOXVJSFJ2SUdKbElHTmhiR3hsWkNCM2FYUm9JSFJvWlNCeVpXcGxZM1JwYjI0Z1pYaGpaWEIwYVc5dVhHNGdLaUJBY0dGeVlXMGdjSEp2WjNKbGMzTmxaQ0JtZFc1amRHbHZiaUIwYnlCaVpTQmpZV3hzWldRZ2IyNGdZVzU1SUhCeWIyZHlaWE56SUc1dmRHbG1hV05oZEdsdmJuTmNiaUFxSUVCeVpYUjFjbTRnY0hKdmJXbHpaU0JtYjNJZ2RHaGxJSEpsZEhWeWJpQjJZV3gxWlNCbWNtOXRJSFJvWlNCcGJuWnZhMlZrSUdOaGJHeGlZV05yWEc0Z0tpOWNibEV1ZDJobGJpQTlJSGRvWlc0N1hHNW1kVzVqZEdsdmJpQjNhR1Z1S0haaGJIVmxMQ0JtZFd4bWFXeHNaV1FzSUhKbGFtVmpkR1ZrTENCd2NtOW5jbVZ6YzJWa0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUZFb2RtRnNkV1VwTG5Sb1pXNG9ablZzWm1sc2JHVmtMQ0J5WldwbFkzUmxaQ3dnY0hKdlozSmxjM05sWkNrN1hHNTlYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG5Sb1pXNVNaWE52YkhabElEMGdablZ1WTNScGIyNGdLSFpoYkhWbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkR2hsYmlobWRXNWpkR2x2YmlBb0tTQjdJSEpsZEhWeWJpQjJZV3gxWlRzZ2ZTazdYRzU5TzF4dVhHNVJMblJvWlc1U1pYTnZiSFpsSUQwZ1puVnVZM1JwYjI0Z0tIQnliMjFwYzJVc0lIWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJRkVvY0hKdmJXbHpaU2t1ZEdobGJsSmxjMjlzZG1Vb2RtRnNkV1VwTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1ZEdobGJsSmxhbVZqZENBOUlHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTBhR1Z1S0daMWJtTjBhVzl1SUNncElIc2dkR2h5YjNjZ2NtVmhjMjl1T3lCOUtUdGNibjA3WEc1Y2JsRXVkR2hsYmxKbGFtVmpkQ0E5SUdaMWJtTjBhVzl1SUNod2NtOXRhWE5sTENCeVpXRnpiMjRwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVU2h3Y205dGFYTmxLUzUwYUdWdVVtVnFaV04wS0hKbFlYTnZiaWs3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWxtSUdGdUlHOWlhbVZqZENCcGN5QnViM1FnWVNCd2NtOXRhWE5sTENCcGRDQnBjeUJoY3lCY0ltNWxZWEpjSWlCaGN5QndiM056YVdKc1pTNWNiaUFxSUVsbUlHRWdjSEp2YldselpTQnBjeUJ5WldwbFkzUmxaQ3dnYVhRZ2FYTWdZWE1nWENKdVpXRnlYQ0lnWVhNZ2NHOXpjMmxpYkdVZ2RHOXZMbHh1SUNvZ1NXWWdhWFRpZ0pseklHRWdablZzWm1sc2JHVmtJSEJ5YjIxcGMyVXNJSFJvWlNCbWRXeG1hV3hzYldWdWRDQjJZV3gxWlNCcGN5QnVaV0Z5WlhJdVhHNGdLaUJKWmlCcGRPS0FtWE1nWVNCa1pXWmxjbkpsWkNCd2NtOXRhWE5sSUdGdVpDQjBhR1VnWkdWbVpYSnlaV1FnYUdGeklHSmxaVzRnY21WemIyeDJaV1FzSUhSb1pWeHVJQ29nY21WemIyeDFkR2x2YmlCcGN5QmNJbTVsWVhKbGNsd2lMbHh1SUNvZ1FIQmhjbUZ0SUc5aWFtVmpkRnh1SUNvZ1FISmxkSFZ5Ym5NZ2JXOXpkQ0J5WlhOdmJIWmxaQ0FvYm1WaGNtVnpkQ2tnWm05eWJTQnZaaUIwYUdVZ2IySnFaV04wWEc0Z0tpOWNibHh1THk4Z1dGaFlJSE5vYjNWc1pDQjNaU0J5WlMxa2J5QjBhR2x6UDF4dVVTNXVaV0Z5WlhJZ1BTQnVaV0Z5WlhJN1hHNW1kVzVqZEdsdmJpQnVaV0Z5WlhJb2RtRnNkV1VwSUh0Y2JpQWdJQ0JwWmlBb2FYTlFjbTl0YVhObEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYVc1emNHVmpkR1ZrSUQwZ2RtRnNkV1V1YVc1emNHVmpkQ2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9hVzV6Y0dWamRHVmtMbk4wWVhSbElEMDlQU0JjSW1aMWJHWnBiR3hsWkZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1emNHVmpkR1ZrTG5aaGJIVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVHRjYm4xY2JseHVMeW9xWEc0Z0tpQkFjbVYwZFhKdWN5QjNhR1YwYUdWeUlIUm9aU0JuYVhabGJpQnZZbXBsWTNRZ2FYTWdZU0J3Y205dGFYTmxMbHh1SUNvZ1QzUm9aWEozYVhObElHbDBJR2x6SUdFZ1puVnNabWxzYkdWa0lIWmhiSFZsTGx4dUlDb3ZYRzVSTG1selVISnZiV2x6WlNBOUlHbHpVSEp2YldselpUdGNibVoxYm1OMGFXOXVJR2x6VUhKdmJXbHpaU2h2WW1wbFkzUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2IySnFaV04wSUdsdWMzUmhibU5sYjJZZ1VISnZiV2x6WlR0Y2JuMWNibHh1VVM1cGMxQnliMjFwYzJWQmJHbHJaU0E5SUdselVISnZiV2x6WlVGc2FXdGxPMXh1Wm5WdVkzUnBiMjRnYVhOUWNtOXRhWE5sUVd4cGEyVW9iMkpxWldOMEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdselQySnFaV04wS0c5aWFtVmpkQ2tnSmlZZ2RIbHdaVzltSUc5aWFtVmpkQzUwYUdWdUlEMDlQU0JjSW1aMWJtTjBhVzl1WENJN1hHNTlYRzVjYmk4cUtseHVJQ29nUUhKbGRIVnlibk1nZDJobGRHaGxjaUIwYUdVZ1oybDJaVzRnYjJKcVpXTjBJR2x6SUdFZ2NHVnVaR2x1WnlCd2NtOXRhWE5sTENCdFpXRnVhVzVuSUc1dmRGeHVJQ29nWm5Wc1ptbHNiR1ZrSUc5eUlISmxhbVZqZEdWa0xseHVJQ292WEc1UkxtbHpVR1Z1WkdsdVp5QTlJR2x6VUdWdVpHbHVaenRjYm1aMWJtTjBhVzl1SUdselVHVnVaR2x1WnlodlltcGxZM1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdhWE5RY205dGFYTmxLRzlpYW1WamRDa2dKaVlnYjJKcVpXTjBMbWx1YzNCbFkzUW9LUzV6ZEdGMFpTQTlQVDBnWENKd1pXNWthVzVuWENJN1hHNTlYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG1selVHVnVaR2x1WnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYm5Od1pXTjBLQ2t1YzNSaGRHVWdQVDA5SUZ3aWNHVnVaR2x1WjF3aU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCQWNtVjBkWEp1Y3lCM2FHVjBhR1Z5SUhSb1pTQm5hWFpsYmlCdlltcGxZM1FnYVhNZ1lTQjJZV3gxWlNCdmNpQm1kV3htYVd4c1pXUmNiaUFxSUhCeWIyMXBjMlV1WEc0Z0tpOWNibEV1YVhOR2RXeG1hV3hzWldRZ1BTQnBjMFoxYkdacGJHeGxaRHRjYm1aMWJtTjBhVzl1SUdselJuVnNabWxzYkdWa0tHOWlhbVZqZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoYVhOUWNtOXRhWE5sS0c5aWFtVmpkQ2tnZkh3Z2IySnFaV04wTG1sdWMzQmxZM1FvS1M1emRHRjBaU0E5UFQwZ1hDSm1kV3htYVd4c1pXUmNJanRjYm4xY2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVhWE5HZFd4bWFXeHNaV1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhVzV6Y0dWamRDZ3BMbk4wWVhSbElEMDlQU0JjSW1aMWJHWnBiR3hsWkZ3aU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCQWNtVjBkWEp1Y3lCM2FHVjBhR1Z5SUhSb1pTQm5hWFpsYmlCdlltcGxZM1FnYVhNZ1lTQnlaV3BsWTNSbFpDQndjbTl0YVhObExseHVJQ292WEc1UkxtbHpVbVZxWldOMFpXUWdQU0JwYzFKbGFtVmpkR1ZrTzF4dVpuVnVZM1JwYjI0Z2FYTlNaV3BsWTNSbFpDaHZZbXBsWTNRcElIdGNiaUFnSUNCeVpYUjFjbTRnYVhOUWNtOXRhWE5sS0c5aWFtVmpkQ2tnSmlZZ2IySnFaV04wTG1sdWMzQmxZM1FvS1M1emRHRjBaU0E5UFQwZ1hDSnlaV3BsWTNSbFpGd2lPMXh1ZlZ4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXBjMUpsYW1WamRHVmtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHVjM0JsWTNRb0tTNXpkR0YwWlNBOVBUMGdYQ0p5WldwbFkzUmxaRndpTzF4dWZUdGNibHh1THk4dkx5QkNSVWRKVGlCVlRraEJUa1JNUlVRZ1VrVktSVU5VU1U5T0lGUlNRVU5MU1U1SFhHNWNiaTh2SUZSb2FYTWdjSEp2YldselpTQnNhV0p5WVhKNUlHTnZibk4xYldWeklHVjRZMlZ3ZEdsdmJuTWdkR2h5YjNkdUlHbHVJR2hoYm1Sc1pYSnpJSE52SUhSb1pYa2dZMkZ1SUdKbFhHNHZMeUJvWVc1a2JHVmtJR0o1SUdFZ2MzVmljMlZ4ZFdWdWRDQndjbTl0YVhObExpQWdWR2hsSUdWNFkyVndkR2x2Ym5NZ1oyVjBJR0ZrWkdWa0lIUnZJSFJvYVhNZ1lYSnlZWGtnZDJobGJseHVMeThnZEdobGVTQmhjbVVnWTNKbFlYUmxaQ3dnWVc1a0lISmxiVzkyWldRZ2QyaGxiaUIwYUdWNUlHRnlaU0JvWVc1a2JHVmtMaUFnVG05MFpTQjBhR0YwSUdsdUlFVlROaUJ2Y2x4dUx5OGdjMmhwYlcxbFpDQmxiblpwY205dWJXVnVkSE1zSUhSb2FYTWdkMjkxYkdRZ2JtRjBkWEpoYkd4NUlHSmxJR0VnWUZObGRHQXVYRzUyWVhJZ2RXNW9ZVzVrYkdWa1VtVmhjMjl1Y3lBOUlGdGRPMXh1ZG1GeUlIVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJuTWdQU0JiWFR0Y2JuWmhjaUJ5WlhCdmNuUmxaRlZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibk1nUFNCYlhUdGNiblpoY2lCMGNtRmphMVZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibk1nUFNCMGNuVmxPMXh1WEc1bWRXNWpkR2x2YmlCeVpYTmxkRlZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibk1vS1NCN1hHNGdJQ0FnZFc1b1lXNWtiR1ZrVW1WaGMyOXVjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibk11YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoWTJ0VmJtaGhibVJzWldSU1pXcGxZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQWdJSFJ5WVdOclZXNW9ZVzVrYkdWa1VtVnFaV04wYVc5dWN5QTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIwY21GamExSmxhbVZqZEdsdmJpaHdjbTl0YVhObExDQnlaV0Z6YjI0cElIdGNiaUFnSUNCcFppQW9JWFJ5WVdOclZXNW9ZVzVrYkdWa1VtVnFaV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NISnZZMlZ6Y3lBOVBUMGdYQ0p2WW1wbFkzUmNJaUFtSmlCMGVYQmxiMllnY0hKdlkyVnpjeTVsYldsMElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdVUzV1WlhoMFZHbGpheTV5ZFc1QlpuUmxjaWhtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lYSnlZWGxmYVc1a1pYaFBaaWgxYm1oaGJtUnNaV1JTWldwbFkzUnBiMjV6TENCd2NtOXRhWE5sS1NBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOWpaWE56TG1WdGFYUW9YQ0oxYm1oaGJtUnNaV1JTWldwbFkzUnBiMjVjSWl3Z2NtVmhjMjl1TENCd2NtOXRhWE5sS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYQnZjblJsWkZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ym5NdWNIVnphQ2h3Y205dGFYTmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVjeTV3ZFhOb0tIQnliMjFwYzJVcE8xeHVJQ0FnSUdsbUlDaHlaV0Z6YjI0Z0ppWWdkSGx3Wlc5bUlISmxZWE52Ymk1emRHRmpheUFoUFQwZ1hDSjFibVJsWm1sdVpXUmNJaWtnZTF4dUlDQWdJQ0FnSUNCMWJtaGhibVJzWldSU1pXRnpiMjV6TG5CMWMyZ29jbVZoYzI5dUxuTjBZV05yS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IxYm1oaGJtUnNaV1JTWldGemIyNXpMbkIxYzJnb1hDSW9ibThnYzNSaFkyc3BJRndpSUNzZ2NtVmhjMjl1S1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJSFZ1ZEhKaFkydFNaV3BsWTNScGIyNG9jSEp2YldselpTa2dlMXh1SUNBZ0lHbG1JQ2doZEhKaFkydFZibWhoYm1Sc1pXUlNaV3BsWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWVhRZ1BTQmhjbkpoZVY5cGJtUmxlRTltS0hWdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ym5Nc0lIQnliMjFwYzJVcE8xeHVJQ0FnSUdsbUlDaGhkQ0FoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCd2NtOWpaWE56SUQwOVBTQmNJbTlpYW1WamRGd2lJQ1ltSUhSNWNHVnZaaUJ3Y205alpYTnpMbVZ0YVhRZ1BUMDlJRndpWm5WdVkzUnBiMjVjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnVVM1dVpYaDBWR2xqYXk1eWRXNUJablJsY2lobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdGMFVtVndiM0owSUQwZ1lYSnlZWGxmYVc1a1pYaFBaaWh5WlhCdmNuUmxaRlZ1YUdGdVpHeGxaRkpsYW1WamRHbHZibk1zSUhCeWIyMXBjMlVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhkRkpsY0c5eWRDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTVsYldsMEtGd2ljbVZxWldOMGFXOXVTR0Z1Wkd4bFpGd2lMQ0IxYm1oaGJtUnNaV1JTWldGemIyNXpXMkYwWFN3Z2NISnZiV2x6WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsY0c5eWRHVmtWVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVjeTV6Y0d4cFkyVW9ZWFJTWlhCdmNuUXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJuTXVjM0JzYVdObEtHRjBMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ2RXNW9ZVzVrYkdWa1VtVmhjMjl1Y3k1emNHeHBZMlVvWVhRc0lERXBPMXh1SUNBZ0lIMWNibjFjYmx4dVVTNXlaWE5sZEZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ym5NZ1BTQnlaWE5sZEZWdWFHRnVaR3hsWkZKbGFtVmpkR2x2Ym5NN1hHNWNibEV1WjJWMFZXNW9ZVzVrYkdWa1VtVmhjMjl1Y3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQXZMeUJOWVd0bElHRWdZMjl3ZVNCemJ5QjBhR0YwSUdOdmJuTjFiV1Z5Y3lCallXNG5kQ0JwYm5SbGNtWmxjbVVnZDJsMGFDQnZkWElnYVc1MFpYSnVZV3dnYzNSaGRHVXVYRzRnSUNBZ2NtVjBkWEp1SUhWdWFHRnVaR3hsWkZKbFlYTnZibk11YzJ4cFkyVW9LVHRjYm4wN1hHNWNibEV1YzNSdmNGVnVhR0Z1Wkd4bFpGSmxhbVZqZEdsdmJsUnlZV05yYVc1bklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsYzJWMFZXNW9ZVzVrYkdWa1VtVnFaV04wYVc5dWN5Z3BPMXh1SUNBZ0lIUnlZV05yVlc1b1lXNWtiR1ZrVW1WcVpXTjBhVzl1Y3lBOUlHWmhiSE5sTzF4dWZUdGNibHh1Y21WelpYUlZibWhoYm1Sc1pXUlNaV3BsWTNScGIyNXpLQ2s3WEc1Y2JpOHZMeThnUlU1RUlGVk9TRUZPUkV4RlJDQlNSVXBGUTFSSlQwNGdWRkpCUTB0SlRrZGNibHh1THlvcVhHNGdLaUJEYjI1emRISjFZM1J6SUdFZ2NtVnFaV04wWldRZ2NISnZiV2x6WlM1Y2JpQXFJRUJ3WVhKaGJTQnlaV0Z6YjI0Z2RtRnNkV1VnWkdWelkzSnBZbWx1WnlCMGFHVWdabUZwYkhWeVpWeHVJQ292WEc1UkxuSmxhbVZqZENBOUlISmxhbVZqZER0Y2JtWjFibU4wYVc5dUlISmxhbVZqZENoeVpXRnpiMjRwSUh0Y2JpQWdJQ0IyWVhJZ2NtVnFaV04wYVc5dUlEMGdVSEp2YldselpTaDdYRzRnSUNBZ0lDQWdJRndpZDJobGJsd2lPaUJtZFc1amRHbHZiaUFvY21WcVpXTjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUc1dmRHVWdkR2hoZENCMGFHVWdaWEp5YjNJZ2FHRnpJR0psWlc0Z2FHRnVaR3hsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hKbGFtVmpkR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RXNTBjbUZqYTFKbGFtVmpkR2x2YmloMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5WldwbFkzUmxaQ0EvSUhKbGFtVmpkR1ZrS0hKbFlYTnZiaWtnT2lCMGFHbHpPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3dnWm5WdVkzUnBiMjRnWm1Gc2JHSmhZMnNvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMHNJR1oxYm1OMGFXOXVJR2x1YzNCbFkzUW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3SUhOMFlYUmxPaUJjSW5KbGFtVmpkR1ZrWENJc0lISmxZWE52YmpvZ2NtVmhjMjl1SUgwN1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNBdkx5Qk9iM1JsSUhSb1lYUWdkR2hsSUhKbFlYTnZiaUJvWVhNZ2JtOTBJR0psWlc0Z2FHRnVaR3hsWkM1Y2JpQWdJQ0IwY21GamExSmxhbVZqZEdsdmJpaHlaV3BsWTNScGIyNHNJSEpsWVhOdmJpazdYRzVjYmlBZ0lDQnlaWFIxY200Z2NtVnFaV04wYVc5dU8xeHVmVnh1WEc0dktpcGNiaUFxSUVOdmJuTjBjblZqZEhNZ1lTQm1kV3htYVd4c1pXUWdjSEp2YldselpTQm1iM0lnWVc0Z2FXMXRaV1JwWVhSbElISmxabVZ5Wlc1alpTNWNiaUFxSUVCd1lYSmhiU0IyWVd4MVpTQnBiVzFsWkdsaGRHVWdjbVZtWlhKbGJtTmxYRzRnS2k5Y2JsRXVablZzWm1sc2JDQTlJR1oxYkdacGJHdzdYRzVtZFc1amRHbHZiaUJtZFd4bWFXeHNLSFpoYkhWbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlVvZTF4dUlDQWdJQ0FnSUNCY0luZG9aVzVjSWpvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCY0ltZGxkRndpT2lCbWRXNWpkR2x2YmlBb2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVzI1aGJXVmRPMXh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCY0luTmxkRndpT2lCbWRXNWpkR2x2YmlBb2JtRnRaU3dnY21oektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVnR1WVcxbFhTQTlJSEpvY3p0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdYQ0prWld4bGRHVmNJam9nWm5WdVkzUnBiMjRnS0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCMllXeDFaVnR1WVcxbFhUdGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnWENKd2IzTjBYQ0k2SUdaMWJtTjBhVzl1SUNodVlXMWxMQ0JoY21kektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUUxcGJHeGxjaUJ3Y205d2IzTmxjeUIwYUdGMElIQnZjM1FnZDJsMGFDQnVieUJ1WVcxbElITm9iM1ZzWkNCaGNIQnNlU0JoWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ3Y205dGFYTmxaQ0JtZFc1amRHbHZiaTVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WVcxbElEMDlQU0J1ZFd4c0lIeDhJRzVoYldVZ1BUMDlJSFp2YVdRZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlM1aGNIQnNlU2gyYjJsa0lEQXNJR0Z5WjNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdWYmJtRnRaVjB1WVhCd2JIa29kbUZzZFdVc0lHRnlaM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCY0ltRndjR3g1WENJNklHWjFibU4wYVc5dUlDaDBhR2x6Y0N3Z1lYSm5jeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTG1Gd2NHeDVLSFJvYVhOd0xDQmhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdYQ0pyWlhselhDSTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnZZbXBsWTNSZmEyVjVjeWgyWVd4MVpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlMQ0IyYjJsa0lEQXNJR1oxYm1OMGFXOXVJR2x1YzNCbFkzUW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3SUhOMFlYUmxPaUJjSW1aMWJHWnBiR3hsWkZ3aUxDQjJZV3gxWlRvZ2RtRnNkV1VnZlR0Y2JpQWdJQ0I5S1R0Y2JuMWNibHh1THlvcVhHNGdLaUJEYjI1MlpYSjBjeUIwYUdWdVlXSnNaWE1nZEc4Z1VTQndjbTl0YVhObGN5NWNiaUFxSUVCd1lYSmhiU0J3Y205dGFYTmxJSFJvWlc1aFlteGxJSEJ5YjIxcGMyVmNiaUFxSUVCeVpYUjFjbTV6SUdFZ1VTQndjbTl0YVhObFhHNGdLaTljYm1aMWJtTjBhVzl1SUdOdlpYSmpaU2h3Y205dGFYTmxLU0I3WEc0Z0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0JSTG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5YjIxcGMyVXVkR2hsYmloa1pXWmxjbkpsWkM1eVpYTnZiSFpsTENCa1pXWmxjbkpsWkM1eVpXcGxZM1FzSUdSbFptVnljbVZrTG01dmRHbG1lU2s3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dWNFkyVndkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVpYSnlaV1F1Y21WcVpXTjBLR1Y0WTJWd2RHbHZiaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5S1R0Y2JpQWdJQ0J5WlhSMWNtNGdaR1ZtWlhKeVpXUXVjSEp2YldselpUdGNibjFjYmx4dUx5b3FYRzRnS2lCQmJtNXZkR0YwWlhNZ1lXNGdiMkpxWldOMElITjFZMmdnZEdoaGRDQnBkQ0IzYVd4c0lHNWxkbVZ5SUdKbFhHNGdLaUIwY21GdWMyWmxjbkpsWkNCaGQyRjVJR1p5YjIwZ2RHaHBjeUJ3Y205alpYTnpJRzkyWlhJZ1lXNTVJSEJ5YjIxcGMyVmNiaUFxSUdOdmJXMTFibWxqWVhScGIyNGdZMmhoYm01bGJDNWNiaUFxSUVCd1lYSmhiU0J2WW1wbFkzUmNiaUFxSUVCeVpYUjFjbTV6SUhCeWIyMXBjMlVnWVNCM2NtRndjR2x1WnlCdlppQjBhR0YwSUc5aWFtVmpkQ0IwYUdGMFhHNGdLaUJoWkdScGRHbHZibUZzYkhrZ2NtVnpjRzl1WkhNZ2RHOGdkR2hsSUZ3aWFYTkVaV1pjSWlCdFpYTnpZV2RsWEc0Z0tpQjNhWFJvYjNWMElHRWdjbVZxWldOMGFXOXVMbHh1SUNvdlhHNVJMbTFoYzNSbGNpQTlJRzFoYzNSbGNqdGNibVoxYm1OMGFXOXVJRzFoYzNSbGNpaHZZbXBsWTNRcElIdGNiaUFnSUNCeVpYUjFjbTRnVUhKdmJXbHpaU2g3WEc0Z0lDQWdJQ0FnSUZ3aWFYTkVaV1pjSWpvZ1puVnVZM1JwYjI0Z0tDa2dlMzFjYmlBZ0lDQjlMQ0JtZFc1amRHbHZiaUJtWVd4c1ltRmpheWh2Y0N3Z1lYSm5jeWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWkdsemNHRjBZMmdvYjJKcVpXTjBMQ0J2Y0N3Z1lYSm5jeWs3WEc0Z0lDQWdmU3dnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1VTaHZZbXBsWTNRcExtbHVjM0JsWTNRb0tUdGNiaUFnSUNCOUtUdGNibjFjYmx4dUx5b3FYRzRnS2lCVGNISmxZV1J6SUhSb1pTQjJZV3gxWlhNZ2IyWWdZU0J3Y205dGFYTmxaQ0JoY25KaGVTQnZaaUJoY21kMWJXVnVkSE1nYVc1MGJ5QjBhR1ZjYmlBcUlHWjFiR1pwYkd4dFpXNTBJR05oYkd4aVlXTnJMbHh1SUNvZ1FIQmhjbUZ0SUdaMWJHWnBiR3hsWkNCallXeHNZbUZqYXlCMGFHRjBJSEpsWTJWcGRtVnpJSFpoY21saFpHbGpJR0Z5WjNWdFpXNTBjeUJtY205dElIUm9aVnh1SUNvZ2NISnZiV2x6WldRZ1lYSnlZWGxjYmlBcUlFQndZWEpoYlNCeVpXcGxZM1JsWkNCallXeHNZbUZqYXlCMGFHRjBJSEpsWTJWcGRtVnpJSFJvWlNCbGVHTmxjSFJwYjI0Z2FXWWdkR2hsSUhCeWIyMXBjMlZjYmlBcUlHbHpJSEpsYW1WamRHVmtMbHh1SUNvZ1FISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObElHWnZjaUIwYUdVZ2NtVjBkWEp1SUhaaGJIVmxJRzl5SUhSb2NtOTNiaUJsZUdObGNIUnBiMjRnYjJaY2JpQXFJR1ZwZEdobGNpQmpZV3hzWW1GamF5NWNiaUFxTDF4dVVTNXpjSEpsWVdRZ1BTQnpjSEpsWVdRN1hHNW1kVzVqZEdsdmJpQnpjSEpsWVdRb2RtRnNkV1VzSUdaMWJHWnBiR3hsWkN3Z2NtVnFaV04wWldRcElIdGNiaUFnSUNCeVpYUjFjbTRnVVNoMllXeDFaU2t1YzNCeVpXRmtLR1oxYkdacGJHeGxaQ3dnY21WcVpXTjBaV1FwTzF4dWZWeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzV6Y0hKbFlXUWdQU0JtZFc1amRHbHZiaUFvWm5Wc1ptbHNiR1ZrTENCeVpXcGxZM1JsWkNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtRnNiQ2dwTG5Sb1pXNG9ablZ1WTNScGIyNGdLR0Z5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1kV3htYVd4c1pXUXVZWEJ3Ykhrb2RtOXBaQ0F3TENCaGNuSmhlU2s3WEc0Z0lDQWdmU3dnY21WcVpXTjBaV1FwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJVYUdVZ1lYTjVibU1nWm5WdVkzUnBiMjRnYVhNZ1lTQmtaV052Y21GMGIzSWdabTl5SUdkbGJtVnlZWFJ2Y2lCbWRXNWpkR2x2Ym5Nc0lIUjFjbTVwYm1kY2JpQXFJSFJvWlcwZ2FXNTBieUJoYzNsdVkyaHliMjV2ZFhNZ1oyVnVaWEpoZEc5eWN5NGdJRUZzZEdodmRXZG9JR2RsYm1WeVlYUnZjbk1nWVhKbElHOXViSGtnY0dGeWRGeHVJQ29nYjJZZ2RHaGxJRzVsZDJWemRDQkZRMDFCVTJOeWFYQjBJRFlnWkhKaFpuUnpMQ0IwYUdseklHTnZaR1VnWkc5bGN5QnViM1FnWTJGMWMyVWdjM2x1ZEdGNFhHNGdLaUJsY25KdmNuTWdhVzRnYjJ4a1pYSWdaVzVuYVc1bGN5NGdJRlJvYVhNZ1kyOWtaU0J6YUc5MWJHUWdZMjl1ZEdsdWRXVWdkRzhnZDI5eWF5QmhibVFnZDJsc2JGeHVJQ29nYVc0Z1ptRmpkQ0JwYlhCeWIzWmxJRzkyWlhJZ2RHbHRaU0JoY3lCMGFHVWdiR0Z1WjNWaFoyVWdhVzF3Y205MlpYTXVYRzRnS2x4dUlDb2dSVk0ySUdkbGJtVnlZWFJ2Y25NZ1lYSmxJR04xY25KbGJuUnNlU0J3WVhKMElHOW1JRlk0SUhabGNuTnBiMjRnTXk0eE9TQjNhWFJvSUhSb1pWeHVJQ29nTFMxb1lYSnRiMjU1TFdkbGJtVnlZWFJ2Y25NZ2NuVnVkR2x0WlNCbWJHRm5JR1Z1WVdKc1pXUXVJQ0JUY0dsa1pYSk5iMjVyWlhrZ2FHRnpJR2hoWkNCMGFHVnRYRzRnS2lCbWIzSWdiRzl1WjJWeUxDQmlkWFFnZFc1a1pYSWdZVzRnYjJ4a1pYSWdVSGwwYUc5dUxXbHVjM0JwY21Wa0lHWnZjbTB1SUNCVWFHbHpJR1oxYm1OMGFXOXVYRzRnS2lCM2IzSnJjeUJ2YmlCaWIzUm9JR3RwYm1SeklHOW1JR2RsYm1WeVlYUnZjbk11WEc0Z0tseHVJQ29nUkdWamIzSmhkR1Z6SUdFZ1oyVnVaWEpoZEc5eUlHWjFibU4wYVc5dUlITjFZMmdnZEdoaGREcGNiaUFxSUNBdElHbDBJRzFoZVNCNWFXVnNaQ0J3Y205dGFYTmxjMXh1SUNvZ0lDMGdaWGhsWTNWMGFXOXVJSGRwYkd3Z1kyOXVkR2x1ZFdVZ2QyaGxiaUIwYUdGMElIQnliMjFwYzJVZ2FYTWdablZzWm1sc2JHVmtYRzRnS2lBZ0xTQjBhR1VnZG1Gc2RXVWdiMllnZEdobElIbHBaV3hrSUdWNGNISmxjM05wYjI0Z2QybHNiQ0JpWlNCMGFHVWdablZzWm1sc2JHVmtJSFpoYkhWbFhHNGdLaUFnTFNCcGRDQnlaWFIxY201eklHRWdjSEp2YldselpTQm1iM0lnZEdobElISmxkSFZ5YmlCMllXeDFaU0FvZDJobGJpQjBhR1VnWjJWdVpYSmhkRzl5WEc0Z0tpQWdJQ0J6ZEc5d2N5QnBkR1Z5WVhScGJtY3BYRzRnS2lBZ0xTQjBhR1VnWkdWamIzSmhkR1ZrSUdaMWJtTjBhVzl1SUhKbGRIVnlibk1nWVNCd2NtOXRhWE5sSUdadmNpQjBhR1VnY21WMGRYSnVJSFpoYkhWbFhHNGdLaUFnSUNCdlppQjBhR1VnWjJWdVpYSmhkRzl5SUc5eUlIUm9aU0JtYVhKemRDQnlaV3BsWTNSbFpDQndjbTl0YVhObElHRnRiMjVuSUhSb2IzTmxYRzRnS2lBZ0lDQjVhV1ZzWkdWa0xseHVJQ29nSUMwZ2FXWWdZVzRnWlhKeWIzSWdhWE1nZEdoeWIzZHVJR2x1SUhSb1pTQm5aVzVsY21GMGIzSXNJR2wwSUhCeWIzQmhaMkYwWlhNZ2RHaHliM1ZuYUZ4dUlDb2dJQ0FnWlhabGNua2dabTlzYkc5M2FXNW5JSGxwWld4a0lIVnVkR2xzSUdsMElHbHpJR05oZFdkb2RDd2diM0lnZFc1MGFXd2dhWFFnWlhOallYQmxjMXh1SUNvZ0lDQWdkR2hsSUdkbGJtVnlZWFJ2Y2lCbWRXNWpkR2x2YmlCaGJIUnZaMlYwYUdWeUxDQmhibVFnYVhNZ2RISmhibk5zWVhSbFpDQnBiblJ2SUdGY2JpQXFJQ0FnSUhKbGFtVmpkR2x2YmlCbWIzSWdkR2hsSUhCeWIyMXBjMlVnY21WMGRYSnVaV1FnWW5rZ2RHaGxJR1JsWTI5eVlYUmxaQ0JuWlc1bGNtRjBiM0l1WEc0Z0tpOWNibEV1WVhONWJtTWdQU0JoYzNsdVl6dGNibVoxYm1OMGFXOXVJR0Z6ZVc1aktHMWhhMlZIWlc1bGNtRjBiM0lwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhabGNtSWdhWE1nWENKelpXNWtYQ0lzSUdGeVp5QnBjeUJoSUhaaGJIVmxYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkbVZ5WWlCcGN5QmNJblJvY205M1hDSXNJR0Z5WnlCcGN5QmhiaUJsZUdObGNIUnBiMjVjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWTI5dWRHbHVkV1Z5S0habGNtSXNJR0Z5WnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlISmxjM1ZzZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZXNTBhV3dnVmpnZ015NHhPU0F2SUVOb2NtOXRhWFZ0SURJNUlHbHpJSEpsYkdWaGMyVmtMQ0JUY0dsa1pYSk5iMjVyWlhrZ2FYTWdkR2hsSUc5dWJIbGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHVnVaMmx1WlNCMGFHRjBJR2hoY3lCaElHUmxjR3h2ZVdWa0lHSmhjMlVnYjJZZ1luSnZkM05sY25NZ2RHaGhkQ0J6ZFhCd2IzSjBJR2RsYm1WeVlYUnZjbk11WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJJYjNkbGRtVnlMQ0JUVFNkeklHZGxibVZ5WVhSdmNuTWdkWE5sSUhSb1pTQlFlWFJvYjI0dGFXNXpjR2x5WldRZ2MyVnRZVzUwYVdOeklHOW1YRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QnZkWFJrWVhSbFpDQkZVellnWkhKaFpuUnpMaUFnVjJVZ2QyOTFiR1FnYkdsclpTQjBieUJ6ZFhCd2IzSjBJRVZUTml3Z1luVjBJSGRsSjJRZ1lXeHpiMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdiR2xyWlNCMGJ5QnRZV3RsSUdsMElIQnZjM05wWW14bElIUnZJSFZ6WlNCblpXNWxjbUYwYjNKeklHbHVJR1JsY0d4dmVXVmtJR0p5YjNkelpYSnpMQ0J6YjF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnZDJVZ1lXeHpieUJ6ZFhCd2IzSjBJRkI1ZEdodmJpMXpkSGxzWlNCblpXNWxjbUYwYjNKekxpQWdRWFFnYzI5dFpTQndiMmx1ZENCM1pTQmpZVzRnY21WdGIzWmxYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QjBhR2x6SUdKc2IyTnJMbHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JRk4wYjNCSmRHVnlZWFJwYjI0Z1BUMDlJRndpZFc1a1pXWnBibVZrWENJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJGVXpZZ1IyVnVaWEpoZEc5eWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZENBOUlHZGxibVZ5WVhSdmNsdDJaWEppWFNoaGNtY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1Y0WTJWd2RHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnFaV04wS0dWNFkyVndkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h5WlhOMWJIUXVaRzl1WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdVU2h5WlhOMWJIUXVkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjNhR1Z1S0hKbGMzVnNkQzUyWVd4MVpTd2dZMkZzYkdKaFkyc3NJR1Z5Y21KaFkyc3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM0JwWkdWeVRXOXVhMlY1SUVkbGJtVnlZWFJ2Y25OY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkdTVmhOUlRvZ1VtVnRiM1psSUhSb2FYTWdZMkZ6WlNCM2FHVnVJRk5OSUdSdlpYTWdSVk0ySUdkbGJtVnlZWFJ2Y25NdVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ1oyVnVaWEpoZEc5eVczWmxjbUpkS0dGeVp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JqWVhSamFDQW9aWGhqWlhCMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwYzFOMGIzQkpkR1Z5WVhScGIyNG9aWGhqWlhCMGFXOXVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRkVvWlhoalpYQjBhVzl1TG5aaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ5WldwbFkzUW9aWGhqWlhCMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2QyaGxiaWh5WlhOMWJIUXNJR05oYkd4aVlXTnJMQ0JsY25KaVlXTnJLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IyWVhJZ1oyVnVaWEpoZEc5eUlEMGdiV0ZyWlVkbGJtVnlZWFJ2Y2k1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyRnNiR0poWTJzZ1BTQmpiMjUwYVc1MVpYSXVZbWx1WkNoamIyNTBhVzUxWlhJc0lGd2libVY0ZEZ3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdWeWNtSmhZMnNnUFNCamIyNTBhVzUxWlhJdVltbHVaQ2hqYjI1MGFXNTFaWElzSUZ3aWRHaHliM2RjSWlrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXeHNZbUZqYXlncE8xeHVJQ0FnSUgwN1hHNTlYRzVjYmk4cUtseHVJQ29nVkdobElITndZWGR1SUdaMWJtTjBhVzl1SUdseklHRWdjMjFoYkd3Z2QzSmhjSEJsY2lCaGNtOTFibVFnWVhONWJtTWdkR2hoZENCcGJXMWxaR2xoZEdWc2VWeHVJQ29nWTJGc2JITWdkR2hsSUdkbGJtVnlZWFJ2Y2lCaGJtUWdZV3h6YnlCbGJtUnpJSFJvWlNCd2NtOXRhWE5sSUdOb1lXbHVMQ0J6YnlCMGFHRjBJR0Z1ZVZ4dUlDb2dkVzVvWVc1a2JHVmtJR1Z5Y205eWN5QmhjbVVnZEdoeWIzZHVJR2x1YzNSbFlXUWdiMllnWm05eWQyRnlaR1ZrSUhSdklIUm9aU0JsY25KdmNseHVJQ29nYUdGdVpHeGxjaTRnVkdocGN5QnBjeUIxYzJWbWRXd2dZbVZqWVhWelpTQnBkQ2R6SUdWNGRISmxiV1ZzZVNCamIyMXRiMjRnZEc4Z2NuVnVYRzRnS2lCblpXNWxjbUYwYjNKeklHRjBJSFJvWlNCMGIzQXRiR1YyWld3Z2RHOGdkMjl5YXlCM2FYUm9JR3hwWW5KaGNtbGxjeTVjYmlBcUwxeHVVUzV6Y0dGM2JpQTlJSE53WVhkdU8xeHVablZ1WTNScGIyNGdjM0JoZDI0b2JXRnJaVWRsYm1WeVlYUnZjaWtnZTF4dUlDQWdJRkV1Wkc5dVpTaFJMbUZ6ZVc1aktHMWhhMlZIWlc1bGNtRjBiM0lwS0NrcE8xeHVmVnh1WEc0dkx5QkdTVmhOUlRvZ1VtVnRiM1psSUhSb2FYTWdhVzUwWlhKbVlXTmxJRzl1WTJVZ1JWTTJJR2RsYm1WeVlYUnZjbk1nWVhKbElHbHVJRk53YVdSbGNrMXZibXRsZVM1Y2JpOHFLbHh1SUNvZ1ZHaHliM2R6SUdFZ1VtVjBkWEp1Vm1Gc2RXVWdaWGhqWlhCMGFXOXVJSFJ2SUhOMGIzQWdZVzRnWVhONWJtTm9jbTl1YjNWeklHZGxibVZ5WVhSdmNpNWNiaUFxWEc0Z0tpQlVhR2x6SUdsdWRHVnlabUZqWlNCcGN5QmhJSE4wYjNBdFoyRndJRzFsWVhOMWNtVWdkRzhnYzNWd2NHOXlkQ0JuWlc1bGNtRjBiM0lnY21WMGRYSnVYRzRnS2lCMllXeDFaWE1nYVc0Z2IyeGtaWElnUm1seVpXWnZlQzlUY0dsa1pYSk5iMjVyWlhrdUlDQkpiaUJpY205M2MyVnljeUIwYUdGMElITjFjSEJ2Y25RZ1JWTTJYRzRnS2lCblpXNWxjbUYwYjNKeklHeHBhMlVnUTJoeWIyMXBkVzBnTWprc0lHcDFjM1FnZFhObElGd2ljbVYwZFhKdVhDSWdhVzRnZVc5MWNpQm5aVzVsY21GMGIzSmNiaUFxSUdaMWJtTjBhVzl1Y3k1Y2JpQXFYRzRnS2lCQWNHRnlZVzBnZG1Gc2RXVWdkR2hsSUhKbGRIVnliaUIyWVd4MVpTQm1iM0lnZEdobElITjFjbkp2ZFc1a2FXNW5JR2RsYm1WeVlYUnZjbHh1SUNvZ1FIUm9jbTkzY3lCU1pYUjFjbTVXWVd4MVpTQmxlR05sY0hScGIyNGdkMmwwYUNCMGFHVWdkbUZzZFdVdVhHNGdLaUJBWlhoaGJYQnNaVnh1SUNvZ0x5OGdSVk0ySUhOMGVXeGxYRzRnS2lCUkxtRnplVzVqS0daMWJtTjBhVzl1S2lBb0tTQjdYRzRnS2lBZ0lDQWdJSFpoY2lCbWIyOGdQU0I1YVdWc1pDQm5aWFJHYjI5UWNtOXRhWE5sS0NrN1hHNGdLaUFnSUNBZ0lIWmhjaUJpWVhJZ1BTQjVhV1ZzWkNCblpYUkNZWEpRY205dGFYTmxLQ2s3WEc0Z0tpQWdJQ0FnSUhKbGRIVnliaUJtYjI4Z0t5QmlZWEk3WEc0Z0tpQjlLVnh1SUNvZ0x5OGdUMnhrWlhJZ1UzQnBaR1Z5VFc5dWEyVjVJSE4wZVd4bFhHNGdLaUJSTG1GemVXNWpLR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQXFJQ0FnSUNBZ2RtRnlJR1p2YnlBOUlIbHBaV3hrSUdkbGRFWnZiMUJ5YjIxcGMyVW9LVHRjYmlBcUlDQWdJQ0FnZG1GeUlHSmhjaUE5SUhscFpXeGtJR2RsZEVKaGNsQnliMjFwYzJVb0tUdGNiaUFxSUNBZ0lDQWdVUzV5WlhSMWNtNG9abTl2SUNzZ1ltRnlLVHRjYmlBcUlIMHBYRzRnS2k5Y2JsRmJYQ0p5WlhSMWNtNWNJbDBnUFNCZmNtVjBkWEp1TzF4dVpuVnVZM1JwYjI0Z1gzSmxkSFZ5YmloMllXeDFaU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJSVW1WMGRYSnVWbUZzZFdVb2RtRnNkV1VwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRlJvWlNCd2NtOXRhWE5sWkNCbWRXNWpkR2x2YmlCa1pXTnZjbUYwYjNJZ1pXNXpkWEpsY3lCMGFHRjBJR0Z1ZVNCd2NtOXRhWE5sSUdGeVozVnRaVzUwYzF4dUlDb2dZWEpsSUhObGRIUnNaV1FnWVc1a0lIQmhjM05sWkNCaGN5QjJZV3gxWlhNZ0tHQjBhR2x6WUNCcGN5QmhiSE52SUhObGRIUnNaV1FnWVc1a0lIQmhjM05sWkZ4dUlDb2dZWE1nWVNCMllXeDFaU2t1SUNCSmRDQjNhV3hzSUdGc2MyOGdaVzV6ZFhKbElIUm9ZWFFnZEdobElISmxjM1ZzZENCdlppQmhJR1oxYm1OMGFXOXVJR2x6WEc0Z0tpQmhiSGRoZVhNZ1lTQndjbTl0YVhObExseHVJQ3BjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLaUIyWVhJZ1lXUmtJRDBnVVM1d2NtOXRhWE5sWkNobWRXNWpkR2x2YmlBb1lTd2dZaWtnZTF4dUlDb2dJQ0FnSUhKbGRIVnliaUJoSUNzZ1lqdGNiaUFxSUgwcE8xeHVJQ29nWVdSa0tGRW9ZU2tzSUZFb1Fpa3BPMXh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdablZ1WTNScGIyNTlJR05oYkd4aVlXTnJJRlJvWlNCbWRXNWpkR2x2YmlCMGJ5QmtaV052Y21GMFpWeHVJQ29nUUhKbGRIVnlibk1nZTJaMWJtTjBhVzl1ZlNCaElHWjFibU4wYVc5dUlIUm9ZWFFnYUdGeklHSmxaVzRnWkdWamIzSmhkR1ZrTGx4dUlDb3ZYRzVSTG5CeWIyMXBjMlZrSUQwZ2NISnZiV2x6WldRN1hHNW1kVzVqZEdsdmJpQndjbTl0YVhObFpDaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjSEpsWVdRb1czUm9hWE1zSUdGc2JDaGhjbWQxYldWdWRITXBYU3dnWm5WdVkzUnBiMjRnS0hObGJHWXNJR0Z5WjNNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVd4c1ltRmpheTVoY0hCc2VTaHpaV3htTENCaGNtZHpLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlR0Y2JuMWNibHh1THlvcVhHNGdLaUJ6Wlc1a2N5QmhJRzFsYzNOaFoyVWdkRzhnWVNCMllXeDFaU0JwYmlCaElHWjFkSFZ5WlNCMGRYSnVYRzRnS2lCQWNHRnlZVzBnYjJKcVpXTjBLaUIwYUdVZ2NtVmphWEJwWlc1MFhHNGdLaUJBY0dGeVlXMGdiM0FnZEdobElHNWhiV1VnYjJZZ2RHaGxJRzFsYzNOaFoyVWdiM0JsY21GMGFXOXVMQ0JsTG1jdUxDQmNJbmRvWlc1Y0lpeGNiaUFxSUVCd1lYSmhiU0JoY21keklHWjFjblJvWlhJZ1lYSm5kVzFsYm5SeklIUnZJR0psSUdadmNuZGhjbVJsWkNCMGJ5QjBhR1VnYjNCbGNtRjBhVzl1WEc0Z0tpQkFjbVYwZFhKdWN5QnlaWE4xYkhRZ2UxQnliMjFwYzJWOUlHRWdjSEp2YldselpTQm1iM0lnZEdobElISmxjM1ZzZENCdlppQjBhR1VnYjNCbGNtRjBhVzl1WEc0Z0tpOWNibEV1WkdsemNHRjBZMmdnUFNCa2FYTndZWFJqYUR0Y2JtWjFibU4wYVc5dUlHUnBjM0JoZEdOb0tHOWlhbVZqZEN3Z2IzQXNJR0Z5WjNNcElIdGNiaUFnSUNCeVpYUjFjbTRnVVNodlltcGxZM1FwTG1ScGMzQmhkR05vS0c5d0xDQmhjbWR6S1R0Y2JuMWNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1WkdsemNHRjBZMmdnUFNCbWRXNWpkR2x2YmlBb2IzQXNJR0Z5WjNNcElIdGNiaUFnSUNCMllYSWdjMlZzWmlBOUlIUm9hWE03WEc0Z0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0JSTG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdjMlZzWmk1d2NtOXRhWE5sUkdsemNHRjBZMmdvWkdWbVpYSnlaV1F1Y21WemIyeDJaU3dnYjNBc0lHRnlaM01wTzF4dUlDQWdJSDBwTzF4dUlDQWdJSEpsZEhWeWJpQmtaV1psY25KbFpDNXdjbTl0YVhObE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSFpYUnpJSFJvWlNCMllXeDFaU0J2WmlCaElIQnliM0JsY25SNUlHbHVJR0VnWm5WMGRYSmxJSFIxY200dVhHNGdLaUJBY0dGeVlXMGdiMkpxWldOMElDQWdJSEJ5YjIxcGMyVWdiM0lnYVcxdFpXUnBZWFJsSUhKbFptVnlaVzVqWlNCbWIzSWdkR0Z5WjJWMElHOWlhbVZqZEZ4dUlDb2dRSEJoY21GdElHNWhiV1VnSUNBZ0lDQnVZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJR2RsZEZ4dUlDb2dRSEpsZEhWeWJpQndjbTl0YVhObElHWnZjaUIwYUdVZ2NISnZjR1Z5ZEhrZ2RtRnNkV1ZjYmlBcUwxeHVVUzVuWlhRZ1BTQm1kVzVqZEdsdmJpQW9iMkpxWldOMExDQnJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVU2h2WW1wbFkzUXBMbVJwYzNCaGRHTm9LRndpWjJWMFhDSXNJRnRyWlhsZEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtZGxkQ0E5SUdaMWJtTjBhVzl1SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVrYVhOd1lYUmphQ2hjSW1kbGRGd2lMQ0JiYTJWNVhTazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlGTmxkSE1nZEdobElIWmhiSFZsSUc5bUlHRWdjSEp2Y0dWeWRIa2dhVzRnWVNCbWRYUjFjbVVnZEhWeWJpNWNiaUFxSUVCd1lYSmhiU0J2WW1wbFkzUWdJQ0FnY0hKdmJXbHpaU0J2Y2lCcGJXMWxaR2xoZEdVZ2NtVm1aWEpsYm1ObElHWnZjaUJ2WW1wbFkzUWdiMkpxWldOMFhHNGdLaUJBY0dGeVlXMGdibUZ0WlNBZ0lDQWdJRzVoYldVZ2IyWWdjSEp2Y0dWeWRIa2dkRzhnYzJWMFhHNGdLaUJBY0dGeVlXMGdkbUZzZFdVZ0lDQWdJRzVsZHlCMllXeDFaU0J2WmlCd2NtOXdaWEowZVZ4dUlDb2dRSEpsZEhWeWJpQndjbTl0YVhObElHWnZjaUIwYUdVZ2NtVjBkWEp1SUhaaGJIVmxYRzRnS2k5Y2JsRXVjMlYwSUQwZ1puVnVZM1JwYjI0Z0tHOWlhbVZqZEN3Z2EyVjVMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCUktHOWlhbVZqZENrdVpHbHpjR0YwWTJnb1hDSnpaWFJjSWl3Z1cydGxlU3dnZG1Gc2RXVmRLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbk5sZENBOUlHWjFibU4wYVc5dUlDaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WkdsemNHRjBZMmdvWENKelpYUmNJaXdnVzJ0bGVTd2dkbUZzZFdWZEtUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1JHVnNaWFJsY3lCaElIQnliM0JsY25SNUlHbHVJR0VnWm5WMGRYSmxJSFIxY200dVhHNGdLaUJBY0dGeVlXMGdiMkpxWldOMElDQWdJSEJ5YjIxcGMyVWdiM0lnYVcxdFpXUnBZWFJsSUhKbFptVnlaVzVqWlNCbWIzSWdkR0Z5WjJWMElHOWlhbVZqZEZ4dUlDb2dRSEJoY21GdElHNWhiV1VnSUNBZ0lDQnVZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJR1JsYkdWMFpWeHVJQ29nUUhKbGRIVnliaUJ3Y205dGFYTmxJR1p2Y2lCMGFHVWdjbVYwZFhKdUlIWmhiSFZsWEc0Z0tpOWNibEV1WkdWc0lEMGdMeThnV0ZoWUlHeGxaMkZqZVZ4dVVWdGNJbVJsYkdWMFpWd2lYU0E5SUdaMWJtTjBhVzl1SUNodlltcGxZM1FzSUd0bGVTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCUktHOWlhbVZqZENrdVpHbHpjR0YwWTJnb1hDSmtaV3hsZEdWY0lpd2dXMnRsZVYwcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdVpHVnNJRDBnTHk4Z1dGaFlJR3hsWjJGamVWeHVVSEp2YldselpTNXdjbTkwYjNSNWNHVmJYQ0prWld4bGRHVmNJbDBnUFNCbWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WkdsemNHRjBZMmdvWENKa1pXeGxkR1ZjSWl3Z1cydGxlVjBwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJKYm5admEyVnpJR0VnYldWMGFHOWtJR2x1SUdFZ1puVjBkWEpsSUhSMWNtNHVYRzRnS2lCQWNHRnlZVzBnYjJKcVpXTjBJQ0FnSUhCeWIyMXBjMlVnYjNJZ2FXMXRaV1JwWVhSbElISmxabVZ5Wlc1alpTQm1iM0lnZEdGeVoyVjBJRzlpYW1WamRGeHVJQ29nUUhCaGNtRnRJRzVoYldVZ0lDQWdJQ0J1WVcxbElHOW1JRzFsZEdodlpDQjBieUJwYm5admEyVmNiaUFxSUVCd1lYSmhiU0IyWVd4MVpTQWdJQ0FnWVNCMllXeDFaU0IwYnlCd2IzTjBMQ0IwZVhCcFkyRnNiSGtnWVc0Z1lYSnlZWGtnYjJaY2JpQXFJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzUyYjJOaGRHbHZiaUJoY21kMWJXVnVkSE1nWm05eUlIQnliMjFwYzJWeklIUm9ZWFJjYmlBcUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYSmxJSFZzZEdsdFlYUmxiSGtnWW1GamEyVmtJSGRwZEdnZ1lISmxjMjlzZG1WZ0lIWmhiSFZsY3l4Y2JpQXFJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWE1nYjNCd2IzTmxaQ0IwYnlCMGFHOXpaU0JpWVdOclpXUWdkMmwwYUNCVlVreHpYRzRnS2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhkb1pYSmxhVzRnZEdobElIQnZjM1JsWkNCMllXeDFaU0JqWVc0Z1ltVWdZVzU1WEc0Z0tpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lFcFRUMDRnYzJWeWFXRnNhWHBoWW14bElHOWlhbVZqZEM1Y2JpQXFJRUJ5WlhSMWNtNGdjSEp2YldselpTQm1iM0lnZEdobElISmxkSFZ5YmlCMllXeDFaVnh1SUNvdlhHNHZMeUJpYjNWdVpDQnNiMk5oYkd4NUlHSmxZMkYxYzJVZ2FYUWdhWE1nZFhObFpDQmllU0J2ZEdobGNpQnRaWFJvYjJSelhHNVJMbTFoY0hCc2VTQTlJQzh2SUZoWVdDQkJjeUJ3Y205d2IzTmxaQ0JpZVNCY0lsSmxaSE5oYm1SeWIxd2lYRzVSTG5CdmMzUWdQU0JtZFc1amRHbHZiaUFvYjJKcVpXTjBMQ0J1WVcxbExDQmhjbWR6S1NCN1hHNGdJQ0FnY21WMGRYSnVJRkVvYjJKcVpXTjBLUzVrYVhOd1lYUmphQ2hjSW5CdmMzUmNJaXdnVzI1aGJXVXNJR0Z5WjNOZEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtMWhjSEJzZVNBOUlDOHZJRmhZV0NCQmN5QndjbTl3YjNObFpDQmllU0JjSWxKbFpITmhibVJ5YjF3aVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXdiM04wSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VzSUdGeVozTXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVrYVhOd1lYUmphQ2hjSW5CdmMzUmNJaXdnVzI1aGJXVXNJR0Z5WjNOZEtUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1NXNTJiMnRsY3lCaElHMWxkR2h2WkNCcGJpQmhJR1oxZEhWeVpTQjBkWEp1TGx4dUlDb2dRSEJoY21GdElHOWlhbVZqZENBZ0lDQndjbTl0YVhObElHOXlJR2x0YldWa2FXRjBaU0J5WldabGNtVnVZMlVnWm05eUlIUmhjbWRsZENCdlltcGxZM1JjYmlBcUlFQndZWEpoYlNCdVlXMWxJQ0FnSUNBZ2JtRnRaU0J2WmlCdFpYUm9iMlFnZEc4Z2FXNTJiMnRsWEc0Z0tpQkFjR0Z5WVcwZ0xpNHVZWEpuY3lBZ0lHRnljbUY1SUc5bUlHbHVkbTlqWVhScGIyNGdZWEpuZFcxbGJuUnpYRzRnS2lCQWNtVjBkWEp1SUhCeWIyMXBjMlVnWm05eUlIUm9aU0J5WlhSMWNtNGdkbUZzZFdWY2JpQXFMMXh1VVM1elpXNWtJRDBnTHk4Z1dGaFlJRTFoY21zZ1RXbHNiR1Z5SjNNZ2NISnZjRzl6WldRZ2NHRnliR0Z1WTJWY2JsRXViV05oYkd3Z1BTQXZMeUJZV0ZnZ1FYTWdjSEp2Y0c5elpXUWdZbmtnWENKU1pXUnpZVzVrY205Y0lseHVVUzVwYm5admEyVWdQU0JtZFc1amRHbHZiaUFvYjJKcVpXTjBMQ0J1WVcxbElDOHFMaTR1WVhKbmN5b3ZLU0I3WEc0Z0lDQWdjbVYwZFhKdUlGRW9iMkpxWldOMEtTNWthWE53WVhSamFDaGNJbkJ2YzNSY0lpd2dXMjVoYldVc0lHRnljbUY1WDNOc2FXTmxLR0Z5WjNWdFpXNTBjeXdnTWlsZEtUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExuTmxibVFnUFNBdkx5QllXRmdnVFdGeWF5Qk5hV3hzWlhJbmN5QndjbTl3YjNObFpDQndZWEpzWVc1alpWeHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXViV05oYkd3Z1BTQXZMeUJZV0ZnZ1FYTWdjSEp2Y0c5elpXUWdZbmtnWENKU1pXUnpZVzVrY205Y0lseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVhVzUyYjJ0bElEMGdablZ1WTNScGIyNGdLRzVoYldVZ0x5b3VMaTVoY21kektpOHBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVrYVhOd1lYUmphQ2hjSW5CdmMzUmNJaXdnVzI1aGJXVXNJR0Z5Y21GNVgzTnNhV05sS0dGeVozVnRaVzUwY3l3Z01TbGRLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dRWEJ3YkdsbGN5QjBhR1VnY0hKdmJXbHpaV1FnWm5WdVkzUnBiMjRnYVc0Z1lTQm1kWFIxY21VZ2RIVnliaTVjYmlBcUlFQndZWEpoYlNCdlltcGxZM1FnSUNBZ2NISnZiV2x6WlNCdmNpQnBiVzFsWkdsaGRHVWdjbVZtWlhKbGJtTmxJR1p2Y2lCMFlYSm5aWFFnWm5WdVkzUnBiMjVjYmlBcUlFQndZWEpoYlNCaGNtZHpJQ0FnSUNBZ1lYSnlZWGtnYjJZZ1lYQndiR2xqWVhScGIyNGdZWEpuZFcxbGJuUnpYRzRnS2k5Y2JsRXVabUZ3Y0d4NUlEMGdablZ1WTNScGIyNGdLRzlpYW1WamRDd2dZWEpuY3lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJSS0c5aWFtVmpkQ2t1WkdsemNHRjBZMmdvWENKaGNIQnNlVndpTENCYmRtOXBaQ0F3TENCaGNtZHpYU2s3WEc1OU8xeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVtWVhCd2JIa2dQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVJwYzNCaGRHTm9LRndpWVhCd2JIbGNJaXdnVzNadmFXUWdNQ3dnWVhKbmMxMHBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRZV3hzY3lCMGFHVWdjSEp2YldselpXUWdablZ1WTNScGIyNGdhVzRnWVNCbWRYUjFjbVVnZEhWeWJpNWNiaUFxSUVCd1lYSmhiU0J2WW1wbFkzUWdJQ0FnY0hKdmJXbHpaU0J2Y2lCcGJXMWxaR2xoZEdVZ2NtVm1aWEpsYm1ObElHWnZjaUIwWVhKblpYUWdablZ1WTNScGIyNWNiaUFxSUVCd1lYSmhiU0F1TGk1aGNtZHpJQ0FnWVhKeVlYa2diMllnWVhCd2JHbGpZWFJwYjI0Z1lYSm5kVzFsYm5SelhHNGdLaTljYmxGYlhDSjBjbmxjSWwwZ1BWeHVVUzVtWTJGc2JDQTlJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUWdMeW9nTGk0dVlYSm5jeW92S1NCN1hHNGdJQ0FnY21WMGRYSnVJRkVvYjJKcVpXTjBLUzVrYVhOd1lYUmphQ2hjSW1Gd2NHeDVYQ0lzSUZ0MmIybGtJREFzSUdGeWNtRjVYM05zYVdObEtHRnlaM1Z0Wlc1MGN5d2dNU2xkS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG1aallXeHNJRDBnWm5WdVkzUnBiMjRnS0M4cUxpNHVZWEpuY3lvdktTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR2x6Y0dGMFkyZ29YQ0poY0hCc2VWd2lMQ0JiZG05cFpDQXdMQ0JoY25KaGVWOXpiR2xqWlNoaGNtZDFiV1Z1ZEhNcFhTazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFSnBibVJ6SUhSb1pTQndjbTl0YVhObFpDQm1kVzVqZEdsdmJpd2dkSEpoYm5ObWIzSnRhVzVuSUhKbGRIVnliaUIyWVd4MVpYTWdhVzUwYnlCaElHWjFiR1pwYkd4bFpGeHVJQ29nY0hKdmJXbHpaU0JoYm1RZ2RHaHliM2R1SUdWeWNtOXljeUJwYm5SdklHRWdjbVZxWldOMFpXUWdiMjVsTGx4dUlDb2dRSEJoY21GdElHOWlhbVZqZENBZ0lDQndjbTl0YVhObElHOXlJR2x0YldWa2FXRjBaU0J5WldabGNtVnVZMlVnWm05eUlIUmhjbWRsZENCbWRXNWpkR2x2Ymx4dUlDb2dRSEJoY21GdElDNHVMbUZ5WjNNZ0lDQmhjbkpoZVNCdlppQmhjSEJzYVdOaGRHbHZiaUJoY21kMWJXVnVkSE5jYmlBcUwxeHVVUzVtWW1sdVpDQTlJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUWdMeW91TGk1aGNtZHpLaThwSUh0Y2JpQWdJQ0IyWVhJZ2NISnZiV2x6WlNBOUlGRW9iMkpxWldOMEtUdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHRnljbUY1WDNOc2FXTmxLR0Z5WjNWdFpXNTBjeXdnTVNrN1hHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJR1ppYjNWdVpDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ5YjIxcGMyVXVaR2x6Y0dGMFkyZ29YQ0poY0hCc2VWd2lMQ0JiWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuY3k1amIyNWpZWFFvWVhKeVlYbGZjMnhwWTJVb1lYSm5kVzFsYm5SektTbGNiaUFnSUNBZ0lDQWdYU2s3WEc0Z0lDQWdmVHRjYm4wN1hHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNW1ZbWx1WkNBOUlHWjFibU4wYVc5dUlDZ3ZLaTR1TG1GeVozTXFMeWtnZTF4dUlDQWdJSFpoY2lCd2NtOXRhWE5sSUQwZ2RHaHBjenRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJR0Z5Y21GNVgzTnNhV05sS0dGeVozVnRaVzUwY3lrN1hHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJR1ppYjNWdVpDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEJ5YjIxcGMyVXVaR2x6Y0dGMFkyZ29YQ0poY0hCc2VWd2lMQ0JiWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuY3k1amIyNWpZWFFvWVhKeVlYbGZjMnhwWTJVb1lYSm5kVzFsYm5SektTbGNiaUFnSUNBZ0lDQWdYU2s3WEc0Z0lDQWdmVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dVbVZ4ZFdWemRITWdkR2hsSUc1aGJXVnpJRzltSUhSb1pTQnZkMjVsWkNCd2NtOXdaWEowYVdWeklHOW1JR0VnY0hKdmJXbHpaV1JjYmlBcUlHOWlhbVZqZENCcGJpQmhJR1oxZEhWeVpTQjBkWEp1TGx4dUlDb2dRSEJoY21GdElHOWlhbVZqZENBZ0lDQndjbTl0YVhObElHOXlJR2x0YldWa2FXRjBaU0J5WldabGNtVnVZMlVnWm05eUlIUmhjbWRsZENCdlltcGxZM1JjYmlBcUlFQnlaWFIxY200Z2NISnZiV2x6WlNCbWIzSWdkR2hsSUd0bGVYTWdiMllnZEdobElHVjJaVzUwZFdGc2JIa2djMlYwZEd4bFpDQnZZbXBsWTNSY2JpQXFMMXh1VVM1clpYbHpJRDBnWm5WdVkzUnBiMjRnS0c5aWFtVmpkQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQlJLRzlpYW1WamRDa3VaR2x6Y0dGMFkyZ29YQ0pyWlhselhDSXNJRnRkS1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG10bGVYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpHbHpjR0YwWTJnb1hDSnJaWGx6WENJc0lGdGRLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dWSFZ5Ym5NZ1lXNGdZWEp5WVhrZ2IyWWdjSEp2YldselpYTWdhVzUwYnlCaElIQnliMjFwYzJVZ1ptOXlJR0Z1SUdGeWNtRjVMaUFnU1dZZ1lXNTVJRzltWEc0Z0tpQjBhR1VnY0hKdmJXbHpaWE1nWjJWMGN5QnlaV3BsWTNSbFpDd2dkR2hsSUhkb2IyeGxJR0Z5Y21GNUlHbHpJSEpsYW1WamRHVmtJR2x0YldWa2FXRjBaV3g1TGx4dUlDb2dRSEJoY21GdElIdEJjbkpoZVNwOUlHRnVJR0Z5Y21GNUlDaHZjaUJ3Y205dGFYTmxJR1p2Y2lCaGJpQmhjbkpoZVNrZ2IyWWdkbUZzZFdWeklDaHZjbHh1SUNvZ2NISnZiV2x6WlhNZ1ptOXlJSFpoYkhWbGN5bGNiaUFxSUVCeVpYUjFjbTV6SUdFZ2NISnZiV2x6WlNCbWIzSWdZVzRnWVhKeVlYa2diMllnZEdobElHTnZjbkpsYzNCdmJtUnBibWNnZG1Gc2RXVnpYRzRnS2k5Y2JpOHZJRUo1SUUxaGNtc2dUV2xzYkdWeVhHNHZMeUJvZEhSd09pOHZkMmxyYVM1bFkyMWhjMk55YVhCMExtOXlaeTlrYjJ0MUxuQm9jRDlwWkQxemRISmhkMjFoYmpwamIyNWpkWEp5Wlc1amVTWnlaWFk5TVRNd09EYzNOalV5TVNOaGJHeG1kV3htYVd4c1pXUmNibEV1WVd4c0lEMGdZV3hzTzF4dVpuVnVZM1JwYjI0Z1lXeHNLSEJ5YjIxcGMyVnpLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIZG9aVzRvY0hKdmJXbHpaWE1zSUdaMWJtTjBhVzl1SUNod2NtOXRhWE5sY3lrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY0dWdVpHbHVaME52ZFc1MElEMGdNRHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmxabVZ5Y21Wa0lEMGdaR1ZtWlhJb0tUdGNiaUFnSUNBZ0lDQWdZWEp5WVhsZmNtVmtkV05sS0hCeWIyMXBjMlZ6TENCbWRXNWpkR2x2YmlBb2RXNWtaV1pwYm1Wa0xDQndjbTl0YVhObExDQnBibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlITnVZWEJ6YUc5ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHpVSEp2YldselpTaHdjbTl0YVhObEtTQW1KbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2h6Ym1Gd2MyaHZkQ0E5SUhCeWIyMXBjMlV1YVc1emNHVmpkQ2dwS1M1emRHRjBaU0E5UFQwZ1hDSm1kV3htYVd4c1pXUmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2YldselpYTmJhVzVrWlhoZElEMGdjMjVoY0hOb2IzUXVkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NyY0dWdVpHbHVaME52ZFc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIZG9aVzRvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2YldselpYTmJhVzVrWlhoZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9MUzF3Wlc1a2FXNW5RMjkxYm5RZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV1psY25KbFpDNXlaWE52YkhabEtIQnliMjFwYzJWektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZtWlhKeVpXUXVjbVZxWldOMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUFvY0hKdlozSmxjM01wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSbFptVnljbVZrTG01dmRHbG1lU2g3SUdsdVpHVjRPaUJwYm1SbGVDd2dkbUZzZFdVNklIQnliMmR5WlhOeklIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTd2dkbTlwWkNBd0tUdGNiaUFnSUNBZ0lDQWdhV1lnS0hCbGJtUnBibWREYjNWdWRDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVpYSnlaV1F1Y21WemIyeDJaU2h3Y205dGFYTmxjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSbFptVnljbVZrTG5CeWIyMXBjMlU3WEc0Z0lDQWdmU2s3WEc1OVhHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbUZzYkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1lXeHNLSFJvYVhNcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUhSb1pTQm1hWEp6ZENCeVpYTnZiSFpsWkNCd2NtOXRhWE5sSUc5bUlHRnVJR0Z5Y21GNUxpQlFjbWx2Y2lCeVpXcGxZM1JsWkNCd2NtOXRhWE5sY3lCaGNtVmNiaUFxSUdsbmJtOXlaV1F1SUNCU1pXcGxZM1J6SUc5dWJIa2dhV1lnWVd4c0lIQnliMjFwYzJWeklHRnlaU0J5WldwbFkzUmxaQzVjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGtxZlNCaGJpQmhjbkpoZVNCamIyNTBZV2x1YVc1bklIWmhiSFZsY3lCdmNpQndjbTl0YVhObGN5Qm1iM0lnZG1Gc2RXVnpYRzRnS2lCQWNtVjBkWEp1Y3lCaElIQnliMjFwYzJVZ1puVnNabWxzYkdWa0lIZHBkR2dnZEdobElIWmhiSFZsSUc5bUlIUm9aU0JtYVhKemRDQnlaWE52YkhabFpDQndjbTl0YVhObExGeHVJQ29nYjNJZ1lTQnlaV3BsWTNSbFpDQndjbTl0YVhObElHbG1JR0ZzYkNCd2NtOXRhWE5sY3lCaGNtVWdjbVZxWldOMFpXUXVYRzRnS2k5Y2JsRXVZVzU1SUQwZ1lXNTVPMXh1WEc1bWRXNWpkR2x2YmlCaGJua29jSEp2YldselpYTXBJSHRjYmlBZ0lDQnBaaUFvY0hKdmJXbHpaWE11YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlJMbkpsYzI5c2RtVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWkdWbVpYSnlaV1FnUFNCUkxtUmxabVZ5S0NrN1hHNGdJQ0FnZG1GeUlIQmxibVJwYm1kRGIzVnVkQ0E5SURBN1hHNGdJQ0FnWVhKeVlYbGZjbVZrZFdObEtIQnliMjFwYzJWekxDQm1kVzVqZEdsdmJpQW9jSEpsZGl3Z1kzVnljbVZ1ZEN3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5YjIxcGMyVWdQU0J3Y205dGFYTmxjMXRwYm1SbGVGMDdYRzVjYmlBZ0lDQWdJQ0FnY0dWdVpHbHVaME52ZFc1MEt5czdYRzVjYmlBZ0lDQWdJQ0FnZDJobGJpaHdjbTl0YVhObExDQnZia1oxYkdacGJHeGxaQ3dnYjI1U1pXcGxZM1JsWkN3Z2IyNVFjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJRzl1Um5Wc1ptbHNiR1ZrS0hKbGMzVnNkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZtWlhKeVpXUXVjbVZ6YjJ4MlpTaHlaWE4xYkhRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJRzl1VW1WcVpXTjBaV1FvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Wlc1a2FXNW5RMjkxYm5RdExUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdaVzVrYVc1blEyOTFiblFnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWldabGNuSmxaQzV5WldwbFkzUW9ibVYzSUVWeWNtOXlLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY0lrTmhiaWQwSUdkbGRDQm1kV3htYVd4c2JXVnVkQ0IyWVd4MVpTQm1jbTl0SUdGdWVTQndjbTl0YVhObExDQmhiR3dnWENJZ0sxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSW5CeWIyMXBjMlZ6SUhkbGNtVWdjbVZxWldOMFpXUXVYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCdmJsQnliMmR5WlhOektIQnliMmR5WlhOektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmxjbkpsWkM1dWIzUnBabmtvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdVpHVjRPaUJwYm1SbGVDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN3Z2RXNWtaV1pwYm1Wa0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCa1pXWmxjbkpsWkM1d2NtOXRhWE5sTzF4dWZWeHVYRzVRY205dGFYTmxMbkJ5YjNSdmRIbHdaUzVoYm5rZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHRnVlU2gwYUdsektUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1YyRnBkSE1nWm05eUlHRnNiQ0J3Y205dGFYTmxjeUIwYnlCaVpTQnpaWFIwYkdWa0xDQmxhWFJvWlhJZ1puVnNabWxzYkdWa0lHOXlYRzRnS2lCeVpXcGxZM1JsWkM0Z0lGUm9hWE1nYVhNZ1pHbHpkR2x1WTNRZ1puSnZiU0JnWVd4c1lDQnphVzVqWlNCMGFHRjBJSGR2ZFd4a0lITjBiM0JjYmlBcUlIZGhhWFJwYm1jZ1lYUWdkR2hsSUdacGNuTjBJSEpsYW1WamRHbHZiaTRnSUZSb1pTQndjbTl0YVhObElISmxkSFZ5Ym1Wa0lHSjVYRzRnS2lCZ1lXeHNVbVZ6YjJ4MlpXUmdJSGRwYkd3Z2JtVjJaWElnWW1VZ2NtVnFaV04wWldRdVhHNGdLaUJBY0dGeVlXMGdjSEp2YldselpYTWdZU0J3Y205dGFYTmxJR1p2Y2lCaGJpQmhjbkpoZVNBb2IzSWdZVzRnWVhKeVlYa3BJRzltSUhCeWIyMXBjMlZ6WEc0Z0tpQW9iM0lnZG1Gc2RXVnpLVnh1SUNvZ1FISmxkSFZ5YmlCaElIQnliMjFwYzJVZ1ptOXlJR0Z1SUdGeWNtRjVJRzltSUhCeWIyMXBjMlZ6WEc0Z0tpOWNibEV1WVd4c1VtVnpiMngyWldRZ1BTQmtaWEJ5WldOaGRHVW9ZV3hzVW1WemIyeDJaV1FzSUZ3aVlXeHNVbVZ6YjJ4MlpXUmNJaXdnWENKaGJHeFRaWFIwYkdWa1hDSXBPMXh1Wm5WdVkzUnBiMjRnWVd4c1VtVnpiMngyWldRb2NISnZiV2x6WlhNcElIdGNiaUFnSUNCeVpYUjFjbTRnZDJobGJpaHdjbTl0YVhObGN5d2dablZ1WTNScGIyNGdLSEJ5YjIxcGMyVnpLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIyMXBjMlZ6SUQwZ1lYSnlZWGxmYldGd0tIQnliMjFwYzJWekxDQlJLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSGRvWlc0b1lXeHNLR0Z5Y21GNVgyMWhjQ2h3Y205dGFYTmxjeXdnWm5WdVkzUnBiMjRnS0hCeWIyMXBjMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjNhR1Z1S0hCeWIyMXBjMlVzSUc1dmIzQXNJRzV2YjNBcE8xeHVJQ0FnSUNBZ0lDQjlLU2tzSUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxjenRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlNrN1hHNTlYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG1Gc2JGSmxjMjlzZG1Wa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmhiR3hTWlhOdmJIWmxaQ2gwYUdsektUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1FITmxaU0JRY205dGFYTmxJMkZzYkZObGRIUnNaV1JjYmlBcUwxeHVVUzVoYkd4VFpYUjBiR1ZrSUQwZ1lXeHNVMlYwZEd4bFpEdGNibVoxYm1OMGFXOXVJR0ZzYkZObGRIUnNaV1FvY0hKdmJXbHpaWE1wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVU2h3Y205dGFYTmxjeWt1WVd4c1UyVjBkR3hsWkNncE8xeHVmVnh1WEc0dktpcGNiaUFxSUZSMWNtNXpJR0Z1SUdGeWNtRjVJRzltSUhCeWIyMXBjMlZ6SUdsdWRHOGdZU0J3Y205dGFYTmxJR1p2Y2lCaGJpQmhjbkpoZVNCdlppQjBhR1ZwY2lCemRHRjBaWE1nS0dGelhHNGdLaUJ5WlhSMWNtNWxaQ0JpZVNCZ2FXNXpjR1ZqZEdBcElIZG9aVzRnZEdobGVTQm9ZWFpsSUdGc2JDQnpaWFIwYkdWa0xseHVJQ29nUUhCaGNtRnRJSHRCY25KaGVWdEJibmtxWFgwZ2RtRnNkV1Z6SUdGdUlHRnljbUY1SUNodmNpQndjbTl0YVhObElHWnZjaUJoYmlCaGNuSmhlU2tnYjJZZ2RtRnNkV1Z6SUNodmNseHVJQ29nY0hKdmJXbHpaWE1nWm05eUlIWmhiSFZsY3lsY2JpQXFJRUJ5WlhSMWNtNXpJSHRCY25KaGVWdFRkR0YwWlYxOUlHRnVJR0Z5Y21GNUlHOW1JSE4wWVhSbGN5Qm1iM0lnZEdobElISmxjM0JsWTNScGRtVWdkbUZzZFdWekxseHVJQ292WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1aGJHeFRaWFIwYkdWa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5Sb1pXNG9ablZ1WTNScGIyNGdLSEJ5YjIxcGMyVnpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoYkd3b1lYSnlZWGxmYldGd0tIQnliMjFwYzJWekxDQm1kVzVqZEdsdmJpQW9jSEp2YldselpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZiV2x6WlNBOUlGRW9jSEp2YldselpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCeVpXZGhjbVJzWlhOektDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbTl0YVhObExtbHVjM0JsWTNRb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbTl0YVhObExuUm9aVzRvY21WbllYSmtiR1Z6Y3l3Z2NtVm5ZWEprYkdWemN5azdYRzRnSUNBZ0lDQWdJSDBwS1R0Y2JpQWdJQ0I5S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUTJGd2RIVnlaWE1nZEdobElHWmhhV3gxY21VZ2IyWWdZU0J3Y205dGFYTmxMQ0JuYVhacGJtY2dZVzRnYjNCdmNuUjFibWwwZVNCMGJ5QnlaV052ZG1WeVhHNGdLaUIzYVhSb0lHRWdZMkZzYkdKaFkyc3VJQ0JKWmlCMGFHVWdaMmwyWlc0Z2NISnZiV2x6WlNCcGN5Qm1kV3htYVd4c1pXUXNJSFJvWlNCeVpYUjFjbTVsWkZ4dUlDb2djSEp2YldselpTQnBjeUJtZFd4bWFXeHNaV1F1WEc0Z0tpQkFjR0Z5WVcwZ2UwRnVlU3A5SUhCeWIyMXBjMlVnWm05eUlITnZiV1YwYUdsdVoxeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnNnZEc4Z1puVnNabWxzYkNCMGFHVWdjbVYwZFhKdVpXUWdjSEp2YldselpTQnBaaUIwYUdWY2JpQXFJR2RwZG1WdUlIQnliMjFwYzJVZ2FYTWdjbVZxWldOMFpXUmNiaUFxSUVCeVpYUjFjbTV6SUdFZ2NISnZiV2x6WlNCbWIzSWdkR2hsSUhKbGRIVnliaUIyWVd4MVpTQnZaaUIwYUdVZ1kyRnNiR0poWTJ0Y2JpQXFMMXh1VVM1bVlXbHNJRDBnTHk4Z1dGaFlJR3hsWjJGamVWeHVVVnRjSW1OaGRHTm9YQ0pkSUQwZ1puVnVZM1JwYjI0Z0tHOWlhbVZqZEN3Z2NtVnFaV04wWldRcElIdGNiaUFnSUNCeVpYUjFjbTRnVVNodlltcGxZM1FwTG5Sb1pXNG9kbTlwWkNBd0xDQnlaV3BsWTNSbFpDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNW1ZV2xzSUQwZ0x5OGdXRmhZSUd4bFoyRmplVnh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1ZiWENKallYUmphRndpWFNBOUlHWjFibU4wYVc5dUlDaHlaV3BsWTNSbFpDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblJvWlc0b2RtOXBaQ0F3TENCeVpXcGxZM1JsWkNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVGMGRHRmphR1Z6SUdFZ2JHbHpkR1Z1WlhJZ2RHaGhkQ0JqWVc0Z2NtVnpjRzl1WkNCMGJ5QndjbTluY21WemN5QnViM1JwWm1sallYUnBiMjV6SUdaeWIyMGdZVnh1SUNvZ2NISnZiV2x6WlNkeklHOXlhV2RwYm1GMGFXNW5JR1JsWm1WeWNtVmtMaUJVYUdseklHeHBjM1JsYm1WeUlISmxZMlZwZG1WeklIUm9aU0JsZUdGamRDQmhjbWQxYldWdWRITmNiaUFxSUhCaGMzTmxaQ0IwYnlCZ1lHUmxabVZ5Y21Wa0xtNXZkR2xtZVdCZ0xseHVJQ29nUUhCaGNtRnRJSHRCYm5rcWZTQndjbTl0YVhObElHWnZjaUJ6YjIxbGRHaHBibWRjYmlBcUlFQndZWEpoYlNCN1JuVnVZM1JwYjI1OUlHTmhiR3hpWVdOcklIUnZJSEpsWTJWcGRtVWdZVzU1SUhCeWIyZHlaWE56SUc1dmRHbG1hV05oZEdsdmJuTmNiaUFxSUVCeVpYUjFjbTV6SUhSb1pTQm5hWFpsYmlCd2NtOXRhWE5sTENCMWJtTm9ZVzVuWldSY2JpQXFMMXh1VVM1d2NtOW5jbVZ6Y3lBOUlIQnliMmR5WlhOek8xeHVablZ1WTNScGIyNGdjSEp2WjNKbGMzTW9iMkpxWldOMExDQndjbTluY21WemMyVmtLU0I3WEc0Z0lDQWdjbVYwZFhKdUlGRW9iMkpxWldOMEtTNTBhR1Z1S0hadmFXUWdNQ3dnZG05cFpDQXdMQ0J3Y205bmNtVnpjMlZrS1R0Y2JuMWNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1Y0hKdlozSmxjM01nUFNCbWRXNWpkR2x2YmlBb2NISnZaM0psYzNObFpDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblJvWlc0b2RtOXBaQ0F3TENCMmIybGtJREFzSUhCeWIyZHlaWE56WldRcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCUWNtOTJhV1JsY3lCaGJpQnZjSEJ2Y25SMWJtbDBlU0IwYnlCdlluTmxjblpsSUhSb1pTQnpaWFIwYkdsdVp5QnZaaUJoSUhCeWIyMXBjMlVzWEc0Z0tpQnlaV2RoY21Sc1pYTnpJRzltSUhkb1pYUm9aWElnZEdobElIQnliMjFwYzJVZ2FYTWdablZzWm1sc2JHVmtJRzl5SUhKbGFtVmpkR1ZrTGlBZ1JtOXlkMkZ5WkhOY2JpQXFJSFJvWlNCeVpYTnZiSFYwYVc5dUlIUnZJSFJvWlNCeVpYUjFjbTVsWkNCd2NtOXRhWE5sSUhkb1pXNGdkR2hsSUdOaGJHeGlZV05ySUdseklHUnZibVV1WEc0Z0tpQlVhR1VnWTJGc2JHSmhZMnNnWTJGdUlISmxkSFZ5YmlCaElIQnliMjFwYzJVZ2RHOGdaR1ZtWlhJZ1kyOXRjR3hsZEdsdmJpNWNiaUFxSUVCd1lYSmhiU0I3UVc1NUtuMGdjSEp2YldselpWeHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWTJGc2JHSmhZMnNnZEc4Z2IySnpaWEoyWlNCMGFHVWdjbVZ6YjJ4MWRHbHZiaUJ2WmlCMGFHVWdaMmwyWlc1Y2JpQXFJSEJ5YjIxcGMyVXNJSFJoYTJWeklHNXZJR0Z5WjNWdFpXNTBjeTVjYmlBcUlFQnlaWFIxY201eklHRWdjSEp2YldselpTQm1iM0lnZEdobElISmxjMjlzZFhScGIyNGdiMllnZEdobElHZHBkbVZ1SUhCeWIyMXBjMlVnZDJobGJseHVJQ29nWUdCbWFXNWdZQ0JwY3lCa2IyNWxMbHh1SUNvdlhHNVJMbVpwYmlBOUlDOHZJRmhZV0NCc1pXZGhZM2xjYmxGYlhDSm1hVzVoYkd4NVhDSmRJRDBnWm5WdVkzUnBiMjRnS0c5aWFtVmpkQ3dnWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVU2h2WW1wbFkzUXBXMXdpWm1sdVlXeHNlVndpWFNoallXeHNZbUZqYXlrN1hHNTlPMXh1WEc1UWNtOXRhWE5sTG5CeWIzUnZkSGx3WlM1bWFXNGdQU0F2THlCWVdGZ2diR1ZuWVdONVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pWdGNJbVpwYm1Gc2JIbGNJbDBnUFNCbWRXNWpkR2x2YmlBb1kyRnNiR0poWTJzcElIdGNiaUFnSUNCallXeHNZbUZqYXlBOUlGRW9ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMblJvWlc0b1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXeHNZbUZqYXk1bVkyRnNiQ2dwTG5Sb1pXNG9ablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOUxDQm1kVzVqZEdsdmJpQW9jbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUZSUFJFOGdZWFIwWlcxd2RDQjBieUJ5WldONVkyeGxJSFJvWlNCeVpXcGxZM1JwYjI0Z2QybDBhQ0JjSW5Sb2FYTmNJaTVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05oYkd4aVlXTnJMbVpqWVd4c0tDa3VkR2hsYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ5WldGemIyNDdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDBwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJVWlhKdGFXNWhkR1Z6SUdFZ1kyaGhhVzRnYjJZZ2NISnZiV2x6WlhNc0lHWnZjbU5wYm1jZ2NtVnFaV04wYVc5dWN5QjBieUJpWlZ4dUlDb2dkR2h5YjNkdUlHRnpJR1Y0WTJWd2RHbHZibk11WEc0Z0tpQkFjR0Z5WVcwZ2UwRnVlU3A5SUhCeWIyMXBjMlVnWVhRZ2RHaGxJR1Z1WkNCdlppQmhJR05vWVdsdUlHOW1JSEJ5YjIxcGMyVnpYRzRnS2lCQWNtVjBkWEp1Y3lCdWIzUm9hVzVuWEc0Z0tpOWNibEV1Wkc5dVpTQTlJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUXNJR1oxYkdacGJHeGxaQ3dnY21WcVpXTjBaV1FzSUhCeWIyZHlaWE56S1NCN1hHNGdJQ0FnY21WMGRYSnVJRkVvYjJKcVpXTjBLUzVrYjI1bEtHWjFiR1pwYkd4bFpDd2djbVZxWldOMFpXUXNJSEJ5YjJkeVpYTnpLVHRjYm4wN1hHNWNibEJ5YjIxcGMyVXVjSEp2ZEc5MGVYQmxMbVJ2Ym1VZ1BTQm1kVzVqZEdsdmJpQW9ablZzWm1sc2JHVmtMQ0J5WldwbFkzUmxaQ3dnY0hKdlozSmxjM01wSUh0Y2JpQWdJQ0IyWVhJZ2IyNVZibWhoYm1Sc1pXUkZjbkp2Y2lBOUlHWjFibU4wYVc5dUlDaGxjbkp2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJtYjNKM1lYSmtJSFJ2SUdFZ1puVjBkWEpsSUhSMWNtNGdjMjhnZEdoaGRDQmdZSGRvWlc1Z1lGeHVJQ0FnSUNBZ0lDQXZMeUJrYjJWeklHNXZkQ0JqWVhSamFDQnBkQ0JoYm1RZ2RIVnliaUJwZENCcGJuUnZJR0VnY21WcVpXTjBhVzl1TGx4dUlDQWdJQ0FnSUNCUkxtNWxlSFJVYVdOcktHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhhMlZUZEdGamExUnlZV05sVEc5dVp5aGxjbkp2Y2l3Z2NISnZiV2x6WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1VTNXZibVZ5Y205eUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVUzV2Ym1WeWNtOXlLR1Z5Y205eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2daWEp5YjNJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNBdkx5QkJkbTlwWkNCMWJtNWxZMlZ6YzJGeWVTQmdibVY0ZEZScFkydGdhVzVuSUhacFlTQmhiaUIxYm01bFkyVnpjMkZ5ZVNCZ2QyaGxibUF1WEc0Z0lDQWdkbUZ5SUhCeWIyMXBjMlVnUFNCbWRXeG1hV3hzWldRZ2ZId2djbVZxWldOMFpXUWdmSHdnY0hKdlozSmxjM01nUDF4dUlDQWdJQ0FnSUNCMGFHbHpMblJvWlc0b1puVnNabWxzYkdWa0xDQnlaV3BsWTNSbFpDd2djSEp2WjNKbGMzTXBJRHBjYmlBZ0lDQWdJQ0FnZEdocGN6dGNibHh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdjSEp2WTJWemN5QTlQVDBnWENKdlltcGxZM1JjSWlBbUppQndjbTlqWlhOeklDWW1JSEJ5YjJObGMzTXVaRzl0WVdsdUtTQjdYRzRnSUNBZ0lDQWdJRzl1Vlc1b1lXNWtiR1ZrUlhKeWIzSWdQU0J3Y205alpYTnpMbVJ2YldGcGJpNWlhVzVrS0c5dVZXNW9ZVzVrYkdWa1JYSnliM0lwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjIxcGMyVXVkR2hsYmloMmIybGtJREFzSUc5dVZXNW9ZVzVrYkdWa1JYSnliM0lwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJEWVhWelpYTWdZU0J3Y205dGFYTmxJSFJ2SUdKbElISmxhbVZqZEdWa0lHbG1JR2wwSUdSdlpYTWdibTkwSUdkbGRDQm1kV3htYVd4c1pXUWdZbVZtYjNKbFhHNGdLaUJ6YjIxbElHMXBiR3hwYzJWamIyNWtjeUIwYVcxbElHOTFkQzVjYmlBcUlFQndZWEpoYlNCN1FXNTVLbjBnY0hKdmJXbHpaVnh1SUNvZ1FIQmhjbUZ0SUh0T2RXMWlaWEo5SUcxcGJHeHBjMlZqYjI1a2N5QjBhVzFsYjNWMFhHNGdLaUJBY0dGeVlXMGdlMEZ1ZVNwOUlHTjFjM1J2YlNCbGNuSnZjaUJ0WlhOellXZGxJRzl5SUVWeWNtOXlJRzlpYW1WamRDQW9iM0IwYVc5dVlXd3BYRzRnS2lCQWNtVjBkWEp1Y3lCaElIQnliMjFwYzJVZ1ptOXlJSFJvWlNCeVpYTnZiSFYwYVc5dUlHOW1JSFJvWlNCbmFYWmxiaUJ3Y205dGFYTmxJR2xtSUdsMElHbHpYRzRnS2lCbWRXeG1hV3hzWldRZ1ltVm1iM0psSUhSb1pTQjBhVzFsYjNWMExDQnZkR2hsY25kcGMyVWdjbVZxWldOMFpXUXVYRzRnS2k5Y2JsRXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUXNJRzF6TENCbGNuSnZjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQlJLRzlpYW1WamRDa3VkR2x0Wlc5MWRDaHRjeXdnWlhKeWIzSXBPMXh1ZlR0Y2JseHVVSEp2YldselpTNXdjbTkwYjNSNWNHVXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVJQ2h0Y3l3Z1pYSnliM0lwSUh0Y2JpQWdJQ0IyWVhJZ1pHVm1aWEp5WldRZ1BTQmtaV1psY2lncE8xeHVJQ0FnSUhaaGNpQjBhVzFsYjNWMFNXUWdQU0J6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGbGNuSnZjaUI4ZkNCY0luTjBjbWx1WjF3aUlEMDlQU0IwZVhCbGIyWWdaWEp5YjNJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWeWNtOXlJRDBnYm1WM0lFVnljbTl5S0dWeWNtOXlJSHg4SUZ3aVZHbHRaV1FnYjNWMElHRm1kR1Z5SUZ3aUlDc2diWE1nS3lCY0lpQnRjMXdpS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z5Y205eUxtTnZaR1VnUFNCY0lrVlVTVTFGUkU5VlZGd2lPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdSbFptVnljbVZrTG5KbGFtVmpkQ2hsY25KdmNpazdYRzRnSUNBZ2ZTd2diWE1wTzF4dVhHNGdJQ0FnZEdocGN5NTBhR1Z1S0daMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCamJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRFbGtLVHRjYmlBZ0lDQWdJQ0FnWkdWbVpYSnlaV1F1Y21WemIyeDJaU2gyWVd4MVpTazdYRzRnSUNBZ2ZTd2dablZ1WTNScGIyNGdLR1Y0WTJWd2RHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCamJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRFbGtLVHRjYmlBZ0lDQWdJQ0FnWkdWbVpYSnlaV1F1Y21WcVpXTjBLR1Y0WTJWd2RHbHZiaWs3WEc0Z0lDQWdmU3dnWkdWbVpYSnlaV1F1Ym05MGFXWjVLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmtaV1psY25KbFpDNXdjbTl0YVhObE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTV6SUdFZ2NISnZiV2x6WlNCbWIzSWdkR2hsSUdkcGRtVnVJSFpoYkhWbElDaHZjaUJ3Y205dGFYTmxaQ0IyWVd4MVpTa3NJSE52YldWY2JpQXFJRzFwYkd4cGMyVmpiMjVrY3lCaFpuUmxjaUJwZENCeVpYTnZiSFpsWkM0Z1VHRnpjMlZ6SUhKbGFtVmpkR2x2Ym5NZ2FXMXRaV1JwWVhSbGJIa3VYRzRnS2lCQWNHRnlZVzBnZTBGdWVTcDlJSEJ5YjIxcGMyVmNiaUFxSUVCd1lYSmhiU0I3VG5WdFltVnlmU0J0YVd4c2FYTmxZMjl1WkhOY2JpQXFJRUJ5WlhSMWNtNXpJR0VnY0hKdmJXbHpaU0JtYjNJZ2RHaGxJSEpsYzI5c2RYUnBiMjRnYjJZZ2RHaGxJR2RwZG1WdUlIQnliMjFwYzJVZ1lXWjBaWElnYldsc2JHbHpaV052Ym1SelhHNGdLaUIwYVcxbElHaGhjeUJsYkdGd2MyVmtJSE5wYm1ObElIUm9aU0J5WlhOdmJIVjBhVzl1SUc5bUlIUm9aU0JuYVhabGJpQndjbTl0YVhObExseHVJQ29nU1dZZ2RHaGxJR2RwZG1WdUlIQnliMjFwYzJVZ2NtVnFaV04wY3l3Z2RHaGhkQ0JwY3lCd1lYTnpaV1FnYVcxdFpXUnBZWFJsYkhrdVhHNGdLaTljYmxFdVpHVnNZWGtnUFNCbWRXNWpkR2x2YmlBb2IySnFaV04wTENCMGFXMWxiM1YwS1NCN1hHNGdJQ0FnYVdZZ0tIUnBiV1Z2ZFhRZ1BUMDlJSFp2YVdRZ01Da2dlMXh1SUNBZ0lDQWdJQ0IwYVcxbGIzVjBJRDBnYjJKcVpXTjBPMXh1SUNBZ0lDQWdJQ0J2WW1wbFkzUWdQU0IyYjJsa0lEQTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJSS0c5aWFtVmpkQ2t1WkdWc1lYa29kR2x0Wlc5MWRDazdYRzU5TzF4dVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWtaV3hoZVNBOUlHWjFibU4wYVc5dUlDaDBhVzFsYjNWMEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkR2hsYmlobWRXNWpkR2x2YmlBb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1JsWm1WeWNtVmtJRDBnWkdWbVpYSW9LVHRjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmxjbkpsWkM1eVpYTnZiSFpsS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnZlN3Z2RHbHRaVzkxZENrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa1pXWmxjbkpsWkM1d2NtOXRhWE5sTzF4dUlDQWdJSDBwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJRWVhOelpYTWdZU0JqYjI1MGFXNTFZWFJwYjI0Z2RHOGdZU0JPYjJSbElHWjFibU4wYVc5dUxDQjNhR2xqYUNCcGN5QmpZV3hzWldRZ2QybDBhQ0IwYUdVZ1oybDJaVzVjYmlBcUlHRnlaM1Z0Wlc1MGN5QndjbTkyYVdSbFpDQmhjeUJoYmlCaGNuSmhlU3dnWVc1a0lISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObExseHVJQ3BjYmlBcUlDQWdJQ0FnVVM1dVptRndjR3g1S0VaVExuSmxZV1JHYVd4bExDQmJYMTltYVd4bGJtRnRaVjBwWEc0Z0tpQWdJQ0FnSUM1MGFHVnVLR1oxYm1OMGFXOXVJQ2hqYjI1MFpXNTBLU0I3WEc0Z0tpQWdJQ0FnSUgwcFhHNGdLbHh1SUNvdlhHNVJMbTVtWVhCd2JIa2dQU0JtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNzSUdGeVozTXBJSHRjYmlBZ0lDQnlaWFIxY200Z1VTaGpZV3hzWW1GamF5a3VibVpoY0hCc2VTaGhjbWR6S1R0Y2JuMDdYRzVjYmxCeWIyMXBjMlV1Y0hKdmRHOTBlWEJsTG01bVlYQndiSGtnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dUlDQWdJSFpoY2lCa1pXWmxjbkpsWkNBOUlHUmxabVZ5S0NrN1hHNGdJQ0FnZG1GeUlHNXZaR1ZCY21keklEMGdZWEp5WVhsZmMyeHBZMlVvWVhKbmN5azdYRzRnSUNBZ2JtOWtaVUZ5WjNNdWNIVnphQ2hrWldabGNuSmxaQzV0WVd0bFRtOWtaVkpsYzI5c2RtVnlLQ2twTzF4dUlDQWdJSFJvYVhNdVptRndjR3g1S0c1dlpHVkJjbWR6S1M1bVlXbHNLR1JsWm1WeWNtVmtMbkpsYW1WamRDazdYRzRnSUNBZ2NtVjBkWEp1SUdSbFptVnljbVZrTG5CeWIyMXBjMlU3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRkJoYzNObGN5QmhJR052Ym5ScGJuVmhkR2x2YmlCMGJ5QmhJRTV2WkdVZ1puVnVZM1JwYjI0c0lIZG9hV05vSUdseklHTmhiR3hsWkNCM2FYUm9JSFJvWlNCbmFYWmxibHh1SUNvZ1lYSm5kVzFsYm5SeklIQnliM1pwWkdWa0lHbHVaR2wyYVdSMVlXeHNlU3dnWVc1a0lISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObExseHVJQ29nUUdWNFlXMXdiR1ZjYmlBcUlGRXVibVpqWVd4c0tFWlRMbkpsWVdSR2FXeGxMQ0JmWDJacGJHVnVZVzFsS1Z4dUlDb2dMblJvWlc0b1puVnVZM1JwYjI0Z0tHTnZiblJsYm5RcElIdGNiaUFxSUgwcFhHNGdLbHh1SUNvdlhHNVJMbTVtWTJGc2JDQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheUF2S2k0dUxtRnlaM01xTHlrZ2UxeHVJQ0FnSUhaaGNpQmhjbWR6SUQwZ1lYSnlZWGxmYzJ4cFkyVW9ZWEpuZFcxbGJuUnpMQ0F4S1R0Y2JpQWdJQ0J5WlhSMWNtNGdVU2hqWVd4c1ltRmpheWt1Ym1aaGNIQnNlU2hoY21kektUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtNW1ZMkZzYkNBOUlHWjFibU4wYVc5dUlDZ3ZLaTR1TG1GeVozTXFMeWtnZTF4dUlDQWdJSFpoY2lCdWIyUmxRWEpuY3lBOUlHRnljbUY1WDNOc2FXTmxLR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0J1YjJSbFFYSm5jeTV3ZFhOb0tHUmxabVZ5Y21Wa0xtMWhhMlZPYjJSbFVtVnpiMngyWlhJb0tTazdYRzRnSUNBZ2RHaHBjeTVtWVhCd2JIa29ibTlrWlVGeVozTXBMbVpoYVd3b1pHVm1aWEp5WldRdWNtVnFaV04wS1R0Y2JpQWdJQ0J5WlhSMWNtNGdaR1ZtWlhKeVpXUXVjSEp2YldselpUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1YzSmhjSE1nWVNCT2IyUmxTbE1nWTI5dWRHbHVkV0YwYVc5dUlIQmhjM05wYm1jZ1puVnVZM1JwYjI0Z1lXNWtJSEpsZEhWeWJuTWdZVzRnWlhGMWFYWmhiR1Z1ZEZ4dUlDb2dkbVZ5YzJsdmJpQjBhR0YwSUhKbGRIVnlibk1nWVNCd2NtOXRhWE5sTGx4dUlDb2dRR1Y0WVcxd2JHVmNiaUFxSUZFdWJtWmlhVzVrS0VaVExuSmxZV1JHYVd4bExDQmZYMlpwYkdWdVlXMWxLU2hjSW5WMFppMDRYQ0lwWEc0Z0tpQXVkR2hsYmloamIyNXpiMnhsTG14dlp5bGNiaUFxSUM1a2IyNWxLQ2xjYmlBcUwxeHVVUzV1Wm1KcGJtUWdQVnh1VVM1a1pXNXZaR1ZwWm5rZ1BTQm1kVzVqZEdsdmJpQW9ZMkZzYkdKaFkyc2dMeW91TGk1aGNtZHpLaThwSUh0Y2JpQWdJQ0IyWVhJZ1ltRnpaVUZ5WjNNZ1BTQmhjbkpoZVY5emJHbGpaU2hoY21kMWJXVnVkSE1zSURFcE8xeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjJSbFFYSm5jeUE5SUdKaGMyVkJjbWR6TG1OdmJtTmhkQ2hoY25KaGVWOXpiR2xqWlNoaGNtZDFiV1Z1ZEhNcEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaVUZ5WjNNdWNIVnphQ2hrWldabGNuSmxaQzV0WVd0bFRtOWtaVkpsYzI5c2RtVnlLQ2twTzF4dUlDQWdJQ0FnSUNCUktHTmhiR3hpWVdOcktTNW1ZWEJ3Ykhrb2JtOWtaVUZ5WjNNcExtWmhhV3dvWkdWbVpYSnlaV1F1Y21WcVpXTjBLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsWm1WeWNtVmtMbkJ5YjIxcGMyVTdYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtNW1ZbWx1WkNBOVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNWtaVzV2WkdWcFpua2dQU0JtZFc1amRHbHZiaUFvTHlvdUxpNWhjbWR6S2k4cElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHRnljbUY1WDNOc2FXTmxLR0Z5WjNWdFpXNTBjeWs3WEc0Z0lDQWdZWEpuY3k1MWJuTm9hV1owS0hSb2FYTXBPMXh1SUNBZ0lISmxkSFZ5YmlCUkxtUmxibTlrWldsbWVTNWhjSEJzZVNoMmIybGtJREFzSUdGeVozTXBPMXh1ZlR0Y2JseHVVUzV1WW1sdVpDQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheXdnZEdocGMzQWdMeW91TGk1aGNtZHpLaThwSUh0Y2JpQWdJQ0IyWVhJZ1ltRnpaVUZ5WjNNZ1BTQmhjbkpoZVY5emJHbGpaU2hoY21kMWJXVnVkSE1zSURJcE8xeHVJQ0FnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjJSbFFYSm5jeUE5SUdKaGMyVkJjbWR6TG1OdmJtTmhkQ2hoY25KaGVWOXpiR2xqWlNoaGNtZDFiV1Z1ZEhNcEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaVUZ5WjNNdWNIVnphQ2hrWldabGNuSmxaQzV0WVd0bFRtOWtaVkpsYzI5c2RtVnlLQ2twTzF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCaWIzVnVaQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV3hzWW1GamF5NWhjSEJzZVNoMGFHbHpjQ3dnWVhKbmRXMWxiblJ6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQlJLR0p2ZFc1a0tTNW1ZWEJ3Ykhrb2JtOWtaVUZ5WjNNcExtWmhhV3dvWkdWbVpYSnlaV1F1Y21WcVpXTjBLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JsWm1WeWNtVmtMbkJ5YjIxcGMyVTdYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbExtNWlhVzVrSUQwZ1puVnVZM1JwYjI0Z0tDOHFkR2hwYzNBc0lDNHVMbUZ5WjNNcUx5a2dlMXh1SUNBZ0lIWmhjaUJoY21keklEMGdZWEp5WVhsZmMyeHBZMlVvWVhKbmRXMWxiblJ6TENBd0tUdGNiaUFnSUNCaGNtZHpMblZ1YzJocFpuUW9kR2hwY3lrN1hHNGdJQ0FnY21WMGRYSnVJRkV1Ym1KcGJtUXVZWEJ3Ykhrb2RtOXBaQ0F3TENCaGNtZHpLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dRMkZzYkhNZ1lTQnRaWFJvYjJRZ2IyWWdZU0JPYjJSbExYTjBlV3hsSUc5aWFtVmpkQ0IwYUdGMElHRmpZMlZ3ZEhNZ1lTQk9iMlJsTFhOMGVXeGxYRzRnS2lCallXeHNZbUZqYXlCM2FYUm9JR0VnWjJsMlpXNGdZWEp5WVhrZ2IyWWdZWEpuZFcxbGJuUnpMQ0J3YkhWeklHRWdjSEp2ZG1sa1pXUWdZMkZzYkdKaFkyc3VYRzRnS2lCQWNHRnlZVzBnYjJKcVpXTjBJR0Z1SUc5aWFtVmpkQ0IwYUdGMElHaGhjeUIwYUdVZ2JtRnRaV1FnYldWMGFHOWtYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYm1GdFpTQnVZVzFsSUc5bUlIUm9aU0J0WlhSb2IyUWdiMllnYjJKcVpXTjBYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JoY21keklHRnlaM1Z0Wlc1MGN5QjBieUJ3WVhOeklIUnZJSFJvWlNCdFpYUm9iMlE3SUhSb1pTQmpZV3hzWW1GamExeHVJQ29nZDJsc2JDQmlaU0J3Y205MmFXUmxaQ0JpZVNCUklHRnVaQ0JoY0hCbGJtUmxaQ0IwYnlCMGFHVnpaU0JoY21kMWJXVnVkSE11WEc0Z0tpQkFjbVYwZFhKdWN5QmhJSEJ5YjIxcGMyVWdabTl5SUhSb1pTQjJZV3gxWlNCdmNpQmxjbkp2Y2x4dUlDb3ZYRzVSTG01dFlYQndiSGtnUFNBdkx5QllXRmdnUVhNZ2NISnZjRzl6WldRZ1lua2dYQ0pTWldSellXNWtjbTljSWx4dVVTNXVjRzl6ZENBOUlHWjFibU4wYVc5dUlDaHZZbXBsWTNRc0lHNWhiV1VzSUdGeVozTXBJSHRjYmlBZ0lDQnlaWFIxY200Z1VTaHZZbXBsWTNRcExtNXdiM04wS0c1aGJXVXNJR0Z5WjNNcE8xeHVmVHRjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWJtMWhjSEJzZVNBOUlDOHZJRmhZV0NCQmN5QndjbTl3YjNObFpDQmllU0JjSWxKbFpITmhibVJ5YjF3aVhHNVFjbTl0YVhObExuQnliM1J2ZEhsd1pTNXVjRzl6ZENBOUlHWjFibU4wYVc5dUlDaHVZVzFsTENCaGNtZHpLU0I3WEc0Z0lDQWdkbUZ5SUc1dlpHVkJjbWR6SUQwZ1lYSnlZWGxmYzJ4cFkyVW9ZWEpuY3lCOGZDQmJYU2s3WEc0Z0lDQWdkbUZ5SUdSbFptVnljbVZrSUQwZ1pHVm1aWElvS1R0Y2JpQWdJQ0J1YjJSbFFYSm5jeTV3ZFhOb0tHUmxabVZ5Y21Wa0xtMWhhMlZPYjJSbFVtVnpiMngyWlhJb0tTazdYRzRnSUNBZ2RHaHBjeTVrYVhOd1lYUmphQ2hjSW5CdmMzUmNJaXdnVzI1aGJXVXNJRzV2WkdWQmNtZHpYU2t1Wm1GcGJDaGtaV1psY25KbFpDNXlaV3BsWTNRcE8xeHVJQ0FnSUhKbGRIVnliaUJrWldabGNuSmxaQzV3Y205dGFYTmxPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRZV3hzY3lCaElHMWxkR2h2WkNCdlppQmhJRTV2WkdVdGMzUjViR1VnYjJKcVpXTjBJSFJvWVhRZ1lXTmpaWEIwY3lCaElFNXZaR1V0YzNSNWJHVmNiaUFxSUdOaGJHeGlZV05yTENCbWIzSjNZWEprYVc1bklIUm9aU0JuYVhabGJpQjJZWEpwWVdScFl5QmhjbWQxYldWdWRITXNJSEJzZFhNZ1lTQndjbTkyYVdSbFpGeHVJQ29nWTJGc2JHSmhZMnNnWVhKbmRXMWxiblF1WEc0Z0tpQkFjR0Z5WVcwZ2IySnFaV04wSUdGdUlHOWlhbVZqZENCMGFHRjBJR2hoY3lCMGFHVWdibUZ0WldRZ2JXVjBhRzlrWEc0Z0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2JtRnRaU0J1WVcxbElHOW1JSFJvWlNCdFpYUm9iMlFnYjJZZ2IySnFaV04wWEc0Z0tpQkFjR0Z5WVcwZ0xpNHVZWEpuY3lCaGNtZDFiV1Z1ZEhNZ2RHOGdjR0Z6Y3lCMGJ5QjBhR1VnYldWMGFHOWtPeUIwYUdVZ1kyRnNiR0poWTJzZ2QybHNiRnh1SUNvZ1ltVWdjSEp2ZG1sa1pXUWdZbmtnVVNCaGJtUWdZWEJ3Wlc1a1pXUWdkRzhnZEdobGMyVWdZWEpuZFcxbGJuUnpMbHh1SUNvZ1FISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObElHWnZjaUIwYUdVZ2RtRnNkV1VnYjNJZ1pYSnliM0pjYmlBcUwxeHVVUzV1YzJWdVpDQTlJQzh2SUZoWVdDQkNZWE5sWkNCdmJpQk5ZWEpySUUxcGJHeGxjaWR6SUhCeWIzQnZjMlZrSUZ3aWMyVnVaRndpWEc1UkxtNXRZMkZzYkNBOUlDOHZJRmhZV0NCQ1lYTmxaQ0J2YmlCY0lsSmxaSE5oYm1SeWJ5ZHpYQ0lnY0hKdmNHOXpZV3hjYmxFdWJtbHVkbTlyWlNBOUlHWjFibU4wYVc5dUlDaHZZbXBsWTNRc0lHNWhiV1VnTHlvdUxpNWhjbWR6S2k4cElIdGNiaUFnSUNCMllYSWdibTlrWlVGeVozTWdQU0JoY25KaGVWOXpiR2xqWlNoaGNtZDFiV1Z1ZEhNc0lESXBPMXh1SUNBZ0lIWmhjaUJrWldabGNuSmxaQ0E5SUdSbFptVnlLQ2s3WEc0Z0lDQWdibTlrWlVGeVozTXVjSFZ6YUNoa1pXWmxjbkpsWkM1dFlXdGxUbTlrWlZKbGMyOXNkbVZ5S0NrcE8xeHVJQ0FnSUZFb2IySnFaV04wS1M1a2FYTndZWFJqYUNoY0luQnZjM1JjSWl3Z1cyNWhiV1VzSUc1dlpHVkJjbWR6WFNrdVptRnBiQ2hrWldabGNuSmxaQzV5WldwbFkzUXBPMXh1SUNBZ0lISmxkSFZ5YmlCa1pXWmxjbkpsWkM1d2NtOXRhWE5sTzF4dWZUdGNibHh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1Ym5ObGJtUWdQU0F2THlCWVdGZ2dRbUZ6WldRZ2IyNGdUV0Z5YXlCTmFXeHNaWEluY3lCd2NtOXdiM05sWkNCY0luTmxibVJjSWx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWJtMWpZV3hzSUQwZ0x5OGdXRmhZSUVKaGMyVmtJRzl1SUZ3aVVtVmtjMkZ1WkhKdkozTmNJaUJ3Y205d2IzTmhiRnh1VUhKdmJXbHpaUzV3Y205MGIzUjVjR1V1Ym1sdWRtOXJaU0E5SUdaMWJtTjBhVzl1SUNodVlXMWxJQzhxTGk0dVlYSm5jeW92S1NCN1hHNGdJQ0FnZG1GeUlHNXZaR1ZCY21keklEMGdZWEp5WVhsZmMyeHBZMlVvWVhKbmRXMWxiblJ6TENBeEtUdGNiaUFnSUNCMllYSWdaR1ZtWlhKeVpXUWdQU0JrWldabGNpZ3BPMXh1SUNBZ0lHNXZaR1ZCY21kekxuQjFjMmdvWkdWbVpYSnlaV1F1YldGclpVNXZaR1ZTWlhOdmJIWmxjaWdwS1R0Y2JpQWdJQ0IwYUdsekxtUnBjM0JoZEdOb0tGd2ljRzl6ZEZ3aUxDQmJibUZ0WlN3Z2JtOWtaVUZ5WjNOZEtTNW1ZV2xzS0dSbFptVnljbVZrTG5KbGFtVmpkQ2s3WEc0Z0lDQWdjbVYwZFhKdUlHUmxabVZ5Y21Wa0xuQnliMjFwYzJVN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVsbUlHRWdablZ1WTNScGIyNGdkMjkxYkdRZ2JHbHJaU0IwYnlCemRYQndiM0owSUdKdmRHZ2dUbTlrWlNCamIyNTBhVzUxWVhScGIyNHRjR0Z6YzJsdVp5MXpkSGxzWlNCaGJtUmNiaUFxSUhCeWIyMXBjMlV0Y21WMGRYSnVhVzVuTFhOMGVXeGxMQ0JwZENCallXNGdaVzVrSUdsMGN5QnBiblJsY201aGJDQndjbTl0YVhObElHTm9ZV2x1SUhkcGRHaGNiaUFxSUdCdWIyUmxhV1o1S0c1dlpHVmlZV05yS1dBc0lHWnZjbmRoY21ScGJtY2dkR2hsSUc5d2RHbHZibUZzSUc1dlpHVmlZV05ySUdGeVozVnRaVzUwTGlBZ1NXWWdkR2hsSUhWelpYSmNiaUFxSUdWc1pXTjBjeUIwYnlCMWMyVWdZU0J1YjJSbFltRmpheXdnZEdobElISmxjM1ZzZENCM2FXeHNJR0psSUhObGJuUWdkR2hsY21VdUlDQkpaaUIwYUdWNUlHUnZJRzV2ZEZ4dUlDb2djR0Z6Y3lCaElHNXZaR1ZpWVdOckxDQjBhR1Y1SUhkcGJHd2djbVZqWldsMlpTQjBhR1VnY21WemRXeDBJSEJ5YjIxcGMyVXVYRzRnS2lCQWNHRnlZVzBnYjJKcVpXTjBJR0VnY21WemRXeDBJQ2h2Y2lCaElIQnliMjFwYzJVZ1ptOXlJR0VnY21WemRXeDBLVnh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ2JtOWtaV0poWTJzZ1lTQk9iMlJsTG1wekxYTjBlV3hsSUdOaGJHeGlZV05yWEc0Z0tpQkFjbVYwZFhKdWN5QmxhWFJvWlhJZ2RHaGxJSEJ5YjIxcGMyVWdiM0lnYm05MGFHbHVaMXh1SUNvdlhHNVJMbTV2WkdWcFpua2dQU0J1YjJSbGFXWjVPMXh1Wm5WdVkzUnBiMjRnYm05a1pXbG1lU2h2WW1wbFkzUXNJRzV2WkdWaVlXTnJLU0I3WEc0Z0lDQWdjbVYwZFhKdUlGRW9iMkpxWldOMEtTNXViMlJsYVdaNUtHNXZaR1ZpWVdOcktUdGNibjFjYmx4dVVISnZiV2x6WlM1d2NtOTBiM1I1Y0dVdWJtOWtaV2xtZVNBOUlHWjFibU4wYVc5dUlDaHViMlJsWW1GamF5a2dlMXh1SUNBZ0lHbG1JQ2h1YjJSbFltRmpheWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMblJvWlc0b1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JSTG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsWW1GamF5aHVkV3hzTENCMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZlN3Z1puVnVZM1JwYjI0Z0tHVnljbTl5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JSTG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsWW1GamF5aGxjbkp2Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVVTNXViME52Ym1ac2FXTjBJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpVVM1dWIwTnZibVpzYVdOMElHOXViSGtnZDI5eWEzTWdkMmhsYmlCUklHbHpJSFZ6WldRZ1lYTWdZU0JuYkc5aVlXeGNJaWs3WEc1OU8xeHVYRzR2THlCQmJHd2dZMjlrWlNCaVpXWnZjbVVnZEdocGN5QndiMmx1ZENCM2FXeHNJR0psSUdacGJIUmxjbVZrSUdaeWIyMGdjM1JoWTJzZ2RISmhZMlZ6TGx4dWRtRnlJSEZGYm1ScGJtZE1hVzVsSUQwZ1kyRndkSFZ5WlV4cGJtVW9LVHRjYmx4dWNtVjBkWEp1SUZFN1hHNWNibjBwTzF4dUlpd2lkbUZ5SUZaMVpTQXZMeUJzWVhSbElHSnBibVJjYm5aaGNpQjJaWEp6YVc5dVhHNTJZWElnYldGd0lEMGdkMmx1Wkc5M0xsOWZWbFZGWDBoUFZGOU5RVkJmWHlBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDbGNiblpoY2lCcGJuTjBZV3hzWldRZ1BTQm1ZV3h6WlZ4dWRtRnlJR2x6UW5KdmQzTmxjbWxtZVNBOUlHWmhiSE5sWEc1MllYSWdhVzVwZEVodmIydE9ZVzFsSUQwZ0oySmxabTl5WlVOeVpXRjBaU2RjYmx4dVpYaHdiM0owY3k1cGJuTjBZV3hzSUQwZ1puVnVZM1JwYjI0Z0tIWjFaU3dnWW5KdmQzTmxjbWxtZVNrZ2UxeHVJQ0JwWmlBb2FXNXpkR0ZzYkdWa0tTQnlaWFIxY201Y2JpQWdhVzV6ZEdGc2JHVmtJRDBnZEhKMVpWeHVYRzRnSUZaMVpTQTlJSFoxWlM1ZlgyVnpUVzlrZFd4bElEOGdkblZsTG1SbFptRjFiSFFnT2lCMmRXVmNiaUFnZG1WeWMybHZiaUE5SUZaMVpTNTJaWEp6YVc5dUxuTndiR2wwS0NjdUp5a3ViV0Z3S0U1MWJXSmxjaWxjYmlBZ2FYTkNjbTkzYzJWeWFXWjVJRDBnWW5KdmQzTmxjbWxtZVZ4dVhHNGdJQzh2SUdOdmJYQmhkQ0IzYVhSb0lEd2dNaTR3TGpBdFlXeHdhR0V1TjF4dUlDQnBaaUFvVm5WbExtTnZibVpwWnk1ZmJHbG1aV041WTJ4bFNHOXZhM011YVc1a1pYaFBaaWduYVc1cGRDY3BJRDRnTFRFcElIdGNiaUFnSUNCcGJtbDBTRzl2YTA1aGJXVWdQU0FuYVc1cGRDZGNiaUFnZlZ4dVhHNGdJR1Y0Y0c5eWRITXVZMjl0Y0dGMGFXSnNaU0E5SUhabGNuTnBiMjViTUYwZ1BqMGdNbHh1SUNCcFppQW9JV1Y0Y0c5eWRITXVZMjl0Y0dGMGFXSnNaU2tnZTF4dUlDQWdJR052Ym5OdmJHVXVkMkZ5YmloY2JpQWdJQ0FnSUNkYlNFMVNYU0JaYjNVZ1lYSmxJSFZ6YVc1bklHRWdkbVZ5YzJsdmJpQnZaaUIyZFdVdGFHOTBMWEpsYkc5aFpDMWhjR2tnZEdoaGRDQnBjeUFuSUN0Y2JpQWdJQ0FnSUNkdmJteDVJR052YlhCaGRHbGliR1VnZDJsMGFDQldkV1V1YW5NZ1kyOXlaU0JlTWk0d0xqQXVKMXh1SUNBZ0lDbGNiaUFnSUNCeVpYUjFjbTVjYmlBZ2ZWeHVmVnh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUhKbFkyOXlaQ0JtYjNJZ1lTQm9iM1FnYlc5a2RXeGxMQ0IzYUdsamFDQnJaV1Z3Y3lCMGNtRmpheUJ2WmlCcGRITWdZMjl1YzNSeWRXTjBiM0pjYmlBcUlHRnVaQ0JwYm5OMFlXNWpaWE5jYmlBcVhHNGdLaUJBY0dGeVlXMGdlMU4wY21sdVozMGdhV1JjYmlBcUlFQndZWEpoYlNCN1QySnFaV04wZlNCdmNIUnBiMjV6WEc0Z0tpOWNibHh1Wlhod2IzSjBjeTVqY21WaGRHVlNaV052Y21RZ1BTQm1kVzVqZEdsdmJpQW9hV1FzSUc5d2RHbHZibk1wSUh0Y2JpQWdkbUZ5SUVOMGIzSWdQU0J1ZFd4c1hHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lFTjBiM0lnUFNCdmNIUnBiMjV6WEc0Z0lDQWdiM0IwYVc5dWN5QTlJRU4wYjNJdWIzQjBhVzl1YzF4dUlDQjlYRzRnSUcxaGEyVlBjSFJwYjI1elNHOTBLR2xrTENCdmNIUnBiMjV6S1Z4dUlDQnRZWEJiYVdSZElEMGdlMXh1SUNBZ0lFTjBiM0k2SUZaMVpTNWxlSFJsYm1Rb2IzQjBhVzl1Y3lrc1hHNGdJQ0FnYVc1emRHRnVZMlZ6T2lCYlhWeHVJQ0I5WEc1OVhHNWNiaThxS2x4dUlDb2dUV0ZyWlNCaElFTnZiWEJ2Ym1WdWRDQnZjSFJwYjI1eklHOWlhbVZqZENCb2IzUXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdFRkSEpwYm1kOUlHbGtYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjNCMGFXOXVjMXh1SUNvdlhHNWNibVoxYm1OMGFXOXVJRzFoYTJWUGNIUnBiMjV6U0c5MElDaHBaQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQnBibXBsWTNSSWIyOXJLRzl3ZEdsdmJuTXNJR2x1YVhSSWIyOXJUbUZ0WlN3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHMWhjRnRwWkYwdWFXNXpkR0Z1WTJWekxuQjFjMmdvZEdocGN5bGNiaUFnZlNsY2JpQWdhVzVxWldOMFNHOXZheWh2Y0hScGIyNXpMQ0FuWW1WbWIzSmxSR1Z6ZEhKdmVTY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2FXNXpkR0Z1WTJWeklEMGdiV0Z3VzJsa1hTNXBibk4wWVc1alpYTmNiaUFnSUNCcGJuTjBZVzVqWlhNdWMzQnNhV05sS0dsdWMzUmhibU5sY3k1cGJtUmxlRTltS0hSb2FYTXBMQ0F4S1Z4dUlDQjlLVnh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVhbVZqZENCaElHaHZiMnNnZEc4Z1lTQm9iM1FnY21Wc2IyRmtZV0pzWlNCamIyMXdiMjVsYm5RZ2MyOGdkR2hoZEZ4dUlDb2dkMlVnWTJGdUlHdGxaWEFnZEhKaFkyc2diMllnYVhRdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5d2RHbHZibk5jYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCdVlXMWxYRzRnS2lCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCb2IyOXJYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdhVzVxWldOMFNHOXZheUFvYjNCMGFXOXVjeXdnYm1GdFpTd2dhRzl2YXlrZ2UxeHVJQ0IyWVhJZ1pYaHBjM1JwYm1jZ1BTQnZjSFJwYjI1elcyNWhiV1ZkWEc0Z0lHOXdkR2x2Ym5OYmJtRnRaVjBnUFNCbGVHbHpkR2x1WjF4dUlDQWdJRDhnUVhKeVlYa3VhWE5CY25KaGVTaGxlR2x6ZEdsdVp5bGNiaUFnSUNBZ0lEOGdaWGhwYzNScGJtY3VZMjl1WTJGMEtHaHZiMnNwWEc0Z0lDQWdJQ0E2SUZ0bGVHbHpkR2x1Wnl3Z2FHOXZhMTFjYmlBZ0lDQTZJRnRvYjI5clhWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMGNubFhjbUZ3SUNobWJpa2dlMXh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0dsa0xDQmhjbWNwSUh0Y2JpQWdJQ0IwY25rZ2V5Qm1iaWhwWkN3Z1lYSm5LU0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNCamIyNXpiMnhsTG1WeWNtOXlLR1VwWEc0Z0lDQWdJQ0JqYjI1emIyeGxMbmRoY200b0oxTnZiV1YwYUdsdVp5QjNaVzUwSUhkeWIyNW5JR1IxY21sdVp5QldkV1VnWTI5dGNHOXVaVzUwSUdodmRDMXlaV3h2WVdRdUlFWjFiR3dnY21Wc2IyRmtJSEpsY1hWcGNtVmtMaWNwWEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkSE11Y21WeVpXNWtaWElnUFNCMGNubFhjbUZ3S0daMWJtTjBhVzl1SUNocFpDd2diM0IwYVc5dWN5a2dlMXh1SUNCMllYSWdjbVZqYjNKa0lEMGdiV0Z3VzJsa1hWeHVJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk1nUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQnZjSFJwYjI1eklEMGdiM0IwYVc5dWN5NXZjSFJwYjI1elhHNGdJSDFjYmlBZ2NtVmpiM0prTGtOMGIzSXViM0IwYVc5dWN5NXlaVzVrWlhJZ1BTQnZjSFJwYjI1ekxuSmxibVJsY2x4dUlDQnlaV052Y21RdVEzUnZjaTV2Y0hScGIyNXpMbk4wWVhScFkxSmxibVJsY2tadWN5QTlJRzl3ZEdsdmJuTXVjM1JoZEdsalVtVnVaR1Z5Um01elhHNGdJSEpsWTI5eVpDNXBibk4wWVc1alpYTXVjMnhwWTJVb0tTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHBibk4wWVc1alpTa2dlMXh1SUNBZ0lHbHVjM1JoYm1ObExpUnZjSFJwYjI1ekxuSmxibVJsY2lBOUlHOXdkR2x2Ym5NdWNtVnVaR1Z5WEc0Z0lDQWdhVzV6ZEdGdVkyVXVKRzl3ZEdsdmJuTXVjM1JoZEdsalVtVnVaR1Z5Um01eklEMGdiM0IwYVc5dWN5NXpkR0YwYVdOU1pXNWtaWEpHYm5OY2JpQWdJQ0JwYm5OMFlXNWpaUzVmYzNSaGRHbGpWSEpsWlhNZ1BTQmJYU0F2THlCeVpYTmxkQ0J6ZEdGMGFXTWdkSEpsWlhOY2JpQWdJQ0JwYm5OMFlXNWpaUzRrWm05eVkyVlZjR1JoZEdVb0tWeHVJQ0I5S1Z4dWZTbGNibHh1Wlhod2IzSjBjeTV5Wld4dllXUWdQU0IwY25sWGNtRndLR1oxYm1OMGFXOXVJQ2hwWkN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk1nUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQnZjSFJwYjI1eklEMGdiM0IwYVc5dWN5NXZjSFJwYjI1elhHNGdJSDFjYmlBZ2JXRnJaVTl3ZEdsdmJuTkliM1FvYVdRc0lHOXdkR2x2Ym5NcFhHNGdJSFpoY2lCeVpXTnZjbVFnUFNCdFlYQmJhV1JkWEc0Z0lHbG1JQ2gyWlhKemFXOXVXekZkSUR3Z01pa2dlMXh1SUNBZ0lDOHZJSEJ5WlhObGNuWmxJSEJ5WlNBeUxqSWdZbVZvWVhacGIzSWdabTl5SUdkc2IySmhiQ0J0YVhocGJpQm9ZVzVrYkdsdVoxeHVJQ0FnSUhKbFkyOXlaQzVEZEc5eUxtVjRkR1Z1WkU5d2RHbHZibk1nUFNCdmNIUnBiMjV6WEc0Z0lIMWNiaUFnZG1GeUlHNWxkME4wYjNJZ1BTQnlaV052Y21RdVEzUnZjaTV6ZFhCbGNpNWxlSFJsYm1Rb2IzQjBhVzl1Y3lsY2JpQWdjbVZqYjNKa0xrTjBiM0l1YjNCMGFXOXVjeUE5SUc1bGQwTjBiM0l1YjNCMGFXOXVjMXh1SUNCeVpXTnZjbVF1UTNSdmNpNWphV1FnUFNCdVpYZERkRzl5TG1OcFpGeHVJQ0J5WldOdmNtUXVRM1J2Y2k1d2NtOTBiM1I1Y0dVZ1BTQnVaWGREZEc5eUxuQnliM1J2ZEhsd1pWeHVJQ0JwWmlBb2JtVjNRM1J2Y2k1eVpXeGxZWE5sS1NCN1hHNGdJQ0FnTHk4Z2RHVnRjRzl5WVhKNUlHZHNiMkpoYkNCdGFYaHBiaUJ6ZEhKaGRHVm5lU0IxYzJWa0lHbHVJRHdnTWk0d0xqQXRZV3h3YUdFdU5seHVJQ0FnSUc1bGQwTjBiM0l1Y21Wc1pXRnpaU2dwWEc0Z0lIMWNiaUFnY21WamIzSmtMbWx1YzNSaGJtTmxjeTV6YkdsalpTZ3BMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR2x1YzNSaGJtTmxLU0I3WEc0Z0lDQWdhV1lnS0dsdWMzUmhibU5sTGlSMmJtOWtaU0FtSmlCcGJuTjBZVzVqWlM0a2RtNXZaR1V1WTI5dWRHVjRkQ2tnZTF4dUlDQWdJQ0FnYVc1emRHRnVZMlV1SkhadWIyUmxMbU52Ym5SbGVIUXVKR1p2Y21ObFZYQmtZWFJsS0NsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzI5c1pTNTNZWEp1S0NkU2IyOTBJRzl5SUcxaGJuVmhiR3g1SUcxdmRXNTBaV1FnYVc1emRHRnVZMlVnYlc5a2FXWnBaV1F1SUVaMWJHd2djbVZzYjJGa0lISmxjWFZwY21Wa0xpY3BYRzRnSUNBZ2ZWeHVJQ0I5S1Z4dWZTbGNiaUpkZlE9PSJ9

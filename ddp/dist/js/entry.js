/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _leftBox = __webpack_require__(1);

	var _leftBox2 = _interopRequireDefault(_leftBox);

	var _rightBox = __webpack_require__(22);

	var _rightBox2 = _interopRequireDefault(_rightBox);

	var _drag = __webpack_require__(26);

	var _drag2 = _interopRequireDefault(_drag);

	var _input = __webpack_require__(27);

	var _input2 = _interopRequireDefault(_input);

	var _text = __webpack_require__(29);

	var _text2 = _interopRequireDefault(_text);

	var _search = __webpack_require__(30);

	var _search2 = _interopRequireDefault(_search);

	var _code = __webpack_require__(31);

	var _code2 = _interopRequireDefault(_code);

	var _form = __webpack_require__(32);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.config.debug = true;

	var vm = new Vue({
		el: '#wrapper',
		components: {
			leftBox: _leftBox2.default,
			rightBox: _rightBox2.default
		},
		data: {},
		methods: {}
	});

	_drag2.default.init();
	_input2.default.init();
	_text2.default.init();
	_code2.default.init();
	_search2.default.init();
	_form2.default.init();
	(function () {
		$("#wrapper").click(function () {
			$(".creatInput").remove();
			$(".toolbox").remove();
		});
		$("#wrapper").on("click", ".flags", function (e) {
			e.stopPropagation();
		});

		$(".review-code textarea").click(function (e) {
			e.stopPropagation();
		});
		$(".review-code").click(function () {
			$(this).hide();
		});
		$(".downfile").click(function (e) {
			e.stopPropagation();
		});
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\leftBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-76f1ce45/leftBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _input = __webpack_require__(5);

	var _input2 = _interopRequireDefault(_input);

	var _text = __webpack_require__(9);

	var _text2 = _interopRequireDefault(_text);

	var _search = __webpack_require__(13);

	var _search2 = _interopRequireDefault(_search);

	var _form = __webpack_require__(17);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			textVue: _text2.default,
			inputVue: _input2.default,
			searchVue: _search2.default,
			formVue: _form2.default
		},
		data: function data() {
			return {
				lists: [{ msg: "文本框" }, { msg: "数字框" }, { msg: "电子邮件框" }, { msg: "密码框" }]
			};
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2bcba50b/input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				content: ""
			};
		},
		ready: function ready() {},

		methods: {}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"j-left-item\" style=\"height:30px;\">\n\t<div class=\"item-child-input item-child\">\n\t\t\n\t</div>\n</li>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-28ee1f08/text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				content: "输入文本"
			};
		},

		methods: {}
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"j-left-item\" style=\"height:50px;\">\n\t<div class=\"item-child-txt item-child flags\">\n\t\t{{content}}\n\t</div>\n</li>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\search\\search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-73ac199d/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				content: ""
			};
		},
		ready: function ready() {},

		methods: {}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"j-left-item\" style=\"\">\n\t<div class=\"item-child-search item-child\" data-id=\"search\">\n\t\t<span class=\"search-input\" data-id=\"search-input\"></span>\n\t\t<span class=\"search-submit\" data-id=\"search-submit\">搜索</span>\n\t</div>\n</li>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\form\\form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f8b176c6/form.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				content: ""
			};
		},
		ready: function ready() {},

		methods: {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"j-left-item\" style=\"\">\n\t<div class=\"item-child-form item-child\" data-id=\"form\">\n\t\t<form action method=\"post\" onsubmit=\"return false\" data-id=\"form-form\">\n\t\t\t<!-- chrome autocomplete off bug hack -->\n\t\t\t<input style=\"display:none\" name=\"hack\" data-id=\"form-hack\">\n\t\t\t<input type=\"password\" style=\"display:none\" name=\"hack1\" data-id=\"form-hack1\">\n\t\t\t<div class=\"form-item\" data-id=\"form-item-username\">\n\t\t\t\t<label for=\"form-username\" data-id=\"form-flags-username\">用户名</label>\n\t\t\t\t<span class=\"form-placeholder\" data-id=\"form-placeholder-username\">您的账户名</span>\n\t\t\t\t<input type=\"text\" class=\"form-remark\" id=\"form-username\" maxlength=\"20\" placeholder=\"\" data-id=\"form-input-username\">\n\t\t\t</div>\n\t\t\t<div class=\"form-item\" data-id=\"form-item-password\">\n\t\t\t\t<label for=\"form-password\" data-id=\"form-flags-password\">密码</label>\n\t\t\t\t<span class=\"form-placeholder\" data-id=\"form-placeholder-password\">输入密码</span>\n\t\t\t\t<input type=\"password\" class=\"form-remark\" id=\"form-password\" maxlength=\"20\" placeholder=\"\" data-id=\"form-input-password\">\n\t\t\t</div>\n\t\t\t<div class=\"form-item\" data-id=\"form-item\">\n\t\t\t\t<label for=\"form-repassword\" data-id=\"form-flags-repassword\">确认密码</label>\n\t\t\t\t<span class=\"form-placeholder\" data-id=\"form-placeholder-repassword\">再次输入密码</span>\n\t\t\t\t<input type=\"password\" class=\"form-remark\" id=\"form-repassword\" maxlength=\"20\" placeholder=\"\" data-id=\"form-input-repassword\">\n\t\t\t</div>\n\t\t\t<div class=\"form-item\" data-id=\"form-item-submit\">\n\t\t\t\t<input type=\"submit\" class=\"form-submit\" value=\"提交\" data-id=\"form-input-submit\">\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</li>\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"left-box\">\n\t<ul class=\"j-left-list\">\n\t\t<li class=\"j-left-item\">\n\t\t\t<div class=\"item-child-text item-child\"></div>\n\t\t</li>\n\t\t<input-vue></input-vue>\n\t\t<text-vue></text-vue>\n\t\t<search-vue></search-vue>\n\t\t<form-vue></form-vue>\n\t</ul>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\js\\rightBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-479c9644/rightBox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"right-box\">\n\t\n</div>\n\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		init: function init() {
			var lockDrag = false;
			$(".item-child").draggable({ //左项 拖动元素
				scroll: true,
				helper: "clone",
				revert: "invalid",
				appendTo: "body",
				start: function start(event, ui) {
					lockDrag = true;
				},
				stop: function stop(event, ui) {
					lockDrag = false;
				}
			});

			$(".right-box").droppable({
				accept: ":not(.ui-sortable-helper)",
				drop: function drop(event, ui) {
					console.log(ui);
					if (!lockDrag) {
						return false;
					}

					var _this = $(this);

					var style = {
						left: ui.offset.left + "px",
						top: ui.offset.top + "px",
						position: "absolute"
					};
					var resultELe = ui.draggable[0].outerHTML.replace("ui-draggable ui-draggable-handle", "");

					//如果是输入框
					if (/item-child-input/.test(resultELe)) {
						resultELe = '<input type="text" class="flags item-child-input item-child" style="width:180px;height:30px;" data-id="input">';

						$(resultELe).css(style).draggable({
							containment: ".right-box"
						}).appendTo(this);

						//如果是文本框
					} else if (/item-child-txt/.test(resultELe)) {
						resultELe = '<textarea class="flags item-child-txt item-child" style="width:180px;height:50px;" data-id="textarea"></textarea>';

						$(resultELe).css(style).draggable({
							containment: ".right-box"
						}).appendTo(this);

						//如果是搜索组件
					} else if (/item-child-search/.test(resultELe)) {
						resultELe = "\n\t\t\t\t\t\t<div class=\"item-child-search item-child flags\" data-id=\"search\">\n\t\t\t\t\t\t\t<input class=\"search-input\" data-id=\"search-input\" />\n\t\t\t\t\t\t\t<span class=\"search-submit\" data-id=\"search-submit\">搜索</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
						$(resultELe).css(style).draggable({
							containment: ".right-box"
						}).appendTo(this);
					} else if (/item-child-text/.test(resultELe)) {
						$(resultELe).css(style).draggable({
							/*helper:"original",*/
							containment: ".right-box"
						}).resizable().appendTo(this);
					} else {
						$(resultELe).css(style).draggable({
							containment: ".right-box"
						}).addClass("flags").appendTo(this);
					}
				}
			});
		}
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _newEleOpera = __webpack_require__(28);

	var _newEleOpera2 = _interopRequireDefault(_newEleOpera);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		init: function init() {
			$(".right-box").on("click", ".item-child-input", function () {
				//单击输入框input
				_newEleOpera2.default.sigleClick($(this), "input");
			});
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*
	* sigleClick函数接收两个参数：arg指目标元素，type指目标元素的类型
	*
	*
	*/
	exports.default = {
		sigleClick: function sigleClick(arg, type) {
			var obj = this;
			var _this = arg;
			var left = _this.css("left");
			var top = _this.css("top");
			var width = _this.css("width");
			var height = _this.css("height");
			$(".creatInput").remove();
			$(".toolbox").remove();
			_this.after("\n\t\t\t<div class=\"creatInput flags\" style=\"left:" + left + ";top:" + top + ";width:" + width + ";height:" + height + "\"></div>\n\t\t");
			$(".creatInput").draggable({
				helper: "original",
				containment: ".right-box",
				drag: function drag(event, ui) {
					//拖动跟随
					var left = ui.offset.left;
					var top = ui.offset.top;
					$(this).prev().css({
						left: left,
						top: top
					});
				}
			}).resizable({
				resize: function resize(event, ui) {
					console.log(ui);
					$(this).prev().css({
						width: ui.size.width + "px",
						height: ui.size.height + "px"
					});
				}
			}).dblclick(function () {
				var _this = $(this);
				var temp = _this.prev(); //输入框
				temp.focus();
				_this.remove();
				obj.palette(temp, type);
			});
		},
		palette: function palette(arg, type) {
			console.log(typeof type === "undefined" ? "undefined" : _typeof(type));
			var left = arg[0].offsetLeft;
			var top = arg[0].offsetTop;
			var width = arg[0].offsetWidth;
			var height = arg[0].offsetHeight;

			$(".toolbox").remove();

			var valEle = "";
			if (type === "input") {
				valEle = "\n\t\t\t\t<li class=\"body-box-li\">\n\t\t\t\t\t<label class=\"box-text-tips\">输入类型</label>\n\t\t\t\t\t<div class=\"add-subtract\">\n\t\t\t\t\t\t<select class=\"box-select\">\n\t\t\t\t\t\t\t<option value=\"text\">文本</option>\n\t\t\t\t\t\t\t<option value=\"password\">密码</option>\n\t\t\t\t\t\t\t<option value=\"email\">邮件</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t";
			}

			var block = "\n\n\t\t\t<div class=\"toolbox flags\" style=\"left:" + (left + width + 10) + "px;top:" + top + "px;\">\n\t\t\t\t<div class=\"header-box\">\n\t\t\t\t\t<span class=\"header-box-setting\">设置</span>\n\t\t\t\t\t<span class=\"header-box-delete js-header-box-delete\">X</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"body-box\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li class=\"body-box-li\">\n\t\t\t\t\t\t\t<div class=\"add-subtract position-x\">\n\t\t\t\t\t\t\t\t<span class=\"box-subtract as-button\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"box-input-number\" value=\"" + left + "\" data-id=\"x\" />\n\t\t\t\t\t\t\t\t<span class=\"box-add as-button\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"add-subtract position-y\">\n\t\t\t\t\t\t\t\t<span class=\"box-subtract as-button\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"box-input-number\" value=\"" + top + "\" data-id=\"y\" />\n\t\t\t\t\t\t\t\t<span class=\"box-add as-button\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"body-box-li\">\n\t\t\t\t\t\t\t<div class=\"add-subtract position-width\">\n\t\t\t\t\t\t\t\t<span class=\"box-subtract as-button\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"box-input-number\" value=\"" + width + "\" data-id=\"w\" />\n\t\t\t\t\t\t\t\t<span class=\"box-add as-button\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"add-subtract position-height\">\n\t\t\t\t\t\t\t\t<span class=\"box-subtract as-button\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"box-input-number\" value=\"" + height + "\" data-id=\"h\" />\n\t\t\t\t\t\t\t\t<span class=\"box-add as-button\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"body-box-li\">\n\t\t\t\t\t\t\t<label class=\"box-text-tips\">圆角半径</label>\n\t\t\t\t\t\t\t<div class=\"add-subtract\">\n\t\t\t\t\t\t\t\t<span class=\"box-subtract as-button\">-</span>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"box-input-number\" data-id=\"r\" />\n\t\t\t\t\t\t\t\t<span class=\"box-add as-button\">+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t" + valEle + "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t";
			$(arg).parent().append(block);

			function position(data, _addResult) {
				switch (data) {
					case "x":
						var leftWidth = $(".left-box").css("width").replace(/px/, ""); //左侧元素的宽度
						_addResult = +_addResult < +leftWidth ? +leftWidth : +_addResult;
						arg.css("left", _addResult + "px");
						break;
					case "y":
						arg.css("top", _addResult + "px");
						break;
					case "w":
						arg.css("width", _addResult + "px");
						break;
					case "h":
						arg.css("height", _addResult + "px");
						break;
					case "r":
						arg.css("borderRadius", _addResult + "px");
						break;
					case "s":
						arg.attr("type", _addResult);
						break;
				}
			}

			//减
			$(".box-subtract").click(function () {
				var _sub = $(this).next();
				var data = _sub.data("id");
				var _subResult = _sub.val() - 1;
				_sub.val(_subResult);
				position(data, _subResult);
			});

			//加
			$(".box-add").click(function () {
				var _add = $(this).prev();
				var data = _add.data("id");
				var _addResult = +_add.val() + 1;
				_add.val(_addResult);
				position(data, _addResult);
			});
			//关闭
			$(".js-header-box-delete").click(function () {
				$(".toolbox").remove();
			});
			//监听弹出框所有input事件
			$(".body-box").on("input", 'input[type=text]', function () {
				var _this = $(this);
				var value = _this.val().trim();
				var id = _this.data("id");
				position(id, value);
			});

			//获取select选中的值：$("#box-select option:selected").val();
			$(".box-select").change(function () {
				position("s", $(".box-select option:selected").val());
			});
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _newEleOpera = __webpack_require__(28);

	var _newEleOpera2 = _interopRequireDefault(_newEleOpera);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		init: function init() {
			$(".right-box").on("click", ".item-child-txt", function () {
				//单击文本框textarea
				_newEleOpera2.default.sigleClick($(this), "textarea");
			});
		}
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _newEleOpera = __webpack_require__(28);

	var _newEleOpera2 = _interopRequireDefault(_newEleOpera);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		init: function init() {
			$(".right-box").on("click", ".item-child-search", function () {
				//单击输入框input
				_newEleOpera2.default.sigleClick($(this), "search");
			});
		}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		init: function init() {

			var _this = this;

			var tempUser = _this.localStorageUser();

			$(".js-code").click(function () {
				var wrapperBox = $(".right-box").find(".item-child-text");
				if (wrapperBox.length > 0) {
					(function () {

						/*外层块的位置信息*/
						var point = _this.calcPosition(wrapperBox);

						var ic = $(".right-box").find(".item-child");
						var tags = [];
						var tagsPoint = []; //获得在内层元素的属性，包括元素字符串和样式
						if (ic.length > 1) {
							(function () {
								//包含需要的标签
								$.each(ic, function (index, ele) {
									if ($(ele).hasClass("item-child-text")) {
										return;
									}
									tags.push(ele);
								});

								//计算出最大框的point坐标区间
								var y = point.leftTop[1];
								var x = point.leftTop[0];
								var by = point.rightBottom[1];
								var bx = point.rightBottom[0];

								//外层块包含的标签的位置信息
								tags.map(function (value) {
									var valEle = $(value);
									var temp = _this.calcPosition(valEle);

									var _ay = temp.leftTop[1];
									var _ax = temp.leftTop[0];
									var _by = temp.rightTop[1];
									var _bx = temp.rightTop[0];
									var _cy = temp.leftBottom[1];
									var _cx = temp.leftBottom[0];
									var _dy = temp.rightBottom[1];
									var _dx = temp.rightBottom[0];

									if (_ay > y && _ax > x && _by > y && _bx > x && _cy > y && _cx > x && _dy > y && _dx > x && _ay < by && _ax < bx && _by < by && _bx < bx && _cy < by && _cx < bx && _dy < by && _dx < bx) {

										_this.travCompon(value);
										var tempEle = valEle[0].outerHTML.replace(/(class="[^"]+")|(style="[^"]+")/g, "");
										var obj = {};
										obj.ele = tempEle; /*单个组件html*/
										obj.style = _this.style; /*单个组件css*/
										_this.style = [];
										tagsPoint.push(obj);
									}
								});
								(function () {
									console.log(tagsPoint);
									$(".review-code textarea").html("");
									//计算相对外层的位置 //得到工作区的X,Y位置
									var top = +wrapperBox.css("top").replace('px', '');
									var left = +wrapperBox.css("left").replace('px', '');

									//得到代码
									var codeDev = "";
									tagsPoint.map(function (value) {
										var tempEle = value.ele; //组件html元素字符串；
										var postionLock = false;
										//遍历组件的节点  得到样式的值
										value.style.map(function (val) {
											for (var tem in val) {
												/*这里只有一个属性，就是元素每个节点对应的data-id的属性值*/
												var style = "";
												//相对于工作区的定位
												if (!postionLock) {
													if (val[tem].top.length > 0) {
														val[tem].top = +val[tem].top.replace("px", "") - top + "px";
													}
													if (val[tem].left.length > 0) {
														val[tem].left = +val[tem].left.replace("px", "") - left + "px";
													}
												}
												postionLock = true;

												for (var st in val[tem]) {
													style += st + ":" + val[tem][st] + ";";
												}

												tempEle = tempEle.replace(new RegExp("data-id=\"" + tem + "\""), "data-id=\"" + tem + "\" style=\"" + style + "\"");
											}
										});
										codeDev += tempEle;
									});
									console.log(codeDev);
									//-----把代码字符串传到后台处理

									$.ajax({
										type: "POST",
										url: "fileCode",
										dataType: "json",
										data: {
											tempUser: tempUser,
											data: codeDev
										},
										success: function success(data) {
											console.log(data);
											if (data.status === "0000") {}
										},
										error: function error() {
											console.log("updata code error");
										}
									});

									//得到HTML元素
									var _html = codeDev.replace(/style="[^"]+"/g, "");
									_html = _html.replace(/data-id/g, "class");

									$(".review-code textarea").html(_html);
									$(".review-code").show();

									$(".downfile").attr("href", "/lib/downfile.html?filename=downloadCss&tempUser=" + tempUser + ".css");
								})();
							})();
						} else {
							alert("请拖入你需要的标签");
						}
					})();
				} else {
					alert("请拖入工作区");
				}
			});
		},
		calcPosition: function calcPosition(wrapperBox) {
			var left = wrapperBox.css("left").replace("px", "") - 0;
			var top = wrapperBox.css("top").replace("px", "") - 0;
			var width = wrapperBox.css("width").replace("px", "") - 0;
			var height = wrapperBox.css("height").replace("px", "") - 0;

			//计算出框框的4个角的坐标
			var point = {
				leftTop: [left, top],
				rightTop: [left + width, top],
				leftBottom: [left, top + height],
				rightBottom: [left + width, top + height]
			};
			return point;
		},


		//获得元素的html元素和css样式
		style: [], //作用：临时存储一下单个组件的样式
		travCompon: function travCompon(arg) {
			var _this = this;
			var cssArr = ["background", "border", "box-sizing", "box-shadow", "color", "cursor", "display", "font-size", "text-align", "float", "width", "height", "left", "top", "line-height", "margin-bottom", "margin-left", "margin-right", "margin-top", "opacity", "overflow", "outline", "padding-bottom", "padding-left", "padding-right", "padding-top", "position", "word-break", "z-index"];

			var getCode = function getCode(ar) {
				var _arg = $(ar);
				var id = _arg.data("id");
				_this.style.push(allCss(ar, id));
				if (_arg.children().length) {
					_arg.children().map(function (index, value) {
						getCode(value);
					});
				}
			};
			var allCss = function allCss(target, id) {
				var _tag = $(target);
				var tempCss = {};
				cssArr.map(function (value) {
					// tempCss.push(_tag.css(value));
					tempCss[value] = _tag.css(value);
				});
				var obj = {};
				obj[id] = tempCss;
				return obj;
			};
			getCode(arg);
		},
		localStorageUser: function localStorageUser() {
			if (typeof localStorage.tempUser !== "undefined") {
				return localStorage.tempUser;
			} else {
				var useArr = "0123456789abcdefghijklmnopqrstuvwxyz_";
				var len = useArr.length;
				var tempUser = "";
				for (var i = 0; i < 3; i++) {
					var num = Math.floor(Math.random() * len);
					tempUser += useArr.charAt(num);
				};
				tempUser += new Date().getTime();
				localStorage.tempUser = tempUser;
				return tempUser;
			}
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _newEleOpera = __webpack_require__(28);

	var _newEleOpera2 = _interopRequireDefault(_newEleOpera);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		init: function init() {
			$(".right-box").on("click", ".item-child-form", function () {
				//单击输入框input
				_newEleOpera2.default.sigleClick($(this), "form");
			});
		}
	};

/***/ }
/******/ ]);
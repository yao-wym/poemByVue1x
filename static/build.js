/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".build.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty2 = __webpack_require__(1);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _router$map;
	
	var _vue = __webpack_require__(5);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(7);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _filters = __webpack_require__(8);
	
	var _App = __webpack_require__(9);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _NewsView = __webpack_require__(24);
	
	var _NewsView2 = _interopRequireDefault(_NewsView);
	
	var _ItemView = __webpack_require__(40);
	
	var _ItemView2 = _interopRequireDefault(_ItemView);
	
	var _User = __webpack_require__(50);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _IndexHome = __webpack_require__(60);
	
	var _IndexHome2 = _interopRequireDefault(_IndexHome);
	
	var _HotelList = __webpack_require__(88);
	
	var _HotelList2 = _interopRequireDefault(_HotelList);
	
	var _ScenicList = __webpack_require__(119);
	
	var _ScenicList2 = _interopRequireDefault(_ScenicList);
	
	var _FoodList = __webpack_require__(129);
	
	var _FoodList2 = _interopRequireDefault(_FoodList);
	
	var _UserReg = __webpack_require__(139);
	
	var _UserReg2 = _interopRequireDefault(_UserReg);
	
	var _UserLogin = __webpack_require__(146);
	
	var _UserLogin2 = _interopRequireDefault(_UserLogin);
	
	var _UserFindPwd = __webpack_require__(151);
	
	var _UserFindPwd2 = _interopRequireDefault(_UserFindPwd);
	
	var _UserChangePwd = __webpack_require__(161);
	
	var _UserChangePwd2 = _interopRequireDefault(_UserChangePwd);
	
	var _AddressList = __webpack_require__(166);
	
	var _AddressList2 = _interopRequireDefault(_AddressList);
	
	var _Index = __webpack_require__(171);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _IndexArticle = __webpack_require__(176);
	
	var _IndexArticle2 = _interopRequireDefault(_IndexArticle);
	
	var _IndexUcenter = __webpack_require__(181);
	
	var _IndexUcenter2 = _interopRequireDefault(_IndexUcenter);
	
	var _HotelDetail = __webpack_require__(189);
	
	var _HotelDetail2 = _interopRequireDefault(_HotelDetail);
	
	var _HotelDeepDetail = __webpack_require__(196);
	
	var _HotelDeepDetail2 = _interopRequireDefault(_HotelDeepDetail);
	
	var _HotelOrderForm = __webpack_require__(203);
	
	var _HotelOrderForm2 = _interopRequireDefault(_HotelOrderForm);
	
	var _ScenicDetail = __webpack_require__(210);
	
	var _ScenicDetail2 = _interopRequireDefault(_ScenicDetail);
	
	var _ScenicOrderForm = __webpack_require__(218);
	
	var _ScenicOrderForm2 = _interopRequireDefault(_ScenicOrderForm);
	
	var _FoodDetail = __webpack_require__(223);
	
	var _FoodDetail2 = _interopRequireDefault(_FoodDetail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// install router
	// VueValidator = require('vue-validator')
	var client = 'ios';
	_vue2.default.use(_vueRouter2.default);
	// Vue.use(VueValidator)
	// register filters globally
	_vue2.default.filter('fromNow', _filters.fromNow);
	_vue2.default.filter('domain', _filters.domain);
	
	// routing
	var router = new _vueRouter2.default();
	
	router.map((_router$map = {
	  '/news/:page': {
	    component: _NewsView2.default
	  },
	  '/user': {
	    component: _User2.default,
	    subRoutes: {
	      '/login': {
	        name: 'login',
	        component: _UserLogin2.default
	      },
	      '/reg': {
	        name: 'reg',
	        component: _UserReg2.default
	      },
	      '/findpwd': {
	        name: 'findpwd',
	        component: _UserFindPwd2.default
	      },
	      '/changepwd': {
	        name: 'changepwd',
	        component: _UserChangePwd2.default
	      },
	      '/addresslist': {
	        name: 'addresslist',
	        component: _AddressList2.default
	      },
	      '/:id': {
	        component: _User2.default
	      }
	    }
	  },
	  '/item/:id': {
	    component: _ItemView2.default
	  },
	  '/ucenter': {
	    component: _ItemView2.default
	  },
	  '/login': {
	    component: _UserLogin2.default
	  },
	  '/reg': {
	    component: _UserReg2.default
	  },
	  '/findpwd': {
	    component: _UserFindPwd2.default
	  },
	  '/IndexHome': {
	    component: _IndexHome2.default
	  },
	  '/index': {
	    component: _Index2.default,
	    subRoutes: {
	      '/home': {
	        component: _IndexHome2.default
	      },
	      '/cart': {
	        component: function component(resolve) {
	          setTimeout(function () {
	            __webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(228)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }, 1000);
	        }
	
	      },
	      '/article': {
	        component: _IndexArticle2.default
	      },
	      '/ucenter': {
	        component: _IndexUcenter2.default
	      }
	    }
	  },
	  '/HotelList': {
	    component: _HotelList2.default
	  },
	  '/FoodList': {
	    component: _FoodList2.default
	  },
	  '/ScenicList': {
	    component: _ScenicList2.default
	  },
	  '/HotelDetail/:hotelId': {
	    name: 'hoteldetail',
	    component: _HotelDetail2.default
	  },
	  '/HotelDeepDetail/:hotelId': {
	    component: _HotelDeepDetail2.default
	  },
	  '/ScenicDetail/:ScenicId': {
	    component: _ScenicDetail2.default
	  },
	  '/app_header': {
	    component: _ItemView2.default
	  }
	}, (0, _defineProperty3.default)(_router$map, '/app_header', {
	  component: _ItemView2.default
	}), (0, _defineProperty3.default)(_router$map, '/HotelOrderForm/:id', {
	  component: _HotelOrderForm2.default
	}), (0, _defineProperty3.default)(_router$map, 'ScenicOrderForm/:id', {
	  component: _ScenicOrderForm2.default
	}), (0, _defineProperty3.default)(_router$map, 'FoodDetail/:id', {
	  component: _FoodDetail2.default
	}), _router$map));
	
	router.beforeEach(function () {
	  window.scrollTo(0, 0);
	});
	
	router.redirect({
	  '/': '/index/home'
	});
	var appView = document.getElementById("poem-body");
	var height = document.body.clientHeight;
	var width = document.body.clientWidth;
	appView.setAttribute('style', 'height:' + height + "px;width:" + width + "px;overflow:hidden");
	
	router.start(_App2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(2);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.20
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // save raw constructor data before merge
	    // so that we know which properties are provided at
	    // instantiation.
	    this._runtimeData = options.data;
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queueIndex;
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (queueIndex = 0; queueIndex < queue.length; queueIndex++) {
	    var watcher = queue[queueIndex];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    if (internalQueueDepleted && !watcher.user) {
	      // an internal watcher triggered by a user watcher...
	      // let's run it immediately after current user watcher is done.
	      userQueue.splice(queueIndex + 1, 0, watcher);
	    } else {
	      // push watcher into appropriate queue
	      var q = watcher.user ? userQueue : queue;
	      has[id] = q.length;
	      q.push(watcher);
	      // queue the flush
	      if (!waiting) {
	        waiting = true;
	        nextTick(flushBatcherQueue);
	      }
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = Object.create(null);
	  this.newDepIds = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDepIds = Object.create(null);
	  this.newDeps.length = 0;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds[id]) {
	    this.newDepIds[id] = true;
	    this.newDeps.push(dep);
	    if (!this.depIds[id]) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds[dep.id]) {
	      dep.removeSub(this);
	    }
	  }
	  this.depIds = this.newDepIds;
	  var tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var FOR = 2000;
	var IF = 2000;
	var SLOT = 2100;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    this.prevKeys = Object.keys(value);
	    setObjectClasses(this.el, value);
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val && isPlainObject(val)) {
	        setObjectClasses(this.el, val);
	      } else if (val && typeof val === 'string') {
	        addClass(this.el, val);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (!key) continue;
	        if (isPlainObject(key)) {
	          var keys = Object.keys(key);
	          for (var k = 0; k < keys.length; k++) {
	            removeClass(this.el, keys[k]);
	          }
	        } else {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function setObjectClasses(el, obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    if (obj[key]) {
	      addClass(el, key);
	    }
	  }
	}
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  value = coerceProp(prop, value);
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop.options);
	  }
	  if (assertProp(prop, value)) {
	    defineReactive(vm, key, value);
	  }
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	    var isSimple = isSimplePath(parentKey);
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      val = coerceProp(prop, val);
	      if (assertProp(prop, val)) {
	        if (isSimple) {
	          withoutConversion(function () {
	            child[childKey] = val;
	          });
	        } else {
	          child[childKey] = val;
	        }
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    var value = parentWatcher.value;
	    if (isSimple && value !== undefined) {
	      withoutConversion(function () {
	        initProp(child, prop, value);
	      });
	    } else {
	      initProp(child, prop, value);
	    }
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    modifiers = parseModifiers(attr.name);
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value)) {
	      value.trim().split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.');
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.');
	    }
	    var props = this._props;
	    var runtimeData = this._runtimeData ? typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData : null;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key) || runtimeData && hasOwn(runtimeData, key) && props[key].raw === null) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. Use prop default value instead.');
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        if (typeof handler === 'function') {
	          handler._fromParent = true;
	          vm.$on(name.replace(eventRE), handler);
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
	        }
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(factory, 'component', value);
	      }
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.20';
	
	// devtools global hook
	/* istanbul ignore next */
	if (config.devtools) {
	  if (devtools) {
	    devtools.emit('init', Vue);
	  } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	    console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
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
	    var timeout = setTimeout(cleanUpNextTick);
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
	    clearTimeout(timeout);
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
	        setTimeout(drainQueue, 0);
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


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.11
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return decodeURIComponent(part);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path) {
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        queryParams = this.parseQueryString(queryString);
	      }
	
	      path = decodeURI(path);
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  RouteRecognizer.VERSION = '0.1.9';
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn(msg) {
	    /* istanbul ignore next */
	    if (window.console) {
	      console.warn('[vue-router] ' + msg);
	      if (!exports$1.Vue || exports$1.Vue.config.debug) {
	        console.warn(new Error('warning stack trace:').stack);
	      }
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root) {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = decodeURI(location.pathname + location.search);
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    this.router = router;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    Vue.directive('link-active', {
	      priority: 1001,
	      bind: function bind() {
	        this.el.__v_link_active = true;
	      }
	    });
	
	    Vue.directive('link', {
	      priority: 1000,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check if active classes should be applied to a different element
	        this.activeEl = this.el;
	        var parent = this.el.parentNode;
	        while (parent) {
	          if (parent.__v_link_active) {
	            this.activeEl = parent;
	            break;
	          }
	          parent = parent.parentNode;
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            this.router.go({
	              path: el.pathname,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router._stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router._stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        this.updateClasses(route.path);
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path) {
	        var el = this.activeEl;
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass !== activeClass) {
	          removeClass(el, this.prevActiveClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            addClass(el, activeClass);
	          } else {
	            removeClass(el, activeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this._stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype._stringifyPath = function _stringifyPath(path) {
	      var fullPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          if (path.query) {
	            params.queryParams = path.query;
	          }
	          fullPath = this._recognizer.generate(path.name, params);
	        } else if (path.path) {
	          fullPath = path.path;
	          if (path.query) {
	            var query = this._recognizer.generateQueryString(path.query);
	            if (fullPath.indexOf('?') > -1) {
	              fullPath += '&' + query.slice(1);
	            } else {
	              fullPath += query;
	            }
	          }
	        }
	      } else {
	        fullPath = path ? path + '' : '';
	      }
	      return encodeURI(fullPath);
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.domain = domain;
	exports.fromNow = fromNow;
	exports.checkEmpty = checkEmpty;
	var urlParser = document.createElement('a');
	
	function domain(url) {
	  urlParser.href = url;
	  return urlParser.hostname;
	}
	
	function fromNow(time) {
	  var between = Date.now() / 1000 - Number(time);
	  if (between < 3600) {
	    return pluralize(~ ~(between / 60), ' minute');
	  } else if (between < 86400) {
	    return pluralize(~ ~(between / 3600), ' hour');
	  } else {
	    return pluralize(~ ~(between / 86400), ' day');
	  }
	}
	
	function pluralize(time, label) {
	  if (time === 1) {
	    return time + label;
	  }
	
	  return time + label + 's';
	}
	
	function checkEmpty(content) {}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/stylus-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: Verdana;\n  font-size: 30px;\n  height: 100%;\n  color: text-gray;\n}\nul {\n  color: text-gray;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: text-gray;\n}\n#app-container {\n  background-color: #f6f6ef;\n  position: relative;\n  width: 100%;\n  min-height: 80px;\n  margin: 0 auto;\n  height: 100%;\n}\n#header {\n  background-color: #f60;\n  height: 24px;\n  position: relative;\n}\n#header h1 {\n  font-weight: bold;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n}\n#header .source {\n  color: #fff;\n  font-size: 11px;\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n#header .source a {\n  color: #fff;\n}\n#header .source a:hover {\n  text-decoration: underline;\n}\n#yc {\n  border: 1px solid #fff;\n  margin: 2px;\n  display: inline-block;\n  vertical-align: middle;\n}\n#yc img {\n  vertical-align: middle;\n}\n.view {\n  position: absolute;\n  background-color: #f6f6ef;\n  width: 100%;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n  box-sizing: border-box;\n}\n.view.v-enter,\n.view.v-leave {\n  opacity: 0;\n}\n@media screen and (max-width: 700px) {\n  html,\n  body {\n    margin: 0;\n  }\n  #app-container {\n    width: 100%;\n  }\n}\n", "", {"version":3,"sources":["/./src/src/App.vue","/./src/App.vue"],"names":[],"mappings":"AAGA;;EACE,qBAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;CCDD;ADGD;EACE,iBAAA;EACA,sBAAA;EACA,WAAA;EACA,UAAA;CCDD;ADGD;EACE,gBAAA;EACA,sBAAA;EACA,iBAAA;CCDD;ADGD;EACE,0BAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,aAAA;CCDD;ADGD;EACE,uBAAA;EACA,aAAA;EACA,mBAAA;CCDD;ADEC;EACE,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;CCAH;ADCC;EACE,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;CCCH;ADAG;EACE,YAAA;CCEL;ADDK;EACE,2BAAA;CCGP;ADDD;EACE,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;CCGD;ADFC;EACE,uBAAA;CCIH;ADFD;EACE,mBAAA;EACA,0BAAA;EACA,YAAA;EACA,sCAAA;EAAA,8BAAA;EACA,uBAAA;CCID;ADFC;;EACE,WAAA;CCKH;ADHkC;EACjC;;IACE,UAAA;GCMD;EDLD;IACE,YAAA;GCOD;CACF","file":"App.vue","sourcesContent":["\r\n@import \"./variables.styl\"\r\n\r\nhtml, body\r\n  font-family Verdana\r\n  font-size 30px\r\n  height 100%\r\n  color:text-gray\r\n\r\nul\r\n  color:text-gray\r\n  list-style-type none\r\n  padding 0\r\n  margin 0\r\n\r\na\r\n  cursor pointer\r\n  text-decoration none\r\n  color:text-gray\r\n  \r\n#app-container\r\n  background-color $bg\r\n  position relative\r\n  width 100%\r\n  min-height 80px\r\n  margin 0 auto\r\n  height:100%\r\n\r\n#header\r\n  background-color #f60\r\n  height 24px\r\n  position relative\r\n  h1\r\n    font-weight bold\r\n    font-size 13px\r\n    display inline-block\r\n    vertical-align middle\r\n    margin 0\r\n  .source\r\n    color #fff\r\n    font-size 11px\r\n    position absolute\r\n    top 4px\r\n    right 4px\r\n    a\r\n      color #fff\r\n      &:hover\r\n        text-decoration underline\r\n\r\n#yc\r\n  border 1px solid #fff\r\n  margin 2px\r\n  display inline-block\r\n  vertical-align middle\r\n  img\r\n    vertical-align middle\r\n\r\n.view\r\n  position absolute\r\n  background-color $bg\r\n  width 100%\r\n  transition opacity .2s ease\r\n  box-sizing border-box\r\n  //padding 8px 20px\r\n  &.v-enter, &.v-leave\r\n    opacity 0\r\n\r\n@media screen and (max-width: 700px)\r\n  html, body\r\n    margin 0\r\n  #app-container\r\n    width 100%\r\n","html,\nbody {\n  font-family: Verdana;\n  font-size: 30px;\n  height: 100%;\n  color: text-gray;\n}\nul {\n  color: text-gray;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\na {\n  cursor: pointer;\n  text-decoration: none;\n  color: text-gray;\n}\n#app-container {\n  background-color: #f6f6ef;\n  position: relative;\n  width: 100%;\n  min-height: 80px;\n  margin: 0 auto;\n  height: 100%;\n}\n#header {\n  background-color: #f60;\n  height: 24px;\n  position: relative;\n}\n#header h1 {\n  font-weight: bold;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n}\n#header .source {\n  color: #fff;\n  font-size: 11px;\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n#header .source a {\n  color: #fff;\n}\n#header .source a:hover {\n  text-decoration: underline;\n}\n#yc {\n  border: 1px solid #fff;\n  margin: 2px;\n  display: inline-block;\n  vertical-align: middle;\n}\n#yc img {\n  vertical-align: middle;\n}\n.view {\n  position: absolute;\n  background-color: #f6f6ef;\n  width: 100%;\n  transition: opacity 0.2s ease;\n  box-sizing: border-box;\n}\n.view.v-enter,\n.view.v-leave {\n  opacity: 0;\n}\n@media screen and (max-width: 700px) {\n  html,\n  body {\n    margin: 0;\n  }\n  #app-container {\n    width: 100%;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div id="app-container">
	//     <router-view
	//       class="view"
	//       keep-alive
	//       transition
	//       transition-mode="out-in">
	//     </router-view>
	//   <!-- </div> -->
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	
	  components: {
	    'app-header': __webpack_require__(15)
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// @import "./variables.styl"
	//
	// html, body
	//   font-family Verdana
	//   font-size 30px
	//   height 100%
	//   color:text-gray
	//
	// ul
	//   color:text-gray
	//   list-style-type none
	//   padding 0
	//   margin 0
	//
	// a
	//   cursor pointer
	//   text-decoration none
	//   color:text-gray
	//
	// #app-container
	//   background-color $bg
	//   position relative
	//   width 100%
	//   min-height 80px
	//   margin 0 auto
	//   height:100%
	//
	// #header
	//   background-color #f60
	//   height 24px
	//   position relative
	//   h1
	//     font-weight bold
	//     font-size 13px
	//     display inline-block
	//     vertical-align middle
	//     margin 0
	//   .source
	//     color #fff
	//     font-size 11px
	//     position absolute
	//     top 4px
	//     right 4px
	//     a
	//       color #fff
	//       &:hover
	//         text-decoration underline
	//
	// #yc
	//   border 1px solid #fff
	//   margin 2px
	//   display inline-block
	//   vertical-align middle
	//   img
	//     vertical-align middle
	//
	// .view
	//   position absolute
	//   background-color $bg
	//   width 100%
	//   transition opacity .2s ease
	//   box-sizing border-box
	//   //padding 8px 20px
	//   &.v-enter, &.v-leave
	//     opacity 0
	//
	// @media screen and (max-width: 700px)
	//   html, body
	//     margin 0
	//   #app-container
	//     width 100%
	// </style>

	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(16)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\CommonHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\CommonHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CommonHeader.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CommonHeader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.icon-left {\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.user-icon {\n  background-image: url(" + __webpack_require__(18) + ");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.back-icon {\n  background-image: url(" + __webpack_require__(19) + ");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.qrcode-icon {\n  background-image: url(" + __webpack_require__(20) + ");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.index-header {\n  z-index: 2;\n  background-color: #55b66f;\n  height: 1rem;\n  color: #fff;\n  font-size: 0.5rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex; /* Safari */\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.header-center {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  text-align: center;\n}\n.header-left-label {\n  width: auto;\n}\n.header-left {\n  text-align: center;\n  width: 1.5rem;\n}\n.header-left img {\n  width: 0.5rem;\n}\n.header-right {\n  text-align: center;\n  width: 1.5rem;\n}\n.header-right img {\n  width: 0.5rem;\n}\n#search-input {\n  border-radius: 10px;\n  font-size: 0.4rem;\n  height: 0.8rem;\n  width: 100%;\n  display: block;\n  padding-left: 5px;\n}\n", "", {"version":3,"sources":["/./src/components/src/main.styl","/./src/components/CommonHeader.vue","/./src/components/src/components/CommonHeader.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;ACvHD;EACE,cAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;CDyHD;ACxHD;EACE,gDAAA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;CD0HD;ACzHD;EACE,gDAAA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;CD2HD;AC1HD;EACE,gDAAA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;CD4HD;AC1HD;EACE,WAAA;EACA,0BAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,sBAAA,CAAA,YAAA;EAAuB,+BAAA;EAAA,8BAAA;EAAA,4BAAA;MAAA,wBAAA;UAAA,oBAAA;EACvB,0BAAA;EAAA,4BAAA;MAAA,uBAAA;UAAA,oBAAA;CD6HD;AACD;EC5HA,oBAAA;EAAA,qBAAA;MAAA,qBAAA;UAAA,aAAA;EACE,eAAA;EACA,oBAAA;EACA,mBAAY;CD8Hb;AACD;EC7HA,YAAA;CD+HC;AACD;EC7HA,mBAAA;EACE,cAAW;CD+HZ;AACD;EC9HE,cAAA;CDgID;AACD;EC/HA,mBAAA;EACE,cAAW;CDiIZ;AACD;EChIE,cAAA;CDkID;AACD;ECjIA,oBAAA;EACE,kBAAc;EACd,eAAU;EACV,YAAO;EACP,eAAA;EACA,kBAAA;CDmID","file":"CommonHeader.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.icon-left {\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.user-icon {\n  background-image: url(\"../asset/images/user-white.png\");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.back-icon {\n  background-image: url(\"../asset/images/fanhui.png\");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.qrcode-icon {\n  background-image: url(\"../asset/images/qr_code.png\");\n  width: 0.5rem;\n  height: 0.5rem;\n  background-size: 100%;\n  display: inline-block;\n}\n.index-header {\n  z-index: 2;\n  background-color: #55b66f;\n  height: 1rem;\n  color: #fff;\n  font-size: 0.5rem;\n  display: flex;\n  display: -webkit-flex; /* Safari */\n  flex-direction: row;\n  align-items: center;\n}\n.header-center {\n  flex-grow: 1;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  text-align: center;\n}\n.header-left-label {\n  width: auto;\n}\n.header-left {\n  text-align: center;\n  width: 1.5rem;\n}\n.header-left img {\n  width: 0.5rem;\n}\n.header-right {\n  text-align: center;\n  width: 1.5rem;\n}\n.header-right img {\n  width: 0.5rem;\n}\n#search-input {\n  border-radius: 10px;\n  font-size: 0.4rem;\n  height: 0.8rem;\n  width: 100%;\n  display: block;\n  padding-left: 5px;\n}\n","\r\n\r\n@import \"../main.styl\"\r\nheader-btn-width = 1.5rem\r\nheader-img-width = 0.5rem\r\nheader-height = 1rem\r\nheader-text-color = #fff\r\n.icon-left\r\n  width:header-img-width\r\n  height:@width\r\n  background-size:100%\r\n  display:inline-block\r\n.user-icon\r\n  background-image:url(\"../asset/images/user-white.png\")\r\n  width:header-img-width\r\n  height:@width\r\n  background-size:100%\r\n  display:inline-block\r\n.back-icon\r\n  background-image:url(\"../asset/images/fanhui.png\")\r\n  width:header-img-width\r\n  height:@width\r\n  background-size:100%\r\n  display:inline-block\r\n.qrcode-icon\r\n  background-image:url(\"../asset/images/qr_code.png\")\r\n  width:header-img-width\r\n  height:@width\r\n  background-size:100%\r\n  display:inline-block\r\n\r\n.index-header\r\n  z-index:2\r\n  background-color:app-green\r\n  height:header-height\r\n  color:header-text-color\r\n  font-size:.5rem\r\n  display:flex\r\n  display: -webkit-flex; /* Safari */\r\n  flex-direction:row\r\n  align-items:center\r\n.header-center\r\n  flex-grow: 1;\r\n  height:0.8rem\r\n  line-height:@height\r\n  text-align:center\r\n.header-left-label{\r\n  width:auto\r\n}\r\n.header-left\r\n  text-align:center\r\n  width:header-btn-width\r\n  & img\r\n    width:header-img-width\r\n.header-right\r\n  text-align:center\r\n  width:header-btn-width\r\n  & img\r\n    width:header-img-width\r\n#search-input\r\n  border-radius:10px\r\n  font-size:0.4rem\r\n  height:0.8rem\r\n  width:100%\r\n  display:block\r\n  padding-left:5px\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0BJREFUeNrsnO1xozAQhuWb+286MFeB6SBcBaGDUALpwNcBV8HhDrgOcAfQAe4AV0CkmfVko0jEWEhGyr4zOzYTQ9CDPlarFZtxHNlKFHFLuSXwidWCNdz6R93gZgWwBJiC2/ONv++4ldyq7wQrgUI/3Xn+mVsOtS1oWKKQ/yZqTouaWwRgdVD/Qs20LwHLsZXjZw3cDtziifMibjm3XnF+5eLeXYPKFQUtAcSc6xQA2Ckwl6BSRW3KDa6XKIAVIcCKFM0nW+C6MrDhi6ZsZD8cdeiiA96h41du9QLXFQNBho633A6+j4YDFETopHA6TSV8rhd0/MuG8+qiZmUIFLP05A+Kmsx8hYUdSRtOpKhFR2lW4CWsBH2vLf4f/BD2vsLaawpkE5aV2uVqNMQdvS1Zj0a4huW1CNaKYUWOBhIrTd4FrM72kK6B1foIq9H4XDb9uc7XZohh7SDwt7Ri9jEsXfk8N+zRRPoMhVtStQTL27mhPHfbLTw/zCRQR2s+l8PgXyvFs3Lf4lkuYSWKkHJuGHkdLDyAVcfg65kx+AgWN8aQY/BTwAZYuEgmzosB0vCo1Z1HrRtmMLxvFX+7sPd1wwGczZh9DEtjiRB16eKmH7kiHUMhn+88/wQR0dbVDa8h1yGBQmeamibrP0BuXN/oZkVZNNe5YyrNIxv02VqOiVmFFUOhYuaXBgT/Zv00qAHCC39ifusM5ahs1Sxx4ZfA4non6DOHJWHpQJ08g5MoBpMOWsywxNywUDiSxR0ZMGsxVfpSuYRTGoGTuEWOY+rSx7EY5hYdPV6u+61zS24N0eRStc0CAHUdFTN4+LisRvGsVOqfGhaOemk0TE1hxZowcSiqpeCkEax94LBWFVYmWASLRLAIFsEiWASLYJEIFsEiWASLYBEsEsEiWASLYBEsgkUiWASLYBGsbwXrjL4nBGtafeCwcJkuprBw4oTI/IsDAiVytPAbRpolYV2Po0BgiZx6nDlTaX9p8Ea1FnZmMU8thk1WWM1Se3dUKYVCHbP72hQbStnntPQL9F297qS52co6YL7rphzZuX7WdZfWn6lRwzMdYcD6MkfWZDuKqGUZ83M7Sg9wajZjP/WbAAMAUlnMi3yfQz4AAAAASUVORK5CYII="

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAe5JREFUeNrs3MtNw0AQBuD1KvfQASWQEiiBDnAJKYUSQgeUQDqAApAogQN3Y4uN5INlz6738c9jpFUSKZGsT34p/me6YRgcWJ3G9Taup3F9IG2YB4R6H9d9eD0Z1jrUMXw+ooF5UCiHCOaBoeZgPQJW1/gEvwU11SsKljcofCx2UK2wWEK1wGILVRuLNVRNLPZQtbBEQNXAEgNVGksUVEkscVClsERClcASC5UbSzRUTizxULmwVEDlwFIDtRdLFdQeLHVQqVgqoVKw1ELFYqmGisFSD0XFMigilkERsQyKiGVQRCyDImIZ1ErNgyEUqE/3n8rTWN83LAqU9rp6g4o7Z/UGRcc6h5O2FfFq2BvYdh1m72+3A88r3/8Ke+KvQqufpUzpZQNsun14nH6s/aaUckg+hKvnnWEZWNK/DgYWgWVgkVgGFollYJFYBubinxuqBkt5Iq0WLDXroBJsT4pGHdjefJYqsBzJPzVguTKlKsByppXFg+XOwYsGK9FhIRasVO+OSLCSXWHiwEr3G4oCq9HJKgasVo+0CLCa3ffswWrPdWAN1mJiCFuwVrNoWIK1nHLEDqz1sDFWYAiT2ShgLwhYHdDozYtbTu/ApHaQpkku7WFQ8Sa0OaVzMLgcWAc4AXeqczgsoQJzfwIMAFpHrTo47FxwAAAAAElFTkSuQmCC"

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWdJREFUeNrs3NENgjAUheEL4d0VHIENYANXcJS6iSPIBrgBI7CCE2AL1YdasJpCNP1Pcn2oGvBL26SVVIZhEF2lrsuwTpS9xtqlVrr/i/WRQkRKXa2unRBfDrpqU7l+UUC9jfFRuZUjAT2sWHjzGuki/UY/po94z5WvMTMzmNN2s2O0S7gXeefx3PPBLnGoWYOcqSg8YIEFFlhggUXAAgsssMACi4AFFlhg/VPMHvzJaethGXOWaWv5mex1C54wDMECCyywwCJggQXWTy93WhjC4nvkiDAMwdp8zrrCED5nocAwBAsssMACi4AFFlj/tNxRTlsv07+xqeeoa+8ud9z1jlkr1liN+3wVw5A5CyywwAKLgAUWWGCBBRYBCyywwAIrUazSVsrxGiw9+RfrUaSzbLOnf7QVI96T2YpPv/BF2o16wz7iPc8Ow4bZKCjN4+jNGxaLMT7j0ZvmbLuaHjbfo6xPdxdgAAEARjw11ncDAAAAAElFTkSuQmCC"

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	// <template>
	// 	<header class="index-header">
	//     <div @click='leftClick()' class="header-left">
	//       <a>
	//         <span class='{{leftIcon}}' v-if="leftIcon"></span>
	//         <span class="back-icon" v-else></span>
	//       </a>
	//     </div>
	//     <div class="header-left-label" v-if="leftLabel">
	//         {{leftLabel}}
	//     </div>
	//     <div class="header-center">
	//       <input id="search-input" placeholder="{{search}}" v-if="search"/>
	//       <span v-if="title">{{title}}</span>
	//     </div>
	//
	//     <div @click='rightClick()' class="header-right">
	//         <a>
	//           <span v-if="rightLabel">
	//             {{rightLabel}}
	//           </span>
	//           <span class="{{rightIcon}}" v-if="rightIcon">
	//           </span>
	//         </a>
	//     </div>
	// </header>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  data: function data() {
	    return { test: 123 };
	  },
	  props: ['title', 'leftLabel', 'rightLabel', 'leftLink', 'rightLink', 'leftIcon', 'rightIcon', 'search'],
	  methods: {
	    rightClick: function rightClick() {
	      this.eventHandle(this.rightLink);
	    },
	    leftClick: function leftClick() {
	      if (this.leftLink == undefined || this.leftLink == "") {
	        history.go(-1);
	      } else {
	        this.eventHandle(this.leftLink);
	      }
	    },
	    eventHandle: function eventHandle(eventTarget) {
	      if (eventTarget.slice(0, 1) == '#') {
	        location.href = eventTarget;
	      } else {
	        this.$dispatch(eventTarget);
	      }
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//
	// @import "../main.styl"
	// header-btn-width = 1.5rem
	// header-img-width = 0.5rem
	// header-height = 1rem
	// header-text-color = #fff
	// .icon-left
	//   width:header-img-width
	//   height:@width
	//   background-size:100%
	//   display:inline-block
	// .user-icon
	//   background-image:url("../asset/images/user-white.png")
	//   width:header-img-width
	//   height:@width
	//   background-size:100%
	//   display:inline-block
	// .back-icon
	//   background-image:url("../asset/images/fanhui.png")
	//   width:header-img-width
	//   height:@width
	//   background-size:100%
	//   display:inline-block
	// .qrcode-icon
	//   background-image:url("../asset/images/qr_code.png")
	//   width:header-img-width
	//   height:@width
	//   background-size:100%
	//   display:inline-block
	//
	// .index-header
	//   z-index:2
	//   background-color:app-green
	//   height:header-height
	//   color:header-text-color
	//   font-size:.5rem
	//   display:flex
	//   display: -webkit-flex; /* Safari */
	//   flex-direction:row
	//   align-items:center
	// .header-center
	//   flex-grow: 1;
	//   height:0.8rem
	//   line-height:@height
	//   text-align:center
	// .header-left-label{
	//   width:auto
	// }
	// .header-left
	//   text-align:center
	//   width:header-btn-width
	//   & img
	//     width:header-img-width
	// .header-right
	//   text-align:center
	//   width:header-btn-width
	//   & img
	//     width:header-img-width
	// #search-input
	//   border-radius:10px
	//   font-size:0.4rem
	//   height:0.8rem
	//   width:100%
	//   display:block
	//   padding-left:5px
	// </style>
	/* generated by vue-loader */

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n\t<header class=\"index-header\">\n    <div @click='leftClick()' class=\"header-left\">\n      <a>\n        <span class='{{leftIcon}}' v-if=\"leftIcon\"></span>\n        <span class=\"back-icon\" v-else></span>\n      </a>\n    </div>\n    <div class=\"header-left-label\" v-if=\"leftLabel\">\n        {{leftLabel}}\n    </div>\n    <div class=\"header-center\">\n      <input id=\"search-input\" placeholder=\"{{search}}\" v-if=\"search\"/>\n      <span v-if=\"title\">{{title}}</span>\n    </div>\n\n    <div @click='rightClick()' class=\"header-right\">\n        <a>\n          <span v-if=\"rightLabel\">\n            {{rightLabel}}\n          </span>\n          <span class=\"{{rightIcon}}\" v-if=\"rightIcon\">\n          </span>\n        </a>\n    </div> \n</header>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n  <div id=\"app-container\">\n    <router-view\n      class=\"view\"\n      keep-alive\n      transition\n      transition-mode=\"out-in\">\n    </router-view>\n  <!-- </div> -->\n</template>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\NewsView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\NewsView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NewsView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NewsView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".news-view {\n  padding-left: 5px;\n  padding-right: 15px;\n}\n.news-view.loading:before {\n  content: \"Loading...\";\n  position: absolute;\n  top: 16px;\n  left: 20px;\n}\n.news-view .nav {\n  padding: 10px 10px 10px 40px;\n  margin-top: 10px;\n  border-top: 2px solid #f60;\n}\n.news-view .nav a {\n  margin-right: 10px;\n}\n.news-view .nav a:hover {\n  text-decoration: underline;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/NewsView.vue","/./src/components/NewsView.vue"],"names":[],"mappings":"AACA;EACE,kBAAA;EACA,oBAAA;CCAD;ADCC;EACE,sBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;CCCH;ADAC;EACE,6BAAA;EACA,iBAAA;EACA,2BAAA;CCEH;ADDG;EACE,mBAAA;CCGL;ADFK;EACE,2BAAA;CCIP","file":"NewsView.vue","sourcesContent":["\r\n.news-view\r\n  padding-left 5px\r\n  padding-right 15px\r\n  &.loading:before\r\n    content \"Loading...\"\r\n    position absolute\r\n    top 16px\r\n    left 20px\r\n  .nav\r\n    padding 10px 10px 10px 40px\r\n    margin-top 10px\r\n    border-top 2px solid #f60\r\n    a\r\n      margin-right 10px\r\n      &:hover\r\n        text-decoration underline\r\n",".news-view {\n  padding-left: 5px;\n  padding-right: 15px;\n}\n.news-view.loading:before {\n  content: \"Loading...\";\n  position: absolute;\n  top: 16px;\n  left: 20px;\n}\n.news-view .nav {\n  padding: 10px 10px 10px 40px;\n  margin-top: 10px;\n  border-top: 2px solid #f60;\n}\n.news-view .nav a {\n  margin-right: 10px;\n}\n.news-view .nav a:hover {\n  text-decoration: underline;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _store = __webpack_require__(28);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Item = __webpack_require__(34);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div class="news-view" :class="{ loading: !items.length }">
	//     <!-- item list -->
	//     <item
	//       v-for="item in items"
	//       :item="item"
	//       :index="$index | formatItemIndex"
	//       track-by="id">
	//     </item>
	//     <!-- navigation -->
	//     <div class="nav" v-show="items.length > 0">
	//       <a v-if="page > 1" :href="'#/news/' + (page - 1)">&lt; prev</a>
	//       <a v-if="page < 4" :href="'#/news/' + (page + 1)">more...</a>
	//     </div>
	//   </div>
	// <!-- <index-tab></index-tab> -->
	// </template>
	// <script>
	exports.default = {
	
	  name: 'NewsView',
	
	  components: {
	    Item: _Item2.default
	  },
	
	  data: function data() {
	    return {
	      page: 1,
	      items: []
	    };
	  },
	
	
	  route: {
	    data: function data(_ref) {
	      var to = _ref.to;
	
	      // This is the route data hook. It gets called every time the route
	      // changes while this component is active.
	      //
	      // What we are doing:
	      //
	      // 1. Get the `to` route using ES2015 argument destructuring;
	      // 2. Get the `page` param and cast it to a Number;
	      // 3. Fetch the items from the store, which returns a Promise containing
	      //    the fetched items;
	      // 4. Chain the Promise and return the final data for the component.
	      //    Note we are waiting until the items are resolved before resolving
	      //    the entire object, because we don't want to update the page before
	      //    the items are fetched.
	      var page = +to.params.page;
	      document.title = 'Vue.js HN Clone';
	      return _store2.default.fetchItemsByPage(page).then(function (items) {
	        return {
	          page: page,
	          items: items
	        };
	      });
	    }
	  },
	
	  created: function created() {
	    _store2.default.on('topstories-updated', this.update);
	  },
	  destroyed: function destroyed() {
	    _store2.default.removeListener('topstories-updated', this.update);
	  },
	
	
	  methods: {
	    update: function update() {
	      var _this = this;
	
	      _store2.default.fetchItemsByPage(this.page).then(function (items) {
	        _this.items = items;
	      });
	    }
	  },
	
	  filters: {
	    formatItemIndex: function formatItemIndex(index) {
	      return (this.page - 1) * _store2.default.storiesPerPage + index + 1;
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// .news-view
	//   padding-left 5px
	//   padding-right 15px
	//   &.loading:before
	//     content "Loading..."
	//     position absolute
	//     top 16px
	//     left 20px
	//   .nav
	//     padding 10px 10px 10px 40px
	//     margin-top 10px
	//     border-top 2px solid #f60
	//     a
	//       margin-right 10px
	//       &:hover
	//         text-decoration underline
	// </style>

	/* generated by vue-loader */

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(29);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _firebase = __webpack_require__(31);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _events = __webpack_require__(32);
	
	var _es6Promise = __webpack_require__(33);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var api = new _firebase2.default('https://hacker-news.firebaseio.com/v0');
	var itemsCache = (0, _create2.default)(null);
	var store = new _events.EventEmitter();
	var storiesPerPage = store.storiesPerPage = 30;
	
	var topStoryIds = [];
	
	exports.default = store;
	
	/**
	 * Subscribe to real time updates of the top 100 stories,
	 * and cache the IDs locally.
	 */
	
	api.child('topstories').on('value', function (snapshot) {
	  topStoryIds = snapshot.val();
	  store.emit('topstories-updated');
	});
	
	/**
	 * Fetch an item data with given id.
	 *
	 * @param {Number} id
	 * @return {Promise}
	 */
	
	store.fetchItem = function (id) {
	  return new _es6Promise.Promise(function (resolve, reject) {
	    if (itemsCache[id]) {
	      resolve(itemsCache[id]);
	    } else {
	      api.child('item/' + id).once('value', function (snapshot) {
	        var story = itemsCache[id] = snapshot.val();
	        resolve(story);
	      }, reject);
	    }
	  });
	};
	
	/**
	 * Fetch the given list of items.
	 *
	 * @param {Array<Number>} ids
	 * @return {Promise}
	 */
	
	store.fetchItems = function (ids) {
	  if (!ids || !ids.length) {
	    return _es6Promise.Promise.resolve([]);
	  } else {
	    return _es6Promise.Promise.all(ids.map(function (id) {
	      return store.fetchItem(id);
	    }));
	  }
	};
	
	/**
	 * Fetch items for the given page.
	 *
	 * @param {Number} page
	 * @return {Promise}
	 */
	
	store.fetchItemsByPage = function (page) {
	  var start = (page - 1) * storiesPerPage;
	  var end = page * storiesPerPage;
	  var ids = topStoryIds.slice(start, end);
	  return store.fetchItems(ids);
	};
	
	/**
	 * Fetch a user data with given id.
	 *
	 * @param {Number} id
	 * @return {Promise}
	 */
	
	store.fetchUser = function (id) {
	  return new _es6Promise.Promise(function (resolve, reject) {
	    api.child('user/' + id).once('value', function (snapshot) {
	      resolve(snapshot.val());
	    }, reject);
	  });
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	/*! @license Firebase v2.4.1
	    License: https://www.firebase.com/terms/terms-of-service.html */
	(function() {var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.yb=function(){return a.zf?a.zf:a.zf=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function r(a){return"function"==ca(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a,b,c){return a.call.apply(a.bind,arguments)}
	function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)}var ja=Date.now||function(){return+new Date};
	function ka(a,b){function c(){}c.prototype=b.prototype;a.oh=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kh=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function la(a){if(Error.captureStackTrace)Error.captureStackTrace(this,la);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(la,Error);la.prototype.name="CustomError";function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ma(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function na(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function oa(a){var b=0,c;for(c in a)b++;return b}function pa(a){for(var b in a)return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function sa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function ta(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function ua(a,b){var c=ta(a,b,void 0);return c&&a[c]}function va(a){for(var b in a)return!1;return!0}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Vd=void 0}
	function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Vd?a.Vd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
	c.push(":"),Ba(a,a.Vd?a.Vd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};function Fa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ja()).toString(36)};var w;a:{var Ga=n.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){w=Ha;break a}}w=""};function Ia(){this.Ya=-1};function Ja(){this.Ya=-1;this.Ya=64;this.P=[];this.pe=[];this.eg=[];this.Od=[];this.Od[0]=128;for(var a=1;a<this.Ya;++a)this.Od[a]=0;this.ge=this.ec=0;this.reset()}ka(Ja,Ia);Ja.prototype.reset=function(){this.P[0]=1732584193;this.P[1]=4023233417;this.P[2]=2562383102;this.P[3]=271733878;this.P[4]=3285377520;this.ge=this.ec=0};
	function Ka(a,b,c){c||(c=0);var d=a.eg;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.P[0];c=a.P[1];for(var g=a.P[2],k=a.P[3],m=a.P[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.P[0]=a.P[0]+b&4294967295;a.P[1]=a.P[1]+c&4294967295;a.P[2]=a.P[2]+g&4294967295;a.P[3]=a.P[3]+k&4294967295;a.P[4]=a.P[4]+m&4294967295}
	Ja.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.pe,f=this.ec;d<b;){if(0==f)for(;d<=c;)Ka(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){Ka(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){Ka(this,e);f=0;break}}this.ec=f;this.ge+=b}};var x=Array.prototype,La=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ma=x.forEach?function(a,b,c){x.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=x.filter?function(a,b,c){return x.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Oa=x.map?function(a,b,c){return x.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Pa=x.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=u(b,d));return x.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ma(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Qa=x.every?function(a,b,
	c){return x.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ra(a,b){var c=Sa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Sa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Ta(a,b){var c=La(a,b);0<=c&&x.splice.call(a,c,1)}function Ua(a,b,c){return 2>=arguments.length?x.slice.call(a,b):x.slice.call(a,b,c)}
	function Va(a,b){a.sort(b||Wa)}function Wa(a,b){return a>b?1:a<b?-1:0};function Xa(a){n.setTimeout(function(){throw a;},0)}var Ya;
	function Za(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.hb;c.hb=null;a()}};return function(a){d.next={hb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function $a(a,b){ab||bb();cb||(ab(),cb=!0);db.push(new eb(a,b))}var ab;function bb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();ab=function(){a.then(fb)}}else ab=function(){var a=fb;!r(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(Ya||(Ya=Za()),Ya(a)):n.setImmediate(a)}}var cb=!1,db=[];[].push(function(){cb=!1;db=[]});
	function fb(){for(;db.length;){var a=db;db=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.yg.call(c.scope)}catch(d){Xa(d)}}}cb=!1}function eb(a,b){this.yg=a;this.scope=b};var gb=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),hb=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),ib=-1!=w.indexOf("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE")),jb=-1!=w.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(gb&&n.opera)return a=n.opera.version,r(a)?a():a;ib?b=/rv\:([^\);]+)(\)|;)/:hb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:jb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(w))?a[1]:"");return hb&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var kb=null,lb=null,mb=null;function nb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");ob();for(var c=b?lb:kb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[t],c[f],c[k],c[l])}return d.join("")}
	function ob(){if(!kb){kb={};lb={};mb={};for(var a=0;65>a;a++)kb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),lb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),mb[lb[a]]=a,62<=a&&(mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function pb(a,b){this.N=qb;this.Rf=void 0;this.Ba=this.Ha=null;this.yd=this.ye=!1;if(a==rb)sb(this,tb,b);else try{var c=this;a.call(b,function(a){sb(c,tb,a)},function(a){if(!(a instanceof ub))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}sb(c,vb,a)})}catch(d){sb(this,vb,d)}}var qb=0,tb=2,vb=3;function rb(){}pb.prototype.then=function(a,b,c){return wb(this,r(a)?a:null,r(b)?b:null,c)};pb.prototype.then=pb.prototype.then;pb.prototype.$goog_Thenable=!0;h=pb.prototype;
	h.fh=function(a,b){return wb(this,null,a,b)};h.cancel=function(a){this.N==qb&&$a(function(){var b=new ub(a);xb(this,b)},this)};function xb(a,b){if(a.N==qb)if(a.Ha){var c=a.Ha;if(c.Ba){for(var d=0,e=-1,f=0,g;g=c.Ba[f];f++)if(g=g.o)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.N==qb&&1==d?xb(c,b):(d=c.Ba.splice(e,1)[0],yb(c,d,vb,b)))}a.Ha=null}else sb(a,vb,b)}function zb(a,b){a.Ba&&a.Ba.length||a.N!=tb&&a.N!=vb||Ab(a);a.Ba||(a.Ba=[]);a.Ba.push(b)}
	function wb(a,b,c,d){var e={o:null,Hf:null,Jf:null};e.o=new pb(function(a,g){e.Hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.Jf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ub?g(b):a(e)}catch(l){g(l)}}:g});e.o.Ha=a;zb(a,e);return e.o}h.Yf=function(a){this.N=qb;sb(this,tb,a)};h.Zf=function(a){this.N=qb;sb(this,vb,a)};
	function sb(a,b,c){if(a.N==qb){if(a==c)b=vb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.N=1;c.then(a.Yf,a.Zf,a);return}if(ga(c))try{var f=c.then;if(r(f)){Bb(a,c,f);return}}catch(g){b=vb,c=g}}a.Rf=c;a.N=b;a.Ha=null;Ab(a);b!=vb||c instanceof ub||Cb(a,c)}}function Bb(a,b,c){function d(b){f||(f=!0,a.Zf(b))}function e(b){f||(f=!0,a.Yf(b))}a.N=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
	function Ab(a){a.ye||(a.ye=!0,$a(a.wg,a))}h.wg=function(){for(;this.Ba&&this.Ba.length;){var a=this.Ba;this.Ba=null;for(var b=0;b<a.length;b++)yb(this,a[b],this.N,this.Rf)}this.ye=!1};function yb(a,b,c,d){if(c==tb)b.Hf(d);else{if(b.o)for(;a&&a.yd;a=a.Ha)a.yd=!1;b.Jf(d)}}function Cb(a,b){a.yd=!0;$a(function(){a.yd&&Db.call(null,b)})}var Db=Xa;function ub(a){la.call(this,a)}ka(ub,la);ub.prototype.name="cancel";var Eb=Eb||"2.4.1";function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function z(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function Gb(a){var b={};Fb(a,function(a,d){b[a]=d});return b}function Hb(a){return"object"===typeof a&&null!==a};function Ib(a){var b=[];Fb(a,function(a,d){da(d)?Ma(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function Jb(a){var b={};a=a.replace(/^\?/,"").split("&");Ma(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase ("+Eb+") INTERNAL ASSERT FAILED: "+a)};var Mb=n.Promise||pb;pb.prototype["catch"]=pb.prototype.fh;function B(){var a=this;this.reject=this.resolve=null;this.D=new Mb(function(b,c){a.resolve=b;a.reject=c})}function C(a,b){return function(c,d){c?a.reject(c):a.resolve(d);r(b)&&(Nb(a.D),1===b.length?b(c):b(c,d))}}function Nb(a){a.then(void 0,aa)};function Ob(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Pb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function E(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function F(a,b,c,d){if((!d||p(c))&&!r(c))throw Error(E(a,b,d)+"must be a valid function.");}function Qb(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(E(a,b,!0)+"must be a valid context object.");};function Rb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function G(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Sb(){this.Zd=H}Sb.prototype.j=function(a){return this.Zd.S(a)};Sb.prototype.toString=function(){return this.Zd.toString()};function Tb(){}Tb.prototype.uf=function(){return null};Tb.prototype.Ce=function(){return null};var Ub=new Tb;function Vb(a,b,c){this.bg=a;this.Oa=b;this.Nd=c}Vb.prototype.uf=function(a){var b=this.Oa.Q;if(Wb(b,a))return b.j().T(a);b=null!=this.Nd?new Xb(this.Nd,!0,!1):this.Oa.w();return this.bg.Bc(a,b)};Vb.prototype.Ce=function(a,b,c){var d=null!=this.Nd?this.Nd:Yb(this.Oa);a=this.bg.qe(d,b,1,c,a);return 0===a.length?null:a[0]};function Zb(){this.xb=[]}function $b(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.cc();null===c||f.ea(c.cc())||(a.xb.push(c),c=null);null===c&&(c=new ac(f));c.add(e)}c&&a.xb.push(c)}function bc(a,b,c){$b(a,c);cc(a,function(a){return a.ea(b)})}function dc(a,b,c){$b(a,c);cc(a,function(a){return a.contains(b)||b.contains(a)})}
	function cc(a,b){for(var c=!0,d=0;d<a.xb.length;d++){var e=a.xb[d];if(e)if(e=e.cc(),b(e)){for(var e=a.xb[d],f=0;f<e.xd.length;f++){var g=e.xd[f];if(null!==g){e.xd[f]=null;var k=g.Zb();ec&&fc("event: "+g.toString());gc(k)}}a.xb[d]=null}else c=!1}c&&(a.xb=[])}function ac(a){this.ta=a;this.xd=[]}ac.prototype.add=function(a){this.xd.push(a)};ac.prototype.cc=function(){return this.ta};function J(a,b,c,d){this.type=a;this.Na=b;this.Za=c;this.Oe=d;this.Td=void 0}function hc(a){return new J(ic,a)}var ic="value";function jc(a,b,c,d){this.xe=b;this.be=c;this.Td=d;this.wd=a}jc.prototype.cc=function(){var a=this.be.Mb();return"value"===this.wd?a.path:a.parent().path};jc.prototype.De=function(){return this.wd};jc.prototype.Zb=function(){return this.xe.Zb(this)};jc.prototype.toString=function(){return this.cc().toString()+":"+this.wd+":"+G(this.be.qf())};function kc(a,b,c){this.xe=a;this.error=b;this.path=c}kc.prototype.cc=function(){return this.path};kc.prototype.De=function(){return"cancel"};
	kc.prototype.Zb=function(){return this.xe.Zb(this)};kc.prototype.toString=function(){return this.path.toString()+":cancel"};function Xb(a,b,c){this.A=a;this.ga=b;this.Yb=c}function lc(a){return a.ga}function mc(a){return a.Yb}function nc(a,b){return b.e()?a.ga&&!a.Yb:Wb(a,K(b))}function Wb(a,b){return a.ga&&!a.Yb||a.A.Fa(b)}Xb.prototype.j=function(){return this.A};function oc(a){this.pg=a;this.Gd=null}oc.prototype.get=function(){var a=this.pg.get(),b=wa(a);if(this.Gd)for(var c in this.Gd)b[c]-=this.Gd[c];this.Gd=a;return b};function pc(a,b){this.Vf={};this.hd=new oc(a);this.da=b;var c=1E4+2E4*Math.random();setTimeout(u(this.Of,this),Math.floor(c))}pc.prototype.Of=function(){var a=this.hd.get(),b={},c=!1,d;for(d in a)0<a[d]&&y(this.Vf,d)&&(b[d]=a[d],c=!0);c&&this.da.Ye(b);setTimeout(u(this.Of,this),Math.floor(6E5*Math.random()))};function qc(){this.Hc={}}function rc(a,b,c){p(c)||(c=1);y(a.Hc,b)||(a.Hc[b]=0);a.Hc[b]+=c}qc.prototype.get=function(){return wa(this.Hc)};var sc={},tc={};function uc(a){a=a.toString();sc[a]||(sc[a]=new qc);return sc[a]}function vc(a,b){var c=a.toString();tc[c]||(tc[c]=b());return tc[c]};function L(a,b){this.name=a;this.U=b}function wc(a,b){return new L(a,b)};function xc(a,b){return yc(a.name,b.name)}function zc(a,b){return yc(a,b)};function Ac(a,b,c){this.type=Bc;this.source=a;this.path=b;this.Ja=c}Ac.prototype.$c=function(a){return this.path.e()?new Ac(this.source,M,this.Ja.T(a)):new Ac(this.source,N(this.path),this.Ja)};Ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function Cc(a,b){this.type=Dc;this.source=a;this.path=b}Cc.prototype.$c=function(){return this.path.e()?new Cc(this.source,M):new Cc(this.source,N(this.path))};Cc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Ec(a,b){this.Pa=a;this.xa=b?b:Fc}h=Ec.prototype;h.Sa=function(a,b){return new Ec(this.Pa,this.xa.Sa(a,b,this.Pa).$(null,null,!1,null,null))};h.remove=function(a){return new Ec(this.Pa,this.xa.remove(a,this.Pa).$(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.Pa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Gc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.Pa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Vc=function(){return this.xa.Vc()};h.jc=function(){return this.xa.jc()};h.ka=function(a){return this.xa.ka(a)};
	h.ac=function(a){return new Hc(this.xa,null,this.Pa,!1,a)};h.bc=function(a,b){return new Hc(this.xa,a,this.Pa,!1,b)};h.dc=function(a,b){return new Hc(this.xa,a,this.Pa,!0,b)};h.xf=function(a){return new Hc(this.xa,null,this.Pa,!0,a)};function Hc(a,b,c,d,e){this.Xd=e||null;this.Je=d;this.Ta=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Je?a.left:a.right;else if(0===e){this.Ta.push(a);break}else this.Ta.push(a),a=this.Je?a.right:a.left}
	function Ic(a){if(0===a.Ta.length)return null;var b=a.Ta.pop(),c;c=a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value};if(a.Je)for(b=b.left;!b.e();)a.Ta.push(b),b=b.right;else for(b=b.right;!b.e();)a.Ta.push(b),b=b.left;return c}function Jc(a){if(0===a.Ta.length)return null;var b;b=a.Ta;b=b[b.length-1];return a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value}}function Kc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Fc;this.right=null!=e?e:Fc}h=Kc.prototype;
	h.$=function(a,b,c,d,e){return new Kc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ka=function(a){return this.left.ka(a)||a(this.key,this.value)||this.right.ka(a)};function Lc(a){return a.left.e()?a:Lc(a.left)}h.Vc=function(){return Lc(this).key};h.jc=function(){return this.right.e()?this.key:this.right.jc()};
	h.Sa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.$(null,null,null,e.left.Sa(a,b,c),null):0===d?e.$(null,b,null,null,null):e.$(null,null,null,null,e.right.Sa(a,b,c));return Mc(e)};function Nc(a){if(a.left.e())return Fc;a.left.ha()||a.left.left.ha()||(a=Oc(a));a=a.$(null,null,null,Nc(a.left),null);return Mc(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ha()||c.left.left.ha()||(c=Oc(c)),c=c.$(null,null,null,c.left.remove(a,b),null);else{c.left.ha()&&(c=Pc(c));c.right.e()||c.right.ha()||c.right.left.ha()||(c=Qc(c),c.left.left.ha()&&(c=Pc(c),c=Qc(c)));if(0===b(a,c.key)){if(c.right.e())return Fc;d=Lc(c.right);c=c.$(d.key,d.value,null,null,Nc(c.right))}c=c.$(null,null,null,null,c.right.remove(a,b))}return Mc(c)};h.ha=function(){return this.color};
	function Mc(a){a.right.ha()&&!a.left.ha()&&(a=Rc(a));a.left.ha()&&a.left.left.ha()&&(a=Pc(a));a.left.ha()&&a.right.ha()&&(a=Qc(a));return a}function Oc(a){a=Qc(a);a.right.left.ha()&&(a=a.$(null,null,null,null,Pc(a.right)),a=Rc(a),a=Qc(a));return a}function Rc(a){return a.right.$(null,null,a.color,a.$(null,null,!0,null,a.right.left),null)}function Pc(a){return a.left.$(null,null,a.color,null,a.$(null,null,!0,a.left.right,null))}
	function Qc(a){return a.$(null,null,!a.color,a.left.$(null,null,!a.left.color,null,null),a.right.$(null,null,!a.right.color,null,null))}function Sc(){}h=Sc.prototype;h.$=function(){return this};h.Sa=function(a,b){return new Kc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ka=function(){return!1};h.Vc=function(){return null};h.jc=function(){return null};h.ha=function(){return!1};var Fc=new Sc;function Tc(a,b){return a&&"object"===typeof a?(O(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Uc(a,b){var c=new Vc;Wc(a,new P(""),function(a,e){c.rc(a,Xc(e,b))});return c}function Xc(a,b){var c=a.C().J(),c=Tc(c,b),d;if(a.L()){var e=Tc(a.Ea(),b);return e!==a.Ea()||c!==a.C().J()?new Yc(e,Q(c)):a}d=a;c!==a.C().J()&&(d=d.ia(new Yc(c)));a.R(R,function(a,c){var e=Xc(c,b);e!==c&&(d=d.W(a,e))});return d};function Zc(){this.Ac={}}Zc.prototype.set=function(a,b){null==b?delete this.Ac[a]:this.Ac[a]=b};Zc.prototype.get=function(a){return y(this.Ac,a)?this.Ac[a]:null};Zc.prototype.remove=function(a){delete this.Ac[a]};Zc.prototype.Af=!0;function $c(a){this.Ic=a;this.Sd="firebase:"}h=$c.prototype;h.set=function(a,b){null==b?this.Ic.removeItem(this.Sd+a):this.Ic.setItem(this.Sd+a,G(b))};h.get=function(a){a=this.Ic.getItem(this.Sd+a);return null==a?null:Rb(a)};h.remove=function(a){this.Ic.removeItem(this.Sd+a)};h.Af=!1;h.toString=function(){return this.Ic.toString()};function ad(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new $c(b)}}catch(c){}return new Zc}var bd=ad("localStorage"),cd=ad("sessionStorage");function dd(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.ob=b;this.lc=c;this.ih=d;this.Rd=e||"";this.ab=bd.get("host:"+a)||this.host}function ed(a,b){b!==a.ab&&(a.ab=b,"s-"===a.ab.substr(0,2)&&bd.set("host:"+a.host,a.ab))}
	function fd(a,b,c){O("string"===typeof b,"typeof type must == string");O("object"===typeof c,"typeof params must == object");if(b===gd)b=(a.ob?"wss://":"ws://")+a.ab+"/.ws?";else if(b===hd)b=(a.ob?"https://":"http://")+a.ab+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.ab&&(c.ns=a.lc);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}dd.prototype.toString=function(){var a=(this.ob?"https://":"http://")+this.host;this.Rd&&(a+="<"+this.Rd+">");return a};var id=function(){var a=1;return function(){return a++}}(),O=Kb,jd=Lb;
	function kd(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{ob();for(var c=mb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ua(d,c,
	c+8192));b=a}}return b}catch(l){fc("base64Decode failed: ",l)}return null}function ld(a){var b=Ob(a);a=new Ja;a.update(b);var b=[],c=8*a.ge;56>a.ec?a.update(a.Od,56-a.ec):a.update(a.Od,a.Ya-(a.ec-56));for(var d=a.Ya-1;56<=d;d--)a.pe[d]=c&255,c/=256;Ka(a,a.pe);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.P[d]>>e&255,++c;return nb(b)}
	function md(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+md.apply(null,arguments[c]):"object"===typeof arguments[c]?b+G(arguments[c]):b+arguments[c],b+=" ";return b}var ec=null,nd=!0;
	function od(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?ec=u(console.log,console):"object"===typeof console.log&&(ec=function(a){console.log(a)})),b&&cd.set("logging_enabled",!0)):r(a)?ec=a:(ec=null,cd.remove("logging_enabled"))}function fc(a){!0===nd&&(nd=!1,null===ec&&!0===cd.get("logging_enabled")&&od(!0));if(ec){var b=md.apply(null,arguments);ec(b)}}
	function pd(a){return function(){fc(a,arguments)}}function qd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+md.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function rd(a){var b=md.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function S(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+md.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function sd(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(q(a)){var m=a.indexOf("//");0<=m&&(g=a.substring(0,m-1),a=a.substring(m+2));m=a.indexOf("/");-1===m&&(m=a.length);b=a.substring(0,m);e="";a=a.substring(m).split("/");for(m=0;m<a.length;m++)if(0<a[m].length){var l=a[m];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(t){}e+="/"+l}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);m=b.indexOf(":");0<=m&&(f="https"===g||"wss"===g,k=b.substring(m+1),isFinite(k)&&
	(k=String(k)),k=q(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,eh:d,ob:f,scheme:g,bd:e}}function td(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function ud(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function yc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=vd(a),d=vd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function wd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+G(b));}
	function xd(a){if("object"!==typeof a||null===a)return G(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=G(b[d]),c+=":",c+=xd(a[b[d]]);return c+"}"}function yd(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function zd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
	function Ad(a){O(!td(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var Bd=/^-?\d{1,10}$/;function vd(a){return Bd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function gc(a){try{a()}catch(b){setTimeout(function(){S("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function T(a,b){if(r(a)){var c=Array.prototype.slice.call(arguments,1).slice();gc(function(){a.apply(null,c)})}};function Cd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Rb(kd(f[0])||""),c=Rb(kd(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{lh:b,Ec:c,data:d,ah:e}}function Dd(a){a=Cd(a).Ec;return"object"===typeof a&&a.hasOwnProperty("iat")?z(a,"iat"):null}function Ed(a){a=Cd(a);var b=a.Ec;return!!a.ah&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Fd(a){this.Y=a;this.g=a.n.g}function Gd(a,b,c,d){var e=[],f=[];Ma(b,function(b){"child_changed"===b.type&&a.g.Dd(b.Oe,b.Na)&&f.push(new J("child_moved",b.Na,b.Za))});Hd(a,e,"child_removed",b,d,c);Hd(a,e,"child_added",b,d,c);Hd(a,e,"child_moved",f,d,c);Hd(a,e,"child_changed",b,d,c);Hd(a,e,ic,b,d,c);return e}function Hd(a,b,c,d,e,f){d=Na(d,function(a){return a.type===c});Va(d,u(a.qg,a));Ma(d,function(c){var d=Id(a,c,f);Ma(e,function(e){e.Qf(c.type)&&b.push(e.createEvent(d,a.Y))})})}
	function Id(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Td=c.wf(b.Za,b.Na,a.g));return b}Fd.prototype.qg=function(a,b){if(null==a.Za||null==b.Za)throw jd("Should only compare child_ events.");return this.g.compare(new L(a.Za,a.Na),new L(b.Za,b.Na))};function Jd(){this.ib={}}
	function Kd(a,b){var c=b.type,d=b.Za;O("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");O(".priority"!==d,"Only non-priority child changes can be tracked.");var e=z(a.ib,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Na);else if("child_removed"==c&&"child_added"==f)delete a.ib[d];else if("child_removed"==c&&"child_changed"==f)a.ib[d]=new J("child_removed",e.Oe,d);else if("child_changed"==c&&
	"child_added"==f)a.ib[d]=new J("child_added",b.Na,d);else if("child_changed"==c&&"child_changed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Oe);else throw jd("Illegal combination of changes: "+b+" occurred after "+e);}else a.ib[d]=b};function Ld(a){this.g=a}h=Ld.prototype;h.H=function(a,b,c,d,e,f){O(a.Mc(this.g),"A node must be indexed if only a child is updated");e=a.T(b);if(e.S(d).ea(c.S(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Kd(f,new J("child_removed",e,b)):O(a.L(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Kd(f,new J("child_added",c,b)):Kd(f,new J("child_changed",c,b,e)));return a.L()&&c.e()?a:a.W(b,c).pb(this.g)};
	h.ya=function(a,b,c){null!=c&&(a.L()||a.R(R,function(a,e){b.Fa(a)||Kd(c,new J("child_removed",e,a))}),b.L()||b.R(R,function(b,e){if(a.Fa(b)){var f=a.T(b);f.ea(e)||Kd(c,new J("child_changed",e,b,f))}else Kd(c,new J("child_added",e,b))}));return b.pb(this.g)};h.ia=function(a,b){return a.e()?H:a.ia(b)};h.Ra=function(){return!1};h.$b=function(){return this};function Md(a){this.Fe=new Ld(a.g);this.g=a.g;var b;a.oa?(b=Nd(a),b=a.g.Sc(Od(a),b)):b=a.g.Wc();this.gd=b;a.ra?(b=Pd(a),a=a.g.Sc(Rd(a),b)):a=a.g.Tc();this.Jc=a}h=Md.prototype;h.matches=function(a){return 0>=this.g.compare(this.gd,a)&&0>=this.g.compare(a,this.Jc)};h.H=function(a,b,c,d,e,f){this.matches(new L(b,c))||(c=H);return this.Fe.H(a,b,c,d,e,f)};
	h.ya=function(a,b,c){b.L()&&(b=H);var d=b.pb(this.g),d=d.ia(H),e=this;b.R(R,function(a,b){e.matches(new L(a,b))||(d=d.W(a,H))});return this.Fe.ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.Fe};function Sd(a){this.ua=new Md(a);this.g=a.g;O(a.la,"Only valid if limit has been set");this.ma=a.ma;this.Nb=!Td(a)}h=Sd.prototype;h.H=function(a,b,c,d,e,f){this.ua.matches(new L(b,c))||(c=H);return a.T(b).ea(c)?a:a.Hb()<this.ma?this.ua.$b().H(a,b,c,d,e,f):Ud(this,a,b,c,e,f)};
	h.ya=function(a,b,c){var d;if(b.L()||b.e())d=H.pb(this.g);else if(2*this.ma<b.Hb()&&b.Mc(this.g)){d=H.pb(this.g);b=this.Nb?b.dc(this.ua.Jc,this.g):b.bc(this.ua.gd,this.g);for(var e=0;0<b.Ta.length&&e<this.ma;){var f=Ic(b),g;if(g=this.Nb?0>=this.g.compare(this.ua.gd,f):0>=this.g.compare(f,this.ua.Jc))d=d.W(f.name,f.U),e++;else break}}else{d=b.pb(this.g);d=d.ia(H);var k,m,l;if(this.Nb){b=d.xf(this.g);k=this.ua.Jc;m=this.ua.gd;var t=Vd(this.g);l=function(a,b){return t(b,a)}}else b=d.ac(this.g),k=this.ua.gd,
	m=this.ua.Jc,l=Vd(this.g);for(var e=0,A=!1;0<b.Ta.length;)f=Ic(b),!A&&0>=l(k,f)&&(A=!0),(g=A&&e<this.ma&&0>=l(f,m))?e++:d=d.W(f.name,H)}return this.ua.$b().ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.ua.$b()};
	function Ud(a,b,c,d,e,f){var g;if(a.Nb){var k=Vd(a.g);g=function(a,b){return k(b,a)}}else g=Vd(a.g);O(b.Hb()==a.ma,"");var m=new L(c,d),l=a.Nb?Wd(b,a.g):Xd(b,a.g),t=a.ua.matches(m);if(b.Fa(c)){for(var A=b.T(c),l=e.Ce(a.g,l,a.Nb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.Ce(a.g,l,a.Nb);e=null==l?1:g(l,m);if(t&&!d.e()&&0<=e)return null!=f&&Kd(f,new J("child_changed",d,c,A)),b.W(c,d);null!=f&&Kd(f,new J("child_removed",A,c));b=b.W(c,H);return null!=l&&a.ua.matches(l)?(null!=f&&Kd(f,new J("child_added",
	l.U,l.name)),b.W(l.name,l.U)):b}return d.e()?b:t&&0<=g(l,m)?(null!=f&&(Kd(f,new J("child_removed",l.U,l.name)),Kd(f,new J("child_added",d,c))),b.W(c,d).W(l.name,H)):b};function Yd(a,b){this.me=a;this.og=b}function Zd(a){this.X=a}
	Zd.prototype.gb=function(a,b,c,d){var e=new Jd,f;if(b.type===Bc)b.source.Ae?c=$d(this,a,b.path,b.Ja,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w())&&!b.path.e(),c=ae(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===be)b.source.Ae?c=ce(this,a,b.path,b.children,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w()),c=de(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Yd)if(b=b.path,null!=c.xc(b))c=a;else{f=new Vb(c,a,d);d=a.Q.j();if(b.e()||".priority"===K(b))lc(a.w())?
	b=c.Aa(Yb(a)):(b=a.w().j(),O(b instanceof fe,"serverChildren would be complete if leaf node"),b=c.Cc(b)),b=this.X.ya(d,b,e);else{var g=K(b),k=c.Bc(g,a.w());null==k&&Wb(a.w(),g)&&(k=d.T(g));b=null!=k?this.X.H(d,g,k,N(b),f,e):a.Q.j().Fa(g)?this.X.H(d,g,H,N(b),f,e):d;b.e()&&lc(a.w())&&(d=c.Aa(Yb(a)),d.L()&&(b=this.X.ya(b,d,e)))}d=lc(a.w())||null!=c.xc(M);c=ge(a,b,d,this.X.Ra())}else c=he(this,a,b.path,b.Ub,c,d,e);else if(b.type===Dc)d=b.path,b=a.w(),f=b.j(),g=b.ga||d.e(),c=ie(this,new je(a.Q,new Xb(f,
	g,b.Yb)),d,c,Ub,e);else throw jd("Unknown operation type: "+b.type);e=qa(e.ib);d=c;b=d.Q;b.ga&&(f=b.j().L()||b.j().e(),g=ke(a),(0<e.length||!a.Q.ga||f&&!b.j().ea(g)||!b.j().C().ea(g.C()))&&e.push(hc(ke(d))));return new Yd(c,e)};
	function ie(a,b,c,d,e,f){var g=b.Q;if(null!=d.xc(c))return b;var k;if(c.e())O(lc(b.w()),"If change path is empty, we must have complete server data"),mc(b.w())?(e=Yb(b),d=d.Cc(e instanceof fe?e:H)):d=d.Aa(Yb(b)),f=a.X.ya(b.Q.j(),d,f);else{var m=K(c);if(".priority"==m)O(1==le(c),"Can't have a priority with additional path components"),f=g.j(),k=b.w().j(),d=d.nd(c,f,k),f=null!=d?a.X.ia(f,d):g.j();else{var l=N(c);Wb(g,m)?(k=b.w().j(),d=d.nd(c,g.j(),k),d=null!=d?g.j().T(m).H(l,d):g.j().T(m)):d=d.Bc(m,
	b.w());f=null!=d?a.X.H(g.j(),m,d,l,e,f):g.j()}}return ge(b,f,g.ga||c.e(),a.X.Ra())}function ae(a,b,c,d,e,f,g,k){var m=b.w();g=g?a.X:a.X.$b();if(c.e())d=g.ya(m.j(),d,null);else if(g.Ra()&&!m.Yb)d=m.j().H(c,d),d=g.ya(m.j(),d,null);else{var l=K(c);if(!nc(m,c)&&1<le(c))return b;var t=N(c);d=m.j().T(l).H(t,d);d=".priority"==l?g.ia(m.j(),d):g.H(m.j(),l,d,t,Ub,null)}m=m.ga||c.e();b=new je(b.Q,new Xb(d,m,g.Ra()));return ie(a,b,c,e,new Vb(e,b,f),k)}
	function $d(a,b,c,d,e,f,g){var k=b.Q;e=new Vb(e,b,f);if(c.e())g=a.X.ya(b.Q.j(),d,g),a=ge(b,g,!0,a.X.Ra());else if(f=K(c),".priority"===f)g=a.X.ia(b.Q.j(),d),a=ge(b,g,k.ga,k.Yb);else{c=N(c);var m=k.j().T(f);if(!c.e()){var l=e.uf(f);d=null!=l?".priority"===me(c)&&l.S(c.parent()).e()?l:l.H(c,d):H}m.ea(d)?a=b:(g=a.X.H(k.j(),f,d,c,e,g),a=ge(b,g,k.ga,a.X.Ra()))}return a}
	function ce(a,b,c,d,e,f,g){var k=b;ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))&&(k=$d(a,k,t,l,e,f,g))});ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))||(k=$d(a,k,t,l,e,f,g))});return k}function oe(a,b){ne(b,function(b,d){a=a.H(b,d)});return a}
	function de(a,b,c,d,e,f,g,k){if(b.w().j().e()&&!lc(b.w()))return b;var m=b;c=c.e()?d:pe(qe,c,d);var l=b.w().j();c.children.ka(function(c,d){if(l.Fa(c)){var I=b.w().j().T(c),I=oe(I,d);m=ae(a,m,new P(c),I,e,f,g,k)}});c.children.ka(function(c,d){var I=!Wb(b.w(),c)&&null==d.value;l.Fa(c)||I||(I=b.w().j().T(c),I=oe(I,d),m=ae(a,m,new P(c),I,e,f,g,k))});return m}
	function he(a,b,c,d,e,f,g){if(null!=e.xc(c))return b;var k=mc(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.ga||nc(m,c))return ae(a,b,c,m.j().S(c),e,f,k,g);if(c.e()){var l=qe;m.j().R(re,function(a,b){l=l.set(new P(a),b)});return de(a,b,c,l,e,f,k,g)}return b}l=qe;ne(d,function(a){var b=c.o(a);nc(m,b)&&(l=l.set(a,m.j().S(b)))});return de(a,b,c,l,e,f,k,g)};function se(){}var te={};function Vd(a){return u(a.compare,a)}se.prototype.Dd=function(a,b){return 0!==this.compare(new L("[MIN_NAME]",a),new L("[MIN_NAME]",b))};se.prototype.Wc=function(){return ue};function ve(a){O(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.gc=a}ka(ve,se);h=ve.prototype;h.Lc=function(a){return!a.S(this.gc).e()};h.compare=function(a,b){var c=a.U.S(this.gc),d=b.U.S(this.gc),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};
	h.Sc=function(a,b){var c=Q(a),c=H.H(this.gc,c);return new L(b,c)};h.Tc=function(){var a=H.H(this.gc,we);return new L("[MAX_NAME]",a)};h.toString=function(){return this.gc.slice().join("/")};function xe(){}ka(xe,se);h=xe.prototype;h.compare=function(a,b){var c=a.U.C(),d=b.U.C(),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};h.Lc=function(a){return!a.C().e()};h.Dd=function(a,b){return!a.C().ea(b.C())};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",new Yc("[PRIORITY-POST]",we))};
	h.Sc=function(a,b){var c=Q(a);return new L(b,new Yc("[PRIORITY-POST]",c))};h.toString=function(){return".priority"};var R=new xe;function ye(){}ka(ye,se);h=ye.prototype;h.compare=function(a,b){return yc(a.name,b.name)};h.Lc=function(){throw jd("KeyIndex.isDefinedOn not expected to be called.");};h.Dd=function(){return!1};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",H)};h.Sc=function(a){O(q(a),"KeyIndex indexValue must always be a string.");return new L(a,H)};h.toString=function(){return".key"};
	var re=new ye;function ze(){}ka(ze,se);h=ze.prototype;h.compare=function(a,b){var c=a.U.Gc(b.U);return 0===c?yc(a.name,b.name):c};h.Lc=function(){return!0};h.Dd=function(a,b){return!a.ea(b)};h.Wc=function(){return ue};h.Tc=function(){return Ae};h.Sc=function(a,b){var c=Q(a);return new L(b,c)};h.toString=function(){return".value"};var Be=new ze;function Ce(){this.Xb=this.ra=this.Pb=this.oa=this.la=!1;this.ma=0;this.Rb="";this.ic=null;this.Bb="";this.fc=null;this.zb="";this.g=R}var De=new Ce;function Td(a){return""===a.Rb?a.oa:"l"===a.Rb}function Od(a){O(a.oa,"Only valid if start has been set");return a.ic}function Nd(a){O(a.oa,"Only valid if start has been set");return a.Pb?a.Bb:"[MIN_NAME]"}function Rd(a){O(a.ra,"Only valid if end has been set");return a.fc}
	function Pd(a){O(a.ra,"Only valid if end has been set");return a.Xb?a.zb:"[MAX_NAME]"}function Ee(a){var b=new Ce;b.la=a.la;b.ma=a.ma;b.oa=a.oa;b.ic=a.ic;b.Pb=a.Pb;b.Bb=a.Bb;b.ra=a.ra;b.fc=a.fc;b.Xb=a.Xb;b.zb=a.zb;b.g=a.g;return b}h=Ce.prototype;h.Le=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="";return b};h.Me=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="l";return b};h.Ne=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="r";return b};
	h.ce=function(a,b){var c=Ee(this);c.oa=!0;p(a)||(a=null);c.ic=a;null!=b?(c.Pb=!0,c.Bb=b):(c.Pb=!1,c.Bb="");return c};h.vd=function(a,b){var c=Ee(this);c.ra=!0;p(a)||(a=null);c.fc=a;p(b)?(c.Xb=!0,c.zb=b):(c.nh=!1,c.zb="");return c};function Fe(a,b){var c=Ee(a);c.g=b;return c}function Ge(a){var b={};a.oa&&(b.sp=a.ic,a.Pb&&(b.sn=a.Bb));a.ra&&(b.ep=a.fc,a.Xb&&(b.en=a.zb));if(a.la){b.l=a.ma;var c=a.Rb;""===c&&(c=Td(a)?"l":"r");b.vf=c}a.g!==R&&(b.i=a.g.toString());return b}
	function He(a){return!(a.oa||a.ra||a.la)}function Ie(a){return He(a)&&a.g==R}function Je(a){var b={};if(Ie(a))return b;var c;a.g===R?c="$priority":a.g===Be?c="$value":a.g===re?c="$key":(O(a.g instanceof ve,"Unrecognized index type!"),c=a.g.toString());b.orderBy=G(c);a.oa&&(b.startAt=G(a.ic),a.Pb&&(b.startAt+=","+G(a.Bb)));a.ra&&(b.endAt=G(a.fc),a.Xb&&(b.endAt+=","+G(a.zb)));a.la&&(Td(a)?b.limitToFirst=a.ma:b.limitToLast=a.ma);return b}h.toString=function(){return G(Ge(this))};function Ke(a,b){this.Ed=a;this.hc=b}Ke.prototype.get=function(a){var b=z(this.Ed,a);if(!b)throw Error("No index defined for "+a);return b===te?null:b};function Le(a,b,c){var d=ma(a.Ed,function(d,f){var g=z(a.hc,f);O(g,"Missing index implementation for "+f);if(d===te){if(g.Lc(b.U)){for(var k=[],m=c.ac(wc),l=Ic(m);l;)l.name!=b.name&&k.push(l),l=Ic(m);k.push(b);return Me(k,Vd(g))}return te}g=c.get(b.name);k=d;g&&(k=k.remove(new L(b.name,g)));return k.Sa(b,b.U)});return new Ke(d,a.hc)}
	function Ne(a,b,c){var d=ma(a.Ed,function(a){if(a===te)return a;var d=c.get(b.name);return d?a.remove(new L(b.name,d)):a});return new Ke(d,a.hc)}var Oe=new Ke({".priority":te},{".priority":R});function Yc(a,b){this.B=a;O(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.ca=b||H;Pe(this.ca);this.Gb=null}var Qe=["object","boolean","number","string"];h=Yc.prototype;h.L=function(){return!0};h.C=function(){return this.ca};h.ia=function(a){return new Yc(this.B,a)};h.T=function(a){return".priority"===a?this.ca:H};h.S=function(a){return a.e()?this:".priority"===K(a)?this.ca:H};h.Fa=function(){return!1};h.wf=function(){return null};
	h.W=function(a,b){return".priority"===a?this.ia(b):b.e()&&".priority"!==a?this:H.W(a,b).ia(this.ca)};h.H=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;O(".priority"!==c||1===le(a),".priority must be the last token in a path");return this.W(c,H.H(N(a),b))};h.e=function(){return!1};h.Hb=function(){return 0};h.R=function(){return!1};h.J=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().J()}:this.Ea()};
	h.hash=function(){if(null===this.Gb){var a="";this.ca.e()||(a+="priority:"+Re(this.ca.J())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Ad(this.B):a+this.B;this.Gb=ld(a)}return this.Gb};h.Ea=function(){return this.B};h.Gc=function(a){if(a===H)return 1;if(a instanceof fe)return-1;O(a.L(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=La(Qe,b),e=La(Qe,c);O(0<=d,"Unknown leaf type: "+b);O(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	h.pb=function(){return this};h.Mc=function(){return!0};h.ea=function(a){return a===this?!0:a.L()?this.B===a.B&&this.ca.ea(a.ca):!1};h.toString=function(){return G(this.J(!0))};function fe(a,b,c){this.m=a;(this.ca=b)&&Pe(this.ca);a.e()&&O(!this.ca||this.ca.e(),"An empty node cannot have a priority");this.Ab=c;this.Gb=null}h=fe.prototype;h.L=function(){return!1};h.C=function(){return this.ca||H};h.ia=function(a){return this.m.e()?this:new fe(this.m,a,this.Ab)};h.T=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?H:a};h.S=function(a){var b=K(a);return null===b?this:this.T(b).S(N(a))};h.Fa=function(a){return null!==this.m.get(a)};
	h.W=function(a,b){O(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ia(b);var c=new L(a,b),d,e;b.e()?(d=this.m.remove(a),c=Ne(this.Ab,c,this.m)):(d=this.m.Sa(a,b),c=Le(this.Ab,c,this.m));e=d.e()?H:this.ca;return new fe(d,e,c)};h.H=function(a,b){var c=K(a);if(null===c)return b;O(".priority"!==K(a)||1===le(a),".priority must be the last token in a path");var d=this.T(c).H(N(a),b);return this.W(c,d)};h.e=function(){return this.m.e()};h.Hb=function(){return this.m.count()};
	var Se=/^(0|[1-9]\d*)$/;h=fe.prototype;h.J=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.R(R,function(f,g){b[f]=g.J(a);c++;e&&Se.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.C().e()&&(b[".priority"]=this.C().J());return b};h.hash=function(){if(null===this.Gb){var a="";this.C().e()||(a+="priority:"+Re(this.C().J())+":");this.R(R,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Gb=""===a?"":ld(a)}return this.Gb};
	h.wf=function(a,b,c){return(c=Te(this,c))?(a=Gc(c,new L(a,b)))?a.name:null:Gc(this.m,a)};function Wd(a,b){var c;c=(c=Te(a,b))?(c=c.Vc())&&c.name:a.m.Vc();return c?new L(c,a.m.get(c)):null}function Xd(a,b){var c;c=(c=Te(a,b))?(c=c.jc())&&c.name:a.m.jc();return c?new L(c,a.m.get(c)):null}h.R=function(a,b){var c=Te(this,a);return c?c.ka(function(a){return b(a.name,a.U)}):this.m.ka(b)};h.ac=function(a){return this.bc(a.Wc(),a)};
	h.bc=function(a,b){var c=Te(this,b);if(c)return c.bc(a,function(a){return a});for(var c=this.m.bc(a.name,wc),d=Jc(c);null!=d&&0>b.compare(d,a);)Ic(c),d=Jc(c);return c};h.xf=function(a){return this.dc(a.Tc(),a)};h.dc=function(a,b){var c=Te(this,b);if(c)return c.dc(a,function(a){return a});for(var c=this.m.dc(a.name,wc),d=Jc(c);null!=d&&0<b.compare(d,a);)Ic(c),d=Jc(c);return c};h.Gc=function(a){return this.e()?a.e()?0:-1:a.L()||a.e()?1:a===we?-1:0};
	h.pb=function(a){if(a===re||sa(this.Ab.hc,a.toString()))return this;var b=this.Ab,c=this.m;O(a!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.ac(wc),f=Ic(c);f;)e=e||a.Lc(f.U),d.push(f),f=Ic(c);d=e?Me(d,Vd(a)):te;e=a.toString();c=wa(b.hc);c[e]=a;a=wa(b.Ed);a[e]=d;return new fe(this.m,this.ca,new Ke(a,c))};h.Mc=function(a){return a===re||sa(this.Ab.hc,a.toString())};
	h.ea=function(a){if(a===this)return!0;if(a.L())return!1;if(this.C().ea(a.C())&&this.m.count()===a.m.count()){var b=this.ac(R);a=a.ac(R);for(var c=Ic(b),d=Ic(a);c&&d;){if(c.name!==d.name||!c.U.ea(d.U))return!1;c=Ic(b);d=Ic(a)}return null===c&&null===d}return!1};function Te(a,b){return b===re?null:a.Ab.get(b.toString())}h.toString=function(){return G(this.J(!0))};function Q(a,b){if(null===a)return H;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);O(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Yc(a,Q(c));if(a instanceof Array){var d=H,e=a;v(e,function(a,b){if(y(e,b)&&"."!==b.substring(0,1)){var c=Q(a);if(c.L()||!c.e())d=
	d.W(b,c)}});return d.ia(Q(c))}var f=[],g=!1,k=a;Fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=Q(k[a]);b.e()||(g=g||!b.C().e(),f.push(new L(a,b)))}});if(0==f.length)return H;var m=Me(f,xc,function(a){return a.name},zc);if(g){var l=Me(f,Vd(R));return new fe(m,Q(c),new Ke({".priority":l},{".priority":R}))}return new fe(m,Q(c),Oe)}var Ue=Math.log(2);
	function Ve(a){this.count=parseInt(Math.log(a+1)/Ue,10);this.nf=this.count-1;this.ng=a+1&parseInt(Array(this.count+1).join("1"),2)}function We(a){var b=!(a.ng&1<<a.nf);a.nf--;return b}
	function Me(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],t=c?c(l):l;return new Kc(t,l.U,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),A=e(l+1,d),l=a[l],t=c?c(l):l;return new Kc(t,l.U,!1,f,A)}a.sort(b);var f=function(b){function d(b,g){var k=t-b,A=t;t-=b;var A=e(k+1,A),k=a[k],I=c?c(k):k,A=new Kc(I,k.U,g,null,A);f?f.left=A:l=A;f=A}for(var f=null,l=null,t=a.length,A=0;A<b.count;++A){var I=We(b),Qd=Math.pow(2,b.count-(A+1));I?d(Qd,!1):(d(Qd,!1),d(Qd,!0))}return l}(new Ve(a.length));
	return null!==f?new Ec(d||b,f):new Ec(d||b)}function Re(a){return"number"===typeof a?"number:"+Ad(a):"string:"+a}function Pe(a){if(a.L()){var b=a.J();O("string"===typeof b||"number"===typeof b||"object"===typeof b&&y(b,".sv"),"Priority must be a string or number.")}else O(a===we||a.e(),"priority of unexpected type.");O(a===we||a.C().e(),"Priority nodes can't have a priority of their own.")}var H=new fe(new Ec(zc),null,Oe);function Xe(){fe.call(this,new Ec(zc),H,Oe)}ka(Xe,fe);h=Xe.prototype;
	h.Gc=function(a){return a===this?0:1};h.ea=function(a){return a===this};h.C=function(){return this};h.T=function(){return H};h.e=function(){return!1};var we=new Xe,ue=new L("[MIN_NAME]",H),Ae=new L("[MAX_NAME]",we);function je(a,b){this.Q=a;this.ae=b}function ge(a,b,c,d){return new je(new Xb(b,c,d),a.ae)}function ke(a){return a.Q.ga?a.Q.j():null}je.prototype.w=function(){return this.ae};function Yb(a){return a.ae.ga?a.ae.j():null};function Ye(a,b){this.Y=a;var c=a.n,d=new Ld(c.g),c=He(c)?new Ld(c.g):c.la?new Sd(c):new Md(c);this.Nf=new Zd(c);var e=b.w(),f=b.Q,g=d.ya(H,e.j(),null),k=c.ya(H,f.j(),null);this.Oa=new je(new Xb(k,f.ga,c.Ra()),new Xb(g,e.ga,d.Ra()));this.$a=[];this.ug=new Fd(a)}function Ze(a){return a.Y}h=Ye.prototype;h.w=function(){return this.Oa.w().j()};h.kb=function(a){var b=Yb(this.Oa);return b&&(He(this.Y.n)||!a.e()&&!b.T(K(a)).e())?b.S(a):null};h.e=function(){return 0===this.$a.length};h.Tb=function(a){this.$a.push(a)};
	h.nb=function(a,b){var c=[];if(b){O(null==a,"A cancel should cancel all event registrations.");var d=this.Y.path;Ma(this.$a,function(a){(a=a.lf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.$a.length;++f){var g=this.$a[f];if(!g.matches(a))e.push(g);else if(a.yf()){e=e.concat(this.$a.slice(f+1));break}}this.$a=e}else this.$a=[];return c};
	h.gb=function(a,b,c){a.type===be&&null!==a.source.Lb&&(O(Yb(this.Oa),"We should always have a full cache before handling merges"),O(ke(this.Oa),"Missing event cache, even though we have a server cache"));var d=this.Oa;a=this.Nf.gb(d,a,b,c);b=this.Nf;c=a.me;O(c.Q.j().Mc(b.X.g),"Event snap not indexed");O(c.w().j().Mc(b.X.g),"Server snap not indexed");O(lc(a.me.w())||!lc(d.w()),"Once a server snap is complete, it should never go back");this.Oa=a.me;return $e(this,a.og,a.me.Q.j(),null)};
	function af(a,b){var c=a.Oa.Q,d=[];c.j().L()||c.j().R(R,function(a,b){d.push(new J("child_added",b,a))});c.ga&&d.push(hc(c.j()));return $e(a,d,c.j(),b)}function $e(a,b,c,d){return Gd(a.ug,b,c,d?[d]:a.$a)};function bf(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}bf.prototype.$c=function(a){if(this.path.e())return a=this.children.subtree(new P(a)),a.e()?null:a.value?new Ac(this.source,M,a.value):new bf(this.source,M,a);O(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new bf(this.source,N(this.path),this.children)};bf.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function cf(a,b){this.f=pd("p:rest:");this.G=a;this.Kb=b;this.Ca=null;this.ba={}}function df(a,b){if(p(b))return"tag$"+b;O(Ie(a.n),"should have a tag if it's not a default query.");return a.path.toString()}h=cf.prototype;
	h.Cf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=df(a,c),g={};this.ba[f]=g;a=Je(a.n);var k=this;ef(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Kb(e,t,!1,c);z(k.ba,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.$f=function(a,b){var c=df(a,b);delete this.ba[c]};h.O=function(a,b){this.Ca=a;var c=Cd(a),d=c.data,c=c.Ec&&c.Ec.exp;b&&b("ok",{auth:d,expires:c})};h.je=function(a){this.Ca=null;a("ok",null)};
	h.Qe=function(){};h.Gf=function(){};h.Md=function(){};h.put=function(){};h.Df=function(){};h.Ye=function(){};
	function ef(a,b,c,d){c=c||{};c.format="export";a.Ca&&(c.auth=a.Ca);var e=(a.G.ob?"https://":"http://")+a.G.host+b+"?"+Ib(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=Rb(f.responseText)}catch(c){S("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
	f.status&&S("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function ff(a){O(da(a)&&0<a.length,"Requires a non-empty array");this.fg=a;this.Rc={}}ff.prototype.ie=function(a,b){var c;c=this.Rc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Dc.apply(c[d].Qa,Array.prototype.slice.call(arguments,1))};ff.prototype.Ib=function(a,b,c){gf(this,a);this.Rc[a]=this.Rc[a]||[];this.Rc[a].push({Dc:b,Qa:c});(a=this.Ee(a))&&b.apply(c,a)};
	ff.prototype.mc=function(a,b,c){gf(this,a);a=this.Rc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Dc===b&&(!c||c===a[d].Qa)){a.splice(d,1);break}};function gf(a,b){O(Ra(a.fg,function(a){return a===b}),"Unknown event: "+b)};var hf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);O(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);O(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function jf(){ff.call(this,["online"]);this.oc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.oc||(a.oc=!0,a.ie("online",!0))},!1);window.addEventListener("offline",function(){a.oc&&(a.oc=!1,a.ie("online",!1))},!1)}}ka(jf,ff);jf.prototype.Ee=function(a){O("online"===a,"Unknown event type: "+a);return[this.oc]};ba(jf);function kf(){ff.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Sb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Sb&&(c.Sb=b,c.ie("visible",b))},!1)}}ka(kf,ff);kf.prototype.Ee=function(a){O("visible"===a,"Unknown event type: "+a);return[this.Sb]};ba(kf);function P(a,b){if(1==arguments.length){this.u=a.split("/");for(var c=0,d=0;d<this.u.length;d++)0<this.u[d].length&&(this.u[c]=this.u[d],c++);this.u.length=c;this.aa=0}else this.u=a,this.aa=b}function lf(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return lf(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function mf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=yc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.aa>=a.u.length?null:a.u[a.aa]}function le(a){return a.u.length-a.aa}function N(a){var b=a.aa;b<a.u.length&&b++;return new P(a.u,b)}function me(a){return a.aa<a.u.length?a.u[a.u.length-1]:null}h=P.prototype;
	h.toString=function(){for(var a="",b=this.aa;b<this.u.length;b++)""!==this.u[b]&&(a+="/"+this.u[b]);return a||"/"};h.slice=function(a){return this.u.slice(this.aa+(a||0))};h.parent=function(){if(this.aa>=this.u.length)return null;for(var a=[],b=this.aa;b<this.u.length-1;b++)a.push(this.u[b]);return new P(a,0)};
	h.o=function(a){for(var b=[],c=this.aa;c<this.u.length;c++)b.push(this.u[c]);if(a instanceof P)for(c=a.aa;c<a.u.length;c++)b.push(a.u[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new P(b,0)};h.e=function(){return this.aa>=this.u.length};h.ea=function(a){if(le(this)!==le(a))return!1;for(var b=this.aa,c=a.aa;b<=this.u.length;b++,c++)if(this.u[b]!==a.u[c])return!1;return!0};
	h.contains=function(a){var b=this.aa,c=a.aa;if(le(this)>le(a))return!1;for(;b<this.u.length;){if(this.u[b]!==a.u[c])return!1;++b;++c}return!0};var M=new P("");function nf(a,b){this.Ua=a.slice();this.Ka=Math.max(1,this.Ua.length);this.pf=b;for(var c=0;c<this.Ua.length;c++)this.Ka+=Pb(this.Ua[c]);of(this)}nf.prototype.push=function(a){0<this.Ua.length&&(this.Ka+=1);this.Ua.push(a);this.Ka+=Pb(a);of(this)};nf.prototype.pop=function(){var a=this.Ua.pop();this.Ka-=Pb(a);0<this.Ua.length&&--this.Ka};
	function of(a){if(768<a.Ka)throw Error(a.pf+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ua.length)throw Error(a.pf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+pf(a));}function pf(a){return 0==a.Ua.length?"":"in property '"+a.Ua.join(".")+"'"};function qf(a,b){this.value=a;this.children=b||rf}var rf=new Ec(function(a,b){return a===b?0:a<b?-1:1});function sf(a){var b=qe;v(a,function(a,d){b=b.set(new P(d),a)});return b}h=qf.prototype;h.e=function(){return null===this.value&&this.children.e()};function tf(a,b,c){if(null!=a.value&&c(a.value))return{path:M,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=tf(a,N(b),c),null!=b?{path:(new P(d)).o(b.path),value:b.value}:null):null}
	function uf(a,b){return tf(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):qe};h.set=function(a,b){if(a.e())return new qf(b,this.children);var c=K(a),d=(this.children.get(c)||qe).set(N(a),b),c=this.children.Sa(c,d);return new qf(this.value,c)};
	h.remove=function(a){if(a.e())return this.children.e()?qe:new qf(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Sa(b,a),null===this.value&&b.e()?qe:new qf(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
	function pe(a,b,c){if(b.e())return c;var d=K(b);b=pe(a.children.get(d)||qe,N(b),c);d=b.e()?a.children.remove(d):a.children.Sa(d,b);return new qf(a.value,d)}function vf(a,b){return wf(a,M,b)}function wf(a,b,c){var d={};a.children.ka(function(a,f){d[a]=wf(f,b.o(a),c)});return c(b,a.value,d)}function xf(a,b,c){return yf(a,b,M,c)}function yf(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?yf(a,N(b),c.o(e),d):null}
	function zf(a,b,c){Af(a,b,M,c)}function Af(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Af(a,N(b),c.o(e),d):qe}function ne(a,b){Bf(a,M,b)}function Bf(a,b,c){a.children.ka(function(a,e){Bf(e,b.o(a),c)});a.value&&c(b,a.value)}function Cf(a,b){a.children.ka(function(a,d){d.value&&b(a,d.value)})}var qe=new qf(null);qf.prototype.toString=function(){var a={};ne(this,function(b,c){a[b.toString()]=c.toString()});return G(a)};function Df(a,b,c){this.type=ee;this.source=Ef;this.path=a;this.Ub=b;this.Yd=c}Df.prototype.$c=function(a){if(this.path.e()){if(null!=this.Ub.value)return O(this.Ub.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ub.subtree(new P(a));return new Df(M,a,this.Yd)}O(K(this.path)===a,"operationForChild called for unrelated child.");return new Df(N(this.path),this.Ub,this.Yd)};
	Df.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Yd+" affectedTree="+this.Ub+")"};var Bc=0,be=1,ee=2,Dc=3;function Ff(a,b,c,d){this.Ae=a;this.tf=b;this.Lb=c;this.ef=d;O(!d||b,"Tagged queries must be from server.")}var Ef=new Ff(!0,!1,null,!1),Gf=new Ff(!1,!0,null,!1);Ff.prototype.toString=function(){return this.Ae?"user":this.ef?"server(queryID="+this.Lb+")":"server"};function Hf(a){this.Z=a}var If=new Hf(new qf(null));function Jf(a,b,c){if(b.e())return new Hf(new qf(c));var d=uf(a.Z,b);if(null!=d){var e=d.path,d=d.value;b=lf(e,b);d=d.H(b,c);return new Hf(a.Z.set(e,d))}a=pe(a.Z,b,new qf(c));return new Hf(a)}function Kf(a,b,c){var d=a;Fb(c,function(a,c){d=Jf(d,b.o(a),c)});return d}Hf.prototype.Ud=function(a){if(a.e())return If;a=pe(this.Z,a,qe);return new Hf(a)};function Lf(a,b){var c=uf(a.Z,b);return null!=c?a.Z.get(c.path).S(lf(c.path,b)):null}
	function Mf(a){var b=[],c=a.Z.value;null!=c?c.L()||c.R(R,function(a,c){b.push(new L(a,c))}):a.Z.children.ka(function(a,c){null!=c.value&&b.push(new L(a,c.value))});return b}function Nf(a,b){if(b.e())return a;var c=Lf(a,b);return null!=c?new Hf(new qf(c)):new Hf(a.Z.subtree(b))}Hf.prototype.e=function(){return this.Z.e()};Hf.prototype.apply=function(a){return Of(M,this.Z,a)};
	function Of(a,b,c){if(null!=b.value)return c.H(a,b.value);var d=null;b.children.ka(function(b,f){".priority"===b?(O(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Of(a.o(b),f,c)});c.S(a).e()||null===d||(c=c.H(a.o(".priority"),d));return c};function Pf(){this.V=If;this.pa=[];this.Pc=-1}function Qf(a,b){for(var c=0;c<a.pa.length;c++){var d=a.pa[c];if(d.md===b)return d}return null}h=Pf.prototype;
	h.Ud=function(a){var b=Sa(this.pa,function(b){return b.md===a});O(0<=b,"removeWrite called with nonexistent writeId.");var c=this.pa[b];this.pa.splice(b,1);for(var d=c.visible,e=!1,f=this.pa.length-1;d&&0<=f;){var g=this.pa[f];g.visible&&(f>=b&&Rf(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.V=Sf(this.pa,Tf,M),this.Pc=0<this.pa.length?this.pa[this.pa.length-1].md:-1;else if(c.Ja)this.V=this.V.Ud(c.path);else{var k=this;v(c.children,function(a,b){k.V=k.V.Ud(c.path.o(b))})}return!0}return!1};
	h.Aa=function(a,b,c,d){if(c||d){var e=Nf(this.V,a);return!d&&e.e()?b:d||null!=b||null!=Lf(e,M)?(e=Sf(this.pa,function(b){return(b.visible||d)&&(!c||!(0<=La(c,b.md)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||H,e.apply(b)):null}e=Lf(this.V,a);if(null!=e)return e;e=Nf(this.V,a);return e.e()?b:null!=b||null!=Lf(e,M)?(b=b||H,e.apply(b)):null};
	h.Cc=function(a,b){var c=H,d=Lf(this.V,a);if(d)d.L()||d.R(R,function(a,b){c=c.W(a,b)});else if(b){var e=Nf(this.V,a);b.R(R,function(a,b){var d=Nf(e,new P(a)).apply(b);c=c.W(a,d)});Ma(Mf(e),function(a){c=c.W(a.name,a.U)})}else e=Nf(this.V,a),Ma(Mf(e),function(a){c=c.W(a.name,a.U)});return c};h.nd=function(a,b,c,d){O(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.o(b);if(null!=Lf(this.V,a))return null;a=Nf(this.V,a);return a.e()?d.S(b):a.apply(d.S(b))};
	h.Bc=function(a,b,c){a=a.o(b);var d=Lf(this.V,a);return null!=d?d:Wb(c,b)?Nf(this.V,a).apply(c.j().T(b)):null};h.xc=function(a){return Lf(this.V,a)};h.qe=function(a,b,c,d,e,f){var g;a=Nf(this.V,a);g=Lf(a,M);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.pb(f);if(g.e()||g.L())return[];b=[];a=Vd(f);e=e?g.dc(c,f):g.bc(c,f);for(f=Ic(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=Ic(e);return b};
	function Rf(a,b){return a.Ja?a.path.contains(b):!!ta(a.children,function(c,d){return a.path.o(d).contains(b)})}function Tf(a){return a.visible}
	function Sf(a,b,c){for(var d=If,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=lf(c,g),d=Jf(d,g,f.Ja)):g.contains(c)&&(g=lf(g,c),d=Jf(d,M,f.Ja.S(g)));else if(f.children)if(c.contains(g))g=lf(c,g),d=Kf(d,g,f.children);else{if(g.contains(c))if(g=lf(g,c),g.e())d=Kf(d,M,f.children);else if(f=z(f.children,K(g)))f=f.S(N(g)),d=Jf(d,M,f)}else throw jd("WriteRecord should have .snap or .children");}}return d}function Uf(a,b){this.Qb=a;this.Z=b}h=Uf.prototype;
	h.Aa=function(a,b,c){return this.Z.Aa(this.Qb,a,b,c)};h.Cc=function(a){return this.Z.Cc(this.Qb,a)};h.nd=function(a,b,c){return this.Z.nd(this.Qb,a,b,c)};h.xc=function(a){return this.Z.xc(this.Qb.o(a))};h.qe=function(a,b,c,d,e){return this.Z.qe(this.Qb,a,b,c,d,e)};h.Bc=function(a,b){return this.Z.Bc(this.Qb,a,b)};h.o=function(a){return new Uf(this.Qb.o(a),this.Z)};function Vf(){this.children={};this.pd=0;this.value=null}function Wf(a,b,c){this.Jd=a?a:"";this.Ha=b?b:null;this.A=c?c:new Vf}function Xf(a,b){for(var c=b instanceof P?b:new P(b),d=a,e;null!==(e=K(c));)d=new Wf(e,d,z(d.A.children,e)||new Vf),c=N(c);return d}h=Wf.prototype;h.Ea=function(){return this.A.value};function Yf(a,b){O("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Zf(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.pd=0;Zf(this)};
	h.zd=function(){return 0<this.A.pd};h.e=function(){return null===this.Ea()&&!this.zd()};h.R=function(a){var b=this;v(this.A.children,function(c,d){a(new Wf(d,b,c))})};function $f(a,b,c,d){c&&!d&&b(a);a.R(function(a){$f(a,b,!0,d)});c&&d&&b(a)}function ag(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new P(null===this.Ha?this.Jd:this.Ha.path()+"/"+this.Jd)};h.name=function(){return this.Jd};h.parent=function(){return this.Ha};
	function Zf(a){if(null!==a.Ha){var b=a.Ha,c=a.Jd,d=a.e(),e=y(b.A.children,c);d&&e?(delete b.A.children[c],b.A.pd--,Zf(b)):d||e||(b.A.children[c]=a.A,b.A.pd++,Zf(b))}};var bg=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,dg=/^[a-zA-Z][a-zA-Z._\-+]+$/;function eg(a){return q(a)&&0!==a.length&&!bg.test(a)}function fg(a){return null===a||q(a)||fa(a)&&!td(a)||ga(a)&&y(a,".sv")}function gg(a,b,c,d){d&&!p(b)||hg(E(a,1,d),b,c)}
	function hg(a,b,c){c instanceof P&&(c=new nf(c,a));if(!p(b))throw Error(a+"contains undefined "+pf(c));if(r(b))throw Error(a+"contains a function "+pf(c)+" with contents: "+b.toString());if(td(b))throw Error(a+"contains "+b.toString()+" "+pf(c));if(q(b)&&b.length>10485760/3&&10485760<Pb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+pf(c)+" ('"+b.substring(0,50)+"...')");if(ga(b)){var d=!1,e=!1;Fb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!eg(b)))throw Error(a+" contains an invalid key ("+b+") "+pf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);hg(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+pf(c)+" in addition to actual children.");}}
	function ig(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!eg(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(mf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function jg(a,b,c){var d=E(a,1,!1);if(!ga(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Fb(b,function(a,b){var k=new P(a);hg(d,b,c.o(k));if(".priority"===me(k)&&!fg(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ig(d,e)}
	function kg(a,b,c){if(td(c))throw Error(E(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fg(c))throw Error(E(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function lg(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(E(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function mg(a,b){if(p(b)&&!eg(b))throw Error(E(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function ng(a,b){if(!q(b)||0===b.length||cg.test(b))throw Error(E(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function og(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}function pg(a,b){if(!q(b))throw Error(E(a,1,!1)+"must be a valid credential (a string).");}function qg(a,b,c){if(!q(c))throw Error(E(a,b,!1)+"must be a valid string.");}
	function rg(a,b){qg(a,1,b);if(!dg.test(b))throw Error(E(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function sg(a,b,c,d){if(!d||p(c))if(!ga(c)||null===c)throw Error(E(a,b,d)+"must be a valid object.");}function tg(a,b,c){if(!ga(b)||!y(b,c))throw Error(E(a,1,!1)+'must contain the key "'+c+'"');if(!q(z(b,c)))throw Error(E(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function ug(){this.set={}}h=ug.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return y(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return va(this.set)};h.count=function(){return oa(this.set)};function vg(a,b){v(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Vc(){this.m=this.B=null}Vc.prototype.find=function(a){if(null!=this.B)return this.B.S(a);if(a.e()||null==this.m)return null;var b=K(a);a=N(a);return this.m.contains(b)?this.m.get(b).find(a):null};Vc.prototype.rc=function(a,b){if(a.e())this.B=b,this.m=null;else if(null!==this.B)this.B=this.B.H(a,b);else{null==this.m&&(this.m=new ug);var c=K(a);this.m.contains(c)||this.m.add(c,new Vc);c=this.m.get(c);a=N(a);c.rc(a,b)}};
	function wg(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.L())return!1;var c=a.B;a.B=null;c.R(R,function(b,c){a.rc(new P(b),c)});return wg(a,b)}return null!==a.m?(c=K(b),b=N(b),a.m.contains(c)&&wg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function Wc(a,b,c){null!==a.B?c(b,a.B):a.R(function(a,e){var f=new P(b.toString()+"/"+a);Wc(e,f,c)})}Vc.prototype.R=function(a){null!==this.m&&vg(this.m,function(b,c){a(b,c)})};var xg="auth.firebase.com";function yg(a,b,c){this.qd=a||{};this.he=b||{};this.fb=c||{};this.qd.remember||(this.qd.remember="default")}var zg=["remember","redirectTo"];function Ag(a){var b={},c={};Fb(a||{},function(a,e){0<=La(zg,a)?b[a]=e:c[a]=e});return new yg(b,{},c)};function Bg(a,b){this.Ue=["session",a.Rd,a.lc].join(":");this.ee=b}Bg.prototype.set=function(a,b){if(!b)if(this.ee.length)b=this.ee[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ue,a)};Bg.prototype.get=function(){var a=Oa(this.ee,u(this.Bg,this)),a=Na(a,function(a){return null!==a});Va(a,function(a,c){return Dd(c.token)-Dd(a.token)});return 0<a.length?a.shift():null};Bg.prototype.Bg=function(a){try{var b=a.get(this.Ue);if(b&&b.token)return b}catch(c){}return null};
	Bg.prototype.clear=function(){var a=this;Ma(this.ee,function(b){b.remove(a.Ue)})};function Cg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function Dg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg())}function Eg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
	function Fg(a){var b=Cg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function Gg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Hg(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Ig(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
	function Jg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Kg(a){var b="";try{a=a.replace(/.*\?/,"");var c=Jb(a);c&&y(c,"__firebase_request_key")&&(b=z(c,"__firebase_request_key"))}catch(d){}return b}function Lg(){try{var a=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,""),a=a.replace(/\?$/,""),a=a.replace(/^#+$/,"");document.location.hash=a}catch(b){}}
	function Mg(){var a=sd(xg);return a.scheme+"://"+a.host+"/v2"}function Ng(a){return Mg()+"/"+a+"/auth/channel"};function Og(a){var b=this;this.hb=a;this.fe="*";Fg(8)?this.Uc=this.Cd=Gg():(this.Uc=window.opener,this.Cd=window);if(!b.Uc)throw"Unable to find relay frame";Hg(this.Cd,"message",u(this.nc,this));Hg(this.Cd,"message",u(this.Ff,this));try{Pg(this,{a:"ready"})}catch(c){Hg(this.Uc,"load",function(){Pg(b,{a:"ready"})})}Hg(window,"unload",u(this.Mg,this))}function Pg(a,b){b=G(b);Fg(8)?a.Uc.doPost(b,a.fe):a.Uc.postMessage(b,a.fe)}
	Og.prototype.nc=function(a){var b=this,c;try{c=Rb(a.data)}catch(d){}c&&"request"===c.a&&(Ig(window,"message",this.nc),this.fe=a.origin,this.hb&&setTimeout(function(){b.hb(b.fe,c.d,function(a,c){b.mg=!c;b.hb=void 0;Pg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Og.prototype.Mg=function(){try{Ig(this.Cd,"message",this.Ff)}catch(a){}this.hb&&(Pg(this,{a:"error",d:"unknown closed window"}),this.hb=void 0);try{window.close()}catch(b){}};Og.prototype.Ff=function(a){if(this.mg&&"die"===a.data)try{window.close()}catch(b){}};function Qg(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}Qg.prototype.open=function(a,b){cd.set("redirect_request_id",this.tc);cd.set("redirect_request_id",this.tc);b.requestId=this.tc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+Ib(b);window.location=a};Qg.isAvailable=function(){return!Eg()&&!Dg()};Qg.prototype.Fc=function(){return"redirect"};var Rg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Sg(a){var b=Error(z(Rg,a),a);b.code=a;return b};function Tg(a){var b;(b=!a.window_features)||(b=Cg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
	Tg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);t&&(t=clearInterval(t));Ig(window,"message",e);Ig(window,"unload",d);if(l&&!a)try{l.close()}catch(b){k.postMessage("die",m)}l=k=void 0}function e(a){if(a.origin===m)try{var b=Rb(a.data);"ready"===b.a?k.postMessage(A,m):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Fg(8),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
	var m=Jg(a);if(m!==Jg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+Ib(b);var l=window.open(a,this.options.window_name,this.options.window_features);k||(k=l);var t=setInterval(function(){l&&l.closed&&
	(d(!1),c&&(c(Sg("USER_CANCELLED")),c=null))},500),A=G({a:"request",d:b});Hg(window,"unload",d);Hg(window,"message",e)}};
	Tg.isAvailable=function(){var a;if(a="postMessage"in window&&!Eg())(a=Dg()||"undefined"!==typeof navigator&&(!!Cg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=Cg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!Cg().match(/PhantomJS/)};Tg.prototype.Fc=function(){return"popup"};function Ug(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
	Ug.prototype.open=function(a,b,c){function d(){c&&(c(Sg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;Hg(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=Rb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Sg("SERVER_ERROR")):c(Sg("NETWORK_ERROR"));c=null;Ig(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+Ib(b),g=null;else{var k=this.options.headers.content_type;
	"application/json"===k&&(g=G(b));"application/x-www-form-urlencoded"===k&&(g=Ib(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};ya(a,this.options.headers);for(var m in a)e.setRequestHeader(m,a[m]);e.send(g)};Ug.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=Cg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||Fg(10);return a};Ug.prototype.Fc=function(){return"json"};function Vg(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}
	Vg.prototype.open=function(a,b,c){function d(){c&&(c(Sg("USER_CANCELLED")),c=null)}var e=this,f=sd(xg),g;b.requestId=this.tc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=Ib(b);(g=window.open(a,"_blank","location=no"))&&r(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var l=document.createElement("a");l.href=a.url;b=l.host===f.host&&"/blank/page.html"===l.pathname;break a}catch(t){}b=!1}b&&(a=Kg(a.url),g.removeEventListener("exit",
	d),g.close(),a=new yg(null,null,{requestId:e.tc,requestKey:a}),e.Kf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(Sg("TRANSPORT_UNAVAILABLE"))};Vg.isAvailable=function(){return Dg()};Vg.prototype.Fc=function(){return"redirect"};function Wg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
	Wg.prototype.open=function(a,b,c){function d(){c&&(c(Sg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;va(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Ig(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+Ib(b);
	Hg(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Xg(f,a,c)};
	function Xg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Sg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Sg("NETWORK_ERROR"))}},0)}Wg.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
	Wg.prototype.Fc=function(){return"json"};function Yg(a,b,c,d){ff.call(this,["auth_status"]);this.G=a;this.hf=b;this.hh=c;this.Pe=d;this.wc=new Bg(a,[bd,cd]);this.qb=null;this.We=!1;Zg(this)}ka(Yg,ff);h=Yg.prototype;h.Be=function(){return this.qb||null};function Zg(a){cd.get("redirect_request_id")&&$g(a);var b=a.wc.get();b&&b.token?(ah(a,b),a.hf(b.token,function(c,d){bh(a,c,d,!1,b.token,b)},function(b,d){ch(a,"resumeSession()",b,d)})):ah(a,null)}
	function dh(a,b,c,d,e,f){"firebaseio-demo.com"===a.G.domain&&S("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.hf(b,function(f,k){bh(a,f,k,!0,b,c,d||{},e)},function(b,c){ch(a,"auth()",b,c,f)})}function eh(a,b){a.wc.clear();ah(a,null);a.hh(function(a,d){if("ok"===a)T(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;T(b,f)}})}
	function bh(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Ed(e)?e:"",c=null,b&&y(b,"uid")?c=z(b,"uid"):y(f,"uid")&&(c=z(f,"uid")),f.uid=c,c="custom",b&&y(b,"provider")?c=z(b,"provider"):y(f,"provider")&&(c=z(f,"provider")),f.provider=c,a.wc.clear(),Ed(e)&&(g=g||{},c=bd,"sessionOnly"===g.remember&&(c=cd),"none"!==g.remember&&a.wc.set(f,c)),ah(a,f)),T(k,null,f)):(a.wc.clear(),ah(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,T(k,f))}
	function ch(a,b,c,d,e){S(b+" was canceled: "+d);a.wc.clear();ah(a,null);a=Error(d);a.code=c.toUpperCase();T(e,a)}function fh(a,b,c,d,e){gh(a);c=new yg(d||{},{},c||{});hh(a,[Ug,Wg],"/auth/"+b,c,e)}
	function ih(a,b,c,d){gh(a);var e=[Tg,Vg];c=Ag(c);"anonymous"===b||"password"===b?setTimeout(function(){T(d,Sg("TRANSPORT_UNAVAILABLE"))},0):(c.he.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.he.relay_url=Ng(a.G.lc),c.he.requestWithCredential=u(a.uc,a),hh(a,e,"/auth/"+b,c,d))}
	function $g(a){var b=cd.get("redirect_request_id");if(b){var c=cd.get("redirect_client_options");cd.remove("redirect_request_id");cd.remove("redirect_client_options");var d=[Ug,Wg],b={requestId:b,requestKey:Kg(document.location.hash)},c=new yg(c,{},b);a.We=!0;Lg();hh(a,d,"/auth/session",c,function(){this.We=!1}.bind(a))}}h.ve=function(a,b){gh(this);var c=Ag(a);c.fb._method="POST";this.uc("/users",c,function(a,c){a?T(b,a):T(b,a,c)})};
	h.Xe=function(a,b){var c=this;gh(this);var d="/users/"+encodeURIComponent(a.email),e=Ag(a);e.fb._method="DELETE";this.uc(d,e,function(a,d){!a&&d&&d.uid&&c.qb&&c.qb.uid&&c.qb.uid===d.uid&&eh(c);T(b,a)})};h.se=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="PUT";d.fb.password=a.newPassword;this.uc(c,d,function(a){T(b,a)})};
	h.re=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=Ag(a);d.fb._method="PUT";d.fb.email=a.newEmail;d.fb.password=a.password;this.uc(c,d,function(a){T(b,a)})};h.Ze=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="POST";this.uc(c,d,function(a){T(b,a)})};h.uc=function(a,b,c){jh(this,[Ug,Wg],a,b,c)};
	function hh(a,b,c,d,e){jh(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?dh(a,c.token,c,d.qd,function(a,b){a?T(e,a):T(e,null,b)}):T(e,b||Sg("UNKNOWN_ERROR"))})}
	function jh(a,b,c,d,e){b=Na(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){T(e,Sg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.he),d=Gb(d.fb),d.v="js-"+Eb,d.transport=b.Fc(),d.suppress_status_codes=!0,a=Mg()+"/"+a.G.lc+c,b.open(a,d,function(a,b){if(a)T(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;T(e,c)}else T(e,null,b)}))}
	function ah(a,b){var c=null!==a.qb||null!==b;a.qb=b;c&&a.ie("auth_status",b);a.Pe(null!==b)}h.Ee=function(a){O("auth_status"===a,'initial event must be of type "auth_status"');return this.We?null:[this.qb]};function gh(a){var b=a.G;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===xg)throw Error("This custom Firebase server ('"+a.G.domain+"') does not support delegated login.");};var gd="websocket",hd="long_polling";function kh(a){this.nc=a;this.Qd=[];this.Wb=0;this.te=-1;this.Jb=null}function lh(a,b,c){a.te=b;a.Jb=c;a.te<a.Wb&&(a.Jb(),a.Jb=null)}function mh(a,b,c){for(a.Qd[b]=c;a.Qd[a.Wb];){var d=a.Qd[a.Wb];delete a.Qd[a.Wb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;gc(function(){f.nc(d[e])})}if(a.Wb===a.te){a.Jb&&(clearTimeout(a.Jb),a.Jb(),a.Jb=null);break}a.Wb++}};function nh(a,b,c,d){this.ue=a;this.f=pd(a);this.rb=this.sb=0;this.Xa=uc(b);this.Xf=c;this.Kc=!1;this.Fb=d;this.ld=function(a){return fd(b,hd,a)}}var oh,ph;
	nh.prototype.open=function(a,b){this.mf=0;this.na=b;this.Ef=new kh(a);this.Db=!1;var c=this;this.ub=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.ub=null},Math.floor(3E4));ud(function(){if(!c.Db){c.Wa=new qh(function(a,b,d,k,m){rh(c,arguments);if(c.Wa)if(c.ub&&(clearTimeout(c.ub),c.ub=null),c.Kc=!0,"start"==a)c.id=b,c.Mf=d;else if("close"===a)b?(c.Wa.$d=!1,lh(c.Ef,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){rh(c,arguments);
	mh(c.Ef,a,b)},function(){c.bb()},c.ld);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.ke&&(a.cb=c.Wa.ke);a.v="5";c.Xf&&(a.s=c.Xf);c.Fb&&(a.ls=c.Fb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.ld(a);c.f("Connecting via long-poll to "+a);sh(c.Wa,a,function(){})}})};
	nh.prototype.start=function(){var a=this.Wa,b=this.Mf;a.Fg=this.id;a.Gg=b;for(a.oe=!0;th(a););a=this.id;b=this.Mf;this.kc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.kc.src=this.ld(c);this.kc.style.display="none";document.body.appendChild(this.kc)};
	nh.isAvailable=function(){return oh||!ph&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.jh)&&!0};h=nh.prototype;h.Hd=function(){};h.fd=function(){this.Db=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.kc&&(document.body.removeChild(this.kc),this.kc=null);this.ub&&(clearTimeout(this.ub),this.ub=null)};
	h.bb=function(){this.Db||(this.f("Longpoll is closing itself"),this.fd(),this.na&&(this.na(this.Kc),this.na=null))};h.close=function(){this.Db||(this.f("Longpoll is being closed."),this.fd())};h.send=function(a){a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=Ob(a);a=nb(a,!0);a=yd(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.cd.push({Xg:this.mf,gh:a.length,of:a[b]});c.oe&&th(c);this.mf++}};function rh(a,b){var c=G(b).length;a.rb+=c;rc(a.Xa,"bytes_received",c)}
	function qh(a,b,c,d){this.ld=d;this.lb=c;this.Te=new ug;this.cd=[];this.we=Math.floor(1E8*Math.random());this.$d=!0;this.ke=id();window["pLPCommand"+this.ke]=a;window["pRTLPCB"+this.ke]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||fc("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.jb=a.contentDocument:a.contentWindow?a.jb=a.contentWindow.document:a.document&&(a.jb=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.jb.open(),this.Ga.jb.write(a),this.Ga.jb.close()}catch(f){fc("frame writing exception"),f.stack&&fc(f.stack),fc(f)}}
	qh.prototype.close=function(){this.oe=!1;if(this.Ga){this.Ga.jb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.lb;b&&(this.lb=null,b())};
	function th(a){if(a.oe&&a.$d&&a.Te.count()<(0<a.cd.length?2:1)){a.we++;var b={};b.id=a.Fg;b.pw=a.Gg;b.ser=a.we;for(var b=a.ld(b),c="",d=0;0<a.cd.length;)if(1870>=a.cd[0].of.length+30+c.length){var e=a.cd.shift(),c=c+"&seg"+d+"="+e.Xg+"&ts"+d+"="+e.gh+"&d"+d+"="+e.of;d++}else break;uh(a,b+c,a.we);return!0}return!1}function uh(a,b,c){function d(){a.Te.remove(c);th(a)}a.Te.add(c,1);var e=setTimeout(d,Math.floor(25E3));sh(a,b,function(){clearTimeout(e);d()})}
	function sh(a,b,c){setTimeout(function(){try{if(a.$d){var d=a.Ga.jb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){fc("Long-poll script failed to load: "+b);a.$d=!1;a.close()};a.Ga.jb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var vh=null;"undefined"!==typeof MozWebSocket?vh=MozWebSocket:"undefined"!==typeof WebSocket&&(vh=WebSocket);function wh(a,b,c,d){this.ue=a;this.f=pd(this.ue);this.frames=this.Nc=null;this.rb=this.sb=this.ff=0;this.Xa=uc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.jf=fd(b,gd,a)}var xh;
	wh.prototype.open=function(a,b){this.lb=b;this.Kg=a;this.f("Websocket connecting to "+this.jf);this.Kc=!1;bd.set("previous_websocket_failure",!0);try{this.La=new vh(this.jf)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.Kc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.bb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.rb+=
	a.length,rc(e.Xa,"bytes_received",a.length),yh(e),null!==e.frames)zh(e,a);else{a:{O(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.ff=b;e.frames=[];a=null;break a}}e.ff=1;e.frames=[]}null!==a&&zh(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};wh.prototype.start=function(){};
	wh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==vh&&!xh};wh.responsesRequiredToBeHealthy=2;wh.healthyTimeout=3E4;h=wh.prototype;h.Hd=function(){bd.remove("previous_websocket_failure")};function zh(a,b){a.frames.push(b);if(a.frames.length==a.ff){var c=a.frames.join("");a.frames=null;c=Rb(c);a.Kg(c)}}
	h.send=function(a){yh(this);a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=yd(a,16384);1<a.length&&Ah(this,String(a.length));for(var b=0;b<a.length;b++)Ah(this,a[b])};h.fd=function(){this.Db=!0;this.Nc&&(clearInterval(this.Nc),this.Nc=null);this.La&&(this.La.close(),this.La=null)};h.bb=function(){this.Db||(this.f("WebSocket is closing itself"),this.fd(),this.lb&&(this.lb(this.Kc),this.lb=null))};h.close=function(){this.Db||(this.f("WebSocket is being closed"),this.fd())};
	function yh(a){clearInterval(a.Nc);a.Nc=setInterval(function(){a.La&&Ah(a,"0");yh(a)},Math.floor(45E3))}function Ah(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(u(a.bb,a),0)}};function Bh(a){Ch(this,a)}var Dh=[nh,wh];function Ch(a,b){var c=wh&&wh.isAvailable(),d=c&&!(bd.Af||!0===bd.get("previous_websocket_failure"));b.ih&&(c||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.jd=[wh];else{var e=a.jd=[];zd(Dh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Eh(a){if(0<a.jd.length)return a.jd[0];throw Error("No transports available");};function Fh(a,b,c,d,e,f,g){this.id=a;this.f=pd("c:"+this.id+":");this.nc=c;this.Zc=d;this.na=e;this.Re=f;this.G=b;this.Pd=[];this.kf=0;this.Wf=new Bh(b);this.N=0;this.Fb=g;this.f("Connection created");Gh(this)}
	function Gh(a){var b=Eh(a.Wf);a.K=new b("c:"+a.id+":"+a.kf++,a.G,void 0,a.Fb);a.Ve=b.responsesRequiredToBeHealthy||0;var c=Hh(a,a.K),d=Ih(a,a.K);a.kd=a.K;a.ed=a.K;a.F=null;a.Eb=!1;setTimeout(function(){a.K&&a.K.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.Bd=setTimeout(function(){a.Bd=null;a.Eb||(a.K&&102400<a.K.rb?(a.f("Connection exceeded healthy timeout but has received "+a.K.rb+" bytes.  Marking connection healthy."),a.Eb=!0,a.K.Hd()):a.K&&10240<a.K.sb?a.f("Connection exceeded healthy timeout but has sent "+
	a.K.sb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Ih(a,b){return function(c){b===a.K?(a.K=null,c||0!==a.N?1===a.N&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.G.ab.substr(0,2)&&(bd.remove("host:"+a.G.host),a.G.ab=a.G.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.kd!==c&&a.ed!==c||a.close()):a.f("closing an old connection")}}
	function Hh(a,b){return function(c){if(2!=a.N)if(b===a.ed){var d=wd("t",c);c=wd("d",c);if("c"==d){if(d=wd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Uf=c.s;ed(a.G,f);0==a.N&&(a.K.start(),Jh(a,a.K,d),"5"!==e&&S("Protocol version mismatch detected"),c=a.Wf,(c=1<c.jd.length?c.jd[1]:null)&&Kh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.ed=a.F;for(c=0;c<a.Pd.length;++c)a.Ld(a.Pd[c]);a.Pd=[];Lh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.Re&&(a.Re(c),a.Re=null),a.na=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),ed(a.G,c),1===a.N?a.close():(Mh(a),Gh(a))):"e"===d?qd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Nh(a),Oh(a)):qd("Unknown control packet command: "+d)}else"d"==d&&a.Ld(c)}else if(b===a.F)if(d=wd("t",c),c=wd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ph(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.kd!==a.F&&a.ed!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.Tf--,Ph(a)));else if("d"==d)a.Pd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Fh.prototype.Ia=function(a){Qh(this,{t:"d",d:a})};function Lh(a){a.kd===a.F&&a.ed===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.ue),a.K=a.F,a.F=null)}
	function Ph(a){0>=a.Tf?(a.f("Secondary connection is healthy."),a.Eb=!0,a.F.Hd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.K.send({t:"c",d:{t:"n",d:{}}}),a.kd=a.F,Lh(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}Fh.prototype.Ld=function(a){Nh(this);this.nc(a)};function Nh(a){a.Eb||(a.Ve--,0>=a.Ve&&(a.f("Primary connection is healthy."),a.Eb=!0,a.K.Hd()))}
	function Kh(a,b){a.F=new b("c:"+a.id+":"+a.kf++,a.G,a.Uf);a.Tf=b.responsesRequiredToBeHealthy||0;a.F.open(Hh(a,a.F),Ih(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function Jh(a,b,c){a.f("Realtime connection established.");a.K=b;a.N=1;a.Zc&&(a.Zc(c,a.Uf),a.Zc=null);0===a.Ve?(a.f("Primary connection is healthy."),a.Eb=!0):setTimeout(function(){Oh(a)},Math.floor(5E3))}
	function Oh(a){a.Eb||1!==a.N||(a.f("sending ping on primary."),Qh(a,{t:"c",d:{t:"p",d:{}}}))}function Qh(a,b){if(1!==a.N)throw"Connection is not connected";a.kd.send(b)}Fh.prototype.close=function(){2!==this.N&&(this.f("Closing realtime connection."),this.N=2,Mh(this),this.na&&(this.na(),this.na=null))};function Mh(a){a.f("Shutting down all connections");a.K&&(a.K.close(),a.K=null);a.F&&(a.F.close(),a.F=null);a.Bd&&(clearTimeout(a.Bd),a.Bd=null)};function Rh(a,b,c,d){this.id=Sh++;this.f=pd("p:"+this.id+":");this.Bf=this.Ie=!1;this.ba={};this.sa=[];this.ad=0;this.Yc=[];this.qa=!1;this.eb=1E3;this.Id=3E5;this.Kb=b;this.Xc=c;this.Se=d;this.G=a;this.wb=this.Ca=this.Ma=this.Fb=this.$e=null;this.Sb=!1;this.Wd={};this.Wg=0;this.rf=!0;this.Oc=this.Ke=null;Th(this,0);kf.yb().Ib("visible",this.Ng,this);-1===a.host.indexOf("fblocal")&&jf.yb().Ib("online",this.Lg,this)}var Sh=0,Uh=0;h=Rh.prototype;
	h.Ia=function(a,b,c){var d=++this.Wg;a={r:d,a:a,b:b};this.f(G(a));O(this.qa,"sendRequest call when we're not connected not allowed.");this.Ma.Ia(a);c&&(this.Wd[d]=c)};h.Cf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.ba[f]=this.ba[f]||{};O(Ie(a.n)||!He(a.n),"listen() called for non-default but complete query");O(!this.ba[f][e],"listen() called twice for same path/queryId.");a={I:d,Ad:b,Tg:a,tag:c};this.ba[f][e]=a;this.qa&&Vh(this,a)};
	function Vh(a,b){var c=b.Tg,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Ge(c.n),f.t=b.tag);f.h=b.Ad();a.Ia("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&y(k,"w")){var l=z(k,"w");da(l)&&0<=La(l,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.ba[d]&&a.ba[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Wh(a,d,e),b.I&&
	b.I(m,k))})}h.O=function(a,b,c){this.Ca={rg:a,sf:!1,Dc:b,od:c};this.f("Authenticating using credential: "+a);Xh(this);(b=40==a.length)||(a=Cd(a).Ec,b="object"===typeof a&&!0===z(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Id=3E4)};h.je=function(a){this.Ca=null;this.qa&&this.Ia("unauth",{},function(b){a(b.s,b.d)})};
	function Xh(a){var b=a.Ca;a.qa&&b&&a.Ia("auth",{cred:b.rg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ca===b&&(a.Ca=null);b.sf?"ok"!==d&&b.od&&b.od(d,c):(b.sf=!0,b.Dc&&b.Dc(d,c))})}h.$f=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);O(Ie(a.n)||!He(a.n),"unlisten() called for non-default but complete query");if(Wh(this,c,d)&&this.qa){var e=Ge(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Ia("n",c)}};
	h.Qe=function(a,b,c){this.qa?Yh(this,"o",a,b,c):this.Yc.push({bd:a,action:"o",data:b,I:c})};h.Gf=function(a,b,c){this.qa?Yh(this,"om",a,b,c):this.Yc.push({bd:a,action:"om",data:b,I:c})};h.Md=function(a,b){this.qa?Yh(this,"oc",a,null,b):this.Yc.push({bd:a,action:"oc",data:null,I:b})};function Yh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ia(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Zh(this,"p",a,b,c,d)};
	h.Df=function(a,b,c,d){Zh(this,"m",a,b,c,d)};function Zh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.sa.push({action:b,Pf:d,I:e});a.ad++;b=a.sa.length-1;a.qa?$h(a,b):a.f("Buffering put: "+c)}function $h(a,b){var c=a.sa[b].action,d=a.sa[b].Pf,e=a.sa[b].I;a.sa[b].Ug=a.qa;a.Ia(c,d,function(d){a.f(c+" response",d);delete a.sa[b];a.ad--;0===a.ad&&(a.sa=[]);e&&e(d.s,d.d)})}
	h.Ye=function(a){this.qa&&(a={c:a},this.f("reportStats",a),this.Ia("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	h.Ld=function(a){if("r"in a){this.f("from server: "+G(a));var b=a.r,c=this.Wd[b];c&&(delete this.Wd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Kb(c.p,c.d,!1,c.t):"m"===b?this.Kb(c.p,c.d,!0,c.t):"c"===b?ai(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ca,this.Ca=null,c&&c.od&&c.od(a,b)):"sd"===b?this.$e?this.$e(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
	"\nFIREBASE: ")):qd("Unrecognized action received from server: "+G(b)+"\nAre you using the latest client?"))}};h.Zc=function(a,b){this.f("connection ready");this.qa=!0;this.Oc=(new Date).getTime();this.Se({serverTimeOffset:a-(new Date).getTime()});this.Fb=b;if(this.rf){var c={};c["sdk.js."+Eb.replace(/\./g,"-")]=1;Dg()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.Ye(c)}bi(this);this.rf=!1;this.Xc(!0)};
	function Th(a,b){O(!a.Ma,"Scheduling a connect when we're already connected/ing?");a.wb&&clearTimeout(a.wb);a.wb=setTimeout(function(){a.wb=null;ci(a)},Math.floor(b))}h.Ng=function(a){a&&!this.Sb&&this.eb===this.Id&&(this.f("Window became visible.  Reducing delay."),this.eb=1E3,this.Ma||Th(this,0));this.Sb=a};h.Lg=function(a){a?(this.f("Browser went online."),this.eb=1E3,this.Ma||Th(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ma&&this.Ma.close())};
	h.If=function(){this.f("data client disconnected");this.qa=!1;this.Ma=null;for(var a=0;a<this.sa.length;a++){var b=this.sa[a];b&&"h"in b.Pf&&b.Ug&&(b.I&&b.I("disconnect"),delete this.sa[a],this.ad--)}0===this.ad&&(this.sa=[]);this.Wd={};di(this)&&(this.Sb?this.Oc&&(3E4<(new Date).getTime()-this.Oc&&(this.eb=1E3),this.Oc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.eb=this.Id,this.Ke=(new Date).getTime()),a=Math.max(0,this.eb-((new Date).getTime()-this.Ke)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Th(this,a),this.eb=Math.min(this.Id,1.3*this.eb));this.Xc(!1)};function ci(a){if(di(a)){a.f("Making a connection attempt");a.Ke=(new Date).getTime();a.Oc=null;var b=u(a.Ld,a),c=u(a.Zc,a),d=u(a.If,a),e=a.id+":"+Uh++;a.Ma=new Fh(e,a.G,b,c,d,function(b){S(b+" ("+a.G.toString()+")");a.Bf=!0},a.Fb)}}h.Cb=function(){this.Ie=!0;this.Ma?this.Ma.close():(this.wb&&(clearTimeout(this.wb),this.wb=null),this.qa&&this.If())};h.vc=function(){this.Ie=!1;this.eb=1E3;this.Ma||Th(this,0)};
	function ai(a,b,c){c=c?Oa(c,function(a){return xd(a)}).join("$"):"default";(a=Wh(a,b,c))&&a.I&&a.I("permission_denied")}function Wh(a,b,c){b=(new P(b)).toString();var d;p(a.ba[b])?(d=a.ba[b][c],delete a.ba[b][c],0===oa(a.ba[b])&&delete a.ba[b]):d=void 0;return d}function bi(a){Xh(a);v(a.ba,function(b){v(b,function(b){Vh(a,b)})});for(var b=0;b<a.sa.length;b++)a.sa[b]&&$h(a,b);for(;a.Yc.length;)b=a.Yc.shift(),Yh(a,b.action,b.bd,b.data,b.I)}function di(a){var b;b=jf.yb().oc;return!a.Bf&&!a.Ie&&b};var U={zg:function(){oh=xh=!0}};U.forceLongPolling=U.zg;U.Ag=function(){ph=!0};U.forceWebSockets=U.Ag;U.$g=function(a,b){a.k.Va.$e=b};U.setSecurityDebugCallback=U.$g;U.bf=function(a,b){a.k.bf(b)};U.stats=U.bf;U.cf=function(a,b){a.k.cf(b)};U.statsIncrementCounter=U.cf;U.ud=function(a){return a.k.ud};U.dataUpdateCount=U.ud;U.Dg=function(a,b){a.k.He=b};U.interceptServerData=U.Dg;U.Jg=function(a){new Og(a)};U.onPopupOpen=U.Jg;U.Yg=function(a){xg=a};U.setAuthenticationServer=U.Yg;function ei(a,b){this.committed=a;this.snapshot=b};function V(a,b){this.dd=a;this.ta=b}V.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);F("Firebase.onDisconnect().cancel",1,a,!0);var b=new B;this.dd.Md(this.ta,C(b,a));return b.D};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);og("Firebase.onDisconnect().remove",this.ta);F("Firebase.onDisconnect().remove",1,a,!0);var b=new B;fi(this.dd,this.ta,null,C(b,a));return b.D};
	V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);og("Firebase.onDisconnect().set",this.ta);gg("Firebase.onDisconnect().set",a,this.ta,!1);F("Firebase.onDisconnect().set",2,b,!0);var c=new B;fi(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.set=V.prototype.set;
	V.prototype.Ob=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);og("Firebase.onDisconnect().setWithPriority",this.ta);gg("Firebase.onDisconnect().setWithPriority",a,this.ta,!1);kg("Firebase.onDisconnect().setWithPriority",2,b);F("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new B;gi(this.dd,this.ta,a,b,C(d,c));return d.D};V.prototype.setWithPriority=V.prototype.Ob;
	V.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);og("Firebase.onDisconnect().update",this.ta);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.onDisconnect().update",a,this.ta);F("Firebase.onDisconnect().update",2,b,!0);
	c=new B;hi(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.update=V.prototype.update;function W(a,b,c){this.A=a;this.Y=b;this.g=c}W.prototype.J=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.J()};W.prototype.val=W.prototype.J;W.prototype.qf=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.J(!0)};W.prototype.exportVal=W.prototype.qf;W.prototype.xg=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.xg;
	W.prototype.o=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));ng("Firebase.DataSnapshot.child",a);var b=new P(a),c=this.Y.o(b);return new W(this.A.S(b),c,R)};W.prototype.child=W.prototype.o;W.prototype.Fa=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ng("Firebase.DataSnapshot.hasChild",a);var b=new P(a);return!this.A.S(b).e()};W.prototype.hasChild=W.prototype.Fa;
	W.prototype.C=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().J()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);F("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.L())return!1;var b=this;return!!this.A.R(this.g,function(c,d){return a(new W(d,b.Y.o(c),R))})};W.prototype.forEach=W.prototype.forEach;
	W.prototype.zd=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.L()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.zd;W.prototype.name=function(){S("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};W.prototype.name=W.prototype.name;W.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.Y.key()};
	W.prototype.key=W.prototype.key;W.prototype.Hb=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Hb()};W.prototype.numChildren=W.prototype.Hb;W.prototype.Mb=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.Y};W.prototype.ref=W.prototype.Mb;function ii(a,b,c){this.Vb=a;this.tb=b;this.vb=c||null}h=ii.prototype;h.Qf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new jc("value",this,new W(a.Na,b.Mb(),c))};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.Vb;return function(){d.call(b,a.be)}};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
	h.matches=function(a){return a instanceof ii?a.Vb&&this.Vb?a.Vb===this.Vb&&a.vb===this.vb:!0:!1};h.yf=function(){return null!==this.Vb};function ji(a,b,c){this.ja=a;this.tb=b;this.vb=c}h=ji.prototype;h.Qf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ja};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
	h.createEvent=function(a,b){O(null!=a.Za,"Child events should have a childName.");var c=b.Mb().o(a.Za);return new jc(a.type,this,new W(a.Na,c,b.n.g),a.Td)};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.ja[a.wd];return function(){d.call(b,a.be,a.Td)}};
	h.matches=function(a){if(a instanceof ji){if(!this.ja||!a.ja)return!0;if(this.vb===a.vb){var b=oa(a.ja);if(b===oa(this.ja)){if(1===b){var b=pa(a.ja),c=pa(this.ja);return c===b&&(!a.ja[b]||!this.ja[c]||a.ja[b]===this.ja[c])}return na(this.ja,function(b,c){return a.ja[c]===b})}}}return!1};h.yf=function(){return null!==this.ja};function ki(){this.za={}}h=ki.prototype;h.e=function(){return va(this.za)};h.gb=function(a,b,c){var d=a.source.Lb;if(null!==d)return d=z(this.za,d),O(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.gb(a,b,c))});return e};h.Tb=function(a,b,c,d,e){var f=a.wa(),g=z(this.za,f);if(!g){var g=c.Aa(e?d:null),k=!1;g?k=!0:(g=d instanceof fe?c.Cc(d):H,k=!1);g=new Ye(a,new je(new Xb(g,k,!1),new Xb(d,e,!1)));this.za[f]=g}g.Tb(b);return af(g,b)};
	h.nb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=li(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.nb(b,c));a.e()&&(delete k.za[d],He(a.Y.n)||e.push(a.Y))})}else{var m=z(this.za,d);m&&(f=f.concat(m.nb(b,c)),m.e()&&(delete this.za[d],He(m.Y.n)||e.push(m.Y)))}g&&null==li(this)&&e.push(new X(a.k,a.path));return{Vg:e,vg:f}};function mi(a){return Na(qa(a.za),function(a){return!He(a.Y.n)})}h.kb=function(a){var b=null;v(this.za,function(c){b=b||c.kb(a)});return b};
	function ni(a,b){if(He(b.n))return li(a);var c=b.wa();return z(a.za,c)}function li(a){return ua(a.za,function(a){return He(a.Y.n)})||null};function oi(a){this.va=qe;this.mb=new Pf;this.df={};this.qc={};this.Qc=a}function pi(a,b,c,d,e){var f=a.mb,g=e;O(d>f.Pc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.pa.push({path:b,Ja:c,md:d,visible:g});g&&(f.V=Jf(f.V,b,c));f.Pc=d;return e?qi(a,new Ac(Ef,b,c)):[]}function ri(a,b,c,d){var e=a.mb;O(d>e.Pc,"Stacking an older merge on top of newer ones");e.pa.push({path:b,children:c,md:d,visible:!0});e.V=Kf(e.V,b,c);e.Pc=d;c=sf(c);return qi(a,new bf(Ef,b,c))}
	function si(a,b,c){c=c||!1;var d=Qf(a.mb,b);if(a.mb.Ud(b)){var e=qe;null!=d.Ja?e=e.set(M,!0):Fb(d.children,function(a,b){e=e.set(new P(a),b)});return qi(a,new Df(d.path,e,c))}return[]}function ti(a,b,c){c=sf(c);return qi(a,new bf(Gf,b,c))}function ui(a,b,c,d){d=vi(a,d);if(null!=d){var e=wi(d);d=e.path;e=e.Lb;b=lf(d,b);c=new Ac(new Ff(!1,!0,e,!0),b,c);return xi(a,d,c)}return[]}
	function yi(a,b,c,d){if(d=vi(a,d)){var e=wi(d);d=e.path;e=e.Lb;b=lf(d,b);c=sf(c);c=new bf(new Ff(!1,!0,e,!0),b,c);return xi(a,d,c)}return[]}
	oi.prototype.Tb=function(a,b){var c=a.path,d=null,e=!1;zf(this.va,c,function(a,b){var f=lf(a,c);d=d||b.kb(f);e=e||null!=li(b)});var f=this.va.get(c);f?(e=e||null!=li(f),d=d||f.kb(M)):(f=new ki,this.va=this.va.set(c,f));var g;null!=d?g=!0:(g=!1,d=H,Cf(this.va.subtree(c),function(a,b){var c=b.kb(M);c&&(d=d.W(a,c))}));var k=null!=ni(f,a);if(!k&&!He(a.n)){var m=zi(a);O(!(m in this.qc),"View does not exist, but we have a tag");var l=Ai++;this.qc[m]=l;this.df["_"+l]=m}g=f.Tb(a,b,new Uf(c,this.mb),d,g);
	k||e||(f=ni(f,a),g=g.concat(Bi(this,a,f)));return g};
	oi.prototype.nb=function(a,b,c){var d=a.path,e=this.va.get(d),f=[];if(e&&("default"===a.wa()||null!=ni(e,a))){f=e.nb(a,b,c);e.e()&&(this.va=this.va.remove(d));e=f.Vg;f=f.vg;b=-1!==Sa(e,function(a){return He(a.n)});var g=xf(this.va,d,function(a,b){return null!=li(b)});if(b&&!g&&(d=this.va.subtree(d),!d.e()))for(var d=Ci(d),k=0;k<d.length;++k){var m=d[k],l=m.Y,m=Di(this,m);this.Qc.af(Ei(l),Fi(this,l),m.Ad,m.I)}if(!g&&0<e.length&&!c)if(b)this.Qc.de(Ei(a),null);else{var t=this;Ma(e,function(a){a.wa();
	var b=t.qc[zi(a)];t.Qc.de(Ei(a),b)})}Gi(this,e)}return f};oi.prototype.Aa=function(a,b){var c=this.mb,d=xf(this.va,a,function(b,c){var d=lf(b,a);if(d=c.kb(d))return d});return c.Aa(a,d,b,!0)};function Ci(a){return vf(a,function(a,c,d){if(c&&null!=li(c))return[li(c)];var e=[];c&&(e=mi(c));v(d,function(a){e=e.concat(a)});return e})}function Gi(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!He(d.n)){var d=zi(d),e=a.qc[d];delete a.qc[d];delete a.df["_"+e]}}}
	function Ei(a){return He(a.n)&&!Ie(a.n)?a.Mb():a}function Bi(a,b,c){var d=b.path,e=Fi(a,b);c=Di(a,c);b=a.Qc.af(Ei(b),e,c.Ad,c.I);d=a.va.subtree(d);if(e)O(null==li(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=vf(d,function(a,b,c){if(!a.e()&&b&&null!=li(b))return[Ze(li(b))];var d=[];b&&(d=d.concat(Oa(mi(b),function(a){return a.Y})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Qc.de(Ei(c),Fi(a,c));return b}
	function Di(a,b){var c=b.Y,d=Fi(a,c);return{Ad:function(){return(b.w()||H).hash()},I:function(b){if("ok"===b){if(d){var f=c.path;if(b=vi(a,d)){var g=wi(b);b=g.path;g=g.Lb;f=lf(b,f);f=new Cc(new Ff(!1,!0,g,!0),f);b=xi(a,b,f)}else b=[]}else b=qi(a,new Cc(Gf,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.nb(c,null,f)}}}function zi(a){return a.path.toString()+"$"+a.wa()}function wi(a){var b=a.indexOf("$");O(-1!==b&&b<a.length-1,"Bad queryKey.");return{Lb:a.substr(b+1),path:new P(a.substr(0,b))}}function vi(a,b){var c=a.df,d="_"+b;return d in c?c[d]:void 0}function Fi(a,b){var c=zi(b);return z(a.qc,c)}var Ai=1;
	function xi(a,b,c){var d=a.va.get(b);O(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new Uf(b,a.mb),null)}function qi(a,b){return Hi(a,b,a.va,null,new Uf(M,a.mb))}function Hi(a,b,c,d,e){if(b.path.e())return Ii(a,b,c,d,e);var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[],k=K(b.path),m=b.$c(k);if((c=c.children.get(k))&&m)var l=d?d.T(k):null,k=e.o(k),g=g.concat(Hi(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g}
	function Ii(a,b,c,d,e){var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[];c.children.ka(function(c,f){var l=d?d.T(c):null,t=e.o(c),A=b.$c(c);A&&(g=g.concat(Ii(a,A,f,l,t)))});f&&(g=g.concat(f.gb(b,e,d)));return g};function Ji(a,b){this.G=a;this.Xa=uc(a);this.hd=null;this.fa=new Zb;this.Kd=1;this.Va=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.da=new cf(this.G,u(this.Kb,this)),setTimeout(u(this.Xc,this,!0),0)):this.da=this.Va=new Rh(this.G,u(this.Kb,this),u(this.Xc,this),u(this.Se,this));this.dh=vc(a,u(function(){return new pc(this.Xa,this.da)},this));this.yc=new Wf;
	this.Ge=new Sb;var c=this;this.Fd=new oi({af:function(a,b,f,g){b=[];f=c.Ge.j(a.path);f.e()||(b=qi(c.Fd,new Ac(Gf,a.path,f)),setTimeout(function(){g("ok")},0));return b},de:aa});Ki(this,"connected",!1);this.na=new Vc;this.O=new Yg(a,u(this.da.O,this.da),u(this.da.je,this.da),u(this.Pe,this));this.ud=0;this.He=null;this.M=new oi({af:function(a,b,f,g){c.da.Cf(a,f,b,function(b,e){var f=g(b,e);dc(c.fa,a.path,f)});return[]},de:function(a,b){c.da.$f(a,b)}})}h=Ji.prototype;
	h.toString=function(){return(this.G.ob?"https://":"http://")+this.G.host};h.name=function(){return this.G.lc};function Li(a){a=a.Ge.j(new P(".info/serverTimeOffset")).J()||0;return(new Date).getTime()+a}function Mi(a){a=a={timestamp:Li(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.Kb=function(a,b,c,d){this.ud++;var e=new P(a);b=this.He?this.He(a,b):b;a=[];d?c?(b=ma(b,function(a){return Q(a)}),a=yi(this.M,e,b,d)):(b=Q(b),a=ui(this.M,e,b,d)):c?(d=ma(b,function(a){return Q(a)}),a=ti(this.M,e,d)):(d=Q(b),a=qi(this.M,new Ac(Gf,e,d)));d=e;0<a.length&&(d=Ni(this,e));dc(this.fa,d,a)};h.Xc=function(a){Ki(this,"connected",a);!1===a&&Oi(this)};h.Se=function(a){var b=this;zd(a,function(a,d){Ki(b,d,a)})};h.Pe=function(a){Ki(this,"authenticated",a)};
	function Ki(a,b,c){b=new P("/.info/"+b);c=Q(c);var d=a.Ge;d.Zd=d.Zd.H(b,c);c=qi(a.Fd,new Ac(Gf,b,c));dc(a.fa,b,c)}h.Ob=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,mh:c});var e=Mi(this);b=Q(b,c);var e=Xc(b,e),f=this.Kd++,e=pi(this.M,a,e,f,!0);$b(this.fa,e);var g=this;this.da.put(a.toString(),b.J(!0),function(b,c){var e="ok"===b;e||S("set at "+a+" failed: "+b);e=si(g.M,f,!e);dc(g.fa,a,e);Pi(d,b,c)});e=Qi(this,a);Ni(this,e);dc(this.fa,e,[])};
	h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Mi(this),f={};v(b,function(a,b){d=!1;var c=Q(a);f[b]=Xc(c,e)});if(d)fc("update() called with empty data.  Don't do anything."),Pi(c,"ok");else{var g=this.Kd++,k=ri(this.M,a,f,g);$b(this.fa,k);var m=this;this.da.Df(a.toString(),b,function(b,d){var e="ok"===b;e||S("update at "+a+" failed: "+b);var e=si(m.M,g,!e),f=a;0<e.length&&(f=Ni(m,a));dc(m.fa,f,e);Pi(c,b,d)});b=Qi(this,a);Ni(this,b);dc(this.fa,a,[])}};
	function Oi(a){a.f("onDisconnectEvents");var b=Mi(a),c=[];Wc(Uc(a.na,b),M,function(b,e){c=c.concat(qi(a.M,new Ac(Gf,b,e)));var f=Qi(a,b);Ni(a,f)});a.na=new Vc;dc(a.fa,M,c)}h.Md=function(a,b){var c=this;this.da.Md(a.toString(),function(d,e){"ok"===d&&wg(c.na,a);Pi(b,d,e)})};function fi(a,b,c,d){var e=Q(c);a.da.Qe(b.toString(),e.J(!0),function(c,g){"ok"===c&&a.na.rc(b,e);Pi(d,c,g)})}function gi(a,b,c,d,e){var f=Q(c,d);a.da.Qe(b.toString(),f.J(!0),function(c,d){"ok"===c&&a.na.rc(b,f);Pi(e,c,d)})}
	function hi(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(fc("onDisconnect().update() called with empty data.  Don't do anything."),Pi(d,"ok")):a.da.Gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=Q(c[m]);a.na.rc(b.o(m),l)}Pi(d,e,f)})}function Ri(a,b,c){c=".info"===K(b.path)?a.Fd.Tb(b,c):a.M.Tb(b,c);bc(a.fa,b.path,c)}h.Cb=function(){this.Va&&this.Va.Cb()};h.vc=function(){this.Va&&this.Va.vc()};
	h.bf=function(a){if("undefined"!==typeof console){a?(this.hd||(this.hd=new oc(this.Xa)),a=this.hd.get()):a=this.Xa.get();var b=Pa(ra(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.cf=function(a){rc(this.Xa,a);this.dh.Vf[a]=!0};h.f=function(a){var b="";this.Va&&(b=this.Va.id+":");fc(b,arguments)};
	function Pi(a,b,c){a&&gc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Si(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new X(a,b);g.Ib("value",f);c={path:b,update:c,I:d,status:null,Lf:id(),gf:e,Sf:0,le:function(){g.mc("value",f)},ne:null,Da:null,rd:null,sd:null,td:null};d=a.M.Aa(b,void 0)||H;c.rd=d;d=c.update(d.J());if(p(d)){hg("transaction failed: Data returned ",d,c.path);c.status=1;e=Xf(a.yc,b);var k=e.Ea()||[];k.push(c);Yf(e,k);"object"===typeof d&&null!==d&&y(d,".priority")?(k=z(d,".priority"),O(fg(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.M.Aa(b)||H).C().J();e=Mi(a);d=Q(d,k);e=Xc(d,e);c.sd=d;c.td=e;c.Da=a.Kd++;c=pi(a.M,b,e,c.Da,c.gf);dc(a.fa,b,c);Ti(a)}else c.le(),c.sd=null,c.td=null,c.I&&(a=new W(c.rd,new X(a,c.path),R),c.I(null,!1,a))}function Ti(a,b){var c=b||a.yc;b||Ui(a,c);if(null!==c.Ea()){var d=Vi(a,c);O(0<d.length,"Sending zero length transaction queue");Qa(d,function(a){return 1===a.status})&&Wi(a,c.path(),d)}else c.zd()&&c.R(function(b){Ti(a,b)})}
	function Wi(a,b,c){for(var d=Oa(c,function(a){return a.Da}),e=a.M.Aa(b,d)||H,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];O(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Sf++;var k=lf(b,g.path),d=d.H(k,g.sd)}d=d.J(!0);a.da.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(si(a.M,c[f].Da));if(c[f].I){var g=c[f].td,k=new X(a,c[f].path);d.push(u(c[f].I,
	null,null,!0,new W(g,k,R)))}c[f].le()}Ui(a,Xf(a.yc,b));Ti(a);dc(a.fa,b,e);for(f=0;f<d.length;f++)gc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(S("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ne=d;Ni(a,b)}},e)}function Ni(a,b){var c=Xi(a,b),d=c.path(),c=Vi(a,c);Yi(a,c,d);return d}
	function Yi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Oa(b,function(a){return a.Da}),g=0;g<b.length;g++){var k=b[g],m=lf(c,k.path),l=!1,t;O(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,t=k.ne,e=e.concat(si(a.M,k.Da,!0));else if(1===k.status)if(25<=k.Sf)l=!0,t="maxretry",e=e.concat(si(a.M,k.Da,!0));else{var A=a.M.Aa(k.path,f)||H;k.rd=A;var I=b[g].update(A.J());p(I)?(hg("transaction failed: Data returned ",I,k.path),m=Q(I),"object"===typeof I&&null!=
	I&&y(I,".priority")||(m=m.ia(A.C())),A=k.Da,I=Mi(a),I=Xc(m,I),k.sd=m,k.td=I,k.Da=a.Kd++,Ta(f,A),e=e.concat(pi(a.M,k.path,I,k.Da,k.gf)),e=e.concat(si(a.M,A,!0))):(l=!0,t="nodata",e=e.concat(si(a.M,k.Da,!0)))}dc(a.fa,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].le,Math.floor(0)),b[g].I&&("nodata"===t?(k=new X(a,b[g].path),d.push(u(b[g].I,null,null,!1,new W(b[g].rd,k,R)))):d.push(u(b[g].I,null,Error(t),!1,null))))}Ui(a,a.yc);for(g=0;g<d.length;g++)gc(d[g]);Ti(a)}}
	function Xi(a,b){for(var c,d=a.yc;null!==(c=K(b))&&null===d.Ea();)d=Xf(d,c),b=N(b);return d}function Vi(a,b){var c=[];Zi(a,b,c);c.sort(function(a,b){return a.Lf-b.Lf});return c}function Zi(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.R(function(b){Zi(a,b,c)})}function Ui(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Yf(b,0<c.length?c:null)}b.R(function(b){Ui(a,b)})}
	function Qi(a,b){var c=Xi(a,b).path(),d=Xf(a.yc,b);ag(d,function(b){$i(a,b)});$i(a,d);$f(d,function(b){$i(a,b)});return c}
	function $i(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(O(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ne="set"):(O(1===c[g].status,"Unexpected transaction status in abort"),c[g].le(),e=e.concat(si(a.M,c[g].Da,!0)),c[g].I&&d.push(u(c[g].I,null,Error("set"),!1,null))));-1===f?Yf(b,null):c.length=f+1;dc(a.fa,b.path(),e);for(g=0;g<d.length;g++)gc(d[g])}};function aj(){this.sc={};this.ag=!1}aj.prototype.Cb=function(){for(var a in this.sc)this.sc[a].Cb()};aj.prototype.vc=function(){for(var a in this.sc)this.sc[a].vc()};aj.prototype.ze=function(){this.ag=!0};ba(aj);aj.prototype.interrupt=aj.prototype.Cb;aj.prototype.resume=aj.prototype.vc;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.pc=d}
	function bj(a){var b=null,c=null;a.oa&&(b=Od(a));a.ra&&(c=Rd(a));if(a.g===re){if(a.oa){if("[MIN_NAME]"!=Nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.ra){if("[MAX_NAME]"!=Pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===R){if(null!=b&&!fg(b)||null!=c&&!fg(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(O(a.g instanceof ve||a.g===Be,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function cj(a){if(a.oa&&a.ra&&a.la&&(!a.la||""===a.Rb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function dj(a,b){if(!0===a.pc)throw Error(b+": You can't combine multiple orderBy calls.");}h=Y.prototype;h.Mb=function(){D("Query.ref",0,0,arguments.length);return new X(this.k,this.path)};
	h.Ib=function(a,b,c,d){D("Query.on",2,4,arguments.length);lg("Query.on",a,!1);F("Query.on",2,b,!1);var e=ej("Query.on",c,d);if("value"===a)Ri(this.k,this,new ii(b,e.cancel||null,e.Qa||null));else{var f={};f[a]=b;Ri(this.k,this,new ji(f,e.cancel,e.Qa))}return b};
	h.mc=function(a,b,c){D("Query.off",0,3,arguments.length);lg("Query.off",a,!0);F("Query.off",2,b,!0);Qb("Query.off",3,c);var d=null,e=null;"value"===a?d=new ii(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new ji(e,null,c||null));e=this.k;d=".info"===K(this.path)?e.Fd.nb(this,d):e.M.nb(this,d);bc(e.fa,this.path,d)};
	h.Og=function(a,b){function c(k){f&&(f=!1,e.mc(a,c),b&&b.call(d.Qa,k),g.resolve(k))}D("Query.once",1,4,arguments.length);lg("Query.once",a,!1);F("Query.once",2,b,!0);var d=ej("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new B;Nb(g.D);this.Ib(a,c,function(b){e.mc(a,c);d.cancel&&d.cancel.call(d.Qa,b);g.reject(b)});return g.D};
	h.Le=function(a){S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Le(a);cj(b);return new Y(this.k,this.path,b,this.pc)};
	h.Me=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Me(a),this.pc)};
	h.Ne=function(a){D("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ne(a),this.pc)};
	h.Pg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ng("Query.orderByChild",a);dj(this,"Query.orderByChild");var b=new P(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new ve(b);b=Fe(this.n,b);bj(b);return new Y(this.k,this.path,b,!0)};h.Qg=function(){D("Query.orderByKey",0,0,arguments.length);dj(this,"Query.orderByKey");var a=Fe(this.n,re);bj(a);return new Y(this.k,this.path,a,!0)};h.Rg=function(){D("Query.orderByPriority",0,0,arguments.length);dj(this,"Query.orderByPriority");var a=Fe(this.n,R);bj(a);return new Y(this.k,this.path,a,!0)};
	h.Sg=function(){D("Query.orderByValue",0,0,arguments.length);dj(this,"Query.orderByValue");var a=Fe(this.n,Be);bj(a);return new Y(this.k,this.path,a,!0)};h.ce=function(a,b){D("Query.startAt",0,2,arguments.length);gg("Query.startAt",a,this.path,!0);mg("Query.startAt",b);var c=this.n.ce(a,b);cj(c);bj(c);if(this.n.oa)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new Y(this.k,this.path,c,this.pc)};
	h.vd=function(a,b){D("Query.endAt",0,2,arguments.length);gg("Query.endAt",a,this.path,!0);mg("Query.endAt",b);var c=this.n.vd(a,b);cj(c);bj(c);if(this.n.ra)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.pc)};
	h.tg=function(a,b){D("Query.equalTo",1,2,arguments.length);gg("Query.equalTo",a,this.path,!1);mg("Query.equalTo",b);if(this.n.oa)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.ra)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.ce(a,b).vd(a,b)};
	h.toString=function(){D("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.aa;c<a.u.length;c++)""!==a.u[c]&&(b+="/"+encodeURIComponent(String(a.u[c])));return this.k.toString()+(b||"/")};h.wa=function(){var a=xd(Ge(this.n));return"{}"===a?"default":a};
	function ej(a,b,c){var d={cancel:null,Qa:null};if(b&&c)d.cancel=b,F(a,3,d.cancel,!0),d.Qa=c,Qb(a,4,d.Qa);else if(b)if("object"===typeof b&&null!==b)d.Qa=b;else if("function"===typeof b)d.cancel=b;else throw Error(E(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.Mb;Y.prototype.on=Y.prototype.Ib;Y.prototype.off=Y.prototype.mc;Y.prototype.once=Y.prototype.Og;Y.prototype.limit=Y.prototype.Le;Y.prototype.limitToFirst=Y.prototype.Me;
	Y.prototype.limitToLast=Y.prototype.Ne;Y.prototype.orderByChild=Y.prototype.Pg;Y.prototype.orderByKey=Y.prototype.Qg;Y.prototype.orderByPriority=Y.prototype.Rg;Y.prototype.orderByValue=Y.prototype.Sg;Y.prototype.startAt=Y.prototype.ce;Y.prototype.endAt=Y.prototype.vd;Y.prototype.equalTo=Y.prototype.tg;Y.prototype.toString=Y.prototype.toString;var Z={};Z.zc=Rh;Z.DataConnection=Z.zc;Rh.prototype.bh=function(a,b){this.Ia("q",{p:a},b)};Z.zc.prototype.simpleListen=Z.zc.prototype.bh;Rh.prototype.sg=function(a,b){this.Ia("echo",{d:a},b)};Z.zc.prototype.echo=Z.zc.prototype.sg;Rh.prototype.interrupt=Rh.prototype.Cb;Z.dg=Fh;Z.RealTimeConnection=Z.dg;Fh.prototype.sendRequest=Fh.prototype.Ia;Fh.prototype.close=Fh.prototype.close;
	Z.Cg=function(a){var b=Rh.prototype.put;Rh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Rh.prototype.put=b}};Z.hijackHash=Z.Cg;Z.cg=dd;Z.ConnectionTarget=Z.cg;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.Eg=function(a){return a.k.Va.ba};Z.listens=Z.Eg;Z.ze=function(a){a.ze()};Z.forceRestClient=Z.ze;function X(a,b){var c,d,e;if(a instanceof Ji)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=sd(arguments[0]);c=d.eh;"firebase"===d.domain&&rd(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||rd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.ob||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
	c=new dd(d.host,d.ob,c,"ws"===d.scheme||"wss"===d.scheme);d=new P(d.bd);e=d.toString();var f;!(f=!q(c.host)||0===c.host.length||!eg(c.lc))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(q(e)&&0!==e.length&&!cg.test(e)));if(f)throw Error(E("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof aj)e=b;else if(q(b))e=aj.yb(),c.Rd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
	else e=aj.yb();f=c.toString();var g=z(e.sc,f);g||(g=new Ji(c,e.ag),e.sc[f]=g);c=g}Y.call(this,c,d,De,!1);this.then=void 0;this["catch"]=void 0}ka(X,Y);var fj=X,gj=["Firebase"],hj=n;gj[0]in hj||!hj.execScript||hj.execScript("var "+gj[0]);for(var ij;gj.length&&(ij=gj.shift());)!gj.length&&p(fj)?hj[ij]=fj:hj=hj[ij]?hj[ij]:hj[ij]={};X.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);aj.yb().Cb()};X.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);aj.yb().vc()};
	X.enableLogging=od;X.ServerValue={TIMESTAMP:{".sv":"timestamp"}};X.SDK_VERSION=Eb;X.INTERNAL=U;X.Context=aj;X.TEST_ACCESS=Z;X.prototype.name=function(){S("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};X.prototype.name=X.prototype.name;X.prototype.key=function(){D("Firebase.key",0,0,arguments.length);return this.path.e()?null:me(this.path)};X.prototype.key=X.prototype.key;
	X.prototype.o=function(a){D("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof P))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ng("Firebase.child",b)}else ng("Firebase.child",a);return new X(this.k,this.path.o(a))};X.prototype.child=X.prototype.o;X.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new X(this.k,a)};X.prototype.parent=X.prototype.parent;
	X.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};X.prototype.root=X.prototype.root;X.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);og("Firebase.set",this.path);gg("Firebase.set",a,this.path,!1);F("Firebase.set",2,b,!0);var c=new B;this.k.Ob(this.path,a,null,C(c,b));return c.D};X.prototype.set=X.prototype.set;
	X.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);og("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.update",a,this.path);F("Firebase.update",2,b,!0);c=new B;this.k.update(this.path,a,C(c,b));return c.D};
	X.prototype.update=X.prototype.update;X.prototype.Ob=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);og("Firebase.setWithPriority",this.path);gg("Firebase.setWithPriority",a,this.path,!1);kg("Firebase.setWithPriority",2,b);F("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";var d=new B;this.k.Ob(this.path,a,b,C(d,c));return d.D};X.prototype.setWithPriority=X.prototype.Ob;
	X.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);og("Firebase.remove",this.path);F("Firebase.remove",1,a,!0);return this.set(null,a)};X.prototype.remove=X.prototype.remove;
	X.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);og("Firebase.transaction",this.path);F("Firebase.transaction",1,a,!1);F("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(E("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new B;r(b)&&Nb(d.D);Si(this.k,this.path,a,function(a,c,g){a?
	d.reject(a):d.resolve(new ei(c,g));r(b)&&b(a,c,g)},c);return d.D};X.prototype.transaction=X.prototype.transaction;X.prototype.Zg=function(a,b){D("Firebase.setPriority",1,2,arguments.length);og("Firebase.setPriority",this.path);kg("Firebase.setPriority",1,a);F("Firebase.setPriority",2,b,!0);var c=new B;this.k.Ob(this.path.o(".priority"),a,null,C(c,b));return c.D};X.prototype.setPriority=X.prototype.Zg;
	X.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);og("Firebase.push",this.path);gg("Firebase.push",a,this.path,!0);F("Firebase.push",2,b,!0);var c=Li(this.k),d=hf(c),c=this.o(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.o(d)});c.then=u(f.then,f);c["catch"]=u(f.then,f,void 0);r(b)&&Nb(f)}return c};X.prototype.push=X.prototype.push;X.prototype.lb=function(){og("Firebase.onDisconnect",this.path);return new V(this.k,this.path)};X.prototype.onDisconnect=X.prototype.lb;
	X.prototype.O=function(a,b,c){S("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);pg("Firebase.auth",a);F("Firebase.auth",2,b,!0);F("Firebase.auth",3,b,!0);var d=new B;dh(this.k.O,a,{},{remember:"none"},C(d,b),c);return d.D};X.prototype.auth=X.prototype.O;X.prototype.je=function(a){D("Firebase.unauth",0,1,arguments.length);F("Firebase.unauth",1,a,!0);var b=new B;eh(this.k.O,C(b,a));return b.D};X.prototype.unauth=X.prototype.je;
	X.prototype.Be=function(){D("Firebase.getAuth",0,0,arguments.length);return this.k.O.Be()};X.prototype.getAuth=X.prototype.Be;X.prototype.Ig=function(a,b){D("Firebase.onAuth",1,2,arguments.length);F("Firebase.onAuth",1,a,!1);Qb("Firebase.onAuth",2,b);this.k.O.Ib("auth_status",a,b)};X.prototype.onAuth=X.prototype.Ig;X.prototype.Hg=function(a,b){D("Firebase.offAuth",1,2,arguments.length);F("Firebase.offAuth",1,a,!1);Qb("Firebase.offAuth",2,b);this.k.O.mc("auth_status",a,b)};X.prototype.offAuth=X.prototype.Hg;
	X.prototype.hg=function(a,b,c){D("Firebase.authWithCustomToken",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);pg("Firebase.authWithCustomToken",a);F("Firebase.authWithCustomToken",2,b,!0);sg("Firebase.authWithCustomToken",3,c,!0);var d=new B;dh(this.k.O,a,{},c||{},C(d,b));return d.D};X.prototype.authWithCustomToken=X.prototype.hg;
	X.prototype.ig=function(a,b,c){D("Firebase.authWithOAuthPopup",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthPopup",a);F("Firebase.authWithOAuthPopup",2,b,!0);sg("Firebase.authWithOAuthPopup",3,c,!0);var d=new B;ih(this.k.O,a,c,C(d,b));return d.D};X.prototype.authWithOAuthPopup=X.prototype.ig;
	X.prototype.jg=function(a,b,c){D("Firebase.authWithOAuthRedirect",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthRedirect",a);F("Firebase.authWithOAuthRedirect",2,b,!1);sg("Firebase.authWithOAuthRedirect",3,c,!0);var d=new B,e=this.k.O,f=c,g=C(d,b);gh(e);var k=[Qg],f=Ag(f);"anonymous"===a||"firebase"===a?T(g,Sg("TRANSPORT_UNAVAILABLE")):(cd.set("redirect_client_options",f.qd),hh(e,k,"/auth/"+a,f,g));return d.D};X.prototype.authWithOAuthRedirect=X.prototype.jg;
	X.prototype.kg=function(a,b,c,d){D("Firebase.authWithOAuthToken",2,4,arguments.length);3===arguments.length&&Hb(c)&&(d=c,c=void 0);rg("Firebase.authWithOAuthToken",a);F("Firebase.authWithOAuthToken",3,c,!0);sg("Firebase.authWithOAuthToken",4,d,!0);var e=new B;q(b)?(qg("Firebase.authWithOAuthToken",2,b),fh(this.k.O,a+"/token",{access_token:b},d,C(e,c))):(sg("Firebase.authWithOAuthToken",2,b,!1),fh(this.k.O,a+"/token",b,d,C(e,c)));return e.D};X.prototype.authWithOAuthToken=X.prototype.kg;
	X.prototype.gg=function(a,b){D("Firebase.authAnonymously",0,2,arguments.length);1===arguments.length&&Hb(a)&&(b=a,a=void 0);F("Firebase.authAnonymously",1,a,!0);sg("Firebase.authAnonymously",2,b,!0);var c=new B;fh(this.k.O,"anonymous",{},b,C(c,a));return c.D};X.prototype.authAnonymously=X.prototype.gg;
	X.prototype.lg=function(a,b,c){D("Firebase.authWithPassword",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);sg("Firebase.authWithPassword",1,a,!1);tg("Firebase.authWithPassword",a,"email");tg("Firebase.authWithPassword",a,"password");F("Firebase.authWithPassword",2,b,!0);sg("Firebase.authWithPassword",3,c,!0);var d=new B;fh(this.k.O,"password",a,c,C(d,b));return d.D};X.prototype.authWithPassword=X.prototype.lg;
	X.prototype.ve=function(a,b){D("Firebase.createUser",1,2,arguments.length);sg("Firebase.createUser",1,a,!1);tg("Firebase.createUser",a,"email");tg("Firebase.createUser",a,"password");F("Firebase.createUser",2,b,!0);var c=new B;this.k.O.ve(a,C(c,b));return c.D};X.prototype.createUser=X.prototype.ve;
	X.prototype.Xe=function(a,b){D("Firebase.removeUser",1,2,arguments.length);sg("Firebase.removeUser",1,a,!1);tg("Firebase.removeUser",a,"email");tg("Firebase.removeUser",a,"password");F("Firebase.removeUser",2,b,!0);var c=new B;this.k.O.Xe(a,C(c,b));return c.D};X.prototype.removeUser=X.prototype.Xe;
	X.prototype.se=function(a,b){D("Firebase.changePassword",1,2,arguments.length);sg("Firebase.changePassword",1,a,!1);tg("Firebase.changePassword",a,"email");tg("Firebase.changePassword",a,"oldPassword");tg("Firebase.changePassword",a,"newPassword");F("Firebase.changePassword",2,b,!0);var c=new B;this.k.O.se(a,C(c,b));return c.D};X.prototype.changePassword=X.prototype.se;
	X.prototype.re=function(a,b){D("Firebase.changeEmail",1,2,arguments.length);sg("Firebase.changeEmail",1,a,!1);tg("Firebase.changeEmail",a,"oldEmail");tg("Firebase.changeEmail",a,"newEmail");tg("Firebase.changeEmail",a,"password");F("Firebase.changeEmail",2,b,!0);var c=new B;this.k.O.re(a,C(c,b));return c.D};X.prototype.changeEmail=X.prototype.re;
	X.prototype.Ze=function(a,b){D("Firebase.resetPassword",1,2,arguments.length);sg("Firebase.resetPassword",1,a,!1);tg("Firebase.resetPassword",a,"email");F("Firebase.resetPassword",2,b,!0);var c=new B;this.k.O.Ze(a,C(c,b));return c.D};X.prototype.resetPassword=X.prototype.Ze;})();
	
	module.exports = Firebase;


/***/ },
/* 32 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 33 */
/***/ function(module, exports) {

	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = r('vertx');
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	      var state = parent._state;
	
	      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	        return this;
	      }
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	      var result = parent._result;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	    var lib$es6$promise$promise$$counter = 0;
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (Array.isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, this._validationError());
	      }
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if (typeof define === 'function' && define['amd']) {
	      define(function() { return lib$es6$promise$umd$$ES6Promise; });
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\Item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".item {\n  padding: 2px 0 2px 40px;\n  position: relative;\n  -webkit-transition: background-color 0.2s ease;\n  transition: background-color 0.2s ease;\n}\n.item p {\n  margin: 2px 0;\n}\n.item .title:visited {\n  color: #828282;\n}\n.item .index {\n  color: #828282;\n  position: absolute;\n  width: 30px;\n  text-align: right;\n  left: 0;\n  top: 4px;\n}\n.item .domain,\n.item .subtext {\n  font-size: 11px;\n  color: #828282;\n}\n.item .domain a,\n.item .subtext a {\n  color: #828282;\n}\n.item .subtext a:hover {\n  text-decoration: underline;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/Item.vue","/./src/components/Item.vue"],"names":[],"mappings":"AAGA;EACE,wBAAA;EACA,mBAAA;EACA,+CAAA;EAAA,uCAAA;CCFD;ADGC;EACE,cAAA;CCDH;ADEC;EACI,eAAA;CCAL;ADCC;EACE,eAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;CCCH;ADAC;;EACE,gBAAA;EACA,eAAA;CCGH;ADFG;;EACE,eAAA;CCKL;ADJC;EACE,2BAAA;CCMH","file":"Item.vue","sourcesContent":["\r\n@import \"../variables.styl\"\r\n\r\n.item\r\n  padding 2px 0 2px 40px\r\n  position relative\r\n  transition background-color .2s ease\r\n  p\r\n    margin 2px 0\r\n  .title:visited\r\n      color $gray\r\n  .index\r\n    color $gray\r\n    position absolute\r\n    width 30px\r\n    text-align right\r\n    left 0\r\n    top 4px\r\n  .domain, .subtext\r\n    font-size 11px\r\n    color $gray\r\n    a\r\n      color $gray\r\n  .subtext a:hover\r\n    text-decoration underline\r\n",".item {\n  padding: 2px 0 2px 40px;\n  position: relative;\n  transition: background-color 0.2s ease;\n}\n.item p {\n  margin: 2px 0;\n}\n.item .title:visited {\n  color: #828282;\n}\n.item .index {\n  color: #828282;\n  position: absolute;\n  width: 30px;\n  text-align: right;\n  left: 0;\n  top: 4px;\n}\n.item .domain,\n.item .subtext {\n  font-size: 11px;\n  color: #828282;\n}\n.item .domain a,\n.item .subtext a {\n  color: #828282;\n}\n.item .subtext a:hover {\n  text-decoration: underline;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="item">
	//     <span class="index">{{index}}.</span>
	//     <p>
	//       <a class="title" :href="href" target="_blank">{{{item.title}}}</a>
	//       <span class="domain" v-show="showDomain">
	//         ({{item.url | domain}})
	//       </span>
	//     </p>
	//     <p class="subtext">
	//       <span v-show="showInfo">
	//         {{item.score}} points by
	//         <a :href="'#/user/' + item.by">{{item.by}}</a>
	//       </span>
	//       {{item.time | fromNow}} ago
	//       <span class="comments-link" v-show="showInfo">
	//         | <a :href="'#/item/' + item.id">{{item.descendants}} {{item.descendants | pluralize 'comment'}}</a>
	//       </span>
	//     </p>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	
	  name: 'Item',
	
	  props: {
	    item: Object,
	    index: Number
	  },
	
	  computed: {
	    href: function href() {
	      return this.item.url || '#/item/' + this.item.id;
	    },
	    showInfo: function showInfo() {
	      return this.item.type === 'story' || this.item.type === 'poll';
	    },
	    showDomain: function showDomain() {
	      return this.item.type === 'story';
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// @import "../variables.styl"
	//
	// .item
	//   padding 2px 0 2px 40px
	//   position relative
	//   transition background-color .2s ease
	//   p
	//     margin 2px 0
	//   .title:visited
	//       color $gray
	//   .index
	//     color $gray
	//     position absolute
	//     width 30px
	//     text-align right
	//     left 0
	//     top 4px
	//   .domain, .subtext
	//     font-size 11px
	//     color $gray
	//     a
	//       color $gray
	//   .subtext a:hover
	//     text-decoration underline
	// </style>

	/* generated by vue-loader */

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item\">\n  <span class=\"index\">{{index}}.</span>\n  <p>\n    <a class=\"title\" :href=\"href\" target=\"_blank\">{{{item.title}}}</a>\n    <span class=\"domain\" v-show=\"showDomain\">\n      ({{item.url | domain}})\n    </span>\n  </p>\n  <p class=\"subtext\">\n    <span v-show=\"showInfo\">\n      {{item.score}} points by\n      <a :href=\"'#/user/' + item.by\">{{item.by}}</a>\n    </span>\n    {{item.time | fromNow}} ago\n    <span class=\"comments-link\" v-show=\"showInfo\">\n      | <a :href=\"'#/item/' + item.id\">{{item.descendants}} {{item.descendants | pluralize 'comment'}}</a>\n    </span>\n  </p>\n</div>\n";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n  <div class=\"news-view\" :class=\"{ loading: !items.length }\">\n    <!-- item list -->\n    <item\n      v-for=\"item in items\"\n      :item=\"item\"\n      :index=\"$index | formatItemIndex\"\n      track-by=\"id\">\n    </item>\n    <!-- navigation -->\n    <div class=\"nav\" v-show=\"items.length > 0\">\n      <a v-if=\"page > 1\" :href=\"'#/news/' + (page - 1)\">&lt; prev</a>\n      <a v-if=\"page < 4\" :href=\"'#/news/' + (page + 1)\">more...</a>\n    </div>\n  </div>\n<!-- <index-tab></index-tab> -->\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\ItemView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\ItemView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".item-view .item {\n  padding-left: 0;\n  margin-bottom: 30px;\n}\n.item-view .item .index {\n  display: none;\n}\n.item-view .poll-options {\n  margin-left: 30px;\n  margin-bottom: 40px;\n}\n.item-view .poll-options li {\n  margin: 12px 0;\n}\n.item-view .poll-options p {\n  margin: 8px 0;\n}\n.item-view .poll-options .subtext {\n  color: #828282;\n  font-size: 11px;\n}\n.item-view .itemtext {\n  color: #828282;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.item-view .itemtext p {\n  margin: 10px 0;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/ItemView.vue","/./src/components/ItemView.vue"],"names":[],"mappings":"AAIE;EACE,gBAAA;EACA,oBAAA;CCHH;ADIG;EACE,cAAA;CCFL;ADGC;EACE,kBAAA;EACA,oBAAA;CCDH;ADEG;EACE,eAAA;CCAL;ADCG;EACE,cAAA;CCCL;ADAG;EACE,eAAA;EACA,gBAAA;CCEL;ADDC;EACE,eAAA;EACA,cAAA;EACA,oBAAA;CCGH;ADFC;EACE,eAAA;CCIH","file":"ItemView.vue","sourcesContent":["\r\n@import \"../variables.styl\"\r\n\r\n.item-view\r\n  .item\r\n    padding-left 0\r\n    margin-bottom 30px\r\n    .index\r\n      display none\r\n  .poll-options\r\n    margin-left 30px\r\n    margin-bottom 40px\r\n    li\r\n      margin 12px 0\r\n    p\r\n      margin 8px 0\r\n    .subtext\r\n      color $gray\r\n      font-size 11px\r\n  .itemtext\r\n    color $gray\r\n    margin-top 0\r\n    margin-bottom 30px\r\n  .itemtext p\r\n    margin 10px 0\r\n",".item-view .item {\n  padding-left: 0;\n  margin-bottom: 30px;\n}\n.item-view .item .index {\n  display: none;\n}\n.item-view .poll-options {\n  margin-left: 30px;\n  margin-bottom: 40px;\n}\n.item-view .poll-options li {\n  margin: 12px 0;\n}\n.item-view .poll-options p {\n  margin: 8px 0;\n}\n.item-view .poll-options .subtext {\n  color: #828282;\n  font-size: 11px;\n}\n.item-view .itemtext {\n  color: #828282;\n  margin-top: 0;\n  margin-bottom: 30px;\n}\n.item-view .itemtext p {\n  margin: 10px 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _store = __webpack_require__(28);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _Item = __webpack_require__(34);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _Comment = __webpack_require__(44);
	
	var _Comment2 = _interopRequireDefault(_Comment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  name: 'ItemView',
	
	  components: {
	    Item: _Item2.default,
	    Comment: _Comment2.default
	  },
	
	  data: function data() {
	    return {
	      item: {},
	      comments: [],
	      pollOptions: null
	    };
	  },
	
	
	  route: {
	    data: function data(_ref) {
	      var to = _ref.to;
	
	      return _store2.default.fetchItem(to.params.id).then(function (item) {
	        document.title = item.title + ' | Vue.js HN Clone';
	        return {
	          item: item,
	          // the final resolved data can further contain Promises
	          comments: _store2.default.fetchItems(item.kids),
	          pollOptions: item.type === 'poll' ? _store2.default.fetchItems(item.parts) : null
	        };
	      });
	    }
	  },
	
	  computed: {
	    isJob: function isJob() {
	      return this.item.type === 'job';
	    },
	    hasText: function hasText() {
	      return this.item.hasOwnProperty('text');
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// @import "../variables.styl"
	//
	// .item-view
	//   .item
	//     padding-left 0
	//     margin-bottom 30px
	//     .index
	//       display none
	//   .poll-options
	//     margin-left 30px
	//     margin-bottom 40px
	//     li
	//       margin 12px 0
	//     p
	//       margin 8px 0
	//     .subtext
	//       color $gray
	//       font-size 11px
	//   .itemtext
	//     color $gray
	//     margin-top 0
	//     margin-bottom 30px
	//   .itemtext p
	//     margin 10px 0
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <div class="item-view" v-show="item">
	//     <item :item="item"></item>
	//     <p class="itemtext" v-if="hasText" v-html="item.text"></p>
	//     <ul class="poll-options" v-if="pollOptions">
	//       <li v-for="option in pollOptions">
	//         <p>{{option.text}}</p>
	//         <p class="subtext">{{option.score}} points</p>
	//       </li>
	//     </ul>
	//     <ul class="comments" v-if="comments">
	//       <comment
	//         v-for="comment in comments"
	//         :comment="comment">
	//       </comment>
	//     </ul>
	//     <p v-show="!comments.length && !isJob">No comments yet.</p>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(45)
	__vue_script__ = __webpack_require__(47)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Comment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\Comment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Comment.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Comment.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".comhead {\n  color: #828282;\n  font-size: 11px;\n  margin-bottom: 8px;\n}\n.comhead a {\n  color: #828282;\n}\n.comhead a:hover {\n  text-decoration: underline;\n}\n.comhead .toggle {\n  margin-right: 4px;\n}\n.comment-content {\n  margin: 0 0 16px 24px;\n  word-wrap: break-word;\n}\n.comment-content code {\n  white-space: pre-wrap;\n}\n.child-comments {\n  margin: 8px 0 8px 22px;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/Comment.vue","/./src/components/Comment.vue"],"names":[],"mappings":"AAGA;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;CCFD;ADGC;EACE,eAAA;CCDH;ADEG;EACE,2BAAA;CCAL;ADCC;EACE,kBAAA;CCCH;ADCD;EACE,sBAAA;EACA,sBAAA;CCCD;ADAC;EACE,sBAAA;CCEH;ADAD;EACE,uBAAA;CCED","file":"Comment.vue","sourcesContent":["\r\n@import \"../variables.styl\"\r\n\r\n.comhead\r\n  color $gray\r\n  font-size 11px\r\n  margin-bottom 8px\r\n  a\r\n    color $gray\r\n    &:hover\r\n      text-decoration underline\r\n  .toggle\r\n    margin-right 4px\r\n\r\n.comment-content\r\n  margin 0 0 16px 24px\r\n  word-wrap break-word\r\n  code\r\n    white-space pre-wrap\r\n\r\n.child-comments\r\n  margin 8px 0 8px 22px\r\n",".comhead {\n  color: #828282;\n  font-size: 11px;\n  margin-bottom: 8px;\n}\n.comhead a {\n  color: #828282;\n}\n.comhead a:hover {\n  text-decoration: underline;\n}\n.comhead .toggle {\n  margin-right: 4px;\n}\n.comment-content {\n  margin: 0 0 16px 24px;\n  word-wrap: break-word;\n}\n.comment-content code {\n  white-space: pre-wrap;\n}\n.child-comments {\n  margin: 8px 0 8px 22px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _store = __webpack_require__(28);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  name: 'Comment',
	
	  props: {
	    comment: Object
	  },
	
	  data: function data() {
	    return {
	      childComments: [],
	      open: true
	    };
	  },
	  created: function created() {
	    var _this = this;
	
	    if (this.comment.kids) {
	      _store2.default.fetchItems(this.comment.kids).then(function (comments) {
	        _this.childComments = comments;
	      });
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// @import "../variables.styl"
	//
	// .comhead
	//   color $gray
	//   font-size 11px
	//   margin-bottom 8px
	//   a
	//     color $gray
	//     &:hover
	//       text-decoration underline
	//   .toggle
	//     margin-right 4px
	//
	// .comment-content
	//   margin 0 0 16px 24px
	//   word-wrap break-word
	//   code
	//     white-space pre-wrap
	//
	// .child-comments
	//   margin 8px 0 8px 22px
	// </style>

	/* generated by vue-loader */
	// <template>
	//   <li v-show="comment.text">
	//     <div class="comhead">
	//       <a class="toggle" @click="open = !open">{{open ? '[-]' : '[+]'}}</a>
	//       <a :href="'#/user/' + comment.by">{{comment.by}}</a>
	//       {{comment.time | fromNow}} ago
	//     </div>
	//     <p class="comment-content" v-show="open">
	//       {{{comment.text}}}
	//     </p>
	//     <ul class="child-comments" v-if="comment.kids" v-show="open">
	//       <comment v-for="comment in childComments" :comment="comment"></comment>
	//     </ul>
	//   </li>
	// </template>
	//
	// <script>

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<li v-show=\"comment.text\">\n  <div class=\"comhead\">\n    <a class=\"toggle\" @click=\"open = !open\">{{open ? '[-]' : '[+]'}}</a>\n    <a :href=\"'#/user/' + comment.by\">{{comment.by}}</a>\n    {{comment.time | fromNow}} ago\n  </div>\n  <p class=\"comment-content\" v-show=\"open\">\n    {{{comment.text}}}\n  </p>\n  <ul class=\"child-comments\" v-if=\"comment.kids\" v-show=\"open\">\n    <comment v-for=\"comment in childComments\" :comment=\"comment\"></comment>\n  </ul>\n</li>\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"item-view\" v-show=\"item\">\n  <item :item=\"item\"></item>\n  <p class=\"itemtext\" v-if=\"hasText\" v-html=\"item.text\"></p>\n  <ul class=\"poll-options\" v-if=\"pollOptions\">\n    <li v-for=\"option in pollOptions\">\n      <p>{{option.text}}</p>\n      <p class=\"subtext\">{{option.score}} points</p>\n    </li>\n  </ul>\n  <ul class=\"comments\" v-if=\"comments\">\n    <comment\n      v-for=\"comment in comments\"\n      :comment=\"comment\">\n    </comment>\n  </ul>\n  <p v-show=\"!comments.length && !isJob\">No comments yet.</p>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\User.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(59)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\User.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./User.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./User.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/User.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF","file":"User.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="flex-view" v-transition>
	//       <app-header :title="title" :left-label="leftLabel" :right-label="rightLabel" :left-link="leftLink" :right-link="rightLink" :left-icon="leftIcon" :right-icon="rightIcon"></app-header>
	//     	<router-view :title.sync="title" :right-label.sync="rightLabel" :left-label.sync="leftLabel" :left-link.sync="leftLink" :right-link.sync="rightLink" :left-icon.sync="leftIcon" :right-icon.sync="rightIcon"></router-view>
	// 	</div>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  data: function data() {
	    var headerInfo = {
	      title: '',
	      leftLabel: '',
	      rightLabel: '',
	      leftLink: '',
	      rightLink: '',
	      leftIcon: '',
	      rightIcon: ''
	    };
	    return headerInfo;
	  },
	  components: {
	    'app-header': __webpack_require__(15),
	    'flex-scroll-view': __webpack_require__(54)
	  },
	  methods: {
	    refreshUser: function refreshUser() {}
	  },
	  events: {
	    'pageLoaded': function pageLoaded(msg) {
	      this.title = "";
	      this.leftLabel = "";
	      this.rightLabel = "";
	      this.leftLink = "";
	      this.rightLink = "";
	      this.leftIcon = "";
	      this.rightIcon = "";
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	// </style>
	/* generated by vue-loader */

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(55)
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\FlexScrollView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\FlexScrollView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FlexScrollView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FlexScrollView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".scroll-wrap {\n  position: relative;\n  display: block;\n}\n#wrapper {\n  top: 0px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fafafa;\n  overflow: hidden;\n  display: block;\n  position: absolute;\n}\n#scroller {\n  position: absolute;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.scroll-wrap {\n  -webkit-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/FlexScrollView.vue","/./src/components/FlexScrollView.vue"],"names":[],"mappings":"AACA;EACC,mBAAA;EACA,eAAA;CCAA;ADED;EACC,SAAA;EACA,QAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;CCAA;ADED;EACC,mBAAA;EACA,2CAAA;EACA,YAAA;EACA,iCAAA;EAIA,yBAAA;EACA,4BAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,+BAAA;EAEA,2BAAA;EACA,0BAAA;EACA,uBAAA;CCAA;ADCD;EAEC,oBAAA;EACA,YAAA;EACA,gBAAA;MAAA,YAAA;UAAA,QAAA;EACA,mBAAA;CCCA","file":"FlexScrollView.vue","sourcesContent":["\r\n.scroll-wrap\r\n\tposition:relative\r\n\tdisplay:block\r\n\r\n#wrapper\r\n\ttop: 0px;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight:100%\r\n\tbackground: #fafafa;\r\n\toverflow: hidden;\r\n\tdisplay:block\r\n\tposition:absolute\r\n\r\n#scroller\r\n\tposition: absolute;\r\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\r\n\twidth: 100%;\r\n\t-webkit-transform: translateZ(0);\r\n\t-moz-transform: translateZ(0);\r\n\t-ms-transform: translateZ(0);\r\n\t-o-transform: translateZ(0);\r\n\ttransform: translateZ(0);\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\t-webkit-text-size-adjust: none;\r\n\t-moz-text-size-adjust: none;\r\n\t-ms-text-size-adjust: none;\r\n\t-o-text-size-adjust: none;\r\n\ttext-size-adjust: none;\r\n.scroll-wrap\r\n\t-moz-box-flex: 1\r\n\t-webkit-box-flex: 1\r\n\tbox-flex: 1\r\n\tflex:1\r\n\tposition:relative\r\n",".scroll-wrap {\n  position: relative;\n  display: block;\n}\n#wrapper {\n  top: 0px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fafafa;\n  overflow: hidden;\n  display: block;\n  position: absolute;\n}\n#scroller {\n  position: absolute;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  width: 100%;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.scroll-wrap {\n  -moz-box-flex: 1;\n  -webkit-box-flex: 1;\n  box-flex: 1;\n  flex: 1;\n  position: relative;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="scroll-wrap">
	//         <div id="wrapper">
	//         <div id="scroller" class="scroll-content">
	//         	<slot></slot>
	//         </div>
	//     </div>
	//     </div>
	// </template>
	// <style lang="stylus">
	// .scroll-wrap
	// 	position:relative
	// 	display:block
	//
	// #wrapper
	// 	top: 0px;
	// 	left: 0;
	// 	width: 100%;
	// 	height:100%
	// 	background: #fafafa;
	// 	overflow: hidden;
	// 	display:block
	// 	position:absolute
	//
	// #scroller
	// 	position: absolute;
	// 	-webkit-tap-highlight-color: rgba(0,0,0,0);
	// 	width: 100%;
	// 	-webkit-transform: translateZ(0);
	// 	-moz-transform: translateZ(0);
	// 	-ms-transform: translateZ(0);
	// 	-o-transform: translateZ(0);
	// 	transform: translateZ(0);
	// 	-webkit-touch-callout: none;
	// 	-webkit-user-select: none;
	// 	-moz-user-select: none;
	// 	-ms-user-select: none;
	// 	user-select: none;
	// 	-webkit-text-size-adjust: none;
	// 	-moz-text-size-adjust: none;
	// 	-ms-text-size-adjust: none;
	// 	-o-text-size-adjust: none;
	// 	text-size-adjust: none;
	// .scroll-wrap
	// 	-moz-box-flex: 1
	// 	-webkit-box-flex: 1
	// 	box-flex: 1
	// 	flex:1
	// 	position:relative
	// </style>
	//
	// <script>
	document.addEventListener('touchmove', function (e) {
		e.preventDefault();
	}, false);
	exports.default = {
		data: function data() {
			return {
				myScroll: ''
			};
		},
		created: function created() {},
		ready: function ready() {
			this.myScroll = new IScroll('#wrapper', {
				mouseWheel: true,
				click: true,
				onRefresh: function onRefresh() {
					alert(1);
				}
			});
			this.myScroll.on('scrollEnd', function (that) {
				return function () {
					console.log('加载更多');
					that.$dispatch('scrollEnd');
					that.$broadcast('scrollEnd');
				};
			}(this));
			// setTimeout((function(that){return function(){that.myScroll.refresh();}})(this),5000)
		},
		events: {
			'refresh': function refresh(msg) {
				this.myScroll.refresh();
			},
			'scrollViewLoaded': function scrollViewLoaded(msg) {
				// this.myScroll.refresh();
				this.myScroll.refresh();
			}
		}

	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"scroll-wrap\">\n        <div id=\"wrapper\">\n        <div id=\"scroller\" class=\"scroll-content\">\n        \t<slot></slot>\n        </div>\n    </div>\n    </div>\n";

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n      <app-header :title=\"title\" :left-label=\"leftLabel\" :right-label=\"rightLabel\" :left-link=\"leftLink\" :right-link=\"rightLink\" :left-icon=\"leftIcon\" :right-icon=\"rightIcon\"></app-header>\n    \t<router-view :title.sync=\"title\" :right-label.sync=\"rightLabel\" :left-label.sync=\"leftLabel\" :left-link.sync=\"leftLink\" :right-link.sync=\"rightLink\" :left-icon.sync=\"leftIcon\" :right-icon.sync=\"rightIcon\"></router-view>\n\t</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(61)
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\IndexHome.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(87)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\IndexHome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexHome.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexHome.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/IndexHome.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF","file":"IndexHome.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//     	<app-header search='找美食.找酒店' left-icon='qrcode-icon' left-link='#QrcodeView' right-icon='user-icon' right-link="#user/login"></app-header>
	//       <flex-scroll-view>
	//           <app-pane side="left" msg="1123" name="{{leftName}}"></app-pane>
	//       </flex-scroll-view>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  components: {
	    'app-header': __webpack_require__(15),
	    'app-pane': __webpack_require__(64),
	    'index-tab': __webpack_require__(79),
	    'flex-scroll-view': __webpack_require__(54)
	  },
	  events: {
	    'refresh': function refresh(msg) {},
	    'scrollViewLoaded': function scrollViewLoaded(msg) {
	      // this.myScroll.refresh();
	      this.$broadcast('refresh');
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	// </style>
	/* generated by vue-loader */

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(65)
	__vue_script__ = __webpack_require__(67)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\IndexHomePane.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\IndexHomePane.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexHomePane.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexHomePane.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".pane {\n  overflow: hidden;\n}\n.pane img {\n  width: 1rem;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pane div {\n  padding: 3px;\n  position: relative;\n}\n.pane a {\n  overflow: hidden;\n}\n.pane-left {\n  float: left;\n  width: 48%;\n  margin-right: -3px;\n}\n.pane-right {\n  overflow: hidden;\n}\n.pane div div:nth-child(2) {\n  margin-top: 6px;\n}\n.pane-left a:nth-child(1) div,\n.pane-right a:nth-child(2) div {\n  height: 50vw;\n}\n.pane-left a:nth-child(2) div,\n.pane-right a:nth-child(1) div {\n  height: 60vw;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/IndexHomePane.vue","/./src/components/IndexHomePane.vue"],"names":[],"mappings":"AACA;EACC,iBAAA;CCAA;ADCA;EACC,YAAA;EACA,mBAAA;EACA,aAAA;EACA,OAAA;EAAM,UAAA;EAAS,QAAA;EAAO,SAAA;CCIvB;ADHA;EACC,aAAA;EACA,mBAAA;CCKD;ADJA;EACC,iBAAA;CCMD;ADLD;EACC,YAAA;EACA,WAAA;EACA,mBAAA;CCOA;ADND;EACC,iBAAA;CCQA;ADJD;EACC,gBAAA;CCMA;ADJD;;EAEC,aAAA;CCMA;ADLD;;EAEC,aAAA;CCOA","file":"IndexHomePane.vue","sourcesContent":["\r\n.pane\r\n\toverflow:hidden\r\n\t& img\r\n\t\twidth:1rem\r\n\t\tposition:absolute\r\n\t\tmargin:auto\r\n\t\ttop:0;bottom:0;left:0;right:0;\r\n\t& div\r\n\t\tpadding:3px\r\n\t\tposition:relative\r\n\t& a\r\n\t\toverflow:hidden\r\n.pane-left\r\n\tfloat:left\r\n\twidth:48%\r\n\tmargin-right:-3px\r\n.pane-right\r\n\toverflow:hidden\r\n\r\n\t\r\n\r\n.pane div div:nth-child(2)\r\n\tmargin-top:6px\r\n\r\n.pane-left a:nth-child(1) div\r\n.pane-right a:nth-child(2) div\r\n\theight:50vw\r\n.pane-left a:nth-child(2) div\r\n.pane-right a:nth-child(1) div\r\n\theight:60vw\r\n",".pane {\n  overflow: hidden;\n}\n.pane img {\n  width: 1rem;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.pane div {\n  padding: 3px;\n  position: relative;\n}\n.pane a {\n  overflow: hidden;\n}\n.pane-left {\n  float: left;\n  width: 48%;\n  margin-right: -3px;\n}\n.pane-right {\n  overflow: hidden;\n}\n.pane div div:nth-child(2) {\n  margin-top: 6px;\n}\n.pane-left a:nth-child(1) div,\n.pane-right a:nth-child(2) div {\n  height: 50vw;\n}\n.pane-left a:nth-child(2) div,\n.pane-right a:nth-child(1) div {\n  height: 60vw;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="index-home-container">
	//   <div style="height:auto;width: 100%">
	//     <banner></banner>
	// </div>
	// <div class="pane">
	//   <div class="pane-left">
	//     <a v-link="{path:'/HotelList'}">
	//       <div v-on="click:location.href='#hotel-list'" style="background-color: rgb(234,99,94)">
	//         <img src="../asset/images/store-white.png">
	//       </div>
	//     </a>
	//     <a v-link="{path:'/ScenicList'}">
	//       <div style="background-color: rgb(127,204,229)">
	//         <img src="../asset/images/location.png">
	//       </div>
	//     </a>
	//   </div>
	//   <div class="pane-right">
	//     <a v-link="{path:'/ScenicList'}">
	//       <div style="background-color: rgb(141,194,30)">
	//         <img src="../asset/images/ticket-white.png">
	//       </div>
	//     </a>
	//     <a v-link="{path:'/FoodList'}">
	//       <div style="background-color: rgb(242,150,0)">
	//         <img src="../asset/images/techan.png">
	//       </div>
	//     </a>
	//   </div>
	// </div>
	// </div>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	  props: ['side', 'name', 'leftName'],
	  components: {
	    'banner': __webpack_require__(68)
	  },
	
	  ready: function ready() {
	    // this.$nextTick(function(){
	    //   this.$dispatch('refresh');
	    // });
	    setTimeout(function (that) {
	      return function () {
	        that.$dispatch('refresh');
	      };
	    }(this), 1000);
	  }
	};
	// </script>
	// <!--  -->
	// <style lang="stylus">
	// .pane
	// 	overflow:hidden
	// 	& img
	// 		width:1rem
	// 		position:absolute
	// 		margin:auto
	// 		top:0;bottom:0;left:0;right:0;
	// 	& div
	// 		padding:3px
	// 		position:relative
	// 	& a
	// 		overflow:hidden
	// .pane-left
	// 	float:left
	// 	width:48%
	// 	margin-right:-3px
	// .pane-right
	// 	overflow:hidden
	//
	//
	//
	// .pane div div:nth-child(2)
	// 	margin-top:6px
	//
	// .pane-left a:nth-child(1) div
	// .pane-right a:nth-child(2) div
	// 	height:50vw
	// .pane-left a:nth-child(2) div
	// .pane-right a:nth-child(1) div
	// 	height:60vw
	// </style>
	/* generated by vue-loader */

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(72)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\BannerView.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\BannerView.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BannerView.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BannerView.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;\n}\n#b-wrapper {\n  width: 10rem;\n  height: 3rem;\n  margin: 0 auto;\n}\n#banner {\n  position: absolute;\n  z-index: 1;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  width: 40rem;\n  height: 3rem;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n  background-color: #444;\n}\n.slide {\n  width: 10rem;\n  height: 3rem;\n  float: left;\n}\n.painting {\n  width: 100%;\n  height: 3.5rem;\n  margin: 0;\n  background-size: 100%;\n  border: 1px solid #000;\n}\n#indicator {\n  position: relative;\n  width: 110px;\n  height: 20px;\n  margin: 10px auto;\n  z-index: 2;\n  top: -0.3rem;\n}\n#dotty {\n  position: absolute;\n  width: 20px;\n  background: url(" + __webpack_require__(71) + ");\n  height: 20px;\n  border-radius: 10px;\n}\n", "", {"version":3,"sources":["/./src/components/src/components/BannerView.vue","/./src/components/BannerView.vue"],"names":[],"mappings":"AAIA;EAGC,uBAAA;CCHA;ADOD;EACC,aAAA;EACA,aAAA;EACA,eAAA;CCLA;ADQD;EACC,mBAAA;EACA,WAAA;EACA,2CAAA;EACA,aAAA;EACA,aAAA;EACA,iCAAA;EAIA,yBAAA;EACA,4BAAA;EACA,0BAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,+BAAA;EAEA,2BAAA;EACA,0BAAA;EACA,uBAAA;EACA,uBAAA;CCNA;ADSD;EACC,aAAA;EACA,aAAA;EACA,YAAA;CCPA;ADUD;EACC,YAAA;EACA,eAAA;EACA,UAAA;EACA,sBAAA;EACA,uBAAA;CCRA;ADYD;EACC,mBAAA;EACA,aAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;CCVA;ADaD;EACC,mBAAA;EACA,YAAA;EACA,0CAAA;EACA,aAAA;EACA,oBAAA;CCXA","file":"BannerView.vue","sourcesContent":["\r\nbannerHeight = 3rem\r\nimgHeight = bannerHeight-0.3rem\r\nimgWidth = 9rem\r\n* {\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n\r\n#b-wrapper {\r\n\twidth: 10rem\r\n\theight: bannerHeight;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n#banner {\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\r\n\twidth: 40rem;\r\n\theight: bannerHeight;\r\n\t-webkit-transform: translateZ(0);\r\n\t-moz-transform: translateZ(0);\r\n\t-ms-transform: translateZ(0);\r\n\t-o-transform: translateZ(0);\r\n\ttransform: translateZ(0);\r\n\t-webkit-touch-callout: none;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\t-webkit-text-size-adjust: none;\r\n\t-moz-text-size-adjust: none;\r\n\t-ms-text-size-adjust: none;\r\n\t-o-text-size-adjust: none;\r\n\ttext-size-adjust: none;\r\n\tbackground-color: #444;\r\n}\r\n\r\n.slide {\r\n\twidth: 10rem\r\n\theight: bannerHeight;\r\n\tfloat: left;\r\n}\r\n\r\n.painting {\r\n\twidth: 100%;\r\n\theight: bannerHeight+0.5rem;\r\n\tmargin: 0;\r\n\tbackground-size:100%\r\n\tborder: 1px solid #000;\r\n\r\n}\r\n\r\n#indicator {\r\n\tposition: relative;\r\n\twidth: 110px;\r\n\theight: 20px;\r\n\tmargin: 10px auto;\r\n\tz-index:2\r\n\ttop:-0.3rem;\r\n}\r\n\r\n#dotty {\r\n\tposition: absolute;\r\n\twidth: 20px;\r\n\tbackground: url(../asset/images/collect-red.png);\r\n\theight: 20px;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n","* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#b-wrapper {\n  width: 10rem;\n  height: 3rem;\n  margin: 0 auto;\n}\n#banner {\n  position: absolute;\n  z-index: 1;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  width: 40rem;\n  height: 3rem;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  -o-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  -o-text-size-adjust: none;\n  text-size-adjust: none;\n  background-color: #444;\n}\n.slide {\n  width: 10rem;\n  height: 3rem;\n  float: left;\n}\n.painting {\n  width: 100%;\n  height: 3.5rem;\n  margin: 0;\n  background-size: 100%;\n  border: 1px solid #000;\n}\n#indicator {\n  position: relative;\n  width: 110px;\n  height: 20px;\n  margin: 10px auto;\n  z-index: 2;\n  top: -0.3rem;\n}\n#dotty {\n  position: absolute;\n  width: 20px;\n  background: url(\"../asset/images/collect-red.png\");\n  height: 20px;\n  border-radius: 10px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAIAAAC3LO29AAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABlpJREFUeNrsm31sE3UYx3ftXa+9a7eua/fCGFsHDMt0AZm4/QHRBBKjfwzdHxoW0Cy+JQQxaAwq/xinCZEQNSZGE/kPIjFEFgOaMKOBREi0EcUxXvYKe+vajr5fu+u1Pt2vux1d23Xr9a40/WW5PP1d+9x97vvcc8/za4fZX325pKCHoqTQR5GwSFgkLBIWCYuERcIiYZGwSJgPA5f0YOZajNJEA0x4ZKLQCDFarT/yvrK6Hr3kpseme3rIEFs4UVp26BCPBwNs+sCBGW+gQAiJ5g242YKkc3/eA1uw9ZYtTGPtsNPNctxDT0h3dCLD89UXbP8gbNHLxn37vSx3y+Fx+pmHmJAXMGS9xNlmY0raZsEGo9yyVf/Yei4aHfcyuRNTIZmAgR/P8ZO8be7aj4zciamQWMB4Ll2Q0dAckzE+mRsxFdILmDBTt+cF4bzoYuaQUFllSCpggoyV23eoq/QP7FoQE4y8JqSe35NKwCV340tL94KYAzMuT3AuTwlBQHLbzlQCJsi45ulnE2TkxRxx+UZd3mzEVMglYCYyouEOstmIKTIh1J+QP9VPtS8r4FIZq3e3QV4ltKS4YmZVeQOMgqbwdfV4XQOmoVBe4Uc0GEgvIC+jqrkVU1PNb33AT872/x2cmWJsU76RkbDX77o+hMT0hVzryuhStWoFF31F38yAOMQjFqXBpKyph3NKJ870mPfktxl2SdBV6bpfF5bmS0eY8XmG7wD2/evXmMvWujKtEsNEJiz/+KNUJxEeGYgygfC9Uc7h4Oz28Oh41B9cRYTjDWuVJpPSaEwaFItpduyO9eC75nItrSJEi1JQD+FB7IWHB7KESTrAD9TlbMlgGmy80QKxo6vfaNr15ODFqyaKrNJR6cXMlJDc2ooMV8/R9MlD3JGADQ+h8p4TYJjadkxfvGoPhDyhOYjYNGJmmks5pz1+USmNjIsu/NGDtklkhLjo4Kx30uNPlWYzJQxZ/4p364c/hMQgz5qSuRaOjmz7lavCXSDmHYfLP8eunhBCxXfqm9hVVFOyQCI8lMD7v/wUPT8e0CCFmMr3Ht+S4TEgqUS8NlVLK4YT5BPtEec9bsImDR65vaX0zcM8HtyBKZ+uLOcOhjQErlIqV0yYCLmtHWyYyTUepHHdKwfhiMviLRRAJbPMnCIapUlixYRCSLBhm2tIwNN2vYHsTPD44WPDnmCIJvAVE0oJuWq8+HlGok4mtBpCHpJo2gzBkyNIHg/qtYGvj68UbzWZZikke/MapJxcQArxrEfembXelKc/hMLafeITqOPAhhOCVkOs9Sshnm94Ss4eXwip3rFTHAHn/YiCJ04HDJChP2NdLLF+szgazvuZ7DufPZ5oPT6+NtZ2RO7bRfGG/Ggbm/JoNREa4piY42OieEN+Shs35gshdDSonoo4RdJw3g+u0SZdgJOBUGE0xKvzUXE05P2oKyvyglBlsfD9hziEC370LY/miYamWGi5HCIWNMibpqomP+5Dg0nERCpMp+pKEQhF+KUCWhFjb99YthCjO/dBTgJ9AufPBn+/ki5Qb98At4bmrfITQiKNd2UORxo26rlOhd4YDxu9EYoymEnDyXuDdBq0ueSMUj6RcnZ70t7c8Nlx4EF4jGN66PvvYMtzwl54TxLCBW/Zp9NsNUyVSKF6pjs6+SVdoBo+fRJ1QKOneqt3tzXu7dYYq4FT99phza4Bf+9ZoQdhOl26JCMpIV7XkJBIE9iggB46fXL8XJ/wU4AKf2v37Fq/txue7PDmsrePhkce4ASfwJ99Os2WMML4Ucjh5tpogNHu7SI2b+PZxnrPTPT+wvpCST8L2La+y7Udz9R3vMhzsjesvtOnMErD37dZDizL/5kRLjQsFpbLsSU2E1qS50zYtYrFC9F6fL7TV5Sr8frF3nfytwv/HTvmuPJPZC7Tn1TAO13Xb9ku/YrrSJ15seC++9OZuz/8LLOGcS+0WtXcFOYiQ39Y3ff9WTWHWrKsZRMY7n9vZRgCUhAKh9PPTPmCovyMIo/6Q+GooDUbDDoNrihYwlj6IfAmo76GVhcsIRqVOmpTRansYub28PkgphQXWF4xJTqqjGJKel2RmKQSK1hCJOZGo95EkQVLGCsUMWxNKQ3PTGnElC2V0ypCGjHlfFhJI6b8tVWuxcyL6jGnYv4vwADFc2+wJNdRpAAAAABJRU5ErkJggg=="

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="banner-wrap">
	//         <div id="b-wrapper">
	//         <div id="banner" class="banner-content">
	//         	<div v-for="item in slideList" class="slide">
	// 				<div style="background-image:url({{item.image}})" class="painting giotto"></div>
	// 			</div>
	//         </div>
	//     </div>
	//     <div id="indicator">
	// 		<div id="dotty"></div>
	// 	</div>
	//     </div>
	// </template>
	// <style lang="stylus">
	// bannerHeight = 3rem
	// imgHeight = bannerHeight-0.3rem
	// imgWidth = 9rem
	// * {
	// 	-webkit-box-sizing: border-box;
	// 	-moz-box-sizing: border-box;
	// 	box-sizing: border-box;
	// }
	//
	//
	// #b-wrapper {
	// 	width: 10rem
	// 	height: bannerHeight;
	// 	margin: 0 auto;
	// }
	//
	// #banner {
	// 	position: absolute;
	// 	z-index: 1;
	// 	-webkit-tap-highlight-color: rgba(0,0,0,0);
	// 	width: 40rem;
	// 	height: bannerHeight;
	// 	-webkit-transform: translateZ(0);
	// 	-moz-transform: translateZ(0);
	// 	-ms-transform: translateZ(0);
	// 	-o-transform: translateZ(0);
	// 	transform: translateZ(0);
	// 	-webkit-touch-callout: none;
	// 	-webkit-user-select: none;
	// 	-moz-user-select: none;
	// 	-ms-user-select: none;
	// 	user-select: none;
	// 	-webkit-text-size-adjust: none;
	// 	-moz-text-size-adjust: none;
	// 	-ms-text-size-adjust: none;
	// 	-o-text-size-adjust: none;
	// 	text-size-adjust: none;
	// 	background-color: #444;
	// }
	//
	// .slide {
	// 	width: 10rem
	// 	height: bannerHeight;
	// 	float: left;
	// }
	//
	// .painting {
	// 	width: 100%;
	// 	height: bannerHeight+0.5rem;
	// 	margin: 0;
	// 	background-size:100%
	// 	border: 1px solid #000;
	//
	// }
	//
	// #indicator {
	// 	position: relative;
	// 	width: 110px;
	// 	height: 20px;
	// 	margin: 10px auto;
	// 	z-index:2
	// 	top:-0.3rem;
	// }
	//
	// #dotty {
	// 	position: absolute;
	// 	width: 20px;
	// 	background: url(../asset/images/collect-red.png);
	// 	height: 20px;
	// 	border-radius: 10px;
	// }
	//
	// </style>
	//
	// <script>
	document.addEventListener('touchmove', function (e) {
		e.preventDefault();
	}, false);
	
	var myScroll;
	
	function loaded() {
		myScroll = new IScroll('#b-wrapper', {
			scrollX: true,
			scrollY: false,
			momentum: false,
			snap: true,
			snapSpeed: 400,
			keyBindings: true,
			indicators: {
				el: document.getElementById('indicator'),
				resize: false
			}
		});
	}
	exports.default = {
		data: function data() {
			return {
				myScroll: '',
				slideList: []
			};
		},
		methods: {
			initPage: function initPage(res) {
				this.slideList = res.adv_list.item;
			}
		},
		created: function created() {},
		ready: function ready() {
			$.poemGet(ADV_API).done(this.initPage);
			loaded();
		},
		events: {
			'refresh': function refresh(msg) {
				setTimeout(function (that) {
					return function () {
						loaded();
					};
				}(this), 1000);
				// this.myScroll.refresh();
			},
			'scrollViewLoaded': function scrollViewLoaded(msg) {
				// this.myScroll.refresh();
				// this.myScroll.refresh();
			}
		}

	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"banner-wrap\">\n        <div id=\"b-wrapper\">\n        <div id=\"banner\" class=\"banner-content\">\n        \t<div v-for=\"item in slideList\" class=\"slide\">\n\t\t\t\t<div style=\"background-image:url({{item.image}})\" class=\"painting giotto\"></div>\n\t\t\t</div>\n        </div>\n    </div>\n    <div id=\"indicator\">\n\t\t<div id=\"dotty\"></div>\n\t</div>\n    </div>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"index-home-container\"> \n  <div style=\"height:auto;width: 100%\">\n    <banner></banner>\n</div>\n<div class=\"pane\">\n  <div class=\"pane-left\">\n    <a v-link=\"{path:'/HotelList'}\">\n      <div v-on=\"click:location.href='#hotel-list'\" style=\"background-color: rgb(234,99,94)\">\n        <img src=\"" + __webpack_require__(75) + "\">\n      </div>\n    </a>\n    <a v-link=\"{path:'/ScenicList'}\">\n      <div style=\"background-color: rgb(127,204,229)\">\n        <img src=\"" + __webpack_require__(76) + "\">\n      </div>\n    </a>\n  </div>\n  <div class=\"pane-right\">\n    <a v-link=\"{path:'/ScenicList'}\">\n      <div style=\"background-color: rgb(141,194,30)\">\n        <img src=\"" + __webpack_require__(77) + "\">\n      </div>\n    </a>\n    <a v-link=\"{path:'/FoodList'}\">\n      <div style=\"background-color: rgb(242,150,0)\">\n        <img src=\"" + __webpack_require__(78) + "\">\n      </div>\n    </a>\n  </div>\n</div>\n</div>\n";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/JJREFUeNrsW9FxnDAQlRn/nzowriDqwEoHdJDrIFfCpQNKwBWEVJC7DrgKLHeAK7jAzOIQsawEiMwg9s3ow8xpOT3vPq1Wew/3+10w/JAwBUzWKnic+PlzM3RkHBQwnHiYoFlZM35G6DAfzVDNMKHCMPVlf4M4+K7Nl6wSjMaKF4icxZqVN+ML4rr5hsmRzfiOrPPSjHp0VqtZxNB3HMoxbwujQNZ1puZQxmQzzFSDGxrt+mprbTU8R+dQmnVqxpP17ArpQwyoESk5UPIyljq0u9/b3C12YzCIUzxj60yIRA1LSGMjSoxEytnXs9oM/bf17AZeFSu8vCvx9KpT5Mc+zJOOrtThiOx+RSS7n2sY186YONmMZ/eb6l0HO6tPLK16sSa8BhL1FEI5W2GRRxhyoZ0Sdvxx+XFktOkKyV8eMHQuPbtVAHs5dVrpL8hGGWhBJ8R2CLspYlevYDO3NSvz3BXnHlrXQLpSCnEd0/Exst4hhveIAhF61SdLI2K3V5RjOVcCrNmFvcuOyaqRUNQdWRqZsGeyMO9qi58yQYTyRlYL9wHMWVSCHJD3TlSLCnmmEw7BUdi6JflGmhb6QRgyPEMx+U+ZcRRIEHdjsgiybHd7WfE8tyUojCxs98uYq0GEmY4suugVvuqwlufmIszFSiqGLQsVVfg7Bag5HUeu/6uVrt+72nm2gm1FFb3qhT0N5zuNgroqn0mUXbSbYx/r7zB2r0MeiLDUKvdSqCbal1DB9YUB7/a1r5D+h3tnw6cRpGsGkR4kUf/x2uFlymH7TNgoHfY70uSMSPiUDPtGWoHgY41rH1C6KHu5WQpzNCKIdiVDgwB/Iz7XVmhNb4dWMJ6IOa/i7+1OKYY3VNiZ72KJeUasWX+mVxNccS5yjwuMuShGLkhCfP+BBFGxWy18mSFuW5baN44dT3puApR9NaWZTTh0ghJtX1E9TiTNgOfICZtNPmENNaXPPq3dEmI6g/g9IHFdgQ6UI4UznyRQ9zTqn8y5Z79akGhmvXekPR28wTtsPR5gSh88dhQwezr/PM6ctyuSqHoWdvq+wIjtgJ311uY8U/qEYW3p1HMkntVKyZulvXKJZ2GCHktx0F7HQTh+xMU1+MCaxWCymCwmi8lispgsBpPFZDFZTBaTxWQxmKzwZBnkWSw//1We6/2ET6XU/sA7vGjLLeBtRbS9KbJvuh+WhuEv6+/2BRex3YppCt//ybHOWZ6lxfDX+B2uGyRrrBfiq3D8BsD33rAQdEPH1tE1lwTZDU8b9SIfXIVnW6gvWTWE4w8x7D/dKj5gPdp3s5pzfS/BZdVGRd7ATlhM3dHn9jpwUspgsoLhjwADAFBAgVRDTIaEAAAAAElFTkSuQmCC"

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABTdJREFUeNrcXO1xnDAQxTf5bzoIqeBwBaYDkwqsdHDp4FxBSAfnCowrMK4guIJwHUAFBGb2Zhh5JdBq9XHZmR2PsU+Ix2r37Up7N+M4JgGlAM0nzSbdr/z/+6TdpO2kDfz0JjcBwJrBEZOWk95ajnWetJ60AhD/G7BmgA4brIcqs9UdweKuFqzZkk6TfvX0Ut7hxXTXBFYKID2s/N+w8D+z9qDtAuwEfFoGv99vuP8TWBqfzGA50GLSflTL/LfTpCVx/HRSMWk96qWdNON6LhdAiRWQjvCwXPfLAHjdPfMYwao0k66YQcJAazT3FzGBpQKqg2WZeFKhcQEiBrBUS69xbE0qzcFfYZKHBKtQTOoUACQ5CLQKH5aFACtVmHxooNYAa0OAhYXuOhKgloB1yDyPpmPZkNI5t3tBcrUcSGVMkgPxlXPRbyZM3wasDklh7iwrAcWCsRcLJt8zVBnmvPSXdO0VXrpTBi84zFoilf24LrakFuNhhWuf1SEPQXmA40iT+X4HIqUgByMKUCWDVaUaHmQiNeElYalR5srB11IlYYBqQG9QjWg0da0BfFO3qDboqgwf4MBNnP0f6dpPKCCy+yws57OlGxe2X6xYdKPJO03m0FJ4Fwdbzy2XsGnOdlCMUViOkXKDdUQcrU1goCa3QmGZJhHYGOwdgQctxaTeLRBe9gTVVFM5AUdayj0yPx1HPK882ycxBSuVfjchiSXiyCsLkilgDPmaCaleSsYN1t4CrAKxDpu0qIfIbGQdmlXBDhY24S2SIXlZzZDzyWM43UHaJX4k2/BmuV5WarEbFQVYrqTb+GIwaVdcTFRgZY7GaImWNMQCVrPB4VPrVFxAt9xgnS0m+2ER5nX0Qd66j8bBdxbOtLEgkSretreIsMUG/8cKlsnDVoprlOiVIsx/MMwGMt9gZYaffUYiUGMIWKqop1eGJPerMZVhqDqkDFtnW3etS83nU8vnWC0AfmHgNbkBwezBKb8gb/kNgsBpUfxLQQtFIn5ZfqWhVRXIGB23ZWFllmrkPWljKpQST00p71B4VsPAl2br+b6FCK7QmDtiiYdUauIAa0+MaDUEiGfDzw1QB8sT2j5iQU7qift83GefMij1NpqtrxruY3sqp6JWe6k3bD2cb8g5jzhqfO7mfUNqbij7iQemxFjO1TrmMQskom5m/VSw6g1l4xhFIP7POVgdkhgfIgdqDkKPNtVamxJNhRDL8oqsSpWvKsXmyFEKFnYrlUiKSMHqJH9luu1vZVk94ujvIwULS5WMt+Fs21HmCPhXuvbMVNhzaVUDhUjvGCYhM/DHyKyLxao4LEtlXTH5LsyqsoSwwbtjmsxzpL7rqLCqPpRlqazr7IDV20ZrslVxWdbFun4jvCskUa2Q6sIhsThfwdmcqXqTeeKhfxnJAd+ka8a8ypVlXXjXUbp2SyzO2b407J72Vu6gBNK66PWzbOWrOMZ20SONnQb2tRyxFhkrp+5qGS7rUE8BlqNq+YmEq5fI4XJoGVtWqK0mFec9XHeTYhuipSc/1Y3MXbSune3BZTf8yh5kzv08PqJTregkTR1ar5PoG7L1tmHYPvPacuyzG57zwXS9z+m1g6Xr2+Fqv+tHx1+L4Lu5WzAc7jh5CBpRgJVovjdGWHzWyzeShPr6AApgJwarvEqwEs0hEBEjUKHB0vVJiw1AVb7nHOILEuXkt0nwVpAfUMR7RP4WZLstNFhrgCWxAOWqREOpsBbJ54MmUQEVC1hLwF5jBSomsC6Alcgu0QD+K/iRgH8CDADuNuyFmmStWAAAAABJRU5ErkJggg=="

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "59a97fc857d8dd10b400786c5aee88df.png";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB2dJREFUeNrsXL9v20YYPct2IcRFwBRIygABqqFF1S710IGdqlFTodGjtnrM2D/Do7pp1OhRQweNGjIwU1U0CJQpRJsiahG3hI3G/c59Z384kLw78igKkA44UDbJ49279/28I/eur69F0+Xdj3ttOnSohtqplOryw++vE7EBZa9psAioiA49qu2CyyRoC6pTAi5tqq8HDQMV0KGPP1cAhIMRgnESyGNcM9tKsDTmTLLEDSJ6AtA6TXay1eTDCRzJlBjM6eVcFjGQ5lsLForSVcuc87FiH4G72HawlAVMCtgnDAZga8AKAMpSbHhpiV3ZgbUDq+GyKX6W9KeU88lDnuUOrOwy3DHLviQqcGauQpjBtq0Ga0L1PdWPAExHE0MJ4GsZ9G911oH0VAjxs3E4pXM6Zk7q1jGrC6BWEMMEv1dM/FQAHTQJ1CaAFaj4j4CYZZxfwEoON8EytjYErKVB8QvRcHpmE8DqMH0kcgLpVGxIaQwsZEllSS100YoZhK1kVmFqJgssJrY7sCz01tYyq7MDa8esWpR7G9bOCBa7JsBqz1Yxq2PhX+ll2bS/1WpYBF3AalwUm2ZWUgKsxphVKTZE3BayrMFNIFykh6BzwjrFEP3qsuek6NuyyiqSc4oGHYnQmSInMjM4pvvlfXI5PqHzI8dn/4CJGeVNCF0zEP/vi8grEji5cDt3zWIcOHRUWrCBNrM8raJmPYSn3QMwYy2+K6PcObu6aCNrX0TEgJKAqI0mAfrVxe+b6+j6eU62ozxYWpJOPnwO5qxyrpcd7qOD8njOTnc9gZW17yHCUYIwzTg/hWT00Iaa0IkNy1qOQC0hArOixumcnNUJ/jzW2KlWoBclwcrUW+inih3nBX2TemuMCUwxoac2QXrLAJTa7tMGk1zSulk6RbGq1AYP6Ck5wHbB4GyyGGpCR+jnzThNDq+JWT3Mlmxw6ji2iClUobGsym6YTHYByBWAPLHx9AHqGONTOtkdLDxMDc56e6LUAbBIEVO0SgRDD2AtdPHmOokx+Cn0kQmwlOnULnSaM7PUYkJi8k0kEBIgmPYTDETpuJnOqorZTwVWqIsi9OBI3C14nMDY2Ih3rEmEM1iCNVJkAE4ZQCso2BF0XKqBFVdxhNFe7sDkwKmesWsGNoCxSe2WAcvWyx4oBgKgM2m2udOIzgbw7n3s3rtla57Y0HPOGQv7LI1dpL9WzPF2AiswpVCgE0Io8XHBBtqeNkhRkV0r5h4MCpS5cg/aReKlRR61BdKKfXGBHooYq2Lhr8wwONn2MAsw9GnuK1vhK+uQFljUyCerNCAmzLEc5vheCZeUxrIODKQu4qxUE9Ees6g+WXWrzOk5Y0QYyhNXMaEKjfoO4VW7LFi3nnKB3ooBiOroKsNhTFjok6f7PqDDA8YA+fdbVAnKhQGwM4ByzKrOrqmDWkmcUjTSC8bMSMs2N7gOJxk0V/pinqfP6N59OhxRfUJ1v2AQF9TGS8vMSMSyH7mpojKpowOD89fFw+cGh+5MM7epaSECQH0KFvFySPUe1T/Z/47o+s/p+Ae1+8ZgJaclpdqYDSlM/rFk29j3PnVq+2M6PGL/ksB9BrAOwYorqs814F5QX/7x3Bc5xqemxKLJGi5MIUDJzj1hQEkWfUf1K/w+ZLrrIdVvqX7Bbn8k/JdIRR9FEmECa8asnc99Bg+YyH3NAMoq8tyXAE6W+9SXx55ZZeXetCw85Zila3x0bl8TvYeWt37DQH1QE6viqk6pMQ5zLFyMjhzuO2QW98rTxIWMBEbDYASrBnbdZ7rqE8d77ynnEb5Z1aKSfUubAN823JnBb+rYJNQsvf6/SzAksPW2LVjVY0mAc2+xoRbl9ytuzuAO6oXjvb+b4lFLoAKu1G3XFawDaXjBKsr3ouzBLpdywTz6y4ri14b4Wb9K7Jp1UHSNKij7d+z3MwdRfMWc038rsEqFQ9biVwosePE2SbeiNiQ7XjOr9qslA5+xv99WEL+eq/hVyWf5EEc+2J+p/lTAsOc4r8pLGuRf6xQ/q9iwYIY64u6Vt0mZvDq1IR3Lx1q24RCO6hVE7lKLC62yDwXWrwfxG5V5taVUpjRDHIMSbUh2/aJZtSsw7QUsnwLqEqL7qiRQHe58ln0HqHRaGRsvbpe+S7YhFbVkym+oXHFfMgsoMw1vcH2Z2E85n3GVjG2lV+jAqFMAlrdzxTVulG2995WGoTaHsH4riF/aCFjoTJcx67yOXHtFL13pqXHVT0tVXt2BcufefbghQOl6qvI3uLwshUH8lsJy684agAoY22NfbPe5W3nC/K9hg0DxPWUJlvHFRoGlL3pi21ETpc+yCROfDXt/oVxT+DOXDa4ens13Ko98fyuwlrfvsWtmsC7AmC/VrdMq1/apAm2WY1HTxw1h9QbiLjFYm/tS63cdkA7hH0A897X+yDIIx6z9SZ2f6az9IxiYeWWd1KBicfc5FdcSQNx4ensOca/15fO1fDGErc1Fwu/n6BYAaS0ffV3r51W0L912KjSViBLv3lQt/wkwALPvacTMMVgEAAAAAElFTkSuQmCC"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(80)
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\IndexTab.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\IndexTab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexTab.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexTab.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.index-tab {\n  z-index: 2;\n  background-color: #efefef;\n  margin: 0;\n  height: auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: block;\n  display: -webkit-flex; /* Safari */\n}\n.index-tab a {\n  display: inline-block;\n  font-size: 0.4rem;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #585858;\n  text-align: center;\n  padding: 5px 0 10px 0;\n}\n.index-tab img {\n  width: 0.6rem;\n  margin: 0 auto;\n  display: block;\n}\n.poem-green {\n  background-color: #bada55;\n}\n", "", {"version":3,"sources":["/./src/components/src/main.styl","/./src/components/IndexTab.vue","/./src/components/src/components/IndexTab.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HD;EACE,WAAA;EACA,0BAAA;EACA,UAAA;EACA,aAAA;EACA,+BAAA;EAAA,8BAAA;EAAA,4BAAA;MAAA,wBAAA;UAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,eAAA;EACA,sBAAA,CAAA,YAAA;CAAuB;AD+HzB;EC9HE,sBAAA;EACE,kBAAQ;EACR,oBAAA;EACA,gBAAA;MAAA,YAAA;UAAA,QAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;CDgIH;AACD;EC/HE,cAAA;EACE,eAAA;EACA,eAAA;CDiIH;AACD;EChIA,0BAAA;CDkIC","file":"IndexTab.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.index-tab {\n  z-index: 2;\n  background-color: #efefef;\n  margin: 0;\n  height: auto;\n  flex-direction: row;\n  display: box;\n  display: flex;\n  display: block;\n  display: -webkit-flex; /* Safari */\n}\n.index-tab a {\n  display: inline-block;\n  font-size: 0.4rem;\n  -webkit-box-flex: 1;\n  flex: 1;\n  color: #585858;\n  text-align: center;\n  padding: 5px 0 10px 0;\n}\n.index-tab img {\n  width: 0.6rem;\n  margin: 0 auto;\n  display: block;\n}\n.poem-green {\n  background-color: #bada55;\n}\n","\r\n@import \"../main.styl\"\r\n.index-tab\r\n  z-index:2\r\n  background-color:tab-color\r\n  margin:0\r\n  height:auto\r\n  flex-direction:row;\r\n  display: box\r\n  display:flex\r\n  display: block\r\n  display: -webkit-flex; /* Safari */\r\n  & a\r\n    display:inline-block\r\n    font-size:.4rem\r\n    -webkit-box-flex: 1\r\n    flex:1\r\n    color:rgb(88,88,88)\r\n    text-align:center\r\n    padding:5px 0 10px 0\r\n  & img\r\n    width: .6rem\r\n    margin:0 auto\r\n    display: block\r\n.poem-green\r\n  background-color:poem-green\r\n\r\n\r\n\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <footer class="text-center index-tab" style="bottom: 0;">
	//     <a href="#index/home"><img src="../asset/images/store-white.png"><span>首页</span></a>
	//     <a href="#index/cart"><img src="../asset/images/cart-white.png"><span>购物车</span></a>
	//     <a href="#index/article"><img src="../asset/images/jounry.png"><span>游记</span></a>
	//     <a href="#index/ucenter"><img src="../asset/images/my.png"><span>我的</span></a>
	// </footer>
	// </template>
	// <script>
	exports.default = {
	  props: ['msg', 'iconLeft', 'iconRight']
	};
	// </script>
	// <style lang="stylus">
	// @import "../main.styl"
	// .index-tab
	//   z-index:2
	//   background-color:tab-color
	//   margin:0
	//   height:auto
	//   flex-direction:row;
	//   display: box
	//   display:flex
	//   display: block
	//   display: -webkit-flex; /* Safari */
	//   & a
	//     display:inline-block
	//     font-size:.4rem
	//     -webkit-box-flex: 1
	//     flex:1
	//     color:rgb(88,88,88)
	//     text-align:center
	//     padding:5px 0 10px 0
	//   & img
	//     width: .6rem
	//     margin:0 auto
	//     display: block
	// .poem-green
	//   background-color:poem-green
	//
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n<footer class=\"text-center index-tab\" style=\"bottom: 0;\">\r\n    <a href=\"#index/home\"><img src=\"" + __webpack_require__(75) + "\"><span>首页</span></a>\r\n    <a href=\"#index/cart\"><img src=\"" + __webpack_require__(84) + "\"><span>购物车</span></a>\r\n    <a href=\"#index/article\"><img src=\"" + __webpack_require__(85) + "\"><span>游记</span></a> \r\n    <a href=\"#index/ucenter\"><img src=\"" + __webpack_require__(86) + "\"><span>我的</span></a>\r\n</footer> \r\n";

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAo9JREFUeNrsmu1xgzAMhgmX/6EbsEHdDRiBTlA2SDZoRsgGJRuQCZpuQCZoMkGTCah1hTuOksTYsuMP6U5/eqBznuq1JaNZ0zQRmZjNCBbBIlgEi2ARLIJFsAgWwUI0xj2Z8Pw+NFgAZ819KfHuiXseEqyNJKjOdqHAgqz6UYyxjQPJqkLxfZDhJpTMqrk/97NEBmAImcUGoMBKmUBxgBI8daUAwboPq5IN5DusnPsCQ4KhwBpKsCZY47XVG5YEwea9wMwzWNnI30qVgFBnsfZ0WHguSZBgqhIAZLgKAJRyVnWwjoG0PMqwQIZJ25GnHoFhA7UcMPZk2ODPCI2mbXbGzipfS4exQrQiWGKF6AFrXw4BVokVOCYJhg2rb1+YpVFMEgwTVqFTgv1GekozajOsvu1G6i0tsNbc3x3PtAo74LWvOz588nnCzqxre9bBcVDoErwlw9yhfhEuApa6JXhLhq6dgh+6JehL6TCsrbY6QPmQWWMDH6+6ZBh7llUXXaB8gLUysbH7ACuN/g98ECwbJOg6rMJkVrkMy7gEXYY1NvChHdZ84vNZu9BHz0Uw01k1tSjFmPjVZS+RwiiRDhnaOmVzMgFqKqy6PZ5tsktk8HZkam/I2j0rswAU/PNgRuNoK6ygjWARLIL1cMOs4LNI30CcztjGYEGhWkZ/n84+uX+3p1OOsDadseUMZCjpCfe6uW5rxdjnG7ELhdjSrvJy2dy31MLY0q4iwzeBZ1aS8hOJnbuyZ4lW8DL9JENeQ/D3WU6dhnvBplrmNqCesAZnMkvkwm0jERe+Jm8Fbhsq46mlsXQoLI39kNKh+1HloCaCH5kjLC4ZKSEgdvYIUODUG1IjTbAIFsEiWGS/AgwAyQZ2aY4vlYAAAAAASUVORK5CYII="

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABF5JREFUeNrsXL9v01AQdk3EhNRssNUIiQmpYUBiqNTyFzQjEkPdkYmk/AFNRwaKO7EwmJmhyZguJCBmgsSK5IxMJIURqdyl5+hysR0S/4qTO+nJec+J+/L5u3vf3XO6cXV1Zaj9n5kKgYKlYClYBbJSkSb78uioCocGNPv16WlPmRUOVBkODrRtaB3o1xSscENGbdHrTWhvALAOgZiJbRRBZwEgO3D4HHJ6SG7ZVGZd2wfR/8NeI8vOAVAnbZaZBWAVxqY7YvgWtO9i7AXFMmudmfUqZPwBtB9yENzRS1U60JKMd3B3weu0MAAnvZzDvDCo34x4yz3RT3WF3Diq1/fg+DGBa2GgtQCwQUJAoTv1KCah/YR2O+IjX+Bv76Qds5K6G/il7ISlwibrP4X2EFo/4L24pD/LQsHzFeQ9NHfOa/hC0RDXisMqZPsBnxewpkPnKnC4gPaInf8E5/tZpzueP6k5vtgghXk5wr0l+++z139hzntrqeBJKmxz4EQcdIR7Pl/LdIdEZYMN9QGoRoR7tuD8u7yqDnu0XM9jVsLux1ljBwT9KPdMHSyP6avdGFrLoGstyqpKAGs67Lwt5uakKUDD3LBBdymufYPJuzFZFcgaVp4Zu6foZ8MsvDt0V/HOVRZY/j0Sj24MVs1ijdRctaTEb6FKNMQaj4GBrKn4YNCN/Mo+0s1KKizjajiLNdLd7LwmaubMKotKK5w1TXa+KtzzJOugvkzMcsNYExDUh3kE9aUAi2JRFGtwNdzKO6hPiVKiuyMmN4916cvMU88qh0kHcs9j4Z5uzl5gmJRCnMcAyhezsXZaBGskMDVjCaxkJF/PcmK4Zpmuwd3zLI8N1TCwlqKeBUDh360KGTEU+WDuYE2o8RzrWQchGmxUbWDFvzKJ1sD+2pRoeJ4J7RAAcCgF43sEs/qZMStPG1IIcEWMQjlxMkd/pcHqEkBuyCrp8bg1q58lWMcQA44zAgm/5N0805dFwHKNeAW/qPQlSlcVBqRxgCf6nyUQbw6LCMA8Nq5nUYphLXidXt55W6ZgqRVXZylYCpaCpTZTlMZcEVfRPC6HRqshZe6ot/YVnynDpxrxaeiB74ZNBSrU9gkf48bvy0vbmNyOUps266Ld7mPMqrLBid3gdTYKTVgq8vcmquiGvBTsKlDjRH8gCgNlKR3KClM4HggWrxTYtIdoqBuOcLC5jEjyOfhVtycm7YqcKRaRhnuXHZOCGW601o1kngBcJUM86oTPdD3L34dTnKYLmlr806qDgqVgFclKAWLMMrSmNRKhcmuPb4U1jOtntTYVpwnp4Pi/H/KLf/i0ipZpokVpDetZmO68VTwi7fFFu90tiWQRaVfN4sGwgiTSLgtLtimCuatAXRv9eMFlQ5aUDlr4i8DDFAN2lv8IZ8ndsCxC1ABjFt/ZwXrzL3ijojVtTV86YJzaVTxCbfSzPT9mYeRvKSaB1iJ8Jks0mupEpzxaz9KqQzr2T4ABAEe8t7tVm4vbAAAAAElFTkSuQmCC"

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA6VJREFUeNrsnO2R2jAQhnVM/kMqgA5wB+erIO4gTgfOpYAjBeRCBzEd+Co4pwOnA7uCQAVEmnvJiI1tZGPJyNmd0dwcg1bo4d3VhyXujsejGNu+PD6G8o8qK5STlSj5t+fnfOzPeTcWLAlIQUlkiWWZG1Q5yJLKspXgyv8GlgS1kX+ernDxVQLbTBqWhBRAHesG5RQq5LTXVGgGDcr7JUvkUmXOYAFUXtPxnQLYlpOQ01S4fqwBHMq6xWRgIT8VBJRSRtylow3KVMACFwqbOVJwRkDt+igC7w9R/2Rz+PdfWTXJfCc7HQ/gNyVhaT3pzxyEX0JCLxnIfQJ/f/9He96GIZ1DJfLb3w/hGH4SEo6x77D08Bt0Fg5/u4b2/IGFkWtJkrytweNkS7TrnbJCfXiXKrACC34PDe16A0tPtrYnjUVDu97ACkaC5WUY6rb33L9TWAvP/VuHlbsIjRr/uY+w9NC4twzr3kVIulKWmndFluZzUVu7XsDCDkFF1nI2TPdb2dzbsp3gUz1UsIk3pKpCEoKpz6PhlsyuU9nBxUCgFgTOAe35CQs7Axt97TbgGjEja8/NUDsaTeZqWzkn4fJTvD1s2PdUVEb9SV+h7X64mpRGJNmrjhZdcxjeXxBQFfxbN9dPd2jonFS2bduVwPQgqZmvVVBoMSlYLSFEwe2hngDLmLb3Rrbz1GiwNGgJEv+8R/UDkvnW9ece86yDUk2M8FoaVKkwNUhdqukmYBFwK3F+ikaVUpyfoinH/py9YEEVgbC4hWt5zVr0UWcnWIC0xVA9F/7aAQNNp0dzxrAwx8k8h1QHLTJ9RGcEC6BeG5Ju6RGcVcNg8mAC7CIshF5JFPUCCZe+SQmDiUolH4jCVpdC8p3hzoEO6pN0mvoad/iCIwlNTVt+4OU5+hn3VhZU9VtXlGwsEhMx2b+MKOx9m7ouLaTp1CAR0zLan+CaXQe9cuVjjjIIyapFHL23aEoxTTPu10ywCYbFsBgWw2JYDIuNYTEshsWwGBbDYmNYDIthMSyGxbDYGBbDYlgMi2ExLDYbsBYTZbAYCpZ+GH891CWlWzH0Z93Q36tgKZv6KZpWWCYn/3Jxfsvh4RZ+rHAAVYXi/OjnxbNnsx70X3FDwmdQifj3jOzmUj3TA7jK+XfysjrXpBRWesRpJd7OYNFDuJ9Nrrd0OdqtyD+J6Znxj5R1vTSgvpVUmN21uXVTkRF3yb99r6OEkHPoISQFp9cv6v4RYABBVol7DBGFzAAAAABJRU5ErkJggg=="

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "\n\t<app-header search='找美食.找酒店' left-icon='qrcode-icon' left-link='#QrcodeView' right-icon='user-icon' right-link=\"#user/login\"></app-header>\n  <flex-scroll-view>\n      <app-pane side=\"left\" msg=\"1123\" name=\"{{leftName}}\"></app-pane>\n  </flex-scroll-view>\n";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(89)
	__vue_script__ = __webpack_require__(91)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\HotelList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(118)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\HotelList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(90);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/HotelList.vue","/./src/views/src/views/HotelList.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;ACzHD;EACC,YAAA;EACA,aAAA;EACA,YAAA;EACA,qBAAA;CD2HA;ACzHD;EACC,iBAAA;CD2HA;AC1HD;EACE,uBAAA;EACA,eAAA;EACA,mBAAA;CD4HD","file":"HotelList.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n","\n\t@import \"../main.styl\"\n// px2rem(name, px){\n//     name: px/75 \n// }\n.goods-img\n\twidth:2rem\n\theight:2rem\n\tfloat:left\n\tmargin-right:0.3rem\n\n.goods-info\n\toverflow:hidden\n.goods-item\n\t background-color: #eee; \n\t overflow:auto; \n\t resize:horizontal;\n\t\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<app-header search="找酒店" right-icon="user-icon"></app-header>
	//   <flex-scroll-view>
	//         <ul id="hotel-list-view" style="font-size: 0.3rem">
	//       <!-- <list-view> -->
	//       <hotel-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></hotel-list-item>
	//       <!-- </list-view> -->
	//     </ul>
	// <!--     <return-top></return-top> -->
	//   </flex-scroll-view>
	//
	// 	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab>
	// </div>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	  components: {
	    'hotel-list-item': function hotelListItem(resolve) {
	      __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(95)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'list-view': function listView(resolve) {
	      __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(100)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'return-top': function returnTop(resolve) {
	      __webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(105)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'filter-tab': function filterTab(resolve) {
	      __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(110)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'app-header': function appHeader(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    var hotelList = [];
	    var curpage = 1;
	    return {
	      curpage: curpage,
	      hotelList: hotelList
	    };
	  },
	  methods: {
	    getHotelList: function getHotelList() {
	      $.getJSON(HOTEL_LIST_API, { order: "asc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    },
	    getHotelListDone: function getHotelListDone(res) {
	      console.log((0, _stringify2.default)(res));
	      if (!isEmpty(res.datas.store_list)) {
	        this.hotelList = this.hotelList.concat(res.datas.store_list);
	        this.curpage++;
	        // this.$broadcast('refresh')
	        this.$nextTick(function () {
	          this.$broadcast('refresh');
	        });
	        // setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
	      }
	      if (res.hasmore == false) {
	        this.$off('scrollEnd');
	      }
	    }
	  },
	  created: function created() {},
	  ready: function ready() {
	    this.getHotelList();
	  },
	  attached: function attached() {},
	  compiled: function compiled() {},
	  events: {
	    'scrollEnd': function scrollEnd(msg) {
	      this.getHotelList();
	    },
	    'conditionChange': function conditionChange(msg) {
	      $.getJSON(SHOP_LIST_API, { order: "desc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// 	@import "../main.styl"
	// // px2rem(name, px){
	// //     name: px/75
	// // }
	// .goods-img
	// 	width:2rem
	// 	height:2rem
	// 	float:left
	// 	margin-right:0.3rem
	//
	// .goods-info
	// 	overflow:hidden
	// .goods-item
	// 	 background-color: #eee;
	// 	 overflow:auto;
	// 	 resize:horizontal;
	//
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(94);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<app-header search=\"找酒店\" right-icon=\"user-icon\"></app-header>\n  <flex-scroll-view>\n        <ul id=\"hotel-list-view\" style=\"font-size: 0.3rem\">\n      <!-- <list-view> -->\n      <hotel-list-item v-for=\"hotel in hotelList\" :hotel=\"hotel\" :index=\"$index\"></hotel-list-item>\n      <!-- </list-view> -->\n    </ul>\n<!--     <return-top></return-top> -->\n  </flex-scroll-view>\n\n\t<filter-tab :filter-items=\"['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']\" :order-items=\"['默认排序','传统酒店','牧家乐']\"></filter-tab>\n</div>\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(120)
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\ScenicList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\ScenicList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/ScenicList.vue","/./src/views/src/views/ScenicList.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;ACzHD;EACC,YAAA;EACA,aAAA;EACA,YAAA;EACA,qBAAA;CD2HA;ACzHD;EACC,iBAAA;CD2HA;AC1HD;EACE,uBAAA;EACA,eAAA;EACA,mBAAA;CD4HD","file":"ScenicList.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n","\n\t@import \"../main.styl\"\n// px2rem(name, px){\n//     name: px/75 \n// }\n.goods-img\n\twidth:2rem\n\theight:2rem\n\tfloat:left\n\tmargin-right:0.3rem\n\n.goods-info\n\toverflow:hidden\n.goods-item\n\t background-color: #eee; \n\t overflow:auto; \n\t resize:horizontal;\n\t\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<app-header search="找景点" right-icon="user-icon"></app-header>
	//   <flex-scroll-view>
	//         <ul id="scienic-list-view" style="font-size: 0.3rem">
	//       <scienic-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></scienic-list-item>
	//     </ul>
	// <!--     <return-top></return-top> -->
	//   </flex-scroll-view>
	//
	// 	<filter-tab :filter-items="['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']" :order-items="['默认排序','传统酒店','牧家乐']"></filter-tab>
	// </div>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	  components: {
	    'scenic-list-item': function scenicListItem(resolve) {
	      __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(123)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'return-top': function returnTop(resolve) {
	      __webpack_require__.e/* require */(3/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(105)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'filter-tab': function filterTab(resolve) {
	      __webpack_require__.e/* require */(4/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(110)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'app-header': function appHeader(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    var hotelList = [];
	    var curpage = 1;
	    return {
	      curpage: curpage,
	      hotelList: hotelList
	    };
	  },
	  methods: {
	    getHotelList: function getHotelList() {
	      $.getJSON(HOTEL_LIST_API, { order: "asc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    },
	    getHotelListDone: function getHotelListDone(res) {
	      console.log((0, _stringify2.default)(res));
	      if (!isEmpty(res.datas.store_list)) {
	        this.hotelList = this.hotelList.concat(res.datas.store_list);
	        this.curpage++;
	        // this.$broadcast('refresh')
	        this.$nextTick(function () {
	          this.$broadcast('refresh');
	        });
	        // setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
	      }
	    }
	  },
	  created: function created() {
	    this.$on('conditionChange', function () {
	
	      //此处需要清空数组，但是为了调试方便～暂时不清空
	      $.getJSON(SHOP_LIST_API, { order: "desc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    });
	    // this.$on('scrollViewLoaded', function() {
	    //     this.$broadcast('scrollViewLoaded');
	    // })
	  },
	  ready: function ready() {
	    this.getHotelList();
	  },
	  attached: function attached() {
	    // alert(2);
	  },
	  compiled: function compiled() {
	    // alert(2);
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// 	@import "../main.styl"
	// // px2rem(name, px){
	// //     name: px/75
	// // }
	// .goods-img
	// 	width:2rem
	// 	height:2rem
	// 	float:left
	// 	margin-right:0.3rem
	//
	// .goods-info
	// 	overflow:hidden
	// .goods-item
	// 	 background-color: #eee;
	// 	 overflow:auto;
	// 	 resize:horizontal;
	//
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<app-header search=\"找景点\" right-icon=\"user-icon\"></app-header>\n  <flex-scroll-view>\n        <ul id=\"scienic-list-view\" style=\"font-size: 0.3rem\">\n      <scienic-list-item v-for=\"hotel in hotelList\" :hotel=\"hotel\" :index=\"$index\"></scienic-list-item>\n    </ul>\n<!--     <return-top></return-top> -->\n  </flex-scroll-view>\n\n\t<filter-tab :filter-items=\"['默认排序','价格从低到高','价格从高到低','销量从高到低','评价从高到低']\" :order-items=\"['默认排序','传统酒店','牧家乐']\"></filter-tab>\n</div>\n";

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(130)
	__vue_script__ = __webpack_require__(132)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\FoodList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(138)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\FoodList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(131);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoodList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoodList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/FoodList.vue","/./src/views/src/views/FoodList.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;ACzHD;EACC,YAAA;EACA,aAAA;EACA,YAAA;EACA,qBAAA;CD2HA;ACzHD;EACC,iBAAA;CD2HA;AC1HD;EACE,uBAAA;EACA,eAAA;EACA,mBAAA;CD4HD","file":"FoodList.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n","\n\t@import \"../main.styl\"\n// px2rem(name, px){\n//     name: px/75 \n// }\n.goods-img\n\twidth:2rem\n\theight:2rem\n\tfloat:left\n\tmargin-right:0.3rem\n\n.goods-info\n\toverflow:hidden\n.goods-item\n\t background-color: #eee; \n\t overflow:auto; \n\t resize:horizontal;\n\t\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<app-header title="吃喝玩乐"></app-header>
	//   <flex-scroll-view>
	//         <ul id="hotel-list-view" style="font-size: 0.3rem">
	//       <food-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></food-list-item>
	//     </ul>
	// <!--     <return-top></return-top> -->
	//   </flex-scroll-view>
	// </div>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	  components: {
	    'food-list-item': function foodListItem(resolve) {
	      __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(133)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'return-top': function returnTop(resolve) {
	      __webpack_require__.e/* require */(3/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(105)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'app-header': function appHeader(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    var hotelList = [];
	    var curpage = 1;
	    return {
	      curpage: curpage,
	      hotelList: hotelList
	    };
	  },
	  methods: {
	    getHotelList: function getHotelList() {
	      $.getJSON(HOTEL_LIST_API, { order: "asc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    },
	    getHotelListDone: function getHotelListDone(res) {
	      console.log((0, _stringify2.default)(res));
	      if (!isEmpty(res.datas.store_list)) {
	        this.hotelList = this.hotelList.concat(res.datas.store_list);
	        this.curpage++;
	        // this.$broadcast('refresh')
	        this.$nextTick(function () {
	          this.$broadcast('refresh');
	        });
	        // setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
	      }
	    }
	  },
	  created: function created() {
	    this.$on('conditionChange', function () {
	
	      //此处需要清空数组，但是为了调试方便～暂时不清空
	      $.getJSON(SHOP_LIST_API, { order: "desc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    });
	    // this.$on('scrollViewLoaded', function() {
	    //     this.$broadcast('scrollViewLoaded');
	    // })
	  },
	  ready: function ready() {
	    this.getHotelList();
	  },
	  attached: function attached() {
	    // alert(2);
	  },
	  compiled: function compiled() {
	    // alert(2);
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// 	@import "../main.styl"
	// // px2rem(name, px){
	// //     name: px/75
	// // }
	// .goods-img
	// 	width:2rem
	// 	height:2rem
	// 	float:left
	// 	margin-right:0.3rem
	//
	// .goods-info
	// 	overflow:hidden
	// .goods-item
	// 	 background-color: #eee;
	// 	 overflow:auto;
	// 	 resize:horizontal;
	//
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<app-header title=\"吃喝玩乐\"></app-header>\n  <flex-scroll-view>\n        <ul id=\"hotel-list-view\" style=\"font-size: 0.3rem\">\n      <food-list-item v-for=\"hotel in hotelList\" :hotel=\"hotel\" :index=\"$index\"></food-list-item>\n    </ul>\n<!--     <return-top></return-top> -->\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(140)
	__vue_script__ = __webpack_require__(142)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\UserReg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(143)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\UserReg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserReg.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserReg.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"UserReg.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="view" v-transition>
	// 	<div style="margin-top:2rem;text-align:center" class="login-container">
	// 		<div class="poem-input-box">
	// 			<div class="input-item">
	// 				<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
	// 				<label style="width:1.5rem display:inline-block">手机号</label>
	// 				<input v-model="mobile" id="mobile" style="width:5rem;border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
	// 				<button style="" @click="sendSms">发送验证码</button>
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label v-model="validCode" id="valid-code" style="width:1.5rem display:inline-block">验证码</label>
	// 				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label id="password" style="width:1.5rem display:inline-block">密码</label>
	// 				<input v-model="password" style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 		</div>
	// 		<div style="display: block;width: 80%;margin:0 auto">
	// 			<div class="poem-btn-green" @click="register">注册</div>
	// 			<span style="float: left;font-size:.3rem">
	// 				<input type="checkbox" style="width:auto" v-model="agreeCheck">
	// 			我已阅读并同意诗画草原<a v-link="hostlist">《用户使用协议》</a></span>
	// 		</div>
	// 	</div>
	// </div>
	// </template>
	//
	// <style lang="stylus">
	//
	// </style>
	//
	//
	// <script>
	module.exports = {
	  replace: true,
	  data: function data() {
	    return {
	      mobile: '',
	      password: '',
	      validCode: '',
	      agreeCheck: ''
	    };
	  },
	  components: {
	    'app-header': __webpack_require__(15)
	  },
	  created: function created() {},
	  methods: {
	    register: function register() {
	      var client = "ios";
	      var invite_code = "Mg==";
	      if (!this.agreeCheck) {
	        poemUI.toast('请先同意使用协议');
	        return;
	      }
	      $.post(REG_API, { 'username': this.mobile, 'password': this.password, 'password_confirm': this.password, 'client': client, 'invite_code': invite_code }, '', 'json').done(this.regDone).fail(this.regFail);
	    },
	    sendSms: function sendSms(res) {
	      var random = Math.floor(Math.random() * 1000000);
	      $.post(SEND_SMS_API, { 'mobile': this.mobile, 'random_str': random }, '', 'json').done(this.sendSmsDone).fail(this.sendSmsFail);
	    },
	    regDone: function regDone(res) {
	      if (res.code == 200) {
	        if (res.datas.error) {
	          poemUI.toast(res.datas.error);
	        } else {
	          localStorage.setItem('username', this.mobile);
	          localStorage.setItem('key', res.datas.key);
	          poemUI.toast('注册成功');
	          this.$route.router.go("/");
	        }
	      }
	    },
	    regFail: function regFail() {},
	    sendSmsDone: function sendSmsDone(res) {
	      if (res.code == 200) {
	        poemUI.toast('短信已发送');
	      } else {
	        poemUI.toast(res.datas);
	      }
	    },
	    sendSmsFail: function sendSmsFail() {
	      poemUI.toast("发送失败");
	    }
	  },
	  props: ['title', 'leftLabel', 'rightLabel', 'leftLink', 'rightLink', 'leftIcon', 'rightIcon', 'search'],
	  ready: function ready() {
	    this.$dispatch('pageLoaded');
	    this.title = "立即注册";
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"view\" v-transition>\n\t<div style=\"margin-top:2rem;text-align:center\" class=\"login-container\">\n\t\t<div class=\"poem-input-box\">\n\t\t\t<div class=\"input-item\">\n\t\t\t\t<img src='" + __webpack_require__(144) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label style=\"width:1.5rem display:inline-block\">手机号</label>\n\t\t\t\t<input v-model=\"mobile\" id=\"mobile\" style=\"width:5rem;border:0;heigth:50px;display:inline-block;\" placeholder='手机号'/>\n\t\t\t\t<button style=\"\" @click=\"sendSms\">发送验证码</button>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label v-model=\"validCode\" id=\"valid-code\" style=\"width:1.5rem display:inline-block\">验证码</label>\n\t\t\t\t<input style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label id=\"password\" style=\"width:1.5rem display:inline-block\">密码</label>\n\t\t\t\t<input v-model=\"password\" style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"display: block;width: 80%;margin:0 auto\">\n\t\t\t<div class=\"poem-btn-green\" @click=\"register\">注册</div>\n\t\t\t<span style=\"float: left;font-size:.3rem\">\n\t\t\t\t<input type=\"checkbox\" style=\"width:auto\" v-model=\"agreeCheck\">\n\t\t\t我已阅读并同意诗画草原<a v-link=\"hostlist\">《用户使用协议》</a></span>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxtJREFUeNrsnEGO00AQRTsW+4Qdu1hcIL6BDUJiORYXiDkB5gbmBOO5gbkAeCQ2SCx8A8INkh1LZscuVENFmNEgte2uale7v1TyYmbs9suvcpe7M6vz+ayCzPTI9QBefX6bwyGDSCDSB37lBHGA6CDaDy+vj67GunLhLAC0gUMJUUBsB/75LUQN0DrvYaGT6hGQ7uu9Bg7QfngJC0BpSG8snlKnaA7ADl7BAlANHPYEp77TNY8DWCQclNZaF3+4RiIeFtxESQiqD6zFB4dMWDD4GA7XTCVRPzAayc5qFK+u4APKxMHCQacO5o6VRGcVjibaKaa/KFi5wy4qFwMLU3AdYJkpUW6VSoK1UR7KV2cpiilEcNYMYB1ncG/HAMtQFG9UfYV1kpSGnWNYBzGwMAVODmG10tqdxhGoO4mwahw4txqqRQwyWDjg2oGrKmnzrL67OGtXRbk0Rr66gwsJHcNbiFsARfpaiHzBApeoSuLLfFMMLxtZlsIAmH4yviYElXGsTHOvSCf4WN9aOuUNQCq5xh8pRmFKamA3FtqZZ5yg2J11z2Ux1pligNP0DpoW05pdK9eb2RDaC4jnEE8hnvR+/BPiO8QX3e8BpE8ux+piy5FOw8sGtnRkCnbq7+Y2v7YcTdy8ZpKausVpRcNCSHoWv2f44E84g2/EwcLdM5XiXz/8PUGl2K9lHRa6qVVu9jn09Q6AVbOFxdgHDqlnha2HgDVYMwRlvR2KPAeltVN/tlFunMOaOSirwKKJoPTFm5mD6gOrXTqrwUFI0R4+4IK9wOM3JT4qedLv6ZMxK9bRxPSTqPXYsY9Nw1JInfqfUswMWli9pli6ag5nSXfVRduhxT5aqKsuqiidlXviqr67MipYPrlq8D0Zz7Owrfmq/NRjk0Z7iLMK5a9y22mYBVhmKRgL6wGH6sqms3x2Vb/XDbAMldiClSwAVmYL1m4BsNLJsCi/czzDupVMdVaslqM4wLJU5KOpJwjO+lebACuk4WBjmMDaLgjWzlYjvXgFWLZgLWlCajIxDc4aUOQDrFCzaLQK/wHXXL8EGABTYxug7+/hcgAAAABJRU5ErkJggg=="

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01JREFUeNrsnOtx2zAMgGmf/1udoNrAygRWJ2g2qDtBvEGUDewJ4m6gDaJMUHeCyhNUmsAFrsidG/OlVnyYAu54ihXrwY8ACJIwZ+fzWbDYySLkw7uuy+BQQinoiILncihH+tzS302WZceQ7zsLoVkAaQOHeyifB156glJD2QG4NmlYAKmCwxbKcoTbfYNS+YTmBRZAQhM7QPno4PZPAKxKAhaA2sHhwXE9fkDZuPZpzmCR80b/sh7gj9CkGvqcUykszbZHPwjAmpuCRaDwpVeGr76SedZQyc5gxm+dggncV7jX4ZZg1Yae7pWcc/MPjYAdxKPhq59caNjosKjHe9SYCkLa/eczCtLIleY55dg+bFRYVInvvioAz0NgX1ROH55VjAlrPrKm7ny2NNxvQ/GWTFak5fFpFkXlz4p/37ns1jUaho2U6zqPUJq10QSNrsd0W4q13gv2nFVUmgUti/HQT1nsBKByT0Mplb8cTbvG0qx7xXkvwxDyX0eF/1pq3i8aWD1F8D6lGtiYQWDJhjTNWI51gHa1Ct9VRgGLfIVMGhFGZNq8JL8aXLMyxflQs5qqRspjMUOZtIFgOTN9Z7BCTPte9Iq3BStFYVgMi2ExLIbFsFisch1oqKCKgAvFNWVkdS3gnZQBtE1cqJ3PogpXwn7t75bFuOKkhOVpJTlG2QOwrbXPmjAolAeqv1mzyPRe2J1fL9TKNKtiTnIOf2kWLY//klyIU8Rox7Xv2U+XQvXFKWc0O1kOxYfL+i5swgAE5SrZIqQQiAOFFM+KsKgZGpTWiZucVf3mA1ogWbGtHw93eGzIsBgWw2JYLIuYXobmzXCYgcdWeP4FxU3BouDwLal2TRF0wWZ4rVWluM4+XsU048o+i2ExLIbFsBgWC8NiWOnDageeny4sGgPu353exzQ2jMoMadn8DsqT+PNLsi3POuiBYbbxUUQo7OAZFsNiWAyLYbFYwdL8pjAJsa2frWZViSuNVf1kaZKYUSJL7MJs3iZBUKWQZ2P3ECBnpggel6NkG0qsxTRSvC85GDUro5H+UkxXpHtBzCVjs45Us58wqFKW4DbXDGYR2GlioE5Cs8GQcXuVi20yy0RNs6eOqzYlGc94B1x7+S3AAKCbQ4WLL/zxAAAAAElFTkSuQmCC"

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(147)
	__vue_script__ = __webpack_require__(149)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\UserLogin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\UserLogin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(148);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserLogin.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserLogin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".login-container {\n  font-size: 0.5rem;\n}\n.login-container input {\n  font-size: 0.4rem;\n  display: inline-block;\n  width: 6.5rem;\n  height: 0.4rem;\n}\n.login-container img {\n  width: 0.4rem;\n  height: 0.4rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n", "", {"version":3,"sources":["/./src/views/src/views/UserLogin.vue","/./src/views/UserLogin.vue"],"names":[],"mappings":"AACA;EACC,kBAAA;CCAA;ADEA;EACC,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;CCAD;ADCA;EACC,cAAA;EACA,eAAA;CCCD;ADAD;EACC,YAAA;CCEA;ADDD;EACC,YAAA;CCGA","file":"UserLogin.vue","sourcesContent":["\r\n.login-container\r\n\tfont-size:.5rem\r\n\ttest(20,20)\r\n\t& input\r\n\t\tfont-size:.4rem\r\n\t\tdisplay:inline-block\r\n\t\twidth:6.5rem\r\n\t\theight:.4rem\r\n\t& img\r\n\t\twidth:.4rem\r\n\t\theight:.4rem\r\n#password:before\r\n\twidth:30px\r\n#account:before\r\n\twidth:30px\r\n",".login-container {\n  font-size: 0.5rem;\n}\n.login-container input {\n  font-size: 0.4rem;\n  display: inline-block;\n  width: 6.5rem;\n  height: 0.4rem;\n}\n.login-container img {\n  width: 0.4rem;\n  height: 0.4rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// <div class="view" v-transition>
	// 	<validator name="validation1">
	// 	<form novalidate>
	// 				<div style="margin-top:3rem;text-align:center" class="login-container">
	// 		<div class="poem-input-box">
	// 			<div class="input-item">
	// 				<img src='../asset/images/user-green.png'/>
	// 				<label style="font-size:.4rem;;width:1.5rem display:inline-block">账号</label>
	// 				<input v-model="mobile" placeholder='手机号'/>
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png'/>
	// 				<label id="password" style="font-size:.4rem;width:1.5rem display:inline-block">密码</label>
	// 				<input v-model="password" id="password" v-validate:password="{minlength:6}" placeholder='请填写密码' />
	// 				<p v-if="$validation1.password.required">Your comment is too long.</p>
	// 			</div>
	// 		</div>
	// 		<div style="display: block;width: 80%;margin:1rem auto">
	// 			<div class="poem-btn-green" @click="login()">登陆</div>
	// 			<a href="#/user/findpwd" style="margin-top:0.5rem;float: left;color:green;font-size:.3rem">忘记密码?</a>
	// 		</div>
	// 		</div>
	// 	</form>
	// 	</validator>
	// </div>
	// </template>
	//
	// <style lang="stylus">
	// .login-container
	// 	font-size:.5rem
	// 	test(20,20)
	// 	& input
	// 		font-size:.4rem
	// 		display:inline-block
	// 		width:6.5rem
	// 		height:.4rem
	// 	& img
	// 		width:.4rem
	// 		height:.4rem
	// #password:before
	// 	width:30px
	// #account:before
	// 	width:30px
	// </style>
	//
	//
	// <script>
	module.exports = {
	  replace: true,
	  data: function data() {
	    return {
	      mobile: '',
	      password: ''
	    };
	  },
	  methods: {
	    login: function login() {
	      // $.post(LOGIN_API,{username:this.mobile,password:this.password,client:client}).done(this.loginDone).fail(this.loginFail);
	      $.poemPost(LOGIN_API, { username: this.mobile, password: this.password, client: poem.client }).done(this.loginDone).fail();
	    },
	    loginDone: function loginDone(res) {
	      console.log((0, _stringify2.default)(res));
	      if (res.error) {
	        poemUI.toast(res.error);
	      } else {
	        poem.saveItem('username', res.username);
	        poem.saveItem('key', res.key);
	        this.$route.router.go('/index/ucenter');
	      }
	    }
	  },
	  props: ['rightLabel', 'rightLink'],
	  created: function created() {},
	  ready: function ready() {
	    this.$dispatch('pageLoaded');
	    this.rightLabel = '注册';
	    this.rightLink = '#/user/reg';
	  }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\r\n<div class=\"view\" v-transition>\r\n\t<validator name=\"validation1\">\r\n\t<form novalidate>\r\n\t\t\t\t<div style=\"margin-top:3rem;text-align:center\" class=\"login-container\">\r\n\t\t<div class=\"poem-input-box\">\r\n\t\t\t<div class=\"input-item\">\r\n\t\t\t\t<img src='" + __webpack_require__(144) + "'/>\r\n\t\t\t\t<label style=\"font-size:.4rem;;width:1.5rem display:inline-block\">账号</label>\r\n\t\t\t\t<input v-model=\"mobile\" placeholder='手机号'/>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<img src='" + __webpack_require__(145) + "'/>\r\n\t\t\t\t<label id=\"password\" style=\"font-size:.4rem;width:1.5rem display:inline-block\">密码</label>\r\n\t\t\t\t<input v-model=\"password\" id=\"password\" v-validate:password=\"{minlength:6}\" placeholder='请填写密码' />\r\n\t\t\t\t<p v-if=\"$validation1.password.required\">Your comment is too long.</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div style=\"display: block;width: 80%;margin:1rem auto\">\r\n\t\t\t<div class=\"poem-btn-green\" @click=\"login()\">登陆</div>\r\n\t\t\t<a href=\"#/user/findpwd\" style=\"margin-top:0.5rem;float: left;color:green;font-size:.3rem\">忘记密码?</a>\r\n\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t</validator>\r\n</div>\r\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(152)
	__vue_script__ = __webpack_require__(154)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\UserFindPwd.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(160)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\UserFindPwd.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserFindPwd.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserFindPwd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".login-container {\n  font-size: 0.5rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n", "", {"version":3,"sources":["/./src/views/src/views/UserFindPwd.vue","/./src/views/UserFindPwd.vue"],"names":[],"mappings":"AACA;EACC,kBAAA;CCAA;ADED;EACC,YAAA;CCAA;ADCD;EACC,YAAA;CCCA","file":"UserFindPwd.vue","sourcesContent":["\r\n.login-container\r\n\tfont-size:.5rem\r\n\ttest(20,20)\r\n#password:before\r\n\twidth:30px\r\n#account:before\r\n\twidth:30px\r\n",".login-container {\n  font-size: 0.5rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<flex-scroll-view>
	//        <div style="margin-top:2rem;text-align:center" class="login-container">
	// 		<div class="poem-input-box">
	// 			<div class="input-item">
	// 				<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
	// 				<label style="width:1.5rem display:inline-block">手机号</label>
	// 				<input style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label id="password" style="width:1.5rem display:inline-block">验证码</label>
	// 				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label id="password" style="width:1.5rem display:inline-block">密码</label>
	// 				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 		</div>
	// <!-- 		<div style="display: block;width: 80%;margin:0 auto">
	// 			<div class="poem-btn-green" @click="login()">登陆</div>
	// 			<a style="float: left">我已阅读xxx</a>
	// 		</div> -->
	// 	</div>
	//     </flex-scroll-view>
	// 	<yellow-bottom v-link="{name:'changepwd'}">
	// 		<span>下一步</span>
	// 	</yellow-bottom>
	// </div>
	// </template>
	//
	// <style lang="stylus">
	// .login-container
	// 	font-size:.5rem
	// 	test(20,20)
	// #password:before
	// 	width:30px
	// #account:before
	// 	width:30px
	// </style>
	//
	//
	// <script>
	module.exports = {
		replace: true,
		methods: {
			// goNextStep: goNextStep
		},
		ready: function ready() {
			this.$dispatch('pageLoaded');
			this.leftLabel = '找回密码';
		},
		components: {
			'yellow-bottom': __webpack_require__(155),
			'app-header': __webpack_require__(15),
			'flex-scroll-view': __webpack_require__(54)
		},
		props: ['title', 'leftLabel']
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(156)
	__vue_script__ = __webpack_require__(158)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\YellowBottom.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(159)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\components\\YellowBottom.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./YellowBottom.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./YellowBottom.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.yellow-footer {\n  background-color: #f7b52b;\n  height: 1.2rem;\n  line-height: 1.2rem;\n  text-align: center;\n  font-size: 0.5rem;\n  bottom: 0;\n  width: 100%;\n  color: #fdfdfd;\n}\n", "", {"version":3,"sources":["/./src/components/src/main.styl","/./src/components/YellowBottom.vue","/./src/components/src/components/YellowBottom.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC3HD;EACC,0BAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;CD6HA","file":"YellowBottom.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.yellow-footer {\n  background-color: #f7b52b;\n  height: 1.2rem;\n  line-height: 1.2rem;\n  text-align: center;\n  font-size: 0.5rem;\n  bottom: 0;\n  width: 100%;\n  color: #fdfdfd;\n}\n","\r\n@import \"../main.styl\"\r\nbuttom-tab-height = 1.2rem\r\n.yellow-footer\r\n\tbackground-color:app-yellow\r\n\theight:buttom-tab-height\r\n\tline-height:buttom-tab-height\r\n\ttext-align:center\r\n\tfont-size:.5rem\r\n\tbottom:0\r\n\twidth:100%\r\n\tcolor:app-white\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<footer class ="yellow-footer" href="{{href}}" @click="goNextStep">
	// 		<slot>
	// 		</slot>
	// 	</footer>
	// </template>
	//
	// <script>
	exports.default = {
		data: function data() {
			// return { subtitle: 123 }
		},
		methods: {
			goNextStep: function goNextStep() {
				location.href = this.href;
			}
		},
		props: ['href']
	};
	// </script>
	//
	// <style lang="stylus">
	// @import "../main.styl"
	// buttom-tab-height = 1.2rem
	// .yellow-footer
	// 	background-color:app-yellow
	// 	height:buttom-tab-height
	// 	line-height:buttom-tab-height
	// 	text-align:center
	// 	font-size:.5rem
	// 	bottom:0
	// 	width:100%
	// 	color:app-white
	// </style>
	/* generated by vue-loader */

/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "\n<footer class =\"yellow-footer\" href=\"{{href}}\" @click=\"goNextStep\">\n\t<slot>\n\t</slot>\n</footer>\n";

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<flex-scroll-view>\n       <div style=\"margin-top:2rem;text-align:center\" class=\"login-container\">\n\t\t<div class=\"poem-input-box\">\n\t\t\t<div class=\"input-item\">\n\t\t\t\t<img src='" + __webpack_require__(144) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label style=\"width:1.5rem display:inline-block\">手机号</label>\n\t\t\t\t<input style=\"border:0;heigth:50px;display:inline-block;\" placeholder='手机号'/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label id=\"password\" style=\"width:1.5rem display:inline-block\">验证码</label>\n\t\t\t\t<input style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label id=\"password\" style=\"width:1.5rem display:inline-block\">密码</label>\n\t\t\t\t<input style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t</div>\n<!-- \t\t<div style=\"display: block;width: 80%;margin:0 auto\">\n\t\t\t<div class=\"poem-btn-green\" @click=\"login()\">登陆</div>\n\t\t\t<a style=\"float: left\">我已阅读xxx</a>\n\t\t</div> -->\n\t</div>\n    </flex-scroll-view>\n\t<yellow-bottom v-link=\"{name:'changepwd'}\">\n\t\t<span>下一步</span>\n\t</yellow-bottom>\n</div>\n";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(162)
	__vue_script__ = __webpack_require__(164)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\UserChangePwd.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(165)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\UserChangePwd.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserChangePwd.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./UserChangePwd.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".login-container {\n  font-size: 0.5rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n", "", {"version":3,"sources":["/./src/views/src/views/UserChangePwd.vue","/./src/views/UserChangePwd.vue"],"names":[],"mappings":"AACA;EACC,kBAAA;CCAA;ADED;EACC,YAAA;CCAA;ADCD;EACC,YAAA;CCCA","file":"UserChangePwd.vue","sourcesContent":["\r\n.login-container\r\n\tfont-size:.5rem\r\n\ttest(20,20)\r\n#password:before\r\n\twidth:30px\r\n#account:before\r\n\twidth:30px\r\n",".login-container {\n  font-size: 0.5rem;\n}\n#password:before {\n  width: 30px;\n}\n#account:before {\n  width: 30px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<flex-scroll-view>
	//        <div style="margin-top:2rem;text-align:center" class="login-container">
	// 		<div class="poem-input-box">
	// 			<div class="input-item">
	// 				<img src='../asset/images/user-green.png' style="width:30px;height: 30px"/>
	// 				<label style="width:1.5rem display:inline-block">手机号</label>
	// 				<input style="border:0;heigth:50px;display:inline-block;" placeholder='手机号'/>
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label id="password" style="width:1.5rem display:inline-block">验证码</label>
	// 				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 			<div>
	// 				<img src='../asset/images/lock-white.png' style="width:30px;height: 30px"/>
	// 				<label id="password" style="width:1.5rem display:inline-block">密码</label>
	// 				<input style="width:7rem display:inline-block;" placeholder='请填写密码' />
	// 			</div>
	// 		</div>
	// <!-- 		<div style="display: block;width: 80%;margin:0 auto">
	// 			<div class="poem-btn-green" @click="login()">登陆</div>
	// 			<a style="float: left">我已阅读xxx</a>
	// 		</div> -->
	// 	</div>
	//     </flex-scroll-view>
	// 	<yellow-bottom href="#user/login">
	// 		<span>下一步</span>
	// 	</yellow-bottom>
	// </div>
	// </template>
	//
	// <style lang="stylus">
	// .login-container
	// 	font-size:.5rem
	// 	test(20,20)
	// #password:before
	// 	width:30px
	// #account:before
	// 	width:30px
	// </style>
	//
	//
	// <script>
	module.exports = {
		replace: true,
		methods: {
			goNextStep: goNextStep
		},
		ready: function ready() {
			this.$dispatch('pageLoaded');
			this.leftLabel = '修改密码';
		},
		components: {
			'yellow-bottom': __webpack_require__(155),
			'app-header': __webpack_require__(15),
			'flex-scroll-view': __webpack_require__(54)
		},
		props: ['title', 'leftLabel']
	};
	
	function goNextStep() {
		alert(2);
		$.post(LOGIN_API).done(registerDone).fail(registerFail);
	}
	// </script>
	/* generated by vue-loader */

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<flex-scroll-view>\n       <div style=\"margin-top:2rem;text-align:center\" class=\"login-container\">\n\t\t<div class=\"poem-input-box\">\n\t\t\t<div class=\"input-item\">\n\t\t\t\t<img src='" + __webpack_require__(144) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label style=\"width:1.5rem display:inline-block\">手机号</label>\n\t\t\t\t<input style=\"border:0;heigth:50px;display:inline-block;\" placeholder='手机号'/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label id=\"password\" style=\"width:1.5rem display:inline-block\">验证码</label>\n\t\t\t\t<input style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<img src='" + __webpack_require__(145) + "' style=\"width:30px;height: 30px\"/>\n\t\t\t\t<label id=\"password\" style=\"width:1.5rem display:inline-block\">密码</label>\n\t\t\t\t<input style=\"width:7rem display:inline-block;\" placeholder='请填写密码' />\n\t\t\t</div>\n\t\t</div>\n<!-- \t\t<div style=\"display: block;width: 80%;margin:0 auto\">\n\t\t\t<div class=\"poem-btn-green\" @click=\"login()\">登陆</div>\n\t\t\t<a style=\"float: left\">我已阅读xxx</a>\n\t\t</div> -->\n\t</div>\n    </flex-scroll-view>\n\t<yellow-bottom href=\"#user/login\">\n\t\t<span>下一步</span>\n\t</yellow-bottom>\n</div>\n";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(167)
	__vue_script__ = __webpack_require__(169)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\AddressList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(170)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\AddressList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AddressList.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AddressList.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/AddressList.vue","/./src/views/src/views/AddressList.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;ACzHD;EACC,YAAA;EACA,aAAA;EACA,YAAA;EACA,qBAAA;CD2HA;ACzHD;EACC,iBAAA;CD2HA;AC1HD;EACE,uBAAA;EACA,eAAA;EACA,mBAAA;CD4HD","file":"AddressList.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.goods-img {\n  width: 2rem;\n  height: 2rem;\n  float: left;\n  margin-right: 0.3rem;\n}\n.goods-info {\n  overflow: hidden;\n}\n.goods-item {\n  background-color: #eee;\n  overflow: auto;\n  resize: horizontal;\n}\n","\n\t@import \"../main.styl\"\n// px2rem(name, px){\n//     name: px/75 \n// }\n.goods-img\n\twidth:2rem\n\theight:2rem\n\tfloat:left\n\tmargin-right:0.3rem\n\n.goods-info\n\toverflow:hidden\n.goods-item\n\t background-color: #eee; \n\t overflow:auto; \n\t resize:horizontal;\n\t\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	// 	<div class="flex-view" v-transition>
	// 	<!-- <app-header search="找酒店" right-icon="user-icon"></app-header> -->
	//   <flex-scroll-view>
	//         <ul id="hotel-list-view" style="font-size: 0.3rem">
	//       <!-- <list-view> -->
	//       <hotel-list-item v-for="hotel in hotelList" :hotel="hotel" :index="$index"></hotel-list-item>
	//       <!-- </list-view> -->
	//     </ul>
	// <!--     <return-top></return-top> -->
	//   </flex-scroll-view>
	// </div>
	// </template>
	//
	// <script type="text/javascript">
	module.exports = {
	  replace: true,
	  components: {
	    'hotel-list-item': function hotelListItem(resolve) {
	      __webpack_require__.e/* require */(1/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(95)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'list-view': function listView(resolve) {
	      __webpack_require__.e/* require */(2/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(100)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'return-top': function returnTop(resolve) {
	      __webpack_require__.e/* require */(3/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(105)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'filter-tab': function filterTab(resolve) {
	      __webpack_require__.e/* require */(4/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(110)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	    },
	    'app-header': function appHeader(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    var hotelList = [];
	    var curpage = 1;
	    return {
	      curpage: curpage,
	      hotelList: hotelList
	    };
	  },
	  methods: {
	    getHotelList: function getHotelList() {
	      $.getJSON(HOTEL_LIST_API, { order: "asc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    },
	    getHotelListDone: function getHotelListDone(res) {
	      console.log((0, _stringify2.default)(res));
	      if (!isEmpty(res.datas.store_list)) {
	        this.hotelList = this.hotelList.concat(res.datas.store_list);
	        this.curpage++;
	        // this.$broadcast('refresh')
	        this.$nextTick(function () {
	          this.$broadcast('refresh');
	        });
	        // setTimeout((function(that){return function(){that.$broadcast('refresh')}})(this),50)
	      }
	      if (res.hasmore == false) {
	        this.$off('scrollEnd');
	      }
	    }
	  },
	  created: function created() {},
	  ready: function ready() {
	    this.getHotelList();
	    this.$dispatch('pageLoaded');
	    this.title = '我的地址';
	  },
	  attached: function attached() {},
	  compiled: function compiled() {},
	  props: ['title', 'leftLabel'],
	  events: {
	    'scrollEnd': function scrollEnd(msg) {
	      this.getHotelList();
	    },
	    'conditionChange': function conditionChange(msg) {
	      $.getJSON(SHOP_LIST_API, { order: "desc", page: 10, curpage: this.curpage }).done(this.getHotelListDone);
	    }
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	// 	@import "../main.styl"
	// // px2rem(name, px){
	// //     name: px/75
	// // }
	// .goods-img
	// 	width:2rem
	// 	height:2rem
	// 	float:left
	// 	margin-right:0.3rem
	//
	// .goods-info
	// 	overflow:hidden
	// .goods-item
	// 	 background-color: #eee;
	// 	 overflow:auto;
	// 	 resize:horizontal;
	//
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n\t<!-- <app-header search=\"找酒店\" right-icon=\"user-icon\"></app-header> -->\n  <flex-scroll-view>\n        <ul id=\"hotel-list-view\" style=\"font-size: 0.3rem\">\n      <!-- <list-view> -->\n      <hotel-list-item v-for=\"hotel in hotelList\" :hotel=\"hotel\" :index=\"$index\"></hotel-list-item>\n      <!-- </list-view> -->\n    </ul>\n<!--     <return-top></return-top> -->\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(172)
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(173);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/Index.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF","file":"Index.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	// 	<div class="flex-view" v-transition>
	//     	<router-view></router-view>
	//       <index-tab></index-tab>
	// 	</div>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  components: {
	    'app-header': __webpack_require__(15),
	    'app-pane': __webpack_require__(64),
	    'index-tab': __webpack_require__(79),
	    'flex-scroll-view': __webpack_require__(54)
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	// </style>
	/* generated by vue-loader */

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"flex-view\" v-transition>\n    \t<router-view></router-view>\n      <index-tab></index-tab>\n\t</div>\n";

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(177)
	__vue_script__ = __webpack_require__(179)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\IndexArticle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(180)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\IndexArticle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexArticle.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexArticle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/IndexArticle.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF","file":"IndexArticle.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template v-transition>
	//     	<app-header title='游记'></app-header>
	//       <flex-scroll-view transition="bounce">
	//           <!-- <app-pane side="left" msg="1123" name="{{leftName}}"></app-pane> -->
	//       </flex-scroll-view>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  components: {
	    'app-header': __webpack_require__(15),
	    'app-pane': __webpack_require__(64),
	    'index-tab': __webpack_require__(79),
	    'flex-scroll-view': __webpack_require__(54)
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	// </style>
	/* generated by vue-loader */

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "\n\t<app-header title='游记'></app-header>\n  <flex-scroll-view transition=\"bounce\">\n      <!-- <app-pane side=\"left\" msg=\"1123\" name=\"{{leftName}}\"></app-pane> -->\n  </flex-scroll-view>\n";

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(182)
	__vue_script__ = __webpack_require__(186)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\IndexUcenter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(187)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\IndexUcenter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexUcenter.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IndexUcenter.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n#uc-container {\n  background-color: #eee;\n}\n.uc-header {\n  background: url(" + __webpack_require__(184) + ");\n  text-align: center;\n  padding-top: 1rem;\n  padding-bottom: 0.6rem;\n  color: #fff;\n}\n.li-section {\n  background-color: #fff;\n}\n.li-section .li-label {\n  height: 1rem;\n  padding: 0 10px;\n  line-height: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n  font-size: 0.3rem;\n  color: #808080;\n}\n.li-section .li-label a {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n}\n.li-section .li-label a .title {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.li-section .li-label a .icon {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-right: 10px;\n}\n.li-section .li-label a .icon img {\n  width: 100%;\n}\n.li-section .li-label a .arrow {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: url(" + __webpack_require__(185) + ");\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/IndexUcenter.vue","/./src/views/src/views/IndexUcenter.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HD;EACE,uBAAA;CD8HD;AC7HD;EACE,0CAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,YAAA;CD+HD;AC9HD;EACE,uBAAA;CDgID;AC/HD;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA,CAAA,YAAA;EAAsB,kBAAA;EACtB,eAAW;CDkIZ;AACD;ECjIE,YAAA;EACE,qBAAA;EACA,qBAAA,CAAA,YAAA;CDmIH;AClIyB;EDoIxB,oBAAoB;ECnIlB,gBAAA;MAAA,YAAA;UAAA,QAAA;CDqIH;AACD;EACE,cAAc;ECpIZ,eAAA;EACE,mBAAA;CDsIL;AACD;EACE,YAAY;CCrIR;ADuIN;EACE,cAAc;ECtIZ,eAAA;EACE,0CAAA;CDwIL","file":"IndexUcenter.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n#uc-container {\n  background-color: #eee;\n}\n.uc-header {\n  background: url(\"../asset/images/news.png\");\n  text-align: center;\n  padding-top: 1rem;\n  padding-bottom: 0.6rem;\n  color: #fff;\n}\n.li-section {\n  background-color: #fff;\n}\n.li-section .li-label {\n  height: 1rem;\n  padding: 0 10px;\n  line-height: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n  font-size: 0.3rem;\n  color: #808080;\n}\n.li-section .li-label a {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n}\n.li-section .li-label a .title {\n  -webkit-box-flex: 1;\n  flex: 1;\n}\n.li-section .li-label a .icon {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-right: 10px;\n}\n.li-section .li-label a .icon img {\n  width: 100%;\n}\n.li-section .li-label a .arrow {\n  width: 0.5rem;\n  height: 0.5rem;\n  background: url(\"../asset/images/right_icon.png\");\n}\n","\n@import \"../main.styl\"\n#uc-container\n  background-color:rgb(238,238,238)\n.uc-header\n  background:url(../asset/images/news.png)\n  text-align:center\n  padding-top:1rem\n  padding-bottom:.6rem\n  color:white\n.li-section\n  background-color:white\n.li-section .li-label\n  height:1rem\n  padding:0 10px\n  line-height:1rem\n  width:100%\n  display:-webkit-box\n  display: -webkit-box; /* Safari */\n  font-size: .3rem\n  color:poem-text-gray\n  & a\n    width:100%\n    display:-webkit-box\n    display: -webkit-box; /* Safari */\n    & .title\n      -webkit-box-flex: 1\n      flex:1\n    & .icon\n      width:.3rem\n      height:.3rem\n      margin-right:10px\n      & img\n        width:100%\n    & .arrow\n      width:.5rem\n      height:.5rem\n      background:url(../asset/images/right_icon.png)\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7d4c8e5bf066ed0c6ae32e01a76f5293.png";

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc5JREFUeNrs3NFNw1AMBdDkLgAbwAYwQjdJRmAERugI6SaMACN0A5ggOFKE+hGlP9jvXsdPsqJGT3F1+uT82O3nee681nS5vNrl3WIch+G7E1+9F9YK9WHxYPFlcVIHQwDUsl6Wz3b/sbD2obosYB4na9yASgHmUrMMY7LLsLNFsoa51CxDWE7XZWeL5AmD14MzgsHz4dnA4J0gExgikmQBQ1SiDGCITKYOhuiEymBokVQVDK0SK4KhZXI1MLT+AkpgYPjFVMDAUg8UwGiwFMCosNjB6LCYwSixWMFosRjBqLHYwOixmMAksFjAZLAYwKSwWoPJYbUEk8RqBSaL1QJMGisaTB4rEiwFVhRYGqwIsFRYN2DXO2Dnwur+GumedrYsjXRvh8fy7jhEQR0MK6qHFQV1EKzormgUVHKsVn32KKikWK0nN1BQybBYZoFQUEmw2KbLUFDiWKzziigoUSz2CVgUlBiWykx17/mPIf8E9WPxzDB8DgEomil9CEB9stRVFBQxlipUOJYyVCiWOlQYVgaoEKwsUO5YmaBcsbJBuWFlhHLBMqhzRiivkzWtIKmgXLBWiNMGmDSUW83aAJOHcn0b3oBdM0At61eAAQAbuKTjxLnQqAAAAABJRU5ErkJggg=="

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//       <flex-scroll-view>
	//       <div id="uc-container">
	//         <header class="uc-header">
	//           <div>
	//             <img src="../asset/images/user-white.png">
	//             <p>18782950298</p>
	//           </div>
	//         </header>
	//         <section class="li-section">
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">我的订单</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//           <div class="li-label"><a v-link="{path:'/user/hotelOrder'}">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">酒店景点订单</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//             <div class="li-label"><a v-link="{path:'/user/techanOrder'}">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">特产订单</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//         </section>
	//         <section class="li-section" style="margin-top: 10px">
	//          <div class="li-label"><a v-link="{name:'addresslist'}">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">我的地址</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">收藏商品</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">邀请好友</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//             <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">积分详情</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//             <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">积分兑换</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//         </section>
	//         <section class="li-section" style="margin-top: 10px">
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">关于我们</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">客服帮助</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//         </section>
	//         <section class="li-section" style="margin-top: 10px">
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">设置</div>
	//               <div clase="arrow">
	//               </div>
	//             </a></div>
	//         </section>
	//       </div>
	//     </flex-scroll-view>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  components: {
	    'app-header': __webpack_require__(15),
	    'app-pane': __webpack_require__(64),
	    'index-tab': __webpack_require__(79),
	    'flex-scroll-view': __webpack_require__(54)
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	//   #uc-container
	//     background-color:rgb(238,238,238)
	//   .uc-header
	//     background:url(../asset/images/news.png)
	//     text-align:center
	//     padding-top:1rem
	//     padding-bottom:.6rem
	//     color:white
	//   .li-section
	//     background-color:white
	//   .li-section .li-label
	//     height:1rem
	//     padding:0 10px
	//     line-height:1rem
	//     width:100%
	//     display:-webkit-box
	//     display: -webkit-box; /* Safari */
	//     font-size: .3rem
	//     color:poem-text-gray
	//     & a
	//       width:100%
	//       display:-webkit-box
	//       display: -webkit-box; /* Safari */
	//       & .title
	//         -webkit-box-flex: 1
	//         flex:1
	//       & .icon
	//         width:.3rem
	//         height:.3rem
	//         margin-right:10px
	//         & img
	//           width:100%
	//       & .arrow
	//         width:.5rem
	//         height:.5rem
	//         background:url(../asset/images/right_icon.png)
	// </style>
	/* generated by vue-loader */

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n  <flex-scroll-view>\n  <div id=\"uc-container\">\n    <header class=\"uc-header\">\n      <div>\n        <img src=\"" + __webpack_require__(18) + "\">\n        <p>18782950298</p>\n      </div>\n    </header>\n    <section class=\"li-section\">\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">我的订单</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n      <div class=\"li-label\"><a v-link=\"{path:'/user/hotelOrder'}\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">酒店景点订单</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n        <div class=\"li-label\"><a v-link=\"{path:'/user/techanOrder'}\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">特产订单</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n    </section>\n    <section class=\"li-section\" style=\"margin-top: 10px\">\n     <div class=\"li-label\"><a v-link=\"{name:'addresslist'}\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">我的地址</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">收藏商品</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">邀请好友</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n        <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">积分详情</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n        <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">积分兑换</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n    </section>\n    <section class=\"li-section\" style=\"margin-top: 10px\">\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">关于我们</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">客服帮助</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n    </section>\n    <section class=\"li-section\" style=\"margin-top: 10px\">\n      <div class=\"li-label\"><a href=\"\">\n          <div class=\"icon\">\n            <img src=\"" + __webpack_require__(188) + "\">\n          </div>\n          <div class=\"title\">设置</div>\n          <div clase=\"arrow\">\n          </div>\n        </a></div>\n    </section>\n  </div>\n</flex-scroll-view>\n";

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1dJREFUeNrsnEF2mzAQhmW97NNF9sEnwD2B6QnqGwTea/fODegNvM+i5AbOCUpO0OQEcdbtgpzAnakneaTFWEggMULz3jzyEmHGH7+EGGky2+/3IpiayYBA3c7GEsjvr2kEhzV4Ah6DP4KX4JuLm2I3hhhnY+iGACpFKODnDX9+QYgArJg8LAC1gMNPhaYfAdjD1MesTc/t/IQFqsLxaanYfEntJ6usfOD2fsDqqKpRqMulstaWz+P5NKQ51ZPBR8xdzL1cKSt3fD4PZfWgKmfqkgxV5UxdVpXVo6qcqEsyVZUTdVlT1gCqsq4uyVhV1tVlRVkDqsqquiRzVVlV1+DKsqAqa+qSHqjK2nV6VRZlBD6AY/YzIl8Ke3YPviPHrGoFaiudwaI0MAJJakDwd+divPZC8Oogd13T1I2w/gFSV8ql8M+e60oUhxWlqgnkGyzqQpgr+iyCvdqdOCzFlW+waCnqe2Bz1DJcipv9+nJl69HO3eZSOF4EYGS5pIE72GmLwsaQjjP4KmBQsgphbQIHJdtImkPcBhatdouc/o5Z8EMagLWCSt9lHQKwdlDvYAVg7aD+gxWAHQfVCCsAawZ1FNaEgR0F1QprgsBaQZ2EVQOWeQ4qOwVKCRYBKzwGlqluG1d+kfYUWNZlf32nrINnwLKuhQidUzSeAMt0Kja08lnMgWW6pS3ayT+64DUzUNcmNUCmmdIHZrCM4jWFlTCDlbiEtWAGK3IJK2IGa+ESVswMVuwEFm0eYWcmccsJdUHjuKWr/s9x3AqwQjccXzeMmcKKrcLi+iQ0jV/a7vecxy1pu99zHrd0YSXMYSW+KAv3rH+joxfKuhwQUnRxU+T0hYaCphW/ToUFSvhHz5BwQx3uN68arodFC2vyPqs4PnUtVTlz3AVxtTtvq+YigDlAK8RhZ/WVq64oHcFCSFjylqqWvWE7WjWei362FHT+HjrKMtmwi1VbqUldIJ2bgtJQZag23aqzygasUhNS3mc5G0FLaAzNNaB1jkWr3hAC3Aq1gqjeIZ148KhCu4OYVjaUhYZjx7YlsGeCVNiaZdINSahoK2+ZHtxT/MKKsmp3Ey+6onet11q9EgLfjuBleUUzdXScfuCa4dbkBs7CP3UdfgY/SfsjwADayFiljYIVWQAAAABJRU5ErkJggg=="

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(190)
	__vue_script__ = __webpack_require__(192)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\HotelDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(193)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\HotelDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelDetail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n#hotel-container {\n  background-color: #eee;\n}\n#hotel-container a {\n  color: #a0a0a0;\n}\n#hotel-container .hotel-header {\n  background: url(" + __webpack_require__(184) + ");\n  background-size: 100% 100%;\n  text-align: center;\n  height: 6rem;\n  padding-bottom: 0.6rem;\n  color: #fff;\n  position: relative;\n}\n#hotel-container .hotel-header header {\n  padding: 10px;\n}\n#hotel-container .hotel-header header img {\n  height: 0.5rem;\n}\n.li-section {\n  background-color: #fff;\n}\n.li-section .li-label {\n  height: 1rem;\n  padding: 0 10px;\n  line-height: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n  font-size: 0.3rem;\n  color: #808080;\n}\n.li-section .li-label a {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n}\n.li-section .li-label a .title {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-bottom: solid 1px #dbdbdb;\n}\n.li-section .li-label a .icon {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-right: 10px;\n}\n.li-section .li-label a .icon img {\n  width: 100%;\n}\n.li-section .li-label a .arrow {\n  border-bottom: solid 1px #dbdbdb;\n  height: 1rem;\n  background: none;\n}\n.li-section .li-label a .arrow i {\n  margin-top: 0.3rem;\n  line-height: 1rem;\n  display: block;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-size: 100%;\n  background-image: url(" + __webpack_require__(185) + ");\n}\n.hotel-room-list .li-room {\n  border-bottom: solid 1px #dbdbdb;\n}\n.hotel-room-list .li-room a {\n  font-size: 0.25rem;\n  padding: 0 10px;\n  height: room-item-heigth;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.hotel-room-list .li-room a .room-img {\n  width: 1.5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  padding: 3px;\n}\n.hotel-room-list .li-room a .room-img img {\n  margin: 0 auto;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.hotel-room-list .li-room a .room-info {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.hotel-room-list .li-room a .room-price {\n  height: 1.5rem;\n  line-height: 1.5rem;\n  margin-right: 10px;\n  font-size: 0.3rem;\n}\n.hotel-room-list .li-room a .arrow {\n  height: 1.5rem;\n  background: none;\n  width: 0.5rem;\n}\n.hotel-room-list .li-room a .arrow i {\n  margin-top: 0.6rem;\n  line-height: 1.5rem;\n  display: block;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-size: 100%;\n  background-image: url(" + __webpack_require__(185) + ");\n}\n.room-detail {\n  background-color: #fafafa;\n}\n.room-detail .hotel-room-img-list {\n  display: inline-block;\n  padding: 10px 0;\n  height: 2.2rem;\n  overflow: hidden;\n}\n.room-detail .hotel-room-img-list div {\n  width: 25%;\n  margin-left: -3px;\n  float: left;\n  padding: 10px;\n  text-align: center;\n}\n.room-detail .hotel-room-img-list div img {\n  width: 2rem;\n  height: 2rem;\n  margin: 3px auto;\n  border-radius: 5px;\n}\n.room-detail .book-btn {\n  font-size: 0.3rem;\n  background: #f7b52b;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 15px;\n  margin: 10px 20px;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/HotelDetail.vue","/./src/views/src/views/HotelDetail.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC1HC;EACE,uBAAA;CD4HH;AC3HG;EACE,eAAA;CD6HL;AC5HG;EACE,0CAAA;EACA,2BAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,mBAAA;CD8HL;AC7HK;EACE,cAAA;CD+HP;AC9HO;EACE,eAAA;CDgIT;AC/HC;EACE,uBAAA;CDiIH;AChIC;EACE,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,qBAAA;EACA,qBAAA,CAAA,YAAA;EAAsB,kBAAA;EACtB,eAAW;CDmId;AACD;EClII,YAAA;EACE,qBAAA;EACA,qBAAA,CAAA,YAAA;CDoIL;ACnI2B;EDqI1B,oBAAoB;ECpIhB,gBAAA;MAAA,YAAA;UAAA,QAAA;EACE,iCAAA;CDsIP;AACD;EACE,cAAc;ECrIV,eAAA;EACE,mBAAA;CDuIP;AACD;EACE,YAAY;CCtIN;ADwIR;EACE,iCAAiC;ECvI7B,aAAA;EACE,iBAAc;CDyIrB;AACD;EACE,mBAAmB;ECxIb,kBAAA;EACE,eAAW;EACX,cAAY;EACZ,eAAA;EACA,sBAAA;EACA,gDAAA;CD0IT;AACD;EACE,iCAAiC;CCxI/B;AD0IJ;EACE,mBAAmB;ECzIjB,gBAAA;EACE,yBAAA;EACA,qBAAQ;EAAR,sBAAQ;EAAR,qBAAQ;EAAR,cAAQ;CD2Ib;AACD;EACE,cAAc;EC1IV,eAAA;EACE,oBAAA;EACA,mBAAA;EACA,aAAY;CD4InB;AACD;EACE,eAAe;EC3IT,cAAA;EACE,eAAA;CD6IT;AACD;EACE,oBAAQ;EAAR,gBAAQ;MAAR,YAAQ;UAAR,QAAQ;CC5IJ;AD8IN;EACE,eAAe;EC7IX,oBAAA;EACE,mBAAA;EACA,kBAAY;CD+InB;AACD;EACE,eAAe;EC9IX,iBAAA;EACE,cAAO;CDgJd;AACD;EACE,mBAAmB;EC/Ib,oBAAA;EACE,eAAW;EACX,cAAY;EACZ,eAAA;EACA,sBAAA;EACA,gDAAA;CDiJT;AACD;EACE,0BAA0B;CChJ1B;ADkJF;EACE,sBAAsB;ECjJpB,gBAAA;EACE,eAAQ;EACR,iBAAA;CDmJL;AACD;EACE,WAAW;EClJP,kBAAA;EACE,YAAA;EACA,cAAY;EACZ,mBAAA;CDoJP;AACD;EACE,YAAY;ECnJN,aAAA;EACE,iBAAA;EACA,mBAAA;CDqJT;AACD;EACE,kBAAkB;ECpJhB,oBAAA;EACE,YAAU;EACV,aAAW;EACX,mBAAA;EACA,mBAAA;EACA,kBAAc;CDsJnB","file":"HotelDetail.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n#hotel-container {\n  background-color: #eee;\n}\n#hotel-container a {\n  color: #a0a0a0;\n}\n#hotel-container .hotel-header {\n  background: url(\"../asset/images/news.png\");\n  background-size: 100% 100%;\n  text-align: center;\n  height: 6rem;\n  padding-bottom: 0.6rem;\n  color: #fff;\n  position: relative;\n}\n#hotel-container .hotel-header header {\n  padding: 10px;\n}\n#hotel-container .hotel-header header img {\n  height: 0.5rem;\n}\n.li-section {\n  background-color: #fff;\n}\n.li-section .li-label {\n  height: 1rem;\n  padding: 0 10px;\n  line-height: 1rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n  font-size: 0.3rem;\n  color: #808080;\n}\n.li-section .li-label a {\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-box; /* Safari */\n}\n.li-section .li-label a .title {\n  -webkit-box-flex: 1;\n  flex: 1;\n  border-bottom: solid 1px #dbdbdb;\n}\n.li-section .li-label a .icon {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-right: 10px;\n}\n.li-section .li-label a .icon img {\n  width: 100%;\n}\n.li-section .li-label a .arrow {\n  border-bottom: solid 1px #dbdbdb;\n  height: 1rem;\n  background: none;\n}\n.li-section .li-label a .arrow i {\n  margin-top: 0.3rem;\n  line-height: 1rem;\n  display: block;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-size: 100%;\n  background-image: url(\"../asset/images/right_icon.png\");\n}\n.hotel-room-list .li-room {\n  border-bottom: solid 1px #dbdbdb;\n}\n.hotel-room-list .li-room a {\n  font-size: 0.25rem;\n  padding: 0 10px;\n  height: room-item-heigth;\n  display: flex;\n}\n.hotel-room-list .li-room a .room-img {\n  width: 1.5rem;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  padding: 3px;\n}\n.hotel-room-list .li-room a .room-img img {\n  margin: 0 auto;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.hotel-room-list .li-room a .room-info {\n  flex: 1;\n}\n.hotel-room-list .li-room a .room-price {\n  height: 1.5rem;\n  line-height: 1.5rem;\n  margin-right: 10px;\n  font-size: 0.3rem;\n}\n.hotel-room-list .li-room a .arrow {\n  height: 1.5rem;\n  background: none;\n  width: 0.5rem;\n}\n.hotel-room-list .li-room a .arrow i {\n  margin-top: 0.6rem;\n  line-height: 1.5rem;\n  display: block;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-size: 100%;\n  background-image: url(\"../asset/images/right_icon.png\");\n}\n.room-detail {\n  background-color: #fafafa;\n}\n.room-detail .hotel-room-img-list {\n  display: inline-block;\n  padding: 10px 0;\n  height: 2.2rem;\n  overflow: hidden;\n}\n.room-detail .hotel-room-img-list div {\n  width: 25%;\n  margin-left: -3px;\n  float: left;\n  padding: 10px;\n  text-align: center;\n}\n.room-detail .hotel-room-img-list div img {\n  width: 2rem;\n  height: 2rem;\n  margin: 3px auto;\n  border-radius: 5px;\n}\n.room-detail .book-btn {\n  font-size: 0.3rem;\n  background: #f7b52b;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 15px;\n  margin: 10px 20px;\n}\n","\n  @import \"../main.styl\"\nroom-item-height=1.5rem\n\n  #hotel-container\n    background-color:rgb(238,238,238)\n    & a\n      color:text-gray\n    & .hotel-header\n      background:url(../asset/images/news.png)\n      background-size:100% 100%\n      text-align:center\n      height:6rem\n      padding-bottom:.6rem\n      color:white\n      position:relative\n      & header\n        padding:10px\n        & img\n          height:0.5rem\n  .li-section\n    background-color:white\n  .li-section .li-label\n    height:1rem\n    padding:0 10px\n    line-height:1rem\n    width:100%\n    display:-webkit-box\n    display: -webkit-box; /* Safari */\n    font-size: .3rem\n    color:poem-text-gray\n    & a\n      width:100%\n      display:-webkit-box\n      display: -webkit-box; /* Safari */\n      & .title\n        -webkit-box-flex: 1\n        flex:1\n        border-bottom:solid 1px line-gray\n      & .icon\n        width:.3rem\n        height:.3rem\n        margin-right:10px\n        & img\n          width:100%\n      & .arrow\n        border-bottom:solid 1px line-gray\n        height:1rem\n        background:none\n        & i\n          margin-top:.3rem\n          line-height:1rem\n          display:block\n          width:.3rem\n          height:@width\n          background-size:100%\n          background-image:url(../asset/images/right_icon.png)\n  .hotel-room-list\n    & .li-room\n      border-bottom:solid 1px line-gray\n    & .li-room a\n      font-size: .25rem\n      padding:0 10px\n      height:room-item-heigth\n      display:flex\n      & .room-img\n        width:room-item-height\n        height:room-item-height\n        line-height:room-item-height\n        text-align:center\n        padding:3px\n        & img\n          margin:0 auto\n          width:1.4rem\n          height:@width\n      & .room-info\n        flex:1\n      & .room-price\n        height:room-item-height\n        line-height:room-item-height\n        margin-right:10px\n        font-size:.3rem\n      & .arrow\n        height:room-item-height\n        background:none\n        width:0.5rem\n        & i\n          margin-top:.6rem\n          line-height:room-item-height\n          display:block\n          width:.3rem\n          height:@width\n          background-size:100%\n          background-image:url(../asset/images/right_icon.png)\n  .room-detail\n    background-color:rgb(250,250,250)\n    & .hotel-room-img-list\n      display:inline-block\n      padding 10px 0\n      height :2.2rem\n      overflow hidden\n      & div\n        width:25%\n        margin-left:-3px\n        float:left\n        padding 10px\n        text-align:center\n        & img\n          width:2rem\n          height:@width\n          margin:3px auto\n          border-radius:5px\n    & .book-btn\n      font-size:.3rem\n      background:app-yellow\n      color:white\n      border:none\n      border-radius:5px\n      padding:10px 15px\n      margin:10px 20px\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//     <flex-scroll-view>
	//       <div id="hotel-container">
	//         <div class="hotel-header" style="background-image:url({{bgImg}})">
	//           <header>
	//             <i style="float:left">
	//               <img src="../asset/images/fanhui.png">
	//             </i>
	//             <div style="float:right">
	//                 <img src="../asset/images/star-red.png">
	//                 <img style="margin:0 5px" src="../asset/images/share-white.png">
	//             </div>
	//           </header>
	//           <div style="position:absolute;bottom:0;padding-left:10px;font-size:.3rem">
	//             <p>{{hotelName}}</p>
	//           </div>
	//         </div>
	//         <section class="li-section">
	//
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">评论</div>
	//                            <div class="arrow">
	//                 <i></i>
	//               </div>
	//             </a></div>
	//             <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">
	//                 <span style="margin-right:20px">地图</span>
	//                 <span>{{hotelLoc}}</span>
	//               </div>
	//                 <div class="arrow">
	//                 <i></i>
	//               </div>
	//             </a></div>
	//             <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">详情</div>
	//                 <div class="arrow">
	//                 <i></i>
	//               </div>
	//             </a></div>
	//               <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title">吃喝玩乐</div>
	//                 <div class="arrow">
	//                 <i></i>
	//               </div>
	//             </a></div>
	//         </section>
	//         <section class="li-section" style="margin-top: 10px">
	//           <div class="li-label"><a href="">
	//               <div class="icon">
	//                 <img src="../asset/images/star-red-full.png">
	//               </div>
	//               <div class="title"><span>3月10日入住－3月20日离店</span><span>共一晚</span></div>
	//                 <div class="arrow">
	//                 <i></i>
	//               </div>
	//             </a></div>
	//             <ul class="hotel-room-list">
	//
	//           <div class="li-room" v-for="room in roomList">
	//               <a>
	//                 <div class="room-img">
	//                   <img src="{{room.goods_image_url}}">
	//                 </div>
	//                 <div class="room-info">
	//                   <p>{{room.goods_name}}</p>
	//                   <p>{{room.goods_jingle}}</p>
	//                 </div>
	//                 <div class="room-price">
	//                   <span>¥</span><span style="color:red;font-size:.4rem">{{room.goods_salenum}}</span><span>起</span>
	//                 </div>
	//                   <div class="arrow">
	//                   <i></i>
	//                 </div>
	//               </a>
	//               <div class="room-detail">
	//                 <div class="hotel-room-img-list">
	//                 <div v-for="photo in room.goods_photo" class="room-img-item">
	//                   <img src="{{photo}}">
	//                 </div>
	//               </div>
	//               <div style="overflow:hidden">
	//                 <button class="book-btn" style="float:right">预定</button>
	//               </div>
	//               </div>
	//             </ul>
	//         </section>
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	//
	// <script>
	
	module.exports = {
	  replace: true,
	  data: function data() {
	    return {
	      'hotelName': '123',
	      'bgImg': '',
	      'hotelLoc': '',
	      'roomList': []
	    };
	  },
	  methods: {
	    getHotelDetail: function getHotelDetail() {
	      $.poemGet(HOTEL_DETAIL_API, { 'store_id': this.$route.params.hotelId }).done(this.initPage);
	    },
	    initPage: function initPage(res) {
	      if (res.store_info) {
	        this.hotelName = res.store_info.store_name;
	        this.hotelLoc = res.store_info.store_location_lat + ',' + res.store_info.store_location_lng;
	        this.bgImg = res.store_info.store_label;
	        this.roomList = res.good_list;
	      }
	    }
	  },
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  route: {
	    data: function data(transition) {
	      // alert(JSON.stringify(this.$route.params));
	      transition.next({
	        // 'hotelName':'111'
	      });
	      this.getHotelDetail();
	    },
	    canReuse: function canReuse(transition) {
	      //判断是否可以重用，可以则为返回true，不能重用则返回false，会实例化一个新的vue对象
	    }
	  },
	  ready: function ready() {
	
	    this.$broadcast('refresh');
	  }
	};
	// </script>
	//
	// <style lang="stylus">
	//   @import "../main.styl"
	// room-item-height=1.5rem
	//
	//   #hotel-container
	//     background-color:rgb(238,238,238)
	//     & a
	//       color:text-gray
	//     & .hotel-header
	//       background:url(../asset/images/news.png)
	//       background-size:100% 100%
	//       text-align:center
	//       height:6rem
	//       padding-bottom:.6rem
	//       color:white
	//       position:relative
	//       & header
	//         padding:10px
	//         & img
	//           height:0.5rem
	//   .li-section
	//     background-color:white
	//   .li-section .li-label
	//     height:1rem
	//     padding:0 10px
	//     line-height:1rem
	//     width:100%
	//     display:-webkit-box
	//     display: -webkit-box; /* Safari */
	//     font-size: .3rem
	//     color:poem-text-gray
	//     & a
	//       width:100%
	//       display:-webkit-box
	//       display: -webkit-box; /* Safari */
	//       & .title
	//         -webkit-box-flex: 1
	//         flex:1
	//         border-bottom:solid 1px line-gray
	//       & .icon
	//         width:.3rem
	//         height:.3rem
	//         margin-right:10px
	//         & img
	//           width:100%
	//       & .arrow
	//         border-bottom:solid 1px line-gray
	//         height:1rem
	//         background:none
	//         & i
	//           margin-top:.3rem
	//           line-height:1rem
	//           display:block
	//           width:.3rem
	//           height:@width
	//           background-size:100%
	//           background-image:url(../asset/images/right_icon.png)
	//   .hotel-room-list
	//     & .li-room
	//       border-bottom:solid 1px line-gray
	//     & .li-room a
	//       font-size: .25rem
	//       padding:0 10px
	//       height:room-item-heigth
	//       display:flex
	//       & .room-img
	//         width:room-item-height
	//         height:room-item-height
	//         line-height:room-item-height
	//         text-align:center
	//         padding:3px
	//         & img
	//           margin:0 auto
	//           width:1.4rem
	//           height:@width
	//       & .room-info
	//         flex:1
	//       & .room-price
	//         height:room-item-height
	//         line-height:room-item-height
	//         margin-right:10px
	//         font-size:.3rem
	//       & .arrow
	//         height:room-item-height
	//         background:none
	//         width:0.5rem
	//         & i
	//           margin-top:.6rem
	//           line-height:room-item-height
	//           display:block
	//           width:.3rem
	//           height:@width
	//           background-size:100%
	//           background-image:url(../asset/images/right_icon.png)
	//   .room-detail
	//     background-color:rgb(250,250,250)
	//     & .hotel-room-img-list
	//       display:inline-block
	//       padding 10px 0
	//       height :2.2rem
	//       overflow hidden
	//       & div
	//         width:25%
	//         margin-left:-3px
	//         float:left
	//         padding 10px
	//         text-align:center
	//         & img
	//           width:2rem
	//           height:@width
	//           margin:3px auto
	//           border-radius:5px
	//     & .book-btn
	//       font-size:.3rem
	//       background:app-yellow
	//       color:white
	//       border:none
	//       border-radius:5px
	//       padding:10px 15px
	//       margin:10px 20px
	// </style>
	/* generated by vue-loader */

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"flex-view\" v-transition>\n  <flex-scroll-view>\n    <div id=\"hotel-container\">\n      <div class=\"hotel-header\" style=\"background-image:url({{bgImg}})\">\n        <header>\n          <i style=\"float:left\">\n            <img src=\"" + __webpack_require__(19) + "\">\n          </i>\n          <div style=\"float:right\">\n              <img src=\"" + __webpack_require__(194) + "\">\n              <img style=\"margin:0 5px\" src=\"" + __webpack_require__(195) + "\">\n          </div>\n        </header>\n        <div style=\"position:absolute;bottom:0;padding-left:10px;font-size:.3rem\">\n          <p>{{hotelName}}</p>\n        </div>\n      </div>\n      <section class=\"li-section\">\n\n        <div class=\"li-label\"><a href=\"\">\n            <div class=\"icon\">\n              <img src=\"" + __webpack_require__(188) + "\">\n            </div>\n            <div class=\"title\">评论</div>\n                         <div class=\"arrow\">\n              <i></i>\n            </div>\n          </a></div>\n          <div class=\"li-label\"><a href=\"\">\n            <div class=\"icon\">\n              <img src=\"" + __webpack_require__(188) + "\">\n            </div>\n            <div class=\"title\">\n              <span style=\"margin-right:20px\">地图</span>\n              <span>{{hotelLoc}}</span>\n            </div>\n              <div class=\"arrow\">\n              <i></i>\n            </div>\n          </a></div>\n          <div class=\"li-label\"><a href=\"\">\n            <div class=\"icon\">\n              <img src=\"" + __webpack_require__(188) + "\">\n            </div>\n            <div class=\"title\">详情</div>\n              <div class=\"arrow\">\n              <i></i>\n            </div>\n          </a></div>\n            <div class=\"li-label\"><a href=\"\">\n            <div class=\"icon\">\n              <img src=\"" + __webpack_require__(188) + "\">\n            </div>\n            <div class=\"title\">吃喝玩乐</div>\n              <div class=\"arrow\">\n              <i></i>\n            </div>\n          </a></div>\n      </section>\n      <section class=\"li-section\" style=\"margin-top: 10px\">\n        <div class=\"li-label\"><a href=\"\">\n            <div class=\"icon\">\n              <img src=\"" + __webpack_require__(188) + "\">\n            </div>\n            <div class=\"title\"><span>3月10日入住－3月20日离店</span><span>共一晚</span></div>\n              <div class=\"arrow\">\n              <i></i>\n            </div>\n          </a></div>\n          <ul class=\"hotel-room-list\">\n           \n        <div class=\"li-room\" v-for=\"room in roomList\">\n            <a>\n              <div class=\"room-img\">\n                <img src=\"{{room.goods_image_url}}\">\n              </div>\n              <div class=\"room-info\">\n                <p>{{room.goods_name}}</p>\n                <p>{{room.goods_jingle}}</p>\n              </div>\n              <div class=\"room-price\">\n                <span>¥</span><span style=\"color:red;font-size:.4rem\">{{room.goods_salenum}}</span><span>起</span>\n              </div>\n                <div class=\"arrow\">\n                <i></i>\n              </div>\n            </a>\n            <div class=\"room-detail\">\n              <div class=\"hotel-room-img-list\">\n              <div v-for=\"photo in room.goods_photo\" class=\"room-img-item\">\n                <img src=\"{{photo}}\">\n              </div>\n            </div>\n            <div style=\"overflow:hidden\">\n              <button class=\"book-btn\" style=\"float:right\">预定</button>\n            </div>\n            </div> \n          </ul>\n      </section>\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMVJREFUeNrsnEFy2yAUhjGTvbPoPsoJop4gygnqG0SZadf1DeLewF13EfsEdU5Q5wR1ThC8bhfOCVJe/JNibMmSkEBEejOMRhpZwKf/8QCBBy8vL6y3YsZ7BMXtpC0F+fslTeRhLBMdh7h8L9Piw4/ZrA1lHLTBDSUognGdc8uDTCMJbdNpN5SgphqouUwfJZSBPJ7L9E2mZ5kuZZp1WlkSVCQPTzi9OeRu8p5YHpZwzSt5z7KrypooN8tql+T1lTxMjfu7BQuqui4IYarcEYGgc8rSVZXrWmjYvauLB6Cq1qiLt11VbVIXD0RVurqYL3XxEFRlqGvuS108IFWZsJ2ri4eiKk1dwpe6eGCq8qoul8pKbVXlW13ckapO2Xb6pc7KOVeXK2WNMRB+qGsg7ENdPFBVeVEXD1FVvtTV2HwW5qFIVQvW4FyUOScmk2hqzssKlgYkwZHOqfBnxq2PsgJxg64+Y/vT0jToprkwgbQCyFXVfE4KvrlIA5EFxLS1VsiFg86uwEtTZSM1XyLp9THLRkMoUuLmGMgdZaExpqeNoJSLI4U0316hTB11V4qqPuslU11maBd3YcmHpxjVDwvIeeNzLrwhkPGBupN9l3Udv8ECqDvVw2bbLykiZCAWIBXAsebCr8AGfz5fR1ALUZ3LiynrTfc2JaIrjvZJ9YN6ULv9uJnWj0s5fJU5iFih2gzHiCNCMLhib/umlgzEHBGOwR172zfleSuuuV+KkNrbbr9TjTkXquuwRJikPlXShk5lS0At0TFfKzdULviIqLjsusIMUCSg1+VOHCFyg95s54EdAPXmaVzrU3QeWB6oHVhdB3YM1B6srgLTFsypxvxgkMuc/CtC+p2BGkIgSdbaVZ4zLnr3CisDKhfWewdWFtRRWAawOR78G1MXnQKV22ZlZEIjcPVh4KYti/ldgCqkLENlqTa/cxeawmxAlYYVMjBbUJVghQisDlCVYWnA7o05n7ZaAlDrqqCsYMFUpqLlsFRnWthslrKFFRmFaTusS5uH2MK6DAEW1PSM9ityDkvryT/73gdYUl2xD2WF4oKtgBUHBku0AZYITFlR74bFYV34gHUREiwjIsbOYGmZrQOJhLW4Ird0QcHCsqVNI18VVmxkHooJH7CSQJXlBVZjbkjDEZkmTeyY0JZ9nrmEdWZkXgekU0xb0waAW5l+0bnNWC7D1sgvaRyWlsm6RkgTqFTN7z/iSOdPNUMTVSMi9+WCBiRS0uu6VrbdtkJtyjnOdWhTfPytIyKWhnViAWtpASplu2vuSaWp7tZYrJ9AyQSVpoO+su2iO/rttGIfTxhBqlFlVR4TEiSZ6Hd37P80L31Si7LaP7ouE1XsCkobQokCyqwKi7lQlnqbpyUgjaAkFYVo2DEu890RMBOocoJn3apzF98wqyhLDRlGBSAlWIL5E5UjSPSfWFHVytHvSIlsu11ujefSFyZR8CtTWlVhpbfQoYEVLGdHhtHOKCXZtDN55Rkjr6EWSceH3NrcMVG261Npv6GRKb3dBVKMhvOTdvschW9swK1tLR4b0BYIRAk8Qc2UvG1eahxWRkQzbY62xNmQKAOaaZVAWcFSQxO8sZHRpk1dQnJVrkH/p67Njw07af8EGAD1D7PALxD2VQAAAABJRU5ErkJggg=="

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvJJREFUeNrsnOF1gjAQx2Mf32ED2aDZoGygG5ROUEfQDbpB7QZ0gtoN6Aa6AUxgk/cOG9MEUJIQyP3fu9eWhyb8vLvcRejifD4TVD89IAKEhbAQFsJCWAgrkOtMmFGE1Q/UAYwirG5Qj8ziocBCgJUKfw8CNndYR2YZs9oEsBByVmkKWCiroRFgIdVZg4GFVpQOAhZiBX83sFDbnbuAhdwb3gxsIW0rG+mhQBVMyHdRABQLx2oAeT1/DotZwuxwNqsDvPcUjDKrpPlXcPxyXgTMmv5pDsrgZyq1Ol3iDFaKkLx4WARuOEVQKVwIFSw2PMYVsAjylKwfZoWBvsxGfsmZrZktHX0oHNiWjxlpQGWQoH3xoI1jQDKPvAlDWRtPQGUwl1WPc2vIK6WwCt96DRzIc5vjRJ4u5W/MnjrgFORvB3RoyHeC8g1WArnhteWcD4BUGByXg3rvk4p8gcXz0V6zmp3A0/YW0kNvUE1RmknFWOawGOTF8F5T1B6Z5RbHzhVjljAn5WvGhEVhcipt2yY9BiixgvehH+P6htA4Whz7ttAbedch14DawYS9BDVGgldNtoYEfxhh7JsKcJeelSkme4Lj3oNy6VlUURu5aquMgHLlWQmAikcARU2BcgWrkBrgJke56D9LqPqNfEi2w3Cj6PFsr3iqMGy8bJA324SVQq8n6oWMsy+fm3gTm2Eo93qfcGyysgUrk8KvNvXpzhHWVpG7KoTV7VWnqYefTVgqryIIS70Cyl5VICx9XdXmZQhL0FpRvSMsTR+2lOqqCmHpV8HZehXCGrE3pFJ3P5UQTMn13Tbab7NNetZSGnAq4m3Yl2DWb5OUQ/BIZihbvWE5R1imchb3pB3C6g9rS2YufOwXYSEshIWwEBYKYSEsd7DywBgMekaa3w++DwQUv85V35N17c4z+X8TfSjS7sPxhzMT6O1iguJf3aVtYchJbpDT5b4x0uZZze9pgMldDL2CdGxaLvBfb2KdhbAQ1oT0K8AALKqS0FjqF8sAAAAASUVORK5CYII="

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(197)
	__vue_script__ = __webpack_require__(199)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\HotelDeepDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(200)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\HotelDeepDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(198);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-df9509da&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelDeepDetail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-df9509da&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelDeepDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html[_v-df9509da],\nbody[_v-df9509da] {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli[_v-df9509da] {\n  list-style: none;\n}\nul[_v-df9509da] {\n  padding-left: 0;\n}\n.view[_v-df9509da] {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter[_v-df9509da] {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave[_v-df9509da] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green[_v-df9509da] {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box[_v-df9509da] {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div[_v-df9509da] {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input[_v-df9509da] {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden[_v-df9509da] {\n  display: none;\n}\n.poem-mask[_v-df9509da] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view[_v-df9509da] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon[_v-df9509da] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\np[_v-df9509da] {\n  color: #a0a0a0;\n}\nh2[_v-df9509da] {\n  font-size: 0.45rem;\n  font-weight: normal;\n}\n.section[_v-df9509da] {\n  background: #fff;\n  margin: 0.4rem 0;\n}\n.address[_v-df9509da] {\n  padding: 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.address h2[_v-df9509da] {\n  color: #28a7e1;\n}\n.cellphone[_v-df9509da] {\n  padding: 0.4rem;\n}\n.cellphone h2[_v-df9509da] {\n  color: #ec6762;\n}\n.contact[_v-df9509da] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.contact h2[_v-df9509da] {\n  margin: 0;\n}\n.contact p[_v-df9509da] {\n  margin-bottom: 0;\n}\n.icon[_v-df9509da] {\n  width: 1rem;\n}\n.icon img[_v-df9509da] {\n  width: 0.5rem;\n  height: auto;\n}\n.sub-header[_v-df9509da] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.sub-header h2[_v-df9509da] {\n  margin: 0;\n}\n.estab[_v-df9509da] {\n  overflow: hidden;\n}\n.estab .icon[_v-df9509da] {\n  padding: 0.4rem;\n}\n.estab h2[_v-df9509da] {\n  padding: 0.4rem;\n}\n.estab .each-estab[_v-df9509da] {\n  width: 25%;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border: 1px solid #dbdbdb;\n  border-left: none;\n  float: left;\n}\n.intro[_v-df9509da] {\n  padding: 0.4rem;\n}\n.intro p[_v-df9509da] {\n  text-indent: 0.4rem;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/HotelDeepDetail.vue","/./src/views/src/views/HotelDeepDetail.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HD;EACE,eAAA;CD8HD;AC7HD;EACE,mBAAA;EACA,oBAAA;CD+HD;AC9HD;EACE,iBAAA;EACA,iBAAA;CDgID;AC/HD;EACE,gBAAA;EACA,iCAAA;CDiID;AChIC;EACE,eAAA;CDkIH;ACjID;EACE,gBAAA;CDmID;AClIC;EACE,eAAA;CDoIH;ACnID;EACE,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CDqID;ACpIC;EACE,UAAA;CDsIH;ACrIC;EACE,iBAAA;CDuIH;ACtID;EACE,YAAA;CDwID;ACvIC;EACE,cAAA;EACA,aAAA;CDyIH;ACxID;EACE,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CD0ID;ACzIC;EACE,UAAA;CD2IH;AC1ID;EAKE,iBAAA;CDwID;AC5IC;EACE,gBAAA;CD8IH;AC7IC;EACE,gBAAA;CD+IH;AC7IC;EACE,WAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,YAAA;CD+IH;AC7ID;EACE,gBAAA;CD+ID;AC9IC;EACE,oBAAA;CDgJH","file":"HotelDeepDetail.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\np {\n  color: #a0a0a0;\n}\nh2 {\n  font-size: 0.45rem;\n  font-weight: normal;\n}\n.section {\n  background: #fff;\n  margin: 0.4rem 0;\n}\n.address {\n  padding: 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.address h2 {\n  color: #28a7e1;\n}\n.cellphone {\n  padding: 0.4rem;\n}\n.cellphone h2 {\n  color: #ec6762;\n}\n.contact {\n  display: flex;\n}\n.contact h2 {\n  margin: 0;\n}\n.contact p {\n  margin-bottom: 0;\n}\n.icon {\n  width: 1rem;\n}\n.icon img {\n  width: 0.5rem;\n  height: auto;\n}\n.sub-header {\n  display: flex;\n}\n.sub-header h2 {\n  margin: 0;\n}\n.estab {\n  overflow: hidden;\n}\n.estab .icon {\n  padding: 0.4rem;\n}\n.estab h2 {\n  padding: 0.4rem;\n}\n.estab .each-estab {\n  width: 25%;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  border: 1px solid #dbdbdb;\n  border-left: none;\n  float: left;\n}\n.intro {\n  padding: 0.4rem;\n}\n.intro p {\n  text-indent: 0.4rem;\n}\n","\n@import \"../main.styl\"\np\n  color: text-gray\nh2\n  font-size: 0.45rem\n  font-weight: normal\n.section\n  background: poem-white;\n  margin: 0.4rem 0;\n.address\n  padding: 0.4rem;\n  border-bottom: 1px solid line-gray\n  & h2\n    color: #28a7e1\n.cellphone\n  padding: 0.4rem;\n  & h2\n    color: #ec6762\n.contact\n  display: flex\n  h2\n    margin: 0\n  p\n    margin-bottom: 0\n.icon\n  width: 1rem\n  & img\n    width: 0.5rem\n    height: auto\n.sub-header\n  display: flex\n  h2\n    margin: 0\n.estab\n  .icon\n    padding: 0.4rem\n  h2\n    padding: 0.4rem\n  overflow: hidden\n  .each-estab\n    width: 25%\n    height: 1.5rem\n    line-height: 1.5rem\n    text-align: center\n    border: 1px solid line-gray\n    border-left: none\n    float: left\n\n.intro\n  padding: 0.4rem\n  p\n    text-indent: 0.4rem\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//   <app-header title="酒店详情"></app-header>
	//     <flex-scroll-view>
	//       <div class="section">
	//         <div class="address contact">
	//           <div class="icon">
	//             <img src="../asset/images/ditu.png">
	//           </div>
	//           <div>
	//             <h2>地址</h2>
	//             <p>{{ address }}</p>
	//           </div>
	//         </div>
	//         <div class="cellphone contact">
	//           <div class="icon">
	//             <img src="../asset/images/phone-red.png">
	//           </div>
	//           <div>
	//             <h2>电话</h2>
	//             <p>010-4747515</p>
	//           </div>
	//         </div>
	//       </div>
	//       <div class="section estab">
	//         <div class="sub-header">
	//           <div class="icon">
	//             <img src="../asset/images/phone-red.png">
	//           </div>
	//           <h2>酒店设施</h2>
	//         </div>
	//         <div>
	//           <div class="each-estab" v-for="estab in estabs">{{ estab }}</div>
	//         </div>
	//       </div>
	//       <div class="section intro">
	//         <div class="sub-header">
	//           <div class="icon">
	//             <img src="../asset/images/phone-red.png">
	//           </div>
	//           <h2>介绍</h2>
	//         </div>
	//         <div>
	//           <p v-for="intro in intros">{{ intro }}</p>
	//         </div>
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	//
	// <script>
	module.exports = {
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'app-header': function appHeader(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	
	  data: function data() {
	    return {
	      address: '我在马路边捡到一分钱',
	      intros: ['把他交给警察叔叔手里边把他交给警察叔叔手里边把他交给警察叔叔手里边把他交给警察叔叔手里边', '把他交给警察叔叔手里边把他交给警察叔叔手里边把他交给警察叔叔手里边把他交给警察叔叔手里边'],
	      estabs: ['宽带上网', 'wifi', '停车场', '停车场', '停车场', '停车场']
	    };
	  }
	};
	// </script>
	//
	// <style scoped lang="stylus">
	//   @import "../main.styl"
	//   p
	//     color: text-gray
	//   h2
	//     font-size: 0.45rem
	//     font-weight: normal
	//   .section
	//     background: poem-white;
	//     margin: 0.4rem 0;
	//   .address
	//     padding: 0.4rem;
	//     border-bottom: 1px solid line-gray
	//     & h2
	//       color: #28a7e1
	//   .cellphone
	//     padding: 0.4rem;
	//     & h2
	//       color: #ec6762
	//   .contact
	//     display: flex
	//     h2
	//       margin: 0
	//     p
	//       margin-bottom: 0
	//   .icon
	//     width: 1rem
	//     & img
	//       width: 0.5rem
	//       height: auto
	//   .sub-header
	//     display: flex
	//     h2
	//       margin: 0
	//   .estab
	//     .icon
	//       padding: 0.4rem
	//     h2
	//       padding: 0.4rem
	//     overflow: hidden
	//     .each-estab
	//       width: 25%
	//       height: 1.5rem
	//       line-height: 1.5rem
	//       text-align: center
	//       border: 1px solid line-gray
	//       border-left: none
	//       float: left
	//
	//   .intro
	//     padding: 0.4rem
	//     p
	//       text-indent: 0.4rem
	// </style>
	/* generated by vue-loader */

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"flex-view\" v-transition=\"\" _v-df9509da=\"\">\n<app-header title=\"酒店详情\" _v-df9509da=\"\"></app-header>\n  <flex-scroll-view _v-df9509da=\"\">\n    <div class=\"section\" _v-df9509da=\"\">\n      <div class=\"address contact\" _v-df9509da=\"\">\n        <div class=\"icon\" _v-df9509da=\"\">\n          <img src=\"" + __webpack_require__(201) + "\" _v-df9509da=\"\">\n        </div>\n        <div _v-df9509da=\"\">\n          <h2 _v-df9509da=\"\">地址</h2>\n          <p _v-df9509da=\"\">{{ address }}</p>\n        </div>\n      </div>\n      <div class=\"cellphone contact\" _v-df9509da=\"\">\n        <div class=\"icon\" _v-df9509da=\"\">\n          <img src=\"" + __webpack_require__(202) + "\" _v-df9509da=\"\">\n        </div>\n        <div _v-df9509da=\"\">\n          <h2 _v-df9509da=\"\">电话</h2>\n          <p _v-df9509da=\"\">010-4747515</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"section estab\" _v-df9509da=\"\">\n      <div class=\"sub-header\" _v-df9509da=\"\">\n        <div class=\"icon\" _v-df9509da=\"\">\n          <img src=\"" + __webpack_require__(202) + "\" _v-df9509da=\"\">\n        </div>\n        <h2 _v-df9509da=\"\">酒店设施</h2>\n      </div>\n      <div _v-df9509da=\"\">\n        <div class=\"each-estab\" v-for=\"estab in estabs\" _v-df9509da=\"\">{{ estab }}</div>\n      </div>\n    </div>\n    <div class=\"section intro\" _v-df9509da=\"\">\n      <div class=\"sub-header\" _v-df9509da=\"\">\n        <div class=\"icon\" _v-df9509da=\"\">\n          <img src=\"" + __webpack_require__(202) + "\" _v-df9509da=\"\">\n        </div>\n        <h2 _v-df9509da=\"\">介绍</h2>\n      </div>\n      <div _v-df9509da=\"\">\n        <p v-for=\"intro in intros\" _v-df9509da=\"\">{{ intro }}</p>\n      </div>\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJ9JREFUeNrsnMtPU0EUh4cqyMPEVkQWvMrSlVU3aiRc4h9g44qdNHGtNTFurXGnm+rahOJGVwo7ommEmLgT22BCogm0CjFCYmm0gqDgHJwbGzG0d+acmbmFk0xK0s6jH79z5szjtm5zc5PtWXW232Tnxx5/CPKXiCjwd1gU1zK8LIuSmRnsnjA53jrdyuKAAMwQLw4vxyWayPIyykuKw8vVJCwOCQDFJQHtBC7JoaVqApaAlOClh7CbPPRBDY0MlnC3FLKSKtkkuDiVewaIQIGS3mgGBdYPE4FQs93KErMbqOmCBTP9CFfYkJWwBKgJA2qq5JZRDm3ZGliWgiqfMR0MYFgxy1ZQTIwraUWA56pKWQzKtUti0jHnhnwAUf7y1EfLuwGVJZM0LBGnIJ855CNYkLxGZOOXihsmfQaKiVVEXKuyuKpgEfyC+dd6ZbJ82S2aOObIYx3N7ET7ARYONWx77+3iKkt/XGHp5TXMLhNi54NWWVxVYf4yhwXp8skQO9yyr+Jnv5R+sQdTBTa88B0LWMhr7AqYUFVnfYA96mtjN/qOVAUKDD4Hn4d6UB/BPCtLpteoKqjU+XYW6WiSqg/1oD4CMFpYYttFaV/q1qkQ6wjWK31LqH/3dKtyZi/SHzJlOaox6my4BSXggMKgPUVzKGFFVEYGwRzTENqLUMIKq6iq2mBerUF7iuoiVVa/7Kggj6Kwc11NTJcFdHX0v4QTw9palI4++62E1dpMc57bFWyoPWVhxyvXGuvrag/W+6UfJO0uLK/XHqzS2gZJu0ulnyrVi5SwsrKjml6kUZZiuxlKWNInJA9nv5HAGp9X2oUg3XXIyI5qfn2DPX/3FRXUq1yJTam5IamyciojuzNdZKvrOIe60M7N1wXVZnJWKstV1/X0ZxRYt18ubbWnaJ6+j8xOqbI0rvQeZDG+CJbJkUBRw1MFdn9OPQbODHbXUSpLaUZ0Db4oKMxrjgS5GtTDAMX+3IPwZDJrkAmGcAINBxDp8U9bKjvT2bTjzmlmYYU9my1h7r+730MLrKtYIwaVuEq5eLRx2/tPFlep8mTPsGRiFmzFFpi/rcjjVdBrJc8xSxwfjfkc1qjOteHoHqzdAQtcUB8s4Yoju0lVKsoCS/kUlvQtQNXLbLC26vERqEnuFY4JZYElfKYqJW9Qvq3M1QXxyw+X2vJcVWGVBgImY4BmU/YCLFhFH6gqZRyWSCOSta4qLGW56srXsqrQYAl12TozDmE1hP1U2ARTuDxiW15F5YauxS0CVcRUFTos/l+EA4B7tixrsJ9opTi+T1gQ7LMcFHoMRYclgv2QYVgk/ZNcDBFPXplyx2siHKAb6U8V8NkRBq316XvM2U+Lsv5xB11LIegnStkBKSzhDrrSCQfrwXFTymJiqUEdv2JUcUpbzNKU3aP/foMxZZUZxJMscptjukBphSXiSRQx4Gd153M6lcXE8sNBAJbXEdCNwiqbIVWm+K0UQTcoI7DKMvyYJChHx8xnDayylCLmF1BGYXkEZhyUcVhVArMClBWwKgCzBpQ1sMqADbC/F2MnbQKldbnjcWkUNJEaVLLfAgwA+3THZm7zkJcAAAAASUVORK5CYII="

/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABXdJREFUeNrsnE1W2zAQx4UvUBbdkxsknAD3BKQniFl0XXMCzAlq1l1gbmBOgHOCJjcI+y6cE1BN3piKyfhDtvwhBb2nV+KAav8yH3+NpJy9vb2Juvb3R3Au/1nK7ss+U97ayJ59/Z2k4gTaWRUshBRi/1IxzqvsgYSWnSQsCQosKamBRNuDBBaeFCwJCiCtmN/fo+tBX8h+xfzOkwQWOA8L3Q5cac64WSQhJAQqxK9Y9utTAOaR1zED6gGsiIKCJq/tZAd3vSFvrSTI2FnLkg8HseYXcbmQg1QS48CSHsnl7y5lygMsdKcNCebfdLMbA2yPVrlzyQ2pNLhtIwPQCp+USzCmM5ZVwFKD8at86C7xBsBvlddzaXGRE7Dkg/jEqjo9mASdI/y9cvkO/x/rLYs+RGcVLoFtGOiJC7DOiQsaCcboys/KpQvb3dFDJV4001krJO4YovB1QpQabWilMcmOy09Y5S0m1hXYDEt1vVkP1pUTrXXlCqyLnv4fZxT8hkxZfPHZmsEi2dFUU4P6q7WwMGOpD2DUsrDiqpZ9Upsti6r2a1NaSI6zYJR7bDustMJt2oKa4YegzjsfbC7XeJjeU6q0DYydEFBb2xczvJJYMkcX6mJVqp7amo6FY8OKmXld20bBhChO3YCFZZW18t4KLaRNmxEVn7mis9QW1bw+eVFKLcCEdeVMDHPOsjhrSlqMm9XEMDdgMdZ1pTtfxPhnWopM0rJMWReVIr6TsNC61PW/NvVz55JFVaWU1s/vdIQqTmueiDuHTsJCEdnVHY+sy+bM6NVYR0yCvdbqMlrXvXLJ6uX8JgsWQUd3jMTxcn7iJCy0DmpNqWbNiwJf4Y4b5yyLc8cLoVHEQ91Fg/ujbcB01g2XjHWEGsASEr8KYAtbYJ012QevzPFAWL6Qy5doOU3HAGjq5l74AHydMWywrEKsUuvIdOIXbsx9Jhkys8HCtJfvMbtxD6sb8LfMGIFTsEoedq4jWFHw+gywSQf9VrBKdvdd6+gnBdiaCfqTXC7TCvANA/6t7p7UkhMd4OrBlGr3nWDhg4KF0f3vN033z9cAa3WACuefIHUgacDPAPxwjKbLvvzOsPDm6IGDtsA48NDglEdUZ2WYZGLBnztSpUqK4+0Gh1VhGW2AgTVk4vg0Gnt+iPxdKvS2TUEJqfEynTFYhoGdY3a9LrEMeC8t3LPiuB8ABus5F8dnktTxoiZx1igsk8BqINS1o1innMYNS8Ct8W92g8HqAVjT07RF2+L0Ka/J4gnjsnsElg4GqwLYPc4AREtoAfa5iRiEhcw7LqFwm1h6g1UBrPPBTZQGM/F/PTJDWZC3GKvYQzavu89eYfUJzPA9lkmOD/fZO6wKHTY5hV6i895dchBYFTdSG4wnAuxwUNUb6iYwE9Kz1POp1bJK7jMZ1LJI2k6JDJhctVTeZ0pE8aU3wieXYRbbk1rWn4nVsqh0WHojmXrxJRrbqdayUMmr9+d7I9+ML46Lfz8lsGwi5xI/JB5v5E8vl90XHzeQQIOdzrsJbFNSP7Dcm4jJB0wGgjj2MtZRYZwlqKp+MwlYSsq+FMcHoWBvxWYEK6MBPh1cOjSceiSCr2VpTZQ73keuyBs4aD/zxMQaxjGoO90SeSFw7gaxLBogAWTKz9HoAb4GWozyYs3EMiirbHrWZSBK73GqM46Cb+kSS6wKcPX1ytq8yWYFLFK9iARfMX1FoImJmIZuvlBL01bBUh4iFHyFs2jPGHOyqvkmTuBn6O4L1FVXzFiHUpJ1sIgOikT1GmHRirhXTLOE0PvKhEMR0FpYBFqAvY+vWnivuVkPi0kExZfPXrSAkiuSYYOv32v7TsFi4pHaOR21QxiN6mj/BBgARJjcISernUcAAAAASUVORK5CYII="

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(204)
	__vue_script__ = __webpack_require__(206)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\HotelOrderForm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(207)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\HotelOrderForm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(205);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-033b906c&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelOrderForm.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-033b906c&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./HotelOrderForm.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html[_v-033b906c],\nbody[_v-033b906c] {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli[_v-033b906c] {\n  list-style: none;\n}\nul[_v-033b906c] {\n  padding-left: 0;\n}\n.view[_v-033b906c] {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter[_v-033b906c] {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave[_v-033b906c] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green[_v-033b906c] {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box[_v-033b906c] {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div[_v-033b906c] {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input[_v-033b906c] {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden[_v-033b906c] {\n  display: none;\n}\n.poem-mask[_v-033b906c] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view[_v-033b906c] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon[_v-033b906c] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container[_v-033b906c] {\n  padding-bottom: 1rem;\n}\n.section[_v-033b906c] {\n  background: #fff;\n  margin-bottom: 0.4rem;\n}\n.section > div[_v-033b906c] {\n  padding: 0.6rem 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.section[_v-033b906c]:first-child {\n  padding: 0.4rem;\n}\n.section:first-child h1[_v-033b906c] {\n  margin: 0;\n}\n.section img[_v-033b906c] {\n  display: block;\n  float: right;\n  width: 0.8rem;\n  position: relative;\n  top: -0.2rem;\n}\n.section input[type=text][_v-033b906c] {\n  height: 0.5rem;\n  border: none;\n  width: 60%;\n  font-size: 0.4rem;\n}\n.right[_v-033b906c] {\n  float: right;\n}\n.house-count button[_v-033b906c] {\n  width: 0.5rem;\n  height: 0.5rem;\n  vertical-align: middle;\n  background: none;\n  border: 1px solid #dbdbdb;\n  font-size: 0.4rem;\n  outline: none;\n}\n.day[_v-033b906c] {\n  color: #55b66f;\n  display: inline-block;\n  float: right;\n}\n.notice[_v-033b906c] {\n  color: #a0a0a0;\n  margin-top: 1.5rem;\n  padding: 0 0.4rem;\n}\n.footer[_v-033b906c] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 0.5rem;\n  width: 100%;\n  background: #fff;\n}\n.footer input[_v-033b906c] {\n  background-color: #f7b52b;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 0.5rem;\n  width: 4rem;\n  color: #fdfdfd;\n  vertical-align: bottom;\n  border: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.footer .price[_v-033b906c] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  padding-left: 0.4rem;\n  color: #a0a0a0;\n}\n.footer .price span[_v-033b906c] {\n  color: #f00;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/HotelOrderForm.vue","/./src/views/src/views/HotelOrderForm.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HC;EACE,qBAAA;CD8HH;AC7HC;EACE,iBAAA;EACA,sBAAA;CD+HH;AC9HG;EACE,uBAAA;EACA,iCAAA;CDgIL;AC/HG;EACE,gBAAA;CDiIL;AChIK;EACE,UAAA;CDkIP;ACjIG;EACE,eAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;CDmIL;AClIG;EACE,eAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;CDoIL;ACnIC;EACE,aAAA;CDqIH;ACnIG;EACE,cAAA;EACA,eAAA;EACA,uBAAA;EACA,iBAAA;EACA,0BAAA;EACA,kBAAA;EACA,cAAA;CDqIL;ACpIC;EACE,eAAA;EACA,sBAAA;EACA,aAAA;CDsIH;ACrIC;EACE,eAAA;EACA,mBAAA;EACA,kBAAA;CDuIH;ACtIC;EACE,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,0BAAA;EAAA,4BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;CDwIH;ACvIG;EACE,0BAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,oBAAA;EAAA,gBAAA;MAAA,YAAA;UAAA,QAAA;CDyIL;ACxIG;EACE,oBAAA;EAAA,gBAAA;MAAA,YAAA;UAAA,QAAA;EACA,qBAAA;EACA,eAAA;CD0IL;ACzIK;EACE,YAAA;CD2IP","file":"HotelOrderForm.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container {\n  padding-bottom: 1rem;\n}\n.section {\n  background: #fff;\n  margin-bottom: 0.4rem;\n}\n.section > div {\n  padding: 0.6rem 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.section:first-child {\n  padding: 0.4rem;\n}\n.section:first-child h1 {\n  margin: 0;\n}\n.section img {\n  display: block;\n  float: right;\n  width: 0.8rem;\n  position: relative;\n  top: -0.2rem;\n}\n.section input[type=text] {\n  height: 0.5rem;\n  border: none;\n  width: 60%;\n  font-size: 0.4rem;\n}\n.right {\n  float: right;\n}\n.house-count button {\n  width: 0.5rem;\n  height: 0.5rem;\n  vertical-align: middle;\n  background: none;\n  border: 1px solid #dbdbdb;\n  font-size: 0.4rem;\n  outline: none;\n}\n.day {\n  color: #55b66f;\n  display: inline-block;\n  float: right;\n}\n.notice {\n  color: #a0a0a0;\n  margin-top: 1.5rem;\n  padding: 0 0.4rem;\n}\n.footer {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  align-items: center;\n  font-size: 0.5rem;\n  width: 100%;\n  background: #fff;\n}\n.footer input {\n  background-color: #f7b52b;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 0.5rem;\n  width: 4rem;\n  color: #fdfdfd;\n  vertical-align: bottom;\n  border: none;\n  flex: 1;\n}\n.footer .price {\n  flex: 2;\n  padding-left: 0.4rem;\n  color: #a0a0a0;\n}\n.footer .price span {\n  color: #f00;\n}\n","\n@import \"../main.styl\"\n  .container\n    padding-bottom: 1rem\n  .section\n    background: poem-white\n    margin-bottom: 0.4rem\n    & > div\n      padding: 0.6rem 0.4rem\n      border-bottom: 1px solid line-gray\n    &:first-child\n      padding: 0.4rem\n      & h1\n        margin: 0\n    & img\n      display: block\n      float: right\n      width: 0.8rem\n      position: relative\n      top: -0.2rem\n    & input[type=text]\n      height: 0.5rem;\n      border: none;\n      width: 60%;\n      font-size: 0.4rem;\n  .right\n    float: right\n  .house-count\n    & button\n      width: 0.5rem\n      height: 0.5rem\n      vertical-align: middle\n      background: none;\n      border: 1px solid line-gray\n      font-size: 0.4rem\n      outline: none\n  .day\n    color: app-green\n    display: inline-block\n    float: right\n  .notice\n    color: text-gray\n    margin-top: 1.5rem\n    padding: 0 0.4rem\n  .footer\n    display: flex\n    position: fixed\n    bottom: 0\n    align-items: center\n    font-size: 0.5rem\n    width: 100%\n    background: poem-white\n    & input\n      background-color:app-yellow\n      height: 1rem\n      line-height:1rem\n      text-align:center\n      font-size:.5rem\n      width: 4rem\n      color:app-white\n      vertical-align: bottom\n      border: none\n      flex: 1\n    & .price\n      flex: 2\n      padding-left: 0.4rem\n      color: text-gray\n      & span\n        color: red\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//     <flex-scroll-view>
	//       <div class="container">
	//         <div class="section">
	//           <h1>{{ hotelName }}</h1>
	//           <p>时间：{{ checkInTime }}入住-{{ checkOutTime }}离店<span class="day">{{ day }}晚</span></p>
	//           <p>房型：{{ houseType }}</p>
	//         </div>
	//         <div class="section">
	//           <div class="house-count">房间数
	//             <div class="right">
	//               <button @click="minusHouseCount">-</button>
	//               {{ houseCount }}
	//               <button @click="addHouseCount">+</button>
	//             </div>
	//           </div>
	//           <div>保留到
	//             <div class="right">
	//               >
	//             </div>
	//           </div>
	//           <div>入住人
	//             <input type="text">
	//           </div>
	//         </div>
	//         <div class="section">
	//           <div>联系人
	//             <input type="text">
	//             <img src="../asset/images/contacter-green.png" alt=""></div>
	//           <div>联系方式
	//             <input type="text">
	//             <img src="../asset/images/phone-device.png" alt=""></div>
	//         </div>
	//           <div class="notice">
	//             <h2>温馨提示：</h2>
	//             <p>请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>
	//           </div>
	//       </div>
	//       <div class="footer">
	//         <div class="price">订单金额：<span>{{ orderPrice }}</span></div>
	//         <input type="submit" value="提交订单">
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	// <script>
	module.exports = {
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    return {
	      hotelName: '北京首都大饭店',
	      checkInTime: '8月13日',
	      checkOutTime: '8月14日',
	      day: 1,
	      houseType: '普通标准间',
	      houseCount: 1,
	      saveTo: '',
	      livePerson: '',
	      contactPerson: '',
	      contactWay: '',
	      orderPrice: 66666
	    };
	  },
	
	  methods: {
	    addHouseCount: function addHouseCount() {
	      this.houseCount += 1;
	    },
	    minusHouseCount: function minusHouseCount() {
	      if (this.houseCount < 2) {
	        alert('至少要定一间房哦');
	        return;
	      }
	      this.houseCount -= 1;
	    }
	  }
	};
	// </script>
	// <style scoped lang="stylus">
	//   @import "../main.styl"
	//     .container
	//       padding-bottom: 1rem
	//     .section
	//       background: poem-white
	//       margin-bottom: 0.4rem
	//       & > div
	//         padding: 0.6rem 0.4rem
	//         border-bottom: 1px solid line-gray
	//       &:first-child
	//         padding: 0.4rem
	//         & h1
	//           margin: 0
	//       & img
	//         display: block
	//         float: right
	//         width: 0.8rem
	//         position: relative
	//         top: -0.2rem
	//       & input[type=text]
	//         height: 0.5rem;
	//         border: none;
	//         width: 60%;
	//         font-size: 0.4rem;
	//     .right
	//       float: right
	//     .house-count
	//       & button
	//         width: 0.5rem
	//         height: 0.5rem
	//         vertical-align: middle
	//         background: none;
	//         border: 1px solid line-gray
	//         font-size: 0.4rem
	//         outline: none
	//     .day
	//       color: app-green
	//       display: inline-block
	//       float: right
	//     .notice
	//       color: text-gray
	//       margin-top: 1.5rem
	//       padding: 0 0.4rem
	//     .footer
	//       display: flex
	//       position: fixed
	//       bottom: 0
	//       align-items: center
	//       font-size: 0.5rem
	//       width: 100%
	//       background: poem-white
	//       & input
	//         background-color:app-yellow
	//         height: 1rem
	//         line-height:1rem
	//         text-align:center
	//         font-size:.5rem
	//         width: 4rem
	//         color:app-white
	//         vertical-align: bottom
	//         border: none
	//         flex: 1
	//       & .price
	//         flex: 2
	//         padding-left: 0.4rem
	//         color: text-gray
	//         & span
	//           color: red
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"flex-view\" v-transition=\"\" _v-033b906c=\"\">\n  <flex-scroll-view _v-033b906c=\"\">\n    <div class=\"container\" _v-033b906c=\"\">\n      <div class=\"section\" _v-033b906c=\"\">\n        <h1 _v-033b906c=\"\">{{ hotelName }}</h1>\n        <p _v-033b906c=\"\">时间：{{ checkInTime }}入住-{{ checkOutTime }}离店<span class=\"day\" _v-033b906c=\"\">{{ day }}晚</span></p>\n        <p _v-033b906c=\"\">房型：{{ houseType }}</p>\n      </div>\n      <div class=\"section\" _v-033b906c=\"\">\n        <div class=\"house-count\" _v-033b906c=\"\">房间数\n          <div class=\"right\" _v-033b906c=\"\">\n            <button @click=\"minusHouseCount\" _v-033b906c=\"\">-</button>\n            {{ houseCount }}\n            <button @click=\"addHouseCount\" _v-033b906c=\"\">+</button>\n          </div>\n        </div>\n        <div _v-033b906c=\"\">保留到\n          <div class=\"right\" _v-033b906c=\"\">\n            &gt;\n          </div>\n        </div>\n        <div _v-033b906c=\"\">入住人\n          <input type=\"text\" _v-033b906c=\"\">\n        </div>\n      </div>\n      <div class=\"section\" _v-033b906c=\"\">\n        <div _v-033b906c=\"\">联系人\n          <input type=\"text\" _v-033b906c=\"\">\n          <img src=\"" + __webpack_require__(208) + "\" alt=\"\" _v-033b906c=\"\"></div>\n        <div _v-033b906c=\"\">联系方式\n          <input type=\"text\" _v-033b906c=\"\">\n          <img src=\"" + __webpack_require__(209) + "\" alt=\"\" _v-033b906c=\"\"></div>\n      </div>\n        <div class=\"notice\" _v-033b906c=\"\">\n          <h2 _v-033b906c=\"\">温馨提示：</h2>\n          <p _v-033b906c=\"\">请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>\n        </div>\n    </div>\n    <div class=\"footer\" _v-033b906c=\"\">\n      <div class=\"price\" _v-033b906c=\"\">订单金额：<span _v-033b906c=\"\">{{ orderPrice }}</span></div>\n      <input type=\"submit\" value=\"提交订单\" _v-033b906c=\"\">\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLxJREFUeNrsm19y2jAQxhWm7/gCHbgBzgnwWx/jyQVwTxBygpAT1D1BnQu05rFPNTeAG8ANYHqAVJr5NGxUSPxHK9mGndF47AQZ//ytdiUtN6+vr8Kn3f9+HMtDJJs+UlvLtpWt+Pnl21p4thsfsCSgQB4S2eayjUp+7CBbJlsqwW0vApYEtQCkIbm8UuqBkvbkulJaiCP9/xfVh4S27yUsCSmEMia4tJNNgcvLPLT8fAzIU6K0RH427xUs+aBKGTnUcYAqsgZ9pQT6o+wr7QUsKOIXTjfKpWy4j+xXwZ7h9Lvsc95pWHC9Aop6kQ+UWO5f9fcDp1/rqtU7LES8NaLdSj5IxBgwnnB6y5liDBhfxAKg1EAec91EwlH3WeKUVVkDpretEswHnCYOQnyCwDGBa3ZKWQudP0lQBffAi5eRGvfuDKyY+4ufsBTqGiGwtB8WUgUV/XYuVGWoKydu2Qll6aiXC/eWG9+h9bC0CxQeYOl7TroCa4yj85UBuOKBJMSthzXCF/e1/qTvG3QpKe2dXWF5hrUhSyk+bGq4Y6th7Y2B3plhmkUH+9bDKjhznZI53qorbpgbUx6XFnMmxNZhIWVQyzJDzhWAMy541ylYZFLreiKt77Xk2irjgpWRFYCFA1WpsWpmvKhuwEIk0hsIT1xLJgAViOMK6QvnSgdbUorNA73cW3AAA6hCHJevWXd4uDP4BEnq0DYwAmoCl4+5l69ZYeHLRwaw2AKo0AAVuZi4u9qRpioQcM951aiFfpSr6a0vZ6CcwSIPqyLVA7mkoGUf1StASXMknUOSpccui0N8VNGECO9T408rzCvXZG6pWijeVtDsoErny9Y3vorZkHErtdzL9vmDf/+rhkCosBCezLUbBnClEG1asQsVKLYY/5xXA7qootGA5uL8RsJHqwSmK1KXVO7opBqQszBkjPlabDzoBg+o1LGuMkBjWqMrASPxf/XggtNNrcMi4Z2WQm4wJclsRi/kbAlZbdDQ5hwuahUW3nwmjkW17G/bUPGMXH5GhU37YBl1Ul7CO6ClRGkb5GLb1sAySha9VBKfcM9MHGtYrWT5jWEZoNhLFSuqLCfzx8aVzY1gEVDOy6wrBJuMuGWjMsrasIx53m0bfi5S8qXWdslasFxXCVsCtoZLquAT1hlTBzXHgpSE59aDgkUANRI1C3XrLP7pKLOxncdwGpSkFx7v6mzTDSqqKsbk9yD8bKI2BaZc8RmnKQIAm7K0+3n7GZsFYAtxXOZOWWBBtnoXJRXdNr0LNKPFJDaVpcenhc/s3JK61Fx1aTyXHVhUVR2KftbVVVZZCYmEvTCMuSsDXDNYoD41Bvi+WGqIobGydIqw7PpYdUJduTiWR8U2YGnqueinlS6+G5RwwUnPYWVWYAlSo9k3FzSyeu2KkQ1Yhei3FWXUdYX1dogJa8HCJHNEMt4+m14MnNZVlqa86TkonaDuIJKoDqzIoN532+I4rgNrbHTSdytswCouTFlRE1jiwmAFdWBdSiQ0I+KkydzwIqzMDGVwJsfSacPhEsGdWww8p6zgwtIGbav3xuurG1awK6wK9umDvwcefxjuw4ImsFQY/XPV1Puw9oLpR9kdsZNpxD8BBgBS5CUsTQhRaAAAAABJRU5ErkJggg=="

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjlJREFUeNrs3MFNwzAUBmAX9d5uQJig3aDhxLViATJCmYAwAXSDTIB65YTZgE5A2IBMUN4TL6plAQLXbp7F/yTL+ELtL86rrSYe7XY7EyMuH69LqkqjL+zDxZ2N8Y9Gh2IRUkVVTeXU6I037iOhNYNgEdKUqg2VhdMhvoKtIqRCZnt/IZ+pLAnt/WhYAsUwMyqdXLV7rdOK+ruS2T+hsmXAELCTwM+vHahSMxSH9K+U/s6k/+lnFl0lntqv0jyPlTyPNMMY7EmaZ9T3NvXMWvb3f05QMsOs5C13HEmx+uVBY/KMxhtHUqyp1G2mWK03jl/HOEFO0LIwtbHTxDhyBxnqRtPqXTOWcRZ/QyX/0lkomxyw+Baoh5CiVFCnwjoxCGABC1jAAhawEMACFrCABSxgIYAFLGABC1jAQgALWMACFrCAhQAWsIAFLGABCwGsFJHqYbZCni8dIorcsK6kYGb9EK3ZP5Q/dLSqseQVtQYJHgEsYAELWMACFgJYGrY7QUH7ybnZv467oUXuC2bW91DWfL6vyMXKy+vA+iJ4Rk2cNv9dAQsJ/uDgo1o6p91p25SrwZJkznnrVsr8r4dU/KtvQ8GpcRsiZwELERGrP3eqyHTMhTeOpFhW6ipTrMobR1KsjdSLAX8bDN1ScX8X3jjSYcnX+7r/QNnT5QA1d4DWIWu4Q46x28r+zcqZepqhVnLb9Wf+Ba3lYp4m2Ulb06q78Dboxz9N0kOrDM4pDUqeGhN+tEPHPgQYAG8asm4D4Se8AAAAAElFTkSuQmCC"

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(211)
	__vue_script__ = __webpack_require__(213)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\ScenicDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\ScenicDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2e75ad12&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicDetail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2e75ad12&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html[_v-2e75ad12],\nbody[_v-2e75ad12] {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli[_v-2e75ad12] {\n  list-style: none;\n}\nul[_v-2e75ad12] {\n  padding-left: 0;\n}\n.view[_v-2e75ad12] {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter[_v-2e75ad12] {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave[_v-2e75ad12] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green[_v-2e75ad12] {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box[_v-2e75ad12] {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div[_v-2e75ad12] {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input[_v-2e75ad12] {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden[_v-2e75ad12] {\n  display: none;\n}\n.poem-mask[_v-2e75ad12] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view[_v-2e75ad12] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon[_v-2e75ad12] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.section[_v-2e75ad12] {\n  margin-bottom: 0.4rem;\n  background: #fff;\n  color: #a0a0a0;\n}\n.brief-intro[_v-2e75ad12] {\n  padding: 0.4rem;\n}\n.link-line[_v-2e75ad12] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #dbdbdb;\n  padding: 0.4rem;\n}\n.link-line p[_v-2e75ad12] {\n  width: 90%;\n  padding: 0.2rem 0.5rem;\n  margin: 0;\n}\n.star-red[_v-2e75ad12] {\n  width: 0.5rem;\n  margin: 0 0.1rem;\n}\n.star-red[_v-2e75ad12]:first-child {\n  margin: 0;\n}\n.star-green[_v-2e75ad12] {\n  float: right;\n}\n.ticket-price[_v-2e75ad12] {\n  padding: 0.4rem;\n}\n.ticket-price .order-button[_v-2e75ad12] {\n  background: #f7b52b;\n  width: 2.2rem;\n  height: 0.9rem;\n  font-size: 0.5rem;\n  float: right;\n  border-radius: 0.2rem;\n  border: none;\n  color: #fff;\n}\n.price-kind[_v-2e75ad12] {\n  line-height: 0.6rem;\n}\n.price-kind button[_v-2e75ad12] {\n  float: right;\n  background: #fff;\n  border: none;\n  font-size: 0.5rem;\n  color: #a0a0a0;\n  top: -0.1rem;\n}\n.price-kind span[_v-2e75ad12] {\n  float: right;\n  color: #f00;\n  font-size: 0.6rem;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/ScenicDetail.vue","/./src/views/src/views/ScenicDetail.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HD;EACE,sBAAA;EACA,iBAAA;EACA,eAAA;CD8HD;AC7HD;EACE,gBAAA;CD+HD;AC9HD;EACE,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,0BAAA;EAAA,4BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,iCAAA;EACA,gBAAA;CDgID;AC/HC;EACE,WAAA;EACA,uBAAA;EACA,UAAA;CDiIH;AChID;EACE,cAAA;EACA,iBAAA;CDkID;ACjIC;EACE,UAAA;CDmIH;AClID;EACE,aAAA;CDoID;ACnID;EACE,gBAAA;CDqID;ACpIC;EACE,oBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;CDsIH;ACrID;EACE,oBAAA;CDuID;ACtIC;EACE,aAAA;EACA,iBAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;CDwIH;ACvIC;EACE,aAAA;EACA,YAAA;EACA,kBAAA;CDyIH","file":"ScenicDetail.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.section {\n  margin-bottom: 0.4rem;\n  background: #fff;\n  color: #a0a0a0;\n}\n.brief-intro {\n  padding: 0.4rem;\n}\n.link-line {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #dbdbdb;\n  padding: 0.4rem;\n}\n.link-line p {\n  width: 90%;\n  padding: 0.2rem 0.5rem;\n  margin: 0;\n}\n.star-red {\n  width: 0.5rem;\n  margin: 0 0.1rem;\n}\n.star-red:first-child {\n  margin: 0;\n}\n.star-green {\n  float: right;\n}\n.ticket-price {\n  padding: 0.4rem;\n}\n.ticket-price .order-button {\n  background: #f7b52b;\n  width: 2.2rem;\n  height: 0.9rem;\n  font-size: 0.5rem;\n  float: right;\n  border-radius: 0.2rem;\n  border: none;\n  color: #fff;\n}\n.price-kind {\n  line-height: 0.6rem;\n}\n.price-kind button {\n  float: right;\n  background: #fff;\n  border: none;\n  font-size: 0.5rem;\n  color: #a0a0a0;\n  top: -0.1rem;\n}\n.price-kind span {\n  float: right;\n  color: #f00;\n  font-size: 0.6rem;\n}\n","\n@import \"../main.styl\"\n.section\n  margin-bottom: section-margin\n  background: poem-white\n  color: text-gray\n.brief-intro\n  padding: section-padding\n.link-line\n  display: flex\n  align-items: center\n  border-bottom: 1px solid line-gray\n  padding: section-padding\n  & p\n    width: 90%\n    padding: .2rem .5rem\n    margin: 0\n.star-red\n  width: .5rem\n  margin: 0 .1rem\n  &:first-child\n    margin: 0\n.star-green\n  float: right\n.ticket-price\n  padding: section-padding\n  & .order-button\n    background: app-yellow\n    width: 2.2rem;\n    height: 0.9rem;\n    font-size: 0.5rem;\n    float: right;\n    border-radius: .2rem;\n    border: none;\n    color: #fff;\n.price-kind\n  line-height: .6rem\n  & button\n    float: right\n    background: #fff\n    border: none\n    font-size: .5rem\n    color: text-gray\n    top: -.1rem\n  & span\n    float: right\n    color: poem-red\n    font-size: .6rem\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//     <flex-scroll-view>
	//       <banner></banner>
	//       <div class="section brief-intro">
	//         <div class="stars">
	//           <img v-for="star in stars" :src="star" class="star-red"  alt="">
	//           <img src="../asset/images/star-green.png" class="small-icon star-green" alt="">
	//         </div>
	//         <p>旅游避暑胜地</p>
	//         <p>开放时间：{{ openTime }}</p>
	//       </div>
	//       <div class="section">
	//         <div class="link-line">
	//           <img class="small-icon" src="../asset/images/pinglun.png" alt="">
	//           <p>评论</p>
	//           <span>></span>
	//         </div>
	//         <div class="link-line">
	//           <img class="small-icon" src="../asset/images/ditu.png" alt="">
	//           <p>地图</p>
	//           <span>></span>
	//         </div>
	//       </div>
	//       <div class="section">
	//         <div class="link-line">
	//           <img class="small-icon" src="../asset/images/56-04.png" alt="">
	//           <p>票价</p>
	//         </div>
	//         <div class="ticket-price" v-for="ticketPrice in ticketPrices">
	//           <p class="price-kind">{{ ticketPrice.name }} <button @click="ctrlOrderDetail($index)">></button> <span>{{ ticketPrice.price }}</span></p>
	//           <div v-show="orderDetailShow[$index]" class="order-detail">
	//             <div class="gallery"></div>
	//             <button class="order-button">预定</button>
	//           </div>
	//         </div>
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	// <script>
	module.exports = {
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'banner': function banner(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    var fullStarCount = 4;
	    var emptyStarCount = 5 - fullStarCount;
	    var stars = [];
	    while (fullStarCount--) {
	      stars.push(__webpack_require__(188));
	    }
	    while (emptyStarCount--) {
	      stars.push(__webpack_require__(194));
	    }
	
	    return {
	      openTime: '09:00 - 17:00',
	      stars: stars,
	      ticketPrices: [{
	        name: '成人票',
	        price: 59
	      }, {
	        name: '老人票',
	        price: 29
	      }, {
	        name: '学生票',
	        price: 39
	      }],
	      gallery: [],
	      orderDetailShow: [0, 0, 0]
	    };
	  },
	
	  methods: {
	    ctrlOrderDetail: function ctrlOrderDetail(index) {
	      var newArr = this.deepClone(this.orderDetailShow);
	      console.log(newArr);
	      newArr[index] = !this.orderDetailShow[index];
	      this.orderDetailShow = newArr;
	      console.log(this.orderDetailShow[index]);
	    },
	    deepClone: function deepClone(arr) {
	      var result = [];
	      for (var i = 0; i < arr.length; i++) {
	        result[i] = arr[i];
	      }
	      return result;
	    }
	  }
	};
	// </script>
	// <style scoped lang="stylus">
	//   @import "../main.styl"
	//   .section
	//     margin-bottom: section-margin
	//     background: poem-white
	//     color: text-gray
	//   .brief-intro
	//     padding: section-padding
	//   .link-line
	//     display: flex
	//     align-items: center
	//     border-bottom: 1px solid line-gray
	//     padding: section-padding
	//     & p
	//       width: 90%
	//       padding: .2rem .5rem
	//       margin: 0
	//   .star-red
	//     width: .5rem
	//     margin: 0 .1rem
	//     &:first-child
	//       margin: 0
	//   .star-green
	//     float: right
	//   .ticket-price
	//     padding: section-padding
	//     & .order-button
	//       background: app-yellow
	//       width: 2.2rem;
	//       height: 0.9rem;
	//       font-size: 0.5rem;
	//       float: right;
	//       border-radius: .2rem;
	//       border: none;
	//       color: #fff;
	//   .price-kind
	//     line-height: .6rem
	//     & button
	//       float: right
	//       background: #fff
	//       border: none
	//       font-size: .5rem
	//       color: text-gray
	//       top: -.1rem
	//     & span
	//       float: right
	//       color: poem-red
	//       font-size: .6rem
	// </style>
	/* generated by vue-loader */

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"flex-view\" v-transition=\"\" _v-2e75ad12=\"\">\n  <flex-scroll-view _v-2e75ad12=\"\">\n    <banner _v-2e75ad12=\"\"></banner>\n    <div class=\"section brief-intro\" _v-2e75ad12=\"\">\n      <div class=\"stars\" _v-2e75ad12=\"\">\n        <img v-for=\"star in stars\" :src=\"star\" class=\"star-red\" alt=\"\" _v-2e75ad12=\"\">\n        <img src=\"" + __webpack_require__(215) + "\" class=\"small-icon star-green\" alt=\"\" _v-2e75ad12=\"\">\n      </div>\n      <p _v-2e75ad12=\"\">旅游避暑胜地</p>\n      <p _v-2e75ad12=\"\">开放时间：{{ openTime }}</p>\n    </div>\n    <div class=\"section\" _v-2e75ad12=\"\">\n      <div class=\"link-line\" _v-2e75ad12=\"\">\n        <img class=\"small-icon\" src=\"" + __webpack_require__(216) + "\" alt=\"\" _v-2e75ad12=\"\">\n        <p _v-2e75ad12=\"\">评论</p>\n        <span _v-2e75ad12=\"\">&gt;</span>\n      </div>\n      <div class=\"link-line\" _v-2e75ad12=\"\">\n        <img class=\"small-icon\" src=\"" + __webpack_require__(201) + "\" alt=\"\" _v-2e75ad12=\"\">\n        <p _v-2e75ad12=\"\">地图</p>\n        <span _v-2e75ad12=\"\">&gt;</span>\n      </div>\n    </div>\n    <div class=\"section\" _v-2e75ad12=\"\">\n      <div class=\"link-line\" _v-2e75ad12=\"\">\n        <img class=\"small-icon\" src=\"" + __webpack_require__(217) + "\" alt=\"\" _v-2e75ad12=\"\">\n        <p _v-2e75ad12=\"\">票价</p>\n      </div>\n      <div class=\"ticket-price\" v-for=\"ticketPrice in ticketPrices\" _v-2e75ad12=\"\">\n        <p class=\"price-kind\" _v-2e75ad12=\"\">{{ ticketPrice.name }} <button @click=\"ctrlOrderDetail($index)\" _v-2e75ad12=\"\">&gt;</button> <span _v-2e75ad12=\"\">{{ ticketPrice.price }}</span></p>\n        <div v-show=\"orderDetailShow[$index]\" class=\"order-detail\" _v-2e75ad12=\"\">\n          <div class=\"gallery\" _v-2e75ad12=\"\"></div>\n          <button class=\"order-button\" _v-2e75ad12=\"\">预定</button>\n        </div>\n      </div>\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNrsnFFy2jAQhokn77QnCDlBuAHOUx7x9AIhJwg9QekJSk8QuEBLH/sUcwPnBIUbwAnobmadUYRkS5ZirRGa0dhxhL369GtXtixfHA6H3jmZpeSM4AzrDCt0uuRkzJe/X1PYzCCPhMNrPPbr7kce2r4LLg4eQE1g81RR5AGALaKHRYp6Nih6G1JhXHzWTHFsaVguHlikKtFHbSFfg4KwW17T32UaUflolSWrBZ35BndoO+OirqA+S+GrtgBooCiH0K5C+66Em6ocy52mskxVxUldSQdUxUZdQZRlqyou6ko6oioW6mpdWU1VxUFdSYdUFVxdrSrLVVWh1dW2siaeVBFEXa0pC9SACvrnqqoKdV2Xt0mnoCzfamhdXa0oy7eqQqkraQnUXDo893T6o/PS9fgqCwz8BJshZdxPaXujKL6HPAAF7DxdF5XUV/z7BTJeI6dtgdnlusawBCADyiWYkeU1v4PBM4/KxXN9s/zZWgC4oVwL8ggWQUklpYw81e0nGDT9gK6O3fHR0+lEkJjzEuI7WDTDMtfI2ibt5Vajlvsw50u+aqhQv4+6THFm6Q2WwVSUrhVEIDsO83uaOwfZjdj2lodXWDWOslH/7kKy9MP7ckY6k0Ch9DKOKvGZqMHzCjWuBC79cpwlj02mpw7KACTWf2oyKB32zumIQwlrJRV6JIcfbaL6Px7BAskV5MjF9BQrMM3I4I/YDTO6RYgamAYUcpkkUmRIYwZWASpFPokilEYJrA6UMhrGCMwElHboEBMwU1BGj2jgZAvY3EuHl/T+VNdBqZ5WLGlQvqt9RBMLsCZ1MnqsTCeQX1u8pwtGAcoY1ikBc+klVhMWXQfm6k6sZ3e6CsyH3200FdY1YL4CVON5wwpgE2agJr4iudMkqwZYxkxYma8hj/OMdNfGWi72Jh5knkqHCmZ8ihp724PVO35+zxqWwt4zLK6wUsknbJj5qE2VvSGVtWbq19fBlUUzuuLLZBumsES7rsju1pU1rDCKKyyV3UFg5Uxh5RxgDTqqrEFwZXGLhBV2Be+GXCOhyr5GsBp/BIMiSt93F6SnBBlVCAeUK0/fc8Bzle9d9dF+23fMLn11QdeROxiPgObSUAT3x/SSLc64rDxHxLxTsDSfVJETQvsNZV0+tVKEhOV0T2gAaSuprEdlnxtCK1ydfOJJWXvT/o9vFUPG7vSsAYUgbmm5yq0mcJTQVqYrKsi+vcvwwUVZIxtVUaVQSfcV0eqdWmg/rVDhmHzasid8PMPQyVu/299oOYpi4ZJ2MQBFzXkFpK2p89YEATFpp97p9/J0vdXCqEtP/mqngTSl3NdAmtkMCwjoioYXMwU0bJCMoMwV0HaKemza6IZiKo03gfS2YsFhRI6/XWhWhOA+ruWZKqBNXCrZeFUYGHJQ+JyCDNJB0rW462OiusZZkIrG0v8+29jiAst0cdGHQGoATU7Wi66c1huCgXlNVDGNUr6hVQWU114ANqWtdUPpXg5b6EbojghxEfIpBEVstC0VGvSFFL5o1WfFmP4LMAAJiK1wigiVPAAAAABJRU5ErkJggg=="

/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArNJREFUeNrsnNFNAkEQhm/JPZpoB2oFQgWcHdiB+OSjWIHXgfCmT2IFUgJ2IB2cHWD0HfePAzlx7zjCwex6/59sCBAT+JydnRlmx8zn84iqphYREBZhaSt2vfj1aNr24ajBXN4Oruez1RfNwsFbQIAzsOvCrkPaUfRuV2qhjX7BEkuaEJJTrzAgWFpLLIqgitWVHReZz4cIZnZJJmvVicVHFZkfiM4aBATuqG/XseO9HizLFcJf5R1bk5RzS2erxuOKs16bCgqSkOGialDaWFA5YJm4obWwMvpypjuERViERViERREWYREWYYWvuKZMHaWcG8+/K8rEqHi+qVmWBZUEAApCjSrlNqyuI21YMOtpILAGqj5LimVt2Y4+y/lb4N4dvECbMHSgCIuwCEtNGWFV12g17CCs8tP91K5zuzr2+TgmllJgWX471pVI4xfcfgA+qL9NYBrXAArNFC8BGEpXHnuap2FI7ZQn2qEDzPsjEFhbpWR1JNKZbMWe56CybbuDanHwcmqkjOApwiIswvJHTHfKA24cWglCDnuIpYRVDAqh0N0i+rfPuQ1LtNqxnBDWBmkcYfE0JCzCCh3WCbFUh9VjjGVgMN0qsLoSuTYVFEKGses93DdEAd915Re3okbRbi8+bdTZsoepAGWXM4eAlebC+n0LfV1JFWCSfjwpGl0H2xANXlo1dNwWnYjp+wxqiF7UlvxXE1+BeQDq2TLqLx28dPDiBBgqQXMCUwYFF4G74svowLhGQsmHbu/wgwyivxe2f/mwNaBuo59e1l1oVtT+bTTmZ5XccF8Awyl8X/DnapMBjNawsTXAIt9AqeaGuYNlGgIo9UR6A2BeDOVQrzpUAObN9BIvSjQlwLwa8+JNPcsBzLt5OMa30ZtySiLWGvtWkTCcUxrgNiSsf6ZvAQYAFLH6dujJlzQAAAAASUVORK5CYII="

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMhJREFUeNrsnF1IFUEUx8e6oKJ4NaisICUNA0mNHiroCxSK6sG+LOil6CUiKumloIcegnoz+gAffQgyiZCIMCiyqFQMLC0oivyAxHooDSUvabdz7j0r696d2dm99+reuXPgz+qsszE/5pw5e3amjHA4zLTJ2QKNQMPSsDQsDUvD0rA0Ag1Lw9KwNCw1LaDioPY9ri+CywnQJlNzx/0dDRfieW6GCi/SAGczXI6CtoOKBJPgD+gYQLubNm4IcA6BrpiaLoOOg0ocvCUbdIfgqumGMLizcKkFVYKC6BF0y3CrDtA2WW8CNYFK4blBapuA2TaVcm5oiTcIJ1/w5/UwyGs40+DnZpf/1AHQiOn3n6Cv8LyQb2GRS+wG7QSVkavIGs6GhaaZ5sZugxotbdOgPgA24QtYLoJxsu0zBnubdgT2xs4tA3MAB13kMGgjaKnHWZAMW8lpx5m6HDSUdFiWYJzv43UjU3AvL+GroSkYY7wp9jkcO6sDtdi0B+OOWaZ4s95DME624UD+kRvJ2lvQKc69LmvcCkjGm7XzHIyd7CSoF3QetMdFv1LBvRzQGBcWzZxzPgzGTraYrt0uYeW6iWkBE6h2F1mw32wvqTSBcSvL9t0QQPWkMCi0KlKuh77rBG44Gxa5XhVLXysX5FsxM+sGS28r4LQH7WAVpzksXMSqOdlAICZmaWM1MnELYU0qNGhMMq/TS7IbWyWTPuA066R3ORUMK6ZGjWq1i36FnPYs68xqVmhm1QoGLjJc+Soc3dBr8d6ndgR0D3TaQ99dTumDEeBHFVrZvFqZU/pgwHqnF0T7YqA5fTBgtWpWkZWvUBS3IrDwC4lmNbNAcNMHc1I6qtCg8aPDN9C4y34bROmDGdaAIqCwYooVFCxctrvsu8zRDcnaFHzXe+Syb64ofTDDalTIDc+AHoBueehbx0sfZmBBkB9k0V0mKtgikpe8aysvfbBWHYb1gmhbms6xg9WuWdnGrUw7WE2aVcSq7dKHWbAgbr1k0Z0pqtm0y7+vkXFDtEGFIGEhED/I9LnsVy7jhszDg/1sLyxXWSuQnVkqFQMx38JP+vs9JLYVlvQhMwYWFQNVOQu8hUU/56/w0HeNNcjzvu581wtibK7Fg9Wp2bCPlt8DPFjP0xwU7lzutbTl2cJK82IgxuuLdjdEX6RHFRo8FgIf0tUpeb1kM6scYanyEQPTACwEXgU94wAyYGLR8CnnOSHRtsdWltp7tsxmbFjDMR1k0W3bn1i0ONgr+Ywfwg24kIipkG+NEyRrcRNPUQSYeIu3YcMQx/udNtRiMTA7hcCECcIXesVp4Sxgr2gyLGHOeyIioBhz3n2MU7XK53B+gT6AngjijdVjMulAk92hJoSNlZffmJybDz45wWrzGSwMxrhLpsdlvLFaFoFCMP10nRSdCIusFA4xC/e+D8wjnBAF4y7Qa5dwzDNkShaIZ1gE7C+bu8MC4xRv3lNQHpGAOUkgQokAIjIZCFgMLElivBkSBWMLEHRDPPUwxTsTmEyTgXUT1JCgeDPGCca+ARKXG5IrfvEwu6zBuDsVgMQNi4D1OKyMIZNLNdHPKQckIbAIGBb/cZNrJc0SzMNa06VKkaH/N0l504cGNCwNS8NKJfsvwABx3GqzTop8lAAAAABJRU5ErkJggg=="

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(219)
	__vue_script__ = __webpack_require__(221)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\ScenicOrderForm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(222)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\ScenicOrderForm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(220);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ea4c8fe&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicOrderForm.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ea4c8fe&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScenicOrderForm.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html[_v-2ea4c8fe],\nbody[_v-2ea4c8fe] {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli[_v-2ea4c8fe] {\n  list-style: none;\n}\nul[_v-2ea4c8fe] {\n  padding-left: 0;\n}\n.view[_v-2ea4c8fe] {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter[_v-2ea4c8fe] {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave[_v-2ea4c8fe] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green[_v-2ea4c8fe] {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box[_v-2ea4c8fe] {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div[_v-2ea4c8fe] {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input[_v-2ea4c8fe] {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden[_v-2ea4c8fe] {\n  display: none;\n}\n.poem-mask[_v-2ea4c8fe] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view[_v-2ea4c8fe] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon[_v-2ea4c8fe] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container[_v-2ea4c8fe] {\n  padding-bottom: 1rem;\n}\n.section[_v-2ea4c8fe] {\n  background: #fff;\n  margin-bottom: 0.4rem;\n}\n.section > div[_v-2ea4c8fe] {\n  padding: 0.6rem 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.section[_v-2ea4c8fe]:first-child {\n  padding: 0.4rem;\n}\n.section .icon[_v-2ea4c8fe] {\n  display: block;\n  float: right;\n  width: 0.8rem;\n  position: relative;\n  top: -0.2rem;\n}\n.section input[type=text][_v-2ea4c8fe] {\n  height: 0.5rem;\n  border: none;\n  width: 60%;\n  font-size: 0.4rem;\n}\n.banner h1[_v-2ea4c8fe] {\n  font-size: 0.6rem;\n  font-weight: normal;\n  padding-left: 0.4rem;\n}\n.banner-img[_v-2ea4c8fe] {\n  width: 100%;\n  height: 4rem;\n  overflow: hidden;\n}\n.banner-img img[_v-2ea4c8fe] {\n  width: 100%;\n}\nh2[_v-2ea4c8fe] {\n  padding: 0.4rem;\n  font-size: 0.5rem;\n  font-weight: normal;\n}\nh2 img[_v-2ea4c8fe] {\n  vertical-align: bottom;\n  margin-right: 0.3rem;\n}\n.right[_v-2ea4c8fe] {\n  float: right;\n}\n.house-count button[_v-2ea4c8fe] {\n  width: 0.5rem;\n  height: 0.5rem;\n  vertical-align: middle;\n  background: none;\n  border: 1px solid #dbdbdb;\n  font-size: 0.4rem;\n  outline: none;\n}\n.day[_v-2ea4c8fe] {\n  color: #55b66f;\n  display: inline-block;\n  float: right;\n}\n.notice[_v-2ea4c8fe] {\n  color: #a0a0a0;\n  margin-top: 1.5rem;\n  padding: 0 0.4rem;\n}\n.footer[_v-2ea4c8fe] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 0.5rem;\n  width: 100%;\n  background: #fff;\n}\n.footer input[_v-2ea4c8fe] {\n  background-color: #f7b52b;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 0.5rem;\n  width: 4rem;\n  color: #fdfdfd;\n  vertical-align: bottom;\n  border: none;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.footer .price[_v-2ea4c8fe] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  padding-left: 0.4rem;\n  color: #a0a0a0;\n}\n.footer .price span[_v-2ea4c8fe] {\n  color: #f00;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/ScenicOrderForm.vue","/./src/views/src/views/ScenicOrderForm.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HC;EACE,qBAAA;CD8HH;AC7HC;EACE,iBAAA;EACA,sBAAA;CD+HH;AC9HG;EACE,uBAAA;EACA,iCAAA;CDgIL;AC/HG;EACE,gBAAA;CDiIL;AChIG;EACE,eAAA;EACA,aAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;CDkIL;ACjIG;EACE,eAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;CDmIL;ACjIG;EACE,kBAAA;EACA,oBAAA;EACA,qBAAA;CDmIL;AClIC;EACE,YAAA;EACA,aAAA;EACA,iBAAA;CDoIH;ACnIG;EACE,YAAA;CDqIL;ACpIC;EACE,gBAAA;EACA,kBAAA;EACA,oBAAA;CDsIH;ACrIG;EACE,uBAAA;EACA,qBAAA;CDuIL;ACtIC;EACE,aAAA;CDwIH;ACtIG;EACE,cAAA;EACA,eAAA;EACA,uBAAA;EACA,iBAAA;EACA,0BAAA;EACA,kBAAA;EACA,cAAA;CDwIL;ACvIC;EACE,eAAA;EACA,sBAAA;EACA,aAAA;CDyIH;ACxIC;EACE,eAAA;EACA,mBAAA;EACA,kBAAA;CD0IH;ACzIC;EACE,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,0BAAA;EAAA,4BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;CD2IH;AC1IG;EACE,0BAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,aAAA;EACA,oBAAA;EAAA,gBAAA;MAAA,YAAA;UAAA,QAAA;CD4IL;AC3IG;EACE,oBAAA;EAAA,gBAAA;MAAA,YAAA;UAAA,QAAA;EACA,qBAAA;EACA,eAAA;CD6IL;AC5IK;EACE,YAAA;CD8IP","file":"ScenicOrderForm.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container {\n  padding-bottom: 1rem;\n}\n.section {\n  background: #fff;\n  margin-bottom: 0.4rem;\n}\n.section > div {\n  padding: 0.6rem 0.4rem;\n  border-bottom: 1px solid #dbdbdb;\n}\n.section:first-child {\n  padding: 0.4rem;\n}\n.section .icon {\n  display: block;\n  float: right;\n  width: 0.8rem;\n  position: relative;\n  top: -0.2rem;\n}\n.section input[type=text] {\n  height: 0.5rem;\n  border: none;\n  width: 60%;\n  font-size: 0.4rem;\n}\n.banner h1 {\n  font-size: 0.6rem;\n  font-weight: normal;\n  padding-left: 0.4rem;\n}\n.banner-img {\n  width: 100%;\n  height: 4rem;\n  overflow: hidden;\n}\n.banner-img img {\n  width: 100%;\n}\nh2 {\n  padding: 0.4rem;\n  font-size: 0.5rem;\n  font-weight: normal;\n}\nh2 img {\n  vertical-align: bottom;\n  margin-right: 0.3rem;\n}\n.right {\n  float: right;\n}\n.house-count button {\n  width: 0.5rem;\n  height: 0.5rem;\n  vertical-align: middle;\n  background: none;\n  border: 1px solid #dbdbdb;\n  font-size: 0.4rem;\n  outline: none;\n}\n.day {\n  color: #55b66f;\n  display: inline-block;\n  float: right;\n}\n.notice {\n  color: #a0a0a0;\n  margin-top: 1.5rem;\n  padding: 0 0.4rem;\n}\n.footer {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  align-items: center;\n  font-size: 0.5rem;\n  width: 100%;\n  background: #fff;\n}\n.footer input {\n  background-color: #f7b52b;\n  height: 1rem;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 0.5rem;\n  width: 4rem;\n  color: #fdfdfd;\n  vertical-align: bottom;\n  border: none;\n  flex: 1;\n}\n.footer .price {\n  flex: 2;\n  padding-left: 0.4rem;\n  color: #a0a0a0;\n}\n.footer .price span {\n  color: #f00;\n}\n","\n@import \"../main.styl\"\n  .container\n    padding-bottom: 1rem\n  .section\n    background: poem-white\n    margin-bottom: 0.4rem\n    & > div\n      padding: 0.6rem 0.4rem\n      border-bottom: 1px solid line-gray\n    &:first-child\n      padding: 0.4rem\n    & .icon\n      display: block\n      float: right\n      width: 0.8rem\n      position: relative\n      top: -0.2rem\n    & input[type=text]\n      height: 0.5rem;\n      border: none;\n      width: 60%;\n      font-size: 0.4rem;\n  .banner\n    & h1\n      font-size: .6rem\n      font-weight: normal\n      padding-left: section-padding\n  .banner-img\n    width: 100%\n    height: 4rem\n    overflow: hidden\n    & img\n      width: 100%\n  h2\n    padding: section-padding\n    font-size: .5rem\n    font-weight: normal\n    & img\n      vertical-align: bottom\n      margin-right: .3rem\n  .right\n    float: right\n  .house-count\n    & button\n      width: 0.5rem\n      height: 0.5rem\n      vertical-align: middle\n      background: none;\n      border: 1px solid line-gray\n      font-size: 0.4rem\n      outline: none\n  .day\n    color: app-green\n    display: inline-block\n    float: right\n  .notice\n    color: text-gray\n    margin-top: 1.5rem\n    padding: 0 0.4rem\n  .footer\n    display: flex\n    position: fixed\n    bottom: 0\n    align-items: center\n    font-size: 0.5rem\n    width: 100%\n    background: poem-white\n    & input\n      background-color:app-yellow\n      height: 1rem\n      line-height:1rem\n      text-align:center\n      font-size:.5rem\n      width: 4rem\n      color:app-white\n      vertical-align: bottom\n      border: none\n      flex: 1\n    & .price\n      flex: 2\n      padding-left: 0.4rem\n      color: text-gray\n      & span\n        color: red\n\n\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//     <flex-scroll-view>
	//       <div class="container">
	//         <div class="banner">
	//           <div class="banner-img">
	//             <img src="http://2.share.photo.xuite.net/wxm3338/126d4b2/14058821/738662509_m.jpg" alt="">
	//           </div>
	//           <h1>{{ scenicName }}</h1>
	//         </div>
	//         <div class="section">
	//           <div class="house-count">购买数量
	//             <div class="right">
	//               <button @click="minusCount">-</button>
	//               {{ count }}
	//               <button @click="addCount">+</button>
	//             </div>
	//           </div>
	//           <div>
	//             兑换方式：{{ exchangeWay }}
	//           </div>
	//         </div>
	//         <h2><img class="small-icon" src="../asset/images/user-green.png" alt="">取票人信息</h2>
	//         <div class="section">
	//           <div>姓名
	//             <input type="text">
	//             <img class="icon" src="../asset/images/contacter-green.png" alt=""></div>
	//           <div>联系方式
	//             <input type="text">
	//             <img class="icon" src="../asset/images/phone-device.png" alt=""></div>
	//         </div>
	//         <div class="notice">
	//           <h2>温馨提示：</h2>
	//           <p>请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>
	//         </div>
	//       </div>
	//       <div class="footer">
	//         <div class="price">订单金额：<span>{{ orderPrice }}</span></div>
	//         <input type="submit" value="提交订单">
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	// <script>
	module.exports = {
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    return {
	      scenicName: '响沙湾',
	      price: 59,
	      count: 1,
	      exchangeWay: '兑换码',
	      saveTo: '',
	      personName: '',
	      contactWay: '',
	      orderPrice: 66666
	    };
	  },
	
	  methods: {
	    addCount: function addCount() {
	      this.count += 1;
	    },
	    minusCount: function minusCount() {
	      if (this.count < 2) {
	        alert('至少要定一张票哦');
	        return;
	      }
	      this.count -= 1;
	    }
	  }
	};
	// </script>
	// <style scoped lang="stylus">
	//   @import "../main.styl"
	//     .container
	//       padding-bottom: 1rem
	//     .section
	//       background: poem-white
	//       margin-bottom: 0.4rem
	//       & > div
	//         padding: 0.6rem 0.4rem
	//         border-bottom: 1px solid line-gray
	//       &:first-child
	//         padding: 0.4rem
	//       & .icon
	//         display: block
	//         float: right
	//         width: 0.8rem
	//         position: relative
	//         top: -0.2rem
	//       & input[type=text]
	//         height: 0.5rem;
	//         border: none;
	//         width: 60%;
	//         font-size: 0.4rem;
	//     .banner
	//       & h1
	//         font-size: .6rem
	//         font-weight: normal
	//         padding-left: section-padding
	//     .banner-img
	//       width: 100%
	//       height: 4rem
	//       overflow: hidden
	//       & img
	//         width: 100%
	//     h2
	//       padding: section-padding
	//       font-size: .5rem
	//       font-weight: normal
	//       & img
	//         vertical-align: bottom
	//         margin-right: .3rem
	//     .right
	//       float: right
	//     .house-count
	//       & button
	//         width: 0.5rem
	//         height: 0.5rem
	//         vertical-align: middle
	//         background: none;
	//         border: 1px solid line-gray
	//         font-size: 0.4rem
	//         outline: none
	//     .day
	//       color: app-green
	//       display: inline-block
	//       float: right
	//     .notice
	//       color: text-gray
	//       margin-top: 1.5rem
	//       padding: 0 0.4rem
	//     .footer
	//       display: flex
	//       position: fixed
	//       bottom: 0
	//       align-items: center
	//       font-size: 0.5rem
	//       width: 100%
	//       background: poem-white
	//       & input
	//         background-color:app-yellow
	//         height: 1rem
	//         line-height:1rem
	//         text-align:center
	//         font-size:.5rem
	//         width: 4rem
	//         color:app-white
	//         vertical-align: bottom
	//         border: none
	//         flex: 1
	//       & .price
	//         flex: 2
	//         padding-left: 0.4rem
	//         color: text-gray
	//         & span
	//           color: red
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<div class=\"flex-view\" v-transition=\"\" _v-2ea4c8fe=\"\">\n  <flex-scroll-view _v-2ea4c8fe=\"\">\n    <div class=\"container\" _v-2ea4c8fe=\"\">\n      <div class=\"banner\" _v-2ea4c8fe=\"\">\n        <div class=\"banner-img\" _v-2ea4c8fe=\"\">\n          <img src=\"http://2.share.photo.xuite.net/wxm3338/126d4b2/14058821/738662509_m.jpg\" alt=\"\" _v-2ea4c8fe=\"\">\n        </div>\n        <h1 _v-2ea4c8fe=\"\">{{ scenicName }}</h1>\n      </div>\n      <div class=\"section\" _v-2ea4c8fe=\"\">\n        <div class=\"house-count\" _v-2ea4c8fe=\"\">购买数量\n          <div class=\"right\" _v-2ea4c8fe=\"\">\n            <button @click=\"minusCount\" _v-2ea4c8fe=\"\">-</button>\n            {{ count }}\n            <button @click=\"addCount\" _v-2ea4c8fe=\"\">+</button>\n          </div>\n        </div>\n        <div _v-2ea4c8fe=\"\">\n          兑换方式：{{ exchangeWay }}\n        </div>\n      </div>\n      <h2 _v-2ea4c8fe=\"\"><img class=\"small-icon\" src=\"" + __webpack_require__(144) + "\" alt=\"\" _v-2ea4c8fe=\"\">取票人信息</h2>\n      <div class=\"section\" _v-2ea4c8fe=\"\">\n        <div _v-2ea4c8fe=\"\">姓名\n          <input type=\"text\" _v-2ea4c8fe=\"\">\n          <img class=\"icon\" src=\"" + __webpack_require__(208) + "\" alt=\"\" _v-2ea4c8fe=\"\"></div>\n        <div _v-2ea4c8fe=\"\">联系方式\n          <input type=\"text\" _v-2ea4c8fe=\"\">\n          <img class=\"icon\" src=\"" + __webpack_require__(209) + "\" alt=\"\" _v-2ea4c8fe=\"\"></div>\n      </div>\n      <div class=\"notice\" _v-2ea4c8fe=\"\">\n        <h2 _v-2ea4c8fe=\"\">温馨提示：</h2>\n        <p _v-2ea4c8fe=\"\">请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则请在最晚到店时间以前到达，否则  </p>\n      </div>\n    </div>\n    <div class=\"footer\" _v-2ea4c8fe=\"\">\n      <div class=\"price\" _v-2ea4c8fe=\"\">订单金额：<span _v-2ea4c8fe=\"\">{{ orderPrice }}</span></div>\n      <input type=\"submit\" value=\"提交订单\" _v-2ea4c8fe=\"\">\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(224)
	__vue_script__ = __webpack_require__(226)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\FoodDetail.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(227)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "f:\\webFrontEnd\\waibao\\poemByVue1x\\src\\views\\FoodDetail.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(225);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d17f35d&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoodDetail.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?sourceMap!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d17f35d&scoped=true!./../../node_modules/stylus-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoodDetail.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html[_v-4d17f35d],\nbody[_v-4d17f35d] {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli[_v-4d17f35d] {\n  list-style: none;\n}\nul[_v-4d17f35d] {\n  padding-left: 0;\n}\n.view[_v-4d17f35d] {\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter[_v-4d17f35d] {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave[_v-4d17f35d] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green[_v-4d17f35d] {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box[_v-4d17f35d] {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div[_v-4d17f35d] {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input[_v-4d17f35d] {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden[_v-4d17f35d] {\n  display: none;\n}\n.poem-mask[_v-4d17f35d] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view[_v-4d17f35d] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.small-icon[_v-4d17f35d] {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container[_v-4d17f35d] {\n  padding: 0.4rem;\n}\n.link-line[_v-4d17f35d] {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/views/src/main.styl","/./src/views/FoodDetail.vue","/./src/views/src/views/FoodDetail.vue"],"names":[],"mappings":"AAsBA;;EACE,uCAAA;EACA,WAAA;EACA,UAAA;EACA,eAAA;CCpBD;ADsBD;EACE,iBAAA;CCpBD;ADqBD;EACE,gBAAA;CCnBD;ADqBD;EACE,kCAAA;EAAA,0BAAA;EACA,mBAAA;CCnBD;ADoBC;EACE,WAAA;EACA,4CAAA;EACA,oCAAA;CClBH;ADmBC;EACE,WAAA;EACA,6CAAA;EACA,qCAAA;CCjBH;ADmBD;EACE,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;CCjBD;ADmBD;EACE,eAAA;EACA,cAAA;EACA,uBAAA;EACA,0BAAA;EACA,eAAA;CCjBD;ADkBC;EACE,eAAA;EACA,oBAAA;EACA,iCAAA;CChBH;ADiBC;EACE,yBAAA;EACA,eAAA;EACA,aAAA;EACA,kBAAA;EACA,eAAA;CCfH;ADiBD;EACE,cAAA;CCfD;ADiBD;EACE,gBAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,0BAAA;EACA,aAAA;EACA,yBAAA;EACA,8BAAA;AAA8B,aAAA;EAC9B,iCAAA;AAAiC,uBAAA;EACjC,4BAAA;AAA4B,WAAA;CCZ7B;ADcD;EACE,6BAAA;EACA,8BAAA;EACA,+BAAA;MAAA,2BAAA;UAAA,uBAAA;EACA,aAAA;EACA,qBAAA;EAAA,sBAAA;EAAA,qBAAA;EAAA,cAAA;CCZD;ADcD;EACE,cAAA;EACA,eAAA;CCZD;ADeU;EACT;IACE,iBAAA;GCGD;EDFD;IACE,oBAAA;GCID;CACF;ADTU;EACT;IACE,iBAAA;GCmBD;EDlBD;IACE,oBAAA;GCoBD;CACF;AC5HD;EACE,gBAAA;CD8HD;AC7HD;EACE,eAAA;CD+HD","file":"FoodDetail.vue","sourcesContent":["\r\n\r\napp-green = rgb(85,182,111)\r\ntext-gray = rgb(160,160,160)\r\nline-gray = rgb(219,219,219)\r\napp-yellow = rgb(247,181,43)\r\napp-white = rgb(253,253,253)\r\nline-color = rgb(229,229,229)\r\ninput-height = 1.1rem\r\ntab-color = #efefef\r\npoem-green = #bada55\r\npoem-yellow = yellow\r\npoem-gray = gray \r\npoem-white = white\r\npoem-red = red\r\npoem-line-color = grey\r\npoem-text-gray = gray\r\npoem-text-black = black\r\nsection-margin = 0.4rem\r\nsection-padding = 0.4rem\r\n\r\n\r\nhtml, body\r\n  font-family SimHei, Arial, sans-serif\r\n  padding:0;\r\n  margin:0\r\n  color:text-gray\r\n\r\nli\r\n  list-style:none;\r\nul\r\n  padding-left:0\r\n\r\n.view\r\n  transition all .4s ease\r\n  position absolute\r\n  &.v-enter\r\n    opacity 0\r\n    -webkit-transform translate3d(100px, 0, 0)\r\n    transform translate3d(100px, 0, 0)\r\n  &.v-leave\r\n    opacity 0\r\n    -webkit-transform translate3d(-100px, 0, 0)\r\n    transform translate3d(-100px, 0, 0)\r\n\r\n.poem-btn-green\r\n  font-size:.4rem\r\n  background-color:app-green\r\n  border-radius:10px\r\n  height:1rem\r\n  line-height:1rem\r\n  width:8rem\r\n  margin:30px auto\r\n  text-align: center;\r\n  color:white\r\n  \r\n.poem-input-box\r\n  margin:0 auto;\r\n  width:9.5rem;\r\n  background-color:#fff\r\n  border:line-gray 1px solid\r\n  color:text-gray\r\n  &>div\r\n    height:input-height+0.2rem\r\n    line-height:input-height+0.2rem\r\n    border-bottom:solid 1px line-gray\r\n  & input\r\n    outline:none !important\r\n    height:(input-height)\r\n    border:none\r\n    font-size:.4rem\r\n    height:input-height\r\n  \r\n.poem-hidden\r\n  display:none\r\n  \r\n.poem-mask\r\n  position: fixed\r\n  bottom: 0\r\n  width: 100%\r\n  height:100%\r\n  width: 100%\r\n  background-color:grey\r\n  opacity:0.5\r\n  animation:showMask 0.2s;\r\n  -moz-animation:showMask 0.2s; /* Firefox */\r\n  -webkit-animation:showMask 0.2s; /* Safari and Chrome */\r\n  -o-animation:showMask 0.2s; /* Opera */\r\n\r\n.flex-view\r\n  -webkit-box-orient:vertical\r\n  -webkit-box-direction:normal\r\n  flex-direction:column;\r\n  height:100%\r\n  display: flex\r\n\r\n.small-icon\r\n  width: .6rem\r\n  height: .6rem\r\n\r\n  \r\n@keyframes showMask\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey\r\n\r\n@-moz-keyframes showMask /* Firefox */\r\n  from \r\n    background:#ffffff\r\n  to \r\n    background:grey","html,\nbody {\n  font-family: SimHei, Arial, sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #a0a0a0;\n}\nli {\n  list-style: none;\n}\nul {\n  padding-left: 0;\n}\n.view {\n  transition: all 0.4s ease;\n  position: absolute;\n}\n.view.v-enter {\n  opacity: 0;\n  -webkit-transform: translate3d(100px, 0, 0);\n  transform: translate3d(100px, 0, 0);\n}\n.view.v-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(-100px, 0, 0);\n  transform: translate3d(-100px, 0, 0);\n}\n.poem-btn-green {\n  font-size: 0.4rem;\n  background-color: #55b66f;\n  border-radius: 10px;\n  height: 1rem;\n  line-height: 1rem;\n  width: 8rem;\n  margin: 30px auto;\n  text-align: center;\n  color: #fff;\n}\n.poem-input-box {\n  margin: 0 auto;\n  width: 9.5rem;\n  background-color: #fff;\n  border: #dbdbdb 1px solid;\n  color: #a0a0a0;\n}\n.poem-input-box>div {\n  height: 1.3rem;\n  line-height: 1.3rem;\n  border-bottom: solid 1px #dbdbdb;\n}\n.poem-input-box input {\n  outline: none !important;\n  height: 1.1rem;\n  border: none;\n  font-size: 0.4rem;\n  height: 1.1rem;\n}\n.poem-hidden {\n  display: none;\n}\n.poem-mask {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #808080;\n  opacity: 0.5;\n  animation: showMask 0.2s;\n  -moz-animation: showMask 0.2s;\n/* Firefox */\n  -webkit-animation: showMask 0.2s;\n/* Safari and Chrome */\n  -o-animation: showMask 0.2s;\n/* Opera */\n}\n.flex-view {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  height: 100%;\n  display: flex;\n}\n.small-icon {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-moz-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-webkit-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@-o-keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n@keyframes showMask {\n  from {\n    background: #fff;\n  }\n  to {\n    background: #808080;\n  }\n}\n.container {\n  padding: 0.4rem;\n}\n.link-line {\n  display: block;\n}\n","\n@import \"../main.styl\"\n.container\n  padding: section-padding\n.link-line\n  display: block\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// <template>
	//   <div class="flex-view" v-transition>
	//     <flex-scroll-view>
	//       <banner></banner>
	//       <div class="container">
	//         <div class="intro">
	//           <p>{{ foodName }}</p>
	//           <p class="price"></p>
	//           <p>价格: <span class="original-price">{{ originalPrice }}</span></p>
	//           <div>
	//             <p>快递</p>
	//             <p>月销：{{ monthSold }}</p>
	//             <p>库存：{{ stock }}</p>
	//           </div>
	//         </div>
	//         <a class="link-line" href="">
	//           <div>
	//             选择尺码 颜色
	//             <span>></span>
	//           </div>
	//         </a>
	//         <a class="link-line" href="">
	//           <div>
	//             评价晒单 好评<span>{{ postiveCommentsRate * 100 }}%</span>
	//             <span>></span>
	//           </div>
	//         </a>
	//         <a class="link-line" href="">
	//           <div>
	//             图文详情
	//             <span>></span>
	//           </div>
	//         </a>
	//       </div>
	//     </flex-scroll-view>
	//   </div>
	// </template>
	//
	// <script>
	
	module.exports = {
	  components: {
	    'flex-scroll-view': function flexScrollView(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(54)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    },
	    'banner': function banner(resolve) {
	      !/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(68)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.call(this));
	    }
	  },
	  data: function data() {
	    return {
	      foodName: '风干牛肉干风干牛肉干风干牛肉干风干风干牛肉干风干牛肉干风干牛肉干',
	      price: 59,
	      originalPrice: 100,
	      expressPrice: 0,
	      monthSold: 3215,
	      stock: 999,
	      postiveCommentsRate: 0.98,
	      storeName: 'xx旗舰店',
	      storeScore: 9.2
	    };
	  }
	};
	// </script>
	//
	// <style lang="stylus" scoped>
	//   @import "../main.styl"
	//   .container
	//     padding: section-padding
	//   .link-line
	//     display: block
	// </style>
	/* generated by vue-loader */

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"flex-view\" v-transition=\"\" _v-4d17f35d=\"\">\n  <flex-scroll-view _v-4d17f35d=\"\">\n    <banner _v-4d17f35d=\"\"></banner>\n    <div class=\"container\" _v-4d17f35d=\"\">\n      <div class=\"intro\" _v-4d17f35d=\"\">\n        <p _v-4d17f35d=\"\">{{ foodName }}</p>\n        <p class=\"price\" _v-4d17f35d=\"\"></p>\n        <p _v-4d17f35d=\"\">价格: <span class=\"original-price\" _v-4d17f35d=\"\">{{ originalPrice }}</span></p>\n        <div _v-4d17f35d=\"\">\n          <p _v-4d17f35d=\"\">快递</p>\n          <p _v-4d17f35d=\"\">月销：{{ monthSold }}</p>\n          <p _v-4d17f35d=\"\">库存：{{ stock }}</p>\n        </div>\n      </div>\n      <a class=\"link-line\" href=\"\" _v-4d17f35d=\"\">\n        <div _v-4d17f35d=\"\">\n          选择尺码 颜色\n          <span _v-4d17f35d=\"\">&gt;</span>\n        </div>\n      </a>\n      <a class=\"link-line\" href=\"\" _v-4d17f35d=\"\">\n        <div _v-4d17f35d=\"\">\n          评价晒单 好评<span _v-4d17f35d=\"\">{{ postiveCommentsRate * 100 }}%</span>\n          <span _v-4d17f35d=\"\">&gt;</span>\n        </div>\n      </a>\n      <a class=\"link-line\" href=\"\" _v-4d17f35d=\"\">\n        <div _v-4d17f35d=\"\">\n          图文详情\n          <span _v-4d17f35d=\"\">&gt;</span>\n        </div>\n      </a>\n    </div>\n  </flex-scroll-view>\n</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map
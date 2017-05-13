var uniqueIds =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "app";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UniqueIdsClient = __webpack_require__(2);

var _UniqueIdsClient2 = _interopRequireDefault(_UniqueIdsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniqueIds = function () {
    function UniqueIds() {
        _classCallCheck(this, UniqueIds);

        this.uniqueIdsClient = new _UniqueIdsClient2.default();
        this.uniqueIds = [];
        this.callbacksWhenIdsAreAvailable = [];
        this.loading = false;
        this.loadUniqueIds();
    }

    _createClass(UniqueIds, [{
        key: 'loadUniqueIds',
        value: function loadUniqueIds() {
            var _this = this;

            if (this.loading == false) {
                this.loading = true;
                this.uniqueIdsClient.loadUniqueIds().then(function (uniqueIds) {
                    _this.whenLoaded(uniqueIds);
                });
            }
        }
    }, {
        key: 'withNext',
        value: function withNext(callback) {
            if (this.uniqueIds.length > 0 && this.loading == false) {
                callback(this.uniqueIds.pop());
            } else {
                this.callbacksWhenIdsAreAvailable.push(callback);
            }

            if (this.uniqueIds.length == 0) {
                this.loadUniqueIds();
            }
        }
    }, {
        key: 'whenLoaded',
        value: function whenLoaded(uniqueIds) {
            this.uniqueIds = this.uniqueIds.concat(uniqueIds);
            this.runCallbacks();
            this.loading = false;
            if (this.uniqueIds.length == 0) {
                this.loadUniqueIds();
            }
        }
    }, {
        key: 'runCallbacks',
        value: function runCallbacks() {
            while (this.uniqueIds.length > 0 && this.loading == true && this.callbacksWhenIdsAreAvailable.length > 0) {
                var callback = this.callbacksWhenIdsAreAvailable.shift();
                callback(this.uniqueIds.pop());
            }
        }
    }]);

    return UniqueIds;
}();

exports.default = UniqueIds;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UniqueIds = __webpack_require__(0);

var _UniqueIds2 = _interopRequireDefault(_UniqueIds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueIds = new _UniqueIds2.default();

module.exports = uniqueIds;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniqueIdsClient = function () {
    function UniqueIdsClient() {
        _classCallCheck(this, UniqueIdsClient);
    }

    _createClass(UniqueIdsClient, [{
        key: "loadUniqueIds",
        value: function loadUniqueIds() {
            var result = new Promise(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.open("GET", "http://localhost:8080/unique-ids/resources/uniqueIds");
                request.onreadystatechange = function () {
                    if (request.readyState == 4 && request.status == 200) {
                        resolve(JSON.parse(request.responseText));
                    }
                };
                request.send();
            });
            return result;
        }
    }]);

    return UniqueIdsClient;
}();

exports.default = UniqueIdsClient;

/***/ })
/******/ ]);
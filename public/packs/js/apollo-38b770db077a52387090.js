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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/apollo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/apollo.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/apollo.js ***!
  \****************************************/
/*! exports provided: client, CREATE_TRANSACTION, GET_ACCOUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_TRANSACTION", function() { return CREATE_TRANSACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACCOUNT", function() { return GET_ACCOUNT; });
!(function webpackMissingModule() { var e = new Error("Cannot find module 'apollo-boost'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'graphql-tag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// app/javascript/packs/front-end-react/apollo.js


var client = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'apollo-boost'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  uri: "/graphql"
});

// let's define graphql queries here, similar to what we send using rails Graphiql Engine

var CREATE_TRANSACTION = !(function webpackMissingModule() { var e = new Error("Cannot find module 'graphql-tag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation CreateTransaction($amount: Float!, $account_id: Integer!){\n    createTransaction(\n      input:{\n        amount: $amount\n        account_id: $account_id\n    }){\n      transaction {\n        id\n        account_id\n        amount\n      }\n    }\n  }\n"])));

// get a account balance
var GET_ACCOUNT = !(function webpackMissingModule() { var e = new Error("Cannot find module 'graphql-tag'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query account($accountId: ID!){\n    account(id: $accountId){\n      id\n      balance\n    }\n  }\n"])));

/***/ })

/******/ });
//# sourceMappingURL=apollo-38b770db077a52387090.js.map
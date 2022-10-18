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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/front-end-react/src/transactionComponent.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/front-end-react/src/transactionComponent.jsx":
/*!***************************************************************************!*\
  !*** ./app/javascript/packs/front-end-react/src/transactionComponent.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/chandanjha/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/chandanjha/Documents/account-transactions/accounting-transactions/account-transaction-app/app/javascript/packs/front-end-react/src/transactionComponent.jsx: Unexpected token (9:16)\n\n   7 | export const QueryTransaction = () => {\n   8 |   const { loading, error, data } = useQuery(GET_TRANSACTIONS, {\n>  9 |     variables: {{ accoutId: 1 }}\n     |                 ^\n  10 |   });\n  11 |   console.log(\"querycomponent\", data)\n  12 |   return (\n    at instantiate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:367:12)\n    at JSXParserMixin.raise (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3706:19)\n    at JSXParserMixin.unexpected (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3744:16)\n    at JSXParserMixin.parsePropertyName (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14081:24)\n    at JSXParserMixin.parsePropertyDefinition (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13913:22)\n    at JSXParserMixin.parseObjectLike (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13833:21)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13225:23)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:39\n    at JSXParserMixin.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14576:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:17)\n    at JSXParserMixin.parseObjectProperty (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13992:101)\n    at JSXParserMixin.parseObjPropValue (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14025:100)\n    at JSXParserMixin.parsePropertyDefinition (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13943:17)\n    at JSXParserMixin.parseObjectLike (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13833:21)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13225:23)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:39\n    at JSXParserMixin.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14576:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:17)\n    at JSXParserMixin.parseExprListItem (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14281:18)\n    at JSXParserMixin.parseCallExpressionArguments (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13101:22)\n    at JSXParserMixin.parseCoverCallAndAsyncArrowHead (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12998:29)\n    at JSXParserMixin.parseSubscript (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12923:19)\n    at JSXParserMixin.parseSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12892:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12881:17)\n    at JSXParserMixin.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:39\n    at JSXParserMixin.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14570:16)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:17)");

/***/ })

/******/ });
//# sourceMappingURL=transactionComponent-89a75e9a758df663febb.js.map
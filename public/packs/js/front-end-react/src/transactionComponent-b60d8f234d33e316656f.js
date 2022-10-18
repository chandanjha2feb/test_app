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

throw new Error("Module build failed (from /Users/chandanjha/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/chandanjha/Documents/account-transactions/accounting-transactions/account-transaction-app/app/javascript/packs/front-end-react/src/transactionComponent.jsx: Unexpected token (22:3)\n\n  20 |   const { error, data } = useQuery(GET_ACCOUNTS);\n  21 |     console.log(data)\n> 22 |   });\n     |    ^\n  23 |\n  24 |   useEffect(() => {\n  25 |     if(data){\n    at instantiate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:367:12)\n    at JSXParserMixin.raise (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3706:19)\n    at JSXParserMixin.unexpected (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3744:16)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13350:22)\n    at JSXParserMixin.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:8203:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at JSXParserMixin.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at JSXParserMixin.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at JSXParserMixin.parseExpressionBase (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12480:23)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12474:39\n    at JSXParserMixin.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14570:16)\n    at JSXParserMixin.parseExpression (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12474:17)\n    at JSXParserMixin.parseStatementContent (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15014:23)\n    at JSXParserMixin.parseStatement (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14871:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15531:25)\n    at JSXParserMixin.parseBlockBody (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15522:10)\n    at JSXParserMixin.parseProgram (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14785:10)\n    at JSXParserMixin.parseTopLevel (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14772:25)\n    at JSXParserMixin.parse (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:16799:10)\n    at parse (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:16851:38)\n    at parser (/Users/chandanjha/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/chandanjha/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/chandanjha/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at transform (/Users/chandanjha/node_modules/@babel/core/lib/transform.js:29:41)\n    at transform.next (<anonymous>)\n    at step (/Users/chandanjha/node_modules/gensync/index.js:261:32)\n    at /Users/chandanjha/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/chandanjha/node_modules/gensync/index.js:223:11)\n    at /Users/chandanjha/node_modules/gensync/index.js:189:28\n    at /Users/chandanjha/node_modules/@babel/core/lib/gensync-utils/async.js:84:7\n    at /Users/chandanjha/node_modules/gensync/index.js:113:33\n    at step (/Users/chandanjha/node_modules/gensync/index.js:287:14)\n    at /Users/chandanjha/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/chandanjha/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ });
//# sourceMappingURL=transactionComponent-b60d8f234d33e316656f.js.map
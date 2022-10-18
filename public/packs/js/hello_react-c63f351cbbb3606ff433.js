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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/hello_react.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/chandanjha/node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/chandanjha/Documents/account-transactions/accounting-transactions/account-transaction-app/app/javascript/packs/hello_react.js: Support for the experimental syntax 'jsx' isn't currently enabled (10:3):\n\n   8 |\n   9 | const Hello = props => (\n> 10 |   <div>Hello {props.name}!</div>\n     |   ^\n  11 | )\n  12 |\n  13 | Hello.defaultProps = {\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n    at instantiate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:367:12)\n    at Parser.raise (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3706:19)\n    at Parser.expectOnePlugin (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:3763:18)\n    at Parser.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13305:18)\n    at Parser.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at Parser.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at Parser.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at Parser.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at Parser.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at Parser.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:39\n    at Parser.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14576:12)\n    at Parser.parseMaybeAssignAllowIn (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:17)\n    at Parser.parseParenAndDistinguishExpression (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13631:28)\n    at Parser.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13203:23)\n    at Parser.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at Parser.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at Parser.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at Parser.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at Parser.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at Parser.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at Parser.parseFunctionBody (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14168:24)\n    at Parser.parseArrowExpression (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14146:10)\n    at Parser.parseExprAtom (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:13345:25)\n    at Parser.parseExprSubscripts (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12875:23)\n    at Parser.parseUpdate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12854:21)\n    at Parser.parseMaybeUnary (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12824:23)\n    at Parser.parseMaybeUnaryOrPrivate (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12615:61)\n    at Parser.parseExprOps (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12622:23)\n    at Parser.parseMaybeConditional (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12592:23)\n    at Parser.parseMaybeAssign (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12544:21)\n    at /Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:39\n    at Parser.allowInAnd (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14570:16)\n    at Parser.parseMaybeAssignAllowIn (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:12502:17)\n    at Parser.parseVar (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15617:91)\n    at Parser.parseVarStatement (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15420:10)\n    at Parser.parseStatementContent (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14946:21)\n    at Parser.parseStatement (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14871:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15531:25)\n    at Parser.parseBlockBody (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:15522:10)\n    at Parser.parseProgram (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14785:10)\n    at Parser.parseTopLevel (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:14772:25)\n    at Parser.parse (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:16799:10)\n    at parse (/Users/chandanjha/node_modules/@babel/parser/lib/index.js:16851:38)\n    at parser (/Users/chandanjha/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/chandanjha/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-c63f351cbbb3606ff433.js.map
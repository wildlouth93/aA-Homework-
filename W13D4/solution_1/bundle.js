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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/todo_redux.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/todo_redux.jsx":
/*!*********************************!*\
  !*** ./frontend/todo_redux.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/wilsondlouthjr/Desktop/solution_1/frontend/todo_redux.jsx: Unexpected token, expected \";\" (19:11)\n\n\u001b[0m \u001b[90m 17 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 18 | \u001b[39mdocument\u001b[33m.\u001b[39maddEventListener(\u001b[32m'DOMContentLoaded'\u001b[39m\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 19 | \u001b[39m  let store\u001b[33m.\u001b[39mdispatch \u001b[33m=\u001b[39m addingLoggingToDispatch(store)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m  \u001b[36mconst\u001b[39m preloadedState \u001b[33m=\u001b[39m localStorage\u001b[33m.\u001b[39mstate \u001b[33m?\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 | \u001b[39m    \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mparse(localStorage\u001b[33m.\u001b[39mstate) \u001b[33m:\u001b[39m {}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m  \u001b[36mconst\u001b[39m store \u001b[33m=\u001b[39m configureStore(preloadedState)\u001b[33m;\u001b[39m\u001b[0m\n    at Object.raise (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:6420:17)\n    at Object.unexpected (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:7773:16)\n    at Object.semicolon (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:7755:40)\n    at Object.parseVarStatement (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10480:10)\n    at Object.parseStatementContent (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10076:21)\n    at Object.parseStatement (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10009:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10585:25)\n    at Object.parseBlockBody (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10572:10)\n    at Object.parseBlock (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10556:10)\n    at Object.parseFunctionBody (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9584:24)\n    at Object.parseArrowExpression (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9525:10)\n    at Object.parseParenAndDistinguishExpression (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9157:12)\n    at Object.parseExprAtom (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8917:21)\n    at Object.parseExprAtom (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:3618:20)\n    at Object.parseExprSubscripts (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8556:23)\n    at Object.parseMaybeUnary (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Object.parseExprOps (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Object.parseMaybeConditional (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Object.parseMaybeAssign (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Object.parseExprListItem (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:9659:18)\n    at Object.parseCallExpressionArguments (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8774:22)\n    at Object.parseSubscript (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8661:29)\n    at Object.parseSubscripts (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8577:19)\n    at Object.parseExprSubscripts (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8566:17)\n    at Object.parseMaybeUnary (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8536:21)\n    at Object.parseExprOps (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8402:23)\n    at Object.parseMaybeConditional (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8375:23)\n    at Object.parseMaybeAssign (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8325:21)\n    at Object.parseExpression (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:8275:23)\n    at Object.parseStatementContent (/Users/wilsondlouthjr/Desktop/solution_1/node_modules/@babel/parser/lib/index.js:10138:23)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
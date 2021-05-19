/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/test.less":
/*!***************************!*\
  !*** ./src/css/test.less ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     margin: 0;\\n|     padding: 0;\");\n\n//# sourceURL=webpack://01-webpack/./src/css/test.less?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _js_module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/module2 */ \"./src/js/module2.js\");\n/* harmony import */ var _js_module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/module3 */ \"./src/js/module3.js\");\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/data.json */ \"./src/json/data.json\");\n/* harmony import */ var _css_test_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/test.less */ \"./src/css/test.less\");\n/* harmony import */ var _css_test_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_test_less__WEBPACK_IMPORTED_MODULE_4__);\n// 主模块：入口文件\r\n// 汇总所有模块的资源\r\n\r\n// 引入分别暴露和默认暴露\r\n\r\n\r\n// 引入分别暴露的内容\r\n// import { name as xxx, age } from './js/module2'\r\n\r\n// 引入module2暴露的所有内容，重命名为module2\r\n\r\n\r\n// 引入统一暴露的内容\r\n\r\n\r\n\r\n\r\n// 引入样式\r\n// 目的：为了让webpack打包该资源\r\n\r\n\r\nconsole.log((0,_js_module1__WEBPACK_IMPORTED_MODULE_0__.default)(1, 2, 3, 4));\r\nconsole.log(_js_module1__WEBPACK_IMPORTED_MODULE_0__.name);\r\nconsole.log(_js_module2__WEBPACK_IMPORTED_MODULE_1__.name, _js_module2__WEBPACK_IMPORTED_MODULE_1__.age);\r\nconsole.log((0,_js_module3__WEBPACK_IMPORTED_MODULE_2__.add)(1, 2));\r\nconsole.log((0,_js_module3__WEBPACK_IMPORTED_MODULE_2__.count)(1, 2));\r\nconsole.log(_json_data_json__WEBPACK_IMPORTED_MODULE_3__);\n\n//# sourceURL=webpack://01-webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"name\": () => (/* binding */ name),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst sum = (...args) => {\r\n    return args.reduce((p, c) => p + c, 0);\r\n};\r\n\r\n// 分别暴露\r\nconst name = '沛华';\r\n\r\n// 默认暴露\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);\n\n//# sourceURL=webpack://01-webpack/./src/js/module1.js?");

/***/ }),

/***/ "./src/js/module2.js":
/*!***************************!*\
  !*** ./src/js/module2.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"age\": () => (/* binding */ age),\n/* harmony export */   \"name\": () => (/* binding */ name)\n/* harmony export */ });\n// 分别暴露\r\nconst age = 18;\r\nconst name = '静哥';\n\n//# sourceURL=webpack://01-webpack/./src/js/module2.js?");

/***/ }),

/***/ "./src/js/module3.js":
/*!***************************!*\
  !*** ./src/js/module3.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"count\": () => (/* binding */ count)\n/* harmony export */ });\nconst add = (x, y) => x + y;\r\nconst count = (x, y) => x - y;\r\n// 统一暴露\r\n\n\n//# sourceURL=webpack://01-webpack/./src/js/module3.js?");

/***/ }),

/***/ "./src/json/data.json":
/*!****************************!*\
  !*** ./src/json/data.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"静哥\",\"age\":38}');\n\n//# sourceURL=webpack://01-webpack/./src/json/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./lib/store/modules/test.js":
/*!***********************************!*\
  !*** ./lib/store/modules/test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"testAction\": () => (/* binding */ testAction)\n/* harmony export */ });\n// Action Types\nconst TEST = \"TEST\"; // Action Creators\n\nconst testAction = text => ({\n  type: TEST,\n  text\n}); // Initial State\n\nconst initialState = []; // Reducer\n\nconst test = (state = initialState, action) => {\n  switch (action.type) {\n    case TEST:\n      return [...state, action.text];\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUvbW9kdWxlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxNQUFNQSxJQUFJLEdBQUcsTUFBYixFQUdBOztBQUNPLE1BQU1DLFVBQVUsR0FBSUMsSUFBRCxLQUFXO0FBQUVDLEVBQUFBLElBQUksRUFBRUgsSUFBUjtBQUFjRSxFQUFBQTtBQUFkLENBQVgsQ0FBbkIsRUFHUDs7QUFDQSxNQUFNRSxZQUFZLEdBQUcsRUFBckIsRUFHQTs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHRixZQUFULEVBQXVCRyxNQUF2QixLQUFrQztBQUM3QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLSCxJQUFMO0FBQ0UsYUFBTyxDQUFDLEdBQUdNLEtBQUosRUFBV0MsTUFBTSxDQUFDTCxJQUFsQixDQUFQOztBQUNGO0FBQ0UsYUFBT0ksS0FBUDtBQUpKO0FBTUQsQ0FQRDs7QUFVQSxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9saWIvc3RvcmUvbW9kdWxlcy90ZXN0LmpzP2JjMmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0aW9uIFR5cGVzXG5jb25zdCBURVNUID0gXCJURVNUXCI7XG5cblxuLy8gQWN0aW9uIENyZWF0b3JzXG5leHBvcnQgY29uc3QgdGVzdEFjdGlvbiA9ICh0ZXh0KSA9PiAoeyB0eXBlOiBURVNULCB0ZXh0IH0pO1xuXG5cbi8vIEluaXRpYWwgU3RhdGVcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG5cbi8vIFJlZHVjZXJcbmNvbnN0IHRlc3QgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBURVNUOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnRleHRdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgdGVzdDsiXSwibmFtZXMiOlsiVEVTVCIsInRlc3RBY3Rpb24iLCJ0ZXh0IiwidHlwZSIsImluaXRpYWxTdGF0ZSIsInRlc3QiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/store/modules/test.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_store_modules_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/store/modules/test */ \"./lib/store/modules/test.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/test.js\";\n\n\n\n\nconst HomePage = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n\n  const onDispatch = () => dispatch((0,_lib_store_modules_test__WEBPACK_IMPORTED_MODULE_1__.testAction)(\"리덕스 테스트 액션입니다.\"));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      type: \"button\",\n      onClick: onDispatch,\n      children: \"\\uBC84\\uD2BC\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFLQSxNQUFNRSxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxRQUFRLEdBQUdILHdEQUFXLEVBQTVCOztBQUdBLFFBQU1JLFVBQVUsR0FBRyxNQUFNRCxRQUFRLENBQUNGLG1FQUFVLENBQUMsZ0JBQUQsQ0FBWCxDQUFqQzs7QUFHQSxzQkFDRTtBQUFBLDJCQUNFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFRyxVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBZEQ7O0FBaUJBLGlFQUFlRixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL3Rlc3QuanM/ZDA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdGVzdEFjdGlvbiB9IGZyb20gXCIuLi9saWIvc3RvcmUvbW9kdWxlcy90ZXN0XCI7XG5cblxuXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cblxuICBjb25zdCBvbkRpc3BhdGNoID0gKCkgPT4gZGlzcGF0Y2godGVzdEFjdGlvbihcIuumrOuNleyKpCDthYzsiqTtirgg7JWh7IWY7J6F64uI64ukLlwiKSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkRpc3BhdGNofT5cbiAgICAgICAg67KE7Yq8XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidGVzdEFjdGlvbiIsIkhvbWVQYWdlIiwiZGlzcGF0Y2giLCJvbkRpc3BhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();
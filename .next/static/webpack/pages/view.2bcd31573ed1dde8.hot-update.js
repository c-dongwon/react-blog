"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view",{

/***/ "./pages/view/index.js":
/*!*****************************!*\
  !*** ./pages/view/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/view/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst View = () => {\n  _s();\n\n  const {\n    0: view,\n    1: setView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const params = new URLSearchParams(location.search);\n    let id = params.get(\"id\");\n    console.log(location.search);\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/view/22`).then(res => setView(res));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ViewTop, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          children: \"React\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 22\n        }, undefined), \"\\uB9AC\\uC561\\uD2B8\\uC5D0\\uB300\\uD574 \\uC54C\\uC544\\uBCF4\\uC790!\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"2022.07.12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 32\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(View, \"h0gZ9uIDVRoJuredj2E+H2YkJe4=\");\n\n_c = View;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxtQkEzQkosZUE0Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUJKLGVBNkJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCSixlQTZCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3Q0gsQ0FuREQ7O0dBQU1aOztLQUFBQTtBQXFETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWV3L2luZGV4LmpzPzAwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlY3Rpb24sIFZpZXdUb3AsIENvbnRlbnQgfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgbGV0IGlkID0gcGFyYW1zLmdldChcImlkXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS92aWV3LzIyYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFZpZXcocmVzKSlcbiAgICB9LFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPFZpZXdUb3A+XG4gICAgICAgICAgICAgICAgIDxoMj48c3Bhbj5SZWFjdDwvc3Bhbj7rpqzslaHtirjsl5DrjIDtlbQg7JWM7JWE67O07J6QITwvaDI+XG4gICAgICAgICAgICAgICAgIDxzcGFuPjIwMjIuMDcuMTI8L3NwYW4+XG4gICAgICAgICAgICA8L1ZpZXdUb3A+XG4gICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7N+fn5+fn5+fn5+fn5+fn5+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzfn5+fn5+fn5+fn5+fn5+fuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzs35+fn5+fn5+fn5+fn5+fn48L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD48cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3OyJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWN0aW9uIiwiVmlld1RvcCIsIkNvbnRlbnQiLCJ1c2VSb3V0ZXIiLCJWaWV3IiwidmlldyIsInNldFZpZXciLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImlkIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/index.js\n");

/***/ })

});
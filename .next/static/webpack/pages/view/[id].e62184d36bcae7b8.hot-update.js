"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/view/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst View = () => {\n  _s();\n\n  const {\n    0: view,\n    1: setView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  console.log();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const params = new URLSearchParams(location.search);\n    let id = params.get(\"id\");\n    console.log(location.search);\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/view/22`).then(res => setView(res));\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ViewTop, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          children: \"React\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 22\n        }, undefined), \"\\uB9AC\\uC561\\uD2B8\\uC5D0\\uB300\\uD574 \\uC54C\\uC544\\uBCF4\\uC790!\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"2022.07.12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 32\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(View, \"o6jSwyedRx1G0knPlzjBgD4xAiM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = View;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJKLGVBMkJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNCSixlQTRCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkosZUE2Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JKLGVBNkJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdDSCxDQXJERDs7R0FBTWI7VUFFYUQ7OztLQUZiQztBQXVETiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWV3L1tpZF0uanM/MGY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgVmlld1RvcCwgQ29udGVudCB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXG5cbiAgICBjb25zb2xlLmxvZygpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgICAgIGxldCBpZCA9IHBhcmFtcy5nZXQoXCJpZFwiKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24uc2VhcmNoKVxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvdmlldy8yMmApXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRWaWV3KHJlcykpXG4gICAgfSxbXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgIDxWaWV3VG9wPlxuICAgICAgICAgICAgICAgICA8aDI+PHNwYW4+UmVhY3Q8L3NwYW4+66as7JWh7Yq47JeQ64yA7ZW0IOyVjOyVhOuztOyekCE8L2gyPlxuICAgICAgICAgICAgICAgICA8c3Bhbj4yMDIyLjA3LjEyPC9zcGFuPlxuICAgICAgICAgICAgPC9WaWV3VG9wPlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzfn5+fn5+fn5+fn5+fn5+fuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzs35+fn5+fn5+fn5+fn5+fn7rgrTsmqnsnbTrk6TslrTqsIDripTqs7N+fn5+fn5+fn5+fn5+fn5+PC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuXG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+PHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldzsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VjdGlvbiIsIlZpZXdUb3AiLCJDb250ZW50IiwidXNlUm91dGVyIiwiVmlldyIsInZpZXciLCJzZXRWaWV3Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});
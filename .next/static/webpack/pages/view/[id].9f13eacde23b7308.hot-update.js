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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/view/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst View = () => {\n  _s();\n\n  const {\n    0: view,\n    1: setView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const id = router.query.id;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/view/${id}`).then(res => setView(res.data));\n  }, [id]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ViewTop, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: view === null || view === void 0 ? void 0 : view.category\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 22\n        }, undefined), view === null || view === void 0 ? void 0 : view.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Moment, {\n        format: \"YYYY.MM/DD\",\n        children: view === null || view === void 0 ? void 0 : view.createdAt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      dangerouslySetInnerHTML: {\n        __html: view === null || view === void 0 ? void 0 : view.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(View, \"o6jSwyedRx1G0knPlzjBgD4xAiM=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = View;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\nvar _c;\n\n$RefreshReg$(_c, \"View\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUyxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNmLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQlQsK0NBQVEsRUFBaEM7QUFDQSxRQUFNVSxNQUFNLEdBQUdMLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTU0sRUFBRSxHQUFHRCxNQUFNLENBQUNFLEtBQVAsQ0FBYUQsRUFBeEI7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pILElBQUFBLGdEQUFBLENBQVcsYUFBWWEsRUFBRyxFQUExQixFQUNDRyxJQURELENBQ01DLEdBQUcsSUFBSU4sT0FBTyxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FEcEI7QUFFSCxHQUhRLEVBR1AsQ0FBQ0wsRUFBRCxDQUhPLENBQVQ7QUFLQSxzQkFDSSw4REFBQywyQ0FBRDtBQUFBLDRCQUNJLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0s7QUFBQSxnQ0FBSTtBQUFBLG9CQUFPSCxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRVM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKLEVBQWtDVCxJQUFsQyxhQUFrQ0EsSUFBbEMsdUJBQWtDQSxJQUFJLENBQUVVLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETCxlQUVLLDhEQUFDLE1BQUQ7QUFBUSxjQUFNLEVBQUMsWUFBZjtBQUFBLGtCQUNJVixJQURKLGFBQ0lBLElBREosdUJBQ0lBLElBQUksQ0FBRVc7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU9JLDhEQUFDLDJDQUFEO0FBQVMsNkJBQXVCLEVBQUU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFWixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRWE7QUFBaEI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBdkJEOztHQUFNZDtVQUVhRjs7O0tBRmJFO0FBeUJOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcvW2lkXS5qcz8wZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWN0aW9uLCBWaWV3VG9wLCBDb250ZW50IH0gZnJvbSAnLi9zdHlsZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuY29uc3QgVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpOyBcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL3ZpZXcvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VmlldyhyZXMuZGF0YSkpXG4gICAgfSxbaWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPFZpZXdUb3A+XG4gICAgICAgICAgICAgICAgIDxoMj48c3Bhbj57dmlldz8uY2F0ZWdvcnl9PC9zcGFuPnt2aWV3Py50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICA8TW9tZW50IGZvcm1hdD1cIllZWVkuTU0vRERcIj5cbiAgICAgICAgICAgICAgICAgICAge3ZpZXc/LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgIDwvVmlld1RvcD5cbiAgICAgICAgICAgIDxDb250ZW50IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmlldz8uY29udGVudH19PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldzsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VjdGlvbiIsIlZpZXdUb3AiLCJDb250ZW50IiwidXNlUm91dGVyIiwibW9tZW50IiwiVmlldyIsInZpZXciLCJzZXRWaWV3Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ })

});
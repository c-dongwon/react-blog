"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/write",{

/***/ "./component/modal/Board.js":
/*!**********************************!*\
  !*** ./component/modal/Board.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./component/modal/style.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\component\\\\modal\\\\Board.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Board = ({\n  setShowBoard\n}) => {\n  _s();\n\n  const [category, onChangeCategory, setCategory] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/board/category', {\n    category: category\n  }).then(res => console.log(res));\n  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.LayerForm, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        children: \"\\uAC8C\\uC2DC\\uD310\\uC0DD\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.CloseBtn, {\n        type: \"button\",\n        onClick: () => setShowBoard(false),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsXLg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 77\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.FloatingLabel, {\n        className: \"login-input\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, {\n          type: \"text\",\n          placeholder: \"\\uAC8C\\uC2DC\\uD310 \\uC774\\uB984\",\n          id: \"id\",\n          value: category || \"\",\n          onChange: onChangeCategory\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"label\", {\n          htmlFor: \"id\",\n          children: \"\\uAC8C\\uC2DC\\uD310 \\uC774\\uB984\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.LoginBtn, {\n        type: \"submit\",\n        children: \"\\uC0DD\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Board, \"ftG7ySImMgEzh82oV/P/bnhshVU=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c;\n\n$RefreshReg$(_c, \"Board\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbW9kYWwvQm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNaUIsS0FBSyxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQW9CO0FBQUE7O0FBQzlCLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxnQkFBWCxFQUE2QkMsV0FBN0IsSUFBNENOLDBEQUFRLEVBQTFEO0FBRUFDLEVBQUFBLGlEQUFBLENBQVcscUJBQVgsRUFBaUM7QUFDN0JHLElBQUFBLFFBQVEsRUFBQ0E7QUFEb0IsR0FBakMsRUFHQ0ksSUFIRCxDQUdNQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBSGI7QUFLQSxRQUFNRyxRQUFRLEdBQUcxQixrREFBVyxDQUFDLE1BQU0sQ0FFbEMsQ0FGMkIsRUFFMUIsRUFGMEIsQ0FBNUI7QUFHQSxzQkFDSSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyw0Q0FBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQXdCLGVBQU8sRUFBRSxNQUFNaUIsWUFBWSxDQUFDLEtBQUQsQ0FBbkQ7QUFBQSwrQkFBNEQsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0ksOERBQUMsMERBQUQ7QUFDSSxpQkFBUyxFQUFDLGFBRGQ7QUFBQSxnQ0FFSSw4REFBQyx5REFBRDtBQUFjLGNBQUksRUFBQyxNQUFuQjtBQUEwQixxQkFBVyxFQUFDLGlDQUF0QztBQUErQyxZQUFFLEVBQUMsSUFBbEQ7QUFBdUQsZUFBSyxFQUFFQyxRQUFRLElBQUksRUFBMUU7QUFBOEUsa0JBQVEsRUFBRUM7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU8saUJBQU8sRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQVVJLDhEQUFDLDRDQUFEO0FBQVUsWUFBSSxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0JILENBN0JEOztHQUFNSDtVQUNnREY7OztLQURoREU7QUErQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vZGFsL0JvYXJkLmpzPzUxZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXllckZvcm0sIExvZ2luQnRuLCBTaWduVXBCdG4sIFVzZXJGb3JtLCBMb2dPdXRCdG4sIENsb3NlQnRuIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IEJzWExnIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEZsb2F0aW5nTGFiZWwsIEZvcm0sIENvbnRyb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rL3VzZUlucHV0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEJvYXJkID0gKHtzZXRTaG93Qm9hcmR9KSA9PiB7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnksIG9uQ2hhbmdlQ2F0ZWdvcnkgLHNldENhdGVnb3J5XSA9IHVzZUlucHV0KCk7XHJcblxyXG4gICAgYXhpb3MucG9zdCgnL2FwaS9ib2FyZC9jYXRlZ29yeScse1xyXG4gICAgICAgIGNhdGVnb3J5OmNhdGVnb3J5XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gICAgfSxbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXllckZvcm0+IFxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxoMj7qsozsi5ztjJDsg53shLE8L2gyPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnRuIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Qm9hcmQoZmFsc2UpfT48QnNYTGcvPjwvQ2xvc2VCdG4+XHJcbiAgICAgICAgICAgICAgICA8RmxvYXRpbmdMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwi6rKM7Iuc7YyQIOydtOumhFwiIGlkPVwiaWRcIiB2YWx1ZT17Y2F0ZWdvcnkgfHwgXCJcIn0gb25DaGFuZ2U9e29uQ2hhbmdlQ2F0ZWdvcnl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlkXCI+6rKM7Iuc7YyQIOydtOumhDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nTGFiZWw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExvZ2luQnRuIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgICAgICAgICAgICAgICAg7IOd7ISxXHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luQnRuPlxyXG4gICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgIDwvTGF5ZXJGb3JtPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMYXllckZvcm0iLCJMb2dpbkJ0biIsIlNpZ25VcEJ0biIsIlVzZXJGb3JtIiwiTG9nT3V0QnRuIiwiQ2xvc2VCdG4iLCJCc1hMZyIsIkZsb2F0aW5nTGFiZWwiLCJGb3JtIiwiQ29udHJvbCIsInVzZUlucHV0IiwiYXhpb3MiLCJCb2FyZCIsInNldFNob3dCb2FyZCIsImNhdGVnb3J5Iiwib25DaGFuZ2VDYXRlZ29yeSIsInNldENhdGVnb3J5IiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/modal/Board.js\n");

/***/ })

});
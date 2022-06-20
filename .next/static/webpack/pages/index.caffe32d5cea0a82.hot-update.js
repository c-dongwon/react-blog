"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ \"./pages/GlobalStyles.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _component_modal_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/modal/Login */ \"./component/modal/Login.js\");\n/* harmony import */ var _component_modal_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/modal/SignUp */ \"./component/modal/SignUp.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/modal/UserInfo */ \"./component/modal/UserInfo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = \"http://localhost:3000\";\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;\n\nconst index = () => {\n  _s();\n\n  const {\n    0: isDarkMode,\n    1: setIsDarkMode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showLogin,\n    1: setShowLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showSignUp,\n    1: setShowSignUp\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showUserInfo,\n    1: setShowUserInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cookies, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)(['user']);\n  const {\n    0: hasCookie,\n    1: setHasCookie\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (cookies.user && cookies.user !== 'undefined') {\n      setHasCookie(true);\n    }\n  }, [cookies]);\n  const onClickLogin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowLogin(prev => !prev);\n    setShowSignUp(false);\n    e.stopPropagation();\n  }, [showLogin]);\n  const onClickSignUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowSignUp(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onClickUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowUserInfo(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setShowLogin(false);\n    setShowSignUp(false);\n    setShowUserInfo(false);\n  }, [showLogin]);\n  const darkMod = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setIsDarkMode(prev => !prev);\n  }, [isDarkMode]);\n  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.stopPropagation();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    className: isDarkMode ? \"dark\" : \"\",\n    onClick: onCloseModal,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      darkMod: darkMod,\n      isDarkMode: isDarkMode,\n      onClickLogin: onClickLogin\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_modal_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      hasCookie: hasCookie,\n      cookies: cookies,\n      showLogin: showLogin,\n      stopPropagation: stopPropagation,\n      onClickSignUp: onClickSignUp,\n      onClickUserInfo: onClickUserInfo,\n      showUserInfo: showUserInfo,\n      showSignUp: showSignUp,\n      setHasCookie: setHasCookie,\n      removeCookie: removeCookie\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_modal_SignUp__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      showSignUp: showSignUp,\n      stopPropagation: stopPropagation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      showUserInfo: showUserInfo,\n      stopPropagation: stopPropagation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(index, \"Znwxv6PkvczFLOb3IlPNx+D2Ljo=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLEVBQTFDO0FBQThDLFdBQU8sRUFBRW1CLFlBQXZEO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLDhEQUFDLHlEQUFEO0FBQVEsYUFBTyxFQUFFQyxPQUFqQjtBQUEwQixnQkFBVSxFQUFFcEIsVUFBdEM7QUFBa0Qsa0JBQVksRUFBRWE7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUlJLDhEQUFDLDhEQUFEO0FBQU8sZUFBUyxFQUFFSCxTQUFsQjtBQUE2QixhQUFPLEVBQUVGLE9BQXRDO0FBQ0EsZUFBUyxFQUFFTixTQURYO0FBQ3NCLHFCQUFlLEVBQUVjLGVBRHZDO0FBRUEsbUJBQWEsRUFBRUMsYUFGZjtBQUU4QixxQkFBZSxFQUFFQyxlQUYvQztBQUdBLGtCQUFZLEVBQUVaLFlBSGQ7QUFHNEIsZ0JBQVUsRUFBRUYsVUFIeEM7QUFHb0Qsa0JBQVksRUFBRU8sWUFIbEU7QUFHZ0Ysa0JBQVksRUFBRUY7QUFIOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQVNJLDhEQUFDLCtEQUFEO0FBQVEsZ0JBQVUsRUFBRUwsVUFBcEI7QUFBZ0MscUJBQWUsRUFBRVk7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSixlQVVJLDhEQUFDLGlFQUFEO0FBQVUsa0JBQVksRUFBRVYsWUFBeEI7QUFBc0MscUJBQWUsRUFBRVU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWNILENBMUREOztHQUFNakI7VUFLZ0NMOzs7QUF1RHRDLCtEQUFlSyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50L2hlYWRlcic7XG5pbXBvcnQgIEdsb2JhbFN0eWxlcyBmcm9tIFwiLi9HbG9iYWxTdHlsZXNcIlxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9Mb2dpbic7XG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9TaWduVXAnO1xuaW1wb3J0IHsgd2l0aENvb2tpZXMsIHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9Vc2VySW5mbyc7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dTaWduVXAsIHNldFNob3dTaWduVXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93VXNlckluZm8sIHNldFNob3dVc2VySW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyBjb29raWVzLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMoWyAndXNlcicgXSk7ICBcbiAgICBjb25zdCBbIGhhc0Nvb2tpZSwgc2V0SGFzQ29va2llIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgICBcbiAgICAgICAgaWYgKGNvb2tpZXMudXNlciAmJiBjb29raWVzLnVzZXIgIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgc2V0SGFzQ29va2llKHRydWUpOyAgICBcbiAgICAgICAgIH0gIFxuICAgICAgfSwgWyBjb29raWVzIF0pO1xuXG4gICAgY29uc3Qgb25DbGlja0xvZ2luID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0U2hvd0xvZ2luKHByZXYgPT4gIXByZXYpO1xuICAgICAgICBzZXRTaG93U2lnblVwKGZhbHNlKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9LFtzaG93TG9naW5dKTtcblxuICAgIGNvbnN0IG9uQ2xpY2tTaWduVXA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIHNldFNob3dTaWduVXAocHJldiA9PiAhcHJldik7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxbc2hvd1NpZ25VcF0pO1xuXG4gICAgY29uc3Qgb25DbGlja1VzZXJJbmZvPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRTaG93VXNlckluZm8ocHJldiA9PiAhcHJldik7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSxbc2hvd1NpZ25VcF0pO1xuXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRTaG93TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXRTaG93U2lnblVwKGZhbHNlKTtcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKGZhbHNlKTtcbiAgICB9LFtzaG93TG9naW5dKVxuXG4gICAgY29uc3QgZGFya01vZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNEYXJrTW9kZShwcmV2ID0+ICFwcmV2KVxuICAgIH0sW2lzRGFya01vZGVdKTtcblxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LCBbXSk7XG4gICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2lzRGFya01vZGUgPyBcImRhcmtcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGVzLz5cbiAgICAgICAgICAgIDxIZWFkZXIgZGFya01vZD17ZGFya01vZH0gaXNEYXJrTW9kZT17aXNEYXJrTW9kZX0gb25DbGlja0xvZ2luPXtvbkNsaWNrTG9naW59Lz5cblxuICAgICAgICAgICAgPExvZ2luIGhhc0Nvb2tpZT17aGFzQ29va2llfSBjb29raWVzPXtjb29raWVzfSBcbiAgICAgICAgICAgIHNob3dMb2dpbj17c2hvd0xvZ2lufSBzdG9wUHJvcGFnYXRpb249e3N0b3BQcm9wYWdhdGlvbn0gXG4gICAgICAgICAgICBvbkNsaWNrU2lnblVwPXtvbkNsaWNrU2lnblVwfSBvbkNsaWNrVXNlckluZm89e29uQ2xpY2tVc2VySW5mb30gXG4gICAgICAgICAgICBzaG93VXNlckluZm89e3Nob3dVc2VySW5mb30gc2hvd1NpZ25VcD17c2hvd1NpZ25VcH0gc2V0SGFzQ29va2llPXtzZXRIYXNDb29raWV9IHJlbW92ZUNvb2tpZT17cmVtb3ZlQ29va2llfS8+XG5cbiAgICAgICAgICAgIDxTaWduVXAgc2hvd1NpZ25VcD17c2hvd1NpZ25VcH0gc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259Lz5cbiAgICAgICAgICAgIDxVc2VySW5mbyBzaG93VXNlckluZm89e3Nob3dVc2VySW5mb30gc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259Lz5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIZWFkZXIiLCJHbG9iYWxTdHlsZXMiLCJTZWN0aW9uIiwiTG9naW4iLCJTaWduVXAiLCJ3aXRoQ29va2llcyIsInVzZUNvb2tpZXMiLCJVc2VySW5mbyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImluZGV4IiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJzaG93U2lnblVwIiwic2V0U2hvd1NpZ25VcCIsInNob3dVc2VySW5mbyIsInNldFNob3dVc2VySW5mbyIsImNvb2tpZXMiLCJyZW1vdmVDb29raWUiLCJoYXNDb29raWUiLCJzZXRIYXNDb29raWUiLCJ1c2VyIiwib25DbGlja0xvZ2luIiwiZSIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrU2lnblVwIiwib25DbGlja1VzZXJJbmZvIiwib25DbG9zZU1vZGFsIiwiZGFya01vZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_choedong_won_Desktop_react_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyles */ \"./pages/GlobalStyles.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _component_modal_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/modal/Login */ \"./component/modal/Login.js\");\n/* harmony import */ var _component_modal_SignUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/modal/SignUp */ \"./component/modal/SignUp.js\");\n/* harmony import */ var _component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/modal/UserInfo */ \"./component/modal/UserInfo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_choedong_won_Desktop_react_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:3000\";\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.withCredentials) = true;\nconst theme = {\n  colors: {\n    primary: '#0070f3'\n  }\n};\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  _s();\n\n  const {\n    0: isDarkMode,\n    1: setIsDarkMode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showLogin,\n    1: setShowLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showSignUp,\n    1: setShowSignUp\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showUserInfo,\n    1: setShowUserInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [cookies, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_10__.useCookies)(['user']);\n  const {\n    0: hasCookie,\n    1: setHasCookie\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: loginData,\n    1: setLoginData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //쿠키저장\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (cookies.user && cookies.user !== 'undefined') {\n      setHasCookie(true);\n    }\n  }, [cookies]); //로그인 유지\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (JSON.stringify(cookies) !== \"{}\" && cookies.x_auth !== \"undefined\") {\n      setLoginData(true);\n    }\n  }, []); //로그인\n\n  const onClickLogin = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowLogin(prev => !prev);\n    setShowSignUp(false);\n    e.stopPropagation();\n  }, [showLogin]); //회원가입\n\n  const onClickSignUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowSignUp(prev => !prev);\n    setShowLogin(false);\n    e.stopPropagation();\n  }, [showSignUp]); //회원정보 수정\n\n  const onClickUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowUserInfo(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]); //modal close 함수\n\n  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    setShowLogin(false);\n    setShowSignUp(false);\n    setShowUserInfo(false);\n  }, [showLogin, showSignUp]);\n  const darkMod = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    setIsDarkMode(prev => !prev);\n  }, [isDarkMode]); //버블링 방지\n\n  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    e.stopPropagation();\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/user/auth\").then(res => {\n      setUserData(res.data);\n    });\n  }, [loginData, showUserInfo, showLogin]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_10__.CookiesProvider, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider, {\n        theme: theme,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Section, {\n          className: isDarkMode ? \"dark\" : \"\",\n          onClick: onCloseModal,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            darkMod: darkMod,\n            isDarkMode: isDarkMode,\n            userData: userData,\n            loginData: loginData,\n            onClickLogin: onClickLogin,\n            onClickUserInfo: onClickUserInfo\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, undefined), showLogin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_component_modal_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            setLoginData: setLoginData,\n            stopPropagation: stopPropagation,\n            setShowLogin: setShowLogin,\n            onClickSignUp: onClickSignUp\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 30\n          }, undefined), showSignUp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_component_modal_SignUp__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            stopPropagation: stopPropagation,\n            onClickLogin: onClickLogin\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 31\n          }, undefined), showUserInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            stopPropagation: stopPropagation,\n            removeCookie: removeCookie,\n            setShowUserInfo: setShowUserInfo,\n            userData: userData,\n            setLoginData: setLoginData\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 14\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 9\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(App, \"kewHQVjSetZH7D5cBxqGaoRH9C8=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_10__.useCookies];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9oZWFkZXInO1xuaW1wb3J0ICBHbG9iYWxTdHlsZXMgZnJvbSBcIi4vR2xvYmFsU3R5bGVzXCJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvTG9naW4nO1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvU2lnblVwJztcbmltcG9ydCB7IHdpdGhDb29raWVzLCB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvVXNlckluZm8nO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cblxuXG5jb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogJyMwMDcwZjMnLFxuICB9LFxufVxuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd0xvZ2luLCBzZXRTaG93TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93U2lnblVwLCBzZXRTaG93U2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd1VzZXJJbmZvLCBzZXRTaG93VXNlckluZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjb29raWVzLCByZW1vdmVDb29raWVdID0gdXNlQ29va2llcyhbICd1c2VyJyBdKTsgIFxuICAgIGNvbnN0IFtoYXNDb29raWUsIHNldEhhc0Nvb2tpZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhLCAgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbbG9naW5EYXRhLCBzZXRMb2dpbkRhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgIC8v7L+g7YKk7KCA7J6lXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgICAgXG4gICAgICAgIGlmIChjb29raWVzLnVzZXIgJiYgY29va2llcy51c2VyICE9PSAndW5kZWZpbmVkJykgeyBcbiAgICAgICAgICAgIHNldEhhc0Nvb2tpZSh0cnVlKTsgICAgXG4gICAgICAgICB9ICBcbiAgICAgIH0sIFsgY29va2llcyBdKTtcbiAgICBcbiAgICAvL+uhnOq3uOyduCDsnKDsp4BcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihKU09OLnN0cmluZ2lmeShjb29raWVzKSAhPT0gXCJ7fVwiICYmIGNvb2tpZXMueF9hdXRoICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIHNldExvZ2luRGF0YSh0cnVlKVxuICAgICAgICB9XG4gICAgIH0sW10pO1xuXG4gICAgLy/roZzqt7jsnbhcbiAgICBjb25zdCBvbkNsaWNrTG9naW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRTaG93TG9naW4ocHJldiA9PiAhcHJldik7XG4gICAgICAgIHNldFNob3dTaWduVXAoZmFsc2UpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sW3Nob3dMb2dpbl0pO1xuXG4gICAgLy/tmozsm5DqsIDsnoVcbiAgICBjb25zdCBvbkNsaWNrU2lnblVwPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBzZXRTaG93U2lnblVwKHByZXYgPT4gIXByZXYpO1xuICAgICAgICBzZXRTaG93TG9naW4oZmFsc2UpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sW3Nob3dTaWduVXBdKTtcblxuICAgIC8v7ZqM7JuQ7KCV67O0IOyImOyglVxuICAgIGNvbnN0IG9uQ2xpY2tVc2VySW5mbz0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKHByZXYgPT4gIXByZXYpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0sW3Nob3dTaWduVXBdKTtcblxuICAgIC8vbW9kYWwgY2xvc2Ug7ZWo7IiYXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRTaG93TG9naW4oZmFsc2UpO1xuICAgICAgICBzZXRTaG93U2lnblVwKGZhbHNlKTtcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKGZhbHNlKTtcbiAgICB9LFtzaG93TG9naW4sIHNob3dTaWduVXBdKVxuXG4gICAgY29uc3QgZGFya01vZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0SXNEYXJrTW9kZShwcmV2ID0+ICFwcmV2KVxuICAgIH0sW2lzRGFya01vZGVdKTtcblxuICAgIC8v67KE67iU66eBIOuwqeyngFxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LCBbXSk7XG4gICAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoXCIvYXBpL3VzZXIvYXV0aFwiKVxuICAgICAgICAudGhlbihyZXMgPT4ge3NldFVzZXJEYXRhKHJlcy5kYXRhKX0pXG4gICAgICAgIFxuICAgIH0sW2xvZ2luRGF0YSwgc2hvd1VzZXJJbmZvLCBzaG93TG9naW5dKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2lzRGFya01vZGUgPyBcImRhcmtcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG4gICAgICAgXG4gICAgICAgICAgICA8SGVhZGVyIGRhcmtNb2Q9e2RhcmtNb2R9IGlzRGFya01vZGU9e2lzRGFya01vZGV9IFxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17dXNlckRhdGF9IGxvZ2luRGF0YT17bG9naW5EYXRhfSBcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0xvZ2luPXtvbkNsaWNrTG9naW59IG9uQ2xpY2tVc2VySW5mbz17b25DbGlja1VzZXJJbmZvfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvd0xvZ2luICYmIDxMb2dpbiBzZXRMb2dpbkRhdGE9e3NldExvZ2luRGF0YX0gc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luPXtzZXRTaG93TG9naW59IG9uQ2xpY2tTaWduVXA9e29uQ2xpY2tTaWduVXB9Lz5cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93U2lnblVwICYmIDxTaWduVXAgc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259IG9uQ2xpY2tMb2dpbj17b25DbGlja0xvZ2lufS8+XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93VXNlckluZm8gJiYgPFVzZXJJbmZvIHN0b3BQcm9wYWdhdGlvbj17c3RvcFByb3BhZ2F0aW9ufSByZW1vdmVDb29raWU9e3JlbW92ZUNvb2tpZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VXNlckluZm89e3NldFNob3dVc2VySW5mb30gdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRMb2dpbkRhdGE9e3NldExvZ2luRGF0YX0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgIFxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJUaGVtZVByb3ZpZGVyIiwiQ29va2llc1Byb3ZpZGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIZWFkZXIiLCJHbG9iYWxTdHlsZXMiLCJTZWN0aW9uIiwiTG9naW4iLCJTaWduVXAiLCJ3aXRoQ29va2llcyIsInVzZUNvb2tpZXMiLCJVc2VySW5mbyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwic2hvd1NpZ25VcCIsInNldFNob3dTaWduVXAiLCJzaG93VXNlckluZm8iLCJzZXRTaG93VXNlckluZm8iLCJjb29raWVzIiwicmVtb3ZlQ29va2llIiwiaGFzQ29va2llIiwic2V0SGFzQ29va2llIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsInVzZXIiLCJKU09OIiwic3RyaW5naWZ5IiwieF9hdXRoIiwib25DbGlja0xvZ2luIiwiZSIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrU2lnblVwIiwib25DbGlja1VzZXJJbmZvIiwib25DbG9zZU1vZGFsIiwiZGFya01vZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});
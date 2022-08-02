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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_dw_react_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStyles */ \"./pages/GlobalStyles.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _component_modal_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/modal/Login */ \"./component/modal/Login.js\");\n/* harmony import */ var _component_modal_SignUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/modal/SignUp */ \"./component/modal/SignUp.js\");\n/* harmony import */ var _component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/modal/UserInfo */ \"./component/modal/UserInfo.js\");\n/* harmony import */ var _component_modal_Chat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/modal/Chat */ \"./component/modal/Chat.js\");\n/* harmony import */ var _lib_store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/store/configureStore */ \"./lib/store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\n\n\nvar _jsxFileName = \"D:\\\\dw\\\\react-blog\\\\pages\\\\_app.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dw_react_blog_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:3000\";\n(axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.withCredentials) = true;\nconst theme = {\n  colors: {\n    co: '#0070f3'\n  }\n};\nconst dark = {\n  colors: {\n    bgColor: '#121212',\n    titColor: '#ececec'\n  }\n};\nconst light = {\n  colors: {\n    tit0: '#000',\n    tit3: '#333'\n  }\n};\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  _s();\n\n  const {\n    0: isDarkMode,\n    1: setIsDarkMode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showLogin,\n    1: setShowLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showSignUp,\n    1: setShowSignUp\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showUserInfo,\n    1: setShowUserInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: showChat,\n    1: setShowChat\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [cookies, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_12__.useCookies)(['user']);\n  const {\n    0: hasCookie,\n    1: setHasCookie\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: loginData,\n    1: setLoginData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //쿠키저장\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (cookies.user && cookies.user !== 'undefined') {\n      setHasCookie(true);\n    }\n  }, [cookies]); //로그인 유지\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (JSON.stringify(cookies) !== \"{}\" && cookies.x_auth !== \"undefined\") {\n      setLoginData(true);\n    }\n  }, []); //로그인\n\n  const onClickLogin = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowLogin(prev => !prev);\n    setShowSignUp(false);\n    e.stopPropagation();\n  }, [showLogin]); //회원가입\n\n  const onClickSignUp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowSignUp(prev => !prev);\n    setShowLogin(false);\n    e.stopPropagation();\n  }, [showSignUp]); //회원정보 수정\n\n  const onClickUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowUserInfo(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]); //채팅\n\n  const onClickChat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    setShowChat(prev => !prev);\n    e.stopPropagation();\n  }, [showChat]); //modal close 함수\n\n  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    setShowLogin(false);\n    setShowSignUp(false);\n    setShowUserInfo(false);\n  }, [showLogin, showSignUp]);\n  const darkMod = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {\n    setIsDarkMode(prev => !prev);\n  }, [isDarkMode]); //버블링 방지\n\n  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {\n    e.stopPropagation();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_12__.CookiesProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_13__.ThemeProvider, {\n        theme: theme,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_5__.Section, {\n          className: isDarkMode ? \"dark\" : \"\",\n          onClick: onCloseModal,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            darkMod: darkMod,\n            isDarkMode: isDarkMode,\n            loginData: loginData,\n            onClickLogin: onClickLogin,\n            onClickUserInfo: onClickUserInfo,\n            onClickChat: onClickChat\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 25\n          }, undefined), showLogin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_component_modal_Login__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            setLoginData: setLoginData,\n            stopPropagation: stopPropagation,\n            setShowLogin: setShowLogin,\n            onClickSignUp: onClickSignUp\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 42\n          }, undefined), showSignUp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_component_modal_SignUp__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            stopPropagation: stopPropagation,\n            onClickLogin: onClickLogin,\n            setShowSignUp: setShowSignUp\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 43\n          }, undefined), showUserInfo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            stopPropagation: stopPropagation,\n            removeCookie: removeCookie,\n            setShowUserInfo: setShowUserInfo,\n            setLoginData: setLoginData\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 45\n          }, undefined), showChat && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_component_modal_Chat__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            stopPropagation: stopPropagation,\n            setShowChat: setShowChat\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 41\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false);\n};\n\n_s(App, \"7aoYgpyMBqYpTqmRogHHX66ghyY=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_12__.useCookies];\n});\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = _lib_store_configureStore__WEBPACK_IMPORTED_MODULE_10__[\"default\"].withRedux(App));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBLHVCQWhCeEIsRUFvQlFQLFFBQVEsaUJBQUksK0RBQUMsNkRBQUQ7QUFBTSwyQkFBZSxFQUFFZSxlQUF2QjtBQUF3Qyx1QkFBVyxFQUFFZDtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBCcEIsZUF1QkksK0RBQUMsU0FBRCxvQkFBZVYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBbUNILENBdEdEOztHQUFNRjtVQU04QmhCOzs7S0FOOUJnQjtBQXlHTiwrREFBZSxNQUFBYiw0RUFBQSxDQUFrQmEsR0FBbEIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVHbG9iYWxTdHlsZSwgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7Q29va2llc1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50L2hlYWRlcic7XHJcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4vR2xvYmFsU3R5bGVzXCJcclxuaW1wb3J0IHtTZWN0aW9ufSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9Mb2dpbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi4vY29tcG9uZW50L21vZGFsL1NpZ25VcCc7XHJcbmltcG9ydCB7d2l0aENvb2tpZXMsIHVzZUNvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvVXNlckluZm8nO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvQ2hhdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9saWIvc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICBjb2xvcnM6IHtcclxuICAgICAgICBjbzogJyMwMDcwZjMnLFxyXG4gICAgfSxcclxufVxyXG5jb25zdCBkYXJrID0ge1xyXG4gICAgY29sb3JzOntcclxuICAgICAgICBiZ0NvbG9yOicjMTIxMjEyJyxcclxuICAgICAgICB0aXRDb2xvcjonI2VjZWNlYydcclxuICAgIH1cclxufVxyXG5jb25zdCBsaWdodCA9IHtcclxuICAgIGNvbG9yczp7XHJcbiAgICAgICAgdGl0MDonIzAwMCcsXHJcbiAgICAgICAgdGl0MzonIzMzMycsXHJcbiAgICB9XHJcbn1cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NpZ25VcCwgc2V0U2hvd1NpZ25VcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1VzZXJJbmZvLCBzZXRTaG93VXNlckluZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDaGF0LCBzZXRTaG93Q2hhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29va2llcywgcmVtb3ZlQ29va2llXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pO1xyXG4gICAgY29uc3QgW2hhc0Nvb2tpZSwgc2V0SGFzQ29va2llXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2dpbkRhdGEsIHNldExvZ2luRGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLy/sv6DtgqTsoIDsnqVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvb2tpZXMudXNlciAmJiBjb29raWVzLnVzZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHNldEhhc0Nvb2tpZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY29va2llc10pO1xyXG5cclxuICAgIC8v66Gc6re47J24IOycoOyngFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29va2llcykgIT09IFwie31cIiAmJiBjb29raWVzLnhfYXV0aCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBzZXRMb2dpbkRhdGEodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy/roZzqt7jsnbhcclxuICAgIGNvbnN0IG9uQ2xpY2tMb2dpbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIHNldFNob3dTaWduVXAoZmFsc2UpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LCBbc2hvd0xvZ2luXSk7XHJcblxyXG4gICAgLy/tmozsm5DqsIDsnoVcclxuICAgIGNvbnN0IG9uQ2xpY2tTaWduVXAgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTaWduVXAocHJldiA9PiAhcHJldik7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKGZhbHNlKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSwgW3Nob3dTaWduVXBdKTtcclxuXHJcbiAgICAvL+2ajOybkOygleuztCDsiJjsoJVcclxuICAgIGNvbnN0IG9uQ2xpY2tVc2VySW5mbyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LCBbc2hvd1NpZ25VcF0pO1xyXG5cclxuICAgIC8v7LGE7YyFXHJcbiAgICBjb25zdCBvbkNsaWNrQ2hhdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0NoYXQocHJldiA9PiAhcHJldik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sIFtzaG93Q2hhdF0pO1xyXG5cclxuICAgIC8vbW9kYWwgY2xvc2Ug7ZWo7IiYXHJcbiAgICBjb25zdCBvbkNsb3NlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93U2lnblVwKGZhbHNlKTtcclxuICAgICAgICBzZXRTaG93VXNlckluZm8oZmFsc2UpO1xyXG4gICAgfSwgW3Nob3dMb2dpbiwgc2hvd1NpZ25VcF0pXHJcblxyXG4gICAgY29uc3QgZGFya01vZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc0RhcmtNb2RlKHByZXYgPT4gIXByZXYpXHJcbiAgICB9LCBbaXNEYXJrTW9kZV0pO1xyXG5cclxuICAgIC8v67KE67iU66eBIOuwqeyngFxyXG4gICAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb29raWVzUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17aXNEYXJrTW9kZSA/IFwiZGFya1wiIDogXCJcIn0gb25DbGljaz17b25DbG9zZU1vZGFsfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgZGFya01vZD17ZGFya01vZH0gaXNEYXJrTW9kZT17aXNEYXJrTW9kZX0gbG9naW5EYXRhPXtsb2dpbkRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0xvZ2luPXtvbkNsaWNrTG9naW59IG9uQ2xpY2tVc2VySW5mbz17b25DbGlja1VzZXJJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tDaGF0PXtvbkNsaWNrQ2hhdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TG9naW4gJiYgPExvZ2luIHNldExvZ2luRGF0YT17c2V0TG9naW5EYXRhfSBzdG9wUHJvcGFnYXRpb249e3N0b3BQcm9wYWdhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luPXtzZXRTaG93TG9naW59IG9uQ2xpY2tTaWduVXA9e29uQ2xpY2tTaWduVXB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NpZ25VcCAmJiA8U2lnblVwIHN0b3BQcm9wYWdhdGlvbj17c3RvcFByb3BhZ2F0aW9ufSBvbkNsaWNrTG9naW49e29uQ2xpY2tMb2dpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2lnblVwPXtzZXRTaG93U2lnblVwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VySW5mbyAmJiA8VXNlckluZm8gc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259IHJlbW92ZUNvb2tpZT17cmVtb3ZlQ29va2llfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93VXNlckluZm89e3NldFNob3dVc2VySW5mb30gc2V0TG9naW5EYXRhPXtzZXRMb2dpbkRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hhdCAmJiA8Q2hhdCBzdG9wUHJvcGFnYXRpb249e3N0b3BQcm9wYWdhdGlvbn0gc2V0U2hvd0NoYXQ9e3NldFNob3dDaGF0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoQXBwKTsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJUaGVtZVByb3ZpZGVyIiwiQ29va2llc1Byb3ZpZGVyIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIZWFkZXIiLCJHbG9iYWxTdHlsZXMiLCJTZWN0aW9uIiwiTG9naW4iLCJTaWduVXAiLCJ3aXRoQ29va2llcyIsInVzZUNvb2tpZXMiLCJVc2VySW5mbyIsIkNoYXQiLCJ3cmFwcGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwidGhlbWUiLCJjb2xvcnMiLCJjbyIsImRhcmsiLCJiZ0NvbG9yIiwidGl0Q29sb3IiLCJsaWdodCIsInRpdDAiLCJ0aXQzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJzaG93U2lnblVwIiwic2V0U2hvd1NpZ25VcCIsInNob3dVc2VySW5mbyIsInNldFNob3dVc2VySW5mbyIsInNob3dDaGF0Iiwic2V0U2hvd0NoYXQiLCJjb29raWVzIiwicmVtb3ZlQ29va2llIiwiaGFzQ29va2llIiwic2V0SGFzQ29va2llIiwibG9naW5EYXRhIiwic2V0TG9naW5EYXRhIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4X2F1dGgiLCJvbkNsaWNrTG9naW4iLCJlIiwicHJldiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2tTaWduVXAiLCJvbkNsaWNrVXNlckluZm8iLCJvbkNsaWNrQ2hhdCIsIm9uQ2xvc2VNb2RhbCIsImRhcmtNb2QiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});
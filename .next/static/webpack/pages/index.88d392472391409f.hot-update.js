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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ \"./pages/GlobalStyles.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _component_modal_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/modal/Login */ \"./component/modal/Login.js\");\n/* harmony import */ var _component_modal_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/modal/SignUp */ \"./component/modal/SignUp.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/modal/UserInfo */ \"./component/modal/UserInfo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = \"http://localhost:3000\";\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;\n\nconst index = () => {\n  _s();\n\n  const {\n    0: isDarkMode,\n    1: setIsDarkMode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showLogin,\n    1: setShowLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showSignUp,\n    1: setShowSignUp\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showUserInfo,\n    1: setShowUserInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cookies, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)(['user']);\n  const {\n    0: hasCookie,\n    1: setHasCookie\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const {\n    0: menuActive,\n    1: setMenuActive\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (cookies.user && cookies.user !== 'undefined') {\n      setHasCookie(true);\n    }\n  }, [cookies]);\n  const onClickLogin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowLogin(prev => !prev);\n    setShowSignUp(false);\n    e.stopPropagation();\n  }, [showLogin]);\n  const onClickSignUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowSignUp(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onClickUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowUserInfo(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setShowLogin(false);\n    setShowSignUp(false);\n    setShowUserInfo(false);\n  }, [showLogin]);\n  const darkMod = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setIsDarkMode(prev => !prev);\n  }, [isDarkMode]);\n  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.stopPropagation();\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"/api/user/auth\").then(res => {\n      setUserData(res.data);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    className: isDarkMode ? \"dark\" : \"\",\n    onClick: onCloseModal,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      darkMod: darkMod,\n      isDarkMode: isDarkMode,\n      onClickLogin: onClickLogin\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, undefined), showLogin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_modal_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      hasCookie: hasCookie,\n      cookies: cookies,\n      showLogin: showLogin,\n      stopPropagation: stopPropagation,\n      onClickSignUp: onClickSignUp,\n      onClickUserInfo: onClickUserInfo,\n      showUserInfo: showUserInfo,\n      showSignUp: showSignUp,\n      setHasCookie: setHasCookie,\n      removeCookie: removeCookie,\n      userData: userData,\n      setUserData: setUserData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 30\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(index, \"b5c5caBPp4FM7nhF3WTDy9CshQ8=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQWlFdEMsK0RBQWVLLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50L2hlYWRlcic7XHJcbmltcG9ydCAgR2xvYmFsU3R5bGVzIGZyb20gXCIuL0dsb2JhbFN0eWxlc1wiXHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9Mb2dpbic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi4vY29tcG9uZW50L21vZGFsL1NpZ25VcCc7XHJcbmltcG9ydCB7IHdpdGhDb29raWVzLCB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9Vc2VySW5mbyc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzRGFya01vZGUsIHNldElzRGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93U2lnblVwLCBzZXRTaG93U2lnblVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93VXNlckluZm8sIHNldFNob3dVc2VySW5mb10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGNvb2tpZXMsIHJlbW92ZUNvb2tpZSBdID0gdXNlQ29va2llcyhbICd1c2VyJyBdKTsgIFxyXG4gICAgY29uc3QgWyBoYXNDb29raWUsIHNldEhhc0Nvb2tpZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJEYXRhLCAgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgICAgXHJcbiAgICAgICAgaWYgKGNvb2tpZXMudXNlciAmJiBjb29raWVzLnVzZXIgIT09ICd1bmRlZmluZWQnKSB7IFxyXG4gICAgICAgICAgICBzZXRIYXNDb29raWUodHJ1ZSk7ICAgIFxyXG4gICAgICAgICB9ICBcclxuICAgICAgfSwgWyBjb29raWVzIF0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tMb2dpbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0xvZ2luKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIHNldFNob3dTaWduVXAoZmFsc2UpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFtzaG93TG9naW5dKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrU2lnblVwPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNob3dTaWduVXAocHJldiA9PiAhcHJldik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sW3Nob3dTaWduVXBdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrVXNlckluZm89IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFtzaG93U2lnblVwXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dMb2dpbihmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1NpZ25VcChmYWxzZSk7XHJcbiAgICAgICAgc2V0U2hvd1VzZXJJbmZvKGZhbHNlKTtcclxuICAgIH0sW3Nob3dMb2dpbl0pXHJcblxyXG4gICAgY29uc3QgZGFya01vZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc0RhcmtNb2RlKHByZXYgPT4gIXByZXYpXHJcbiAgICB9LFtpc0RhcmtNb2RlXSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICAgIFxyXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvdXNlci9hdXRoXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtzZXRVc2VyRGF0YShyZXMuZGF0YSl9KVxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2lzRGFya01vZGUgPyBcImRhcmtcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMvPlxyXG4gICAgICAgICAgICA8SGVhZGVyIGRhcmtNb2Q9e2RhcmtNb2R9IGlzRGFya01vZGU9e2lzRGFya01vZGV9IG9uQ2xpY2tMb2dpbj17b25DbGlja0xvZ2lufS8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2dpbiAmJiA8TG9naW4gaGFzQ29va2llPXtoYXNDb29raWV9IGNvb2tpZXM9e2Nvb2tpZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMb2dpbj17c2hvd0xvZ2lufSBzdG9wUHJvcGFnYXRpb249e3N0b3BQcm9wYWdhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja1NpZ25VcD17b25DbGlja1NpZ25VcH0gb25DbGlja1VzZXJJbmZvPXtvbkNsaWNrVXNlckluZm99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VySW5mbz17c2hvd1VzZXJJbmZvfSBzaG93U2lnblVwPXtzaG93U2lnblVwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIYXNDb29raWU9e3NldEhhc0Nvb2tpZX0gcmVtb3ZlQ29va2llPXtyZW1vdmVDb29raWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIZWFkZXIiLCJHbG9iYWxTdHlsZXMiLCJTZWN0aW9uIiwiTG9naW4iLCJTaWduVXAiLCJ3aXRoQ29va2llcyIsInVzZUNvb2tpZXMiLCJVc2VySW5mbyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImluZGV4IiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJzaG93U2lnblVwIiwic2V0U2hvd1NpZ25VcCIsInNob3dVc2VySW5mbyIsInNldFNob3dVc2VySW5mbyIsImNvb2tpZXMiLCJyZW1vdmVDb29raWUiLCJoYXNDb29raWUiLCJzZXRIYXNDb29raWUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJ1c2VyIiwib25DbGlja0xvZ2luIiwiZSIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrU2lnblVwIiwib25DbGlja1VzZXJJbmZvIiwib25DbG9zZU1vZGFsIiwiZGFya01vZCIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
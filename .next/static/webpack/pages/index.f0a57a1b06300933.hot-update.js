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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/header */ \"./component/header/index.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ \"./pages/GlobalStyles.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./pages/style.js\");\n/* harmony import */ var _component_modal_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/modal/Login */ \"./component/modal/Login.js\");\n/* harmony import */ var _component_modal_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/modal/SignUp */ \"./component/modal/SignUp.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _component_modal_UserInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/modal/UserInfo */ \"./component/modal/UserInfo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = \"http://localhost:3000\";\n(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.withCredentials) = true;\n\nconst index = () => {\n  _s();\n\n  const {\n    0: isDarkMode,\n    1: setIsDarkMode\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showLogin,\n    1: setShowLogin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showSignUp,\n    1: setShowSignUp\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: showUserInfo,\n    1: setShowUserInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [cookies, removeCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)(['user']);\n  const {\n    0: hasCookie,\n    1: setHasCookie\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const {\n    0: menuActive,\n    1: setMenuActive\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (cookies.user && cookies.user !== 'undefined') {\n      setHasCookie(true);\n    }\n  }, [cookies]);\n  const onClickLogin = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowLogin(prev => !prev);\n    setShowSignUp(false);\n    e.stopPropagation();\n  }, [showLogin]);\n  const onClickSignUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowSignUp(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onClickUserInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowUserInfo(prev => !prev);\n    e.stopPropagation();\n  }, [showSignUp]);\n  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setShowLogin(false);\n    setShowSignUp(false);\n    setShowUserInfo(false);\n  }, [showLogin]);\n  const darkMod = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setIsDarkMode(prev => !prev);\n  }, [isDarkMode]);\n  const stopPropagation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.stopPropagation();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    className: isDarkMode ? \"dark\" : \"\",\n    onClick: onCloseModal,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      darkMod: darkMod,\n      isDarkMode: isDarkMode,\n      userData: userData,\n      onClickLogin: onClickLogin\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, undefined), showLogin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_component_modal_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      hasCookie: hasCookie,\n      cookies: cookies,\n      showLogin: showLogin,\n      stopPropagation: stopPropagation,\n      onClickSignUp: onClickSignUp,\n      onClickUserInfo: onClickUserInfo,\n      showUserInfo: showUserInfo,\n      showSignUp: showSignUp,\n      setHasCookie: setHasCookie,\n      removeCookie: removeCookie,\n      userData: userData,\n      setUserData: setUserData\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 30\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(index, \"ouWBoBCJyTz+p6yfTcqj2EaMVmc=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdwQyxrREFBVyxDQUFFa0MsQ0FBRCxJQUFPO0FBQ3ZDQSxJQUFBQSxDQUFDLENBQUNFLGVBQUY7QUFDRCxHQUZnQyxFQUU5QixFQUY4QixDQUFuQztBQUlBLHNCQUNJLDhEQUFDLDJDQUFEO0FBQVMsYUFBUyxFQUFFcEIsVUFBVSxHQUFHLE1BQUgsR0FBWSxFQUExQztBQUE4QyxXQUFPLEVBQUV1QixZQUF2RDtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyx5REFBRDtBQUFRLGFBQU8sRUFBRUMsT0FBakI7QUFBMEIsZ0JBQVUsRUFBRXhCLFVBQXRDO0FBQWtELGNBQVEsRUFBRVksUUFBNUQ7QUFBc0Usa0JBQVksRUFBRUs7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixFQUlRZixTQUFTLGlCQUFJLDhEQUFDLDhEQUFEO0FBQU8sZUFBUyxFQUFFUSxTQUFsQjtBQUE2QixhQUFPLEVBQUVGLE9BQXRDO0FBQ08sZUFBUyxFQUFFTixTQURsQjtBQUM2QixxQkFBZSxFQUFFa0IsZUFEOUM7QUFFTyxtQkFBYSxFQUFFQyxhQUZ0QjtBQUVxQyxxQkFBZSxFQUFFQyxlQUZ0RDtBQUdPLGtCQUFZLEVBQUVoQixZQUhyQjtBQUdtQyxnQkFBVSxFQUFFRixVQUgvQztBQUlPLGtCQUFZLEVBQUVPLFlBSnJCO0FBSW1DLGtCQUFZLEVBQUVGLFlBSmpEO0FBS08sY0FBUSxFQUFFRyxRQUxqQjtBQUsyQixpQkFBVyxFQUFFQztBQUx4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdCSCxDQTlERDs7R0FBTWQ7VUFLZ0NMOzs7QUEyRHRDLCtEQUFlSyxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudC9oZWFkZXInO1xyXG5pbXBvcnQgIEdsb2JhbFN0eWxlcyBmcm9tIFwiLi9HbG9iYWxTdHlsZXNcIlxyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvTG9naW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudC9tb2RhbC9TaWduVXAnO1xyXG5pbXBvcnQgeyB3aXRoQ29va2llcywgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnQvbW9kYWwvVXNlckluZm8nO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1NpZ25VcCwgc2V0U2hvd1NpZ25VcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1VzZXJJbmZvLCBzZXRTaG93VXNlckluZm9dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBjb29raWVzLCByZW1vdmVDb29raWUgXSA9IHVzZUNvb2tpZXMoWyAndXNlcicgXSk7ICBcclxuICAgIGNvbnN0IFsgaGFzQ29va2llLCBzZXRIYXNDb29raWUgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyRGF0YSwgIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7ICAgIFxyXG4gICAgICAgIGlmIChjb29raWVzLnVzZXIgJiYgY29va2llcy51c2VyICE9PSAndW5kZWZpbmVkJykgeyBcclxuICAgICAgICAgICAgc2V0SGFzQ29va2llKHRydWUpOyAgICBcclxuICAgICAgICAgfSAgXHJcbiAgICAgIH0sIFsgY29va2llcyBdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrTG9naW4gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNob3dMb2dpbihwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICBzZXRTaG93U2lnblVwKGZhbHNlKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSxbc2hvd0xvZ2luXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1NpZ25VcD0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRTaG93U2lnblVwKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFtzaG93U2lnblVwXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja1VzZXJJbmZvPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNob3dVc2VySW5mbyhwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSxbc2hvd1NpZ25VcF0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2VNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93TG9naW4oZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dTaWduVXAoZmFsc2UpO1xyXG4gICAgICAgIHNldFNob3dVc2VySW5mbyhmYWxzZSk7XHJcbiAgICB9LFtzaG93TG9naW5dKVxyXG5cclxuICAgIGNvbnN0IGRhcmtNb2QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNEYXJrTW9kZShwcmV2ID0+ICFwcmV2KVxyXG4gICAgfSxbaXNEYXJrTW9kZV0pO1xyXG5cclxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24gY2xhc3NOYW1lPXtpc0RhcmtNb2RlID8gXCJkYXJrXCIgOiBcIlwifSBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGVzLz5cclxuICAgICAgICAgICAgPEhlYWRlciBkYXJrTW9kPXtkYXJrTW9kfSBpc0RhcmtNb2RlPXtpc0RhcmtNb2RlfSB1c2VyRGF0YT17dXNlckRhdGF9IG9uQ2xpY2tMb2dpbj17b25DbGlja0xvZ2lufS8+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2dpbiAmJiA8TG9naW4gaGFzQ29va2llPXtoYXNDb29raWV9IGNvb2tpZXM9e2Nvb2tpZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TG9naW49e3Nob3dMb2dpbn0gc3RvcFByb3BhZ2F0aW9uPXtzdG9wUHJvcGFnYXRpb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrU2lnblVwPXtvbkNsaWNrU2lnblVwfSBvbkNsaWNrVXNlckluZm89e29uQ2xpY2tVc2VySW5mb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dVc2VySW5mbz17c2hvd1VzZXJJbmZvfSBzaG93U2lnblVwPXtzaG93U2lnblVwfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGFzQ29va2llPXtzZXRIYXNDb29raWV9IHJlbW92ZUNvb2tpZT17cmVtb3ZlQ29va2llfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17dXNlckRhdGF9IHNldFVzZXJEYXRhPXtzZXRVc2VyRGF0YX0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhlYWRlciIsIkdsb2JhbFN0eWxlcyIsIlNlY3Rpb24iLCJMb2dpbiIsIlNpZ25VcCIsIndpdGhDb29raWVzIiwidXNlQ29va2llcyIsIlVzZXJJbmZvIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiaW5kZXgiLCJpc0RhcmtNb2RlIiwic2V0SXNEYXJrTW9kZSIsInNob3dMb2dpbiIsInNldFNob3dMb2dpbiIsInNob3dTaWduVXAiLCJzZXRTaG93U2lnblVwIiwic2hvd1VzZXJJbmZvIiwic2V0U2hvd1VzZXJJbmZvIiwiY29va2llcyIsInJlbW92ZUNvb2tpZSIsImhhc0Nvb2tpZSIsInNldEhhc0Nvb2tpZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsInVzZXIiLCJvbkNsaWNrTG9naW4iLCJlIiwicHJldiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2tTaWduVXAiLCJvbkNsaWNrVXNlckluZm8iLCJvbkNsb3NlTW9kYWwiLCJkYXJrTW9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
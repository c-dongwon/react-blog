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

/***/ "./component/modal/Chat.js":
/*!*********************************!*\
  !*** ./component/modal/Chat.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./component/modal/style.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\component\\\\modal\\\\Chat.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Chat = ({\n  setShowChat,\n  stopPropagation\n}) => {\n  _s();\n\n  const [chat, onChangeChat, setChat] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"\");\n  const onSiubmitChat = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefalut();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.ChatBox, {\n    onClick: stopPropagation,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"top\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillPersonFill, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 26\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: \"\\uAD00\\uB9AC\\uC790\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.CloseBtn, {\n        type: \"button\",\n        onClick: () => setShowChat(false),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsXLg, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 76\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"left\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: \"\\uC548\\uB155 \\u314B\\u314B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"right\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: \"\\uC6C5 \\u314B\\u314B\\u314B \\uC548\\uB155~\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"left\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          children: \"\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\\uC548\\uB155 \\u314B\\u314B\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"bottom\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"textarea\", {\n        onChange: onChangeChat,\n        value: chat\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillArrowUpCircleFill, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 39\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Chat, \"ip5Mw8aDxqLsMJRZ3l0W/DDsKaM=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbW9kYWwvQ2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1TLElBQUksR0FBRyxDQUFDO0FBQUNDLEVBQUFBLFdBQUQ7QUFBY0MsRUFBQUE7QUFBZCxDQUFELEtBQW9DO0FBQUE7O0FBQzdDLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxZQUFQLEVBQXFCQyxPQUFyQixJQUFnQ1AsMERBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUEsUUFBTVEsYUFBYSxHQUFHUCxrREFBVyxDQUFFUSxDQUFELElBQU87QUFDckNBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRmdDLEVBRS9CLEVBRitCLENBQWpDO0FBR0Esc0JBQ0ksOERBQUMsMkNBQUQ7QUFBUyxXQUFPLEVBQUVOLGVBQWxCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FBSyw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLDhEQUFDLDRDQUFEO0FBQVUsWUFBSSxFQUFDLFFBQWY7QUFBd0IsZUFBTyxFQUFFLE1BQU1ELFdBQVcsQ0FBQyxLQUFELENBQWxEO0FBQUEsK0JBQTJELDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQU9JO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQW9CSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0k7QUFBVSxnQkFBUSxFQUFFRyxZQUFwQjtBQUFrQyxhQUFLLEVBQUVEO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUEsK0JBQXNCLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkJILENBakNEOztHQUFNSDtVQUNvQ0Y7OztLQURwQ0U7QUFtQ04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vZGFsL0NoYXQuanM/ODc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGF0Qm94LCBDbG9zZUJ0biB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBCc0NhbWVyYUZpbGwsIEJzWExnLCBCc0ZpbGxBcnJvd1VwQ2lyY2xlRmlsbCwgQnNGaWxsUGVyc29uRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9vay91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7c2V0U2hvd0NoYXQsIHN0b3BQcm9wYWdhdGlvbn0pID0+IHtcclxuICAgIGNvbnN0IFtjaGF0LCBvbkNoYW5nZUNoYXQsIHNldENoYXRdID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG4gICAgY29uc3Qgb25TaXVibWl0Q2hhdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYWx1dCgpO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYXRCb3ggb25DbGljaz17c3RvcFByb3BhZ2F0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48QnNGaWxsUGVyc29uRmlsbC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+6rSA66as7J6QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0NoYXQoZmFsc2UpfT48QnNYTGcvPjwvQ2xvc2VCdG4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+7JWI64WVIOOFi+OFizwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8cD7sm4Ug44WL44WL44WLIOyViOuFlX48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8cD7slYjrhZUg44WL44WL7JWI64WVIOOFi+OFi+yViOuFlSDjhYvjhYvslYjrhZUg44WL44WL7JWI64WVIOOFi+OFi+yViOuFlSDjhYvjhYvslYjrhZUg44WL44WL7JWI64WVIOOFi+OFi+yViOuFlSDjhYvjhYvslYjrhZUg44WL44WL7JWI64WVIOOFi+OFizwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXtvbkNoYW5nZUNoYXR9IHZhbHVlPXtjaGF0fT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+PEJzRmlsbEFycm93VXBDaXJjbGVGaWxsLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DaGF0Qm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhdEJveCIsIkNsb3NlQnRuIiwiQnNDYW1lcmFGaWxsIiwiQnNYTGciLCJCc0ZpbGxBcnJvd1VwQ2lyY2xlRmlsbCIsIkJzRmlsbFBlcnNvbkZpbGwiLCJ1c2VJbnB1dCIsInVzZUNhbGxiYWNrIiwiQ2hhdCIsInNldFNob3dDaGF0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2hhdCIsIm9uQ2hhbmdlQ2hhdCIsInNldENoYXQiLCJvblNpdWJtaXRDaGF0IiwiZSIsInByZXZlbnREZWZhbHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/modal/Chat.js\n");

/***/ })

});
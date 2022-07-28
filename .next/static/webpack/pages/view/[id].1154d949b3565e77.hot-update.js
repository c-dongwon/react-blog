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

/***/ "./pages/view/Comment.js":
/*!*******************************!*\
  !*** ./pages/view/Comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\dw\\\\react-blog\\\\pages\\\\view\\\\Comment.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Comment = ({\n  id\n}) => {\n  _s();\n\n  const [comment, onChangeComment, setComment] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n  const {\n    0: commentList,\n    1: setCommentList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: refresh,\n    1: setRefresh\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/board/comment`, {\n      idx: id,\n      name: \"test\",\n      content: comment\n    }).then(res => {\n      setComment(\"\");\n      setRefresh(prev => !prev);\n    });\n  }, [comment]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/board/comment/${id}`).then(res => {\n      setCommentList(res.data);\n    });\n  }, [refresh]);\n  if (!commentList) return false;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.CommentBox, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n        children: \"0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined), \"\\uAC1C\\uC758 \\uB313\\uAE00\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"commentInput\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"form\", {\n        onSubmit: onSubmitComment,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"textarea\", {\n          placeholder: \"\\uB313\\uAE00\\uC744 \\uC791\\uC131\\uD574\\uC8FC\\uC138\\uC694\",\n          onChange: onChangeComment,\n          value:  false || comment\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"\\uC791\\uC131\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"commentList\",\n      children: commentList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: item.createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 33\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: item.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 25\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Comment, \"az6sJrxxfZe3dl3lL+MEMtYe+BE=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZXcvQ29tbWVudC5qcz9kMGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29tbWVudEJveH0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uL2hvb2svdXNlSW5wdXRcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgQ29tbWVudCA9ICh7aWR9KSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRMaXN0LCBzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXhpb3MucG9zdChgL2FwaS9ib2FyZC9jb21tZW50YCx7XHJcbiAgICAgICAgICAgIGlkeDppZCxcclxuICAgICAgICAgICAgbmFtZTpcInRlc3RcIixcclxuICAgICAgICAgICAgY29udGVudDpjb21tZW50XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRSZWZyZXNoKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSxbY29tbWVudF0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYC9hcGkvYm9hcmQvY29tbWVudC8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50TGlzdChyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sW3JlZnJlc2hdKVxyXG4gICAgaWYoIWNvbW1lbnRMaXN0KSByZXR1cm4gZmFsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbW1lbnRCb3g+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+MDwvc3Bhbj7qsJzsnZgg64yT6riAXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50SW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdENvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnpHshLHtlbTso7zshLjsmpRcIiBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fSB2YWx1ZT17XCJcIiB8fCBjb21tZW50fT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuyekeyEsTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRMaXN0Lm1hcChpdGVtID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5jcmVhdGVkQXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0NvbW1lbnRCb3g+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29tbWVudEJveCIsImF4aW9zIiwidXNlSW5wdXQiLCJ1c2VSb3V0ZXIiLCJDb21tZW50IiwiaWQiLCJjb21tZW50Iiwib25DaGFuZ2VDb21tZW50Iiwic2V0Q29tbWVudCIsImNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudExpc3QiLCJyZWZyZXNoIiwic2V0UmVmcmVzaCIsIm9uU3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJpZHgiLCJuYW1lIiwiY29udGVudCIsInRoZW4iLCJyZXMiLCJwcmV2IiwiZ2V0IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/Comment.js\n");

/***/ })

});
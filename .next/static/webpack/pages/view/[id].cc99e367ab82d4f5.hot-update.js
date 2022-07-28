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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\dw\\\\react-blog\\\\pages\\\\view\\\\Comment.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Comment = () => {\n  _s();\n\n  const [comment, onChangeComment, setComment] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"\");\n  const {\n    0: commentList,\n    1: setCommentList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: refresh,\n    1: setRefresh\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const id = router.query.id;\n  const onSubmitComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_2___default().post(`/api/board/comment`, {\n      idx: id,\n      name: \"test\",\n      content: comment\n    }).then(res => {\n      setComment(\"\");\n      setRefresh(prev => !prev);\n    });\n  }, [comment]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/board/comment/${id}`).then(res => {\n      setCommentList(res.data);\n    });\n  }, [refresh]);\n  if (!commentList) return false;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.CommentBox, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n        children: \"0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), \"\\uAC1C\\uC758 \\uB313\\uAE00\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"commentInput\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"form\", {\n        onSubmit: onSubmitComment,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"textarea\", {\n          placeholder: \"\\uB313\\uAE00\\uC744 \\uC791\\uC131\\uD574\\uC8FC\\uC138\\uC694\",\n          onChange: onChangeComment,\n          value:  false || comment\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"\\uC791\\uC131\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"commentList\",\n      children: commentList.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: item.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 33\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n            children: item.createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 33\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 29\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n          children: item.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 25\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Comment, \"3gMzgQZerrkj1vsx/q4BsBE4Abo=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBOEJILENBMUREOztHQUFNakI7VUFDNkNGLHdEQUloQ0M7OztLQUxiQztBQTRETiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWV3L0NvbW1lbnQuanM/ZDBmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbW1lbnRCb3h9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi9ob29rL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudCwgb25DaGFuZ2VDb21tZW50LCBzZXRDb21tZW50XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRMaXN0LCBzZXRDb21tZW50TGlzdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcmVmcmVzaCwgc2V0UmVmcmVzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvYm9hcmQvY29tbWVudGAse1xyXG4gICAgICAgICAgICBpZHg6aWQsXHJcbiAgICAgICAgICAgIG5hbWU6XCJ0ZXN0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6Y29tbWVudFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVmcmVzaChwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sW2NvbW1lbnRdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2JvYXJkL2NvbW1lbnQvJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudExpc3QocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFtyZWZyZXNoXSlcclxuICAgIGlmKCFjb21tZW50TGlzdCkgcmV0dXJuIGZhbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tZW50Qm94PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPjA8L3NwYW4+6rCc7J2YIOuMk+q4gFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudElucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCLrjJPquIDsnYQg7J6R7ISx7ZW07KO87IS47JqUXCIgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH0gdmFsdWU9e1wiXCIgfHwgY29tbWVudH0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7snpHshLE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29tbWVudExpc3RcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50TGlzdC5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uY3JlYXRlZEF0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db21tZW50Qm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbW1lbnRCb3giLCJheGlvcyIsInVzZUlucHV0IiwidXNlUm91dGVyIiwiQ29tbWVudCIsImNvbW1lbnQiLCJvbkNoYW5nZUNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudExpc3QiLCJzZXRDb21tZW50TGlzdCIsInJlZnJlc2giLCJzZXRSZWZyZXNoIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIm9uU3VibWl0Q29tbWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJpZHgiLCJuYW1lIiwiY29udGVudCIsInRoZW4iLCJyZXMiLCJwcmV2IiwiZ2V0IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/Comment.js\n");

/***/ })

});
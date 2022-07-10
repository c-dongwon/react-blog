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

/***/ "./pages/write/index.js":
/*!******************************!*\
  !*** ./pages/write/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/write/style.js\");\n/* harmony import */ var _component_modal_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/modal/Board */ \"./component/modal/Board.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./pages/write/edit.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\write\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Write = () => {\n  _s();\n\n  const {\n    0: showBoard,\n    1: setShowBoard\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [categoryList, onChangeCategoryList, setCategoryList] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //게시판생성\n\n  const onClickBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowBoard(prev => !prev);\n    e.stopPropagation();\n  }, [showBoard]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/board/category\").then(res => setCategoryList(res));\n  }, []);\n  console;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"writeTop\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"select\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"option\", {\n          children: \"\\uAC8C\\uC2DC\\uD310 \\uC120\\uD0DD\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: onClickBoard,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsClipboardPlus, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 63\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined), showBoard && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_component_modal_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      setShowBoard: setShowBoard\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 28\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"btnWrap\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"\\uC791\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Write, \"j4FdH1hkzVcrTx25XLLda3L4QLw=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\n\nvar _c;\n\n$RefreshReg$(_c, \"Write\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93cml0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVUsS0FBSyxHQUFHLE1BQU07QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNLENBQUNXLFlBQUQsRUFBZUMsb0JBQWYsRUFBcUNDLGVBQXJDLElBQXdETiwwREFBUSxFQUF0RSxDQUZnQixDQUlmOztBQUNELFFBQU1PLFlBQVksR0FBRWYsa0RBQVcsQ0FBRWdCLENBQUQsSUFBTztBQUNuQ0wsSUFBQUEsWUFBWSxDQUFDTSxJQUFJLElBQUksQ0FBQ0EsSUFBVixDQUFaO0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNILEdBSDhCLEVBRzdCLENBQUNSLFNBQUQsQ0FINkIsQ0FBL0I7QUFLQVIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pLLElBQUFBLGdEQUFBLENBQVUscUJBQVYsRUFDQ2EsSUFERCxDQUNNQyxHQUFHLElBQUlQLGVBQWUsQ0FBQ08sR0FBRCxDQUQ1QjtBQUVILEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQUMsRUFBQUEsT0FBTztBQUNQLHNCQUNJLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNLO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMLGVBRUs7QUFBQSwrQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkwsZUFVSztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRVAsWUFBL0I7QUFBQSwrQkFBNkMsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQWNNTCxTQUFTLGlCQUFJLDhEQUFDLDhEQUFEO0FBQU8sa0JBQVksRUFBRUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkbkIsZUFnQkksOERBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUFpQkk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXdCSCxDQXZDRDs7R0FBTUY7VUFFNEREOzs7S0FGNURDO0FBeUNOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dyaXRlL2luZGV4LmpzP2JjYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnNDbGlwYm9hcmRQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9tb2RhbC9Cb2FyZCc7XHJcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dCb2FyZCwgc2V0U2hvd0JvYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUxpc3QsIG9uQ2hhbmdlQ2F0ZWdvcnlMaXN0LCBzZXRDYXRlZ29yeUxpc3RdID0gdXNlSW5wdXQoKTtcclxuXHJcbiAgICAgLy/qsozsi5ztjJDsg53shLFcclxuICAgIGNvbnN0IG9uQ2xpY2tCb2FyZD0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRTaG93Qm9hcmQocHJldiA9PiAhcHJldik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sW3Nob3dCb2FyZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9ib2FyZC9jYXRlZ29yeVwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiBzZXRDYXRlZ29yeUxpc3QocmVzKSlcclxuICAgIH0sW10pO1xyXG4gICAgY29uc29sZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyaXRlVG9wJz5cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0n7KCc66qp7J2EIOyeheugpe2VtOyjvOyEuOyalC4nLz5cclxuICAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+6rKM7Iuc7YyQIOyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5TGlzdC5tYXAoaXRlbSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj57aXRlbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtvbkNsaWNrQm9hcmR9PjxCc0NsaXBib2FyZFBsdXMvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNob3dCb2FyZCAmJiA8Qm9hcmQgc2V0U2hvd0JvYXJkPXtzZXRTaG93Qm9hcmR9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8RWRpdC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG5XcmFwJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz7snpHshLE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCc0NsaXBib2FyZFBsdXMiLCJTZWN0aW9uIiwiQm9hcmQiLCJFZGl0IiwiYXhpb3MiLCJ1c2VJbnB1dCIsIldyaXRlIiwic2hvd0JvYXJkIiwic2V0U2hvd0JvYXJkIiwiY2F0ZWdvcnlMaXN0Iiwib25DaGFuZ2VDYXRlZ29yeUxpc3QiLCJzZXRDYXRlZ29yeUxpc3QiLCJvbkNsaWNrQm9hcmQiLCJlIiwicHJldiIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/write/index.js\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/write/style.js\");\n/* harmony import */ var _component_modal_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/modal/Board */ \"./component/modal/Board.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./pages/write/edit.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\write\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Write = () => {\n  _s();\n\n  const {\n    0: showBoard,\n    1: setShowBoard\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [categoryList, onChangeCategoryList, setCategoryList] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //게시판생성\n\n  const onClickBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowBoard(prev => !prev);\n    e.stopPropagation();\n  }, [showBoard]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/board/category\").then(res => setCategoryList(res));\n  }, []);\n  console.log(categoryList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"writeTop\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"select\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"option\", {\n          children: \"\\uAC8C\\uC2DC\\uD310 \\uC120\\uD0DD\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: onClickBoard,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsClipboardPlus, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 63\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined), showBoard && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_component_modal_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      setShowBoard: setShowBoard\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 28\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"btnWrap\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"\\uC791\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Write, \"j4FdH1hkzVcrTx25XLLda3L4QLw=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\n\nvar _c;\n\n$RefreshReg$(_c, \"Write\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93cml0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVUsS0FBSyxHQUFHLE1BQU07QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCViwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNLENBQUNXLFlBQUQsRUFBZUMsb0JBQWYsRUFBcUNDLGVBQXJDLElBQXdETiwwREFBUSxFQUF0RSxDQUZnQixDQUlmOztBQUNELFFBQU1PLFlBQVksR0FBRWYsa0RBQVcsQ0FBRWdCLENBQUQsSUFBTztBQUNuQ0wsSUFBQUEsWUFBWSxDQUFDTSxJQUFJLElBQUksQ0FBQ0EsSUFBVixDQUFaO0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNILEdBSDhCLEVBRzdCLENBQUNSLFNBQUQsQ0FINkIsQ0FBL0I7QUFLQVIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pLLElBQUFBLGdEQUFBLENBQVUscUJBQVYsRUFDQ2EsSUFERCxDQUNNQyxHQUFHLElBQUlQLGVBQWUsQ0FBQ08sR0FBRCxDQUQ1QjtBQUVILEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFlBQVo7QUFDQSxzQkFDSSw4REFBQywyQ0FBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDSztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETCxlQUVLO0FBQUEsK0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZMLGVBVUs7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVHLFlBQS9CO0FBQUEsK0JBQTZDLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFjTUwsU0FBUyxpQkFBSSw4REFBQyw4REFBRDtBQUFPLGtCQUFZLEVBQUVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZG5CLGVBZ0JJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKLGVBaUJJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3QkgsQ0F2Q0Q7O0dBQU1GO1VBRTRERDs7O0tBRjVEQztBQXlDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93cml0ZS9pbmRleC5qcz9iY2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJzQ2xpcGJvYXJkUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvbW9kYWwvQm9hcmQnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9vay91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBXcml0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93Qm9hcmQsIHNldFNob3dCb2FyZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlMaXN0LCBvbkNoYW5nZUNhdGVnb3J5TGlzdCwgc2V0Q2F0ZWdvcnlMaXN0XSA9IHVzZUlucHV0KCk7XHJcblxyXG4gICAgIC8v6rKM7Iuc7YyQ7IOd7ISxXHJcbiAgICBjb25zdCBvbkNsaWNrQm9hcmQ9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0JvYXJkKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFtzaG93Qm9hcmRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYm9hcmQvY2F0ZWdvcnlcIilcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0Q2F0ZWdvcnlMaXN0KHJlcykpXHJcbiAgICB9LFtdKTtcclxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5TGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cml0ZVRvcCc+XHJcbiAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J+ygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQuJy8+XHJcbiAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuqyjOyLnO2MkCDshKDtg508L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3QubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+e2l0ZW19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAqL31cclxuICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17b25DbGlja0JvYXJkfT48QnNDbGlwYm9hcmRQbHVzLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzaG93Qm9hcmQgJiYgPEJvYXJkIHNldFNob3dCb2FyZD17c2V0U2hvd0JvYXJkfS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEVkaXQvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuV3JhcCc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+7J6R7ISxPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnNDbGlwYm9hcmRQbHVzIiwiU2VjdGlvbiIsIkJvYXJkIiwiRWRpdCIsImF4aW9zIiwidXNlSW5wdXQiLCJXcml0ZSIsInNob3dCb2FyZCIsInNldFNob3dCb2FyZCIsImNhdGVnb3J5TGlzdCIsIm9uQ2hhbmdlQ2F0ZWdvcnlMaXN0Iiwic2V0Q2F0ZWdvcnlMaXN0Iiwib25DbGlja0JvYXJkIiwiZSIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/write/index.js\n");

/***/ })

});
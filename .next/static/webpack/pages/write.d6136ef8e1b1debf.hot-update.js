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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/write/style.js\");\n/* harmony import */ var _component_modal_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/modal/Board */ \"./component/modal/Board.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./pages/write/edit.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\write\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Write = () => {\n  _s();\n\n  const {\n    0: showBoard,\n    1: setShowBoard\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //게시판생성\n\n  const onClickBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowBoard(prev => !prev);\n    e.stopPropagation();\n  }, [showBoard]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"writeTop\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"select\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n          children: \"\\uAC8C\\uC2DC\\uD310 \\uC120\\uD0DD\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: onClickBoard,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsClipboardPlus, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 63\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), showBoard && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_component_modal_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      setShowBoard: setShowBoard\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 28\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"btnWrap\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"\\uC791\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Write, \"V01gy3bpfU2TRmw8voCBJ0HpkbU=\");\n\n_c = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\n\nvar _c;\n\n$RefreshReg$(_c, \"Write\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93cml0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVMsS0FBSyxHQUFHLE1BQU07QUFBQTs7QUFDaEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCVCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUMsQ0FEZ0IsQ0FHZjs7QUFDRCxRQUFNVSxZQUFZLEdBQUVYLGtEQUFXLENBQUVZLENBQUQsSUFBTztBQUNuQ0YsSUFBQUEsWUFBWSxDQUFDRyxJQUFJLElBQUksQ0FBQ0EsSUFBVixDQUFaO0FBQ0FELElBQUFBLENBQUMsQ0FBQ0UsZUFBRjtBQUNILEdBSDhCLEVBRzdCLENBQUNMLFNBQUQsQ0FINkIsQ0FBL0I7QUFLQVAsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pLLElBQUFBLGdEQUFBO0FBQ0gsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLHNCQUNJLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNLO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMLGVBRUs7QUFBQSwrQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkwsZUFLSztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUksWUFBL0I7QUFBQSwrQkFBNkMsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQVNNRixTQUFTLGlCQUFJLDhEQUFDLDhEQUFEO0FBQU8sa0JBQVksRUFBRUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUbkIsZUFXSSw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKLGVBWUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBL0JEOztHQUFNRjs7S0FBQUE7QUFpQ04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd3JpdGUvaW5kZXguanM/YmNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCc0NsaXBib2FyZFBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L21vZGFsL0JvYXJkJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dCb2FyZCwgc2V0U2hvd0JvYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgLy/qsozsi5ztjJDsg53shLFcclxuICAgIGNvbnN0IG9uQ2xpY2tCb2FyZD0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRTaG93Qm9hcmQocHJldiA9PiAhcHJldik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0sW3Nob3dCb2FyZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JpdGVUb3AnPlxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSfsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqULicvPlxyXG4gICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7qsozsi5ztjJAg7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e29uQ2xpY2tCb2FyZH0+PEJzQ2xpcGJvYXJkUGx1cy8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2hvd0JvYXJkICYmIDxCb2FyZCBzZXRTaG93Qm9hcmQ9e3NldFNob3dCb2FyZH0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxFZGl0Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bldyYXAnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuyekeyEsTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJzQ2xpcGJvYXJkUGx1cyIsIlNlY3Rpb24iLCJCb2FyZCIsIkVkaXQiLCJheGlvcyIsIldyaXRlIiwic2hvd0JvYXJkIiwic2V0U2hvd0JvYXJkIiwib25DbGlja0JvYXJkIiwiZSIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/write/index.js\n");

/***/ })

});
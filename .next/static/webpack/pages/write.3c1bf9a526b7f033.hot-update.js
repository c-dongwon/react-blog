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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/write/style.js\");\n/* harmony import */ var _component_modal_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/modal/Board */ \"./component/modal/Board.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./pages/write/edit.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\write\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Write = () => {\n  _s();\n\n  const {\n    0: showBoard,\n    1: setShowBoard\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); //게시판생성\n\n  const onClickBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowBoard(prev => !prev);\n    e.stopPropagation();\n  }, [showBoard]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"writeTop\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"select\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"option\", {\n          children: \"\\uAC8C\\uC2DC\\uD310 \\uC120\\uD0DD\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: onClickBoard,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsClipboardPlus, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 63\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined), showBoard && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_component_modal_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      setShowBoard: setShowBoard\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 28\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"btnWrap\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"\\uC791\\uC131\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Write, \"V01gy3bpfU2TRmw8voCBJ0HpkbU=\");\n\n_c = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\n\nvar _c;\n\n$RefreshReg$(_c, \"Write\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93cml0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNUSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJSLCtDQUFRLENBQUMsS0FBRCxDQUExQyxDQURnQixDQUdmOztBQUNELFFBQU1TLFlBQVksR0FBRVYsa0RBQVcsQ0FBRVcsQ0FBRCxJQUFPO0FBQ25DRixJQUFBQSxZQUFZLENBQUNHLElBQUksSUFBSSxDQUFDQSxJQUFWLENBQVo7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxlQUFGO0FBQ0gsR0FIOEIsRUFHN0IsQ0FBQ0wsU0FBRCxDQUg2QixDQUEvQjtBQUtBTixFQUFBQSxnREFBUyxDQUFDLE1BQU0sQ0FFZixDQUZRLEVBRVAsRUFGTyxDQUFUO0FBR0Esc0JBQ0ksOERBQUMsMkNBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0s7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREwsZUFFSztBQUFBLCtCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTCxlQUtLO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFUSxZQUEvQjtBQUFBLCtCQUE2Qyw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBU01GLFNBQVMsaUJBQUksOERBQUMsOERBQUQ7QUFBTyxrQkFBWSxFQUFFQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRuQixlQVdJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEosZUFZSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsNkJBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQkgsQ0EvQkQ7O0dBQU1GOztLQUFBQTtBQWlDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93cml0ZS9pbmRleC5qcz9iY2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJzQ2xpcGJvYXJkUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvbW9kYWwvQm9hcmQnO1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnO1xyXG5cclxuY29uc3QgV3JpdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd0JvYXJkLCBzZXRTaG93Qm9hcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICAvL+qyjOyLnO2MkOyDneyEsVxyXG4gICAgY29uc3Qgb25DbGlja0JvYXJkPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNob3dCb2FyZChwcmV2ID0+ICFwcmV2KTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSxbc2hvd0JvYXJkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JpdGVUb3AnPlxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSfsoJzrqqnsnYQg7J6F66Cl7ZW07KO87IS47JqULicvPlxyXG4gICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7qsozsi5ztjJAg7ISg7YOdPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e29uQ2xpY2tCb2FyZH0+PEJzQ2xpcGJvYXJkUGx1cy8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2hvd0JvYXJkICYmIDxCb2FyZCBzZXRTaG93Qm9hcmQ9e3NldFNob3dCb2FyZH0vPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxFZGl0Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bldyYXAnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPuyekeyEsTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJzQ2xpcGJvYXJkUGx1cyIsIlNlY3Rpb24iLCJCb2FyZCIsIkVkaXQiLCJXcml0ZSIsInNob3dCb2FyZCIsInNldFNob3dCb2FyZCIsIm9uQ2xpY2tCb2FyZCIsImUiLCJwcmV2Iiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/write/index.js\n");

/***/ })

});
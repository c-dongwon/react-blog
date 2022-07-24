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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./pages/write/style.js\");\n/* harmony import */ var _component_modal_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/modal/Board */ \"./component/modal/Board.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./pages/write/edit.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"C:\\\\Users\\\\Window10\\\\Desktop\\\\react-blog\\\\pages\\\\write\\\\index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Write = () => {\n  _s();\n\n  const {\n    0: showBoard,\n    1: setShowBoard\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    0: categoryList,\n    1: setCategoryList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [title, onChangeTitle, setTitle] = (0,_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const {\n    0: content,\n    1: setContent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const {\n    0: selected,\n    1: setSelected\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const onChangeContent = value => {\n    setContent(value);\n  };\n\n  const handleSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setSelected(e.target.value);\n    console.log(selected);\n  }, [selected]); //게시판생성\n\n  const onClickBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setShowBoard(prev => !prev);\n    e.stopPropagation();\n  }, [showBoard]);\n  const onSubmitWrite = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_4___default().post(\"/api/board\", {\n      title: title,\n      category: selected,\n      content: content\n    });\n  }, [title, selected, content]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/api/board/category\").then(res => setCategoryList(res.data));\n  }, [showBoard]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_1__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"form\", {\n      onSubmit: onSubmitWrite,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"writeTop\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"\\uC81C\\uBAA9\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\",\n          onChange: onChangeTitle,\n          value: title || \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"select\", {\n          onChange: handleSelect,\n          value: selected,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"option\", {\n            children: \"\\uAC8C\\uC2DC\\uD310 \\uC120\\uD0DD\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 25\n          }, undefined), categoryList === null || categoryList === void 0 ? void 0 : categoryList.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"option\", {\n            value: item.category,\n            children: item.category\n          }, item, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 33\n          }, undefined))]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n          type: \"button\",\n          onClick: onClickBoard,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsClipboardPlus, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 66\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        content: content,\n        onChangeContent: onChangeContent\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"btnWrap\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"\\uC791\\uC131\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, undefined), showBoard && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_component_modal_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      setShowBoard: setShowBoard\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 30\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Write, \"qEbGvN4kHdC5HCYPTIHPKnJaTus=\", false, function () {\n  return [_hook_useInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\n\nvar _c;\n\n$RefreshReg$(_c, \"Write\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTjtBQUEvQyxhQUFtQ00sSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixDQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQVVJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQU8sRUFBRVosWUFBL0I7QUFBQSxpQ0FBNkMsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQWFJLDhEQUFDLDZDQUFEO0FBQU0sZUFBTyxFQUFFWCxPQUFmO0FBQXdCLHVCQUFlLEVBQUVJO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkosZUFjSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLCtCQUNJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQW9CUVgsU0FBUyxpQkFBSSw4REFBQyw4REFBRDtBQUFPLGtCQUFZLEVBQUVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlCSCxDQTVERDs7R0FBTUY7VUFHdUNEOzs7S0FIdkNDO0FBOEROLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dyaXRlL2luZGV4LmpzP2JjYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnNDbGlwYm9hcmRQbHVzIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9tb2RhbC9Cb2FyZCc7XHJcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3Nob3dCb2FyZCwgc2V0U2hvd0JvYXJkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeUxpc3QsIHNldENhdGVnb3J5TGlzdF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlLCBzZXRUaXRsZV0gPSB1c2VJbnB1dCgpO1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gKHZhbHVlKSA9PiB7ICAgXHJcbiAgICAgICAgc2V0Q29udGVudCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgIH0sW3NlbGVjdGVkXSlcclxuXHJcbiAgICAgLy/qsozsi5ztjJDsg53shLFcclxuICAgIGNvbnN0IG9uQ2xpY2tCb2FyZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0JvYXJkKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9LFtzaG93Qm9hcmRdKTtcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXRXcml0ZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2JvYXJkXCIse1xyXG4gICAgICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6c2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6Y29udGVudFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFt0aXRsZSwgc2VsZWN0ZWQsIGNvbnRlbnRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChcIi9hcGkvYm9hcmQvY2F0ZWdvcnlcIilcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0Q2F0ZWdvcnlMaXN0KHJlcy5kYXRhKSlcclxuICAgIH0sW3Nob3dCb2FyZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdFdyaXRlfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cml0ZVRvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J+ygnOuqqeydhCDsnoXroKXtlbTso7zshLjsmpQuJyBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX0gdmFsdWU9e3RpdGxlIHx8IFwiXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9IHZhbHVlPXtzZWxlY3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+6rKM7Iuc7YyQIOyEoO2DnTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUxpc3Q/Lm1hcCgoaXRlbSxpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpdGVtLmNhdGVnb3J5fSBrZXk9e2l0ZW19PntpdGVtLmNhdGVnb3J5fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXtvbkNsaWNrQm9hcmR9PjxCc0NsaXBib2FyZFBsdXMvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8RWRpdCBjb250ZW50PXtjb250ZW50fSBvbkNoYW5nZUNvbnRlbnQ9e29uQ2hhbmdlQ29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bldyYXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz7snpHshLE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dCb2FyZCAmJiA8Qm9hcmQgc2V0U2hvd0JvYXJkPXtzZXRTaG93Qm9hcmR9Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcml0ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnNDbGlwYm9hcmRQbHVzIiwiU2VjdGlvbiIsIkJvYXJkIiwiRWRpdCIsImF4aW9zIiwidXNlSW5wdXQiLCJXcml0ZSIsInNob3dCb2FyZCIsInNldFNob3dCb2FyZCIsImNhdGVnb3J5TGlzdCIsInNldENhdGVnb3J5TGlzdCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwib25DaGFuZ2VDb250ZW50IiwidmFsdWUiLCJoYW5kbGVTZWxlY3QiLCJlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2tCb2FyZCIsInByZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJvblN1Ym1pdFdyaXRlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY2F0ZWdvcnkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/write/index.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/view/[id]";
exports.ids = ["pages/view/[id]"];
exports.modules = {

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/choedong-won/Desktop/react-blog/pages/view/[id].js\";\n\n\n\n\n\n\n\nconst View = () => {\n  const {\n    0: view,\n    1: setView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const id = router.query.id;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/view/${id}`).then(res => setView(res));\n  }, [id]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ViewTop, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          children: \"React\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 22\n        }, undefined), \"\\uB9AC\\uC561\\uD2B8\\uC5D0\\uB300\\uD574 \\uC54C\\uC544\\uBCF4\\uC790!\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n        children: \"2022.07.12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3~~~~~~~~~~~~~~~~\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n        children: \"\\uB0B4\\uC6A9\\uC774\\uB4E4\\uC5B4\\uAC00\\uB294\\uACF3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 32\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE3QkosZUE2Qm1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBd0NILENBakREOztBQW1EQSxpRUFBZUosSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9wYWdlcy92aWV3L1tpZF0uanM/MGY3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VjdGlvbiwgVmlld1RvcCwgQ29udGVudCB9IGZyb20gJy4vc3R5bGUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgXG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWRcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChgL2FwaS92aWV3LyR7aWR9YClcbiAgICAgICAgLnRoZW4ocmVzID0+IHNldFZpZXcocmVzKSlcbiAgICB9LFtpZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICA8Vmlld1RvcD5cbiAgICAgICAgICAgICAgICAgPGgyPjxzcGFuPlJlYWN0PC9zcGFuPuumrOyVoe2KuOyXkOuMgO2VtCDslYzslYTrs7TsnpAhPC9oMj5cbiAgICAgICAgICAgICAgICAgPHNwYW4+MjAyMi4wNy4xMjwvc3Bhbj5cbiAgICAgICAgICAgIDwvVmlld1RvcD5cbiAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzs35+fn5+fn5+fn5+fn5+fn7rgrTsmqnsnbTrk6TslrTqsIDripTqs7N+fn5+fn5+fn5+fn5+fn5+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzfn5+fn5+fn5+fn5+fn5+fjwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cblxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPlxuICAgICAgICAgICAgICAgIDxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cbiAgICAgICAgICAgICAgICA8cD7rgrTsmqnsnbTrk6TslrTqsIDripTqs7M8L3A+XG4gICAgICAgICAgICAgICAgPHA+64K07Jqp7J2065Ok7Ja06rCA64qU6rOzPC9wPjxwPuuCtOyaqeydtOuTpOyWtOqwgOuKlOqzszwvcD5cblxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7Il0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlY3Rpb24iLCJWaWV3VG9wIiwiQ29udGVudCIsInVzZVJvdXRlciIsIlZpZXciLCJ2aWV3Iiwic2V0VmlldyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJnZXQiLCJ0aGVuIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ }),

/***/ "./pages/view/style.js":
/*!*****************************!*\
  !*** ./pages/view/style.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Section\": () => (/* binding */ Section),\n/* harmony export */   \"ViewTop\": () => (/* binding */ ViewTop)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({\n  displayName: \"style__Section\",\n  componentId: \"sc-12io2u9-0\"\n})([\"width:calc(100% - 380px);height:100vh;color:#555;overflow:hidden;padding:30px;box-sizing:border-box;margin-left:380px;\"]);\nconst ViewTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"style__ViewTop\",\n  componentId: \"sc-12io2u9-1\"\n})([\"display:flex;align-items:end;justify-content:space-between;width:100%;border-bottom:1px solid #ddd;padding:0 0px 10px;h2{font-weight:500;font-size:30px;color:#222;span{font-size:20px;color:#555;font-weight:600;display:block;margin-bottom:5px;}}span{font-size:16px;font-weight:400;color:#222;}\"]);\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"style__Content\",\n  componentId: \"sc-12io2u9-2\"\n})([\"padding:30px 0;width:100%;height:calc(100% - 60px);box-sizing:border-box;overflow-y:auto;&::-webkit-scrollbar{width:10px;}&::-webkit-scrollbar-thumb{background-color:#888;border-radius:5px;background-clip:padding-box;border:2px solid transparent;}&::-webkit-scrollbar-track{background-color:transparent;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxPQUFPLEdBQUdELDJFQUFIO0FBQUE7QUFBQTtBQUFBLDhIQUFiO0FBVUEsTUFBTUcsT0FBTyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0U0FBYjtBQXlCQSxNQUFNSyxPQUFPLEdBQUdMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdUQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL3ZpZXcvc3R5bGUuanM/NGUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzODBweCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjojNTU1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi1sZWZ0OiAzODBweDtcblxuYFxuZXhwb3J0IGNvbnN0IFZpZXdUb3AgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogMCAwcHggMTBweDtcbiAgICBoMntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgfVxuYFxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiVmlld1RvcCIsImRpdiIsIkNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/style.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/view/[id].js"));
module.exports = __webpack_exports__;

})();
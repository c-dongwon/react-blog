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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./pages/view/style.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-moment */ \"react-moment\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"D:\\\\dw\\\\react-blog\\\\pages\\\\view\\\\[id].js\";\n\n\n\n\n\n\n\n\nconst View = () => {\n  const {\n    0: view,\n    1: setView\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const id = router.query.id;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/view/${id}`).then(res => setView(res.data.data));\n  }, [id]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ViewTop, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: view === null || view === void 0 ? void 0 : view.category\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 22\n        }, undefined), view === null || view === void 0 ? void 0 : view.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 18\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), {\n        format: \"YYYY.MM.DD\",\n        children: view === null || view === void 0 ? void 0 : view.createdAt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n      dangerouslySetInnerHTML: {\n        __html: view === null || view === void 0 ? void 0 : view.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVMsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JULCtDQUFRLEVBQWhDO0FBQ0EsUUFBTVUsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBLFFBQU1NLEVBQUUsR0FBR0QsTUFBTSxDQUFDRSxLQUFQLENBQWFELEVBQXhCO0FBRUFWLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaSCxJQUFBQSxnREFBQSxDQUFXLGFBQVlhLEVBQUcsRUFBMUIsRUFDQ0csSUFERCxDQUNNQyxHQUFHLElBQUlOLE9BQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FEcEI7QUFFSCxHQUhRLEVBR1AsQ0FBQ0wsRUFBRCxDQUhPLENBQVQ7QUFLQSxzQkFDSSw4REFBQywyQ0FBRDtBQUFBLDRCQUNJLDhEQUFDLDJDQUFEO0FBQUEsOEJBQ0s7QUFBQSxnQ0FBSTtBQUFBLG9CQUFPSCxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRVM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFKLEVBQWtDVCxJQUFsQyxhQUFrQ0EsSUFBbEMsdUJBQWtDQSxJQUFJLENBQUVVLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETCxlQUVLLDhEQUFDLHFEQUFEO0FBQVEsY0FBTSxFQUFDLFlBQWY7QUFBQSxrQkFDSVYsSUFESixhQUNJQSxJQURKLHVCQUNJQSxJQUFJLENBQUVXO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSSw4REFBQywyQ0FBRDtBQUFTLDZCQUF1QixFQUFFO0FBQUVDLFFBQUFBLE1BQU0sRUFBRVosSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVhO0FBQWhCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQXZCRDs7QUF5QkEsaUVBQWVkLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ibG9nLy4vcGFnZXMvdmlldy9baWRdLmpzPzBmN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFZpZXdUb3AsIENvbnRlbnQgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcclxuXHJcbmNvbnN0IFZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IFxyXG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWRcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS92aWV3LyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4gc2V0VmlldyhyZXMuZGF0YS5kYXRhKSlcclxuICAgIH0sW2lkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPFZpZXdUb3A+XHJcbiAgICAgICAgICAgICAgICAgPGgyPjxzcGFuPnt2aWV3Py5jYXRlZ29yeX08L3NwYW4+e3ZpZXc/LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgPE1vbWVudCBmb3JtYXQ9XCJZWVlZLk1NLkREXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZpZXc/LmNyZWF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIDwvTW9tZW50PlxyXG4gICAgICAgICAgICA8L1ZpZXdUb3A+XHJcbiAgICAgICAgICAgIDxDb250ZW50IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdmlldz8uY29udGVudH19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3OyJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWN0aW9uIiwiVmlld1RvcCIsIkNvbnRlbnQiLCJ1c2VSb3V0ZXIiLCJNb21lbnQiLCJWaWV3IiwidmlldyIsInNldFZpZXciLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRlZ29yeSIsInRpdGxlIiwiY3JlYXRlZEF0IiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view/[id].js\n");

/***/ }),

/***/ "./pages/view/style.js":
/*!*****************************!*\
  !*** ./pages/view/style.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => (/* binding */ Content),\n/* harmony export */   \"Section\": () => (/* binding */ Section),\n/* harmony export */   \"ViewTop\": () => (/* binding */ ViewTop)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({\n  displayName: \"style__Section\",\n  componentId: \"sc-12io2u9-0\"\n})([\"width:calc(100% - 380px);height:100vh;color:#555;overflow:hidden;padding:30px;box-sizing:border-box;margin-left:380px;\"]);\nconst ViewTop = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"style__ViewTop\",\n  componentId: \"sc-12io2u9-1\"\n})([\"display:flex;align-items:end;justify-content:space-between;width:100%;border-bottom:1px solid #ddd;padding:0 0px 10px;h2{font-weight:500;font-size:30px;color:#222;span{font-size:20px;color:#555;font-weight:600;display:block;margin-bottom:5px;}}span{font-size:16px;font-weight:400;color:#222;}\"]);\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"style__Content\",\n  componentId: \"sc-12io2u9-2\"\n})([\"padding:30px 0;width:100%;height:calc(100% - 60px);box-sizing:border-box;overflow-y:auto;&::-webkit-scrollbar{width:10px;}&::-webkit-scrollbar-thumb{background-color:#888;border-radius:5px;background-clip:padding-box;border:2px solid transparent;}&::-webkit-scrollbar-track{background-color:transparent;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxPQUFPLEdBQUdELDJFQUFIO0FBQUE7QUFBQTtBQUFBLDhIQUFiO0FBVUEsTUFBTUcsT0FBTyxHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSw0U0FBYjtBQXlCQSxNQUFNSyxPQUFPLEdBQUdMLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHdUQUFiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL3ZpZXcvc3R5bGUuanM/NGUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzODBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgY29sb3I6IzU1NTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzODBweDtcclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IFZpZXdUb3AgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMCAwcHggMTBweDtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJWaWV3VG9wIiwiZGl2IiwiQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/view/style.js\n");

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-moment");

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
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

/***/ "./pages/view/style.js":
/*!*****************************!*\
  !*** ./pages/view/style.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentBox\": function() { return /* binding */ CommentBox; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Section\": function() { return /* binding */ Section; },\n/* harmony export */   \"ViewTop\": function() { return /* binding */ ViewTop; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Section = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"style__Section\",\n  componentId: \"sc-12io2u9-0\"\n})([\"width:calc(100% - 380px);background:\", \";color:#555;padding:30px;box-sizing:border-box;margin-left:380px;padding-top:0;\"], props => props.theme.colors.wrapColor);\nconst ViewTop = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__ViewTop\",\n  componentId: \"sc-12io2u9-1\"\n})([\"display:flex;align-items:end;justify-content:space-between;width:100%;border-bottom:1px solid #ddd;padding:30px 0px 10px;position:sticky;z-index:9999;top:0;background:#fff;background:\", \";h2{font-weight:500;font-size:30px;color:\", \";span{font-size:20px;color:#1276E1;font-weight:600;display:block;margin-bottom:5px;}}span{font-size:16px;font-weight:400;color:#222;}\"], props => props.theme.colors.wrapColor, props => props.theme.colors.subTxtColor);\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__Content\",\n  componentId: \"sc-12io2u9-2\"\n})([\"padding:30px 0;width:100%;min-height:70vh;box-sizing:border-box;color:\", \";\"], props => props.theme.colors.subTxtColor);\nconst CommentBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"style__CommentBox\",\n  componentId: \"sc-12io2u9-3\"\n})([\"& > p{font-size:16px;font-weight:500;margin-bottom:10px;color:\", \";}.commentInput{text-align:right;textarea{width:100%;height:150px !important;resize:none;box-sizing:border-box;padding:10px;border-color:#ddd;border-radius:10px;background-color:\", \";}button{height:30px;background-color:#6798d0;color:#fff;border-radius:5px;border:0;font-size:16px;text-align:center;width:70px;margin-top:15px;font-weight:500;}}.commentList{padding:50px 0;li{display:flex;width:100%;margin-bottom:20px;.img{width:50px;height:50px;background-color:#ddd;border-radius:50%;margin-right:10px;overflow:hidden;img{max-width:100%;}}.txt{border:1px solid #ddd;border-radius:5px;margin-bottom:20px;width:calc(100% - 60px);&:last-of-type{margin-bottom:0;}button{border:0;background-color:transparent;color:red;margin-left:5px;font-size:14px;}h3{background-color:#e0e0e0;border-radius:5px 5px 0 0;padding:10px;display:flex;align-items:end;justify-content:space-between;span{font-size:16px;&:first-of-type{font-weight:500;}&:last-of-type{font-size:14px;font-weight:400;}}}}}p{padding:20px 10px;}}\"], props => props.theme.colors.subTxtColor, props => props.theme.colors.subTxtColor);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWV3L3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxPQUFPLEdBQUdELDRFQUFIO0FBQUE7QUFBQTtBQUFBLGdJQUVKRyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxTQUZ4QixDQUFiO0FBU0EsTUFBTUMsT0FBTyxHQUFHUCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxzWEFXSkcsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsU0FYeEIsRUFlUEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkksV0FmckIsQ0FBYjtBQWdDQSxNQUFNQyxPQUFPLEdBQUdWLHdFQUFIO0FBQUE7QUFBQTtBQUFBLG9GQUtURyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxXQUxuQixDQUFiO0FBT0EsTUFBTUUsVUFBVSxHQUFHWCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxtakNBS1ZHLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLFdBTGxCLEVBbUJHTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxXQW5CL0IsQ0FBaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy9zdHlsZS5qcz80ZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzODBweCk7XHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud3JhcENvbG9yfTtcclxuICBjb2xvcjogIzU1NTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBWaWV3VG9wID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDEwcHg7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndyYXBDb2xvcn07XHJcbiAgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zdWJUeHRDb2xvcn07XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICMxMjc2RTE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA3MHZoO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnN1YlR4dENvbG9yfTtcclxuYFxyXG5leHBvcnQgY29uc3QgQ29tbWVudEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgJiA+IHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc3ViVHh0Q29sb3J9O1xyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnRJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zdWJUeHRDb2xvcn07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc5OGQwO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb21tZW50TGlzdCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgLmltZ3tcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudHh0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIH1cclxuICB9XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwid3JhcENvbG9yIiwiVmlld1RvcCIsImRpdiIsInN1YlR4dENvbG9yIiwiQ29udGVudCIsIkNvbW1lbnRCb3giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view/style.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hook/useLocalStorage.js":
/*!*********************************!*\
  !*** ./hook/useLocalStorage.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLocalStorage\": function() { return /* binding */ useLocalStorage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nconst useLocalStorage = (key, initialValue) => {\n  _s();\n\n  const initialize = key => {\n    try {\n      const item = localStorage.getItem(key);\n\n      if (item && item !== \"undefined\") {\n        return JSON.parse(item);\n      }\n\n      localStorage.setItem(key, JSON.stringify(initialValue));\n      return initialValue;\n    } catch {\n      return initialValue;\n    }\n  };\n\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // problem is here\n  // solution is here....\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setState(initialize(key));\n  }, []);\n  const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setState(valueToStore);\n      localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.log(error);\n    }\n  }, [key, setState]);\n  const remove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    try {\n      localStorage.removeItem(key);\n    } catch {\n      console.log(error);\n    }\n  }, [key]);\n  return [state, setValue, remove];\n};\n\n_s(useLocalStorage, \"RaBWxRcDpsSDzX2uztItaZfKto8=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rL3VzZUxvY2FsU3RvcmFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUcsZUFBZSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsWUFBTixLQUF1QjtBQUFBOztBQUNwRCxRQUFNQyxVQUFVLEdBQUlGLEdBQUQsSUFBUztBQUMxQixRQUFJO0FBQ0YsWUFBTUcsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJMLEdBQXJCLENBQWI7O0FBQ0EsVUFBSUcsSUFBSSxJQUFJQSxJQUFJLEtBQUssV0FBckIsRUFBa0M7QUFDaEMsZUFBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLElBQVgsQ0FBUDtBQUNEOztBQUVEQyxNQUFBQSxZQUFZLENBQUNJLE9BQWIsQ0FBcUJSLEdBQXJCLEVBQTBCTSxJQUFJLENBQUNHLFNBQUwsQ0FBZVIsWUFBZixDQUExQjtBQUNBLGFBQU9BLFlBQVA7QUFDRCxLQVJELENBUUUsTUFBTTtBQUNOLGFBQU9BLFlBQVA7QUFDRDtBQUNGLEdBWkQ7O0FBY0EsUUFBTTtBQUFBLE9BQUNTLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CYiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEMsQ0Fmb0QsQ0FlVjtBQUUxQzs7QUFDQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFJO0FBQ1pjLElBQUFBLFFBQVEsQ0FBQ1QsVUFBVSxDQUFDRixHQUFELENBQVgsQ0FBUjtBQUNELEdBRlEsRUFFUCxFQUZPLENBQVQ7QUFJQSxRQUFNWSxRQUFRLEdBQUdoQixrREFBVyxDQUN6QmlCLEtBQUQsSUFBVztBQUNULFFBQUk7QUFDRixZQUFNQyxZQUFZLEdBQUdELEtBQUssWUFBWUUsUUFBakIsR0FBNEJGLEtBQUssQ0FBQ0csV0FBRCxDQUFqQyxHQUFpREgsS0FBdEU7QUFDQUYsTUFBQUEsUUFBUSxDQUFDRyxZQUFELENBQVI7QUFDQVYsTUFBQUEsWUFBWSxDQUFDSSxPQUFiLENBQXFCUixHQUFyQixFQUEwQk0sSUFBSSxDQUFDRyxTQUFMLENBQWVLLFlBQWYsQ0FBMUI7QUFDRCxLQUpELENBSUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQVR5QixFQVUxQixDQUFDakIsR0FBRCxFQUFNVyxRQUFOLENBVjBCLENBQTVCO0FBYUEsUUFBTVMsTUFBTSxHQUFHeEIsa0RBQVcsQ0FBQyxNQUFNO0FBQy9CLFFBQUk7QUFDRlEsTUFBQUEsWUFBWSxDQUFDaUIsVUFBYixDQUF3QnJCLEdBQXhCO0FBQ0QsS0FGRCxDQUVFLE1BQU07QUFDTmtCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQU55QixFQU12QixDQUFDakIsR0FBRCxDQU51QixDQUExQjtBQVFBLFNBQU8sQ0FBQ1UsS0FBRCxFQUFRRSxRQUFSLEVBQWtCUSxNQUFsQixDQUFQO0FBQ0QsQ0E1Q007O0dBQU1yQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rL3VzZUxvY2FsU3RvcmFnZS5qcz9kODJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gKGtleSwgaW5pdGlhbFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbGl6ZSA9IChrZXkpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaW5pdGlhbFZhbHVlKSk7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBwcm9ibGVtIGlzIGhlcmVcclxuXHJcbiAgLy8gc29sdXRpb24gaXMgaGVyZS4uLi5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFN0YXRlKGluaXRpYWxpemUoa2V5KSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodmFsdWUpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB2YWx1ZVRvU3RvcmUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUoc3RvcmVkVmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgc2V0U3RhdGUodmFsdWVUb1N0b3JlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtrZXksIHNldFN0YXRlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtrZXldKTtcclxuXHJcbiAgcmV0dXJuIFtzdGF0ZSwgc2V0VmFsdWUsIHJlbW92ZV07XHJcbn07Il0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJrZXkiLCJpbml0aWFsVmFsdWUiLCJpbml0aWFsaXplIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInN0b3JlZFZhbHVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hook/useLocalStorage.js\n");

/***/ })

});
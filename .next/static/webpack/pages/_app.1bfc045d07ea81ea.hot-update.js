"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/modal/Chat.js":
/*!*********************************!*\
  !*** ./component/modal/Chat.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./component/modal/style.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _hook_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hook/useInput */ \"./hook/useInput.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"D:\\\\dw\\\\react-blog\\\\component\\\\modal\\\\Chat.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Chat = ({\n  setShowChat,\n  stopPropagation,\n  userData\n}) => {\n  _s();\n\n  const myInfo = {\n    roomName: \"Test\",\n    userName: userData === null || userData === void 0 ? void 0 : userData.name\n  };\n  const {\n    0: currentSocket,\n    1: setCurrentSocket\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const {\n    0: msgList,\n    1: setMsgList\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: chatMessage,\n    1: setChatMessage\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.emit(\"onSend\", {\n      userName: userData === null || userData === void 0 ? void 0 : userData.name,\n      msg: chatMessage,\n      timeStamp: new Date().toLocaleTimeString()\n    });\n    let newMsg = {\n      userName: userData === null || userData === void 0 ? void 0 : userData.name,\n      msg: chatMessage,\n      timeStamp: new Date().toLocaleTimeString()\n    };\n    setMsgList([...msgList, newMsg]);\n    setChatMessage(\"\");\n  };\n\n  const onChatMessageChange = e => {\n    setChatMessage(e.target.value);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setCurrentSocket((0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"localhost:4000\"));\n  }, []);\n\n  if (currentSocket) {\n    currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.on(\"connect\", () => {\n      currentSocket.emit(\"join\", myInfo);\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.on(\"onReceive\", messageItem => {\n      setMsgList(msgList => [...msgList, messageItem]);\n      console.log(messageItem);\n    });\n    currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.on(\"onConnect\", systemMessage => {\n      setMsgList(msgList => [...msgList, {\n        msg: systemMessage\n      }]);\n    });\n    currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.on(\"onDisconnect\", systemMessage => {\n      setMsgList(msgList => [...msgList, {\n        msg: systemMessage\n      }]);\n    });\n    return () => {\n      currentSocket === null || currentSocket === void 0 ? void 0 : currentSocket.disconnect();\n    };\n  }, [currentSocket]);\n  console.log(msgList);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.ChatBox, {\n    onClick: stopPropagation,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"top\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillPersonFill, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 26\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            children: \"\\uAD00\\uB9AC\\uC790\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CloseBtn, {\n          type: \"button\",\n          onClick: () => setShowChat(false),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsXLg, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 76\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [msgList.map((msg, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"left\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"prfileImg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillPersonFill, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 29\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"chatBox\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n              children: msg.userName\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              children: msg.msg\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 86,\n              columnNumber: 29\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, undefined)]\n        }, idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 21\n        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"right\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"chatBox\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n              children: \"\\uB098\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              children: \"\\uC548\\uB155 \\u314B\\u314B\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 25\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"prfileImg\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillPersonFill, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"bottom\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"textarea\", {\n          value: chatMessage,\n          onChange: onChatMessageChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillArrowUpCircleFill, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 39\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Chat, \"+nQOBmSTch9DEgNy704/sMpppo8=\");\n\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFqQjtBQUE4QixrQkFBUSxFQUFFVztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBLGlDQUFzQiw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFpREgsQ0E3R0Q7O0dBQU12Qjs7S0FBQUE7QUErR04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L21vZGFsL0NoYXQuanM/ODc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBDaGF0Qm94LCBDbG9zZUJ0biB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBCc0NhbWVyYUZpbGwsIEJzWExnLCBCc0ZpbGxBcnJvd1VwQ2lyY2xlRmlsbCwgQnNGaWxsUGVyc29uRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vLi4vaG9vay91c2VJbnB1dCc7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ2hhdCA9ICh7c2V0U2hvd0NoYXQsIHN0b3BQcm9wYWdhdGlvbiwgdXNlckRhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBteUluZm8gPSB7XHJcbiAgICAgICAgcm9vbU5hbWU6IFwiVGVzdFwiLFxyXG4gICAgICAgIHVzZXJOYW1lOiB1c2VyRGF0YT8ubmFtZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRTb2NrZXQsIHNldEN1cnJlbnRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFttc2dMaXN0LCBzZXRNc2dMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjaGF0TWVzc2FnZSwgc2V0Q2hhdE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGN1cnJlbnRTb2NrZXQ/LmVtaXQoXCJvblNlbmRcIiwge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlckRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgIG1zZzogY2hhdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgbmV3TXNnID0ge1xyXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlckRhdGE/Lm5hbWUsXHJcbiAgICAgICAgICAgIG1zZzogY2hhdE1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHRpbWVTdGFtcDogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TXNnTGlzdChbLi4ubXNnTGlzdCwgbmV3TXNnXSlcclxuICAgICAgICBzZXRDaGF0TWVzc2FnZShcIlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DaGF0TWVzc2FnZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hhdE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRTb2NrZXQoc29ja2V0SU9DbGllbnQoXCJsb2NhbGhvc3Q6NDAwMFwiKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRTb2NrZXQpIHtcclxuICAgICAgICBjdXJyZW50U29ja2V0Py5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50U29ja2V0LmVtaXQoXCJqb2luXCIsIG15SW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjdXJyZW50U29ja2V0Py5vbihcIm9uUmVjZWl2ZVwiLCAobWVzc2FnZUl0ZW0pID0+IHtcclxuICAgICAgICAgICAgc2V0TXNnTGlzdCgobXNnTGlzdCkgPT4gWy4uLm1zZ0xpc3QsIG1lc3NhZ2VJdGVtXSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VJdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY3VycmVudFNvY2tldD8ub24oXCJvbkNvbm5lY3RcIiwgKHN5c3RlbU1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0TXNnTGlzdCgobXNnTGlzdCkgPT4gWy4uLm1zZ0xpc3QsIHsgbXNnOiBzeXN0ZW1NZXNzYWdlIH1dKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY3VycmVudFNvY2tldD8ub24oXCJvbkRpc2Nvbm5lY3RcIiwgKHN5c3RlbU1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0TXNnTGlzdCgobXNnTGlzdCkgPT4gWy4uLm1zZ0xpc3QsIHsgbXNnOiBzeXN0ZW1NZXNzYWdlIH1dKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY3VycmVudFNvY2tldD8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbY3VycmVudFNvY2tldF0pO1xyXG4gICAgY29uc29sZS5sb2cobXNnTGlzdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoYXRCb3ggb25DbGljaz17c3RvcFByb3BhZ2F0aW9ufT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PEJzRmlsbFBlcnNvbkZpbGwvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuq0gOumrOyekDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2VCdG4gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dDaGF0KGZhbHNlKX0+PEJzWExnLz48L0Nsb3NlQnRuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAge21zZ0xpc3QubWFwKChtc2csIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0JyBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJmaWxlSW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNGaWxsUGVyc29uRmlsbC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttc2cudXNlck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21zZy5tc2d9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9J2xlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJmaWxlSW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxQZXJzb25GaWxsLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6rSA66as7J6QPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7slYjrhZUg44WL44WLPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdEJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7rgpg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPuyViOuFlSDjhYvjhYs8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmZpbGVJbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbFBlcnNvbkZpbGwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e2NoYXRNZXNzYWdlfSBvbkNoYW5nZT17b25DaGF0TWVzc2FnZUNoYW5nZX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPjxCc0ZpbGxBcnJvd1VwQ2lyY2xlRmlsbC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9DaGF0Qm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzb2NrZXRJT0NsaWVudCIsIkNoYXRCb3giLCJDbG9zZUJ0biIsIkJzQ2FtZXJhRmlsbCIsIkJzWExnIiwiQnNGaWxsQXJyb3dVcENpcmNsZUZpbGwiLCJCc0ZpbGxQZXJzb25GaWxsIiwidXNlSW5wdXQiLCJ1c2VDYWxsYmFjayIsIkNoYXQiLCJzZXRTaG93Q2hhdCIsInN0b3BQcm9wYWdhdGlvbiIsInVzZXJEYXRhIiwibXlJbmZvIiwicm9vbU5hbWUiLCJ1c2VyTmFtZSIsIm5hbWUiLCJjdXJyZW50U29ja2V0Iiwic2V0Q3VycmVudFNvY2tldCIsIm1zZ0xpc3QiLCJzZXRNc2dMaXN0IiwiY2hhdE1lc3NhZ2UiLCJzZXRDaGF0TWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJtc2ciLCJ0aW1lU3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibmV3TXNnIiwib25DaGF0TWVzc2FnZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwib24iLCJtZXNzYWdlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzeXN0ZW1NZXNzYWdlIiwiZGlzY29ubmVjdCIsIm1hcCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/modal/Chat.js\n");

/***/ })

});
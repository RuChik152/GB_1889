"use strict";(self.webpackChunkgb_test=self.webpackChunkgb_test||[]).push([[157],{8157:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "Chats": () => (/* binding */ Chats)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./node_modules/react-router/index.js\nvar react_router = __webpack_require__(6974);\n;// CONCATENATED MODULE: ./src/components/reactogram/func/main.module.scss\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const main_module = ({"home":"main-module___a9AcK","action__block":"main-module___k15Tx"});\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules\nvar toConsumableArray = __webpack_require__(2982);\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Chat/Msg/msg.module.scss\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const msg_module = ({"msg__item":"msg-module___MMIKh","item__author":"msg-module___jnGZA","item__text":"msg-module___Ok5WI","item__time":"msg-module___bXYbK"});\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Chat/Msg/msg.tsx\n\n\nvar Msg = function Msg(_ref) {\n  var author = _ref.author,\n      msg = _ref.msg,\n      time = _ref.time;\n  return /*#__PURE__*/react.createElement("div", {\n    className: msg_module.msg__item\n  }, /*#__PURE__*/react.createElement("span", {\n    className: msg_module.item__author,\n    "data-testid": "test-author"\n  }, author), /*#__PURE__*/react.createElement("p", {\n    className: msg_module.item__text,\n    "data-testid": "test-text"\n  }, msg), /*#__PURE__*/react.createElement("p", {\n    className: msg_module.item__time,\n    "data-testid": "test-time"\n  }, "\\u0412\\u0440\\u0435\\u043C\\u044F: ", time));\n};\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Chat/chat.module.scss\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const chat_module = ({"chat":"chat-module___Hsyd3"});\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Chat/chatArea.tsx\n\n\n\n\nvar ChatArea = function ChatArea(_ref) {\n  var msg = _ref.msg;\n\n  var reversArr = function reversArr() {\n    var arr = (0,toConsumableArray/* default */.Z)(msg);\n\n    return arr.reverse();\n  };\n\n  return /*#__PURE__*/react.createElement("div", {\n    className: chat_module.chat,\n    "data-testid": "chat-test"\n  }, /*#__PURE__*/react.createElement("div", {\n    className: "chat__area"\n  }, reversArr().map(function (item) {\n    return /*#__PURE__*/react.createElement(Msg, {\n      author: item.author,\n      msg: item.msg,\n      time: item.time,\n      key: item.id\n    });\n  })));\n};\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules\nvar slicedToArray = __webpack_require__(885);\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Input/input.module.scss\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const input_module = ({"text":"input-module___Kzlu4","text__input":"input-module___JHivM","text__btn":"input-module___Kmsw1"});\n// EXTERNAL MODULE: ./node_modules/@mui/material/Input/Input.js + 15 modules\nvar Input_Input = __webpack_require__(6432);\n// EXTERNAL MODULE: ./node_modules/@mui/material/Button/Button.js + 17 modules\nvar Button = __webpack_require__(1607);\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules\nvar es = __webpack_require__(6706);\n// EXTERNAL MODULE: ./src/components/reactogram/func/store/chats/action.ts\nvar action = __webpack_require__(7783);\n;// CONCATENATED MODULE: ./src/components/reactogram/func/Input/input.tsx\n\n\n\n\n\n\n\nvar Input = function Input() {\n  var _useState = (0,react.useState)(\'\'),\n      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var _useParams = (0,react_router/* useParams */.UO)(),\n      chaiId = _useParams.chaiId;\n\n  var dispatch = (0,es/* useDispatch */.I0)();\n\n  var actionForm = function actionForm(e) {\n    e.preventDefault();\n\n    if (chaiId) {\n      dispatch((0,action/* addMsg */.gD)(chaiId, value));\n    }\n\n    setValue(\'\');\n  };\n\n  return /*#__PURE__*/react.createElement("div", {\n    className: input_module.text\n  }, /*#__PURE__*/react.createElement("form", {\n    onSubmit: actionForm\n  }, /*#__PURE__*/react.createElement(Input_Input/* default */.Z, {\n    id: "text__input__id",\n    value: value,\n    onChange: function onChange(e) {\n      return setValue(e.target.value);\n    },\n    type: "text",\n    placeholder: "\\u0412\\u0430\\u0448\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435"\n  }), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Button/* default */.Z, {\n    onClick: actionForm,\n    disabled: !value,\n    "data-testid": "test-id",\n    variant: "contained"\n  }, "\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C")));\n};\n// EXTERNAL MODULE: ./src/components/reactogram/func/ChatList/ChatList.tsx + 1 modules\nvar ChatList = __webpack_require__(9586);\n// EXTERNAL MODULE: ./src/components/reactogram/func/store/chats/selectors.ts\nvar selectors = __webpack_require__(7184);\n;// CONCATENATED MODULE: ./src/components/reactogram/func/pages/Chats.tsx\n\n\n\n\n\n\n\n\nvar Chats = function Chats() {\n  var _useParams = (0,react_router/* useParams */.UO)(),\n      chaiId = _useParams.chaiId;\n\n  var dispatch = (0,es/* useDispatch */.I0)();\n  var msg = (0,es/* useSelector */.v9)(selectors/* selectChats */.R, es/* shallowEqual */.wU);\n  var chatlist = (0,es/* useSelector */.v9)(selectors/* selectChatList */.V, es/* shallowEqual */.wU); //TODO\n  // useEffect(() => {\n  //   if (\n  //     chaiId &&\n  //     msg[chaiId]?.length > 0 &&\n  //     msg[chaiId][msg[chaiId].length - 1].author !== AUTHOR.bot\n  //   ) {\n  //     const timer = setTimeout(() => {\n  //       setMsg({\n  //         ...msg,\n  //         [chaiId]: [\n  //           ...msg[chaiId],\n  //           {\n  //             id: nanoid(),\n  //             author: AUTHOR.bot,\n  //             time: createCurrentTime(),\n  //             msg: `I am ${AUTHOR.bot}`,\n  //           },\n  //         ],\n  //       });\n  //     }, 1000);\n  //     return () => {\n  //       clearTimeout(timer);\n  //     };\n  //   }\n  // }, [msg]);\n\n  if (chaiId && !msg[chaiId]) {\n    return /*#__PURE__*/react.createElement(react_router/* Navigate */.Fg, {\n      replace: true,\n      to: "/chats"\n    });\n  }\n\n  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ChatList/* ChatList */.j, null), /*#__PURE__*/react.createElement("div", {\n    className: main_module.home,\n    "data-testid": "home-test-id"\n  }, /*#__PURE__*/react.createElement("div", {\n    className: main_module.action__block\n  }, /*#__PURE__*/react.createElement(ChatArea, {\n    msg: chaiId ? msg[chaiId] : []\n  }), /*#__PURE__*/react.createElement(Input, null))));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBREYsZUFFRSxvQkFBQyxLQUFELE9BRkYsQ0FERixDQUZGLENBREY7QUFXRCxDQWxETSIsInNvdXJjZXMiOlsid2VicGFjazovL2diLXRlc3QvLi9zcmMvY29tcG9uZW50cy9yZWFjdG9ncmFtL2Z1bmMvbWFpbi5tb2R1bGUuc2Nzcz9kZjZlIiwid2VicGFjazovL2diLXRlc3QvLi9zcmMvY29tcG9uZW50cy9yZWFjdG9ncmFtL2Z1bmMvQ2hhdC9Nc2cvbXNnLm1vZHVsZS5zY3NzPzU0MmIiLCJ3ZWJwYWNrOi8vZ2ItdGVzdC8uL3NyYy9jb21wb25lbnRzL3JlYWN0b2dyYW0vZnVuYy9DaGF0L01zZy9tc2cudHN4PzlkODYiLCJ3ZWJwYWNrOi8vZ2ItdGVzdC8uL3NyYy9jb21wb25lbnRzL3JlYWN0b2dyYW0vZnVuYy9DaGF0L2NoYXQubW9kdWxlLnNjc3M/Njk1YSIsIndlYnBhY2s6Ly9nYi10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvcmVhY3RvZ3JhbS9mdW5jL0NoYXQvY2hhdEFyZWEudHN4PzhlODkiLCJ3ZWJwYWNrOi8vZ2ItdGVzdC8uL3NyYy9jb21wb25lbnRzL3JlYWN0b2dyYW0vZnVuYy9JbnB1dC9pbnB1dC5tb2R1bGUuc2Nzcz9lOWRjIiwid2VicGFjazovL2diLXRlc3QvLi9zcmMvY29tcG9uZW50cy9yZWFjdG9ncmFtL2Z1bmMvSW5wdXQvaW5wdXQudHN4PzM4MmIiLCJ3ZWJwYWNrOi8vZ2ItdGVzdC8uL3NyYy9jb21wb25lbnRzL3JlYWN0b2dyYW0vZnVuYy9wYWdlcy9DaGF0cy50c3g/ZTAwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhvbWVcIjpcIm1haW4tbW9kdWxlX19fYTlBY0tcIixcImFjdGlvbl9fYmxvY2tcIjpcIm1haW4tbW9kdWxlX19fazE1VHhcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJtc2dfX2l0ZW1cIjpcIm1zZy1tb2R1bGVfX19NTUlLaFwiLFwiaXRlbV9fYXV0aG9yXCI6XCJtc2ctbW9kdWxlX19fam5HWkFcIixcIml0ZW1fX3RleHRcIjpcIm1zZy1tb2R1bGVfX19PazVXSVwiLFwiaXRlbV9fdGltZVwiOlwibXNnLW1vZHVsZV9fX2JYWWJLXCJ9OyIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbXNnLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBNc2dQcm9wcyB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgYXV0aG9yOiBzdHJpbmc7XHJcbiAgbXNnOiBzdHJpbmc7XHJcbiAgdGltZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTXNnOiBGQzxNc2dQcm9wcz4gPSAoeyBhdXRob3IsIG1zZywgdGltZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tc2dfX2l0ZW19PlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLml0ZW1fX2F1dGhvcn0gZGF0YS10ZXN0aWQ9XCJ0ZXN0LWF1dGhvclwiPlxyXG4gICAgICAgIHthdXRob3J9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5pdGVtX190ZXh0fSBkYXRhLXRlc3RpZD1cInRlc3QtdGV4dFwiPlxyXG4gICAgICAgIHttc2d9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5pdGVtX190aW1lfSBkYXRhLXRlc3RpZD1cInRlc3QtdGltZVwiPlxyXG4gICAgICAgINCS0YDQtdC80Y86IHt0aW1lfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImNoYXRcIjpcImNoYXQtbW9kdWxlX19fSHN5ZDNcIn07IiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXNnIH0gZnJvbSAnLi9Nc2cvbXNnJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL2NoYXQubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgTXNnIHtcbiAgaWQ6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIHRpbWU6IHN0cmluZztcbiAgbXNnOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDaGF0UHJvcHMge1xuICBtc2c6IE1zZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhdEFyZWE6IEZDPENoYXRQcm9wcz4gPSAoeyBtc2cgfSkgPT4ge1xuICBjb25zdCByZXZlcnNBcnIgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyID0gWy4uLm1zZ107XG4gICAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2hhdH0gZGF0YS10ZXN0aWQ9XCJjaGF0LXRlc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdF9fYXJlYVwiPlxuICAgICAgICB7cmV2ZXJzQXJyKCkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPE1zZ1xuICAgICAgICAgICAgYXV0aG9yPXtpdGVtLmF1dGhvcn1cbiAgICAgICAgICAgIG1zZz17aXRlbS5tc2d9XG4gICAgICAgICAgICB0aW1lPXtpdGVtLnRpbWV9XG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInRleHRcIjpcImlucHV0LW1vZHVsZV9fX0t6bHU0XCIsXCJ0ZXh0X19pbnB1dFwiOlwiaW5wdXQtbW9kdWxlX19fSkhpdk1cIixcInRleHRfX2J0blwiOlwiaW5wdXQtbW9kdWxlX19fS21zdzFcIn07IiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9pbnB1dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24gYXMgQnV0dG9uVUksIElucHV0IGFzIElucHV0VUkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkTXNnIH0gZnJvbSAnLi4vc3RvcmUvY2hhdHMvYWN0aW9uJztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5leHBvcnQgY29uc3QgSW5wdXQ6IEZDID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBjaGFpSWQgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgYWN0aW9uRm9ybSA9IChlOiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkIH0pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNoYWlJZCkge1xuICAgICAgZGlzcGF0Y2goYWRkTXNnKGNoYWlJZCwgdmFsdWUpKTtcbiAgICB9XG4gICAgc2V0VmFsdWUoJycpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50ZXh0fT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXthY3Rpb25Gb3JtfT5cbiAgICAgICAgPElucHV0VUlcbiAgICAgICAgICBpZD1cInRleHRfX2lucHV0X19pZFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8QnV0dG9uVUlcbiAgICAgICAgICBvbkNsaWNrPXthY3Rpb25Gb3JtfVxuICAgICAgICAgIGRpc2FibGVkPXshdmFsdWV9XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0ZXN0LWlkXCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgPlxuICAgICAgICAgINCe0YLQv9GA0LDQstC40YLRjFxuICAgICAgICA8L0J1dHRvblVJPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9tYWluLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IENoYXRBcmVhIH0gZnJvbSAnLi4vQ2hhdC9jaGF0QXJlYSc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL0lucHV0L2lucHV0JztcbmltcG9ydCB7IENoYXRMaXN0IH0gZnJvbSAnLi4vQ2hhdExpc3QvQ2hhdExpc3QnO1xuXG5pbXBvcnQge3NoYWxsb3dFcXVhbCwgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZWxlY3RDaGF0TGlzdCwgc2VsZWN0Q2hhdHMgfSBmcm9tICcuLi9zdG9yZS9jaGF0cy9zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgQ2hhdHM6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGNoYWlJZCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG1zZyA9IHVzZVNlbGVjdG9yKHNlbGVjdENoYXRzLCBzaGFsbG93RXF1YWwpO1xuICBjb25zdCBjaGF0bGlzdCA9IHVzZVNlbGVjdG9yKHNlbGVjdENoYXRMaXN0LCBzaGFsbG93RXF1YWwpO1xuXG4gIC8vVE9ET1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChcbiAgLy8gICAgIGNoYWlJZCAmJlxuICAvLyAgICAgbXNnW2NoYWlJZF0/Lmxlbmd0aCA+IDAgJiZcbiAgLy8gICAgIG1zZ1tjaGFpSWRdW21zZ1tjaGFpSWRdLmxlbmd0aCAtIDFdLmF1dGhvciAhPT0gQVVUSE9SLmJvdFxuICAvLyAgICkge1xuICAvLyAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgc2V0TXNnKHtcbiAgLy8gICAgICAgICAuLi5tc2csXG4gIC8vICAgICAgICAgW2NoYWlJZF06IFtcbiAgLy8gICAgICAgICAgIC4uLm1zZ1tjaGFpSWRdLFxuICAvLyAgICAgICAgICAge1xuICAvLyAgICAgICAgICAgICBpZDogbmFub2lkKCksXG4gIC8vICAgICAgICAgICAgIGF1dGhvcjogQVVUSE9SLmJvdCxcbiAgLy8gICAgICAgICAgICAgdGltZTogY3JlYXRlQ3VycmVudFRpbWUoKSxcbiAgLy8gICAgICAgICAgICAgbXNnOiBgSSBhbSAke0FVVEhPUi5ib3R9YCxcbiAgLy8gICAgICAgICAgIH0sXG4gIC8vICAgICAgICAgXSxcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICB9LCAxMDAwKTtcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIC8vICAgICB9O1xuICAvLyAgIH1cbiAgLy8gfSwgW21zZ10pO1xuXG4gIGlmIChjaGFpSWQgJiYgIW1zZ1tjaGFpSWRdKSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0ZSByZXBsYWNlIHRvPVwiL2NoYXRzXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2hhdExpc3QgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ob21lfSBkYXRhLXRlc3RpZD1cImhvbWUtdGVzdC1pZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYWN0aW9uX19ibG9ja30+XG4gICAgICAgICAgPENoYXRBcmVhIG1zZz17Y2hhaUlkID8gbXNnW2NoYWlJZF0gOiBbXX0gLz5cbiAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZSIsIk1zZyIsImF1dGhvciIsIm1zZyIsInRpbWUiLCJtc2dfX2l0ZW0iLCJpdGVtX19hdXRob3IiLCJpdGVtX190ZXh0IiwiaXRlbV9fdGltZSIsIkNoYXRBcmVhIiwicmV2ZXJzQXJyIiwiYXJyIiwicmV2ZXJzZSIsImNoYXQiLCJtYXAiLCJpdGVtIiwiaWQiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkJ1dHRvblVJIiwiSW5wdXQiLCJJbnB1dFVJIiwidXNlRGlzcGF0Y2giLCJhZGRNc2ciLCJ1c2VQYXJhbXMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2hhaUlkIiwiZGlzcGF0Y2giLCJhY3Rpb25Gb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsInRhcmdldCIsIk5hdmlnYXRlIiwiQ2hhdExpc3QiLCJzaGFsbG93RXF1YWwiLCJ1c2VTZWxlY3RvciIsInNlbGVjdENoYXRMaXN0Iiwic2VsZWN0Q2hhdHMiLCJDaGF0cyIsImNoYXRsaXN0IiwiaG9tZSIsImFjdGlvbl9fYmxvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8157\n')}}]);
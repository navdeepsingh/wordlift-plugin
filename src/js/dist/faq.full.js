!function(n){var e={};function t(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return n[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(i,l,function(e){return n[e]}.bind(null,l));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=113)}({113:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faq_event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);\n/**\n * Initialise the FAQ\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\nwindow.addEventListener("load", () => {\n  const eventHandler = new _faq_event_handler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();\n  window.addEventListener("tinymce-editor-init", () => {\n    eventHandler.getHook().listenForTextSelection();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2luZGV4LmpzPzYzZDYiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50SGFuZGxlciIsIkZhcUV2ZW50SGFuZGxlciIsImdldEhvb2siLCJsaXN0ZW5Gb3JUZXh0U2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBRUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQyxRQUFNQyxZQUFZLEdBQUcsSUFBSUMsa0VBQUosRUFBckI7QUFDQUgsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixxQkFBeEIsRUFBK0MsTUFBTTtBQUNuREMsZ0JBQVksQ0FBQ0UsT0FBYixHQUF1QkMsc0JBQXZCO0FBQ0QsR0FGRDtBQUdELENBTEQiLCJmaWxlIjoiMTEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbml0aWFsaXNlIHRoZSBGQVFcbiAqXG4gKiBAc2luY2UgMy4yNi4wXG4gKiBAYXV0aG9yIE5hdmVlbiBNdXRodXNhbXkgPG5hdmVlbkB3b3JkbGlmdC5pbz5cbiAqL1xuXG5pbXBvcnQgRmFxRXZlbnRIYW5kbGVyIGZyb20gXCIuL2ZhcS1ldmVudC1oYW5kbGVyXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGV2ZW50SGFuZGxlciA9IG5ldyBGYXFFdmVudEhhbmRsZXIoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW55bWNlLWVkaXRvci1pbml0XCIsICgpID0+IHtcbiAgICBldmVudEhhbmRsZXIuZ2V0SG9vaygpLmxpc3RlbkZvclRleHRTZWxlY3Rpb24oKVxuICB9KVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///113\n')},21:function(module,exports){eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n')},33:function(module,exports){eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n")},92:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export textEditors */\n/* harmony import */ var _hooks_tiny_mce_faq_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);\n/**\n * FaqEventHandler Provides two way binding between store and text editor hooks.\n *\n * Text Editor hooks <--\x3e Event handler <--\x3e Redux Store.\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\nconst GUTENBERG = "gutenberg";\nconst TINY_MCE = "tiny_mce";\nconst textEditors = {\n  GUTENBERG: GUTENBERG,\n  TINY_MCE: TINY_MCE\n};\n\nclass FaqEventHandler {\n  constructor() {\n    this._hook = this.getHookForCurrentEnvironment();\n  }\n\n  getHook() {\n    return this._hook;\n  }\n  /**\n   * Returns hook instance based on the current environment\n   * @return FaqTextEditorHook|null\n   */\n\n\n  getHookForCurrentEnvironment() {\n    let textEditor = null;\n\n    if (global["_wlFaqSettings"] !== undefined) {\n      textEditor = global["_wlFaqSettings"]["textEditor"];\n    }\n\n    switch (textEditor) {\n      case textEditors.TINY_MCE:\n        return new _hooks_tiny_mce_faq_hook__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();\n\n      default:\n        return null;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (FaqEventHandler);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2ZhcS1ldmVudC1oYW5kbGVyLmpzPzE1NTgiXSwibmFtZXMiOlsiR1VURU5CRVJHIiwiVElOWV9NQ0UiLCJ0ZXh0RWRpdG9ycyIsIkZhcUV2ZW50SGFuZGxlciIsImNvbnN0cnVjdG9yIiwiX2hvb2siLCJnZXRIb29rRm9yQ3VycmVudEVudmlyb25tZW50IiwiZ2V0SG9vayIsInRleHRFZGl0b3IiLCJnbG9iYWwiLCJ1bmRlZmluZWQiLCJUaW55TWNlRmFxSG9vayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQVNBO0FBQ0EsTUFBTUEsU0FBUyxHQUFHLFdBQWxCO0FBRUEsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBRU8sTUFBTUMsV0FBVyxHQUFHO0FBQ3pCRixXQUFTLEVBQUVBLFNBRGM7QUFFekJDLFVBQVEsRUFBRUE7QUFGZSxDQUFwQjs7QUFLUCxNQUFNRSxlQUFOLENBQXNCO0FBQ3BCQyxhQUFXLEdBQUc7QUFDWixTQUFLQyxLQUFMLEdBQWEsS0FBS0MsNEJBQUwsRUFBYjtBQUNEOztBQUNEQyxTQUFPLEdBQUc7QUFDUixXQUFPLEtBQUtGLEtBQVo7QUFDRDtBQUVEOzs7Ozs7QUFJQUMsOEJBQTRCLEdBQUc7QUFDN0IsUUFBSUUsVUFBVSxHQUFHLElBQWpCOztBQUNBLFFBQUlDLE1BQU0sQ0FBQyxnQkFBRCxDQUFOLEtBQTZCQyxTQUFqQyxFQUE0QztBQUMxQ0YsZ0JBQVUsR0FBR0MsTUFBTSxDQUFDLGdCQUFELENBQU4sQ0FBeUIsWUFBekIsQ0FBYjtBQUNEOztBQUNELFlBQVFELFVBQVI7QUFDRSxXQUFLTixXQUFXLENBQUNELFFBQWpCO0FBQ0UsZUFBTyxJQUFJVSx3RUFBSixFQUFQOztBQUNGO0FBQ0UsZUFBTyxJQUFQO0FBSko7QUFNRDs7QUF2Qm1COztBQTBCUFIsd0VBQWYsRSIsImZpbGUiOiI5Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmFxRXZlbnRIYW5kbGVyIFByb3ZpZGVzIHR3byB3YXkgYmluZGluZyBiZXR3ZWVuIHN0b3JlIGFuZCB0ZXh0IGVkaXRvciBob29rcy5cbiAqXG4gKiBUZXh0IEVkaXRvciBob29rcyA8LS0+IEV2ZW50IGhhbmRsZXIgPC0tPiBSZWR1eCBTdG9yZS5cbiAqXG4gKiBAc2luY2UgMy4yNi4wXG4gKiBAYXV0aG9yIE5hdmVlbiBNdXRodXNhbXkgPG5hdmVlbkB3b3JkbGlmdC5pbz5cbiAqL1xuXG5pbXBvcnQgVGlueU1jZUZhcUhvb2sgZnJvbSBcIi4vaG9va3MvdGlueS1tY2UtZmFxLWhvb2tcIjtcbmNvbnN0IEdVVEVOQkVSRyA9IFwiZ3V0ZW5iZXJnXCI7XG5cbmNvbnN0IFRJTllfTUNFID0gXCJ0aW55X21jZVwiO1xuXG5leHBvcnQgY29uc3QgdGV4dEVkaXRvcnMgPSB7XG4gIEdVVEVOQkVSRzogR1VURU5CRVJHLFxuICBUSU5ZX01DRTogVElOWV9NQ0Vcbn07XG5cbmNsYXNzIEZhcUV2ZW50SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2hvb2sgPSB0aGlzLmdldEhvb2tGb3JDdXJyZW50RW52aXJvbm1lbnQoKTtcbiAgfVxuICBnZXRIb29rKCkge1xuICAgIHJldHVybiB0aGlzLl9ob29rO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaG9vayBpbnN0YW5jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudFxuICAgKiBAcmV0dXJuIEZhcVRleHRFZGl0b3JIb29rfG51bGxcbiAgICovXG4gIGdldEhvb2tGb3JDdXJyZW50RW52aXJvbm1lbnQoKSB7XG4gICAgbGV0IHRleHRFZGl0b3IgPSBudWxsO1xuICAgIGlmIChnbG9iYWxbXCJfd2xGYXFTZXR0aW5nc1wiXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0ZXh0RWRpdG9yID0gZ2xvYmFsW1wiX3dsRmFxU2V0dGluZ3NcIl1bXCJ0ZXh0RWRpdG9yXCJdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRleHRFZGl0b3IpIHtcbiAgICAgIGNhc2UgdGV4dEVkaXRvcnMuVElOWV9NQ0U6XG4gICAgICAgIHJldHVybiBuZXcgVGlueU1jZUZhcUhvb2soKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYXFFdmVudEhhbmRsZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///92\n')},93:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export FAQ_TINY_MCE_PLUGIN_NAME */\n/* harmony import */ var _faq_text_editor_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);\n/* harmony import */ var _constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * TinyMceFaqHook implements the editor hook, and handles the tinymce text editor.\n * NOTE: this hooks is called when the tinymce editor is used, so there is no need\n * to check for edge cases since we will have an activeEditor\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n\n\nconst FAQ_TINY_MCE_PLUGIN_NAME = "wl_faq";\n\nclass TinyMceFaqHook extends _faq_text_editor_hook__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {\n  constructor() {\n    super();\n    /**\n     * Store the last emitted text from this hook, to prevent duplication we use\n     * this reference to compare the string.\n     * @type {string}\n     * @private\n     */\n\n    this._lastEmittedSelection = "";\n  }\n\n  listenForTextSelection() {\n    console.log("Selected text listener initialized");\n    const editor = global["tinymce"].activeEditor;\n    editor.on("NodeChange", e => {\n      /**\n       * To prevent the multiple events getting emitted for the same\n       * selected text, we are checking if the same text was posted last time\n       */\n      const selectedText = editor.selection.getContent({\n        format: "text"\n      });\n      console.log("selected text is " + selectedText);\n\n      if (selectedText !== this._lastEmittedSelection) {\n        this._lastEmittedSelection = selectedText;\n        Object(backbone__WEBPACK_IMPORTED_MODULE_2__["trigger"])(_constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__[/* FAQ_EVENT_HANDLER_SELECTION_CHANGED */ "a"], selectedText);\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (TinyMceFaqHook);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2hvb2tzL3RpbnktbWNlLWZhcS1ob29rLmpzPzA4YmQiXSwibmFtZXMiOlsiRkFRX1RJTllfTUNFX1BMVUdJTl9OQU1FIiwiVGlueU1jZUZhcUhvb2siLCJGYXFUZXh0RWRpdG9ySG9vayIsImNvbnN0cnVjdG9yIiwiX2xhc3RFbWl0dGVkU2VsZWN0aW9uIiwibGlzdGVuRm9yVGV4dFNlbGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlZGl0b3IiLCJnbG9iYWwiLCJhY3RpdmVFZGl0b3IiLCJvbiIsImUiLCJzZWxlY3RlZFRleHQiLCJzZWxlY3Rpb24iLCJnZXRDb250ZW50IiwiZm9ybWF0IiwidHJpZ2dlciIsIkZBUV9FVkVOVF9IQU5ETEVSX1NFTEVDVElPTl9DSEFOR0VEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSx3QkFBd0IsR0FBRyxRQUFqQzs7QUFFUCxNQUFNQyxjQUFOLFNBQTZCQyxxRUFBN0IsQ0FBK0M7QUFDN0NDLGFBQVcsR0FBRztBQUNaO0FBQ0E7Ozs7Ozs7QUFNQSxTQUFLQyxxQkFBTCxHQUE2QixFQUE3QjtBQUNEOztBQUVEQyx3QkFBc0IsR0FBRztBQUN2QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksb0NBQVo7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JDLFlBQWpDO0FBQ0FGLFVBQU0sQ0FBQ0csRUFBUCxDQUFVLFlBQVYsRUFBd0JDLENBQUMsSUFBSTtBQUUzQjs7OztBQUlBLFlBQU1DLFlBQVksR0FBR0wsTUFBTSxDQUFDTSxTQUFQLENBQWlCQyxVQUFqQixDQUE0QjtBQUFFQyxjQUFNLEVBQUU7QUFBVixPQUE1QixDQUFyQjtBQUNBVixhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JNLFlBQWxDOztBQUNBLFVBQUlBLFlBQVksS0FBSyxLQUFLVCxxQkFBMUIsRUFBaUQ7QUFDL0MsYUFBS0EscUJBQUwsR0FBNkJTLFlBQTdCO0FBQ0FJLGdFQUFPLENBQUNDLHlHQUFELEVBQXNDTCxZQUF0QyxDQUFQO0FBQ0Q7QUFFRixLQWJEO0FBY0Q7O0FBN0I0Qzs7QUFnQ2hDWix1RUFBZixFIiwiZmlsZSI6IjkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaW55TWNlRmFxSG9vayBpbXBsZW1lbnRzIHRoZSBlZGl0b3IgaG9vaywgYW5kIGhhbmRsZXMgdGhlIHRpbnltY2UgdGV4dCBlZGl0b3IuXG4gKiBOT1RFOiB0aGlzIGhvb2tzIGlzIGNhbGxlZCB3aGVuIHRoZSB0aW55bWNlIGVkaXRvciBpcyB1c2VkLCBzbyB0aGVyZSBpcyBubyBuZWVkXG4gKiB0byBjaGVjayBmb3IgZWRnZSBjYXNlcyBzaW5jZSB3ZSB3aWxsIGhhdmUgYW4gYWN0aXZlRWRpdG9yXG4gKiBAc2luY2UgMy4yNi4wXG4gKiBAYXV0aG9yIE5hdmVlbiBNdXRodXNhbXkgPG5hdmVlbkB3b3JkbGlmdC5pbz5cbiAqL1xuXG5pbXBvcnQgRmFxVGV4dEVkaXRvckhvb2sgZnJvbSBcIi4vZmFxLXRleHQtZWRpdG9yLWhvb2tcIjtcbmltcG9ydCB7IEZBUV9FVkVOVF9IQU5ETEVSX1NFTEVDVElPTl9DSEFOR0VEIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9mYXEtaG9vay1jb25zdGFudHNcIjtcbmltcG9ydCB7IHRyaWdnZXIgfSBmcm9tIFwiYmFja2JvbmVcIjtcbmV4cG9ydCBjb25zdCBGQVFfVElOWV9NQ0VfUExVR0lOX05BTUUgPSBcIndsX2ZhcVwiO1xuXG5jbGFzcyBUaW55TWNlRmFxSG9vayBleHRlbmRzIEZhcVRleHRFZGl0b3JIb29rIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipcbiAgICAgKiBTdG9yZSB0aGUgbGFzdCBlbWl0dGVkIHRleHQgZnJvbSB0aGlzIGhvb2ssIHRvIHByZXZlbnQgZHVwbGljYXRpb24gd2UgdXNlXG4gICAgICogdGhpcyByZWZlcmVuY2UgdG8gY29tcGFyZSB0aGUgc3RyaW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYXN0RW1pdHRlZFNlbGVjdGlvbiA9IFwiXCI7XG4gIH1cblxuICBsaXN0ZW5Gb3JUZXh0U2VsZWN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgdGV4dCBsaXN0ZW5lciBpbml0aWFsaXplZFwiKVxuICAgIGNvbnN0IGVkaXRvciA9IGdsb2JhbFtcInRpbnltY2VcIl0uYWN0aXZlRWRpdG9yO1xuICAgIGVkaXRvci5vbihcIk5vZGVDaGFuZ2VcIiwgZSA9PiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogVG8gcHJldmVudCB0aGUgbXVsdGlwbGUgZXZlbnRzIGdldHRpbmcgZW1pdHRlZCBmb3IgdGhlIHNhbWVcbiAgICAgICAqIHNlbGVjdGVkIHRleHQsIHdlIGFyZSBjaGVja2luZyBpZiB0aGUgc2FtZSB0ZXh0IHdhcyBwb3N0ZWQgbGFzdCB0aW1lXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zZWxlY3Rpb24uZ2V0Q29udGVudCh7IGZvcm1hdDogXCJ0ZXh0XCIgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHRleHQgaXMgXCIgKyBzZWxlY3RlZFRleHQpXG4gICAgICBpZiAoc2VsZWN0ZWRUZXh0ICE9PSB0aGlzLl9sYXN0RW1pdHRlZFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLl9sYXN0RW1pdHRlZFNlbGVjdGlvbiA9IHNlbGVjdGVkVGV4dDtcbiAgICAgICAgdHJpZ2dlcihGQVFfRVZFTlRfSEFORExFUl9TRUxFQ1RJT05fQ0hBTkdFRCwgc2VsZWN0ZWRUZXh0KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbnlNY2VGYXFIb29rO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///93\n')},94:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/**\n * FaqTextEditorHook Provides a abstract class for the hooks to implement\n * the methods.\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\nclass FaqTextEditorHook {\n  constructor() {} // this._plugin = this.initializePluginForTextEditor()\n  // this.listenForTextSelection()\n\n  /**\n   * This should listen for the changes in the text editor selection and\n   * emit the text.\n   */\n\n\n  listenForTextSelection() {\n    this._throwFunctionNotImplementedError("listenForTextSelection()");\n  }\n\n  _throwFunctionNotImplementedError(functionName) {\n    throw new Error(functionName + \' should be implemented by the parent class \');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (FaqTextEditorHook);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2hvb2tzL2ZhcS10ZXh0LWVkaXRvci1ob29rLmpzPzBmNmQiXSwibmFtZXMiOlsiRmFxVGV4dEVkaXRvckhvb2siLCJjb25zdHJ1Y3RvciIsImxpc3RlbkZvclRleHRTZWxlY3Rpb24iLCJfdGhyb3dGdW5jdGlvbk5vdEltcGxlbWVudGVkRXJyb3IiLCJmdW5jdGlvbk5hbWUiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFPQSxNQUFNQSxpQkFBTixDQUF3QjtBQUNwQkMsYUFBVyxHQUFHLENBR2IsQ0FIVSxDQUNSO0FBQ0M7O0FBRUo7Ozs7OztBQUlBQyx3QkFBc0IsR0FBRztBQUNyQixTQUFLQyxpQ0FBTCxDQUF1QywwQkFBdkM7QUFDSDs7QUFDREEsbUNBQWlDLENBQUVDLFlBQUYsRUFBaUI7QUFDOUMsVUFBTSxJQUFJQyxLQUFKLENBQVdELFlBQVksR0FBRyw2Q0FBMUIsQ0FBTjtBQUNIOztBQWRtQjs7QUFnQlRKLDBFQUFmIiwiZmlsZSI6Ijk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGYXFUZXh0RWRpdG9ySG9vayBQcm92aWRlcyBhIGFic3RyYWN0IGNsYXNzIGZvciB0aGUgaG9va3MgdG8gaW1wbGVtZW50XG4gKiB0aGUgbWV0aG9kcy5cbiAqXG4gKiBAc2luY2UgMy4yNi4wXG4gKiBAYXV0aG9yIE5hdmVlbiBNdXRodXNhbXkgPG5hdmVlbkB3b3JkbGlmdC5pbz5cbiAqL1xuY2xhc3MgRmFxVGV4dEVkaXRvckhvb2sge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgIC8vIHRoaXMuX3BsdWdpbiA9IHRoaXMuaW5pdGlhbGl6ZVBsdWdpbkZvclRleHRFZGl0b3IoKVxuICAgICAgICAvLyB0aGlzLmxpc3RlbkZvclRleHRTZWxlY3Rpb24oKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIHNob3VsZCBsaXN0ZW4gZm9yIHRoZSBjaGFuZ2VzIGluIHRoZSB0ZXh0IGVkaXRvciBzZWxlY3Rpb24gYW5kXG4gICAgICogZW1pdCB0aGUgdGV4dC5cbiAgICAgKi9cbiAgICBsaXN0ZW5Gb3JUZXh0U2VsZWN0aW9uKCkge1xuICAgICAgICB0aGlzLl90aHJvd0Z1bmN0aW9uTm90SW1wbGVtZW50ZWRFcnJvcihcImxpc3RlbkZvclRleHRTZWxlY3Rpb24oKVwiKVxuICAgIH1cbiAgICBfdGhyb3dGdW5jdGlvbk5vdEltcGxlbWVudGVkRXJyb3IoIGZ1bmN0aW9uTmFtZSApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBmdW5jdGlvbk5hbWUgKyAnIHNob3VsZCBiZSBpbXBsZW1lbnRlZCBieSB0aGUgcGFyZW50IGNsYXNzICcpXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmFxVGV4dEVkaXRvckhvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///94\n')},95:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ_EVENT_HANDLER_SELECTION_CHANGED; });\n/**\n * Constants for the FAQ hooks.\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n/**\n * Event name when the text selection changed in any of text editor, emitted\n * from the hooks.\n * @type {string}\n */\nconst FAQ_EVENT_HANDLER_SELECTION_CHANGED = "FAQ_EVENT_HANDLER_SELECTION_CHANGED";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2NvbnN0YW50cy9mYXEtaG9vay1jb25zdGFudHMuanM/MmQ5OCJdLCJuYW1lcyI6WyJGQVFfRVZFTlRfSEFORExFUl9TRUxFQ1RJT05fQ0hBTkdFRCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7OztBQU9BOzs7OztBQUtPLE1BQU1BLG1DQUFtQyxHQUFHLHFDQUE1QyIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uc3RhbnRzIGZvciB0aGUgRkFRIGhvb2tzLlxuICpcbiAqIEBzaW5jZSAzLjI2LjBcbiAqIEBhdXRob3IgTmF2ZWVuIE11dGh1c2FteSA8bmF2ZWVuQHdvcmRsaWZ0LmlvPlxuICovXG5cbi8qKlxuICogRXZlbnQgbmFtZSB3aGVuIHRoZSB0ZXh0IHNlbGVjdGlvbiBjaGFuZ2VkIGluIGFueSBvZiB0ZXh0IGVkaXRvciwgZW1pdHRlZFxuICogZnJvbSB0aGUgaG9va3MuXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQgPSBcIkZBUV9FVkVOVF9IQU5ETEVSX1NFTEVDVElPTl9DSEFOR0VEXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n')}});
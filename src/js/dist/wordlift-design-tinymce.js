!function(Q){var F={};function U(B){if(F[B])return F[B].exports;var n=F[B]={i:B,l:!1,exports:{}};return Q[B].call(n.exports,n,n.exports,U),n.l=!0,n.exports}U.m=Q,U.c=F,U.d=function(Q,F,B){U.o(Q,F)||Object.defineProperty(Q,F,{enumerable:!0,get:B})},U.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},U.t=function(Q,F){if(1&F&&(Q=U(Q)),8&F)return Q;if(4&F&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var B=Object.create(null);if(U.r(B),Object.defineProperty(B,"default",{enumerable:!0,value:Q}),2&F&&"string"!=typeof Q)for(var n in Q)U.d(B,n,function(F){return Q[F]}.bind(null,n));return B},U.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return U.d(F,"a",F),F},U.o=function(Q,F){return Object.prototype.hasOwnProperty.call(Q,F)},U.p="",U(U.s=238)}({238:function(module,exports){eval('/* global tinymce */\ntinymce.PluginManager.add("@wordlift/design/tinymce", function (editor, url) {\n  editor.on("NodeChange", e => {\n    const selection = editor.selection;\n    postMessage("wordlift/design/editor/selectionChange", {\n      selection: {\n        text: selection.getContent({\n          format: "text"\n        }),\n        html: selection.getContent({\n          format: "html"\n        }),\n        rect: calcRect(editor)\n      },\n      editor: {\n        id: editor.id\n      }\n    });\n  });\n  editor.on("Init", () => {\n    editor.contentWindow.addEventListener("scroll", function () {\n      postMessage("wordlift/design/editor/scroll");\n    });\n    window.addEventListener("resize", function () {\n      postMessage("wordlift/design/editor/resize");\n    });\n  });\n  return {\n    getMetadata: function () {\n      return {\n        name: "WordLift Design, TinyMCE Plugin",\n        url: "https://wordlift.io"\n      };\n    }\n  };\n});\n\nconst calcRect = editor => {\n  // Get the selection. Bail out is the selection is collapsed (is just a caret).\n  const selection = editor.selection;\n  if ("" === selection.getContent({\n    format: "text"\n  })) return null; // Get the selection range and bail out if it\'s null.\n\n  const range = selection.getRng();\n  if (null == range) return null; // Get the editor\'s selection bounding rect. The rect\'s coordinates are relative to TinyMCE\'s editor\'s iframe.\n\n  const editorRect = range.getBoundingClientRect(); // Get TinyMCE\'s iframe element\'s bounding rect.\n\n  const iframe = editor.iframeElement;\n  const iframeRect = iframe ? iframe.getBoundingClientRect() : {\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n  }; // Calculate our target rect by summing the iframe and the editor rects along with the window\'s scroll positions.\n\n  return {\n    top: iframeRect.top + editorRect.top + window.scrollY,\n    right: iframeRect.left + editorRect.right + window.scrollX,\n    bottom: iframeRect.top + editorRect.bottom + window.scrollY,\n    left: iframeRect.left + editorRect.left + window.scrollX\n  };\n};\n\nconst postMessage = (type, payload = {}) => window.postMessage({\n  type,\n  payload: { ...payload,\n    ...{\n      source: "tinymce"\n    }\n  }\n}, window.origin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGlueS1tY2UvcGx1Z2luLmpzPzViNDUiXSwibmFtZXMiOlsidGlueW1jZSIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJlZGl0b3IiLCJ1cmwiLCJvbiIsImUiLCJzZWxlY3Rpb24iLCJwb3N0TWVzc2FnZSIsInRleHQiLCJnZXRDb250ZW50IiwiZm9ybWF0IiwiaHRtbCIsInJlY3QiLCJjYWxjUmVjdCIsImlkIiwiY29udGVudFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJnZXRNZXRhZGF0YSIsIm5hbWUiLCJyYW5nZSIsImdldFJuZyIsImVkaXRvclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpZnJhbWUiLCJpZnJhbWVFbGVtZW50IiwiaWZyYW1lUmVjdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInNjcm9sbFkiLCJzY3JvbGxYIiwidHlwZSIsInBheWxvYWQiLCJzb3VyY2UiLCJvcmlnaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQkMsR0FBdEIsQ0FBMEIsMEJBQTFCLEVBQXNELFVBQVVDLE1BQVYsRUFBa0JDLEdBQWxCLEVBQXVCO0FBQzNFRCxRQUFNLENBQUNFLEVBQVAsQ0FBVSxZQUFWLEVBQXlCQyxDQUFELElBQU87QUFDN0IsVUFBTUMsU0FBUyxHQUFHSixNQUFNLENBQUNJLFNBQXpCO0FBRUFDLGVBQVcsQ0FBQyx3Q0FBRCxFQUEyQztBQUNwREQsZUFBUyxFQUFFO0FBQ1RFLFlBQUksRUFBRUYsU0FBUyxDQUFDRyxVQUFWLENBQXFCO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFyQixDQURHO0FBRVRDLFlBQUksRUFBRUwsU0FBUyxDQUFDRyxVQUFWLENBQXFCO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUFyQixDQUZHO0FBR1RFLFlBQUksRUFBRUMsUUFBUSxDQUFDWCxNQUFEO0FBSEwsT0FEeUM7QUFNcERBLFlBQU0sRUFBRTtBQUFFWSxVQUFFLEVBQUVaLE1BQU0sQ0FBQ1k7QUFBYjtBQU40QyxLQUEzQyxDQUFYO0FBUUQsR0FYRDtBQWFBWixRQUFNLENBQUNFLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLE1BQU07QUFDdEJGLFVBQU0sQ0FBQ2EsYUFBUCxDQUFxQkMsZ0JBQXJCLENBQXNDLFFBQXRDLEVBQWdELFlBQVk7QUFDMURULGlCQUFXLENBQUMsK0JBQUQsQ0FBWDtBQUNELEtBRkQ7QUFJQVUsVUFBTSxDQUFDRCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDVCxpQkFBVyxDQUFDLCtCQUFELENBQVg7QUFDRCxLQUZEO0FBR0QsR0FSRDtBQVVBLFNBQU87QUFDTFcsZUFBVyxFQUFFLFlBQVk7QUFDdkIsYUFBTztBQUNMQyxZQUFJLEVBQUUsaUNBREQ7QUFFTGhCLFdBQUcsRUFBRTtBQUZBLE9BQVA7QUFJRDtBQU5JLEdBQVA7QUFRRCxDQWhDRDs7QUFrQ0EsTUFBTVUsUUFBUSxHQUFJWCxNQUFELElBQVk7QUFDM0I7QUFDQSxRQUFNSSxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ksU0FBekI7QUFDQSxNQUFJLE9BQU9BLFNBQVMsQ0FBQ0csVUFBVixDQUFxQjtBQUFFQyxVQUFNLEVBQUU7QUFBVixHQUFyQixDQUFYLEVBQXFELE9BQU8sSUFBUCxDQUgxQixDQUszQjs7QUFDQSxRQUFNVSxLQUFLLEdBQUdkLFNBQVMsQ0FBQ2UsTUFBVixFQUFkO0FBQ0EsTUFBSSxRQUFRRCxLQUFaLEVBQW1CLE9BQU8sSUFBUCxDQVBRLENBUzNCOztBQUNBLFFBQU1FLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxxQkFBTixFQUFuQixDQVYyQixDQVkzQjs7QUFDQSxRQUFNQyxNQUFNLEdBQUd0QixNQUFNLENBQUN1QixhQUF0QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0YsTUFBTSxHQUNyQkEsTUFBTSxDQUFDRCxxQkFBUCxFQURxQixHQUVyQjtBQUFFSSxPQUFHLEVBQUUsQ0FBUDtBQUFVQyxTQUFLLEVBQUUsQ0FBakI7QUFBb0JDLFVBQU0sRUFBRSxDQUE1QjtBQUErQkMsUUFBSSxFQUFFO0FBQXJDLEdBRkosQ0FkMkIsQ0FrQjNCOztBQUNBLFNBQU87QUFDTEgsT0FBRyxFQUFFRCxVQUFVLENBQUNDLEdBQVgsR0FBaUJMLFVBQVUsQ0FBQ0ssR0FBNUIsR0FBa0NWLE1BQU0sQ0FBQ2MsT0FEekM7QUFFTEgsU0FBSyxFQUFFRixVQUFVLENBQUNJLElBQVgsR0FBa0JSLFVBQVUsQ0FBQ00sS0FBN0IsR0FBcUNYLE1BQU0sQ0FBQ2UsT0FGOUM7QUFHTEgsVUFBTSxFQUFFSCxVQUFVLENBQUNDLEdBQVgsR0FBaUJMLFVBQVUsQ0FBQ08sTUFBNUIsR0FBcUNaLE1BQU0sQ0FBQ2MsT0FIL0M7QUFJTEQsUUFBSSxFQUFFSixVQUFVLENBQUNJLElBQVgsR0FBa0JSLFVBQVUsQ0FBQ1EsSUFBN0IsR0FBb0NiLE1BQU0sQ0FBQ2U7QUFKNUMsR0FBUDtBQU1ELENBekJEOztBQTJCQSxNQUFNekIsV0FBVyxHQUFHLENBQUMwQixJQUFELEVBQU9DLE9BQU8sR0FBRyxFQUFqQixLQUNsQmpCLE1BQU0sQ0FBQ1YsV0FBUCxDQUNFO0FBQ0UwQixNQURGO0FBRUVDLFNBQU8sRUFBRSxFQUFFLEdBQUdBLE9BQUw7QUFBYyxPQUFHO0FBQUVDLFlBQU0sRUFBRTtBQUFWO0FBQWpCO0FBRlgsQ0FERixFQUtFbEIsTUFBTSxDQUFDbUIsTUFMVCxDQURGIiwiZmlsZSI6IjIzOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCB0aW55bWNlICovXG5cbnRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoXCJAd29yZGxpZnQvZGVzaWduL3RpbnltY2VcIiwgZnVuY3Rpb24gKGVkaXRvciwgdXJsKSB7XG4gIGVkaXRvci5vbihcIk5vZGVDaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3Iuc2VsZWN0aW9uO1xuXG4gICAgcG9zdE1lc3NhZ2UoXCJ3b3JkbGlmdC9kZXNpZ24vZWRpdG9yL3NlbGVjdGlvbkNoYW5nZVwiLCB7XG4gICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgdGV4dDogc2VsZWN0aW9uLmdldENvbnRlbnQoeyBmb3JtYXQ6IFwidGV4dFwiIH0pLFxuICAgICAgICBodG1sOiBzZWxlY3Rpb24uZ2V0Q29udGVudCh7IGZvcm1hdDogXCJodG1sXCIgfSksXG4gICAgICAgIHJlY3Q6IGNhbGNSZWN0KGVkaXRvciksXG4gICAgICB9LFxuICAgICAgZWRpdG9yOiB7IGlkOiBlZGl0b3IuaWQgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdG9yLm9uKFwiSW5pdFwiLCAoKSA9PiB7XG4gICAgZWRpdG9yLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwb3N0TWVzc2FnZShcIndvcmRsaWZ0L2Rlc2lnbi9lZGl0b3Ivc2Nyb2xsXCIpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcG9zdE1lc3NhZ2UoXCJ3b3JkbGlmdC9kZXNpZ24vZWRpdG9yL3Jlc2l6ZVwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRNZXRhZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJXb3JkTGlmdCBEZXNpZ24sIFRpbnlNQ0UgUGx1Z2luXCIsXG4gICAgICAgIHVybDogXCJodHRwczovL3dvcmRsaWZ0LmlvXCIsXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG59KTtcblxuY29uc3QgY2FsY1JlY3QgPSAoZWRpdG9yKSA9PiB7XG4gIC8vIEdldCB0aGUgc2VsZWN0aW9uLiBCYWlsIG91dCBpcyB0aGUgc2VsZWN0aW9uIGlzIGNvbGxhcHNlZCAoaXMganVzdCBhIGNhcmV0KS5cbiAgY29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLnNlbGVjdGlvbjtcbiAgaWYgKFwiXCIgPT09IHNlbGVjdGlvbi5nZXRDb250ZW50KHsgZm9ybWF0OiBcInRleHRcIiB9KSkgcmV0dXJuIG51bGw7XG5cbiAgLy8gR2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYW5kIGJhaWwgb3V0IGlmIGl0J3MgbnVsbC5cbiAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0Um5nKCk7XG4gIGlmIChudWxsID09IHJhbmdlKSByZXR1cm4gbnVsbDtcblxuICAvLyBHZXQgdGhlIGVkaXRvcidzIHNlbGVjdGlvbiBib3VuZGluZyByZWN0LiBUaGUgcmVjdCdzIGNvb3JkaW5hdGVzIGFyZSByZWxhdGl2ZSB0byBUaW55TUNFJ3MgZWRpdG9yJ3MgaWZyYW1lLlxuICBjb25zdCBlZGl0b3JSZWN0ID0gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgLy8gR2V0IFRpbnlNQ0UncyBpZnJhbWUgZWxlbWVudCdzIGJvdW5kaW5nIHJlY3QuXG4gIGNvbnN0IGlmcmFtZSA9IGVkaXRvci5pZnJhbWVFbGVtZW50O1xuICBjb25zdCBpZnJhbWVSZWN0ID0gaWZyYW1lXG4gICAgPyBpZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICA6IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG5cbiAgLy8gQ2FsY3VsYXRlIG91ciB0YXJnZXQgcmVjdCBieSBzdW1taW5nIHRoZSBpZnJhbWUgYW5kIHRoZSBlZGl0b3IgcmVjdHMgYWxvbmcgd2l0aCB0aGUgd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9ucy5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IGlmcmFtZVJlY3QudG9wICsgZWRpdG9yUmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcbiAgICByaWdodDogaWZyYW1lUmVjdC5sZWZ0ICsgZWRpdG9yUmVjdC5yaWdodCArIHdpbmRvdy5zY3JvbGxYLFxuICAgIGJvdHRvbTogaWZyYW1lUmVjdC50b3AgKyBlZGl0b3JSZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZLFxuICAgIGxlZnQ6IGlmcmFtZVJlY3QubGVmdCArIGVkaXRvclJlY3QubGVmdCArIHdpbmRvdy5zY3JvbGxYLFxuICB9O1xufTtcblxuY29uc3QgcG9zdE1lc3NhZ2UgPSAodHlwZSwgcGF5bG9hZCA9IHt9KSA9PlxuICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAge1xuICAgICAgdHlwZSxcbiAgICAgIHBheWxvYWQ6IHsgLi4ucGF5bG9hZCwgLi4ueyBzb3VyY2U6IFwidGlueW1jZVwiIH0gfSxcbiAgICB9LFxuICAgIHdpbmRvdy5vcmlnaW5cbiAgKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///238\n')}});
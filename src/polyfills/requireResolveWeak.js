// Webpack's runtime normally provides `require.resolveWeak`; some Node/SSR
// environments omit it, which breaks Docusaurus dynamic route loading.
// This lightweight stub keeps builds/dev server running.
/* eslint-disable no-undef */
if (typeof __webpack_require__ !== 'undefined') {
  if (typeof __webpack_require__.resolveWeak !== 'function') {
    __webpack_require__.resolveWeak = () => {};
  }
}
if (typeof require !== 'undefined') {
  if (typeof require.resolveWeak !== 'function') {
    if (typeof __webpack_require__ !== 'undefined' && __webpack_require__.resolveWeak) {
      require.resolveWeak = __webpack_require__.resolveWeak.bind(__webpack_require__);
    } else {
      require.resolveWeak = () => {};
    }
  }
}

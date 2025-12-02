// Ensure Node's `require` has a no-op resolveWeak to satisfy webpack-generated calls during SSR.
if (typeof require !== 'undefined' && typeof require.resolveWeak !== 'function') {
  require.resolveWeak = () => {};
}

// sw.js: Minimal service worker required for PWA installability.
self.addEventListener('fetch', function(event) {
  // This worker does not cache content, it simply allows the PWA check to pass.
});

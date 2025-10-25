// sw.js: Minimal service worker required for PWA installability.
self.addEventListener('fetch', function(event) {
  // This worker does not cache content, it simply allows the PWA check to pass.
  // It responds by fetching the requested resource from the network.
  event.respondWith(fetch(event.request));
});

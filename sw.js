// Minimal service worker — required by Chrome/Android for full "Install app"
// (standalone, no browser address bar) PWA behavior. Intentionally does not
// cache anything: every request just passes straight through to the network,
// so live features (weather API, Firebase sync) are never affected.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});

// Service Worker — N&I Dashboard PWA
const CACHE = 'ni-dashboard-v1';
const ASSETS = [
  './dashboard-narda-ivan.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(ASSETS); })
  );
});

self.addEventListener('fetch', function(e) {
  // Solo cachear el dashboard, no las llamadas a Sheets
  if (e.request.url.includes('script.google.com')) return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).catch(function() { return cached; });
    })
  );
});

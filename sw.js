// Service Worker — N&I Dashboard PWA
// Cambia el número de versión cada vez que actualices el dashboard
const CACHE = 'ni-dashboard-v3';

// Al instalar nueva versión, borrar caché viejo automáticamente
self.addEventListener('install', function(e) {
  self.skipWaiting(); // activar inmediatamente sin esperar
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  // NO cachear nada — siempre ir a la red
  // Así siempre tienes la versión más reciente
  if (e.request.url.includes('script.google.com')) return;
  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request);
    })
  );
});

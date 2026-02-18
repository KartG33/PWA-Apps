// Меняй эту версию каждый раз когда обновляешь index.html
const VERSION = 'v3';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  // Удаляем ВСЕ старые кэши
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

// НЕ кэшируем вообще ничего — всегда берём из сети/файла
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
const cacheName = 'kaushik-tech';
const filesToCache = [
  '/',
  '/index.html',
  '/assets/media/bg2.svg',
  '/assets/css/app.css',
  '/assets/js/ParticleBg.js',
  '/assets/js/vendors~ParticleBg.js',
  '/assets/js/ProjectItem.js',
  '/assets/js/Timeline.js',
  '/assets/js/SkillBar.js',
  '/assets/js/SkillCard.js',
];
self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }),
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => response || fetch(event.request)),
  );
});

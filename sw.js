const cacheName = 'kaushik-tech';
const filesToCache = [
  '/assets/media/bg2.svg',
  '/assets/media/nodejs.svg',
  '/assets/media/firebase.svg',
  '/assets/css/app.css',
  '/assets/js/AboutSection.js',
  '/assets/js/EducationSection.js',
  '/assets/js/npm.css-loader.js',
  '/assets/js/npm.fbjs.js',
  '/assets/js/npm.prop-types.js',
  '/assets/js/npm.react-particles-js.js',
  '/assets/js/npm.style-loader.js',
  '/assets/js/ParticleBg.js',
  '/assets/js/ProjectItem.js',
  '/assets/js/ProjectSection.js',
  '/assets/js/SkillBar.js',
  '/assets/js/SkillCard.js',
  '/assets/js/SkillCardSection.js',
  '/assets/js/Timeline.js',
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

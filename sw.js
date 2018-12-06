const cacheName = 'kaushik-tech';
const filesToCache = [
  '/',
  '/assets/css/app.css',
  '/assets/media/bg2.svg',
  '/assets/media/nodejs.svg',
  '/assets/media/education.svg',
  '/assets/media/firebase.svg',
  '/assets/js/AboutSection.js',
  '/assets/js/EducationSection.js',
  '/assets/js/ExperienceSection.js',
  '/assets/js/MainApp.js',
  '/assets/js/npm.fbjs.js',
  '/assets/js/ProjectItem.js',
  '/assets/js/ProjectSection.js',
  '/assets/js/SkillCard.js',
  '/assets/js/SkillCardSection.js',
  '/assets/js/Timeline.js',
];
self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
      .catch(function (e) {
        console.log("SW Caching Error", e)
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

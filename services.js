const CACHE_NAME = 'zeroshare-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/ZeroShare', // Clean URL configured in vercel.json
  '/ZeroShare.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/site.webmanifest',
  '/icons/favicon-192x192.png',
  '/icons/favicon-512x512.png'
];

// Install Event: Cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event: Serve from Cache, Fallback to Network
self.addEventListener('fetch', (event) => {
  // We don't want to cache signaling server calls or STUN/TURN traffic
  if (event.request.url.includes('metered.ca') || event.request.url.includes('peerjs')) {
      return; 
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      // Fallback for missing pages (could route to 404 or index)
      if (event.request.mode === 'navigate') {
        return caches.match('/index.html');
      }
    })
  );
});

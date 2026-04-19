const CACHE_NAME = ‘canopus-v1’;
const ASSETS = [
‘/canopus/’,
‘/canopus/index.html’,
‘/canopus/style.css’,
‘/canopus/logo.jpg’,
‘/canopus/p1.jpg’,
‘/canopus/p2.jpg’,
‘/canopus/p3.jpg’,
‘/canopus/p4.jpg’,
‘/canopus/p5.jpg’,
‘/canopus/p6.jpg’,
‘/canopus/p7.jpg’,
‘/canopus/p8.jpg’,
‘/canopus/p9.jpg’,
‘/canopus/p10.jpg’
];

// Install — cache everything
self.addEventListener(‘install’, e => {
e.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
);
self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener(‘activate’, e => {
e.waitUntil(
caches.keys().then(keys =>
Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
)
);
self.clients.claim();
});

// Fetch — cache first, then network
self.addEventListener(‘fetch’, e => {
e.respondWith(
caches.match(e.request).then(cached => cached || fetch(e.request))
);
});

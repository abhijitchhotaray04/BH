// sw.js
// This Service Worker handles caching for offline functionality.

const CACHE_NAME = 'ai-resume-v2'; // Increment version to force update
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/sw.js'
    // Add any font files or icons here
];

// Install event: Caches all essential app files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event: Serves files from cache first
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached asset if found
                if (response) {
                    return response;
                }
                // Otherwise, fetch from the network
                return fetch(event.request);
            })
    );
});

// Activate event: Cleans up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
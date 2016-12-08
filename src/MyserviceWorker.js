self.addEventListener('install', function(e) {
    console.log('sd');
    self.skipWaiting();
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/static/',
                '/static/bundle.js',
            ]);
        })
    );
});


self.addEventListener('activate', event => {
    console.log('act');
});

self.addEventListener('fetch', function(event) {
    console.log('fetchout');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            console.log('fetch');
            return response || fetch(event.request);
        })
    );
});

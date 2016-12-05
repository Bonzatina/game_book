self.addEventListener('install', function(e) {
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

self.addEventListener('fetch', function(event) {
   console.log('sd');
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    // Do activate stuff: This will come later on.
});
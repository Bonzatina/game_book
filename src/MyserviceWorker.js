self.addEventListener('install', function(e) {
    console.log('sd');
    self.skipWaiting();
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/bundle.js',
                '/game',
                '/rules'
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

self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';

    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,

            tag: tag
        })
    );
});

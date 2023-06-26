self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('nome-do-cache')
        .then(function(cache) {
          return cache.addAll([
            '/app.js',
            '/style.css',
            '/index.html'
          ]);
        })
    );
  });
  
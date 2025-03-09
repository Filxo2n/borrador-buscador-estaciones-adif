self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("estaciones-cache").then(cache => {
            return cache.addAll(["index.html", "listado-estaciones-completo-act.csv"]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

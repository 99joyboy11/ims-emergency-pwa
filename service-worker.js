const CACHE_NAME = "ims-cache";

self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll([
                "/",
                "/index.html",
                "/dispatcher.html"
            ]);
        })
    );
});

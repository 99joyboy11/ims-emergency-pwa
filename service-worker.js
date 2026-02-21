const CACHE_NAME = "ims-cache-v1";

self.addEventListener("install", e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(cache=>{
return cache.addAll([
"/",
"/index.html",
"/dispatcher.html"
]);
})
);
});

self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request)
.then(res=>res || fetch(e.request))
);
});

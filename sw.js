const CACHE_NAME = "sipsayura-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/icon.png", // Ensure this matches your icon filename
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js",
];

// Install Service Worker
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Fetch Assets from Cache
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

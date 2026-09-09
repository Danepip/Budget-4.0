const VERSION = "budget-card-view-v125";
const SHELL_CACHE = `${VERSION}-shell`;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./budget-category-rules.js",
  "./budget-cloud-sync.js",
  "./supabase.config.js",
  "./capacitor.js",
  "./synapse.js",
  "./capacitor-filesystem.js",
  "./capacitor-share.js",
  "./xlsx.full.min.js",
  "./supabase.js",
  "./manifest.json",
  "./offline.html",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./metric-revenu.png",
  "./metric-depenses.png",
  "./metric-epargne.png",
  "./metric-cash.png",
  "./icon-app.svg",
  "./icon-192.svg",
  "./icon-512.svg",
];
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // A failed file rejects the entire install. Never activate a partial app shell.
    await cache.addAll(APP_SHELL.map(path => new Request(new URL(path, self.location.href), { cache: "reload" })));
    // Wait for existing tabs to close rather than mixing versions during editing.
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();

    await Promise.all(
      cacheNames
        .filter((cacheName) => cacheName.startsWith("budget-card-view-") && cacheName !== SHELL_CACHE)
        .map((cacheName) => caches.delete(cacheName))
    );

  })());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }
  if (APP_SHELL.some(path => new URL(path, self.location.href).pathname === url.pathname)) {
    event.respondWith(readShellAsset(request));
  }
});

async function handleNavigation(request) {
  const cache = await caches.open(SHELL_CACHE);
  return (await cache.match("./index.html")) || fetch(request);
}

async function readShellAsset(request) {
  const cache = await caches.open(SHELL_CACHE);
  // Do not serve a newer network script alongside an older cached app.
  return (await cache.match(request, { ignoreSearch: true })) || Response.error();
}

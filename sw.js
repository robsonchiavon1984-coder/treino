/* Forja de Treino — service worker: rede primeiro, cache como reserva (funciona offline) */
const VERSAO = 'forja-2.1.202610181805';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => Promise.all(['./', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/apple-touch-icon.png'].map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSAO) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (/generativelanguage|anthropic\.com/.test(u.hostname)) return;
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com/.test(u.hostname)) return;
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const cp = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, cp)); }
    return r;
  }).catch(async () => (await caches.match(e.request)) || (e.request.mode === 'navigate' ? await caches.match('./') : Response.error())));
});

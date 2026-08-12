// Bump this on every deploy that changes cached files, to invalidate old caches.
const CACHE_NAME = 'command-footprint-v5';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './images/img-0033917dd0e1.png',
  './images/img-0216e07c52ca.png',
  './images/img-028b6277c191.jpg',
  './images/img-03558ee46ad6.png',
  './images/img-04b1ca25364d.png',
  './images/img-05e916fe6e6a.png',
  './images/img-065049c71c9b.png',
  './images/img-067d37f17503.png',
  './images/img-070983c6ef64.png',
  './images/img-07ae00c6bcca.png',
  './images/img-099c1c05010d.png',
  './images/img-09c6bb9d33ab.png',
  './images/img-0a6ed0c83676.png',
  './images/img-0ca5738ed649.jpg',
  './images/img-0fcc27c0b35c.png',
  './images/img-18dfffd8adfe.jpg',
  './images/img-1dd81756d02f.png',
  './images/img-2290d4a1cc54.png',
  './images/img-2318cee7ef61.png',
  './images/img-251bff267282.jpg',
  './images/img-254176301490.jpg',
  './images/img-26c5c0b30331.jpg',
  './images/img-2f189685116a.png',
  './images/img-31d7375ce5a1.png',
  './images/img-31e62818490b.jpg',
  './images/img-3231b45c6636.png',
  './images/img-37d9ac98ba23.png',
  './images/img-39268028b6bb.jpg',
  './images/img-3a8e683b3cc0.jpg',
  './images/img-3d655578141e.jpg',
  './images/img-40cd8babf81d.png',
  './images/img-4675b0f09839.png',
  './images/img-4a95c5b18744.png',
  './images/img-4e48969d1e84.png',
  './images/img-4e4b596248f9.jpg',
  './images/img-4e6b0a3a0220.jpg',
  './images/img-50eb8aa6ed48.jpg',
  './images/img-533b1a642448.png',
  './images/img-57187935fd9b.jpg',
  './images/img-5aaf08958ded.png',
  './images/img-5fc2f4ada605.jpg',
  './images/img-62c7673747a2.png',
  './images/img-63e6df42895e.jpg',
  './images/img-68ba0c8cdf3b.png',
  './images/img-6bc872a6d895.png',
  './images/img-6cd637592aa7.png',
  './images/img-71e175611d7a.jpg',
  './images/img-7265809f8936.png',
  './images/img-746b4e49131e.png',
  './images/img-75458a66c8b1.png',
  './images/img-792ca447b261.png',
  './images/img-7a5b89e279e8.png',
  './images/img-7a7fe109aa14.jpg',
  './images/img-7a8d628f7a96.png',
  './images/img-7d668d0e0d50.png',
  './images/img-802b3ef23b5e.png',
  './images/img-86a292077658.jpg',
  './images/img-8b354116b94b.png',
  './images/img-8c3d5c08e6e6.png',
  './images/img-8e049f491b4a.png',
  './images/img-8f58bd71cc39.jpg',
  './images/img-8f6209872bbd.png',
  './images/img-92bffa9dcc64.png',
  './images/img-9ac354d1e0e9.png',
  './images/img-9aebbc9235d1.png',
  './images/img-9c871b43f026.png',
  './images/img-9de213d27125.png',
  './images/img-a0f3a34e89ac.png',
  './images/img-a1837590ba28.png',
  './images/img-a2722ca80552.png',
  './images/img-a609573615eb.png',
  './images/img-a8c3de2c9764.png',
  './images/img-a9d90a810eeb.jpg',
  './images/img-a9e74df29bdc.png',
  './images/img-ab086cfaf3ca.jpg',
  './images/img-abac92702cf1.png',
  './images/img-ad0d4c802a8f.jpg',
  './images/img-b2322def5a3c.jpg',
  './images/img-b3c0220386e3.png',
  './images/img-b50da40a22d3.jpg',
  './images/img-b56b011f28a8.jpg',
  './images/img-b6c9327be280.png',
  './images/img-b8cefabf9787.jpg',
  './images/img-c878268162c8.png',
  './images/img-c96871796e36.png',
  './images/img-caf49c77410c.png',
  './images/img-cdf06b113dde.jpg',
  './images/img-cf3e1c1a61fc.png',
  './images/img-d2fc07f03816.jpg',
  './images/img-d5399caf4456.png',
  './images/img-d9514912899c.png',
  './images/img-db764d108a70.jpg',
  './images/img-dcb483835157.png',
  './images/img-e0571ee6fd94.png',
  './images/img-e3b3ee202011.png',
  './images/img-e4cb7adee183.png',
  './images/img-e76335befc74.png',
  './images/img-e8b6a7b86906.png',
  './images/img-e8d9d6b54967.png',
  './images/img-ec4f0fc76db8.png',
  './images/img-f00bd151883e.png',
  './images/img-f108b587d2d9.png',
  './images/img-f6256c0f3cd7.png',
  './images/img-f86410904e02.png',
  './images/img-f8c52ebe85e7.png',
  './images/img-f92a00b11560.png',
  './images/img-fc01cb074350.png',
  './images/img-fefd1f227a83.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Page navigations: try the network first (so online users get the latest
  // deploy), fall back to the cached copy when offline.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Everything else (manifest, icons, images): cache-first, refresh cache in background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

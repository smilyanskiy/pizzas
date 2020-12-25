const CACHE_NAME = "PWA-3";
// what files we need to cache
const urlsToCache = [
  '/manifest.webmanifest',
  '/offline.html',
  '/service-worker.js'
];
// create glocal const
const self = this;

// Install SW
self.addEventListener('install', (event) => {
  // open cache store with const name and set cached link there
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
  console.log('Opened cache');
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(response => response || fetch(event.request).catch(() => caches.match('/offline.html')))
//   );
// });

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch( async res => {
      console.warn('fetch failed', res);
      return await caches.open(CACHE_NAME).then(response => response.match("/offline.html"));
    })
  )
});

// Activate the SW
self.addEventListener('activate', async () => {
  // get all keys from caches
  const cachesKeys = await caches.keys();
  // check if isset another chaches key drop it, except last version
  Promise.all(
    cachesKeys.map(key => CACHE_NAME !== key && caches.delete(key)),
  );
});

/* ------ push notification ------ */

self.addEventListener('push', (event) => {
  if (self.Notification.permission === 'granted') {
    console.log("[Service Worker] Push Notification");
    const { title, text } = event.data.json();
    const options = {
      body: text,
      icon: 'image/favicon192.png',
      vibrate: [200, 100, 200],
    };
    event.waitUntil(self.registration.showNotification(title, options));
  } else {
    console.log('[Service Worker] Notification: false');
  }
});


// self.addEventListener("install",function(b){
//   var a=new Request("fallback.html");
//   b.waitUntil(fetch(a).then(function(c){
//     return caches.open("fallback").then(function(d){
//       return d.put(a,c)})}))});
      
      
  // self.addEventListener("fetch",function(b){
  //   var a=b.request;
  //   if(a.method==="GET"){
  //     b.respondWith(fetch(a).catch(function(c){
  //       return caches.open("fallback").then(function(d){
  //         return d.match("fallback.html")
  //       })
  //     }))
  //   }
  // });
const CACHE_NAME = 'trip-planner-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icon.png',
  './manifest.json',
  // 如果您有其他外部資源想快取，也可以加在這裡，
  // 但因為您的 HTML 使用了 CDN (React, Tailwind 等)，
  // 建議保持簡單，讓瀏覽器處理 CDN 快取。
];

// 1. 安裝 Service Worker 並快取關鍵檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// 2. 攔截網路請求 (Network First 策略)
// 優先嘗試網路下載，成功後更新快取；若沒網路則讀取快取
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // 只快取成功的請求 (status 200) 且是我們自己的檔案 (type 'basic')
        // 對於 CDN 資源 (cors)，通常不需在此強制快取，除非您希望完全離線使用
        if(networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
            });
        }
        return networkResponse;
      })
      .catch(() => {
        // 網路失敗時，嘗試從快取讀取
        return caches.match(event.request);
      })
  );
});

// 3. 清除舊的快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
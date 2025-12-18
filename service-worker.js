const CACHE_NAME = 'trip-2025-v2'; // 如果之後有大改版，改這個名字(如 v3)使用者就會更新
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './config.js',      // 重要：新的設定檔
  './manifest.json',
  './logo.jpg',       // 您的 Logo
  './icon-192.png',   // 下面步驟會教您製作
  './icon-512.png',
  // 外部資源 (讓離線時也能讀取 React 等函式庫)
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
  'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=JetBrains+Mono:wght@500&display=swap'
];

// 安裝：快取檔案
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 攔截請求：有快取就用快取，沒快取就上網抓
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 啟動：刪除舊快取
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
// 서비스워커 — 앱 파일을 캐시해 두어 오프라인에서도 실행되게 합니다.
//
// 중요: 파일을 고쳐 다시 배포할 때는 CACHE_NAME의 버전을 반드시 올려야 합니다.
// 올리지 않으면 이미 설치한 기기가 옛 파일을 계속 씁니다.

const CACHE_NAME = "blank-fill-v11";

const ASSETS = [
  "./",
  "./index.html",
  "./sentences.js",
  "./manifest.json",
  "./newsreader-latin.woff2",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

// 버전이 바뀌면 예전 캐시를 지웁니다. 없으면 옛 파일이 계속 쌓입니다.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// 캐시에 있으면 캐시로, 없으면 네트워크로 가져옵니다.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((hit) => hit || fetch(event.request))
  );
});

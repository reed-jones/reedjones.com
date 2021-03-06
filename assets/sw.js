"use strict";

var CACHE_NAME = "reedjones-cache-v2";
var urlsToCache = [
  "/",
  "/css/style.min.css",
  "/js/main.min.js",
  "/images/bg/hero.jpg",
  "/images/bg/impulse.jpg",
  "/images/projects/controller.png",
  "/images/projects/maze.png",
  "/images/projects/minesweep.jpg",
  "/images/projects/movies.jpg",
  "/images/projects/vmas.jpg",
  "/images/projects/phase.png",
  "/images/projects/svelte-server.png",
  "/images/column/1.jpg",
  "/images/column/2.jpg",
  "/images/column/4.jpg",
  "/images/column/6.png",
  "/images/column/7.jpg",
  "/images/cathedral.jpg",
  "/fonts/icomoon.woff",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request);

      // return response ? response : fetch(event.request)
    })
  );
});

self.addEventListener("activate", (event) => {
  var cacheKeeplist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

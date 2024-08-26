'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b31e7f6fbb2887cf25b03d22441f0b2f",
"assets/AssetManifest.bin.json": "d54dddc3aaa663fba8e91229f9a58bfc",
"assets/AssetManifest.json": "1d7007174040417752af233cc7fbf219",
"assets/assets/fonts/gilroy/Gilroy-Black.ttf": "b8a3b3a91be25a0030d694a34e152217",
"assets/assets/fonts/gilroy/Gilroy-BlackItalic.ttf": "fba7a1177258a7e2680202eff4036c54",
"assets/assets/fonts/gilroy/Gilroy-Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"assets/assets/fonts/gilroy/Gilroy-BoldItalic.ttf": "920fb5d3a984a3906d0c681214ce0087",
"assets/assets/fonts/gilroy/Gilroy-ExtraBold.ttf": "b487bfc69e2a1cb0578fe2a910da8b2b",
"assets/assets/fonts/gilroy/Gilroy-ExtraBoldItalic.ttf": "9cf075de7808f747557e1845043070ab",
"assets/assets/fonts/gilroy/Gilroy-Light.ttf": "4b236c6cb4c59d66b80dde6f9c614ebd",
"assets/assets/fonts/gilroy/Gilroy-LightItalic.ttf": "a0904c2ad11d35a1079be6d2749bf98a",
"assets/assets/fonts/gilroy/Gilroy-Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/fonts/gilroy/Gilroy-MediumItalic.ttf": "5d08cc9fffd565a2b9d9baae3846cb65",
"assets/assets/fonts/gilroy/Gilroy-Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/gilroy/Gilroy-RegularItalic.ttf": "b564aec808c412ff20b83a2d779122b5",
"assets/assets/fonts/gilroy/Gilroy-SemiBold.ttf": "a5cf732b15078843b237bd58f3ed44cd",
"assets/assets/fonts/gilroy/Gilroy-SemiBoldItalic.ttf": "e2389bf40e3693ec0257d576bce4ff65",
"assets/assets/fonts/gilroy/Gilroy-Thin.ttf": "437d0d08a241c1d07517909f70c8ef11",
"assets/assets/fonts/gilroy/Gilroy-ThinItalic.ttf": "6fe75d8801ab6a4aeb79f5627be2a655",
"assets/assets/fonts/gilroy/Gilroy-UltraLight.ttf": "f5bd9c00f2cc7353bfc80031dd5d9394",
"assets/assets/fonts/gilroy/Gilroy-UltraLightItalic.ttf": "5c3b028b0b0f7b4ace95ac644082400d",
"assets/assets/images/bg-img-onboarding.png": "e7001d75410143886fc3933ddefcca9a",
"assets/assets/images/bg-img-signin-signup.png": "4d2f4f9515d4a99ab4286a257972b623",
"assets/assets/images/img-carrot-fullcolor.png": "245b7a12c9dabf5f6930925bccc3d285",
"assets/assets/images/img-carrot.png": "1c4f0cb03c7d1d78d11db0ff5efe4317",
"assets/FontManifest.json": "b334e5d6931b8d524b4f2c3565829ae6",
"assets/fonts/MaterialIcons-Regular.otf": "11a74f2b06cb527b1fc2797355c99fc7",
"assets/NOTICES": "5a19ecf49c17a92ddc79137ccdff2025",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "6138d623a5a159ae21ee72f398844ac9",
"icons/icon-512.png": "2eb16de2c2a7bb63f966f1b4a006ddc6",
"icons/Icon-maskable-192.png": "6138d623a5a159ae21ee72f398844ac9",
"icons/Icon-maskable-512.png": "2eb16de2c2a7bb63f966f1b4a006ddc6",
"index.html": "de8c4a0ae1c10759f2979822232fdd5d",
"/": "de8c4a0ae1c10759f2979822232fdd5d",
"main.dart.js": "c56d52b2e4567e00d434b60ae27e0ac3",
"manifest.json": "8d6fba5019bb6334ede8b03c9ebd2035",
"version.json": "46a583a6c9a229966898325ad117af2f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

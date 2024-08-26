'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b883379826c00682490421f713401d45",
".git/config": "97c5c90d0ce346213c0414129e781141",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a754d3796e90844d5bc85fe274b0befb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6869545c48fdcb57bc16362c4a8aa028",
".git/logs/refs/heads/master": "6869545c48fdcb57bc16362c4a8aa028",
".git/logs/refs/remotes/origin/master": "f664d5a90fab645500d2e3d522c36a35",
".git/objects/01/eb343222b02b5a86403c87ba3a8caf4521450d": "13f7e312ebbe9f45798851f1590a91d0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/d6a9431cc38c7695aa9d8316e41641c151c283": "333169db10c963d0c186edea34f1a016",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/637fd044ecfd26cf986f87687bae3f6031dcec": "7a9d90e3bee5ec1cd83f9f298920160c",
".git/objects/14/9fbcbfd39914639a8b75e34fb5d57ca76bcce7": "9054a9863965257f8dab6a3e569fdf7e",
".git/objects/1a/ea716b2e58df547dac15e3f9acc3c540ef25ad": "1827eeaa463fe89df02c3e0aa594d8f9",
".git/objects/1c/0a8770e90e6236c4a06c208b27f569c7736b14": "7f100568418c32ea057e04adb48c597a",
".git/objects/1d/34b67c67d66a6d11d9083f497513c9a5a89cba": "703bb90d269ea4e1bbf76f0a0919deea",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/cb417f172eb286d7a0b647cd3e00961b1ba785": "f983fb1f2439dc55a14016bf1937d389",
".git/objects/28/cf2beff6a7fe97fbdcfaf1d92aa201f1c191e4": "ee43ab894982e8853a7117d4eedf0a7c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/6dac84c82805838f9081565a8913b47de9a8be": "03d48e197710357e66a25a9b84682402",
".git/objects/34/03fe86f54077be6eb4cf986606634cd13d2b7a": "5ac25745ad2b47b206c26fa562f8a1e1",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/1a57e152d7007ad774eec09f78444fcffb5ffc": "c795ea24a053ae2617a1eb7f7f776042",
".git/objects/3f/ce9a1b72d22c27734a8139b09572bd9951b0d6": "ab5a638920fa9b7d50d4e5c6768608a4",
".git/objects/40/480601312053f6c076822d68bdb09f34c3d0e2": "c7429905526dd4da98f84170c28f6e9b",
".git/objects/43/9d364e122eb25af7ad52d7baeae29d52004f68": "2ca74beb50b30988206af59931a42597",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/673a4f45d9b308896ea58c3a75bb42611517a7": "ddcc8e1e4c5e9f37c326c2a964a4fce7",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/c35614bbe7f22bb6e694c6afd6700d378acd9d": "f5871d3d6c823234f5234f784ed2232a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/a813a6797920239ac4b9471a4be079a0fc6348": "3a55d92dae4dca4459c9ba2a3b2abbb5",
".git/objects/57/7f47dcdf59ed15d94da9cf20f512638cd46152": "0f066d2e95b73278d2ecedfa79593be7",
".git/objects/58/d4ca3dca0b1cfeb6f1cb2411d56ce048dbe0a4": "a113bc8178442b4c278685ae1f158992",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/62/8a73208dd9a7a4caf7bc4342fefcbd5a59b1dc": "2934c7c817fed8214f861f0cf2ebe4c9",
".git/objects/67/54019f7c021bbe23bd49a671eb79c8549d6f3d": "827ef020fa85eda5441c76812ff71ea8",
".git/objects/6b/722bb324a868dbf888e8c4587356be1e38acbb": "53bdc967cb8f4a6feba5ed30be5e87ca",
".git/objects/6f/0b4c4f9e79a4a942c24fcf506647e8881c9c32": "ce02836fcd6e7fba6c0c4250a4cce840",
".git/objects/77/7935120816fdb562c03e5edfdecaa04e080023": "4ae57752b9836ef93dcc520e281b3570",
".git/objects/7b/f929241261cfa339c1eb9f27ace0df3a4d6960": "78b3eae67028ff4ff350abd3a0f84cbf",
".git/objects/7f/675fc4664c5aecece6b60a2cd9155894df32e0": "85a292639822d73579c05f7f945494e9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/000c17097127145653def1e34020695b5a50fc": "743a125389d8182cd8e9ec1c5a18534d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/1c9bbbeea4f2d7f63fe241d0892c6d6595b66e": "e85142793ef03cee928351a374538f16",
".git/objects/9d/75d1a544ba598b0f79bcc14dc454a8a2ea515a": "67742206155ca9a36e52de7084559548",
".git/objects/9f/bb898b940e0aaff52aeff269e36a01d34152fd": "c8a0a3c886f396f22f7b2b4046bff590",
".git/objects/a2/c487a33becee8ab659ed70f4cad9b4c83a2f57": "162a5332b9e7ac8b846b20030c640b65",
".git/objects/ad/17f71cbea192fca535acef186e8015fffa596c": "afd9c204889d086f646784cfecae9862",
".git/objects/ad/c3e33e32c7e14e322d05af3af51592cc2da666": "cac92bda99844ef3c5ab59b16ae53623",
".git/objects/b0/8db4e85eb72b8535411f4361565092ec722669": "f03682a739422d39c2d1eb6de9bb8be8",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/53852ce55fa91bd61ca1cf33cc9003812e0180": "a0ffc4f06710e6f813efe47b1a4266e0",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/fd7e1aeed0270f57c5f56fd40ba7370d6b33f5": "cfb58d1f52ae68569097384d07284d6f",
".git/objects/be/2ee87d051b3f0f6044adb3751f76ed19ed3fe9": "cc3064d84a2d35f62f76246d4ef354a4",
".git/objects/bf/16d15f72580888c6717c87886d538c65e904b1": "12540888918fa80998523cbc89ba573e",
".git/objects/c6/daeb74392d1e8125623f7d517a79945a4dfde1": "57554dd82aa9fbefa252e9d94d409484",
".git/objects/cb/3cbb610ef10c9070224a511674fe9d65c68974": "835654ced74139c22db8346303d0e5b2",
".git/objects/ce/d5d239748b9f1a54aef249176c2a3cabc89ed8": "1880efedadea4c59175d52ef8339e354",
".git/objects/d6/37348186553e98dd9cd9d33d5f0c4ad2d48293": "e0aaf85402f55a9a321d74a8411cfe1e",
".git/objects/da/7238c8bf431c0c5d07be4516ef209009ffb0c3": "b699d1de1c261dc631fae2eec1df66b8",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/ea/4bee40c3411cfbfe8f139ecf4a9aeab55d988f": "230749ac9f422bee078303d8bf7d08d0",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ef/746ef8da27ff6235a6eafaecd79661f228b3a3": "24cd2e691961d9e4ea43cf0f43313b7e",
".git/objects/fc/82a10f792149cc50502b5c8291d19e354d9405": "603123ffd72e7db679da085663810a52",
".git/refs/heads/master": "4e3e15b74d99a7647e146559032db8ba",
".git/refs/remotes/origin/master": "4e3e15b74d99a7647e146559032db8ba",
"assets/AssetManifest.bin": "b31e7f6fbb2887cf25b03d22441f0b2f",
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
"index.html": "0532437859e7a52fbef386a64a20e762",
"/": "0532437859e7a52fbef386a64a20e762",
"main.dart.js": "268c6faa21bf5afa7298bd8101ddf6e5",
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

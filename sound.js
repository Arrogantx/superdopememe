if (!self.define) {
    let e, s = {};
    const i = (i,n)=>(i = new URL(i + ".js",n).href,
    s[i] || new Promise((s=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = i,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = i,
            importScripts(i),
            s()
    }
    )).then((()=>{
        let e = s[i];
        if (!e)
            throw new Error(`Module ${i} didn’t register its module`);
        return e
    }
    )));
    self.define = (n,c)=>{
        const a = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[a])
            return;
        let t = {};
        const o = e=>i(e, a)
          , r = {
            module: {
                uri: a
            },
            exports: t,
            require: o
        };
        s[a] = Promise.all(n.map((e=>r[e] || o(e)))).then((e=>(c(...e),
        t)))
    }
}
define(["./workbox-7c2a5a06"], (function(e) {
    "use strict";
    importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "/OneSignalSDKWorker.js",
        revision: "df13b1be4c46893de5af32b877e0cb65"
    }, {
        url: "/_next/app-build-manifest.json",
        revision: "c5d994329f2c2272dd38d26547878c8c"
    }, {
        url: "/_next/static/chunks/08ffe114-6528e363d560a591.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/13b76428-f0fe9fe157a3353a.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/1527-52cd1392a885d501.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/173.59ad6c2f36335ea7.js",
        revision: "59ad6c2f36335ea7"
    }, {
        url: "/_next/static/chunks/2391-e1e2c483108eb772.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/2417-3c5ef1d21683c617.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/2761-f22df2746699bbd0.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/2896.21d62be62b68168c.js",
        revision: "21d62be62b68168c"
    }, {
        url: "/_next/static/chunks/3222-867fda050d7bac04.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/3534-35109510021f6d26.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/3618-4399e6d9e7204f9b.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/3627521c-e7a85c4fbb590882.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/363642f4.c62acc3e45440b27.js",
        revision: "c62acc3e45440b27"
    }, {
        url: "/_next/static/chunks/3d9553d5-60e172054f8773b0.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/4247.e31508604bac913c.js",
        revision: "e31508604bac913c"
    }, {
        url: "/_next/static/chunks/4509ffe6-ae91214a9dafd4fb.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/4766.46c9bbe95be797cc.js",
        revision: "46c9bbe95be797cc"
    }, {
        url: "/_next/static/chunks/48507feb-378c16335c697c43.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/4921-1272841cc7bb6d96.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/4f53ad1b-71708b1917cbc24e.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/5266.b58b339f4bacbf63.js",
        revision: "b58b339f4bacbf63"
    }, {
        url: "/_next/static/chunks/5860-88fdb32fcb5f500f.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/5864-b0458539b5042976.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/7763.cf43946949f21bee.js",
        revision: "cf43946949f21bee"
    }, {
        url: "/_next/static/chunks/8051.b25a778c1a980aa6.js",
        revision: "b25a778c1a980aa6"
    }, {
        url: "/_next/static/chunks/8114-44a1983eedcd7849.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/8128.c1a114ec6dec827e.js",
        revision: "c1a114ec6dec827e"
    }, {
        url: "/_next/static/chunks/8455.873d13671271f390.js",
        revision: "873d13671271f390"
    }, {
        url: "/_next/static/chunks/8870.be351c18f40e3325.js",
        revision: "be351c18f40e3325"
    }, {
        url: "/_next/static/chunks/8c2b0380-101f1880e72d62bd.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/8dc5345f-014ac234a9d1e0d3.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/9081a741-7d0419edf3af118f.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/93854f56-ca58eb1c1f2b88d6.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/969c1769-e775b5043613bca6.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/9898-80c7d08601758307.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/9cb54ea0-b95f4b671d2deb2d.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/a4634e51-1961cdcab84bdbf1.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/a71ec89b.e94b4e4b103118b0.js",
        revision: "e94b4e4b103118b0"
    }, {
        url: "/_next/static/chunks/app/(sanity)/studio/%5B%5B...index%5D%5D/page-36ce012f49caf913.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(sanity)/studio/layout-e8a5352d9a442096.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/%5Bpage%5D/layout-e95800dc4249bb4a.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/%5Bpage%5D/page-b79f7bfb5ec08b37.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/account/layout-94ce40325f3094e8.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/account/loading-ca083d6596783bd6.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/account/login/page-778c797659f03e05.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/account/page-49a961ef3f8aebcc.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/albums/%5Balbum%5D/page-a9082266968c2da9.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/blank/page-854962577106dfcd.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/collections/%5Bcollection%5D/page-86b687c93c4a974c.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/collections/layout-917a3bd03e93b28b.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/collections/loading-73556308b19f7bb9.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/collections/page-92e11df87c8ef733.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/contact/page-349e233ad56a1854.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/error-0a02b9c45c27e681.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/events/page-141cf2db54d0ba60.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/layout-e866fd3b16a4d435.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/menu/exit-kiosk/page-9648a4a6ec655dcc.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/menu/page-3a2ff818d175874b.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/oauthcallback/page-577a55534be18270.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/page-61cf1b7b3817f1c3.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/products/%5Bhandle%5D/page-802f1216074b80a3.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/app/(website)/secret/page-385e563922f51b7c.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/bf6a786c-d149f33b20f441ab.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/ccd63cfe-10b06048da98aeb1.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/e37a0b60-b436cec589ebdecd.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/e416a3ff-561144326c916b87.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/framework-4498e84bb0ba1830.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/main-07ff0f0912cb1812.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/main-app-f6d62819c280c608.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
        revision: "79330112775102f91e1010318bae2bd3"
    }, {
        url: "/_next/static/chunks/webpack-0ad7b7a833b72f7b.js",
        revision: "nI4AOizXoFINg0IQEHyKv"
    }, {
        url: "/_next/static/css/960c3ae130cfde0e.css",
        revision: "960c3ae130cfde0e"
    }, {
        url: "/_next/static/css/d6a21e913e36ea7b.css",
        revision: "d6a21e913e36ea7b"
    }, {
        url: "/_next/static/css/da30d717142cf87a.css",
        revision: "da30d717142cf87a"
    }, {
        url: "/_next/static/media/atari-classic.c1073384.ttf",
        revision: "c1073384"
    }, {
        url: "/_next/static/media/bg-store.1a9cca80.jpg",
        revision: "a82efffee5a7d0bc1ed00bbf546b434a"
    }, {
        url: "/_next/static/media/bg.89ca667d.png",
        revision: "6c70a469fa0e7731664bbcd177ebfcc8"
    }, {
        url: "/_next/static/media/cherry.4eb8eaa8.png",
        revision: "30a0cfb74934f2b28aac3794b80dd7dc"
    }, {
        url: "/_next/static/media/japanese-3017.19e44437.otf",
        revision: "19e44437"
    }, {
        url: "/_next/static/media/lg.955a4bcf.woff2",
        revision: "955a4bcf"
    }, {
        url: "/_next/static/media/lg.a5ca0178.svg",
        revision: "a5ca0178"
    }, {
        url: "/_next/static/media/lg.c950f0b5.woff",
        revision: "c950f0b5"
    }, {
        url: "/_next/static/media/lg.dc565ab5.ttf",
        revision: "dc565ab5"
    }, {
        url: "/_next/static/media/loading.49ca460c.gif",
        revision: "49ca460c"
    }, {
        url: "/_next/static/media/logo.35253d5b.png",
        revision: "26d97d6a9692c36b7c4b4d4d333cc76c"
    }, {
        url: "/_next/static/nI4AOizXoFINg0IQEHyKv/_buildManifest.js",
        revision: "91e41d67d34287e6db7dc18f4fe9fa14"
    }, {
        url: "/_next/static/nI4AOizXoFINg0IQEHyKv/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/android-chrome-192x192.png",
        revision: "5a6cc08271d6c7fa286a8f790f09e07d"
    }, {
        url: "/android-chrome-256x256.png",
        revision: "cd2181a606bc300e4eac29295a169161"
    }, {
        url: "/apple-touch-icon-114x114.png",
        revision: "1678640968458fc3539dce4799422b26"
    }, {
        url: "/apple-touch-icon-120x120.png",
        revision: "fc8899a4ee01d9ce82c021ffeca0dd61"
    }, {
        url: "/apple-touch-icon-144x144.png",
        revision: "f497d31b94b21da2d8c4ffd5ee7214dc"
    }, {
        url: "/apple-touch-icon-152x152.png",
        revision: "b2d808355bb8464afdadce9b92fbbc04"
    }, {
        url: "/apple-touch-icon-180x180.png",
        revision: "3b5a0443fa02c5503f09bc86cec6e8af"
    }, {
        url: "/apple-touch-icon-57x57.png",
        revision: "23d4166aaaf5812aa67a8fe245b55118"
    }, {
        url: "/apple-touch-icon-60x60.png",
        revision: "b7b0e955ee545924725bcf91fda65bcf"
    }, {
        url: "/apple-touch-icon-72x72.png",
        revision: "27298682f21b688843e82aa7f66f99c3"
    }, {
        url: "/apple-touch-icon-76x76.png",
        revision: "11ab47e40aa187aa4f98cf7e1ad49dbe"
    }, {
        url: "/apple-touch-icon.png",
        revision: "3b5a0443fa02c5503f09bc86cec6e8af"
    }, {
        url: "/browserconfig.xml",
        revision: "0f181289d3870795841c7b87e64ef043"
    }, {
        url: "/favicon-16x16.png",
        revision: "9a42db0c76b26c75415fac8c12341afa"
    }, {
        url: "/favicon-32x32.png",
        revision: "efe9bbbcc59a96e38a558103c21388d0"
    }, {
        url: "/icon-192x192.png",
        revision: "53404d18b8ce9036b9f45a5cc45b15d8"
    }, {
        url: "/icon-256x256.png",
        revision: "04074832bab89eac432077a6de91919a"
    }, {
        url: "/icon-384x384.png",
        revision: "6d5439f6fdee9c11de06c6b238c7c17a"
    }, {
        url: "/icon-512x512.png",
        revision: "6182bbba3f2ead3cd36d736f0d11f864"
    }, {
        url: "/manifest.json",
        revision: "1a6d2f1fe1911145083c8f4fd334a7ee"
    }, {
        url: "/mstile-150x150.png",
        revision: "de0dc73f81a27075364f322d15d5b74a"
    }, {
        url: "/safari-pinned-tab.svg",
        revision: "f4d93ed91cd3a3a42b03945e1661377a"
    }, {
        url: "/sounds/believe-me.mp3",
        revision: "4012dbad2a3a1a610d5bb07b2e7bb6a0"
    }, {
        url: "/sounds/coin.mp3",
        revision: "5196306feaeb737b5bc08e05f95d7360"
    }, {
        url: "/sounds/crash.mp3",
        revision: "10adb7bd539d46575bbf6677d4ecdc3f"
    }, {
        url: "/sounds/dope.wav",
        revision: "005594caff1c0c529bb6d3610b15a721"
    }, {
        url: "/sounds/dream-by-dreams.mp3",
        revision: "2613574e5e4d3109d12bbf23c87ae443"
    }, {
        url: "/sounds/drop-it.mp3",
        revision: "2e8a63ea98ee8e2aa9eba43f33d48f0c"
    }, {
        url: "/sounds/excellent.wav",
        revision: "011f40a653cd0e039b2e6cc3ee746a83"
    }, {
        url: "/sounds/fashion-upbeat.mp3",
        revision: "4f58255ba93324cc3ba721fe065a7097"
    }, {
        url: "/sounds/gamestart.mp3",
        revision: "3035aeaae7e077554883d1ba7762adf9"
    }, {
        url: "/sounds/glass-of-wine.mp3",
        revision: "4e3863f91c7a6eef5365a81e318b34db"
    }, {
        url: "/sounds/glossy.mp3",
        revision: "2c32d5bfdba2c9c15c12f3c87b0bc0d0"
    }, {
        url: "/sounds/good-night.mp3",
        revision: "6736b1f7f0aadf3368634c7d4a695d65"
    }, {
        url: "/sounds/hkmidnight.mp3",
        revision: "3f916a090eb3fc3ca90b8114d357eab4"
    }, {
        url: "/sounds/jazzy.mp3",
        revision: "5f89eca6aa17227bc9bc1d2fd290a043"
    }, {
        url: "/sounds/mega-z.mp3",
        revision: "2e34f09e0d5b3ed2b04303f2e80f756a"
    }, {
        url: "/sounds/mega-z.wav",
        revision: "043a229777a4955640e6d6052f1e6759"
    }, {
        url: "/sounds/nice.wav",
        revision: "01ee7ee289b65a7d1c4edc110b3689e7"
    }, {
        url: "/sounds/oh.wav",
        revision: "77a2c6efa957dec665871b6266e9718c"
    }, {
        url: "/sounds/science-documentary.mp3",
        revision: "a811d6804f99dca61e6733fa12839eed"
    }, {
        url: "/sounds/shutter.mp3",
        revision: "fdf7d5eecb15974396f2fd4d049c2892"
    }, {
        url: "/sounds/shutter.wav",
        revision: "a2ae30717bcf25c3bb4a9d92d37f9ff2"
    }, {
        url: "/sounds/sorriso.mp3",
        revision: "54ef74cdb53d916312769edb2d5d88de"
    }, {
        url: "/sounds/super-hentai.mp3",
        revision: "942ed176bb8b222c9f3ee22fb68b8a8c"
    }, {
        url: "/sounds/super-hentai.wav",
        revision: "a229bfad79b89be7f9e5a98c7b76d351"
    }, {
        url: "/sounds/superdope.mp3",
        revision: "d8d0a03a7e7ee85fd11c6373db13756b"
    }, {
        url: "/sounds/superdope2.mp3",
        revision: "62ce7fd86a8c38a33dc63c14e076b40b"
    }, {
        url: "/sounds/sword.mp3",
        revision: "56cca5696668f8d638d235010c03e68e"
    }, {
        url: "/sounds/synth.mp3",
        revision: "40fc84b1242e609d683a016aed212842"
    }, {
        url: "/sounds/with-you.mp3",
        revision: "e846ec5efe2b20e41920d565c9c350b0"
    }, {
        url: "/sounds/woah.wav",
        revision: "78c42c830bdc73d0a2cea530832da3ad"
    }, {
        url: "/sounds/yesterday.mp3",
        revision: "5023756d70b733c0e8a429477d1517ee"
    }, {
        url: "/videos/account-video.mp4",
        revision: "41baeac4c5bdf91454cf361d1898373c"
    }, {
        url: "/videos/bg-glitch.mp4",
        revision: "2c84c025c749a1ee678d2a9a29f31bc4"
    }, {
        url: "/videos/bg-glitch.webm",
        revision: "1bb2d0464a4c1846185f05ca73be227f"
    }, {
        url: "/videos/events.mp4",
        revision: "37eeb84ad0af7f8b9574f5636ef5505d"
    }, {
        url: "/videos/events.webm",
        revision: "37b889140253c96483b0a142e038a881"
    }, {
        url: "/videos/loading-video.mp4",
        revision: "f2ea2de551d94aa56395a99c478e6072"
    }], {
        ignoreURLParametersMatching: []
    }),
    e.cleanupOutdatedCaches(),
    e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async({request: e, response: s, event: i, state: n})=>s && "opaqueredirect" === s.type ? new Response(s.body,{
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        })]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"),
    e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        })]
    }), "GET"),
    e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute((({url: e})=>{
        if (!(self.origin === e.origin))
            return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute((({url: e})=>{
        if (!(self.origin === e.origin))
            return !1;
        return !e.pathname.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        })]
    }), "GET"),
    e.registerRoute((({url: e})=>!(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        })]
    }), "GET")
}
));

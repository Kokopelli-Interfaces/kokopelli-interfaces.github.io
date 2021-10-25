importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/479a64d5e007095b4e19.js",
    "revision": "c87c7d3abb7e67e5543a04fc5596fcbc"
  },
  {
    "url": "/_nuxt/5431fdb292e187d5da64.js",
    "revision": "23ad79b20d2ffe267ea2b16992cd3677"
  },
  {
    "url": "/_nuxt/9faf66d3c8628b37486c.js",
    "revision": "09357d0cddb795a709aaf9c1a7f30d17"
  },
  {
    "url": "/_nuxt/aab0630dad4e8fe0e604.js",
    "revision": "89f0d09f0150ec4391667aac919e3a39"
  },
  {
    "url": "/_nuxt/b762db6b2edd298c2ff8.js",
    "revision": "b80b3d6aa467f64b3463e80acf49d7ba"
  },
  {
    "url": "/_nuxt/bc388119619632bd5f5c.js",
    "revision": "41972c268093af48e54cb7171489ef8a"
  },
  {
    "url": "/_nuxt/de6d5bc6f9fd7faa6a2a.js",
    "revision": "13ecce36d70e55d8c7211a272af253d0"
  },
  {
    "url": "/_nuxt/e1fc89f67d9aa104d833.js",
    "revision": "331f49bf2bb264ac1b9c04ad6d250f16"
  },
  {
    "url": "/_nuxt/f686ecf7402fc7535bb3.js",
    "revision": "bc21d6c98f99e6ecaec186c47ce29ecc"
  }
], {
  "cacheId": "kokopelli-docs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

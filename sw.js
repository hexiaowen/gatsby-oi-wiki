/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "212fa78a2cdd4e6bcd244d20c3016e65"
  },
  {
    "url": "page-data/empty/page-data.json",
    "revision": "c1dbc06f410c58e03566d0312cbbec72"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "be4437d0b05956435ac07d5f3bd2ed65"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "9275ddfc321c596a704677e27d8916a6"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "ea6bbc57d3ed55b23307e7d0f715ecd4"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "68fdb99afe731aca3f6056d9b20a0cdd"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "fe7082c744d990f91263a037ee91e5c4"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "a8a96b47c1a375b8b206ffdadb44a53f"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "ea4f5dc8e60cc6eed7c145f1dfe2a179"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "a2a04947a021e46cbf088341ec905cd8"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "08a20fe3a51b74e55e738115638ff9e9"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "2c31d8ed231d15122a2a86529123aae1"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "d619f425b3fb79d3ed86a897a351e985"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "91f038523faf17b532da1ad70c74cf45"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "a04718b01d8af873ede14033f324f9cb"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "637c57d6054664cd038b2743f5771107"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "5a1757119a93f06eb9a7f74bff052c8c"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "a66c3eca1afdc74b5acff9d6ec9c861c"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "c09f7f413cb329bcf7211e4955ddcfa1"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "c6eee7263b063974bbdfa17d4de2ae0e"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "fb353294818898fd7b9bd6042fd23aae"
  },
  {
    "url": "page-data/tags/wip/page-data.json",
    "revision": "97acf92bb5af47e05ddba391133ef313"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "85185379d7b5a0514d69a1197f9fa1e2"
  },
  {
    "url": "14-40960e33b3e21b16d863.js"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-db4198bd616a144339ef.js"
  },
  {
    "url": "app-63c631c59f7d9b81427a.js"
  },
  {
    "url": "bab4896a-5da169e2cd5ca97c41d8.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-58a3fcfa70ad9cff9892.js"
  },
  {
    "url": "component---src-pages-404-js-f84dad6b59ccb85fb3f4.js"
  },
  {
    "url": "component---src-pages-pages-js-a0ef3941aee64d068756.js"
  },
  {
    "url": "component---src-pages-settings-tsx-36fe6f80acc8ddd4670f.js"
  },
  {
    "url": "component---src-pages-tags-js-fe4f305071391db5dccc.js"
  },
  {
    "url": "component---src-templates-doc-js-9e9a6a69c40254ca22b0.js"
  },
  {
    "url": "component---src-templates-tags-js-eaf9395c4d674b03254f.js"
  },
  {
    "url": "ec9ecababc84b653bd1e09c41f348f65e406fded-a89ef740b0efb82834bb.js"
  },
  {
    "url": "framework-8334dfb988c170dfb051.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "styles-2d82ac8e3afc0c213061.js"
  },
  {
    "url": "webpack-runtime-f6ccd83e3bed4c5c8b6f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8c3f9001bcc7dcce8e6dbe77c7d23191"
  },
  {
    "url": "styles.206e68b0c97b4c527066.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "67049a60e3b67c28db901d7ce440468a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-63c631c59f7d9b81427a.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

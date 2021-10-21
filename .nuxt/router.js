import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _7c6bac9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _21482af7 = () => interopDefault(import('../pages/_categorySlug/index.vue' /* webpackChunkName: "pages/_categorySlug/index" */))
const _95ff718a = () => interopDefault(import('../pages/_categorySlug/_moduleSlug.vue' /* webpackChunkName: "pages/_categorySlug/_moduleSlug" */))

Vue.use(Router)

const scrollBehavior = function (to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      let position = false

      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      return position
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/:lang(en)?/",
      component: _7c6bac9e,
      name: "index"
    }, {
      path: "/:lang(en)?/:categorySlug",
      component: _21482af7,
      name: "categorySlug"
    }, {
      path: "/:lang(en)?/:categorySlug/:moduleSlug",
      component: _95ff718a,
      name: "categorySlug-moduleSlug"
    }],

    fallback: false
  })
}

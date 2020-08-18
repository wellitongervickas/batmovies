import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9bec2826 = () => interopDefault(import('../pages/favorite.vue' /* webpackChunkName: "pages/favorite" */))
const _0e08ab30 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _66ebbc39 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _56f80a19 = () => interopDefault(import('../pages/styles/index.js' /* webpackChunkName: "pages/styles/index" */))
const _cdd1d7be = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _afe5297c = () => interopDefault(import('../pages/movies/styles.js' /* webpackChunkName: "pages/movies/styles" */))
const _1b7f4a96 = () => interopDefault(import('../pages/sections/login.js' /* webpackChunkName: "pages/sections/login" */))
const _6e57afbc = () => interopDefault(import('../pages/styles/login.js' /* webpackChunkName: "pages/styles/login" */))
const _2238d79b = () => interopDefault(import('../pages/styles/search.js' /* webpackChunkName: "pages/styles/search" */))
const _c8ee8802 = () => interopDefault(import('../pages/movies/_id.vue' /* webpackChunkName: "pages/movies/_id" */))
const _2f540751 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/favorite",
    component: _9bec2826,
    name: "favorite"
  }, {
    path: "/login",
    component: _0e08ab30,
    name: "login"
  }, {
    path: "/search",
    component: _66ebbc39,
    name: "search"
  }, {
    path: "/styles",
    component: _56f80a19,
    name: "styles"
  }, {
    path: "/welcome",
    component: _cdd1d7be,
    name: "welcome"
  }, {
    path: "/movies/styles",
    component: _afe5297c,
    name: "movies-styles"
  }, {
    path: "/sections/login",
    component: _1b7f4a96,
    name: "sections-login"
  }, {
    path: "/styles/login",
    component: _6e57afbc,
    name: "styles-login"
  }, {
    path: "/styles/search",
    component: _2238d79b,
    name: "styles-search"
  }, {
    path: "/movies/:id?",
    component: _c8ee8802,
    name: "movies-id"
  }, {
    path: "/",
    component: _2f540751,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

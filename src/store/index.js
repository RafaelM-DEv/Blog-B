import Vue from 'vue'
import Vuex from 'vuex'

import posts from './module/posts'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      posts
    },

    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

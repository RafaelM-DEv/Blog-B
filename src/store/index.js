import Vue from 'vue'
import Vuex from 'vuex'

import Posts from './module/Posts'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      Posts
    },

    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

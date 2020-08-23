import Vue from 'vue'
import Vuex from 'vuex'

import posts from './module/posts'
import user from './module/user'
import todo from './module/Todo'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      posts,
      user,
      todo
    },

    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

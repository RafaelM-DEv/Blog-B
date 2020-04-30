import api from '../../helper/api'
import handleApi from '../../helper/handleApi'

const state = {
  posts: [],
  post: {}
}

const getters = {
  posts: state => state.posts,
  post: state => state.post
}

const actions = {
  getPosts ({ commit }) {
    handleApi('getPosts', {
      onSuccess ({ data }) {
        commit('setPosts', data)
        return data
      }
    })
  },

  // TODO PASSAR ESSA FUNCTION COM O HANDLE FAZENDO A MESMA VERIFICAÇÃO NO STATE
  getPost ({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      const filtered = state.posts.find(posts => posts.id === id)
      if (filtered) {
        commit('setPost', filtered)
        return resolve({ data: filtered })
      }

      api.getPost(id).then(response => {
        commit('setPost', response.data)
        resolve(response)
      }, error => reject(error))
    })
  },

  deletePost ({ commit }, id) {
    const postindex = state.posts.findIndex(posts => posts.id === id)
    handleApi('deletePost', {
      id: id,
      onSuccess ({ data }) {
        commit('clearPosts', postindex)
        return data
      }
    })
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  },

  setPost (state, post) {
    state.post = post
  },

  clearPosts (state, postindex) {
    state.posts.splice(postindex, 1)
  }

}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}

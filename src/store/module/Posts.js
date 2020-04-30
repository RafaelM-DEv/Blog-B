// import api from '../../helper/api'
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
  GET_POSTS ({ commit }) {
    handleApi('getPosts', {
      onSuccess ({ data }) {
        commit('SET_POSTS', data)
        return data
      }
    })
  },

  GET_POST ({ commit, state }, id) {
    const filtered = state.posts.find(posts => posts.id === id)
    if (filtered) {
      commit('SET_POST', filtered)
      return ({ data: filtered })
    }
  },

  SET_POST ({ commit }, payload) {
    handleApi('createPost', {
      payload,
      onSuccess ({ data }) {
        commit('SET_POSTS', data)
        return data
      },
      onError (erro) {
        console.log(erro)
      }
    }
    )
  },

  UPDATE_POST ({ commit }, payload) {
    handleApi('updatePost', {
      payload,
      onSuccess ({ data }) {
        commit('UPDATE_POST', payload)
        return data
      }
    })
  },

  DELETE_POST ({ commit }, id) {
    const postindex = state.posts.findIndex(posts => posts.id === id)
    handleApi('deletePost', {
      id: id,
      onSuccess ({ data }) {
        commit('DELETE_POST', postindex)
        return data
      }
    })
  }
}

const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  },

  SET_POST (state, post) {
    state.post = post
  },

  UPDATE_POST (state, payload) {
    const postindex = state.posts.findIndex(post => post.id === payload.id)
    state.posts.splice(postindex, 1, payload)
    state.post = payload
  },

  DELETE_POST (state, postindex) {
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

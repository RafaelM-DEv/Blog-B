import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  getPosts () {
    return axios.get('/posts')
  },

  getPost (id) {
    return axios.get(`posts/${id}`)
  },

  deletePost (id) {
    return axios.delete(`posts/${id}`)
  },

  updatePost (id) {
    return axios.put(`posts/${id}`)
  },

  createPost (posts) {
    return axios.post('/posts', posts)
  }
}

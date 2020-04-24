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
  // atualiza os Dados dos Posts
  updatePost (post) {
    return axios.put(`posts/${post.id}`, post)
  },
  // Cria um Post
  createPost (posts) {
    return axios.post('/posts', posts)
  }
}

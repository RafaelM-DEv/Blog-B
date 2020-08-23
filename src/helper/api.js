import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

export default {
  // LISTA TODOS OS POSTS
  getPosts () {
    return axios.get('/posts')
  },
  // ACESSA UM POST
  getPost (id) {
    return axios.get(`posts/${id}`)
  },
  // DELETA UM POSTS
  deletePost (id) {
    return axios.delete(`posts/${id}`)
  },
  // ATUALIZA UM POST
  updatePost (post) {
    return axios.put(`posts/${post.id}`, post)
  },
  // CRIA UM POST
  createPost (posts) {
    return axios.post('/posts', posts)
  },

  // TO-DO List
  getTodos () {
    return axios.get('/todos')
  },

  createTodo (todos) {
    return axios.post('/todos', todos)
  },

  updateTodo (todo) {
    return axios.put(`todos/${todo.id}`, todo)
  },

  deleteTodo (id) {
    return axios.delete(`todos/${id}`)
  }
}

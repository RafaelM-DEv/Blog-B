import handleApi from '../../helper/handleApi'

// meu stado gravado em cache
const state = {
  // o tipo do meu stado, nesse caso vai ser um array
  todos: []
}

// os getters são os que armazenam em cache e usa no meu elemento como uma computada
const getters = {
  // ele recebe o estado como valor
  todos: state => state.todos
}

// os actions são minhas ações dentro do elemento, ela que dispara uma evendo para que
// os dados são gerenciados no meu stado (state)
const actions = {
  getTodos ({ commit }) {
    handleApi('getTodos', {
      onSuccess ({ data }) {
        commit('SET_TODOS', data)
      }
    })
  },

  setTodo ({ commit }, payload) {
    handleApi('createTodo', {
      payload,
      onSuccess ({ data }) {
        commit('SET_TODO', data)
        return data
      },
      onError (error) {
        console.log(error)
      }
    })
  },

  updateTodo ({ commit }, payload) {
    handleApi('updateTodo', {
      payload,
      onSuccess ({ data }) {
        commit('UPDATE_TODO', data)
        return data
      }
    })
  },

  deleteTodo ({ commit }, id) {
    const todoindex = state.todos.findIndex(todos => todos.id === id)
    handleApi('deleteTodo', {
      id: id,
      onSuccess ({ data }) {
        commit('DELETE_TODO', todoindex)
        return data
      }
    })
  }

}

const mutations = {
  SET_TODOS (state, todos) {
    state.todos = todos
  },

  SET_TODO (state, todo) {
    state.todos.push(todo)
    // posso usar o splice também
  },

  UPDATE_TODO (state, payload) {
    const todoindex = state.todos.findIndex(todo => todo.id === payload.id)
    state.todos.splice(todoindex, 1, payload) // deleta o antigo
  },

  DELETE_TODO (state, todoindex) {
    state.todos.splice(todoindex, 1)
  }
}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}

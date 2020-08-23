<template>
  <q-page class="row justify-center">
    <!-- imput -->
    <div class="column col-12 q-px-xl ">
    <div class="row justify-center">
      <div class="col-6 q-mt-lg" >
        <q-input v-model="todo.Text" clearable outlined  label="Adicionar tarefa" >
          <template v-slot:after>
          <q-btn :disable="todo.Text === ''" round dense icon="add" color="white" class="bg-grey-9" @click="onSubmit()" />
          </template>
        </q-input>
      </div>
    </div>
    <!-- list -->
    <div class="q-mt-lg">
      <div class="row justify-center" v-for="(item, index) in todos" :key="index" >
        <div v-if="!item.done" class="col-6 flex shadow-2 justify-between q-my-sm q-py-sm bg-red-6" style="border-radius: 5px;">
          <div class="text-bold self-center q-ml-sm text-white">
            {{ item.Text }}
          </div>
          <!-- buttons -->
          <div class="row" >
            <div>
              <q-btn icon="done" flat dense color="white" class="q-mr-sm" @click="onUpdate(item)"/>
            </div>
            <div>
              <!-- delete button -->
              <q-btn icon="delete_outline" color="white" dense flat class="q-mr-sm" @click="onDelete(item)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="q-mt-lg">
      <div class="row justify-center" v-for="(item, index) in todos" :key="index" >
        <div v-if="item.done" class="col-6 flex shadow-2 justify-between q-my-sm q-py-sm bg-grey-6" style="border-radius: 5px;">
          <div class="text-bold self-center q-ml-sm text-white">
            {{ item.Text }}
          </div>
          <!-- buttons -->
          <div class="row" >
            <div>
              <!-- delete button -->
              <q-btn icon="delete_outline" color="white" dense flat class="q-mr-sm" @click="onDelete(item)"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- done list -->
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  computed: {
    ...mapGetters(['todos'])
  },

  data () {
    return {
      todo: {
        Text: '',
        done: false
      }
    }
  },

  created () {
    this.getTodos()
  },

  methods: {
    ...mapActions(['getTodos', 'setTodo', 'deleteTodo', 'updateTodo']),

    async onSubmit () {
      const response = await this.setTodo(this.todo)
      if (response !== null) {
        this.todo.Text = null
      }
    },

    onUpdate (model) {
      model.done = true
      this.updateTodo(model)
    },

    onDelete (model) {
      this.deleteTodo(model.id)
    }
  }

}
</script>

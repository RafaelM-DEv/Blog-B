<template>
  <!-- V-bind = $ attrs vai receber os atributos que estão na tag html -->
  <!-- is = "tag" vai mudar a tag component de acordo com seu valor -->
  <component  :is="tag"  v-bind="$attrs" :label="label" :id="id" @click="showDialog">
    <q-dialog v-model="dialog" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-red text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete</div>
        </q-card-section>
        <q-card-section class="q-pt-none">Do you really want to delete your post?</q-card-section>
        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn push label="No" v-close-popup />
          <q-btn push color="red" label="Delete" type="Delete" @click="onDelete"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </component>
</template>

<script>
import handleApi from '../helper/handleApi'

export default {
  // os componentes precisão ter uma props
  props: {
    // contem as variaveis que contem valores padrões e ou são obrigatórias
    label: {
      type: String,
      default: 'Delete'
    },

    id: {
      type: [String, Number],
      required: true
    },
    // a tag muda o tipo da marcação html, o padrão é ser um botão
    tag: {
      type: String,
      default: 'q-btn'
    }
  },

  data () {
    return {
      dialog: false
    }
  },

  methods: {
    // metodo onDelete recebe a variavel id do props
    onDelete () {
      const self = this
      // eslint-disable-next-line dot-notation
      handleApi('deletePost', {
        id: self.id,
        onSuccess ({ data }) {
          self.$emit('success', data)
          console.log(data)
        },
        onError (error) {
          self.$emit('error', error)
        }
      }
      )
    },

    // metodo de mostrar o dialog
    showDialog () {
      this.dialog = !this.dialog
    }
  }
}

</script>

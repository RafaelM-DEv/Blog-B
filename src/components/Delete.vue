<template>
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
import { mapActions } from 'vuex'

export default {
  // OS COMPONENTES PRECISÃO TER PROPRIEDADES NAS QUAIS IRÃO RECEBER UM VALOR DE ACORDO COM O SEU TIPO
  props: {
    // CONTEM AS VARIAVEIS QUE POSSUEM SEUS TIPOS
    label: {
      type: String,
      default: 'Delete'
    },

    id: {
      type: [String, Number],
      required: true
    },
    // A TAG MUDA O TIPO DA MARCAÇÃO HTML, O PADRÃO É SER UM BOTÃO NESSE CASO
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
    ...mapActions([
      'DELETE_POST'
    ]),

    async onDelete () {
      try {
        const response = await this.DELETE_POST(this.id)
        this.$emit('success', response)
      } catch (error) {
        this.$emit('error', error)
      }
    },

    showDialog () {
      this.dialog = !this.dialog
    }
  }
}

</script>

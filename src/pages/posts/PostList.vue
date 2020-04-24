<template>
  <q-page>
    <!-- FAZER TODOS OS POST FICAREM NO MESMO TAMANHO USANDO O CLASSE DO QUASAR -->
    <div class="row q-col-gutter-xs q-col-gutter-x-xs justify-center">
      <div class="col-md-5 col-sm-6 col-xs-12 " v-for="(post, index) in response" :key="index">
        <div class="q-pa-sm">
          <q-card class="my-card shadow-2" >
            <q-card-section class="justify-between row" horizontal>
              <q-card-section class="q-pt-md col-6 ">
                <div class="text-overline">{{ post.category }}</div>
                <div class="text-h7 q-mt-sm q-mb-xs ">{{ post.title }}</div>
                <div class="text-caption text-grey word-break">{{ post.description }}</div>
              </q-card-section>
              <q-card-section class="col-5 flex flex-center">
                <q-img width="190px" class="rounded-borders" :src=" post.image " />
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-actions align="left" class="q-pt-sm q-pl-md q-pb-md q-gutter-md" >
              <q-btn push  color="dark" :to="{ name: 'PostShow', params: { id: post.id } }">
                Show
              </q-btn>
              <q-btn push color="dark"  :to="{ name: 'PostEdit', params: { id: post.id } }">
                Edit
              </q-btn>
              <Delete push @success="success" color="dark" :id="post.id" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import handleApi from '../../helper/handleApi'
// os componentes devem ser importados
import Delete from '../../components/Delete'

export default {
  components: {
    Delete
  },

  data () {
    return {
      response: []
    }
  },

  name: 'PostList',
  created () {
    this.fetch()
  },
  methods: {
    success (event) {
      // fazer a pagina recaregar
      this.fetch()
    },

    fetch () {
      const self = this
      handleApi('getPosts', {
        onSuccess ({ data }) {
          self.response = data
          console.log(self.response)
        },
        onError (erro) {
          console.log(erro)
        }
      }
      )
    }
  }
}
</script>

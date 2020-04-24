<template>
  <q-page class="row justify-center">
    <div class="row justify-center q-pb-md q-pt-md fit full-width no-wrap">
      <q-card class="my-card q-pb-md col-6 ">
        <!-- img -->
        <q-img :ratio="16/9" :src="response.image" contain>
          <div class="absolute-bottom text-h6 text-subtitle1 text-center">{{ response.title }}</div>
        </q-img>
        <!-- Category -->
        <div class="q-pl-md q-pt-xs">{{ response.category }}</div>
        <!-- Content -->
        <q-card-section class="q-pb-md" v-html=" response.content " />
        <q-separator />
        <!-- vou colocar um rating no final do post -->
        <div class="q-pt-md" />
      </q-card>
    </div>
    <!-- Buttons stick -->
    <q-page-sticky  position="top-right" :offset="[38, 18]">
      <q-fab v-model="fab1" label="options" icon="add" direction="down" color="dark">
        <q-fab-action label="Back" :to="{ name: 'PostList'}" color="primary" icon="arrow_back" external-label label-position="left"/>
        <q-fab-action label="Edit" color="primary" icon="edit" external-label label-position="left" :to="{ name: 'PostEdit', params: { id: response.id } }"/>
        <Delete @success="success" tag="q-fab-action" external-label label-position="left" color="primary" icon="delete_forever" :id="response.id" />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
import handleApi from '../../helper/handleApi'
import Delete from '../../components/Delete'

export default {
  name: 'PostShow',

  components: {
    Delete
  },

  data () {
    return {
      fab1: false,
      response: []
    }
  },

  created () {
    const self = this
    // eslint-disable-next-line dot-notation
    handleApi('getPost', {
      id: this.$route.params.id,
      onSuccess ({ data }) {
        self.response = data
      },
      onError (error) {
        console.log(error)
      }
    })
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  methods: {
    success (event) {
      this.$router.push({ name: 'PostList' })
    }
  }
}

</script>

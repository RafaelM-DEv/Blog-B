<template>
  <q-page class="row justify-center">
    <div class="row justify-center q-pb-md q-pt-md fit full-width no-wrap">
      <q-card class="my-card q-pb-md col-lg-5 col-md-6 col-sm-9 col-xs-12 ">
        <!-- img -->
        <q-img :ratio="16/9" :src="post.image" contain>
          <div class="absolute-bottom text-h6 text-subtitle1 text-center">{{ post.title }}</div>
        </q-img>
        <!-- Category -->
        <div class="q-pl-md q-pt-xs">{{ post.category }}</div>
        <!-- Content -->
        <q-card-section class="q-pb-md" v-html=" post.content " />
        <q-separator />
        <!--  TODO COLOCAR UM RATING NO FINAL DO POST -->
        <div class="q-pt-md" />
      </q-card>
    </div>
    <!-- Buttons stick -->
    <q-page-sticky  position="bottom-right" :offset="[20, 10]">
      <q-fab v-model="ButtonStick" label="close" external-label label-position="left" icon="add" direction="up" color="dark">
        <q-fab-action label="Back" :to="{ name: 'PostList'}" color="primary" icon="arrow_back" external-label label-position="left"/>
        <q-fab-action label="Edit" color="primary" icon="edit" external-label label-position="left" :to="{ name: 'PostEdit', params: { id: post.id } }"/>
        <Delete @success="success" tag="q-fab-action" external-label label-position="left" color="primary" icon="delete_forever" :id="post.id || ''" />
      </q-fab>
    </q-page-sticky>
    <!-- Buttons stick -->
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Delete from '../../components/Delete'

export default {
  name: 'PostShow',
  data () {
    return {
      ButtonStick: false
    }
  },

  components: {
    Delete
  },

  computed: {
    ...mapGetters(['post']),
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.GET_POST(this.id)
  },

  methods: {
    ...mapActions([
      'GET_POST'
    ]),

    success (event) {
      this.$router.push({ name: 'PostList' })
      this.$q.notify({
        type: 'negative',
        message: 'DELETED'
      })
    }
  }
}

</script>

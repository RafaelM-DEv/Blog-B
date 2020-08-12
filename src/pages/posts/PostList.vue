<template>
  <q-page>
    <div class="row q-col-gutter-xs q-col-gutter-x-xs justify-center q-pt-md">
      <div class=" col-lg-5 col-md-6 col-sm-9 col-xs-12" v-for="(post, index) in posts" :key="index">
        <div class="q-pa-sm">
          <q-card class="my-card shadow-2">
            <q-card-section class="justify-between row" horizontal>
              <q-card-section class="q-pt-md">
                <div class="text-overline">{{ post.category }}</div>
                <div class="text-h7 ">{{ post.title }}</div>
                <div class="text-caption text-grey word-break">{{ post.description }}</div>
              </q-card-section>
              <q-card-section class="col-5 flex flex-center">
                <q-img :ratio="16/13" contain width="190px" class="rounded-borders" :src=" post.image " />
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-actions align="left" class="q-pt-sm q-pl-md q-pb-md q-gutter-md" >
              <q-btn push label="Show" color="dark" :to="{ name: 'PostShow', params: { id: post.id } }" />
              <q-btn push label="Edit" color="dark"  :to="{ name: 'PostEdit', params: { id: post.id } }" />
              <Delete push data-Delete="Delete" @success="success" color="dark" :id="post.id || ''" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Delete from '../../components/Delete'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['posts'])
  },

  components: {
    Delete
  },

  created () {
    this.GET_POSTS()
  },

  methods: {
    ...mapActions([
      'GET_POSTS'
    ]),
    success (event) {
      this.$q.notify({
        type: 'negative',
        message: 'DELETED'
      })
    }
  }
}
</script>

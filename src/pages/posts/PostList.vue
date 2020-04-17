<template>
  <q-page>
    <div class="row q-col-gutter-xs q-col-gutter-x-xs justify-center">
      <div class="col-md-5 col-sm-6 col-xs-12 " v-for="(post, index) in response" :key="index">
        <div id="q-app">
            <div class="q-pa-sm">
              <q-card class="my-card shadow-1" bordered>
                <q-card-section horizontal>
                  <q-card-section class="q-pt-md my-card__style">
                    <div class="text-overline">{{ post.category }}</div>
                    <div class="text-h7 q-mt-sm q-mb-xs">{{ post.title }}</div>
                    <div class="text-caption text-grey" >{{post.description}}</div>
                  </q-card-section>
                  <q-card-section class="col-5 flex flex-center">
                    <q-img class="rounded-borders" :src="post.image" />
                  </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                  <q-btn  push color="dark" :to="{ name: 'PostShow', params: { id: post.id } }">
                    Details
                  </q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.my-card{
   max-width: 550px;
   max-height: 250px;
   min-height: 250px;
}
.my-card__style{
   width: 300px;
   max-height: 190px;
   min-height: 190px;
}
</style>

<script>
import handleApi from '../../helper/handleApi'

export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      response: []
    }
  },
  name: 'PostList',
  created () {
    const self = this
    // eslint-disable-next-line dot-notation
    handleApi('getPosts', {
      onSuccess ({ data }) {
        self.response = data
        console.log(self.response)
      },
      onErro (erro) {
        console.log(erro)
      }
    }
    )
  }
}
</script>

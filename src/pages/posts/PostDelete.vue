<template>
  <q-page>
  <q-banner inline-actions class="text-white bg-red">
   Your Post has been Deleted
    <template v-slot:action>
      <q-btn flat color="white" label="ok" :to="{name: 'PostList'}"/>
    </template>
  </q-banner>
  <div class="row justify-center q-pt-xl">
  <q-img src="https://image.flaticon.com/icons/svg/1632/1632602.svg"
  style="width: 200px; height: 200px;"/></div>
  </q-page>
</template>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 750px;
  min-height: 400px;
}
</style>

<script>
import handleApi from '../../helper/handleApi'

export default {
  name: 'Postdelete',
  data () {
    return {
      response: []
    }
  },

  created () {
    const self = this
    // eslint-disable-next-line dot-notation
    handleApi('deletePost', {
      id: this.$route.params.id,
      onSuccess ({ data }) {
        self.response = data
        console.log(self.response)
      },
      onErro (err) {
        console.log(err)
      }
    }
    )
  }
}
</script>

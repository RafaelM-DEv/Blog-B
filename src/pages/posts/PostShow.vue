<template>
  <q-page class="row justify-center">
    <div class="row justify-center q-pb-md q-pt-md">
      <q-card class="my-card q-pb-md" >
        <q-img :src="response.image" basic class="image_size">
          <div class="absolute-bottom text-h6">
            {{response.title}}
          </div>
        </q-img>
        <div class="q-pl-md q-pt-xs">{{response.category}}</div>
        <!-- content -->
        <q-card-section class="q-pb-md text_align" >{{ response.content }}</q-card-section>
        <q-separator />
        <div class="q-pl-md q-pt-md q-gutter-md row justify-center"></div>
        <!-- dialog de Delete -->
        <div class="q-pa-md q-gutter-sm">
          <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
            <q-card class="bg-red text-white" style="width: 300px">
              <q-card-section>
                <div class="text-h6">Delete</div>
              </q-card-section>
              <q-card-section class="q-pt-none">Do you really want to delete your post?</q-card-section>
              <q-card-actions align="right" class="bg-white text-teal">
                <q-btn push label="No" v-close-popup />
                <q-btn  push color="red" label="Delete" type="Delete" :to="{ name: 'PostDelete', params: {id: response.id } }"/>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <!-- dialog de Delete -->
     </q-card>
    </div>
    <q-page-sticky  position="top-right" :offset="[38, 18]">
      <q-fab v-model="fab1" label="options" icon="add" direction="down" color="dark">
          <q-fab-action :to="{ name: 'PostList'}" color="primary" icon="arrow_back" external-label label-position="left" label="Back"/>
          <q-fab-action  color="primary" icon="edit" external-label label-position="left" label="Edit"/>
          <q-fab-action @click="persistent = true" color="primary" icon="delete_forever">
             <q-tooltip position= "left" content-class="bg-red">delete</q-tooltip>
          </q-fab-action>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<style lang="scss" scoped>
.my-card{
  width: 750px;
  max-width: 750px;
}
.image_size{
 max-height: 300px;
 max-width: 750px;
 }
.text_align{
  text-align: justify;
 }
</style>

<script>
import handleApi from '../../helper/handleApi'

export default {
  name: 'PostShow',
  data () {
    return {
      fab1: false,
      persistent: false,
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
        console.log(self.response)
      },
      onErro (err) {
        console.log(err)
      }
    })
  }
}

</script>

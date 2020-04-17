<template>
  <div class="row justify-center">
    <div class="col-md-7 col-sm-6 col-xs-12 ">
      <div class="q-pa-md q-pt-md form__size" >
          <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
            <!-- Form Title-->
            <q-input filled v-model="post.title" label="Post Title" hint="What is the title of your post?" lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"/>
            <!-- Form Description-->
            <q-input v-model="post.description"  maxlength="100"  filled type="textarea" hint="what's the resume? " counter/>
            <!-- Form content-->
            <q-input v-model="post.content" filled type="textarea" hint="what's the content?" />
            <!-- Form category-->
            <q-select filled v-model="post.category" :options="options" label="Category"
            hint="what is the category of your post?"/>
            <!-- Form image-->
            <q-input v-model="post.image" filled label="Image URL" type="url" hint="what will be the image of your post?" />
            <!-- Form Btn-->
            <div>
              <q-btn label="Create" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
          </q-form>
      </div>
    </div>
      <!-- dialog de Create -->
        <div class="q-pa-md q-gutter-sm">
          <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
            <q-card class="bg-green text-white" style="width: 300px">
              <q-card-section class="q-pt-sm">
                your post was created
              </q-card-section>
              <q-card-actions align="right" class="bg-white text-teal">
                 <q-btn  push color="dark" label="ok" type="ok"
                :to="{ name: 'PostList'}"/>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <!-- dialog de Create -->
  </div>

</template>
<style lang="scss" scoped>
.form__size{
  width: 750px;
}
</style>

<script>
import handleApi from '../../helper/handleApi'

export default {
  data () {
    return {
      post: {
        category: '',
        title: '',
        description: '',
        image: '',
        content: ''
      },
      options: [
        'Games', 'News', 'Tecnology'
      ],
      persistent: false
    }
  },

  methods: {
    onSubmit () {
      handleApi('createPost', {
        payload: this.post,
        onSuccess ({ data }) {
          self.response = data
          console.log(self.response)
        },
        onErro (erro) {
          console.log(erro)
        }
      }
      )
      this.persistent = true
    },

    onReset () {
      this.post.url = null
      this.post.text = null
      this.post.title = null
      this.post.resume = null
      this.post.category = null
    }
  }
}
</script>

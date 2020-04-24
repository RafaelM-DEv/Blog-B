<template>
  <div class="row justify-center">
    <div class="col-md-7 col-sm-6 col-xs-12 ">
      <div class="q-pa-md q-pt-md form__size" >
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Form Title-->
          <q-input filled v-model="post.title"  :value="response.title" label="Title" hint="What is the title of your post?" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <!-- Form Description-->
          <q-input v-model="post.description" maxlength="100"  filled type="textarea" hint="what's the resume? " counter/>
          <!-- EDITOR content-->
          <q-editor v-model="post.content" toolbar-bg="grey-6" toolbar-text-color="white" toolbar-toggle-color="red-5" min-height="5rem" />
          <!-- Form category-->
          <q-select filled v-model="post.category" :options="options" label="Category"
          hint="what is the category of your post?"/>
          <!-- Form image-->
          <q-input v-model="post.image" filled label="Image URL" type="url" hint="what will be the image of your post?" />
          <!-- Form Btn-->
          <div>
            <q-btn label="Save" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
          <div>{{response.id}}</div>
        </q-form>
      </div>
    </div>
    <!-- dialog de Create -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-orange text-white" style="width: 300px">
          <q-card-section class="row justify-center q-pt-xl q-pb-md" >
            <q-img src="https://image.flaticon.com/icons/svg/1102/1102457.svg" style="width: 100px; height: 100px;"/>
          </q-card-section>
          <q-card-section class="q-pt-sm row justify-center">
            your post was edited
          </q-card-section>
          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn  push color="dark" label="ok" type="ok" :to="{ name: 'PostList'}"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <!-- dialog de Create -->
  </div>
</template>

<script>
import handleApi from '../../helper/handleApi'
import { extend } from 'quasar'

export default {
  name: 'PostEdit',
  data () {
    return {
      post: {
        id: '',
        category: '',
        title: '',
        description: '',
        image: '',
        content: ''
      },
      response: [],
      options: [
        'Games', 'News', 'Tecnology', 'Life'
      ],
      persistent: false
    }
  },
  // Variaveis computadas escutam as mudanças de uma determinada variavel, ela
  computed: {
    id () {
      return this.$route.params.id || ''
    }
  },

  created () {
    const self = this
    handleApi('getPost', {
      id: this.id,
      onSuccess ({ data }) {
        self.post = extend(true, {}, data)
        console.log(self.post)
      },
      onError (err) {
        console.log(err)
      }
    })
  },

  methods: {
    onSubmit () {
      handleApi('updatePost', {
        payload: this.post,
        onSuccess ({ data }) {
          self.response = data
          console.log(self.response)
        },
        onError (erro) {
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

<style lang="scss" scoped>
.form__size{
  width: 750px;
}
</style>

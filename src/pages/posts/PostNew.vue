<template>
  <div class="row justify-center">
    <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
      <div class="q-pa-md q-pt-md">
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Form Title-->
          <q-input filled v-model="post.title"  maxlength="50" counter label="Post Title" hint="What is the title of your post?" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <!-- Form Description-->
          <q-input v-model="post.description"  maxlength="100"  filled type="textarea" hint="what's the resume? " counter/>
          <!-- Form category-->
          <q-select filled v-model="post.category" :options="options" label="Category" hint="what is the category of your post?"/>
          <!-- Form image-->
          <q-input v-model="post.image" filled label="Image URL" type="url" hint="what will be the image of your post?" />
          <!-- EDITOR content-->
          <q-editor toolbar-bg="grey-10" toolbar-text-color="white" toolbar-toggle-color="red-5" v-model="post.content" min-height="5rem" />
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
       <q-card class="bg-green text-white">
          <q-card-section class="row justify-center q-pt-xl q-pb-md" >
            <q-img :ratio="16/9" contain src="https://image.flaticon.com/icons/svg/2721/2721302.svg" />
          </q-card-section>
          <q-card-section class="q-pt-sm row justify-center">
            your post was created
          </q-card-section>
          <q-card-actions align="center" class="bg-white text-teal">
            <q-btn  push color="dark" label="ok" type="ok" :to="{ name: 'PostList'}"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <!-- dialog de Create -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
        'Games', 'News', 'Tecnology', 'Life', 'To Do'
      ],
      persistent: false
    }
  },
  methods: {
    ...mapActions([
      'SET_POST'
    ]),

    onSubmit () {
      this.SET_POST(this.post)
      this.persistent = true
    },

    onReset () {
      this.post.category = ''
      this.post.title = ''
      this.post.description = ''
      this.post.image = ''
      this.post.content = ''
    }
  }
}
</script>

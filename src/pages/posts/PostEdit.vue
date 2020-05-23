<template>
  <div class="row justify-center">
    <div class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
      <div class="q-pa-md q-pt-md">
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <!-- Form Title-->
          <q-input class="post-title" filled v-model="post.title" maxlength="50" counter :value="post.title" name="Post Title" label="Post Title" hint="What is the title of your post?" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
          <!-- Form Description-->
          <q-input class="post-description" filled v-model="post.description" maxlength="100" name="description" type="textarea" label="Resume" hint="what's the resume? " counter/>
          <!-- Form category-->
          <q-select class="post-category" filled v-model="post.category" :options="options" label="Category" hint="what is the category of your post?"/>
          <!-- Form image-->
          <q-input class="post-image" v-model="post.image" filled label="Image URL" type="url" hint="what will be the image of your post?" />
          <a href="https://www.flaticon.com/br/" target="_blank" style="text-decoration: none;">
          <q-btn class="q-mt-md" color="primary"> Icones</q-btn></a>
          <!-- EDITOR content-->
          <q-editor class="post-content" data-content="content" v-model="post.content" toolbar-bg="grey-10" toolbar-text-color="white" toolbar-toggle-color="red-5" min-height="5rem" />
          <!-- Form Btn-->
          <div>
            <q-btn label="Save" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    </div>
    <!-- dialog de Create -->
    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-orange text-white">
          <q-card-section class="row justify-center q-pt-xl q-pb-md" >
            <q-img :ratio="16/9" contain src="https://image.flaticon.com/icons/svg/1102/1102457.svg" />
          </q-card-section>
          <q-card-section class="q-pt-sm row justify-center">
            your post was edited
          </q-card-section>
          <q-card-actions align="center" class="bg-white text-teal">
            <q-btn data-dialog="ok" push color="dark" label="ok" type="ok" :to="{ name: 'PostList'}"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <!-- dialog de Create -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
      options: [
        'Games', 'News', 'Tecnology', 'Life'
      ],
      persistent: false
    }
  },

  computed: {
    id () {
      return this.$route.params.id
    }
  },

  created () {
    this.fetch()
  },

  methods: {
    ...mapActions([
      'GET_POST',
      'UPDATE_POST'
    ]),

    async fetch () {
      try {
        const { data } = await this.GET_POST(this.id)
        this.post = extend(true, {}, data)
      } catch (error) {
        console.log(error)
      }
    },

    onSubmit () {
      this.UPDATE_POST(this.post)
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

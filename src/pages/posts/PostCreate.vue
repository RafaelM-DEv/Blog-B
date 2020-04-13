<template>
<div class="row justify-center">
   <div class="col-md-3 col-sm-6 col-xs-12 ">
  <div class="q-pa-md q-pt-md" style="max-width: 500px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="Title"
        label="Post Title"
        hint="What is the title of your post?"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

    <q-input
      v-model="text"
      filled
      type="textarea"
      hint="what's the content?"
    />
    <q-select
      filled
      v-model="category"
      :options="options"
      label="Category"
      hint="what is the category of your post?"/>

      <q-input
       v-model="url"
       filled
       label="Image URL" type="url"
       hint="what will be the image of your post?" />

      <div>
        <q-btn label="Create" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
   </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      url: null,
      text: null,
      Title: null,
      accept: false,
      category: null,
      options: [
        'Games', 'News', 'E-sports'
      ]
    }
  },

  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    },

    onReset () {
      this.Title = null
      this.text = null
      this.category = null
      this.url = null
    }
  }
}

</script>

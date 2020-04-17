<template>
  <q-page class="container" >

      <h3>Dashboard</h3>

  </q-page>
</template>

<script>
import handleApi from '../helper/handleApi'

export default {
  name: 'PageIndex',

  created () {
    // eslint-disable-next-line dot-notation
    handleApi('getPosts', {
      onSuccess (response) {
        console.log(response)
      },
      onErro (err) {
        console.log(err)
      }
    })
  }
}
</script>

<template>
  <q-page row class="q-pt-xl " style="text-align: center;">
   <div class="row justify-center q-pt-xl q-pb-md">
     <q-img v-if="authUser()" src="https://image.flaticon.com/icons/svg/1606/1606452.svg" style="width: 200px; height: 200px;"/>
   </div>
   <p>Sorry...Page in construction</p>
  </q-page>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Dashboard',
  data () {
    return {
      user: ''
    }
  },

  created () {
    this.authUser()
  },

  computed: {
  },
  methods: {
    authUser () {
      const user = firebase.auth().currentUser
      return user
    }
  }
}

</script>

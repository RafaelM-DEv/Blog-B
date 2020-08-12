<template>
<q-page class="bg-grey-9 row items-center justify-center q-pt-xl">
    <div class="bg-white shadow-10 col-4 create animate__animated animate__bounceIn">
      <div class="q-pa-md">
        <div class="flex justify-center">
          <h6>Create new Account</h6>
        </div>
        <q-form class="q-gutter-md">
          <!-- Form Title-->
          <q-input class="q-pt-md" filled v-model="name" label="Name" type="text" hint="User Name" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your Name']"/>
          <q-input filled v-model="email" :error='asErrorMail' :error-message='erro' label="E-mail" type="email" hint="User e-mail" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your email']"/>
          <q-input v-model="password" :error='asErrorPass' :error-message='erro' label="Password" filled :type="isPwd ? 'password' : 'text'" hint="User Password">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
        </template>
      </q-input>
          <!-- Form Btn-->
          <div>
            <q-btn label="Create" @click="signup" type="button" color="primary" />
            <q-btn label="login" color="primary" @click="animate" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>
    <q-linear-progress dark :value="1"  color="red" class="q-mt-xs" />
    </div>
</q-page>
</template>

<style lang="scss">
h6 {
  margin: 0;
}
</style>

<script>
import 'animate.css'
import firebase from 'firebase'

export default {
  data () {
    return {
      asErrorPass: false,
      asErrorMail: false,
      erro: '',
      isPwd: true,
      name: '',
      email: '',
      password: ''
    }
  },

  methods: {
    animate () {
      const element = document.querySelector('.create')
      element.classList.add('animate__animated', 'animate__bounceOut')
      element.addEventListener('animationend', () => {
        return this.$router.replace({ name: 'LoginPage' })
      })
    },

    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$q.notify({
            message: 'Welcome' + this.name,
            color: 'positive'
          })
          return this.$router.replace({ name: 'LoginPage' })
        },
        (error) => {
          console.log(error.code)
          if (error.code === 'auth/weak-password') {
            this.asErrorPass = true
            this.asErrorMail = false
            this.erro = error.message
          } else {
            this.asErrorMail = true
            this.erro = error.message
          }
        }
      )
    }
  }
}
</script>

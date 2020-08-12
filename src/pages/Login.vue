<template>
<q-page class="bg-grey-9 bg-grey-9 row items-center justify-center q-pt-xl">
    <div class="bg-white shadow-10 col-4 create animate__animated animate__bounceIn">
      <div class="q-pa-md">
        <div class="flex justify-center">
          <h6>Login</h6>
        </div>
        <q-form class="q-gutter-md">
          <!-- Form Title-->
          <q-input class="q-pt-md" filled v-model="email"  :error='asErrorMail' :error-message='erro' label="E-mail" type="email" hint="User e-mail" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type your email']"/>
          <q-input v-model="password" :error='asErrorPass' :error-message='erro' label="Password" filled :type="isPwd ? 'password' : 'text'" hint="User Password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
          <!-- Form Btn-->
          <div>
            <q-btn label="Login" type="button" color="primary" @click="login" />
            <q-btn label="Create Account" @click="animate" color="primary" flat class="q-ml-sm" :to="{name: 'SignUp'}" />
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
import firebase from 'firebase'
export default {

  data () {
    return {
      asErrorMail: false,
      asErrorPass: false,
      erro: '',
      isPwd: true,
      email: '',
      password: ''
    }
  },

  methods: {
    animate () {
      const element = document.querySelector('.create')
      element.classList.add('animate__animated', 'animate__bounceOut')
      element.addEventListener('animationend', () => {
        this.$router.replace({ name: 'SignUp' })
      })
    },

    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$q.notify({
            message: 'login Success',
            color: 'positive'
          })
          this.$router.replace({ name: 'Dashboard' })
        },

        (error) => {
          console.log(error.code)

          if (error.code === 'auth/wrong-password') {
            this.asErrorPass = true
            this.asErrorMail = false
            this.erro = 'The password is invalid'
          }
          if (error.code === 'auth/invalid-email') {
            this.asErrorMail = true
            this.erro = this.erro ? 'E-mail is invalid' : 'not empty'
          }
          if (error.code === 'auth/too-many-requests') {
            alert('you made a mistake many times this page will reload')
            this.$router.go(0)
          }
        }
      )
    }
  }
}
</script>

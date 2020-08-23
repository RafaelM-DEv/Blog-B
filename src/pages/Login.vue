<template>
<q-page class="area flex content-center">
  <div class="flex fit row justify-center">
   <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
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
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"  class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <!-- Form Buttons-->
          <div>
            <q-btn label="Login" type="button" color="primary" @click="login" />
            <q-btn label="Create Account" @click="animate" color="primary" flat class="q-ml-sm" :to="{name: 'SignUp'}" />
          </div>
        </q-form>
      </div>
      <q-linear-progress dark :value="1"  color="red" class="q-mt-xs" />
    </div>
  </div>
</q-page>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'

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
  created () {
    this.logout()
  },

  methods: {
    ...mapActions([
      'singIn',
      'logout'
    ]),

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
          localStorage.setItem('userBlog', JSON.stringify(user))
          this.singIn()
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
<style lang="scss">
h6 {
  margin: 0;
}

*{
    margin: 0px;
    padding: 0px;
}

.area{
    background: #202020;
    background: -webkit-linear-gradient(to left, #676ffc, #914ec8);
    width: 100%;
    height:100%;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;

}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}

</style>

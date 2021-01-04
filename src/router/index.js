import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import firebase from 'firebase'

Vue.use(VueRouter)
var firebaseConfig = {
  apiKey: 'AIzaSyDEGGmdQfblu2l9NeUDykUgJz6jI-L3VTc',
  authDomain: 'financyify.firebaseapp.com',
  databaseURL: 'https://financyify.firebaseio.com',
  projectId: 'financyify',
  storageBucket: 'financyify.appspot.com',
  messagingSenderId: '742017757321',
  appId: '1:742017757321:web:1674fcec06ed5f91d09658',
  measurementId: 'G-6T6EMTGBYD'
}

firebase.initializeApp(firebaseConfig)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}

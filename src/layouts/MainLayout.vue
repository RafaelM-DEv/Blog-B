<template>
  <q-layout view="HHh LpR fFf">
    <q-header elevated class="bg-primary  text-white">

        <!-- barra de ferramentas do electron -->
      <q-bar v-if="this.$q.electron" class="q-electron-drag">
        <q-icon name="laptop_chromebook" />
        <div>Blog</div>

        <q-space />

        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat icon="crop_square" @click="maximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
      </q-bar>

      <!-- barra de ferramentas da web -->
      <q-toolbar v-if="!loginPage && !signupPage">
        <q-btn dense flat round icon="menu" @click="ShowMenu" />
        <q-toolbar-title>
          <q-btn flat label="HOME" size="20px" :to="{name: 'Dashboard' }"/>
        </q-toolbar-title>
         <q-icon name="img:https://jafapps.com.br/wp-content/uploads/2019/01/jafapps_.png" size="30px" />
         <span class="q-mr-md">Autenticado com Firebase</span>

        {{ user.user.email }}
        <q-btn class="q-ml-md" round>
          <q-avatar size="42px">
            <img src="https://image.flaticon.com/icons/svg/3048/3048127.svg">
          </q-avatar>
          <q-menu>
            <q-btn  label="logout" @click="logout"/>
          </q-menu>
        </q-btn>
        <q-badge class="q-ml-sm" outline color="red" label="v.1.3" />
      </q-toolbar>
      <q-linear-progress dark :value="1"  color="red" class="q-mt-xs" />
    </q-header>

    <!-- drawer-->
    <template v-if="show">
    <q-drawer v-if="!loginPage && !signupPage" show-if-above v-model="left" side="left" behavior="desktop" elevated bordered content-class="bg-grey-3" overlay :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" mini-to-overlay>
      <q-scroll-area class="fit">
        <div>
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :to="{ name: menuItem.name }">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>
    </template>

    <!-- drawer-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'

const menuList = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    label: 'DashBoard',
    separator: true
  },
  {
    name: 'PostList',
    icon: 'view_agenda',
    label: 'Posts',
    separator: false
  },
  {
    name: 'PostCreate',
    icon: 'add_circle_outline',
    label: 'New Posts',
    separator: false
  },
  {
    name: 'todolist',
    icon: 'playlist_add_check',
    label: 'TO-DO List',
    separator: false
  }
]

export default {

  computed: {
    ...mapGetters(['user']),

    loginPage () {
      const loginpage = this.$route.name === 'LoginPage'
      return loginpage
    },

    signupPage () {
      const signupPage = this.$route.name === 'SignUp'
      return signupPage
    }
  },

  data () {
    return {
      show: false,
      left: false,
      drawer: false,
      menuList,
      miniState: true
    }
  },

  created () {
    this.singIn()
    this.isLoged()
  },

  methods: {
    ...mapActions(['singIn']),

    isLoged () {
      if (!this.user) {
        this.$router.replace({ name: 'LoginPage' })
      }
    },

    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace({ name: 'LoginPage' })
      })
    },

    ShowMenu () {
      this.show = !this.show
    },

    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}

</script>

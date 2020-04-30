<template>
  <q-layout view="HHh LpR fFf">
    <q-header elevated class="bg-primary  text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="ShowMenu" />
        <q-toolbar-title>
          <q-btn flat label="Blog" size="20px" :to="{name: 'Dashboard' }"/>
        </q-toolbar-title>
        <q-badge outline color="red" label="v.1.3" />
      </q-toolbar>
      <q-linear-progress dark :value="1"  color="red" class="q-mt-xs" />
    </q-header>
    <!-- drawer-->
    <q-drawer show-if-above v-model="left" side="left" behavior="desktop" elevated bordered content-class="bg-grey-3" overlay :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" mini-to-overlay>
      <q-scroll-area class="fit">
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
      </q-scroll-area>
    </q-drawer>
    <!-- drawer-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    label: 'DashBoard',
    separator: true
  },

  {
    name: 'PostCreate',
    icon: 'add_circle_outline',
    label: 'New Posts',
    separator: false
  },
  {
    name: 'PostList',
    icon: 'view_agenda',
    label: 'Posts',
    separator: false
  }
]

export default {
  data () {
    return {
      left: false,
      drawer: false,
      menuList,
      miniState: true
    }
  },

  methods: {
    ShowMenu () {
      this.left = !this.left
    }
  }
}

</script>

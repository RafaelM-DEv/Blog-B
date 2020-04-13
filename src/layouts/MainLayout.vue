
<template>
  <q-layout view="HHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-btn flat label="Blog" size="20px" to="dash"/>
        </q-toolbar-title>
        v.0.1
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" behavior="desktop" elevated bordered
    content-class="bg-grey-3" overlay>
       <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" :to="menuItem.id">
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

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
const menuList = [
  {
    id: 'dash',
    icon: 'dashboard',
    label: 'DashBoard',
    separator: true
  },
  {
    id: 'post',
    icon: 'view_agenda',
    label: 'Posts',
    separator: false
  },
  {
    id: 'postcreate',
    icon: 'add_circle_outline',
    label: 'New Posts',
    separator: false
  },
  {
    id: 'postview',
    icon: 'pageview',
    label: 'Show Post',
    separator: false
  }
]

export default {
  data () {
    return {
      left: false,
      drawer: false,
      menuList
    }
  }
}

</script>

<template>
   <q-page class="row ">
      <div class="q-mt-lg fit no-wrap row">
        <!-- list -->
        <div class="fit">
        <div id="simpleList" class="text-center">TO-Do List
          <div class="row justify-center" v-for="(item, index) in list" :key="index" >
            <div class="col-10 flex shadow-2 justify-between q-my-sm q-py-sm bg-red-6" style="border-radius: 5px;">
              <div class="text-bold self-center q-ml-sm text-white">{{ item.Text }}</div>
            </div>
          </div>
        </div>
        </div>
        <!-- done list -->
        <div  class="fit">
          <div id="listWithHandle" class="text-center">Done List
            <div class="row justify-center" v-for="(item, index) in doneList" :key="index" >
              <div class="col-10 flex shadow-2 justify-between q-my-sm q-py-sm bg-grey-6" style="border-radius: 5px;">
                <div class="text-bold self-center q-ml-sm text-white">{{ item.Text }}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
   </q-page>
</template>

<script>
import Sortable from 'sortablejs'

export default {

  data () {
    return {
      list: [{ Text: 'lista', done: false }, { Text: 'lista 2', done: false }],
      doneList: [{ Text: 'done list', done: true }]
    }
  },

  mounted () {
    var list = document.getElementById('simpleList')
    var listhandle = document.getElementById('listWithHandle')
    Sortable.create(list, { group: 'test' })

    Sortable.create(listhandle, {
      group: 'test',
      animation: 150
    })
  }
}
</script>

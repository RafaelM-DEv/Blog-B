<template>
  <q-page row class="q-pt-xl flex justify-center " >
    <div class="row justify-center">
      <div class="col-6 ">
        <q-card dark bordered class="bg-grey-9  my-card">
        <q-card-section>
          <div class="text-h6">Nota do Dev</div>
          <div class="text-subtitle2">- Rafael Martins</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          Olá essa é uma versão de testes, ainda não possui relacionamentos de dados com o usuário, toda informação guardada está sendo salva localmente em um arquivo .json, estou trabanhando
          muito pra lançar uma versão melhorada e com banco de dados integrado com relacionamento com o usuário logado. <br>
          Aguardem atualizações!
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          "Nunca desista dos seus sonhos, se falhar não desista, falhar faz parte da jornada. Que a Força esteja com você!"
        </q-card-section>
        </q-card>
    </div>
   </div>

  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['user'])
  },

  created () {
    this.singIn()
  },

  methods: {
    ...mapActions(['singIn'])
  }

}

</script>

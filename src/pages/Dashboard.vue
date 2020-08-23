<template>
  <q-page row class="q-pt-xl flex justify-center " >
    <div class="row justify-center">
      <div class="col-6 ">
        <q-card dark bordered class="bg-grey-9  my-card">
        <q-card-section>
          <div class="text-h6">Nota do Dev</div>
          <div class="text-subtitle2">by Rafael Martins</div>
        </q-card-section>
        <q-separator dark inset />
        <q-card-section>
          Obrigrado por usar Meu SPA, ele serviu e ainda serve como um projeto base onde aprendi os primeiros conceitos sobre programação, espero que ele ainda seja utilizado como
          base para futuras aplicações e consultas. Tenho que agradecer aqueles que me ajudaram muito e não deram tudo de mão beijada, me deixaram quebrar a cabeça na teoria e na prática
          e hoje só tenho que agradecer por terem me mostrado o caminho e a oportuinidade.
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

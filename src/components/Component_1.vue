<template>
  <!-- pour toutes compliquation sur cet exercice appeler mathias -->
<section>
  <h1>Composant 1</h1>


  <h1 class="white">Metter à jour le user du store (vuex) au click du bouton</h1>



  <button @click="setUserInVuex">
      Enregistrez dans le store
  </button>

  <h1 class="white">Afficher ici l'utilisateur du store (vuex)</h1>


</section>


</template>

<script>
import { mapState } from 'vuex'

export default {

  computed: {


  },
  methods:{

    //on veut un utilisateur avec un age de 5 ans et le name nicolas
    setUserInVuex(){

    }
}

}
</script>

<style lang="css">
.white{
  color: #FFFFFF;
}
</style>
<template>
 <!--remplisser les infos pour avoir le résultat de la maquette -->
  <section class="Movie" >
    <div class="header">
      <!-- ajout le chemin de l'image après la variable IMG_API pour afficher l'image
           son libélé est poster_path et pour le alt le titre "title"-->
      <img :src="IMG_API + [/*inserer le posterpath retirer (les crochets)*/ ]" :alt="[/*inserer le le titre*/]"/>
      <div class="Movie_info">
        <!-- titre du film -->
       <h3> </h3>
       <!-- avec un v-bind:class fait changer la couleur du background en fonction de la note bleu orange rouge
            tips : utiliser une fonction qui renvoie les différentes class          -->
        <!-- dans le span mettez la note moyenne "vote_average" -->
           <span v-bind:class=""></span>
         </div>

         <div class="Movie_overview">
           <!-- dans le p mettez le résumer "overview" -->
           <p></p>
         </div>
    </div>
  </section>
</template>

<script>


export default {

  data(){
    return{
      IMG_API:  "https://image.tmdb.org/t/p/w1280"
    }
  },

  //vous devez recupérer votre object data
  props : {

  },

  methods:{



    },






}
</script>

<style lang="css">
.Movie{
  width: 300px;
  background-color: #FFFFFF;
  margin: 0.8rem  ;
  padding-bottom: 0.5rem;
  border-radius: 1rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.Movie img{
  width: 100%;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
}
.Movie_info{
  display: flex;

  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 1rem;
}

.Movie_info h3{
  margin: 0;
}

.Movie:hover .Movie_overview{
  visibility: visible;
  transform: translateY(0%);
  border-radius: 1rem;
  transition: transform 0.4s ease-in-out;

}
.Movie_overview{
  /*display: none;*/
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #FFFFFF;
  text-align: justify;
  padding: 1rem;
  transform: translateY(100%);
  visibility: hidden;
  max-height: 100%;


}

.taggreen{
  background-color: greenyellow;
  padding: 0.5em;
  border-radius: 0.35rem;
  color: black;
  font-weight: bold;
}

.tagorange{
  background-color: orange;
  padding: 0.5em;
  border-radius: 0.35rem;
  color: black;
  font-weight: bold;
}

.tagred{
  background-color: indianred;
  padding: 0.5em;
  border-radius: 0.35rem;
  color: black;
  font-weight: bold;
}

</style>

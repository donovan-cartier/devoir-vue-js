<template>
 <!--remplisser les infos pour avoir le résultat de la maquette -->
  <section class="Movie" @click="movieInfos(data.id)">
    <div class="header">
      <img :src="IMG_API + data.poster_path" :alt="data.title">
      <div class="Movie_info">
        <h3> {{data.title}}</h3>

        <!-- avec un v-bind:class fait changer la couleur du background en fonction de la note bleu orange rouge
             tips : utiliser une fonction qui renvoie les différentes class          -->

        <span v-bind:class="setVoteClass(data.vote_average)">{{data.vote_average}}</span>

      </div>

      <div class="Movie_overview">
        <p>{{data.overview}}</p>
      </div>
      <!--      <span>-->
      <!--&lt;!&ndash;        <router-link to="movie/{{id}}"> </router-link>&ndash;&gt;-->
      <!--        En savoir plus :-->
      <!--        </span>-->
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

  props : {
    'data' : Object
  },

  methods:{

    movieInfos(id){
      console.log('cliquer sur le film',id);

    },

    setVoteClass(vote)  {
      if (vote>=8){
        return 'taggreen';
      }else if(vote>=5){
        return  'tagorange';
      }else {
        return 'tagred';
      }
    }

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

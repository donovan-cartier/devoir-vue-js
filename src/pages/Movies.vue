
<template>
  <section class="Movies">
    <!-- Completer pour que la boucle for affiche tout les films
       tips penser à utiliser le components Movie et de le remplir avant
       -->
    <div v-for="item in results" :key="item.id" class="movie_container">
      <Movie class="movies" :data="item" />
    </div>


  </section>
</template>

<script>

import Movie from "@/components/Movie";

export default {


  data(){
    return{
      results:{}
    }
  },

  async created() {

    const rawResponse = await fetch("https:/api.themoviedb.org/3/discover/"+
        "movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1",{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({})
    });
    const content = await rawResponse.json();
    console.log(content);
    this.results = content.results

  },

  methods:{

  },

  components:{
    Movie
  }



}
</script>

<style lang="css">
.Movies{
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(17, 125, 192);
  font-family: Helvetica, sans-serif;
}


</style>

<template>
  <section class="Movies">
<!--     TODO :Completer pour que la boucle for affiche tout les films -->
    <div>
        <Movie/>
    </div>


  </section>
</template>

<script>

import Movie from "@/components/Movie";

export default {


  data(){
    return{

    }
  },

  async created() {

    const rawResponse = await fetch("https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1",{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({})
    });
    const content = await rawResponse.json();
    console.log(content);
    // TODO :récupération du résultat dans une variable du composant

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
  height: 100%;
  font-family: Helvetica, sans-serif;
}


</style>
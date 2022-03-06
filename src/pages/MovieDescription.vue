<template>
<section class="MovieDescription">



</section>
</template>

<script>

export default {

  data(){
    return{

    }
  },

  async created() {
    //* TODO: faire la requete avec l'id en paramètre que l'on recupère du rooting
    // exemple apple api a faire https://api.themoviedb.org/3/movie/414906?api_key=04c35731a5ee918f014970082a0088b1
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

  computed:{

    apiUrl()
    {
      return
    },

  },

  methods:{

  },

}
</script>

<style lang="css">

</style>
<template>
  <div id="app">
    <nav>
      <router-link to="/">HomeView</router-link> |
      <router-link to="/movies">Movies</router-link>
    </nav>
    <Movies/>
  </div>
</template>
<script>




import Movies from "@/pages/Movies";

export default {

  components: {
    Movies
  }
}


</script>
<style lang="scss">
@import "styles/reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

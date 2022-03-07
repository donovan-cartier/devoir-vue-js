<template>
  <div id="app">
    <HomeView/>
    <nav>
      <h1>Vue.js</h1>
      <router-link to="/">HomeView</router-link> |
      <router-link to="/movies">Movies</router-link>
      <p>Réparez cette page !</p>
    </nav>
    <Movies/>
  </div>
</template>
<script>

import HomeView from '@/pages/HomeView.vue';


import Movies from "@/pages/Movies";

export default {


  components: {
    HomeView,
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
  height: 50px;
  background-color: rgb(20, 161, 248);
  box-shadow: 0px 12px rgba(0, 0, 255, .2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  color: white;
  margin-bottom: 50px;
  z-index: 100;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav>p{
  text-align: center;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
  text-decoration: underline;
  margin-right: 1vw;
}
</style>

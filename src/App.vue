<template>
  <div id="app">
    <nav>
      <h1>Vue.js</h1>
      <router-link to="/">HomeView</router-link> |
      <p>Réparez cette page !</p>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {

components:{

}

}


</script>
<style lang="scss">

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
  color: #FFFFFF;
}
</style>

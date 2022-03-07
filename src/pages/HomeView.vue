<template>
  <div class="home">

    <img src="../assets/logo.png" alt="" id="logoVue">

    <Exercice1 />
    <Exercice2/>
    <Exercice3/>

  </div>
</template>

<script>

// @ is an alias to /src
import Exercice1 from '@/components/Exercice1.vue'
import Exercice2 from '@/components/Exercice2.vue'
import Exercice3 from '@/components/Exercice3.vue'


export default {
  name: 'HomeView',

  components: {
    Exercice1,
    Exercice2,
    Exercice3
  }
}
</script>

<style>
html{
    scroll-snap-type: y mandatory;
}

body{
    background-color: rgb(17, 125, 192);
    font-family: Helvetica, sans-serif;
    color: white;
    margin: 0;
    margin-top: 10vh;
}

header{
    height: auto;
    background-color: rgb(20, 161, 248);
    box-shadow: 0px 12px rgba(0, 0, 255, .2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
}

h1{
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
    margin-left: 1vw;
}

header>p{
    text-align: center;
    font-size: 1rem;
    margin: 0;
    font-style: italic;
    text-decoration: underline;
    margin-right: 1vw;
  color: #FFFFFF;
}

.globalFlex{
    display: flex;
    justify-content: center;
}

.exercice1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 40px 40px;
    grid-template-areas:
      ". ."
      ". .";
    margin-top: 1vh;
}

h2{
    margin-top: 2vh;
    margin-left: 1vw;
    text-align: left;
    color: #FFFFFF;
}
.exercice1>div{
    border: 1px white solid;
    border-radius: 5px;
    height: 40vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

#ex1>p{
    text-align: center;
}

#logoVue{
    position: absolute;
    z-index: -2;
    width: 20%;
    left: 40%;
    top: 40%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

</style>
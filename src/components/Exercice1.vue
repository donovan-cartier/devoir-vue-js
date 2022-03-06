<template>
<div>
  

    <h2>Exercice 1 - V-if : maturité des fruits</h2>
    <div class="globalFlex">
        <section class="exercice1">

            <!-- La pomme fonctionne correctement ! -->
            <div id="pomme">
                <img src="../assets/Pomme.png" alt="" class="fruit-image">
                <p v-if="fruits[0].estMur">Mûr</p>
            </div>

            <!-- Affichez l'état de l'ananas. -->
            <div id="ananas">
                <img src="../assets/Ananas.png" alt="" class="fruit-image">
                <p></p>
            </div>

            <!-- Le kiwi n'est pas mure. Comment le montrer ? -->
            <div id="kiwi">
                <img src="../assets/Kiwi.png" alt="" class="fruit-image">
                <p v-if="fruits[2].estMur">Mûr</p>
                <p v-else></p>
            </div>

            <!-- A vous de montrer que la cerise (fruits[3]) n'est pas mure, maintenant. -->
            <div id="cerise">
                <img src="../assets/Cerise.png" alt="" class="fruit-image">
    
            </div>

        </section>
    </div>

   
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
        fruits: [
            {
                name: "Pomme",
                estMur: true,
            },
            {
                name: "Ananas",
                estMur: true,
            },
            {
                name: "Kiwi",
                estMur: false,
            },
            {
                name: "Cerise",
                estMur: false,
            },
        ]
    }
  }
  
}
</script>

<style scoped>

.fruit-image{
    height: 50%;
}

.exercice1>div{
    display: flex;
    flex-direction: column;
}

.exercice1>div>p{
     background-color: rgba(0, 0, 255, .2);
    padding: 10px;
    border-radius: 5px;
}
</style>

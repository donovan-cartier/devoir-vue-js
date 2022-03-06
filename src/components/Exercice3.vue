<template>
<div>
  

    <h2>Exercice 3 - V-onClick : Modifier le nombre de fruits</h2>

    <section>
        <div id="exercice-3">

                    <!-- Ce compteur de fruits fonctionne bien ! -->
                    <div id="pomme">
                        <img src="../assets/Pomme.png" alt="" class="fruit-image">

                        <p>{{fruits[0].nombre}}</p>
                        <button v-on:click="fruits[0].nombre += 1">Ajouter</button>
                    </div>

                    <!-- Le compteur d'ananas n'affiche rien ! Réglez ce soucis, s'il vous plait. -->
                    <div id="ananas">
                        <img src="../assets/Ananas.png" alt="" class="fruit-image">

                        <button v-on:click="fruits[1].nombre += 1">Ajouter</button>
                    </div>

                    <!-- Ajoutez un compteur de kiwis. -->
                    <div id="kiwi">
                        <img src="../assets/Kiwi.png" alt="" class="fruit-image">
 
                    </div>

                    <!-- De même, ajoutez un compteur de cerises, mais qui en enlève 2 à chaque fois. -->
                    <div id="cerise">
                        <img src="../assets/Cerise.png" alt="" class="fruit-image">

                    </div>

        </div>
    </section>
   
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
                couleur: 'Rouge',
                nombre: 0
            },
            {
                name: "Ananas",
                estMur: true,
                couleur: 'Jaune',
                nombre: 5
            },
            {
                name: "Kiwi",
                estMur: false,
                couleur: 'Vert',
                nombre: 15
            },
            {
                name: "Cerise",
                estMur: false,
                couleur: 'Rouge',
                nombre: 7
            },
        ]
    }
  }
  
}
</script>


<style scoped>

#exercice-3{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    height: 100vh;
}

#exercice-3>div{
    background-color: rgba(0, 0, 255, .2);
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fruit-image{
    width: 50%;
    margin-bottom: 10px;
}

</style>
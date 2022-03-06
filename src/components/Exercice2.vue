<template>
<div>
  

    <h2>Exercice 2 - V-for : afficher tous les fruits</h2>

    <section>
        <div id="exercice-2">

                <!-- La liste des fruits est correcte. Rien à modifier là dedans ! -->
                <div id="liste-fruits">
                    <h3>Liste des fruits</h3>
                    <p v-for="fruit in fruits" :key="fruit.name">
                        {{ fruit.name }}
                    </p>
                </div>

                <!-- On aimerait maintenant afficher la couleur des fruits. Inspirez-vous de l'exemple précédent ! -->
                <div id="couleur-fruits">
                    <h3>Couleur des fruits</h3>
                    <p v-for="fruit in fruits" :key="fruit.couleur">

                    </p>
                </div>

                <!-- A vous de jouer pour afficher l'état de maturité des fruits. -->
                <div id="etat-fruits">
                    <h3>Maturité des fruits</h3>

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
                couleur: 'Rouge'
            },
            {
                name: "Ananas",
                estMur: true,
                couleur: 'Jaune'
            },
            {
                name: "Kiwi",
                estMur: false,
                couleur: 'Vert'
            },
            {
                name: "Cerise",
                estMur: false,
                couleur: 'Rouge'
            },
        ]
    }
  }
  
}
</script>


<style scoped>

#exercice-2{
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    height: 100vh;
}

#exercice-2>div{
    background-color: rgba(0, 0, 255, .2);
    padding: 10px;
    border-radius: 5px;
}

</style>
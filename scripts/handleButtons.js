var reponse1 = new Vue({
    el: '.exercice1',
    data: {
      answer: "La réponse est qu'il faut mettre machin truc dans machin chose etc"
    }
  })

$('#rep1').click(function(){
    $('#ans1').toggle()
});
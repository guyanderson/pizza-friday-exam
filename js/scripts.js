function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}






$(document).ready(function(){


  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var inputPizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputSauce = $("input:radio[name=sauceType]:checked").val();
    var input = $("input:radio[name=top1]:checked").val();
    var inputPizzaSize = $("input:radio[name=top2]:checked").val();
    var inputPizzaSize = $("input:radio[name=top3]:checked").val();
    });


});

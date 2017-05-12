function Order(inputPizzaSize, inputSauce) {
  this.pizzaSize = inputPizzaSize;
  this.pizzaSauce = inputSauce;
  this.pizzaTopping = toppingArray;
  console.log(this.pizzaTopping);
}

function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}




$(document).ready(function(){


  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputPizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputSauce = $("input:radio[name=sauceType]:checked").val();
    var toppingArray = [];

    $("input:checkbox[name=topping]:checked").each(function(){
      var inputTopping = $(this).val();
      toppingArray.push(inputTopping);
      newOrder.pizzaTopping = toppingArray;
 // console.log(toppingArray);
    });
    var newOrder = new Order(inputPizzaSize, inputSauce, pizzaTopping);
  });
});

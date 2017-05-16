function Order(inputPizzaSize, inputSauce, toppingArray) {
  this.pizzaSize = inputPizzaSize;
  this.pizzaSauce = inputSauce;
  this.pizzaTopping = toppingArray;
  console.log(this.pizzaTopping);
}

function showHide(show, hide){
   $(show).show();
   $(hide).hide();
}




$(document).ready(function(){


  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var inputPizzaSize = $("input:radio[name=pizzaSize]:checked").val();
    var inputSauce = $("input:radio[name=sauceType]:checked").val();
    var toppingArray = [];
    // debugger

    $("input:checkbox[name=topping]:checked").each(function(){
      var inputTopping = $(this).val();
      toppingArray.push(inputTopping);
 // console.log(toppingArray);
    });
    var newOrder = new Order(inputPizzaSize, inputSauce, toppingArray);
    $("#pizza-size").text(newOrder.pizzaSize);
    $("#pizza-sauce").text(newOrder.pizzaSauce);
  });
});

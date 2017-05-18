function Order(inputPizzaSize, inputSauce, toppingArray, price) {
  this.pizzaSize = inputPizzaSize;
  this.pizzaSauce = inputSauce;
  this.pizzaTopping = toppingArray;
  this.pizzaPrice = price;
}

function showHide(show, hide){
  $(show).show();
  $(hide).hide();
}

Order.prototype.priceCal = function(newOrder){
  if (newOrder.pizzaSize === "Large") {
    newOrder.pizzaPrice = newOrder.pizzaTopping.length * 2 + 16;
  } else if (newOrder.pizzaSize === "Medium") {
    newOrder.pizzaPrice = newOrder.pizzaTopping.length * 1.5 + 14;
  } else if (newOrder.pizzaSize === "Small") {
    newOrder.pizzaPrice = newOrder.pizzaTopping.length * 1 + 10;
  }
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
    });

    var newOrder = new Order(inputPizzaSize, inputSauce, toppingArray);
    $("#pizza-size").text(newOrder.pizzaSize);
    $("#pizza-sauce").text(newOrder.pizzaSauce);
    for(var i = 0; i < newOrder.pizzaTopping.length; i++) {
      $("#toppings").append("<li>"+newOrder.pizzaTopping[i]+"</li>");
    }
    newOrder.priceCal(newOrder);
    $("#pizza-price").text("$"+newOrder.pizzaPrice);

  });
});

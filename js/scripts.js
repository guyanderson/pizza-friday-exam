function showHide(show, hide,){
   $(show).show();
   $(hide).hide();
}






$(document).ready(function(){

  $("form#size").submit(function(event) {
  event.preventDefault();
  });

  $("form#sauce").submit(function(event) {
  event.preventDefault();
  });

  $("form#topping").submit(function(event) {
  event.preventDefault();
  });

});

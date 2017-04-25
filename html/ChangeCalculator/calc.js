$(document).ready(function() {
  $("button").click(function() {

    var firstCost = $("#totalCost").val()
    var cost = Math.round(firstCost).toFixed(2)
    var firstGiven = $("#amountGiven").val();
    var given = Math.round(firstGiven).toFixed(2)
    var change = Math.round(given - cost).toFixed(2);

    document.getElementById('change').innerHTML = "Customer's Change is " + change;

  })
});


/*var singleValues = $( "#single" ).val();
$( "p" ).click(function() {
  $( this ).slideUp();*/

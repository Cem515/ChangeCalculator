$(document).ready(function() {
  $("button").click(function() {

    var cost = $("#totalCost").val();
    var given = $("#amountGiven").val();
    var change =(given - cost).toFixed(2);
    var dollars = Math.floor(given-cost);
    var remainder = (change-cost);
    document.getElementById('change').innerHTML = "Customer's Change is " + change;
    document.getElementById('dollars').innerHTML = "Dollars = "+ dollars;
    alert(remainder);
  })
});


//res = x % y;

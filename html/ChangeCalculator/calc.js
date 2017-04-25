$(document).ready(function() {
  $("button").click(function() {

    var cost = $("#totalCost").val();
    var given = $("#amountGiven").val();
    var change =(given - cost).toFixed(2);

    document.getElementById('change').innerHTML = "Customer's Change is " + change;

  })
});

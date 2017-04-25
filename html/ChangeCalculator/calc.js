$(document).ready(function() {
  $("button").click(function() {

    var cost = $("#totalCost").val();
    var given = $("#amountGiven").val();
    var change =(given - cost).toFixed(2);
    var dollars = Math.floor(given-cost);
    var remainder = ((change-dollars)*100).toFixed(0);
    var quarters = Math.floor(remainder/25).toFixed(0);
    remainder %= 25;
    var dimes = Math.floor(remainder/10).toFixed(0);
    remainder %=10;
    var nickels = Math.floor(remainder/5).toFixed(0);
    remainder %=5;
    var pennies = remainder
    document.getElementById('change').innerHTML = "Customer's Change is " + change;
    document.getElementById('dollars').innerHTML = "Dollars = "+ dollars;
    document.getElementById('quarters').innerHTML = "Quarters = " +quarters;
    document.getElementById('dimes').innerHTML = "Dimes = "+dimes;
    document.getElementById('nickels').innerHTML = "Nickels = "+nickels;
    document.getElementById('pennies').innerHTML = "Pennies = "+pennies;
  })
});


//res = x % y;

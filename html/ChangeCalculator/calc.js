$(document).ready(function() {
      $("button").click(function() {
            //Return Two Inputed Values as Numbers
            var cost = $("#totalCost").val();
            var given = $("#amountGiven").val();

            //Start with Total Change
            var change = (given - cost).toFixed(2);
            //Begin Removing Proper Money Denominations
            var dollars = Math.floor(given - cost);
            var remainder = ((change - dollars) * 100).toFixed(0);
            var quarters = Math.floor(remainder / 25).toFixed(0);
            remainder %= 25;
            var dimes = Math.floor(remainder / 10).toFixed(0);
            remainder %= 10;
            var nickels = Math.floor(remainder / 5).toFixed(0);
            remainder %= 5;
            var pennies = remainder;
            //Output Values to innerHTML

            $("#change").html("Customer's Change is " + change);
            $("#dollars").html("Dollars = " + dollars);
            $("#quarters").html("Quarters = " + quarters);
            $("#dimes").html("Dimes = " + dimes);
            $("#nickels").html("Nickels = " + nickels);
            $("#pennies").html("Pennies = " + pennies);


            // Hover Border Function
            $("#change").hover(function() {
                  $(this).addClass("Hover");},
                  function() {$(this).removeClass("Hover");
                })
                $("#dollars").hover(
                  function() {$(this).addClass("Hover");
                  },
                  function() { $(this).removeClass("Hover");
                  })
                  $("#quarters").hover(
                    function() {$(this).addClass("Hover");
                    },
                    function() {$(this).removeClass("Hover");
                    })
                    $("#dimes").hover(
                      function() {$(this).addClass("Hover");
                      },
                      function() {$(this).removeClass("Hover");
                      })
                      $("#nickels").hover(
                        function() {$(this).addClass("Hover");
                        },
                        function() {$(this).removeClass("Hover");
                        })
                        $("#pennies").hover(
                          function() { $(this).addClass("Hover");
                          },
                          function() {$(this).removeClass("Hover");
                          })
                      })
                  });

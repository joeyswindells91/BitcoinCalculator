


// when calculate button is clicked
 $("#calcinterestrate").click(function() {

//     //text of interest rate paragraph is
$("#interest-rate").text(function(){

     // var current = what is inside of current price input
     var current= parseFloat($("#current-price").val());
     // var timeframe = futureyear input minus current year
     var timeframe = parseFloat($("#future-year").val()) - 2021;
     // var futureprice = what is inside of future price input
     var futureprice = parseFloat($("#future-price").val());

var interestrate = (12 * (Math.pow((futureprice/current), (1 + (12 * timeframe))) -1));


return interestrate.toFixed(2) + "%";
})

});
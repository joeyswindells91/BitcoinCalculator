//total current value

$(".current").change(function() {
  $("#total-current-value").text(function() {
    var result = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());
    // if (isNan(result)) {
    //   alert("only numbers");
    // }
    return "$" + result;
  });


});



// update to include edge cases, decimals, not a number

// monthly contribution

$(".monthly-contribution").change(function() {
  $("#total-contribution").text(function() {
    var total = parseInt($("#bitcoin-contribution").val()) + parseInt($("#stocks-contribution").val()) + parseInt($("#fixedincome-contribution").val()) + parseInt($("#shitcoins-contribution").val()) + parseInt($("#fiat-contribution").val()) + parseInt($("#pokemon-contribution").val()) + parseInt($("#realestate-contribution").val());
    return "$" + total;
  });
});


//end monthly contribution


// allocation column calculation

$(".current").change(function() {
  $("#bitcoin-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#bitcoin-current-value").val()) / total;
    return (percent * 100).toFixed(2) + "%";
    // var result = (percent * 100) + "%";

    // return result.toFixed(2);
  })
})

$(".current").change(function() {
  $("#stocks-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#stocks-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#shitcoins-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#shitcoins-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#fixedincome-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#fixedincome-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})


$(".current").change(function() {
  $("#fiat-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#fiat-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#pokemon-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#pokemon-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#realestate-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#realestate-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

  // //years
  // var years = parseInt($("#input-years").val());

//compound interest calculation

$(".calculate").click(function() {
  $("#bitcoin-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());

    var bitcoin = parseInt($("#bitcoin-current-value").val());
    var compound = bitcoin * Math.pow((1 + 1), (years));
    return "Bitcoin: $" + compound.toFixed(2);
  })
})
// Annual Compound Interest Formula: A = P(1+r/n)^n

// A = the future value of the investment/loan, including interest P = the principal investment amount (the initial deposit or loan amount) r = the annual interest rate (decimal) n = the number of times that interest is compounded per year t = the number of years the money is invested or borrowed for

//bitcoin compound interest


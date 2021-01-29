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



//compound interest calculation
// $(".calculate").click(function() {
//   if (!parseInt($("#input-years").val()) > 0) {
//     $("#future-table").removeClass("future-table")
//     alert("Input year!")
//   };
// })


$(".calculate").click(function() {
  $("#bitcoin-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#bitcoin-expected-interest").val())) * .01;
    var monthly = (parseInt($("#bitcoin-contribution").val()));

    var bitcoin = parseInt($("#bitcoin-current-value").val());
    var compound = (bitcoin * Math.pow((1 + interest), (years))) + (monthly * (Math.pow((1 + interest), years) - 1) / (interest));
    return compound.toFixed(2);
  })
})

//stocks

$(".calculate").click(function() {
  $("#stocks-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#stocks-expected-interest").val())) * .01;

    var stocks = parseInt($("#stocks-current-value").val());
    var compound = stocks * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//shitcoins

$(".calculate").click(function() {
  $("#shitcoins-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#shitcoins-expected-interest").val())) * .01;

    var shitcoins = parseInt($("#shitcoins-current-value").val());
    var compound = shitcoins * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//fixed income

$(".calculate").click(function() {
  $("#fixedincome-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#fixedincome-expected-interest").val())) * .01;

    var fixedincome = parseInt($("#fixedincome-current-value").val());
    var compound = fixedincome * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//fiat

$(".calculate").click(function() {
  $("#fiat-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#fiat-expected-interest").val())) * .01;

    var fiat = parseInt($("#fixedincome-current-value").val());
    var compound = fiat * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//Pokemon

$(".calculate").click(function() {
  $("#pokemon-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#pokemon-expected-interest").val())) * .01;

    var pokemon = parseInt($("#pokemon-current-value").val());
    var compound = pokemon * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//Real Estate

$(".calculate").click(function() {
  $("#realestate-future-value").text(function() {
    //years
    var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#realestate-expected-interest").val())) * .01;

    var realestate = parseInt($("#realestate-current-value").val());
    var compound = realestate * Math.pow((1 + interest), (years));
    return compound.toFixed(2);
  })
})

//Total Future Value


$(".calculate").click(function() {

  if (!parseFloat($("#input-years").val()) > 0) {
    $("#future-table").css("visibility", "hidden");
    alert("Input year!");
  }
  else {
    $(".future-table").css("visibility", "visible");
    $("#total-future-value").text(function() {
      //years

      var total = (parseFloat($("#bitcoin-future-value").text()) + parseFloat($("#stocks-future-value").text()) + parseFloat($("#shitcoins-future-value").text()) + parseFloat($("#fixedincome-future-value").text()) + parseFloat($("#fiat-future-value").text()) + parseFloat($("#pokemon-future-value").text()) + parseFloat($("#realestate-future-value").text()));

      return total.toFixed(2);
    })
  }

  // $(".future-table").css("visibility", "visible");
  // $("#total-future-value").text(function() {
  //   //years

  //   var total = (parseFloat($("#bitcoin-future-value").text()) + parseFloat($("#stocks-future-value").text()) + parseFloat($("#shitcoins-future-value").text()) + parseFloat($("#fixedincome-future-value").text()) + parseFloat($("#fiat-future-value").text()) + parseFloat($("#pokemon-future-value").text()) + parseFloat($("#realestate-future-value").text()));

  //   return total;
  // })
})

// Annual Compound Interest Formula: A = P(1+r/n)^n

// A = the future value of the investment/loan, including interest P = the principal investment amount (the initial deposit or loan amount) r = the annual interest rate (decimal) n = the number of times that interest is compounded per year t = the number of years the money is invested or borrowed for

//bitcoin compound interest


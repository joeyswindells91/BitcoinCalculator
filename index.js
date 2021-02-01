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

  var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#shitcoins-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#pokemon-current-value").val()) + parseInt($("#realestate-current-value").val());

  $("#bitcoin-allocation").text(function() {

    var percent = parseInt($("#bitcoin-current-value").val()) / total;
    return (percent * 100).toFixed(2) + "%";

  })

  $("#stocks-allocation").text(function() {

    var percent = parseInt($("#stocks-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

  $("#shitcoins-allocation").text(function() {

    var percent = parseInt($("#shitcoins-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

  $("#fixedincome-allocation").text(function() {


    var percent = parseInt($("#fixedincome-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

  $("#fiat-allocation").text(function() {


    var percent = parseInt($("#fiat-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

  $("#pokemon-allocation").text(function() {

    var percent = parseInt($("#pokemon-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

  $("#realestate-allocation").text(function() {

    var percent = parseInt($("#realestate-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";

  })

})




//****************************   test for calculate button  **************************/

$(".calculate").click(function() {

  var years = parseInt($("#input-years").val());

  $("#bitcoin-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#bitcoin-expected-interest").val())) * .01;
    var monthly = (parseInt($("#bitcoin-contribution").val()));

    var bitcoin = parseInt($("#bitcoin-current-value").val());
    var compound = (bitcoin * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));

    return compound.toFixed(2);
  })

  $("#stocks-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#stocks-expected-interest").val())) * .01;
    var monthly = (parseInt($("#stocks-contribution").val()));

    var stocks = parseInt($("#stocks-current-value").val());
    var compound = (stocks * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));

    return compound.toFixed(2);
  })

  $("#shitcoins-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#shitcoins-expected-interest").val())) * .01;
    var monthly = (parseInt($("#shitcoins-contribution").val()));

    var shitcoins = parseInt($("#shitcoins-current-value").val());
    var compound = (shitcoins * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));

    return compound.toFixed(2);
  })

  $("#fixedincome-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#fixedincome-expected-interest").val())) * .01;
    var monthly = (parseInt($("#fixedincome-contribution").val()));

    var fixedincome = parseInt($("#fixedincome-current-value").val());
    var compound = (fixedincome * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));
    return compound.toFixed(2);
  })

  $("#fiat-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#fiat-expected-interest").val())) * .01;
    var monthly = (parseInt($("#fiat-contribution").val()));

    var fiat = parseInt($("#fiat-current-value").val());
    var compound = (fiat * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));
    return compound.toFixed(2);
  })

  $("#pokemon-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#pokemon-expected-interest").val())) * .01;
    var monthly = (parseInt($("#pokemon-contribution").val()));

    var pokemon = parseInt($("#pokemon-current-value").val());
    var compound = (pokemon * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));
    return compound.toFixed(2);
  })

  $("#realestate-future-value").text(function() {

    // var years = parseInt($("#input-years").val());
    var interest = (parseInt($("#realestate-expected-interest").val())) * .01;
    var monthly = (parseInt($("#realestate-contribution").val()));

    var realestate = parseInt($("#realestate-current-value").val());
    var compound = (realestate * Math.pow((1 + interest), (years))) + (monthly * ((Math.pow((1 + (interest/12)), (years * 12)) - 1).toFixed(2) / (interest/12)));
    return compound.toFixed(2);
    return compound.toFixed(2);
  })

  if (!parseFloat($("#input-years").val()) > 0) {
    $("#future-table").css("visibility", "hidden");
    alert("Input year!");
  }
  else {
    $(".future-table").css("visibility", "visible");
    $("#results").text(function() {


      var total = (parseFloat($("#bitcoin-future-value").text()) + parseFloat($("#stocks-future-value").text()) + parseFloat($("#shitcoins-future-value").text()) + parseFloat($("#fixedincome-future-value").text()) + parseFloat($("#fiat-future-value").text()) + parseFloat($("#pokemon-future-value").text()) + parseFloat($("#realestate-future-value").text()));

      return "In " + parseInt($("#input-years").val()) + " years, you will have $" + total.toFixed(2);
    })
  }

    $("#bitcoin-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#bitcoin-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#stocks-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#stocks-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#shitcoins-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#shitcoins-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#fixedincome-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#fixedincome-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#fiat-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#fiat-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#pokemon-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#pokemon-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })

    $("#realestate-future-allocation").text(function() {
      var total = parseInt($("#bitcoin-future-value").text()) + parseInt($("#stocks-future-value").text()) + parseInt($("#fixedincome-future-value").text()) + parseInt($("#shitcoins-future-value").text()) + parseInt($("#fiat-future-value").text()) + parseInt($("#pokemon-future-value").text()) + parseInt($("#realestate-future-value").text());

      var percent = parseInt($("#realestate-future-value").text()) / total;
      return (percent * 100).toFixed(2) + "%";

    })
});





// **************************  End test for calculate button *************************/




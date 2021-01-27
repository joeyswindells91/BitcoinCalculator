//total current value

$(".current").change(function() {
  $("#total-current-value").text(function() {
    var result = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());
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
    var total = parseInt($("#bitcoin-contribution").val()) + parseInt($("#stocks-contribution").val()) + parseInt($("#fixedincome-contribution").val()) + parseInt($("#fiat-contribution").val()) + parseInt($("#realestate-contribution").val());
    return "$" + total;
  });
});


//end monthly contribution

// when total current value changes, run the following function

// $(".current").change(function() {
//   $("#bitcoin-allocation").text(function() {
//     var percent = parseInt($("#bitcoin-current-value")).val() / $("#total-current-value"));
//     return percent + "%";
//   })
// })

// the text of bitcoin is equal to the current value of bitcoin divided by the total current value

$(".current").change(function() {
  $("#bitcoin-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#bitcoin-current-value").val()) / total;
    return (percent * 100).toFixed(2) + "%";
    // var result = (percent * 100) + "%";

    // return result.toFixed(2);
  })
})

$(".current").change(function() {
  $("#stocks-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#stocks-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#fixedincome-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#fixedincome-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})


$(".current").change(function() {
  $("#fiat-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#fiat-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})

$(".current").change(function() {
  $("#realestate-allocation").text(function() {
    var total = parseInt($("#bitcoin-current-value").val()) + parseInt($("#stocks-current-value").val()) + parseInt($("#fixedincome-current-value").val()) + parseInt($("#fiat-current-value").val()) + parseInt($("#realestate-current-value").val());

    var percent = parseInt($("#realestate-current-value").val()) / total;

    return (percent * 100).toFixed(2) + "%";
    // return (percent * 100) + "%";
  })
})
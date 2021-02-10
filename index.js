
//*************** */ variable declarations*******************

var currentValues = $(".current");
var currentContributions = $(".monthly-contribution");
var currentAllocations = $(".allocation");
var futureValues = $(".future-value");
var futureAllocations = $(".future-allocation");
var interest = $(".interest");
var total = 0;
var futuretotal = 0;
var futurevaluesarray = [];


// $("#help-box").slideUp();

 $("#bitcoin-help").click(function () {

 $("#help-box").css("display", "block");

 });


//  $("#interest-copy").click(function() {
//   $("#help-box").css("display", "none");
//  });

 $("#close").click(function() {
  $("#help-box").css("display", "none");
 });


$(".current").attr("placeholder", "$0.00");
$(".monthly-contribution").attr("placeholder", "$0.00");
$(".interest").attr("placeholder", "0%");




function NumberEx(input) {
  if (isNaN(input)) {
    return 0;
  }
  return input;
}


//********************* sum function *********************//
function add(array) {

  var sum = 0;


_.each(array, function(element, index) {
  var tempsum = NumberEx(parseFloat(array[index].value));

  sum += tempsum;
})

    total= sum;

    return "$ " + sum.toFixed(2);

}

// ******************* allocation calculation ********************* //

function calculateAllocation(total, current) {

  //using _.each
  var percent = NumberEx(((current / total) * 100).toFixed(2));

  return percent + " %";


}

// ******************** compound interest calculation *********************** //

function compoundCalculation(principal, monthlycont, interestrate, years) {


  var result = (principal * (Math.pow((1 + (interestrate/12)), (12 * years)))) + (monthlycont * (      (Math.pow(  (1 + (interestrate/12))  , ((12 * years)   )      )        -1           )     /            (interestrate/12)     ));


// + (monthlycont * (      (Math.pow(  (1 + (interestrate/12))  , ((12 * years) -  1  )       )                        /            (interestrate/12)     )))


  // monthlycont * (      (Math.pow(  (1 + (interestrate/12))  , ((12 * years) -  1  )       )                        /            (interestrate/12)     )
  // var result = (principal * Math.pow((1 + interestrate), (years))) + (monthlycont * ((Math.pow((1 + (interestrate/12)), (years * 12)) - 1) / (interestrate/12)));

  if (isNaN(result)) {
    result = 0;
  }

  return result.toFixed(2);


};


// **************************** when an input with the class "current" changes ****************//



$(".current").change(function() {

  this.value = parseFloat($(this).val()).toFixed(2);

  // **************** total current value calculation ************************** //

  $("#total-current-value").text(add(currentValues));


  // **************** calculate allocation field ********************************* //
  for (var i = 0; i < currentAllocations.length; i++) {

    var current = parseFloat(currentValues[i].value);

    currentAllocations[i].innerHTML = calculateAllocation(total, current);
  }

  // calculateAllocation(currentAllocations, currentValues);


})


//*********************** */ when monthly contribution field changes ************************** //



$(".monthly-contribution").change(function() {

  this.value = parseFloat($(this).val()).toFixed(2);

  $("#total-contribution").text(add(currentContributions));

})

$("#bitcoin-help").click(function() {

})

// *********************** Calculate Compound Interest ********************** //



$(".calculate").click(function() {

  //********* */ future values calculation

  for (var i = 0; i < futureValues.length; i++) {

    var principal = parseFloat(currentValues[i].value);
    var monthlycont = parseFloat(currentContributions[i].value);
    var interestrate = (parseFloat(interest[i].value)) * .01;
    var years = parseFloat($("#input-years").val());

    var futurenumber = parseFloat(compoundCalculation(principal, monthlycont, interestrate, years));
    futureValues[i].innerHTML = "$ " +  futurenumber;


    // push future values to array and update total future value //
    futurevaluesarray.push(futurenumber);
    futuretotal += futurenumber;
  }

  //*********** */ future sum calculation

  $("#results").text(function() {



    if ($("#input-years").val() === "1") {
      return "In " + $("#input-years").val() + " year, you will have $ " + futuretotal.toFixed(2) + "!";
    }
    return "In " + $("#input-years").val() + " years, you will have $ " + futuretotal.toFixed(2) + "!";
  });

  //***************** */ future allocations ************************** //

  // for (var i = 0; i < futureAllocations.length; i++) {
    for (var i = 0; i < futureAllocations.length; i++) {

      var current = futurevaluesarray[i];
      var total = parseFloat(futuretotal);

      futureAllocations[i].innerHTML = calculateAllocation(total, current);
    }

  // reset future total

  futuretotal = 0;
  futurevaluesarray = [];


})



function calcInterestRate(currentprice, futureprice, years) {

  var result = (12 * (Math.pow((futureprice/currentprice), (1/(12 * years))) -1)) * 100;


  return result.toFixed(3);

};
// // interest rate help page//


var bitcoinrate = 0;
var inputyears = 0;

$("#interest-calculate").click(function() {
  // $("#interest-result").innerHTML = "hello world";
  var current = parseFloat($("#interest-current-price").val());
  var future =  parseFloat($("#interest-future-price").val());
  var years = (parseFloat($("#interest-year").val())) - 2021;

  var result = calcInterestRate(current, future, years);
  bitcoinrate = result;
  inputyears = years


  $("#final-result").html("The average annual interest rate is " + result + "% over " + years + " year(s)");


  // $("#interest-result").innerHTML = "AHH SHEET";
  // $("#interest-result").innerHTML = calcInterestRate(current, future, years);
});

$("#interest-copy").click(function() {
  $("#bitcoin-expected-interest").val(bitcoinrate);
  // $("#input-years").val(inputyears);
})

$("#years-copy").click(function() {
  $("#input-years").val(inputyears);
})

bitcoinrate = 0;



// ******************** bitcoin price update ************************ //

var btn = document.querySelector("button");
var btcPriceDisplay = document.querySelector("#btcPrice");
var currSymbol = "USD";
var	currencyDesc = document.querySelector("#currencyDesc");


function myFunction() {
  setInterval(function(){

    var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
     if(XHR.readyState == 4 && XHR.status == 200){
       var data = JSON.parse(XHR.responseText);
        price = data.bpi.USD.rate;
        symbol = data.bpi[currSymbol].code;
        desc = data.bpi.USD.description;
        btcPriceDisplay.innerText = "1 Bitcoin = $" + price;
        currncySymbol.innerText =  currSymbol;
        currencyDesc.innerText = desc;
       }
    }
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    XHR.open("GET", url);
    XHR.send();


  }, 100);
}

myFunction();

// btn.addEventListener("click", function(){
//   var XHR = new XMLHttpRequest();

//   XHR.onreadystatechange = function(){
//      if(XHR.readyState == 4 && XHR.status == 200){
//        var data = JSON.parse(XHR.responseText);
//         price = data.bpi.USD.rate;
//         symbol = data.bpi[currSymbol].code;
//         desc = data.bpi.USD.description;
//         btcPriceDisplay.innerText = price;
//         currncySymbol.innerText =  currSymbol;
//         currencyDesc.innerText = desc;
//        }
//     }
//     var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//     XHR.open("GET", url);
//     XHR.send();

//   });


// {"time":{"updated":"Feb 9, 2021 23:32:00 UTC","updatedISO":"2021-02-09T23:32:00+00:00","updateduk":"Feb 9, 2021 at 23:32 GMT"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"46,492.2339","description":"United States Dollar","rate_float":46492.2339},"GBP":{"code":"GBP","symbol":"&pound;","rate":"33,654.2403","description":"British Pound Sterling","rate_float":33654.2403},"EUR":{"code":"EUR","symbol":"&euro;","rate":"38,362.1369","description":"Euro","rate_float":38362.1369}}}
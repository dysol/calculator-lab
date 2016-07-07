$(document).ready(function() {
  console.log('jQuery ready');

/****************** BASIC CALCULATOR *********************/
var calcBtn = $('#basic-calc'),
    answer = $('#basic-answer-alert');

calcBtn.on('click', function() {
  //get num1 and num2 and operator input
  var num1 = $('#basic-num-1').val(),
      num2 = $('#basic-num-2').val(),
      operator = $('#basic-operation').val();

  answer.text(eval(num1 + "" + operator + "" + num2)); //WHY HARMFUL!!
});

/****************** TRIP *********************/

$('#trip-calc').on('click', function() {
  var miles = $('#trip-distance').val(),
      mpg = $('#trip-mpg').val(),
      cost = $('#trip-cost').val(),
      speed = $('#trip-speed').val();

  if (speed < 60) {
    $('#trip-answer-alert').text(eval(miles / (mpg * cost)));
  }else {
    $('#trip-answer-alert').text(eval(miles / (mpg - (speed - 60) * 2) * cost));
  }
  //console.log(miles, mpg, cost, speed);
});

/****************** BMI *********************/

$('#bmi-calc').on('click', function() {
  var mass = $('#bmi-mass').val(),
      height = $('#bmi-height').val();

  //1kg = 2.20462 pounds, 1m = 39.3701 inches
  //( Weight in Pounds / ( Height in inches x Height in inches ) ) x 703
  $('#bmi-answer-alert').text(eval( (mass * 2.20462) / ( (height * 39.3701) * (height * 39.3701) ) ) * 703);
});





});

$(document).ready(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();
  var q1 = parseInt($("input:checkbox[name=question1]:checked").val());
  var q2 = parseInt($("input:checkbox[name=question2]:checked").val());
  var q3 = parseInt($("input:checkbox[name=question1]:checked").val());
  var result = q1 + q2 + q3;
  console.log(result);

  if (result >= 9) {
    $('#answer1').show();
    $('.questions').hide();
  } else if (result >=6) {
    $('#answer2').show();
    $('.questions').hide();
  } else {
    $('#answer3').show();
    $('.questions').hide();
  }

  });
});

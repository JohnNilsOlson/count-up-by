$(document).ready(function() {
  $("form#count").submit(function(event) {
    $("li").remove();
    event.preventDefault();

    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());

    if (Number.isInteger(countTo) === false || Number.isInteger(countBy) === false) {
      alert("Please enter a number!");
    } else if (Math.sign(countTo) === -1 || Math.sign(countBy) === -1)  {
      alert("Please enter a positive number!");
    } else if (countBy > countTo) {
      alert("Please enter a larger number above!");
    } else {
        for (i = 0; i <= countTo; i += countBy) {
          $("#output").append("<li>" + i + "</li>")
      }
    }
  });
});
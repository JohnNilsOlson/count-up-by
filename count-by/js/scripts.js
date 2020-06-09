$(document).ready(function() {
  $("form#count").submit(function(event) {
    event.preventDefault();
    const countTo = parseInt($("input#countTo").val());
    const countBy = parseInt($("input#countBy").val());

    for (i = 1; i <= countTo; i += countBy) {
      if (Number.isInteger(countTo) && Number.isInteger(countBy)) {
        $("#output").append("<li>" + i + "</li>");
      } else {
        alert("Enter a number!");
      }
    }

  });
});

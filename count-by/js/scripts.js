function triangle (side1,side2,side3) {
  let result;
if (side1 === side2 && side2 === side3) {
 result = "equilateral";
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
 result = "isosceles";
} else if (side1 !== side2 && side2 !== side3 && side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  result = "scalene";
} else {
  result = "not triangle";
  }
  return result;
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    let answer = triangle(side1,side2,side3);
    $(".output").text(answer);
    $(".output").show();
  });
  });

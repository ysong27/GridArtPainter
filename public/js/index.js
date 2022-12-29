import newCanvas from "./canvas.js"


$(document).ready(function () {
  // new canvas
  var dimension = $("#dimensions-select").val();
  newCanvas(dimension, dimension);

  // on refresh button click
  $("#refresh-button").on("click", function () {
    var dimension = $("#dimensions-select").val();
    newCanvas(dimension, dimension);
  });

  // on selecting dimension size
  $("#dimensions-select").on("change", function () {
    var dimension = $("#dimensions-select").val();
    newCanvas(dimension, dimension);
  });

});


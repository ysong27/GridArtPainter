import newCanvas from "./canvas.js"


$(document).ready(function () {

  // draw a new canvas
  var dimension = $("#dimensions-select").val();
  newCanvas(dimension, dimension);

  // on selecting dimensions, draw a new canvas
  $("#dimensions-select").on("change", function () {
    var dimension = $("#dimensions-select").val();
    newCanvas(dimension, dimension);
  });
  
  // on clicking refresh button, draw a new canvas
  $("#refresh-button").on("click", function () {
    var dimension = $("#dimensions-select").val();
    newCanvas(dimension, dimension);
  });

});


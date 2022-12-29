import { paintBlockOnClick, clearPaintBlockOnDoubleClick } from "./block.js";

function newCanvas(row, col) {
    var canvas = createCanvas(row, col);
    displayCanvas(canvas);
    paintBlockOnClick();
    clearPaintBlockOnDoubleClick();
}

function createCanvas(row, col) {
    var canvas = "<div>";
    var canvas_row = "";
    for (var i = 0; i < col; i++) {
        canvas_row += `<div class="block"></div>`;
    }
    for (var j = 0; j < row; j++) {
        canvas += `<div class="grid-row">${canvas_row}</div>`;
    }
    canvas += "</div>";
    return canvas;
}

function displayCanvas(canvas) {
    $("#canvas").html(canvas);
}


export default newCanvas;

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


function paintBlockOnClick() {
$(".block").on("click", function () {
    var colorCode = $("#palette").val();
    $(this).css("background-color", colorCode);
});
}

function clearPaintBlockOnDoubleClick() {
$(".block").on("dblclick", function () {
    $(this).css("background-color", "white");
});
}

export default newCanvas;
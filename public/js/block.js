
// click to paint a block
function paintBlockOnClick() {
    $(".block").on("click", function () {
        var colorCode = $("#palette").val();
        $(this).css("background-color", colorCode);
    });
}

// double click to remove paint from a block (paint the block white)
function clearPaintBlockOnDoubleClick() {
    $(".block").on("dblclick", function () {
        $(this).css("background-color", "white");
    });
}

export { paintBlockOnClick, clearPaintBlockOnDoubleClick }
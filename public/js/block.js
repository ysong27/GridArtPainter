
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

export { paintBlockOnClick, clearPaintBlockOnDoubleClick }
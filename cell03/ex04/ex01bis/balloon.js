let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];


$("#balloon").click(function () {

    size += 10;

    if (size > 420) {
        size = 200;
    }

    colorIndex++;

    if (colorIndex > 2) {
        colorIndex = 0;
    }

    $("#balloon").css("width", size + "px");
    $("#balloon").css("height", size + "px");
    $("#balloon").css("background-color", colors[colorIndex]);

});


$("#balloon").mouseleave(function () {

    if (size > 200) {
        size -= 5;
    }

    colorIndex--;

    if (colorIndex < 0) {
        colorIndex = 2;
    }

    $("#balloon").css("width", size + "px");
    $("#balloon").css("height", size + "px");
    $("#balloon").css("background-color", colors[colorIndex]);

});
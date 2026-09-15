const leftInput = document.getElementById("left");
const rightInput = document.getElementById("right");
const operator = document.getElementById("operator");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {

    const left = Number(leftInput.value);
    const right = Number(rightInput.value);

    if (
        leftInput.value === "" ||
        rightInput.value === "" ||
        !Number.isInteger(left) ||
        !Number.isInteger(right) ||
        left < 0 ||
        right < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((operator.value === "/" || operator.value === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (operator.value === "+") {
        result = left + right;
    }
    else if (operator.value === "-") {
        result = left - right;
    }
    else if (operator.value === "*") {
        result = left * right;
    }
    else if (operator.value === "/") {
        result = left / right;
    }
    else if (operator.value === "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);
});


setInterval(function () {
    alert("Please, use me...");
}, 30000);
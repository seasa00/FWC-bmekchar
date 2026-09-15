$("#submit").click(function () {

    const leftValue = $("#left").val();
    const rightValue = $("#right").val();

    const left = Number(leftValue);
    const right = Number(rightValue);

    if (
        leftValue === "" ||
        rightValue === "" ||
        !Number.isInteger(left) ||
        !Number.isInteger(right) ||
        left < 0 ||
        right < 0
    ) {
        alert("Error :(");
        return;
    }

    const operator = $("#operator").val();

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    if (operator === "+") {
        result = left + right;
    }
    else if (operator === "-") {
        result = left - right;
    }
    else if (operator === "*") {
        result = left * right;
    }
    else if (operator === "/") {
        result = left / right;
    }
    else if (operator === "%") {
        result = left % right;
    }

    alert(result);
    console.log(result);

});


setInterval(function () {
    alert("Please, use me...");
}, 30000);
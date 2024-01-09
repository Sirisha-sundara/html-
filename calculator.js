function dis(val) {
    document.getElementById("result").value += val;
}

function myFunction(event) {
    const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];
    if (validChars.includes(event.key)) {
        document.getElementById("result").value += event.key;
    }
}

var cal = document.getElementById("result");
cal.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        console.log("Enter");
        solve();
    }
});

function solve() {
    try {
        let x = document.getElementById("result").value;
        let y = math.evaluate(x);
        document.getElementById("result").value = y;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clr() {
    document.getElementById("result").value = "";

document.addEventListener("keydown", myFunction);
}


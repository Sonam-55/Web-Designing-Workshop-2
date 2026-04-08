function checkNumber() {
    let num = document.getElementById("num").value;

    if (num === "") {
        alert("Please enter a number");
        return;
    }

    if (num % 2 == 0) {
        document.getElementById("result").innerText = "Even Number";
    } else {
        document.getElementById("result").innerText = "Odd Number";
    }
}
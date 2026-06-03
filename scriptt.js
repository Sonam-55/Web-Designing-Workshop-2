function reverseNumber() {
    let num = document.getElementById("num").value;

    let reversed = num.toString().split("").reverse().join("");

    document.getElementById("result").innerText = "Reversed: " + reversed;
}
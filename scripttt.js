let timer;
let timeLeft;

function startTimer() {
    let input = document.getElementById("seconds").value;
    timeLeft = parseInt(input);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number");
        return;
    }

    document.getElementById("display").innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("display").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("display").innerText = "Time's up!";
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}
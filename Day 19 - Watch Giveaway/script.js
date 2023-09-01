document.addEventListener("DOMContentLoaded", function () {
  let totalSeconds = 24 * 60 * 60;

  function updateDisplay(secondsLeft) {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    document.getElementById("hour-one").textContent = Math.floor(hours / 10);
    document.getElementById("hour-two").textContent = hours % 10;

    document.getElementById("minute-one").textContent = Math.floor(
      minutes / 10
    );
    document.getElementById("minute-two").textContent = minutes % 10;

    document.getElementById("second-one").textContent = Math.floor(
      seconds / 10
    );
    document.getElementById("second-two").textContent = seconds % 10;
  }

  function startTimer() {
    const timerInterval = setInterval(function () {
      updateDisplay(totalSeconds);

      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        totalSeconds = 24 * 60 * 60;
        startTimer();
      }
    }, 1000);
  }

  updateDisplay(totalSeconds);
  startTimer();
});

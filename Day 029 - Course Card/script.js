const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let timeLeft = function () {
  const currentDate = new Date().getDay();
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const currentSeconds = new Date().getSeconds();

  let daysLeft = 8 - currentDate;
  let hoursLeft = 23 - currentHours;
  let minutesLeft = 59 - currentMinutes;
  let secondsLeft = 59 - currentSeconds;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft;
  minutes.innerText = minutesLeft;
  seconds.innerText = secondsLeft;
};

setInterval(timeLeft, 1000);

window.addEventListener("DOMContentLoaded", timeLeft);

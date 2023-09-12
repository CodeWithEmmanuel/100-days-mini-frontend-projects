const halloween = new Date("2023-10-31");

const daysEL = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

let timeLeft = function () {
  let day = halloween.getDate();

  let currentDay = new Date().getDate();
  let currentHour = new Date().getHours();
  let currentMinutes = new Date().getMinutes();
  let currentSeconds = new Date().getSeconds();

  let daysLeft = day - currentDay;
  let hoursLeft = 23 - currentHour;
  let minutesLeft = 59 - currentMinutes;
  let secondsLeft = 59 - currentSeconds;

  daysEL.innerText = daysLeft;
  hoursEl.innerText = hoursLeft;
  minutesEl.innerText = minutesLeft;
  secondsEL.innerText = secondsLeft;
};

setInterval(timeLeft, 1000);

window.addEventListener("DOMContentLoaded", timeLeft);

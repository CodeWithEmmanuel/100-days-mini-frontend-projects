const tripDate = document.getElementById("trip-date");
const dateToday = new Date().toDateString();
tripDate.textContent = `${dateToday}`;

const daysEL = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

let timeLeft = function () {
  let day = new Date().getDate();

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

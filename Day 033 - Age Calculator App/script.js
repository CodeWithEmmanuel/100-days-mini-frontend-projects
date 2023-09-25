"use strict";

const dateOfBirth = document.getElementById("date-of-birth");
const checkAgeBtn = document.getElementById("submit-btn");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

let checkAge = function (e) {
  let input = dateOfBirth.value;
  let inputYear = new Date(input).getFullYear();
  let inputMonth = new Date(input).getMonth() + 1;
  let inputDate = new Date(input).getDate();

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentDate = new Date().getDate();

  let yearAge = currentYear - inputYear;
  let monthAge = currentMonth - inputMonth;
  let dayAge;

  let leapYr = function (inputYear) {
    return new Date(inputYear, 1, 29).getDate() === 29;
  };

  if (leapYr(inputYear) === true) {
    console.log("Leaper");
  }

  if (inputYear > currentYear) {
    alert("Date of Birth not Correct");
    return;
  }

  if (currentDate === inputDate) {
    dayAge = 0;
  } else if (yearAge === 0 && monthAge === 0) {
    dayAge = currentDate - inputDate;
  } else if (inputMonth === currentMonth && inputDate > currentDate) {
    yearAge -= 1;
    monthAge = 12 - 1;
    dayAge = inputDate - currentDate;
  } else if (
    leapYr(inputYear) === true &&
    inputMonth === 2 &&
    inputDate === 29
  ) {
    monthAge -= 1;
    dayAge = 29 - 14;
  } else if (
    leapYr(inputYear) === true &&
    inputMonth === 2 &&
    inputDate === 28
  ) {
    monthAge -= 1;
    dayAge = 29 - 13;
  } else if (
    leapYr(inputYear) === true &&
    inputMonth === 3 &&
    inputDate === 1
  ) {
    dayAge = 29 - 16;
  } else {
    dayAge = currentDate;
  }

  yearsEl.innerText = yearAge;
  monthsEl.innerText = monthAge;
  daysEl.innerText = dayAge;

  if (yearsEl.innerText == NaN) {
    alert("Date of Birth not Correct");
  }

  console.log(
    `${yearAge} Years, ${monthAge} months old and ${dayAge} days old`
  );

  e.preventDefault();
};

checkAgeBtn.addEventListener("click", checkAge);

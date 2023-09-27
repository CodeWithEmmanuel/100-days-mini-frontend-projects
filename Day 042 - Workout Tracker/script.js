let displayDate = document.querySelector("#date");

let updateDate = function () {
  let currentDate = new Date();

  displayDate.textContent = `${currentDate.toDateString()} ${currentDate.toLocaleTimeString()}`;
};

setInterval(updateDate, 1000);
updateDate();

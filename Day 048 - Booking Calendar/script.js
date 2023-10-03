const today = document.querySelector("#today-date");

function showDate() {
  let currentDate = new Date().toDateString();
  let sDate = currentDate.split(" ");
  today.textContent = `${sDate[1]}. ${sDate[2]}`;
}

showDate();
